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
  <p><strong>Date:</strong> Updated 10 November 2022.</p>
  <p><strong>Editor:</strong> Hidde de Vries. <strong>Contributors:</strong> Steve Lee, Shawn Lawton Henry, Kevin White, and <a href="https://www.w3.org/groups/wg/eowg/participants">EOWG Participants</a>.</p>
  <p>Developed by the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide project</a>, co-funded by the European Commission.</p>

---

<!-- markdownlint-disable no-inline-html -->

{% comment %}
To DEBUG set any of the following to true.
NB!! ensure to reset all to false before committing

PREVIEW_BUTTON - add a preview button which allows submission without filling all the required fields
DEBUG_FUNCTION - pass DEBUG to submission function, causes function to return JSON rather than submitting to GitHub
DEBUG_USE_LOCAL_FUNCTION - use local/domain function rather than live one exposed by the Netlify wai-website deploy
{% endcomment %}
{% assign DEBUG_PREVIEW_BUTTON = false %}
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

  <p>W3C will provide a list of authoring tools with accessibility support in December 2022. The purpose is to provide information on tool accessibility for tool procureres and users choosing an authoring tool. This list shows how tools meet <a href="https://www.w3.org/WAI/standards-guidelines/atag/">Authoring Tool Accessibility Guidelines (ATAG) </a>. This <a href="../">in-progress draft list with fake data</a> gives you an idea of what the list will provide.</p>
  <p>We invite you to use this form to submit your tool to the list. When you submit the form, the data is publicly available on GitHub. We will process it and add it to the list or contact you &mdash; usually within 2 weeks. If you have any questions, please send them to: group-wai-list-authoring-tools@w3.org</p>

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
  <fieldset class="field fieldset_radio">
    <legend>License <span>(Required)</span></legend>
    <p>Pick what best describes the license used by your tool.</p>
    <div class="radio-field">
      <input id="tool-license-free" type="radio" name="tool-license" value="free" required>
      <label for="tool-license-free">Free</label>
    </div>
    <div class="radio-field">
      <input id="tool-license-limited-free" type="radio" name="tool-license" value="limited-free">
      <label for="tool-license-limited-free">Limited free functionality</label>
    </div>
    <div class="radio-field">
      <input id="tool-license-free-trial" type="radio" name="tool-license" value="free-trial">
      <label for="tool-license-free-trial">Time-limited trial</label>
    </div>
    <div class="radio-field">
      <input id="tool-license-subscription" type="radio" name="tool-license" value="subscription">
      <label for="tool-license-subscription">Subscription</label>
    </div>
    <div class="radio-field">
      <input id="tool-license-purchase" type="radio" name="tool-license" value="purchase">
      <label for="tool-license-purchase">One-time purchase</label>
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
  <p>Tell us which accessibility features are supported by your tool (fully or partially), so that we can list this. If you explain what support looks like, we will also list that information.</p>

  <div class="field">

{% for principle in site.data.wai-authoring-tools-list.json.features_a %}

  <h3>{{ principle.principle }}</h3>
  {% for guideline in principle.guidelines %}
  {% include wai-authoring-tools-list/liquid/report-feature-support.liquid %}
  {% endfor %}
  {% endfor %}

{% for principle in site.data.wai-authoring-tools-list.json.features_b %}

  <h3>{{ principle.principle }}</h3>
  {% for guideline in principle.guidelines %}
  {% include wai-authoring-tools-list/liquid/report-feature-support.liquid %}
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
{% include wai-authoring-tools-list/js/tools.js %}

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
