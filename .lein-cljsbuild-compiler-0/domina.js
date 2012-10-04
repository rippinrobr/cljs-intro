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
var opt_wrapper__12449 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__12450 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__12451 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__12450,"caption":table_section_wrapper__12450,"optgroup":opt_wrapper__12449,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__12451,"thead":table_section_wrapper__12450,"th":cell_wrapper__12451,"option":opt_wrapper__12449,"tbody":table_section_wrapper__12450,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__12450});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___12464 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__12468 = (((function (){var and__3822__auto____12465 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____12465)
{return no_tbody_QMARK___12464;
} else
{return and__3822__auto____12465;
}
})())?(function (){var and__3822__auto____12466 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____12466))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____12466;
}
})():(((function (){var and__3822__auto____12467 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____12467)
{return no_tbody_QMARK___12464;
} else
{return and__3822__auto____12467;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__12469__12470 = cljs.core.seq.call(null,tbody__12468);
if(G__12469__12470)
{var child__12471 = cljs.core.first.call(null,G__12469__12470);
var G__12469__12472 = G__12469__12470;
while(true){
if((function (){var and__3822__auto____12473 = cljs.core._EQ_.call(null,child__12471.nodeName,"tbody");
if(and__3822__auto____12473)
{return cljs.core._EQ_.call(null,child__12471.childNodes.length,0);
} else
{return and__3822__auto____12473;
}
})())
{child__12471.parentNode.removeChild(child__12471);
} else
{}
var temp__3974__auto____12474 = cljs.core.next.call(null,G__12469__12472);
if(temp__3974__auto____12474)
{var G__12469__12475 = temp__3974__auto____12474;
{
var G__12476 = cljs.core.first.call(null,G__12469__12475);
var G__12477 = G__12469__12475;
child__12471 = G__12476;
G__12469__12472 = G__12477;
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
var html__12491 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__12492 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__12491)))].join('').toLowerCase();
var vec__12490__12493 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__12492,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__12494 = cljs.core.nth.call(null,vec__12490__12493,0,null);
var start_wrap__12495 = cljs.core.nth.call(null,vec__12490__12493,1,null);
var end_wrap__12496 = cljs.core.nth.call(null,vec__12490__12493,2,null);
var div__12500 = (function (){var wrapper__12498 = (function (){var div__12497 = document.createElement("div");
div__12497.innerHTML = [cljs.core.str(start_wrap__12495),cljs.core.str(html__12491),cljs.core.str(end_wrap__12496)].join('');
return div__12497;
})();
var level__12499 = depth__12494;
while(true){
if((level__12499 > 0))
{{
var G__12502 = wrapper__12498.lastChild;
var G__12503 = (level__12499 - 1);
wrapper__12498 = G__12502;
level__12499 = G__12503;
continue;
}
} else
{return wrapper__12498;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__12500,html__12491);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____12501 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____12501)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__12491);
} else
{return and__3822__auto____12501;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__12500,html__12491);
} else
{}
return div__12500.childNodes;
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
if((function (){var and__3822__auto____12508 = content;
if(and__3822__auto____12508)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____12508;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2413__auto____12509 = (((content == null))?null:content);
return (function (){var or__3824__auto____12510 = (domina.nodes[goog.typeOf(x__2413__auto____12509)]);
if(or__3824__auto____12510)
{return or__3824__auto____12510;
} else
{var or__3824__auto____12511 = (domina.nodes["_"]);
if(or__3824__auto____12511)
{return or__3824__auto____12511;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____12516 = nodeseq;
if(and__3822__auto____12516)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____12516;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2413__auto____12517 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____12518 = (domina.single_node[goog.typeOf(x__2413__auto____12517)]);
if(or__3824__auto____12518)
{return or__3824__auto____12518;
} else
{var or__3824__auto____12519 = (domina.single_node["_"]);
if(or__3824__auto____12519)
{return or__3824__auto____12519;
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
if(cljs.core.truth_((function (){var and__3822__auto____12521 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____12521))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____12521;
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
log_debug.cljs$lang$applyTo = (function (arglist__12522){
var mesg = cljs.core.seq(arglist__12522);;
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
log.cljs$lang$applyTo = (function (arglist__12523){
var mesg = cljs.core.seq(arglist__12523);;
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
if((void 0 === domina.t12531))
{
/**
* @constructor
*/
domina.t12531 = (function (class_name,by_class,meta12532){
this.class_name = class_name;
this.by_class = by_class;
this.meta12532 = meta12532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t12531.cljs$lang$type = true;
domina.t12531.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"domina/t12531");
});
domina.t12531.prototype.domina$DomContent$ = true;
domina.t12531.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12534 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__12534.class_name)));
});
domina.t12531.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12535 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__12535.class_name)));
});
domina.t12531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12533){
var this__12536 = this;
return this__12536.meta12532;
});
domina.t12531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12533,meta12532){
var this__12537 = this;
return (new domina.t12531(this__12537.class_name,this__12537.by_class,meta12532));
});
domina.t12531;
} else
{}
return (new domina.t12531(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__12538_SHARP_){
return p1__12538_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__12539_SHARP_,p2__12540_SHARP_){
return goog.dom.insertChildAt(p1__12539_SHARP_,p2__12540_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__12542_SHARP_,p2__12541_SHARP_){
return goog.dom.insertSiblingBefore(p2__12541_SHARP_,p1__12542_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12544_SHARP_,p2__12543_SHARP_){
return goog.dom.insertSiblingAfter(p2__12543_SHARP_,p1__12544_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12546_SHARP_,p2__12545_SHARP_){
return goog.dom.replaceNode(p2__12545_SHARP_,p1__12546_SHARP_);
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
var s__12548 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__12548)))
{return null;
} else
{return s__12548;
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
var G__12555__12556 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12555__12556)
{var n__12557 = cljs.core.first.call(null,G__12555__12556);
var G__12555__12558 = G__12555__12556;
while(true){
goog.style.setStyle(n__12557,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12559 = cljs.core.next.call(null,G__12555__12558);
if(temp__3974__auto____12559)
{var G__12555__12560 = temp__3974__auto____12559;
{
var G__12561 = cljs.core.first.call(null,G__12555__12560);
var G__12562 = G__12555__12560;
n__12557 = G__12561;
G__12555__12558 = G__12562;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12563){
var content = cljs.core.first(arglist__12563);
var name = cljs.core.first(cljs.core.next(arglist__12563));
var value = cljs.core.rest(cljs.core.next(arglist__12563));
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
var G__12570__12571 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12570__12571)
{var n__12572 = cljs.core.first.call(null,G__12570__12571);
var G__12570__12573 = G__12570__12571;
while(true){
n__12572.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12574 = cljs.core.next.call(null,G__12570__12573);
if(temp__3974__auto____12574)
{var G__12570__12575 = temp__3974__auto____12574;
{
var G__12576 = cljs.core.first.call(null,G__12570__12575);
var G__12577 = G__12570__12575;
n__12572 = G__12576;
G__12570__12573 = G__12577;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12578){
var content = cljs.core.first(arglist__12578);
var name = cljs.core.first(cljs.core.next(arglist__12578));
var value = cljs.core.rest(cljs.core.next(arglist__12578));
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
var G__12585__12586 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12585__12586)
{var n__12587 = cljs.core.first.call(null,G__12585__12586);
var G__12585__12588 = G__12585__12586;
while(true){
n__12587.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____12589 = cljs.core.next.call(null,G__12585__12588);
if(temp__3974__auto____12589)
{var G__12585__12590 = temp__3974__auto____12589;
{
var G__12591 = cljs.core.first.call(null,G__12585__12590);
var G__12592 = G__12585__12590;
n__12587 = G__12591;
G__12585__12588 = G__12592;
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
var vec__12598__12599 = pair.split(/\s*:\s*/);
var k__12600 = cljs.core.nth.call(null,vec__12598__12599,0,null);
var v__12601 = cljs.core.nth.call(null,vec__12598__12599,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____12602 = k__12600;
if(cljs.core.truth_(and__3822__auto____12602))
{return v__12601;
} else
{return and__3822__auto____12602;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__12600.toLowerCase()),v__12601);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__12605 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__12605))
{return domina.parse_style_attributes.call(null,style__12605);
} else
{if(cljs.core.truth_(style__12605.cssText))
{return domina.parse_style_attributes.call(null,style__12605.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__12611 = domina.single_node.call(null,content);
var attrs__12612 = node__12611.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12603_SHARP_){
var attr__12613 = attrs__12612.item(p1__12603_SHARP_);
var value__12614 = attr__12613.nodeValue;
if((function (){var and__3822__auto____12615 = cljs.core.not_EQ_.call(null,null,value__12614);
if(and__3822__auto____12615)
{return cljs.core.not_EQ_.call(null,"",value__12614);
} else
{return and__3822__auto____12615;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__12613.nodeName.toLowerCase())],[attr__12613.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__12612.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12635__12636 = cljs.core.seq.call(null,styles);
if(G__12635__12636)
{var G__12638__12640 = cljs.core.first.call(null,G__12635__12636);
var vec__12639__12641 = G__12638__12640;
var name__12642 = cljs.core.nth.call(null,vec__12639__12641,0,null);
var value__12643 = cljs.core.nth.call(null,vec__12639__12641,1,null);
var G__12635__12644 = G__12635__12636;
var G__12638__12645 = G__12638__12640;
var G__12635__12646 = G__12635__12644;
while(true){
var vec__12647__12648 = G__12638__12645;
var name__12649 = cljs.core.nth.call(null,vec__12647__12648,0,null);
var value__12650 = cljs.core.nth.call(null,vec__12647__12648,1,null);
var G__12635__12651 = G__12635__12646;
domina.set_style_BANG_.call(null,content,name__12649,value__12650);
var temp__3974__auto____12652 = cljs.core.next.call(null,G__12635__12651);
if(temp__3974__auto____12652)
{var G__12635__12653 = temp__3974__auto____12652;
{
var G__12654 = cljs.core.first.call(null,G__12635__12653);
var G__12655 = G__12635__12653;
G__12638__12645 = G__12654;
G__12635__12646 = G__12655;
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
var G__12675__12676 = cljs.core.seq.call(null,attrs);
if(G__12675__12676)
{var G__12678__12680 = cljs.core.first.call(null,G__12675__12676);
var vec__12679__12681 = G__12678__12680;
var name__12682 = cljs.core.nth.call(null,vec__12679__12681,0,null);
var value__12683 = cljs.core.nth.call(null,vec__12679__12681,1,null);
var G__12675__12684 = G__12675__12676;
var G__12678__12685 = G__12678__12680;
var G__12675__12686 = G__12675__12684;
while(true){
var vec__12687__12688 = G__12678__12685;
var name__12689 = cljs.core.nth.call(null,vec__12687__12688,0,null);
var value__12690 = cljs.core.nth.call(null,vec__12687__12688,1,null);
var G__12675__12691 = G__12675__12686;
domina.set_attr_BANG_.call(null,content,name__12689,value__12690);
var temp__3974__auto____12692 = cljs.core.next.call(null,G__12675__12691);
if(temp__3974__auto____12692)
{var G__12675__12693 = temp__3974__auto____12692;
{
var G__12694 = cljs.core.first.call(null,G__12675__12693);
var G__12695 = G__12675__12693;
G__12678__12685 = G__12694;
G__12675__12686 = G__12695;
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
var G__12702__12703 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12702__12703)
{var node__12704 = cljs.core.first.call(null,G__12702__12703);
var G__12702__12705 = G__12702__12703;
while(true){
goog.dom.classes.add(node__12704,class$);
var temp__3974__auto____12706 = cljs.core.next.call(null,G__12702__12705);
if(temp__3974__auto____12706)
{var G__12702__12707 = temp__3974__auto____12706;
{
var G__12708 = cljs.core.first.call(null,G__12702__12707);
var G__12709 = G__12702__12707;
node__12704 = G__12708;
G__12702__12705 = G__12709;
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
var G__12716__12717 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12716__12717)
{var node__12718 = cljs.core.first.call(null,G__12716__12717);
var G__12716__12719 = G__12716__12717;
while(true){
goog.dom.classes.remove(node__12718,class$);
var temp__3974__auto____12720 = cljs.core.next.call(null,G__12716__12719);
if(temp__3974__auto____12720)
{var G__12716__12721 = temp__3974__auto____12720;
{
var G__12722 = cljs.core.first.call(null,G__12716__12721);
var G__12723 = G__12716__12721;
node__12718 = G__12722;
G__12716__12719 = G__12723;
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
var classes__12731 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12732__12733 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12732__12733)
{var node__12734 = cljs.core.first.call(null,G__12732__12733);
var G__12732__12735 = G__12732__12733;
while(true){
goog.dom.classes.set(node__12734,classes__12731);
var temp__3974__auto____12736 = cljs.core.next.call(null,G__12732__12735);
if(temp__3974__auto____12736)
{var G__12732__12737 = temp__3974__auto____12736;
{
var G__12738 = cljs.core.first.call(null,G__12732__12737);
var G__12739 = G__12732__12737;
node__12734 = G__12738;
G__12732__12735 = G__12739;
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
var G__12746__12747 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12746__12747)
{var node__12748 = cljs.core.first.call(null,G__12746__12747);
var G__12746__12749 = G__12746__12747;
while(true){
goog.dom.setTextContent(node__12748,value);
var temp__3974__auto____12750 = cljs.core.next.call(null,G__12746__12749);
if(temp__3974__auto____12750)
{var G__12746__12751 = temp__3974__auto____12750;
{
var G__12752 = cljs.core.first.call(null,G__12746__12751);
var G__12753 = G__12746__12751;
node__12748 = G__12752;
G__12746__12749 = G__12753;
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
var G__12760__12761 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12760__12761)
{var node__12762 = cljs.core.first.call(null,G__12760__12761);
var G__12760__12763 = G__12760__12761;
while(true){
goog.dom.forms.setValue(node__12762,value);
var temp__3974__auto____12764 = cljs.core.next.call(null,G__12760__12763);
if(temp__3974__auto____12764)
{var G__12760__12765 = temp__3974__auto____12764;
{
var G__12766 = cljs.core.first.call(null,G__12760__12765);
var G__12767 = G__12760__12765;
node__12762 = G__12766;
G__12760__12763 = G__12767;
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
var allows_inner_html_QMARK___12784 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12785 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12786 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12787 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12786);
if(cljs.core.truth_((function (){var and__3822__auto____12788 = allows_inner_html_QMARK___12784;
if(and__3822__auto____12788)
{var and__3822__auto____12790 = (function (){var or__3824__auto____12789 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____12789))
{return or__3824__auto____12789;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12785);
}
})();
if(cljs.core.truth_(and__3822__auto____12790))
{return !(special_tag_QMARK___12787);
} else
{return and__3822__auto____12790;
}
} else
{return and__3822__auto____12788;
}
})()))
{var value__12791 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12794__12795 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12794__12795)
{var node__12796 = cljs.core.first.call(null,G__12794__12795);
var G__12794__12797 = G__12794__12795;
while(true){
goog.events.removeAll(node__12796);
node__12796.innerHTML = value__12791;
var temp__3974__auto____12798 = cljs.core.next.call(null,G__12794__12797);
if(temp__3974__auto____12798)
{var G__12794__12799 = temp__3974__auto____12798;
{
var G__12800 = cljs.core.first.call(null,G__12794__12799);
var G__12801 = G__12794__12799;
node__12796 = G__12800;
G__12794__12797 = G__12801;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12792){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12792))
{var e__12793 = e12792;
domina.replace_children_BANG_.call(null,content,value__12791);
} else
{if("\uFDD0'else")
{throw e12792;
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
var m__12807 = domina.single_node.call(null,node).__domina_data;
var value__12808 = (cljs.core.truth_(m__12807)?cljs.core._lookup.call(null,m__12807,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____12809 = bubble;
if(cljs.core.truth_(and__3822__auto____12809))
{return (value__12808 == null);
} else
{return and__3822__auto____12809;
}
})()))
{var temp__3974__auto____12810 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____12810))
{var parent__12811 = temp__3974__auto____12810;
return get_data.call(null,parent__12811,key,true);
} else
{return null;
}
} else
{return value__12808;
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
var m__12817 = (function (){var or__3824__auto____12816 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____12816))
{return or__3824__auto____12816;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12817,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12829 = domina.nodes.call(null,parent_content);
var children__12830 = domina.nodes.call(null,child_content);
var first_child__12838 = (function (){var frag__12831 = document.createDocumentFragment();
var G__12832__12833 = cljs.core.seq.call(null,children__12830);
if(G__12832__12833)
{var child__12834 = cljs.core.first.call(null,G__12832__12833);
var G__12832__12835 = G__12832__12833;
while(true){
frag__12831.appendChild(child__12834);
var temp__3974__auto____12836 = cljs.core.next.call(null,G__12832__12835);
if(temp__3974__auto____12836)
{var G__12832__12837 = temp__3974__auto____12836;
{
var G__12840 = cljs.core.first.call(null,G__12832__12837);
var G__12841 = G__12832__12837;
child__12834 = G__12840;
G__12832__12835 = G__12841;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12831;
})();
var other_children__12839 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12829) - 1),(function (){
return first_child__12838.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12829))
{f.call(null,cljs.core.first.call(null,parents__12829),first_child__12838);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12812_SHARP_,p2__12813_SHARP_){
return f.call(null,p1__12812_SHARP_,p2__12813_SHARP_);
}),cljs.core.rest.call(null,parents__12829),other_children__12839));
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
var and__3822__auto____12843 = obj;
if(cljs.core.truth_(and__3822__auto____12843))
{return obj.length;
} else
{return and__3822__auto____12843;
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
{if((function (){var G__12847__12848 = list_thing;
if(G__12847__12848)
{if((function (){var or__3824__auto____12849 = (G__12847__12848.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12849)
{return or__3824__auto____12849;
} else
{return G__12847__12848.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12847__12848.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12847__12848);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12847__12848);
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
{if((function (){var G__12850__12851 = content;
if(G__12850__12851)
{if((function (){var or__3824__auto____12852 = (G__12850__12851.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12852)
{return or__3824__auto____12852;
} else
{return G__12850__12851.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12850__12851.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12850__12851);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12850__12851);
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
{if((function (){var G__12853__12854 = content;
if(G__12853__12854)
{if((function (){var or__3824__auto____12855 = (G__12853__12854.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12855)
{return or__3824__auto____12855;
} else
{return G__12853__12854.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12853__12854.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12853__12854);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12853__12854);
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
