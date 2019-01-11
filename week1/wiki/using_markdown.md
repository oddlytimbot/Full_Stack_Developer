### What is markdown, and why would we use it?

According to Ghost.org (who created an entire blog software around markdown) the format has many benefits.

> "Markdown is a plain text formatting syntax for writers. It allows you to quickly write structured content for the web, and have it seamlessly converted to clean, structured HTML."

In essence, markdown is a simpler formatting tool than using tags and nodes such as we would find in HTML or XML. It has become hugely popular in documenting code projects, is the de-facto standard for most wikis, and is an essential tool for developers to be familiar with.

Developers prefer markdown for the same reasons they prefer the command-line over a GUI - speed, accuracy, and above all staying in flow by keeping the hands at the keyboard.

> "Using a traditional writing user interface you have to pause your writing every few minutes (or sometimes seconds) and reach for the mouse in order to click, highlight, click a formatting button, and then click back to where you left off in order to continue. This process creates a tiresome, disjointed experience when all you want to do is get the words out of your head and onto the screen.

> Markdown allows you to keep your fingers firmly planted on the keyboard as you apply formatting on the fly. In short: You never have to stop typing or think about anything else in order to apply your styles."

### How do I markdown?

With just a few keystrokes, markdown can render documentation into pleasing headers, bold text, italics, quotes and more. Get familiar with the most common uses.

Markdown (italics, bold, hyperlinks):

`The *quick* brown fox, jumped **over** the lazy [dog](https://en.wikipedia.org/wiki/Dog).`

Result:

The _quick_ brown fox, jumped **over** the lazy [dog](https://en.wikipedia.org/wiki/Dog).

Markdown (headings):

```
# Heading 1
## Heading 2
### Heading 3
```

Markdown (text formats):

```
*italic*
**bold**
***bold-italic***
[link](http://example.com)
```

Markdown (images):

```
![m'lady](http://i.imgur.com/v8IVDka.jpg)
```

Markdown (lists):

```
* Milk
* Bread
    * Wholegrain
* Butter

1. Milk
2. Bread
3. Butter
```

To make bullet lists, use `*` before each item. To create a sub-item, just preceed it with four spaces. Use numbers for numbered lists - simple.

Markdown (horizontal rules):

```
---
```

Markdown (code):

````
    ```codeformat
        //code goes in here
    ```
````

You can format blocks of code and have them appear in your documentation by encasing them in caret characters. You can even specify the language of the code block to apply specific color formatting.

Markdown (reference lists):

```
**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"
```

### Additional Markdown

There are more advanced (and fancy) uses of markdown, but frankly you will rarely need them. Markdown is meant to be used for simplicity and speed.
