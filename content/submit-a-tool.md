---
title: "Submit an Authoring Tool"
permalink: /authoring-tools-list/submit-a-tool
ref: /authoring-tools-list/submit-a-tool
doc-note-type: draft
lang: en
contributors:
 - name: Steve Lee
github:
  repository: wai-authoring-tools-list
  path: content/submit-a-tool.md
---
<!-- markdownlint-disable no-inline-html -->

<div style="grid-column: 4 / span 4">

<style>
{% include css/styles.css %}
main > header { grid-column: 4 / span 4; }
</style>

<a href="../">Back to List of Authoring tools</a>

<p>The <a href="../">Authoring Tools List</a> shows tools from different vendors, so that people can make informed decisions when they choose an authoring tool.</p>
<p>We'd like to display as many authoring tools as we can, we welcome you to submit yours using this form.</p>
<p>Note: all information will be publicly available as this page generates a Pull Request on our GitHub repository.</p>


<script>
  // TODO this may not be the best place for the handler
function onSubmit(e) {
  e.preventDefault();
  getPreviewSubmission();
};
</script>

<div class="excol-all"></div>


{%- include list-submission-form.liquid type="start"
                                   name="add-authoring-tool"
                                   version="1"
                                   success="/success.html"
                                   failure="/failure.html"
                                   repository="wai-authoring-tools-list"
                                    -%}

  {% include excol.html type="start" open="true" %}
  <h2 id="about-you">About you</h2>
  <p>We'd like to know who you are, so that we can contact you with questions about your submission.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="submitter-name">Name (required)</label>
    <input type="text" id="submitter-name" required>
  </div>
  <div class="field">
    <label for="submitter-email">Email (required)</label>
    <input type="email" id="submitter-email" required>
  </div>
  {% include excol.html type="end" %}

  {% include excol.html type="start" %}
  <h2 id="the-tool">About the tool</h2>
  <p>Provide some information about your tool. We will list this with the tool.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="tool-name">Name (required)</label>
    <input type="text" id="tool-name" name="tool-name" required>
  </div>
  <div class="field">
    <label for="tool-vendor">Vendor (required)</label>
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
    <label for="tool-license">License (required)</label>
    <input type="text" id="tool-license" name="tool-license" required>
  </div>
  <div class="field">
    <legend>Cost model (required)</legend>
    <p>Pick what best describes what using your tool would cost.</p>
    <div class="radio-field">
      <input id="tool-cost-model-free" type="radio" name="tool-cost-model">
      <label for="tool-cost-model-free">Free</label>
    </div>
    <div class="radio-field">
      <input id="tool-cost-model-freemium" type="radio" name="tool-cost-model">
      <label for="tool-cost-model-freemium">Freemium</label>
    </div>
    <div class="radio-field">
      <input id="tool-cost-model-paid" type="radio" name="tool-cost-model">
      <label for="tool-cost-model-paid">Paid</label>
    </div>
  </div>
  <div class="field">
    <label for="tool-version">Version</label>
    <input type="text" id="tool-version">
  </div>
  <div class="field">
    <label for="tool-release-date">Release date (of this version)</label>
    <input type="date" id="tool-release-date">
  </div>
  {% include excol.html type="end" %}


  {% include excol.html type="start" %}
  <h2 id="accessibility-features">Accessibility features</h2>
  <p>Tell us which <a href="../selecting#features">accessibility features</a> are supported by your tool (fully or partially), so that we can list this. If you explain what support looks like, we will also list that information.</p>

  {% include excol.html type="middle" %}
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
  {% include excol.html type="end" %}

  <h2>Submitting your tool</h2>
  <p>Let us know if you have any comments.</p>
  <div class="field">
    <label for="comments">Comments</label>
    <textarea id="comments"></textarea>
  </div>

  <div class="field">
    <label><input type="checkbox" required> The information I provided is correct according to the best of my knowledge.</label>
    <label><input type="checkbox" required> I give permission for my information to be published in the W3C's authoring tools list.</label>
  </div>
  <p>When you submit the form, we will review your tool and add it to the list. This should take 1-4 weeks.</p>
  <div class="field">
    <button type="submit">Submit your tool</button>
  </div>

{%- include list-submission-form.liquid type="end" %}

</div>
