// @ts-check
import { test, expect } from '@playwright/test'
import { v1 as uuidv1 } from 'uuid'

// Form submission details
// const DOMAIN = 'https://deploy-preview-73--wai-authoring-tools-list.netlify.app'
const DOMAIN = 'localhost:8888'
const URI = `${DOMAIN}/authoring-tools-list/test-form` // NB no trailing /
const FORM_REF = `test-${uuidv1()}`

// GtHub constants
const GH_USER = 'w3c'
const GH_REPO = 'wai-authoring-tools-list'
const GH_URI = `https://github.com/${GH_USER}/${GH_REPO}`

test('Form "test-form" submission should create a Pull Request - slow test', async ({
  page,
}) => {
  // Submit form
  await page.goto(URI)

  // Set up the form
  await page.evaluate(
    (formRef) =>
      (document.querySelector('input[name="form-ref"]').value = formRef),
    FORM_REF
  )
  await page.fill('"Text one:"', 'Text')
  await page.selectOption('"Select:"', { label: 'Option one' })
  await page.check('"Checkbox one:"')
  await page.check('"Grouped checkbox one:"')
  await page.check('"Grouped checkbox two:"')
  await page.check('"Radio one"')

  // watch the HTTP action
  page.on('request', (request) =>
    console.info(
      `U: ${request.url()}`,
      `H: ${JSON.stringify(request.allHeaders(), null, '  ')}`,
      `B: ${JSON.stringify(request.postData(), null, '  ')}`
    )
  )
  page.on('response', (response) => {
    response.body().then((v) => console.info(`B: ${v}`))
    console.info(
      `U: ${response.url()}`,
      `S: ${response.status()}`,
      `H: ${JSON.stringify(response.allHeaders(), null, '  ')}`
    )
  })

  let [response] = await Promise.all([
    page.waitForResponse(
      (response) => /*response.url() === URI &&*/ response.status() === 200
    ),
    page.click('text="Submit"'),
  ])

  /*
  https: await expect(
    page.locator("text=Your form submission has been received.")
  ).toBeVisible();
  await page.click("text=← Back to our site");
  // await expect(page).toHaveURL(URI) for unknown reason this is routing to parentURI in tests

  // Check PR created
  await page.waitForTimeout(20000); // NB this is well flakey but Playwright doesn't provide a way to poll for page updates
  response = await page.goto(`${GH_URI}/pulls`);
  expect(response.ok()).toBeTruthy();

  // Open PR and show file
  // TODO Think about using API rather than UI
  await page.click(`text=/New form submission:.*${FORM_ID}/`);
  await expect(page).toHaveURL(new RegExp(`${GH_URI}/pull/\\d+`));
  await page.click("text=Files changed");
  await expect(page).toHaveURL(new RegExp(`${GH_URI}/pull/\\d+/files`));

  // Check filename name and file contains the form-id
  const fileName = page.locator(
    `div[data-details-container-group="file"] a:has-text("_data/courses/${FORM_ID}.json")`
  );
  await expect(fileName).toBeVisible();
  const fileContent = page.locator(
    `div[data-details-container-group="file"] table`
  );
  await expect(fileContent).toContainText(
    new RegExp(`{[\\s\\S]*"id":\\s*"${FORM_ID}`)
  );
  await expect(fileContent).toContainText(
    new RegExp(`{[\\s\\S]*"submitter-email":\\s*"${SUBMITTER_EMAIL}`)
  );

  // Clean up - user needs to be logged in
  /* /*  await page.click(`text=Conversation`)
    await page.click(`text=Close pull request`)
    await page.click(`text=Delete Branch`)
    */
})
