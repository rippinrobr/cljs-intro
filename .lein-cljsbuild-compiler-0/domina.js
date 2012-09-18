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
var opt_wrapper__12088 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__12089 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__12090 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__12089,"caption":table_section_wrapper__12089,"optgroup":opt_wrapper__12088,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__12090,"thead":table_section_wrapper__12089,"th":cell_wrapper__12090,"option":opt_wrapper__12088,"tbody":table_section_wrapper__12089,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__12089});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___12103 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__12107 = (((function (){var and__3822__auto____12104 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____12104)
{return no_tbody_QMARK___12103;
} else
{return and__3822__auto____12104;
}
})())?(function (){var and__3822__auto____12105 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____12105))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____12105;
}
})():(((function (){var and__3822__auto____12106 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____12106)
{return no_tbody_QMARK___12103;
} else
{return and__3822__auto____12106;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__12108__12109 = cljs.core.seq.call(null,tbody__12107);
if(G__12108__12109)
{var child__12110 = cljs.core.first.call(null,G__12108__12109);
var G__12108__12111 = G__12108__12109;
while(true){
if((function (){var and__3822__auto____12112 = cljs.core._EQ_.call(null,child__12110.nodeName,"tbody");
if(and__3822__auto____12112)
{return cljs.core._EQ_.call(null,child__12110.childNodes.length,0);
} else
{return and__3822__auto____12112;
}
})())
{child__12110.parentNode.removeChild(child__12110);
} else
{}
var temp__3974__auto____12113 = cljs.core.next.call(null,G__12108__12111);
if(temp__3974__auto____12113)
{var G__12108__12114 = temp__3974__auto____12113;
{
var G__12115 = cljs.core.first.call(null,G__12108__12114);
var G__12116 = G__12108__12114;
child__12110 = G__12115;
G__12108__12111 = G__12116;
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
var html__12130 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__12131 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__12130)))].join('').toLowerCase();
var vec__12129__12132 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__12131,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__12133 = cljs.core.nth.call(null,vec__12129__12132,0,null);
var start_wrap__12134 = cljs.core.nth.call(null,vec__12129__12132,1,null);
var end_wrap__12135 = cljs.core.nth.call(null,vec__12129__12132,2,null);
var div__12139 = (function (){var wrapper__12137 = (function (){var div__12136 = document.createElement("div");
div__12136.innerHTML = [cljs.core.str(start_wrap__12134),cljs.core.str(html__12130),cljs.core.str(end_wrap__12135)].join('');
return div__12136;
})();
var level__12138 = depth__12133;
while(true){
if((level__12138 > 0))
{{
var G__12141 = wrapper__12137.lastChild;
var G__12142 = (level__12138 - 1);
wrapper__12137 = G__12141;
level__12138 = G__12142;
continue;
}
} else
{return wrapper__12137;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__12139,html__12130);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____12140 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____12140)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__12130);
} else
{return and__3822__auto____12140;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__12139,html__12130);
} else
{}
return div__12139.childNodes;
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
if((function (){var and__3822__auto____12147 = content;
if(and__3822__auto____12147)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____12147;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2389__auto____12148 = (((content == null))?null:content);
return (function (){var or__3824__auto____12149 = (domina.nodes[goog.typeOf(x__2389__auto____12148)]);
if(or__3824__auto____12149)
{return or__3824__auto____12149;
} else
{var or__3824__auto____12150 = (domina.nodes["_"]);
if(or__3824__auto____12150)
{return or__3824__auto____12150;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____12155 = nodeseq;
if(and__3822__auto____12155)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____12155;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2389__auto____12156 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____12157 = (domina.single_node[goog.typeOf(x__2389__auto____12156)]);
if(or__3824__auto____12157)
{return or__3824__auto____12157;
} else
{var or__3824__auto____12158 = (domina.single_node["_"]);
if(or__3824__auto____12158)
{return or__3824__auto____12158;
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
if(cljs.core.truth_((function (){var and__3822__auto____12160 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____12160))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____12160;
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
log_debug.cljs$lang$applyTo = (function (arglist__12161){
var mesg = cljs.core.seq(arglist__12161);;
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
log.cljs$lang$applyTo = (function (arglist__12162){
var mesg = cljs.core.seq(arglist__12162);;
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
if((void 0 === domina.t12170))
{
/**
* @constructor
*/
domina.t12170 = (function (class_name,by_class,meta12171){
this.class_name = class_name;
this.by_class = by_class;
this.meta12171 = meta12171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t12170.cljs$lang$type = true;
domina.t12170.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"domina/t12170");
});
domina.t12170.prototype.domina$DomContent$ = true;
domina.t12170.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__12173 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__12173.class_name)));
});
domina.t12170.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__12174 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__12174.class_name)));
});
domina.t12170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12172){
var this__12175 = this;
return this__12175.meta12171;
});
domina.t12170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12172,meta12171){
var this__12176 = this;
return (new domina.t12170(this__12176.class_name,this__12176.by_class,meta12171));
});
domina.t12170;
} else
{}
return (new domina.t12170(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__12177_SHARP_){
return p1__12177_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__12178_SHARP_,p2__12179_SHARP_){
return goog.dom.insertChildAt(p1__12178_SHARP_,p2__12179_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__12181_SHARP_,p2__12180_SHARP_){
return goog.dom.insertSiblingBefore(p2__12180_SHARP_,p1__12181_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12183_SHARP_,p2__12182_SHARP_){
return goog.dom.insertSiblingAfter(p2__12182_SHARP_,p1__12183_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12185_SHARP_,p2__12184_SHARP_){
return goog.dom.replaceNode(p2__12184_SHARP_,p1__12185_SHARP_);
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
var s__12187 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__12187)))
{return null;
} else
{return s__12187;
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
var G__12194__12195 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12194__12195)
{var n__12196 = cljs.core.first.call(null,G__12194__12195);
var G__12194__12197 = G__12194__12195;
while(true){
goog.style.setStyle(n__12196,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12198 = cljs.core.next.call(null,G__12194__12197);
if(temp__3974__auto____12198)
{var G__12194__12199 = temp__3974__auto____12198;
{
var G__12200 = cljs.core.first.call(null,G__12194__12199);
var G__12201 = G__12194__12199;
n__12196 = G__12200;
G__12194__12197 = G__12201;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12202){
var content = cljs.core.first(arglist__12202);
var name = cljs.core.first(cljs.core.next(arglist__12202));
var value = cljs.core.rest(cljs.core.next(arglist__12202));
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
var G__12209__12210 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12209__12210)
{var n__12211 = cljs.core.first.call(null,G__12209__12210);
var G__12209__12212 = G__12209__12210;
while(true){
n__12211.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____12213 = cljs.core.next.call(null,G__12209__12212);
if(temp__3974__auto____12213)
{var G__12209__12214 = temp__3974__auto____12213;
{
var G__12215 = cljs.core.first.call(null,G__12209__12214);
var G__12216 = G__12209__12214;
n__12211 = G__12215;
G__12209__12212 = G__12216;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12217){
var content = cljs.core.first(arglist__12217);
var name = cljs.core.first(cljs.core.next(arglist__12217));
var value = cljs.core.rest(cljs.core.next(arglist__12217));
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
var G__12224__12225 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12224__12225)
{var n__12226 = cljs.core.first.call(null,G__12224__12225);
var G__12224__12227 = G__12224__12225;
while(true){
n__12226.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____12228 = cljs.core.next.call(null,G__12224__12227);
if(temp__3974__auto____12228)
{var G__12224__12229 = temp__3974__auto____12228;
{
var G__12230 = cljs.core.first.call(null,G__12224__12229);
var G__12231 = G__12224__12229;
n__12226 = G__12230;
G__12224__12227 = G__12231;
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
var vec__12237__12238 = pair.split(/\s*:\s*/);
var k__12239 = cljs.core.nth.call(null,vec__12237__12238,0,null);
var v__12240 = cljs.core.nth.call(null,vec__12237__12238,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____12241 = k__12239;
if(cljs.core.truth_(and__3822__auto____12241))
{return v__12240;
} else
{return and__3822__auto____12241;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__12239.toLowerCase()),v__12240);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__12244 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__12244))
{return domina.parse_style_attributes.call(null,style__12244);
} else
{if(cljs.core.truth_(style__12244.cssText))
{return domina.parse_style_attributes.call(null,style__12244.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__12250 = domina.single_node.call(null,content);
var attrs__12251 = node__12250.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__12242_SHARP_){
var attr__12252 = attrs__12251.item(p1__12242_SHARP_);
var value__12253 = attr__12252.nodeValue;
if((function (){var and__3822__auto____12254 = cljs.core.not_EQ_.call(null,null,value__12253);
if(and__3822__auto____12254)
{return cljs.core.not_EQ_.call(null,"",value__12253);
} else
{return and__3822__auto____12254;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__12252.nodeName.toLowerCase())],[attr__12252.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__12251.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12274__12275 = cljs.core.seq.call(null,styles);
if(G__12274__12275)
{var G__12277__12279 = cljs.core.first.call(null,G__12274__12275);
var vec__12278__12280 = G__12277__12279;
var name__12281 = cljs.core.nth.call(null,vec__12278__12280,0,null);
var value__12282 = cljs.core.nth.call(null,vec__12278__12280,1,null);
var G__12274__12283 = G__12274__12275;
var G__12277__12284 = G__12277__12279;
var G__12274__12285 = G__12274__12283;
while(true){
var vec__12286__12287 = G__12277__12284;
var name__12288 = cljs.core.nth.call(null,vec__12286__12287,0,null);
var value__12289 = cljs.core.nth.call(null,vec__12286__12287,1,null);
var G__12274__12290 = G__12274__12285;
domina.set_style_BANG_.call(null,content,name__12288,value__12289);
var temp__3974__auto____12291 = cljs.core.next.call(null,G__12274__12290);
if(temp__3974__auto____12291)
{var G__12274__12292 = temp__3974__auto____12291;
{
var G__12293 = cljs.core.first.call(null,G__12274__12292);
var G__12294 = G__12274__12292;
G__12277__12284 = G__12293;
G__12274__12285 = G__12294;
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
var G__12314__12315 = cljs.core.seq.call(null,attrs);
if(G__12314__12315)
{var G__12317__12319 = cljs.core.first.call(null,G__12314__12315);
var vec__12318__12320 = G__12317__12319;
var name__12321 = cljs.core.nth.call(null,vec__12318__12320,0,null);
var value__12322 = cljs.core.nth.call(null,vec__12318__12320,1,null);
var G__12314__12323 = G__12314__12315;
var G__12317__12324 = G__12317__12319;
var G__12314__12325 = G__12314__12323;
while(true){
var vec__12326__12327 = G__12317__12324;
var name__12328 = cljs.core.nth.call(null,vec__12326__12327,0,null);
var value__12329 = cljs.core.nth.call(null,vec__12326__12327,1,null);
var G__12314__12330 = G__12314__12325;
domina.set_attr_BANG_.call(null,content,name__12328,value__12329);
var temp__3974__auto____12331 = cljs.core.next.call(null,G__12314__12330);
if(temp__3974__auto____12331)
{var G__12314__12332 = temp__3974__auto____12331;
{
var G__12333 = cljs.core.first.call(null,G__12314__12332);
var G__12334 = G__12314__12332;
G__12317__12324 = G__12333;
G__12314__12325 = G__12334;
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
var G__12341__12342 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12341__12342)
{var node__12343 = cljs.core.first.call(null,G__12341__12342);
var G__12341__12344 = G__12341__12342;
while(true){
goog.dom.classes.add(node__12343,class$);
var temp__3974__auto____12345 = cljs.core.next.call(null,G__12341__12344);
if(temp__3974__auto____12345)
{var G__12341__12346 = temp__3974__auto____12345;
{
var G__12347 = cljs.core.first.call(null,G__12341__12346);
var G__12348 = G__12341__12346;
node__12343 = G__12347;
G__12341__12344 = G__12348;
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
var G__12355__12356 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12355__12356)
{var node__12357 = cljs.core.first.call(null,G__12355__12356);
var G__12355__12358 = G__12355__12356;
while(true){
goog.dom.classes.remove(node__12357,class$);
var temp__3974__auto____12359 = cljs.core.next.call(null,G__12355__12358);
if(temp__3974__auto____12359)
{var G__12355__12360 = temp__3974__auto____12359;
{
var G__12361 = cljs.core.first.call(null,G__12355__12360);
var G__12362 = G__12355__12360;
node__12357 = G__12361;
G__12355__12358 = G__12362;
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
var classes__12370 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12371__12372 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12371__12372)
{var node__12373 = cljs.core.first.call(null,G__12371__12372);
var G__12371__12374 = G__12371__12372;
while(true){
goog.dom.classes.set(node__12373,classes__12370);
var temp__3974__auto____12375 = cljs.core.next.call(null,G__12371__12374);
if(temp__3974__auto____12375)
{var G__12371__12376 = temp__3974__auto____12375;
{
var G__12377 = cljs.core.first.call(null,G__12371__12376);
var G__12378 = G__12371__12376;
node__12373 = G__12377;
G__12371__12374 = G__12378;
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
var G__12385__12386 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12385__12386)
{var node__12387 = cljs.core.first.call(null,G__12385__12386);
var G__12385__12388 = G__12385__12386;
while(true){
goog.dom.setTextContent(node__12387,value);
var temp__3974__auto____12389 = cljs.core.next.call(null,G__12385__12388);
if(temp__3974__auto____12389)
{var G__12385__12390 = temp__3974__auto____12389;
{
var G__12391 = cljs.core.first.call(null,G__12385__12390);
var G__12392 = G__12385__12390;
node__12387 = G__12391;
G__12385__12388 = G__12392;
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
var G__12399__12400 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12399__12400)
{var node__12401 = cljs.core.first.call(null,G__12399__12400);
var G__12399__12402 = G__12399__12400;
while(true){
goog.dom.forms.setValue(node__12401,value);
var temp__3974__auto____12403 = cljs.core.next.call(null,G__12399__12402);
if(temp__3974__auto____12403)
{var G__12399__12404 = temp__3974__auto____12403;
{
var G__12405 = cljs.core.first.call(null,G__12399__12404);
var G__12406 = G__12399__12404;
node__12401 = G__12405;
G__12399__12402 = G__12406;
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
var allows_inner_html_QMARK___12423 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12424 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12425 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12426 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12425);
if(cljs.core.truth_((function (){var and__3822__auto____12427 = allows_inner_html_QMARK___12423;
if(and__3822__auto____12427)
{var and__3822__auto____12429 = (function (){var or__3824__auto____12428 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____12428))
{return or__3824__auto____12428;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12424);
}
})();
if(cljs.core.truth_(and__3822__auto____12429))
{return !(special_tag_QMARK___12426);
} else
{return and__3822__auto____12429;
}
} else
{return and__3822__auto____12427;
}
})()))
{var value__12430 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12433__12434 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12433__12434)
{var node__12435 = cljs.core.first.call(null,G__12433__12434);
var G__12433__12436 = G__12433__12434;
while(true){
goog.events.removeAll(node__12435);
node__12435.innerHTML = value__12430;
var temp__3974__auto____12437 = cljs.core.next.call(null,G__12433__12436);
if(temp__3974__auto____12437)
{var G__12433__12438 = temp__3974__auto____12437;
{
var G__12439 = cljs.core.first.call(null,G__12433__12438);
var G__12440 = G__12433__12438;
node__12435 = G__12439;
G__12433__12436 = G__12440;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12431){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12431))
{var e__12432 = e12431;
domina.replace_children_BANG_.call(null,content,value__12430);
} else
{if("\uFDD0'else")
{throw e12431;
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
var m__12446 = domina.single_node.call(null,node).__domina_data;
var value__12447 = (cljs.core.truth_(m__12446)?cljs.core._lookup.call(null,m__12446,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____12448 = bubble;
if(cljs.core.truth_(and__3822__auto____12448))
{return (value__12447 == null);
} else
{return and__3822__auto____12448;
}
})()))
{var temp__3974__auto____12449 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____12449))
{var parent__12450 = temp__3974__auto____12449;
return get_data.call(null,parent__12450,key,true);
} else
{return null;
}
} else
{return value__12447;
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
var m__12456 = (function (){var or__3824__auto____12455 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____12455))
{return or__3824__auto____12455;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12456,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12468 = domina.nodes.call(null,parent_content);
var children__12469 = domina.nodes.call(null,child_content);
var first_child__12477 = (function (){var frag__12470 = document.createDocumentFragment();
var G__12471__12472 = cljs.core.seq.call(null,children__12469);
if(G__12471__12472)
{var child__12473 = cljs.core.first.call(null,G__12471__12472);
var G__12471__12474 = G__12471__12472;
while(true){
frag__12470.appendChild(child__12473);
var temp__3974__auto____12475 = cljs.core.next.call(null,G__12471__12474);
if(temp__3974__auto____12475)
{var G__12471__12476 = temp__3974__auto____12475;
{
var G__12479 = cljs.core.first.call(null,G__12471__12476);
var G__12480 = G__12471__12476;
child__12473 = G__12479;
G__12471__12474 = G__12480;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12470;
})();
var other_children__12478 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12468) - 1),(function (){
return first_child__12477.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12468))
{f.call(null,cljs.core.first.call(null,parents__12468),first_child__12477);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12451_SHARP_,p2__12452_SHARP_){
return f.call(null,p1__12451_SHARP_,p2__12452_SHARP_);
}),cljs.core.rest.call(null,parents__12468),other_children__12478));
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
var and__3822__auto____12482 = obj;
if(cljs.core.truth_(and__3822__auto____12482))
{return obj.length;
} else
{return and__3822__auto____12482;
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
{if((function (){var G__12486__12487 = list_thing;
if(G__12486__12487)
{if((function (){var or__3824__auto____12488 = (G__12486__12487.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12488)
{return or__3824__auto____12488;
} else
{return G__12486__12487.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12486__12487.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12486__12487);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12486__12487);
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
{if((function (){var G__12489__12490 = content;
if(G__12489__12490)
{if((function (){var or__3824__auto____12491 = (G__12489__12490.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12491)
{return or__3824__auto____12491;
} else
{return G__12489__12490.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12489__12490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12489__12490);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12489__12490);
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
{if((function (){var G__12492__12493 = content;
if(G__12492__12493)
{if((function (){var or__3824__auto____12494 = (G__12492__12493.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12494)
{return or__3824__auto____12494;
} else
{return G__12492__12493.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12492__12493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12492__12493);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12492__12493);
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
