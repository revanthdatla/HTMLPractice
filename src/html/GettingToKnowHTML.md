Getting To Know HTML
============
In order to build websites, we need to know which HTML elements are best
fit to display various types of content. Along with that, it is
important to know how elements are visually displayed on a web page, as
well as what different elements means semantically.

## Semantics Overview
Semantics within HTML is the practice of giving content on the page
meaning and structure by using the proper element. Semantic code
describes the value of content on a page, regardless of the style or
appearance of that content. There are several benefits to using semantic
elements, including enabling computers, screen readers, search engines
and other devices to adequately read and understand the contents of a
web page. Moreover, semantic HTML is easier to manage and work with, as
it shows clearly what each piece of content is about.

## Identifying Divisions and Spans
Divisions, or `<div>s` and `<span>s` are HTML elements that act as
containers solely for styling purposes. As generic containers, they
don't come with any overarching meaning or semantic value. Paragraphs
are semantic in that content wrapped around `<p>` element is known and
understood as a Paragraph. `<div>` and `<span>` do not hold such
semantic meaning and are simply containers.

### Block VS Inline Elements
Most elements are either Block elements or Inline elements.

#### Block Elements
They start on a new line, stacking one on the top of the other, and
occupy any available width. Block-level elements may be nested inside
one other and may wrap inline-level elements. We'll see block-level
elements used for large piece of information such as Paragraphs most
commonly.

#### Inline Elements
They don't start on a new-line and fall into the normal flow of a
document, lining up one after the other, and only maintain the width of
their content. Inline-level elements may be nested inside one another;
however they cannot wrap block level elements. Usually, inline-level
elements are seen with smaller piece of content such as few words.

Both `<div>` and `<span>` are extremely valuable when building a website as they
give ability to target styles to a contained set of content.

A `<div>` is a block-level element that is commonly used to identify large grouping of
content, which helps to build web page layout's and design. On the other hand, `<span>`
is used to identify small grouping of text within a block-level element.

Commonly `<div>` and `<span>` are seen with `class` or `id` attributes for styling purposes.
Choosing a value of `class` or `id` attribute requires a bit of care, it is a good stand
to refer to the content of an element rather the appearance of the element.

## Comments within HTML & CSS
HTML and CSS provides ability to leave comments within code and any content wrapped within
a comment will not be displayed on a web page. They help keep our files organized, allow to
keep remainders, and provide a way to more effectively manage our code. They are very helpful,
When multiple people are working on a same file.

HTML comments start with `<!-- and ends with -->`. CSS comments start with `/*` and end with 
`*/`.

## Using Text Based Elements
Many forms of media and content exist online; however, text is predominant. Accordingly,
they are many different elements for displaying text on a web page. Of which, popular
elements are Headings, Paragraphs, bold text to show importance and italics for emphasis.

### Headings
Headings are block level elements, which comes in six different ranking from `<h1>` to `<h6>`.
They helps to quickly break content and establish hierarchy and they are key identifies
for users reading a page. They help search engines to index and determine the content on a page.

Heading should be used in the order that is relevant to the content of a page.
The primary heading of a page or section should be marked up with an `<h1>` element,
and subsequent heading should use `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>` elements as 
necessary.

Each heading level elements must be used where it is semantically valued, and should not be
used to make text bold or big - they are other, better ways of doing it.

```
<!--    Headings -->
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

### Paragraphs
Paragraphs are block-level elements. They usually follow Headings.

### Bold Text with Strong
To make a text bold and give strong importance; `<strong>` inline element is prominently
 used. They are two ways to bold a text; one is using `<strong>` and other element is `<b>`.

Their is a semantic difference between these elements. `<strong>` is semantically used to
give strong importance to a text and is most popularly used element. On the other hand,
`<b>` element is semantically means to stylistically offset text, which is not a best choice
for a text deserving prominent attention.

```
<!--    Strong Importance to a text -->
    <p><strong>Caution:</strong> traffic ahead</p>

<!--    b element stylistically offset -->
    <p>This recipe calls for <b>Onions</b> and <b>Potatoes</b></p>
```

### Italicize Text with Emphasis
The `<em>` inline element is used to semantically to stress emphasis on a text;
it is thus the most popular option for italicizing text. The other option,
the `<i>` element, is used to semantically convey text in an alternative voice or tone, as
 if it was placed in a quotation marks.

<!--    Stressed emphasis -->
    <p>I <em>love</em> New York</p>

<!--    Alternative voice or tone -->
    <p>The name <i>shay</i> means gift</p>

## Building Structure
For the longest time the structure of a web page was built using
divisions. The problem is it doesn't add any semantic value and it is
fairly difficult to determine the intention of these divisions.
Fortunately, HTML5 introduced structurally based elements including the
`<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>`
elements.

They all are block level elements and do not have any implied position
or style. These new elements are intended to give meaning to the
organization of our pages and improve our structural semantics.

### Header
The `<header>` element, like it sounds, is used to identify the top of a
page, article, section, or other segment of a page. In general,
`<header>` element may include a heading, introductory text, and even
navigation.

```
<!--    Header -->
    <header>....</header>
```

#### Header vs. Head vs. h1 through h6
They all have different semantic meaning and should be used according to
their meanings.

The `<header>` element is a structural elements that outlines the
headings of an segment in a page. It falls within the `<body>` element.

The `<head>` elements is not displayed on a web page and is used to
outline metadata, including the document title, and links to external
files. It falls directly within the `<html>` element.

Heading elements, are used to designate multiple levels of text headings
throughout a page.

### Navigation



#### Explore
1. Write block and inline examples?