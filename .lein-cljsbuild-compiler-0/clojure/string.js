goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__12896 = s;
var limit__12897 = limit;
var parts__12898 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__12897,1))
{return cljs.core.conj.call(null,parts__12898,s__12896);
} else
{var temp__3971__auto____12899 = cljs.core.re_find.call(null,re,s__12896);
if(cljs.core.truth_(temp__3971__auto____12899))
{var m__12900 = temp__3971__auto____12899;
var index__12901 = s__12896.indexOf(m__12900);
{
var G__12902 = s__12896.substring((index__12901 + cljs.core.count.call(null,m__12900)));
var G__12903 = (limit__12897 - 1);
var G__12904 = cljs.core.conj.call(null,parts__12898,s__12896.substring(0,index__12901));
s__12896 = G__12902;
limit__12897 = G__12903;
parts__12898 = G__12904;
continue;
}
} else
{return cljs.core.conj.call(null,parts__12898,s__12896);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__12908 = s.length;
while(true){
if((index__12908 === 0))
{return "";
} else
{var ch__12909 = cljs.core._lookup.call(null,s,(index__12908 - 1),null);
if((function (){var or__3824__auto____12910 = cljs.core._EQ_.call(null,ch__12909,"\n");
if(or__3824__auto____12910)
{return or__3824__auto____12910;
} else
{return cljs.core._EQ_.call(null,ch__12909,"\r");
}
})())
{{
var G__12911 = (index__12908 - 1);
index__12908 = G__12911;
continue;
}
} else
{return s.substring(0,index__12908);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__12915 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3824__auto____12916 = cljs.core.not.call(null,s__12915);
if(or__3824__auto____12916)
{return or__3824__auto____12916;
} else
{var or__3824__auto____12917 = cljs.core._EQ_.call(null,"",s__12915);
if(or__3824__auto____12917)
{return or__3824__auto____12917;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__12915);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__12924 = (new goog.string.StringBuffer());
var length__12925 = s.length;
var index__12926 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__12925,index__12926))
{return buffer__12924.toString();
} else
{var ch__12927 = s.charAt(index__12926);
var temp__3971__auto____12928 = cljs.core._lookup.call(null,cmap,ch__12927,null);
if(cljs.core.truth_(temp__3971__auto____12928))
{var replacement__12929 = temp__3971__auto____12928;
buffer__12924.append([cljs.core.str(replacement__12929)].join(''));
} else
{buffer__12924.append(ch__12927);
}
{
var G__12930 = (index__12926 + 1);
index__12926 = G__12930;
continue;
}
}
break;
}
});
