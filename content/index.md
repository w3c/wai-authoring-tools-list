---
title: "List of accessible CMSes, WYSIWYG editors, courseware tools etc"
permalink: /authoring-tools/
ref: /authoring-tools/
lang: en
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
contributors:
 - name: Hidde de Vries
github:
  repository: wai-authoring-tools
  path: content/index.md
---

<style> 
  .mainnav, 
  #controls, 
  .info:first-child,
  .breadcrumb { 
    display: none; 
  }
  #site-header { 
    margin-bottom: 32px; 
  }
  .tools-list {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 32px;
    margin-top: 60px;
  }
  .tools-list-filters {
    font-size: 85%;
  }
  .tools-list-filters legend {
    font-size: 1em;
    margin-bottom: 8px;
  }
  .tools-list-filters label {
    display: block;
    margin-bottom: 4px;
    display: flex;
    align-items: baseline;
  }
  .tools-list-filters label input {
    margin-right: 8px;    
    margin-top: 4px;
  }
  .tool {
    background-color: white;
    padding: 1em;
    border: 1px solid var(--line-grey);
    margin-bottom: 16px;
  }
  .tool h3 {
    margin: 0;
    font-size: 1em;
  }
  .tool h3 + p {
    margin-top: 0;
  }
  .tool h3 span {
    font-size: 75%;
    font-weight: normal;
  }
  .tool-features {
    font-size: .8em;
    padding-left: 0;
    margin-left: 1em;
    margin-bottom: 0;
    columns: 2;
  }
    .tool-features li {
      margin-bottom: 4px;
    }
</style>

<a class="button button-more" href="#" style="float: right"><span>Submit a tool</span></a>

Browse [authoring tools](https://www.w3.org/WAI/standards-guidelines/atag/), filter for accessibility features. 

_Note: tools user submitted, not W3C-endorsed, see [disclaimer](#)_

<div class="tools-list">
  <div class="tools-list-filters">
    <fieldset>
      <legend>Cost</legend>
      <label><input type="radio" name="filter-1"> Free</label>
      <label><input type="radio" name="filter-1"> Paid</label>
    </fieldset>
    <fieldset>
      <legend>Editing experience</legend>
      <label><input type="checkbox"> Works with keyboard</label>
      <label><input type="checkbox"> Buttons have names</label>
      <label><input type="checkbox"> No time limits</label>
      <label><input type="checkbox"> Flashing content optional</label>
      <label><input type="checkbox"> Content text search provided</label>
      <label><input type="checkbox"> Previews accessible</label>
    </fieldset>
    <fieldset>
      <legend>Output</legend>
      <label><input type="checkbox"> Accessible templates available</label>
      <label><input type="checkbox"> Image alternatives enforced</label>
      <label><input type="checkbox"> Video alternatives enforced</label>
      <label><input type="checkbox"> Accessibility features on by default</label>
      <label><input type="checkbox"> Content spell-checked</label>
    </fieldset>
  </div>
  <div class="tools-list-tools">
    <article class="tool">
      <h3>WordPress <span>WordPress Foundation</span></h3>
      <p>WordPress is open source software you can use to create a beautiful website, blog, or app.</p>
      <ul class="tool-features">
        <li>works with keyboard</li>
        <li>spell check</li>
        <li>text alternatives for images</li>
        <li>displays outline</li>
      </ul>
    </article>
    <article class="tool">
      <h3>Drupal <span>Drupal community</span></h3>
      <p>Open-source CMS for ambitious digital experiences that reach your audience across multiple channels.</p>
      <ul class="tool-features">
        <li>text alternatives for images</li>
        <li>displays outline</li>
        <li>accessibility documented</li>
      </ul>
    </article>
    <article class="tool">
      <h3>WordPress <span>Automattic</span></h3>
      <p>WordPress is open source software you can use to create a beautiful website, blog, or app.</p>
      <ul class="tool-features">
        <li>works with keyboard</li>
        <li>spell check</li>
        <li>text alternatives for images</li>
        <li>displays outline</li>
      </ul>
    </article>
  </div>
</div>
