goog.provide('cljs_intro.hello');
goog.require('cljs.core');
cljs_intro.hello.greeting = (function greeting(){
return document.write("<p>Hello Hockey Fans!</p>");
});
goog.exportSymbol('cljs_intro.hello.greeting', cljs_intro.hello.greeting);
