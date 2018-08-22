# Selector JS

Selector JS is a simple javascript selector to select HTML elements.

* [Documentation Examples](https://ahmeteminyuce.github.io/UILab/docs/selector.js/index.html)


**Select tagname:**
```
selector('element');
```

**Select multiple tagname:**
```
selector('element, element');
```

**Select first tagname:**
```
selector('element')[0];
```

**Select CSS3 last-child of tagname:**
```
selector(':last-child');
```

**Select Classname:**
```
selector('.class');
```

**Select id:**
```
selector('#id');
```

**Select with attribute:**
```
selector('[attribute]');
```

**Select document:**
```
selector(document);
```

**Select window:**
```
selector(window);
```

**Select this element:**
```
selector(this);
```

**Find tagname in this element:**
```
selector('element', this);
```

**Find classname in selected classname:**
```
selector('.class', '.class');
```

**Find id in selected classname:**
```
selector('#id', '.class');
```
