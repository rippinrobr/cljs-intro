goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('domina');
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return alert(domina.value.call(null,domina.by_id.call(null,"lname")));
}));
