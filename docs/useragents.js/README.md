# Useragents JS 1.0.0

Useragents JS requires Events JS.

* [Selector JS](https://ahmeteminyuce.github.io/UILab/docs/events.js/index.html)

Useragents JS is a simple javascript detecting browsers, devices and operating systems.

* [Documentation Examples](https://ahmeteminyuce.github.io/UILab/docs/useragents.js/index.html)


**User agents:**
Add classnames to the html element:
```
<html class="en localhost chrome android mobile portrait">
```

**Variables:**
Returns true/false
```
useragents.ie
useragents.ie9
useragents.edge
useragents.mobile
useragents.ios
useragents.android
useragents.androidOld
useragents.androidWebView
```

**Mobile orientation change events:**
```
events.on(document, 'useragents:portrait', function);
events.on(document, 'useragents:landscape', function);
```
