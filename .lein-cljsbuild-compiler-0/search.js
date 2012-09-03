goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('domina');
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
cljs_intro.search.lname_field = domina.by_id.call(null,"lname");
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return alert(domina.value.call(null,domina.by_id.call(null,"lname")));
}));
