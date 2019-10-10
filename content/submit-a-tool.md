---
title: "Submit an authoring tool"
permalink: /authoring-tools/submit-a-tool
ref: /submit-a-tool/
doc-note-type: draft
lang: en
layout: submit-to-list
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
contributors:
 - name: Hidde de Vries
github:
  repository: wai-authoring-tools
  path: content/submit-a-tool.md
---

<div style="grid-column: 2 / -2">

<style>
{% include css/styles.css %}
</style>

<form>
  <p>Note: all information will be publicly available as this page generates a Pull Request on our GitHub repository.</p>
  {% include excol.html type="start" %}
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
  <p>Provide some information about your tool, that we will list with the tool.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="tool-name">Name (required)</label>
    <input type="text" id="tool-name" required>
  </div>
  <div class="field">
    <label for="submitter-vendor">Vendor (required)</label>
    <input type="text" id="submitter-vendor" required>
  </div>
  <div class="field">
    <label for="submitter-description">Description</label>
    <textarea id="submitter-description"></textarea>
  </div>
  <div class="field">
    <label for="submitter-license">License (required)</label>
    <input type="text" id="submitter-license" required>
  </div>
  <div class="field">
    <label for="submitter-version">Version</label>
    <input type="text" id="submitter-version">
  </div>
  <div class="field">
    <label for="submitter-release-date">Release date (of this version)</label>
    <input type="date" id="submitter-release-date">
  </div>
  {% include excol.html type="end" %}


  {% include excol.html type="start" %}
  <h2 id="accessibility-features">Accessibility features</h2>
  <p>Tell us which accessibility features are supported by your tool (fully or partially), so that we can list this. If you explain what support looks like, we will also list that information.</p>

  {% include excol.html type="middle" %}
  <div class="field">

  </div>
  {% include excol.html type="end" %}

  {% include excol.html type="start" %}
  <h2 id="comments">Further comments</h2>
  <p>Let us know if you have any comments.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="comments">Comments</label>
    <textarea id="comments"></textarea>
  </div>
  {% include excol.html type="end" %}


  {% include excol.html type="start" %}
  <h2 id="comments">Submit your tool</h2>

  {% include excol.html type="middle" %}
  <h3>Consent</h3>
  <div class="field">
    <label><input type="checkbox" required> The information I provided is correct according to the best of my knowledge.</label>
    <label><input type="checkbox" required> I give permission for my information to be published in the W3C's authoring tools list.</label>
  </div>
  <h3>Submit</h3>
  <div class="field">
    <button type="submit">Submit your tool</button>
  </div>
  {% include excol.html type="end" %}
</form>

</div>