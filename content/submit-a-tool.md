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
  label { margin-right: 1em; }
</style>

<form>
  <fieldset data-submit-tool-example>
    <legend>Accessible templates available</legend>
    <p>There are accessible templates available. If there is a repository of templates, it is easy to find options that prioritise accessibility</p>
    <label><input type="radio" name="question-1"> Yes</label>
    <label><input type="radio" name="question-1"> No</label>
    <label><input type="radio" name="question-1" data-triggers="partially"> Partially</label>
    <label><input type="radio" name="question-1" data-triggers="not-applicable"> Not applicable / don't know</label>
    <div id="partially" data-trigger hidden>
      <p>You selected <b>partial support</b>. Partial support is better than no support at all!</p>
      <p>Please describe what your support looks like: “accessible templates are available, but it is really hard to find them.”</p>
      <textarea style="width: 100%" rows="4">
      </textarea>
    </div>
    <div id="not-applicable" data-trigger hidden>
      <p>You selected <b>not applicable/don't know</b>. We will not list this criterion for your tool.</p>
    </div>
  </fieldset>
</form>