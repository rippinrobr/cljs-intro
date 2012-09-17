goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('cljs_intro.pubsub');
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
* Reference to the previous-search-btn DOM object
*/
cljs_intro.search.previous_search_button = domina.by_id.call(null,"previous-search-btn");
domina.set_styles_BANG_.call(null,cljs_intro.search.previous_search_button,cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
/**
* converts the returned JSON to clj data, removes old html in the
* results div and calls the function to display the new stats
*/
cljs_intro.search.display_results = (function display_results(data){
var res_div__669761 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__669761);
return domina.append_BANG_.call(null,res_div__669761,cljs_intro.views.show_stats.call(null,data));
});
/**
* calls the player web service using goog.net.XhrIo to make
* the call.
*/
cljs_intro.search.player_lookup = (function player_lookup(p__669762){
var map__669767__669768 = p__669762;
var map__669767__669769 = ((cljs.core.seq_QMARK_.call(null,map__669767__669768))?cljs.core.apply.call(null,cljs.core.hash_map,map__669767__669768):map__669767__669768);
var new__669770 = cljs.core._lookup.call(null,map__669767__669769,"\uFDD0'new",null);
return goog.net.XhrIo.send([cljs.core.str("/player/"),cljs.core.str((new cljs.core.Keyword("\uFDD0'lastname")).call(null,new__669770))].join(''),(function (data){
return cljs_intro.pubsub.publish_results.call(null,cljs.core.js__GT_clj.call(null,data.target.getResponseJson(),"\uFDD0'keywordize-keys",true));
}));
});
cljs_intro.pubsub.subscribe_to_search.call(null,cljs_intro.search.player_lookup);
cljs_intro.pubsub.subscribe_to.call(null,cljs_intro.pubsub.results_topic,cljs_intro.search.display_results);
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs.core.swap_BANG_.call(null,cljs_intro.pubsub.search_state,cljs.core.merge,cljs.core.ObjMap.fromObject(["\uFDD0'lastname"],{"\uFDD0'lastname":domina.value.call(null,domina.by_id.call(null,"lname"))}));
}));
