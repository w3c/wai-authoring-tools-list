---
published: true
no-sidenav: true
title: 'Authoring Tools List'
permalink: /tools-list/authoring/
ref: /tools-list/authoring/
lang: en
doc-note-type: draft
github:
  repository: w3c/wai-authoring-tools-list
  path: content/index.md
description: Lists authoring tools with accessibility support. You can filter to find courses matching your specific interests.
footer: >
  <p><strong>Date:</strong> Updated 7 December 2022.</p>
  <p><strong>Previous Editor:</strong> Hidde de Vries. <strong>Contributors:</strong> Steve Lee, Shawn Lawton Henry, Kevin White, and <a href="https://www.w3.org/groups/wg/eowg/participants">EOWG Participants</a>.</p>
  <p>Developed by the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide project</a>, co-funded by the European Commission.</p>
---

<!-- markdownlint-disable no-inline-html -->

<style>
  {% include wai-authoring-tools-list/css/styles.css %}
</style>

  <a class="button button-more submit-a-tool" href="submit-a-tool"><span>Submit a tool</span></a>

  {% assign defaultSort = site.data.wai-authoring-tools-list.json.sorting.first.sortkey %}
  {% include wai-authoring-tools-list/liquid/sort-data-folder.liquid data=site.data.wai-authoring-tools-list.submissions sortKey=defaultSort %}
  <div id="app" >

  <div id="left-col" class="tools-filters">
  {% include box.html type="start" title="Disclaimer:"%}
  <p>W3C does not endorse specific tools. Inclusion of tools in this list does not indicate endorsement by W3C. Tools are listed with no quality rating. Tool descriptions, search criteria, and other information in this database are submitted by providers. W3C does not verify the accuracy of the information. The list is not a review of tools, nor a complete or definitive list of all tools. The information can change at any time.</p>
  {% include box.html type="end" %}
<!--
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
      <button>Filter</button>
    </form>
-->
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
