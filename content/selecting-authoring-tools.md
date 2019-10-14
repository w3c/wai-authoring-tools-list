---
layout: default
title: "Selecting Authoring Tools"
doc-note-type: draft
permalink: /authoring-tools/selecting
github:
  repository: wai-authoring-tools
  path: content/selecting-authoring-tools.md
footer: >
  <p>Developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---


{::nomarkdown}
{% include box.html type="start" h="2" title="Tools that create web content" class="full" %}
{:/}

“Authoring tools” is the umbrella term for <b>tools that create web content</b>, like <abbr title="content management systems">CMSes</abbr> and <abbr title="learning management systems">LMSes</abbr>, website creators, discussion forums and social media. If they take accesibility into account, authoring tools can make a huge difference for accessibility, both for content editors and for end users. This page explains how. 

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2" /}

{::nomarkdown}
{% include_cached toc.html type="start" title="Page Contents" class="full" %}
{:/}

-   TOC is created automatically.
{:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}

## Introduction

There are two parts to the accessibility of authoring tools: 

* [editing experience](#editing): does the tool work for people with disabilities?
* [output](#output): does the tool output accessible content?

On this page, we will list accessibility considerations for both of these parts. They can have their own, distinct benefits.

The features listed under “editing experience” and “output” map to ATAG success criteria (A and AA level). They sometimes include examples from [Implementing ATAG 2.0](https://www.w3.org/TR/IMPLEMENTING-ATAG20/#gl_a22).

## Accessibility features in authoring tools
{:#features}

### Editing experience: for content editors

{:#editing}

{% for principle in site.data.features_a %}
<!-- <h4>{{ principle.principle }}</h4> -->
  {% for guideline in principle.guidelines %}
  * **{{ guideline.name }}**<br>
  {{ guideline.description}}<br>
  Based on: {% for criterion in guideline.related_atag %}{{ criterion }} {% endfor %}
  {% endfor %}
{% endfor %}

### Output: for end users
{:#output}

{% for feature in site.data.features_b %}
* **{{ feature.name }}**<br>
{{ feature.description}}<br>
Based on: {% for criterion in feature.related_atag %}{{ criterion }} {% endfor %}
{% endfor %}


## Further Considerations
{:#further}

These are some more things to look for when choosing an authoring tool that meets your (organisations's) accessibility needs:

### Accessibility statement provided

Most authoring tools conform only partly to accessibility guidelines. They may provide an accessibility statement that states what to expect from their product's accessibility.

### Governance of accesibility

Authoring tool products are likely regularly improved and updated. Updates could break accessibility, and it is recommended to check with the vendor what their process is for ensuring accessibility throughout their product's lifecycle. 

Some questions to ask: 

* Are new feature accessibility tested? 
* How can issues be reported? 

### Other features

The Authoring Tools List also lets you filter based on cost model, license and technology.