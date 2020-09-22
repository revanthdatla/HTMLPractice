Advanced Text Formatting
==============
## Description Lists
This list is used to mark up a set of items, and their associated descriptions such as terms and definitions or questions
and answers.

```html
<dl>
    <dt></dt> <!-- defines description term -->
    <dd></dd> <!-- defines description definition   --> 
</dl>
```

## Quotations
Marking up quotations is available based on marking up a block or inline quotation.

### Block Quotation
If a section of a block level content is quoted from somewhere else. Be it a paragraph or multiple paragraphs or a list.
This needs to be wrapped in a `<blockquote>` element to signify this and point the source URL using the `cite` attribute.

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates
                that the enclosed text is an extended quotation.</p>
</blockquote>
```

The browser default styling indents the quote when compared with a paragraph to signify the quote.

### Inline Quotation
The quote `<q>` is intended for short quotation that doesn't require paragraph breaks.

```html
<p>The quote element <code>&lt;q&gt;</code> - is
        <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
        for short quotations that don't require
        paragraph breaks.</q>
</p>
```
The default browser renders the inline quotation in quotes.

## Citations
The content of the `cite` attribute sounds useful, but browsers, screen readers etc. don't really do much with it.
There is no way to write the contents of the cite, without writing your own solution using JS or CSS.

The `cite` element can be used to contain the title of the resource being quoted, e.g. the title of a Book.

```html
<cite>

</cite>
```
Citations are styled in italic font by default.

## Abbreviations
This is used to wrap around an abbreviation or acronym using `abbr` HTML element. The expansion of the abbreviation 
will appear in the tooltip when the term is hovered over.

```html
<p>We use <abbr title="Hyper Text Markup Language">HTML</abbr> to structure our web documents.</p>
```

## Marking up contact details
The contact information can be wrapped around the `address` element.

```html
<address>
    <p>Revanth Datla, Andhra Pradesh, India</p>
</address>
```

## Superscript and Subscript
Occasionally items like Date, Chemical Formulae and Mathematical Equations need to use superscript and subscript to
have semantically correct meaning.

```html
<p>x <sup>2</sup> is 9, then x must equal to 3 or -3./p>

<p>H <sub>2</sub> molecule.</p>
```

## Representing Computer Code
They are many elements available for marking up computer code.

* `code` - For marking up generic pieces of computer code.
* `pre` - For retaining whitespace - if you use indentation or excess whitespace inside your text, browsers will ignore
and will not see it on the rendered page. Using `<pre></pre>` tags however, your whitespace will be rendered identically
 to how you see on the text editor.
* `var` - For marking up variable names.
* `kdb` - For marking up the keyboard input entered into the computer.
* `samp` - For marking up the output of a computer program.

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>

<p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>


<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

## Marking up times and dates
The HTML provides `<time>` element for marking up times and dates in a machine readable foramt.

```html
<!--    Standard Simple Date -->
    <time datetime="2020-09-21">21 September 2020</time>
    <!--    Just year and month-->
    <time datetime="2020-09">September 2020</time>
    <!-- Just month and day -->
    <time datetime="09-21">21 September</time>
    <!-- Just time, hours and minutes -->
    <time datetime="09:30">09:30</time>
    <!--    You can do seconds and milliseconds too -->
    <time datetime="09:30:01.834">09:30.01.834</time>
    <!-- Date and time -->
    <time datetime="2020-09-21T19:30">7:30pm, 21 September 2020</time>
    <!-- Date and time with Timezone offset -->
    <time datetime="2020-09-21T19:30T+01:00">07:30pm, 21 September 2020 is 08:30pm in France</time>
    <!-- Calling out a specific-->
    <time datetime="2020-W04">The fourth week of 2020</time>
```
