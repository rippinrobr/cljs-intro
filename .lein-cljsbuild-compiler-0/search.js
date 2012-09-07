goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('cljs_intro.views');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('domina.xpath');
goog.require('domina');
/**
* Reference to the search-button DOM object
*/
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
/**
* converts the returned JSON to clj data, removes old html in the
* results div and calls the function to display the new stats
*/
cljs_intro.search.display_results = (function display_results(json){
var data__152035 = cljs.core.js__GT_clj.call(null,json.target.getResponseJson(),"\uFDD0'keywordize-keys",true);
var res_div__152036 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__152036);
return domina.append_BANG_.call(null,res_div__152036,cljs_intro.views.show_stats.call(null,data__152035));
});
/**
* calls the player web service using goog.net.XhrIo to make
* the call.
*/
cljs_intro.search.player_lookup = (function player_lookup(last_name){
return goog.net.XhrIo.send([cljs.core.str("/player/"),cljs.core.str(last_name)].join(''),cljs_intro.search.display_results);
});
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs_intro.search.player_lookup.call(null,domina.value.call(null,domina.by_id.call(null,"lname")));
}));
