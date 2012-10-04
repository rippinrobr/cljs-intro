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
var opt_wrapper__12453 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__12454 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__12455 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__12454,"caption":table_section_wrapper__12454,"optgroup":opt_wrapper__12453,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__12455,"thead":table_section_wrapper__12454,"th":cell_wrapper__12455,"option":opt_wrapper__12453,"tbody":table_section_wrapper__12454,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__12454});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___12468 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__12472 = (((function (){var and__3822__auto____12469 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____12469)
{return no_tbody_QMARK___12468;
} else
{return and__3822__auto____12469;
}
})())?(function (){var and__3822__auto____12470 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____12470))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____12470;
}
})():(((function (){var and__3822__auto____12471 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____12471)
{return no_tbody_QMARK___12468;
} else
{return and__3822__auto____12471;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__12473__12474 = cljs.core.seq.call(null,tbody__12472);
if(G__12473__12474)
{var child__12475 = cljs.core.first.call(null,G__12473__12474);
var G__12473__12476 = G__12473__12474;
while(true){
if((function (){var and__3822__auto____12477 = cljs.core._EQ_.call(null,child__12475.nodeName,"tbody");
if(and__3822__auto____12477)
{return cljs.core._EQ_.call(null,child__12475.childNodes.length,0);
} else
{return and__3822__auto____12477;
}
})())
{child__12475.parentNode.removeChild(child__12475);
} else
{}
var temp__3974__auto____12478 = cljs.core.next.call(null,G__12473__12476);
if(temp__3974__auto____12478)
{var G__12473__12479 = temp__3974__auto____12478;
{
var G__12480 = cljs.core.first.call(null,G__12473__12479);
var G__12481 = G__12473__12479;
child__12475 = G__12480;
G__12473__12476 = G__12481;
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
var html__12495 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__12496 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__12495)))].join('').toLowerCase();
var vec__12494__12497 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__12496,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__12498 = cljs.core.nth.call(null,vec__12494__12497,0,null);
var start_wrap__12499 = cljs.core.nth.call(null,vec__12494__12497,1,null);
var end_wrap__12500 = cljs.core.nth.call(null,vec__12494__12497,2,null);
var div__12504 = (function (){var wrapper__12502 = (function (){var div__12501 = document.createElement("div");
div__12501.innerHTML = [cljs.core.str(start_wrap__12499),cljs.core.str(html__12495),cljs.core.str(end_wrap__12500)].join('');
return div__12501;
})();
var level__12503 = depth__12498;
while(true){
if((level__12503 > 0))
{{
var G__12506 = wrapper__12502.lastChild;
var G__12507 = (level__12503 - 1);
wrapper__12502 = G__12506;
level__12503 = G__12507;
continue;
}
} else
{return wrapper__12502;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__12504,html__12495);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____12505 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____12505)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__12495);
} else
{return and__3822__auto____12505;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__12504,html__12495);
} else
{}
return div__12504.childNodes;
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
if((function (){var and__3822__auto____12512 = content;
if(and__3822__auto____12512)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____12512;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2413__auto____12513 = (((content == null))?null:content);
return (function (){var or__3824__auto____12514 = (domina.nodes[goog.typeOf(x__2413__auto____12513)]);
if(or__3824__auto____12514)
{return or__3824__auto____12514;
} else
{var or__3824__auto____12515 = (domina.nodes["_"]);
if(or__3824__auto____12515)
{return or__3824__auto____12515;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____12520 = nodeseq;
if(and__3822__auto____12520)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____12520;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2413__auto____12521 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____12522 = (domina.single_node[goog.typeOf(x__2413__auto____12521)]);
if(or__3824__auto____12522)
{return or__3824__auto____12522;
} else
{var or__3824__auto____12523 = (domina.single_node["_"]);
if(or__3824__auto____12523)
{return or__3824__auto____12523;
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
if(cljs.core.truth_((function (){var and__3822__auto____12525 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____12525))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____12525;
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
log_debug.cljs$lang$applyTo = (function (arglist__12526){
var mesg = cljs.core.seq(arglist__12526);;
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
log.cljs$lang$applyTo = (function (arglist__12527){
var mesg = cljs.core.seq(arglist__12527);;
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
if((void 0 === domina.t12535))
{
/**
* @constructor
*/
domina.t12535 = (function (class_name,by_class,meta12536){
this.class_name = class_name;
this.by_class = by_class;
this.meta12536 = meta12536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t12535.cljs$lang$type = true;
domina.t12535.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"domina/t12535");
});
domina.t12535.prototype.domina$DomContent$ = true;
domina.t12535.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12538 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__12538.class_name)));
});
domina.t12535.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12539 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__12539.class_name)));
});
domina.t12535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12537){
var this__12540 = this;
return this__12540.meta12536;
});
domina.t12535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12537,meta12536){
var this__12541 = this;
return (new domina.t12535(this__12541.class_name,this__12541.by_class,meta12536));
});
domina.t12535;
} else
{}
return (new domina.t12535(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__12542_SHARP_){
return p1__12542_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__12543_SHARP_,p2__12544_SHARP_){
return goog.dom.insertChildAt(p1__12543_SHARP_,p2__12544_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__12546_SHARP_,p2__12545_SHARP_){
return goog.dom.insertSiblingBefore(p2__12545_SHARP_,p1__12546_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12548_SHARP_,p2__12547_SHARP_){
return goog.dom.insertSiblingAfter(p2__12547_SHARP_,p1__12548_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12550_SHARP_,p2__12549_SHARP_){
return goog.dom.replaceNode(p2__12549_SHARP_,p1__12550_SHARP_);
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
var s__12552 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__12552)))
{return null;
} else
{return s__12552;
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
var G__12559__12560 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12559__12560)
{var n__12561 = cljs.core.first.call(null,G__12559__12560);
var G__12559__12562 = G__12559__12560;
while(true){
goog.style.setStyle(n__12561,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12563 = cljs.core.next.call(null,G__12559__12562);
if(temp__3974__auto____12563)
{var G__12559__12564 = temp__3974__auto____12563;
{
var G__12565 = cljs.core.first.call(null,G__12559__12564);
var G__12566 = G__12559__12564;
n__12561 = G__12565;
G__12559__12562 = G__12566;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12567){
var content = cljs.core.first(arglist__12567);
var name = cljs.core.first(cljs.core.next(arglist__12567));
var value = cljs.core.rest(cljs.core.next(arglist__12567));
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
var G__12574__12575 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12574__12575)
{var n__12576 = cljs.core.first.call(null,G__12574__12575);
var G__12574__12577 = G__12574__12575;
while(true){
n__12576.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12578 = cljs.core.next.call(null,G__12574__12577);
if(temp__3974__auto____12578)
{var G__12574__12579 = temp__3974__auto____12578;
{
var G__12580 = cljs.core.first.call(null,G__12574__12579);
var G__12581 = G__12574__12579;
n__12576 = G__12580;
G__12574__12577 = G__12581;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12582){
var content = cljs.core.first(arglist__12582);
var name = cljs.core.first(cljs.core.next(arglist__12582));
var value = cljs.core.rest(cljs.core.next(arglist__12582));
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
var G__12589__12590 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12589__12590)
{var n__12591 = cljs.core.first.call(null,G__12589__12590);
var G__12589__12592 = G__12589__12590;
while(true){
n__12591.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____12593 = cljs.core.next.call(null,G__12589__12592);
if(temp__3974__auto____12593)
{var G__12589__12594 = temp__3974__auto____12593;
{
var G__12595 = cljs.core.first.call(null,G__12589__12594);
var G__12596 = G__12589__12594;
n__12591 = G__12595;
G__12589__12592 = G__12596;
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
var vec__12602__12603 = pair.split(/\s*:\s*/);
var k__12604 = cljs.core.nth.call(null,vec__12602__12603,0,null);
var v__12605 = cljs.core.nth.call(null,vec__12602__12603,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____12606 = k__12604;
if(cljs.core.truth_(and__3822__auto____12606))
{return v__12605;
} else
{return and__3822__auto____12606;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__12604.toLowerCase()),v__12605);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__12609 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__12609))
{return domina.parse_style_attributes.call(null,style__12609);
} else
{if(cljs.core.truth_(style__12609.cssText))
{return domina.parse_style_attributes.call(null,style__12609.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__12615 = domina.single_node.call(null,content);
var attrs__12616 = node__12615.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12607_SHARP_){
var attr__12617 = attrs__12616.item(p1__12607_SHARP_);
var value__12618 = attr__12617.nodeValue;
if((function (){var and__3822__auto____12619 = cljs.core.not_EQ_.call(null,null,value__12618);
if(and__3822__auto____12619)
{return cljs.core.not_EQ_.call(null,"",value__12618);
} else
{return and__3822__auto____12619;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__12617.nodeName.toLowerCase())],[attr__12617.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__12616.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12639__12640 = cljs.core.seq.call(null,styles);
if(G__12639__12640)
{var G__12642__12644 = cljs.core.first.call(null,G__12639__12640);
var vec__12643__12645 = G__12642__12644;
var name__12646 = cljs.core.nth.call(null,vec__12643__12645,0,null);
var value__12647 = cljs.core.nth.call(null,vec__12643__12645,1,null);
var G__12639__12648 = G__12639__12640;
var G__12642__12649 = G__12642__12644;
var G__12639__12650 = G__12639__12648;
while(true){
var vec__12651__12652 = G__12642__12649;
var name__12653 = cljs.core.nth.call(null,vec__12651__12652,0,null);
var value__12654 = cljs.core.nth.call(null,vec__12651__12652,1,null);
var G__12639__12655 = G__12639__12650;
domina.set_style_BANG_.call(null,content,name__12653,value__12654);
var temp__3974__auto____12656 = cljs.core.next.call(null,G__12639__12655);
if(temp__3974__auto____12656)
{var G__12639__12657 = temp__3974__auto____12656;
{
var G__12658 = cljs.core.first.call(null,G__12639__12657);
var G__12659 = G__12639__12657;
G__12642__12649 = G__12658;
G__12639__12650 = G__12659;
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
var G__12679__12680 = cljs.core.seq.call(null,attrs);
if(G__12679__12680)
{var G__12682__12684 = cljs.core.first.call(null,G__12679__12680);
var vec__12683__12685 = G__12682__12684;
var name__12686 = cljs.core.nth.call(null,vec__12683__12685,0,null);
var value__12687 = cljs.core.nth.call(null,vec__12683__12685,1,null);
var G__12679__12688 = G__12679__12680;
var G__12682__12689 = G__12682__12684;
var G__12679__12690 = G__12679__12688;
while(true){
var vec__12691__12692 = G__12682__12689;
var name__12693 = cljs.core.nth.call(null,vec__12691__12692,0,null);
var value__12694 = cljs.core.nth.call(null,vec__12691__12692,1,null);
var G__12679__12695 = G__12679__12690;
domina.set_attr_BANG_.call(null,content,name__12693,value__12694);
var temp__3974__auto____12696 = cljs.core.next.call(null,G__12679__12695);
if(temp__3974__auto____12696)
{var G__12679__12697 = temp__3974__auto____12696;
{
var G__12698 = cljs.core.first.call(null,G__12679__12697);
var G__12699 = G__12679__12697;
G__12682__12689 = G__12698;
G__12679__12690 = G__12699;
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
var G__12706__12707 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12706__12707)
{var node__12708 = cljs.core.first.call(null,G__12706__12707);
var G__12706__12709 = G__12706__12707;
while(true){
goog.dom.classes.add(node__12708,class$);
var temp__3974__auto____12710 = cljs.core.next.call(null,G__12706__12709);
if(temp__3974__auto____12710)
{var G__12706__12711 = temp__3974__auto____12710;
{
var G__12712 = cljs.core.first.call(null,G__12706__12711);
var G__12713 = G__12706__12711;
node__12708 = G__12712;
G__12706__12709 = G__12713;
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
var G__12720__12721 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12720__12721)
{var node__12722 = cljs.core.first.call(null,G__12720__12721);
var G__12720__12723 = G__12720__12721;
while(true){
goog.dom.classes.remove(node__12722,class$);
var temp__3974__auto____12724 = cljs.core.next.call(null,G__12720__12723);
if(temp__3974__auto____12724)
{var G__12720__12725 = temp__3974__auto____12724;
{
var G__12726 = cljs.core.first.call(null,G__12720__12725);
var G__12727 = G__12720__12725;
node__12722 = G__12726;
G__12720__12723 = G__12727;
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
var classes__12735 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12736__12737 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12736__12737)
{var node__12738 = cljs.core.first.call(null,G__12736__12737);
var G__12736__12739 = G__12736__12737;
while(true){
goog.dom.classes.set(node__12738,classes__12735);
var temp__3974__auto____12740 = cljs.core.next.call(null,G__12736__12739);
if(temp__3974__auto____12740)
{var G__12736__12741 = temp__3974__auto____12740;
{
var G__12742 = cljs.core.first.call(null,G__12736__12741);
var G__12743 = G__12736__12741;
node__12738 = G__12742;
G__12736__12739 = G__12743;
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
var G__12750__12751 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12750__12751)
{var node__12752 = cljs.core.first.call(null,G__12750__12751);
var G__12750__12753 = G__12750__12751;
while(true){
goog.dom.setTextContent(node__12752,value);
var temp__3974__auto____12754 = cljs.core.next.call(null,G__12750__12753);
if(temp__3974__auto____12754)
{var G__12750__12755 = temp__3974__auto____12754;
{
var G__12756 = cljs.core.first.call(null,G__12750__12755);
var G__12757 = G__12750__12755;
node__12752 = G__12756;
G__12750__12753 = G__12757;
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
var G__12764__12765 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12764__12765)
{var node__12766 = cljs.core.first.call(null,G__12764__12765);
var G__12764__12767 = G__12764__12765;
while(true){
goog.dom.forms.setValue(node__12766,value);
var temp__3974__auto____12768 = cljs.core.next.call(null,G__12764__12767);
if(temp__3974__auto____12768)
{var G__12764__12769 = temp__3974__auto____12768;
{
var G__12770 = cljs.core.first.call(null,G__12764__12769);
var G__12771 = G__12764__12769;
node__12766 = G__12770;
G__12764__12767 = G__12771;
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
var allows_inner_html_QMARK___12788 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12789 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12790 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12791 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12790);
if(cljs.core.truth_((function (){var and__3822__auto____12792 = allows_inner_html_QMARK___12788;
if(and__3822__auto____12792)
{var and__3822__auto____12794 = (function (){var or__3824__auto____12793 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____12793))
{return or__3824__auto____12793;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12789);
}
})();
if(cljs.core.truth_(and__3822__auto____12794))
{return !(special_tag_QMARK___12791);
} else
{return and__3822__auto____12794;
}
} else
{return and__3822__auto____12792;
}
})()))
{var value__12795 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12798__12799 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12798__12799)
{var node__12800 = cljs.core.first.call(null,G__12798__12799);
var G__12798__12801 = G__12798__12799;
while(true){
goog.events.removeAll(node__12800);
node__12800.innerHTML = value__12795;
var temp__3974__auto____12802 = cljs.core.next.call(null,G__12798__12801);
if(temp__3974__auto____12802)
{var G__12798__12803 = temp__3974__auto____12802;
{
var G__12804 = cljs.core.first.call(null,G__12798__12803);
var G__12805 = G__12798__12803;
node__12800 = G__12804;
G__12798__12801 = G__12805;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12796){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12796))
{var e__12797 = e12796;
domina.replace_children_BANG_.call(null,content,value__12795);
} else
{if("\uFDD0'else")
{throw e12796;
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
var m__12811 = domina.single_node.call(null,node).__domina_data;
var value__12812 = (cljs.core.truth_(m__12811)?cljs.core._lookup.call(null,m__12811,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____12813 = bubble;
if(cljs.core.truth_(and__3822__auto____12813))
{return (value__12812 == null);
} else
{return and__3822__auto____12813;
}
})()))
{var temp__3974__auto____12814 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____12814))
{var parent__12815 = temp__3974__auto____12814;
return get_data.call(null,parent__12815,key,true);
} else
{return null;
}
} else
{return value__12812;
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
var m__12821 = (function (){var or__3824__auto____12820 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____12820))
{return or__3824__auto____12820;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12821,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12833 = domina.nodes.call(null,parent_content);
var children__12834 = domina.nodes.call(null,child_content);
var first_child__12842 = (function (){var frag__12835 = document.createDocumentFragment();
var G__12836__12837 = cljs.core.seq.call(null,children__12834);
if(G__12836__12837)
{var child__12838 = cljs.core.first.call(null,G__12836__12837);
var G__12836__12839 = G__12836__12837;
while(true){
frag__12835.appendChild(child__12838);
var temp__3974__auto____12840 = cljs.core.next.call(null,G__12836__12839);
if(temp__3974__auto____12840)
{var G__12836__12841 = temp__3974__auto____12840;
{
var G__12844 = cljs.core.first.call(null,G__12836__12841);
var G__12845 = G__12836__12841;
child__12838 = G__12844;
G__12836__12839 = G__12845;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12835;
})();
var other_children__12843 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12833) - 1),(function (){
return first_child__12842.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12833))
{f.call(null,cljs.core.first.call(null,parents__12833),first_child__12842);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12816_SHARP_,p2__12817_SHARP_){
return f.call(null,p1__12816_SHARP_,p2__12817_SHARP_);
}),cljs.core.rest.call(null,parents__12833),other_children__12843));
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
var and__3822__auto____12847 = obj;
if(cljs.core.truth_(and__3822__auto____12847))
{return obj.length;
} else
{return and__3822__auto____12847;
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
{if((function (){var G__12851__12852 = list_thing;
if(G__12851__12852)
{if((function (){var or__3824__auto____12853 = (G__12851__12852.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12853)
{return or__3824__auto____12853;
} else
{return G__12851__12852.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12851__12852.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12851__12852);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12851__12852);
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
{if((function (){var G__12854__12855 = content;
if(G__12854__12855)
{if((function (){var or__3824__auto____12856 = (G__12854__12855.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12856)
{return or__3824__auto____12856;
} else
{return G__12854__12855.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12854__12855.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12854__12855);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12854__12855);
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
{if((function (){var G__12857__12858 = content;
if(G__12857__12858)
{if((function (){var or__3824__auto____12859 = (G__12857__12858.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12859)
{return or__3824__auto____12859;
} else
{return G__12857__12858.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12857__12858.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12857__12858);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12857__12858);
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
