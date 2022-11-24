---
published: true
no-sidenav: true
title: 'Authoring Tools list'
title_html: 'Authoring tools List - @@@'
permalink: /tools-list/authoring/
ref: /tools-list/authoring/
lang: en
doc-note-type: draft
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
github:
  repository: w3c/wai-authoring-tools-list
  path: content/index.md
description: Lists authoring tools with accessibility support. You can filter to find courses matching your specific interests.
footer: >
  <p><strong>Date:</strong> Updated @@@. @@@.</p>
  <p><strong>Editors:</strong> @@@. <strong>Contributors:</strong> @@@.</p>
  <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide project</a>, co-funded by the European Commission.</p>
---

<!-- markdownlint-disable no-inline-html -->

<style>
  {% include wai-authoring-tools-list/css/styles.css %}
</style>

  <div class="header-sup">
    <p>
      Browse <a href="selecting">tools that create web content</a>, like
      <abbr title="content management systems">CMSes</abbr> and
      <abbr title="learning management systems">LMSes</abbr>, website creators,
      discussion forums and other authoring tools, and filter for
      <a href="selecting#features">accessibility features</a>.
    </p>
    <p>
      <em>Note: tools are user-submitted, not W3C-endorsed, see
        <a href="#disclaimer">disclaimer for vendor-submitted content</a>.</em>
    </p>
    <a class="button button-more submit-a-tool" href="submit-a-tool"><span>Submit a tool</span></a>
  </div>

  {% assign defaultSort = site.data.wai-authoring-tools-list.json.sorting.first.sortkey %}
  {% include wai-authoring-tools-list/liquid/sort-data-folder.liquid data=site.data.wai-authoring-tools-list.submissions sortKey=defaultSort %}
  <div id="app" >

  <div id="left-col" class="tools-filters">
    <form data-filter-form action="...">
      <h2 class="filters_title">Filters</h2>
      {% for filter in site.data.wai-authoring-tools-list.json.filters %}
      <fieldset id="{{ filter.id }}">
        <legend>{{ filter.name }}</legend>
        {% for option in filter.options %}
        <div class="tools-filters__filter">
          <input type="{{ filter.type }}" id="filter-{{ option.id }}" name="{{ option.id }}" />
          <label for="filter-{{ option.id }}">{{ option.name }}</label>
        </div>
        {% endfor %}
      </fieldset>
      {% endfor %}
      <fieldset id="filters-features-content-editors">
        <legend>
          Content Editor Features (editing experience)
          <a href="selecting#editing-experience-for-content-editors" class="more-info">
            <span class="visuallyhidden">All features for content editors explained</span>
            <span aria-hidden="true" class="more-info__icon">
              {% include wai-authoring-tools-list/icons/info.svg %} <!-- TODO fix path -->
            </span>
          </a>
        </legend>
        {% for feature in site.data.wai-authoring-tools-list.json.features_a %} {% for guideline in
        feature.guidelines %}
        <div class="tools-filters__filter">
          <input type="checkbox" id="filter-{{ guideline.id }}" name="features-content-editors" />
          <label for="filter-{{ guideline.id }}">{{ guideline.name }}</label>
        </div>
        {% endfor %} {% endfor %}
      </fieldset>
      <fieldset id="filters-features-outpput">
        <legend>
          End User Features (output)
          <a href="selecting#output" class="more-info">
            <span class="visuallyhidden">All features for end users explained</span>
            <span aria-hidden="true" class="more-info__icon">
              {% include wai-authoring-tools-list/icons/info.svg %}
            </span>
          </a>
        </legend>
        {% for feature in site.data.wai-authoring-tools-list.json.features_b %} {% for guideline in
        feature.guidelines %}
        <div class="tools-filters__filter">
          <input type="checkbox" id="filter-{{ guideline.id }}" name="features-output" />
          <label for="filter-{{ guideline.id }}">{{ guideline.name }}</label>
        </div>
        {% endfor %} {% endfor %}
      </fieldset>
      <button>Filter</button>
    </form>
  </div>
  <div style="width:100%" class="tools-tools">
    <h2>Tools</h2>
    <div role="alert">
      <p class="status status-busy" hidden>Loading tools…</p>
      <p class="status status-failure" hidden>something went wrong…</p>
    </div>
      <p>Showing {{ itemsSorted | size }} authoring tools</p>
      {% include excol.html type="all" %}
      <div id="tools-list">
        {% for tool in itemsSorted %}
          {% include wai-authoring-tools-list/liquid/tool.liquid %}
        {% endfor %}
    </div>
  </div>

  <script>
    {% include wai-authoring-tools-list/js/tools.js %}
  </script>
