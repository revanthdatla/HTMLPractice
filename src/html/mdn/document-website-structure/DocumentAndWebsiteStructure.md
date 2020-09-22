Document and Website Structure
================
In addition to defining individual parts of your page (such as "a paragraph" "an image"), HTML also boasts a number
of block level elements used to define areas of your website (such as the header, navigation menu, the main content 
column).

* `<header>` - The HTML `header` element represent the introductory content, typically a group of introductory or 
navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other 
elements.

* `nav` - The HTML `nav` element represents a section of a page whose purpose is to provide navigation links, either 
within the current document or other document. Common examples of navigation sections are Menus, table of content and 
indexes.

* `main` - The HTML `main` element represents the dominant content of a document. The main content area consists of 
content that is directly related to or expands upon the central topic of a document, or the central functionality of an
application.

* `article` - The HTML `article` element represents a self-contained composition in a document, page, application or 
site, which is intended to be independently distributed or reusable. Examples include: a forum post, a magazine or 
newspaper article, or a blog entry. [HTML article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

* `section` - represents a standalone section - which doesn't have more specific semantic element to represent it. 
[HTML section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

* `aside` - represents a portion of a document whose content is indirectly related to the document main content. 
[HTML aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)

* `footer` - typically consists of author information, copyright data or links to the related documents. 
[HTML footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

### Non-semantic elements
Sometimes it will hard to find ideal semantic element to group some items together or wrap some content. For cases like
these HTML provides elements `<div>` and `<span>`.

* `<span>` - inline non-semantic element.
* `<div>` - block-level non-semantic element.
 
## Link breaks and horizontal rules
`<br>` creates a line break in a paragraph; it is the only way to force a rigid structure where you want a series of 
fixed short lines, such as in a postal address or a poem.

```html
<p>There once was a man named O'Dell<br>
Who loved to write HTML<br>
But his structure was bad, his semantics were sad<br>
and his markup didn't read very well.</p>
```

`<hr>` elements denotes a horizontal rule in a document that denotes a thematic change in the text.

```html
<p>Hello World!</p>
<hr>
<p>some example words.</p>
```
