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
The `<nav>` element identifies a section of major navigational links on
a page. The `<nav>` element should be reserved for primary navigation
sections only, such as global navigation, table of content,
previous/next links, or other noteworthy groups of navigational links.

Generally, links included within the `<nav>` element will link to other
pages within the same website or to parts of the same web page.
Miscellaneous one-off links should not be wrapped within the navigation
element; they should use the anchor element `<a>` and the anchor element
alone.

<!--    Navigation element -->
    <nav>...</nav>

### Article

<!--    Article -->
    <article>...</article>
    
### Section
    
### Deciding between `<article>`, `<section>`, or `<div>` elements

### Aside

### Footer

## Encoding Special Characters
Special Characters include various punctuation marks, accented letters,
and symbols. When typed directly into HTML, they can be misunderstood or
mistaken for the wrong character; thus they need to be encoded.

Each encoded character begins with a ampersand, `&`, and end with a
semicolon, `;`. What falls between the ampersand and semicolon is a
character's unique encoding, be it a name or numeric encoding.

## Creating Hyperlinks
Along with the text, one of the core components of the internet is the
hyperlink, which provides the ability to link from one web page or
resource to another. Hyperlinks are established using the anchor `<a>`
inline-level element. In order to create a link a `href` attribute is
required. It identifies the destination of the link.

### Wrapping Block-level elements with Anchors
By nature anchor element, `<a>`, is an inline-level element, and
according to web standards, inline-elements may not wrap block-level
elements. With the introduction of HTML5, anchor elements specifically
have permission to wrap either block or inline or any other level
elements. This is break from standard convention, but it is permissible
in order to enable entire blocks of content on a page to become links.

## Relative and Absolute Paths
The two most common types of links are links to other pages of the same
website and links to other websites. These links are identified using
`href` attribute values, also known as paths.

Links pointing to the other pages of the same website will have a
relative path, which does not include a domain name.

Linking to other websites outside of the current one requires an
absolute path, where the `href` attribute value must include the full
domain. For example, a link to google home page need the href value
starting with `http://google.com`.

## Linking to an Email Address
To create a email link, the href attribute value needs to start with
`mailto:` followed by the email address. 

Additionally, subject, body, text and other information for the email
may be populated. To add a subject line, the `subject=` parameter will
be followed after the email address. The first parameter after the email
address needs to start with question mark, `?`, to bind it to the
hyperlink path. Multiple words within a subject line require that spaces
be encoded using `%20`.

Adding body text works in the same way as subject text, this time using
the `body=` parameter in the `href` attribute. Because we are binding
one parameter to the another we need to use the ampersand, `&`, to
separate the two. As with the subject spaces must be encoded using %20,
the line breaks must be encoded using `%0A`.

Altogether a link to `revanth.datla@gmail.com` with the subject of
"Reaching Out" and body text of "How are you" would require a href value
of

## Opening Links in a new Window
One feature available within hyperlinks is the ability to determine
where the link should be open when clicked. Typically, links are opened
in the same window from which they are clicked; however, links may also
be opened in a new windows.

To trigger the action of opening a link on a new window, use the
`target` attribute with a value of `_blank`. The target attribute
determines where the link will be displayed and the `_blank` value
specifies a new window.

## Linking to parts of the same page
The common example of these same-page links are "Back to top" links
return a user to the top of a page.

A on-page link can be created by first setting an `id` attribute on the
element we wish to link to, then using the the value of that `id`
attribute within an anchor element's `href` attribute value.

#### Explore
1. Write block and inline examples?

#### References
1. [Semantic Code: What? Why? How?](http://boagworld.com/dev/semantic-code-what-why-how/)
2. [New Structural Elements in HTML5](https://dev.opera.com/articles/new-structural-elements-in-html5/)
3. [The i, b, em, and strong elements](http://html5doctor.com/i-b-em-strong-element/)
4. [The Full mailto Link syntax](https://yoast.com/)
