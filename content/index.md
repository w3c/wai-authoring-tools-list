---
title: "Authoring Tools with Accessibility Support"
permalink: /authoring-tools/
ref: /authoring-tools/
lang: en
doc-note-type: draft
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
{% include css/styles.css %}
</style>

<div class="header-sup">
  <p>Browse <a href="selecting">tools that create web content</a>, like <abbr title="content management systems">CMSes</abbr> and <abbr title="learning management systems">LMSes</abbr>, website creators, discussion forums and other authoring tools, and filter for <a href="selecting#features">accessibility features</a>.</p>
  <p><em>Note: tools are user-submitted, not W3C-endorsed, see <a href="#disclaimer">disclaimer</a>.</em></p>
</div>

{::nomarkdown}
<a class="button button-more" href="submit-a-tool" style="grid-column-start: 6;
  grid-column-end: 8;
  align-self: start;
  justify-self: end;
 margin-bottom: 2em;"><span>Submit a tool</span></a>
 {:/}

<div id="app" class="tools">
  <form class="tools-filters" data-filter-form action="https://hiddedevries.nl/test-api/" method="POST">
    {% for filter in site.data.filters %}
    <fieldset id="{{ filter.id }}">
      <legend>{{ filter.name }}</legend>
      {% for option in filter.options %}
      <input type="{{ filter.type }}" id="filter-{{ option.id }}" name="{{ option.id }}">
      <label for="filter-{{ option.id }}">{{ option.name }}</label>
      {% endfor %}
    </fieldset>
    {% endfor %}
    <button>Filter</button> 
  </form>
  <div class="tools-tools">
    <div role="alert">
      <p class="status status-busy" hidden>Loading tools…</p>
      <p class="status status-failure" hidden>something went wrong…</p>
    </div>
    <div id="tools-list">
    <p>Showing {{ site.data.tools | size }} authoring tools</p>
    {% for tool in site.data.tools %}
      {% include tool.liquid %}
    {% endfor %}
    </div>
  </div>
</div>

<script>
{% include js/tools.js %}
</script>

