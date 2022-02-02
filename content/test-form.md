---
title: "Submit an authoring tool"
permalink: /authoring-tools-list/test-form
---

{% include netlify-action-form.liquid type="start" name="authoring-tool-submission-1" %}

<div class="field">
  <label>Text:
  <input type="text" name="text">
  </label>
</div>

<div class="field">
  <label>Select:
    <select name="option">
        <option value="">--Please choose an option--</option>
        <option value="one">Option one</option>
        <option value="two">Option two</option>
    </select>
  </label>
</div>

<div class="field">
  <label>Checkbox one:
    <input type="checkbox" name="checkbox-one" value="checked">
  </label>
</div>

<div class="field">
  <label>Checkbox two:
    <input type="checkbox" name="checkbox-two" value="checked">
  </label>
</div>

<div class="field">
<fieldset>
  <legend>Checkbox group:</legend>
    <label>Grouped checkbox one:
      <input type="checkbox" name="checkbox-group" value="cb-one">
    </label>
    <label>Grouped checkbox two:
      <input type="checkbox" name="checkbox-group" value="cb-two">
    </label>
</fieldset>
</div>

<div class="field">
<fieldset>
  <legend>Radio group:</legend>
    <label>Radio one
      <input type="radio" name="radio" value="one">
    </label>

    <label>Radio two
      <input type="radio" name="radio" value="two">
    </label>

</fieldset>
</div>

<button type="submit">Submit</button>

{% include netlify-form.liquid type="end"%}