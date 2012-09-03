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
var opt_wrapper__6587 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__6588 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__6589 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__6588,"caption":table_section_wrapper__6588,"optgroup":opt_wrapper__6587,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__6589,"thead":table_section_wrapper__6588,"th":cell_wrapper__6589,"option":opt_wrapper__6587,"tbody":table_section_wrapper__6588,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__6588});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___6602 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__6606 = (((function (){var and__3822__auto____6603 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____6603)
{return no_tbody_QMARK___6602;
} else
{return and__3822__auto____6603;
}
})())?(function (){var and__3822__auto____6604 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____6604))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____6604;
}
})():(((function (){var and__3822__auto____6605 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____6605)
{return no_tbody_QMARK___6602;
} else
{return and__3822__auto____6605;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__6607__6608 = cljs.core.seq.call(null,tbody__6606);
if(G__6607__6608)
{var child__6609 = cljs.core.first.call(null,G__6607__6608);
var G__6607__6610 = G__6607__6608;
while(true){
if((function (){var and__3822__auto____6611 = cljs.core._EQ_.call(null,child__6609.nodeName,"tbody");
if(and__3822__auto____6611)
{return cljs.core._EQ_.call(null,child__6609.childNodes.length,0);
} else
{return and__3822__auto____6611;
}
})())
{child__6609.parentNode.removeChild(child__6609);
} else
{}
var temp__3974__auto____6612 = cljs.core.next.call(null,G__6607__6610);
if(temp__3974__auto____6612)
{var G__6607__6613 = temp__3974__auto____6612;
{
var G__6614 = cljs.core.first.call(null,G__6607__6613);
var G__6615 = G__6607__6613;
child__6609 = G__6614;
G__6607__6610 = G__6615;
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
var html__6629 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__6630 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__6629)))].join('').toLowerCase();
var vec__6628__6631 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__6630,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__6632 = cljs.core.nth.call(null,vec__6628__6631,0,null);
var start_wrap__6633 = cljs.core.nth.call(null,vec__6628__6631,1,null);
var end_wrap__6634 = cljs.core.nth.call(null,vec__6628__6631,2,null);
var div__6638 = (function (){var wrapper__6636 = (function (){var div__6635 = document.createElement("div");
div__6635.innerHTML = [cljs.core.str(start_wrap__6633),cljs.core.str(html__6629),cljs.core.str(end_wrap__6634)].join('');
return div__6635;
})();
var level__6637 = depth__6632;
while(true){
if((level__6637 > 0))
{{
var G__6640 = wrapper__6636.lastChild;
var G__6641 = (level__6637 - 1);
wrapper__6636 = G__6640;
level__6637 = G__6641;
continue;
}
} else
{return wrapper__6636;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__6638,html__6629);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____6639 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____6639)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__6629);
} else
{return and__3822__auto____6639;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__6638,html__6629);
} else
{}
return div__6638.childNodes;
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
if((function (){var and__3822__auto____6646 = content;
if(and__3822__auto____6646)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____6646;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2389__auto____6647 = (((content == null))?null:content);
return (function (){var or__3824__auto____6648 = (domina.nodes[goog.typeOf(x__2389__auto____6647)]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{var or__3824__auto____6649 = (domina.nodes["_"]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____6654 = nodeseq;
if(and__3822__auto____6654)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____6654;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2389__auto____6655 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____6656 = (domina.single_node[goog.typeOf(x__2389__auto____6655)]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{var or__3824__auto____6657 = (domina.single_node["_"]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
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
if(cljs.core.truth_((function (){var and__3822__auto____6659 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____6659))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____6659;
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
log_debug.cljs$lang$applyTo = (function (arglist__6660){
var mesg = cljs.core.seq(arglist__6660);;
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
log.cljs$lang$applyTo = (function (arglist__6661){
var mesg = cljs.core.seq(arglist__6661);;
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
if((void 0 === domina.t6669))
{
/**
* @constructor
*/
domina.t6669 = (function (class_name,by_class,meta6670){
this.class_name = class_name;
this.by_class = by_class;
this.meta6670 = meta6670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t6669.cljs$lang$type = true;
domina.t6669.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"domina/t6669");
});
domina.t6669.prototype.domina$DomContent$ = true;
domina.t6669.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__6672 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__6672.class_name)));
});
domina.t6669.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__6673 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__6673.class_name)));
});
domina.t6669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6671){
var this__6674 = this;
return this__6674.meta6670;
});
domina.t6669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6671,meta6670){
var this__6675 = this;
return (new domina.t6669(this__6675.class_name,this__6675.by_class,meta6670));
});
domina.t6669;
} else
{}
return (new domina.t6669(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__6676_SHARP_){
return p1__6676_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__6677_SHARP_,p2__6678_SHARP_){
return goog.dom.insertChildAt(p1__6677_SHARP_,p2__6678_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__6680_SHARP_,p2__6679_SHARP_){
return goog.dom.insertSiblingBefore(p2__6679_SHARP_,p1__6680_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6682_SHARP_,p2__6681_SHARP_){
return goog.dom.insertSiblingAfter(p2__6681_SHARP_,p1__6682_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6684_SHARP_,p2__6683_SHARP_){
return goog.dom.replaceNode(p2__6683_SHARP_,p1__6684_SHARP_);
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
var s__6686 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__6686)))
{return null;
} else
{return s__6686;
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
var G__6693__6694 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6693__6694)
{var n__6695 = cljs.core.first.call(null,G__6693__6694);
var G__6693__6696 = G__6693__6694;
while(true){
goog.style.setStyle(n__6695,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____6697 = cljs.core.next.call(null,G__6693__6696);
if(temp__3974__auto____6697)
{var G__6693__6698 = temp__3974__auto____6697;
{
var G__6699 = cljs.core.first.call(null,G__6693__6698);
var G__6700 = G__6693__6698;
n__6695 = G__6699;
G__6693__6696 = G__6700;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6701){
var content = cljs.core.first(arglist__6701);
var name = cljs.core.first(cljs.core.next(arglist__6701));
var value = cljs.core.rest(cljs.core.next(arglist__6701));
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
var G__6708__6709 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6708__6709)
{var n__6710 = cljs.core.first.call(null,G__6708__6709);
var G__6708__6711 = G__6708__6709;
while(true){
n__6710.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____6712 = cljs.core.next.call(null,G__6708__6711);
if(temp__3974__auto____6712)
{var G__6708__6713 = temp__3974__auto____6712;
{
var G__6714 = cljs.core.first.call(null,G__6708__6713);
var G__6715 = G__6708__6713;
n__6710 = G__6714;
G__6708__6711 = G__6715;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6716){
var content = cljs.core.first(arglist__6716);
var name = cljs.core.first(cljs.core.next(arglist__6716));
var value = cljs.core.rest(cljs.core.next(arglist__6716));
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
var G__6723__6724 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6723__6724)
{var n__6725 = cljs.core.first.call(null,G__6723__6724);
var G__6723__6726 = G__6723__6724;
while(true){
n__6725.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____6727 = cljs.core.next.call(null,G__6723__6726);
if(temp__3974__auto____6727)
{var G__6723__6728 = temp__3974__auto____6727;
{
var G__6729 = cljs.core.first.call(null,G__6723__6728);
var G__6730 = G__6723__6728;
n__6725 = G__6729;
G__6723__6726 = G__6730;
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
var vec__6736__6737 = pair.split(/\s*:\s*/);
var k__6738 = cljs.core.nth.call(null,vec__6736__6737,0,null);
var v__6739 = cljs.core.nth.call(null,vec__6736__6737,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____6740 = k__6738;
if(cljs.core.truth_(and__3822__auto____6740))
{return v__6739;
} else
{return and__3822__auto____6740;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__6738.toLowerCase()),v__6739);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__6743 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__6743))
{return domina.parse_style_attributes.call(null,style__6743);
} else
{if(cljs.core.truth_(style__6743.cssText))
{return domina.parse_style_attributes.call(null,style__6743.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__6749 = domina.single_node.call(null,content);
var attrs__6750 = node__6749.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__6741_SHARP_){
var attr__6751 = attrs__6750.item(p1__6741_SHARP_);
var value__6752 = attr__6751.nodeValue;
if((function (){var and__3822__auto____6753 = cljs.core.not_EQ_.call(null,null,value__6752);
if(and__3822__auto____6753)
{return cljs.core.not_EQ_.call(null,"",value__6752);
} else
{return and__3822__auto____6753;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__6751.nodeName.toLowerCase())],[attr__6751.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__6750.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__6773__6774 = cljs.core.seq.call(null,styles);
if(G__6773__6774)
{var G__6776__6778 = cljs.core.first.call(null,G__6773__6774);
var vec__6777__6779 = G__6776__6778;
var name__6780 = cljs.core.nth.call(null,vec__6777__6779,0,null);
var value__6781 = cljs.core.nth.call(null,vec__6777__6779,1,null);
var G__6773__6782 = G__6773__6774;
var G__6776__6783 = G__6776__6778;
var G__6773__6784 = G__6773__6782;
while(true){
var vec__6785__6786 = G__6776__6783;
var name__6787 = cljs.core.nth.call(null,vec__6785__6786,0,null);
var value__6788 = cljs.core.nth.call(null,vec__6785__6786,1,null);
var G__6773__6789 = G__6773__6784;
domina.set_style_BANG_.call(null,content,name__6787,value__6788);
var temp__3974__auto____6790 = cljs.core.next.call(null,G__6773__6789);
if(temp__3974__auto____6790)
{var G__6773__6791 = temp__3974__auto____6790;
{
var G__6792 = cljs.core.first.call(null,G__6773__6791);
var G__6793 = G__6773__6791;
G__6776__6783 = G__6792;
G__6773__6784 = G__6793;
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
var G__6813__6814 = cljs.core.seq.call(null,attrs);
if(G__6813__6814)
{var G__6816__6818 = cljs.core.first.call(null,G__6813__6814);
var vec__6817__6819 = G__6816__6818;
var name__6820 = cljs.core.nth.call(null,vec__6817__6819,0,null);
var value__6821 = cljs.core.nth.call(null,vec__6817__6819,1,null);
var G__6813__6822 = G__6813__6814;
var G__6816__6823 = G__6816__6818;
var G__6813__6824 = G__6813__6822;
while(true){
var vec__6825__6826 = G__6816__6823;
var name__6827 = cljs.core.nth.call(null,vec__6825__6826,0,null);
var value__6828 = cljs.core.nth.call(null,vec__6825__6826,1,null);
var G__6813__6829 = G__6813__6824;
domina.set_attr_BANG_.call(null,content,name__6827,value__6828);
var temp__3974__auto____6830 = cljs.core.next.call(null,G__6813__6829);
if(temp__3974__auto____6830)
{var G__6813__6831 = temp__3974__auto____6830;
{
var G__6832 = cljs.core.first.call(null,G__6813__6831);
var G__6833 = G__6813__6831;
G__6816__6823 = G__6832;
G__6813__6824 = G__6833;
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
var G__6840__6841 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6840__6841)
{var node__6842 = cljs.core.first.call(null,G__6840__6841);
var G__6840__6843 = G__6840__6841;
while(true){
goog.dom.classes.add(node__6842,class$);
var temp__3974__auto____6844 = cljs.core.next.call(null,G__6840__6843);
if(temp__3974__auto____6844)
{var G__6840__6845 = temp__3974__auto____6844;
{
var G__6846 = cljs.core.first.call(null,G__6840__6845);
var G__6847 = G__6840__6845;
node__6842 = G__6846;
G__6840__6843 = G__6847;
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
var G__6854__6855 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6854__6855)
{var node__6856 = cljs.core.first.call(null,G__6854__6855);
var G__6854__6857 = G__6854__6855;
while(true){
goog.dom.classes.remove(node__6856,class$);
var temp__3974__auto____6858 = cljs.core.next.call(null,G__6854__6857);
if(temp__3974__auto____6858)
{var G__6854__6859 = temp__3974__auto____6858;
{
var G__6860 = cljs.core.first.call(null,G__6854__6859);
var G__6861 = G__6854__6859;
node__6856 = G__6860;
G__6854__6857 = G__6861;
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
var classes__6869 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__6870__6871 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6870__6871)
{var node__6872 = cljs.core.first.call(null,G__6870__6871);
var G__6870__6873 = G__6870__6871;
while(true){
goog.dom.classes.set(node__6872,classes__6869);
var temp__3974__auto____6874 = cljs.core.next.call(null,G__6870__6873);
if(temp__3974__auto____6874)
{var G__6870__6875 = temp__3974__auto____6874;
{
var G__6876 = cljs.core.first.call(null,G__6870__6875);
var G__6877 = G__6870__6875;
node__6872 = G__6876;
G__6870__6873 = G__6877;
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
var G__6884__6885 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6884__6885)
{var node__6886 = cljs.core.first.call(null,G__6884__6885);
var G__6884__6887 = G__6884__6885;
while(true){
goog.dom.setTextContent(node__6886,value);
var temp__3974__auto____6888 = cljs.core.next.call(null,G__6884__6887);
if(temp__3974__auto____6888)
{var G__6884__6889 = temp__3974__auto____6888;
{
var G__6890 = cljs.core.first.call(null,G__6884__6889);
var G__6891 = G__6884__6889;
node__6886 = G__6890;
G__6884__6887 = G__6891;
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
var G__6898__6899 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6898__6899)
{var node__6900 = cljs.core.first.call(null,G__6898__6899);
var G__6898__6901 = G__6898__6899;
while(true){
goog.dom.forms.setValue(node__6900,value);
var temp__3974__auto____6902 = cljs.core.next.call(null,G__6898__6901);
if(temp__3974__auto____6902)
{var G__6898__6903 = temp__3974__auto____6902;
{
var G__6904 = cljs.core.first.call(null,G__6898__6903);
var G__6905 = G__6898__6903;
node__6900 = G__6904;
G__6898__6901 = G__6905;
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
var allows_inner_html_QMARK___6922 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___6923 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__6924 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___6925 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__6924);
if(cljs.core.truth_((function (){var and__3822__auto____6926 = allows_inner_html_QMARK___6922;
if(and__3822__auto____6926)
{var and__3822__auto____6928 = (function (){var or__3824__auto____6927 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____6927))
{return or__3824__auto____6927;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___6923);
}
})();
if(cljs.core.truth_(and__3822__auto____6928))
{return !(special_tag_QMARK___6925);
} else
{return and__3822__auto____6928;
}
} else
{return and__3822__auto____6926;
}
})()))
{var value__6929 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__6932__6933 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__6932__6933)
{var node__6934 = cljs.core.first.call(null,G__6932__6933);
var G__6932__6935 = G__6932__6933;
while(true){
goog.events.removeAll(node__6934);
node__6934.innerHTML = value__6929;
var temp__3974__auto____6936 = cljs.core.next.call(null,G__6932__6935);
if(temp__3974__auto____6936)
{var G__6932__6937 = temp__3974__auto____6936;
{
var G__6938 = cljs.core.first.call(null,G__6932__6937);
var G__6939 = G__6932__6937;
node__6934 = G__6938;
G__6932__6935 = G__6939;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e6930){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e6930))
{var e__6931 = e6930;
domina.replace_children_BANG_.call(null,content,value__6929);
} else
{if("\uFDD0'else")
{throw e6930;
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
var m__6945 = domina.single_node.call(null,node).__domina_data;
var value__6946 = (cljs.core.truth_(m__6945)?cljs.core._lookup.call(null,m__6945,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____6947 = bubble;
if(cljs.core.truth_(and__3822__auto____6947))
{return (value__6946 == null);
} else
{return and__3822__auto____6947;
}
})()))
{var temp__3974__auto____6948 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____6948))
{var parent__6949 = temp__3974__auto____6948;
return get_data.call(null,parent__6949,key,true);
} else
{return null;
}
} else
{return value__6946;
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
var m__6955 = (function (){var or__3824__auto____6954 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____6954))
{return or__3824__auto____6954;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__6955,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__6967 = domina.nodes.call(null,parent_content);
var children__6968 = domina.nodes.call(null,child_content);
var first_child__6976 = (function (){var frag__6969 = document.createDocumentFragment();
var G__6970__6971 = cljs.core.seq.call(null,children__6968);
if(G__6970__6971)
{var child__6972 = cljs.core.first.call(null,G__6970__6971);
var G__6970__6973 = G__6970__6971;
while(true){
frag__6969.appendChild(child__6972);
var temp__3974__auto____6974 = cljs.core.next.call(null,G__6970__6973);
if(temp__3974__auto____6974)
{var G__6970__6975 = temp__3974__auto____6974;
{
var G__6978 = cljs.core.first.call(null,G__6970__6975);
var G__6979 = G__6970__6975;
child__6972 = G__6978;
G__6970__6973 = G__6979;
continue;
}
} else
{}
break;
}
} else
{}
return frag__6969;
})();
var other_children__6977 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__6967) - 1),(function (){
return first_child__6976.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__6967))
{f.call(null,cljs.core.first.call(null,parents__6967),first_child__6976);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6950_SHARP_,p2__6951_SHARP_){
return f.call(null,p1__6950_SHARP_,p2__6951_SHARP_);
}),cljs.core.rest.call(null,parents__6967),other_children__6977));
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
var and__3822__auto____6981 = obj;
if(cljs.core.truth_(and__3822__auto____6981))
{return obj.length;
} else
{return and__3822__auto____6981;
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
{if((function (){var G__6985__6986 = list_thing;
if(G__6985__6986)
{if((function (){var or__3824__auto____6987 = (G__6985__6986.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6987)
{return or__3824__auto____6987;
} else
{return G__6985__6986.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6985__6986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6985__6986);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6985__6986);
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
{if((function (){var G__6988__6989 = content;
if(G__6988__6989)
{if((function (){var or__3824__auto____6990 = (G__6988__6989.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6990)
{return or__3824__auto____6990;
} else
{return G__6988__6989.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6988__6989.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6988__6989);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6988__6989);
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
{if((function (){var G__6991__6992 = content;
if(G__6991__6992)
{if((function (){var or__3824__auto____6993 = (G__6991__6992.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{return G__6991__6992.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6991__6992.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6991__6992);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6991__6992);
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
