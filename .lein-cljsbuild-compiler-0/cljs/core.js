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
var x__7730 = (((x == null))?null:x);
if((p[goog.typeOf(x__7730)]))
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
var G__7731__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7731 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7731__delegate.call(this, array, i, idxs);
};
G__7731.cljs$lang$maxFixedArity = 2;
G__7731.cljs$lang$applyTo = (function (arglist__7732){
var array = cljs.core.first(arglist__7732);
var i = cljs.core.first(cljs.core.next(arglist__7732));
var idxs = cljs.core.rest(cljs.core.next(arglist__7732));
return G__7731__delegate(array, i, idxs);
});
G__7731.cljs$lang$arity$variadic = G__7731__delegate;
return G__7731;
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
if((function (){var and__3822__auto____7817 = this$;
if(and__3822__auto____7817)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7817;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2389__auto____7818 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7819 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7818)]);
if(or__3824__auto____7819)
{return or__3824__auto____7819;
} else
{var or__3824__auto____7820 = (cljs.core._invoke["_"]);
if(or__3824__auto____7820)
{return or__3824__auto____7820;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7821 = this$;
if(and__3822__auto____7821)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7821;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2389__auto____7822 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7823 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7822)]);
if(or__3824__auto____7823)
{return or__3824__auto____7823;
} else
{var or__3824__auto____7824 = (cljs.core._invoke["_"]);
if(or__3824__auto____7824)
{return or__3824__auto____7824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7825 = this$;
if(and__3822__auto____7825)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7825;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2389__auto____7826 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7827 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7826)]);
if(or__3824__auto____7827)
{return or__3824__auto____7827;
} else
{var or__3824__auto____7828 = (cljs.core._invoke["_"]);
if(or__3824__auto____7828)
{return or__3824__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7829 = this$;
if(and__3822__auto____7829)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7829;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2389__auto____7830 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7831 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7830)]);
if(or__3824__auto____7831)
{return or__3824__auto____7831;
} else
{var or__3824__auto____7832 = (cljs.core._invoke["_"]);
if(or__3824__auto____7832)
{return or__3824__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7833 = this$;
if(and__3822__auto____7833)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7833;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2389__auto____7834 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7835 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7834)]);
if(or__3824__auto____7835)
{return or__3824__auto____7835;
} else
{var or__3824__auto____7836 = (cljs.core._invoke["_"]);
if(or__3824__auto____7836)
{return or__3824__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7837 = this$;
if(and__3822__auto____7837)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7837;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2389__auto____7838 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7839 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7838)]);
if(or__3824__auto____7839)
{return or__3824__auto____7839;
} else
{var or__3824__auto____7840 = (cljs.core._invoke["_"]);
if(or__3824__auto____7840)
{return or__3824__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7841 = this$;
if(and__3822__auto____7841)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7841;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2389__auto____7842 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7843 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7842)]);
if(or__3824__auto____7843)
{return or__3824__auto____7843;
} else
{var or__3824__auto____7844 = (cljs.core._invoke["_"]);
if(or__3824__auto____7844)
{return or__3824__auto____7844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7845 = this$;
if(and__3822__auto____7845)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7845;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2389__auto____7846 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7847 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7846)]);
if(or__3824__auto____7847)
{return or__3824__auto____7847;
} else
{var or__3824__auto____7848 = (cljs.core._invoke["_"]);
if(or__3824__auto____7848)
{return or__3824__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7849 = this$;
if(and__3822__auto____7849)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7849;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2389__auto____7850 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7851 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7850)]);
if(or__3824__auto____7851)
{return or__3824__auto____7851;
} else
{var or__3824__auto____7852 = (cljs.core._invoke["_"]);
if(or__3824__auto____7852)
{return or__3824__auto____7852;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7853 = this$;
if(and__3822__auto____7853)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7853;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2389__auto____7854 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7855 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7854)]);
if(or__3824__auto____7855)
{return or__3824__auto____7855;
} else
{var or__3824__auto____7856 = (cljs.core._invoke["_"]);
if(or__3824__auto____7856)
{return or__3824__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7857 = this$;
if(and__3822__auto____7857)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7857;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2389__auto____7858 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7859 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7858)]);
if(or__3824__auto____7859)
{return or__3824__auto____7859;
} else
{var or__3824__auto____7860 = (cljs.core._invoke["_"]);
if(or__3824__auto____7860)
{return or__3824__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7861 = this$;
if(and__3822__auto____7861)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7861;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2389__auto____7862 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7863 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7862)]);
if(or__3824__auto____7863)
{return or__3824__auto____7863;
} else
{var or__3824__auto____7864 = (cljs.core._invoke["_"]);
if(or__3824__auto____7864)
{return or__3824__auto____7864;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7865 = this$;
if(and__3822__auto____7865)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7865;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2389__auto____7866 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7867 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7866)]);
if(or__3824__auto____7867)
{return or__3824__auto____7867;
} else
{var or__3824__auto____7868 = (cljs.core._invoke["_"]);
if(or__3824__auto____7868)
{return or__3824__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7869 = this$;
if(and__3822__auto____7869)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7869;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2389__auto____7870 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7871 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7870)]);
if(or__3824__auto____7871)
{return or__3824__auto____7871;
} else
{var or__3824__auto____7872 = (cljs.core._invoke["_"]);
if(or__3824__auto____7872)
{return or__3824__auto____7872;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7873 = this$;
if(and__3822__auto____7873)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7873;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2389__auto____7874 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7875 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7874)]);
if(or__3824__auto____7875)
{return or__3824__auto____7875;
} else
{var or__3824__auto____7876 = (cljs.core._invoke["_"]);
if(or__3824__auto____7876)
{return or__3824__auto____7876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7877 = this$;
if(and__3822__auto____7877)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7877;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2389__auto____7878 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7879 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7878)]);
if(or__3824__auto____7879)
{return or__3824__auto____7879;
} else
{var or__3824__auto____7880 = (cljs.core._invoke["_"]);
if(or__3824__auto____7880)
{return or__3824__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7881 = this$;
if(and__3822__auto____7881)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7881;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2389__auto____7882 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7883 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7882)]);
if(or__3824__auto____7883)
{return or__3824__auto____7883;
} else
{var or__3824__auto____7884 = (cljs.core._invoke["_"]);
if(or__3824__auto____7884)
{return or__3824__auto____7884;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7885 = this$;
if(and__3822__auto____7885)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7885;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2389__auto____7886 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7887 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7886)]);
if(or__3824__auto____7887)
{return or__3824__auto____7887;
} else
{var or__3824__auto____7888 = (cljs.core._invoke["_"]);
if(or__3824__auto____7888)
{return or__3824__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7889 = this$;
if(and__3822__auto____7889)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7889;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2389__auto____7890 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7891 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7890)]);
if(or__3824__auto____7891)
{return or__3824__auto____7891;
} else
{var or__3824__auto____7892 = (cljs.core._invoke["_"]);
if(or__3824__auto____7892)
{return or__3824__auto____7892;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7893 = this$;
if(and__3822__auto____7893)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7893;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2389__auto____7894 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7895 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7894)]);
if(or__3824__auto____7895)
{return or__3824__auto____7895;
} else
{var or__3824__auto____7896 = (cljs.core._invoke["_"]);
if(or__3824__auto____7896)
{return or__3824__auto____7896;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7897 = this$;
if(and__3822__auto____7897)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7897;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2389__auto____7898 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7899 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7898)]);
if(or__3824__auto____7899)
{return or__3824__auto____7899;
} else
{var or__3824__auto____7900 = (cljs.core._invoke["_"]);
if(or__3824__auto____7900)
{return or__3824__auto____7900;
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
if((function (){var and__3822__auto____7905 = coll;
if(and__3822__auto____7905)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7905;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2389__auto____7906 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7907 = (cljs.core._count[goog.typeOf(x__2389__auto____7906)]);
if(or__3824__auto____7907)
{return or__3824__auto____7907;
} else
{var or__3824__auto____7908 = (cljs.core._count["_"]);
if(or__3824__auto____7908)
{return or__3824__auto____7908;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7913 = coll;
if(and__3822__auto____7913)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7913;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2389__auto____7914 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7915 = (cljs.core._empty[goog.typeOf(x__2389__auto____7914)]);
if(or__3824__auto____7915)
{return or__3824__auto____7915;
} else
{var or__3824__auto____7916 = (cljs.core._empty["_"]);
if(or__3824__auto____7916)
{return or__3824__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7921 = coll;
if(and__3822__auto____7921)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7921;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2389__auto____7922 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7923 = (cljs.core._conj[goog.typeOf(x__2389__auto____7922)]);
if(or__3824__auto____7923)
{return or__3824__auto____7923;
} else
{var or__3824__auto____7924 = (cljs.core._conj["_"]);
if(or__3824__auto____7924)
{return or__3824__auto____7924;
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
if((function (){var and__3822__auto____7933 = coll;
if(and__3822__auto____7933)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7933;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2389__auto____7934 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7935 = (cljs.core._nth[goog.typeOf(x__2389__auto____7934)]);
if(or__3824__auto____7935)
{return or__3824__auto____7935;
} else
{var or__3824__auto____7936 = (cljs.core._nth["_"]);
if(or__3824__auto____7936)
{return or__3824__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7937 = coll;
if(and__3822__auto____7937)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7937;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2389__auto____7938 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7939 = (cljs.core._nth[goog.typeOf(x__2389__auto____7938)]);
if(or__3824__auto____7939)
{return or__3824__auto____7939;
} else
{var or__3824__auto____7940 = (cljs.core._nth["_"]);
if(or__3824__auto____7940)
{return or__3824__auto____7940;
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
if((function (){var and__3822__auto____7945 = coll;
if(and__3822__auto____7945)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7945;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2389__auto____7946 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7947 = (cljs.core._first[goog.typeOf(x__2389__auto____7946)]);
if(or__3824__auto____7947)
{return or__3824__auto____7947;
} else
{var or__3824__auto____7948 = (cljs.core._first["_"]);
if(or__3824__auto____7948)
{return or__3824__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7953 = coll;
if(and__3822__auto____7953)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7953;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2389__auto____7954 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7955 = (cljs.core._rest[goog.typeOf(x__2389__auto____7954)]);
if(or__3824__auto____7955)
{return or__3824__auto____7955;
} else
{var or__3824__auto____7956 = (cljs.core._rest["_"]);
if(or__3824__auto____7956)
{return or__3824__auto____7956;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7961 = coll;
if(and__3822__auto____7961)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7961;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2389__auto____7962 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7963 = (cljs.core._next[goog.typeOf(x__2389__auto____7962)]);
if(or__3824__auto____7963)
{return or__3824__auto____7963;
} else
{var or__3824__auto____7964 = (cljs.core._next["_"]);
if(or__3824__auto____7964)
{return or__3824__auto____7964;
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
if((function (){var and__3822__auto____7973 = o;
if(and__3822__auto____7973)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7973;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2389__auto____7974 = (((o == null))?null:o);
return (function (){var or__3824__auto____7975 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7974)]);
if(or__3824__auto____7975)
{return or__3824__auto____7975;
} else
{var or__3824__auto____7976 = (cljs.core._lookup["_"]);
if(or__3824__auto____7976)
{return or__3824__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7977 = o;
if(and__3822__auto____7977)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7977;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2389__auto____7978 = (((o == null))?null:o);
return (function (){var or__3824__auto____7979 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7978)]);
if(or__3824__auto____7979)
{return or__3824__auto____7979;
} else
{var or__3824__auto____7980 = (cljs.core._lookup["_"]);
if(or__3824__auto____7980)
{return or__3824__auto____7980;
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
if((function (){var and__3822__auto____7985 = coll;
if(and__3822__auto____7985)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7985;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2389__auto____7986 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7987 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2389__auto____7986)]);
if(or__3824__auto____7987)
{return or__3824__auto____7987;
} else
{var or__3824__auto____7988 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7988)
{return or__3824__auto____7988;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7993 = coll;
if(and__3822__auto____7993)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7993;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2389__auto____7994 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7995 = (cljs.core._assoc[goog.typeOf(x__2389__auto____7994)]);
if(or__3824__auto____7995)
{return or__3824__auto____7995;
} else
{var or__3824__auto____7996 = (cljs.core._assoc["_"]);
if(or__3824__auto____7996)
{return or__3824__auto____7996;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8001 = coll;
if(and__3822__auto____8001)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8001;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2389__auto____8002 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8003 = (cljs.core._dissoc[goog.typeOf(x__2389__auto____8002)]);
if(or__3824__auto____8003)
{return or__3824__auto____8003;
} else
{var or__3824__auto____8004 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8004)
{return or__3824__auto____8004;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8009 = coll;
if(and__3822__auto____8009)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8009;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2389__auto____8010 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8011 = (cljs.core._key[goog.typeOf(x__2389__auto____8010)]);
if(or__3824__auto____8011)
{return or__3824__auto____8011;
} else
{var or__3824__auto____8012 = (cljs.core._key["_"]);
if(or__3824__auto____8012)
{return or__3824__auto____8012;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8017 = coll;
if(and__3822__auto____8017)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8017;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2389__auto____8018 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8019 = (cljs.core._val[goog.typeOf(x__2389__auto____8018)]);
if(or__3824__auto____8019)
{return or__3824__auto____8019;
} else
{var or__3824__auto____8020 = (cljs.core._val["_"]);
if(or__3824__auto____8020)
{return or__3824__auto____8020;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8025 = coll;
if(and__3822__auto____8025)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8025;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2389__auto____8026 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8027 = (cljs.core._disjoin[goog.typeOf(x__2389__auto____8026)]);
if(or__3824__auto____8027)
{return or__3824__auto____8027;
} else
{var or__3824__auto____8028 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8028)
{return or__3824__auto____8028;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8033 = coll;
if(and__3822__auto____8033)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8033;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2389__auto____8034 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8035 = (cljs.core._peek[goog.typeOf(x__2389__auto____8034)]);
if(or__3824__auto____8035)
{return or__3824__auto____8035;
} else
{var or__3824__auto____8036 = (cljs.core._peek["_"]);
if(or__3824__auto____8036)
{return or__3824__auto____8036;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8041 = coll;
if(and__3822__auto____8041)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8041;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2389__auto____8042 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8043 = (cljs.core._pop[goog.typeOf(x__2389__auto____8042)]);
if(or__3824__auto____8043)
{return or__3824__auto____8043;
} else
{var or__3824__auto____8044 = (cljs.core._pop["_"]);
if(or__3824__auto____8044)
{return or__3824__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8049 = coll;
if(and__3822__auto____8049)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8049;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2389__auto____8050 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8051 = (cljs.core._assoc_n[goog.typeOf(x__2389__auto____8050)]);
if(or__3824__auto____8051)
{return or__3824__auto____8051;
} else
{var or__3824__auto____8052 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8052)
{return or__3824__auto____8052;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8057 = o;
if(and__3822__auto____8057)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8057;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2389__auto____8058 = (((o == null))?null:o);
return (function (){var or__3824__auto____8059 = (cljs.core._deref[goog.typeOf(x__2389__auto____8058)]);
if(or__3824__auto____8059)
{return or__3824__auto____8059;
} else
{var or__3824__auto____8060 = (cljs.core._deref["_"]);
if(or__3824__auto____8060)
{return or__3824__auto____8060;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8065 = o;
if(and__3822__auto____8065)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8065;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2389__auto____8066 = (((o == null))?null:o);
return (function (){var or__3824__auto____8067 = (cljs.core._deref_with_timeout[goog.typeOf(x__2389__auto____8066)]);
if(or__3824__auto____8067)
{return or__3824__auto____8067;
} else
{var or__3824__auto____8068 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8068)
{return or__3824__auto____8068;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8073 = o;
if(and__3822__auto____8073)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8073;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2389__auto____8074 = (((o == null))?null:o);
return (function (){var or__3824__auto____8075 = (cljs.core._meta[goog.typeOf(x__2389__auto____8074)]);
if(or__3824__auto____8075)
{return or__3824__auto____8075;
} else
{var or__3824__auto____8076 = (cljs.core._meta["_"]);
if(or__3824__auto____8076)
{return or__3824__auto____8076;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8081 = o;
if(and__3822__auto____8081)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8081;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2389__auto____8082 = (((o == null))?null:o);
return (function (){var or__3824__auto____8083 = (cljs.core._with_meta[goog.typeOf(x__2389__auto____8082)]);
if(or__3824__auto____8083)
{return or__3824__auto____8083;
} else
{var or__3824__auto____8084 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8084)
{return or__3824__auto____8084;
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
if((function (){var and__3822__auto____8093 = coll;
if(and__3822__auto____8093)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8093;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2389__auto____8094 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8095 = (cljs.core._reduce[goog.typeOf(x__2389__auto____8094)]);
if(or__3824__auto____8095)
{return or__3824__auto____8095;
} else
{var or__3824__auto____8096 = (cljs.core._reduce["_"]);
if(or__3824__auto____8096)
{return or__3824__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8097 = coll;
if(and__3822__auto____8097)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8097;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2389__auto____8098 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8099 = (cljs.core._reduce[goog.typeOf(x__2389__auto____8098)]);
if(or__3824__auto____8099)
{return or__3824__auto____8099;
} else
{var or__3824__auto____8100 = (cljs.core._reduce["_"]);
if(or__3824__auto____8100)
{return or__3824__auto____8100;
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
if((function (){var and__3822__auto____8105 = coll;
if(and__3822__auto____8105)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8105;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2389__auto____8106 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8107 = (cljs.core._kv_reduce[goog.typeOf(x__2389__auto____8106)]);
if(or__3824__auto____8107)
{return or__3824__auto____8107;
} else
{var or__3824__auto____8108 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8108)
{return or__3824__auto____8108;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8113 = o;
if(and__3822__auto____8113)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8113;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2389__auto____8114 = (((o == null))?null:o);
return (function (){var or__3824__auto____8115 = (cljs.core._equiv[goog.typeOf(x__2389__auto____8114)]);
if(or__3824__auto____8115)
{return or__3824__auto____8115;
} else
{var or__3824__auto____8116 = (cljs.core._equiv["_"]);
if(or__3824__auto____8116)
{return or__3824__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8121 = o;
if(and__3822__auto____8121)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8121;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2389__auto____8122 = (((o == null))?null:o);
return (function (){var or__3824__auto____8123 = (cljs.core._hash[goog.typeOf(x__2389__auto____8122)]);
if(or__3824__auto____8123)
{return or__3824__auto____8123;
} else
{var or__3824__auto____8124 = (cljs.core._hash["_"]);
if(or__3824__auto____8124)
{return or__3824__auto____8124;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8129 = o;
if(and__3822__auto____8129)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8129;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2389__auto____8130 = (((o == null))?null:o);
return (function (){var or__3824__auto____8131 = (cljs.core._seq[goog.typeOf(x__2389__auto____8130)]);
if(or__3824__auto____8131)
{return or__3824__auto____8131;
} else
{var or__3824__auto____8132 = (cljs.core._seq["_"]);
if(or__3824__auto____8132)
{return or__3824__auto____8132;
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
if((function (){var and__3822__auto____8137 = coll;
if(and__3822__auto____8137)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8137;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2389__auto____8138 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8139 = (cljs.core._rseq[goog.typeOf(x__2389__auto____8138)]);
if(or__3824__auto____8139)
{return or__3824__auto____8139;
} else
{var or__3824__auto____8140 = (cljs.core._rseq["_"]);
if(or__3824__auto____8140)
{return or__3824__auto____8140;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8145 = coll;
if(and__3822__auto____8145)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8145;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2389__auto____8146 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8147 = (cljs.core._sorted_seq[goog.typeOf(x__2389__auto____8146)]);
if(or__3824__auto____8147)
{return or__3824__auto____8147;
} else
{var or__3824__auto____8148 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8148)
{return or__3824__auto____8148;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8153 = coll;
if(and__3822__auto____8153)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8153;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2389__auto____8154 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8155 = (cljs.core._sorted_seq_from[goog.typeOf(x__2389__auto____8154)]);
if(or__3824__auto____8155)
{return or__3824__auto____8155;
} else
{var or__3824__auto____8156 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8156)
{return or__3824__auto____8156;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8161 = coll;
if(and__3822__auto____8161)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8161;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2389__auto____8162 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8163 = (cljs.core._entry_key[goog.typeOf(x__2389__auto____8162)]);
if(or__3824__auto____8163)
{return or__3824__auto____8163;
} else
{var or__3824__auto____8164 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8164)
{return or__3824__auto____8164;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8169 = coll;
if(and__3822__auto____8169)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8169;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2389__auto____8170 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8171 = (cljs.core._comparator[goog.typeOf(x__2389__auto____8170)]);
if(or__3824__auto____8171)
{return or__3824__auto____8171;
} else
{var or__3824__auto____8172 = (cljs.core._comparator["_"]);
if(or__3824__auto____8172)
{return or__3824__auto____8172;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8177 = o;
if(and__3822__auto____8177)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8177;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2389__auto____8178 = (((o == null))?null:o);
return (function (){var or__3824__auto____8179 = (cljs.core._pr_seq[goog.typeOf(x__2389__auto____8178)]);
if(or__3824__auto____8179)
{return or__3824__auto____8179;
} else
{var or__3824__auto____8180 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8180)
{return or__3824__auto____8180;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8185 = d;
if(and__3822__auto____8185)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8185;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2389__auto____8186 = (((d == null))?null:d);
return (function (){var or__3824__auto____8187 = (cljs.core._realized_QMARK_[goog.typeOf(x__2389__auto____8186)]);
if(or__3824__auto____8187)
{return or__3824__auto____8187;
} else
{var or__3824__auto____8188 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8188)
{return or__3824__auto____8188;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8193 = this$;
if(and__3822__auto____8193)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8193;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2389__auto____8194 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8195 = (cljs.core._notify_watches[goog.typeOf(x__2389__auto____8194)]);
if(or__3824__auto____8195)
{return or__3824__auto____8195;
} else
{var or__3824__auto____8196 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8196)
{return or__3824__auto____8196;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8201 = this$;
if(and__3822__auto____8201)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8201;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2389__auto____8202 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8203 = (cljs.core._add_watch[goog.typeOf(x__2389__auto____8202)]);
if(or__3824__auto____8203)
{return or__3824__auto____8203;
} else
{var or__3824__auto____8204 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8204)
{return or__3824__auto____8204;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8209 = this$;
if(and__3822__auto____8209)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8209;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2389__auto____8210 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8211 = (cljs.core._remove_watch[goog.typeOf(x__2389__auto____8210)]);
if(or__3824__auto____8211)
{return or__3824__auto____8211;
} else
{var or__3824__auto____8212 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8212)
{return or__3824__auto____8212;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8217 = coll;
if(and__3822__auto____8217)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8217;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2389__auto____8218 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8219 = (cljs.core._as_transient[goog.typeOf(x__2389__auto____8218)]);
if(or__3824__auto____8219)
{return or__3824__auto____8219;
} else
{var or__3824__auto____8220 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8220)
{return or__3824__auto____8220;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8225 = tcoll;
if(and__3822__auto____8225)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8225;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2389__auto____8226 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8227 = (cljs.core._conj_BANG_[goog.typeOf(x__2389__auto____8226)]);
if(or__3824__auto____8227)
{return or__3824__auto____8227;
} else
{var or__3824__auto____8228 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8228)
{return or__3824__auto____8228;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8233 = tcoll;
if(and__3822__auto____8233)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8233;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____8234 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8235 = (cljs.core._persistent_BANG_[goog.typeOf(x__2389__auto____8234)]);
if(or__3824__auto____8235)
{return or__3824__auto____8235;
} else
{var or__3824__auto____8236 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8236)
{return or__3824__auto____8236;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8241 = tcoll;
if(and__3822__auto____8241)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8241;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2389__auto____8242 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8243 = (cljs.core._assoc_BANG_[goog.typeOf(x__2389__auto____8242)]);
if(or__3824__auto____8243)
{return or__3824__auto____8243;
} else
{var or__3824__auto____8244 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8244)
{return or__3824__auto____8244;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8249 = tcoll;
if(and__3822__auto____8249)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8249;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2389__auto____8250 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8251 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2389__auto____8250)]);
if(or__3824__auto____8251)
{return or__3824__auto____8251;
} else
{var or__3824__auto____8252 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8252)
{return or__3824__auto____8252;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8257 = tcoll;
if(and__3822__auto____8257)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8257;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2389__auto____8258 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8259 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2389__auto____8258)]);
if(or__3824__auto____8259)
{return or__3824__auto____8259;
} else
{var or__3824__auto____8260 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8260)
{return or__3824__auto____8260;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8265 = tcoll;
if(and__3822__auto____8265)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8265;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____8266 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8267 = (cljs.core._pop_BANG_[goog.typeOf(x__2389__auto____8266)]);
if(or__3824__auto____8267)
{return or__3824__auto____8267;
} else
{var or__3824__auto____8268 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8268)
{return or__3824__auto____8268;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8273 = tcoll;
if(and__3822__auto____8273)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8273;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2389__auto____8274 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8275 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2389__auto____8274)]);
if(or__3824__auto____8275)
{return or__3824__auto____8275;
} else
{var or__3824__auto____8276 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8276)
{return or__3824__auto____8276;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8281 = x;
if(and__3822__auto____8281)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8281;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2389__auto____8282 = (((x == null))?null:x);
return (function (){var or__3824__auto____8283 = (cljs.core._compare[goog.typeOf(x__2389__auto____8282)]);
if(or__3824__auto____8283)
{return or__3824__auto____8283;
} else
{var or__3824__auto____8284 = (cljs.core._compare["_"]);
if(or__3824__auto____8284)
{return or__3824__auto____8284;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8289 = coll;
if(and__3822__auto____8289)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8289;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2389__auto____8290 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8291 = (cljs.core._drop_first[goog.typeOf(x__2389__auto____8290)]);
if(or__3824__auto____8291)
{return or__3824__auto____8291;
} else
{var or__3824__auto____8292 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8292)
{return or__3824__auto____8292;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8297 = coll;
if(and__3822__auto____8297)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8297;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2389__auto____8298 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8299 = (cljs.core._chunked_first[goog.typeOf(x__2389__auto____8298)]);
if(or__3824__auto____8299)
{return or__3824__auto____8299;
} else
{var or__3824__auto____8300 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8300)
{return or__3824__auto____8300;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8305 = coll;
if(and__3822__auto____8305)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8305;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2389__auto____8306 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8307 = (cljs.core._chunked_rest[goog.typeOf(x__2389__auto____8306)]);
if(or__3824__auto____8307)
{return or__3824__auto____8307;
} else
{var or__3824__auto____8308 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8308)
{return or__3824__auto____8308;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8313 = coll;
if(and__3822__auto____8313)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8313;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2389__auto____8314 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8315 = (cljs.core._chunked_next[goog.typeOf(x__2389__auto____8314)]);
if(or__3824__auto____8315)
{return or__3824__auto____8315;
} else
{var or__3824__auto____8316 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8316)
{return or__3824__auto____8316;
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
var or__3824__auto____8318 = (x === y);
if(or__3824__auto____8318)
{return or__3824__auto____8318;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8319__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8320 = y;
var G__8321 = cljs.core.first.call(null,more);
var G__8322 = cljs.core.next.call(null,more);
x = G__8320;
y = G__8321;
more = G__8322;
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
var G__8319 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8319__delegate.call(this, x, y, more);
};
G__8319.cljs$lang$maxFixedArity = 2;
G__8319.cljs$lang$applyTo = (function (arglist__8323){
var x = cljs.core.first(arglist__8323);
var y = cljs.core.first(cljs.core.next(arglist__8323));
var more = cljs.core.rest(cljs.core.next(arglist__8323));
return G__8319__delegate(x, y, more);
});
G__8319.cljs$lang$arity$variadic = G__8319__delegate;
return G__8319;
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
var G__8324 = null;
var G__8324__2 = (function (o,k){
return null;
});
var G__8324__3 = (function (o,k,not_found){
return not_found;
});
G__8324 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8324__2.call(this,o,k);
case 3:
return G__8324__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8324;
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
var G__8325 = null;
var G__8325__2 = (function (_,f){
return f.call(null);
});
var G__8325__3 = (function (_,f,start){
return start;
});
G__8325 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8325__2.call(this,_,f);
case 3:
return G__8325__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8325;
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
var G__8326 = null;
var G__8326__2 = (function (_,n){
return null;
});
var G__8326__3 = (function (_,n,not_found){
return not_found;
});
G__8326 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8326__2.call(this,_,n);
case 3:
return G__8326__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8326;
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
var and__3822__auto____8327 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8327)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8327;
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
var cnt__8340 = cljs.core._count.call(null,cicoll);
if((cnt__8340 === 0))
{return f.call(null);
} else
{var val__8341 = cljs.core._nth.call(null,cicoll,0);
var n__8342 = 1;
while(true){
if((n__8342 < cnt__8340))
{var nval__8343 = f.call(null,val__8341,cljs.core._nth.call(null,cicoll,n__8342));
if(cljs.core.reduced_QMARK_.call(null,nval__8343))
{return cljs.core.deref.call(null,nval__8343);
} else
{{
var G__8352 = nval__8343;
var G__8353 = (n__8342 + 1);
val__8341 = G__8352;
n__8342 = G__8353;
continue;
}
}
} else
{return val__8341;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8344 = cljs.core._count.call(null,cicoll);
var val__8345 = val;
var n__8346 = 0;
while(true){
if((n__8346 < cnt__8344))
{var nval__8347 = f.call(null,val__8345,cljs.core._nth.call(null,cicoll,n__8346));
if(cljs.core.reduced_QMARK_.call(null,nval__8347))
{return cljs.core.deref.call(null,nval__8347);
} else
{{
var G__8354 = nval__8347;
var G__8355 = (n__8346 + 1);
val__8345 = G__8354;
n__8346 = G__8355;
continue;
}
}
} else
{return val__8345;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8348 = cljs.core._count.call(null,cicoll);
var val__8349 = val;
var n__8350 = idx;
while(true){
if((n__8350 < cnt__8348))
{var nval__8351 = f.call(null,val__8349,cljs.core._nth.call(null,cicoll,n__8350));
if(cljs.core.reduced_QMARK_.call(null,nval__8351))
{return cljs.core.deref.call(null,nval__8351);
} else
{{
var G__8356 = nval__8351;
var G__8357 = (n__8350 + 1);
val__8349 = G__8356;
n__8350 = G__8357;
continue;
}
}
} else
{return val__8349;
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
var cnt__8370 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8371 = (arr[0]);
var n__8372 = 1;
while(true){
if((n__8372 < cnt__8370))
{var nval__8373 = f.call(null,val__8371,(arr[n__8372]));
if(cljs.core.reduced_QMARK_.call(null,nval__8373))
{return cljs.core.deref.call(null,nval__8373);
} else
{{
var G__8382 = nval__8373;
var G__8383 = (n__8372 + 1);
val__8371 = G__8382;
n__8372 = G__8383;
continue;
}
}
} else
{return val__8371;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8374 = arr.length;
var val__8375 = val;
var n__8376 = 0;
while(true){
if((n__8376 < cnt__8374))
{var nval__8377 = f.call(null,val__8375,(arr[n__8376]));
if(cljs.core.reduced_QMARK_.call(null,nval__8377))
{return cljs.core.deref.call(null,nval__8377);
} else
{{
var G__8384 = nval__8377;
var G__8385 = (n__8376 + 1);
val__8375 = G__8384;
n__8376 = G__8385;
continue;
}
}
} else
{return val__8375;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8378 = arr.length;
var val__8379 = val;
var n__8380 = idx;
while(true){
if((n__8380 < cnt__8378))
{var nval__8381 = f.call(null,val__8379,(arr[n__8380]));
if(cljs.core.reduced_QMARK_.call(null,nval__8381))
{return cljs.core.deref.call(null,nval__8381);
} else
{{
var G__8386 = nval__8381;
var G__8387 = (n__8380 + 1);
val__8379 = G__8386;
n__8380 = G__8387;
continue;
}
}
} else
{return val__8379;
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
var this__8388 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8389 = this;
if(((this__8389.i + 1) < this__8389.a.length))
{return (new cljs.core.IndexedSeq(this__8389.a,(this__8389.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8390 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8391 = this;
var c__8392 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8392 > 0))
{return (new cljs.core.RSeq(coll,(c__8392 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8393 = this;
var this__8394 = this;
return cljs.core.pr_str.call(null,this__8394);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8395 = this;
if(cljs.core.counted_QMARK_.call(null,this__8395.a))
{return cljs.core.ci_reduce.call(null,this__8395.a,f,(this__8395.a[this__8395.i]),(this__8395.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8395.a[this__8395.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8396 = this;
if(cljs.core.counted_QMARK_.call(null,this__8396.a))
{return cljs.core.ci_reduce.call(null,this__8396.a,f,start,this__8396.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8397 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8398 = this;
return (this__8398.a.length - this__8398.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8399 = this;
return (this__8399.a[this__8399.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8400 = this;
if(((this__8400.i + 1) < this__8400.a.length))
{return (new cljs.core.IndexedSeq(this__8400.a,(this__8400.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8401 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8402 = this;
var i__8403 = (n + this__8402.i);
if((i__8403 < this__8402.a.length))
{return (this__8402.a[i__8403]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8404 = this;
var i__8405 = (n + this__8404.i);
if((i__8405 < this__8404.a.length))
{return (this__8404.a[i__8405]);
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
var G__8406 = null;
var G__8406__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8406__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8406 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8406__2.call(this,array,f);
case 3:
return G__8406__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8406;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8407 = null;
var G__8407__2 = (function (array,k){
return (array[k]);
});
var G__8407__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8407 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8407__2.call(this,array,k);
case 3:
return G__8407__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8407;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8408 = null;
var G__8408__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8408__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8408 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8408__2.call(this,array,n);
case 3:
return G__8408__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8408;
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
var this__8409 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8410 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8411 = this;
var this__8412 = this;
return cljs.core.pr_str.call(null,this__8412);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8413 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8414 = this;
return (this__8414.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8415 = this;
return cljs.core._nth.call(null,this__8415.ci,this__8415.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8416 = this;
if((this__8416.i > 0))
{return (new cljs.core.RSeq(this__8416.ci,(this__8416.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8417 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8418 = this;
return (new cljs.core.RSeq(this__8418.ci,this__8418.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8419 = this;
return this__8419.meta;
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
{if((function (){var G__8423__8424 = coll;
if(G__8423__8424)
{if((function (){var or__3824__auto____8425 = (G__8423__8424.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8425)
{return or__3824__auto____8425;
} else
{return G__8423__8424.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8423__8424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8423__8424);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8423__8424);
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
{if((function (){var G__8430__8431 = coll;
if(G__8430__8431)
{if((function (){var or__3824__auto____8432 = (G__8430__8431.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8432)
{return or__3824__auto____8432;
} else
{return G__8430__8431.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8430__8431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8430__8431);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8430__8431);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8433 = cljs.core.seq.call(null,coll);
if((s__8433 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8433);
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
{if((function (){var G__8438__8439 = coll;
if(G__8438__8439)
{if((function (){var or__3824__auto____8440 = (G__8438__8439.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8440)
{return or__3824__auto____8440;
} else
{return G__8438__8439.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8438__8439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8438__8439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8438__8439);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8441 = cljs.core.seq.call(null,coll);
if(!((s__8441 == null)))
{return cljs.core._rest.call(null,s__8441);
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
{if((function (){var G__8445__8446 = coll;
if(G__8445__8446)
{if((function (){var or__3824__auto____8447 = (G__8445__8446.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8447)
{return or__3824__auto____8447;
} else
{return G__8445__8446.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8445__8446.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8445__8446);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8445__8446);
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
var sn__8449 = cljs.core.next.call(null,s);
if(!((sn__8449 == null)))
{{
var G__8450 = sn__8449;
s = G__8450;
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
var G__8451__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8452 = conj.call(null,coll,x);
var G__8453 = cljs.core.first.call(null,xs);
var G__8454 = cljs.core.next.call(null,xs);
coll = G__8452;
x = G__8453;
xs = G__8454;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8451 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8451__delegate.call(this, coll, x, xs);
};
G__8451.cljs$lang$maxFixedArity = 2;
G__8451.cljs$lang$applyTo = (function (arglist__8455){
var coll = cljs.core.first(arglist__8455);
var x = cljs.core.first(cljs.core.next(arglist__8455));
var xs = cljs.core.rest(cljs.core.next(arglist__8455));
return G__8451__delegate(coll, x, xs);
});
G__8451.cljs$lang$arity$variadic = G__8451__delegate;
return G__8451;
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
var s__8458 = cljs.core.seq.call(null,coll);
var acc__8459 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8458))
{return (acc__8459 + cljs.core._count.call(null,s__8458));
} else
{{
var G__8460 = cljs.core.next.call(null,s__8458);
var G__8461 = (acc__8459 + 1);
s__8458 = G__8460;
acc__8459 = G__8461;
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
{if((function (){var G__8468__8469 = coll;
if(G__8468__8469)
{if((function (){var or__3824__auto____8470 = (G__8468__8469.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8470)
{return or__3824__auto____8470;
} else
{return G__8468__8469.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8468__8469.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8468__8469);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8468__8469);
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
{if((function (){var G__8471__8472 = coll;
if(G__8471__8472)
{if((function (){var or__3824__auto____8473 = (G__8471__8472.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8473)
{return or__3824__auto____8473;
} else
{return G__8471__8472.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8471__8472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8471__8472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8471__8472);
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
var G__8476__delegate = function (coll,k,v,kvs){
while(true){
var ret__8475 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8477 = ret__8475;
var G__8478 = cljs.core.first.call(null,kvs);
var G__8479 = cljs.core.second.call(null,kvs);
var G__8480 = cljs.core.nnext.call(null,kvs);
coll = G__8477;
k = G__8478;
v = G__8479;
kvs = G__8480;
continue;
}
} else
{return ret__8475;
}
break;
}
};
var G__8476 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8476__delegate.call(this, coll, k, v, kvs);
};
G__8476.cljs$lang$maxFixedArity = 3;
G__8476.cljs$lang$applyTo = (function (arglist__8481){
var coll = cljs.core.first(arglist__8481);
var k = cljs.core.first(cljs.core.next(arglist__8481));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8481)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8481)));
return G__8476__delegate(coll, k, v, kvs);
});
G__8476.cljs$lang$arity$variadic = G__8476__delegate;
return G__8476;
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
var G__8484__delegate = function (coll,k,ks){
while(true){
var ret__8483 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8485 = ret__8483;
var G__8486 = cljs.core.first.call(null,ks);
var G__8487 = cljs.core.next.call(null,ks);
coll = G__8485;
k = G__8486;
ks = G__8487;
continue;
}
} else
{return ret__8483;
}
break;
}
};
var G__8484 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8484__delegate.call(this, coll, k, ks);
};
G__8484.cljs$lang$maxFixedArity = 2;
G__8484.cljs$lang$applyTo = (function (arglist__8488){
var coll = cljs.core.first(arglist__8488);
var k = cljs.core.first(cljs.core.next(arglist__8488));
var ks = cljs.core.rest(cljs.core.next(arglist__8488));
return G__8484__delegate(coll, k, ks);
});
G__8484.cljs$lang$arity$variadic = G__8484__delegate;
return G__8484;
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
if((function (){var G__8492__8493 = o;
if(G__8492__8493)
{if((function (){var or__3824__auto____8494 = (G__8492__8493.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8494)
{return or__3824__auto____8494;
} else
{return G__8492__8493.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8492__8493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8492__8493);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8492__8493);
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
var G__8497__delegate = function (coll,k,ks){
while(true){
var ret__8496 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8498 = ret__8496;
var G__8499 = cljs.core.first.call(null,ks);
var G__8500 = cljs.core.next.call(null,ks);
coll = G__8498;
k = G__8499;
ks = G__8500;
continue;
}
} else
{return ret__8496;
}
break;
}
};
var G__8497 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8497__delegate.call(this, coll, k, ks);
};
G__8497.cljs$lang$maxFixedArity = 2;
G__8497.cljs$lang$applyTo = (function (arglist__8501){
var coll = cljs.core.first(arglist__8501);
var k = cljs.core.first(cljs.core.next(arglist__8501));
var ks = cljs.core.rest(cljs.core.next(arglist__8501));
return G__8497__delegate(coll, k, ks);
});
G__8497.cljs$lang$arity$variadic = G__8497__delegate;
return G__8497;
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
var h__8503 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8503);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8503;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8505 = (cljs.core.string_hash_cache[k]);
if(!((h__8505 == null)))
{return h__8505;
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
if((function (){var and__3822__auto____8507 = goog.isString(o);
if(and__3822__auto____8507)
{return check_cache;
} else
{return and__3822__auto____8507;
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
{var G__8511__8512 = x;
if(G__8511__8512)
{if((function (){var or__3824__auto____8513 = (G__8511__8512.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8513)
{return or__3824__auto____8513;
} else
{return G__8511__8512.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8511__8512.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8511__8512);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8511__8512);
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
{var G__8517__8518 = x;
if(G__8517__8518)
{if((function (){var or__3824__auto____8519 = (G__8517__8518.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8519)
{return or__3824__auto____8519;
} else
{return G__8517__8518.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8517__8518.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8517__8518);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8517__8518);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8523__8524 = x;
if(G__8523__8524)
{if((function (){var or__3824__auto____8525 = (G__8523__8524.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8525)
{return or__3824__auto____8525;
} else
{return G__8523__8524.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8523__8524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8523__8524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8523__8524);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8529__8530 = x;
if(G__8529__8530)
{if((function (){var or__3824__auto____8531 = (G__8529__8530.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8531)
{return or__3824__auto____8531;
} else
{return G__8529__8530.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8529__8530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8529__8530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8529__8530);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8535__8536 = x;
if(G__8535__8536)
{if((function (){var or__3824__auto____8537 = (G__8535__8536.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8537)
{return or__3824__auto____8537;
} else
{return G__8535__8536.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8535__8536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8535__8536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8535__8536);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8541__8542 = x;
if(G__8541__8542)
{if((function (){var or__3824__auto____8543 = (G__8541__8542.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8543)
{return or__3824__auto____8543;
} else
{return G__8541__8542.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8541__8542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8541__8542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8541__8542);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8547__8548 = x;
if(G__8547__8548)
{if((function (){var or__3824__auto____8549 = (G__8547__8548.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8549)
{return or__3824__auto____8549;
} else
{return G__8547__8548.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8547__8548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8547__8548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8547__8548);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8553__8554 = x;
if(G__8553__8554)
{if((function (){var or__3824__auto____8555 = (G__8553__8554.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8555)
{return or__3824__auto____8555;
} else
{return G__8553__8554.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8553__8554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8553__8554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8553__8554);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8559__8560 = x;
if(G__8559__8560)
{if((function (){var or__3824__auto____8561 = (G__8559__8560.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8561)
{return or__3824__auto____8561;
} else
{return G__8559__8560.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8559__8560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8559__8560);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8559__8560);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8565__8566 = x;
if(G__8565__8566)
{if(cljs.core.truth_((function (){var or__3824__auto____8567 = null;
if(cljs.core.truth_(or__3824__auto____8567))
{return or__3824__auto____8567;
} else
{return G__8565__8566.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8565__8566.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8565__8566);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8565__8566);
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
var G__8568__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8568 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8568__delegate.call(this, keyvals);
};
G__8568.cljs$lang$maxFixedArity = 0;
G__8568.cljs$lang$applyTo = (function (arglist__8569){
var keyvals = cljs.core.seq(arglist__8569);;
return G__8568__delegate(keyvals);
});
G__8568.cljs$lang$arity$variadic = G__8568__delegate;
return G__8568;
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
var keys__8571 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8571.push(key);
}));
return keys__8571;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8575 = i;
var j__8576 = j;
var len__8577 = len;
while(true){
if((len__8577 === 0))
{return to;
} else
{(to[j__8576] = (from[i__8575]));
{
var G__8578 = (i__8575 + 1);
var G__8579 = (j__8576 + 1);
var G__8580 = (len__8577 - 1);
i__8575 = G__8578;
j__8576 = G__8579;
len__8577 = G__8580;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8584 = (i + (len - 1));
var j__8585 = (j + (len - 1));
var len__8586 = len;
while(true){
if((len__8586 === 0))
{return to;
} else
{(to[j__8585] = (from[i__8584]));
{
var G__8587 = (i__8584 - 1);
var G__8588 = (j__8585 - 1);
var G__8589 = (len__8586 - 1);
i__8584 = G__8587;
j__8585 = G__8588;
len__8586 = G__8589;
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
{var G__8593__8594 = s;
if(G__8593__8594)
{if((function (){var or__3824__auto____8595 = (G__8593__8594.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8595)
{return or__3824__auto____8595;
} else
{return G__8593__8594.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8593__8594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8593__8594);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8593__8594);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8599__8600 = s;
if(G__8599__8600)
{if((function (){var or__3824__auto____8601 = (G__8599__8600.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8601)
{return or__3824__auto____8601;
} else
{return G__8599__8600.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8599__8600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8599__8600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8599__8600);
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
var and__3822__auto____8604 = goog.isString(x);
if(and__3822__auto____8604)
{return !((function (){var or__3824__auto____8605 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8605)
{return or__3824__auto____8605;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8604;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8607 = goog.isString(x);
if(and__3822__auto____8607)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8607;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8609 = goog.isString(x);
if(and__3822__auto____8609)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8609;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8614 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8614)
{return or__3824__auto____8614;
} else
{var G__8615__8616 = f;
if(G__8615__8616)
{if((function (){var or__3824__auto____8617 = (G__8615__8616.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8617)
{return or__3824__auto____8617;
} else
{return G__8615__8616.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8615__8616.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8615__8616);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8615__8616);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8619 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8619)
{return (n == n.toFixed());
} else
{return and__3822__auto____8619;
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
if(cljs.core.truth_((function (){var and__3822__auto____8622 = coll;
if(cljs.core.truth_(and__3822__auto____8622))
{var and__3822__auto____8623 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8623)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8623;
}
} else
{return and__3822__auto____8622;
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
var G__8632__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8628 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8629 = more;
while(true){
var x__8630 = cljs.core.first.call(null,xs__8629);
var etc__8631 = cljs.core.next.call(null,xs__8629);
if(cljs.core.truth_(xs__8629))
{if(cljs.core.contains_QMARK_.call(null,s__8628,x__8630))
{return false;
} else
{{
var G__8633 = cljs.core.conj.call(null,s__8628,x__8630);
var G__8634 = etc__8631;
s__8628 = G__8633;
xs__8629 = G__8634;
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
var G__8632 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8632__delegate.call(this, x, y, more);
};
G__8632.cljs$lang$maxFixedArity = 2;
G__8632.cljs$lang$applyTo = (function (arglist__8635){
var x = cljs.core.first(arglist__8635);
var y = cljs.core.first(cljs.core.next(arglist__8635));
var more = cljs.core.rest(cljs.core.next(arglist__8635));
return G__8632__delegate(x, y, more);
});
G__8632.cljs$lang$arity$variadic = G__8632__delegate;
return G__8632;
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
{if((function (){var G__8639__8640 = x;
if(G__8639__8640)
{if(cljs.core.truth_((function (){var or__3824__auto____8641 = null;
if(cljs.core.truth_(or__3824__auto____8641))
{return or__3824__auto____8641;
} else
{return G__8639__8640.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8639__8640.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8639__8640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8639__8640);
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
var xl__8646 = cljs.core.count.call(null,xs);
var yl__8647 = cljs.core.count.call(null,ys);
if((xl__8646 < yl__8647))
{return -1;
} else
{if((xl__8646 > yl__8647))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8646,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8648 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8649 = (d__8648 === 0);
if(and__3822__auto____8649)
{return ((n + 1) < len);
} else
{return and__3822__auto____8649;
}
})())
{{
var G__8650 = xs;
var G__8651 = ys;
var G__8652 = len;
var G__8653 = (n + 1);
xs = G__8650;
ys = G__8651;
len = G__8652;
n = G__8653;
continue;
}
} else
{return d__8648;
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
var r__8655 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8655))
{return r__8655;
} else
{if(cljs.core.truth_(r__8655))
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
{var a__8657 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8657,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8657);
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
var temp__3971__auto____8663 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8663)
{var s__8664 = temp__3971__auto____8663;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8664),cljs.core.next.call(null,s__8664));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8665 = val;
var coll__8666 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8666)
{var nval__8667 = f.call(null,val__8665,cljs.core.first.call(null,coll__8666));
if(cljs.core.reduced_QMARK_.call(null,nval__8667))
{return cljs.core.deref.call(null,nval__8667);
} else
{{
var G__8668 = nval__8667;
var G__8669 = cljs.core.next.call(null,coll__8666);
val__8665 = G__8668;
coll__8666 = G__8669;
continue;
}
}
} else
{return val__8665;
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
var a__8671 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8671);
return cljs.core.vec.call(null,a__8671);
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
if((function (){var G__8678__8679 = coll;
if(G__8678__8679)
{if((function (){var or__3824__auto____8680 = (G__8678__8679.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8680)
{return or__3824__auto____8680;
} else
{return G__8678__8679.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8678__8679.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8678__8679);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8678__8679);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8681__8682 = coll;
if(G__8681__8682)
{if((function (){var or__3824__auto____8683 = (G__8681__8682.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8683)
{return or__3824__auto____8683;
} else
{return G__8681__8682.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8681__8682.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8681__8682);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8681__8682);
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
var this__8684 = this;
return this__8684.val;
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
var G__8685__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8685__delegate.call(this, x, y, more);
};
G__8685.cljs$lang$maxFixedArity = 2;
G__8685.cljs$lang$applyTo = (function (arglist__8686){
var x = cljs.core.first(arglist__8686);
var y = cljs.core.first(cljs.core.next(arglist__8686));
var more = cljs.core.rest(cljs.core.next(arglist__8686));
return G__8685__delegate(x, y, more);
});
G__8685.cljs$lang$arity$variadic = G__8685__delegate;
return G__8685;
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
var G__8687__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8687 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8687__delegate.call(this, x, y, more);
};
G__8687.cljs$lang$maxFixedArity = 2;
G__8687.cljs$lang$applyTo = (function (arglist__8688){
var x = cljs.core.first(arglist__8688);
var y = cljs.core.first(cljs.core.next(arglist__8688));
var more = cljs.core.rest(cljs.core.next(arglist__8688));
return G__8687__delegate(x, y, more);
});
G__8687.cljs$lang$arity$variadic = G__8687__delegate;
return G__8687;
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
var G__8689__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8689 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8689__delegate.call(this, x, y, more);
};
G__8689.cljs$lang$maxFixedArity = 2;
G__8689.cljs$lang$applyTo = (function (arglist__8690){
var x = cljs.core.first(arglist__8690);
var y = cljs.core.first(cljs.core.next(arglist__8690));
var more = cljs.core.rest(cljs.core.next(arglist__8690));
return G__8689__delegate(x, y, more);
});
G__8689.cljs$lang$arity$variadic = G__8689__delegate;
return G__8689;
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
var G__8691__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8691__delegate.call(this, x, y, more);
};
G__8691.cljs$lang$maxFixedArity = 2;
G__8691.cljs$lang$applyTo = (function (arglist__8692){
var x = cljs.core.first(arglist__8692);
var y = cljs.core.first(cljs.core.next(arglist__8692));
var more = cljs.core.rest(cljs.core.next(arglist__8692));
return G__8691__delegate(x, y, more);
});
G__8691.cljs$lang$arity$variadic = G__8691__delegate;
return G__8691;
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
var G__8693__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8694 = y;
var G__8695 = cljs.core.first.call(null,more);
var G__8696 = cljs.core.next.call(null,more);
x = G__8694;
y = G__8695;
more = G__8696;
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
var G__8693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8693__delegate.call(this, x, y, more);
};
G__8693.cljs$lang$maxFixedArity = 2;
G__8693.cljs$lang$applyTo = (function (arglist__8697){
var x = cljs.core.first(arglist__8697);
var y = cljs.core.first(cljs.core.next(arglist__8697));
var more = cljs.core.rest(cljs.core.next(arglist__8697));
return G__8693__delegate(x, y, more);
});
G__8693.cljs$lang$arity$variadic = G__8693__delegate;
return G__8693;
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
var G__8698__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8699 = y;
var G__8700 = cljs.core.first.call(null,more);
var G__8701 = cljs.core.next.call(null,more);
x = G__8699;
y = G__8700;
more = G__8701;
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
var G__8698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8698__delegate.call(this, x, y, more);
};
G__8698.cljs$lang$maxFixedArity = 2;
G__8698.cljs$lang$applyTo = (function (arglist__8702){
var x = cljs.core.first(arglist__8702);
var y = cljs.core.first(cljs.core.next(arglist__8702));
var more = cljs.core.rest(cljs.core.next(arglist__8702));
return G__8698__delegate(x, y, more);
});
G__8698.cljs$lang$arity$variadic = G__8698__delegate;
return G__8698;
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
var G__8703__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8704 = y;
var G__8705 = cljs.core.first.call(null,more);
var G__8706 = cljs.core.next.call(null,more);
x = G__8704;
y = G__8705;
more = G__8706;
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
var G__8703 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8703__delegate.call(this, x, y, more);
};
G__8703.cljs$lang$maxFixedArity = 2;
G__8703.cljs$lang$applyTo = (function (arglist__8707){
var x = cljs.core.first(arglist__8707);
var y = cljs.core.first(cljs.core.next(arglist__8707));
var more = cljs.core.rest(cljs.core.next(arglist__8707));
return G__8703__delegate(x, y, more);
});
G__8703.cljs$lang$arity$variadic = G__8703__delegate;
return G__8703;
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
var G__8708__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8709 = y;
var G__8710 = cljs.core.first.call(null,more);
var G__8711 = cljs.core.next.call(null,more);
x = G__8709;
y = G__8710;
more = G__8711;
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
var G__8708 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8708__delegate.call(this, x, y, more);
};
G__8708.cljs$lang$maxFixedArity = 2;
G__8708.cljs$lang$applyTo = (function (arglist__8712){
var x = cljs.core.first(arglist__8712);
var y = cljs.core.first(cljs.core.next(arglist__8712));
var more = cljs.core.rest(cljs.core.next(arglist__8712));
return G__8708__delegate(x, y, more);
});
G__8708.cljs$lang$arity$variadic = G__8708__delegate;
return G__8708;
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
var G__8713__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8713__delegate.call(this, x, y, more);
};
G__8713.cljs$lang$maxFixedArity = 2;
G__8713.cljs$lang$applyTo = (function (arglist__8714){
var x = cljs.core.first(arglist__8714);
var y = cljs.core.first(cljs.core.next(arglist__8714));
var more = cljs.core.rest(cljs.core.next(arglist__8714));
return G__8713__delegate(x, y, more);
});
G__8713.cljs$lang$arity$variadic = G__8713__delegate;
return G__8713;
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
var G__8715__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8715 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8715__delegate.call(this, x, y, more);
};
G__8715.cljs$lang$maxFixedArity = 2;
G__8715.cljs$lang$applyTo = (function (arglist__8716){
var x = cljs.core.first(arglist__8716);
var y = cljs.core.first(cljs.core.next(arglist__8716));
var more = cljs.core.rest(cljs.core.next(arglist__8716));
return G__8715__delegate(x, y, more);
});
G__8715.cljs$lang$arity$variadic = G__8715__delegate;
return G__8715;
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
var rem__8718 = (n % d);
return cljs.core.fix.call(null,((n - rem__8718) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8720 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8720));
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
var v__8723 = (v - ((v >> 1) & 1431655765));
var v__8724 = ((v__8723 & 858993459) + ((v__8723 >> 2) & 858993459));
return ((((v__8724 + (v__8724 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__8725__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8726 = y;
var G__8727 = cljs.core.first.call(null,more);
var G__8728 = cljs.core.next.call(null,more);
x = G__8726;
y = G__8727;
more = G__8728;
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
var G__8725 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8725__delegate.call(this, x, y, more);
};
G__8725.cljs$lang$maxFixedArity = 2;
G__8725.cljs$lang$applyTo = (function (arglist__8729){
var x = cljs.core.first(arglist__8729);
var y = cljs.core.first(cljs.core.next(arglist__8729));
var more = cljs.core.rest(cljs.core.next(arglist__8729));
return G__8725__delegate(x, y, more);
});
G__8725.cljs$lang$arity$variadic = G__8725__delegate;
return G__8725;
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
var n__8733 = n;
var xs__8734 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8735 = xs__8734;
if(and__3822__auto____8735)
{return (n__8733 > 0);
} else
{return and__3822__auto____8735;
}
})()))
{{
var G__8736 = (n__8733 - 1);
var G__8737 = cljs.core.next.call(null,xs__8734);
n__8733 = G__8736;
xs__8734 = G__8737;
continue;
}
} else
{return xs__8734;
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
var G__8738__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8739 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8740 = cljs.core.next.call(null,more);
sb = G__8739;
more = G__8740;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8738 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8738__delegate.call(this, x, ys);
};
G__8738.cljs$lang$maxFixedArity = 1;
G__8738.cljs$lang$applyTo = (function (arglist__8741){
var x = cljs.core.first(arglist__8741);
var ys = cljs.core.rest(arglist__8741);
return G__8738__delegate(x, ys);
});
G__8738.cljs$lang$arity$variadic = G__8738__delegate;
return G__8738;
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
var G__8742__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8743 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8744 = cljs.core.next.call(null,more);
sb = G__8743;
more = G__8744;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8742 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8742__delegate.call(this, x, ys);
};
G__8742.cljs$lang$maxFixedArity = 1;
G__8742.cljs$lang$applyTo = (function (arglist__8745){
var x = cljs.core.first(arglist__8745);
var ys = cljs.core.rest(arglist__8745);
return G__8742__delegate(x, ys);
});
G__8742.cljs$lang$arity$variadic = G__8742__delegate;
return G__8742;
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
format.cljs$lang$applyTo = (function (arglist__8746){
var fmt = cljs.core.first(arglist__8746);
var args = cljs.core.rest(arglist__8746);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8749 = cljs.core.seq.call(null,x);
var ys__8750 = cljs.core.seq.call(null,y);
while(true){
if((xs__8749 == null))
{return (ys__8750 == null);
} else
{if((ys__8750 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8749),cljs.core.first.call(null,ys__8750)))
{{
var G__8751 = cljs.core.next.call(null,xs__8749);
var G__8752 = cljs.core.next.call(null,ys__8750);
xs__8749 = G__8751;
ys__8750 = G__8752;
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
return cljs.core.reduce.call(null,(function (p1__8753_SHARP_,p2__8754_SHARP_){
return cljs.core.hash_combine.call(null,p1__8753_SHARP_,cljs.core.hash.call(null,p2__8754_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8758 = 0;
var s__8759 = cljs.core.seq.call(null,m);
while(true){
if(s__8759)
{var e__8760 = cljs.core.first.call(null,s__8759);
{
var G__8761 = ((h__8758 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8760)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8760)))) % 4503599627370496);
var G__8762 = cljs.core.next.call(null,s__8759);
h__8758 = G__8761;
s__8759 = G__8762;
continue;
}
} else
{return h__8758;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8766 = 0;
var s__8767 = cljs.core.seq.call(null,s);
while(true){
if(s__8767)
{var e__8768 = cljs.core.first.call(null,s__8767);
{
var G__8769 = ((h__8766 + cljs.core.hash.call(null,e__8768)) % 4503599627370496);
var G__8770 = cljs.core.next.call(null,s__8767);
h__8766 = G__8769;
s__8767 = G__8770;
continue;
}
} else
{return h__8766;
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
var G__8791__8792 = cljs.core.seq.call(null,fn_map);
if(G__8791__8792)
{var G__8794__8796 = cljs.core.first.call(null,G__8791__8792);
var vec__8795__8797 = G__8794__8796;
var key_name__8798 = cljs.core.nth.call(null,vec__8795__8797,0,null);
var f__8799 = cljs.core.nth.call(null,vec__8795__8797,1,null);
var G__8791__8800 = G__8791__8792;
var G__8794__8801 = G__8794__8796;
var G__8791__8802 = G__8791__8800;
while(true){
var vec__8803__8804 = G__8794__8801;
var key_name__8805 = cljs.core.nth.call(null,vec__8803__8804,0,null);
var f__8806 = cljs.core.nth.call(null,vec__8803__8804,1,null);
var G__8791__8807 = G__8791__8802;
var str_name__8808 = cljs.core.name.call(null,key_name__8805);
(obj[str_name__8808] = f__8806);
var temp__3974__auto____8809 = cljs.core.next.call(null,G__8791__8807);
if(temp__3974__auto____8809)
{var G__8791__8810 = temp__3974__auto____8809;
{
var G__8811 = cljs.core.first.call(null,G__8791__8810);
var G__8812 = G__8791__8810;
G__8794__8801 = G__8811;
G__8791__8802 = G__8812;
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
var this__8813 = this;
var h__2218__auto____8814 = this__8813.__hash;
if(!((h__2218__auto____8814 == null)))
{return h__2218__auto____8814;
} else
{var h__2218__auto____8815 = cljs.core.hash_coll.call(null,coll);
this__8813.__hash = h__2218__auto____8815;
return h__2218__auto____8815;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8816 = this;
if((this__8816.count === 1))
{return null;
} else
{return this__8816.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8817 = this;
return (new cljs.core.List(this__8817.meta,o,coll,(this__8817.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8818 = this;
var this__8819 = this;
return cljs.core.pr_str.call(null,this__8819);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8820 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8821 = this;
return this__8821.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8822 = this;
return this__8822.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8823 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8824 = this;
return this__8824.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8825 = this;
if((this__8825.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8825.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8826 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8827 = this;
return (new cljs.core.List(meta,this__8827.first,this__8827.rest,this__8827.count,this__8827.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8828 = this;
return this__8828.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8829 = this;
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
var this__8830 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8831 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8832 = this;
return (new cljs.core.List(this__8832.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8833 = this;
var this__8834 = this;
return cljs.core.pr_str.call(null,this__8834);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8835 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8836 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8837 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8838 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8839 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8840 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8841 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8842 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8843 = this;
return this__8843.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8844 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8848__8849 = coll;
if(G__8848__8849)
{if((function (){var or__3824__auto____8850 = (G__8848__8849.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8850)
{return or__3824__auto____8850;
} else
{return G__8848__8849.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8848__8849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8848__8849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8848__8849);
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
var G__8851__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8851 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8851__delegate.call(this, x, y, z, items);
};
G__8851.cljs$lang$maxFixedArity = 3;
G__8851.cljs$lang$applyTo = (function (arglist__8852){
var x = cljs.core.first(arglist__8852);
var y = cljs.core.first(cljs.core.next(arglist__8852));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8852)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8852)));
return G__8851__delegate(x, y, z, items);
});
G__8851.cljs$lang$arity$variadic = G__8851__delegate;
return G__8851;
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
var this__8853 = this;
var h__2218__auto____8854 = this__8853.__hash;
if(!((h__2218__auto____8854 == null)))
{return h__2218__auto____8854;
} else
{var h__2218__auto____8855 = cljs.core.hash_coll.call(null,coll);
this__8853.__hash = h__2218__auto____8855;
return h__2218__auto____8855;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8856 = this;
if((this__8856.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8856.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8857 = this;
return (new cljs.core.Cons(null,o,coll,this__8857.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8858 = this;
var this__8859 = this;
return cljs.core.pr_str.call(null,this__8859);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8860 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8861 = this;
return this__8861.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8862 = this;
if((this__8862.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8862.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8863 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8864 = this;
return (new cljs.core.Cons(meta,this__8864.first,this__8864.rest,this__8864.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8865 = this;
return this__8865.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8866 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8866.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8871 = (coll == null);
if(or__3824__auto____8871)
{return or__3824__auto____8871;
} else
{var G__8872__8873 = coll;
if(G__8872__8873)
{if((function (){var or__3824__auto____8874 = (G__8872__8873.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8874)
{return or__3824__auto____8874;
} else
{return G__8872__8873.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8872__8873.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8872__8873);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8872__8873);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8878__8879 = x;
if(G__8878__8879)
{if((function (){var or__3824__auto____8880 = (G__8878__8879.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8880)
{return or__3824__auto____8880;
} else
{return G__8878__8879.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8878__8879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8878__8879);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8878__8879);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8881 = null;
var G__8881__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8881__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8881 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8881__2.call(this,string,f);
case 3:
return G__8881__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8881;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8882 = null;
var G__8882__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8882__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8882 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8882__2.call(this,string,k);
case 3:
return G__8882__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8882;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8883 = null;
var G__8883__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8883__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8883 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8883__2.call(this,string,n);
case 3:
return G__8883__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8883;
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
var G__8895 = null;
var G__8895__2 = (function (this_sym8886,coll){
var this__8888 = this;
var this_sym8886__8889 = this;
var ___8890 = this_sym8886__8889;
if((coll == null))
{return null;
} else
{var strobj__8891 = coll.strobj;
if((strobj__8891 == null))
{return cljs.core._lookup.call(null,coll,this__8888.k,null);
} else
{return (strobj__8891[this__8888.k]);
}
}
});
var G__8895__3 = (function (this_sym8887,coll,not_found){
var this__8888 = this;
var this_sym8887__8892 = this;
var ___8893 = this_sym8887__8892;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8888.k,not_found);
}
});
G__8895 = function(this_sym8887,coll,not_found){
switch(arguments.length){
case 2:
return G__8895__2.call(this,this_sym8887,coll);
case 3:
return G__8895__3.call(this,this_sym8887,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8895;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8884,args8885){
var this__8894 = this;
return this_sym8884.call.apply(this_sym8884,[this_sym8884].concat(args8885.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8904 = null;
var G__8904__2 = (function (this_sym8898,coll){
var this_sym8898__8900 = this;
var this__8901 = this_sym8898__8900;
return cljs.core._lookup.call(null,coll,this__8901.toString(),null);
});
var G__8904__3 = (function (this_sym8899,coll,not_found){
var this_sym8899__8902 = this;
var this__8903 = this_sym8899__8902;
return cljs.core._lookup.call(null,coll,this__8903.toString(),not_found);
});
G__8904 = function(this_sym8899,coll,not_found){
switch(arguments.length){
case 2:
return G__8904__2.call(this,this_sym8899,coll);
case 3:
return G__8904__3.call(this,this_sym8899,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8904;
})()
;
String.prototype.apply = (function (this_sym8896,args8897){
return this_sym8896.call.apply(this_sym8896,[this_sym8896].concat(args8897.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8906 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8906;
} else
{lazy_seq.x = x__8906.call(null);
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
var this__8907 = this;
var h__2218__auto____8908 = this__8907.__hash;
if(!((h__2218__auto____8908 == null)))
{return h__2218__auto____8908;
} else
{var h__2218__auto____8909 = cljs.core.hash_coll.call(null,coll);
this__8907.__hash = h__2218__auto____8909;
return h__2218__auto____8909;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8910 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8911 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8912 = this;
var this__8913 = this;
return cljs.core.pr_str.call(null,this__8913);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8914 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8915 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8916 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8917 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8918 = this;
return (new cljs.core.LazySeq(meta,this__8918.realized,this__8918.x,this__8918.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8919 = this;
return this__8919.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8920 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8920.meta);
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
var this__8921 = this;
return this__8921.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8922 = this;
var ___8923 = this;
(this__8922.buf[this__8922.end] = o);
return this__8922.end = (this__8922.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8924 = this;
var ___8925 = this;
var ret__8926 = (new cljs.core.ArrayChunk(this__8924.buf,0,this__8924.end));
this__8924.buf = null;
return ret__8926;
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
var this__8927 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8927.arr[this__8927.off]),(this__8927.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8928 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8928.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8929 = this;
if((this__8929.off === this__8929.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8929.arr,(this__8929.off + 1),this__8929.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8930 = this;
return (this__8930.arr[(this__8930.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8931 = this;
if((function (){var and__3822__auto____8932 = (i >= 0);
if(and__3822__auto____8932)
{return (i < (this__8931.end - this__8931.off));
} else
{return and__3822__auto____8932;
}
})())
{return (this__8931.arr[(this__8931.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8933 = this;
return (this__8933.end - this__8933.off);
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
var this__8934 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8935 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8936 = this;
return cljs.core._nth.call(null,this__8936.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8937 = this;
if((cljs.core._count.call(null,this__8937.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8937.chunk),this__8937.more,this__8937.meta));
} else
{if((this__8937.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8937.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8938 = this;
if((this__8938.more == null))
{return null;
} else
{return this__8938.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8939 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8940 = this;
return (new cljs.core.ChunkedCons(this__8940.chunk,this__8940.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8941 = this;
return this__8941.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8942 = this;
return this__8942.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8943 = this;
if((this__8943.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8943.more;
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
if((function (){var G__8947__8948 = s;
if(G__8947__8948)
{if(cljs.core.truth_((function (){var or__3824__auto____8949 = null;
if(cljs.core.truth_(or__3824__auto____8949))
{return or__3824__auto____8949;
} else
{return G__8947__8948.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8947__8948.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8947__8948);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8947__8948);
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
var ary__8952 = [];
var s__8953 = s;
while(true){
if(cljs.core.seq.call(null,s__8953))
{ary__8952.push(cljs.core.first.call(null,s__8953));
{
var G__8954 = cljs.core.next.call(null,s__8953);
s__8953 = G__8954;
continue;
}
} else
{return ary__8952;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8958 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8959 = 0;
var xs__8960 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8960)
{(ret__8958[i__8959] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8960)));
{
var G__8961 = (i__8959 + 1);
var G__8962 = cljs.core.next.call(null,xs__8960);
i__8959 = G__8961;
xs__8960 = G__8962;
continue;
}
} else
{}
break;
}
return ret__8958;
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
var a__8970 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8971 = cljs.core.seq.call(null,init_val_or_seq);
var i__8972 = 0;
var s__8973 = s__8971;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8974 = s__8973;
if(and__3822__auto____8974)
{return (i__8972 < size);
} else
{return and__3822__auto____8974;
}
})()))
{(a__8970[i__8972] = cljs.core.first.call(null,s__8973));
{
var G__8977 = (i__8972 + 1);
var G__8978 = cljs.core.next.call(null,s__8973);
i__8972 = G__8977;
s__8973 = G__8978;
continue;
}
} else
{return a__8970;
}
break;
}
} else
{var n__2553__auto____8975 = size;
var i__8976 = 0;
while(true){
if((i__8976 < n__2553__auto____8975))
{(a__8970[i__8976] = init_val_or_seq);
{
var G__8979 = (i__8976 + 1);
i__8976 = G__8979;
continue;
}
} else
{}
break;
}
return a__8970;
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
var a__8987 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8988 = cljs.core.seq.call(null,init_val_or_seq);
var i__8989 = 0;
var s__8990 = s__8988;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8991 = s__8990;
if(and__3822__auto____8991)
{return (i__8989 < size);
} else
{return and__3822__auto____8991;
}
})()))
{(a__8987[i__8989] = cljs.core.first.call(null,s__8990));
{
var G__8994 = (i__8989 + 1);
var G__8995 = cljs.core.next.call(null,s__8990);
i__8989 = G__8994;
s__8990 = G__8995;
continue;
}
} else
{return a__8987;
}
break;
}
} else
{var n__2553__auto____8992 = size;
var i__8993 = 0;
while(true){
if((i__8993 < n__2553__auto____8992))
{(a__8987[i__8993] = init_val_or_seq);
{
var G__8996 = (i__8993 + 1);
i__8993 = G__8996;
continue;
}
} else
{}
break;
}
return a__8987;
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
var a__9004 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9005 = cljs.core.seq.call(null,init_val_or_seq);
var i__9006 = 0;
var s__9007 = s__9005;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9008 = s__9007;
if(and__3822__auto____9008)
{return (i__9006 < size);
} else
{return and__3822__auto____9008;
}
})()))
{(a__9004[i__9006] = cljs.core.first.call(null,s__9007));
{
var G__9011 = (i__9006 + 1);
var G__9012 = cljs.core.next.call(null,s__9007);
i__9006 = G__9011;
s__9007 = G__9012;
continue;
}
} else
{return a__9004;
}
break;
}
} else
{var n__2553__auto____9009 = size;
var i__9010 = 0;
while(true){
if((i__9010 < n__2553__auto____9009))
{(a__9004[i__9010] = init_val_or_seq);
{
var G__9013 = (i__9010 + 1);
i__9010 = G__9013;
continue;
}
} else
{}
break;
}
return a__9004;
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
{var s__9018 = s;
var i__9019 = n;
var sum__9020 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9021 = (i__9019 > 0);
if(and__3822__auto____9021)
{return cljs.core.seq.call(null,s__9018);
} else
{return and__3822__auto____9021;
}
})()))
{{
var G__9022 = cljs.core.next.call(null,s__9018);
var G__9023 = (i__9019 - 1);
var G__9024 = (sum__9020 + 1);
s__9018 = G__9022;
i__9019 = G__9023;
sum__9020 = G__9024;
continue;
}
} else
{return sum__9020;
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
var s__9029 = cljs.core.seq.call(null,x);
if(s__9029)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9029))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9029),concat.call(null,cljs.core.chunk_rest.call(null,s__9029),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9029),concat.call(null,cljs.core.rest.call(null,s__9029),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9033__delegate = function (x,y,zs){
var cat__9032 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9031 = cljs.core.seq.call(null,xys);
if(xys__9031)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9031))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9031),cat.call(null,cljs.core.chunk_rest.call(null,xys__9031),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9031),cat.call(null,cljs.core.rest.call(null,xys__9031),zs));
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
return cat__9032.call(null,concat.call(null,x,y),zs);
};
var G__9033 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9033__delegate.call(this, x, y, zs);
};
G__9033.cljs$lang$maxFixedArity = 2;
G__9033.cljs$lang$applyTo = (function (arglist__9034){
var x = cljs.core.first(arglist__9034);
var y = cljs.core.first(cljs.core.next(arglist__9034));
var zs = cljs.core.rest(cljs.core.next(arglist__9034));
return G__9033__delegate(x, y, zs);
});
G__9033.cljs$lang$arity$variadic = G__9033__delegate;
return G__9033;
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
var G__9035__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9035 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9035__delegate.call(this, a, b, c, d, more);
};
G__9035.cljs$lang$maxFixedArity = 4;
G__9035.cljs$lang$applyTo = (function (arglist__9036){
var a = cljs.core.first(arglist__9036);
var b = cljs.core.first(cljs.core.next(arglist__9036));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9036)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9036))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9036))));
return G__9035__delegate(a, b, c, d, more);
});
G__9035.cljs$lang$arity$variadic = G__9035__delegate;
return G__9035;
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
var args__9078 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9079 = cljs.core._first.call(null,args__9078);
var args__9080 = cljs.core._rest.call(null,args__9078);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9079);
} else
{return f.call(null,a__9079);
}
} else
{var b__9081 = cljs.core._first.call(null,args__9080);
var args__9082 = cljs.core._rest.call(null,args__9080);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9079,b__9081);
} else
{return f.call(null,a__9079,b__9081);
}
} else
{var c__9083 = cljs.core._first.call(null,args__9082);
var args__9084 = cljs.core._rest.call(null,args__9082);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9079,b__9081,c__9083);
} else
{return f.call(null,a__9079,b__9081,c__9083);
}
} else
{var d__9085 = cljs.core._first.call(null,args__9084);
var args__9086 = cljs.core._rest.call(null,args__9084);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9079,b__9081,c__9083,d__9085);
} else
{return f.call(null,a__9079,b__9081,c__9083,d__9085);
}
} else
{var e__9087 = cljs.core._first.call(null,args__9086);
var args__9088 = cljs.core._rest.call(null,args__9086);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9079,b__9081,c__9083,d__9085,e__9087);
} else
{return f.call(null,a__9079,b__9081,c__9083,d__9085,e__9087);
}
} else
{var f__9089 = cljs.core._first.call(null,args__9088);
var args__9090 = cljs.core._rest.call(null,args__9088);
if((argc === 6))
{if(f__9089.cljs$lang$arity$6)
{return f__9089.cljs$lang$arity$6(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089);
}
} else
{var g__9091 = cljs.core._first.call(null,args__9090);
var args__9092 = cljs.core._rest.call(null,args__9090);
if((argc === 7))
{if(f__9089.cljs$lang$arity$7)
{return f__9089.cljs$lang$arity$7(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091);
}
} else
{var h__9093 = cljs.core._first.call(null,args__9092);
var args__9094 = cljs.core._rest.call(null,args__9092);
if((argc === 8))
{if(f__9089.cljs$lang$arity$8)
{return f__9089.cljs$lang$arity$8(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093);
}
} else
{var i__9095 = cljs.core._first.call(null,args__9094);
var args__9096 = cljs.core._rest.call(null,args__9094);
if((argc === 9))
{if(f__9089.cljs$lang$arity$9)
{return f__9089.cljs$lang$arity$9(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095);
}
} else
{var j__9097 = cljs.core._first.call(null,args__9096);
var args__9098 = cljs.core._rest.call(null,args__9096);
if((argc === 10))
{if(f__9089.cljs$lang$arity$10)
{return f__9089.cljs$lang$arity$10(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097);
}
} else
{var k__9099 = cljs.core._first.call(null,args__9098);
var args__9100 = cljs.core._rest.call(null,args__9098);
if((argc === 11))
{if(f__9089.cljs$lang$arity$11)
{return f__9089.cljs$lang$arity$11(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099);
}
} else
{var l__9101 = cljs.core._first.call(null,args__9100);
var args__9102 = cljs.core._rest.call(null,args__9100);
if((argc === 12))
{if(f__9089.cljs$lang$arity$12)
{return f__9089.cljs$lang$arity$12(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101);
}
} else
{var m__9103 = cljs.core._first.call(null,args__9102);
var args__9104 = cljs.core._rest.call(null,args__9102);
if((argc === 13))
{if(f__9089.cljs$lang$arity$13)
{return f__9089.cljs$lang$arity$13(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103);
}
} else
{var n__9105 = cljs.core._first.call(null,args__9104);
var args__9106 = cljs.core._rest.call(null,args__9104);
if((argc === 14))
{if(f__9089.cljs$lang$arity$14)
{return f__9089.cljs$lang$arity$14(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105);
}
} else
{var o__9107 = cljs.core._first.call(null,args__9106);
var args__9108 = cljs.core._rest.call(null,args__9106);
if((argc === 15))
{if(f__9089.cljs$lang$arity$15)
{return f__9089.cljs$lang$arity$15(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107);
}
} else
{var p__9109 = cljs.core._first.call(null,args__9108);
var args__9110 = cljs.core._rest.call(null,args__9108);
if((argc === 16))
{if(f__9089.cljs$lang$arity$16)
{return f__9089.cljs$lang$arity$16(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109);
}
} else
{var q__9111 = cljs.core._first.call(null,args__9110);
var args__9112 = cljs.core._rest.call(null,args__9110);
if((argc === 17))
{if(f__9089.cljs$lang$arity$17)
{return f__9089.cljs$lang$arity$17(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111);
}
} else
{var r__9113 = cljs.core._first.call(null,args__9112);
var args__9114 = cljs.core._rest.call(null,args__9112);
if((argc === 18))
{if(f__9089.cljs$lang$arity$18)
{return f__9089.cljs$lang$arity$18(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113);
}
} else
{var s__9115 = cljs.core._first.call(null,args__9114);
var args__9116 = cljs.core._rest.call(null,args__9114);
if((argc === 19))
{if(f__9089.cljs$lang$arity$19)
{return f__9089.cljs$lang$arity$19(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113,s__9115);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113,s__9115);
}
} else
{var t__9117 = cljs.core._first.call(null,args__9116);
var args__9118 = cljs.core._rest.call(null,args__9116);
if((argc === 20))
{if(f__9089.cljs$lang$arity$20)
{return f__9089.cljs$lang$arity$20(a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113,s__9115,t__9117);
} else
{return f__9089.call(null,a__9079,b__9081,c__9083,d__9085,e__9087,f__9089,g__9091,h__9093,i__9095,j__9097,k__9099,l__9101,m__9103,n__9105,o__9107,p__9109,q__9111,r__9113,s__9115,t__9117);
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
var fixed_arity__9133 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9134 = cljs.core.bounded_count.call(null,args,(fixed_arity__9133 + 1));
if((bc__9134 <= fixed_arity__9133))
{return cljs.core.apply_to.call(null,f,bc__9134,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9135 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9136 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9137 = cljs.core.bounded_count.call(null,arglist__9135,(fixed_arity__9136 + 1));
if((bc__9137 <= fixed_arity__9136))
{return cljs.core.apply_to.call(null,f,bc__9137,arglist__9135);
} else
{return f.cljs$lang$applyTo(arglist__9135);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9135));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9138 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9139 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9140 = cljs.core.bounded_count.call(null,arglist__9138,(fixed_arity__9139 + 1));
if((bc__9140 <= fixed_arity__9139))
{return cljs.core.apply_to.call(null,f,bc__9140,arglist__9138);
} else
{return f.cljs$lang$applyTo(arglist__9138);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9138));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9141 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9142 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9143 = cljs.core.bounded_count.call(null,arglist__9141,(fixed_arity__9142 + 1));
if((bc__9143 <= fixed_arity__9142))
{return cljs.core.apply_to.call(null,f,bc__9143,arglist__9141);
} else
{return f.cljs$lang$applyTo(arglist__9141);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9141));
}
});
var apply__6 = (function() { 
var G__9147__delegate = function (f,a,b,c,d,args){
var arglist__9144 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9145 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9146 = cljs.core.bounded_count.call(null,arglist__9144,(fixed_arity__9145 + 1));
if((bc__9146 <= fixed_arity__9145))
{return cljs.core.apply_to.call(null,f,bc__9146,arglist__9144);
} else
{return f.cljs$lang$applyTo(arglist__9144);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9144));
}
};
var G__9147 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9147__delegate.call(this, f, a, b, c, d, args);
};
G__9147.cljs$lang$maxFixedArity = 5;
G__9147.cljs$lang$applyTo = (function (arglist__9148){
var f = cljs.core.first(arglist__9148);
var a = cljs.core.first(cljs.core.next(arglist__9148));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9148)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9148))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9148)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9148)))));
return G__9147__delegate(f, a, b, c, d, args);
});
G__9147.cljs$lang$arity$variadic = G__9147__delegate;
return G__9147;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9149){
var obj = cljs.core.first(arglist__9149);
var f = cljs.core.first(cljs.core.next(arglist__9149));
var args = cljs.core.rest(cljs.core.next(arglist__9149));
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
var G__9150__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9150 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9150__delegate.call(this, x, y, more);
};
G__9150.cljs$lang$maxFixedArity = 2;
G__9150.cljs$lang$applyTo = (function (arglist__9151){
var x = cljs.core.first(arglist__9151);
var y = cljs.core.first(cljs.core.next(arglist__9151));
var more = cljs.core.rest(cljs.core.next(arglist__9151));
return G__9150__delegate(x, y, more);
});
G__9150.cljs$lang$arity$variadic = G__9150__delegate;
return G__9150;
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
var G__9152 = pred;
var G__9153 = cljs.core.next.call(null,coll);
pred = G__9152;
coll = G__9153;
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
{var or__3824__auto____9155 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9155))
{return or__3824__auto____9155;
} else
{{
var G__9156 = pred;
var G__9157 = cljs.core.next.call(null,coll);
pred = G__9156;
coll = G__9157;
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
var G__9158 = null;
var G__9158__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9158__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9158__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9158__3 = (function() { 
var G__9159__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9159 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9159__delegate.call(this, x, y, zs);
};
G__9159.cljs$lang$maxFixedArity = 2;
G__9159.cljs$lang$applyTo = (function (arglist__9160){
var x = cljs.core.first(arglist__9160);
var y = cljs.core.first(cljs.core.next(arglist__9160));
var zs = cljs.core.rest(cljs.core.next(arglist__9160));
return G__9159__delegate(x, y, zs);
});
G__9159.cljs$lang$arity$variadic = G__9159__delegate;
return G__9159;
})()
;
G__9158 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9158__0.call(this);
case 1:
return G__9158__1.call(this,x);
case 2:
return G__9158__2.call(this,x,y);
default:
return G__9158__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9158.cljs$lang$maxFixedArity = 2;
G__9158.cljs$lang$applyTo = G__9158__3.cljs$lang$applyTo;
return G__9158;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9161__delegate = function (args){
return x;
};
var G__9161 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9161__delegate.call(this, args);
};
G__9161.cljs$lang$maxFixedArity = 0;
G__9161.cljs$lang$applyTo = (function (arglist__9162){
var args = cljs.core.seq(arglist__9162);;
return G__9161__delegate(args);
});
G__9161.cljs$lang$arity$variadic = G__9161__delegate;
return G__9161;
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
var G__9169 = null;
var G__9169__0 = (function (){
return f.call(null,g.call(null));
});
var G__9169__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9169__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9169__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9169__4 = (function() { 
var G__9170__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9170__delegate.call(this, x, y, z, args);
};
G__9170.cljs$lang$maxFixedArity = 3;
G__9170.cljs$lang$applyTo = (function (arglist__9171){
var x = cljs.core.first(arglist__9171);
var y = cljs.core.first(cljs.core.next(arglist__9171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9171)));
return G__9170__delegate(x, y, z, args);
});
G__9170.cljs$lang$arity$variadic = G__9170__delegate;
return G__9170;
})()
;
G__9169 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9169__0.call(this);
case 1:
return G__9169__1.call(this,x);
case 2:
return G__9169__2.call(this,x,y);
case 3:
return G__9169__3.call(this,x,y,z);
default:
return G__9169__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9169.cljs$lang$maxFixedArity = 3;
G__9169.cljs$lang$applyTo = G__9169__4.cljs$lang$applyTo;
return G__9169;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9172 = null;
var G__9172__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9172__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9172__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9172__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9172__4 = (function() { 
var G__9173__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9173__delegate.call(this, x, y, z, args);
};
G__9173.cljs$lang$maxFixedArity = 3;
G__9173.cljs$lang$applyTo = (function (arglist__9174){
var x = cljs.core.first(arglist__9174);
var y = cljs.core.first(cljs.core.next(arglist__9174));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9174)));
return G__9173__delegate(x, y, z, args);
});
G__9173.cljs$lang$arity$variadic = G__9173__delegate;
return G__9173;
})()
;
G__9172 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9172__0.call(this);
case 1:
return G__9172__1.call(this,x);
case 2:
return G__9172__2.call(this,x,y);
case 3:
return G__9172__3.call(this,x,y,z);
default:
return G__9172__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9172.cljs$lang$maxFixedArity = 3;
G__9172.cljs$lang$applyTo = G__9172__4.cljs$lang$applyTo;
return G__9172;
})()
});
var comp__4 = (function() { 
var G__9175__delegate = function (f1,f2,f3,fs){
var fs__9166 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9176__delegate = function (args){
var ret__9167 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9166),args);
var fs__9168 = cljs.core.next.call(null,fs__9166);
while(true){
if(fs__9168)
{{
var G__9177 = cljs.core.first.call(null,fs__9168).call(null,ret__9167);
var G__9178 = cljs.core.next.call(null,fs__9168);
ret__9167 = G__9177;
fs__9168 = G__9178;
continue;
}
} else
{return ret__9167;
}
break;
}
};
var G__9176 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9176__delegate.call(this, args);
};
G__9176.cljs$lang$maxFixedArity = 0;
G__9176.cljs$lang$applyTo = (function (arglist__9179){
var args = cljs.core.seq(arglist__9179);;
return G__9176__delegate(args);
});
G__9176.cljs$lang$arity$variadic = G__9176__delegate;
return G__9176;
})()
;
};
var G__9175 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9175__delegate.call(this, f1, f2, f3, fs);
};
G__9175.cljs$lang$maxFixedArity = 3;
G__9175.cljs$lang$applyTo = (function (arglist__9180){
var f1 = cljs.core.first(arglist__9180);
var f2 = cljs.core.first(cljs.core.next(arglist__9180));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9180)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9180)));
return G__9175__delegate(f1, f2, f3, fs);
});
G__9175.cljs$lang$arity$variadic = G__9175__delegate;
return G__9175;
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
var G__9181__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9183__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9183__delegate.call(this, args);
};
G__9183.cljs$lang$maxFixedArity = 0;
G__9183.cljs$lang$applyTo = (function (arglist__9184){
var args = cljs.core.seq(arglist__9184);;
return G__9183__delegate(args);
});
G__9183.cljs$lang$arity$variadic = G__9183__delegate;
return G__9183;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9185__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9185 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9185__delegate.call(this, args);
};
G__9185.cljs$lang$maxFixedArity = 0;
G__9185.cljs$lang$applyTo = (function (arglist__9186){
var args = cljs.core.seq(arglist__9186);;
return G__9185__delegate(args);
});
G__9185.cljs$lang$arity$variadic = G__9185__delegate;
return G__9185;
})()
;
});
var partial__5 = (function() { 
var G__9187__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9188__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9188 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9188__delegate.call(this, args);
};
G__9188.cljs$lang$maxFixedArity = 0;
G__9188.cljs$lang$applyTo = (function (arglist__9189){
var args = cljs.core.seq(arglist__9189);;
return G__9188__delegate(args);
});
G__9188.cljs$lang$arity$variadic = G__9188__delegate;
return G__9188;
})()
;
};
var G__9187 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9187__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9187.cljs$lang$maxFixedArity = 4;
G__9187.cljs$lang$applyTo = (function (arglist__9190){
var f = cljs.core.first(arglist__9190);
var arg1 = cljs.core.first(cljs.core.next(arglist__9190));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9190)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9190))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9190))));
return G__9187__delegate(f, arg1, arg2, arg3, more);
});
G__9187.cljs$lang$arity$variadic = G__9187__delegate;
return G__9187;
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
var G__9191 = null;
var G__9191__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9191__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9191__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9191__4 = (function() { 
var G__9192__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9192 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9192__delegate.call(this, a, b, c, ds);
};
G__9192.cljs$lang$maxFixedArity = 3;
G__9192.cljs$lang$applyTo = (function (arglist__9193){
var a = cljs.core.first(arglist__9193);
var b = cljs.core.first(cljs.core.next(arglist__9193));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9193)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9193)));
return G__9192__delegate(a, b, c, ds);
});
G__9192.cljs$lang$arity$variadic = G__9192__delegate;
return G__9192;
})()
;
G__9191 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9191__1.call(this,a);
case 2:
return G__9191__2.call(this,a,b);
case 3:
return G__9191__3.call(this,a,b,c);
default:
return G__9191__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9191.cljs$lang$maxFixedArity = 3;
G__9191.cljs$lang$applyTo = G__9191__4.cljs$lang$applyTo;
return G__9191;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9194 = null;
var G__9194__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9194__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9194__4 = (function() { 
var G__9195__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9195 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9195__delegate.call(this, a, b, c, ds);
};
G__9195.cljs$lang$maxFixedArity = 3;
G__9195.cljs$lang$applyTo = (function (arglist__9196){
var a = cljs.core.first(arglist__9196);
var b = cljs.core.first(cljs.core.next(arglist__9196));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9196)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9196)));
return G__9195__delegate(a, b, c, ds);
});
G__9195.cljs$lang$arity$variadic = G__9195__delegate;
return G__9195;
})()
;
G__9194 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9194__2.call(this,a,b);
case 3:
return G__9194__3.call(this,a,b,c);
default:
return G__9194__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9194.cljs$lang$maxFixedArity = 3;
G__9194.cljs$lang$applyTo = G__9194__4.cljs$lang$applyTo;
return G__9194;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9197 = null;
var G__9197__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9197__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9197__4 = (function() { 
var G__9198__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9198 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9198__delegate.call(this, a, b, c, ds);
};
G__9198.cljs$lang$maxFixedArity = 3;
G__9198.cljs$lang$applyTo = (function (arglist__9199){
var a = cljs.core.first(arglist__9199);
var b = cljs.core.first(cljs.core.next(arglist__9199));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9199)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9199)));
return G__9198__delegate(a, b, c, ds);
});
G__9198.cljs$lang$arity$variadic = G__9198__delegate;
return G__9198;
})()
;
G__9197 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9197__2.call(this,a,b);
case 3:
return G__9197__3.call(this,a,b,c);
default:
return G__9197__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9197.cljs$lang$maxFixedArity = 3;
G__9197.cljs$lang$applyTo = G__9197__4.cljs$lang$applyTo;
return G__9197;
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
var mapi__9215 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9223 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9223)
{var s__9224 = temp__3974__auto____9223;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9224))
{var c__9225 = cljs.core.chunk_first.call(null,s__9224);
var size__9226 = cljs.core.count.call(null,c__9225);
var b__9227 = cljs.core.chunk_buffer.call(null,size__9226);
var n__2553__auto____9228 = size__9226;
var i__9229 = 0;
while(true){
if((i__9229 < n__2553__auto____9228))
{cljs.core.chunk_append.call(null,b__9227,f.call(null,(idx + i__9229),cljs.core._nth.call(null,c__9225,i__9229)));
{
var G__9230 = (i__9229 + 1);
i__9229 = G__9230;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9227),mapi.call(null,(idx + size__9226),cljs.core.chunk_rest.call(null,s__9224)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9224)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9224)));
}
} else
{return null;
}
}),null));
});
return mapi__9215.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9240 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9240)
{var s__9241 = temp__3974__auto____9240;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9241))
{var c__9242 = cljs.core.chunk_first.call(null,s__9241);
var size__9243 = cljs.core.count.call(null,c__9242);
var b__9244 = cljs.core.chunk_buffer.call(null,size__9243);
var n__2553__auto____9245 = size__9243;
var i__9246 = 0;
while(true){
if((i__9246 < n__2553__auto____9245))
{var x__9247 = f.call(null,cljs.core._nth.call(null,c__9242,i__9246));
if((x__9247 == null))
{} else
{cljs.core.chunk_append.call(null,b__9244,x__9247);
}
{
var G__9249 = (i__9246 + 1);
i__9246 = G__9249;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9244),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9241)));
} else
{var x__9248 = f.call(null,cljs.core.first.call(null,s__9241));
if((x__9248 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9241));
} else
{return cljs.core.cons.call(null,x__9248,keep.call(null,f,cljs.core.rest.call(null,s__9241)));
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
var keepi__9275 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9285 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9285)
{var s__9286 = temp__3974__auto____9285;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9286))
{var c__9287 = cljs.core.chunk_first.call(null,s__9286);
var size__9288 = cljs.core.count.call(null,c__9287);
var b__9289 = cljs.core.chunk_buffer.call(null,size__9288);
var n__2553__auto____9290 = size__9288;
var i__9291 = 0;
while(true){
if((i__9291 < n__2553__auto____9290))
{var x__9292 = f.call(null,(idx + i__9291),cljs.core._nth.call(null,c__9287,i__9291));
if((x__9292 == null))
{} else
{cljs.core.chunk_append.call(null,b__9289,x__9292);
}
{
var G__9294 = (i__9291 + 1);
i__9291 = G__9294;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9289),keepi.call(null,(idx + size__9288),cljs.core.chunk_rest.call(null,s__9286)));
} else
{var x__9293 = f.call(null,idx,cljs.core.first.call(null,s__9286));
if((x__9293 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9286));
} else
{return cljs.core.cons.call(null,x__9293,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9286)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9275.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9380 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9380))
{return p.call(null,y);
} else
{return and__3822__auto____9380;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9381 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9381))
{var and__3822__auto____9382 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9382))
{return p.call(null,z);
} else
{return and__3822__auto____9382;
}
} else
{return and__3822__auto____9381;
}
})());
});
var ep1__4 = (function() { 
var G__9451__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9383 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9383))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9383;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9395 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9395))
{return p2.call(null,x);
} else
{return and__3822__auto____9395;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9396 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9396))
{var and__3822__auto____9397 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9397))
{var and__3822__auto____9398 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9398))
{return p2.call(null,y);
} else
{return and__3822__auto____9398;
}
} else
{return and__3822__auto____9397;
}
} else
{return and__3822__auto____9396;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9399 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9399))
{var and__3822__auto____9400 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9400))
{var and__3822__auto____9401 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9401))
{var and__3822__auto____9402 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9402))
{var and__3822__auto____9403 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9403))
{return p2.call(null,z);
} else
{return and__3822__auto____9403;
}
} else
{return and__3822__auto____9402;
}
} else
{return and__3822__auto____9401;
}
} else
{return and__3822__auto____9400;
}
} else
{return and__3822__auto____9399;
}
})());
});
var ep2__4 = (function() { 
var G__9453__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9404 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9404))
{return cljs.core.every_QMARK_.call(null,(function (p1__9250_SHARP_){
var and__3822__auto____9405 = p1.call(null,p1__9250_SHARP_);
if(cljs.core.truth_(and__3822__auto____9405))
{return p2.call(null,p1__9250_SHARP_);
} else
{return and__3822__auto____9405;
}
}),args);
} else
{return and__3822__auto____9404;
}
})());
};
var G__9453 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9453__delegate.call(this, x, y, z, args);
};
G__9453.cljs$lang$maxFixedArity = 3;
G__9453.cljs$lang$applyTo = (function (arglist__9454){
var x = cljs.core.first(arglist__9454);
var y = cljs.core.first(cljs.core.next(arglist__9454));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9454)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9454)));
return G__9453__delegate(x, y, z, args);
});
G__9453.cljs$lang$arity$variadic = G__9453__delegate;
return G__9453;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9424 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9424))
{var and__3822__auto____9425 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9425))
{return p3.call(null,x);
} else
{return and__3822__auto____9425;
}
} else
{return and__3822__auto____9424;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9426 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9426))
{var and__3822__auto____9427 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9427))
{var and__3822__auto____9428 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9428))
{var and__3822__auto____9429 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9429))
{var and__3822__auto____9430 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9430))
{return p3.call(null,y);
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
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9431 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9431))
{var and__3822__auto____9432 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9432))
{var and__3822__auto____9433 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9433))
{var and__3822__auto____9434 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9434))
{var and__3822__auto____9435 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9435))
{var and__3822__auto____9436 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9436))
{var and__3822__auto____9437 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9437))
{var and__3822__auto____9438 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9438))
{return p3.call(null,z);
} else
{return and__3822__auto____9438;
}
} else
{return and__3822__auto____9437;
}
} else
{return and__3822__auto____9436;
}
} else
{return and__3822__auto____9435;
}
} else
{return and__3822__auto____9434;
}
} else
{return and__3822__auto____9433;
}
} else
{return and__3822__auto____9432;
}
} else
{return and__3822__auto____9431;
}
})());
});
var ep3__4 = (function() { 
var G__9455__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9439 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9439))
{return cljs.core.every_QMARK_.call(null,(function (p1__9251_SHARP_){
var and__3822__auto____9440 = p1.call(null,p1__9251_SHARP_);
if(cljs.core.truth_(and__3822__auto____9440))
{var and__3822__auto____9441 = p2.call(null,p1__9251_SHARP_);
if(cljs.core.truth_(and__3822__auto____9441))
{return p3.call(null,p1__9251_SHARP_);
} else
{return and__3822__auto____9441;
}
} else
{return and__3822__auto____9440;
}
}),args);
} else
{return and__3822__auto____9439;
}
})());
};
var G__9455 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9455__delegate.call(this, x, y, z, args);
};
G__9455.cljs$lang$maxFixedArity = 3;
G__9455.cljs$lang$applyTo = (function (arglist__9456){
var x = cljs.core.first(arglist__9456);
var y = cljs.core.first(cljs.core.next(arglist__9456));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9456)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9456)));
return G__9455__delegate(x, y, z, args);
});
G__9455.cljs$lang$arity$variadic = G__9455__delegate;
return G__9455;
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
var G__9457__delegate = function (p1,p2,p3,ps){
var ps__9442 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9252_SHARP_){
return p1__9252_SHARP_.call(null,x);
}),ps__9442);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9253_SHARP_){
var and__3822__auto____9447 = p1__9253_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9447))
{return p1__9253_SHARP_.call(null,y);
} else
{return and__3822__auto____9447;
}
}),ps__9442);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9254_SHARP_){
var and__3822__auto____9448 = p1__9254_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9448))
{var and__3822__auto____9449 = p1__9254_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9449))
{return p1__9254_SHARP_.call(null,z);
} else
{return and__3822__auto____9449;
}
} else
{return and__3822__auto____9448;
}
}),ps__9442);
});
var epn__4 = (function() { 
var G__9458__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9450 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9450))
{return cljs.core.every_QMARK_.call(null,(function (p1__9255_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9255_SHARP_,args);
}),ps__9442);
} else
{return and__3822__auto____9450;
}
})());
};
var G__9458 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9458__delegate.call(this, x, y, z, args);
};
G__9458.cljs$lang$maxFixedArity = 3;
G__9458.cljs$lang$applyTo = (function (arglist__9459){
var x = cljs.core.first(arglist__9459);
var y = cljs.core.first(cljs.core.next(arglist__9459));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9459)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9459)));
return G__9458__delegate(x, y, z, args);
});
G__9458.cljs$lang$arity$variadic = G__9458__delegate;
return G__9458;
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
var G__9457 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9457__delegate.call(this, p1, p2, p3, ps);
};
G__9457.cljs$lang$maxFixedArity = 3;
G__9457.cljs$lang$applyTo = (function (arglist__9460){
var p1 = cljs.core.first(arglist__9460);
var p2 = cljs.core.first(cljs.core.next(arglist__9460));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9460)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9460)));
return G__9457__delegate(p1, p2, p3, ps);
});
G__9457.cljs$lang$arity$variadic = G__9457__delegate;
return G__9457;
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
var or__3824__auto____9541 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9541))
{return or__3824__auto____9541;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9542 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9542))
{return or__3824__auto____9542;
} else
{var or__3824__auto____9543 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9543))
{return or__3824__auto____9543;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9612__delegate = function (x,y,z,args){
var or__3824__auto____9544 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9544))
{return or__3824__auto____9544;
} else
{return cljs.core.some.call(null,p,args);
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
var or__3824__auto____9556 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9556))
{return or__3824__auto____9556;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9557 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9557))
{return or__3824__auto____9557;
} else
{var or__3824__auto____9558 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9558))
{return or__3824__auto____9558;
} else
{var or__3824__auto____9559 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9559))
{return or__3824__auto____9559;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9560 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9560))
{return or__3824__auto____9560;
} else
{var or__3824__auto____9561 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9561))
{return or__3824__auto____9561;
} else
{var or__3824__auto____9562 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9562))
{return or__3824__auto____9562;
} else
{var or__3824__auto____9563 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9563))
{return or__3824__auto____9563;
} else
{var or__3824__auto____9564 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9564))
{return or__3824__auto____9564;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9614__delegate = function (x,y,z,args){
var or__3824__auto____9565 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9565))
{return or__3824__auto____9565;
} else
{return cljs.core.some.call(null,(function (p1__9295_SHARP_){
var or__3824__auto____9566 = p1.call(null,p1__9295_SHARP_);
if(cljs.core.truth_(or__3824__auto____9566))
{return or__3824__auto____9566;
} else
{return p2.call(null,p1__9295_SHARP_);
}
}),args);
}
};
var G__9614 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9614__delegate.call(this, x, y, z, args);
};
G__9614.cljs$lang$maxFixedArity = 3;
G__9614.cljs$lang$applyTo = (function (arglist__9615){
var x = cljs.core.first(arglist__9615);
var y = cljs.core.first(cljs.core.next(arglist__9615));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9615)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9615)));
return G__9614__delegate(x, y, z, args);
});
G__9614.cljs$lang$arity$variadic = G__9614__delegate;
return G__9614;
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
var or__3824__auto____9585 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9585))
{return or__3824__auto____9585;
} else
{var or__3824__auto____9586 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9586))
{return or__3824__auto____9586;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9587 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9587))
{return or__3824__auto____9587;
} else
{var or__3824__auto____9588 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9588))
{return or__3824__auto____9588;
} else
{var or__3824__auto____9589 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9589))
{return or__3824__auto____9589;
} else
{var or__3824__auto____9590 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9590))
{return or__3824__auto____9590;
} else
{var or__3824__auto____9591 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9591))
{return or__3824__auto____9591;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9592 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9592))
{return or__3824__auto____9592;
} else
{var or__3824__auto____9593 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9593))
{return or__3824__auto____9593;
} else
{var or__3824__auto____9594 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9594))
{return or__3824__auto____9594;
} else
{var or__3824__auto____9595 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9595))
{return or__3824__auto____9595;
} else
{var or__3824__auto____9596 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9596))
{return or__3824__auto____9596;
} else
{var or__3824__auto____9597 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9597))
{return or__3824__auto____9597;
} else
{var or__3824__auto____9598 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9598))
{return or__3824__auto____9598;
} else
{var or__3824__auto____9599 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9599))
{return or__3824__auto____9599;
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
var G__9616__delegate = function (x,y,z,args){
var or__3824__auto____9600 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9600))
{return or__3824__auto____9600;
} else
{return cljs.core.some.call(null,(function (p1__9296_SHARP_){
var or__3824__auto____9601 = p1.call(null,p1__9296_SHARP_);
if(cljs.core.truth_(or__3824__auto____9601))
{return or__3824__auto____9601;
} else
{var or__3824__auto____9602 = p2.call(null,p1__9296_SHARP_);
if(cljs.core.truth_(or__3824__auto____9602))
{return or__3824__auto____9602;
} else
{return p3.call(null,p1__9296_SHARP_);
}
}
}),args);
}
};
var G__9616 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9616__delegate.call(this, x, y, z, args);
};
G__9616.cljs$lang$maxFixedArity = 3;
G__9616.cljs$lang$applyTo = (function (arglist__9617){
var x = cljs.core.first(arglist__9617);
var y = cljs.core.first(cljs.core.next(arglist__9617));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9617)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9617)));
return G__9616__delegate(x, y, z, args);
});
G__9616.cljs$lang$arity$variadic = G__9616__delegate;
return G__9616;
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
var G__9618__delegate = function (p1,p2,p3,ps){
var ps__9603 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9297_SHARP_){
return p1__9297_SHARP_.call(null,x);
}),ps__9603);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9298_SHARP_){
var or__3824__auto____9608 = p1__9298_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9608))
{return or__3824__auto____9608;
} else
{return p1__9298_SHARP_.call(null,y);
}
}),ps__9603);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9299_SHARP_){
var or__3824__auto____9609 = p1__9299_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9609))
{return or__3824__auto____9609;
} else
{var or__3824__auto____9610 = p1__9299_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9610))
{return or__3824__auto____9610;
} else
{return p1__9299_SHARP_.call(null,z);
}
}
}),ps__9603);
});
var spn__4 = (function() { 
var G__9619__delegate = function (x,y,z,args){
var or__3824__auto____9611 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9611))
{return or__3824__auto____9611;
} else
{return cljs.core.some.call(null,(function (p1__9300_SHARP_){
return cljs.core.some.call(null,p1__9300_SHARP_,args);
}),ps__9603);
}
};
var G__9619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9619__delegate.call(this, x, y, z, args);
};
G__9619.cljs$lang$maxFixedArity = 3;
G__9619.cljs$lang$applyTo = (function (arglist__9620){
var x = cljs.core.first(arglist__9620);
var y = cljs.core.first(cljs.core.next(arglist__9620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9620)));
return G__9619__delegate(x, y, z, args);
});
G__9619.cljs$lang$arity$variadic = G__9619__delegate;
return G__9619;
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
var G__9618 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9618__delegate.call(this, p1, p2, p3, ps);
};
G__9618.cljs$lang$maxFixedArity = 3;
G__9618.cljs$lang$applyTo = (function (arglist__9621){
var p1 = cljs.core.first(arglist__9621);
var p2 = cljs.core.first(cljs.core.next(arglist__9621));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9621)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9621)));
return G__9618__delegate(p1, p2, p3, ps);
});
G__9618.cljs$lang$arity$variadic = G__9618__delegate;
return G__9618;
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
var temp__3974__auto____9640 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9640)
{var s__9641 = temp__3974__auto____9640;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9641))
{var c__9642 = cljs.core.chunk_first.call(null,s__9641);
var size__9643 = cljs.core.count.call(null,c__9642);
var b__9644 = cljs.core.chunk_buffer.call(null,size__9643);
var n__2553__auto____9645 = size__9643;
var i__9646 = 0;
while(true){
if((i__9646 < n__2553__auto____9645))
{cljs.core.chunk_append.call(null,b__9644,f.call(null,cljs.core._nth.call(null,c__9642,i__9646)));
{
var G__9658 = (i__9646 + 1);
i__9646 = G__9658;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9644),map.call(null,f,cljs.core.chunk_rest.call(null,s__9641)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9641)),map.call(null,f,cljs.core.rest.call(null,s__9641)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9647 = cljs.core.seq.call(null,c1);
var s2__9648 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9649 = s1__9647;
if(and__3822__auto____9649)
{return s2__9648;
} else
{return and__3822__auto____9649;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9647),cljs.core.first.call(null,s2__9648)),map.call(null,f,cljs.core.rest.call(null,s1__9647),cljs.core.rest.call(null,s2__9648)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9650 = cljs.core.seq.call(null,c1);
var s2__9651 = cljs.core.seq.call(null,c2);
var s3__9652 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9653 = s1__9650;
if(and__3822__auto____9653)
{var and__3822__auto____9654 = s2__9651;
if(and__3822__auto____9654)
{return s3__9652;
} else
{return and__3822__auto____9654;
}
} else
{return and__3822__auto____9653;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9650),cljs.core.first.call(null,s2__9651),cljs.core.first.call(null,s3__9652)),map.call(null,f,cljs.core.rest.call(null,s1__9650),cljs.core.rest.call(null,s2__9651),cljs.core.rest.call(null,s3__9652)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9659__delegate = function (f,c1,c2,c3,colls){
var step__9657 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9656 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9656))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9656),step.call(null,map.call(null,cljs.core.rest,ss__9656)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9461_SHARP_){
return cljs.core.apply.call(null,f,p1__9461_SHARP_);
}),step__9657.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9659 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9659__delegate.call(this, f, c1, c2, c3, colls);
};
G__9659.cljs$lang$maxFixedArity = 4;
G__9659.cljs$lang$applyTo = (function (arglist__9660){
var f = cljs.core.first(arglist__9660);
var c1 = cljs.core.first(cljs.core.next(arglist__9660));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9660)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9660))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9660))));
return G__9659__delegate(f, c1, c2, c3, colls);
});
G__9659.cljs$lang$arity$variadic = G__9659__delegate;
return G__9659;
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
{var temp__3974__auto____9663 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9663)
{var s__9664 = temp__3974__auto____9663;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9664),take.call(null,(n - 1),cljs.core.rest.call(null,s__9664)));
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
var step__9670 = (function (n,coll){
while(true){
var s__9668 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9669 = (n > 0);
if(and__3822__auto____9669)
{return s__9668;
} else
{return and__3822__auto____9669;
}
})()))
{{
var G__9671 = (n - 1);
var G__9672 = cljs.core.rest.call(null,s__9668);
n = G__9671;
coll = G__9672;
continue;
}
} else
{return s__9668;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9670.call(null,n,coll);
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
var s__9675 = cljs.core.seq.call(null,coll);
var lead__9676 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9676)
{{
var G__9677 = cljs.core.next.call(null,s__9675);
var G__9678 = cljs.core.next.call(null,lead__9676);
s__9675 = G__9677;
lead__9676 = G__9678;
continue;
}
} else
{return s__9675;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9684 = (function (pred,coll){
while(true){
var s__9682 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9683 = s__9682;
if(and__3822__auto____9683)
{return pred.call(null,cljs.core.first.call(null,s__9682));
} else
{return and__3822__auto____9683;
}
})()))
{{
var G__9685 = pred;
var G__9686 = cljs.core.rest.call(null,s__9682);
pred = G__9685;
coll = G__9686;
continue;
}
} else
{return s__9682;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9684.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9689 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9689)
{var s__9690 = temp__3974__auto____9689;
return cljs.core.concat.call(null,s__9690,cycle.call(null,s__9690));
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
var s1__9695 = cljs.core.seq.call(null,c1);
var s2__9696 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9697 = s1__9695;
if(and__3822__auto____9697)
{return s2__9696;
} else
{return and__3822__auto____9697;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9695),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9696),interleave.call(null,cljs.core.rest.call(null,s1__9695),cljs.core.rest.call(null,s2__9696))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9699__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9698 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9698))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9698),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9698)));
} else
{return null;
}
}),null));
};
var G__9699 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9699__delegate.call(this, c1, c2, colls);
};
G__9699.cljs$lang$maxFixedArity = 2;
G__9699.cljs$lang$applyTo = (function (arglist__9700){
var c1 = cljs.core.first(arglist__9700);
var c2 = cljs.core.first(cljs.core.next(arglist__9700));
var colls = cljs.core.rest(cljs.core.next(arglist__9700));
return G__9699__delegate(c1, c2, colls);
});
G__9699.cljs$lang$arity$variadic = G__9699__delegate;
return G__9699;
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
var cat__9710 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9708 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9708)
{var coll__9709 = temp__3971__auto____9708;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9709),cat.call(null,cljs.core.rest.call(null,coll__9709),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9710.call(null,null,colls);
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
var G__9711__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9711 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9711__delegate.call(this, f, coll, colls);
};
G__9711.cljs$lang$maxFixedArity = 2;
G__9711.cljs$lang$applyTo = (function (arglist__9712){
var f = cljs.core.first(arglist__9712);
var coll = cljs.core.first(cljs.core.next(arglist__9712));
var colls = cljs.core.rest(cljs.core.next(arglist__9712));
return G__9711__delegate(f, coll, colls);
});
G__9711.cljs$lang$arity$variadic = G__9711__delegate;
return G__9711;
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
var temp__3974__auto____9722 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9722)
{var s__9723 = temp__3974__auto____9722;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9723))
{var c__9724 = cljs.core.chunk_first.call(null,s__9723);
var size__9725 = cljs.core.count.call(null,c__9724);
var b__9726 = cljs.core.chunk_buffer.call(null,size__9725);
var n__2553__auto____9727 = size__9725;
var i__9728 = 0;
while(true){
if((i__9728 < n__2553__auto____9727))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9724,i__9728))))
{cljs.core.chunk_append.call(null,b__9726,cljs.core._nth.call(null,c__9724,i__9728));
} else
{}
{
var G__9731 = (i__9728 + 1);
i__9728 = G__9731;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9726),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9723)));
} else
{var f__9729 = cljs.core.first.call(null,s__9723);
var r__9730 = cljs.core.rest.call(null,s__9723);
if(cljs.core.truth_(pred.call(null,f__9729)))
{return cljs.core.cons.call(null,f__9729,filter.call(null,pred,r__9730));
} else
{return filter.call(null,pred,r__9730);
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
var walk__9734 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9734.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9732_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9732_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9738__9739 = to;
if(G__9738__9739)
{if((function (){var or__3824__auto____9740 = (G__9738__9739.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9740)
{return or__3824__auto____9740;
} else
{return G__9738__9739.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9738__9739.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9738__9739);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9738__9739);
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
var G__9741__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9741 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9741__delegate.call(this, f, c1, c2, c3, colls);
};
G__9741.cljs$lang$maxFixedArity = 4;
G__9741.cljs$lang$applyTo = (function (arglist__9742){
var f = cljs.core.first(arglist__9742);
var c1 = cljs.core.first(cljs.core.next(arglist__9742));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9742)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9742))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9742))));
return G__9741__delegate(f, c1, c2, c3, colls);
});
G__9741.cljs$lang$arity$variadic = G__9741__delegate;
return G__9741;
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
var temp__3974__auto____9749 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9749)
{var s__9750 = temp__3974__auto____9749;
var p__9751 = cljs.core.take.call(null,n,s__9750);
if((n === cljs.core.count.call(null,p__9751)))
{return cljs.core.cons.call(null,p__9751,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9750)));
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
var temp__3974__auto____9752 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9752)
{var s__9753 = temp__3974__auto____9752;
var p__9754 = cljs.core.take.call(null,n,s__9753);
if((n === cljs.core.count.call(null,p__9754)))
{return cljs.core.cons.call(null,p__9754,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9753)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9754,pad)));
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
var sentinel__9759 = cljs.core.lookup_sentinel;
var m__9760 = m;
var ks__9761 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9761)
{var m__9762 = cljs.core._lookup.call(null,m__9760,cljs.core.first.call(null,ks__9761),sentinel__9759);
if((sentinel__9759 === m__9762))
{return not_found;
} else
{{
var G__9763 = sentinel__9759;
var G__9764 = m__9762;
var G__9765 = cljs.core.next.call(null,ks__9761);
sentinel__9759 = G__9763;
m__9760 = G__9764;
ks__9761 = G__9765;
continue;
}
}
} else
{return m__9760;
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
cljs.core.assoc_in = (function assoc_in(m,p__9766,v){
var vec__9771__9772 = p__9766;
var k__9773 = cljs.core.nth.call(null,vec__9771__9772,0,null);
var ks__9774 = cljs.core.nthnext.call(null,vec__9771__9772,1);
if(cljs.core.truth_(ks__9774))
{return cljs.core.assoc.call(null,m,k__9773,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9773,null),ks__9774,v));
} else
{return cljs.core.assoc.call(null,m,k__9773,v);
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
var update_in__delegate = function (m,p__9775,f,args){
var vec__9780__9781 = p__9775;
var k__9782 = cljs.core.nth.call(null,vec__9780__9781,0,null);
var ks__9783 = cljs.core.nthnext.call(null,vec__9780__9781,1);
if(cljs.core.truth_(ks__9783))
{return cljs.core.assoc.call(null,m,k__9782,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9782,null),ks__9783,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9782,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9782,null),args));
}
};
var update_in = function (m,p__9775,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9775, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9784){
var m = cljs.core.first(arglist__9784);
var p__9775 = cljs.core.first(cljs.core.next(arglist__9784));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9784)));
return update_in__delegate(m, p__9775, f, args);
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
var this__9787 = this;
var h__2218__auto____9788 = this__9787.__hash;
if(!((h__2218__auto____9788 == null)))
{return h__2218__auto____9788;
} else
{var h__2218__auto____9789 = cljs.core.hash_coll.call(null,coll);
this__9787.__hash = h__2218__auto____9789;
return h__2218__auto____9789;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9790 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9791 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9792 = this;
var new_array__9793 = this__9792.array.slice();
(new_array__9793[k] = v);
return (new cljs.core.Vector(this__9792.meta,new_array__9793,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9824 = null;
var G__9824__2 = (function (this_sym9794,k){
var this__9796 = this;
var this_sym9794__9797 = this;
var coll__9798 = this_sym9794__9797;
return coll__9798.cljs$core$ILookup$_lookup$arity$2(coll__9798,k);
});
var G__9824__3 = (function (this_sym9795,k,not_found){
var this__9796 = this;
var this_sym9795__9799 = this;
var coll__9800 = this_sym9795__9799;
return coll__9800.cljs$core$ILookup$_lookup$arity$3(coll__9800,k,not_found);
});
G__9824 = function(this_sym9795,k,not_found){
switch(arguments.length){
case 2:
return G__9824__2.call(this,this_sym9795,k);
case 3:
return G__9824__3.call(this,this_sym9795,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9824;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9785,args9786){
var this__9801 = this;
return this_sym9785.call.apply(this_sym9785,[this_sym9785].concat(args9786.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9802 = this;
var new_array__9803 = this__9802.array.slice();
new_array__9803.push(o);
return (new cljs.core.Vector(this__9802.meta,new_array__9803,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9804 = this;
var this__9805 = this;
return cljs.core.pr_str.call(null,this__9805);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9806 = this;
return cljs.core.ci_reduce.call(null,this__9806.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9807 = this;
return cljs.core.ci_reduce.call(null,this__9807.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9808 = this;
if((this__9808.array.length > 0))
{var vector_seq__9809 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9808.array.length))
{return cljs.core.cons.call(null,(this__9808.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9809.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9810 = this;
return this__9810.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9811 = this;
var count__9812 = this__9811.array.length;
if((count__9812 > 0))
{return (this__9811.array[(count__9812 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9813 = this;
if((this__9813.array.length > 0))
{var new_array__9814 = this__9813.array.slice();
new_array__9814.pop();
return (new cljs.core.Vector(this__9813.meta,new_array__9814,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9815 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9816 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9817 = this;
return (new cljs.core.Vector(meta,this__9817.array,this__9817.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9818 = this;
return this__9818.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9819 = this;
if((function (){var and__3822__auto____9820 = (0 <= n);
if(and__3822__auto____9820)
{return (n < this__9819.array.length);
} else
{return and__3822__auto____9820;
}
})())
{return (this__9819.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9821 = this;
if((function (){var and__3822__auto____9822 = (0 <= n);
if(and__3822__auto____9822)
{return (n < this__9821.array.length);
} else
{return and__3822__auto____9822;
}
})())
{return (this__9821.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9823 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9823.meta);
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
var cnt__9826 = pv.cnt;
if((cnt__9826 < 32))
{return 0;
} else
{return (((cnt__9826 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9832 = level;
var ret__9833 = node;
while(true){
if((ll__9832 === 0))
{return ret__9833;
} else
{var embed__9834 = ret__9833;
var r__9835 = cljs.core.pv_fresh_node.call(null,edit);
var ___9836 = cljs.core.pv_aset.call(null,r__9835,0,embed__9834);
{
var G__9837 = (ll__9832 - 5);
var G__9838 = r__9835;
ll__9832 = G__9837;
ret__9833 = G__9838;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9844 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9845 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9844,subidx__9845,tailnode);
return ret__9844;
} else
{var child__9846 = cljs.core.pv_aget.call(null,parent,subidx__9845);
if(!((child__9846 == null)))
{var node_to_insert__9847 = push_tail.call(null,pv,(level - 5),child__9846,tailnode);
cljs.core.pv_aset.call(null,ret__9844,subidx__9845,node_to_insert__9847);
return ret__9844;
} else
{var node_to_insert__9848 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9844,subidx__9845,node_to_insert__9848);
return ret__9844;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9852 = (0 <= i);
if(and__3822__auto____9852)
{return (i < pv.cnt);
} else
{return and__3822__auto____9852;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9853 = pv.root;
var level__9854 = pv.shift;
while(true){
if((level__9854 > 0))
{{
var G__9855 = cljs.core.pv_aget.call(null,node__9853,((i >>> level__9854) & 31));
var G__9856 = (level__9854 - 5);
node__9853 = G__9855;
level__9854 = G__9856;
continue;
}
} else
{return node__9853.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9859 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9859,(i & 31),val);
return ret__9859;
} else
{var subidx__9860 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9859,subidx__9860,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9860),i,val));
return ret__9859;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9866 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9867 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9866));
if((function (){var and__3822__auto____9868 = (new_child__9867 == null);
if(and__3822__auto____9868)
{return (subidx__9866 === 0);
} else
{return and__3822__auto____9868;
}
})())
{return null;
} else
{var ret__9869 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9869,subidx__9866,new_child__9867);
return ret__9869;
}
} else
{if((subidx__9866 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9870 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9870,subidx__9866,null);
return ret__9870;
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
var this__9873 = this;
return (new cljs.core.TransientVector(this__9873.cnt,this__9873.shift,cljs.core.tv_editable_root.call(null,this__9873.root),cljs.core.tv_editable_tail.call(null,this__9873.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9874 = this;
var h__2218__auto____9875 = this__9874.__hash;
if(!((h__2218__auto____9875 == null)))
{return h__2218__auto____9875;
} else
{var h__2218__auto____9876 = cljs.core.hash_coll.call(null,coll);
this__9874.__hash = h__2218__auto____9876;
return h__2218__auto____9876;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9877 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9878 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9879 = this;
if((function (){var and__3822__auto____9880 = (0 <= k);
if(and__3822__auto____9880)
{return (k < this__9879.cnt);
} else
{return and__3822__auto____9880;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9881 = this__9879.tail.slice();
(new_tail__9881[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9879.meta,this__9879.cnt,this__9879.shift,this__9879.root,new_tail__9881,null));
} else
{return (new cljs.core.PersistentVector(this__9879.meta,this__9879.cnt,this__9879.shift,cljs.core.do_assoc.call(null,coll,this__9879.shift,this__9879.root,k,v),this__9879.tail,null));
}
} else
{if((k === this__9879.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9879.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9929 = null;
var G__9929__2 = (function (this_sym9882,k){
var this__9884 = this;
var this_sym9882__9885 = this;
var coll__9886 = this_sym9882__9885;
return coll__9886.cljs$core$ILookup$_lookup$arity$2(coll__9886,k);
});
var G__9929__3 = (function (this_sym9883,k,not_found){
var this__9884 = this;
var this_sym9883__9887 = this;
var coll__9888 = this_sym9883__9887;
return coll__9888.cljs$core$ILookup$_lookup$arity$3(coll__9888,k,not_found);
});
G__9929 = function(this_sym9883,k,not_found){
switch(arguments.length){
case 2:
return G__9929__2.call(this,this_sym9883,k);
case 3:
return G__9929__3.call(this,this_sym9883,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9929;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9871,args9872){
var this__9889 = this;
return this_sym9871.call.apply(this_sym9871,[this_sym9871].concat(args9872.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9890 = this;
var step_init__9891 = [0,init];
var i__9892 = 0;
while(true){
if((i__9892 < this__9890.cnt))
{var arr__9893 = cljs.core.array_for.call(null,v,i__9892);
var len__9894 = arr__9893.length;
var init__9898 = (function (){var j__9895 = 0;
var init__9896 = (step_init__9891[1]);
while(true){
if((j__9895 < len__9894))
{var init__9897 = f.call(null,init__9896,(j__9895 + i__9892),(arr__9893[j__9895]));
if(cljs.core.reduced_QMARK_.call(null,init__9897))
{return init__9897;
} else
{{
var G__9930 = (j__9895 + 1);
var G__9931 = init__9897;
j__9895 = G__9930;
init__9896 = G__9931;
continue;
}
}
} else
{(step_init__9891[0] = len__9894);
(step_init__9891[1] = init__9896);
return init__9896;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9898))
{return cljs.core.deref.call(null,init__9898);
} else
{{
var G__9932 = (i__9892 + (step_init__9891[0]));
i__9892 = G__9932;
continue;
}
}
} else
{return (step_init__9891[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9899 = this;
if(((this__9899.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9900 = this__9899.tail.slice();
new_tail__9900.push(o);
return (new cljs.core.PersistentVector(this__9899.meta,(this__9899.cnt + 1),this__9899.shift,this__9899.root,new_tail__9900,null));
} else
{var root_overflow_QMARK___9901 = ((this__9899.cnt >>> 5) > (1 << this__9899.shift));
var new_shift__9902 = ((root_overflow_QMARK___9901)?(this__9899.shift + 5):this__9899.shift);
var new_root__9904 = ((root_overflow_QMARK___9901)?(function (){var n_r__9903 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9903,0,this__9899.root);
cljs.core.pv_aset.call(null,n_r__9903,1,cljs.core.new_path.call(null,null,this__9899.shift,(new cljs.core.VectorNode(null,this__9899.tail))));
return n_r__9903;
})():cljs.core.push_tail.call(null,coll,this__9899.shift,this__9899.root,(new cljs.core.VectorNode(null,this__9899.tail))));
return (new cljs.core.PersistentVector(this__9899.meta,(this__9899.cnt + 1),new_shift__9902,new_root__9904,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9905 = this;
if((this__9905.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9905.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9906 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9907 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9908 = this;
var this__9909 = this;
return cljs.core.pr_str.call(null,this__9909);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9910 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9911 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9912 = this;
if((this__9912.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9913 = this;
return this__9913.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9914 = this;
if((this__9914.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9914.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9915 = this;
if((this__9915.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9915.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9915.meta);
} else
{if((1 < (this__9915.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9915.meta,(this__9915.cnt - 1),this__9915.shift,this__9915.root,this__9915.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9916 = cljs.core.array_for.call(null,coll,(this__9915.cnt - 2));
var nr__9917 = cljs.core.pop_tail.call(null,coll,this__9915.shift,this__9915.root);
var new_root__9918 = (((nr__9917 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9917);
var cnt_1__9919 = (this__9915.cnt - 1);
if((function (){var and__3822__auto____9920 = (5 < this__9915.shift);
if(and__3822__auto____9920)
{return (cljs.core.pv_aget.call(null,new_root__9918,1) == null);
} else
{return and__3822__auto____9920;
}
})())
{return (new cljs.core.PersistentVector(this__9915.meta,cnt_1__9919,(this__9915.shift - 5),cljs.core.pv_aget.call(null,new_root__9918,0),new_tail__9916,null));
} else
{return (new cljs.core.PersistentVector(this__9915.meta,cnt_1__9919,this__9915.shift,new_root__9918,new_tail__9916,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9921 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9922 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9923 = this;
return (new cljs.core.PersistentVector(meta,this__9923.cnt,this__9923.shift,this__9923.root,this__9923.tail,this__9923.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9924 = this;
return this__9924.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9925 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9926 = this;
if((function (){var and__3822__auto____9927 = (0 <= n);
if(and__3822__auto____9927)
{return (n < this__9926.cnt);
} else
{return and__3822__auto____9927;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9928 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9928.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9933 = xs.length;
var xs__9934 = (((no_clone === true))?xs:xs.slice());
if((l__9933 < 32))
{return (new cljs.core.PersistentVector(null,l__9933,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9934,null));
} else
{var node__9935 = xs__9934.slice(0,32);
var v__9936 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9935,null));
var i__9937 = 32;
var out__9938 = cljs.core._as_transient.call(null,v__9936);
while(true){
if((i__9937 < l__9933))
{{
var G__9939 = (i__9937 + 1);
var G__9940 = cljs.core.conj_BANG_.call(null,out__9938,(xs__9934[i__9937]));
i__9937 = G__9939;
out__9938 = G__9940;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9938);
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
vector.cljs$lang$applyTo = (function (arglist__9941){
var args = cljs.core.seq(arglist__9941);;
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
var this__9942 = this;
if(((this__9942.off + 1) < this__9942.node.length))
{var s__9943 = cljs.core.chunked_seq.call(null,this__9942.vec,this__9942.node,this__9942.i,(this__9942.off + 1));
if((s__9943 == null))
{return null;
} else
{return s__9943;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9944 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9945 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9946 = this;
return (this__9946.node[this__9946.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9947 = this;
if(((this__9947.off + 1) < this__9947.node.length))
{var s__9948 = cljs.core.chunked_seq.call(null,this__9947.vec,this__9947.node,this__9947.i,(this__9947.off + 1));
if((s__9948 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9948;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9949 = this;
var l__9950 = this__9949.node.length;
var s__9951 = ((((this__9949.i + l__9950) < cljs.core._count.call(null,this__9949.vec)))?cljs.core.chunked_seq.call(null,this__9949.vec,(this__9949.i + l__9950),0):null);
if((s__9951 == null))
{return null;
} else
{return s__9951;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9952 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9953 = this;
return cljs.core.chunked_seq.call(null,this__9953.vec,this__9953.node,this__9953.i,this__9953.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9954 = this;
return this__9954.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9955 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9955.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9956 = this;
return cljs.core.array_chunk.call(null,this__9956.node,this__9956.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9957 = this;
var l__9958 = this__9957.node.length;
var s__9959 = ((((this__9957.i + l__9958) < cljs.core._count.call(null,this__9957.vec)))?cljs.core.chunked_seq.call(null,this__9957.vec,(this__9957.i + l__9958),0):null);
if((s__9959 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9959;
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
var this__9962 = this;
var h__2218__auto____9963 = this__9962.__hash;
if(!((h__2218__auto____9963 == null)))
{return h__2218__auto____9963;
} else
{var h__2218__auto____9964 = cljs.core.hash_coll.call(null,coll);
this__9962.__hash = h__2218__auto____9964;
return h__2218__auto____9964;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9965 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9966 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9967 = this;
var v_pos__9968 = (this__9967.start + key);
return (new cljs.core.Subvec(this__9967.meta,cljs.core._assoc.call(null,this__9967.v,v_pos__9968,val),this__9967.start,((this__9967.end > (v_pos__9968 + 1)) ? this__9967.end : (v_pos__9968 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9994 = null;
var G__9994__2 = (function (this_sym9969,k){
var this__9971 = this;
var this_sym9969__9972 = this;
var coll__9973 = this_sym9969__9972;
return coll__9973.cljs$core$ILookup$_lookup$arity$2(coll__9973,k);
});
var G__9994__3 = (function (this_sym9970,k,not_found){
var this__9971 = this;
var this_sym9970__9974 = this;
var coll__9975 = this_sym9970__9974;
return coll__9975.cljs$core$ILookup$_lookup$arity$3(coll__9975,k,not_found);
});
G__9994 = function(this_sym9970,k,not_found){
switch(arguments.length){
case 2:
return G__9994__2.call(this,this_sym9970,k);
case 3:
return G__9994__3.call(this,this_sym9970,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9994;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9960,args9961){
var this__9976 = this;
return this_sym9960.call.apply(this_sym9960,[this_sym9960].concat(args9961.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9977 = this;
return (new cljs.core.Subvec(this__9977.meta,cljs.core._assoc_n.call(null,this__9977.v,this__9977.end,o),this__9977.start,(this__9977.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9978 = this;
var this__9979 = this;
return cljs.core.pr_str.call(null,this__9979);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9980 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9981 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9982 = this;
var subvec_seq__9983 = (function subvec_seq(i){
if((i === this__9982.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9982.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9983.call(null,this__9982.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9984 = this;
return (this__9984.end - this__9984.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9985 = this;
return cljs.core._nth.call(null,this__9985.v,(this__9985.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9986 = this;
if((this__9986.start === this__9986.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9986.meta,this__9986.v,this__9986.start,(this__9986.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9987 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9989 = this;
return (new cljs.core.Subvec(meta,this__9989.v,this__9989.start,this__9989.end,this__9989.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9990 = this;
return this__9990.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9991 = this;
return cljs.core._nth.call(null,this__9991.v,(this__9991.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9992 = this;
return cljs.core._nth.call(null,this__9992.v,(this__9992.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9993 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9993.meta);
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
var ret__9996 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9996,0,tl.length);
return ret__9996;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10000 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10001 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10000,subidx__10001,(((level === 5))?tail_node:(function (){var child__10002 = cljs.core.pv_aget.call(null,ret__10000,subidx__10001);
if(!((child__10002 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10002,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10000;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10007 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10008 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10009 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10007,subidx__10008));
if((function (){var and__3822__auto____10010 = (new_child__10009 == null);
if(and__3822__auto____10010)
{return (subidx__10008 === 0);
} else
{return and__3822__auto____10010;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10007,subidx__10008,new_child__10009);
return node__10007;
}
} else
{if((subidx__10008 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10007,subidx__10008,null);
return node__10007;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10015 = (0 <= i);
if(and__3822__auto____10015)
{return (i < tv.cnt);
} else
{return and__3822__auto____10015;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10016 = tv.root;
var node__10017 = root__10016;
var level__10018 = tv.shift;
while(true){
if((level__10018 > 0))
{{
var G__10019 = cljs.core.tv_ensure_editable.call(null,root__10016.edit,cljs.core.pv_aget.call(null,node__10017,((i >>> level__10018) & 31)));
var G__10020 = (level__10018 - 5);
node__10017 = G__10019;
level__10018 = G__10020;
continue;
}
} else
{return node__10017.arr;
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
var G__10060 = null;
var G__10060__2 = (function (this_sym10023,k){
var this__10025 = this;
var this_sym10023__10026 = this;
var coll__10027 = this_sym10023__10026;
return coll__10027.cljs$core$ILookup$_lookup$arity$2(coll__10027,k);
});
var G__10060__3 = (function (this_sym10024,k,not_found){
var this__10025 = this;
var this_sym10024__10028 = this;
var coll__10029 = this_sym10024__10028;
return coll__10029.cljs$core$ILookup$_lookup$arity$3(coll__10029,k,not_found);
});
G__10060 = function(this_sym10024,k,not_found){
switch(arguments.length){
case 2:
return G__10060__2.call(this,this_sym10024,k);
case 3:
return G__10060__3.call(this,this_sym10024,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10060;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10021,args10022){
var this__10030 = this;
return this_sym10021.call.apply(this_sym10021,[this_sym10021].concat(args10022.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10031 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10032 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10033 = this;
if(this__10033.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10034 = this;
if((function (){var and__3822__auto____10035 = (0 <= n);
if(and__3822__auto____10035)
{return (n < this__10034.cnt);
} else
{return and__3822__auto____10035;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10036 = this;
if(this__10036.root.edit)
{return this__10036.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10037 = this;
if(this__10037.root.edit)
{if((function (){var and__3822__auto____10038 = (0 <= n);
if(and__3822__auto____10038)
{return (n < this__10037.cnt);
} else
{return and__3822__auto____10038;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10037.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10043 = (function go(level,node){
var node__10041 = cljs.core.tv_ensure_editable.call(null,this__10037.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10041,(n & 31),val);
return node__10041;
} else
{var subidx__10042 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10041,subidx__10042,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10041,subidx__10042)));
return node__10041;
}
}).call(null,this__10037.shift,this__10037.root);
this__10037.root = new_root__10043;
return tcoll;
}
} else
{if((n === this__10037.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10037.cnt)].join('')));
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
var this__10044 = this;
if(this__10044.root.edit)
{if((this__10044.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10044.cnt))
{this__10044.cnt = 0;
return tcoll;
} else
{if((((this__10044.cnt - 1) & 31) > 0))
{this__10044.cnt = (this__10044.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10045 = cljs.core.editable_array_for.call(null,tcoll,(this__10044.cnt - 2));
var new_root__10047 = (function (){var nr__10046 = cljs.core.tv_pop_tail.call(null,tcoll,this__10044.shift,this__10044.root);
if(!((nr__10046 == null)))
{return nr__10046;
} else
{return (new cljs.core.VectorNode(this__10044.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10048 = (5 < this__10044.shift);
if(and__3822__auto____10048)
{return (cljs.core.pv_aget.call(null,new_root__10047,1) == null);
} else
{return and__3822__auto____10048;
}
})())
{var new_root__10049 = cljs.core.tv_ensure_editable.call(null,this__10044.root.edit,cljs.core.pv_aget.call(null,new_root__10047,0));
this__10044.root = new_root__10049;
this__10044.shift = (this__10044.shift - 5);
this__10044.cnt = (this__10044.cnt - 1);
this__10044.tail = new_tail__10045;
return tcoll;
} else
{this__10044.root = new_root__10047;
this__10044.cnt = (this__10044.cnt - 1);
this__10044.tail = new_tail__10045;
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
var this__10050 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10051 = this;
if(this__10051.root.edit)
{if(((this__10051.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10051.tail[(this__10051.cnt & 31)] = o);
this__10051.cnt = (this__10051.cnt + 1);
return tcoll;
} else
{var tail_node__10052 = (new cljs.core.VectorNode(this__10051.root.edit,this__10051.tail));
var new_tail__10053 = cljs.core.make_array.call(null,32);
(new_tail__10053[0] = o);
this__10051.tail = new_tail__10053;
if(((this__10051.cnt >>> 5) > (1 << this__10051.shift)))
{var new_root_array__10054 = cljs.core.make_array.call(null,32);
var new_shift__10055 = (this__10051.shift + 5);
(new_root_array__10054[0] = this__10051.root);
(new_root_array__10054[1] = cljs.core.new_path.call(null,this__10051.root.edit,this__10051.shift,tail_node__10052));
this__10051.root = (new cljs.core.VectorNode(this__10051.root.edit,new_root_array__10054));
this__10051.shift = new_shift__10055;
this__10051.cnt = (this__10051.cnt + 1);
return tcoll;
} else
{var new_root__10056 = cljs.core.tv_push_tail.call(null,tcoll,this__10051.shift,this__10051.root,tail_node__10052);
this__10051.root = new_root__10056;
this__10051.cnt = (this__10051.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10057 = this;
if(this__10057.root.edit)
{this__10057.root.edit = null;
var len__10058 = (this__10057.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10059 = cljs.core.make_array.call(null,len__10058);
cljs.core.array_copy.call(null,this__10057.tail,0,trimmed_tail__10059,0,len__10058);
return (new cljs.core.PersistentVector(null,this__10057.cnt,this__10057.shift,this__10057.root,trimmed_tail__10059,null));
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
var this__10061 = this;
var h__2218__auto____10062 = this__10061.__hash;
if(!((h__2218__auto____10062 == null)))
{return h__2218__auto____10062;
} else
{var h__2218__auto____10063 = cljs.core.hash_coll.call(null,coll);
this__10061.__hash = h__2218__auto____10063;
return h__2218__auto____10063;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10064 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10065 = this;
var this__10066 = this;
return cljs.core.pr_str.call(null,this__10066);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10067 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10068 = this;
return cljs.core._first.call(null,this__10068.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10069 = this;
var temp__3971__auto____10070 = cljs.core.next.call(null,this__10069.front);
if(temp__3971__auto____10070)
{var f1__10071 = temp__3971__auto____10070;
return (new cljs.core.PersistentQueueSeq(this__10069.meta,f1__10071,this__10069.rear,null));
} else
{if((this__10069.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10069.meta,this__10069.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10073 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10073.front,this__10073.rear,this__10073.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10074 = this;
return this__10074.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10075 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10075.meta);
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
var this__10076 = this;
var h__2218__auto____10077 = this__10076.__hash;
if(!((h__2218__auto____10077 == null)))
{return h__2218__auto____10077;
} else
{var h__2218__auto____10078 = cljs.core.hash_coll.call(null,coll);
this__10076.__hash = h__2218__auto____10078;
return h__2218__auto____10078;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10079 = this;
if(cljs.core.truth_(this__10079.front))
{return (new cljs.core.PersistentQueue(this__10079.meta,(this__10079.count + 1),this__10079.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10080 = this__10079.rear;
if(cljs.core.truth_(or__3824__auto____10080))
{return or__3824__auto____10080;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10079.meta,(this__10079.count + 1),cljs.core.conj.call(null,this__10079.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10081 = this;
var this__10082 = this;
return cljs.core.pr_str.call(null,this__10082);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10083 = this;
var rear__10084 = cljs.core.seq.call(null,this__10083.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10085 = this__10083.front;
if(cljs.core.truth_(or__3824__auto____10085))
{return or__3824__auto____10085;
} else
{return rear__10084;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10083.front,cljs.core.seq.call(null,rear__10084),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10086 = this;
return this__10086.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10087 = this;
return cljs.core._first.call(null,this__10087.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10088 = this;
if(cljs.core.truth_(this__10088.front))
{var temp__3971__auto____10089 = cljs.core.next.call(null,this__10088.front);
if(temp__3971__auto____10089)
{var f1__10090 = temp__3971__auto____10089;
return (new cljs.core.PersistentQueue(this__10088.meta,(this__10088.count - 1),f1__10090,this__10088.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10088.meta,(this__10088.count - 1),cljs.core.seq.call(null,this__10088.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10091 = this;
return cljs.core.first.call(null,this__10091.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10092 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10093 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10094 = this;
return (new cljs.core.PersistentQueue(meta,this__10094.count,this__10094.front,this__10094.rear,this__10094.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10095 = this;
return this__10095.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10096 = this;
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
var this__10097 = this;
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
var len__10100 = array.length;
var i__10101 = 0;
while(true){
if((i__10101 < len__10100))
{if((k === (array[i__10101])))
{return i__10101;
} else
{{
var G__10102 = (i__10101 + incr);
i__10101 = G__10102;
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
var a__10105 = cljs.core.hash.call(null,a);
var b__10106 = cljs.core.hash.call(null,b);
if((a__10105 < b__10106))
{return -1;
} else
{if((a__10105 > b__10106))
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
var ks__10114 = m.keys;
var len__10115 = ks__10114.length;
var so__10116 = m.strobj;
var out__10117 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10118 = 0;
var out__10119 = cljs.core.transient$.call(null,out__10117);
while(true){
if((i__10118 < len__10115))
{var k__10120 = (ks__10114[i__10118]);
{
var G__10121 = (i__10118 + 1);
var G__10122 = cljs.core.assoc_BANG_.call(null,out__10119,k__10120,(so__10116[k__10120]));
i__10118 = G__10121;
out__10119 = G__10122;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10119,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10128 = {};
var l__10129 = ks.length;
var i__10130 = 0;
while(true){
if((i__10130 < l__10129))
{var k__10131 = (ks[i__10130]);
(new_obj__10128[k__10131] = (obj[k__10131]));
{
var G__10132 = (i__10130 + 1);
i__10130 = G__10132;
continue;
}
} else
{}
break;
}
return new_obj__10128;
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
var this__10135 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10136 = this;
var h__2218__auto____10137 = this__10136.__hash;
if(!((h__2218__auto____10137 == null)))
{return h__2218__auto____10137;
} else
{var h__2218__auto____10138 = cljs.core.hash_imap.call(null,coll);
this__10136.__hash = h__2218__auto____10138;
return h__2218__auto____10138;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10139 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10140 = this;
if((function (){var and__3822__auto____10141 = goog.isString(k);
if(and__3822__auto____10141)
{return !((cljs.core.scan_array.call(null,1,k,this__10140.keys) == null));
} else
{return and__3822__auto____10141;
}
})())
{return (this__10140.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10142 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10143 = (this__10142.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10143)
{return or__3824__auto____10143;
} else
{return (this__10142.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10142.keys) == null)))
{var new_strobj__10144 = cljs.core.obj_clone.call(null,this__10142.strobj,this__10142.keys);
(new_strobj__10144[k] = v);
return (new cljs.core.ObjMap(this__10142.meta,this__10142.keys,new_strobj__10144,(this__10142.update_count + 1),null));
} else
{var new_strobj__10145 = cljs.core.obj_clone.call(null,this__10142.strobj,this__10142.keys);
var new_keys__10146 = this__10142.keys.slice();
(new_strobj__10145[k] = v);
new_keys__10146.push(k);
return (new cljs.core.ObjMap(this__10142.meta,new_keys__10146,new_strobj__10145,(this__10142.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10147 = this;
if((function (){var and__3822__auto____10148 = goog.isString(k);
if(and__3822__auto____10148)
{return !((cljs.core.scan_array.call(null,1,k,this__10147.keys) == null));
} else
{return and__3822__auto____10148;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10170 = null;
var G__10170__2 = (function (this_sym10149,k){
var this__10151 = this;
var this_sym10149__10152 = this;
var coll__10153 = this_sym10149__10152;
return coll__10153.cljs$core$ILookup$_lookup$arity$2(coll__10153,k);
});
var G__10170__3 = (function (this_sym10150,k,not_found){
var this__10151 = this;
var this_sym10150__10154 = this;
var coll__10155 = this_sym10150__10154;
return coll__10155.cljs$core$ILookup$_lookup$arity$3(coll__10155,k,not_found);
});
G__10170 = function(this_sym10150,k,not_found){
switch(arguments.length){
case 2:
return G__10170__2.call(this,this_sym10150,k);
case 3:
return G__10170__3.call(this,this_sym10150,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10170;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10133,args10134){
var this__10156 = this;
return this_sym10133.call.apply(this_sym10133,[this_sym10133].concat(args10134.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10157 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10158 = this;
var this__10159 = this;
return cljs.core.pr_str.call(null,this__10159);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10160 = this;
if((this__10160.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10123_SHARP_){
return cljs.core.vector.call(null,p1__10123_SHARP_,(this__10160.strobj[p1__10123_SHARP_]));
}),this__10160.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10161 = this;
return this__10161.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10162 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10163 = this;
return (new cljs.core.ObjMap(meta,this__10163.keys,this__10163.strobj,this__10163.update_count,this__10163.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10164 = this;
return this__10164.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10165 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10165.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10166 = this;
if((function (){var and__3822__auto____10167 = goog.isString(k);
if(and__3822__auto____10167)
{return !((cljs.core.scan_array.call(null,1,k,this__10166.keys) == null));
} else
{return and__3822__auto____10167;
}
})())
{var new_keys__10168 = this__10166.keys.slice();
var new_strobj__10169 = cljs.core.obj_clone.call(null,this__10166.strobj,this__10166.keys);
new_keys__10168.splice(cljs.core.scan_array.call(null,1,k,new_keys__10168),1);
cljs.core.js_delete.call(null,new_strobj__10169,k);
return (new cljs.core.ObjMap(this__10166.meta,new_keys__10168,new_strobj__10169,(this__10166.update_count + 1),null));
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
var this__10174 = this;
var h__2218__auto____10175 = this__10174.__hash;
if(!((h__2218__auto____10175 == null)))
{return h__2218__auto____10175;
} else
{var h__2218__auto____10176 = cljs.core.hash_imap.call(null,coll);
this__10174.__hash = h__2218__auto____10176;
return h__2218__auto____10176;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10177 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10178 = this;
var bucket__10179 = (this__10178.hashobj[cljs.core.hash.call(null,k)]);
var i__10180 = (cljs.core.truth_(bucket__10179)?cljs.core.scan_array.call(null,2,k,bucket__10179):null);
if(cljs.core.truth_(i__10180))
{return (bucket__10179[(i__10180 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10181 = this;
var h__10182 = cljs.core.hash.call(null,k);
var bucket__10183 = (this__10181.hashobj[h__10182]);
if(cljs.core.truth_(bucket__10183))
{var new_bucket__10184 = bucket__10183.slice();
var new_hashobj__10185 = goog.object.clone(this__10181.hashobj);
(new_hashobj__10185[h__10182] = new_bucket__10184);
var temp__3971__auto____10186 = cljs.core.scan_array.call(null,2,k,new_bucket__10184);
if(cljs.core.truth_(temp__3971__auto____10186))
{var i__10187 = temp__3971__auto____10186;
(new_bucket__10184[(i__10187 + 1)] = v);
return (new cljs.core.HashMap(this__10181.meta,this__10181.count,new_hashobj__10185,null));
} else
{new_bucket__10184.push(k,v);
return (new cljs.core.HashMap(this__10181.meta,(this__10181.count + 1),new_hashobj__10185,null));
}
} else
{var new_hashobj__10188 = goog.object.clone(this__10181.hashobj);
(new_hashobj__10188[h__10182] = [k,v]);
return (new cljs.core.HashMap(this__10181.meta,(this__10181.count + 1),new_hashobj__10188,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10189 = this;
var bucket__10190 = (this__10189.hashobj[cljs.core.hash.call(null,k)]);
var i__10191 = (cljs.core.truth_(bucket__10190)?cljs.core.scan_array.call(null,2,k,bucket__10190):null);
if(cljs.core.truth_(i__10191))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10216 = null;
var G__10216__2 = (function (this_sym10192,k){
var this__10194 = this;
var this_sym10192__10195 = this;
var coll__10196 = this_sym10192__10195;
return coll__10196.cljs$core$ILookup$_lookup$arity$2(coll__10196,k);
});
var G__10216__3 = (function (this_sym10193,k,not_found){
var this__10194 = this;
var this_sym10193__10197 = this;
var coll__10198 = this_sym10193__10197;
return coll__10198.cljs$core$ILookup$_lookup$arity$3(coll__10198,k,not_found);
});
G__10216 = function(this_sym10193,k,not_found){
switch(arguments.length){
case 2:
return G__10216__2.call(this,this_sym10193,k);
case 3:
return G__10216__3.call(this,this_sym10193,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10216;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10172,args10173){
var this__10199 = this;
return this_sym10172.call.apply(this_sym10172,[this_sym10172].concat(args10173.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10200 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10201 = this;
var this__10202 = this;
return cljs.core.pr_str.call(null,this__10202);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10203 = this;
if((this__10203.count > 0))
{var hashes__10204 = cljs.core.js_keys.call(null,this__10203.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10171_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10203.hashobj[p1__10171_SHARP_])));
}),hashes__10204);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10205 = this;
return this__10205.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10206 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10207 = this;
return (new cljs.core.HashMap(meta,this__10207.count,this__10207.hashobj,this__10207.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10208 = this;
return this__10208.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10209 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10209.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10210 = this;
var h__10211 = cljs.core.hash.call(null,k);
var bucket__10212 = (this__10210.hashobj[h__10211]);
var i__10213 = (cljs.core.truth_(bucket__10212)?cljs.core.scan_array.call(null,2,k,bucket__10212):null);
if(cljs.core.not.call(null,i__10213))
{return coll;
} else
{var new_hashobj__10214 = goog.object.clone(this__10210.hashobj);
if((3 > bucket__10212.length))
{cljs.core.js_delete.call(null,new_hashobj__10214,h__10211);
} else
{var new_bucket__10215 = bucket__10212.slice();
new_bucket__10215.splice(i__10213,2);
(new_hashobj__10214[h__10211] = new_bucket__10215);
}
return (new cljs.core.HashMap(this__10210.meta,(this__10210.count - 1),new_hashobj__10214,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10217 = ks.length;
var i__10218 = 0;
var out__10219 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10218 < len__10217))
{{
var G__10220 = (i__10218 + 1);
var G__10221 = cljs.core.assoc.call(null,out__10219,(ks[i__10218]),(vs[i__10218]));
i__10218 = G__10220;
out__10219 = G__10221;
continue;
}
} else
{return out__10219;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10225 = m.arr;
var len__10226 = arr__10225.length;
var i__10227 = 0;
while(true){
if((len__10226 <= i__10227))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10225[i__10227]),k))
{return i__10227;
} else
{if("\uFDD0'else")
{{
var G__10228 = (i__10227 + 2);
i__10227 = G__10228;
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
var this__10231 = this;
return (new cljs.core.TransientArrayMap({},this__10231.arr.length,this__10231.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10232 = this;
var h__2218__auto____10233 = this__10232.__hash;
if(!((h__2218__auto____10233 == null)))
{return h__2218__auto____10233;
} else
{var h__2218__auto____10234 = cljs.core.hash_imap.call(null,coll);
this__10232.__hash = h__2218__auto____10234;
return h__2218__auto____10234;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10235 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10236 = this;
var idx__10237 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10237 === -1))
{return not_found;
} else
{return (this__10236.arr[(idx__10237 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10238 = this;
var idx__10239 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10239 === -1))
{if((this__10238.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10238.meta,(this__10238.cnt + 1),(function (){var G__10240__10241 = this__10238.arr.slice();
G__10240__10241.push(k);
G__10240__10241.push(v);
return G__10240__10241;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10238.arr[(idx__10239 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10238.meta,this__10238.cnt,(function (){var G__10242__10243 = this__10238.arr.slice();
(G__10242__10243[(idx__10239 + 1)] = v);
return G__10242__10243;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10244 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10276 = null;
var G__10276__2 = (function (this_sym10245,k){
var this__10247 = this;
var this_sym10245__10248 = this;
var coll__10249 = this_sym10245__10248;
return coll__10249.cljs$core$ILookup$_lookup$arity$2(coll__10249,k);
});
var G__10276__3 = (function (this_sym10246,k,not_found){
var this__10247 = this;
var this_sym10246__10250 = this;
var coll__10251 = this_sym10246__10250;
return coll__10251.cljs$core$ILookup$_lookup$arity$3(coll__10251,k,not_found);
});
G__10276 = function(this_sym10246,k,not_found){
switch(arguments.length){
case 2:
return G__10276__2.call(this,this_sym10246,k);
case 3:
return G__10276__3.call(this,this_sym10246,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10276;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10229,args10230){
var this__10252 = this;
return this_sym10229.call.apply(this_sym10229,[this_sym10229].concat(args10230.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10253 = this;
var len__10254 = this__10253.arr.length;
var i__10255 = 0;
var init__10256 = init;
while(true){
if((i__10255 < len__10254))
{var init__10257 = f.call(null,init__10256,(this__10253.arr[i__10255]),(this__10253.arr[(i__10255 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10257))
{return cljs.core.deref.call(null,init__10257);
} else
{{
var G__10277 = (i__10255 + 2);
var G__10278 = init__10257;
i__10255 = G__10277;
init__10256 = G__10278;
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
var this__10258 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10259 = this;
var this__10260 = this;
return cljs.core.pr_str.call(null,this__10260);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10261 = this;
if((this__10261.cnt > 0))
{var len__10262 = this__10261.arr.length;
var array_map_seq__10263 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10262))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10261.arr[i]),(this__10261.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10263.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10264 = this;
return this__10264.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10265 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10266 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10266.cnt,this__10266.arr,this__10266.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10267 = this;
return this__10267.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10268 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10268.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10269 = this;
var idx__10270 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10270 >= 0))
{var len__10271 = this__10269.arr.length;
var new_len__10272 = (len__10271 - 2);
if((new_len__10272 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10273 = cljs.core.make_array.call(null,new_len__10272);
var s__10274 = 0;
var d__10275 = 0;
while(true){
if((s__10274 >= len__10271))
{return (new cljs.core.PersistentArrayMap(this__10269.meta,(this__10269.cnt - 1),new_arr__10273,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10269.arr[s__10274])))
{{
var G__10279 = (s__10274 + 2);
var G__10280 = d__10275;
s__10274 = G__10279;
d__10275 = G__10280;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10273[d__10275] = (this__10269.arr[s__10274]));
(new_arr__10273[(d__10275 + 1)] = (this__10269.arr[(s__10274 + 1)]));
{
var G__10281 = (s__10274 + 2);
var G__10282 = (d__10275 + 2);
s__10274 = G__10281;
d__10275 = G__10282;
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
var len__10283 = cljs.core.count.call(null,ks);
var i__10284 = 0;
var out__10285 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10284 < len__10283))
{{
var G__10286 = (i__10284 + 1);
var G__10287 = cljs.core.assoc_BANG_.call(null,out__10285,(ks[i__10284]),(vs[i__10284]));
i__10284 = G__10286;
out__10285 = G__10287;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10285);
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
var this__10288 = this;
if(cljs.core.truth_(this__10288.editable_QMARK_))
{var idx__10289 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10289 >= 0))
{(this__10288.arr[idx__10289] = (this__10288.arr[(this__10288.len - 2)]));
(this__10288.arr[(idx__10289 + 1)] = (this__10288.arr[(this__10288.len - 1)]));
var G__10290__10291 = this__10288.arr;
G__10290__10291.pop();
G__10290__10291.pop();
G__10290__10291;
this__10288.len = (this__10288.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10292 = this;
if(cljs.core.truth_(this__10292.editable_QMARK_))
{var idx__10293 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10293 === -1))
{if(((this__10292.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10292.len = (this__10292.len + 2);
this__10292.arr.push(key);
this__10292.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10292.len,this__10292.arr),key,val);
}
} else
{if((val === (this__10292.arr[(idx__10293 + 1)])))
{return tcoll;
} else
{(this__10292.arr[(idx__10293 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10294 = this;
if(cljs.core.truth_(this__10294.editable_QMARK_))
{if((function (){var G__10295__10296 = o;
if(G__10295__10296)
{if((function (){var or__3824__auto____10297 = (G__10295__10296.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10297)
{return or__3824__auto____10297;
} else
{return G__10295__10296.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10295__10296.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10295__10296);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10295__10296);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10298 = cljs.core.seq.call(null,o);
var tcoll__10299 = tcoll;
while(true){
var temp__3971__auto____10300 = cljs.core.first.call(null,es__10298);
if(cljs.core.truth_(temp__3971__auto____10300))
{var e__10301 = temp__3971__auto____10300;
{
var G__10307 = cljs.core.next.call(null,es__10298);
var G__10308 = tcoll__10299.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10299,cljs.core.key.call(null,e__10301),cljs.core.val.call(null,e__10301));
es__10298 = G__10307;
tcoll__10299 = G__10308;
continue;
}
} else
{return tcoll__10299;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10302 = this;
if(cljs.core.truth_(this__10302.editable_QMARK_))
{this__10302.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10302.len,2),this__10302.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10303 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10304 = this;
if(cljs.core.truth_(this__10304.editable_QMARK_))
{var idx__10305 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10305 === -1))
{return not_found;
} else
{return (this__10304.arr[(idx__10305 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10306 = this;
if(cljs.core.truth_(this__10306.editable_QMARK_))
{return cljs.core.quot.call(null,this__10306.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10311 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10312 = 0;
while(true){
if((i__10312 < len))
{{
var G__10313 = cljs.core.assoc_BANG_.call(null,out__10311,(arr[i__10312]),(arr[(i__10312 + 1)]));
var G__10314 = (i__10312 + 2);
out__10311 = G__10313;
i__10312 = G__10314;
continue;
}
} else
{return out__10311;
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
var G__10319__10320 = arr.slice();
(G__10319__10320[i] = a);
return G__10319__10320;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10321__10322 = arr.slice();
(G__10321__10322[i] = a);
(G__10321__10322[j] = b);
return G__10321__10322;
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
var new_arr__10324 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10324,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10324,(2 * i),(new_arr__10324.length - (2 * i)));
return new_arr__10324;
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
var editable__10327 = inode.ensure_editable(edit);
(editable__10327.arr[i] = a);
return editable__10327;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10328 = inode.ensure_editable(edit);
(editable__10328.arr[i] = a);
(editable__10328.arr[j] = b);
return editable__10328;
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
var len__10335 = arr.length;
var i__10336 = 0;
var init__10337 = init;
while(true){
if((i__10336 < len__10335))
{var init__10340 = (function (){var k__10338 = (arr[i__10336]);
if(!((k__10338 == null)))
{return f.call(null,init__10337,k__10338,(arr[(i__10336 + 1)]));
} else
{var node__10339 = (arr[(i__10336 + 1)]);
if(!((node__10339 == null)))
{return node__10339.kv_reduce(f,init__10337);
} else
{return init__10337;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10340))
{return cljs.core.deref.call(null,init__10340);
} else
{{
var G__10341 = (i__10336 + 2);
var G__10342 = init__10340;
i__10336 = G__10341;
init__10337 = G__10342;
continue;
}
}
} else
{return init__10337;
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
var this__10343 = this;
var inode__10344 = this;
if((this__10343.bitmap === bit))
{return null;
} else
{var editable__10345 = inode__10344.ensure_editable(e);
var earr__10346 = editable__10345.arr;
var len__10347 = earr__10346.length;
editable__10345.bitmap = (bit ^ editable__10345.bitmap);
cljs.core.array_copy.call(null,earr__10346,(2 * (i + 1)),earr__10346,(2 * i),(len__10347 - (2 * (i + 1))));
(earr__10346[(len__10347 - 2)] = null);
(earr__10346[(len__10347 - 1)] = null);
return editable__10345;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10348 = this;
var inode__10349 = this;
var bit__10350 = (1 << ((hash >>> shift) & 0x01f));
var idx__10351 = cljs.core.bitmap_indexed_node_index.call(null,this__10348.bitmap,bit__10350);
if(((this__10348.bitmap & bit__10350) === 0))
{var n__10352 = cljs.core.bit_count.call(null,this__10348.bitmap);
if(((2 * n__10352) < this__10348.arr.length))
{var editable__10353 = inode__10349.ensure_editable(edit);
var earr__10354 = editable__10353.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10354,(2 * idx__10351),earr__10354,(2 * (idx__10351 + 1)),(2 * (n__10352 - idx__10351)));
(earr__10354[(2 * idx__10351)] = key);
(earr__10354[((2 * idx__10351) + 1)] = val);
editable__10353.bitmap = (editable__10353.bitmap | bit__10350);
return editable__10353;
} else
{if((n__10352 >= 16))
{var nodes__10355 = cljs.core.make_array.call(null,32);
var jdx__10356 = ((hash >>> shift) & 0x01f);
(nodes__10355[jdx__10356] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10357 = 0;
var j__10358 = 0;
while(true){
if((i__10357 < 32))
{if((((this__10348.bitmap >>> i__10357) & 1) === 0))
{{
var G__10411 = (i__10357 + 1);
var G__10412 = j__10358;
i__10357 = G__10411;
j__10358 = G__10412;
continue;
}
} else
{(nodes__10355[i__10357] = ((!(((this__10348.arr[j__10358]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10348.arr[j__10358])),(this__10348.arr[j__10358]),(this__10348.arr[(j__10358 + 1)]),added_leaf_QMARK_):(this__10348.arr[(j__10358 + 1)])));
{
var G__10413 = (i__10357 + 1);
var G__10414 = (j__10358 + 2);
i__10357 = G__10413;
j__10358 = G__10414;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10352 + 1),nodes__10355));
} else
{if("\uFDD0'else")
{var new_arr__10359 = cljs.core.make_array.call(null,(2 * (n__10352 + 4)));
cljs.core.array_copy.call(null,this__10348.arr,0,new_arr__10359,0,(2 * idx__10351));
(new_arr__10359[(2 * idx__10351)] = key);
(new_arr__10359[((2 * idx__10351) + 1)] = val);
cljs.core.array_copy.call(null,this__10348.arr,(2 * idx__10351),new_arr__10359,(2 * (idx__10351 + 1)),(2 * (n__10352 - idx__10351)));
added_leaf_QMARK_.val = true;
var editable__10360 = inode__10349.ensure_editable(edit);
editable__10360.arr = new_arr__10359;
editable__10360.bitmap = (editable__10360.bitmap | bit__10350);
return editable__10360;
} else
{return null;
}
}
}
} else
{var key_or_nil__10361 = (this__10348.arr[(2 * idx__10351)]);
var val_or_node__10362 = (this__10348.arr[((2 * idx__10351) + 1)]);
if((key_or_nil__10361 == null))
{var n__10363 = val_or_node__10362.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10363 === val_or_node__10362))
{return inode__10349;
} else
{return cljs.core.edit_and_set.call(null,inode__10349,edit,((2 * idx__10351) + 1),n__10363);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10361))
{if((val === val_or_node__10362))
{return inode__10349;
} else
{return cljs.core.edit_and_set.call(null,inode__10349,edit,((2 * idx__10351) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10349,edit,(2 * idx__10351),null,((2 * idx__10351) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10361,val_or_node__10362,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10364 = this;
var inode__10365 = this;
return cljs.core.create_inode_seq.call(null,this__10364.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10366 = this;
var inode__10367 = this;
var bit__10368 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10366.bitmap & bit__10368) === 0))
{return inode__10367;
} else
{var idx__10369 = cljs.core.bitmap_indexed_node_index.call(null,this__10366.bitmap,bit__10368);
var key_or_nil__10370 = (this__10366.arr[(2 * idx__10369)]);
var val_or_node__10371 = (this__10366.arr[((2 * idx__10369) + 1)]);
if((key_or_nil__10370 == null))
{var n__10372 = val_or_node__10371.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10372 === val_or_node__10371))
{return inode__10367;
} else
{if(!((n__10372 == null)))
{return cljs.core.edit_and_set.call(null,inode__10367,edit,((2 * idx__10369) + 1),n__10372);
} else
{if((this__10366.bitmap === bit__10368))
{return null;
} else
{if("\uFDD0'else")
{return inode__10367.edit_and_remove_pair(edit,bit__10368,idx__10369);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10370))
{(removed_leaf_QMARK_[0] = true);
return inode__10367.edit_and_remove_pair(edit,bit__10368,idx__10369);
} else
{if("\uFDD0'else")
{return inode__10367;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10373 = this;
var inode__10374 = this;
if((e === this__10373.edit))
{return inode__10374;
} else
{var n__10375 = cljs.core.bit_count.call(null,this__10373.bitmap);
var new_arr__10376 = cljs.core.make_array.call(null,(((n__10375 < 0))?4:(2 * (n__10375 + 1))));
cljs.core.array_copy.call(null,this__10373.arr,0,new_arr__10376,0,(2 * n__10375));
return (new cljs.core.BitmapIndexedNode(e,this__10373.bitmap,new_arr__10376));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10377 = this;
var inode__10378 = this;
return cljs.core.inode_kv_reduce.call(null,this__10377.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10379 = this;
var inode__10380 = this;
var bit__10381 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10379.bitmap & bit__10381) === 0))
{return not_found;
} else
{var idx__10382 = cljs.core.bitmap_indexed_node_index.call(null,this__10379.bitmap,bit__10381);
var key_or_nil__10383 = (this__10379.arr[(2 * idx__10382)]);
var val_or_node__10384 = (this__10379.arr[((2 * idx__10382) + 1)]);
if((key_or_nil__10383 == null))
{return val_or_node__10384.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10383))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10383,val_or_node__10384], true);
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
var this__10385 = this;
var inode__10386 = this;
var bit__10387 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10385.bitmap & bit__10387) === 0))
{return inode__10386;
} else
{var idx__10388 = cljs.core.bitmap_indexed_node_index.call(null,this__10385.bitmap,bit__10387);
var key_or_nil__10389 = (this__10385.arr[(2 * idx__10388)]);
var val_or_node__10390 = (this__10385.arr[((2 * idx__10388) + 1)]);
if((key_or_nil__10389 == null))
{var n__10391 = val_or_node__10390.inode_without((shift + 5),hash,key);
if((n__10391 === val_or_node__10390))
{return inode__10386;
} else
{if(!((n__10391 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10385.bitmap,cljs.core.clone_and_set.call(null,this__10385.arr,((2 * idx__10388) + 1),n__10391)));
} else
{if((this__10385.bitmap === bit__10387))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10385.bitmap ^ bit__10387),cljs.core.remove_pair.call(null,this__10385.arr,idx__10388)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10389))
{return (new cljs.core.BitmapIndexedNode(null,(this__10385.bitmap ^ bit__10387),cljs.core.remove_pair.call(null,this__10385.arr,idx__10388)));
} else
{if("\uFDD0'else")
{return inode__10386;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10392 = this;
var inode__10393 = this;
var bit__10394 = (1 << ((hash >>> shift) & 0x01f));
var idx__10395 = cljs.core.bitmap_indexed_node_index.call(null,this__10392.bitmap,bit__10394);
if(((this__10392.bitmap & bit__10394) === 0))
{var n__10396 = cljs.core.bit_count.call(null,this__10392.bitmap);
if((n__10396 >= 16))
{var nodes__10397 = cljs.core.make_array.call(null,32);
var jdx__10398 = ((hash >>> shift) & 0x01f);
(nodes__10397[jdx__10398] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10399 = 0;
var j__10400 = 0;
while(true){
if((i__10399 < 32))
{if((((this__10392.bitmap >>> i__10399) & 1) === 0))
{{
var G__10415 = (i__10399 + 1);
var G__10416 = j__10400;
i__10399 = G__10415;
j__10400 = G__10416;
continue;
}
} else
{(nodes__10397[i__10399] = ((!(((this__10392.arr[j__10400]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10392.arr[j__10400])),(this__10392.arr[j__10400]),(this__10392.arr[(j__10400 + 1)]),added_leaf_QMARK_):(this__10392.arr[(j__10400 + 1)])));
{
var G__10417 = (i__10399 + 1);
var G__10418 = (j__10400 + 2);
i__10399 = G__10417;
j__10400 = G__10418;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10396 + 1),nodes__10397));
} else
{var new_arr__10401 = cljs.core.make_array.call(null,(2 * (n__10396 + 1)));
cljs.core.array_copy.call(null,this__10392.arr,0,new_arr__10401,0,(2 * idx__10395));
(new_arr__10401[(2 * idx__10395)] = key);
(new_arr__10401[((2 * idx__10395) + 1)] = val);
cljs.core.array_copy.call(null,this__10392.arr,(2 * idx__10395),new_arr__10401,(2 * (idx__10395 + 1)),(2 * (n__10396 - idx__10395)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10392.bitmap | bit__10394),new_arr__10401));
}
} else
{var key_or_nil__10402 = (this__10392.arr[(2 * idx__10395)]);
var val_or_node__10403 = (this__10392.arr[((2 * idx__10395) + 1)]);
if((key_or_nil__10402 == null))
{var n__10404 = val_or_node__10403.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10404 === val_or_node__10403))
{return inode__10393;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10392.bitmap,cljs.core.clone_and_set.call(null,this__10392.arr,((2 * idx__10395) + 1),n__10404)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10402))
{if((val === val_or_node__10403))
{return inode__10393;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10392.bitmap,cljs.core.clone_and_set.call(null,this__10392.arr,((2 * idx__10395) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10392.bitmap,cljs.core.clone_and_set.call(null,this__10392.arr,(2 * idx__10395),null,((2 * idx__10395) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10402,val_or_node__10403,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10405 = this;
var inode__10406 = this;
var bit__10407 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10405.bitmap & bit__10407) === 0))
{return not_found;
} else
{var idx__10408 = cljs.core.bitmap_indexed_node_index.call(null,this__10405.bitmap,bit__10407);
var key_or_nil__10409 = (this__10405.arr[(2 * idx__10408)]);
var val_or_node__10410 = (this__10405.arr[((2 * idx__10408) + 1)]);
if((key_or_nil__10409 == null))
{return val_or_node__10410.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10409))
{return val_or_node__10410;
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
var arr__10426 = array_node.arr;
var len__10427 = (2 * (array_node.cnt - 1));
var new_arr__10428 = cljs.core.make_array.call(null,len__10427);
var i__10429 = 0;
var j__10430 = 1;
var bitmap__10431 = 0;
while(true){
if((i__10429 < len__10427))
{if((function (){var and__3822__auto____10432 = !((i__10429 === idx));
if(and__3822__auto____10432)
{return !(((arr__10426[i__10429]) == null));
} else
{return and__3822__auto____10432;
}
})())
{(new_arr__10428[j__10430] = (arr__10426[i__10429]));
{
var G__10433 = (i__10429 + 1);
var G__10434 = (j__10430 + 2);
var G__10435 = (bitmap__10431 | (1 << i__10429));
i__10429 = G__10433;
j__10430 = G__10434;
bitmap__10431 = G__10435;
continue;
}
} else
{{
var G__10436 = (i__10429 + 1);
var G__10437 = j__10430;
var G__10438 = bitmap__10431;
i__10429 = G__10436;
j__10430 = G__10437;
bitmap__10431 = G__10438;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10431,new_arr__10428));
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
var this__10439 = this;
var inode__10440 = this;
var idx__10441 = ((hash >>> shift) & 0x01f);
var node__10442 = (this__10439.arr[idx__10441]);
if((node__10442 == null))
{var editable__10443 = cljs.core.edit_and_set.call(null,inode__10440,edit,idx__10441,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10443.cnt = (editable__10443.cnt + 1);
return editable__10443;
} else
{var n__10444 = node__10442.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10444 === node__10442))
{return inode__10440;
} else
{return cljs.core.edit_and_set.call(null,inode__10440,edit,idx__10441,n__10444);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10445 = this;
var inode__10446 = this;
return cljs.core.create_array_node_seq.call(null,this__10445.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10447 = this;
var inode__10448 = this;
var idx__10449 = ((hash >>> shift) & 0x01f);
var node__10450 = (this__10447.arr[idx__10449]);
if((node__10450 == null))
{return inode__10448;
} else
{var n__10451 = node__10450.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10451 === node__10450))
{return inode__10448;
} else
{if((n__10451 == null))
{if((this__10447.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10448,edit,idx__10449);
} else
{var editable__10452 = cljs.core.edit_and_set.call(null,inode__10448,edit,idx__10449,n__10451);
editable__10452.cnt = (editable__10452.cnt - 1);
return editable__10452;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10448,edit,idx__10449,n__10451);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10453 = this;
var inode__10454 = this;
if((e === this__10453.edit))
{return inode__10454;
} else
{return (new cljs.core.ArrayNode(e,this__10453.cnt,this__10453.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10455 = this;
var inode__10456 = this;
var len__10457 = this__10455.arr.length;
var i__10458 = 0;
var init__10459 = init;
while(true){
if((i__10458 < len__10457))
{var node__10460 = (this__10455.arr[i__10458]);
if(!((node__10460 == null)))
{var init__10461 = node__10460.kv_reduce(f,init__10459);
if(cljs.core.reduced_QMARK_.call(null,init__10461))
{return cljs.core.deref.call(null,init__10461);
} else
{{
var G__10480 = (i__10458 + 1);
var G__10481 = init__10461;
i__10458 = G__10480;
init__10459 = G__10481;
continue;
}
}
} else
{return null;
}
} else
{return init__10459;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10462 = this;
var inode__10463 = this;
var idx__10464 = ((hash >>> shift) & 0x01f);
var node__10465 = (this__10462.arr[idx__10464]);
if(!((node__10465 == null)))
{return node__10465.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10466 = this;
var inode__10467 = this;
var idx__10468 = ((hash >>> shift) & 0x01f);
var node__10469 = (this__10466.arr[idx__10468]);
if(!((node__10469 == null)))
{var n__10470 = node__10469.inode_without((shift + 5),hash,key);
if((n__10470 === node__10469))
{return inode__10467;
} else
{if((n__10470 == null))
{if((this__10466.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10467,null,idx__10468);
} else
{return (new cljs.core.ArrayNode(null,(this__10466.cnt - 1),cljs.core.clone_and_set.call(null,this__10466.arr,idx__10468,n__10470)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10466.cnt,cljs.core.clone_and_set.call(null,this__10466.arr,idx__10468,n__10470)));
} else
{return null;
}
}
}
} else
{return inode__10467;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10471 = this;
var inode__10472 = this;
var idx__10473 = ((hash >>> shift) & 0x01f);
var node__10474 = (this__10471.arr[idx__10473]);
if((node__10474 == null))
{return (new cljs.core.ArrayNode(null,(this__10471.cnt + 1),cljs.core.clone_and_set.call(null,this__10471.arr,idx__10473,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10475 = node__10474.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10475 === node__10474))
{return inode__10472;
} else
{return (new cljs.core.ArrayNode(null,this__10471.cnt,cljs.core.clone_and_set.call(null,this__10471.arr,idx__10473,n__10475)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10476 = this;
var inode__10477 = this;
var idx__10478 = ((hash >>> shift) & 0x01f);
var node__10479 = (this__10476.arr[idx__10478]);
if(!((node__10479 == null)))
{return node__10479.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10484 = (2 * cnt);
var i__10485 = 0;
while(true){
if((i__10485 < lim__10484))
{if(cljs.core.key_test.call(null,key,(arr[i__10485])))
{return i__10485;
} else
{{
var G__10486 = (i__10485 + 2);
i__10485 = G__10486;
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
var this__10487 = this;
var inode__10488 = this;
if((hash === this__10487.collision_hash))
{var idx__10489 = cljs.core.hash_collision_node_find_index.call(null,this__10487.arr,this__10487.cnt,key);
if((idx__10489 === -1))
{if((this__10487.arr.length > (2 * this__10487.cnt)))
{var editable__10490 = cljs.core.edit_and_set.call(null,inode__10488,edit,(2 * this__10487.cnt),key,((2 * this__10487.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10490.cnt = (editable__10490.cnt + 1);
return editable__10490;
} else
{var len__10491 = this__10487.arr.length;
var new_arr__10492 = cljs.core.make_array.call(null,(len__10491 + 2));
cljs.core.array_copy.call(null,this__10487.arr,0,new_arr__10492,0,len__10491);
(new_arr__10492[len__10491] = key);
(new_arr__10492[(len__10491 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10488.ensure_editable_array(edit,(this__10487.cnt + 1),new_arr__10492);
}
} else
{if(((this__10487.arr[(idx__10489 + 1)]) === val))
{return inode__10488;
} else
{return cljs.core.edit_and_set.call(null,inode__10488,edit,(idx__10489 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10487.collision_hash >>> shift) & 0x01f)),[null,inode__10488,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10493 = this;
var inode__10494 = this;
return cljs.core.create_inode_seq.call(null,this__10493.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10495 = this;
var inode__10496 = this;
var idx__10497 = cljs.core.hash_collision_node_find_index.call(null,this__10495.arr,this__10495.cnt,key);
if((idx__10497 === -1))
{return inode__10496;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10495.cnt === 1))
{return null;
} else
{var editable__10498 = inode__10496.ensure_editable(edit);
var earr__10499 = editable__10498.arr;
(earr__10499[idx__10497] = (earr__10499[((2 * this__10495.cnt) - 2)]));
(earr__10499[(idx__10497 + 1)] = (earr__10499[((2 * this__10495.cnt) - 1)]));
(earr__10499[((2 * this__10495.cnt) - 1)] = null);
(earr__10499[((2 * this__10495.cnt) - 2)] = null);
editable__10498.cnt = (editable__10498.cnt - 1);
return editable__10498;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10500 = this;
var inode__10501 = this;
if((e === this__10500.edit))
{return inode__10501;
} else
{var new_arr__10502 = cljs.core.make_array.call(null,(2 * (this__10500.cnt + 1)));
cljs.core.array_copy.call(null,this__10500.arr,0,new_arr__10502,0,(2 * this__10500.cnt));
return (new cljs.core.HashCollisionNode(e,this__10500.collision_hash,this__10500.cnt,new_arr__10502));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10503 = this;
var inode__10504 = this;
return cljs.core.inode_kv_reduce.call(null,this__10503.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10505 = this;
var inode__10506 = this;
var idx__10507 = cljs.core.hash_collision_node_find_index.call(null,this__10505.arr,this__10505.cnt,key);
if((idx__10507 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10505.arr[idx__10507])))
{return cljs.core.PersistentVector.fromArray([(this__10505.arr[idx__10507]),(this__10505.arr[(idx__10507 + 1)])], true);
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
var this__10508 = this;
var inode__10509 = this;
var idx__10510 = cljs.core.hash_collision_node_find_index.call(null,this__10508.arr,this__10508.cnt,key);
if((idx__10510 === -1))
{return inode__10509;
} else
{if((this__10508.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10508.collision_hash,(this__10508.cnt - 1),cljs.core.remove_pair.call(null,this__10508.arr,cljs.core.quot.call(null,idx__10510,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10511 = this;
var inode__10512 = this;
if((hash === this__10511.collision_hash))
{var idx__10513 = cljs.core.hash_collision_node_find_index.call(null,this__10511.arr,this__10511.cnt,key);
if((idx__10513 === -1))
{var len__10514 = this__10511.arr.length;
var new_arr__10515 = cljs.core.make_array.call(null,(len__10514 + 2));
cljs.core.array_copy.call(null,this__10511.arr,0,new_arr__10515,0,len__10514);
(new_arr__10515[len__10514] = key);
(new_arr__10515[(len__10514 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10511.collision_hash,(this__10511.cnt + 1),new_arr__10515));
} else
{if(cljs.core._EQ_.call(null,(this__10511.arr[idx__10513]),val))
{return inode__10512;
} else
{return (new cljs.core.HashCollisionNode(null,this__10511.collision_hash,this__10511.cnt,cljs.core.clone_and_set.call(null,this__10511.arr,(idx__10513 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10511.collision_hash >>> shift) & 0x01f)),[null,inode__10512])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10516 = this;
var inode__10517 = this;
var idx__10518 = cljs.core.hash_collision_node_find_index.call(null,this__10516.arr,this__10516.cnt,key);
if((idx__10518 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10516.arr[idx__10518])))
{return (this__10516.arr[(idx__10518 + 1)]);
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
var this__10519 = this;
var inode__10520 = this;
if((e === this__10519.edit))
{this__10519.arr = array;
this__10519.cnt = count;
return inode__10520;
} else
{return (new cljs.core.HashCollisionNode(this__10519.edit,this__10519.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10525 = cljs.core.hash.call(null,key1);
if((key1hash__10525 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10525,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10526 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10525,key1,val1,added_leaf_QMARK___10526).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10526);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10527 = cljs.core.hash.call(null,key1);
if((key1hash__10527 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10527,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10528 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10527,key1,val1,added_leaf_QMARK___10528).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10528);
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
var this__10529 = this;
var h__2218__auto____10530 = this__10529.__hash;
if(!((h__2218__auto____10530 == null)))
{return h__2218__auto____10530;
} else
{var h__2218__auto____10531 = cljs.core.hash_coll.call(null,coll);
this__10529.__hash = h__2218__auto____10531;
return h__2218__auto____10531;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10532 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10533 = this;
var this__10534 = this;
return cljs.core.pr_str.call(null,this__10534);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10535 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10536 = this;
if((this__10536.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10536.nodes[this__10536.i]),(this__10536.nodes[(this__10536.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10536.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10537 = this;
if((this__10537.s == null))
{return cljs.core.create_inode_seq.call(null,this__10537.nodes,(this__10537.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10537.nodes,this__10537.i,cljs.core.next.call(null,this__10537.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10538 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10539 = this;
return (new cljs.core.NodeSeq(meta,this__10539.nodes,this__10539.i,this__10539.s,this__10539.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10540 = this;
return this__10540.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10541 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10541.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10548 = nodes.length;
var j__10549 = i;
while(true){
if((j__10549 < len__10548))
{if(!(((nodes[j__10549]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10549,null,null));
} else
{var temp__3971__auto____10550 = (nodes[(j__10549 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10550))
{var node__10551 = temp__3971__auto____10550;
var temp__3971__auto____10552 = node__10551.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10552))
{var node_seq__10553 = temp__3971__auto____10552;
return (new cljs.core.NodeSeq(null,nodes,(j__10549 + 2),node_seq__10553,null));
} else
{{
var G__10554 = (j__10549 + 2);
j__10549 = G__10554;
continue;
}
}
} else
{{
var G__10555 = (j__10549 + 2);
j__10549 = G__10555;
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
var this__10556 = this;
var h__2218__auto____10557 = this__10556.__hash;
if(!((h__2218__auto____10557 == null)))
{return h__2218__auto____10557;
} else
{var h__2218__auto____10558 = cljs.core.hash_coll.call(null,coll);
this__10556.__hash = h__2218__auto____10558;
return h__2218__auto____10558;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10559 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10560 = this;
var this__10561 = this;
return cljs.core.pr_str.call(null,this__10561);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10562 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10563 = this;
return cljs.core.first.call(null,this__10563.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10564 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10564.nodes,this__10564.i,cljs.core.next.call(null,this__10564.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10566 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10566.nodes,this__10566.i,this__10566.s,this__10566.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10567 = this;
return this__10567.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10568 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10568.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10575 = nodes.length;
var j__10576 = i;
while(true){
if((j__10576 < len__10575))
{var temp__3971__auto____10577 = (nodes[j__10576]);
if(cljs.core.truth_(temp__3971__auto____10577))
{var nj__10578 = temp__3971__auto____10577;
var temp__3971__auto____10579 = nj__10578.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10579))
{var ns__10580 = temp__3971__auto____10579;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10576 + 1),ns__10580,null));
} else
{{
var G__10581 = (j__10576 + 1);
j__10576 = G__10581;
continue;
}
}
} else
{{
var G__10582 = (j__10576 + 1);
j__10576 = G__10582;
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
var this__10585 = this;
return (new cljs.core.TransientHashMap({},this__10585.root,this__10585.cnt,this__10585.has_nil_QMARK_,this__10585.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10586 = this;
var h__2218__auto____10587 = this__10586.__hash;
if(!((h__2218__auto____10587 == null)))
{return h__2218__auto____10587;
} else
{var h__2218__auto____10588 = cljs.core.hash_imap.call(null,coll);
this__10586.__hash = h__2218__auto____10588;
return h__2218__auto____10588;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10589 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10590 = this;
if((k == null))
{if(this__10590.has_nil_QMARK_)
{return this__10590.nil_val;
} else
{return not_found;
}
} else
{if((this__10590.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10590.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10591 = this;
if((k == null))
{if((function (){var and__3822__auto____10592 = this__10591.has_nil_QMARK_;
if(and__3822__auto____10592)
{return (v === this__10591.nil_val);
} else
{return and__3822__auto____10592;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10591.meta,((this__10591.has_nil_QMARK_)?this__10591.cnt:(this__10591.cnt + 1)),this__10591.root,true,v,null));
}
} else
{var added_leaf_QMARK___10593 = (new cljs.core.Box(false));
var new_root__10594 = (((this__10591.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10591.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10593);
if((new_root__10594 === this__10591.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10591.meta,((added_leaf_QMARK___10593.val)?(this__10591.cnt + 1):this__10591.cnt),new_root__10594,this__10591.has_nil_QMARK_,this__10591.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10595 = this;
if((k == null))
{return this__10595.has_nil_QMARK_;
} else
{if((this__10595.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10595.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10618 = null;
var G__10618__2 = (function (this_sym10596,k){
var this__10598 = this;
var this_sym10596__10599 = this;
var coll__10600 = this_sym10596__10599;
return coll__10600.cljs$core$ILookup$_lookup$arity$2(coll__10600,k);
});
var G__10618__3 = (function (this_sym10597,k,not_found){
var this__10598 = this;
var this_sym10597__10601 = this;
var coll__10602 = this_sym10597__10601;
return coll__10602.cljs$core$ILookup$_lookup$arity$3(coll__10602,k,not_found);
});
G__10618 = function(this_sym10597,k,not_found){
switch(arguments.length){
case 2:
return G__10618__2.call(this,this_sym10597,k);
case 3:
return G__10618__3.call(this,this_sym10597,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10618;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10583,args10584){
var this__10603 = this;
return this_sym10583.call.apply(this_sym10583,[this_sym10583].concat(args10584.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10604 = this;
var init__10605 = ((this__10604.has_nil_QMARK_)?f.call(null,init,null,this__10604.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10605))
{return cljs.core.deref.call(null,init__10605);
} else
{if(!((this__10604.root == null)))
{return this__10604.root.kv_reduce(f,init__10605);
} else
{if("\uFDD0'else")
{return init__10605;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10606 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10607 = this;
var this__10608 = this;
return cljs.core.pr_str.call(null,this__10608);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10609 = this;
if((this__10609.cnt > 0))
{var s__10610 = ((!((this__10609.root == null)))?this__10609.root.inode_seq():null);
if(this__10609.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10609.nil_val], true),s__10610);
} else
{return s__10610;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10611 = this;
return this__10611.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10612 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10613 = this;
return (new cljs.core.PersistentHashMap(meta,this__10613.cnt,this__10613.root,this__10613.has_nil_QMARK_,this__10613.nil_val,this__10613.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10614 = this;
return this__10614.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10615 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10615.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10616 = this;
if((k == null))
{if(this__10616.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10616.meta,(this__10616.cnt - 1),this__10616.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10616.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10617 = this__10616.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10617 === this__10616.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10616.meta,(this__10616.cnt - 1),new_root__10617,this__10616.has_nil_QMARK_,this__10616.nil_val,null));
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
var len__10619 = ks.length;
var i__10620 = 0;
var out__10621 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10620 < len__10619))
{{
var G__10622 = (i__10620 + 1);
var G__10623 = cljs.core.assoc_BANG_.call(null,out__10621,(ks[i__10620]),(vs[i__10620]));
i__10620 = G__10622;
out__10621 = G__10623;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10621);
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
var this__10624 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10625 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10626 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10627 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10628 = this;
if((k == null))
{if(this__10628.has_nil_QMARK_)
{return this__10628.nil_val;
} else
{return null;
}
} else
{if((this__10628.root == null))
{return null;
} else
{return this__10628.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10629 = this;
if((k == null))
{if(this__10629.has_nil_QMARK_)
{return this__10629.nil_val;
} else
{return not_found;
}
} else
{if((this__10629.root == null))
{return not_found;
} else
{return this__10629.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10630 = this;
if(this__10630.edit)
{return this__10630.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10631 = this;
var tcoll__10632 = this;
if(this__10631.edit)
{if((function (){var G__10633__10634 = o;
if(G__10633__10634)
{if((function (){var or__3824__auto____10635 = (G__10633__10634.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10635)
{return or__3824__auto____10635;
} else
{return G__10633__10634.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10633__10634.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10633__10634);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10633__10634);
}
})())
{return tcoll__10632.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10636 = cljs.core.seq.call(null,o);
var tcoll__10637 = tcoll__10632;
while(true){
var temp__3971__auto____10638 = cljs.core.first.call(null,es__10636);
if(cljs.core.truth_(temp__3971__auto____10638))
{var e__10639 = temp__3971__auto____10638;
{
var G__10650 = cljs.core.next.call(null,es__10636);
var G__10651 = tcoll__10637.assoc_BANG_(cljs.core.key.call(null,e__10639),cljs.core.val.call(null,e__10639));
es__10636 = G__10650;
tcoll__10637 = G__10651;
continue;
}
} else
{return tcoll__10637;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10640 = this;
var tcoll__10641 = this;
if(this__10640.edit)
{if((k == null))
{if((this__10640.nil_val === v))
{} else
{this__10640.nil_val = v;
}
if(this__10640.has_nil_QMARK_)
{} else
{this__10640.count = (this__10640.count + 1);
this__10640.has_nil_QMARK_ = true;
}
return tcoll__10641;
} else
{var added_leaf_QMARK___10642 = (new cljs.core.Box(false));
var node__10643 = (((this__10640.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10640.root).inode_assoc_BANG_(this__10640.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10642);
if((node__10643 === this__10640.root))
{} else
{this__10640.root = node__10643;
}
if(added_leaf_QMARK___10642.val)
{this__10640.count = (this__10640.count + 1);
} else
{}
return tcoll__10641;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10644 = this;
var tcoll__10645 = this;
if(this__10644.edit)
{if((k == null))
{if(this__10644.has_nil_QMARK_)
{this__10644.has_nil_QMARK_ = false;
this__10644.nil_val = null;
this__10644.count = (this__10644.count - 1);
return tcoll__10645;
} else
{return tcoll__10645;
}
} else
{if((this__10644.root == null))
{return tcoll__10645;
} else
{var removed_leaf_QMARK___10646 = (new cljs.core.Box(false));
var node__10647 = this__10644.root.inode_without_BANG_(this__10644.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10646);
if((node__10647 === this__10644.root))
{} else
{this__10644.root = node__10647;
}
if(cljs.core.truth_((removed_leaf_QMARK___10646[0])))
{this__10644.count = (this__10644.count - 1);
} else
{}
return tcoll__10645;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10648 = this;
var tcoll__10649 = this;
if(this__10648.edit)
{this__10648.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10648.count,this__10648.root,this__10648.has_nil_QMARK_,this__10648.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10654 = node;
var stack__10655 = stack;
while(true){
if(!((t__10654 == null)))
{{
var G__10656 = ((ascending_QMARK_)?t__10654.left:t__10654.right);
var G__10657 = cljs.core.conj.call(null,stack__10655,t__10654);
t__10654 = G__10656;
stack__10655 = G__10657;
continue;
}
} else
{return stack__10655;
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
var this__10658 = this;
var h__2218__auto____10659 = this__10658.__hash;
if(!((h__2218__auto____10659 == null)))
{return h__2218__auto____10659;
} else
{var h__2218__auto____10660 = cljs.core.hash_coll.call(null,coll);
this__10658.__hash = h__2218__auto____10660;
return h__2218__auto____10660;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10661 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10662 = this;
var this__10663 = this;
return cljs.core.pr_str.call(null,this__10663);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10664 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10665 = this;
if((this__10665.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10665.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10666 = this;
return cljs.core.peek.call(null,this__10666.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10667 = this;
var t__10668 = cljs.core.first.call(null,this__10667.stack);
var next_stack__10669 = cljs.core.tree_map_seq_push.call(null,((this__10667.ascending_QMARK_)?t__10668.right:t__10668.left),cljs.core.next.call(null,this__10667.stack),this__10667.ascending_QMARK_);
if(!((next_stack__10669 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10669,this__10667.ascending_QMARK_,(this__10667.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10670 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10671 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10671.stack,this__10671.ascending_QMARK_,this__10671.cnt,this__10671.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10672 = this;
return this__10672.meta;
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
{if((function (){var and__3822__auto____10674 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10674)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10674;
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
{if((function (){var and__3822__auto____10676 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10676)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10676;
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
var init__10680 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10680))
{return cljs.core.deref.call(null,init__10680);
} else
{var init__10681 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10680):init__10680);
if(cljs.core.reduced_QMARK_.call(null,init__10681))
{return cljs.core.deref.call(null,init__10681);
} else
{var init__10682 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10681):init__10681);
if(cljs.core.reduced_QMARK_.call(null,init__10682))
{return cljs.core.deref.call(null,init__10682);
} else
{return init__10682;
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
var this__10685 = this;
var h__2218__auto____10686 = this__10685.__hash;
if(!((h__2218__auto____10686 == null)))
{return h__2218__auto____10686;
} else
{var h__2218__auto____10687 = cljs.core.hash_coll.call(null,coll);
this__10685.__hash = h__2218__auto____10687;
return h__2218__auto____10687;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10688 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10689 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10690 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10690.key,this__10690.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10738 = null;
var G__10738__2 = (function (this_sym10691,k){
var this__10693 = this;
var this_sym10691__10694 = this;
var node__10695 = this_sym10691__10694;
return node__10695.cljs$core$ILookup$_lookup$arity$2(node__10695,k);
});
var G__10738__3 = (function (this_sym10692,k,not_found){
var this__10693 = this;
var this_sym10692__10696 = this;
var node__10697 = this_sym10692__10696;
return node__10697.cljs$core$ILookup$_lookup$arity$3(node__10697,k,not_found);
});
G__10738 = function(this_sym10692,k,not_found){
switch(arguments.length){
case 2:
return G__10738__2.call(this,this_sym10692,k);
case 3:
return G__10738__3.call(this,this_sym10692,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10738;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10683,args10684){
var this__10698 = this;
return this_sym10683.call.apply(this_sym10683,[this_sym10683].concat(args10684.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10699 = this;
return cljs.core.PersistentVector.fromArray([this__10699.key,this__10699.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10700 = this;
return this__10700.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10701 = this;
return this__10701.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10702 = this;
var node__10703 = this;
return ins.balance_right(node__10703);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10704 = this;
var node__10705 = this;
return (new cljs.core.RedNode(this__10704.key,this__10704.val,this__10704.left,this__10704.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10706 = this;
var node__10707 = this;
return cljs.core.balance_right_del.call(null,this__10706.key,this__10706.val,this__10706.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10708 = this;
var node__10709 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10710 = this;
var node__10711 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10711,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10712 = this;
var node__10713 = this;
return cljs.core.balance_left_del.call(null,this__10712.key,this__10712.val,del,this__10712.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10714 = this;
var node__10715 = this;
return ins.balance_left(node__10715);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10716 = this;
var node__10717 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10717,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10739 = null;
var G__10739__0 = (function (){
var this__10718 = this;
var this__10720 = this;
return cljs.core.pr_str.call(null,this__10720);
});
G__10739 = function(){
switch(arguments.length){
case 0:
return G__10739__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10739;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10721 = this;
var node__10722 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10722,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10723 = this;
var node__10724 = this;
return node__10724;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10725 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10726 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10727 = this;
return cljs.core.list.call(null,this__10727.key,this__10727.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10728 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10729 = this;
return this__10729.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10730 = this;
return cljs.core.PersistentVector.fromArray([this__10730.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10731 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10731.key,this__10731.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10732 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10733 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10733.key,this__10733.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10734 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10735 = this;
if((n === 0))
{return this__10735.key;
} else
{if((n === 1))
{return this__10735.val;
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
var this__10736 = this;
if((n === 0))
{return this__10736.key;
} else
{if((n === 1))
{return this__10736.val;
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
var this__10737 = this;
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
var this__10742 = this;
var h__2218__auto____10743 = this__10742.__hash;
if(!((h__2218__auto____10743 == null)))
{return h__2218__auto____10743;
} else
{var h__2218__auto____10744 = cljs.core.hash_coll.call(null,coll);
this__10742.__hash = h__2218__auto____10744;
return h__2218__auto____10744;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10745 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10746 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10747 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10747.key,this__10747.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10795 = null;
var G__10795__2 = (function (this_sym10748,k){
var this__10750 = this;
var this_sym10748__10751 = this;
var node__10752 = this_sym10748__10751;
return node__10752.cljs$core$ILookup$_lookup$arity$2(node__10752,k);
});
var G__10795__3 = (function (this_sym10749,k,not_found){
var this__10750 = this;
var this_sym10749__10753 = this;
var node__10754 = this_sym10749__10753;
return node__10754.cljs$core$ILookup$_lookup$arity$3(node__10754,k,not_found);
});
G__10795 = function(this_sym10749,k,not_found){
switch(arguments.length){
case 2:
return G__10795__2.call(this,this_sym10749,k);
case 3:
return G__10795__3.call(this,this_sym10749,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10795;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10740,args10741){
var this__10755 = this;
return this_sym10740.call.apply(this_sym10740,[this_sym10740].concat(args10741.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10756 = this;
return cljs.core.PersistentVector.fromArray([this__10756.key,this__10756.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10757 = this;
return this__10757.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10758 = this;
return this__10758.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10759 = this;
var node__10760 = this;
return (new cljs.core.RedNode(this__10759.key,this__10759.val,this__10759.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10761 = this;
var node__10762 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10763 = this;
var node__10764 = this;
return (new cljs.core.RedNode(this__10763.key,this__10763.val,this__10763.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10765 = this;
var node__10766 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10767 = this;
var node__10768 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10768,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10769 = this;
var node__10770 = this;
return (new cljs.core.RedNode(this__10769.key,this__10769.val,del,this__10769.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10771 = this;
var node__10772 = this;
return (new cljs.core.RedNode(this__10771.key,this__10771.val,ins,this__10771.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10773 = this;
var node__10774 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10773.left))
{return (new cljs.core.RedNode(this__10773.key,this__10773.val,this__10773.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10773.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10773.right))
{return (new cljs.core.RedNode(this__10773.right.key,this__10773.right.val,(new cljs.core.BlackNode(this__10773.key,this__10773.val,this__10773.left,this__10773.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10773.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10774,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10796 = null;
var G__10796__0 = (function (){
var this__10775 = this;
var this__10777 = this;
return cljs.core.pr_str.call(null,this__10777);
});
G__10796 = function(){
switch(arguments.length){
case 0:
return G__10796__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10796;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10778 = this;
var node__10779 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10778.right))
{return (new cljs.core.RedNode(this__10778.key,this__10778.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10778.left,null)),this__10778.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10778.left))
{return (new cljs.core.RedNode(this__10778.left.key,this__10778.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10778.left.left,null)),(new cljs.core.BlackNode(this__10778.key,this__10778.val,this__10778.left.right,this__10778.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10779,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10780 = this;
var node__10781 = this;
return (new cljs.core.BlackNode(this__10780.key,this__10780.val,this__10780.left,this__10780.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10782 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10783 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10784 = this;
return cljs.core.list.call(null,this__10784.key,this__10784.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10785 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10786 = this;
return this__10786.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10787 = this;
return cljs.core.PersistentVector.fromArray([this__10787.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10788 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10788.key,this__10788.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10789 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10790 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10790.key,this__10790.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10791 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10792 = this;
if((n === 0))
{return this__10792.key;
} else
{if((n === 1))
{return this__10792.val;
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
var this__10793 = this;
if((n === 0))
{return this__10793.key;
} else
{if((n === 1))
{return this__10793.val;
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
var this__10794 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10800 = comp.call(null,k,tree.key);
if((c__10800 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10800 < 0))
{var ins__10801 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10801 == null)))
{return tree.add_left(ins__10801);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10802 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10802 == null)))
{return tree.add_right(ins__10802);
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
{var app__10805 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10805))
{return (new cljs.core.RedNode(app__10805.key,app__10805.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10805.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10805.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10805,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10806 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10806))
{return (new cljs.core.RedNode(app__10806.key,app__10806.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10806.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10806.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10806,right.right,null)));
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
{var c__10812 = comp.call(null,k,tree.key);
if((c__10812 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10812 < 0))
{var del__10813 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10814 = !((del__10813 == null));
if(or__3824__auto____10814)
{return or__3824__auto____10814;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10813,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10813,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10815 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10816 = !((del__10815 == null));
if(or__3824__auto____10816)
{return or__3824__auto____10816;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10815);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10815,null));
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
var tk__10819 = tree.key;
var c__10820 = comp.call(null,k,tk__10819);
if((c__10820 === 0))
{return tree.replace(tk__10819,v,tree.left,tree.right);
} else
{if((c__10820 < 0))
{return tree.replace(tk__10819,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10819,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__10823 = this;
var h__2218__auto____10824 = this__10823.__hash;
if(!((h__2218__auto____10824 == null)))
{return h__2218__auto____10824;
} else
{var h__2218__auto____10825 = cljs.core.hash_imap.call(null,coll);
this__10823.__hash = h__2218__auto____10825;
return h__2218__auto____10825;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10826 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10827 = this;
var n__10828 = coll.entry_at(k);
if(!((n__10828 == null)))
{return n__10828.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10829 = this;
var found__10830 = [null];
var t__10831 = cljs.core.tree_map_add.call(null,this__10829.comp,this__10829.tree,k,v,found__10830);
if((t__10831 == null))
{var found_node__10832 = cljs.core.nth.call(null,found__10830,0);
if(cljs.core._EQ_.call(null,v,found_node__10832.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10829.comp,cljs.core.tree_map_replace.call(null,this__10829.comp,this__10829.tree,k,v),this__10829.cnt,this__10829.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10829.comp,t__10831.blacken(),(this__10829.cnt + 1),this__10829.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10833 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10867 = null;
var G__10867__2 = (function (this_sym10834,k){
var this__10836 = this;
var this_sym10834__10837 = this;
var coll__10838 = this_sym10834__10837;
return coll__10838.cljs$core$ILookup$_lookup$arity$2(coll__10838,k);
});
var G__10867__3 = (function (this_sym10835,k,not_found){
var this__10836 = this;
var this_sym10835__10839 = this;
var coll__10840 = this_sym10835__10839;
return coll__10840.cljs$core$ILookup$_lookup$arity$3(coll__10840,k,not_found);
});
G__10867 = function(this_sym10835,k,not_found){
switch(arguments.length){
case 2:
return G__10867__2.call(this,this_sym10835,k);
case 3:
return G__10867__3.call(this,this_sym10835,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10867;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10821,args10822){
var this__10841 = this;
return this_sym10821.call.apply(this_sym10821,[this_sym10821].concat(args10822.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10842 = this;
if(!((this__10842.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10842.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10843 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10844 = this;
if((this__10844.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10844.tree,false,this__10844.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10845 = this;
var this__10846 = this;
return cljs.core.pr_str.call(null,this__10846);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10847 = this;
var coll__10848 = this;
var t__10849 = this__10847.tree;
while(true){
if(!((t__10849 == null)))
{var c__10850 = this__10847.comp.call(null,k,t__10849.key);
if((c__10850 === 0))
{return t__10849;
} else
{if((c__10850 < 0))
{{
var G__10868 = t__10849.left;
t__10849 = G__10868;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10869 = t__10849.right;
t__10849 = G__10869;
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
var this__10851 = this;
if((this__10851.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10851.tree,ascending_QMARK_,this__10851.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10852 = this;
if((this__10852.cnt > 0))
{var stack__10853 = null;
var t__10854 = this__10852.tree;
while(true){
if(!((t__10854 == null)))
{var c__10855 = this__10852.comp.call(null,k,t__10854.key);
if((c__10855 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10853,t__10854),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10855 < 0))
{{
var G__10870 = cljs.core.conj.call(null,stack__10853,t__10854);
var G__10871 = t__10854.left;
stack__10853 = G__10870;
t__10854 = G__10871;
continue;
}
} else
{{
var G__10872 = stack__10853;
var G__10873 = t__10854.right;
stack__10853 = G__10872;
t__10854 = G__10873;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10855 > 0))
{{
var G__10874 = cljs.core.conj.call(null,stack__10853,t__10854);
var G__10875 = t__10854.right;
stack__10853 = G__10874;
t__10854 = G__10875;
continue;
}
} else
{{
var G__10876 = stack__10853;
var G__10877 = t__10854.left;
stack__10853 = G__10876;
t__10854 = G__10877;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10853 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10853,ascending_QMARK_,-1,null));
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
var this__10856 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10857 = this;
return this__10857.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10858 = this;
if((this__10858.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10858.tree,true,this__10858.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10859 = this;
return this__10859.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10860 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10861 = this;
return (new cljs.core.PersistentTreeMap(this__10861.comp,this__10861.tree,this__10861.cnt,meta,this__10861.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10862 = this;
return this__10862.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10863 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10863.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10864 = this;
var found__10865 = [null];
var t__10866 = cljs.core.tree_map_remove.call(null,this__10864.comp,this__10864.tree,k,found__10865);
if((t__10866 == null))
{if((cljs.core.nth.call(null,found__10865,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10864.comp,null,0,this__10864.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10864.comp,t__10866.blacken(),(this__10864.cnt - 1),this__10864.meta,null));
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
var in__10880 = cljs.core.seq.call(null,keyvals);
var out__10881 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10880)
{{
var G__10882 = cljs.core.nnext.call(null,in__10880);
var G__10883 = cljs.core.assoc_BANG_.call(null,out__10881,cljs.core.first.call(null,in__10880),cljs.core.second.call(null,in__10880));
in__10880 = G__10882;
out__10881 = G__10883;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10881);
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
hash_map.cljs$lang$applyTo = (function (arglist__10884){
var keyvals = cljs.core.seq(arglist__10884);;
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
array_map.cljs$lang$applyTo = (function (arglist__10885){
var keyvals = cljs.core.seq(arglist__10885);;
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
var ks__10889 = [];
var obj__10890 = {};
var kvs__10891 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10891)
{ks__10889.push(cljs.core.first.call(null,kvs__10891));
(obj__10890[cljs.core.first.call(null,kvs__10891)] = cljs.core.second.call(null,kvs__10891));
{
var G__10892 = cljs.core.nnext.call(null,kvs__10891);
kvs__10891 = G__10892;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10889,obj__10890);
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
obj_map.cljs$lang$applyTo = (function (arglist__10893){
var keyvals = cljs.core.seq(arglist__10893);;
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
var in__10896 = cljs.core.seq.call(null,keyvals);
var out__10897 = cljs.core.PersistentTreeMap.EMPTY;
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
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10900){
var keyvals = cljs.core.seq(arglist__10900);;
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
var in__10903 = cljs.core.seq.call(null,keyvals);
var out__10904 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10903)
{{
var G__10905 = cljs.core.nnext.call(null,in__10903);
var G__10906 = cljs.core.assoc.call(null,out__10904,cljs.core.first.call(null,in__10903),cljs.core.second.call(null,in__10903));
in__10903 = G__10905;
out__10904 = G__10906;
continue;
}
} else
{return out__10904;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__10907){
var comparator = cljs.core.first(arglist__10907);
var keyvals = cljs.core.rest(arglist__10907);
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
{return cljs.core.reduce.call(null,(function (p1__10908_SHARP_,p2__10909_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10911 = p1__10908_SHARP_;
if(cljs.core.truth_(or__3824__auto____10911))
{return or__3824__auto____10911;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10909_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__10912){
var maps = cljs.core.seq(arglist__10912);;
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
{var merge_entry__10920 = (function (m,e){
var k__10918 = cljs.core.first.call(null,e);
var v__10919 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10918))
{return cljs.core.assoc.call(null,m,k__10918,f.call(null,cljs.core._lookup.call(null,m,k__10918,null),v__10919));
} else
{return cljs.core.assoc.call(null,m,k__10918,v__10919);
}
});
var merge2__10922 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10920,(function (){var or__3824__auto____10921 = m1;
if(cljs.core.truth_(or__3824__auto____10921))
{return or__3824__auto____10921;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10922,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__10923){
var f = cljs.core.first(arglist__10923);
var maps = cljs.core.rest(arglist__10923);
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
var ret__10928 = cljs.core.ObjMap.EMPTY;
var keys__10929 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10929)
{var key__10930 = cljs.core.first.call(null,keys__10929);
var entry__10931 = cljs.core._lookup.call(null,map,key__10930,"\uFDD0'user/not-found");
{
var G__10932 = ((cljs.core.not_EQ_.call(null,entry__10931,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__10928,key__10930,entry__10931):ret__10928);
var G__10933 = cljs.core.next.call(null,keys__10929);
ret__10928 = G__10932;
keys__10929 = G__10933;
continue;
}
} else
{return ret__10928;
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
var this__10937 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10937.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10938 = this;
var h__2218__auto____10939 = this__10938.__hash;
if(!((h__2218__auto____10939 == null)))
{return h__2218__auto____10939;
} else
{var h__2218__auto____10940 = cljs.core.hash_iset.call(null,coll);
this__10938.__hash = h__2218__auto____10940;
return h__2218__auto____10940;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10941 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10942 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10942.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10963 = null;
var G__10963__2 = (function (this_sym10943,k){
var this__10945 = this;
var this_sym10943__10946 = this;
var coll__10947 = this_sym10943__10946;
return coll__10947.cljs$core$ILookup$_lookup$arity$2(coll__10947,k);
});
var G__10963__3 = (function (this_sym10944,k,not_found){
var this__10945 = this;
var this_sym10944__10948 = this;
var coll__10949 = this_sym10944__10948;
return coll__10949.cljs$core$ILookup$_lookup$arity$3(coll__10949,k,not_found);
});
G__10963 = function(this_sym10944,k,not_found){
switch(arguments.length){
case 2:
return G__10963__2.call(this,this_sym10944,k);
case 3:
return G__10963__3.call(this,this_sym10944,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10963;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10935,args10936){
var this__10950 = this;
return this_sym10935.call.apply(this_sym10935,[this_sym10935].concat(args10936.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10951 = this;
return (new cljs.core.PersistentHashSet(this__10951.meta,cljs.core.assoc.call(null,this__10951.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10952 = this;
var this__10953 = this;
return cljs.core.pr_str.call(null,this__10953);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10954 = this;
return cljs.core.keys.call(null,this__10954.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10955 = this;
return (new cljs.core.PersistentHashSet(this__10955.meta,cljs.core.dissoc.call(null,this__10955.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10956 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10957 = this;
var and__3822__auto____10958 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10958)
{var and__3822__auto____10959 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10959)
{return cljs.core.every_QMARK_.call(null,(function (p1__10934_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10934_SHARP_);
}),other);
} else
{return and__3822__auto____10959;
}
} else
{return and__3822__auto____10958;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10960 = this;
return (new cljs.core.PersistentHashSet(meta,this__10960.hash_map,this__10960.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10961 = this;
return this__10961.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10962 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10962.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10964 = cljs.core.count.call(null,items);
var i__10965 = 0;
var out__10966 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10965 < len__10964))
{{
var G__10967 = (i__10965 + 1);
var G__10968 = cljs.core.conj_BANG_.call(null,out__10966,(items[i__10965]));
i__10965 = G__10967;
out__10966 = G__10968;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10966);
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
var G__10986 = null;
var G__10986__2 = (function (this_sym10972,k){
var this__10974 = this;
var this_sym10972__10975 = this;
var tcoll__10976 = this_sym10972__10975;
if((cljs.core._lookup.call(null,this__10974.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10986__3 = (function (this_sym10973,k,not_found){
var this__10974 = this;
var this_sym10973__10977 = this;
var tcoll__10978 = this_sym10973__10977;
if((cljs.core._lookup.call(null,this__10974.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10986 = function(this_sym10973,k,not_found){
switch(arguments.length){
case 2:
return G__10986__2.call(this,this_sym10973,k);
case 3:
return G__10986__3.call(this,this_sym10973,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10986;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10970,args10971){
var this__10979 = this;
return this_sym10970.call.apply(this_sym10970,[this_sym10970].concat(args10971.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10980 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10981 = this;
if((cljs.core._lookup.call(null,this__10981.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10982 = this;
return cljs.core.count.call(null,this__10982.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10983 = this;
this__10983.transient_map = cljs.core.dissoc_BANG_.call(null,this__10983.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10984 = this;
this__10984.transient_map = cljs.core.assoc_BANG_.call(null,this__10984.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10985 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10985.transient_map),null));
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
var this__10989 = this;
var h__2218__auto____10990 = this__10989.__hash;
if(!((h__2218__auto____10990 == null)))
{return h__2218__auto____10990;
} else
{var h__2218__auto____10991 = cljs.core.hash_iset.call(null,coll);
this__10989.__hash = h__2218__auto____10991;
return h__2218__auto____10991;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10992 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10993 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10993.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11019 = null;
var G__11019__2 = (function (this_sym10994,k){
var this__10996 = this;
var this_sym10994__10997 = this;
var coll__10998 = this_sym10994__10997;
return coll__10998.cljs$core$ILookup$_lookup$arity$2(coll__10998,k);
});
var G__11019__3 = (function (this_sym10995,k,not_found){
var this__10996 = this;
var this_sym10995__10999 = this;
var coll__11000 = this_sym10995__10999;
return coll__11000.cljs$core$ILookup$_lookup$arity$3(coll__11000,k,not_found);
});
G__11019 = function(this_sym10995,k,not_found){
switch(arguments.length){
case 2:
return G__11019__2.call(this,this_sym10995,k);
case 3:
return G__11019__3.call(this,this_sym10995,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11019;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10987,args10988){
var this__11001 = this;
return this_sym10987.call.apply(this_sym10987,[this_sym10987].concat(args10988.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11002 = this;
return (new cljs.core.PersistentTreeSet(this__11002.meta,cljs.core.assoc.call(null,this__11002.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11003 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11003.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11004 = this;
var this__11005 = this;
return cljs.core.pr_str.call(null,this__11005);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11006 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11006.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11007 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11007.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11008 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11009 = this;
return cljs.core._comparator.call(null,this__11009.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11010 = this;
return cljs.core.keys.call(null,this__11010.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11011 = this;
return (new cljs.core.PersistentTreeSet(this__11011.meta,cljs.core.dissoc.call(null,this__11011.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11012 = this;
return cljs.core.count.call(null,this__11012.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11013 = this;
var and__3822__auto____11014 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11014)
{var and__3822__auto____11015 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11015)
{return cljs.core.every_QMARK_.call(null,(function (p1__10969_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10969_SHARP_);
}),other);
} else
{return and__3822__auto____11015;
}
} else
{return and__3822__auto____11014;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11016 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11016.tree_map,this__11016.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11017 = this;
return this__11017.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11018 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11018.meta);
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
var G__11024__delegate = function (keys){
var in__11022 = cljs.core.seq.call(null,keys);
var out__11023 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11022))
{{
var G__11025 = cljs.core.next.call(null,in__11022);
var G__11026 = cljs.core.conj_BANG_.call(null,out__11023,cljs.core.first.call(null,in__11022));
in__11022 = G__11025;
out__11023 = G__11026;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11023);
}
break;
}
};
var G__11024 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11024__delegate.call(this, keys);
};
G__11024.cljs$lang$maxFixedArity = 0;
G__11024.cljs$lang$applyTo = (function (arglist__11027){
var keys = cljs.core.seq(arglist__11027);;
return G__11024__delegate(keys);
});
G__11024.cljs$lang$arity$variadic = G__11024__delegate;
return G__11024;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11028){
var keys = cljs.core.seq(arglist__11028);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11030){
var comparator = cljs.core.first(arglist__11030);
var keys = cljs.core.rest(arglist__11030);
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
{var n__11036 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11037 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11037))
{var e__11038 = temp__3971__auto____11037;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11038));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11036,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11029_SHARP_){
var temp__3971__auto____11039 = cljs.core.find.call(null,smap,p1__11029_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11039))
{var e__11040 = temp__3971__auto____11039;
return cljs.core.second.call(null,e__11040);
} else
{return p1__11029_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11070 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11063,seen){
while(true){
var vec__11064__11065 = p__11063;
var f__11066 = cljs.core.nth.call(null,vec__11064__11065,0,null);
var xs__11067 = vec__11064__11065;
var temp__3974__auto____11068 = cljs.core.seq.call(null,xs__11067);
if(temp__3974__auto____11068)
{var s__11069 = temp__3974__auto____11068;
if(cljs.core.contains_QMARK_.call(null,seen,f__11066))
{{
var G__11071 = cljs.core.rest.call(null,s__11069);
var G__11072 = seen;
p__11063 = G__11071;
seen = G__11072;
continue;
}
} else
{return cljs.core.cons.call(null,f__11066,step.call(null,cljs.core.rest.call(null,s__11069),cljs.core.conj.call(null,seen,f__11066)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11070.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11075 = cljs.core.PersistentVector.EMPTY;
var s__11076 = s;
while(true){
if(cljs.core.next.call(null,s__11076))
{{
var G__11077 = cljs.core.conj.call(null,ret__11075,cljs.core.first.call(null,s__11076));
var G__11078 = cljs.core.next.call(null,s__11076);
ret__11075 = G__11077;
s__11076 = G__11078;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11075);
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
{if((function (){var or__3824__auto____11081 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11081)
{return or__3824__auto____11081;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11082 = x.lastIndexOf("/");
if((i__11082 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11082 + 1));
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
if((function (){var or__3824__auto____11085 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11085)
{return or__3824__auto____11085;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11086 = x.lastIndexOf("/");
if((i__11086 > -1))
{return cljs.core.subs.call(null,x,2,i__11086);
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
var map__11093 = cljs.core.ObjMap.EMPTY;
var ks__11094 = cljs.core.seq.call(null,keys);
var vs__11095 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11096 = ks__11094;
if(and__3822__auto____11096)
{return vs__11095;
} else
{return and__3822__auto____11096;
}
})())
{{
var G__11097 = cljs.core.assoc.call(null,map__11093,cljs.core.first.call(null,ks__11094),cljs.core.first.call(null,vs__11095));
var G__11098 = cljs.core.next.call(null,ks__11094);
var G__11099 = cljs.core.next.call(null,vs__11095);
map__11093 = G__11097;
ks__11094 = G__11098;
vs__11095 = G__11099;
continue;
}
} else
{return map__11093;
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
var G__11102__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11087_SHARP_,p2__11088_SHARP_){
return max_key.call(null,k,p1__11087_SHARP_,p2__11088_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11102 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11102__delegate.call(this, k, x, y, more);
};
G__11102.cljs$lang$maxFixedArity = 3;
G__11102.cljs$lang$applyTo = (function (arglist__11103){
var k = cljs.core.first(arglist__11103);
var x = cljs.core.first(cljs.core.next(arglist__11103));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11103)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11103)));
return G__11102__delegate(k, x, y, more);
});
G__11102.cljs$lang$arity$variadic = G__11102__delegate;
return G__11102;
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
var G__11104__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11100_SHARP_,p2__11101_SHARP_){
return min_key.call(null,k,p1__11100_SHARP_,p2__11101_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11104 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11104__delegate.call(this, k, x, y, more);
};
G__11104.cljs$lang$maxFixedArity = 3;
G__11104.cljs$lang$applyTo = (function (arglist__11105){
var k = cljs.core.first(arglist__11105);
var x = cljs.core.first(cljs.core.next(arglist__11105));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11105)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11105)));
return G__11104__delegate(k, x, y, more);
});
G__11104.cljs$lang$arity$variadic = G__11104__delegate;
return G__11104;
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
var temp__3974__auto____11108 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11108)
{var s__11109 = temp__3974__auto____11108;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11109),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11109)));
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
var temp__3974__auto____11112 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11112)
{var s__11113 = temp__3974__auto____11112;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11113))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11113),take_while.call(null,pred,cljs.core.rest.call(null,s__11113)));
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
var comp__11115 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11115.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__11127 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11128 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11128))
{var vec__11129__11130 = temp__3974__auto____11128;
var e__11131 = cljs.core.nth.call(null,vec__11129__11130,0,null);
var s__11132 = vec__11129__11130;
if(cljs.core.truth_(include__11127.call(null,e__11131)))
{return s__11132;
} else
{return cljs.core.next.call(null,s__11132);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11127,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11133 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11133))
{var vec__11134__11135 = temp__3974__auto____11133;
var e__11136 = cljs.core.nth.call(null,vec__11134__11135,0,null);
var s__11137 = vec__11134__11135;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11136))?s__11137:cljs.core.next.call(null,s__11137)));
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
var include__11149 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11150 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11150))
{var vec__11151__11152 = temp__3974__auto____11150;
var e__11153 = cljs.core.nth.call(null,vec__11151__11152,0,null);
var s__11154 = vec__11151__11152;
if(cljs.core.truth_(include__11149.call(null,e__11153)))
{return s__11154;
} else
{return cljs.core.next.call(null,s__11154);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11149,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11155 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11155))
{var vec__11156__11157 = temp__3974__auto____11155;
var e__11158 = cljs.core.nth.call(null,vec__11156__11157,0,null);
var s__11159 = vec__11156__11157;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11158))?s__11159:cljs.core.next.call(null,s__11159)));
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
var this__11160 = this;
var h__2218__auto____11161 = this__11160.__hash;
if(!((h__2218__auto____11161 == null)))
{return h__2218__auto____11161;
} else
{var h__2218__auto____11162 = cljs.core.hash_coll.call(null,rng);
this__11160.__hash = h__2218__auto____11162;
return h__2218__auto____11162;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11163 = this;
if((this__11163.step > 0))
{if(((this__11163.start + this__11163.step) < this__11163.end))
{return (new cljs.core.Range(this__11163.meta,(this__11163.start + this__11163.step),this__11163.end,this__11163.step,null));
} else
{return null;
}
} else
{if(((this__11163.start + this__11163.step) > this__11163.end))
{return (new cljs.core.Range(this__11163.meta,(this__11163.start + this__11163.step),this__11163.end,this__11163.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11164 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11165 = this;
var this__11166 = this;
return cljs.core.pr_str.call(null,this__11166);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11167 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11168 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11169 = this;
if((this__11169.step > 0))
{if((this__11169.start < this__11169.end))
{return rng;
} else
{return null;
}
} else
{if((this__11169.start > this__11169.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11170 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11170.end - this__11170.start) / this__11170.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11171 = this;
return this__11171.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11172 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11172.meta,(this__11172.start + this__11172.step),this__11172.end,this__11172.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11173 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11174 = this;
return (new cljs.core.Range(meta,this__11174.start,this__11174.end,this__11174.step,this__11174.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11175 = this;
return this__11175.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11176 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11176.start + (n * this__11176.step));
} else
{if((function (){var and__3822__auto____11177 = (this__11176.start > this__11176.end);
if(and__3822__auto____11177)
{return (this__11176.step === 0);
} else
{return and__3822__auto____11177;
}
})())
{return this__11176.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11178 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11178.start + (n * this__11178.step));
} else
{if((function (){var and__3822__auto____11179 = (this__11178.start > this__11178.end);
if(and__3822__auto____11179)
{return (this__11178.step === 0);
} else
{return and__3822__auto____11179;
}
})())
{return this__11178.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11180 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11180.meta);
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
var temp__3974__auto____11183 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11183)
{var s__11184 = temp__3974__auto____11183;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11184),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11184)));
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
var temp__3974__auto____11191 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11191)
{var s__11192 = temp__3974__auto____11191;
var fst__11193 = cljs.core.first.call(null,s__11192);
var fv__11194 = f.call(null,fst__11193);
var run__11195 = cljs.core.cons.call(null,fst__11193,cljs.core.take_while.call(null,(function (p1__11185_SHARP_){
return cljs.core._EQ_.call(null,fv__11194,f.call(null,p1__11185_SHARP_));
}),cljs.core.next.call(null,s__11192)));
return cljs.core.cons.call(null,run__11195,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11195),s__11192))));
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
var temp__3971__auto____11210 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11210)
{var s__11211 = temp__3971__auto____11210;
return reductions.call(null,f,cljs.core.first.call(null,s__11211),cljs.core.rest.call(null,s__11211));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11212 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11212)
{var s__11213 = temp__3974__auto____11212;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11213)),cljs.core.rest.call(null,s__11213));
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
var G__11216 = null;
var G__11216__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11216__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11216__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11216__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11216__4 = (function() { 
var G__11217__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11217 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11217__delegate.call(this, x, y, z, args);
};
G__11217.cljs$lang$maxFixedArity = 3;
G__11217.cljs$lang$applyTo = (function (arglist__11218){
var x = cljs.core.first(arglist__11218);
var y = cljs.core.first(cljs.core.next(arglist__11218));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11218)));
return G__11217__delegate(x, y, z, args);
});
G__11217.cljs$lang$arity$variadic = G__11217__delegate;
return G__11217;
})()
;
G__11216 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11216__0.call(this);
case 1:
return G__11216__1.call(this,x);
case 2:
return G__11216__2.call(this,x,y);
case 3:
return G__11216__3.call(this,x,y,z);
default:
return G__11216__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11216.cljs$lang$maxFixedArity = 3;
G__11216.cljs$lang$applyTo = G__11216__4.cljs$lang$applyTo;
return G__11216;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11219 = null;
var G__11219__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11219__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11219__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11219__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11219__4 = (function() { 
var G__11220__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
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
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11222 = null;
var G__11222__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11222__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11222__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11222__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11222__4 = (function() { 
var G__11223__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11223__delegate.call(this, x, y, z, args);
};
G__11223.cljs$lang$maxFixedArity = 3;
G__11223.cljs$lang$applyTo = (function (arglist__11224){
var x = cljs.core.first(arglist__11224);
var y = cljs.core.first(cljs.core.next(arglist__11224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11224)));
return G__11223__delegate(x, y, z, args);
});
G__11223.cljs$lang$arity$variadic = G__11223__delegate;
return G__11223;
})()
;
G__11222 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11222__0.call(this);
case 1:
return G__11222__1.call(this,x);
case 2:
return G__11222__2.call(this,x,y);
case 3:
return G__11222__3.call(this,x,y,z);
default:
return G__11222__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11222.cljs$lang$maxFixedArity = 3;
G__11222.cljs$lang$applyTo = G__11222__4.cljs$lang$applyTo;
return G__11222;
})()
});
var juxt__4 = (function() { 
var G__11225__delegate = function (f,g,h,fs){
var fs__11215 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11226 = null;
var G__11226__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11196_SHARP_,p2__11197_SHARP_){
return cljs.core.conj.call(null,p1__11196_SHARP_,p2__11197_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11215);
});
var G__11226__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11198_SHARP_,p2__11199_SHARP_){
return cljs.core.conj.call(null,p1__11198_SHARP_,p2__11199_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11215);
});
var G__11226__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11200_SHARP_,p2__11201_SHARP_){
return cljs.core.conj.call(null,p1__11200_SHARP_,p2__11201_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11215);
});
var G__11226__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11202_SHARP_,p2__11203_SHARP_){
return cljs.core.conj.call(null,p1__11202_SHARP_,p2__11203_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11215);
});
var G__11226__4 = (function() { 
var G__11227__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11204_SHARP_,p2__11205_SHARP_){
return cljs.core.conj.call(null,p1__11204_SHARP_,cljs.core.apply.call(null,p2__11205_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11215);
};
var G__11227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11227__delegate.call(this, x, y, z, args);
};
G__11227.cljs$lang$maxFixedArity = 3;
G__11227.cljs$lang$applyTo = (function (arglist__11228){
var x = cljs.core.first(arglist__11228);
var y = cljs.core.first(cljs.core.next(arglist__11228));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11228)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11228)));
return G__11227__delegate(x, y, z, args);
});
G__11227.cljs$lang$arity$variadic = G__11227__delegate;
return G__11227;
})()
;
G__11226 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11226__0.call(this);
case 1:
return G__11226__1.call(this,x);
case 2:
return G__11226__2.call(this,x,y);
case 3:
return G__11226__3.call(this,x,y,z);
default:
return G__11226__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11226.cljs$lang$maxFixedArity = 3;
G__11226.cljs$lang$applyTo = G__11226__4.cljs$lang$applyTo;
return G__11226;
})()
};
var G__11225 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11225__delegate.call(this, f, g, h, fs);
};
G__11225.cljs$lang$maxFixedArity = 3;
G__11225.cljs$lang$applyTo = (function (arglist__11229){
var f = cljs.core.first(arglist__11229);
var g = cljs.core.first(cljs.core.next(arglist__11229));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11229)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11229)));
return G__11225__delegate(f, g, h, fs);
});
G__11225.cljs$lang$arity$variadic = G__11225__delegate;
return G__11225;
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
var G__11232 = cljs.core.next.call(null,coll);
coll = G__11232;
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
if(cljs.core.truth_((function (){var and__3822__auto____11231 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11231)
{return (n > 0);
} else
{return and__3822__auto____11231;
}
})()))
{{
var G__11233 = (n - 1);
var G__11234 = cljs.core.next.call(null,coll);
n = G__11233;
coll = G__11234;
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
var matches__11236 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11236),s))
{if((cljs.core.count.call(null,matches__11236) === 1))
{return cljs.core.first.call(null,matches__11236);
} else
{return cljs.core.vec.call(null,matches__11236);
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
var matches__11238 = re.exec(s);
if((matches__11238 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11238) === 1))
{return cljs.core.first.call(null,matches__11238);
} else
{return cljs.core.vec.call(null,matches__11238);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11243 = cljs.core.re_find.call(null,re,s);
var match_idx__11244 = s.search(re);
var match_str__11245 = ((cljs.core.coll_QMARK_.call(null,match_data__11243))?cljs.core.first.call(null,match_data__11243):match_data__11243);
var post_match__11246 = cljs.core.subs.call(null,s,(match_idx__11244 + cljs.core.count.call(null,match_str__11245)));
if(cljs.core.truth_(match_data__11243))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11243,re_seq.call(null,re,post_match__11246));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11253__11254 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11255 = cljs.core.nth.call(null,vec__11253__11254,0,null);
var flags__11256 = cljs.core.nth.call(null,vec__11253__11254,1,null);
var pattern__11257 = cljs.core.nth.call(null,vec__11253__11254,2,null);
return (new RegExp(pattern__11257,flags__11256));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11247_SHARP_){
return print_one.call(null,p1__11247_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11267 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11267))
{var and__3822__auto____11271 = (function (){var G__11268__11269 = obj;
if(G__11268__11269)
{if((function (){var or__3824__auto____11270 = (G__11268__11269.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11270)
{return or__3824__auto____11270;
} else
{return G__11268__11269.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11268__11269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11268__11269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11268__11269);
}
})();
if(cljs.core.truth_(and__3822__auto____11271))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11271;
}
} else
{return and__3822__auto____11267;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11272 = !((obj == null));
if(and__3822__auto____11272)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11272;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11273__11274 = obj;
if(G__11273__11274)
{if((function (){var or__3824__auto____11275 = (G__11273__11274.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11275)
{return or__3824__auto____11275;
} else
{return G__11273__11274.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11273__11274.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11273__11274);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11273__11274);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11295 = (new goog.string.StringBuffer());
var G__11296__11297 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11296__11297)
{var string__11298 = cljs.core.first.call(null,G__11296__11297);
var G__11296__11299 = G__11296__11297;
while(true){
sb__11295.append(string__11298);
var temp__3974__auto____11300 = cljs.core.next.call(null,G__11296__11299);
if(temp__3974__auto____11300)
{var G__11296__11301 = temp__3974__auto____11300;
{
var G__11314 = cljs.core.first.call(null,G__11296__11301);
var G__11315 = G__11296__11301;
string__11298 = G__11314;
G__11296__11299 = G__11315;
continue;
}
} else
{}
break;
}
} else
{}
var G__11302__11303 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11302__11303)
{var obj__11304 = cljs.core.first.call(null,G__11302__11303);
var G__11302__11305 = G__11302__11303;
while(true){
sb__11295.append(" ");
var G__11306__11307 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11304,opts));
if(G__11306__11307)
{var string__11308 = cljs.core.first.call(null,G__11306__11307);
var G__11306__11309 = G__11306__11307;
while(true){
sb__11295.append(string__11308);
var temp__3974__auto____11310 = cljs.core.next.call(null,G__11306__11309);
if(temp__3974__auto____11310)
{var G__11306__11311 = temp__3974__auto____11310;
{
var G__11316 = cljs.core.first.call(null,G__11306__11311);
var G__11317 = G__11306__11311;
string__11308 = G__11316;
G__11306__11309 = G__11317;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11312 = cljs.core.next.call(null,G__11302__11305);
if(temp__3974__auto____11312)
{var G__11302__11313 = temp__3974__auto____11312;
{
var G__11318 = cljs.core.first.call(null,G__11302__11313);
var G__11319 = G__11302__11313;
obj__11304 = G__11318;
G__11302__11305 = G__11319;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11295;
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
var sb__11321 = cljs.core.pr_sb.call(null,objs,opts);
sb__11321.append("\n");
return [cljs.core.str(sb__11321)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11340__11341 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11340__11341)
{var string__11342 = cljs.core.first.call(null,G__11340__11341);
var G__11340__11343 = G__11340__11341;
while(true){
cljs.core.string_print.call(null,string__11342);
var temp__3974__auto____11344 = cljs.core.next.call(null,G__11340__11343);
if(temp__3974__auto____11344)
{var G__11340__11345 = temp__3974__auto____11344;
{
var G__11358 = cljs.core.first.call(null,G__11340__11345);
var G__11359 = G__11340__11345;
string__11342 = G__11358;
G__11340__11343 = G__11359;
continue;
}
} else
{}
break;
}
} else
{}
var G__11346__11347 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11346__11347)
{var obj__11348 = cljs.core.first.call(null,G__11346__11347);
var G__11346__11349 = G__11346__11347;
while(true){
cljs.core.string_print.call(null," ");
var G__11350__11351 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11348,opts));
if(G__11350__11351)
{var string__11352 = cljs.core.first.call(null,G__11350__11351);
var G__11350__11353 = G__11350__11351;
while(true){
cljs.core.string_print.call(null,string__11352);
var temp__3974__auto____11354 = cljs.core.next.call(null,G__11350__11353);
if(temp__3974__auto____11354)
{var G__11350__11355 = temp__3974__auto____11354;
{
var G__11360 = cljs.core.first.call(null,G__11350__11355);
var G__11361 = G__11350__11355;
string__11352 = G__11360;
G__11350__11353 = G__11361;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11356 = cljs.core.next.call(null,G__11346__11349);
if(temp__3974__auto____11356)
{var G__11346__11357 = temp__3974__auto____11356;
{
var G__11362 = cljs.core.first.call(null,G__11346__11357);
var G__11363 = G__11346__11357;
obj__11348 = G__11362;
G__11346__11349 = G__11363;
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
pr_str.cljs$lang$applyTo = (function (arglist__11364){
var objs = cljs.core.seq(arglist__11364);;
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
prn_str.cljs$lang$applyTo = (function (arglist__11365){
var objs = cljs.core.seq(arglist__11365);;
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
pr.cljs$lang$applyTo = (function (arglist__11366){
var objs = cljs.core.seq(arglist__11366);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__11367){
var objs = cljs.core.seq(arglist__11367);;
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
print_str.cljs$lang$applyTo = (function (arglist__11368){
var objs = cljs.core.seq(arglist__11368);;
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
println.cljs$lang$applyTo = (function (arglist__11369){
var objs = cljs.core.seq(arglist__11369);;
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
println_str.cljs$lang$applyTo = (function (arglist__11370){
var objs = cljs.core.seq(arglist__11370);;
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
prn.cljs$lang$applyTo = (function (arglist__11371){
var objs = cljs.core.seq(arglist__11371);;
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
printf.cljs$lang$applyTo = (function (arglist__11372){
var fmt = cljs.core.first(arglist__11372);
var args = cljs.core.rest(arglist__11372);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11373 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11373,"{",", ","}",opts,coll);
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
var pr_pair__11374 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11374,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11375 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11375,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11376 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11376))
{var nspc__11377 = temp__3974__auto____11376;
return [cljs.core.str(nspc__11377),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11378 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11378))
{var nspc__11379 = temp__3974__auto____11378;
return [cljs.core.str(nspc__11379),cljs.core.str("/")].join('');
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
var pr_pair__11380 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11380,"{",", ","}",opts,coll);
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
var normalize__11382 = (function (n,len){
var ns__11381 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11381) < len))
{{
var G__11384 = [cljs.core.str("0"),cljs.core.str(ns__11381)].join('');
ns__11381 = G__11384;
continue;
}
} else
{return ns__11381;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11382.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11382.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11382.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11382.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11382.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11382.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__11383 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11383,"{",", ","}",opts,coll);
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
var this__11385 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11386 = this;
var G__11387__11388 = cljs.core.seq.call(null,this__11386.watches);
if(G__11387__11388)
{var G__11390__11392 = cljs.core.first.call(null,G__11387__11388);
var vec__11391__11393 = G__11390__11392;
var key__11394 = cljs.core.nth.call(null,vec__11391__11393,0,null);
var f__11395 = cljs.core.nth.call(null,vec__11391__11393,1,null);
var G__11387__11396 = G__11387__11388;
var G__11390__11397 = G__11390__11392;
var G__11387__11398 = G__11387__11396;
while(true){
var vec__11399__11400 = G__11390__11397;
var key__11401 = cljs.core.nth.call(null,vec__11399__11400,0,null);
var f__11402 = cljs.core.nth.call(null,vec__11399__11400,1,null);
var G__11387__11403 = G__11387__11398;
f__11402.call(null,key__11401,this$,oldval,newval);
var temp__3974__auto____11404 = cljs.core.next.call(null,G__11387__11403);
if(temp__3974__auto____11404)
{var G__11387__11405 = temp__3974__auto____11404;
{
var G__11412 = cljs.core.first.call(null,G__11387__11405);
var G__11413 = G__11387__11405;
G__11390__11397 = G__11412;
G__11387__11398 = G__11413;
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
var this__11406 = this;
return this$.watches = cljs.core.assoc.call(null,this__11406.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11407 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11407.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11408 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11408.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11409 = this;
return this__11409.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11410 = this;
return this__11410.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11411 = this;
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
var G__11425__delegate = function (x,p__11414){
var map__11420__11421 = p__11414;
var map__11420__11422 = ((cljs.core.seq_QMARK_.call(null,map__11420__11421))?cljs.core.apply.call(null,cljs.core.hash_map,map__11420__11421):map__11420__11421);
var validator__11423 = cljs.core._lookup.call(null,map__11420__11422,"\uFDD0'validator",null);
var meta__11424 = cljs.core._lookup.call(null,map__11420__11422,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11424,validator__11423,null));
};
var G__11425 = function (x,var_args){
var p__11414 = null;
if (goog.isDef(var_args)) {
  p__11414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11425__delegate.call(this, x, p__11414);
};
G__11425.cljs$lang$maxFixedArity = 1;
G__11425.cljs$lang$applyTo = (function (arglist__11426){
var x = cljs.core.first(arglist__11426);
var p__11414 = cljs.core.rest(arglist__11426);
return G__11425__delegate(x, p__11414);
});
G__11425.cljs$lang$arity$variadic = G__11425__delegate;
return G__11425;
})()
;
atom = function(x,var_args){
var p__11414 = var_args;
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
var temp__3974__auto____11430 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11430))
{var validate__11431 = temp__3974__auto____11430;
if(cljs.core.truth_(validate__11431.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11432 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11432,new_value);
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
var G__11433__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11433 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11433__delegate.call(this, a, f, x, y, z, more);
};
G__11433.cljs$lang$maxFixedArity = 5;
G__11433.cljs$lang$applyTo = (function (arglist__11434){
var a = cljs.core.first(arglist__11434);
var f = cljs.core.first(cljs.core.next(arglist__11434));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11434)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11434))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11434)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11434)))));
return G__11433__delegate(a, f, x, y, z, more);
});
G__11433.cljs$lang$arity$variadic = G__11433__delegate;
return G__11433;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11435){
var iref = cljs.core.first(arglist__11435);
var f = cljs.core.first(cljs.core.next(arglist__11435));
var args = cljs.core.rest(cljs.core.next(arglist__11435));
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
var this__11436 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11436.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11437 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11437.state,(function (p__11438){
var map__11439__11440 = p__11438;
var map__11439__11441 = ((cljs.core.seq_QMARK_.call(null,map__11439__11440))?cljs.core.apply.call(null,cljs.core.hash_map,map__11439__11440):map__11439__11440);
var curr_state__11442 = map__11439__11441;
var done__11443 = cljs.core._lookup.call(null,map__11439__11441,"\uFDD0'done",null);
if(cljs.core.truth_(done__11443))
{return curr_state__11442;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11437.f.call(null)});
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
var map__11464__11465 = options;
var map__11464__11466 = ((cljs.core.seq_QMARK_.call(null,map__11464__11465))?cljs.core.apply.call(null,cljs.core.hash_map,map__11464__11465):map__11464__11465);
var keywordize_keys__11467 = cljs.core._lookup.call(null,map__11464__11466,"\uFDD0'keywordize-keys",null);
var keyfn__11468 = (cljs.core.truth_(keywordize_keys__11467)?cljs.core.keyword:cljs.core.str);
var f__11483 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2488__auto____11482 = (function iter__11476(s__11477){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11477__11480 = s__11477;
while(true){
if(cljs.core.seq.call(null,s__11477__11480))
{var k__11481 = cljs.core.first.call(null,s__11477__11480);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11468.call(null,k__11481),thisfn.call(null,(x[k__11481]))], true),iter__11476.call(null,cljs.core.rest.call(null,s__11477__11480)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2488__auto____11482.call(null,cljs.core.js_keys.call(null,x));
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
return f__11483.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11484){
var x = cljs.core.first(arglist__11484);
var options = cljs.core.rest(arglist__11484);
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
var mem__11489 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11493__delegate = function (args){
var temp__3971__auto____11490 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11489),args,null);
if(cljs.core.truth_(temp__3971__auto____11490))
{var v__11491 = temp__3971__auto____11490;
return v__11491;
} else
{var ret__11492 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11489,cljs.core.assoc,args,ret__11492);
return ret__11492;
}
};
var G__11493 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11493__delegate.call(this, args);
};
G__11493.cljs$lang$maxFixedArity = 0;
G__11493.cljs$lang$applyTo = (function (arglist__11494){
var args = cljs.core.seq(arglist__11494);;
return G__11493__delegate(args);
});
G__11493.cljs$lang$arity$variadic = G__11493__delegate;
return G__11493;
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
var ret__11496 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11496))
{{
var G__11497 = ret__11496;
f = G__11497;
continue;
}
} else
{return ret__11496;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11498__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11498 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11498__delegate.call(this, f, args);
};
G__11498.cljs$lang$maxFixedArity = 1;
G__11498.cljs$lang$applyTo = (function (arglist__11499){
var f = cljs.core.first(arglist__11499);
var args = cljs.core.rest(arglist__11499);
return G__11498__delegate(f, args);
});
G__11498.cljs$lang$arity$variadic = G__11498__delegate;
return G__11498;
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
var k__11501 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11501,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11501,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____11510 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11510)
{return or__3824__auto____11510;
} else
{var or__3824__auto____11511 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11511)
{return or__3824__auto____11511;
} else
{var and__3822__auto____11512 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11512)
{var and__3822__auto____11513 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11513)
{var and__3822__auto____11514 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11514)
{var ret__11515 = true;
var i__11516 = 0;
while(true){
if((function (){var or__3824__auto____11517 = cljs.core.not.call(null,ret__11515);
if(or__3824__auto____11517)
{return or__3824__auto____11517;
} else
{return (i__11516 === cljs.core.count.call(null,parent));
}
})())
{return ret__11515;
} else
{{
var G__11518 = isa_QMARK_.call(null,h,child.call(null,i__11516),parent.call(null,i__11516));
var G__11519 = (i__11516 + 1);
ret__11515 = G__11518;
i__11516 = G__11519;
continue;
}
}
break;
}
} else
{return and__3822__auto____11514;
}
} else
{return and__3822__auto____11513;
}
} else
{return and__3822__auto____11512;
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
var tp__11528 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11529 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11530 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11531 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11532 = ((cljs.core.contains_QMARK_.call(null,tp__11528.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11530.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11530.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11528,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11531.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11529,parent,ta__11530),"\uFDD0'descendants":tf__11531.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11530,tag,td__11529)});
})());
if(cljs.core.truth_(or__3824__auto____11532))
{return or__3824__auto____11532;
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
var parentMap__11537 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11538 = (cljs.core.truth_(parentMap__11537.call(null,tag))?cljs.core.disj.call(null,parentMap__11537.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11539 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11538))?cljs.core.assoc.call(null,parentMap__11537,tag,childsParents__11538):cljs.core.dissoc.call(null,parentMap__11537,tag));
var deriv_seq__11540 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11520_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11520_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11520_SHARP_),cljs.core.second.call(null,p1__11520_SHARP_)));
}),cljs.core.seq.call(null,newParents__11539)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11537.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11521_SHARP_,p2__11522_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11521_SHARP_,p2__11522_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11540));
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
var xprefs__11548 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11550 = (cljs.core.truth_((function (){var and__3822__auto____11549 = xprefs__11548;
if(cljs.core.truth_(and__3822__auto____11549))
{return xprefs__11548.call(null,y);
} else
{return and__3822__auto____11549;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11550))
{return or__3824__auto____11550;
} else
{var or__3824__auto____11552 = (function (){var ps__11551 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11551) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11551),prefer_table)))
{} else
{}
{
var G__11555 = cljs.core.rest.call(null,ps__11551);
ps__11551 = G__11555;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11552))
{return or__3824__auto____11552;
} else
{var or__3824__auto____11554 = (function (){var ps__11553 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11553) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11553),y,prefer_table)))
{} else
{}
{
var G__11556 = cljs.core.rest.call(null,ps__11553);
ps__11553 = G__11556;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11554))
{return or__3824__auto____11554;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11558 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11558))
{return or__3824__auto____11558;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11576 = cljs.core.reduce.call(null,(function (be,p__11568){
var vec__11569__11570 = p__11568;
var k__11571 = cljs.core.nth.call(null,vec__11569__11570,0,null);
var ___11572 = cljs.core.nth.call(null,vec__11569__11570,1,null);
var e__11573 = vec__11569__11570;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11571))
{var be2__11575 = (cljs.core.truth_((function (){var or__3824__auto____11574 = (be == null);
if(or__3824__auto____11574)
{return or__3824__auto____11574;
} else
{return cljs.core.dominates.call(null,k__11571,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11573:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11575),k__11571,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11571),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11575)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11575;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11576))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11576));
return cljs.core.second.call(null,best_entry__11576);
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
if((function (){var and__3822__auto____11581 = mf;
if(and__3822__auto____11581)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11581;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2389__auto____11582 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11583 = (cljs.core._reset[goog.typeOf(x__2389__auto____11582)]);
if(or__3824__auto____11583)
{return or__3824__auto____11583;
} else
{var or__3824__auto____11584 = (cljs.core._reset["_"]);
if(or__3824__auto____11584)
{return or__3824__auto____11584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11589 = mf;
if(and__3822__auto____11589)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11589;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2389__auto____11590 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11591 = (cljs.core._add_method[goog.typeOf(x__2389__auto____11590)]);
if(or__3824__auto____11591)
{return or__3824__auto____11591;
} else
{var or__3824__auto____11592 = (cljs.core._add_method["_"]);
if(or__3824__auto____11592)
{return or__3824__auto____11592;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11597 = mf;
if(and__3822__auto____11597)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11597;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11598 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11599 = (cljs.core._remove_method[goog.typeOf(x__2389__auto____11598)]);
if(or__3824__auto____11599)
{return or__3824__auto____11599;
} else
{var or__3824__auto____11600 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11600)
{return or__3824__auto____11600;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11605 = mf;
if(and__3822__auto____11605)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11605;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2389__auto____11606 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11607 = (cljs.core._prefer_method[goog.typeOf(x__2389__auto____11606)]);
if(or__3824__auto____11607)
{return or__3824__auto____11607;
} else
{var or__3824__auto____11608 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11608)
{return or__3824__auto____11608;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11613 = mf;
if(and__3822__auto____11613)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11613;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11614 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11615 = (cljs.core._get_method[goog.typeOf(x__2389__auto____11614)]);
if(or__3824__auto____11615)
{return or__3824__auto____11615;
} else
{var or__3824__auto____11616 = (cljs.core._get_method["_"]);
if(or__3824__auto____11616)
{return or__3824__auto____11616;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11621 = mf;
if(and__3822__auto____11621)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11621;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2389__auto____11622 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11623 = (cljs.core._methods[goog.typeOf(x__2389__auto____11622)]);
if(or__3824__auto____11623)
{return or__3824__auto____11623;
} else
{var or__3824__auto____11624 = (cljs.core._methods["_"]);
if(or__3824__auto____11624)
{return or__3824__auto____11624;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11629 = mf;
if(and__3822__auto____11629)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11629;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2389__auto____11630 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11631 = (cljs.core._prefers[goog.typeOf(x__2389__auto____11630)]);
if(or__3824__auto____11631)
{return or__3824__auto____11631;
} else
{var or__3824__auto____11632 = (cljs.core._prefers["_"]);
if(or__3824__auto____11632)
{return or__3824__auto____11632;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11637 = mf;
if(and__3822__auto____11637)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11637;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2389__auto____11638 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11639 = (cljs.core._dispatch[goog.typeOf(x__2389__auto____11638)]);
if(or__3824__auto____11639)
{return or__3824__auto____11639;
} else
{var or__3824__auto____11640 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11640)
{return or__3824__auto____11640;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11643 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11644 = cljs.core._get_method.call(null,mf,dispatch_val__11643);
if(cljs.core.truth_(target_fn__11644))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11643)].join('')));
}
return cljs.core.apply.call(null,target_fn__11644,args);
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
var this__11645 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11646 = this;
cljs.core.swap_BANG_.call(null,this__11646.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11646.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11646.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11646.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11647 = this;
cljs.core.swap_BANG_.call(null,this__11647.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11647.method_cache,this__11647.method_table,this__11647.cached_hierarchy,this__11647.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11648 = this;
cljs.core.swap_BANG_.call(null,this__11648.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11648.method_cache,this__11648.method_table,this__11648.cached_hierarchy,this__11648.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11649 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11649.cached_hierarchy),cljs.core.deref.call(null,this__11649.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11649.method_cache,this__11649.method_table,this__11649.cached_hierarchy,this__11649.hierarchy);
}
var temp__3971__auto____11650 = cljs.core.deref.call(null,this__11649.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11650))
{var target_fn__11651 = temp__3971__auto____11650;
return target_fn__11651;
} else
{var temp__3971__auto____11652 = cljs.core.find_and_cache_best_method.call(null,this__11649.name,dispatch_val,this__11649.hierarchy,this__11649.method_table,this__11649.prefer_table,this__11649.method_cache,this__11649.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11652))
{var target_fn__11653 = temp__3971__auto____11652;
return target_fn__11653;
} else
{return cljs.core.deref.call(null,this__11649.method_table).call(null,this__11649.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11654 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11654.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11654.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11654.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11654.method_cache,this__11654.method_table,this__11654.cached_hierarchy,this__11654.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11655 = this;
return cljs.core.deref.call(null,this__11655.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11656 = this;
return cljs.core.deref.call(null,this__11656.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11657 = this;
return cljs.core.do_dispatch.call(null,mf,this__11657.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11659__delegate = function (_,args){
var self__11658 = this;
return cljs.core._dispatch.call(null,self__11658,args);
};
var G__11659 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11659__delegate.call(this, _, args);
};
G__11659.cljs$lang$maxFixedArity = 1;
G__11659.cljs$lang$applyTo = (function (arglist__11660){
var _ = cljs.core.first(arglist__11660);
var args = cljs.core.rest(arglist__11660);
return G__11659__delegate(_, args);
});
G__11659.cljs$lang$arity$variadic = G__11659__delegate;
return G__11659;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11661 = this;
return cljs.core._dispatch.call(null,self__11661,args);
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
var this__11662 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11664,_){
var this__11663 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11663.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11665 = this;
var and__3822__auto____11666 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11666)
{return (this__11665.uuid === other.uuid);
} else
{return and__3822__auto____11666;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11667 = this;
var this__11668 = this;
return cljs.core.pr_str.call(null,this__11668);
});
cljs.core.UUID;
