Building Your First Web Page
============
In today's modern world, accessing required information from the web is
possible with the browsers and search engines of choice. 

The two dominant languages used to build web pages are HTML and CSS.

It is important to learn the difference of these languages such as
syntax difference and some common terminology.

## What are HTML and CSS?
HTML - Hyper Text Markup Language, gives content structure and meaning
by defining the content as for example, heading, paragraphs, images
etc., 

CSS - Cascading Style Sheets, is a presentation language created to
style the appearance of content using for instance fonts or colors.

HTML and CSS are independent of one other. CSS shouldn't be written in a
HTML and vice versa. As a rule, HTML will always represent content and
CSS represent the appearance of the content.

## Understanding common HTML terms
The three common HTML terms one will encounter are `elements`, `tags` and
`attributes`.

### Elements
Elements define the structure and content on a page. The most commonly
used elements in HTML are multiple levels of Headings(`<h1>` to `<h6>`)
and paragraphs(`<p>`) and other elements such as `<a>`, `<div>`, `<span>`
`<strong>`, `<em>` and many more.

Elements are identified by the use of less-than and greater-than angle
brackets, `< >`, surrounding the element name. A element will looks like
as following. 

```
<a>
```

### Tags
The placement of less-than and greater-than angle brackets surrounding a
element creates what is known as tag. Tags most commonly occur in pair
of opening tag and closing tag.

An opening tag marks the beginning of an element. It consists of
less-than sign followed by element name and then greater-than sign.

An closing tag marks the end of an element. It consists of less-than
sign followed by forward-slash and the element's name and then
greater-than sign.

The content that falls between the opening tag and closing tag is the
content of that element. For example, an anchor link will have an
opening tag and an closing tag and what falls between these two tags is
the content of the anchor link.

Anchor link will looks like 
```
<a>...</a>
```
### Attributes
Attributes are properties used to provide additional information about
an element. The most common attributes include, `id` attribute - which
identifies an element, `class` attribute - which classifies an element,
`src` attribute - which specifies a source for embeddable content, `href`
attribute - which specifies a hyperlink reference to a linked resource.

Attributes are defined within the opening tag, after the element's name.
Generally, attributes include a name and a value. The format will be
name of the attribute followed by equal sign and then a quoted attribute
value. For example, a anchor link `<a>` with a `href` attribute will
looks like 
```
<a href='www.google.com'>Google Home Page</a>
```
The preceding code will display a text Google Home page on a web page.
Upon clicking the text, a user will be routed to `www.google.com`

#### Setting up the HTML document structure
HTML is a plain text document with a `.html` file extension. 

All HTML documents have a required structure that includes following
declarations and elements. `<!DOCTYPE HTML>`, `<html>`, `<head>`, `<body>`

The document type declaration, or `<!DOCTYPE HTML>` informs web browsers
which version of HTML is being used and is placed at the beginning of an
HTML document.Because we will be using the latest version of HTML, here
the document type declaration is simply `<!DOCTYPE HTML>`

Following the document type declaration `<html>` element specifies the
beginning of the document.

Inside the `<html>` element the `<head>` element identifies the top of
the document, includes any metadata. The contents inside head element
are not visible on a web page. Instead, it may include a document title
which is visible on title bar in a browser window, links to any external
files or any other beneficial metadata.

All of the visible content on a web page are placed inside `<body>`
element.

A breakdown of a typical HTML document looks like as follows.

``` Typical HTML Document Structure
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='utf-8'>
        <title>Sample</title>
    </head>
    <body>
        <h1>Hello Page!</h1>
        <p>....</p>
    </body>
</html>
```

The preceding code shows an HTML document beginning with a type
declaration using `<!DOCTYPE html>` and a html element. Inside the
`<html>` element contains the `<head>` and `<body>` elements. The
`<head>` element includes the character encoding of the page using the
`<meta charset='utf-8'>` tag and the title of the document using the
`<title>` element. The `<body>` element includes a heading and
paragraphs. Because both heading and paragraph elements are within the
body element, they are visible on a web page.

When elements are nested, one element placed inside other element, it is
a good idea to indent that element to keep the document structure well
organized and legible. 

#### Self Closing elements
In the previous example, the `meta` element had only one tag and didn't
include a closing tag. Not all elements in HTML will be having a opening
and closing tags. Few elements receive their contents or behaviour from
attributes within a single tag. The `<meta>` element is one of these
elements. The content of the `<meta>` element are received using the
`charset` attribute and value. Other common self closing elements are

- `<br>`
- `<img>`
- `<meta>`
- `<wbr>`
- `<embed>`
- `<input>`
- `<param>`
- `<hr>`
- `<link>`
- `<source>`

#### Code Validation
The mistakes in a HTML/CSS document are identified using respective
HTML/CSS validators. The W3C has built both HTML and CSS validators that
will scan code for mistakes. Validating code is important to make sure
our web content renders properly across all browsers and also it will
inform us about the best practices.

## Understanding Common CSS Terms
The common CSS terms are `selectors`, `properties` and `values`

### Selectors
A selector designates exactly which element or elements within HTML to
target and apply styles (such as color, fonts and others) to. Selectors
may include a combination of different qualifiers to select unique
elements, depending on how specific we like to be. For example, we may
wish to select a specific paragraph or all paragraphs in HTML.

Selectors generally target attribute values, such as `id` value, `class`
value or target the type of an element like `<h`>, `<p>`

Within CSS, selectors are followed with a curly brackets `{ }` which
encompasses the styles to be applied to the targeted elements. For
example the selector here is targeting all `<h1>` elements.

```
h1 {

}
```

### Properties
After determining the element using selectors, properties defines the
styles to be applied to that element. Property names are defined after
selectors within the curly braces immediately preceding a colon `:`.
Some of the properties that are used are `background`, `color`,
`font-size`, `width`, `height` and new properties are often added.

In the following examples `font` and `size` properties are defined to
apply to all `<h1>` elements.

```
h1 {
    font: ...;
    size: ...;
}
```

### Values
The Values are determines the behaviour of an property after selecting
the target element. Values can be identified using the text between
colon and semi-colon. For example, below we are setting a heading color
to green with a font-size of 16px.

```
h1 {
    color: green;
    font-size: 16px;
}
```

To Summarise, in CSS a rule set begins with a selector followed by curly
braces and within the curly brace are declarations consisting of
property and value pairs. Each declaration begins with a property,
followed by a colon and the property value, and finally a semicolon.

It is a common practice to indent property and value pairs, to organize
CSS and legible.

## Working with Selectors
Selectors, indicate which elements are being styled. The most common
selectors are `type`, `class` and `id` selectors.

### Type Selectors
Type Selectors targets elements by their type. For example, a `div`
selector will target all `<div>` elements.

### Class Selectors
Class Selector allow us to select element based on the element's `class`
attribute value. Class selector are little bit more specific than type
selectors as they target particular group of elements rather than all
elements of one type.

Class Selectors will allow us to apply same styles to multiple elements
at once using a `class` attribute value across multiple elements.

Within CSS, class selectors are represented using a dot, followed by
`class` attribute value. In the example below, multiple HTML elements
are targeted using a `class` attribute value of `blue-color`

```
.blue-color {
    color: blue;
}
```
```
 <div class='blue-color'>..</div>
 <p class='blue-color'>...</p>
```

### ID Selectors
ID Selectors are even more precise in targeting an HTML element based on
the element's `id` attribute value. They target only one unique element
at a time.

Regardless of type of an element, `id` attribute values can be only used
once per page. They must be reserved for significant elements.

Within CSS, ID selectors are denoted using hash sign `#`, followed by a
`id` attribute value. In the example below ID selector targets only one
element with `id` attribute value of `superman`.

```
#superman {

}
```

## Referencing CSS
In order to affect the HTML elements using CSS, referencing CSS file in
HTML is needed. CSS is referenced in HTML within the `<head>` element of
our HTML document. It is best practice to reference all our CSS
containing all styles as a single external style sheet. Using a single
external style sheet will allow to use same styles across an entire
website and maintain it from one location.

### Other Options of adding CSS
```
These are frowned upon options where referencing is done through inline
and internal styles. These options makes website cumbersome and
unmaintainable.
```

A external style sheet is a text file with a .css file extension.

Within the `<head>` element of HTML, a `<link>` element is used to
establish relationship between HTML and CSS. As we are linking CSS, the
`rel` attribute value will be `stylesheet` and `href` attribute value
will be pointing to the location or path of the CSS file.

```
<head>
    <link rel='stylesheet' href='main.css'>
</head>
```

The relative path to the CSS from HTML need to be correlated within the
`href` attribute value. A forward slash `/` is used to denote moving to
sub-directory.

A important thing to notice is when a HTML page is not linked to CSS.
The browser imposes its own preferred CSS on the HTML content.
Overwriting these styles is done using CSS resets.

## Using CSS Resets
CSS Resets are widely used to ensure cross-browser compatibility. It is
because web browsers has its own default styles for different elements.
Rendering same HTML elements will differ between Chrome and Internet
explorer due to this and CSS Resets guarantees consistency across web
browsers.

They target common HTML elements with a predefined styles and provides
one unified style across all browsers. Resetting generally involves
removing sizing, margin, padding and tones down the respective elements.
Because CSS cascades from top to down, placing CSS reset at the top of
the CSS file will ensure those styles are read first and all browser
work from a common baseline.

One of the most common resets are [Eric Meyer's reset](https://meyerweb.com/eric/tools/css/reset/)

The other adventurous way of doing is using
[Normalize.css](https://necolas.github.io/normalize.css/) created by
Nicolas Gallagher . It focus on not hard reset on common elements but on
common styles for these elements. It requires strong understanding of
CSS as well as awareness of what you'd like your styles to be.

#### Cross Browser Compatibility and Testing
```
It is important to note the value of cross-browser compatibility and testing. 
Websites doesn't need to look alike in every browser but should be close.
It is based on which browser you would like to support and to what degree.
```

## Resources
- [Common HTML Terms](http://www.scriptingmaster.com/html/HTML-terms-glossary.asp) via scripting masters.
- [CSS Terms and Definitions](https://www.impressivewebs.com/css-terms-definitions/) via impressive webs.


##### Explore
1. What will be the html document type declaration if we wanted to
   specify a specific version of HTML rather than the latest one?
2. Write HTML code using self closing elements mentioned above?


   

