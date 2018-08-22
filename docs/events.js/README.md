# Events JS

Events JS requires Selector JS.

* [Selector JS](https://ahmeteminyuce.github.io/UILab/docs/selector.js/index.html)

Events JS is a simple javascript creating and triggering events.

* [Documentation Examples](https://ahmeteminyuce.github.io/UILab/docs/events.js/index.html)


**Page load event:**
```
events.onload(function);
```

**Add events:**
```
events.on(element, event, function);
events.on(element, event event ..., function);
```

**Add delegate events:**
```
events.on(document, event, element, function);
```

**Remove events:**
```
events.off(element, event);
events.off(element, event event ...);
```

**Remove delegated events:**
```
events.off(document, event);
```

**Event naming:**
```
events.on(element, event.eventname, function);
events.on(element, event event.eventname ..., function);
events.on(document, event.eventname, function);

events.off(element, event.eventname);
events.off(element, event event.eventname ...);
events.off(document, event.eventname);
```

**Trigger events:**
```
events.trigger(element, event);
events.trigger(element, event event ...);
```

**Check classname:**
```
events.hasClass(element, '.class');
events.hasClass(element, '.class .class ...');
```

**Add classname:**
```
events.addClass(element, '.class');
events.addClass(element, '.class .class ...');
```

**Remove classname:**
```
events.removeClass(element, '.class');
events.removeClass(element, '.class .class ...');
```

**Toggle classname:**
```
events.toggleClass(element, '.class');
events.toggleClass(element, '.class .class ...');
```

**Show element:**
```
events.show(element);
```

**Hide element:**
```
events.hide(element);
```

**.each() Run for each matched element:**
```
events.each(element, function);
```

**.closest() Returns the first ancestor:**
```
events.closest(element, element);
```

**Set the width of elements:**
```
events.width(element, value);
```

**Set the height of elements:**
```
events.height(element, value);
```

**.parser() Parse text to html:**
```
events.parser(text);
```

**.clone() Clone and parse inner contents of element:**
```
events.clone(element);
```
