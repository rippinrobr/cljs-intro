goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__11445 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__11446 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__11447 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__11446,"caption":table_section_wrapper__11446,"optgroup":opt_wrapper__11445,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__11447,"thead":table_section_wrapper__11446,"th":cell_wrapper__11447,"option":opt_wrapper__11445,"tbody":table_section_wrapper__11446,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__11446});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___11460 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__11464 = (((function (){var and__3822__auto____11461 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____11461)
{return no_tbody_QMARK___11460;
} else
{return and__3822__auto____11461;
}
})())?(function (){var and__3822__auto____11462 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____11462))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____11462;
}
})():(((function (){var and__3822__auto____11463 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____11463)
{return no_tbody_QMARK___11460;
} else
{return and__3822__auto____11463;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__11465__11466 = cljs.core.seq.call(null,tbody__11464);
if(G__11465__11466)
{var child__11467 = cljs.core.first.call(null,G__11465__11466);
var G__11465__11468 = G__11465__11466;
while(true){
if((function (){var and__3822__auto____11469 = cljs.core._EQ_.call(null,child__11467.nodeName,"tbody");
if(and__3822__auto____11469)
{return cljs.core._EQ_.call(null,child__11467.childNodes.length,0);
} else
{return and__3822__auto____11469;
}
})())
{child__11467.parentNode.removeChild(child__11467);
} else
{}
var temp__3974__auto____11470 = cljs.core.next.call(null,G__11465__11468);
if(temp__3974__auto____11470)
{var G__11465__11471 = temp__3974__auto____11470;
{
var G__11472 = cljs.core.first.call(null,G__11465__11471);
var G__11473 = G__11465__11471;
child__11467 = G__11472;
G__11465__11468 = G__11473;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__11487 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__11488 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__11487)))].join('').toLowerCase();
var vec__11486__11489 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__11488,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__11490 = cljs.core.nth.call(null,vec__11486__11489,0,null);
var start_wrap__11491 = cljs.core.nth.call(null,vec__11486__11489,1,null);
var end_wrap__11492 = cljs.core.nth.call(null,vec__11486__11489,2,null);
var div__11496 = (function (){var wrapper__11494 = (function (){var div__11493 = document.createElement("div");
div__11493.innerHTML = [cljs.core.str(start_wrap__11491),cljs.core.str(html__11487),cljs.core.str(end_wrap__11492)].join('');
return div__11493;
})();
var level__11495 = depth__11490;
while(true){
if((level__11495 > 0))
{{
var G__11498 = wrapper__11494.lastChild;
var G__11499 = (level__11495 - 1);
wrapper__11494 = G__11498;
level__11495 = G__11499;
continue;
}
} else
{return wrapper__11494;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__11496,html__11487);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____11497 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____11497)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__11487);
} else
{return and__3822__auto____11497;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__11496,html__11487);
} else
{}
return div__11496.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3822__auto____11504 = content;
if(and__3822__auto____11504)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____11504;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2389__auto____11505 = (((content == null))?null:content);
return (function (){var or__3824__auto____11506 = (domina.nodes[goog.typeOf(x__2389__auto____11505)]);
if(or__3824__auto____11506)
{return or__3824__auto____11506;
} else
{var or__3824__auto____11507 = (domina.nodes["_"]);
if(or__3824__auto____11507)
{return or__3824__auto____11507;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____11512 = nodeseq;
if(and__3822__auto____11512)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____11512;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2389__auto____11513 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____11514 = (domina.single_node[goog.typeOf(x__2389__auto____11513)]);
if(or__3824__auto____11514)
{return or__3824__auto____11514;
} else
{var or__3824__auto____11515 = (domina.single_node["_"]);
if(or__3824__auto____11515)
{return or__3824__auto____11515;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3822__auto____11517 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____11517))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____11517;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__11518){
var mesg = cljs.core.seq(arglist__11518);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__11519){
var mesg = cljs.core.seq(arglist__11519);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t11527))
{
/**
* @constructor
*/
domina.t11527 = (function (class_name,by_class,meta11528){
this.class_name = class_name;
this.by_class = by_class;
this.meta11528 = meta11528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t11527.cljs$lang$type = true;
domina.t11527.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"domina/t11527");
});
domina.t11527.prototype.domina$DomContent$ = true;
domina.t11527.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__11530 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__11530.class_name)));
});
domina.t11527.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__11531 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__11531.class_name)));
});
domina.t11527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11529){
var this__11532 = this;
return this__11532.meta11528;
});
domina.t11527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11529,meta11528){
var this__11533 = this;
return (new domina.t11527(this__11533.class_name,this__11533.by_class,meta11528));
});
domina.t11527;
} else
{}
return (new domina.t11527(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__11534_SHARP_){
return p1__11534_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__11535_SHARP_,p2__11536_SHARP_){
return goog.dom.insertChildAt(p1__11535_SHARP_,p2__11536_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11538_SHARP_,p2__11537_SHARP_){
return goog.dom.insertSiblingBefore(p2__11537_SHARP_,p1__11538_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11540_SHARP_,p2__11539_SHARP_){
return goog.dom.insertSiblingAfter(p2__11539_SHARP_,p1__11540_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11542_SHARP_,p2__11541_SHARP_){
return goog.dom.replaceNode(p2__11541_SHARP_,p1__11542_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__11544 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__11544)))
{return null;
} else
{return s__11544;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__11551__11552 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11551__11552)
{var n__11553 = cljs.core.first.call(null,G__11551__11552);
var G__11551__11554 = G__11551__11552;
while(true){
goog.style.setStyle(n__11553,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____11555 = cljs.core.next.call(null,G__11551__11554);
if(temp__3974__auto____11555)
{var G__11551__11556 = temp__3974__auto____11555;
{
var G__11557 = cljs.core.first.call(null,G__11551__11556);
var G__11558 = G__11551__11556;
n__11553 = G__11557;
G__11551__11554 = G__11558;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11559){
var content = cljs.core.first(arglist__11559);
var name = cljs.core.first(cljs.core.next(arglist__11559));
var value = cljs.core.rest(cljs.core.next(arglist__11559));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__11566__11567 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11566__11567)
{var n__11568 = cljs.core.first.call(null,G__11566__11567);
var G__11566__11569 = G__11566__11567;
while(true){
n__11568.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____11570 = cljs.core.next.call(null,G__11566__11569);
if(temp__3974__auto____11570)
{var G__11566__11571 = temp__3974__auto____11570;
{
var G__11572 = cljs.core.first.call(null,G__11566__11571);
var G__11573 = G__11566__11571;
n__11568 = G__11572;
G__11566__11569 = G__11573;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__11574){
var content = cljs.core.first(arglist__11574);
var name = cljs.core.first(cljs.core.next(arglist__11574));
var value = cljs.core.rest(cljs.core.next(arglist__11574));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__11581__11582 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11581__11582)
{var n__11583 = cljs.core.first.call(null,G__11581__11582);
var G__11581__11584 = G__11581__11582;
while(true){
n__11583.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____11585 = cljs.core.next.call(null,G__11581__11584);
if(temp__3974__auto____11585)
{var G__11581__11586 = temp__3974__auto____11585;
{
var G__11587 = cljs.core.first.call(null,G__11581__11586);
var G__11588 = G__11581__11586;
n__11583 = G__11587;
G__11581__11584 = G__11588;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__11594__11595 = pair.split(/\s*:\s*/);
var k__11596 = cljs.core.nth.call(null,vec__11594__11595,0,null);
var v__11597 = cljs.core.nth.call(null,vec__11594__11595,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____11598 = k__11596;
if(cljs.core.truth_(and__3822__auto____11598))
{return v__11597;
} else
{return and__3822__auto____11598;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__11596.toLowerCase()),v__11597);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__11601 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__11601))
{return domina.parse_style_attributes.call(null,style__11601);
} else
{if(cljs.core.truth_(style__11601.cssText))
{return domina.parse_style_attributes.call(null,style__11601.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__11607 = domina.single_node.call(null,content);
var attrs__11608 = node__11607.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__11599_SHARP_){
var attr__11609 = attrs__11608.item(p1__11599_SHARP_);
var value__11610 = attr__11609.nodeValue;
if((function (){var and__3822__auto____11611 = cljs.core.not_EQ_.call(null,null,value__11610);
if(and__3822__auto____11611)
{return cljs.core.not_EQ_.call(null,"",value__11610);
} else
{return and__3822__auto____11611;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__11609.nodeName.toLowerCase())],[attr__11609.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__11608.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__11631__11632 = cljs.core.seq.call(null,styles);
if(G__11631__11632)
{var G__11634__11636 = cljs.core.first.call(null,G__11631__11632);
var vec__11635__11637 = G__11634__11636;
var name__11638 = cljs.core.nth.call(null,vec__11635__11637,0,null);
var value__11639 = cljs.core.nth.call(null,vec__11635__11637,1,null);
var G__11631__11640 = G__11631__11632;
var G__11634__11641 = G__11634__11636;
var G__11631__11642 = G__11631__11640;
while(true){
var vec__11643__11644 = G__11634__11641;
var name__11645 = cljs.core.nth.call(null,vec__11643__11644,0,null);
var value__11646 = cljs.core.nth.call(null,vec__11643__11644,1,null);
var G__11631__11647 = G__11631__11642;
domina.set_style_BANG_.call(null,content,name__11645,value__11646);
var temp__3974__auto____11648 = cljs.core.next.call(null,G__11631__11647);
if(temp__3974__auto____11648)
{var G__11631__11649 = temp__3974__auto____11648;
{
var G__11650 = cljs.core.first.call(null,G__11631__11649);
var G__11651 = G__11631__11649;
G__11634__11641 = G__11650;
G__11631__11642 = G__11651;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__11671__11672 = cljs.core.seq.call(null,attrs);
if(G__11671__11672)
{var G__11674__11676 = cljs.core.first.call(null,G__11671__11672);
var vec__11675__11677 = G__11674__11676;
var name__11678 = cljs.core.nth.call(null,vec__11675__11677,0,null);
var value__11679 = cljs.core.nth.call(null,vec__11675__11677,1,null);
var G__11671__11680 = G__11671__11672;
var G__11674__11681 = G__11674__11676;
var G__11671__11682 = G__11671__11680;
while(true){
var vec__11683__11684 = G__11674__11681;
var name__11685 = cljs.core.nth.call(null,vec__11683__11684,0,null);
var value__11686 = cljs.core.nth.call(null,vec__11683__11684,1,null);
var G__11671__11687 = G__11671__11682;
domina.set_attr_BANG_.call(null,content,name__11685,value__11686);
var temp__3974__auto____11688 = cljs.core.next.call(null,G__11671__11687);
if(temp__3974__auto____11688)
{var G__11671__11689 = temp__3974__auto____11688;
{
var G__11690 = cljs.core.first.call(null,G__11671__11689);
var G__11691 = G__11671__11689;
G__11674__11681 = G__11690;
G__11671__11682 = G__11691;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__11698__11699 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11698__11699)
{var node__11700 = cljs.core.first.call(null,G__11698__11699);
var G__11698__11701 = G__11698__11699;
while(true){
goog.dom.classes.add(node__11700,class$);
var temp__3974__auto____11702 = cljs.core.next.call(null,G__11698__11701);
if(temp__3974__auto____11702)
{var G__11698__11703 = temp__3974__auto____11702;
{
var G__11704 = cljs.core.first.call(null,G__11698__11703);
var G__11705 = G__11698__11703;
node__11700 = G__11704;
G__11698__11701 = G__11705;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__11712__11713 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11712__11713)
{var node__11714 = cljs.core.first.call(null,G__11712__11713);
var G__11712__11715 = G__11712__11713;
while(true){
goog.dom.classes.remove(node__11714,class$);
var temp__3974__auto____11716 = cljs.core.next.call(null,G__11712__11715);
if(temp__3974__auto____11716)
{var G__11712__11717 = temp__3974__auto____11716;
{
var G__11718 = cljs.core.first.call(null,G__11712__11717);
var G__11719 = G__11712__11717;
node__11714 = G__11718;
G__11712__11715 = G__11719;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__11727 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__11728__11729 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11728__11729)
{var node__11730 = cljs.core.first.call(null,G__11728__11729);
var G__11728__11731 = G__11728__11729;
while(true){
goog.dom.classes.set(node__11730,classes__11727);
var temp__3974__auto____11732 = cljs.core.next.call(null,G__11728__11731);
if(temp__3974__auto____11732)
{var G__11728__11733 = temp__3974__auto____11732;
{
var G__11734 = cljs.core.first.call(null,G__11728__11733);
var G__11735 = G__11728__11733;
node__11730 = G__11734;
G__11728__11731 = G__11735;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__11742__11743 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11742__11743)
{var node__11744 = cljs.core.first.call(null,G__11742__11743);
var G__11742__11745 = G__11742__11743;
while(true){
goog.dom.setTextContent(node__11744,value);
var temp__3974__auto____11746 = cljs.core.next.call(null,G__11742__11745);
if(temp__3974__auto____11746)
{var G__11742__11747 = temp__3974__auto____11746;
{
var G__11748 = cljs.core.first.call(null,G__11742__11747);
var G__11749 = G__11742__11747;
node__11744 = G__11748;
G__11742__11745 = G__11749;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__11756__11757 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11756__11757)
{var node__11758 = cljs.core.first.call(null,G__11756__11757);
var G__11756__11759 = G__11756__11757;
while(true){
goog.dom.forms.setValue(node__11758,value);
var temp__3974__auto____11760 = cljs.core.next.call(null,G__11756__11759);
if(temp__3974__auto____11760)
{var G__11756__11761 = temp__3974__auto____11760;
{
var G__11762 = cljs.core.first.call(null,G__11756__11761);
var G__11763 = G__11756__11761;
node__11758 = G__11762;
G__11756__11759 = G__11763;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___11780 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___11781 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__11782 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___11783 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__11782);
if(cljs.core.truth_((function (){var and__3822__auto____11784 = allows_inner_html_QMARK___11780;
if(and__3822__auto____11784)
{var and__3822__auto____11786 = (function (){var or__3824__auto____11785 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____11785))
{return or__3824__auto____11785;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___11781);
}
})();
if(cljs.core.truth_(and__3822__auto____11786))
{return !(special_tag_QMARK___11783);
} else
{return and__3822__auto____11786;
}
} else
{return and__3822__auto____11784;
}
})()))
{var value__11787 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__11790__11791 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11790__11791)
{var node__11792 = cljs.core.first.call(null,G__11790__11791);
var G__11790__11793 = G__11790__11791;
while(true){
goog.events.removeAll(node__11792);
node__11792.innerHTML = value__11787;
var temp__3974__auto____11794 = cljs.core.next.call(null,G__11790__11793);
if(temp__3974__auto____11794)
{var G__11790__11795 = temp__3974__auto____11794;
{
var G__11796 = cljs.core.first.call(null,G__11790__11795);
var G__11797 = G__11790__11795;
node__11792 = G__11796;
G__11790__11793 = G__11797;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e11788){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e11788))
{var e__11789 = e11788;
domina.replace_children_BANG_.call(null,content,value__11787);
} else
{if("\uFDD0'else")
{throw e11788;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__11803 = domina.single_node.call(null,node).__domina_data;
var value__11804 = (cljs.core.truth_(m__11803)?cljs.core._lookup.call(null,m__11803,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____11805 = bubble;
if(cljs.core.truth_(and__3822__auto____11805))
{return (value__11804 == null);
} else
{return and__3822__auto____11805;
}
})()))
{var temp__3974__auto____11806 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____11806))
{var parent__11807 = temp__3974__auto____11806;
return get_data.call(null,parent__11807,key,true);
} else
{return null;
}
} else
{return value__11804;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__11813 = (function (){var or__3824__auto____11812 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____11812))
{return or__3824__auto____11812;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__11813,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__11825 = domina.nodes.call(null,parent_content);
var children__11826 = domina.nodes.call(null,child_content);
var first_child__11834 = (function (){var frag__11827 = document.createDocumentFragment();
var G__11828__11829 = cljs.core.seq.call(null,children__11826);
if(G__11828__11829)
{var child__11830 = cljs.core.first.call(null,G__11828__11829);
var G__11828__11831 = G__11828__11829;
while(true){
frag__11827.appendChild(child__11830);
var temp__3974__auto____11832 = cljs.core.next.call(null,G__11828__11831);
if(temp__3974__auto____11832)
{var G__11828__11833 = temp__3974__auto____11832;
{
var G__11836 = cljs.core.first.call(null,G__11828__11833);
var G__11837 = G__11828__11833;
child__11830 = G__11836;
G__11828__11831 = G__11837;
continue;
}
} else
{}
break;
}
} else
{}
return frag__11827;
})();
var other_children__11835 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__11825) - 1),(function (){
return first_child__11834.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__11825))
{f.call(null,cljs.core.first.call(null,parents__11825),first_child__11834);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11808_SHARP_,p2__11809_SHARP_){
return f.call(null,p1__11808_SHARP_,p2__11809_SHARP_);
}),cljs.core.rest.call(null,parents__11825),other_children__11835));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto____11839 = obj;
if(cljs.core.truth_(and__3822__auto____11839))
{return obj.length;
} else
{return and__3822__auto____11839;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__11843__11844 = list_thing;
if(G__11843__11844)
{if((function (){var or__3824__auto____11845 = (G__11843__11844.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11845)
{return or__3824__auto____11845;
} else
{return G__11843__11844.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11843__11844.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11843__11844);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11843__11844);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__11846__11847 = content;
if(G__11846__11847)
{if((function (){var or__3824__auto____11848 = (G__11846__11847.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11848)
{return or__3824__auto____11848;
} else
{return G__11846__11847.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11846__11847.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11846__11847);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11846__11847);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__11849__11850 = content;
if(G__11849__11850)
{if((function (){var or__3824__auto____11851 = (G__11849__11850.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11851)
{return or__3824__auto____11851;
} else
{return G__11849__11850.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11849__11850.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11849__11850);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11849__11850);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
