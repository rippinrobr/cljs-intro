goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('cljs_intro.pubsub');
goog.require('cljs_intro.views');
goog.require('shoreleave.remotes.request');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('domina.xpath');
goog.require('domina');
/**
* Reference to the search-button DOM object
*/
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
cljs_intro.search.lastname_field = domina.by_id.call(null,"lname");
cljs_intro.search.history_button = domina.by_id.call(null,"history-btn");
domina.set_styles_BANG_.call(null,cljs_intro.search.history_button,cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
cljs_intro.search.update_results_div = (function update_results_div(data){
var res_div__242095 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__242095);
return domina.append_BANG_.call(null,res_div__242095,data);
});
/**
* converts the returned JSON to clj data, removes old html in the
* results div and calls the function to display the new stats
*/
cljs_intro.search.display_results = (function display_results(data){
return cljs_intro.search.update_results_div.call(null,cljs_intro.views.show_stats.call(null,data));
});
cljs_intro.search.sl_display_results = (function sl_display_results(p__242096){
var map__242102__242103 = p__242096;
var map__242102__242104 = ((cljs.core.seq_QMARK_.call(null,map__242102__242103))?cljs.core.apply.call(null,cljs.core.hash_map,map__242102__242103):map__242102__242103);
var event__242105 = cljs.core._lookup.call(null,map__242102__242104,"\uFDD0'event",null);
var body__242106 = cljs.core._lookup.call(null,map__242102__242104,"\uFDD0'body",null);
return cljs_intro.search.update_results_div.call(null,cljs_intro.views.show_stats.call(null,cljs.core.js__GT_clj.call(null,body__242106,"\uFDD0'keywordize-keys",true)));
});
cljs_intro.search.find_player = (function find_player(lastname){
return shoreleave.remotes.request.request.call(null,[cljs.core.str("/player/"),cljs.core.str(lastname)].join(''),"\uFDD0'on-success",cljs_intro.search.sl_display_results,"\uFDD0'on-error",(function (){
return alert("an error!");
}),"\uFDD0'use-json",true);
});
cljs_intro.search.search_state_change = (function search_state_change(p__242107){
var map__242112__242113 = p__242107;
var map__242112__242114 = ((cljs.core.seq_QMARK_.call(null,map__242112__242113))?cljs.core.apply.call(null,cljs.core.hash_map,map__242112__242113):map__242112__242113);
var new__242115 = cljs.core._lookup.call(null,map__242112__242114,"\uFDD0'new",null);
if((cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'previous-searches")).call(null,new__242115)) > 0))
{return domina.set_styles_BANG_.call(null,cljs_intro.search.history_button,cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":""}));
} else
{return null;
}
});
cljs_intro.search.view_history = (function view_history(current_lname){
return cljs_intro.search.update_results_div.call(null,cljs_intro.views.show_history.call(null,cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0'previous-searches")).call(null,cljs.core.deref.call(null,cljs_intro.pubsub.search_state)),current_lname)));
});
cljs_intro.pubsub.subscribe_to.call(null,"\uFDD0'search",cljs_intro.search.find_player);
cljs_intro.pubsub.subscribe_to.call(null,"\uFDD0'results",cljs_intro.search.display_results);
cljs_intro.pubsub.subscribe_to.call(null,cljs_intro.pubsub.search_state,cljs_intro.search.search_state_change);
cljs_intro.pubsub.subscribe_to.call(null,"\uFDD0'history",cljs_intro.search.view_history);
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs_intro.pubsub.publish_search_string.call(null,domina.value.call(null,cljs_intro.search.lastname_field));
}));
clojure.browser.event.listen.call(null,cljs_intro.search.history_button,"click",(function (){
return cljs_intro.pubsub.publish_view_history.call(null,domina.value.call(null,cljs_intro.search.lastname_field));
}));
