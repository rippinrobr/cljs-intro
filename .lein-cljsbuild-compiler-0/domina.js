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
var opt_wrapper__12081 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__12082 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__12083 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__12082,"caption":table_section_wrapper__12082,"optgroup":opt_wrapper__12081,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__12083,"thead":table_section_wrapper__12082,"th":cell_wrapper__12083,"option":opt_wrapper__12081,"tbody":table_section_wrapper__12082,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__12082});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___12096 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__12100 = (((function (){var and__3822__auto____12097 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____12097)
{return no_tbody_QMARK___12096;
} else
{return and__3822__auto____12097;
}
})())?(function (){var and__3822__auto____12098 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____12098))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____12098;
}
})():(((function (){var and__3822__auto____12099 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____12099)
{return no_tbody_QMARK___12096;
} else
{return and__3822__auto____12099;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__12101__12102 = cljs.core.seq.call(null,tbody__12100);
if(G__12101__12102)
{var child__12103 = cljs.core.first.call(null,G__12101__12102);
var G__12101__12104 = G__12101__12102;
while(true){
if((function (){var and__3822__auto____12105 = cljs.core._EQ_.call(null,child__12103.nodeName,"tbody");
if(and__3822__auto____12105)
{return cljs.core._EQ_.call(null,child__12103.childNodes.length,0);
} else
{return and__3822__auto____12105;
}
})())
{child__12103.parentNode.removeChild(child__12103);
} else
{}
var temp__3974__auto____12106 = cljs.core.next.call(null,G__12101__12104);
if(temp__3974__auto____12106)
{var G__12101__12107 = temp__3974__auto____12106;
{
var G__12108 = cljs.core.first.call(null,G__12101__12107);
var G__12109 = G__12101__12107;
child__12103 = G__12108;
G__12101__12104 = G__12109;
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
var html__12123 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__12124 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__12123)))].join('').toLowerCase();
var vec__12122__12125 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__12124,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__12126 = cljs.core.nth.call(null,vec__12122__12125,0,null);
var start_wrap__12127 = cljs.core.nth.call(null,vec__12122__12125,1,null);
var end_wrap__12128 = cljs.core.nth.call(null,vec__12122__12125,2,null);
var div__12132 = (function (){var wrapper__12130 = (function (){var div__12129 = document.createElement("div");
div__12129.innerHTML = [cljs.core.str(start_wrap__12127),cljs.core.str(html__12123),cljs.core.str(end_wrap__12128)].join('');
return div__12129;
})();
var level__12131 = depth__12126;
while(true){
if((level__12131 > 0))
{{
var G__12134 = wrapper__12130.lastChild;
var G__12135 = (level__12131 - 1);
wrapper__12130 = G__12134;
level__12131 = G__12135;
continue;
}
} else
{return wrapper__12130;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__12132,html__12123);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____12133 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____12133)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__12123);
} else
{return and__3822__auto____12133;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__12132,html__12123);
} else
{}
return div__12132.childNodes;
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
if((function (){var and__3822__auto____12140 = content;
if(and__3822__auto____12140)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____12140;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2389__auto____12141 = (((content == null))?null:content);
return (function (){var or__3824__auto____12142 = (domina.nodes[goog.typeOf(x__2389__auto____12141)]);
if(or__3824__auto____12142)
{return or__3824__auto____12142;
} else
{var or__3824__auto____12143 = (domina.nodes["_"]);
if(or__3824__auto____12143)
{return or__3824__auto____12143;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____12148 = nodeseq;
if(and__3822__auto____12148)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____12148;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2389__auto____12149 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____12150 = (domina.single_node[goog.typeOf(x__2389__auto____12149)]);
if(or__3824__auto____12150)
{return or__3824__auto____12150;
} else
{var or__3824__auto____12151 = (domina.single_node["_"]);
if(or__3824__auto____12151)
{return or__3824__auto____12151;
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
if(cljs.core.truth_((function (){var and__3822__auto____12153 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____12153))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____12153;
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
log_debug.cljs$lang$applyTo = (function (arglist__12154){
var mesg = cljs.core.seq(arglist__12154);;
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
log.cljs$lang$applyTo = (function (arglist__12155){
var mesg = cljs.core.seq(arglist__12155);;
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
if((void 0 === domina.t12163))
{
/**
* @constructor
*/
domina.t12163 = (function (class_name,by_class,meta12164){
this.class_name = class_name;
this.by_class = by_class;
this.meta12164 = meta12164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t12163.cljs$lang$type = true;
domina.t12163.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"domina/t12163");
});
domina.t12163.prototype.domina$DomContent$ = true;
domina.t12163.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12166 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__12166.class_name)));
});
domina.t12163.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12167 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__12167.class_name)));
});
domina.t12163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12165){
var this__12168 = this;
return this__12168.meta12164;
});
domina.t12163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12165,meta12164){
var this__12169 = this;
return (new domina.t12163(this__12169.class_name,this__12169.by_class,meta12164));
});
domina.t12163;
} else
{}
return (new domina.t12163(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__12170_SHARP_){
return p1__12170_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__12171_SHARP_,p2__12172_SHARP_){
return goog.dom.insertChildAt(p1__12171_SHARP_,p2__12172_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__12174_SHARP_,p2__12173_SHARP_){
return goog.dom.insertSiblingBefore(p2__12173_SHARP_,p1__12174_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12176_SHARP_,p2__12175_SHARP_){
return goog.dom.insertSiblingAfter(p2__12175_SHARP_,p1__12176_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12178_SHARP_,p2__12177_SHARP_){
return goog.dom.replaceNode(p2__12177_SHARP_,p1__12178_SHARP_);
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
var s__12180 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__12180)))
{return null;
} else
{return s__12180;
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
var G__12187__12188 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12187__12188)
{var n__12189 = cljs.core.first.call(null,G__12187__12188);
var G__12187__12190 = G__12187__12188;
while(true){
goog.style.setStyle(n__12189,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12191 = cljs.core.next.call(null,G__12187__12190);
if(temp__3974__auto____12191)
{var G__12187__12192 = temp__3974__auto____12191;
{
var G__12193 = cljs.core.first.call(null,G__12187__12192);
var G__12194 = G__12187__12192;
n__12189 = G__12193;
G__12187__12190 = G__12194;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12195){
var content = cljs.core.first(arglist__12195);
var name = cljs.core.first(cljs.core.next(arglist__12195));
var value = cljs.core.rest(cljs.core.next(arglist__12195));
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
var G__12202__12203 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12202__12203)
{var n__12204 = cljs.core.first.call(null,G__12202__12203);
var G__12202__12205 = G__12202__12203;
while(true){
n__12204.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12206 = cljs.core.next.call(null,G__12202__12205);
if(temp__3974__auto____12206)
{var G__12202__12207 = temp__3974__auto____12206;
{
var G__12208 = cljs.core.first.call(null,G__12202__12207);
var G__12209 = G__12202__12207;
n__12204 = G__12208;
G__12202__12205 = G__12209;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12210){
var content = cljs.core.first(arglist__12210);
var name = cljs.core.first(cljs.core.next(arglist__12210));
var value = cljs.core.rest(cljs.core.next(arglist__12210));
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
var G__12217__12218 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12217__12218)
{var n__12219 = cljs.core.first.call(null,G__12217__12218);
var G__12217__12220 = G__12217__12218;
while(true){
n__12219.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____12221 = cljs.core.next.call(null,G__12217__12220);
if(temp__3974__auto____12221)
{var G__12217__12222 = temp__3974__auto____12221;
{
var G__12223 = cljs.core.first.call(null,G__12217__12222);
var G__12224 = G__12217__12222;
n__12219 = G__12223;
G__12217__12220 = G__12224;
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
var vec__12230__12231 = pair.split(/\s*:\s*/);
var k__12232 = cljs.core.nth.call(null,vec__12230__12231,0,null);
var v__12233 = cljs.core.nth.call(null,vec__12230__12231,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____12234 = k__12232;
if(cljs.core.truth_(and__3822__auto____12234))
{return v__12233;
} else
{return and__3822__auto____12234;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__12232.toLowerCase()),v__12233);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__12237 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__12237))
{return domina.parse_style_attributes.call(null,style__12237);
} else
{if(cljs.core.truth_(style__12237.cssText))
{return domina.parse_style_attributes.call(null,style__12237.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__12243 = domina.single_node.call(null,content);
var attrs__12244 = node__12243.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12235_SHARP_){
var attr__12245 = attrs__12244.item(p1__12235_SHARP_);
var value__12246 = attr__12245.nodeValue;
if((function (){var and__3822__auto____12247 = cljs.core.not_EQ_.call(null,null,value__12246);
if(and__3822__auto____12247)
{return cljs.core.not_EQ_.call(null,"",value__12246);
} else
{return and__3822__auto____12247;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__12245.nodeName.toLowerCase())],[attr__12245.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__12244.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12267__12268 = cljs.core.seq.call(null,styles);
if(G__12267__12268)
{var G__12270__12272 = cljs.core.first.call(null,G__12267__12268);
var vec__12271__12273 = G__12270__12272;
var name__12274 = cljs.core.nth.call(null,vec__12271__12273,0,null);
var value__12275 = cljs.core.nth.call(null,vec__12271__12273,1,null);
var G__12267__12276 = G__12267__12268;
var G__12270__12277 = G__12270__12272;
var G__12267__12278 = G__12267__12276;
while(true){
var vec__12279__12280 = G__12270__12277;
var name__12281 = cljs.core.nth.call(null,vec__12279__12280,0,null);
var value__12282 = cljs.core.nth.call(null,vec__12279__12280,1,null);
var G__12267__12283 = G__12267__12278;
domina.set_style_BANG_.call(null,content,name__12281,value__12282);
var temp__3974__auto____12284 = cljs.core.next.call(null,G__12267__12283);
if(temp__3974__auto____12284)
{var G__12267__12285 = temp__3974__auto____12284;
{
var G__12286 = cljs.core.first.call(null,G__12267__12285);
var G__12287 = G__12267__12285;
G__12270__12277 = G__12286;
G__12267__12278 = G__12287;
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
var G__12307__12308 = cljs.core.seq.call(null,attrs);
if(G__12307__12308)
{var G__12310__12312 = cljs.core.first.call(null,G__12307__12308);
var vec__12311__12313 = G__12310__12312;
var name__12314 = cljs.core.nth.call(null,vec__12311__12313,0,null);
var value__12315 = cljs.core.nth.call(null,vec__12311__12313,1,null);
var G__12307__12316 = G__12307__12308;
var G__12310__12317 = G__12310__12312;
var G__12307__12318 = G__12307__12316;
while(true){
var vec__12319__12320 = G__12310__12317;
var name__12321 = cljs.core.nth.call(null,vec__12319__12320,0,null);
var value__12322 = cljs.core.nth.call(null,vec__12319__12320,1,null);
var G__12307__12323 = G__12307__12318;
domina.set_attr_BANG_.call(null,content,name__12321,value__12322);
var temp__3974__auto____12324 = cljs.core.next.call(null,G__12307__12323);
if(temp__3974__auto____12324)
{var G__12307__12325 = temp__3974__auto____12324;
{
var G__12326 = cljs.core.first.call(null,G__12307__12325);
var G__12327 = G__12307__12325;
G__12310__12317 = G__12326;
G__12307__12318 = G__12327;
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
var G__12334__12335 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12334__12335)
{var node__12336 = cljs.core.first.call(null,G__12334__12335);
var G__12334__12337 = G__12334__12335;
while(true){
goog.dom.classes.add(node__12336,class$);
var temp__3974__auto____12338 = cljs.core.next.call(null,G__12334__12337);
if(temp__3974__auto____12338)
{var G__12334__12339 = temp__3974__auto____12338;
{
var G__12340 = cljs.core.first.call(null,G__12334__12339);
var G__12341 = G__12334__12339;
node__12336 = G__12340;
G__12334__12337 = G__12341;
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
var G__12348__12349 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12348__12349)
{var node__12350 = cljs.core.first.call(null,G__12348__12349);
var G__12348__12351 = G__12348__12349;
while(true){
goog.dom.classes.remove(node__12350,class$);
var temp__3974__auto____12352 = cljs.core.next.call(null,G__12348__12351);
if(temp__3974__auto____12352)
{var G__12348__12353 = temp__3974__auto____12352;
{
var G__12354 = cljs.core.first.call(null,G__12348__12353);
var G__12355 = G__12348__12353;
node__12350 = G__12354;
G__12348__12351 = G__12355;
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
var classes__12363 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12364__12365 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12364__12365)
{var node__12366 = cljs.core.first.call(null,G__12364__12365);
var G__12364__12367 = G__12364__12365;
while(true){
goog.dom.classes.set(node__12366,classes__12363);
var temp__3974__auto____12368 = cljs.core.next.call(null,G__12364__12367);
if(temp__3974__auto____12368)
{var G__12364__12369 = temp__3974__auto____12368;
{
var G__12370 = cljs.core.first.call(null,G__12364__12369);
var G__12371 = G__12364__12369;
node__12366 = G__12370;
G__12364__12367 = G__12371;
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
var G__12378__12379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12378__12379)
{var node__12380 = cljs.core.first.call(null,G__12378__12379);
var G__12378__12381 = G__12378__12379;
while(true){
goog.dom.setTextContent(node__12380,value);
var temp__3974__auto____12382 = cljs.core.next.call(null,G__12378__12381);
if(temp__3974__auto____12382)
{var G__12378__12383 = temp__3974__auto____12382;
{
var G__12384 = cljs.core.first.call(null,G__12378__12383);
var G__12385 = G__12378__12383;
node__12380 = G__12384;
G__12378__12381 = G__12385;
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
var G__12392__12393 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12392__12393)
{var node__12394 = cljs.core.first.call(null,G__12392__12393);
var G__12392__12395 = G__12392__12393;
while(true){
goog.dom.forms.setValue(node__12394,value);
var temp__3974__auto____12396 = cljs.core.next.call(null,G__12392__12395);
if(temp__3974__auto____12396)
{var G__12392__12397 = temp__3974__auto____12396;
{
var G__12398 = cljs.core.first.call(null,G__12392__12397);
var G__12399 = G__12392__12397;
node__12394 = G__12398;
G__12392__12395 = G__12399;
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
var allows_inner_html_QMARK___12416 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12417 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12418 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12419 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12418);
if(cljs.core.truth_((function (){var and__3822__auto____12420 = allows_inner_html_QMARK___12416;
if(and__3822__auto____12420)
{var and__3822__auto____12422 = (function (){var or__3824__auto____12421 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____12421))
{return or__3824__auto____12421;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12417);
}
})();
if(cljs.core.truth_(and__3822__auto____12422))
{return !(special_tag_QMARK___12419);
} else
{return and__3822__auto____12422;
}
} else
{return and__3822__auto____12420;
}
})()))
{var value__12423 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12426__12427 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12426__12427)
{var node__12428 = cljs.core.first.call(null,G__12426__12427);
var G__12426__12429 = G__12426__12427;
while(true){
goog.events.removeAll(node__12428);
node__12428.innerHTML = value__12423;
var temp__3974__auto____12430 = cljs.core.next.call(null,G__12426__12429);
if(temp__3974__auto____12430)
{var G__12426__12431 = temp__3974__auto____12430;
{
var G__12432 = cljs.core.first.call(null,G__12426__12431);
var G__12433 = G__12426__12431;
node__12428 = G__12432;
G__12426__12429 = G__12433;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12424){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12424))
{var e__12425 = e12424;
domina.replace_children_BANG_.call(null,content,value__12423);
} else
{if("\uFDD0'else")
{throw e12424;
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
var m__12439 = domina.single_node.call(null,node).__domina_data;
var value__12440 = (cljs.core.truth_(m__12439)?cljs.core._lookup.call(null,m__12439,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____12441 = bubble;
if(cljs.core.truth_(and__3822__auto____12441))
{return (value__12440 == null);
} else
{return and__3822__auto____12441;
}
})()))
{var temp__3974__auto____12442 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____12442))
{var parent__12443 = temp__3974__auto____12442;
return get_data.call(null,parent__12443,key,true);
} else
{return null;
}
} else
{return value__12440;
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
var m__12449 = (function (){var or__3824__auto____12448 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____12448))
{return or__3824__auto____12448;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12449,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12461 = domina.nodes.call(null,parent_content);
var children__12462 = domina.nodes.call(null,child_content);
var first_child__12470 = (function (){var frag__12463 = document.createDocumentFragment();
var G__12464__12465 = cljs.core.seq.call(null,children__12462);
if(G__12464__12465)
{var child__12466 = cljs.core.first.call(null,G__12464__12465);
var G__12464__12467 = G__12464__12465;
while(true){
frag__12463.appendChild(child__12466);
var temp__3974__auto____12468 = cljs.core.next.call(null,G__12464__12467);
if(temp__3974__auto____12468)
{var G__12464__12469 = temp__3974__auto____12468;
{
var G__12472 = cljs.core.first.call(null,G__12464__12469);
var G__12473 = G__12464__12469;
child__12466 = G__12472;
G__12464__12467 = G__12473;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12463;
})();
var other_children__12471 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12461) - 1),(function (){
return first_child__12470.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12461))
{f.call(null,cljs.core.first.call(null,parents__12461),first_child__12470);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12444_SHARP_,p2__12445_SHARP_){
return f.call(null,p1__12444_SHARP_,p2__12445_SHARP_);
}),cljs.core.rest.call(null,parents__12461),other_children__12471));
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
var and__3822__auto____12475 = obj;
if(cljs.core.truth_(and__3822__auto____12475))
{return obj.length;
} else
{return and__3822__auto____12475;
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
{if((function (){var G__12479__12480 = list_thing;
if(G__12479__12480)
{if((function (){var or__3824__auto____12481 = (G__12479__12480.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12481)
{return or__3824__auto____12481;
} else
{return G__12479__12480.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12479__12480.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12479__12480);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12479__12480);
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
{if((function (){var G__12482__12483 = content;
if(G__12482__12483)
{if((function (){var or__3824__auto____12484 = (G__12482__12483.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12484)
{return or__3824__auto____12484;
} else
{return G__12482__12483.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12482__12483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12482__12483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12482__12483);
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
{if((function (){var G__12485__12486 = content;
if(G__12485__12486)
{if((function (){var or__3824__auto____12487 = (G__12485__12486.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12487)
{return or__3824__auto____12487;
} else
{return G__12485__12486.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12485__12486.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12485__12486);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12485__12486);
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
