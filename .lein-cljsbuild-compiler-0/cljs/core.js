goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__7723 = (((x == null))?null:x);
if((p[goog.typeOf(x__7723)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7724__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7724 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7724__delegate.call(this, array, i, idxs);
};
G__7724.cljs$lang$maxFixedArity = 2;
G__7724.cljs$lang$applyTo = (function (arglist__7725){
var array = cljs.core.first(arglist__7725);
var i = cljs.core.first(cljs.core.next(arglist__7725));
var idxs = cljs.core.rest(cljs.core.next(arglist__7725));
return G__7724__delegate(array, i, idxs);
});
G__7724.cljs$lang$arity$variadic = G__7724__delegate;
return G__7724;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____7810 = this$;
if(and__3822__auto____7810)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7810;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2389__auto____7811 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7812 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7811)]);
if(or__3824__auto____7812)
{return or__3824__auto____7812;
} else
{var or__3824__auto____7813 = (cljs.core._invoke["_"]);
if(or__3824__auto____7813)
{return or__3824__auto____7813;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7814 = this$;
if(and__3822__auto____7814)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7814;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2389__auto____7815 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7816 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7815)]);
if(or__3824__auto____7816)
{return or__3824__auto____7816;
} else
{var or__3824__auto____7817 = (cljs.core._invoke["_"]);
if(or__3824__auto____7817)
{return or__3824__auto____7817;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7818 = this$;
if(and__3822__auto____7818)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7818;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2389__auto____7819 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7820 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7819)]);
if(or__3824__auto____7820)
{return or__3824__auto____7820;
} else
{var or__3824__auto____7821 = (cljs.core._invoke["_"]);
if(or__3824__auto____7821)
{return or__3824__auto____7821;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7822 = this$;
if(and__3822__auto____7822)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7822;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2389__auto____7823 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7824 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7823)]);
if(or__3824__auto____7824)
{return or__3824__auto____7824;
} else
{var or__3824__auto____7825 = (cljs.core._invoke["_"]);
if(or__3824__auto____7825)
{return or__3824__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7826 = this$;
if(and__3822__auto____7826)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7826;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2389__auto____7827 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7828 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7827)]);
if(or__3824__auto____7828)
{return or__3824__auto____7828;
} else
{var or__3824__auto____7829 = (cljs.core._invoke["_"]);
if(or__3824__auto____7829)
{return or__3824__auto____7829;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7830 = this$;
if(and__3822__auto____7830)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7830;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2389__auto____7831 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7832 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7831)]);
if(or__3824__auto____7832)
{return or__3824__auto____7832;
} else
{var or__3824__auto____7833 = (cljs.core._invoke["_"]);
if(or__3824__auto____7833)
{return or__3824__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7834 = this$;
if(and__3822__auto____7834)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7834;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2389__auto____7835 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7836 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7835)]);
if(or__3824__auto____7836)
{return or__3824__auto____7836;
} else
{var or__3824__auto____7837 = (cljs.core._invoke["_"]);
if(or__3824__auto____7837)
{return or__3824__auto____7837;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7838 = this$;
if(and__3822__auto____7838)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7838;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2389__auto____7839 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7840 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7839)]);
if(or__3824__auto____7840)
{return or__3824__auto____7840;
} else
{var or__3824__auto____7841 = (cljs.core._invoke["_"]);
if(or__3824__auto____7841)
{return or__3824__auto____7841;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7842 = this$;
if(and__3822__auto____7842)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7842;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2389__auto____7843 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7844 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7843)]);
if(or__3824__auto____7844)
{return or__3824__auto____7844;
} else
{var or__3824__auto____7845 = (cljs.core._invoke["_"]);
if(or__3824__auto____7845)
{return or__3824__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7846 = this$;
if(and__3822__auto____7846)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7846;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2389__auto____7847 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7848 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7847)]);
if(or__3824__auto____7848)
{return or__3824__auto____7848;
} else
{var or__3824__auto____7849 = (cljs.core._invoke["_"]);
if(or__3824__auto____7849)
{return or__3824__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7850 = this$;
if(and__3822__auto____7850)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7850;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2389__auto____7851 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7852 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7851)]);
if(or__3824__auto____7852)
{return or__3824__auto____7852;
} else
{var or__3824__auto____7853 = (cljs.core._invoke["_"]);
if(or__3824__auto____7853)
{return or__3824__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7854 = this$;
if(and__3822__auto____7854)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7854;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2389__auto____7855 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7856 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7855)]);
if(or__3824__auto____7856)
{return or__3824__auto____7856;
} else
{var or__3824__auto____7857 = (cljs.core._invoke["_"]);
if(or__3824__auto____7857)
{return or__3824__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7858 = this$;
if(and__3822__auto____7858)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7858;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2389__auto____7859 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7860 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7859)]);
if(or__3824__auto____7860)
{return or__3824__auto____7860;
} else
{var or__3824__auto____7861 = (cljs.core._invoke["_"]);
if(or__3824__auto____7861)
{return or__3824__auto____7861;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7862 = this$;
if(and__3822__auto____7862)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7862;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2389__auto____7863 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7864 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7863)]);
if(or__3824__auto____7864)
{return or__3824__auto____7864;
} else
{var or__3824__auto____7865 = (cljs.core._invoke["_"]);
if(or__3824__auto____7865)
{return or__3824__auto____7865;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7866 = this$;
if(and__3822__auto____7866)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7866;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2389__auto____7867 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7868 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7867)]);
if(or__3824__auto____7868)
{return or__3824__auto____7868;
} else
{var or__3824__auto____7869 = (cljs.core._invoke["_"]);
if(or__3824__auto____7869)
{return or__3824__auto____7869;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7870 = this$;
if(and__3822__auto____7870)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7870;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2389__auto____7871 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7872 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7871)]);
if(or__3824__auto____7872)
{return or__3824__auto____7872;
} else
{var or__3824__auto____7873 = (cljs.core._invoke["_"]);
if(or__3824__auto____7873)
{return or__3824__auto____7873;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7874 = this$;
if(and__3822__auto____7874)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7874;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2389__auto____7875 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7876 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7875)]);
if(or__3824__auto____7876)
{return or__3824__auto____7876;
} else
{var or__3824__auto____7877 = (cljs.core._invoke["_"]);
if(or__3824__auto____7877)
{return or__3824__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7878 = this$;
if(and__3822__auto____7878)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7878;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2389__auto____7879 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7880 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7879)]);
if(or__3824__auto____7880)
{return or__3824__auto____7880;
} else
{var or__3824__auto____7881 = (cljs.core._invoke["_"]);
if(or__3824__auto____7881)
{return or__3824__auto____7881;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7882 = this$;
if(and__3822__auto____7882)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7882;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2389__auto____7883 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7884 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7883)]);
if(or__3824__auto____7884)
{return or__3824__auto____7884;
} else
{var or__3824__auto____7885 = (cljs.core._invoke["_"]);
if(or__3824__auto____7885)
{return or__3824__auto____7885;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7886 = this$;
if(and__3822__auto____7886)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7886;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2389__auto____7887 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7888 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7887)]);
if(or__3824__auto____7888)
{return or__3824__auto____7888;
} else
{var or__3824__auto____7889 = (cljs.core._invoke["_"]);
if(or__3824__auto____7889)
{return or__3824__auto____7889;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7890 = this$;
if(and__3822__auto____7890)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7890;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2389__auto____7891 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7892 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7891)]);
if(or__3824__auto____7892)
{return or__3824__auto____7892;
} else
{var or__3824__auto____7893 = (cljs.core._invoke["_"]);
if(or__3824__auto____7893)
{return or__3824__auto____7893;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____7898 = coll;
if(and__3822__auto____7898)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7898;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2389__auto____7899 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7900 = (cljs.core._count[goog.typeOf(x__2389__auto____7899)]);
if(or__3824__auto____7900)
{return or__3824__auto____7900;
} else
{var or__3824__auto____7901 = (cljs.core._count["_"]);
if(or__3824__auto____7901)
{return or__3824__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7906 = coll;
if(and__3822__auto____7906)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7906;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2389__auto____7907 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7908 = (cljs.core._empty[goog.typeOf(x__2389__auto____7907)]);
if(or__3824__auto____7908)
{return or__3824__auto____7908;
} else
{var or__3824__auto____7909 = (cljs.core._empty["_"]);
if(or__3824__auto____7909)
{return or__3824__auto____7909;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7914 = coll;
if(and__3822__auto____7914)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7914;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2389__auto____7915 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7916 = (cljs.core._conj[goog.typeOf(x__2389__auto____7915)]);
if(or__3824__auto____7916)
{return or__3824__auto____7916;
} else
{var or__3824__auto____7917 = (cljs.core._conj["_"]);
if(or__3824__auto____7917)
{return or__3824__auto____7917;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____7926 = coll;
if(and__3822__auto____7926)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7926;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2389__auto____7927 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7928 = (cljs.core._nth[goog.typeOf(x__2389__auto____7927)]);
if(or__3824__auto____7928)
{return or__3824__auto____7928;
} else
{var or__3824__auto____7929 = (cljs.core._nth["_"]);
if(or__3824__auto____7929)
{return or__3824__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7930 = coll;
if(and__3822__auto____7930)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7930;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2389__auto____7931 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7932 = (cljs.core._nth[goog.typeOf(x__2389__auto____7931)]);
if(or__3824__auto____7932)
{return or__3824__auto____7932;
} else
{var or__3824__auto____7933 = (cljs.core._nth["_"]);
if(or__3824__auto____7933)
{return or__3824__auto____7933;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____7938 = coll;
if(and__3822__auto____7938)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7938;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2389__auto____7939 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7940 = (cljs.core._first[goog.typeOf(x__2389__auto____7939)]);
if(or__3824__auto____7940)
{return or__3824__auto____7940;
} else
{var or__3824__auto____7941 = (cljs.core._first["_"]);
if(or__3824__auto____7941)
{return or__3824__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7946 = coll;
if(and__3822__auto____7946)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7946;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2389__auto____7947 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7948 = (cljs.core._rest[goog.typeOf(x__2389__auto____7947)]);
if(or__3824__auto____7948)
{return or__3824__auto____7948;
} else
{var or__3824__auto____7949 = (cljs.core._rest["_"]);
if(or__3824__auto____7949)
{return or__3824__auto____7949;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7954 = coll;
if(and__3822__auto____7954)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7954;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2389__auto____7955 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7956 = (cljs.core._next[goog.typeOf(x__2389__auto____7955)]);
if(or__3824__auto____7956)
{return or__3824__auto____7956;
} else
{var or__3824__auto____7957 = (cljs.core._next["_"]);
if(or__3824__auto____7957)
{return or__3824__auto____7957;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____7966 = o;
if(and__3822__auto____7966)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7966;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2389__auto____7967 = (((o == null))?null:o);
return (function (){var or__3824__auto____7968 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7967)]);
if(or__3824__auto____7968)
{return or__3824__auto____7968;
} else
{var or__3824__auto____7969 = (cljs.core._lookup["_"]);
if(or__3824__auto____7969)
{return or__3824__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7970 = o;
if(and__3822__auto____7970)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7970;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2389__auto____7971 = (((o == null))?null:o);
return (function (){var or__3824__auto____7972 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7971)]);
if(or__3824__auto____7972)
{return or__3824__auto____7972;
} else
{var or__3824__auto____7973 = (cljs.core._lookup["_"]);
if(or__3824__auto____7973)
{return or__3824__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____7978 = coll;
if(and__3822__auto____7978)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7978;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2389__auto____7979 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7980 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2389__auto____7979)]);
if(or__3824__auto____7980)
{return or__3824__auto____7980;
} else
{var or__3824__auto____7981 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7981)
{return or__3824__auto____7981;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7986 = coll;
if(and__3822__auto____7986)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7986;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2389__auto____7987 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7988 = (cljs.core._assoc[goog.typeOf(x__2389__auto____7987)]);
if(or__3824__auto____7988)
{return or__3824__auto____7988;
} else
{var or__3824__auto____7989 = (cljs.core._assoc["_"]);
if(or__3824__auto____7989)
{return or__3824__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7994 = coll;
if(and__3822__auto____7994)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7994;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2389__auto____7995 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7996 = (cljs.core._dissoc[goog.typeOf(x__2389__auto____7995)]);
if(or__3824__auto____7996)
{return or__3824__auto____7996;
} else
{var or__3824__auto____7997 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7997)
{return or__3824__auto____7997;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8002 = coll;
if(and__3822__auto____8002)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8002;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2389__auto____8003 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8004 = (cljs.core._key[goog.typeOf(x__2389__auto____8003)]);
if(or__3824__auto____8004)
{return or__3824__auto____8004;
} else
{var or__3824__auto____8005 = (cljs.core._key["_"]);
if(or__3824__auto____8005)
{return or__3824__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8010 = coll;
if(and__3822__auto____8010)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8010;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2389__auto____8011 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8012 = (cljs.core._val[goog.typeOf(x__2389__auto____8011)]);
if(or__3824__auto____8012)
{return or__3824__auto____8012;
} else
{var or__3824__auto____8013 = (cljs.core._val["_"]);
if(or__3824__auto____8013)
{return or__3824__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8018 = coll;
if(and__3822__auto____8018)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8018;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2389__auto____8019 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8020 = (cljs.core._disjoin[goog.typeOf(x__2389__auto____8019)]);
if(or__3824__auto____8020)
{return or__3824__auto____8020;
} else
{var or__3824__auto____8021 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8021)
{return or__3824__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8026 = coll;
if(and__3822__auto____8026)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8026;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2389__auto____8027 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8028 = (cljs.core._peek[goog.typeOf(x__2389__auto____8027)]);
if(or__3824__auto____8028)
{return or__3824__auto____8028;
} else
{var or__3824__auto____8029 = (cljs.core._peek["_"]);
if(or__3824__auto____8029)
{return or__3824__auto____8029;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8034 = coll;
if(and__3822__auto____8034)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8034;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2389__auto____8035 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8036 = (cljs.core._pop[goog.typeOf(x__2389__auto____8035)]);
if(or__3824__auto____8036)
{return or__3824__auto____8036;
} else
{var or__3824__auto____8037 = (cljs.core._pop["_"]);
if(or__3824__auto____8037)
{return or__3824__auto____8037;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8042 = coll;
if(and__3822__auto____8042)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8042;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2389__auto____8043 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8044 = (cljs.core._assoc_n[goog.typeOf(x__2389__auto____8043)]);
if(or__3824__auto____8044)
{return or__3824__auto____8044;
} else
{var or__3824__auto____8045 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8045)
{return or__3824__auto____8045;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8050 = o;
if(and__3822__auto____8050)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8050;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2389__auto____8051 = (((o == null))?null:o);
return (function (){var or__3824__auto____8052 = (cljs.core._deref[goog.typeOf(x__2389__auto____8051)]);
if(or__3824__auto____8052)
{return or__3824__auto____8052;
} else
{var or__3824__auto____8053 = (cljs.core._deref["_"]);
if(or__3824__auto____8053)
{return or__3824__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8058 = o;
if(and__3822__auto____8058)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8058;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2389__auto____8059 = (((o == null))?null:o);
return (function (){var or__3824__auto____8060 = (cljs.core._deref_with_timeout[goog.typeOf(x__2389__auto____8059)]);
if(or__3824__auto____8060)
{return or__3824__auto____8060;
} else
{var or__3824__auto____8061 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8061)
{return or__3824__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8066 = o;
if(and__3822__auto____8066)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8066;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2389__auto____8067 = (((o == null))?null:o);
return (function (){var or__3824__auto____8068 = (cljs.core._meta[goog.typeOf(x__2389__auto____8067)]);
if(or__3824__auto____8068)
{return or__3824__auto____8068;
} else
{var or__3824__auto____8069 = (cljs.core._meta["_"]);
if(or__3824__auto____8069)
{return or__3824__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8074 = o;
if(and__3822__auto____8074)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8074;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2389__auto____8075 = (((o == null))?null:o);
return (function (){var or__3824__auto____8076 = (cljs.core._with_meta[goog.typeOf(x__2389__auto____8075)]);
if(or__3824__auto____8076)
{return or__3824__auto____8076;
} else
{var or__3824__auto____8077 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8077)
{return or__3824__auto____8077;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____8086 = coll;
if(and__3822__auto____8086)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8086;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2389__auto____8087 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8088 = (cljs.core._reduce[goog.typeOf(x__2389__auto____8087)]);
if(or__3824__auto____8088)
{return or__3824__auto____8088;
} else
{var or__3824__auto____8089 = (cljs.core._reduce["_"]);
if(or__3824__auto____8089)
{return or__3824__auto____8089;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8090 = coll;
if(and__3822__auto____8090)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8090;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2389__auto____8091 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8092 = (cljs.core._reduce[goog.typeOf(x__2389__auto____8091)]);
if(or__3824__auto____8092)
{return or__3824__auto____8092;
} else
{var or__3824__auto____8093 = (cljs.core._reduce["_"]);
if(or__3824__auto____8093)
{return or__3824__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____8098 = coll;
if(and__3822__auto____8098)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8098;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2389__auto____8099 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8100 = (cljs.core._kv_reduce[goog.typeOf(x__2389__auto____8099)]);
if(or__3824__auto____8100)
{return or__3824__auto____8100;
} else
{var or__3824__auto____8101 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8101)
{return or__3824__auto____8101;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8106 = o;
if(and__3822__auto____8106)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8106;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2389__auto____8107 = (((o == null))?null:o);
return (function (){var or__3824__auto____8108 = (cljs.core._equiv[goog.typeOf(x__2389__auto____8107)]);
if(or__3824__auto____8108)
{return or__3824__auto____8108;
} else
{var or__3824__auto____8109 = (cljs.core._equiv["_"]);
if(or__3824__auto____8109)
{return or__3824__auto____8109;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8114 = o;
if(and__3822__auto____8114)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8114;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2389__auto____8115 = (((o == null))?null:o);
return (function (){var or__3824__auto____8116 = (cljs.core._hash[goog.typeOf(x__2389__auto____8115)]);
if(or__3824__auto____8116)
{return or__3824__auto____8116;
} else
{var or__3824__auto____8117 = (cljs.core._hash["_"]);
if(or__3824__auto____8117)
{return or__3824__auto____8117;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8122 = o;
if(and__3822__auto____8122)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8122;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2389__auto____8123 = (((o == null))?null:o);
return (function (){var or__3824__auto____8124 = (cljs.core._seq[goog.typeOf(x__2389__auto____8123)]);
if(or__3824__auto____8124)
{return or__3824__auto____8124;
} else
{var or__3824__auto____8125 = (cljs.core._seq["_"]);
if(or__3824__auto____8125)
{return or__3824__auto____8125;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____8130 = coll;
if(and__3822__auto____8130)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8130;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2389__auto____8131 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8132 = (cljs.core._rseq[goog.typeOf(x__2389__auto____8131)]);
if(or__3824__auto____8132)
{return or__3824__auto____8132;
} else
{var or__3824__auto____8133 = (cljs.core._rseq["_"]);
if(or__3824__auto____8133)
{return or__3824__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8138 = coll;
if(and__3822__auto____8138)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8138;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2389__auto____8139 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8140 = (cljs.core._sorted_seq[goog.typeOf(x__2389__auto____8139)]);
if(or__3824__auto____8140)
{return or__3824__auto____8140;
} else
{var or__3824__auto____8141 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8141)
{return or__3824__auto____8141;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8146 = coll;
if(and__3822__auto____8146)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8146;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2389__auto____8147 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8148 = (cljs.core._sorted_seq_from[goog.typeOf(x__2389__auto____8147)]);
if(or__3824__auto____8148)
{return or__3824__auto____8148;
} else
{var or__3824__auto____8149 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8149)
{return or__3824__auto____8149;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8154 = coll;
if(and__3822__auto____8154)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8154;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2389__auto____8155 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8156 = (cljs.core._entry_key[goog.typeOf(x__2389__auto____8155)]);
if(or__3824__auto____8156)
{return or__3824__auto____8156;
} else
{var or__3824__auto____8157 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8157)
{return or__3824__auto____8157;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8162 = coll;
if(and__3822__auto____8162)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8162;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2389__auto____8163 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8164 = (cljs.core._comparator[goog.typeOf(x__2389__auto____8163)]);
if(or__3824__auto____8164)
{return or__3824__auto____8164;
} else
{var or__3824__auto____8165 = (cljs.core._comparator["_"]);
if(or__3824__auto____8165)
{return or__3824__auto____8165;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8170 = o;
if(and__3822__auto____8170)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8170;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2389__auto____8171 = (((o == null))?null:o);
return (function (){var or__3824__auto____8172 = (cljs.core._pr_seq[goog.typeOf(x__2389__auto____8171)]);
if(or__3824__auto____8172)
{return or__3824__auto____8172;
} else
{var or__3824__auto____8173 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8173)
{return or__3824__auto____8173;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8178 = d;
if(and__3822__auto____8178)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8178;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2389__auto____8179 = (((d == null))?null:d);
return (function (){var or__3824__auto____8180 = (cljs.core._realized_QMARK_[goog.typeOf(x__2389__auto____8179)]);
if(or__3824__auto____8180)
{return or__3824__auto____8180;
} else
{var or__3824__auto____8181 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8181)
{return or__3824__auto____8181;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8186 = this$;
if(and__3822__auto____8186)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8186;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2389__auto____8187 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8188 = (cljs.core._notify_watches[goog.typeOf(x__2389__auto____8187)]);
if(or__3824__auto____8188)
{return or__3824__auto____8188;
} else
{var or__3824__auto____8189 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8189)
{return or__3824__auto____8189;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8194 = this$;
if(and__3822__auto____8194)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8194;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2389__auto____8195 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8196 = (cljs.core._add_watch[goog.typeOf(x__2389__auto____8195)]);
if(or__3824__auto____8196)
{return or__3824__auto____8196;
} else
{var or__3824__auto____8197 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8197)
{return or__3824__auto____8197;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8202 = this$;
if(and__3822__auto____8202)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8202;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2389__auto____8203 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8204 = (cljs.core._remove_watch[goog.typeOf(x__2389__auto____8203)]);
if(or__3824__auto____8204)
{return or__3824__auto____8204;
} else
{var or__3824__auto____8205 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8205)
{return or__3824__auto____8205;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8210 = coll;
if(and__3822__auto____8210)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8210;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2389__auto____8211 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8212 = (cljs.core._as_transient[goog.typeOf(x__2389__auto____8211)]);
if(or__3824__auto____8212)
{return or__3824__auto____8212;
} else
{var or__3824__auto____8213 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8213)
{return or__3824__auto____8213;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8218 = tcoll;
if(and__3822__auto____8218)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8218;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2389__auto____8219 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8220 = (cljs.core._conj_BANG_[goog.typeOf(x__2389__auto____8219)]);
if(or__3824__auto____8220)
{return or__3824__auto____8220;
} else
{var or__3824__auto____8221 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8221)
{return or__3824__auto____8221;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8226 = tcoll;
if(and__3822__auto____8226)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8226;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____8227 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8228 = (cljs.core._persistent_BANG_[goog.typeOf(x__2389__auto____8227)]);
if(or__3824__auto____8228)
{return or__3824__auto____8228;
} else
{var or__3824__auto____8229 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8229)
{return or__3824__auto____8229;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8234 = tcoll;
if(and__3822__auto____8234)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8234;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2389__auto____8235 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8236 = (cljs.core._assoc_BANG_[goog.typeOf(x__2389__auto____8235)]);
if(or__3824__auto____8236)
{return or__3824__auto____8236;
} else
{var or__3824__auto____8237 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8237)
{return or__3824__auto____8237;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8242 = tcoll;
if(and__3822__auto____8242)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8242;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2389__auto____8243 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8244 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2389__auto____8243)]);
if(or__3824__auto____8244)
{return or__3824__auto____8244;
} else
{var or__3824__auto____8245 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8245)
{return or__3824__auto____8245;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8250 = tcoll;
if(and__3822__auto____8250)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8250;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2389__auto____8251 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8252 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2389__auto____8251)]);
if(or__3824__auto____8252)
{return or__3824__auto____8252;
} else
{var or__3824__auto____8253 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8253)
{return or__3824__auto____8253;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8258 = tcoll;
if(and__3822__auto____8258)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8258;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____8259 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8260 = (cljs.core._pop_BANG_[goog.typeOf(x__2389__auto____8259)]);
if(or__3824__auto____8260)
{return or__3824__auto____8260;
} else
{var or__3824__auto____8261 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8261)
{return or__3824__auto____8261;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8266 = tcoll;
if(and__3822__auto____8266)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8266;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2389__auto____8267 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8268 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2389__auto____8267)]);
if(or__3824__auto____8268)
{return or__3824__auto____8268;
} else
{var or__3824__auto____8269 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8269)
{return or__3824__auto____8269;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8274 = x;
if(and__3822__auto____8274)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8274;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2389__auto____8275 = (((x == null))?null:x);
return (function (){var or__3824__auto____8276 = (cljs.core._compare[goog.typeOf(x__2389__auto____8275)]);
if(or__3824__auto____8276)
{return or__3824__auto____8276;
} else
{var or__3824__auto____8277 = (cljs.core._compare["_"]);
if(or__3824__auto____8277)
{return or__3824__auto____8277;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8282 = coll;
if(and__3822__auto____8282)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8282;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2389__auto____8283 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8284 = (cljs.core._drop_first[goog.typeOf(x__2389__auto____8283)]);
if(or__3824__auto____8284)
{return or__3824__auto____8284;
} else
{var or__3824__auto____8285 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8285)
{return or__3824__auto____8285;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8290 = coll;
if(and__3822__auto____8290)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8290;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2389__auto____8291 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8292 = (cljs.core._chunked_first[goog.typeOf(x__2389__auto____8291)]);
if(or__3824__auto____8292)
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8293)
{return or__3824__auto____8293;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8298 = coll;
if(and__3822__auto____8298)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8298;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2389__auto____8299 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8300 = (cljs.core._chunked_rest[goog.typeOf(x__2389__auto____8299)]);
if(or__3824__auto____8300)
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8301)
{return or__3824__auto____8301;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8306 = coll;
if(and__3822__auto____8306)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8306;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2389__auto____8307 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8308 = (cljs.core._chunked_next[goog.typeOf(x__2389__auto____8307)]);
if(or__3824__auto____8308)
{return or__3824__auto____8308;
} else
{var or__3824__auto____8309 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8309)
{return or__3824__auto____8309;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____8311 = (x === y);
if(or__3824__auto____8311)
{return or__3824__auto____8311;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8312__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8313 = y;
var G__8314 = cljs.core.first.call(null,more);
var G__8315 = cljs.core.next.call(null,more);
x = G__8313;
y = G__8314;
more = G__8315;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8312__delegate.call(this, x, y, more);
};
G__8312.cljs$lang$maxFixedArity = 2;
G__8312.cljs$lang$applyTo = (function (arglist__8316){
var x = cljs.core.first(arglist__8316);
var y = cljs.core.first(cljs.core.next(arglist__8316));
var more = cljs.core.rest(cljs.core.next(arglist__8316));
return G__8312__delegate(x, y, more);
});
G__8312.cljs$lang$arity$variadic = G__8312__delegate;
return G__8312;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8317 = null;
var G__8317__2 = (function (o,k){
return null;
});
var G__8317__3 = (function (o,k,not_found){
return not_found;
});
G__8317 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8317__2.call(this,o,k);
case 3:
return G__8317__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8317;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8318 = null;
var G__8318__2 = (function (_,f){
return f.call(null);
});
var G__8318__3 = (function (_,f,start){
return start;
});
G__8318 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8318__2.call(this,_,f);
case 3:
return G__8318__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8318;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8319 = null;
var G__8319__2 = (function (_,n){
return null;
});
var G__8319__3 = (function (_,n,not_found){
return not_found;
});
G__8319 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8319__2.call(this,_,n);
case 3:
return G__8319__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8319;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____8320 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8320)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8320;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__8333 = cljs.core._count.call(null,cicoll);
if((cnt__8333 === 0))
{return f.call(null);
} else
{var val__8334 = cljs.core._nth.call(null,cicoll,0);
var n__8335 = 1;
while(true){
if((n__8335 < cnt__8333))
{var nval__8336 = f.call(null,val__8334,cljs.core._nth.call(null,cicoll,n__8335));
if(cljs.core.reduced_QMARK_.call(null,nval__8336))
{return cljs.core.deref.call(null,nval__8336);
} else
{{
var G__8345 = nval__8336;
var G__8346 = (n__8335 + 1);
val__8334 = G__8345;
n__8335 = G__8346;
continue;
}
}
} else
{return val__8334;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8337 = cljs.core._count.call(null,cicoll);
var val__8338 = val;
var n__8339 = 0;
while(true){
if((n__8339 < cnt__8337))
{var nval__8340 = f.call(null,val__8338,cljs.core._nth.call(null,cicoll,n__8339));
if(cljs.core.reduced_QMARK_.call(null,nval__8340))
{return cljs.core.deref.call(null,nval__8340);
} else
{{
var G__8347 = nval__8340;
var G__8348 = (n__8339 + 1);
val__8338 = G__8347;
n__8339 = G__8348;
continue;
}
}
} else
{return val__8338;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8341 = cljs.core._count.call(null,cicoll);
var val__8342 = val;
var n__8343 = idx;
while(true){
if((n__8343 < cnt__8341))
{var nval__8344 = f.call(null,val__8342,cljs.core._nth.call(null,cicoll,n__8343));
if(cljs.core.reduced_QMARK_.call(null,nval__8344))
{return cljs.core.deref.call(null,nval__8344);
} else
{{
var G__8349 = nval__8344;
var G__8350 = (n__8343 + 1);
val__8342 = G__8349;
n__8343 = G__8350;
continue;
}
}
} else
{return val__8342;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__8363 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8364 = (arr[0]);
var n__8365 = 1;
while(true){
if((n__8365 < cnt__8363))
{var nval__8366 = f.call(null,val__8364,(arr[n__8365]));
if(cljs.core.reduced_QMARK_.call(null,nval__8366))
{return cljs.core.deref.call(null,nval__8366);
} else
{{
var G__8375 = nval__8366;
var G__8376 = (n__8365 + 1);
val__8364 = G__8375;
n__8365 = G__8376;
continue;
}
}
} else
{return val__8364;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8367 = arr.length;
var val__8368 = val;
var n__8369 = 0;
while(true){
if((n__8369 < cnt__8367))
{var nval__8370 = f.call(null,val__8368,(arr[n__8369]));
if(cljs.core.reduced_QMARK_.call(null,nval__8370))
{return cljs.core.deref.call(null,nval__8370);
} else
{{
var G__8377 = nval__8370;
var G__8378 = (n__8369 + 1);
val__8368 = G__8377;
n__8369 = G__8378;
continue;
}
}
} else
{return val__8368;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8371 = arr.length;
var val__8372 = val;
var n__8373 = idx;
while(true){
if((n__8373 < cnt__8371))
{var nval__8374 = f.call(null,val__8372,(arr[n__8373]));
if(cljs.core.reduced_QMARK_.call(null,nval__8374))
{return cljs.core.deref.call(null,nval__8374);
} else
{{
var G__8379 = nval__8374;
var G__8380 = (n__8373 + 1);
val__8372 = G__8379;
n__8373 = G__8380;
continue;
}
}
} else
{return val__8372;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8381 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8382 = this;
if(((this__8382.i + 1) < this__8382.a.length))
{return (new cljs.core.IndexedSeq(this__8382.a,(this__8382.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8383 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8384 = this;
var c__8385 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8385 > 0))
{return (new cljs.core.RSeq(coll,(c__8385 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8386 = this;
var this__8387 = this;
return cljs.core.pr_str.call(null,this__8387);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8388 = this;
if(cljs.core.counted_QMARK_.call(null,this__8388.a))
{return cljs.core.ci_reduce.call(null,this__8388.a,f,(this__8388.a[this__8388.i]),(this__8388.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8388.a[this__8388.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8389 = this;
if(cljs.core.counted_QMARK_.call(null,this__8389.a))
{return cljs.core.ci_reduce.call(null,this__8389.a,f,start,this__8389.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8390 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8391 = this;
return (this__8391.a.length - this__8391.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8392 = this;
return (this__8392.a[this__8392.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8393 = this;
if(((this__8393.i + 1) < this__8393.a.length))
{return (new cljs.core.IndexedSeq(this__8393.a,(this__8393.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8394 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8395 = this;
var i__8396 = (n + this__8395.i);
if((i__8396 < this__8395.a.length))
{return (this__8395.a[i__8396]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8397 = this;
var i__8398 = (n + this__8397.i);
if((i__8398 < this__8397.a.length))
{return (this__8397.a[i__8398]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8399 = null;
var G__8399__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8399__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8399 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8399__2.call(this,array,f);
case 3:
return G__8399__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8400 = null;
var G__8400__2 = (function (array,k){
return (array[k]);
});
var G__8400__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8400 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8400__2.call(this,array,k);
case 3:
return G__8400__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8400;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8401 = null;
var G__8401__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8401__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8401 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8401__2.call(this,array,n);
case 3:
return G__8401__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8401;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8403 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8404 = this;
var this__8405 = this;
return cljs.core.pr_str.call(null,this__8405);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8406 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8407 = this;
return (this__8407.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8408 = this;
return cljs.core._nth.call(null,this__8408.ci,this__8408.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8409 = this;
if((this__8409.i > 0))
{return (new cljs.core.RSeq(this__8409.ci,(this__8409.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8411 = this;
return (new cljs.core.RSeq(this__8411.ci,this__8411.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8412 = this;
return this__8412.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8416__8417 = coll;
if(G__8416__8417)
{if((function (){var or__3824__auto____8418 = (G__8416__8417.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8418)
{return or__3824__auto____8418;
} else
{return G__8416__8417.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8416__8417.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8416__8417);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8416__8417);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8423__8424 = coll;
if(G__8423__8424)
{if((function (){var or__3824__auto____8425 = (G__8423__8424.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8425)
{return or__3824__auto____8425;
} else
{return G__8423__8424.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8423__8424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8423__8424);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8423__8424);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8426 = cljs.core.seq.call(null,coll);
if((s__8426 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8426);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8431__8432 = coll;
if(G__8431__8432)
{if((function (){var or__3824__auto____8433 = (G__8431__8432.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8433)
{return or__3824__auto____8433;
} else
{return G__8431__8432.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8431__8432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8431__8432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8431__8432);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8434 = cljs.core.seq.call(null,coll);
if(!((s__8434 == null)))
{return cljs.core._rest.call(null,s__8434);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8438__8439 = coll;
if(G__8438__8439)
{if((function (){var or__3824__auto____8440 = (G__8438__8439.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8440)
{return or__3824__auto____8440;
} else
{return G__8438__8439.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8438__8439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8438__8439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8438__8439);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8442 = cljs.core.next.call(null,s);
if(!((sn__8442 == null)))
{{
var G__8443 = sn__8442;
s = G__8443;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8444__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8445 = conj.call(null,coll,x);
var G__8446 = cljs.core.first.call(null,xs);
var G__8447 = cljs.core.next.call(null,xs);
coll = G__8445;
x = G__8446;
xs = G__8447;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8444 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8444__delegate.call(this, coll, x, xs);
};
G__8444.cljs$lang$maxFixedArity = 2;
G__8444.cljs$lang$applyTo = (function (arglist__8448){
var coll = cljs.core.first(arglist__8448);
var x = cljs.core.first(cljs.core.next(arglist__8448));
var xs = cljs.core.rest(cljs.core.next(arglist__8448));
return G__8444__delegate(coll, x, xs);
});
G__8444.cljs$lang$arity$variadic = G__8444__delegate;
return G__8444;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8451 = cljs.core.seq.call(null,coll);
var acc__8452 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8451))
{return (acc__8452 + cljs.core._count.call(null,s__8451));
} else
{{
var G__8453 = cljs.core.next.call(null,s__8451);
var G__8454 = (acc__8452 + 1);
s__8451 = G__8453;
acc__8452 = G__8454;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8461__8462 = coll;
if(G__8461__8462)
{if((function (){var or__3824__auto____8463 = (G__8461__8462.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8463)
{return or__3824__auto____8463;
} else
{return G__8461__8462.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8461__8462.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8461__8462);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8461__8462);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8464__8465 = coll;
if(G__8464__8465)
{if((function (){var or__3824__auto____8466 = (G__8464__8465.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8466)
{return or__3824__auto____8466;
} else
{return G__8464__8465.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8464__8465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8464__8465);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8464__8465);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8469__delegate = function (coll,k,v,kvs){
while(true){
var ret__8468 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8470 = ret__8468;
var G__8471 = cljs.core.first.call(null,kvs);
var G__8472 = cljs.core.second.call(null,kvs);
var G__8473 = cljs.core.nnext.call(null,kvs);
coll = G__8470;
k = G__8471;
v = G__8472;
kvs = G__8473;
continue;
}
} else
{return ret__8468;
}
break;
}
};
var G__8469 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8469__delegate.call(this, coll, k, v, kvs);
};
G__8469.cljs$lang$maxFixedArity = 3;
G__8469.cljs$lang$applyTo = (function (arglist__8474){
var coll = cljs.core.first(arglist__8474);
var k = cljs.core.first(cljs.core.next(arglist__8474));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8474)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8474)));
return G__8469__delegate(coll, k, v, kvs);
});
G__8469.cljs$lang$arity$variadic = G__8469__delegate;
return G__8469;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8477__delegate = function (coll,k,ks){
while(true){
var ret__8476 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8478 = ret__8476;
var G__8479 = cljs.core.first.call(null,ks);
var G__8480 = cljs.core.next.call(null,ks);
coll = G__8478;
k = G__8479;
ks = G__8480;
continue;
}
} else
{return ret__8476;
}
break;
}
};
var G__8477 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8477__delegate.call(this, coll, k, ks);
};
G__8477.cljs$lang$maxFixedArity = 2;
G__8477.cljs$lang$applyTo = (function (arglist__8481){
var coll = cljs.core.first(arglist__8481);
var k = cljs.core.first(cljs.core.next(arglist__8481));
var ks = cljs.core.rest(cljs.core.next(arglist__8481));
return G__8477__delegate(coll, k, ks);
});
G__8477.cljs$lang$arity$variadic = G__8477__delegate;
return G__8477;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8485__8486 = o;
if(G__8485__8486)
{if((function (){var or__3824__auto____8487 = (G__8485__8486.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8487)
{return or__3824__auto____8487;
} else
{return G__8485__8486.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8485__8486.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8485__8486);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8485__8486);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8490__delegate = function (coll,k,ks){
while(true){
var ret__8489 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8491 = ret__8489;
var G__8492 = cljs.core.first.call(null,ks);
var G__8493 = cljs.core.next.call(null,ks);
coll = G__8491;
k = G__8492;
ks = G__8493;
continue;
}
} else
{return ret__8489;
}
break;
}
};
var G__8490 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8490__delegate.call(this, coll, k, ks);
};
G__8490.cljs$lang$maxFixedArity = 2;
G__8490.cljs$lang$applyTo = (function (arglist__8494){
var coll = cljs.core.first(arglist__8494);
var k = cljs.core.first(cljs.core.next(arglist__8494));
var ks = cljs.core.rest(cljs.core.next(arglist__8494));
return G__8490__delegate(coll, k, ks);
});
G__8490.cljs$lang$arity$variadic = G__8490__delegate;
return G__8490;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8496 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8496);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8496;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8498 = (cljs.core.string_hash_cache[k]);
if(!((h__8498 == null)))
{return h__8498;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____8500 = goog.isString(o);
if(and__3822__auto____8500)
{return check_cache;
} else
{return and__3822__auto____8500;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8504__8505 = x;
if(G__8504__8505)
{if((function (){var or__3824__auto____8506 = (G__8504__8505.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8506)
{return or__3824__auto____8506;
} else
{return G__8504__8505.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8504__8505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8504__8505);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8504__8505);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8510__8511 = x;
if(G__8510__8511)
{if((function (){var or__3824__auto____8512 = (G__8510__8511.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8512)
{return or__3824__auto____8512;
} else
{return G__8510__8511.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8510__8511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8510__8511);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8510__8511);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8516__8517 = x;
if(G__8516__8517)
{if((function (){var or__3824__auto____8518 = (G__8516__8517.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8518)
{return or__3824__auto____8518;
} else
{return G__8516__8517.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8516__8517.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8516__8517);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8516__8517);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8522__8523 = x;
if(G__8522__8523)
{if((function (){var or__3824__auto____8524 = (G__8522__8523.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8524)
{return or__3824__auto____8524;
} else
{return G__8522__8523.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8522__8523.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8522__8523);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8522__8523);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8528__8529 = x;
if(G__8528__8529)
{if((function (){var or__3824__auto____8530 = (G__8528__8529.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8530)
{return or__3824__auto____8530;
} else
{return G__8528__8529.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8528__8529.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8528__8529);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8528__8529);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8534__8535 = x;
if(G__8534__8535)
{if((function (){var or__3824__auto____8536 = (G__8534__8535.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8536)
{return or__3824__auto____8536;
} else
{return G__8534__8535.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8534__8535.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8534__8535);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8534__8535);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8540__8541 = x;
if(G__8540__8541)
{if((function (){var or__3824__auto____8542 = (G__8540__8541.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8542)
{return or__3824__auto____8542;
} else
{return G__8540__8541.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8540__8541.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8540__8541);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8540__8541);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8546__8547 = x;
if(G__8546__8547)
{if((function (){var or__3824__auto____8548 = (G__8546__8547.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8548)
{return or__3824__auto____8548;
} else
{return G__8546__8547.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8546__8547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8546__8547);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8546__8547);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8552__8553 = x;
if(G__8552__8553)
{if((function (){var or__3824__auto____8554 = (G__8552__8553.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8554)
{return or__3824__auto____8554;
} else
{return G__8552__8553.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8552__8553.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8552__8553);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8552__8553);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8558__8559 = x;
if(G__8558__8559)
{if(cljs.core.truth_((function (){var or__3824__auto____8560 = null;
if(cljs.core.truth_(or__3824__auto____8560))
{return or__3824__auto____8560;
} else
{return G__8558__8559.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8558__8559.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8558__8559);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8558__8559);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8561__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8561 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8561__delegate.call(this, keyvals);
};
G__8561.cljs$lang$maxFixedArity = 0;
G__8561.cljs$lang$applyTo = (function (arglist__8562){
var keyvals = cljs.core.seq(arglist__8562);;
return G__8561__delegate(keyvals);
});
G__8561.cljs$lang$arity$variadic = G__8561__delegate;
return G__8561;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8564 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8564.push(key);
}));
return keys__8564;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8568 = i;
var j__8569 = j;
var len__8570 = len;
while(true){
if((len__8570 === 0))
{return to;
} else
{(to[j__8569] = (from[i__8568]));
{
var G__8571 = (i__8568 + 1);
var G__8572 = (j__8569 + 1);
var G__8573 = (len__8570 - 1);
i__8568 = G__8571;
j__8569 = G__8572;
len__8570 = G__8573;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8577 = (i + (len - 1));
var j__8578 = (j + (len - 1));
var len__8579 = len;
while(true){
if((len__8579 === 0))
{return to;
} else
{(to[j__8578] = (from[i__8577]));
{
var G__8580 = (i__8577 - 1);
var G__8581 = (j__8578 - 1);
var G__8582 = (len__8579 - 1);
i__8577 = G__8580;
j__8578 = G__8581;
len__8579 = G__8582;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8586__8587 = s;
if(G__8586__8587)
{if((function (){var or__3824__auto____8588 = (G__8586__8587.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8588)
{return or__3824__auto____8588;
} else
{return G__8586__8587.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8586__8587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8586__8587);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8586__8587);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8592__8593 = s;
if(G__8592__8593)
{if((function (){var or__3824__auto____8594 = (G__8592__8593.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8594)
{return or__3824__auto____8594;
} else
{return G__8592__8593.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8592__8593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8592__8593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8592__8593);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____8597 = goog.isString(x);
if(and__3822__auto____8597)
{return !((function (){var or__3824__auto____8598 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8598)
{return or__3824__auto____8598;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8597;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8600 = goog.isString(x);
if(and__3822__auto____8600)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8600;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8602 = goog.isString(x);
if(and__3822__auto____8602)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8602;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8607 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8607)
{return or__3824__auto____8607;
} else
{var G__8608__8609 = f;
if(G__8608__8609)
{if((function (){var or__3824__auto____8610 = (G__8608__8609.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8610)
{return or__3824__auto____8610;
} else
{return G__8608__8609.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8608__8609.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8608__8609);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8608__8609);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8612 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8612)
{return (n == n.toFixed());
} else
{return and__3822__auto____8612;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8615 = coll;
if(cljs.core.truth_(and__3822__auto____8615))
{var and__3822__auto____8616 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8616)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8616;
}
} else
{return and__3822__auto____8615;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8625__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8621 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8622 = more;
while(true){
var x__8623 = cljs.core.first.call(null,xs__8622);
var etc__8624 = cljs.core.next.call(null,xs__8622);
if(cljs.core.truth_(xs__8622))
{if(cljs.core.contains_QMARK_.call(null,s__8621,x__8623))
{return false;
} else
{{
var G__8626 = cljs.core.conj.call(null,s__8621,x__8623);
var G__8627 = etc__8624;
s__8621 = G__8626;
xs__8622 = G__8627;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8625 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8625__delegate.call(this, x, y, more);
};
G__8625.cljs$lang$maxFixedArity = 2;
G__8625.cljs$lang$applyTo = (function (arglist__8628){
var x = cljs.core.first(arglist__8628);
var y = cljs.core.first(cljs.core.next(arglist__8628));
var more = cljs.core.rest(cljs.core.next(arglist__8628));
return G__8625__delegate(x, y, more);
});
G__8625.cljs$lang$arity$variadic = G__8625__delegate;
return G__8625;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8632__8633 = x;
if(G__8632__8633)
{if(cljs.core.truth_((function (){var or__3824__auto____8634 = null;
if(cljs.core.truth_(or__3824__auto____8634))
{return or__3824__auto____8634;
} else
{return G__8632__8633.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8632__8633.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8632__8633);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8632__8633);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8639 = cljs.core.count.call(null,xs);
var yl__8640 = cljs.core.count.call(null,ys);
if((xl__8639 < yl__8640))
{return -1;
} else
{if((xl__8639 > yl__8640))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8639,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8641 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8642 = (d__8641 === 0);
if(and__3822__auto____8642)
{return ((n + 1) < len);
} else
{return and__3822__auto____8642;
}
})())
{{
var G__8643 = xs;
var G__8644 = ys;
var G__8645 = len;
var G__8646 = (n + 1);
xs = G__8643;
ys = G__8644;
len = G__8645;
n = G__8646;
continue;
}
} else
{return d__8641;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8648 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8648))
{return r__8648;
} else
{if(cljs.core.truth_(r__8648))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8650 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8650,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8650);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____8656 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8656)
{var s__8657 = temp__3971__auto____8656;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8657),cljs.core.next.call(null,s__8657));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8658 = val;
var coll__8659 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8659)
{var nval__8660 = f.call(null,val__8658,cljs.core.first.call(null,coll__8659));
if(cljs.core.reduced_QMARK_.call(null,nval__8660))
{return cljs.core.deref.call(null,nval__8660);
} else
{{
var G__8661 = nval__8660;
var G__8662 = cljs.core.next.call(null,coll__8659);
val__8658 = G__8661;
coll__8659 = G__8662;
continue;
}
}
} else
{return val__8658;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8664 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8664);
return cljs.core.vec.call(null,a__8664);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8671__8672 = coll;
if(G__8671__8672)
{if((function (){var or__3824__auto____8673 = (G__8671__8672.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8673)
{return or__3824__auto____8673;
} else
{return G__8671__8672.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8671__8672.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8671__8672);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8671__8672);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8674__8675 = coll;
if(G__8674__8675)
{if((function (){var or__3824__auto____8676 = (G__8674__8675.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8676)
{return or__3824__auto____8676;
} else
{return G__8674__8675.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8674__8675.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8674__8675);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8674__8675);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8677 = this;
return this__8677.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8678__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8678 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8678__delegate.call(this, x, y, more);
};
G__8678.cljs$lang$maxFixedArity = 2;
G__8678.cljs$lang$applyTo = (function (arglist__8679){
var x = cljs.core.first(arglist__8679);
var y = cljs.core.first(cljs.core.next(arglist__8679));
var more = cljs.core.rest(cljs.core.next(arglist__8679));
return G__8678__delegate(x, y, more);
});
G__8678.cljs$lang$arity$variadic = G__8678__delegate;
return G__8678;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8680__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8680 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8680__delegate.call(this, x, y, more);
};
G__8680.cljs$lang$maxFixedArity = 2;
G__8680.cljs$lang$applyTo = (function (arglist__8681){
var x = cljs.core.first(arglist__8681);
var y = cljs.core.first(cljs.core.next(arglist__8681));
var more = cljs.core.rest(cljs.core.next(arglist__8681));
return G__8680__delegate(x, y, more);
});
G__8680.cljs$lang$arity$variadic = G__8680__delegate;
return G__8680;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8682__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8682 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8682__delegate.call(this, x, y, more);
};
G__8682.cljs$lang$maxFixedArity = 2;
G__8682.cljs$lang$applyTo = (function (arglist__8683){
var x = cljs.core.first(arglist__8683);
var y = cljs.core.first(cljs.core.next(arglist__8683));
var more = cljs.core.rest(cljs.core.next(arglist__8683));
return G__8682__delegate(x, y, more);
});
G__8682.cljs$lang$arity$variadic = G__8682__delegate;
return G__8682;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8684__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8684 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8684__delegate.call(this, x, y, more);
};
G__8684.cljs$lang$maxFixedArity = 2;
G__8684.cljs$lang$applyTo = (function (arglist__8685){
var x = cljs.core.first(arglist__8685);
var y = cljs.core.first(cljs.core.next(arglist__8685));
var more = cljs.core.rest(cljs.core.next(arglist__8685));
return G__8684__delegate(x, y, more);
});
G__8684.cljs$lang$arity$variadic = G__8684__delegate;
return G__8684;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8686__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8687 = y;
var G__8688 = cljs.core.first.call(null,more);
var G__8689 = cljs.core.next.call(null,more);
x = G__8687;
y = G__8688;
more = G__8689;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8686 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8686__delegate.call(this, x, y, more);
};
G__8686.cljs$lang$maxFixedArity = 2;
G__8686.cljs$lang$applyTo = (function (arglist__8690){
var x = cljs.core.first(arglist__8690);
var y = cljs.core.first(cljs.core.next(arglist__8690));
var more = cljs.core.rest(cljs.core.next(arglist__8690));
return G__8686__delegate(x, y, more);
});
G__8686.cljs$lang$arity$variadic = G__8686__delegate;
return G__8686;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8691__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8692 = y;
var G__8693 = cljs.core.first.call(null,more);
var G__8694 = cljs.core.next.call(null,more);
x = G__8692;
y = G__8693;
more = G__8694;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8691__delegate.call(this, x, y, more);
};
G__8691.cljs$lang$maxFixedArity = 2;
G__8691.cljs$lang$applyTo = (function (arglist__8695){
var x = cljs.core.first(arglist__8695);
var y = cljs.core.first(cljs.core.next(arglist__8695));
var more = cljs.core.rest(cljs.core.next(arglist__8695));
return G__8691__delegate(x, y, more);
});
G__8691.cljs$lang$arity$variadic = G__8691__delegate;
return G__8691;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8696__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8697 = y;
var G__8698 = cljs.core.first.call(null,more);
var G__8699 = cljs.core.next.call(null,more);
x = G__8697;
y = G__8698;
more = G__8699;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8696 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8696__delegate.call(this, x, y, more);
};
G__8696.cljs$lang$maxFixedArity = 2;
G__8696.cljs$lang$applyTo = (function (arglist__8700){
var x = cljs.core.first(arglist__8700);
var y = cljs.core.first(cljs.core.next(arglist__8700));
var more = cljs.core.rest(cljs.core.next(arglist__8700));
return G__8696__delegate(x, y, more);
});
G__8696.cljs$lang$arity$variadic = G__8696__delegate;
return G__8696;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8701__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8702 = y;
var G__8703 = cljs.core.first.call(null,more);
var G__8704 = cljs.core.next.call(null,more);
x = G__8702;
y = G__8703;
more = G__8704;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8701 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8701__delegate.call(this, x, y, more);
};
G__8701.cljs$lang$maxFixedArity = 2;
G__8701.cljs$lang$applyTo = (function (arglist__8705){
var x = cljs.core.first(arglist__8705);
var y = cljs.core.first(cljs.core.next(arglist__8705));
var more = cljs.core.rest(cljs.core.next(arglist__8705));
return G__8701__delegate(x, y, more);
});
G__8701.cljs$lang$arity$variadic = G__8701__delegate;
return G__8701;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8706__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8706 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8706__delegate.call(this, x, y, more);
};
G__8706.cljs$lang$maxFixedArity = 2;
G__8706.cljs$lang$applyTo = (function (arglist__8707){
var x = cljs.core.first(arglist__8707);
var y = cljs.core.first(cljs.core.next(arglist__8707));
var more = cljs.core.rest(cljs.core.next(arglist__8707));
return G__8706__delegate(x, y, more);
});
G__8706.cljs$lang$arity$variadic = G__8706__delegate;
return G__8706;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8708__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8708 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8708__delegate.call(this, x, y, more);
};
G__8708.cljs$lang$maxFixedArity = 2;
G__8708.cljs$lang$applyTo = (function (arglist__8709){
var x = cljs.core.first(arglist__8709);
var y = cljs.core.first(cljs.core.next(arglist__8709));
var more = cljs.core.rest(cljs.core.next(arglist__8709));
return G__8708__delegate(x, y, more);
});
G__8708.cljs$lang$arity$variadic = G__8708__delegate;
return G__8708;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8711 = (n % d);
return cljs.core.fix.call(null,((n - rem__8711) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8713 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8713));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8716 = (v - ((v >> 1) & 1431655765));
var v__8717 = ((v__8716 & 858993459) + ((v__8716 >> 2) & 858993459));
return ((((v__8717 + (v__8717 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8718__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8719 = y;
var G__8720 = cljs.core.first.call(null,more);
var G__8721 = cljs.core.next.call(null,more);
x = G__8719;
y = G__8720;
more = G__8721;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8718 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8718__delegate.call(this, x, y, more);
};
G__8718.cljs$lang$maxFixedArity = 2;
G__8718.cljs$lang$applyTo = (function (arglist__8722){
var x = cljs.core.first(arglist__8722);
var y = cljs.core.first(cljs.core.next(arglist__8722));
var more = cljs.core.rest(cljs.core.next(arglist__8722));
return G__8718__delegate(x, y, more);
});
G__8718.cljs$lang$arity$variadic = G__8718__delegate;
return G__8718;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8726 = n;
var xs__8727 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8728 = xs__8727;
if(and__3822__auto____8728)
{return (n__8726 > 0);
} else
{return and__3822__auto____8728;
}
})()))
{{
var G__8729 = (n__8726 - 1);
var G__8730 = cljs.core.next.call(null,xs__8727);
n__8726 = G__8729;
xs__8727 = G__8730;
continue;
}
} else
{return xs__8727;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8731__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8732 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8733 = cljs.core.next.call(null,more);
sb = G__8732;
more = G__8733;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8731 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8731__delegate.call(this, x, ys);
};
G__8731.cljs$lang$maxFixedArity = 1;
G__8731.cljs$lang$applyTo = (function (arglist__8734){
var x = cljs.core.first(arglist__8734);
var ys = cljs.core.rest(arglist__8734);
return G__8731__delegate(x, ys);
});
G__8731.cljs$lang$arity$variadic = G__8731__delegate;
return G__8731;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8735__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8736 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8737 = cljs.core.next.call(null,more);
sb = G__8736;
more = G__8737;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8735 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8735__delegate.call(this, x, ys);
};
G__8735.cljs$lang$maxFixedArity = 1;
G__8735.cljs$lang$applyTo = (function (arglist__8738){
var x = cljs.core.first(arglist__8738);
var ys = cljs.core.rest(arglist__8738);
return G__8735__delegate(x, ys);
});
G__8735.cljs$lang$arity$variadic = G__8735__delegate;
return G__8735;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8739){
var fmt = cljs.core.first(arglist__8739);
var args = cljs.core.rest(arglist__8739);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8742 = cljs.core.seq.call(null,x);
var ys__8743 = cljs.core.seq.call(null,y);
while(true){
if((xs__8742 == null))
{return (ys__8743 == null);
} else
{if((ys__8743 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8742),cljs.core.first.call(null,ys__8743)))
{{
var G__8744 = cljs.core.next.call(null,xs__8742);
var G__8745 = cljs.core.next.call(null,ys__8743);
xs__8742 = G__8744;
ys__8743 = G__8745;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8746_SHARP_,p2__8747_SHARP_){
return cljs.core.hash_combine.call(null,p1__8746_SHARP_,cljs.core.hash.call(null,p2__8747_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8751 = 0;
var s__8752 = cljs.core.seq.call(null,m);
while(true){
if(s__8752)
{var e__8753 = cljs.core.first.call(null,s__8752);
{
var G__8754 = ((h__8751 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8753)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8753)))) % 4503599627370496);
var G__8755 = cljs.core.next.call(null,s__8752);
h__8751 = G__8754;
s__8752 = G__8755;
continue;
}
} else
{return h__8751;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8759 = 0;
var s__8760 = cljs.core.seq.call(null,s);
while(true){
if(s__8760)
{var e__8761 = cljs.core.first.call(null,s__8760);
{
var G__8762 = ((h__8759 + cljs.core.hash.call(null,e__8761)) % 4503599627370496);
var G__8763 = cljs.core.next.call(null,s__8760);
h__8759 = G__8762;
s__8760 = G__8763;
continue;
}
} else
{return h__8759;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8784__8785 = cljs.core.seq.call(null,fn_map);
if(G__8784__8785)
{var G__8787__8789 = cljs.core.first.call(null,G__8784__8785);
var vec__8788__8790 = G__8787__8789;
var key_name__8791 = cljs.core.nth.call(null,vec__8788__8790,0,null);
var f__8792 = cljs.core.nth.call(null,vec__8788__8790,1,null);
var G__8784__8793 = G__8784__8785;
var G__8787__8794 = G__8787__8789;
var G__8784__8795 = G__8784__8793;
while(true){
var vec__8796__8797 = G__8787__8794;
var key_name__8798 = cljs.core.nth.call(null,vec__8796__8797,0,null);
var f__8799 = cljs.core.nth.call(null,vec__8796__8797,1,null);
var G__8784__8800 = G__8784__8795;
var str_name__8801 = cljs.core.name.call(null,key_name__8798);
(obj[str_name__8801] = f__8799);
var temp__3974__auto____8802 = cljs.core.next.call(null,G__8784__8800);
if(temp__3974__auto____8802)
{var G__8784__8803 = temp__3974__auto____8802;
{
var G__8804 = cljs.core.first.call(null,G__8784__8803);
var G__8805 = G__8784__8803;
G__8787__8794 = G__8804;
G__8784__8795 = G__8805;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8806 = this;
var h__2218__auto____8807 = this__8806.__hash;
if(!((h__2218__auto____8807 == null)))
{return h__2218__auto____8807;
} else
{var h__2218__auto____8808 = cljs.core.hash_coll.call(null,coll);
this__8806.__hash = h__2218__auto____8808;
return h__2218__auto____8808;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8809 = this;
if((this__8809.count === 1))
{return null;
} else
{return this__8809.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8810 = this;
return (new cljs.core.List(this__8810.meta,o,coll,(this__8810.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8811 = this;
var this__8812 = this;
return cljs.core.pr_str.call(null,this__8812);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8813 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8814 = this;
return this__8814.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8815 = this;
return this__8815.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8816 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8817 = this;
return this__8817.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8818 = this;
if((this__8818.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8818.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8820 = this;
return (new cljs.core.List(meta,this__8820.first,this__8820.rest,this__8820.count,this__8820.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8821 = this;
return this__8821.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8822 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8823 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8824 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8825 = this;
return (new cljs.core.List(this__8825.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8826 = this;
var this__8827 = this;
return cljs.core.pr_str.call(null,this__8827);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8828 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8829 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8830 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8831 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8832 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8833 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8834 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8835 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8836 = this;
return this__8836.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8837 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8841__8842 = coll;
if(G__8841__8842)
{if((function (){var or__3824__auto____8843 = (G__8841__8842.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8843)
{return or__3824__auto____8843;
} else
{return G__8841__8842.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8841__8842.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8841__8842);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8841__8842);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__8844__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8844 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8844__delegate.call(this, x, y, z, items);
};
G__8844.cljs$lang$maxFixedArity = 3;
G__8844.cljs$lang$applyTo = (function (arglist__8845){
var x = cljs.core.first(arglist__8845);
var y = cljs.core.first(cljs.core.next(arglist__8845));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8845)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8845)));
return G__8844__delegate(x, y, z, items);
});
G__8844.cljs$lang$arity$variadic = G__8844__delegate;
return G__8844;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8846 = this;
var h__2218__auto____8847 = this__8846.__hash;
if(!((h__2218__auto____8847 == null)))
{return h__2218__auto____8847;
} else
{var h__2218__auto____8848 = cljs.core.hash_coll.call(null,coll);
this__8846.__hash = h__2218__auto____8848;
return h__2218__auto____8848;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8849 = this;
if((this__8849.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8849.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8850 = this;
return (new cljs.core.Cons(null,o,coll,this__8850.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8851 = this;
var this__8852 = this;
return cljs.core.pr_str.call(null,this__8852);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8853 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8854 = this;
return this__8854.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8855 = this;
if((this__8855.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8855.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8856 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8857 = this;
return (new cljs.core.Cons(meta,this__8857.first,this__8857.rest,this__8857.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8858 = this;
return this__8858.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8859 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8859.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8864 = (coll == null);
if(or__3824__auto____8864)
{return or__3824__auto____8864;
} else
{var G__8865__8866 = coll;
if(G__8865__8866)
{if((function (){var or__3824__auto____8867 = (G__8865__8866.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8867)
{return or__3824__auto____8867;
} else
{return G__8865__8866.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8865__8866.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8865__8866);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8865__8866);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8871__8872 = x;
if(G__8871__8872)
{if((function (){var or__3824__auto____8873 = (G__8871__8872.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8873)
{return or__3824__auto____8873;
} else
{return G__8871__8872.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8871__8872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8871__8872);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8871__8872);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8874 = null;
var G__8874__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8874__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8874 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8874__2.call(this,string,f);
case 3:
return G__8874__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8874;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8875 = null;
var G__8875__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8875__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8875 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8875__2.call(this,string,k);
case 3:
return G__8875__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8875;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8876 = null;
var G__8876__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8876__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8876 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8876__2.call(this,string,n);
case 3:
return G__8876__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8876;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8888 = null;
var G__8888__2 = (function (this_sym8879,coll){
var this__8881 = this;
var this_sym8879__8882 = this;
var ___8883 = this_sym8879__8882;
if((coll == null))
{return null;
} else
{var strobj__8884 = coll.strobj;
if((strobj__8884 == null))
{return cljs.core._lookup.call(null,coll,this__8881.k,null);
} else
{return (strobj__8884[this__8881.k]);
}
}
});
var G__8888__3 = (function (this_sym8880,coll,not_found){
var this__8881 = this;
var this_sym8880__8885 = this;
var ___8886 = this_sym8880__8885;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8881.k,not_found);
}
});
G__8888 = function(this_sym8880,coll,not_found){
switch(arguments.length){
case 2:
return G__8888__2.call(this,this_sym8880,coll);
case 3:
return G__8888__3.call(this,this_sym8880,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8888;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8877,args8878){
var this__8887 = this;
return this_sym8877.call.apply(this_sym8877,[this_sym8877].concat(args8878.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8897 = null;
var G__8897__2 = (function (this_sym8891,coll){
var this_sym8891__8893 = this;
var this__8894 = this_sym8891__8893;
return cljs.core._lookup.call(null,coll,this__8894.toString(),null);
});
var G__8897__3 = (function (this_sym8892,coll,not_found){
var this_sym8892__8895 = this;
var this__8896 = this_sym8892__8895;
return cljs.core._lookup.call(null,coll,this__8896.toString(),not_found);
});
G__8897 = function(this_sym8892,coll,not_found){
switch(arguments.length){
case 2:
return G__8897__2.call(this,this_sym8892,coll);
case 3:
return G__8897__3.call(this,this_sym8892,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8897;
})()
;
String.prototype.apply = (function (this_sym8889,args8890){
return this_sym8889.call.apply(this_sym8889,[this_sym8889].concat(args8890.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8899 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8899;
} else
{lazy_seq.x = x__8899.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8900 = this;
var h__2218__auto____8901 = this__8900.__hash;
if(!((h__2218__auto____8901 == null)))
{return h__2218__auto____8901;
} else
{var h__2218__auto____8902 = cljs.core.hash_coll.call(null,coll);
this__8900.__hash = h__2218__auto____8902;
return h__2218__auto____8902;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8903 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8904 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8905 = this;
var this__8906 = this;
return cljs.core.pr_str.call(null,this__8906);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8907 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8908 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8909 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8910 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8911 = this;
return (new cljs.core.LazySeq(meta,this__8911.realized,this__8911.x,this__8911.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8912 = this;
return this__8912.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8913 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8913.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8914 = this;
return this__8914.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8915 = this;
var ___8916 = this;
(this__8915.buf[this__8915.end] = o);
return this__8915.end = (this__8915.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8917 = this;
var ___8918 = this;
var ret__8919 = (new cljs.core.ArrayChunk(this__8917.buf,0,this__8917.end));
this__8917.buf = null;
return ret__8919;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8920 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8920.arr[this__8920.off]),(this__8920.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8921 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8921.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8922 = this;
if((this__8922.off === this__8922.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8922.arr,(this__8922.off + 1),this__8922.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8923 = this;
return (this__8923.arr[(this__8923.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8924 = this;
if((function (){var and__3822__auto____8925 = (i >= 0);
if(and__3822__auto____8925)
{return (i < (this__8924.end - this__8924.off));
} else
{return and__3822__auto____8925;
}
})())
{return (this__8924.arr[(this__8924.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8926 = this;
return (this__8926.end - this__8926.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8927 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8928 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8929 = this;
return cljs.core._nth.call(null,this__8929.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8930 = this;
if((cljs.core._count.call(null,this__8930.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8930.chunk),this__8930.more,this__8930.meta));
} else
{if((this__8930.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8930.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8931 = this;
if((this__8931.more == null))
{return null;
} else
{return this__8931.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8932 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8933 = this;
return (new cljs.core.ChunkedCons(this__8933.chunk,this__8933.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8934 = this;
return this__8934.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8935 = this;
return this__8935.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8936 = this;
if((this__8936.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8936.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8940__8941 = s;
if(G__8940__8941)
{if(cljs.core.truth_((function (){var or__3824__auto____8942 = null;
if(cljs.core.truth_(or__3824__auto____8942))
{return or__3824__auto____8942;
} else
{return G__8940__8941.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8940__8941.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8940__8941);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8940__8941);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8945 = [];
var s__8946 = s;
while(true){
if(cljs.core.seq.call(null,s__8946))
{ary__8945.push(cljs.core.first.call(null,s__8946));
{
var G__8947 = cljs.core.next.call(null,s__8946);
s__8946 = G__8947;
continue;
}
} else
{return ary__8945;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8951 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8952 = 0;
var xs__8953 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8953)
{(ret__8951[i__8952] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8953)));
{
var G__8954 = (i__8952 + 1);
var G__8955 = cljs.core.next.call(null,xs__8953);
i__8952 = G__8954;
xs__8953 = G__8955;
continue;
}
} else
{}
break;
}
return ret__8951;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8963 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8964 = cljs.core.seq.call(null,init_val_or_seq);
var i__8965 = 0;
var s__8966 = s__8964;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8967 = s__8966;
if(and__3822__auto____8967)
{return (i__8965 < size);
} else
{return and__3822__auto____8967;
}
})()))
{(a__8963[i__8965] = cljs.core.first.call(null,s__8966));
{
var G__8970 = (i__8965 + 1);
var G__8971 = cljs.core.next.call(null,s__8966);
i__8965 = G__8970;
s__8966 = G__8971;
continue;
}
} else
{return a__8963;
}
break;
}
} else
{var n__2553__auto____8968 = size;
var i__8969 = 0;
while(true){
if((i__8969 < n__2553__auto____8968))
{(a__8963[i__8969] = init_val_or_seq);
{
var G__8972 = (i__8969 + 1);
i__8969 = G__8972;
continue;
}
} else
{}
break;
}
return a__8963;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8980 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8981 = cljs.core.seq.call(null,init_val_or_seq);
var i__8982 = 0;
var s__8983 = s__8981;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8984 = s__8983;
if(and__3822__auto____8984)
{return (i__8982 < size);
} else
{return and__3822__auto____8984;
}
})()))
{(a__8980[i__8982] = cljs.core.first.call(null,s__8983));
{
var G__8987 = (i__8982 + 1);
var G__8988 = cljs.core.next.call(null,s__8983);
i__8982 = G__8987;
s__8983 = G__8988;
continue;
}
} else
{return a__8980;
}
break;
}
} else
{var n__2553__auto____8985 = size;
var i__8986 = 0;
while(true){
if((i__8986 < n__2553__auto____8985))
{(a__8980[i__8986] = init_val_or_seq);
{
var G__8989 = (i__8986 + 1);
i__8986 = G__8989;
continue;
}
} else
{}
break;
}
return a__8980;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8997 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8998 = cljs.core.seq.call(null,init_val_or_seq);
var i__8999 = 0;
var s__9000 = s__8998;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9001 = s__9000;
if(and__3822__auto____9001)
{return (i__8999 < size);
} else
{return and__3822__auto____9001;
}
})()))
{(a__8997[i__8999] = cljs.core.first.call(null,s__9000));
{
var G__9004 = (i__8999 + 1);
var G__9005 = cljs.core.next.call(null,s__9000);
i__8999 = G__9004;
s__9000 = G__9005;
continue;
}
} else
{return a__8997;
}
break;
}
} else
{var n__2553__auto____9002 = size;
var i__9003 = 0;
while(true){
if((i__9003 < n__2553__auto____9002))
{(a__8997[i__9003] = init_val_or_seq);
{
var G__9006 = (i__9003 + 1);
i__9003 = G__9006;
continue;
}
} else
{}
break;
}
return a__8997;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__9011 = s;
var i__9012 = n;
var sum__9013 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9014 = (i__9012 > 0);
if(and__3822__auto____9014)
{return cljs.core.seq.call(null,s__9011);
} else
{return and__3822__auto____9014;
}
})()))
{{
var G__9015 = cljs.core.next.call(null,s__9011);
var G__9016 = (i__9012 - 1);
var G__9017 = (sum__9013 + 1);
s__9011 = G__9015;
i__9012 = G__9016;
sum__9013 = G__9017;
continue;
}
} else
{return sum__9013;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9022 = cljs.core.seq.call(null,x);
if(s__9022)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9022))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9022),concat.call(null,cljs.core.chunk_rest.call(null,s__9022),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9022),concat.call(null,cljs.core.rest.call(null,s__9022),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9026__delegate = function (x,y,zs){
var cat__9025 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9024 = cljs.core.seq.call(null,xys);
if(xys__9024)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9024))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9024),cat.call(null,cljs.core.chunk_rest.call(null,xys__9024),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9024),cat.call(null,cljs.core.rest.call(null,xys__9024),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__9025.call(null,concat.call(null,x,y),zs);
};
var G__9026 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9026__delegate.call(this, x, y, zs);
};
G__9026.cljs$lang$maxFixedArity = 2;
G__9026.cljs$lang$applyTo = (function (arglist__9027){
var x = cljs.core.first(arglist__9027);
var y = cljs.core.first(cljs.core.next(arglist__9027));
var zs = cljs.core.rest(cljs.core.next(arglist__9027));
return G__9026__delegate(x, y, zs);
});
G__9026.cljs$lang$arity$variadic = G__9026__delegate;
return G__9026;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__9028__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9028 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9028__delegate.call(this, a, b, c, d, more);
};
G__9028.cljs$lang$maxFixedArity = 4;
G__9028.cljs$lang$applyTo = (function (arglist__9029){
var a = cljs.core.first(arglist__9029);
var b = cljs.core.first(cljs.core.next(arglist__9029));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9029)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9029))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9029))));
return G__9028__delegate(a, b, c, d, more);
});
G__9028.cljs$lang$arity$variadic = G__9028__delegate;
return G__9028;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__9071 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9072 = cljs.core._first.call(null,args__9071);
var args__9073 = cljs.core._rest.call(null,args__9071);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9072);
} else
{return f.call(null,a__9072);
}
} else
{var b__9074 = cljs.core._first.call(null,args__9073);
var args__9075 = cljs.core._rest.call(null,args__9073);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9072,b__9074);
} else
{return f.call(null,a__9072,b__9074);
}
} else
{var c__9076 = cljs.core._first.call(null,args__9075);
var args__9077 = cljs.core._rest.call(null,args__9075);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9072,b__9074,c__9076);
} else
{return f.call(null,a__9072,b__9074,c__9076);
}
} else
{var d__9078 = cljs.core._first.call(null,args__9077);
var args__9079 = cljs.core._rest.call(null,args__9077);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9072,b__9074,c__9076,d__9078);
} else
{return f.call(null,a__9072,b__9074,c__9076,d__9078);
}
} else
{var e__9080 = cljs.core._first.call(null,args__9079);
var args__9081 = cljs.core._rest.call(null,args__9079);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9072,b__9074,c__9076,d__9078,e__9080);
} else
{return f.call(null,a__9072,b__9074,c__9076,d__9078,e__9080);
}
} else
{var f__9082 = cljs.core._first.call(null,args__9081);
var args__9083 = cljs.core._rest.call(null,args__9081);
if((argc === 6))
{if(f__9082.cljs$lang$arity$6)
{return f__9082.cljs$lang$arity$6(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082);
}
} else
{var g__9084 = cljs.core._first.call(null,args__9083);
var args__9085 = cljs.core._rest.call(null,args__9083);
if((argc === 7))
{if(f__9082.cljs$lang$arity$7)
{return f__9082.cljs$lang$arity$7(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084);
}
} else
{var h__9086 = cljs.core._first.call(null,args__9085);
var args__9087 = cljs.core._rest.call(null,args__9085);
if((argc === 8))
{if(f__9082.cljs$lang$arity$8)
{return f__9082.cljs$lang$arity$8(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086);
}
} else
{var i__9088 = cljs.core._first.call(null,args__9087);
var args__9089 = cljs.core._rest.call(null,args__9087);
if((argc === 9))
{if(f__9082.cljs$lang$arity$9)
{return f__9082.cljs$lang$arity$9(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088);
}
} else
{var j__9090 = cljs.core._first.call(null,args__9089);
var args__9091 = cljs.core._rest.call(null,args__9089);
if((argc === 10))
{if(f__9082.cljs$lang$arity$10)
{return f__9082.cljs$lang$arity$10(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090);
}
} else
{var k__9092 = cljs.core._first.call(null,args__9091);
var args__9093 = cljs.core._rest.call(null,args__9091);
if((argc === 11))
{if(f__9082.cljs$lang$arity$11)
{return f__9082.cljs$lang$arity$11(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092);
}
} else
{var l__9094 = cljs.core._first.call(null,args__9093);
var args__9095 = cljs.core._rest.call(null,args__9093);
if((argc === 12))
{if(f__9082.cljs$lang$arity$12)
{return f__9082.cljs$lang$arity$12(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094);
}
} else
{var m__9096 = cljs.core._first.call(null,args__9095);
var args__9097 = cljs.core._rest.call(null,args__9095);
if((argc === 13))
{if(f__9082.cljs$lang$arity$13)
{return f__9082.cljs$lang$arity$13(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096);
}
} else
{var n__9098 = cljs.core._first.call(null,args__9097);
var args__9099 = cljs.core._rest.call(null,args__9097);
if((argc === 14))
{if(f__9082.cljs$lang$arity$14)
{return f__9082.cljs$lang$arity$14(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098);
}
} else
{var o__9100 = cljs.core._first.call(null,args__9099);
var args__9101 = cljs.core._rest.call(null,args__9099);
if((argc === 15))
{if(f__9082.cljs$lang$arity$15)
{return f__9082.cljs$lang$arity$15(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100);
}
} else
{var p__9102 = cljs.core._first.call(null,args__9101);
var args__9103 = cljs.core._rest.call(null,args__9101);
if((argc === 16))
{if(f__9082.cljs$lang$arity$16)
{return f__9082.cljs$lang$arity$16(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102);
}
} else
{var q__9104 = cljs.core._first.call(null,args__9103);
var args__9105 = cljs.core._rest.call(null,args__9103);
if((argc === 17))
{if(f__9082.cljs$lang$arity$17)
{return f__9082.cljs$lang$arity$17(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104);
}
} else
{var r__9106 = cljs.core._first.call(null,args__9105);
var args__9107 = cljs.core._rest.call(null,args__9105);
if((argc === 18))
{if(f__9082.cljs$lang$arity$18)
{return f__9082.cljs$lang$arity$18(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106);
}
} else
{var s__9108 = cljs.core._first.call(null,args__9107);
var args__9109 = cljs.core._rest.call(null,args__9107);
if((argc === 19))
{if(f__9082.cljs$lang$arity$19)
{return f__9082.cljs$lang$arity$19(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106,s__9108);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106,s__9108);
}
} else
{var t__9110 = cljs.core._first.call(null,args__9109);
var args__9111 = cljs.core._rest.call(null,args__9109);
if((argc === 20))
{if(f__9082.cljs$lang$arity$20)
{return f__9082.cljs$lang$arity$20(a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106,s__9108,t__9110);
} else
{return f__9082.call(null,a__9072,b__9074,c__9076,d__9078,e__9080,f__9082,g__9084,h__9086,i__9088,j__9090,k__9092,l__9094,m__9096,n__9098,o__9100,p__9102,q__9104,r__9106,s__9108,t__9110);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__9126 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9127 = cljs.core.bounded_count.call(null,args,(fixed_arity__9126 + 1));
if((bc__9127 <= fixed_arity__9126))
{return cljs.core.apply_to.call(null,f,bc__9127,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9128 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9129 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9130 = cljs.core.bounded_count.call(null,arglist__9128,(fixed_arity__9129 + 1));
if((bc__9130 <= fixed_arity__9129))
{return cljs.core.apply_to.call(null,f,bc__9130,arglist__9128);
} else
{return f.cljs$lang$applyTo(arglist__9128);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9128));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9131 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9132 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9133 = cljs.core.bounded_count.call(null,arglist__9131,(fixed_arity__9132 + 1));
if((bc__9133 <= fixed_arity__9132))
{return cljs.core.apply_to.call(null,f,bc__9133,arglist__9131);
} else
{return f.cljs$lang$applyTo(arglist__9131);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9131));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9134 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9135 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9136 = cljs.core.bounded_count.call(null,arglist__9134,(fixed_arity__9135 + 1));
if((bc__9136 <= fixed_arity__9135))
{return cljs.core.apply_to.call(null,f,bc__9136,arglist__9134);
} else
{return f.cljs$lang$applyTo(arglist__9134);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9134));
}
});
var apply__6 = (function() { 
var G__9140__delegate = function (f,a,b,c,d,args){
var arglist__9137 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9138 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9139 = cljs.core.bounded_count.call(null,arglist__9137,(fixed_arity__9138 + 1));
if((bc__9139 <= fixed_arity__9138))
{return cljs.core.apply_to.call(null,f,bc__9139,arglist__9137);
} else
{return f.cljs$lang$applyTo(arglist__9137);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9137));
}
};
var G__9140 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9140__delegate.call(this, f, a, b, c, d, args);
};
G__9140.cljs$lang$maxFixedArity = 5;
G__9140.cljs$lang$applyTo = (function (arglist__9141){
var f = cljs.core.first(arglist__9141);
var a = cljs.core.first(cljs.core.next(arglist__9141));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9141)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9141))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9141)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9141)))));
return G__9140__delegate(f, a, b, c, d, args);
});
G__9140.cljs$lang$arity$variadic = G__9140__delegate;
return G__9140;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__9142){
var obj = cljs.core.first(arglist__9142);
var f = cljs.core.first(cljs.core.next(arglist__9142));
var args = cljs.core.rest(cljs.core.next(arglist__9142));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__9143__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9143__delegate.call(this, x, y, more);
};
G__9143.cljs$lang$maxFixedArity = 2;
G__9143.cljs$lang$applyTo = (function (arglist__9144){
var x = cljs.core.first(arglist__9144);
var y = cljs.core.first(cljs.core.next(arglist__9144));
var more = cljs.core.rest(cljs.core.next(arglist__9144));
return G__9143__delegate(x, y, more);
});
G__9143.cljs$lang$arity$variadic = G__9143__delegate;
return G__9143;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__9145 = pred;
var G__9146 = cljs.core.next.call(null,coll);
pred = G__9145;
coll = G__9146;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____9148 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9148))
{return or__3824__auto____9148;
} else
{{
var G__9149 = pred;
var G__9150 = cljs.core.next.call(null,coll);
pred = G__9149;
coll = G__9150;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__9151 = null;
var G__9151__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9151__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9151__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9151__3 = (function() { 
var G__9152__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9152 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9152__delegate.call(this, x, y, zs);
};
G__9152.cljs$lang$maxFixedArity = 2;
G__9152.cljs$lang$applyTo = (function (arglist__9153){
var x = cljs.core.first(arglist__9153);
var y = cljs.core.first(cljs.core.next(arglist__9153));
var zs = cljs.core.rest(cljs.core.next(arglist__9153));
return G__9152__delegate(x, y, zs);
});
G__9152.cljs$lang$arity$variadic = G__9152__delegate;
return G__9152;
})()
;
G__9151 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9151__0.call(this);
case 1:
return G__9151__1.call(this,x);
case 2:
return G__9151__2.call(this,x,y);
default:
return G__9151__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9151.cljs$lang$maxFixedArity = 2;
G__9151.cljs$lang$applyTo = G__9151__3.cljs$lang$applyTo;
return G__9151;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9154__delegate = function (args){
return x;
};
var G__9154 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9154__delegate.call(this, args);
};
G__9154.cljs$lang$maxFixedArity = 0;
G__9154.cljs$lang$applyTo = (function (arglist__9155){
var args = cljs.core.seq(arglist__9155);;
return G__9154__delegate(args);
});
G__9154.cljs$lang$arity$variadic = G__9154__delegate;
return G__9154;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__9162 = null;
var G__9162__0 = (function (){
return f.call(null,g.call(null));
});
var G__9162__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9162__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9162__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9162__4 = (function() { 
var G__9163__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9163__delegate.call(this, x, y, z, args);
};
G__9163.cljs$lang$maxFixedArity = 3;
G__9163.cljs$lang$applyTo = (function (arglist__9164){
var x = cljs.core.first(arglist__9164);
var y = cljs.core.first(cljs.core.next(arglist__9164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9164)));
return G__9163__delegate(x, y, z, args);
});
G__9163.cljs$lang$arity$variadic = G__9163__delegate;
return G__9163;
})()
;
G__9162 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9162__0.call(this);
case 1:
return G__9162__1.call(this,x);
case 2:
return G__9162__2.call(this,x,y);
case 3:
return G__9162__3.call(this,x,y,z);
default:
return G__9162__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9162.cljs$lang$maxFixedArity = 3;
G__9162.cljs$lang$applyTo = G__9162__4.cljs$lang$applyTo;
return G__9162;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9165 = null;
var G__9165__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9165__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9165__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9165__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9165__4 = (function() { 
var G__9166__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9166 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9166__delegate.call(this, x, y, z, args);
};
G__9166.cljs$lang$maxFixedArity = 3;
G__9166.cljs$lang$applyTo = (function (arglist__9167){
var x = cljs.core.first(arglist__9167);
var y = cljs.core.first(cljs.core.next(arglist__9167));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9167)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9167)));
return G__9166__delegate(x, y, z, args);
});
G__9166.cljs$lang$arity$variadic = G__9166__delegate;
return G__9166;
})()
;
G__9165 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9165__0.call(this);
case 1:
return G__9165__1.call(this,x);
case 2:
return G__9165__2.call(this,x,y);
case 3:
return G__9165__3.call(this,x,y,z);
default:
return G__9165__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9165.cljs$lang$maxFixedArity = 3;
G__9165.cljs$lang$applyTo = G__9165__4.cljs$lang$applyTo;
return G__9165;
})()
});
var comp__4 = (function() { 
var G__9168__delegate = function (f1,f2,f3,fs){
var fs__9159 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9169__delegate = function (args){
var ret__9160 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9159),args);
var fs__9161 = cljs.core.next.call(null,fs__9159);
while(true){
if(fs__9161)
{{
var G__9170 = cljs.core.first.call(null,fs__9161).call(null,ret__9160);
var G__9171 = cljs.core.next.call(null,fs__9161);
ret__9160 = G__9170;
fs__9161 = G__9171;
continue;
}
} else
{return ret__9160;
}
break;
}
};
var G__9169 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9169__delegate.call(this, args);
};
G__9169.cljs$lang$maxFixedArity = 0;
G__9169.cljs$lang$applyTo = (function (arglist__9172){
var args = cljs.core.seq(arglist__9172);;
return G__9169__delegate(args);
});
G__9169.cljs$lang$arity$variadic = G__9169__delegate;
return G__9169;
})()
;
};
var G__9168 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9168__delegate.call(this, f1, f2, f3, fs);
};
G__9168.cljs$lang$maxFixedArity = 3;
G__9168.cljs$lang$applyTo = (function (arglist__9173){
var f1 = cljs.core.first(arglist__9173);
var f2 = cljs.core.first(cljs.core.next(arglist__9173));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9173)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9173)));
return G__9168__delegate(f1, f2, f3, fs);
});
G__9168.cljs$lang$arity$variadic = G__9168__delegate;
return G__9168;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__9174__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9174 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9174__delegate.call(this, args);
};
G__9174.cljs$lang$maxFixedArity = 0;
G__9174.cljs$lang$applyTo = (function (arglist__9175){
var args = cljs.core.seq(arglist__9175);;
return G__9174__delegate(args);
});
G__9174.cljs$lang$arity$variadic = G__9174__delegate;
return G__9174;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9176__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9176 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9176__delegate.call(this, args);
};
G__9176.cljs$lang$maxFixedArity = 0;
G__9176.cljs$lang$applyTo = (function (arglist__9177){
var args = cljs.core.seq(arglist__9177);;
return G__9176__delegate(args);
});
G__9176.cljs$lang$arity$variadic = G__9176__delegate;
return G__9176;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9178__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9178 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9178__delegate.call(this, args);
};
G__9178.cljs$lang$maxFixedArity = 0;
G__9178.cljs$lang$applyTo = (function (arglist__9179){
var args = cljs.core.seq(arglist__9179);;
return G__9178__delegate(args);
});
G__9178.cljs$lang$arity$variadic = G__9178__delegate;
return G__9178;
})()
;
});
var partial__5 = (function() { 
var G__9180__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9181__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9181 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9181__delegate.call(this, args);
};
G__9181.cljs$lang$maxFixedArity = 0;
G__9181.cljs$lang$applyTo = (function (arglist__9182){
var args = cljs.core.seq(arglist__9182);;
return G__9181__delegate(args);
});
G__9181.cljs$lang$arity$variadic = G__9181__delegate;
return G__9181;
})()
;
};
var G__9180 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9180__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9180.cljs$lang$maxFixedArity = 4;
G__9180.cljs$lang$applyTo = (function (arglist__9183){
var f = cljs.core.first(arglist__9183);
var arg1 = cljs.core.first(cljs.core.next(arglist__9183));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9183)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9183))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9183))));
return G__9180__delegate(f, arg1, arg2, arg3, more);
});
G__9180.cljs$lang$arity$variadic = G__9180__delegate;
return G__9180;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__9184 = null;
var G__9184__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9184__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9184__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9184__4 = (function() { 
var G__9185__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9185 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9185__delegate.call(this, a, b, c, ds);
};
G__9185.cljs$lang$maxFixedArity = 3;
G__9185.cljs$lang$applyTo = (function (arglist__9186){
var a = cljs.core.first(arglist__9186);
var b = cljs.core.first(cljs.core.next(arglist__9186));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9186)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9186)));
return G__9185__delegate(a, b, c, ds);
});
G__9185.cljs$lang$arity$variadic = G__9185__delegate;
return G__9185;
})()
;
G__9184 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9184__1.call(this,a);
case 2:
return G__9184__2.call(this,a,b);
case 3:
return G__9184__3.call(this,a,b,c);
default:
return G__9184__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9184.cljs$lang$maxFixedArity = 3;
G__9184.cljs$lang$applyTo = G__9184__4.cljs$lang$applyTo;
return G__9184;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9187 = null;
var G__9187__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9187__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9187__4 = (function() { 
var G__9188__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9188 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9188__delegate.call(this, a, b, c, ds);
};
G__9188.cljs$lang$maxFixedArity = 3;
G__9188.cljs$lang$applyTo = (function (arglist__9189){
var a = cljs.core.first(arglist__9189);
var b = cljs.core.first(cljs.core.next(arglist__9189));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9189)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9189)));
return G__9188__delegate(a, b, c, ds);
});
G__9188.cljs$lang$arity$variadic = G__9188__delegate;
return G__9188;
})()
;
G__9187 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9187__2.call(this,a,b);
case 3:
return G__9187__3.call(this,a,b,c);
default:
return G__9187__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9187.cljs$lang$maxFixedArity = 3;
G__9187.cljs$lang$applyTo = G__9187__4.cljs$lang$applyTo;
return G__9187;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9190 = null;
var G__9190__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9190__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9190__4 = (function() { 
var G__9191__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9191 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9191__delegate.call(this, a, b, c, ds);
};
G__9191.cljs$lang$maxFixedArity = 3;
G__9191.cljs$lang$applyTo = (function (arglist__9192){
var a = cljs.core.first(arglist__9192);
var b = cljs.core.first(cljs.core.next(arglist__9192));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9192)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9192)));
return G__9191__delegate(a, b, c, ds);
});
G__9191.cljs$lang$arity$variadic = G__9191__delegate;
return G__9191;
})()
;
G__9190 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9190__2.call(this,a,b);
case 3:
return G__9190__3.call(this,a,b,c);
default:
return G__9190__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9190.cljs$lang$maxFixedArity = 3;
G__9190.cljs$lang$applyTo = G__9190__4.cljs$lang$applyTo;
return G__9190;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__9208 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9216 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9216)
{var s__9217 = temp__3974__auto____9216;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9217))
{var c__9218 = cljs.core.chunk_first.call(null,s__9217);
var size__9219 = cljs.core.count.call(null,c__9218);
var b__9220 = cljs.core.chunk_buffer.call(null,size__9219);
var n__2553__auto____9221 = size__9219;
var i__9222 = 0;
while(true){
if((i__9222 < n__2553__auto____9221))
{cljs.core.chunk_append.call(null,b__9220,f.call(null,(idx + i__9222),cljs.core._nth.call(null,c__9218,i__9222)));
{
var G__9223 = (i__9222 + 1);
i__9222 = G__9223;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9220),mapi.call(null,(idx + size__9219),cljs.core.chunk_rest.call(null,s__9217)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9217)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9217)));
}
} else
{return null;
}
}),null));
});
return mapi__9208.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9233 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9233)
{var s__9234 = temp__3974__auto____9233;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9234))
{var c__9235 = cljs.core.chunk_first.call(null,s__9234);
var size__9236 = cljs.core.count.call(null,c__9235);
var b__9237 = cljs.core.chunk_buffer.call(null,size__9236);
var n__2553__auto____9238 = size__9236;
var i__9239 = 0;
while(true){
if((i__9239 < n__2553__auto____9238))
{var x__9240 = f.call(null,cljs.core._nth.call(null,c__9235,i__9239));
if((x__9240 == null))
{} else
{cljs.core.chunk_append.call(null,b__9237,x__9240);
}
{
var G__9242 = (i__9239 + 1);
i__9239 = G__9242;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9237),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9234)));
} else
{var x__9241 = f.call(null,cljs.core.first.call(null,s__9234));
if((x__9241 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9234));
} else
{return cljs.core.cons.call(null,x__9241,keep.call(null,f,cljs.core.rest.call(null,s__9234)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__9268 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9278 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9278)
{var s__9279 = temp__3974__auto____9278;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9279))
{var c__9280 = cljs.core.chunk_first.call(null,s__9279);
var size__9281 = cljs.core.count.call(null,c__9280);
var b__9282 = cljs.core.chunk_buffer.call(null,size__9281);
var n__2553__auto____9283 = size__9281;
var i__9284 = 0;
while(true){
if((i__9284 < n__2553__auto____9283))
{var x__9285 = f.call(null,(idx + i__9284),cljs.core._nth.call(null,c__9280,i__9284));
if((x__9285 == null))
{} else
{cljs.core.chunk_append.call(null,b__9282,x__9285);
}
{
var G__9287 = (i__9284 + 1);
i__9284 = G__9287;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9282),keepi.call(null,(idx + size__9281),cljs.core.chunk_rest.call(null,s__9279)));
} else
{var x__9286 = f.call(null,idx,cljs.core.first.call(null,s__9279));
if((x__9286 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9279));
} else
{return cljs.core.cons.call(null,x__9286,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9279)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9268.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9373 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9373))
{return p.call(null,y);
} else
{return and__3822__auto____9373;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9374 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9374))
{var and__3822__auto____9375 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9375))
{return p.call(null,z);
} else
{return and__3822__auto____9375;
}
} else
{return and__3822__auto____9374;
}
})());
});
var ep1__4 = (function() { 
var G__9444__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9376 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9376))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9376;
}
})());
};
var G__9444 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9444__delegate.call(this, x, y, z, args);
};
G__9444.cljs$lang$maxFixedArity = 3;
G__9444.cljs$lang$applyTo = (function (arglist__9445){
var x = cljs.core.first(arglist__9445);
var y = cljs.core.first(cljs.core.next(arglist__9445));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9445)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9445)));
return G__9444__delegate(x, y, z, args);
});
G__9444.cljs$lang$arity$variadic = G__9444__delegate;
return G__9444;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9388 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9388))
{return p2.call(null,x);
} else
{return and__3822__auto____9388;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9389 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9389))
{var and__3822__auto____9390 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9390))
{var and__3822__auto____9391 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9391))
{return p2.call(null,y);
} else
{return and__3822__auto____9391;
}
} else
{return and__3822__auto____9390;
}
} else
{return and__3822__auto____9389;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9392 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9392))
{var and__3822__auto____9393 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9393))
{var and__3822__auto____9394 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9394))
{var and__3822__auto____9395 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9395))
{var and__3822__auto____9396 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9396))
{return p2.call(null,z);
} else
{return and__3822__auto____9396;
}
} else
{return and__3822__auto____9395;
}
} else
{return and__3822__auto____9394;
}
} else
{return and__3822__auto____9393;
}
} else
{return and__3822__auto____9392;
}
})());
});
var ep2__4 = (function() { 
var G__9446__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9397 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9397))
{return cljs.core.every_QMARK_.call(null,(function (p1__9243_SHARP_){
var and__3822__auto____9398 = p1.call(null,p1__9243_SHARP_);
if(cljs.core.truth_(and__3822__auto____9398))
{return p2.call(null,p1__9243_SHARP_);
} else
{return and__3822__auto____9398;
}
}),args);
} else
{return and__3822__auto____9397;
}
})());
};
var G__9446 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9446__delegate.call(this, x, y, z, args);
};
G__9446.cljs$lang$maxFixedArity = 3;
G__9446.cljs$lang$applyTo = (function (arglist__9447){
var x = cljs.core.first(arglist__9447);
var y = cljs.core.first(cljs.core.next(arglist__9447));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9447)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9447)));
return G__9446__delegate(x, y, z, args);
});
G__9446.cljs$lang$arity$variadic = G__9446__delegate;
return G__9446;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9417 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9417))
{var and__3822__auto____9418 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9418))
{return p3.call(null,x);
} else
{return and__3822__auto____9418;
}
} else
{return and__3822__auto____9417;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9419 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9419))
{var and__3822__auto____9420 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9420))
{var and__3822__auto____9421 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9421))
{var and__3822__auto____9422 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9422))
{var and__3822__auto____9423 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9423))
{return p3.call(null,y);
} else
{return and__3822__auto____9423;
}
} else
{return and__3822__auto____9422;
}
} else
{return and__3822__auto____9421;
}
} else
{return and__3822__auto____9420;
}
} else
{return and__3822__auto____9419;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9424 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9424))
{var and__3822__auto____9425 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9425))
{var and__3822__auto____9426 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9426))
{var and__3822__auto____9427 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9427))
{var and__3822__auto____9428 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9428))
{var and__3822__auto____9429 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9429))
{var and__3822__auto____9430 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9430))
{var and__3822__auto____9431 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9431))
{return p3.call(null,z);
} else
{return and__3822__auto____9431;
}
} else
{return and__3822__auto____9430;
}
} else
{return and__3822__auto____9429;
}
} else
{return and__3822__auto____9428;
}
} else
{return and__3822__auto____9427;
}
} else
{return and__3822__auto____9426;
}
} else
{return and__3822__auto____9425;
}
} else
{return and__3822__auto____9424;
}
})());
});
var ep3__4 = (function() { 
var G__9448__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9432 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9432))
{return cljs.core.every_QMARK_.call(null,(function (p1__9244_SHARP_){
var and__3822__auto____9433 = p1.call(null,p1__9244_SHARP_);
if(cljs.core.truth_(and__3822__auto____9433))
{var and__3822__auto____9434 = p2.call(null,p1__9244_SHARP_);
if(cljs.core.truth_(and__3822__auto____9434))
{return p3.call(null,p1__9244_SHARP_);
} else
{return and__3822__auto____9434;
}
} else
{return and__3822__auto____9433;
}
}),args);
} else
{return and__3822__auto____9432;
}
})());
};
var G__9448 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9448__delegate.call(this, x, y, z, args);
};
G__9448.cljs$lang$maxFixedArity = 3;
G__9448.cljs$lang$applyTo = (function (arglist__9449){
var x = cljs.core.first(arglist__9449);
var y = cljs.core.first(cljs.core.next(arglist__9449));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9449)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9449)));
return G__9448__delegate(x, y, z, args);
});
G__9448.cljs$lang$arity$variadic = G__9448__delegate;
return G__9448;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9450__delegate = function (p1,p2,p3,ps){
var ps__9435 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9245_SHARP_){
return p1__9245_SHARP_.call(null,x);
}),ps__9435);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9246_SHARP_){
var and__3822__auto____9440 = p1__9246_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9440))
{return p1__9246_SHARP_.call(null,y);
} else
{return and__3822__auto____9440;
}
}),ps__9435);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9247_SHARP_){
var and__3822__auto____9441 = p1__9247_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9441))
{var and__3822__auto____9442 = p1__9247_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9442))
{return p1__9247_SHARP_.call(null,z);
} else
{return and__3822__auto____9442;
}
} else
{return and__3822__auto____9441;
}
}),ps__9435);
});
var epn__4 = (function() { 
var G__9451__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9443 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9443))
{return cljs.core.every_QMARK_.call(null,(function (p1__9248_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9248_SHARP_,args);
}),ps__9435);
} else
{return and__3822__auto____9443;
}
})());
};
var G__9451 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9451__delegate.call(this, x, y, z, args);
};
G__9451.cljs$lang$maxFixedArity = 3;
G__9451.cljs$lang$applyTo = (function (arglist__9452){
var x = cljs.core.first(arglist__9452);
var y = cljs.core.first(cljs.core.next(arglist__9452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9452)));
return G__9451__delegate(x, y, z, args);
});
G__9451.cljs$lang$arity$variadic = G__9451__delegate;
return G__9451;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9450 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9450__delegate.call(this, p1, p2, p3, ps);
};
G__9450.cljs$lang$maxFixedArity = 3;
G__9450.cljs$lang$applyTo = (function (arglist__9453){
var p1 = cljs.core.first(arglist__9453);
var p2 = cljs.core.first(cljs.core.next(arglist__9453));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9453)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9453)));
return G__9450__delegate(p1, p2, p3, ps);
});
G__9450.cljs$lang$arity$variadic = G__9450__delegate;
return G__9450;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____9534 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9534))
{return or__3824__auto____9534;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9535 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9535))
{return or__3824__auto____9535;
} else
{var or__3824__auto____9536 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9536))
{return or__3824__auto____9536;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9605__delegate = function (x,y,z,args){
var or__3824__auto____9537 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9537))
{return or__3824__auto____9537;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9605 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9605__delegate.call(this, x, y, z, args);
};
G__9605.cljs$lang$maxFixedArity = 3;
G__9605.cljs$lang$applyTo = (function (arglist__9606){
var x = cljs.core.first(arglist__9606);
var y = cljs.core.first(cljs.core.next(arglist__9606));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9606)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9606)));
return G__9605__delegate(x, y, z, args);
});
G__9605.cljs$lang$arity$variadic = G__9605__delegate;
return G__9605;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____9549 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9549))
{return or__3824__auto____9549;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9550 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9550))
{return or__3824__auto____9550;
} else
{var or__3824__auto____9551 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9551))
{return or__3824__auto____9551;
} else
{var or__3824__auto____9552 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9552))
{return or__3824__auto____9552;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9553 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9553))
{return or__3824__auto____9553;
} else
{var or__3824__auto____9554 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9554))
{return or__3824__auto____9554;
} else
{var or__3824__auto____9555 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9555))
{return or__3824__auto____9555;
} else
{var or__3824__auto____9556 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9556))
{return or__3824__auto____9556;
} else
{var or__3824__auto____9557 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9557))
{return or__3824__auto____9557;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9607__delegate = function (x,y,z,args){
var or__3824__auto____9558 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9558))
{return or__3824__auto____9558;
} else
{return cljs.core.some.call(null,(function (p1__9288_SHARP_){
var or__3824__auto____9559 = p1.call(null,p1__9288_SHARP_);
if(cljs.core.truth_(or__3824__auto____9559))
{return or__3824__auto____9559;
} else
{return p2.call(null,p1__9288_SHARP_);
}
}),args);
}
};
var G__9607 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9607__delegate.call(this, x, y, z, args);
};
G__9607.cljs$lang$maxFixedArity = 3;
G__9607.cljs$lang$applyTo = (function (arglist__9608){
var x = cljs.core.first(arglist__9608);
var y = cljs.core.first(cljs.core.next(arglist__9608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9608)));
return G__9607__delegate(x, y, z, args);
});
G__9607.cljs$lang$arity$variadic = G__9607__delegate;
return G__9607;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____9578 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9578))
{return or__3824__auto____9578;
} else
{var or__3824__auto____9579 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9579))
{return or__3824__auto____9579;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9580 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9580))
{return or__3824__auto____9580;
} else
{var or__3824__auto____9581 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9581))
{return or__3824__auto____9581;
} else
{var or__3824__auto____9582 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9582))
{return or__3824__auto____9582;
} else
{var or__3824__auto____9583 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9583))
{return or__3824__auto____9583;
} else
{var or__3824__auto____9584 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9584))
{return or__3824__auto____9584;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9585 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9585))
{return or__3824__auto____9585;
} else
{var or__3824__auto____9586 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9586))
{return or__3824__auto____9586;
} else
{var or__3824__auto____9587 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9587))
{return or__3824__auto____9587;
} else
{var or__3824__auto____9588 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9588))
{return or__3824__auto____9588;
} else
{var or__3824__auto____9589 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9589))
{return or__3824__auto____9589;
} else
{var or__3824__auto____9590 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9590))
{return or__3824__auto____9590;
} else
{var or__3824__auto____9591 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9591))
{return or__3824__auto____9591;
} else
{var or__3824__auto____9592 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9592))
{return or__3824__auto____9592;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9609__delegate = function (x,y,z,args){
var or__3824__auto____9593 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9593))
{return or__3824__auto____9593;
} else
{return cljs.core.some.call(null,(function (p1__9289_SHARP_){
var or__3824__auto____9594 = p1.call(null,p1__9289_SHARP_);
if(cljs.core.truth_(or__3824__auto____9594))
{return or__3824__auto____9594;
} else
{var or__3824__auto____9595 = p2.call(null,p1__9289_SHARP_);
if(cljs.core.truth_(or__3824__auto____9595))
{return or__3824__auto____9595;
} else
{return p3.call(null,p1__9289_SHARP_);
}
}
}),args);
}
};
var G__9609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9609__delegate.call(this, x, y, z, args);
};
G__9609.cljs$lang$maxFixedArity = 3;
G__9609.cljs$lang$applyTo = (function (arglist__9610){
var x = cljs.core.first(arglist__9610);
var y = cljs.core.first(cljs.core.next(arglist__9610));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9610)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9610)));
return G__9609__delegate(x, y, z, args);
});
G__9609.cljs$lang$arity$variadic = G__9609__delegate;
return G__9609;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9611__delegate = function (p1,p2,p3,ps){
var ps__9596 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9290_SHARP_){
return p1__9290_SHARP_.call(null,x);
}),ps__9596);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9291_SHARP_){
var or__3824__auto____9601 = p1__9291_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9601))
{return or__3824__auto____9601;
} else
{return p1__9291_SHARP_.call(null,y);
}
}),ps__9596);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9292_SHARP_){
var or__3824__auto____9602 = p1__9292_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9602))
{return or__3824__auto____9602;
} else
{var or__3824__auto____9603 = p1__9292_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9603))
{return or__3824__auto____9603;
} else
{return p1__9292_SHARP_.call(null,z);
}
}
}),ps__9596);
});
var spn__4 = (function() { 
var G__9612__delegate = function (x,y,z,args){
var or__3824__auto____9604 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9604))
{return or__3824__auto____9604;
} else
{return cljs.core.some.call(null,(function (p1__9293_SHARP_){
return cljs.core.some.call(null,p1__9293_SHARP_,args);
}),ps__9596);
}
};
var G__9612 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9612__delegate.call(this, x, y, z, args);
};
G__9612.cljs$lang$maxFixedArity = 3;
G__9612.cljs$lang$applyTo = (function (arglist__9613){
var x = cljs.core.first(arglist__9613);
var y = cljs.core.first(cljs.core.next(arglist__9613));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9613)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9613)));
return G__9612__delegate(x, y, z, args);
});
G__9612.cljs$lang$arity$variadic = G__9612__delegate;
return G__9612;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9611 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9611__delegate.call(this, p1, p2, p3, ps);
};
G__9611.cljs$lang$maxFixedArity = 3;
G__9611.cljs$lang$applyTo = (function (arglist__9614){
var p1 = cljs.core.first(arglist__9614);
var p2 = cljs.core.first(cljs.core.next(arglist__9614));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9614)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9614)));
return G__9611__delegate(p1, p2, p3, ps);
});
G__9611.cljs$lang$arity$variadic = G__9611__delegate;
return G__9611;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9633 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9633)
{var s__9634 = temp__3974__auto____9633;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9634))
{var c__9635 = cljs.core.chunk_first.call(null,s__9634);
var size__9636 = cljs.core.count.call(null,c__9635);
var b__9637 = cljs.core.chunk_buffer.call(null,size__9636);
var n__2553__auto____9638 = size__9636;
var i__9639 = 0;
while(true){
if((i__9639 < n__2553__auto____9638))
{cljs.core.chunk_append.call(null,b__9637,f.call(null,cljs.core._nth.call(null,c__9635,i__9639)));
{
var G__9651 = (i__9639 + 1);
i__9639 = G__9651;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9637),map.call(null,f,cljs.core.chunk_rest.call(null,s__9634)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9634)),map.call(null,f,cljs.core.rest.call(null,s__9634)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9640 = cljs.core.seq.call(null,c1);
var s2__9641 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9642 = s1__9640;
if(and__3822__auto____9642)
{return s2__9641;
} else
{return and__3822__auto____9642;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9640),cljs.core.first.call(null,s2__9641)),map.call(null,f,cljs.core.rest.call(null,s1__9640),cljs.core.rest.call(null,s2__9641)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9643 = cljs.core.seq.call(null,c1);
var s2__9644 = cljs.core.seq.call(null,c2);
var s3__9645 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9646 = s1__9643;
if(and__3822__auto____9646)
{var and__3822__auto____9647 = s2__9644;
if(and__3822__auto____9647)
{return s3__9645;
} else
{return and__3822__auto____9647;
}
} else
{return and__3822__auto____9646;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9643),cljs.core.first.call(null,s2__9644),cljs.core.first.call(null,s3__9645)),map.call(null,f,cljs.core.rest.call(null,s1__9643),cljs.core.rest.call(null,s2__9644),cljs.core.rest.call(null,s3__9645)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9652__delegate = function (f,c1,c2,c3,colls){
var step__9650 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9649 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9649))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9649),step.call(null,map.call(null,cljs.core.rest,ss__9649)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9454_SHARP_){
return cljs.core.apply.call(null,f,p1__9454_SHARP_);
}),step__9650.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9652 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9652__delegate.call(this, f, c1, c2, c3, colls);
};
G__9652.cljs$lang$maxFixedArity = 4;
G__9652.cljs$lang$applyTo = (function (arglist__9653){
var f = cljs.core.first(arglist__9653);
var c1 = cljs.core.first(cljs.core.next(arglist__9653));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9653)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9653))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9653))));
return G__9652__delegate(f, c1, c2, c3, colls);
});
G__9652.cljs$lang$arity$variadic = G__9652__delegate;
return G__9652;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____9656 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9656)
{var s__9657 = temp__3974__auto____9656;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9657),take.call(null,(n - 1),cljs.core.rest.call(null,s__9657)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9663 = (function (n,coll){
while(true){
var s__9661 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9662 = (n > 0);
if(and__3822__auto____9662)
{return s__9661;
} else
{return and__3822__auto____9662;
}
})()))
{{
var G__9664 = (n - 1);
var G__9665 = cljs.core.rest.call(null,s__9661);
n = G__9664;
coll = G__9665;
continue;
}
} else
{return s__9661;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9663.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9668 = cljs.core.seq.call(null,coll);
var lead__9669 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9669)
{{
var G__9670 = cljs.core.next.call(null,s__9668);
var G__9671 = cljs.core.next.call(null,lead__9669);
s__9668 = G__9670;
lead__9669 = G__9671;
continue;
}
} else
{return s__9668;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9677 = (function (pred,coll){
while(true){
var s__9675 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9676 = s__9675;
if(and__3822__auto____9676)
{return pred.call(null,cljs.core.first.call(null,s__9675));
} else
{return and__3822__auto____9676;
}
})()))
{{
var G__9678 = pred;
var G__9679 = cljs.core.rest.call(null,s__9675);
pred = G__9678;
coll = G__9679;
continue;
}
} else
{return s__9675;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9677.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9682 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9682)
{var s__9683 = temp__3974__auto____9682;
return cljs.core.concat.call(null,s__9683,cycle.call(null,s__9683));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9688 = cljs.core.seq.call(null,c1);
var s2__9689 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9690 = s1__9688;
if(and__3822__auto____9690)
{return s2__9689;
} else
{return and__3822__auto____9690;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9688),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9689),interleave.call(null,cljs.core.rest.call(null,s1__9688),cljs.core.rest.call(null,s2__9689))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9692__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9691 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9691))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9691),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9691)));
} else
{return null;
}
}),null));
};
var G__9692 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9692__delegate.call(this, c1, c2, colls);
};
G__9692.cljs$lang$maxFixedArity = 2;
G__9692.cljs$lang$applyTo = (function (arglist__9693){
var c1 = cljs.core.first(arglist__9693);
var c2 = cljs.core.first(cljs.core.next(arglist__9693));
var colls = cljs.core.rest(cljs.core.next(arglist__9693));
return G__9692__delegate(c1, c2, colls);
});
G__9692.cljs$lang$arity$variadic = G__9692__delegate;
return G__9692;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9703 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9701 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9701)
{var coll__9702 = temp__3971__auto____9701;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9702),cat.call(null,cljs.core.rest.call(null,coll__9702),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9703.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9704__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9704 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9704__delegate.call(this, f, coll, colls);
};
G__9704.cljs$lang$maxFixedArity = 2;
G__9704.cljs$lang$applyTo = (function (arglist__9705){
var f = cljs.core.first(arglist__9705);
var coll = cljs.core.first(cljs.core.next(arglist__9705));
var colls = cljs.core.rest(cljs.core.next(arglist__9705));
return G__9704__delegate(f, coll, colls);
});
G__9704.cljs$lang$arity$variadic = G__9704__delegate;
return G__9704;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9715 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9715)
{var s__9716 = temp__3974__auto____9715;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9716))
{var c__9717 = cljs.core.chunk_first.call(null,s__9716);
var size__9718 = cljs.core.count.call(null,c__9717);
var b__9719 = cljs.core.chunk_buffer.call(null,size__9718);
var n__2553__auto____9720 = size__9718;
var i__9721 = 0;
while(true){
if((i__9721 < n__2553__auto____9720))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9717,i__9721))))
{cljs.core.chunk_append.call(null,b__9719,cljs.core._nth.call(null,c__9717,i__9721));
} else
{}
{
var G__9724 = (i__9721 + 1);
i__9721 = G__9724;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9719),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9716)));
} else
{var f__9722 = cljs.core.first.call(null,s__9716);
var r__9723 = cljs.core.rest.call(null,s__9716);
if(cljs.core.truth_(pred.call(null,f__9722)))
{return cljs.core.cons.call(null,f__9722,filter.call(null,pred,r__9723));
} else
{return filter.call(null,pred,r__9723);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9727 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9727.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9725_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9725_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9731__9732 = to;
if(G__9731__9732)
{if((function (){var or__3824__auto____9733 = (G__9731__9732.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9733)
{return or__3824__auto____9733;
} else
{return G__9731__9732.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9731__9732.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9731__9732);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9731__9732);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9734__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9734 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9734__delegate.call(this, f, c1, c2, c3, colls);
};
G__9734.cljs$lang$maxFixedArity = 4;
G__9734.cljs$lang$applyTo = (function (arglist__9735){
var f = cljs.core.first(arglist__9735);
var c1 = cljs.core.first(cljs.core.next(arglist__9735));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9735)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9735))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9735))));
return G__9734__delegate(f, c1, c2, c3, colls);
});
G__9734.cljs$lang$arity$variadic = G__9734__delegate;
return G__9734;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9742 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9742)
{var s__9743 = temp__3974__auto____9742;
var p__9744 = cljs.core.take.call(null,n,s__9743);
if((n === cljs.core.count.call(null,p__9744)))
{return cljs.core.cons.call(null,p__9744,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9743)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9745 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9745)
{var s__9746 = temp__3974__auto____9745;
var p__9747 = cljs.core.take.call(null,n,s__9746);
if((n === cljs.core.count.call(null,p__9747)))
{return cljs.core.cons.call(null,p__9747,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9746)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9747,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9752 = cljs.core.lookup_sentinel;
var m__9753 = m;
var ks__9754 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9754)
{var m__9755 = cljs.core._lookup.call(null,m__9753,cljs.core.first.call(null,ks__9754),sentinel__9752);
if((sentinel__9752 === m__9755))
{return not_found;
} else
{{
var G__9756 = sentinel__9752;
var G__9757 = m__9755;
var G__9758 = cljs.core.next.call(null,ks__9754);
sentinel__9752 = G__9756;
m__9753 = G__9757;
ks__9754 = G__9758;
continue;
}
}
} else
{return m__9753;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9759,v){
var vec__9764__9765 = p__9759;
var k__9766 = cljs.core.nth.call(null,vec__9764__9765,0,null);
var ks__9767 = cljs.core.nthnext.call(null,vec__9764__9765,1);
if(cljs.core.truth_(ks__9767))
{return cljs.core.assoc.call(null,m,k__9766,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9766,null),ks__9767,v));
} else
{return cljs.core.assoc.call(null,m,k__9766,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9768,f,args){
var vec__9773__9774 = p__9768;
var k__9775 = cljs.core.nth.call(null,vec__9773__9774,0,null);
var ks__9776 = cljs.core.nthnext.call(null,vec__9773__9774,1);
if(cljs.core.truth_(ks__9776))
{return cljs.core.assoc.call(null,m,k__9775,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9775,null),ks__9776,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9775,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9775,null),args));
}
};
var update_in = function (m,p__9768,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9768, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9777){
var m = cljs.core.first(arglist__9777);
var p__9768 = cljs.core.first(cljs.core.next(arglist__9777));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9777)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9777)));
return update_in__delegate(m, p__9768, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9780 = this;
var h__2218__auto____9781 = this__9780.__hash;
if(!((h__2218__auto____9781 == null)))
{return h__2218__auto____9781;
} else
{var h__2218__auto____9782 = cljs.core.hash_coll.call(null,coll);
this__9780.__hash = h__2218__auto____9782;
return h__2218__auto____9782;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9783 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9784 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9785 = this;
var new_array__9786 = this__9785.array.slice();
(new_array__9786[k] = v);
return (new cljs.core.Vector(this__9785.meta,new_array__9786,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9817 = null;
var G__9817__2 = (function (this_sym9787,k){
var this__9789 = this;
var this_sym9787__9790 = this;
var coll__9791 = this_sym9787__9790;
return coll__9791.cljs$core$ILookup$_lookup$arity$2(coll__9791,k);
});
var G__9817__3 = (function (this_sym9788,k,not_found){
var this__9789 = this;
var this_sym9788__9792 = this;
var coll__9793 = this_sym9788__9792;
return coll__9793.cljs$core$ILookup$_lookup$arity$3(coll__9793,k,not_found);
});
G__9817 = function(this_sym9788,k,not_found){
switch(arguments.length){
case 2:
return G__9817__2.call(this,this_sym9788,k);
case 3:
return G__9817__3.call(this,this_sym9788,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9817;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9778,args9779){
var this__9794 = this;
return this_sym9778.call.apply(this_sym9778,[this_sym9778].concat(args9779.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9795 = this;
var new_array__9796 = this__9795.array.slice();
new_array__9796.push(o);
return (new cljs.core.Vector(this__9795.meta,new_array__9796,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9797 = this;
var this__9798 = this;
return cljs.core.pr_str.call(null,this__9798);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9799 = this;
return cljs.core.ci_reduce.call(null,this__9799.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9800 = this;
return cljs.core.ci_reduce.call(null,this__9800.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9801 = this;
if((this__9801.array.length > 0))
{var vector_seq__9802 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9801.array.length))
{return cljs.core.cons.call(null,(this__9801.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9802.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9803 = this;
return this__9803.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9804 = this;
var count__9805 = this__9804.array.length;
if((count__9805 > 0))
{return (this__9804.array[(count__9805 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9806 = this;
if((this__9806.array.length > 0))
{var new_array__9807 = this__9806.array.slice();
new_array__9807.pop();
return (new cljs.core.Vector(this__9806.meta,new_array__9807,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9808 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9809 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9810 = this;
return (new cljs.core.Vector(meta,this__9810.array,this__9810.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9811 = this;
return this__9811.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9812 = this;
if((function (){var and__3822__auto____9813 = (0 <= n);
if(and__3822__auto____9813)
{return (n < this__9812.array.length);
} else
{return and__3822__auto____9813;
}
})())
{return (this__9812.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9814 = this;
if((function (){var and__3822__auto____9815 = (0 <= n);
if(and__3822__auto____9815)
{return (n < this__9814.array.length);
} else
{return and__3822__auto____9815;
}
})())
{return (this__9814.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9816 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9816.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9819 = pv.cnt;
if((cnt__9819 < 32))
{return 0;
} else
{return (((cnt__9819 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9825 = level;
var ret__9826 = node;
while(true){
if((ll__9825 === 0))
{return ret__9826;
} else
{var embed__9827 = ret__9826;
var r__9828 = cljs.core.pv_fresh_node.call(null,edit);
var ___9829 = cljs.core.pv_aset.call(null,r__9828,0,embed__9827);
{
var G__9830 = (ll__9825 - 5);
var G__9831 = r__9828;
ll__9825 = G__9830;
ret__9826 = G__9831;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9837 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9838 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9837,subidx__9838,tailnode);
return ret__9837;
} else
{var child__9839 = cljs.core.pv_aget.call(null,parent,subidx__9838);
if(!((child__9839 == null)))
{var node_to_insert__9840 = push_tail.call(null,pv,(level - 5),child__9839,tailnode);
cljs.core.pv_aset.call(null,ret__9837,subidx__9838,node_to_insert__9840);
return ret__9837;
} else
{var node_to_insert__9841 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9837,subidx__9838,node_to_insert__9841);
return ret__9837;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9845 = (0 <= i);
if(and__3822__auto____9845)
{return (i < pv.cnt);
} else
{return and__3822__auto____9845;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9846 = pv.root;
var level__9847 = pv.shift;
while(true){
if((level__9847 > 0))
{{
var G__9848 = cljs.core.pv_aget.call(null,node__9846,((i >>> level__9847) & 31));
var G__9849 = (level__9847 - 5);
node__9846 = G__9848;
level__9847 = G__9849;
continue;
}
} else
{return node__9846.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9852 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9852,(i & 31),val);
return ret__9852;
} else
{var subidx__9853 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9852,subidx__9853,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9853),i,val));
return ret__9852;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9859 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9860 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9859));
if((function (){var and__3822__auto____9861 = (new_child__9860 == null);
if(and__3822__auto____9861)
{return (subidx__9859 === 0);
} else
{return and__3822__auto____9861;
}
})())
{return null;
} else
{var ret__9862 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9862,subidx__9859,new_child__9860);
return ret__9862;
}
} else
{if((subidx__9859 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9863 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9863,subidx__9859,null);
return ret__9863;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9866 = this;
return (new cljs.core.TransientVector(this__9866.cnt,this__9866.shift,cljs.core.tv_editable_root.call(null,this__9866.root),cljs.core.tv_editable_tail.call(null,this__9866.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9867 = this;
var h__2218__auto____9868 = this__9867.__hash;
if(!((h__2218__auto____9868 == null)))
{return h__2218__auto____9868;
} else
{var h__2218__auto____9869 = cljs.core.hash_coll.call(null,coll);
this__9867.__hash = h__2218__auto____9869;
return h__2218__auto____9869;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9870 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9871 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9872 = this;
if((function (){var and__3822__auto____9873 = (0 <= k);
if(and__3822__auto____9873)
{return (k < this__9872.cnt);
} else
{return and__3822__auto____9873;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9874 = this__9872.tail.slice();
(new_tail__9874[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9872.meta,this__9872.cnt,this__9872.shift,this__9872.root,new_tail__9874,null));
} else
{return (new cljs.core.PersistentVector(this__9872.meta,this__9872.cnt,this__9872.shift,cljs.core.do_assoc.call(null,coll,this__9872.shift,this__9872.root,k,v),this__9872.tail,null));
}
} else
{if((k === this__9872.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9872.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9922 = null;
var G__9922__2 = (function (this_sym9875,k){
var this__9877 = this;
var this_sym9875__9878 = this;
var coll__9879 = this_sym9875__9878;
return coll__9879.cljs$core$ILookup$_lookup$arity$2(coll__9879,k);
});
var G__9922__3 = (function (this_sym9876,k,not_found){
var this__9877 = this;
var this_sym9876__9880 = this;
var coll__9881 = this_sym9876__9880;
return coll__9881.cljs$core$ILookup$_lookup$arity$3(coll__9881,k,not_found);
});
G__9922 = function(this_sym9876,k,not_found){
switch(arguments.length){
case 2:
return G__9922__2.call(this,this_sym9876,k);
case 3:
return G__9922__3.call(this,this_sym9876,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9922;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9864,args9865){
var this__9882 = this;
return this_sym9864.call.apply(this_sym9864,[this_sym9864].concat(args9865.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9883 = this;
var step_init__9884 = [0,init];
var i__9885 = 0;
while(true){
if((i__9885 < this__9883.cnt))
{var arr__9886 = cljs.core.array_for.call(null,v,i__9885);
var len__9887 = arr__9886.length;
var init__9891 = (function (){var j__9888 = 0;
var init__9889 = (step_init__9884[1]);
while(true){
if((j__9888 < len__9887))
{var init__9890 = f.call(null,init__9889,(j__9888 + i__9885),(arr__9886[j__9888]));
if(cljs.core.reduced_QMARK_.call(null,init__9890))
{return init__9890;
} else
{{
var G__9923 = (j__9888 + 1);
var G__9924 = init__9890;
j__9888 = G__9923;
init__9889 = G__9924;
continue;
}
}
} else
{(step_init__9884[0] = len__9887);
(step_init__9884[1] = init__9889);
return init__9889;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9891))
{return cljs.core.deref.call(null,init__9891);
} else
{{
var G__9925 = (i__9885 + (step_init__9884[0]));
i__9885 = G__9925;
continue;
}
}
} else
{return (step_init__9884[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9892 = this;
if(((this__9892.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9893 = this__9892.tail.slice();
new_tail__9893.push(o);
return (new cljs.core.PersistentVector(this__9892.meta,(this__9892.cnt + 1),this__9892.shift,this__9892.root,new_tail__9893,null));
} else
{var root_overflow_QMARK___9894 = ((this__9892.cnt >>> 5) > (1 << this__9892.shift));
var new_shift__9895 = ((root_overflow_QMARK___9894)?(this__9892.shift + 5):this__9892.shift);
var new_root__9897 = ((root_overflow_QMARK___9894)?(function (){var n_r__9896 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9896,0,this__9892.root);
cljs.core.pv_aset.call(null,n_r__9896,1,cljs.core.new_path.call(null,null,this__9892.shift,(new cljs.core.VectorNode(null,this__9892.tail))));
return n_r__9896;
})():cljs.core.push_tail.call(null,coll,this__9892.shift,this__9892.root,(new cljs.core.VectorNode(null,this__9892.tail))));
return (new cljs.core.PersistentVector(this__9892.meta,(this__9892.cnt + 1),new_shift__9895,new_root__9897,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9898 = this;
if((this__9898.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9898.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9899 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9900 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9901 = this;
var this__9902 = this;
return cljs.core.pr_str.call(null,this__9902);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9903 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9904 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9905 = this;
if((this__9905.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9906 = this;
return this__9906.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9907 = this;
if((this__9907.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9907.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9908 = this;
if((this__9908.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9908.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9908.meta);
} else
{if((1 < (this__9908.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9908.meta,(this__9908.cnt - 1),this__9908.shift,this__9908.root,this__9908.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9909 = cljs.core.array_for.call(null,coll,(this__9908.cnt - 2));
var nr__9910 = cljs.core.pop_tail.call(null,coll,this__9908.shift,this__9908.root);
var new_root__9911 = (((nr__9910 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9910);
var cnt_1__9912 = (this__9908.cnt - 1);
if((function (){var and__3822__auto____9913 = (5 < this__9908.shift);
if(and__3822__auto____9913)
{return (cljs.core.pv_aget.call(null,new_root__9911,1) == null);
} else
{return and__3822__auto____9913;
}
})())
{return (new cljs.core.PersistentVector(this__9908.meta,cnt_1__9912,(this__9908.shift - 5),cljs.core.pv_aget.call(null,new_root__9911,0),new_tail__9909,null));
} else
{return (new cljs.core.PersistentVector(this__9908.meta,cnt_1__9912,this__9908.shift,new_root__9911,new_tail__9909,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9914 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9915 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9916 = this;
return (new cljs.core.PersistentVector(meta,this__9916.cnt,this__9916.shift,this__9916.root,this__9916.tail,this__9916.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9917 = this;
return this__9917.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9918 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9919 = this;
if((function (){var and__3822__auto____9920 = (0 <= n);
if(and__3822__auto____9920)
{return (n < this__9919.cnt);
} else
{return and__3822__auto____9920;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9921 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9921.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9926 = xs.length;
var xs__9927 = (((no_clone === true))?xs:xs.slice());
if((l__9926 < 32))
{return (new cljs.core.PersistentVector(null,l__9926,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9927,null));
} else
{var node__9928 = xs__9927.slice(0,32);
var v__9929 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9928,null));
var i__9930 = 32;
var out__9931 = cljs.core._as_transient.call(null,v__9929);
while(true){
if((i__9930 < l__9926))
{{
var G__9932 = (i__9930 + 1);
var G__9933 = cljs.core.conj_BANG_.call(null,out__9931,(xs__9927[i__9930]));
i__9930 = G__9932;
out__9931 = G__9933;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9931);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9934){
var args = cljs.core.seq(arglist__9934);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9935 = this;
if(((this__9935.off + 1) < this__9935.node.length))
{var s__9936 = cljs.core.chunked_seq.call(null,this__9935.vec,this__9935.node,this__9935.i,(this__9935.off + 1));
if((s__9936 == null))
{return null;
} else
{return s__9936;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9937 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9938 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9939 = this;
return (this__9939.node[this__9939.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9940 = this;
if(((this__9940.off + 1) < this__9940.node.length))
{var s__9941 = cljs.core.chunked_seq.call(null,this__9940.vec,this__9940.node,this__9940.i,(this__9940.off + 1));
if((s__9941 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9941;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9942 = this;
var l__9943 = this__9942.node.length;
var s__9944 = ((((this__9942.i + l__9943) < cljs.core._count.call(null,this__9942.vec)))?cljs.core.chunked_seq.call(null,this__9942.vec,(this__9942.i + l__9943),0):null);
if((s__9944 == null))
{return null;
} else
{return s__9944;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9946 = this;
return cljs.core.chunked_seq.call(null,this__9946.vec,this__9946.node,this__9946.i,this__9946.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9947 = this;
return this__9947.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9948 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9948.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9949 = this;
return cljs.core.array_chunk.call(null,this__9949.node,this__9949.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9950 = this;
var l__9951 = this__9950.node.length;
var s__9952 = ((((this__9950.i + l__9951) < cljs.core._count.call(null,this__9950.vec)))?cljs.core.chunked_seq.call(null,this__9950.vec,(this__9950.i + l__9951),0):null);
if((s__9952 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9952;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9955 = this;
var h__2218__auto____9956 = this__9955.__hash;
if(!((h__2218__auto____9956 == null)))
{return h__2218__auto____9956;
} else
{var h__2218__auto____9957 = cljs.core.hash_coll.call(null,coll);
this__9955.__hash = h__2218__auto____9957;
return h__2218__auto____9957;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9958 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9959 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9960 = this;
var v_pos__9961 = (this__9960.start + key);
return (new cljs.core.Subvec(this__9960.meta,cljs.core._assoc.call(null,this__9960.v,v_pos__9961,val),this__9960.start,((this__9960.end > (v_pos__9961 + 1)) ? this__9960.end : (v_pos__9961 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9987 = null;
var G__9987__2 = (function (this_sym9962,k){
var this__9964 = this;
var this_sym9962__9965 = this;
var coll__9966 = this_sym9962__9965;
return coll__9966.cljs$core$ILookup$_lookup$arity$2(coll__9966,k);
});
var G__9987__3 = (function (this_sym9963,k,not_found){
var this__9964 = this;
var this_sym9963__9967 = this;
var coll__9968 = this_sym9963__9967;
return coll__9968.cljs$core$ILookup$_lookup$arity$3(coll__9968,k,not_found);
});
G__9987 = function(this_sym9963,k,not_found){
switch(arguments.length){
case 2:
return G__9987__2.call(this,this_sym9963,k);
case 3:
return G__9987__3.call(this,this_sym9963,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9987;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9953,args9954){
var this__9969 = this;
return this_sym9953.call.apply(this_sym9953,[this_sym9953].concat(args9954.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9970 = this;
return (new cljs.core.Subvec(this__9970.meta,cljs.core._assoc_n.call(null,this__9970.v,this__9970.end,o),this__9970.start,(this__9970.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9971 = this;
var this__9972 = this;
return cljs.core.pr_str.call(null,this__9972);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9973 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9974 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9975 = this;
var subvec_seq__9976 = (function subvec_seq(i){
if((i === this__9975.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9975.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9976.call(null,this__9975.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9977 = this;
return (this__9977.end - this__9977.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9978 = this;
return cljs.core._nth.call(null,this__9978.v,(this__9978.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9979 = this;
if((this__9979.start === this__9979.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9979.meta,this__9979.v,this__9979.start,(this__9979.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9980 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9981 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9982 = this;
return (new cljs.core.Subvec(meta,this__9982.v,this__9982.start,this__9982.end,this__9982.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9983 = this;
return this__9983.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9984 = this;
return cljs.core._nth.call(null,this__9984.v,(this__9984.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9985 = this;
return cljs.core._nth.call(null,this__9985.v,(this__9985.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9986 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9986.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9989 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9989,0,tl.length);
return ret__9989;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9993 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9994 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9993,subidx__9994,(((level === 5))?tail_node:(function (){var child__9995 = cljs.core.pv_aget.call(null,ret__9993,subidx__9994);
if(!((child__9995 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9995,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9993;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10000 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10001 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10002 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10000,subidx__10001));
if((function (){var and__3822__auto____10003 = (new_child__10002 == null);
if(and__3822__auto____10003)
{return (subidx__10001 === 0);
} else
{return and__3822__auto____10003;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10000,subidx__10001,new_child__10002);
return node__10000;
}
} else
{if((subidx__10001 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10000,subidx__10001,null);
return node__10000;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10008 = (0 <= i);
if(and__3822__auto____10008)
{return (i < tv.cnt);
} else
{return and__3822__auto____10008;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10009 = tv.root;
var node__10010 = root__10009;
var level__10011 = tv.shift;
while(true){
if((level__10011 > 0))
{{
var G__10012 = cljs.core.tv_ensure_editable.call(null,root__10009.edit,cljs.core.pv_aget.call(null,node__10010,((i >>> level__10011) & 31)));
var G__10013 = (level__10011 - 5);
node__10010 = G__10012;
level__10011 = G__10013;
continue;
}
} else
{return node__10010.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__10053 = null;
var G__10053__2 = (function (this_sym10016,k){
var this__10018 = this;
var this_sym10016__10019 = this;
var coll__10020 = this_sym10016__10019;
return coll__10020.cljs$core$ILookup$_lookup$arity$2(coll__10020,k);
});
var G__10053__3 = (function (this_sym10017,k,not_found){
var this__10018 = this;
var this_sym10017__10021 = this;
var coll__10022 = this_sym10017__10021;
return coll__10022.cljs$core$ILookup$_lookup$arity$3(coll__10022,k,not_found);
});
G__10053 = function(this_sym10017,k,not_found){
switch(arguments.length){
case 2:
return G__10053__2.call(this,this_sym10017,k);
case 3:
return G__10053__3.call(this,this_sym10017,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10053;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10014,args10015){
var this__10023 = this;
return this_sym10014.call.apply(this_sym10014,[this_sym10014].concat(args10015.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10024 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10025 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10026 = this;
if(this__10026.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10027 = this;
if((function (){var and__3822__auto____10028 = (0 <= n);
if(and__3822__auto____10028)
{return (n < this__10027.cnt);
} else
{return and__3822__auto____10028;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10029 = this;
if(this__10029.root.edit)
{return this__10029.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10030 = this;
if(this__10030.root.edit)
{if((function (){var and__3822__auto____10031 = (0 <= n);
if(and__3822__auto____10031)
{return (n < this__10030.cnt);
} else
{return and__3822__auto____10031;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10030.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10036 = (function go(level,node){
var node__10034 = cljs.core.tv_ensure_editable.call(null,this__10030.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10034,(n & 31),val);
return node__10034;
} else
{var subidx__10035 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10034,subidx__10035,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10034,subidx__10035)));
return node__10034;
}
}).call(null,this__10030.shift,this__10030.root);
this__10030.root = new_root__10036;
return tcoll;
}
} else
{if((n === this__10030.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10030.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__10037 = this;
if(this__10037.root.edit)
{if((this__10037.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10037.cnt))
{this__10037.cnt = 0;
return tcoll;
} else
{if((((this__10037.cnt - 1) & 31) > 0))
{this__10037.cnt = (this__10037.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10038 = cljs.core.editable_array_for.call(null,tcoll,(this__10037.cnt - 2));
var new_root__10040 = (function (){var nr__10039 = cljs.core.tv_pop_tail.call(null,tcoll,this__10037.shift,this__10037.root);
if(!((nr__10039 == null)))
{return nr__10039;
} else
{return (new cljs.core.VectorNode(this__10037.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10041 = (5 < this__10037.shift);
if(and__3822__auto____10041)
{return (cljs.core.pv_aget.call(null,new_root__10040,1) == null);
} else
{return and__3822__auto____10041;
}
})())
{var new_root__10042 = cljs.core.tv_ensure_editable.call(null,this__10037.root.edit,cljs.core.pv_aget.call(null,new_root__10040,0));
this__10037.root = new_root__10042;
this__10037.shift = (this__10037.shift - 5);
this__10037.cnt = (this__10037.cnt - 1);
this__10037.tail = new_tail__10038;
return tcoll;
} else
{this__10037.root = new_root__10040;
this__10037.cnt = (this__10037.cnt - 1);
this__10037.tail = new_tail__10038;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10043 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10044 = this;
if(this__10044.root.edit)
{if(((this__10044.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10044.tail[(this__10044.cnt & 31)] = o);
this__10044.cnt = (this__10044.cnt + 1);
return tcoll;
} else
{var tail_node__10045 = (new cljs.core.VectorNode(this__10044.root.edit,this__10044.tail));
var new_tail__10046 = cljs.core.make_array.call(null,32);
(new_tail__10046[0] = o);
this__10044.tail = new_tail__10046;
if(((this__10044.cnt >>> 5) > (1 << this__10044.shift)))
{var new_root_array__10047 = cljs.core.make_array.call(null,32);
var new_shift__10048 = (this__10044.shift + 5);
(new_root_array__10047[0] = this__10044.root);
(new_root_array__10047[1] = cljs.core.new_path.call(null,this__10044.root.edit,this__10044.shift,tail_node__10045));
this__10044.root = (new cljs.core.VectorNode(this__10044.root.edit,new_root_array__10047));
this__10044.shift = new_shift__10048;
this__10044.cnt = (this__10044.cnt + 1);
return tcoll;
} else
{var new_root__10049 = cljs.core.tv_push_tail.call(null,tcoll,this__10044.shift,this__10044.root,tail_node__10045);
this__10044.root = new_root__10049;
this__10044.cnt = (this__10044.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10050 = this;
if(this__10050.root.edit)
{this__10050.root.edit = null;
var len__10051 = (this__10050.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10052 = cljs.core.make_array.call(null,len__10051);
cljs.core.array_copy.call(null,this__10050.tail,0,trimmed_tail__10052,0,len__10051);
return (new cljs.core.PersistentVector(null,this__10050.cnt,this__10050.shift,this__10050.root,trimmed_tail__10052,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10054 = this;
var h__2218__auto____10055 = this__10054.__hash;
if(!((h__2218__auto____10055 == null)))
{return h__2218__auto____10055;
} else
{var h__2218__auto____10056 = cljs.core.hash_coll.call(null,coll);
this__10054.__hash = h__2218__auto____10056;
return h__2218__auto____10056;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10057 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10058 = this;
var this__10059 = this;
return cljs.core.pr_str.call(null,this__10059);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10060 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10061 = this;
return cljs.core._first.call(null,this__10061.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10062 = this;
var temp__3971__auto____10063 = cljs.core.next.call(null,this__10062.front);
if(temp__3971__auto____10063)
{var f1__10064 = temp__3971__auto____10063;
return (new cljs.core.PersistentQueueSeq(this__10062.meta,f1__10064,this__10062.rear,null));
} else
{if((this__10062.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10062.meta,this__10062.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10065 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10066 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10066.front,this__10066.rear,this__10066.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10067 = this;
return this__10067.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10068 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10068.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10069 = this;
var h__2218__auto____10070 = this__10069.__hash;
if(!((h__2218__auto____10070 == null)))
{return h__2218__auto____10070;
} else
{var h__2218__auto____10071 = cljs.core.hash_coll.call(null,coll);
this__10069.__hash = h__2218__auto____10071;
return h__2218__auto____10071;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10072 = this;
if(cljs.core.truth_(this__10072.front))
{return (new cljs.core.PersistentQueue(this__10072.meta,(this__10072.count + 1),this__10072.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10073 = this__10072.rear;
if(cljs.core.truth_(or__3824__auto____10073))
{return or__3824__auto____10073;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10072.meta,(this__10072.count + 1),cljs.core.conj.call(null,this__10072.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10074 = this;
var this__10075 = this;
return cljs.core.pr_str.call(null,this__10075);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10076 = this;
var rear__10077 = cljs.core.seq.call(null,this__10076.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10078 = this__10076.front;
if(cljs.core.truth_(or__3824__auto____10078))
{return or__3824__auto____10078;
} else
{return rear__10077;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10076.front,cljs.core.seq.call(null,rear__10077),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10079 = this;
return this__10079.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10080 = this;
return cljs.core._first.call(null,this__10080.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10081 = this;
if(cljs.core.truth_(this__10081.front))
{var temp__3971__auto____10082 = cljs.core.next.call(null,this__10081.front);
if(temp__3971__auto____10082)
{var f1__10083 = temp__3971__auto____10082;
return (new cljs.core.PersistentQueue(this__10081.meta,(this__10081.count - 1),f1__10083,this__10081.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10081.meta,(this__10081.count - 1),cljs.core.seq.call(null,this__10081.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10084 = this;
return cljs.core.first.call(null,this__10084.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10085 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10086 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10087 = this;
return (new cljs.core.PersistentQueue(meta,this__10087.count,this__10087.front,this__10087.rear,this__10087.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10088 = this;
return this__10088.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10089 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10090 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__10093 = array.length;
var i__10094 = 0;
while(true){
if((i__10094 < len__10093))
{if((k === (array[i__10094])))
{return i__10094;
} else
{{
var G__10095 = (i__10094 + incr);
i__10094 = G__10095;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__10098 = cljs.core.hash.call(null,a);
var b__10099 = cljs.core.hash.call(null,b);
if((a__10098 < b__10099))
{return -1;
} else
{if((a__10098 > b__10099))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__10107 = m.keys;
var len__10108 = ks__10107.length;
var so__10109 = m.strobj;
var out__10110 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10111 = 0;
var out__10112 = cljs.core.transient$.call(null,out__10110);
while(true){
if((i__10111 < len__10108))
{var k__10113 = (ks__10107[i__10111]);
{
var G__10114 = (i__10111 + 1);
var G__10115 = cljs.core.assoc_BANG_.call(null,out__10112,k__10113,(so__10109[k__10113]));
i__10111 = G__10114;
out__10112 = G__10115;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10112,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10121 = {};
var l__10122 = ks.length;
var i__10123 = 0;
while(true){
if((i__10123 < l__10122))
{var k__10124 = (ks[i__10123]);
(new_obj__10121[k__10124] = (obj[k__10124]));
{
var G__10125 = (i__10123 + 1);
i__10123 = G__10125;
continue;
}
} else
{}
break;
}
return new_obj__10121;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10128 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10129 = this;
var h__2218__auto____10130 = this__10129.__hash;
if(!((h__2218__auto____10130 == null)))
{return h__2218__auto____10130;
} else
{var h__2218__auto____10131 = cljs.core.hash_imap.call(null,coll);
this__10129.__hash = h__2218__auto____10131;
return h__2218__auto____10131;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10132 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10133 = this;
if((function (){var and__3822__auto____10134 = goog.isString(k);
if(and__3822__auto____10134)
{return !((cljs.core.scan_array.call(null,1,k,this__10133.keys) == null));
} else
{return and__3822__auto____10134;
}
})())
{return (this__10133.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10135 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10136 = (this__10135.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10136)
{return or__3824__auto____10136;
} else
{return (this__10135.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10135.keys) == null)))
{var new_strobj__10137 = cljs.core.obj_clone.call(null,this__10135.strobj,this__10135.keys);
(new_strobj__10137[k] = v);
return (new cljs.core.ObjMap(this__10135.meta,this__10135.keys,new_strobj__10137,(this__10135.update_count + 1),null));
} else
{var new_strobj__10138 = cljs.core.obj_clone.call(null,this__10135.strobj,this__10135.keys);
var new_keys__10139 = this__10135.keys.slice();
(new_strobj__10138[k] = v);
new_keys__10139.push(k);
return (new cljs.core.ObjMap(this__10135.meta,new_keys__10139,new_strobj__10138,(this__10135.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10140 = this;
if((function (){var and__3822__auto____10141 = goog.isString(k);
if(and__3822__auto____10141)
{return !((cljs.core.scan_array.call(null,1,k,this__10140.keys) == null));
} else
{return and__3822__auto____10141;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10163 = null;
var G__10163__2 = (function (this_sym10142,k){
var this__10144 = this;
var this_sym10142__10145 = this;
var coll__10146 = this_sym10142__10145;
return coll__10146.cljs$core$ILookup$_lookup$arity$2(coll__10146,k);
});
var G__10163__3 = (function (this_sym10143,k,not_found){
var this__10144 = this;
var this_sym10143__10147 = this;
var coll__10148 = this_sym10143__10147;
return coll__10148.cljs$core$ILookup$_lookup$arity$3(coll__10148,k,not_found);
});
G__10163 = function(this_sym10143,k,not_found){
switch(arguments.length){
case 2:
return G__10163__2.call(this,this_sym10143,k);
case 3:
return G__10163__3.call(this,this_sym10143,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10163;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10126,args10127){
var this__10149 = this;
return this_sym10126.call.apply(this_sym10126,[this_sym10126].concat(args10127.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10150 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10151 = this;
var this__10152 = this;
return cljs.core.pr_str.call(null,this__10152);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10153 = this;
if((this__10153.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10116_SHARP_){
return cljs.core.vector.call(null,p1__10116_SHARP_,(this__10153.strobj[p1__10116_SHARP_]));
}),this__10153.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10154 = this;
return this__10154.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10155 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10156 = this;
return (new cljs.core.ObjMap(meta,this__10156.keys,this__10156.strobj,this__10156.update_count,this__10156.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10157 = this;
return this__10157.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10158 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10158.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10159 = this;
if((function (){var and__3822__auto____10160 = goog.isString(k);
if(and__3822__auto____10160)
{return !((cljs.core.scan_array.call(null,1,k,this__10159.keys) == null));
} else
{return and__3822__auto____10160;
}
})())
{var new_keys__10161 = this__10159.keys.slice();
var new_strobj__10162 = cljs.core.obj_clone.call(null,this__10159.strobj,this__10159.keys);
new_keys__10161.splice(cljs.core.scan_array.call(null,1,k,new_keys__10161),1);
cljs.core.js_delete.call(null,new_strobj__10162,k);
return (new cljs.core.ObjMap(this__10159.meta,new_keys__10161,new_strobj__10162,(this__10159.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10167 = this;
var h__2218__auto____10168 = this__10167.__hash;
if(!((h__2218__auto____10168 == null)))
{return h__2218__auto____10168;
} else
{var h__2218__auto____10169 = cljs.core.hash_imap.call(null,coll);
this__10167.__hash = h__2218__auto____10169;
return h__2218__auto____10169;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10170 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10171 = this;
var bucket__10172 = (this__10171.hashobj[cljs.core.hash.call(null,k)]);
var i__10173 = (cljs.core.truth_(bucket__10172)?cljs.core.scan_array.call(null,2,k,bucket__10172):null);
if(cljs.core.truth_(i__10173))
{return (bucket__10172[(i__10173 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10174 = this;
var h__10175 = cljs.core.hash.call(null,k);
var bucket__10176 = (this__10174.hashobj[h__10175]);
if(cljs.core.truth_(bucket__10176))
{var new_bucket__10177 = bucket__10176.slice();
var new_hashobj__10178 = goog.object.clone(this__10174.hashobj);
(new_hashobj__10178[h__10175] = new_bucket__10177);
var temp__3971__auto____10179 = cljs.core.scan_array.call(null,2,k,new_bucket__10177);
if(cljs.core.truth_(temp__3971__auto____10179))
{var i__10180 = temp__3971__auto____10179;
(new_bucket__10177[(i__10180 + 1)] = v);
return (new cljs.core.HashMap(this__10174.meta,this__10174.count,new_hashobj__10178,null));
} else
{new_bucket__10177.push(k,v);
return (new cljs.core.HashMap(this__10174.meta,(this__10174.count + 1),new_hashobj__10178,null));
}
} else
{var new_hashobj__10181 = goog.object.clone(this__10174.hashobj);
(new_hashobj__10181[h__10175] = [k,v]);
return (new cljs.core.HashMap(this__10174.meta,(this__10174.count + 1),new_hashobj__10181,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10182 = this;
var bucket__10183 = (this__10182.hashobj[cljs.core.hash.call(null,k)]);
var i__10184 = (cljs.core.truth_(bucket__10183)?cljs.core.scan_array.call(null,2,k,bucket__10183):null);
if(cljs.core.truth_(i__10184))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10209 = null;
var G__10209__2 = (function (this_sym10185,k){
var this__10187 = this;
var this_sym10185__10188 = this;
var coll__10189 = this_sym10185__10188;
return coll__10189.cljs$core$ILookup$_lookup$arity$2(coll__10189,k);
});
var G__10209__3 = (function (this_sym10186,k,not_found){
var this__10187 = this;
var this_sym10186__10190 = this;
var coll__10191 = this_sym10186__10190;
return coll__10191.cljs$core$ILookup$_lookup$arity$3(coll__10191,k,not_found);
});
G__10209 = function(this_sym10186,k,not_found){
switch(arguments.length){
case 2:
return G__10209__2.call(this,this_sym10186,k);
case 3:
return G__10209__3.call(this,this_sym10186,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10209;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10165,args10166){
var this__10192 = this;
return this_sym10165.call.apply(this_sym10165,[this_sym10165].concat(args10166.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10193 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10194 = this;
var this__10195 = this;
return cljs.core.pr_str.call(null,this__10195);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10196 = this;
if((this__10196.count > 0))
{var hashes__10197 = cljs.core.js_keys.call(null,this__10196.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10164_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10196.hashobj[p1__10164_SHARP_])));
}),hashes__10197);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10198 = this;
return this__10198.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10199 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10200 = this;
return (new cljs.core.HashMap(meta,this__10200.count,this__10200.hashobj,this__10200.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10201 = this;
return this__10201.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10202 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10202.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10203 = this;
var h__10204 = cljs.core.hash.call(null,k);
var bucket__10205 = (this__10203.hashobj[h__10204]);
var i__10206 = (cljs.core.truth_(bucket__10205)?cljs.core.scan_array.call(null,2,k,bucket__10205):null);
if(cljs.core.not.call(null,i__10206))
{return coll;
} else
{var new_hashobj__10207 = goog.object.clone(this__10203.hashobj);
if((3 > bucket__10205.length))
{cljs.core.js_delete.call(null,new_hashobj__10207,h__10204);
} else
{var new_bucket__10208 = bucket__10205.slice();
new_bucket__10208.splice(i__10206,2);
(new_hashobj__10207[h__10204] = new_bucket__10208);
}
return (new cljs.core.HashMap(this__10203.meta,(this__10203.count - 1),new_hashobj__10207,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10210 = ks.length;
var i__10211 = 0;
var out__10212 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10211 < len__10210))
{{
var G__10213 = (i__10211 + 1);
var G__10214 = cljs.core.assoc.call(null,out__10212,(ks[i__10211]),(vs[i__10211]));
i__10211 = G__10213;
out__10212 = G__10214;
continue;
}
} else
{return out__10212;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10218 = m.arr;
var len__10219 = arr__10218.length;
var i__10220 = 0;
while(true){
if((len__10219 <= i__10220))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10218[i__10220]),k))
{return i__10220;
} else
{if("\uFDD0'else")
{{
var G__10221 = (i__10220 + 2);
i__10220 = G__10221;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10224 = this;
return (new cljs.core.TransientArrayMap({},this__10224.arr.length,this__10224.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10225 = this;
var h__2218__auto____10226 = this__10225.__hash;
if(!((h__2218__auto____10226 == null)))
{return h__2218__auto____10226;
} else
{var h__2218__auto____10227 = cljs.core.hash_imap.call(null,coll);
this__10225.__hash = h__2218__auto____10227;
return h__2218__auto____10227;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10228 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10229 = this;
var idx__10230 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10230 === -1))
{return not_found;
} else
{return (this__10229.arr[(idx__10230 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10231 = this;
var idx__10232 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10232 === -1))
{if((this__10231.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10231.meta,(this__10231.cnt + 1),(function (){var G__10233__10234 = this__10231.arr.slice();
G__10233__10234.push(k);
G__10233__10234.push(v);
return G__10233__10234;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10231.arr[(idx__10232 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10231.meta,this__10231.cnt,(function (){var G__10235__10236 = this__10231.arr.slice();
(G__10235__10236[(idx__10232 + 1)] = v);
return G__10235__10236;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10237 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10269 = null;
var G__10269__2 = (function (this_sym10238,k){
var this__10240 = this;
var this_sym10238__10241 = this;
var coll__10242 = this_sym10238__10241;
return coll__10242.cljs$core$ILookup$_lookup$arity$2(coll__10242,k);
});
var G__10269__3 = (function (this_sym10239,k,not_found){
var this__10240 = this;
var this_sym10239__10243 = this;
var coll__10244 = this_sym10239__10243;
return coll__10244.cljs$core$ILookup$_lookup$arity$3(coll__10244,k,not_found);
});
G__10269 = function(this_sym10239,k,not_found){
switch(arguments.length){
case 2:
return G__10269__2.call(this,this_sym10239,k);
case 3:
return G__10269__3.call(this,this_sym10239,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10269;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10222,args10223){
var this__10245 = this;
return this_sym10222.call.apply(this_sym10222,[this_sym10222].concat(args10223.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10246 = this;
var len__10247 = this__10246.arr.length;
var i__10248 = 0;
var init__10249 = init;
while(true){
if((i__10248 < len__10247))
{var init__10250 = f.call(null,init__10249,(this__10246.arr[i__10248]),(this__10246.arr[(i__10248 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10250))
{return cljs.core.deref.call(null,init__10250);
} else
{{
var G__10270 = (i__10248 + 2);
var G__10271 = init__10250;
i__10248 = G__10270;
init__10249 = G__10271;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10251 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10252 = this;
var this__10253 = this;
return cljs.core.pr_str.call(null,this__10253);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10254 = this;
if((this__10254.cnt > 0))
{var len__10255 = this__10254.arr.length;
var array_map_seq__10256 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10255))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10254.arr[i]),(this__10254.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10256.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10257 = this;
return this__10257.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10258 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10259 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10259.cnt,this__10259.arr,this__10259.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10260 = this;
return this__10260.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10261 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10261.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10262 = this;
var idx__10263 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10263 >= 0))
{var len__10264 = this__10262.arr.length;
var new_len__10265 = (len__10264 - 2);
if((new_len__10265 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10266 = cljs.core.make_array.call(null,new_len__10265);
var s__10267 = 0;
var d__10268 = 0;
while(true){
if((s__10267 >= len__10264))
{return (new cljs.core.PersistentArrayMap(this__10262.meta,(this__10262.cnt - 1),new_arr__10266,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10262.arr[s__10267])))
{{
var G__10272 = (s__10267 + 2);
var G__10273 = d__10268;
s__10267 = G__10272;
d__10268 = G__10273;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10266[d__10268] = (this__10262.arr[s__10267]));
(new_arr__10266[(d__10268 + 1)] = (this__10262.arr[(s__10267 + 1)]));
{
var G__10274 = (s__10267 + 2);
var G__10275 = (d__10268 + 2);
s__10267 = G__10274;
d__10268 = G__10275;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__10276 = cljs.core.count.call(null,ks);
var i__10277 = 0;
var out__10278 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10277 < len__10276))
{{
var G__10279 = (i__10277 + 1);
var G__10280 = cljs.core.assoc_BANG_.call(null,out__10278,(ks[i__10277]),(vs[i__10277]));
i__10277 = G__10279;
out__10278 = G__10280;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10278);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10281 = this;
if(cljs.core.truth_(this__10281.editable_QMARK_))
{var idx__10282 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10282 >= 0))
{(this__10281.arr[idx__10282] = (this__10281.arr[(this__10281.len - 2)]));
(this__10281.arr[(idx__10282 + 1)] = (this__10281.arr[(this__10281.len - 1)]));
var G__10283__10284 = this__10281.arr;
G__10283__10284.pop();
G__10283__10284.pop();
G__10283__10284;
this__10281.len = (this__10281.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10285 = this;
if(cljs.core.truth_(this__10285.editable_QMARK_))
{var idx__10286 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10286 === -1))
{if(((this__10285.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10285.len = (this__10285.len + 2);
this__10285.arr.push(key);
this__10285.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10285.len,this__10285.arr),key,val);
}
} else
{if((val === (this__10285.arr[(idx__10286 + 1)])))
{return tcoll;
} else
{(this__10285.arr[(idx__10286 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10287 = this;
if(cljs.core.truth_(this__10287.editable_QMARK_))
{if((function (){var G__10288__10289 = o;
if(G__10288__10289)
{if((function (){var or__3824__auto____10290 = (G__10288__10289.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10290)
{return or__3824__auto____10290;
} else
{return G__10288__10289.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10288__10289.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10288__10289);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10288__10289);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10291 = cljs.core.seq.call(null,o);
var tcoll__10292 = tcoll;
while(true){
var temp__3971__auto____10293 = cljs.core.first.call(null,es__10291);
if(cljs.core.truth_(temp__3971__auto____10293))
{var e__10294 = temp__3971__auto____10293;
{
var G__10300 = cljs.core.next.call(null,es__10291);
var G__10301 = tcoll__10292.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10292,cljs.core.key.call(null,e__10294),cljs.core.val.call(null,e__10294));
es__10291 = G__10300;
tcoll__10292 = G__10301;
continue;
}
} else
{return tcoll__10292;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10295 = this;
if(cljs.core.truth_(this__10295.editable_QMARK_))
{this__10295.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10295.len,2),this__10295.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10296 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10297 = this;
if(cljs.core.truth_(this__10297.editable_QMARK_))
{var idx__10298 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10298 === -1))
{return not_found;
} else
{return (this__10297.arr[(idx__10298 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10299 = this;
if(cljs.core.truth_(this__10299.editable_QMARK_))
{return cljs.core.quot.call(null,this__10299.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10304 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10305 = 0;
while(true){
if((i__10305 < len))
{{
var G__10306 = cljs.core.assoc_BANG_.call(null,out__10304,(arr[i__10305]),(arr[(i__10305 + 1)]));
var G__10307 = (i__10305 + 2);
out__10304 = G__10306;
i__10305 = G__10307;
continue;
}
} else
{return out__10304;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__10312__10313 = arr.slice();
(G__10312__10313[i] = a);
return G__10312__10313;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10314__10315 = arr.slice();
(G__10314__10315[i] = a);
(G__10314__10315[j] = b);
return G__10314__10315;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__10317 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10317,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10317,(2 * i),(new_arr__10317.length - (2 * i)));
return new_arr__10317;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__10320 = inode.ensure_editable(edit);
(editable__10320.arr[i] = a);
return editable__10320;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10321 = inode.ensure_editable(edit);
(editable__10321.arr[i] = a);
(editable__10321.arr[j] = b);
return editable__10321;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__10328 = arr.length;
var i__10329 = 0;
var init__10330 = init;
while(true){
if((i__10329 < len__10328))
{var init__10333 = (function (){var k__10331 = (arr[i__10329]);
if(!((k__10331 == null)))
{return f.call(null,init__10330,k__10331,(arr[(i__10329 + 1)]));
} else
{var node__10332 = (arr[(i__10329 + 1)]);
if(!((node__10332 == null)))
{return node__10332.kv_reduce(f,init__10330);
} else
{return init__10330;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10333))
{return cljs.core.deref.call(null,init__10333);
} else
{{
var G__10334 = (i__10329 + 2);
var G__10335 = init__10333;
i__10329 = G__10334;
init__10330 = G__10335;
continue;
}
}
} else
{return init__10330;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__10336 = this;
var inode__10337 = this;
if((this__10336.bitmap === bit))
{return null;
} else
{var editable__10338 = inode__10337.ensure_editable(e);
var earr__10339 = editable__10338.arr;
var len__10340 = earr__10339.length;
editable__10338.bitmap = (bit ^ editable__10338.bitmap);
cljs.core.array_copy.call(null,earr__10339,(2 * (i + 1)),earr__10339,(2 * i),(len__10340 - (2 * (i + 1))));
(earr__10339[(len__10340 - 2)] = null);
(earr__10339[(len__10340 - 1)] = null);
return editable__10338;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10341 = this;
var inode__10342 = this;
var bit__10343 = (1 << ((hash >>> shift) & 0x01f));
var idx__10344 = cljs.core.bitmap_indexed_node_index.call(null,this__10341.bitmap,bit__10343);
if(((this__10341.bitmap & bit__10343) === 0))
{var n__10345 = cljs.core.bit_count.call(null,this__10341.bitmap);
if(((2 * n__10345) < this__10341.arr.length))
{var editable__10346 = inode__10342.ensure_editable(edit);
var earr__10347 = editable__10346.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10347,(2 * idx__10344),earr__10347,(2 * (idx__10344 + 1)),(2 * (n__10345 - idx__10344)));
(earr__10347[(2 * idx__10344)] = key);
(earr__10347[((2 * idx__10344) + 1)] = val);
editable__10346.bitmap = (editable__10346.bitmap | bit__10343);
return editable__10346;
} else
{if((n__10345 >= 16))
{var nodes__10348 = cljs.core.make_array.call(null,32);
var jdx__10349 = ((hash >>> shift) & 0x01f);
(nodes__10348[jdx__10349] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10350 = 0;
var j__10351 = 0;
while(true){
if((i__10350 < 32))
{if((((this__10341.bitmap >>> i__10350) & 1) === 0))
{{
var G__10404 = (i__10350 + 1);
var G__10405 = j__10351;
i__10350 = G__10404;
j__10351 = G__10405;
continue;
}
} else
{(nodes__10348[i__10350] = ((!(((this__10341.arr[j__10351]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10341.arr[j__10351])),(this__10341.arr[j__10351]),(this__10341.arr[(j__10351 + 1)]),added_leaf_QMARK_):(this__10341.arr[(j__10351 + 1)])));
{
var G__10406 = (i__10350 + 1);
var G__10407 = (j__10351 + 2);
i__10350 = G__10406;
j__10351 = G__10407;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10345 + 1),nodes__10348));
} else
{if("\uFDD0'else")
{var new_arr__10352 = cljs.core.make_array.call(null,(2 * (n__10345 + 4)));
cljs.core.array_copy.call(null,this__10341.arr,0,new_arr__10352,0,(2 * idx__10344));
(new_arr__10352[(2 * idx__10344)] = key);
(new_arr__10352[((2 * idx__10344) + 1)] = val);
cljs.core.array_copy.call(null,this__10341.arr,(2 * idx__10344),new_arr__10352,(2 * (idx__10344 + 1)),(2 * (n__10345 - idx__10344)));
added_leaf_QMARK_.val = true;
var editable__10353 = inode__10342.ensure_editable(edit);
editable__10353.arr = new_arr__10352;
editable__10353.bitmap = (editable__10353.bitmap | bit__10343);
return editable__10353;
} else
{return null;
}
}
}
} else
{var key_or_nil__10354 = (this__10341.arr[(2 * idx__10344)]);
var val_or_node__10355 = (this__10341.arr[((2 * idx__10344) + 1)]);
if((key_or_nil__10354 == null))
{var n__10356 = val_or_node__10355.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10356 === val_or_node__10355))
{return inode__10342;
} else
{return cljs.core.edit_and_set.call(null,inode__10342,edit,((2 * idx__10344) + 1),n__10356);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10354))
{if((val === val_or_node__10355))
{return inode__10342;
} else
{return cljs.core.edit_and_set.call(null,inode__10342,edit,((2 * idx__10344) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10342,edit,(2 * idx__10344),null,((2 * idx__10344) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10354,val_or_node__10355,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10357 = this;
var inode__10358 = this;
return cljs.core.create_inode_seq.call(null,this__10357.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10359 = this;
var inode__10360 = this;
var bit__10361 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10359.bitmap & bit__10361) === 0))
{return inode__10360;
} else
{var idx__10362 = cljs.core.bitmap_indexed_node_index.call(null,this__10359.bitmap,bit__10361);
var key_or_nil__10363 = (this__10359.arr[(2 * idx__10362)]);
var val_or_node__10364 = (this__10359.arr[((2 * idx__10362) + 1)]);
if((key_or_nil__10363 == null))
{var n__10365 = val_or_node__10364.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10365 === val_or_node__10364))
{return inode__10360;
} else
{if(!((n__10365 == null)))
{return cljs.core.edit_and_set.call(null,inode__10360,edit,((2 * idx__10362) + 1),n__10365);
} else
{if((this__10359.bitmap === bit__10361))
{return null;
} else
{if("\uFDD0'else")
{return inode__10360.edit_and_remove_pair(edit,bit__10361,idx__10362);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10363))
{(removed_leaf_QMARK_[0] = true);
return inode__10360.edit_and_remove_pair(edit,bit__10361,idx__10362);
} else
{if("\uFDD0'else")
{return inode__10360;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10366 = this;
var inode__10367 = this;
if((e === this__10366.edit))
{return inode__10367;
} else
{var n__10368 = cljs.core.bit_count.call(null,this__10366.bitmap);
var new_arr__10369 = cljs.core.make_array.call(null,(((n__10368 < 0))?4:(2 * (n__10368 + 1))));
cljs.core.array_copy.call(null,this__10366.arr,0,new_arr__10369,0,(2 * n__10368));
return (new cljs.core.BitmapIndexedNode(e,this__10366.bitmap,new_arr__10369));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10370 = this;
var inode__10371 = this;
return cljs.core.inode_kv_reduce.call(null,this__10370.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10372 = this;
var inode__10373 = this;
var bit__10374 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10372.bitmap & bit__10374) === 0))
{return not_found;
} else
{var idx__10375 = cljs.core.bitmap_indexed_node_index.call(null,this__10372.bitmap,bit__10374);
var key_or_nil__10376 = (this__10372.arr[(2 * idx__10375)]);
var val_or_node__10377 = (this__10372.arr[((2 * idx__10375) + 1)]);
if((key_or_nil__10376 == null))
{return val_or_node__10377.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10376))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10376,val_or_node__10377], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__10378 = this;
var inode__10379 = this;
var bit__10380 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10378.bitmap & bit__10380) === 0))
{return inode__10379;
} else
{var idx__10381 = cljs.core.bitmap_indexed_node_index.call(null,this__10378.bitmap,bit__10380);
var key_or_nil__10382 = (this__10378.arr[(2 * idx__10381)]);
var val_or_node__10383 = (this__10378.arr[((2 * idx__10381) + 1)]);
if((key_or_nil__10382 == null))
{var n__10384 = val_or_node__10383.inode_without((shift + 5),hash,key);
if((n__10384 === val_or_node__10383))
{return inode__10379;
} else
{if(!((n__10384 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10378.bitmap,cljs.core.clone_and_set.call(null,this__10378.arr,((2 * idx__10381) + 1),n__10384)));
} else
{if((this__10378.bitmap === bit__10380))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10378.bitmap ^ bit__10380),cljs.core.remove_pair.call(null,this__10378.arr,idx__10381)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10382))
{return (new cljs.core.BitmapIndexedNode(null,(this__10378.bitmap ^ bit__10380),cljs.core.remove_pair.call(null,this__10378.arr,idx__10381)));
} else
{if("\uFDD0'else")
{return inode__10379;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10385 = this;
var inode__10386 = this;
var bit__10387 = (1 << ((hash >>> shift) & 0x01f));
var idx__10388 = cljs.core.bitmap_indexed_node_index.call(null,this__10385.bitmap,bit__10387);
if(((this__10385.bitmap & bit__10387) === 0))
{var n__10389 = cljs.core.bit_count.call(null,this__10385.bitmap);
if((n__10389 >= 16))
{var nodes__10390 = cljs.core.make_array.call(null,32);
var jdx__10391 = ((hash >>> shift) & 0x01f);
(nodes__10390[jdx__10391] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10392 = 0;
var j__10393 = 0;
while(true){
if((i__10392 < 32))
{if((((this__10385.bitmap >>> i__10392) & 1) === 0))
{{
var G__10408 = (i__10392 + 1);
var G__10409 = j__10393;
i__10392 = G__10408;
j__10393 = G__10409;
continue;
}
} else
{(nodes__10390[i__10392] = ((!(((this__10385.arr[j__10393]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10385.arr[j__10393])),(this__10385.arr[j__10393]),(this__10385.arr[(j__10393 + 1)]),added_leaf_QMARK_):(this__10385.arr[(j__10393 + 1)])));
{
var G__10410 = (i__10392 + 1);
var G__10411 = (j__10393 + 2);
i__10392 = G__10410;
j__10393 = G__10411;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10389 + 1),nodes__10390));
} else
{var new_arr__10394 = cljs.core.make_array.call(null,(2 * (n__10389 + 1)));
cljs.core.array_copy.call(null,this__10385.arr,0,new_arr__10394,0,(2 * idx__10388));
(new_arr__10394[(2 * idx__10388)] = key);
(new_arr__10394[((2 * idx__10388) + 1)] = val);
cljs.core.array_copy.call(null,this__10385.arr,(2 * idx__10388),new_arr__10394,(2 * (idx__10388 + 1)),(2 * (n__10389 - idx__10388)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10385.bitmap | bit__10387),new_arr__10394));
}
} else
{var key_or_nil__10395 = (this__10385.arr[(2 * idx__10388)]);
var val_or_node__10396 = (this__10385.arr[((2 * idx__10388) + 1)]);
if((key_or_nil__10395 == null))
{var n__10397 = val_or_node__10396.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10397 === val_or_node__10396))
{return inode__10386;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10385.bitmap,cljs.core.clone_and_set.call(null,this__10385.arr,((2 * idx__10388) + 1),n__10397)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10395))
{if((val === val_or_node__10396))
{return inode__10386;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10385.bitmap,cljs.core.clone_and_set.call(null,this__10385.arr,((2 * idx__10388) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10385.bitmap,cljs.core.clone_and_set.call(null,this__10385.arr,(2 * idx__10388),null,((2 * idx__10388) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10395,val_or_node__10396,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10398 = this;
var inode__10399 = this;
var bit__10400 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10398.bitmap & bit__10400) === 0))
{return not_found;
} else
{var idx__10401 = cljs.core.bitmap_indexed_node_index.call(null,this__10398.bitmap,bit__10400);
var key_or_nil__10402 = (this__10398.arr[(2 * idx__10401)]);
var val_or_node__10403 = (this__10398.arr[((2 * idx__10401) + 1)]);
if((key_or_nil__10402 == null))
{return val_or_node__10403.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10402))
{return val_or_node__10403;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10419 = array_node.arr;
var len__10420 = (2 * (array_node.cnt - 1));
var new_arr__10421 = cljs.core.make_array.call(null,len__10420);
var i__10422 = 0;
var j__10423 = 1;
var bitmap__10424 = 0;
while(true){
if((i__10422 < len__10420))
{if((function (){var and__3822__auto____10425 = !((i__10422 === idx));
if(and__3822__auto____10425)
{return !(((arr__10419[i__10422]) == null));
} else
{return and__3822__auto____10425;
}
})())
{(new_arr__10421[j__10423] = (arr__10419[i__10422]));
{
var G__10426 = (i__10422 + 1);
var G__10427 = (j__10423 + 2);
var G__10428 = (bitmap__10424 | (1 << i__10422));
i__10422 = G__10426;
j__10423 = G__10427;
bitmap__10424 = G__10428;
continue;
}
} else
{{
var G__10429 = (i__10422 + 1);
var G__10430 = j__10423;
var G__10431 = bitmap__10424;
i__10422 = G__10429;
j__10423 = G__10430;
bitmap__10424 = G__10431;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10424,new_arr__10421));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10432 = this;
var inode__10433 = this;
var idx__10434 = ((hash >>> shift) & 0x01f);
var node__10435 = (this__10432.arr[idx__10434]);
if((node__10435 == null))
{var editable__10436 = cljs.core.edit_and_set.call(null,inode__10433,edit,idx__10434,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10436.cnt = (editable__10436.cnt + 1);
return editable__10436;
} else
{var n__10437 = node__10435.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10437 === node__10435))
{return inode__10433;
} else
{return cljs.core.edit_and_set.call(null,inode__10433,edit,idx__10434,n__10437);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10438 = this;
var inode__10439 = this;
return cljs.core.create_array_node_seq.call(null,this__10438.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10440 = this;
var inode__10441 = this;
var idx__10442 = ((hash >>> shift) & 0x01f);
var node__10443 = (this__10440.arr[idx__10442]);
if((node__10443 == null))
{return inode__10441;
} else
{var n__10444 = node__10443.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10444 === node__10443))
{return inode__10441;
} else
{if((n__10444 == null))
{if((this__10440.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10441,edit,idx__10442);
} else
{var editable__10445 = cljs.core.edit_and_set.call(null,inode__10441,edit,idx__10442,n__10444);
editable__10445.cnt = (editable__10445.cnt - 1);
return editable__10445;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10441,edit,idx__10442,n__10444);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10446 = this;
var inode__10447 = this;
if((e === this__10446.edit))
{return inode__10447;
} else
{return (new cljs.core.ArrayNode(e,this__10446.cnt,this__10446.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10448 = this;
var inode__10449 = this;
var len__10450 = this__10448.arr.length;
var i__10451 = 0;
var init__10452 = init;
while(true){
if((i__10451 < len__10450))
{var node__10453 = (this__10448.arr[i__10451]);
if(!((node__10453 == null)))
{var init__10454 = node__10453.kv_reduce(f,init__10452);
if(cljs.core.reduced_QMARK_.call(null,init__10454))
{return cljs.core.deref.call(null,init__10454);
} else
{{
var G__10473 = (i__10451 + 1);
var G__10474 = init__10454;
i__10451 = G__10473;
init__10452 = G__10474;
continue;
}
}
} else
{return null;
}
} else
{return init__10452;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10455 = this;
var inode__10456 = this;
var idx__10457 = ((hash >>> shift) & 0x01f);
var node__10458 = (this__10455.arr[idx__10457]);
if(!((node__10458 == null)))
{return node__10458.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10459 = this;
var inode__10460 = this;
var idx__10461 = ((hash >>> shift) & 0x01f);
var node__10462 = (this__10459.arr[idx__10461]);
if(!((node__10462 == null)))
{var n__10463 = node__10462.inode_without((shift + 5),hash,key);
if((n__10463 === node__10462))
{return inode__10460;
} else
{if((n__10463 == null))
{if((this__10459.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10460,null,idx__10461);
} else
{return (new cljs.core.ArrayNode(null,(this__10459.cnt - 1),cljs.core.clone_and_set.call(null,this__10459.arr,idx__10461,n__10463)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10459.cnt,cljs.core.clone_and_set.call(null,this__10459.arr,idx__10461,n__10463)));
} else
{return null;
}
}
}
} else
{return inode__10460;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10464 = this;
var inode__10465 = this;
var idx__10466 = ((hash >>> shift) & 0x01f);
var node__10467 = (this__10464.arr[idx__10466]);
if((node__10467 == null))
{return (new cljs.core.ArrayNode(null,(this__10464.cnt + 1),cljs.core.clone_and_set.call(null,this__10464.arr,idx__10466,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10468 = node__10467.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10468 === node__10467))
{return inode__10465;
} else
{return (new cljs.core.ArrayNode(null,this__10464.cnt,cljs.core.clone_and_set.call(null,this__10464.arr,idx__10466,n__10468)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10469 = this;
var inode__10470 = this;
var idx__10471 = ((hash >>> shift) & 0x01f);
var node__10472 = (this__10469.arr[idx__10471]);
if(!((node__10472 == null)))
{return node__10472.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10477 = (2 * cnt);
var i__10478 = 0;
while(true){
if((i__10478 < lim__10477))
{if(cljs.core.key_test.call(null,key,(arr[i__10478])))
{return i__10478;
} else
{{
var G__10479 = (i__10478 + 2);
i__10478 = G__10479;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10480 = this;
var inode__10481 = this;
if((hash === this__10480.collision_hash))
{var idx__10482 = cljs.core.hash_collision_node_find_index.call(null,this__10480.arr,this__10480.cnt,key);
if((idx__10482 === -1))
{if((this__10480.arr.length > (2 * this__10480.cnt)))
{var editable__10483 = cljs.core.edit_and_set.call(null,inode__10481,edit,(2 * this__10480.cnt),key,((2 * this__10480.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10483.cnt = (editable__10483.cnt + 1);
return editable__10483;
} else
{var len__10484 = this__10480.arr.length;
var new_arr__10485 = cljs.core.make_array.call(null,(len__10484 + 2));
cljs.core.array_copy.call(null,this__10480.arr,0,new_arr__10485,0,len__10484);
(new_arr__10485[len__10484] = key);
(new_arr__10485[(len__10484 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10481.ensure_editable_array(edit,(this__10480.cnt + 1),new_arr__10485);
}
} else
{if(((this__10480.arr[(idx__10482 + 1)]) === val))
{return inode__10481;
} else
{return cljs.core.edit_and_set.call(null,inode__10481,edit,(idx__10482 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10480.collision_hash >>> shift) & 0x01f)),[null,inode__10481,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10486 = this;
var inode__10487 = this;
return cljs.core.create_inode_seq.call(null,this__10486.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10488 = this;
var inode__10489 = this;
var idx__10490 = cljs.core.hash_collision_node_find_index.call(null,this__10488.arr,this__10488.cnt,key);
if((idx__10490 === -1))
{return inode__10489;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10488.cnt === 1))
{return null;
} else
{var editable__10491 = inode__10489.ensure_editable(edit);
var earr__10492 = editable__10491.arr;
(earr__10492[idx__10490] = (earr__10492[((2 * this__10488.cnt) - 2)]));
(earr__10492[(idx__10490 + 1)] = (earr__10492[((2 * this__10488.cnt) - 1)]));
(earr__10492[((2 * this__10488.cnt) - 1)] = null);
(earr__10492[((2 * this__10488.cnt) - 2)] = null);
editable__10491.cnt = (editable__10491.cnt - 1);
return editable__10491;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10493 = this;
var inode__10494 = this;
if((e === this__10493.edit))
{return inode__10494;
} else
{var new_arr__10495 = cljs.core.make_array.call(null,(2 * (this__10493.cnt + 1)));
cljs.core.array_copy.call(null,this__10493.arr,0,new_arr__10495,0,(2 * this__10493.cnt));
return (new cljs.core.HashCollisionNode(e,this__10493.collision_hash,this__10493.cnt,new_arr__10495));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10496 = this;
var inode__10497 = this;
return cljs.core.inode_kv_reduce.call(null,this__10496.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10498 = this;
var inode__10499 = this;
var idx__10500 = cljs.core.hash_collision_node_find_index.call(null,this__10498.arr,this__10498.cnt,key);
if((idx__10500 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10498.arr[idx__10500])))
{return cljs.core.PersistentVector.fromArray([(this__10498.arr[idx__10500]),(this__10498.arr[(idx__10500 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10501 = this;
var inode__10502 = this;
var idx__10503 = cljs.core.hash_collision_node_find_index.call(null,this__10501.arr,this__10501.cnt,key);
if((idx__10503 === -1))
{return inode__10502;
} else
{if((this__10501.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10501.collision_hash,(this__10501.cnt - 1),cljs.core.remove_pair.call(null,this__10501.arr,cljs.core.quot.call(null,idx__10503,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10504 = this;
var inode__10505 = this;
if((hash === this__10504.collision_hash))
{var idx__10506 = cljs.core.hash_collision_node_find_index.call(null,this__10504.arr,this__10504.cnt,key);
if((idx__10506 === -1))
{var len__10507 = this__10504.arr.length;
var new_arr__10508 = cljs.core.make_array.call(null,(len__10507 + 2));
cljs.core.array_copy.call(null,this__10504.arr,0,new_arr__10508,0,len__10507);
(new_arr__10508[len__10507] = key);
(new_arr__10508[(len__10507 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10504.collision_hash,(this__10504.cnt + 1),new_arr__10508));
} else
{if(cljs.core._EQ_.call(null,(this__10504.arr[idx__10506]),val))
{return inode__10505;
} else
{return (new cljs.core.HashCollisionNode(null,this__10504.collision_hash,this__10504.cnt,cljs.core.clone_and_set.call(null,this__10504.arr,(idx__10506 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10504.collision_hash >>> shift) & 0x01f)),[null,inode__10505])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10509 = this;
var inode__10510 = this;
var idx__10511 = cljs.core.hash_collision_node_find_index.call(null,this__10509.arr,this__10509.cnt,key);
if((idx__10511 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10509.arr[idx__10511])))
{return (this__10509.arr[(idx__10511 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10512 = this;
var inode__10513 = this;
if((e === this__10512.edit))
{this__10512.arr = array;
this__10512.cnt = count;
return inode__10513;
} else
{return (new cljs.core.HashCollisionNode(this__10512.edit,this__10512.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10518 = cljs.core.hash.call(null,key1);
if((key1hash__10518 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10518,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10519 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10518,key1,val1,added_leaf_QMARK___10519).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10519);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10520 = cljs.core.hash.call(null,key1);
if((key1hash__10520 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10520,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10521 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10520,key1,val1,added_leaf_QMARK___10521).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10521);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10522 = this;
var h__2218__auto____10523 = this__10522.__hash;
if(!((h__2218__auto____10523 == null)))
{return h__2218__auto____10523;
} else
{var h__2218__auto____10524 = cljs.core.hash_coll.call(null,coll);
this__10522.__hash = h__2218__auto____10524;
return h__2218__auto____10524;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10525 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10526 = this;
var this__10527 = this;
return cljs.core.pr_str.call(null,this__10527);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10528 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10529 = this;
if((this__10529.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10529.nodes[this__10529.i]),(this__10529.nodes[(this__10529.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10529.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10530 = this;
if((this__10530.s == null))
{return cljs.core.create_inode_seq.call(null,this__10530.nodes,(this__10530.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10530.nodes,this__10530.i,cljs.core.next.call(null,this__10530.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10532 = this;
return (new cljs.core.NodeSeq(meta,this__10532.nodes,this__10532.i,this__10532.s,this__10532.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10533 = this;
return this__10533.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10534 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10534.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10541 = nodes.length;
var j__10542 = i;
while(true){
if((j__10542 < len__10541))
{if(!(((nodes[j__10542]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10542,null,null));
} else
{var temp__3971__auto____10543 = (nodes[(j__10542 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10543))
{var node__10544 = temp__3971__auto____10543;
var temp__3971__auto____10545 = node__10544.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10545))
{var node_seq__10546 = temp__3971__auto____10545;
return (new cljs.core.NodeSeq(null,nodes,(j__10542 + 2),node_seq__10546,null));
} else
{{
var G__10547 = (j__10542 + 2);
j__10542 = G__10547;
continue;
}
}
} else
{{
var G__10548 = (j__10542 + 2);
j__10542 = G__10548;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10549 = this;
var h__2218__auto____10550 = this__10549.__hash;
if(!((h__2218__auto____10550 == null)))
{return h__2218__auto____10550;
} else
{var h__2218__auto____10551 = cljs.core.hash_coll.call(null,coll);
this__10549.__hash = h__2218__auto____10551;
return h__2218__auto____10551;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10552 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10553 = this;
var this__10554 = this;
return cljs.core.pr_str.call(null,this__10554);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10555 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10556 = this;
return cljs.core.first.call(null,this__10556.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10557 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10557.nodes,this__10557.i,cljs.core.next.call(null,this__10557.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10558 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10559 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10559.nodes,this__10559.i,this__10559.s,this__10559.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10560 = this;
return this__10560.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10561 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10561.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10568 = nodes.length;
var j__10569 = i;
while(true){
if((j__10569 < len__10568))
{var temp__3971__auto____10570 = (nodes[j__10569]);
if(cljs.core.truth_(temp__3971__auto____10570))
{var nj__10571 = temp__3971__auto____10570;
var temp__3971__auto____10572 = nj__10571.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10572))
{var ns__10573 = temp__3971__auto____10572;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10569 + 1),ns__10573,null));
} else
{{
var G__10574 = (j__10569 + 1);
j__10569 = G__10574;
continue;
}
}
} else
{{
var G__10575 = (j__10569 + 1);
j__10569 = G__10575;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10578 = this;
return (new cljs.core.TransientHashMap({},this__10578.root,this__10578.cnt,this__10578.has_nil_QMARK_,this__10578.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10579 = this;
var h__2218__auto____10580 = this__10579.__hash;
if(!((h__2218__auto____10580 == null)))
{return h__2218__auto____10580;
} else
{var h__2218__auto____10581 = cljs.core.hash_imap.call(null,coll);
this__10579.__hash = h__2218__auto____10581;
return h__2218__auto____10581;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10582 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10583 = this;
if((k == null))
{if(this__10583.has_nil_QMARK_)
{return this__10583.nil_val;
} else
{return not_found;
}
} else
{if((this__10583.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10583.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10584 = this;
if((k == null))
{if((function (){var and__3822__auto____10585 = this__10584.has_nil_QMARK_;
if(and__3822__auto____10585)
{return (v === this__10584.nil_val);
} else
{return and__3822__auto____10585;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10584.meta,((this__10584.has_nil_QMARK_)?this__10584.cnt:(this__10584.cnt + 1)),this__10584.root,true,v,null));
}
} else
{var added_leaf_QMARK___10586 = (new cljs.core.Box(false));
var new_root__10587 = (((this__10584.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10584.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10586);
if((new_root__10587 === this__10584.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10584.meta,((added_leaf_QMARK___10586.val)?(this__10584.cnt + 1):this__10584.cnt),new_root__10587,this__10584.has_nil_QMARK_,this__10584.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10588 = this;
if((k == null))
{return this__10588.has_nil_QMARK_;
} else
{if((this__10588.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10588.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10611 = null;
var G__10611__2 = (function (this_sym10589,k){
var this__10591 = this;
var this_sym10589__10592 = this;
var coll__10593 = this_sym10589__10592;
return coll__10593.cljs$core$ILookup$_lookup$arity$2(coll__10593,k);
});
var G__10611__3 = (function (this_sym10590,k,not_found){
var this__10591 = this;
var this_sym10590__10594 = this;
var coll__10595 = this_sym10590__10594;
return coll__10595.cljs$core$ILookup$_lookup$arity$3(coll__10595,k,not_found);
});
G__10611 = function(this_sym10590,k,not_found){
switch(arguments.length){
case 2:
return G__10611__2.call(this,this_sym10590,k);
case 3:
return G__10611__3.call(this,this_sym10590,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10611;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10576,args10577){
var this__10596 = this;
return this_sym10576.call.apply(this_sym10576,[this_sym10576].concat(args10577.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10597 = this;
var init__10598 = ((this__10597.has_nil_QMARK_)?f.call(null,init,null,this__10597.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10598))
{return cljs.core.deref.call(null,init__10598);
} else
{if(!((this__10597.root == null)))
{return this__10597.root.kv_reduce(f,init__10598);
} else
{if("\uFDD0'else")
{return init__10598;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10599 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10600 = this;
var this__10601 = this;
return cljs.core.pr_str.call(null,this__10601);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10602 = this;
if((this__10602.cnt > 0))
{var s__10603 = ((!((this__10602.root == null)))?this__10602.root.inode_seq():null);
if(this__10602.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10602.nil_val], true),s__10603);
} else
{return s__10603;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10604 = this;
return this__10604.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10605 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10606 = this;
return (new cljs.core.PersistentHashMap(meta,this__10606.cnt,this__10606.root,this__10606.has_nil_QMARK_,this__10606.nil_val,this__10606.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10607 = this;
return this__10607.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10608 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10608.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10609 = this;
if((k == null))
{if(this__10609.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10609.meta,(this__10609.cnt - 1),this__10609.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10609.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10610 = this__10609.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10610 === this__10609.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10609.meta,(this__10609.cnt - 1),new_root__10610,this__10609.has_nil_QMARK_,this__10609.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10612 = ks.length;
var i__10613 = 0;
var out__10614 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10613 < len__10612))
{{
var G__10615 = (i__10613 + 1);
var G__10616 = cljs.core.assoc_BANG_.call(null,out__10614,(ks[i__10613]),(vs[i__10613]));
i__10613 = G__10615;
out__10614 = G__10616;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10614);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10617 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10618 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10619 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10620 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10621 = this;
if((k == null))
{if(this__10621.has_nil_QMARK_)
{return this__10621.nil_val;
} else
{return null;
}
} else
{if((this__10621.root == null))
{return null;
} else
{return this__10621.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10622 = this;
if((k == null))
{if(this__10622.has_nil_QMARK_)
{return this__10622.nil_val;
} else
{return not_found;
}
} else
{if((this__10622.root == null))
{return not_found;
} else
{return this__10622.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10623 = this;
if(this__10623.edit)
{return this__10623.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10624 = this;
var tcoll__10625 = this;
if(this__10624.edit)
{if((function (){var G__10626__10627 = o;
if(G__10626__10627)
{if((function (){var or__3824__auto____10628 = (G__10626__10627.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10628)
{return or__3824__auto____10628;
} else
{return G__10626__10627.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10626__10627.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10626__10627);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10626__10627);
}
})())
{return tcoll__10625.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10629 = cljs.core.seq.call(null,o);
var tcoll__10630 = tcoll__10625;
while(true){
var temp__3971__auto____10631 = cljs.core.first.call(null,es__10629);
if(cljs.core.truth_(temp__3971__auto____10631))
{var e__10632 = temp__3971__auto____10631;
{
var G__10643 = cljs.core.next.call(null,es__10629);
var G__10644 = tcoll__10630.assoc_BANG_(cljs.core.key.call(null,e__10632),cljs.core.val.call(null,e__10632));
es__10629 = G__10643;
tcoll__10630 = G__10644;
continue;
}
} else
{return tcoll__10630;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10633 = this;
var tcoll__10634 = this;
if(this__10633.edit)
{if((k == null))
{if((this__10633.nil_val === v))
{} else
{this__10633.nil_val = v;
}
if(this__10633.has_nil_QMARK_)
{} else
{this__10633.count = (this__10633.count + 1);
this__10633.has_nil_QMARK_ = true;
}
return tcoll__10634;
} else
{var added_leaf_QMARK___10635 = (new cljs.core.Box(false));
var node__10636 = (((this__10633.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10633.root).inode_assoc_BANG_(this__10633.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10635);
if((node__10636 === this__10633.root))
{} else
{this__10633.root = node__10636;
}
if(added_leaf_QMARK___10635.val)
{this__10633.count = (this__10633.count + 1);
} else
{}
return tcoll__10634;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10637 = this;
var tcoll__10638 = this;
if(this__10637.edit)
{if((k == null))
{if(this__10637.has_nil_QMARK_)
{this__10637.has_nil_QMARK_ = false;
this__10637.nil_val = null;
this__10637.count = (this__10637.count - 1);
return tcoll__10638;
} else
{return tcoll__10638;
}
} else
{if((this__10637.root == null))
{return tcoll__10638;
} else
{var removed_leaf_QMARK___10639 = (new cljs.core.Box(false));
var node__10640 = this__10637.root.inode_without_BANG_(this__10637.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10639);
if((node__10640 === this__10637.root))
{} else
{this__10637.root = node__10640;
}
if(cljs.core.truth_((removed_leaf_QMARK___10639[0])))
{this__10637.count = (this__10637.count - 1);
} else
{}
return tcoll__10638;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10641 = this;
var tcoll__10642 = this;
if(this__10641.edit)
{this__10641.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10641.count,this__10641.root,this__10641.has_nil_QMARK_,this__10641.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10647 = node;
var stack__10648 = stack;
while(true){
if(!((t__10647 == null)))
{{
var G__10649 = ((ascending_QMARK_)?t__10647.left:t__10647.right);
var G__10650 = cljs.core.conj.call(null,stack__10648,t__10647);
t__10647 = G__10649;
stack__10648 = G__10650;
continue;
}
} else
{return stack__10648;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10651 = this;
var h__2218__auto____10652 = this__10651.__hash;
if(!((h__2218__auto____10652 == null)))
{return h__2218__auto____10652;
} else
{var h__2218__auto____10653 = cljs.core.hash_coll.call(null,coll);
this__10651.__hash = h__2218__auto____10653;
return h__2218__auto____10653;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10654 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10655 = this;
var this__10656 = this;
return cljs.core.pr_str.call(null,this__10656);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10657 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10658 = this;
if((this__10658.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10658.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10659 = this;
return cljs.core.peek.call(null,this__10659.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10660 = this;
var t__10661 = cljs.core.first.call(null,this__10660.stack);
var next_stack__10662 = cljs.core.tree_map_seq_push.call(null,((this__10660.ascending_QMARK_)?t__10661.right:t__10661.left),cljs.core.next.call(null,this__10660.stack),this__10660.ascending_QMARK_);
if(!((next_stack__10662 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10662,this__10660.ascending_QMARK_,(this__10660.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10663 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10664 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10664.stack,this__10664.ascending_QMARK_,this__10664.cnt,this__10664.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10665 = this;
return this__10665.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____10667 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10667)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10667;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____10669 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10669)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10669;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10673 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10673))
{return cljs.core.deref.call(null,init__10673);
} else
{var init__10674 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10673):init__10673);
if(cljs.core.reduced_QMARK_.call(null,init__10674))
{return cljs.core.deref.call(null,init__10674);
} else
{var init__10675 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10674):init__10674);
if(cljs.core.reduced_QMARK_.call(null,init__10675))
{return cljs.core.deref.call(null,init__10675);
} else
{return init__10675;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10678 = this;
var h__2218__auto____10679 = this__10678.__hash;
if(!((h__2218__auto____10679 == null)))
{return h__2218__auto____10679;
} else
{var h__2218__auto____10680 = cljs.core.hash_coll.call(null,coll);
this__10678.__hash = h__2218__auto____10680;
return h__2218__auto____10680;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10681 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10682 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10683 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10683.key,this__10683.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10731 = null;
var G__10731__2 = (function (this_sym10684,k){
var this__10686 = this;
var this_sym10684__10687 = this;
var node__10688 = this_sym10684__10687;
return node__10688.cljs$core$ILookup$_lookup$arity$2(node__10688,k);
});
var G__10731__3 = (function (this_sym10685,k,not_found){
var this__10686 = this;
var this_sym10685__10689 = this;
var node__10690 = this_sym10685__10689;
return node__10690.cljs$core$ILookup$_lookup$arity$3(node__10690,k,not_found);
});
G__10731 = function(this_sym10685,k,not_found){
switch(arguments.length){
case 2:
return G__10731__2.call(this,this_sym10685,k);
case 3:
return G__10731__3.call(this,this_sym10685,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10731;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10676,args10677){
var this__10691 = this;
return this_sym10676.call.apply(this_sym10676,[this_sym10676].concat(args10677.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10692 = this;
return cljs.core.PersistentVector.fromArray([this__10692.key,this__10692.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10693 = this;
return this__10693.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10694 = this;
return this__10694.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10695 = this;
var node__10696 = this;
return ins.balance_right(node__10696);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10697 = this;
var node__10698 = this;
return (new cljs.core.RedNode(this__10697.key,this__10697.val,this__10697.left,this__10697.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10699 = this;
var node__10700 = this;
return cljs.core.balance_right_del.call(null,this__10699.key,this__10699.val,this__10699.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10701 = this;
var node__10702 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10703 = this;
var node__10704 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10704,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10705 = this;
var node__10706 = this;
return cljs.core.balance_left_del.call(null,this__10705.key,this__10705.val,del,this__10705.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10707 = this;
var node__10708 = this;
return ins.balance_left(node__10708);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10709 = this;
var node__10710 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10710,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10732 = null;
var G__10732__0 = (function (){
var this__10711 = this;
var this__10713 = this;
return cljs.core.pr_str.call(null,this__10713);
});
G__10732 = function(){
switch(arguments.length){
case 0:
return G__10732__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10732;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10714 = this;
var node__10715 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10715,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10716 = this;
var node__10717 = this;
return node__10717;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10718 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10719 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10720 = this;
return cljs.core.list.call(null,this__10720.key,this__10720.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10721 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10722 = this;
return this__10722.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10723 = this;
return cljs.core.PersistentVector.fromArray([this__10723.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10724 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10724.key,this__10724.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10726 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10726.key,this__10726.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10727 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10728 = this;
if((n === 0))
{return this__10728.key;
} else
{if((n === 1))
{return this__10728.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10729 = this;
if((n === 0))
{return this__10729.key;
} else
{if((n === 1))
{return this__10729.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10730 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10735 = this;
var h__2218__auto____10736 = this__10735.__hash;
if(!((h__2218__auto____10736 == null)))
{return h__2218__auto____10736;
} else
{var h__2218__auto____10737 = cljs.core.hash_coll.call(null,coll);
this__10735.__hash = h__2218__auto____10737;
return h__2218__auto____10737;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10738 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10739 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10740 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10740.key,this__10740.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10788 = null;
var G__10788__2 = (function (this_sym10741,k){
var this__10743 = this;
var this_sym10741__10744 = this;
var node__10745 = this_sym10741__10744;
return node__10745.cljs$core$ILookup$_lookup$arity$2(node__10745,k);
});
var G__10788__3 = (function (this_sym10742,k,not_found){
var this__10743 = this;
var this_sym10742__10746 = this;
var node__10747 = this_sym10742__10746;
return node__10747.cljs$core$ILookup$_lookup$arity$3(node__10747,k,not_found);
});
G__10788 = function(this_sym10742,k,not_found){
switch(arguments.length){
case 2:
return G__10788__2.call(this,this_sym10742,k);
case 3:
return G__10788__3.call(this,this_sym10742,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10788;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10733,args10734){
var this__10748 = this;
return this_sym10733.call.apply(this_sym10733,[this_sym10733].concat(args10734.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10749 = this;
return cljs.core.PersistentVector.fromArray([this__10749.key,this__10749.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10750 = this;
return this__10750.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10751 = this;
return this__10751.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10752 = this;
var node__10753 = this;
return (new cljs.core.RedNode(this__10752.key,this__10752.val,this__10752.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10754 = this;
var node__10755 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10756 = this;
var node__10757 = this;
return (new cljs.core.RedNode(this__10756.key,this__10756.val,this__10756.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10758 = this;
var node__10759 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10760 = this;
var node__10761 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10761,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10762 = this;
var node__10763 = this;
return (new cljs.core.RedNode(this__10762.key,this__10762.val,del,this__10762.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10764 = this;
var node__10765 = this;
return (new cljs.core.RedNode(this__10764.key,this__10764.val,ins,this__10764.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10766 = this;
var node__10767 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10766.left))
{return (new cljs.core.RedNode(this__10766.key,this__10766.val,this__10766.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10766.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10766.right))
{return (new cljs.core.RedNode(this__10766.right.key,this__10766.right.val,(new cljs.core.BlackNode(this__10766.key,this__10766.val,this__10766.left,this__10766.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10766.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10767,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10789 = null;
var G__10789__0 = (function (){
var this__10768 = this;
var this__10770 = this;
return cljs.core.pr_str.call(null,this__10770);
});
G__10789 = function(){
switch(arguments.length){
case 0:
return G__10789__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10789;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10771 = this;
var node__10772 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10771.right))
{return (new cljs.core.RedNode(this__10771.key,this__10771.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10771.left,null)),this__10771.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10771.left))
{return (new cljs.core.RedNode(this__10771.left.key,this__10771.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10771.left.left,null)),(new cljs.core.BlackNode(this__10771.key,this__10771.val,this__10771.left.right,this__10771.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10772,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10773 = this;
var node__10774 = this;
return (new cljs.core.BlackNode(this__10773.key,this__10773.val,this__10773.left,this__10773.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10775 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10776 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10777 = this;
return cljs.core.list.call(null,this__10777.key,this__10777.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10778 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10779 = this;
return this__10779.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10780 = this;
return cljs.core.PersistentVector.fromArray([this__10780.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10781 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10781.key,this__10781.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10782 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10783 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10783.key,this__10783.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10784 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10785 = this;
if((n === 0))
{return this__10785.key;
} else
{if((n === 1))
{return this__10785.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10786 = this;
if((n === 0))
{return this__10786.key;
} else
{if((n === 1))
{return this__10786.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10787 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10793 = comp.call(null,k,tree.key);
if((c__10793 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10793 < 0))
{var ins__10794 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10794 == null)))
{return tree.add_left(ins__10794);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10795 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10795 == null)))
{return tree.add_right(ins__10795);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10798 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10798))
{return (new cljs.core.RedNode(app__10798.key,app__10798.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10798.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10798.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10798,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10799 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10799))
{return (new cljs.core.RedNode(app__10799.key,app__10799.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10799.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10799.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10799,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10805 = comp.call(null,k,tree.key);
if((c__10805 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10805 < 0))
{var del__10806 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10807 = !((del__10806 == null));
if(or__3824__auto____10807)
{return or__3824__auto____10807;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10806,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10806,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10808 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10809 = !((del__10808 == null));
if(or__3824__auto____10809)
{return or__3824__auto____10809;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10808);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10808,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10812 = tree.key;
var c__10813 = comp.call(null,k,tk__10812);
if((c__10813 === 0))
{return tree.replace(tk__10812,v,tree.left,tree.right);
} else
{if((c__10813 < 0))
{return tree.replace(tk__10812,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10812,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10816 = this;
var h__2218__auto____10817 = this__10816.__hash;
if(!((h__2218__auto____10817 == null)))
{return h__2218__auto____10817;
} else
{var h__2218__auto____10818 = cljs.core.hash_imap.call(null,coll);
this__10816.__hash = h__2218__auto____10818;
return h__2218__auto____10818;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10819 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10820 = this;
var n__10821 = coll.entry_at(k);
if(!((n__10821 == null)))
{return n__10821.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10822 = this;
var found__10823 = [null];
var t__10824 = cljs.core.tree_map_add.call(null,this__10822.comp,this__10822.tree,k,v,found__10823);
if((t__10824 == null))
{var found_node__10825 = cljs.core.nth.call(null,found__10823,0);
if(cljs.core._EQ_.call(null,v,found_node__10825.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10822.comp,cljs.core.tree_map_replace.call(null,this__10822.comp,this__10822.tree,k,v),this__10822.cnt,this__10822.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10822.comp,t__10824.blacken(),(this__10822.cnt + 1),this__10822.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10826 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10860 = null;
var G__10860__2 = (function (this_sym10827,k){
var this__10829 = this;
var this_sym10827__10830 = this;
var coll__10831 = this_sym10827__10830;
return coll__10831.cljs$core$ILookup$_lookup$arity$2(coll__10831,k);
});
var G__10860__3 = (function (this_sym10828,k,not_found){
var this__10829 = this;
var this_sym10828__10832 = this;
var coll__10833 = this_sym10828__10832;
return coll__10833.cljs$core$ILookup$_lookup$arity$3(coll__10833,k,not_found);
});
G__10860 = function(this_sym10828,k,not_found){
switch(arguments.length){
case 2:
return G__10860__2.call(this,this_sym10828,k);
case 3:
return G__10860__3.call(this,this_sym10828,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10860;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10814,args10815){
var this__10834 = this;
return this_sym10814.call.apply(this_sym10814,[this_sym10814].concat(args10815.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10835 = this;
if(!((this__10835.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10835.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10836 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10837 = this;
if((this__10837.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10837.tree,false,this__10837.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10838 = this;
var this__10839 = this;
return cljs.core.pr_str.call(null,this__10839);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10840 = this;
var coll__10841 = this;
var t__10842 = this__10840.tree;
while(true){
if(!((t__10842 == null)))
{var c__10843 = this__10840.comp.call(null,k,t__10842.key);
if((c__10843 === 0))
{return t__10842;
} else
{if((c__10843 < 0))
{{
var G__10861 = t__10842.left;
t__10842 = G__10861;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10862 = t__10842.right;
t__10842 = G__10862;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10844 = this;
if((this__10844.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10844.tree,ascending_QMARK_,this__10844.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10845 = this;
if((this__10845.cnt > 0))
{var stack__10846 = null;
var t__10847 = this__10845.tree;
while(true){
if(!((t__10847 == null)))
{var c__10848 = this__10845.comp.call(null,k,t__10847.key);
if((c__10848 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10846,t__10847),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10848 < 0))
{{
var G__10863 = cljs.core.conj.call(null,stack__10846,t__10847);
var G__10864 = t__10847.left;
stack__10846 = G__10863;
t__10847 = G__10864;
continue;
}
} else
{{
var G__10865 = stack__10846;
var G__10866 = t__10847.right;
stack__10846 = G__10865;
t__10847 = G__10866;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10848 > 0))
{{
var G__10867 = cljs.core.conj.call(null,stack__10846,t__10847);
var G__10868 = t__10847.right;
stack__10846 = G__10867;
t__10847 = G__10868;
continue;
}
} else
{{
var G__10869 = stack__10846;
var G__10870 = t__10847.left;
stack__10846 = G__10869;
t__10847 = G__10870;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10846 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10846,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10849 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10850 = this;
return this__10850.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10851 = this;
if((this__10851.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10851.tree,true,this__10851.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10852 = this;
return this__10852.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10853 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10854 = this;
return (new cljs.core.PersistentTreeMap(this__10854.comp,this__10854.tree,this__10854.cnt,meta,this__10854.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10855 = this;
return this__10855.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10856 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10856.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10857 = this;
var found__10858 = [null];
var t__10859 = cljs.core.tree_map_remove.call(null,this__10857.comp,this__10857.tree,k,found__10858);
if((t__10859 == null))
{if((cljs.core.nth.call(null,found__10858,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10857.comp,null,0,this__10857.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10857.comp,t__10859.blacken(),(this__10857.cnt - 1),this__10857.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10873 = cljs.core.seq.call(null,keyvals);
var out__10874 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10873)
{{
var G__10875 = cljs.core.nnext.call(null,in__10873);
var G__10876 = cljs.core.assoc_BANG_.call(null,out__10874,cljs.core.first.call(null,in__10873),cljs.core.second.call(null,in__10873));
in__10873 = G__10875;
out__10874 = G__10876;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10874);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10877){
var keyvals = cljs.core.seq(arglist__10877);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10878){
var keyvals = cljs.core.seq(arglist__10878);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10882 = [];
var obj__10883 = {};
var kvs__10884 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10884)
{ks__10882.push(cljs.core.first.call(null,kvs__10884));
(obj__10883[cljs.core.first.call(null,kvs__10884)] = cljs.core.second.call(null,kvs__10884));
{
var G__10885 = cljs.core.nnext.call(null,kvs__10884);
kvs__10884 = G__10885;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10882,obj__10883);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10886){
var keyvals = cljs.core.seq(arglist__10886);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10889 = cljs.core.seq.call(null,keyvals);
var out__10890 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10889)
{{
var G__10891 = cljs.core.nnext.call(null,in__10889);
var G__10892 = cljs.core.assoc.call(null,out__10890,cljs.core.first.call(null,in__10889),cljs.core.second.call(null,in__10889));
in__10889 = G__10891;
out__10890 = G__10892;
continue;
}
} else
{return out__10890;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10893){
var keyvals = cljs.core.seq(arglist__10893);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10896 = cljs.core.seq.call(null,keyvals);
var out__10897 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10896)
{{
var G__10898 = cljs.core.nnext.call(null,in__10896);
var G__10899 = cljs.core.assoc.call(null,out__10897,cljs.core.first.call(null,in__10896),cljs.core.second.call(null,in__10896));
in__10896 = G__10898;
out__10897 = G__10899;
continue;
}
} else
{return out__10897;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10900){
var comparator = cljs.core.first(arglist__10900);
var keyvals = cljs.core.rest(arglist__10900);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__10901_SHARP_,p2__10902_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10904 = p1__10901_SHARP_;
if(cljs.core.truth_(or__3824__auto____10904))
{return or__3824__auto____10904;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10902_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10905){
var maps = cljs.core.seq(arglist__10905);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__10913 = (function (m,e){
var k__10911 = cljs.core.first.call(null,e);
var v__10912 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10911))
{return cljs.core.assoc.call(null,m,k__10911,f.call(null,cljs.core._lookup.call(null,m,k__10911,null),v__10912));
} else
{return cljs.core.assoc.call(null,m,k__10911,v__10912);
}
});
var merge2__10915 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10913,(function (){var or__3824__auto____10914 = m1;
if(cljs.core.truth_(or__3824__auto____10914))
{return or__3824__auto____10914;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10915,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10916){
var f = cljs.core.first(arglist__10916);
var maps = cljs.core.rest(arglist__10916);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10921 = cljs.core.ObjMap.EMPTY;
var keys__10922 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10922)
{var key__10923 = cljs.core.first.call(null,keys__10922);
var entry__10924 = cljs.core._lookup.call(null,map,key__10923,"\uFDD0'user/not-found");
{
var G__10925 = ((cljs.core.not_EQ_.call(null,entry__10924,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__10921,key__10923,entry__10924):ret__10921);
var G__10926 = cljs.core.next.call(null,keys__10922);
ret__10921 = G__10925;
keys__10922 = G__10926;
continue;
}
} else
{return ret__10921;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10930 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10930.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10931 = this;
var h__2218__auto____10932 = this__10931.__hash;
if(!((h__2218__auto____10932 == null)))
{return h__2218__auto____10932;
} else
{var h__2218__auto____10933 = cljs.core.hash_iset.call(null,coll);
this__10931.__hash = h__2218__auto____10933;
return h__2218__auto____10933;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10934 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10935 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10935.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10956 = null;
var G__10956__2 = (function (this_sym10936,k){
var this__10938 = this;
var this_sym10936__10939 = this;
var coll__10940 = this_sym10936__10939;
return coll__10940.cljs$core$ILookup$_lookup$arity$2(coll__10940,k);
});
var G__10956__3 = (function (this_sym10937,k,not_found){
var this__10938 = this;
var this_sym10937__10941 = this;
var coll__10942 = this_sym10937__10941;
return coll__10942.cljs$core$ILookup$_lookup$arity$3(coll__10942,k,not_found);
});
G__10956 = function(this_sym10937,k,not_found){
switch(arguments.length){
case 2:
return G__10956__2.call(this,this_sym10937,k);
case 3:
return G__10956__3.call(this,this_sym10937,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10956;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10928,args10929){
var this__10943 = this;
return this_sym10928.call.apply(this_sym10928,[this_sym10928].concat(args10929.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10944 = this;
return (new cljs.core.PersistentHashSet(this__10944.meta,cljs.core.assoc.call(null,this__10944.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10945 = this;
var this__10946 = this;
return cljs.core.pr_str.call(null,this__10946);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10947 = this;
return cljs.core.keys.call(null,this__10947.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10948 = this;
return (new cljs.core.PersistentHashSet(this__10948.meta,cljs.core.dissoc.call(null,this__10948.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10949 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10950 = this;
var and__3822__auto____10951 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10951)
{var and__3822__auto____10952 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10952)
{return cljs.core.every_QMARK_.call(null,(function (p1__10927_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10927_SHARP_);
}),other);
} else
{return and__3822__auto____10952;
}
} else
{return and__3822__auto____10951;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10953 = this;
return (new cljs.core.PersistentHashSet(meta,this__10953.hash_map,this__10953.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10954 = this;
return this__10954.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10955 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10955.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10957 = cljs.core.count.call(null,items);
var i__10958 = 0;
var out__10959 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10958 < len__10957))
{{
var G__10960 = (i__10958 + 1);
var G__10961 = cljs.core.conj_BANG_.call(null,out__10959,(items[i__10958]));
i__10958 = G__10960;
out__10959 = G__10961;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10959);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10979 = null;
var G__10979__2 = (function (this_sym10965,k){
var this__10967 = this;
var this_sym10965__10968 = this;
var tcoll__10969 = this_sym10965__10968;
if((cljs.core._lookup.call(null,this__10967.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10979__3 = (function (this_sym10966,k,not_found){
var this__10967 = this;
var this_sym10966__10970 = this;
var tcoll__10971 = this_sym10966__10970;
if((cljs.core._lookup.call(null,this__10967.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10979 = function(this_sym10966,k,not_found){
switch(arguments.length){
case 2:
return G__10979__2.call(this,this_sym10966,k);
case 3:
return G__10979__3.call(this,this_sym10966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10979;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10963,args10964){
var this__10972 = this;
return this_sym10963.call.apply(this_sym10963,[this_sym10963].concat(args10964.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10973 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10974 = this;
if((cljs.core._lookup.call(null,this__10974.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10975 = this;
return cljs.core.count.call(null,this__10975.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10976 = this;
this__10976.transient_map = cljs.core.dissoc_BANG_.call(null,this__10976.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10977 = this;
this__10977.transient_map = cljs.core.assoc_BANG_.call(null,this__10977.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10978 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10978.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10982 = this;
var h__2218__auto____10983 = this__10982.__hash;
if(!((h__2218__auto____10983 == null)))
{return h__2218__auto____10983;
} else
{var h__2218__auto____10984 = cljs.core.hash_iset.call(null,coll);
this__10982.__hash = h__2218__auto____10984;
return h__2218__auto____10984;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10985 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10986 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10986.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11012 = null;
var G__11012__2 = (function (this_sym10987,k){
var this__10989 = this;
var this_sym10987__10990 = this;
var coll__10991 = this_sym10987__10990;
return coll__10991.cljs$core$ILookup$_lookup$arity$2(coll__10991,k);
});
var G__11012__3 = (function (this_sym10988,k,not_found){
var this__10989 = this;
var this_sym10988__10992 = this;
var coll__10993 = this_sym10988__10992;
return coll__10993.cljs$core$ILookup$_lookup$arity$3(coll__10993,k,not_found);
});
G__11012 = function(this_sym10988,k,not_found){
switch(arguments.length){
case 2:
return G__11012__2.call(this,this_sym10988,k);
case 3:
return G__11012__3.call(this,this_sym10988,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11012;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10980,args10981){
var this__10994 = this;
return this_sym10980.call.apply(this_sym10980,[this_sym10980].concat(args10981.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10995 = this;
return (new cljs.core.PersistentTreeSet(this__10995.meta,cljs.core.assoc.call(null,this__10995.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10996 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10996.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10997 = this;
var this__10998 = this;
return cljs.core.pr_str.call(null,this__10998);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10999 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10999.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11000 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11000.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11001 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11002 = this;
return cljs.core._comparator.call(null,this__11002.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11003 = this;
return cljs.core.keys.call(null,this__11003.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11004 = this;
return (new cljs.core.PersistentTreeSet(this__11004.meta,cljs.core.dissoc.call(null,this__11004.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11005 = this;
return cljs.core.count.call(null,this__11005.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11006 = this;
var and__3822__auto____11007 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11007)
{var and__3822__auto____11008 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11008)
{return cljs.core.every_QMARK_.call(null,(function (p1__10962_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10962_SHARP_);
}),other);
} else
{return and__3822__auto____11008;
}
} else
{return and__3822__auto____11007;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11009 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11009.tree_map,this__11009.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11010 = this;
return this__11010.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11011 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11011.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__11017__delegate = function (keys){
var in__11015 = cljs.core.seq.call(null,keys);
var out__11016 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11015))
{{
var G__11018 = cljs.core.next.call(null,in__11015);
var G__11019 = cljs.core.conj_BANG_.call(null,out__11016,cljs.core.first.call(null,in__11015));
in__11015 = G__11018;
out__11016 = G__11019;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11016);
}
break;
}
};
var G__11017 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11017__delegate.call(this, keys);
};
G__11017.cljs$lang$maxFixedArity = 0;
G__11017.cljs$lang$applyTo = (function (arglist__11020){
var keys = cljs.core.seq(arglist__11020);;
return G__11017__delegate(keys);
});
G__11017.cljs$lang$arity$variadic = G__11017__delegate;
return G__11017;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__11021){
var keys = cljs.core.seq(arglist__11021);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__11023){
var comparator = cljs.core.first(arglist__11023);
var keys = cljs.core.rest(arglist__11023);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__11029 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11030 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11030))
{var e__11031 = temp__3971__auto____11030;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11031));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11029,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11022_SHARP_){
var temp__3971__auto____11032 = cljs.core.find.call(null,smap,p1__11022_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11032))
{var e__11033 = temp__3971__auto____11032;
return cljs.core.second.call(null,e__11033);
} else
{return p1__11022_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11063 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11056,seen){
while(true){
var vec__11057__11058 = p__11056;
var f__11059 = cljs.core.nth.call(null,vec__11057__11058,0,null);
var xs__11060 = vec__11057__11058;
var temp__3974__auto____11061 = cljs.core.seq.call(null,xs__11060);
if(temp__3974__auto____11061)
{var s__11062 = temp__3974__auto____11061;
if(cljs.core.contains_QMARK_.call(null,seen,f__11059))
{{
var G__11064 = cljs.core.rest.call(null,s__11062);
var G__11065 = seen;
p__11056 = G__11064;
seen = G__11065;
continue;
}
} else
{return cljs.core.cons.call(null,f__11059,step.call(null,cljs.core.rest.call(null,s__11062),cljs.core.conj.call(null,seen,f__11059)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11063.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11068 = cljs.core.PersistentVector.EMPTY;
var s__11069 = s;
while(true){
if(cljs.core.next.call(null,s__11069))
{{
var G__11070 = cljs.core.conj.call(null,ret__11068,cljs.core.first.call(null,s__11069));
var G__11071 = cljs.core.next.call(null,s__11069);
ret__11068 = G__11070;
s__11069 = G__11071;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11068);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____11074 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11074)
{return or__3824__auto____11074;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11075 = x.lastIndexOf("/");
if((i__11075 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11075 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____11078 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11078)
{return or__3824__auto____11078;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11079 = x.lastIndexOf("/");
if((i__11079 > -1))
{return cljs.core.subs.call(null,x,2,i__11079);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__11086 = cljs.core.ObjMap.EMPTY;
var ks__11087 = cljs.core.seq.call(null,keys);
var vs__11088 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11089 = ks__11087;
if(and__3822__auto____11089)
{return vs__11088;
} else
{return and__3822__auto____11089;
}
})())
{{
var G__11090 = cljs.core.assoc.call(null,map__11086,cljs.core.first.call(null,ks__11087),cljs.core.first.call(null,vs__11088));
var G__11091 = cljs.core.next.call(null,ks__11087);
var G__11092 = cljs.core.next.call(null,vs__11088);
map__11086 = G__11090;
ks__11087 = G__11091;
vs__11088 = G__11092;
continue;
}
} else
{return map__11086;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__11095__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11080_SHARP_,p2__11081_SHARP_){
return max_key.call(null,k,p1__11080_SHARP_,p2__11081_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11095 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11095__delegate.call(this, k, x, y, more);
};
G__11095.cljs$lang$maxFixedArity = 3;
G__11095.cljs$lang$applyTo = (function (arglist__11096){
var k = cljs.core.first(arglist__11096);
var x = cljs.core.first(cljs.core.next(arglist__11096));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11096)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11096)));
return G__11095__delegate(k, x, y, more);
});
G__11095.cljs$lang$arity$variadic = G__11095__delegate;
return G__11095;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__11097__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11093_SHARP_,p2__11094_SHARP_){
return min_key.call(null,k,p1__11093_SHARP_,p2__11094_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11097 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11097__delegate.call(this, k, x, y, more);
};
G__11097.cljs$lang$maxFixedArity = 3;
G__11097.cljs$lang$applyTo = (function (arglist__11098){
var k = cljs.core.first(arglist__11098);
var x = cljs.core.first(cljs.core.next(arglist__11098));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11098)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11098)));
return G__11097__delegate(k, x, y, more);
});
G__11097.cljs$lang$arity$variadic = G__11097__delegate;
return G__11097;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11101 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11101)
{var s__11102 = temp__3974__auto____11101;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11102),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11102)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11105 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11105)
{var s__11106 = temp__3974__auto____11105;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11106))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11106),take_while.call(null,pred,cljs.core.rest.call(null,s__11106)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__11108 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11108.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__11120 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11121 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11121))
{var vec__11122__11123 = temp__3974__auto____11121;
var e__11124 = cljs.core.nth.call(null,vec__11122__11123,0,null);
var s__11125 = vec__11122__11123;
if(cljs.core.truth_(include__11120.call(null,e__11124)))
{return s__11125;
} else
{return cljs.core.next.call(null,s__11125);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11120,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11126 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11126))
{var vec__11127__11128 = temp__3974__auto____11126;
var e__11129 = cljs.core.nth.call(null,vec__11127__11128,0,null);
var s__11130 = vec__11127__11128;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11129))?s__11130:cljs.core.next.call(null,s__11130)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__11142 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11143 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11143))
{var vec__11144__11145 = temp__3974__auto____11143;
var e__11146 = cljs.core.nth.call(null,vec__11144__11145,0,null);
var s__11147 = vec__11144__11145;
if(cljs.core.truth_(include__11142.call(null,e__11146)))
{return s__11147;
} else
{return cljs.core.next.call(null,s__11147);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11142,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11148 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11148))
{var vec__11149__11150 = temp__3974__auto____11148;
var e__11151 = cljs.core.nth.call(null,vec__11149__11150,0,null);
var s__11152 = vec__11149__11150;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11151))?s__11152:cljs.core.next.call(null,s__11152)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__11153 = this;
var h__2218__auto____11154 = this__11153.__hash;
if(!((h__2218__auto____11154 == null)))
{return h__2218__auto____11154;
} else
{var h__2218__auto____11155 = cljs.core.hash_coll.call(null,rng);
this__11153.__hash = h__2218__auto____11155;
return h__2218__auto____11155;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11156 = this;
if((this__11156.step > 0))
{if(((this__11156.start + this__11156.step) < this__11156.end))
{return (new cljs.core.Range(this__11156.meta,(this__11156.start + this__11156.step),this__11156.end,this__11156.step,null));
} else
{return null;
}
} else
{if(((this__11156.start + this__11156.step) > this__11156.end))
{return (new cljs.core.Range(this__11156.meta,(this__11156.start + this__11156.step),this__11156.end,this__11156.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11157 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11158 = this;
var this__11159 = this;
return cljs.core.pr_str.call(null,this__11159);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11160 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11161 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11162 = this;
if((this__11162.step > 0))
{if((this__11162.start < this__11162.end))
{return rng;
} else
{return null;
}
} else
{if((this__11162.start > this__11162.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11163 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11163.end - this__11163.start) / this__11163.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11164 = this;
return this__11164.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11165 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11165.meta,(this__11165.start + this__11165.step),this__11165.end,this__11165.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11166 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11167 = this;
return (new cljs.core.Range(meta,this__11167.start,this__11167.end,this__11167.step,this__11167.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11168 = this;
return this__11168.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11169 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11169.start + (n * this__11169.step));
} else
{if((function (){var and__3822__auto____11170 = (this__11169.start > this__11169.end);
if(and__3822__auto____11170)
{return (this__11169.step === 0);
} else
{return and__3822__auto____11170;
}
})())
{return this__11169.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11171 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11171.start + (n * this__11171.step));
} else
{if((function (){var and__3822__auto____11172 = (this__11171.start > this__11171.end);
if(and__3822__auto____11172)
{return (this__11171.step === 0);
} else
{return and__3822__auto____11172;
}
})())
{return this__11171.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11173 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11173.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11176 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11176)
{var s__11177 = temp__3974__auto____11176;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11177),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11177)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11184 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11184)
{var s__11185 = temp__3974__auto____11184;
var fst__11186 = cljs.core.first.call(null,s__11185);
var fv__11187 = f.call(null,fst__11186);
var run__11188 = cljs.core.cons.call(null,fst__11186,cljs.core.take_while.call(null,(function (p1__11178_SHARP_){
return cljs.core._EQ_.call(null,fv__11187,f.call(null,p1__11178_SHARP_));
}),cljs.core.next.call(null,s__11185)));
return cljs.core.cons.call(null,run__11188,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11188),s__11185))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____11203 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11203)
{var s__11204 = temp__3971__auto____11203;
return reductions.call(null,f,cljs.core.first.call(null,s__11204),cljs.core.rest.call(null,s__11204));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11205 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11205)
{var s__11206 = temp__3974__auto____11205;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11206)),cljs.core.rest.call(null,s__11206));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__11209 = null;
var G__11209__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11209__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11209__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11209__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11209__4 = (function() { 
var G__11210__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11210__delegate.call(this, x, y, z, args);
};
G__11210.cljs$lang$maxFixedArity = 3;
G__11210.cljs$lang$applyTo = (function (arglist__11211){
var x = cljs.core.first(arglist__11211);
var y = cljs.core.first(cljs.core.next(arglist__11211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11211)));
return G__11210__delegate(x, y, z, args);
});
G__11210.cljs$lang$arity$variadic = G__11210__delegate;
return G__11210;
})()
;
G__11209 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11209__0.call(this);
case 1:
return G__11209__1.call(this,x);
case 2:
return G__11209__2.call(this,x,y);
case 3:
return G__11209__3.call(this,x,y,z);
default:
return G__11209__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11209.cljs$lang$maxFixedArity = 3;
G__11209.cljs$lang$applyTo = G__11209__4.cljs$lang$applyTo;
return G__11209;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11212 = null;
var G__11212__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11212__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11212__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11212__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11212__4 = (function() { 
var G__11213__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11213__delegate.call(this, x, y, z, args);
};
G__11213.cljs$lang$maxFixedArity = 3;
G__11213.cljs$lang$applyTo = (function (arglist__11214){
var x = cljs.core.first(arglist__11214);
var y = cljs.core.first(cljs.core.next(arglist__11214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11214)));
return G__11213__delegate(x, y, z, args);
});
G__11213.cljs$lang$arity$variadic = G__11213__delegate;
return G__11213;
})()
;
G__11212 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11212__0.call(this);
case 1:
return G__11212__1.call(this,x);
case 2:
return G__11212__2.call(this,x,y);
case 3:
return G__11212__3.call(this,x,y,z);
default:
return G__11212__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11212.cljs$lang$maxFixedArity = 3;
G__11212.cljs$lang$applyTo = G__11212__4.cljs$lang$applyTo;
return G__11212;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11215 = null;
var G__11215__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11215__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11215__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11215__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11215__4 = (function() { 
var G__11216__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11216 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11216__delegate.call(this, x, y, z, args);
};
G__11216.cljs$lang$maxFixedArity = 3;
G__11216.cljs$lang$applyTo = (function (arglist__11217){
var x = cljs.core.first(arglist__11217);
var y = cljs.core.first(cljs.core.next(arglist__11217));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11217)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11217)));
return G__11216__delegate(x, y, z, args);
});
G__11216.cljs$lang$arity$variadic = G__11216__delegate;
return G__11216;
})()
;
G__11215 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11215__0.call(this);
case 1:
return G__11215__1.call(this,x);
case 2:
return G__11215__2.call(this,x,y);
case 3:
return G__11215__3.call(this,x,y,z);
default:
return G__11215__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11215.cljs$lang$maxFixedArity = 3;
G__11215.cljs$lang$applyTo = G__11215__4.cljs$lang$applyTo;
return G__11215;
})()
});
var juxt__4 = (function() { 
var G__11218__delegate = function (f,g,h,fs){
var fs__11208 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11219 = null;
var G__11219__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11189_SHARP_,p2__11190_SHARP_){
return cljs.core.conj.call(null,p1__11189_SHARP_,p2__11190_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11208);
});
var G__11219__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11191_SHARP_,p2__11192_SHARP_){
return cljs.core.conj.call(null,p1__11191_SHARP_,p2__11192_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11208);
});
var G__11219__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11193_SHARP_,p2__11194_SHARP_){
return cljs.core.conj.call(null,p1__11193_SHARP_,p2__11194_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11208);
});
var G__11219__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11195_SHARP_,p2__11196_SHARP_){
return cljs.core.conj.call(null,p1__11195_SHARP_,p2__11196_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11208);
});
var G__11219__4 = (function() { 
var G__11220__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11197_SHARP_,p2__11198_SHARP_){
return cljs.core.conj.call(null,p1__11197_SHARP_,cljs.core.apply.call(null,p2__11198_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11208);
};
var G__11220 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11220__delegate.call(this, x, y, z, args);
};
G__11220.cljs$lang$maxFixedArity = 3;
G__11220.cljs$lang$applyTo = (function (arglist__11221){
var x = cljs.core.first(arglist__11221);
var y = cljs.core.first(cljs.core.next(arglist__11221));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11221)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11221)));
return G__11220__delegate(x, y, z, args);
});
G__11220.cljs$lang$arity$variadic = G__11220__delegate;
return G__11220;
})()
;
G__11219 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11219__0.call(this);
case 1:
return G__11219__1.call(this,x);
case 2:
return G__11219__2.call(this,x,y);
case 3:
return G__11219__3.call(this,x,y,z);
default:
return G__11219__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11219.cljs$lang$maxFixedArity = 3;
G__11219.cljs$lang$applyTo = G__11219__4.cljs$lang$applyTo;
return G__11219;
})()
};
var G__11218 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11218__delegate.call(this, f, g, h, fs);
};
G__11218.cljs$lang$maxFixedArity = 3;
G__11218.cljs$lang$applyTo = (function (arglist__11222){
var f = cljs.core.first(arglist__11222);
var g = cljs.core.first(cljs.core.next(arglist__11222));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11222)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11222)));
return G__11218__delegate(f, g, h, fs);
});
G__11218.cljs$lang$arity$variadic = G__11218__delegate;
return G__11218;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__11225 = cljs.core.next.call(null,coll);
coll = G__11225;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11224 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11224)
{return (n > 0);
} else
{return and__3822__auto____11224;
}
})()))
{{
var G__11226 = (n - 1);
var G__11227 = cljs.core.next.call(null,coll);
n = G__11226;
coll = G__11227;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__11229 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11229),s))
{if((cljs.core.count.call(null,matches__11229) === 1))
{return cljs.core.first.call(null,matches__11229);
} else
{return cljs.core.vec.call(null,matches__11229);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__11231 = re.exec(s);
if((matches__11231 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11231) === 1))
{return cljs.core.first.call(null,matches__11231);
} else
{return cljs.core.vec.call(null,matches__11231);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11236 = cljs.core.re_find.call(null,re,s);
var match_idx__11237 = s.search(re);
var match_str__11238 = ((cljs.core.coll_QMARK_.call(null,match_data__11236))?cljs.core.first.call(null,match_data__11236):match_data__11236);
var post_match__11239 = cljs.core.subs.call(null,s,(match_idx__11237 + cljs.core.count.call(null,match_str__11238)));
if(cljs.core.truth_(match_data__11236))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11236,re_seq.call(null,re,post_match__11239));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11246__11247 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11248 = cljs.core.nth.call(null,vec__11246__11247,0,null);
var flags__11249 = cljs.core.nth.call(null,vec__11246__11247,1,null);
var pattern__11250 = cljs.core.nth.call(null,vec__11246__11247,2,null);
return (new RegExp(pattern__11250,flags__11249));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11240_SHARP_){
return print_one.call(null,p1__11240_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11260 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11260))
{var and__3822__auto____11264 = (function (){var G__11261__11262 = obj;
if(G__11261__11262)
{if((function (){var or__3824__auto____11263 = (G__11261__11262.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11263)
{return or__3824__auto____11263;
} else
{return G__11261__11262.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11261__11262.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11261__11262);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11261__11262);
}
})();
if(cljs.core.truth_(and__3822__auto____11264))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11264;
}
} else
{return and__3822__auto____11260;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11265 = !((obj == null));
if(and__3822__auto____11265)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11265;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11266__11267 = obj;
if(G__11266__11267)
{if((function (){var or__3824__auto____11268 = (G__11266__11267.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11268)
{return or__3824__auto____11268;
} else
{return G__11266__11267.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11266__11267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11266__11267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11266__11267);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11288 = (new goog.string.StringBuffer());
var G__11289__11290 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11289__11290)
{var string__11291 = cljs.core.first.call(null,G__11289__11290);
var G__11289__11292 = G__11289__11290;
while(true){
sb__11288.append(string__11291);
var temp__3974__auto____11293 = cljs.core.next.call(null,G__11289__11292);
if(temp__3974__auto____11293)
{var G__11289__11294 = temp__3974__auto____11293;
{
var G__11307 = cljs.core.first.call(null,G__11289__11294);
var G__11308 = G__11289__11294;
string__11291 = G__11307;
G__11289__11292 = G__11308;
continue;
}
} else
{}
break;
}
} else
{}
var G__11295__11296 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11295__11296)
{var obj__11297 = cljs.core.first.call(null,G__11295__11296);
var G__11295__11298 = G__11295__11296;
while(true){
sb__11288.append(" ");
var G__11299__11300 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11297,opts));
if(G__11299__11300)
{var string__11301 = cljs.core.first.call(null,G__11299__11300);
var G__11299__11302 = G__11299__11300;
while(true){
sb__11288.append(string__11301);
var temp__3974__auto____11303 = cljs.core.next.call(null,G__11299__11302);
if(temp__3974__auto____11303)
{var G__11299__11304 = temp__3974__auto____11303;
{
var G__11309 = cljs.core.first.call(null,G__11299__11304);
var G__11310 = G__11299__11304;
string__11301 = G__11309;
G__11299__11302 = G__11310;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11305 = cljs.core.next.call(null,G__11295__11298);
if(temp__3974__auto____11305)
{var G__11295__11306 = temp__3974__auto____11305;
{
var G__11311 = cljs.core.first.call(null,G__11295__11306);
var G__11312 = G__11295__11306;
obj__11297 = G__11311;
G__11295__11298 = G__11312;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11288;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__11314 = cljs.core.pr_sb.call(null,objs,opts);
sb__11314.append("\n");
return [cljs.core.str(sb__11314)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11333__11334 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11333__11334)
{var string__11335 = cljs.core.first.call(null,G__11333__11334);
var G__11333__11336 = G__11333__11334;
while(true){
cljs.core.string_print.call(null,string__11335);
var temp__3974__auto____11337 = cljs.core.next.call(null,G__11333__11336);
if(temp__3974__auto____11337)
{var G__11333__11338 = temp__3974__auto____11337;
{
var G__11351 = cljs.core.first.call(null,G__11333__11338);
var G__11352 = G__11333__11338;
string__11335 = G__11351;
G__11333__11336 = G__11352;
continue;
}
} else
{}
break;
}
} else
{}
var G__11339__11340 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11339__11340)
{var obj__11341 = cljs.core.first.call(null,G__11339__11340);
var G__11339__11342 = G__11339__11340;
while(true){
cljs.core.string_print.call(null," ");
var G__11343__11344 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11341,opts));
if(G__11343__11344)
{var string__11345 = cljs.core.first.call(null,G__11343__11344);
var G__11343__11346 = G__11343__11344;
while(true){
cljs.core.string_print.call(null,string__11345);
var temp__3974__auto____11347 = cljs.core.next.call(null,G__11343__11346);
if(temp__3974__auto____11347)
{var G__11343__11348 = temp__3974__auto____11347;
{
var G__11353 = cljs.core.first.call(null,G__11343__11348);
var G__11354 = G__11343__11348;
string__11345 = G__11353;
G__11343__11346 = G__11354;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11349 = cljs.core.next.call(null,G__11339__11342);
if(temp__3974__auto____11349)
{var G__11339__11350 = temp__3974__auto____11349;
{
var G__11355 = cljs.core.first.call(null,G__11339__11350);
var G__11356 = G__11339__11350;
obj__11341 = G__11355;
G__11339__11342 = G__11356;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__11357){
var objs = cljs.core.seq(arglist__11357);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__11358){
var objs = cljs.core.seq(arglist__11358);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__11359){
var objs = cljs.core.seq(arglist__11359);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__11360){
var objs = cljs.core.seq(arglist__11360);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__11361){
var objs = cljs.core.seq(arglist__11361);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__11362){
var objs = cljs.core.seq(arglist__11362);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__11363){
var objs = cljs.core.seq(arglist__11363);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__11364){
var objs = cljs.core.seq(arglist__11364);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__11365){
var fmt = cljs.core.first(arglist__11365);
var args = cljs.core.rest(arglist__11365);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11366 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11366,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11367 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11367,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11368 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11368,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11369 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11369))
{var nspc__11370 = temp__3974__auto____11369;
return [cljs.core.str(nspc__11370),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11371 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11371))
{var nspc__11372 = temp__3974__auto____11371;
return [cljs.core.str(nspc__11372),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11373 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11373,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__11375 = (function (n,len){
var ns__11374 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11374) < len))
{{
var G__11377 = [cljs.core.str("0"),cljs.core.str(ns__11374)].join('');
ns__11374 = G__11377;
continue;
}
} else
{return ns__11374;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11375.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11375.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11375.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11375.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11375.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11375.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11376 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11376,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11378 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11379 = this;
var G__11380__11381 = cljs.core.seq.call(null,this__11379.watches);
if(G__11380__11381)
{var G__11383__11385 = cljs.core.first.call(null,G__11380__11381);
var vec__11384__11386 = G__11383__11385;
var key__11387 = cljs.core.nth.call(null,vec__11384__11386,0,null);
var f__11388 = cljs.core.nth.call(null,vec__11384__11386,1,null);
var G__11380__11389 = G__11380__11381;
var G__11383__11390 = G__11383__11385;
var G__11380__11391 = G__11380__11389;
while(true){
var vec__11392__11393 = G__11383__11390;
var key__11394 = cljs.core.nth.call(null,vec__11392__11393,0,null);
var f__11395 = cljs.core.nth.call(null,vec__11392__11393,1,null);
var G__11380__11396 = G__11380__11391;
f__11395.call(null,key__11394,this$,oldval,newval);
var temp__3974__auto____11397 = cljs.core.next.call(null,G__11380__11396);
if(temp__3974__auto____11397)
{var G__11380__11398 = temp__3974__auto____11397;
{
var G__11405 = cljs.core.first.call(null,G__11380__11398);
var G__11406 = G__11380__11398;
G__11383__11390 = G__11405;
G__11380__11391 = G__11406;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__11399 = this;
return this$.watches = cljs.core.assoc.call(null,this__11399.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11400 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11400.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11401 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11401.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11402 = this;
return this__11402.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11403 = this;
return this__11403.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11404 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11418__delegate = function (x,p__11407){
var map__11413__11414 = p__11407;
var map__11413__11415 = ((cljs.core.seq_QMARK_.call(null,map__11413__11414))?cljs.core.apply.call(null,cljs.core.hash_map,map__11413__11414):map__11413__11414);
var validator__11416 = cljs.core._lookup.call(null,map__11413__11415,"\uFDD0'validator",null);
var meta__11417 = cljs.core._lookup.call(null,map__11413__11415,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11417,validator__11416,null));
};
var G__11418 = function (x,var_args){
var p__11407 = null;
if (goog.isDef(var_args)) {
  p__11407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11418__delegate.call(this, x, p__11407);
};
G__11418.cljs$lang$maxFixedArity = 1;
G__11418.cljs$lang$applyTo = (function (arglist__11419){
var x = cljs.core.first(arglist__11419);
var p__11407 = cljs.core.rest(arglist__11419);
return G__11418__delegate(x, p__11407);
});
G__11418.cljs$lang$arity$variadic = G__11418__delegate;
return G__11418;
})()
;
atom = function(x,var_args){
var p__11407 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____11423 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11423))
{var validate__11424 = temp__3974__auto____11423;
if(cljs.core.truth_(validate__11424.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11425 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11425,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__11426__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11426 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11426__delegate.call(this, a, f, x, y, z, more);
};
G__11426.cljs$lang$maxFixedArity = 5;
G__11426.cljs$lang$applyTo = (function (arglist__11427){
var a = cljs.core.first(arglist__11427);
var f = cljs.core.first(cljs.core.next(arglist__11427));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11427)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11427))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11427)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11427)))));
return G__11426__delegate(a, f, x, y, z, more);
});
G__11426.cljs$lang$arity$variadic = G__11426__delegate;
return G__11426;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11428){
var iref = cljs.core.first(arglist__11428);
var f = cljs.core.first(cljs.core.next(arglist__11428));
var args = cljs.core.rest(cljs.core.next(arglist__11428));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__11429 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11429.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11430 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11430.state,(function (p__11431){
var map__11432__11433 = p__11431;
var map__11432__11434 = ((cljs.core.seq_QMARK_.call(null,map__11432__11433))?cljs.core.apply.call(null,cljs.core.hash_map,map__11432__11433):map__11432__11433);
var curr_state__11435 = map__11432__11434;
var done__11436 = cljs.core._lookup.call(null,map__11432__11434,"\uFDD0'done",null);
if(cljs.core.truth_(done__11436))
{return curr_state__11435;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11430.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11457__11458 = options;
var map__11457__11459 = ((cljs.core.seq_QMARK_.call(null,map__11457__11458))?cljs.core.apply.call(null,cljs.core.hash_map,map__11457__11458):map__11457__11458);
var keywordize_keys__11460 = cljs.core._lookup.call(null,map__11457__11459,"\uFDD0'keywordize-keys",null);
var keyfn__11461 = (cljs.core.truth_(keywordize_keys__11460)?cljs.core.keyword:cljs.core.str);
var f__11476 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2488__auto____11475 = (function iter__11469(s__11470){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11470__11473 = s__11470;
while(true){
if(cljs.core.seq.call(null,s__11470__11473))
{var k__11474 = cljs.core.first.call(null,s__11470__11473);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11461.call(null,k__11474),thisfn.call(null,(x[k__11474]))], true),iter__11469.call(null,cljs.core.rest.call(null,s__11470__11473)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2488__auto____11475.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__11476.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11477){
var x = cljs.core.first(arglist__11477);
var options = cljs.core.rest(arglist__11477);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11482 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11486__delegate = function (args){
var temp__3971__auto____11483 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11482),args,null);
if(cljs.core.truth_(temp__3971__auto____11483))
{var v__11484 = temp__3971__auto____11483;
return v__11484;
} else
{var ret__11485 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11482,cljs.core.assoc,args,ret__11485);
return ret__11485;
}
};
var G__11486 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11486__delegate.call(this, args);
};
G__11486.cljs$lang$maxFixedArity = 0;
G__11486.cljs$lang$applyTo = (function (arglist__11487){
var args = cljs.core.seq(arglist__11487);;
return G__11486__delegate(args);
});
G__11486.cljs$lang$arity$variadic = G__11486__delegate;
return G__11486;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11489 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11489))
{{
var G__11490 = ret__11489;
f = G__11490;
continue;
}
} else
{return ret__11489;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11491__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11491 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11491__delegate.call(this, f, args);
};
G__11491.cljs$lang$maxFixedArity = 1;
G__11491.cljs$lang$applyTo = (function (arglist__11492){
var f = cljs.core.first(arglist__11492);
var args = cljs.core.rest(arglist__11492);
return G__11491__delegate(f, args);
});
G__11491.cljs$lang$arity$variadic = G__11491__delegate;
return G__11491;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11494 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11494,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11494,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____11503 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11503)
{return or__3824__auto____11503;
} else
{var or__3824__auto____11504 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11504)
{return or__3824__auto____11504;
} else
{var and__3822__auto____11505 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11505)
{var and__3822__auto____11506 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11506)
{var and__3822__auto____11507 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11507)
{var ret__11508 = true;
var i__11509 = 0;
while(true){
if((function (){var or__3824__auto____11510 = cljs.core.not.call(null,ret__11508);
if(or__3824__auto____11510)
{return or__3824__auto____11510;
} else
{return (i__11509 === cljs.core.count.call(null,parent));
}
})())
{return ret__11508;
} else
{{
var G__11511 = isa_QMARK_.call(null,h,child.call(null,i__11509),parent.call(null,i__11509));
var G__11512 = (i__11509 + 1);
ret__11508 = G__11511;
i__11509 = G__11512;
continue;
}
}
break;
}
} else
{return and__3822__auto____11507;
}
} else
{return and__3822__auto____11506;
}
} else
{return and__3822__auto____11505;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__11521 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11522 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11523 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11524 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11525 = ((cljs.core.contains_QMARK_.call(null,tp__11521.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11523.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11523.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11521,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11524.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11522,parent,ta__11523),"\uFDD0'descendants":tf__11524.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11523,tag,td__11522)});
})());
if(cljs.core.truth_(or__3824__auto____11525))
{return or__3824__auto____11525;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11530 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11531 = (cljs.core.truth_(parentMap__11530.call(null,tag))?cljs.core.disj.call(null,parentMap__11530.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11532 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11531))?cljs.core.assoc.call(null,parentMap__11530,tag,childsParents__11531):cljs.core.dissoc.call(null,parentMap__11530,tag));
var deriv_seq__11533 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11513_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11513_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11513_SHARP_),cljs.core.second.call(null,p1__11513_SHARP_)));
}),cljs.core.seq.call(null,newParents__11532)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11530.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11514_SHARP_,p2__11515_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11514_SHARP_,p2__11515_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11533));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11541 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11543 = (cljs.core.truth_((function (){var and__3822__auto____11542 = xprefs__11541;
if(cljs.core.truth_(and__3822__auto____11542))
{return xprefs__11541.call(null,y);
} else
{return and__3822__auto____11542;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11543))
{return or__3824__auto____11543;
} else
{var or__3824__auto____11545 = (function (){var ps__11544 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11544) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11544),prefer_table)))
{} else
{}
{
var G__11548 = cljs.core.rest.call(null,ps__11544);
ps__11544 = G__11548;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11545))
{return or__3824__auto____11545;
} else
{var or__3824__auto____11547 = (function (){var ps__11546 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11546) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11546),y,prefer_table)))
{} else
{}
{
var G__11549 = cljs.core.rest.call(null,ps__11546);
ps__11546 = G__11549;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11547))
{return or__3824__auto____11547;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11551 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11551))
{return or__3824__auto____11551;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11569 = cljs.core.reduce.call(null,(function (be,p__11561){
var vec__11562__11563 = p__11561;
var k__11564 = cljs.core.nth.call(null,vec__11562__11563,0,null);
var ___11565 = cljs.core.nth.call(null,vec__11562__11563,1,null);
var e__11566 = vec__11562__11563;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11564))
{var be2__11568 = (cljs.core.truth_((function (){var or__3824__auto____11567 = (be == null);
if(or__3824__auto____11567)
{return or__3824__auto____11567;
} else
{return cljs.core.dominates.call(null,k__11564,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11566:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11568),k__11564,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11564),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11568)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11568;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11569))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11569));
return cljs.core.second.call(null,best_entry__11569);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____11574 = mf;
if(and__3822__auto____11574)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11574;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2389__auto____11575 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11576 = (cljs.core._reset[goog.typeOf(x__2389__auto____11575)]);
if(or__3824__auto____11576)
{return or__3824__auto____11576;
} else
{var or__3824__auto____11577 = (cljs.core._reset["_"]);
if(or__3824__auto____11577)
{return or__3824__auto____11577;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11582 = mf;
if(and__3822__auto____11582)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11582;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2389__auto____11583 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11584 = (cljs.core._add_method[goog.typeOf(x__2389__auto____11583)]);
if(or__3824__auto____11584)
{return or__3824__auto____11584;
} else
{var or__3824__auto____11585 = (cljs.core._add_method["_"]);
if(or__3824__auto____11585)
{return or__3824__auto____11585;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11590 = mf;
if(and__3822__auto____11590)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11590;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11591 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11592 = (cljs.core._remove_method[goog.typeOf(x__2389__auto____11591)]);
if(or__3824__auto____11592)
{return or__3824__auto____11592;
} else
{var or__3824__auto____11593 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11593)
{return or__3824__auto____11593;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11598 = mf;
if(and__3822__auto____11598)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11598;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2389__auto____11599 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11600 = (cljs.core._prefer_method[goog.typeOf(x__2389__auto____11599)]);
if(or__3824__auto____11600)
{return or__3824__auto____11600;
} else
{var or__3824__auto____11601 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11601)
{return or__3824__auto____11601;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11606 = mf;
if(and__3822__auto____11606)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11606;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11607 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11608 = (cljs.core._get_method[goog.typeOf(x__2389__auto____11607)]);
if(or__3824__auto____11608)
{return or__3824__auto____11608;
} else
{var or__3824__auto____11609 = (cljs.core._get_method["_"]);
if(or__3824__auto____11609)
{return or__3824__auto____11609;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11614 = mf;
if(and__3822__auto____11614)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11614;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2389__auto____11615 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11616 = (cljs.core._methods[goog.typeOf(x__2389__auto____11615)]);
if(or__3824__auto____11616)
{return or__3824__auto____11616;
} else
{var or__3824__auto____11617 = (cljs.core._methods["_"]);
if(or__3824__auto____11617)
{return or__3824__auto____11617;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11622 = mf;
if(and__3822__auto____11622)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11622;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2389__auto____11623 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11624 = (cljs.core._prefers[goog.typeOf(x__2389__auto____11623)]);
if(or__3824__auto____11624)
{return or__3824__auto____11624;
} else
{var or__3824__auto____11625 = (cljs.core._prefers["_"]);
if(or__3824__auto____11625)
{return or__3824__auto____11625;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11630 = mf;
if(and__3822__auto____11630)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11630;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2389__auto____11631 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11632 = (cljs.core._dispatch[goog.typeOf(x__2389__auto____11631)]);
if(or__3824__auto____11632)
{return or__3824__auto____11632;
} else
{var or__3824__auto____11633 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11633)
{return or__3824__auto____11633;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11636 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11637 = cljs.core._get_method.call(null,mf,dispatch_val__11636);
if(cljs.core.truth_(target_fn__11637))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11636)].join('')));
}
return cljs.core.apply.call(null,target_fn__11637,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11638 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11639 = this;
cljs.core.swap_BANG_.call(null,this__11639.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11639.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11639.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11639.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11640 = this;
cljs.core.swap_BANG_.call(null,this__11640.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11640.method_cache,this__11640.method_table,this__11640.cached_hierarchy,this__11640.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11641 = this;
cljs.core.swap_BANG_.call(null,this__11641.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11641.method_cache,this__11641.method_table,this__11641.cached_hierarchy,this__11641.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11642 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11642.cached_hierarchy),cljs.core.deref.call(null,this__11642.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11642.method_cache,this__11642.method_table,this__11642.cached_hierarchy,this__11642.hierarchy);
}
var temp__3971__auto____11643 = cljs.core.deref.call(null,this__11642.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11643))
{var target_fn__11644 = temp__3971__auto____11643;
return target_fn__11644;
} else
{var temp__3971__auto____11645 = cljs.core.find_and_cache_best_method.call(null,this__11642.name,dispatch_val,this__11642.hierarchy,this__11642.method_table,this__11642.prefer_table,this__11642.method_cache,this__11642.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11645))
{var target_fn__11646 = temp__3971__auto____11645;
return target_fn__11646;
} else
{return cljs.core.deref.call(null,this__11642.method_table).call(null,this__11642.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11647 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11647.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11647.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11647.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11647.method_cache,this__11647.method_table,this__11647.cached_hierarchy,this__11647.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11648 = this;
return cljs.core.deref.call(null,this__11648.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11649 = this;
return cljs.core.deref.call(null,this__11649.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11650 = this;
return cljs.core.do_dispatch.call(null,mf,this__11650.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11652__delegate = function (_,args){
var self__11651 = this;
return cljs.core._dispatch.call(null,self__11651,args);
};
var G__11652 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11652__delegate.call(this, _, args);
};
G__11652.cljs$lang$maxFixedArity = 1;
G__11652.cljs$lang$applyTo = (function (arglist__11653){
var _ = cljs.core.first(arglist__11653);
var args = cljs.core.rest(arglist__11653);
return G__11652__delegate(_, args);
});
G__11652.cljs$lang$arity$variadic = G__11652__delegate;
return G__11652;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11654 = this;
return cljs.core._dispatch.call(null,self__11654,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2335__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11655 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11657,_){
var this__11656 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11656.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11658 = this;
var and__3822__auto____11659 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11659)
{return (this__11658.uuid === other.uuid);
} else
{return and__3822__auto____11659;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11660 = this;
var this__11661 = this;
return cljs.core.pr_str.call(null,this__11661);
});
cljs.core.UUID;
