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
{% include css/styles.css %}
</style>

<div class="header-sup">
  <a class="button button-more" href="submit-a-tool" style="float: right"><span>Submit a tool</span></a>
  <p>Browse <a href="https://www.w3.org/WAI/standards-guidelines/atag">authoring tools</a>, filter for accessibility features.</p>
  <p><em>Note: tools user submitted, not W3C-endorsed, see <a href="#disclaimer">disclaimer</a>.</em></p>
</div>

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
    {% for tool in site.data.tools %}
      {% include tool.html %}
    {% endfor %}
    </div>
  </div>
</div>

<script>
{% include js/tools.js %}
</script>

