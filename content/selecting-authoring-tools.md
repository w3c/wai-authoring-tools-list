---
layout: default
title: "Selecting Authoring Tools, or how to find a CMS that supports accessibility"
doc-note-type: draft
permalink: /authoring-tools/selecting
github:
  repository: wai-authoring-tools
  path: content/selecting-authoring-tools.md
footer: >
  <p>Developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---


{::nomarkdown}
{% include box.html type="start" h="2" title="Introduction" class="full" %}
{:/}

_Authoring tools_ are tools that create web content, like CMSes, courseware, website creators and social media. If they take accesibility into account, authoring tools can make a huge difference for accessibility, both for content editors and for end users. This page explains how. 

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

## Editing experience: for content editors

{:#editing}

* **Complies with accessibility standards**<br>
The full editing experience conforms to WCAG 2.0 (or another, platform-specific accessibility guidelines). <br>
Based on: A.1.1., A.1.2.
* **Provides text alternatives for icons, video etc**<br>
For all “non-text content”, like icons, images and video, there is a text alternative, so that it can be perceived by more people. This includes video previews in WYSIWYG editors.<br>
Based on: A.2.1.,  
* **Status/properties conveyed to assistive technologies**<br>
Statuses like errors, spell check and changed/deleted content are conveyed to users of assistive technologies.<br>
Based on: A.2.2.1
* **Text properties perceivable by assistive technologies**<br>
If an author changes text properties like font weight, this meaning is conveyed to users of assistive technologies<br>
Based on: A.2.2.2
* **Works with keyboard**<br>
Everything that can be done with a mouse, can just as easily be done with a keyboard, including drag and drop and drawing capabilities. There should be note keyboard traps. Keyboard usage should be efficient and easier to use than just with sequential access (for example: use WAI-ARIA landmarks or offer keyboard shortcuts).<br>
Based on: A.3.1
* **Enough time**<br>
Time limits, like for auto-save, can be turned off or extended (some exceptions apply).<br>
Based on: A.3.2
* **Flashing content optional**<br>
Flashing content, like videos, including previews of that kind of content, can be paused or turned off.<br>
Based on: A.3.3 
* **Content can be selected by structure**<br>
Users can navigate quicker by structure, for example headings, lists or HTML elements.<br>
Based on: A.3.4
* **Content searchable**<br>
Users can search in text content, results are focused when shown. If there are no matches. Search is two-way (backwards and forwards).<br>
Based on: A.3.5
* **Honours display settings**<br>
If there are user settings for display, this only affects the editing view, not the output. If a content editor uses OS settings like high contrast mode or their own stylesheet, this does not break the editing experience.<br>
Based on: A.3.6
* **Previews are accessible**<br>
Previews are as accessible as current browsers and other user agents.<br>
Based on: A.3.7
* **Helps user prevent mistakes**<br>
Lets users undo changes and settings.<br>
Based on: A.4.1
* **(Accessibility) features documented**<br>
Documents all features, including accessibility features.
Based on: A.4.2

## Output: for end users
{:#output}

* **Generates accessible markup**<br>
When the tool generates markup, that markup is accessible. If accesssibility information is required, like alternative texts, the content editor is prompted to provide that information.<br>
Based on: B.1.1
* **Preserves accessibility information**<br>
If content is pasted from a word processor or converted from one format into another, any accessibility information is preserved.<br>
Based on B.1.2
* **Allows for accessible content creation**<br>
Does not block content editor from adding accessibility information to their content, like `alt` attributes to images or captions to videos.<br>
Based on: B.2.1
* **Text alternatives can be added**<br>
There is a tool for providing text alternatives to “non-text content”, like images, videos and data visualisation.<br>
Based on: B.2.3
* **Accessible templates available**<br>
There are accessible templates available. If there is a repository of templates, it is easy to find options that prioritise accessibility.<br>
Based on: B.2.4
* **Accessible components/plug-ins available**<br>
If any components or plugins are built-in to the tool, they are accessible. If there is a gallery of components or plug-ins, it indicates accessible options.<br>
Based on: B.2.5 (interpreting “pre-authored content” as components)
* **Checks accessibility automatically**<br>
Has built-in checks for common accessibility problems that identifies things like missing alt text.<br>
Based on: B.3.1
* **Helps content editors fix problems**<br>
Provides suggestions to content editor about accessibility problems.<br>
Based on: B.3.4
* **Accessibility features promoted**<br>
Accessibility features are turned on by default and prominently displayed in the interface.<br>
Based on: B.4.1
* **Documentation promotes accessiiblity**<br>
Examples of how to produce accessible content with best practices are documented and easy to find.<br>
Based on: B.4.2
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

The Authoring Tools List also lets you filter based on cost, license and technology.