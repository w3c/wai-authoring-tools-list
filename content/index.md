---
title: 'Authoring Tools with Accessibility Support'
permalink: /authoring-tools-list/
ref: /authoring-tools-list/
lang: en
doc-note-type: draft
layout: list-with-filters
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
github:
repository: w3c/wai-authoring-tools-list
path: content/index.md
---

<!-- markdownlint-disable no-inline-html -->

<style>
  {% include wai-authoring-tools-list/css/styles.css %}
</style>

< div class="header-sup">

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
  </div>

{::nomarkdown}
<a class="button button-more submit-a-tool" href="submit-a-tool"><span>Submit a tool</span></a>
{:/}

  <div id="app" class="tools">
    <form class="tools-filters" data-filter-form action="https://hiddedevries.nl/test-api/" method="POST">
      <h2 class="visuallyhidden">Filters</h2>
      {% for filter in site.data.filters %}
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
              {% include icons/info.svg %} <!-- TODO fix path -->
            </span>
          </a>
        </legend>
        {% for feature in site.data.features_a %} {% for guideline in
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
              {% include icons/info.svg %}
            </span>
          </a>
        </legend>
        {% for feature in site.data.features_b %} {% for guideline in
        feature.guidelines %}
        <div class="tools-filters__filter">
          <input type="checkbox" id="filter-{{ guideline.id }}" name="features-output" />
          <label for="filter-{{ guideline.id }}">{{ guideline.name }}</label>
        </div>
        {% endfor %} {% endfor %}
      </fieldset>
      <button>Filter</button>
    </form>
    <div class="tools-tools">
      <h2 class="visuallyhidden">List of tools</h2>
      <div role="alert">
        <p class="status status-busy" hidden>Loading tools…</p>
        <p class="status status-failure" hidden>something went wrong…</p>
      </div>
      <div id="tools-list">
        <p>Showing {{ site.data.tools | size }} authoring tools</p>
        {% for tool in site.data.tools %} {% include tool.liquid %} {% endfor %}
      </div>
    </div>
  </div>

  <script>
    {% include wai-authoring-tools-list/js/tools.js %}
  </script>
