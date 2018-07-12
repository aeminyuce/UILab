# Events JS 1.0.0

Events JS requires Selector JS.

* [Selector JS](https://ahmeteminyuce.github.io/UILab/docs/selector.js/index.html)

Events JS is a simple javascript creating and triggering events.

* [Documentation Examples](https://ahmeteminyuce.github.io/UILab/docs/events.js/index.html)


**Add events:**
```
events.on(element, event, function);
```

**Remove events:**
```
events.off(element, event);
```

**Trigger events:**
```
events.trigger(element, event);
```

**Check classname:**
```
events.hasClass(element, '.class');
```

**Add classname:**
```
events.addClass(element, '.class');
```

**Remove classname:**
```
events.removeClass(element, '.class');
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
