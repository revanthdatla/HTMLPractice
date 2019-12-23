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

#### Explore
1. Write block and inline examples?