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
* converts the returned JSON to clj data, removes old html in the
* results div and calls the function to display the new stats
*/
cljs_intro.search.display_results = (function display_results(p__225224){
var map__225230__225231 = p__225224;
var map__225230__225232 = ((cljs.core.seq_QMARK_.call(null,map__225230__225231))?cljs.core.apply.call(null,cljs.core.hash_map,map__225230__225231):map__225230__225231);
var new__225233 = cljs.core._lookup.call(null,map__225230__225232,"\uFDD0'new",null);
var res_div__225234 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__225234);
return domina.append_BANG_.call(null,res_div__225234,cljs_intro.views.show_stats.call(null,(new cljs.core.Keyword("\uFDD0'results")).call(null,new__225233)));
});
/**
* calls the player web service using goog.net.XhrIo to make
* the call.
*/
cljs_intro.search.player_lookup = (function player_lookup(p__225235){
var map__225240__225241 = p__225235;
var map__225240__225242 = ((cljs.core.seq_QMARK_.call(null,map__225240__225241))?cljs.core.apply.call(null,cljs.core.hash_map,map__225240__225241):map__225240__225241);
var new__225243 = cljs.core._lookup.call(null,map__225240__225242,"\uFDD0'new",null);
return goog.net.XhrIo.send([cljs.core.str("/player/"),cljs.core.str((new cljs.core.Keyword("\uFDD0'lastname")).call(null,new__225243))].join(''),(function (data){
return cljs.core.swap_BANG_.call(null,cljs_intro.pubsub.search_results,cljs.core.merge,cljs.core.ObjMap.fromObject(["\uFDD0'results"],{"\uFDD0'results":cljs.core.js__GT_clj.call(null,data.target.getResponseJson(),"\uFDD0'keywordize-keys",true)}));
}));
});
cljs_intro.pubsub.subscribe_to_search.call(null,cljs_intro.search.player_lookup);
cljs_intro.pubsub.subscribe_to_results.call(null,cljs_intro.search.display_results);
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs.core.swap_BANG_.call(null,cljs_intro.pubsub.search_state,cljs.core.merge,cljs.core.ObjMap.fromObject(["\uFDD0'lastname"],{"\uFDD0'lastname":domina.value.call(null,domina.by_id.call(null,"lname"))}));
}));
