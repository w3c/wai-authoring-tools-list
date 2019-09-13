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

If you made or know of an authoring tool that has accessibility in mind, submit it here for inclusion in the [List of Authoring Tools](/wai-authoring-tools/authoring-tools).

<style>
  form {
    margin-top: 2em;
  }
  label { margin-right: 1em; }
  .info:first-child,  
  #site-header,
  #main > header,
  #main > p:first-of-type,
  #helpimprove,
  .site-footer,
  section:last-of-type {
    display: none;
  }
</style>

<form>
  <fieldset data-submit-tool-example>
    <legend>Are accessible templates available?</legend>
    <p>There are accessible templates available. If there is a repository of templates, it is easy to find options that prioritise accessibility. <small style="margin-left: 1em;"><em>See also: <a href="https://www.w3.org/TR/ATAG20/#gl_b24">ATAG B.2.4</a></em></small></p>
    <p></p>
    <label><input type="radio" name="question-1"> Yes</label>
    <label><input type="radio" name="question-1"> No</label>
    <label><input type="radio" name="question-1" data-triggers="partially"> Partially</label>
    <label><input type="radio" name="question-1" data-triggers="not-applicable"> Not applicable</label>
    <label><input type="radio" name="question-1" data-triggers="not-sure"> Not sure </label>    
    <div id="partially" data-trigger hidden>
      <p>You selected <b>partial support</b>. Partial support is better than no support at all!</p>
      <p>Please describe what your support looks like: “accessible templates are available, but it is really hard to find them.”</p>
      <label for="description">Description</label>
      <textarea id="description" style="width: 100%" rows="4">
      </textarea>
    </div>
    <div id="not-applicable" data-trigger hidden>
      <p>You selected <b>not applicable</b>. We will not list this criterion for your tool.</p>
    </div>
    <div id="not-sure" data-trigger hidden>
      <p>You selected <b>not sure</b>. We will not list this criterion for your tool.</p>
    </div>
  </fieldset>
</form>