---
title: "[Draft] List of authoring tools"
permalink: /authoring-tools/
ref: /authoring-tools/
lang: en
layout: list-with-filters
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
  @media (min-width: 50em) {
    main  {
      display: contents;
    }
  }
  main > header, 
  .header-sup,
  .box {
    grid-column: 4 / 10;
  }
  .header-sup {
    margin-bottom: 48px;
  }
  #site-header { 
    margin-bottom: 64px; 
  }
  .filters {
    font-size: 85%;
    grid-row-start: 3;
    grid-column: 2 / 4;
  }
  .filters legend {
    font-size: 1em;
    margin-bottom: 8px;
  }
  .filters label {
    display: block;
    margin-bottom: 4px;
    display: flex;
    align-items: baseline;
  }
  .filters label input {
    margin-right: 8px;    
    margin-top: 7px;
    vertical-align: baseline;
  }
  .tools {
    grid-column: 4 / 10;
    grid-row-start: 3;
  }
  .tools h2:first-child {
    margin-top: 0;
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
  .tag {
    text-decoration: none;
    display: inline-block;
    font-weight: 400;
    border-radius: 1em;
    padding: 0 .75em;
    font-size: 75%;
    background-color: var(--cloudy-subtle);
    margin-left: .5em;
    display: none;
  }
  .tag:hover {
    background-color: var(--w3c-blue);
    color: #fff;
  }
</style>

<div class="header-sup">
  <a class="button button-more" href="submit-a-tool" style="float: right"><span>Submit a tool</span></a>
  <p>Browse <a href="https://www.w3.org/WAI/standards-guidelines/atag">authoring tools</a>, filter for accessibility features.</p>
  <p><em>Note: tools user submitted, not W3C-endorsed, see <a href="#disclaimer">disclaimer</a>.</em></p>
</div>

<div class="filters">
  <fieldset>
    <legend>Type of tool</legend>
    <label><input type="checkbox"> Content Management System</label>
    <label><input type="checkbox"> Online learning platform</label>
    <label><input type="checkbox"> Forum / discussion software</label>
    <label><input type="checkbox"> Website creator</label>
  </fieldset>
  <fieldset>
    <legend>Cost</legend>
    <label><input type="radio" name="filter-1"> Free</label>
    <label><input type="radio" name="filter-1"> Paid</label>
  </fieldset>
  <fieldset>
    <legend>License</legend>
    <label><input type="checkbox"> MIT</label>
    <label><input type="checkbox"> GNU</label>
    <label><input type="checkbox"> MPL</label>
    <label><input type="checkbox"> Closed-source</label>
  </fieldset>
  <fieldset>
    <legend>Accessibility governance</legend>
    <label><input type="checkbox"> Accessibility features documented</label>
    <label><input type="checkbox"> Accessibility statement available</label>
    <label><input type="checkbox"> Regularly audited</label>
  </fieldset>
  <fieldset>
    <legend>Technology</legend>
    <label><input type="checkbox"> PHP</label>
    <label><input type="checkbox"> Ruby</label>
    <label><input type="checkbox"> .NET</label>
    <label><input type="checkbox"> Java</label>
    <label><input type="checkbox"> Node</label>
  </fieldset>
  <fieldset>
    <legend>Editing experience accessibility</legend>
    <label><input type="checkbox"> Works with keyboard</label>
    <label><input type="checkbox"> Buttons have names</label>
    <label><input type="checkbox"> No time limits</label>
    <label><input type="checkbox"> Flashing content optional</label>  
    <label><input type="checkbox"> Content text search provided</label>
    <label><input type="checkbox"> Previews accessible</label>
    <label><input type="checkbox"> Accessibility preferences</label>
    <label><input type="checkbox"> Helps prevent and correct mistakes</label>
    <label><input type="checkbox"> Accessibiliy features documented</label>
  </fieldset>
  <fieldset>
    <legend>Output accessibility</legend>
    <label><input type="checkbox"> Accessibility information preserved</label>
    <label><input type="checkbox"> Accessible templates available</label>
    <label><input type="checkbox"> Guides authors to produce accessible content</label>
    <label><input type="checkbox"> Image alternatives enforced</label>
    <label><input type="checkbox"> Video alternatives enforced</label>
    <label><input type="checkbox"> Accessibility features on by default</label>
    <label><input type="checkbox"> Provides automated accessibility checks</label>
    <label><input type="checkbox"> Content spell-checked</label>
    <label><input type="checkbox"> Documentation provided</label>
  </fieldset>
</div>
<div class="tools">
  <h2>Content Management Systems</h2>
  <article class="tool">
    <h3>WordPress <span>WordPress Foundation</span> <a href="#" class="tag">CMS</a></h3>
    <p>WordPress is open source software you can use to create a beautiful website, blog, or app.</p>
    <ul class="tool-features">
      <li>works with keyboard</li>
      <li>spell check</li>
      <li>text alternatives for images</li>
      <li>displays outline</li>
    </ul>
  </article>
  <article class="tool">
    <h3>Drupal <span>Drupal community</span> <a href="#" class="tag">CMS</a></h3>
    <p>Open-source CMS for ambitious digital experiences that reach your audience across multiple channels.</p>
    <details>
      <summary class="button button-small button-secondary">More about Drupal</summary>
    <ul class="tool-features">
      <li>text alternatives for images</li>
      <li>displays outline</li>
      <li>accessibility documented</li>
    </ul>
    </details>
  </article>
  <article class="tool">
    <h3>Adobe Experience Manager <span>Adobe</span> <a href="#" class="tag">CMS</a></h3>
    <p>A powerful combination for asset management</p>
    <ul class="tool-features">
      <li>automated spell checking</li>
      <li>full accessibility documentation</li>
      <li>no time limits</li>
      <li>content search provided</li>
    </ul>
  </article>
  <h2>Website creators</h2>
  <article class="tool">
    <h3>Wix website builder <span>Wix</span> <a href="#" class="tag">website creator</a></h3>
    <p>Wix.com is a leading cloud-based development platform with millions of users worldwide.</p>
    <ul class="tool-features">
      <li>works with keyboard</li>
      <li>accessibility ready templates</li>
    </ul>
  </article>
  <h2>Course builders</h2>
  <article class="tool">
    <h3>Udemy <span>Udemy, Inc</span> <a href="#" class="tag">course builder</a></h3>
    <p>Create an online video course, reach students across the globe, and earn money </p>
    <ul class="tool-features">
      <li>automated captioning</li>
      <li>fully keyboard accessible</li>
    </ul>
  </article>
</div>