---
doc-note-type: draft
no-sidenav: true
title: 'Submit an authoring tool'
nav_title: 'Submit an authoring tool'
permalink: /tools-list/authoring/submit-a-tool/
lang: en
github:
  repository: wai-authoring-tools-list
  path: content/submit-a-tool.md
ref: /tools-list/authoring/submit-a-tool/
description: # NEW: aa 150ish-character-description for social media   # translate the description
# image: /content-images/wai-authoring-tools-list/social.png  # NEW: image for social media (leave commented out if we don't have a specific one for this resource)
footer: >
  <p><strong>Date:</strong> Updated @@@. @@@.</p>
  <p><strong>Editors:</strong> @@@. <strong>Contributors:</strong> @@@.</p>
  <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide project</a>, co-funded by the European Commission.</p>
---

<!-- markdownlint-disable no-inline-html -->

{% comment %}
To DEBUG set any of the following to true.
NB!! ensure to reset all to false before committing

PREVIEW_BUTTON - add a preview button which allows submission without filling all the required fields
DEBUG_FUNCTION - pass DEBUG to submission function, causes function to return JSON rather than submitting to GitHub
DEBUG_USE_LOCAL_FUNCTION - use local/domain function rather than live one exposed by the Netlify wai-website deploy
{% endcomment %}
{% assign DEBUG_PREVIEW_BUTTON = true %}
{% assign DEBUG_SUBMISSION_FUNCTION = false %}
{% assign DEBUG_USE_LOCAL_SUBMISSION_FUNCTION = false %}

<div style="grid-column: 4 / span 4">

<style>
{% include wai-authoring-tools-list/css/styles.css %}
main > header { grid-column: 4 / span 4; }
</style>

<!-- <a href="../">Back to List of Authoring tools</a> -->

<script>
  // TODO this may not be the best place for the handler
function onSubmit(e) {
  e.preventDefault();
  getPreviewSubmission();
}
</script>

{% capture success_page %}{{ page.dir }}success.html{% endcapture %}
{% capture failure_page %}{{ page.dir }}failure.html{% endcapture %}
{%- include list-submission-form.liquid type="start"
                                   name="submission"
                                   version="1"
                                   success=success_page
                                   failure=failure_page
                                   repository="wai-authoring-tools-list"
                                   onsubmit="onSubmit"
                                   DEBUG_SUBMISSION_FUNCTION=DEBUG_SUBMISSION_FUNCTION
                                   DEBUG_USE_LOCAL_SUBMISSION_FUNCTION=DEBUG_USE_LOCAL_SUBMISSION_FUNCTION -%}

  <p>The <a href="../">Authoring Tools List</a> shows tools from different vendors, so that people can make informed decisions when they choose an authoring tool.</p>
  <p>We'd like to display as many authoring tools as we can, we welcome you to submit yours using this form.</p>
  <p>Note: all information will be publicly available as this page generates a Pull Request on our GitHub repository.</p>

  <h2 id="about-you"><span>1/3</span> About you</h2>
  <p>We'd like to know who you are, so that we can contact you with questions about your submission.</p>

  <div class="field">
    <label for="submitter-name">Your name <span>(Required)</span></label>
    <input type="text" id="submitter-name" name="submitter-name" required>
  </div>
  <div class="field">
    <label for="submitter-email">Email <span>(Required)</span></label>
    <input type="email" id="submitter-email" name="submitter-email" required>
  </div>

  <h2 id="the-tool"><span>2/3</span> About the tool</h2>
  <p>Provide some information about your tool. We will list this with the tool.</p>

  <div class="field">
    <label for="tool-name">Tool name <span>(Required)</span></label>
    <input type="text" id="tool-name" name="tool-name" required>
  </div>
  <div class="field">
    <label for="tool-vendor">Vendor <span>(Required)</span></label>
    <input type="text" id="tool-vendor" name="tool-vendor" required>
  </div>
  <div class="field">
    <label for="tool-description">Description</label>
    <textarea id="tool-description" name="tool-description"></textarea>
  </div>
  <div class="field">
    <label for="tool-statement">Link to accessibility statement</label>
    <input type="text" id="tool-statement" name="tool-statement" placeholder="https://">
  </div>
  <div class="field">
    <label for="tool-license">License <span>(Required)</span></label>
    <input type="text" id="tool-license" name="tool-license" required>
  </div>
  <fieldset class="field fieldset_radio">
    <legend>Cost model <span>(Required)</span></legend>
    <p>Pick what best describes what using your tool would cost.</p>
    <div class="radio-field">
      <input id="tool-cost-model-free" type="radio" name="tool-cost-model" value="free">
      <label for="tool-cost-model-free">Free</label>
    </div>
    <div class="radio-field">
      <input id="tool-cost-model-freemium" type="radio" name="tool-cost-model" value="fremium">
      <label for="tool-cost-model-freemium">Freemium</label>
    </div>
    <div class="radio-field">
      <input id="tool-cost-model-paid" type="radio" name="tool-cost-model" value="paid">
      <label for="tool-cost-model-paid">Paid</label>
    </div>
  </fieldset>
  <div class="field">
    <label for="tool-version">Version</label>
    <input type="text" id="tool-version" name="tool-version">
  </div>
  <div class="field">
    <label for="tool-release-date">Release date (of this version)</label>
    <input type="date" id="tool-release-date" name="tool-release-date">
  </div>

  <h2 id="accessibility-features"><span>3/3</span> Accessibility features</h2>
  <p>Tell us which <a href="../selecting#features">accessibility features</a> are supported by your tool (fully or partially), so that we can list this. If you explain what support looks like, we will also list that information.</p>

  <div class="field">

{% for principle in site.data.features_a %}

  <h3>{{ principle.principle }}</h3>
  {% for guideline in principle.guidelines %}
  {% include report-feature-support.liquid %}
  {% endfor %}
  {% endfor %}

{% for principle in site.data.features_b %}

  <h3>{{ principle.principle }}</h3>
  {% for guideline in principle.guidelines %}
  {% include report-feature-support.liquid %}
  {% endfor %}
  {% endfor %}

  </div>

  <h2>Submitting your tool</h2>
  <p>Let us know if you have any comments.</p>
  <div class="field">
    <label for="comments">Comments</label>
    <textarea id="comments" name="comments"></textarea>
  </div>

  <div class="field">
    <label><input type="checkbox" required> The information I provided is correct according to the best of my knowledge.</label>
    <label><input type="checkbox" required> I give permission for my information to be published in the W3C's authoring tools list.</label>
  </div>
  <p>When you submit the form, we will review your tool and add it to the list. This should take 1-4 weeks.</p>

  <div class="field">
    <button type="submit">Review and submit information</button>
  </div>

{% include list-submission-form.liquid type="end"%}

<script>
{% include wai-authoring-tools-list/js/preview.js %}

{% if DEBUG_PREVIEW_BUTTON %}
(function(){
  const button = document.createElement('button')
  button.innerText = 'Show Preview'
  button.addEventListener('click', e => {
      getPreviewSubmission();
  })
  const form = document.querySelector('[name="submission"]');
  form.insertBefore(button, form.firstChild)
})();
{% endif %}
</script>

<div id="preview-submission-overlay" role="dialog" aria-modal="true" aria-labelledby="preview_title">
<div class="overlay-content">
  <button class="button button-close_preview icon" title="Close preview and go back to the form"><span><svg focusable="false" aria-hidden="true" class="icon-ex-circle "><use xlink:href="/WAI/assets/images/icons.svg#icon-ex-circle"></use></svg> </span></button>
  <h2 id="preview_title">Review your submission</h2>
  <p>Please review the information provided. If you need to correct any information, you can go back to the form and then proceed to your submission.</p>
  <div class="details-preview box"></div>
  <p>{{strings.info_submission}}</p>
  {% include_cached button.html label="Close preview and go back to the form" class="close_preview"%}
  {% include_cached button.html label="Submit information" class="button button-submit_form" %}
</div>
</div>

