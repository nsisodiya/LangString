# LangString
LangString, the most simple way for javascript internationalization.

# Demo
http://jsfiddle.net/nsisodiya/gguL9aax/

# Syntax

```html
<script src="https://rawgit.com/nsisodiya/LangString/master/langstring.js" type="text/javascript"></script>
```

```js
LangString.dict = {
    "en-US": {
        "HELLO_WORLD": "Hello World"
    },
    "de-DE": {
        "HELLO_WORLD": "Hallo Welt"
    }
};

var str = new LangString("HELLO_WORLD");

LangString.langCode = "en-US";
console.log(str);    // HEllo World

LangString.langCode = "de-DE";
console.log(str);    // Hallo Welt
```
