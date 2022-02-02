// @ts-check
// NETLIFY function to call a github repositry-dispatch Web hook
// when a form submission occurs

const https = require("https");
const { v1: uuidv1 } = require("uuid"); // use v1, timebased so unique each call

function callGitHubWebhook(formData) {
  const reqBody = `{
        "event_type": "netlify-form-submission",
        "client_payload": 
            ${JSON.stringify(formData)}
    }`;

  const options = {
    hostname: "api.github.com",
    port: 443,
    path: "/repos/w3c/wai-course-list/dispatches",
    method: "POST",
    headers: {
      "User-Agent": "W3C WAI Website list",
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_PAT}`,
      "Content-Length": reqBody.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let respBody = "";
      res.on("data", (chunk) => (respBody += chunk.toString()));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: respBody,
        });
      });
    });

    req.on("error", (error) => {
      console.error(error);
      reject({
        statusCode: 500,
        body: `Error calling GitHub action - ${error}`,
      });
    });

    req.write(reqBody);
    req.end();
  });
}

function formEncodedToJSON(formEncoded) {
  const params = new URLSearchParams(formEncoded);
  return Array.from(params.keys()).reduce((result, key) => {
    if (result[key]) {
      result[key] = params.getAll(key); // several checkboxes with same name
      return result;
    }
    result[key] = params.get(key);
    return result;
  }, {});
}

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    console.error(`Invalid http method: ${event.httpMethod}`);
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const contentType = event.headers["content-type"];
  if (contentType !== "application/x-www-form-urlencoded") {
    console.error(`Content incorrect type: ${event.headers["content-type"]}`);
    return { statusCode: 415, body: "Unsupported Media Type" };
  }

  console.info(event.body);
  const params = formEncodedToJSON(event.body);
  params["form-ref"] = params["form-ref"] || uuidv1(); // new id if not in form - v1 date based to avoid dupications
  console.info(JSON.stringify(params, null, "  "));
  return { statusCode: 200, body: "Happy Happy Happy" };

  const res = await callGitHubWebhook(formData);

  const success = res.statusCode >= 200 && res.statusCode <= 299;
  console.info(
    `Form '${formData.meta.name}' ${
      success ? "processed" : "processing failed"
    }, ${res.body}, ${formData.meta.referrer}`
  );

  return res;
};
