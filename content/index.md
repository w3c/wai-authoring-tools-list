---
published: true
no-sidenav: true
title: 'Authoring Tools List'
permalink: /tools-list/authoring/
ref: /tools-list/authoring/
lang: en
github:
  repository: w3c/wai-authoring-tools-list
  path: content/index.md
description: Lists authoring tools with accessibility support. You can filter to find courses matching your specific interests.
footer: >
  <p><strong>Date:</strong> Updated 28 December 2022.</p>
  <p><strong>Previous Editor:</strong> Hidde de Vries. <strong>Contributors:</strong> Steve Lee, Shawn Lawton Henry, Kevin White, and <a href="https://www.w3.org/groups/wg/eowg/participants">EOWG Participants</a>.</p>
  <p>Developed by the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/groups/wg/eowg">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide project</a>, co-funded by the European Commission.</p>
---

<!-- markdownlint-disable no-inline-html -->

<style>
  {% include wai-authoring-tools-list/css/styles.css %}
</style>

  <div class="header-sup">
        <p>This list provides information on accessibility support in content management systems (CMS), learning management systems (LMS), web page editors, and other '<a href="https://www.w3.org/WAI/standards-guidelines/atag/#who-atag-is-for">authoring tools</a>'. The information is submitted by vendors and others. <abbr title="World Wide Web Consortium">W3C</abbr> does not verify the accuracy of the information. W3C does not endorse specific tools. See <a href="#disclaimer">Disclaimer</a>.</p>
        <a class="button button-more submit-a-tool" href="submit-a-tool"><span>Submit an authoring tool</span></a>
</div>

  {% assign defaultSort = site.data.wai-authoring-tools-list.json.sorting.first.sortkey %}
  {% include wai-authoring-tools-list/liquid/sort-data-folder.liquid data=site.data.wai-authoring-tools-list.submissions sortKey=defaultSort %}
  <div id="app" >

  <div id="left-col" class="tools-filters">

    <p>The <strong>Details</strong> section under the <strong>Tools</strong> listing has information on how the tool meets the web standard: <cite>Authoring Tool Accessibility Guidelines (<a href="https://www.w3.org/WAI/standards-guidelines/atag">ATAG</a>)</cite>. For a brief summary of ATAG, see <a href="https://www.w3.org/WAI/standards-guidelines/atag/glance/">ATAG at a Glance</a>.</p>

    <p>License type options are:</p>
    <ul>
      <li>Free</li>
      <li>Limited free functionality</li>
      <li>Time-limited trial</li>
      <li>Subscription</li>
      <li>One-time purchase</li>
    </ul>
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

  <div class="button-submit-end">
  <a class="button button-more submit-a-tool" href="submit-a-tool"><span>Submit an authoring tool</span></a>
  </div>

  <div id="disclaimer">
      {% include box.html type="start" title="<h3>Disclaimer</h3>" %}
          <p>Information on this page is provided by vendors. <abbr title="World Wide Web Consortium">W3C</abbr> does not endorse specific products.</p>
          <p><abbr title="World Wide Web Consortium">W3C</abbr> does not endorse specific vendor products. Inclusion of products in this list does not indicate endorsement by W3C. Products and search criteria are listed with no quality rating.</p>
          <p>Tool descriptions, search criteria, and other information in this database is provided by tool developers, vendors, or others. W3C does not verify the accuracy of the information.</p>
          <p>The list is not a review of authoring tools, nor a complete or definitive list of all tools. The information can change at any time.</p>
      {% include box.html type="end" %}
  </div>


  <script>
    {% include wai-authoring-tools-list/js/tools.js %}
  </script>
