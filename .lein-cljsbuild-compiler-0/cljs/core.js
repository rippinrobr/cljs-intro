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
var x__8321 = (((x == null))?null:x);
if((p[goog.typeOf(x__8321)]))
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
var G__8322__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8322 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8322__delegate.call(this, array, i, idxs);
};
G__8322.cljs$lang$maxFixedArity = 2;
G__8322.cljs$lang$applyTo = (function (arglist__8323){
var array = cljs.core.first(arglist__8323);
var i = cljs.core.first(cljs.core.next(arglist__8323));
var idxs = cljs.core.rest(cljs.core.next(arglist__8323));
return G__8322__delegate(array, i, idxs);
});
G__8322.cljs$lang$arity$variadic = G__8322__delegate;
return G__8322;
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
if((function (){var and__3822__auto____8408 = this$;
if(and__3822__auto____8408)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____8408;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2413__auto____8409 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8410 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8409)]);
if(or__3824__auto____8410)
{return or__3824__auto____8410;
} else
{var or__3824__auto____8411 = (cljs.core._invoke["_"]);
if(or__3824__auto____8411)
{return or__3824__auto____8411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____8412 = this$;
if(and__3822__auto____8412)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____8412;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2413__auto____8413 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8414 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8413)]);
if(or__3824__auto____8414)
{return or__3824__auto____8414;
} else
{var or__3824__auto____8415 = (cljs.core._invoke["_"]);
if(or__3824__auto____8415)
{return or__3824__auto____8415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____8416 = this$;
if(and__3822__auto____8416)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____8416;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2413__auto____8417 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8418 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8417)]);
if(or__3824__auto____8418)
{return or__3824__auto____8418;
} else
{var or__3824__auto____8419 = (cljs.core._invoke["_"]);
if(or__3824__auto____8419)
{return or__3824__auto____8419;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____8420 = this$;
if(and__3822__auto____8420)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____8420;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2413__auto____8421 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8422 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8421)]);
if(or__3824__auto____8422)
{return or__3824__auto____8422;
} else
{var or__3824__auto____8423 = (cljs.core._invoke["_"]);
if(or__3824__auto____8423)
{return or__3824__auto____8423;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8424 = this$;
if(and__3822__auto____8424)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8424;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2413__auto____8425 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8426 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8425)]);
if(or__3824__auto____8426)
{return or__3824__auto____8426;
} else
{var or__3824__auto____8427 = (cljs.core._invoke["_"]);
if(or__3824__auto____8427)
{return or__3824__auto____8427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8428 = this$;
if(and__3822__auto____8428)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8428;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2413__auto____8429 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8430 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8429)]);
if(or__3824__auto____8430)
{return or__3824__auto____8430;
} else
{var or__3824__auto____8431 = (cljs.core._invoke["_"]);
if(or__3824__auto____8431)
{return or__3824__auto____8431;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8432 = this$;
if(and__3822__auto____8432)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8432;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2413__auto____8433 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8434 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8433)]);
if(or__3824__auto____8434)
{return or__3824__auto____8434;
} else
{var or__3824__auto____8435 = (cljs.core._invoke["_"]);
if(or__3824__auto____8435)
{return or__3824__auto____8435;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8436 = this$;
if(and__3822__auto____8436)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8436;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2413__auto____8437 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8438 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8437)]);
if(or__3824__auto____8438)
{return or__3824__auto____8438;
} else
{var or__3824__auto____8439 = (cljs.core._invoke["_"]);
if(or__3824__auto____8439)
{return or__3824__auto____8439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8440 = this$;
if(and__3822__auto____8440)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8440;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2413__auto____8441 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8442 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8441)]);
if(or__3824__auto____8442)
{return or__3824__auto____8442;
} else
{var or__3824__auto____8443 = (cljs.core._invoke["_"]);
if(or__3824__auto____8443)
{return or__3824__auto____8443;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8444 = this$;
if(and__3822__auto____8444)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8444;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2413__auto____8445 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8446 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8445)]);
if(or__3824__auto____8446)
{return or__3824__auto____8446;
} else
{var or__3824__auto____8447 = (cljs.core._invoke["_"]);
if(or__3824__auto____8447)
{return or__3824__auto____8447;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8448 = this$;
if(and__3822__auto____8448)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8448;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2413__auto____8449 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8450 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8449)]);
if(or__3824__auto____8450)
{return or__3824__auto____8450;
} else
{var or__3824__auto____8451 = (cljs.core._invoke["_"]);
if(or__3824__auto____8451)
{return or__3824__auto____8451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8452 = this$;
if(and__3822__auto____8452)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8452;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2413__auto____8453 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8454 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8453)]);
if(or__3824__auto____8454)
{return or__3824__auto____8454;
} else
{var or__3824__auto____8455 = (cljs.core._invoke["_"]);
if(or__3824__auto____8455)
{return or__3824__auto____8455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8456 = this$;
if(and__3822__auto____8456)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8456;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2413__auto____8457 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8458 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8457)]);
if(or__3824__auto____8458)
{return or__3824__auto____8458;
} else
{var or__3824__auto____8459 = (cljs.core._invoke["_"]);
if(or__3824__auto____8459)
{return or__3824__auto____8459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8460 = this$;
if(and__3822__auto____8460)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8460;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2413__auto____8461 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8462 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8461)]);
if(or__3824__auto____8462)
{return or__3824__auto____8462;
} else
{var or__3824__auto____8463 = (cljs.core._invoke["_"]);
if(or__3824__auto____8463)
{return or__3824__auto____8463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8464 = this$;
if(and__3822__auto____8464)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8464;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2413__auto____8465 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8466 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8465)]);
if(or__3824__auto____8466)
{return or__3824__auto____8466;
} else
{var or__3824__auto____8467 = (cljs.core._invoke["_"]);
if(or__3824__auto____8467)
{return or__3824__auto____8467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8468 = this$;
if(and__3822__auto____8468)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8468;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2413__auto____8469 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8470 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8469)]);
if(or__3824__auto____8470)
{return or__3824__auto____8470;
} else
{var or__3824__auto____8471 = (cljs.core._invoke["_"]);
if(or__3824__auto____8471)
{return or__3824__auto____8471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8472 = this$;
if(and__3822__auto____8472)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8472;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2413__auto____8473 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8474 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8473)]);
if(or__3824__auto____8474)
{return or__3824__auto____8474;
} else
{var or__3824__auto____8475 = (cljs.core._invoke["_"]);
if(or__3824__auto____8475)
{return or__3824__auto____8475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8476 = this$;
if(and__3822__auto____8476)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8476;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2413__auto____8477 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8478 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8477)]);
if(or__3824__auto____8478)
{return or__3824__auto____8478;
} else
{var or__3824__auto____8479 = (cljs.core._invoke["_"]);
if(or__3824__auto____8479)
{return or__3824__auto____8479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8480 = this$;
if(and__3822__auto____8480)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8480;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2413__auto____8481 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8482 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8481)]);
if(or__3824__auto____8482)
{return or__3824__auto____8482;
} else
{var or__3824__auto____8483 = (cljs.core._invoke["_"]);
if(or__3824__auto____8483)
{return or__3824__auto____8483;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8484 = this$;
if(and__3822__auto____8484)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8484;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2413__auto____8485 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8486 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8485)]);
if(or__3824__auto____8486)
{return or__3824__auto____8486;
} else
{var or__3824__auto____8487 = (cljs.core._invoke["_"]);
if(or__3824__auto____8487)
{return or__3824__auto____8487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8488 = this$;
if(and__3822__auto____8488)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8488;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2413__auto____8489 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8490 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8489)]);
if(or__3824__auto____8490)
{return or__3824__auto____8490;
} else
{var or__3824__auto____8491 = (cljs.core._invoke["_"]);
if(or__3824__auto____8491)
{return or__3824__auto____8491;
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
if((function (){var and__3822__auto____8496 = coll;
if(and__3822__auto____8496)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8496;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2413__auto____8497 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8498 = (cljs.core._count[goog.typeOf(x__2413__auto____8497)]);
if(or__3824__auto____8498)
{return or__3824__auto____8498;
} else
{var or__3824__auto____8499 = (cljs.core._count["_"]);
if(or__3824__auto____8499)
{return or__3824__auto____8499;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8504 = coll;
if(and__3822__auto____8504)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8504;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2413__auto____8505 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8506 = (cljs.core._empty[goog.typeOf(x__2413__auto____8505)]);
if(or__3824__auto____8506)
{return or__3824__auto____8506;
} else
{var or__3824__auto____8507 = (cljs.core._empty["_"]);
if(or__3824__auto____8507)
{return or__3824__auto____8507;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8512 = coll;
if(and__3822__auto____8512)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8512;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2413__auto____8513 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8514 = (cljs.core._conj[goog.typeOf(x__2413__auto____8513)]);
if(or__3824__auto____8514)
{return or__3824__auto____8514;
} else
{var or__3824__auto____8515 = (cljs.core._conj["_"]);
if(or__3824__auto____8515)
{return or__3824__auto____8515;
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
if((function (){var and__3822__auto____8524 = coll;
if(and__3822__auto____8524)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8524;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2413__auto____8525 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8526 = (cljs.core._nth[goog.typeOf(x__2413__auto____8525)]);
if(or__3824__auto____8526)
{return or__3824__auto____8526;
} else
{var or__3824__auto____8527 = (cljs.core._nth["_"]);
if(or__3824__auto____8527)
{return or__3824__auto____8527;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8528 = coll;
if(and__3822__auto____8528)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8528;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2413__auto____8529 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8530 = (cljs.core._nth[goog.typeOf(x__2413__auto____8529)]);
if(or__3824__auto____8530)
{return or__3824__auto____8530;
} else
{var or__3824__auto____8531 = (cljs.core._nth["_"]);
if(or__3824__auto____8531)
{return or__3824__auto____8531;
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
if((function (){var and__3822__auto____8536 = coll;
if(and__3822__auto____8536)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8536;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2413__auto____8537 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8538 = (cljs.core._first[goog.typeOf(x__2413__auto____8537)]);
if(or__3824__auto____8538)
{return or__3824__auto____8538;
} else
{var or__3824__auto____8539 = (cljs.core._first["_"]);
if(or__3824__auto____8539)
{return or__3824__auto____8539;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8544 = coll;
if(and__3822__auto____8544)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8544;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2413__auto____8545 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8546 = (cljs.core._rest[goog.typeOf(x__2413__auto____8545)]);
if(or__3824__auto____8546)
{return or__3824__auto____8546;
} else
{var or__3824__auto____8547 = (cljs.core._rest["_"]);
if(or__3824__auto____8547)
{return or__3824__auto____8547;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8552 = coll;
if(and__3822__auto____8552)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8552;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2413__auto____8553 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8554 = (cljs.core._next[goog.typeOf(x__2413__auto____8553)]);
if(or__3824__auto____8554)
{return or__3824__auto____8554;
} else
{var or__3824__auto____8555 = (cljs.core._next["_"]);
if(or__3824__auto____8555)
{return or__3824__auto____8555;
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
if((function (){var and__3822__auto____8564 = o;
if(and__3822__auto____8564)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8564;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2413__auto____8565 = (((o == null))?null:o);
return (function (){var or__3824__auto____8566 = (cljs.core._lookup[goog.typeOf(x__2413__auto____8565)]);
if(or__3824__auto____8566)
{return or__3824__auto____8566;
} else
{var or__3824__auto____8567 = (cljs.core._lookup["_"]);
if(or__3824__auto____8567)
{return or__3824__auto____8567;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8568 = o;
if(and__3822__auto____8568)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8568;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2413__auto____8569 = (((o == null))?null:o);
return (function (){var or__3824__auto____8570 = (cljs.core._lookup[goog.typeOf(x__2413__auto____8569)]);
if(or__3824__auto____8570)
{return or__3824__auto____8570;
} else
{var or__3824__auto____8571 = (cljs.core._lookup["_"]);
if(or__3824__auto____8571)
{return or__3824__auto____8571;
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
if((function (){var and__3822__auto____8576 = coll;
if(and__3822__auto____8576)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8576;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2413__auto____8577 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8578 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2413__auto____8577)]);
if(or__3824__auto____8578)
{return or__3824__auto____8578;
} else
{var or__3824__auto____8579 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8579)
{return or__3824__auto____8579;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8584 = coll;
if(and__3822__auto____8584)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8584;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2413__auto____8585 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8586 = (cljs.core._assoc[goog.typeOf(x__2413__auto____8585)]);
if(or__3824__auto____8586)
{return or__3824__auto____8586;
} else
{var or__3824__auto____8587 = (cljs.core._assoc["_"]);
if(or__3824__auto____8587)
{return or__3824__auto____8587;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8592 = coll;
if(and__3822__auto____8592)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8592;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2413__auto____8593 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8594 = (cljs.core._dissoc[goog.typeOf(x__2413__auto____8593)]);
if(or__3824__auto____8594)
{return or__3824__auto____8594;
} else
{var or__3824__auto____8595 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8595)
{return or__3824__auto____8595;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8600 = coll;
if(and__3822__auto____8600)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8600;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2413__auto____8601 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8602 = (cljs.core._key[goog.typeOf(x__2413__auto____8601)]);
if(or__3824__auto____8602)
{return or__3824__auto____8602;
} else
{var or__3824__auto____8603 = (cljs.core._key["_"]);
if(or__3824__auto____8603)
{return or__3824__auto____8603;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8608 = coll;
if(and__3822__auto____8608)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8608;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2413__auto____8609 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8610 = (cljs.core._val[goog.typeOf(x__2413__auto____8609)]);
if(or__3824__auto____8610)
{return or__3824__auto____8610;
} else
{var or__3824__auto____8611 = (cljs.core._val["_"]);
if(or__3824__auto____8611)
{return or__3824__auto____8611;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8616 = coll;
if(and__3822__auto____8616)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8616;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2413__auto____8617 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8618 = (cljs.core._disjoin[goog.typeOf(x__2413__auto____8617)]);
if(or__3824__auto____8618)
{return or__3824__auto____8618;
} else
{var or__3824__auto____8619 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8619)
{return or__3824__auto____8619;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8624 = coll;
if(and__3822__auto____8624)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8624;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2413__auto____8625 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8626 = (cljs.core._peek[goog.typeOf(x__2413__auto____8625)]);
if(or__3824__auto____8626)
{return or__3824__auto____8626;
} else
{var or__3824__auto____8627 = (cljs.core._peek["_"]);
if(or__3824__auto____8627)
{return or__3824__auto____8627;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8632 = coll;
if(and__3822__auto____8632)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8632;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2413__auto____8633 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8634 = (cljs.core._pop[goog.typeOf(x__2413__auto____8633)]);
if(or__3824__auto____8634)
{return or__3824__auto____8634;
} else
{var or__3824__auto____8635 = (cljs.core._pop["_"]);
if(or__3824__auto____8635)
{return or__3824__auto____8635;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8640 = coll;
if(and__3822__auto____8640)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8640;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2413__auto____8641 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8642 = (cljs.core._assoc_n[goog.typeOf(x__2413__auto____8641)]);
if(or__3824__auto____8642)
{return or__3824__auto____8642;
} else
{var or__3824__auto____8643 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8643)
{return or__3824__auto____8643;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8648 = o;
if(and__3822__auto____8648)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8648;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2413__auto____8649 = (((o == null))?null:o);
return (function (){var or__3824__auto____8650 = (cljs.core._deref[goog.typeOf(x__2413__auto____8649)]);
if(or__3824__auto____8650)
{return or__3824__auto____8650;
} else
{var or__3824__auto____8651 = (cljs.core._deref["_"]);
if(or__3824__auto____8651)
{return or__3824__auto____8651;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8656 = o;
if(and__3822__auto____8656)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8656;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2413__auto____8657 = (((o == null))?null:o);
return (function (){var or__3824__auto____8658 = (cljs.core._deref_with_timeout[goog.typeOf(x__2413__auto____8657)]);
if(or__3824__auto____8658)
{return or__3824__auto____8658;
} else
{var or__3824__auto____8659 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8659)
{return or__3824__auto____8659;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8664 = o;
if(and__3822__auto____8664)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8664;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2413__auto____8665 = (((o == null))?null:o);
return (function (){var or__3824__auto____8666 = (cljs.core._meta[goog.typeOf(x__2413__auto____8665)]);
if(or__3824__auto____8666)
{return or__3824__auto____8666;
} else
{var or__3824__auto____8667 = (cljs.core._meta["_"]);
if(or__3824__auto____8667)
{return or__3824__auto____8667;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8672 = o;
if(and__3822__auto____8672)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8672;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2413__auto____8673 = (((o == null))?null:o);
return (function (){var or__3824__auto____8674 = (cljs.core._with_meta[goog.typeOf(x__2413__auto____8673)]);
if(or__3824__auto____8674)
{return or__3824__auto____8674;
} else
{var or__3824__auto____8675 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8675)
{return or__3824__auto____8675;
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
if((function (){var and__3822__auto____8684 = coll;
if(and__3822__auto____8684)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8684;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2413__auto____8685 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8686 = (cljs.core._reduce[goog.typeOf(x__2413__auto____8685)]);
if(or__3824__auto____8686)
{return or__3824__auto____8686;
} else
{var or__3824__auto____8687 = (cljs.core._reduce["_"]);
if(or__3824__auto____8687)
{return or__3824__auto____8687;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8688 = coll;
if(and__3822__auto____8688)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8688;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2413__auto____8689 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8690 = (cljs.core._reduce[goog.typeOf(x__2413__auto____8689)]);
if(or__3824__auto____8690)
{return or__3824__auto____8690;
} else
{var or__3824__auto____8691 = (cljs.core._reduce["_"]);
if(or__3824__auto____8691)
{return or__3824__auto____8691;
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
if((function (){var and__3822__auto____8696 = coll;
if(and__3822__auto____8696)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8696;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2413__auto____8697 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8698 = (cljs.core._kv_reduce[goog.typeOf(x__2413__auto____8697)]);
if(or__3824__auto____8698)
{return or__3824__auto____8698;
} else
{var or__3824__auto____8699 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8699)
{return or__3824__auto____8699;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8704 = o;
if(and__3822__auto____8704)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8704;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2413__auto____8705 = (((o == null))?null:o);
return (function (){var or__3824__auto____8706 = (cljs.core._equiv[goog.typeOf(x__2413__auto____8705)]);
if(or__3824__auto____8706)
{return or__3824__auto____8706;
} else
{var or__3824__auto____8707 = (cljs.core._equiv["_"]);
if(or__3824__auto____8707)
{return or__3824__auto____8707;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8712 = o;
if(and__3822__auto____8712)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8712;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2413__auto____8713 = (((o == null))?null:o);
return (function (){var or__3824__auto____8714 = (cljs.core._hash[goog.typeOf(x__2413__auto____8713)]);
if(or__3824__auto____8714)
{return or__3824__auto____8714;
} else
{var or__3824__auto____8715 = (cljs.core._hash["_"]);
if(or__3824__auto____8715)
{return or__3824__auto____8715;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8720 = o;
if(and__3822__auto____8720)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8720;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2413__auto____8721 = (((o == null))?null:o);
return (function (){var or__3824__auto____8722 = (cljs.core._seq[goog.typeOf(x__2413__auto____8721)]);
if(or__3824__auto____8722)
{return or__3824__auto____8722;
} else
{var or__3824__auto____8723 = (cljs.core._seq["_"]);
if(or__3824__auto____8723)
{return or__3824__auto____8723;
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
if((function (){var and__3822__auto____8728 = coll;
if(and__3822__auto____8728)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8728;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2413__auto____8729 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8730 = (cljs.core._rseq[goog.typeOf(x__2413__auto____8729)]);
if(or__3824__auto____8730)
{return or__3824__auto____8730;
} else
{var or__3824__auto____8731 = (cljs.core._rseq["_"]);
if(or__3824__auto____8731)
{return or__3824__auto____8731;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8736 = coll;
if(and__3822__auto____8736)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8736;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2413__auto____8737 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8738 = (cljs.core._sorted_seq[goog.typeOf(x__2413__auto____8737)]);
if(or__3824__auto____8738)
{return or__3824__auto____8738;
} else
{var or__3824__auto____8739 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8739)
{return or__3824__auto____8739;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8744 = coll;
if(and__3822__auto____8744)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8744;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2413__auto____8745 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8746 = (cljs.core._sorted_seq_from[goog.typeOf(x__2413__auto____8745)]);
if(or__3824__auto____8746)
{return or__3824__auto____8746;
} else
{var or__3824__auto____8747 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8747)
{return or__3824__auto____8747;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8752 = coll;
if(and__3822__auto____8752)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8752;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2413__auto____8753 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8754 = (cljs.core._entry_key[goog.typeOf(x__2413__auto____8753)]);
if(or__3824__auto____8754)
{return or__3824__auto____8754;
} else
{var or__3824__auto____8755 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8755)
{return or__3824__auto____8755;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8760 = coll;
if(and__3822__auto____8760)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8760;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2413__auto____8761 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8762 = (cljs.core._comparator[goog.typeOf(x__2413__auto____8761)]);
if(or__3824__auto____8762)
{return or__3824__auto____8762;
} else
{var or__3824__auto____8763 = (cljs.core._comparator["_"]);
if(or__3824__auto____8763)
{return or__3824__auto____8763;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8768 = o;
if(and__3822__auto____8768)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8768;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2413__auto____8769 = (((o == null))?null:o);
return (function (){var or__3824__auto____8770 = (cljs.core._pr_seq[goog.typeOf(x__2413__auto____8769)]);
if(or__3824__auto____8770)
{return or__3824__auto____8770;
} else
{var or__3824__auto____8771 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8771)
{return or__3824__auto____8771;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8776 = d;
if(and__3822__auto____8776)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8776;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2413__auto____8777 = (((d == null))?null:d);
return (function (){var or__3824__auto____8778 = (cljs.core._realized_QMARK_[goog.typeOf(x__2413__auto____8777)]);
if(or__3824__auto____8778)
{return or__3824__auto____8778;
} else
{var or__3824__auto____8779 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8779)
{return or__3824__auto____8779;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8784 = this$;
if(and__3822__auto____8784)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8784;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2413__auto____8785 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8786 = (cljs.core._notify_watches[goog.typeOf(x__2413__auto____8785)]);
if(or__3824__auto____8786)
{return or__3824__auto____8786;
} else
{var or__3824__auto____8787 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8787)
{return or__3824__auto____8787;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8792 = this$;
if(and__3822__auto____8792)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8792;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2413__auto____8793 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8794 = (cljs.core._add_watch[goog.typeOf(x__2413__auto____8793)]);
if(or__3824__auto____8794)
{return or__3824__auto____8794;
} else
{var or__3824__auto____8795 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8795)
{return or__3824__auto____8795;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8800 = this$;
if(and__3822__auto____8800)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8800;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2413__auto____8801 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8802 = (cljs.core._remove_watch[goog.typeOf(x__2413__auto____8801)]);
if(or__3824__auto____8802)
{return or__3824__auto____8802;
} else
{var or__3824__auto____8803 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8803)
{return or__3824__auto____8803;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8808 = coll;
if(and__3822__auto____8808)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8808;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2413__auto____8809 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8810 = (cljs.core._as_transient[goog.typeOf(x__2413__auto____8809)]);
if(or__3824__auto____8810)
{return or__3824__auto____8810;
} else
{var or__3824__auto____8811 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8811)
{return or__3824__auto____8811;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8816 = tcoll;
if(and__3822__auto____8816)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8816;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2413__auto____8817 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8818 = (cljs.core._conj_BANG_[goog.typeOf(x__2413__auto____8817)]);
if(or__3824__auto____8818)
{return or__3824__auto____8818;
} else
{var or__3824__auto____8819 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8819)
{return or__3824__auto____8819;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8824 = tcoll;
if(and__3822__auto____8824)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8824;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2413__auto____8825 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8826 = (cljs.core._persistent_BANG_[goog.typeOf(x__2413__auto____8825)]);
if(or__3824__auto____8826)
{return or__3824__auto____8826;
} else
{var or__3824__auto____8827 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8827)
{return or__3824__auto____8827;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8832 = tcoll;
if(and__3822__auto____8832)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8832;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2413__auto____8833 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8834 = (cljs.core._assoc_BANG_[goog.typeOf(x__2413__auto____8833)]);
if(or__3824__auto____8834)
{return or__3824__auto____8834;
} else
{var or__3824__auto____8835 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8835)
{return or__3824__auto____8835;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8840 = tcoll;
if(and__3822__auto____8840)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8840;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2413__auto____8841 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8842 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2413__auto____8841)]);
if(or__3824__auto____8842)
{return or__3824__auto____8842;
} else
{var or__3824__auto____8843 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8843)
{return or__3824__auto____8843;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8848 = tcoll;
if(and__3822__auto____8848)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8848;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2413__auto____8849 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8850 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2413__auto____8849)]);
if(or__3824__auto____8850)
{return or__3824__auto____8850;
} else
{var or__3824__auto____8851 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8851)
{return or__3824__auto____8851;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8856 = tcoll;
if(and__3822__auto____8856)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8856;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2413__auto____8857 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8858 = (cljs.core._pop_BANG_[goog.typeOf(x__2413__auto____8857)]);
if(or__3824__auto____8858)
{return or__3824__auto____8858;
} else
{var or__3824__auto____8859 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8859)
{return or__3824__auto____8859;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8864 = tcoll;
if(and__3822__auto____8864)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8864;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2413__auto____8865 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8866 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2413__auto____8865)]);
if(or__3824__auto____8866)
{return or__3824__auto____8866;
} else
{var or__3824__auto____8867 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8867)
{return or__3824__auto____8867;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8872 = x;
if(and__3822__auto____8872)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8872;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2413__auto____8873 = (((x == null))?null:x);
return (function (){var or__3824__auto____8874 = (cljs.core._compare[goog.typeOf(x__2413__auto____8873)]);
if(or__3824__auto____8874)
{return or__3824__auto____8874;
} else
{var or__3824__auto____8875 = (cljs.core._compare["_"]);
if(or__3824__auto____8875)
{return or__3824__auto____8875;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8880 = coll;
if(and__3822__auto____8880)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8880;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2413__auto____8881 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8882 = (cljs.core._drop_first[goog.typeOf(x__2413__auto____8881)]);
if(or__3824__auto____8882)
{return or__3824__auto____8882;
} else
{var or__3824__auto____8883 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8883)
{return or__3824__auto____8883;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8888 = coll;
if(and__3822__auto____8888)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8888;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2413__auto____8889 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8890 = (cljs.core._chunked_first[goog.typeOf(x__2413__auto____8889)]);
if(or__3824__auto____8890)
{return or__3824__auto____8890;
} else
{var or__3824__auto____8891 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8891)
{return or__3824__auto____8891;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8896 = coll;
if(and__3822__auto____8896)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8896;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2413__auto____8897 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8898 = (cljs.core._chunked_rest[goog.typeOf(x__2413__auto____8897)]);
if(or__3824__auto____8898)
{return or__3824__auto____8898;
} else
{var or__3824__auto____8899 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8899)
{return or__3824__auto____8899;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8904 = coll;
if(and__3822__auto____8904)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8904;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2413__auto____8905 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8906 = (cljs.core._chunked_next[goog.typeOf(x__2413__auto____8905)]);
if(or__3824__auto____8906)
{return or__3824__auto____8906;
} else
{var or__3824__auto____8907 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8907)
{return or__3824__auto____8907;
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
var or__3824__auto____8909 = (x === y);
if(or__3824__auto____8909)
{return or__3824__auto____8909;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8910__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8911 = y;
var G__8912 = cljs.core.first.call(null,more);
var G__8913 = cljs.core.next.call(null,more);
x = G__8911;
y = G__8912;
more = G__8913;
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
var G__8910 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8910__delegate.call(this, x, y, more);
};
G__8910.cljs$lang$maxFixedArity = 2;
G__8910.cljs$lang$applyTo = (function (arglist__8914){
var x = cljs.core.first(arglist__8914);
var y = cljs.core.first(cljs.core.next(arglist__8914));
var more = cljs.core.rest(cljs.core.next(arglist__8914));
return G__8910__delegate(x, y, more);
});
G__8910.cljs$lang$arity$variadic = G__8910__delegate;
return G__8910;
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
var G__8915 = null;
var G__8915__2 = (function (o,k){
return null;
});
var G__8915__3 = (function (o,k,not_found){
return not_found;
});
G__8915 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8915__2.call(this,o,k);
case 3:
return G__8915__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8915;
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
var G__8916 = null;
var G__8916__2 = (function (_,f){
return f.call(null);
});
var G__8916__3 = (function (_,f,start){
return start;
});
G__8916 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8916__2.call(this,_,f);
case 3:
return G__8916__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8916;
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
var G__8917 = null;
var G__8917__2 = (function (_,n){
return null;
});
var G__8917__3 = (function (_,n,not_found){
return not_found;
});
G__8917 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8917__2.call(this,_,n);
case 3:
return G__8917__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8917;
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
var and__3822__auto____8918 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8918)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8918;
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
var cnt__8931 = cljs.core._count.call(null,cicoll);
if((cnt__8931 === 0))
{return f.call(null);
} else
{var val__8932 = cljs.core._nth.call(null,cicoll,0);
var n__8933 = 1;
while(true){
if((n__8933 < cnt__8931))
{var nval__8934 = f.call(null,val__8932,cljs.core._nth.call(null,cicoll,n__8933));
if(cljs.core.reduced_QMARK_.call(null,nval__8934))
{return cljs.core.deref.call(null,nval__8934);
} else
{{
var G__8943 = nval__8934;
var G__8944 = (n__8933 + 1);
val__8932 = G__8943;
n__8933 = G__8944;
continue;
}
}
} else
{return val__8932;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8935 = cljs.core._count.call(null,cicoll);
var val__8936 = val;
var n__8937 = 0;
while(true){
if((n__8937 < cnt__8935))
{var nval__8938 = f.call(null,val__8936,cljs.core._nth.call(null,cicoll,n__8937));
if(cljs.core.reduced_QMARK_.call(null,nval__8938))
{return cljs.core.deref.call(null,nval__8938);
} else
{{
var G__8945 = nval__8938;
var G__8946 = (n__8937 + 1);
val__8936 = G__8945;
n__8937 = G__8946;
continue;
}
}
} else
{return val__8936;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8939 = cljs.core._count.call(null,cicoll);
var val__8940 = val;
var n__8941 = idx;
while(true){
if((n__8941 < cnt__8939))
{var nval__8942 = f.call(null,val__8940,cljs.core._nth.call(null,cicoll,n__8941));
if(cljs.core.reduced_QMARK_.call(null,nval__8942))
{return cljs.core.deref.call(null,nval__8942);
} else
{{
var G__8947 = nval__8942;
var G__8948 = (n__8941 + 1);
val__8940 = G__8947;
n__8941 = G__8948;
continue;
}
}
} else
{return val__8940;
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
var cnt__8961 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8962 = (arr[0]);
var n__8963 = 1;
while(true){
if((n__8963 < cnt__8961))
{var nval__8964 = f.call(null,val__8962,(arr[n__8963]));
if(cljs.core.reduced_QMARK_.call(null,nval__8964))
{return cljs.core.deref.call(null,nval__8964);
} else
{{
var G__8973 = nval__8964;
var G__8974 = (n__8963 + 1);
val__8962 = G__8973;
n__8963 = G__8974;
continue;
}
}
} else
{return val__8962;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8965 = arr.length;
var val__8966 = val;
var n__8967 = 0;
while(true){
if((n__8967 < cnt__8965))
{var nval__8968 = f.call(null,val__8966,(arr[n__8967]));
if(cljs.core.reduced_QMARK_.call(null,nval__8968))
{return cljs.core.deref.call(null,nval__8968);
} else
{{
var G__8975 = nval__8968;
var G__8976 = (n__8967 + 1);
val__8966 = G__8975;
n__8967 = G__8976;
continue;
}
}
} else
{return val__8966;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8969 = arr.length;
var val__8970 = val;
var n__8971 = idx;
while(true){
if((n__8971 < cnt__8969))
{var nval__8972 = f.call(null,val__8970,(arr[n__8971]));
if(cljs.core.reduced_QMARK_.call(null,nval__8972))
{return cljs.core.deref.call(null,nval__8972);
} else
{{
var G__8977 = nval__8972;
var G__8978 = (n__8971 + 1);
val__8970 = G__8977;
n__8971 = G__8978;
continue;
}
}
} else
{return val__8970;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8979 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8980 = this;
if(((this__8980.i + 1) < this__8980.a.length))
{return (new cljs.core.IndexedSeq(this__8980.a,(this__8980.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8981 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8982 = this;
var c__8983 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8983 > 0))
{return (new cljs.core.RSeq(coll,(c__8983 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8984 = this;
var this__8985 = this;
return cljs.core.pr_str.call(null,this__8985);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8986 = this;
if(cljs.core.counted_QMARK_.call(null,this__8986.a))
{return cljs.core.ci_reduce.call(null,this__8986.a,f,(this__8986.a[this__8986.i]),(this__8986.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8986.a[this__8986.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8987 = this;
if(cljs.core.counted_QMARK_.call(null,this__8987.a))
{return cljs.core.ci_reduce.call(null,this__8987.a,f,start,this__8987.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8988 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8989 = this;
return (this__8989.a.length - this__8989.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8990 = this;
return (this__8990.a[this__8990.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8991 = this;
if(((this__8991.i + 1) < this__8991.a.length))
{return (new cljs.core.IndexedSeq(this__8991.a,(this__8991.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8992 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8993 = this;
var i__8994 = (n + this__8993.i);
if((i__8994 < this__8993.a.length))
{return (this__8993.a[i__8994]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8995 = this;
var i__8996 = (n + this__8995.i);
if((i__8996 < this__8995.a.length))
{return (this__8995.a[i__8996]);
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
var G__8997 = null;
var G__8997__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8997__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8997 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8997__2.call(this,array,f);
case 3:
return G__8997__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8997;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8998 = null;
var G__8998__2 = (function (array,k){
return (array[k]);
});
var G__8998__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8998 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8998__2.call(this,array,k);
case 3:
return G__8998__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8998;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8999 = null;
var G__8999__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8999__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8999 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8999__2.call(this,array,n);
case 3:
return G__8999__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8999;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9000 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9001 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9002 = this;
var this__9003 = this;
return cljs.core.pr_str.call(null,this__9003);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9004 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9005 = this;
return (this__9005.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9006 = this;
return cljs.core._nth.call(null,this__9006.ci,this__9006.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9007 = this;
if((this__9007.i > 0))
{return (new cljs.core.RSeq(this__9007.ci,(this__9007.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9008 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9009 = this;
return (new cljs.core.RSeq(this__9009.ci,this__9009.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9010 = this;
return this__9010.meta;
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
{if((function (){var G__9014__9015 = coll;
if(G__9014__9015)
{if((function (){var or__3824__auto____9016 = (G__9014__9015.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____9016)
{return or__3824__auto____9016;
} else
{return G__9014__9015.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9014__9015.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9014__9015);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9014__9015);
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
{if((function (){var G__9021__9022 = coll;
if(G__9021__9022)
{if((function (){var or__3824__auto____9023 = (G__9021__9022.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9023)
{return or__3824__auto____9023;
} else
{return G__9021__9022.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9021__9022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9021__9022);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9021__9022);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9024 = cljs.core.seq.call(null,coll);
if((s__9024 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9024);
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
{if((function (){var G__9029__9030 = coll;
if(G__9029__9030)
{if((function (){var or__3824__auto____9031 = (G__9029__9030.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9031)
{return or__3824__auto____9031;
} else
{return G__9029__9030.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9029__9030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9029__9030);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9029__9030);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9032 = cljs.core.seq.call(null,coll);
if(!((s__9032 == null)))
{return cljs.core._rest.call(null,s__9032);
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
{if((function (){var G__9036__9037 = coll;
if(G__9036__9037)
{if((function (){var or__3824__auto____9038 = (G__9036__9037.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____9038)
{return or__3824__auto____9038;
} else
{return G__9036__9037.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9036__9037.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9036__9037);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9036__9037);
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
var sn__9040 = cljs.core.next.call(null,s);
if(!((sn__9040 == null)))
{{
var G__9041 = sn__9040;
s = G__9041;
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
var G__9042__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9043 = conj.call(null,coll,x);
var G__9044 = cljs.core.first.call(null,xs);
var G__9045 = cljs.core.next.call(null,xs);
coll = G__9043;
x = G__9044;
xs = G__9045;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9042 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9042__delegate.call(this, coll, x, xs);
};
G__9042.cljs$lang$maxFixedArity = 2;
G__9042.cljs$lang$applyTo = (function (arglist__9046){
var coll = cljs.core.first(arglist__9046);
var x = cljs.core.first(cljs.core.next(arglist__9046));
var xs = cljs.core.rest(cljs.core.next(arglist__9046));
return G__9042__delegate(coll, x, xs);
});
G__9042.cljs$lang$arity$variadic = G__9042__delegate;
return G__9042;
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
var s__9049 = cljs.core.seq.call(null,coll);
var acc__9050 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9049))
{return (acc__9050 + cljs.core._count.call(null,s__9049));
} else
{{
var G__9051 = cljs.core.next.call(null,s__9049);
var G__9052 = (acc__9050 + 1);
s__9049 = G__9051;
acc__9050 = G__9052;
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
{if((function (){var G__9059__9060 = coll;
if(G__9059__9060)
{if((function (){var or__3824__auto____9061 = (G__9059__9060.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9061)
{return or__3824__auto____9061;
} else
{return G__9059__9060.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9059__9060.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9059__9060);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9059__9060);
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
{if((function (){var G__9062__9063 = coll;
if(G__9062__9063)
{if((function (){var or__3824__auto____9064 = (G__9062__9063.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9064)
{return or__3824__auto____9064;
} else
{return G__9062__9063.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9062__9063.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9062__9063);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9062__9063);
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
var G__9067__delegate = function (coll,k,v,kvs){
while(true){
var ret__9066 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9068 = ret__9066;
var G__9069 = cljs.core.first.call(null,kvs);
var G__9070 = cljs.core.second.call(null,kvs);
var G__9071 = cljs.core.nnext.call(null,kvs);
coll = G__9068;
k = G__9069;
v = G__9070;
kvs = G__9071;
continue;
}
} else
{return ret__9066;
}
break;
}
};
var G__9067 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9067__delegate.call(this, coll, k, v, kvs);
};
G__9067.cljs$lang$maxFixedArity = 3;
G__9067.cljs$lang$applyTo = (function (arglist__9072){
var coll = cljs.core.first(arglist__9072);
var k = cljs.core.first(cljs.core.next(arglist__9072));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9072)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9072)));
return G__9067__delegate(coll, k, v, kvs);
});
G__9067.cljs$lang$arity$variadic = G__9067__delegate;
return G__9067;
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
var G__9075__delegate = function (coll,k,ks){
while(true){
var ret__9074 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9076 = ret__9074;
var G__9077 = cljs.core.first.call(null,ks);
var G__9078 = cljs.core.next.call(null,ks);
coll = G__9076;
k = G__9077;
ks = G__9078;
continue;
}
} else
{return ret__9074;
}
break;
}
};
var G__9075 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9075__delegate.call(this, coll, k, ks);
};
G__9075.cljs$lang$maxFixedArity = 2;
G__9075.cljs$lang$applyTo = (function (arglist__9079){
var coll = cljs.core.first(arglist__9079);
var k = cljs.core.first(cljs.core.next(arglist__9079));
var ks = cljs.core.rest(cljs.core.next(arglist__9079));
return G__9075__delegate(coll, k, ks);
});
G__9075.cljs$lang$arity$variadic = G__9075__delegate;
return G__9075;
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
if((function (){var G__9083__9084 = o;
if(G__9083__9084)
{if((function (){var or__3824__auto____9085 = (G__9083__9084.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9085)
{return or__3824__auto____9085;
} else
{return G__9083__9084.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9083__9084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9083__9084);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9083__9084);
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
var G__9088__delegate = function (coll,k,ks){
while(true){
var ret__9087 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9089 = ret__9087;
var G__9090 = cljs.core.first.call(null,ks);
var G__9091 = cljs.core.next.call(null,ks);
coll = G__9089;
k = G__9090;
ks = G__9091;
continue;
}
} else
{return ret__9087;
}
break;
}
};
var G__9088 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9088__delegate.call(this, coll, k, ks);
};
G__9088.cljs$lang$maxFixedArity = 2;
G__9088.cljs$lang$applyTo = (function (arglist__9092){
var coll = cljs.core.first(arglist__9092);
var k = cljs.core.first(cljs.core.next(arglist__9092));
var ks = cljs.core.rest(cljs.core.next(arglist__9092));
return G__9088__delegate(coll, k, ks);
});
G__9088.cljs$lang$arity$variadic = G__9088__delegate;
return G__9088;
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
var h__9094 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9094);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9094;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9096 = (cljs.core.string_hash_cache[k]);
if(!((h__9096 == null)))
{return h__9096;
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
if((function (){var and__3822__auto____9098 = goog.isString(o);
if(and__3822__auto____9098)
{return check_cache;
} else
{return and__3822__auto____9098;
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
{var G__9102__9103 = x;
if(G__9102__9103)
{if((function (){var or__3824__auto____9104 = (G__9102__9103.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____9104)
{return or__3824__auto____9104;
} else
{return G__9102__9103.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9102__9103.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9102__9103);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9102__9103);
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
{var G__9108__9109 = x;
if(G__9108__9109)
{if((function (){var or__3824__auto____9110 = (G__9108__9109.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____9110)
{return or__3824__auto____9110;
} else
{return G__9108__9109.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9108__9109.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9108__9109);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9108__9109);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9114__9115 = x;
if(G__9114__9115)
{if((function (){var or__3824__auto____9116 = (G__9114__9115.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____9116)
{return or__3824__auto____9116;
} else
{return G__9114__9115.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9114__9115.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9114__9115);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9114__9115);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9120__9121 = x;
if(G__9120__9121)
{if((function (){var or__3824__auto____9122 = (G__9120__9121.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____9122)
{return or__3824__auto____9122;
} else
{return G__9120__9121.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9120__9121.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9120__9121);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9120__9121);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9126__9127 = x;
if(G__9126__9127)
{if((function (){var or__3824__auto____9128 = (G__9126__9127.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____9128)
{return or__3824__auto____9128;
} else
{return G__9126__9127.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9126__9127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9126__9127);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9126__9127);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9132__9133 = x;
if(G__9132__9133)
{if((function (){var or__3824__auto____9134 = (G__9132__9133.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9134)
{return or__3824__auto____9134;
} else
{return G__9132__9133.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9132__9133.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9132__9133);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9132__9133);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9138__9139 = x;
if(G__9138__9139)
{if((function (){var or__3824__auto____9140 = (G__9138__9139.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9140)
{return or__3824__auto____9140;
} else
{return G__9138__9139.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9138__9139.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9138__9139);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9138__9139);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9144__9145 = x;
if(G__9144__9145)
{if((function (){var or__3824__auto____9146 = (G__9144__9145.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____9146)
{return or__3824__auto____9146;
} else
{return G__9144__9145.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9144__9145.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9144__9145);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9144__9145);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9150__9151 = x;
if(G__9150__9151)
{if((function (){var or__3824__auto____9152 = (G__9150__9151.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____9152)
{return or__3824__auto____9152;
} else
{return G__9150__9151.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9150__9151.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9150__9151);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9150__9151);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9156__9157 = x;
if(G__9156__9157)
{if(cljs.core.truth_((function (){var or__3824__auto____9158 = null;
if(cljs.core.truth_(or__3824__auto____9158))
{return or__3824__auto____9158;
} else
{return G__9156__9157.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9156__9157.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9156__9157);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9156__9157);
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
var G__9159__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9159 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9159__delegate.call(this, keyvals);
};
G__9159.cljs$lang$maxFixedArity = 0;
G__9159.cljs$lang$applyTo = (function (arglist__9160){
var keyvals = cljs.core.seq(arglist__9160);;
return G__9159__delegate(keyvals);
});
G__9159.cljs$lang$arity$variadic = G__9159__delegate;
return G__9159;
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
var keys__9162 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9162.push(key);
}));
return keys__9162;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9166 = i;
var j__9167 = j;
var len__9168 = len;
while(true){
if((len__9168 === 0))
{return to;
} else
{(to[j__9167] = (from[i__9166]));
{
var G__9169 = (i__9166 + 1);
var G__9170 = (j__9167 + 1);
var G__9171 = (len__9168 - 1);
i__9166 = G__9169;
j__9167 = G__9170;
len__9168 = G__9171;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9175 = (i + (len - 1));
var j__9176 = (j + (len - 1));
var len__9177 = len;
while(true){
if((len__9177 === 0))
{return to;
} else
{(to[j__9176] = (from[i__9175]));
{
var G__9178 = (i__9175 - 1);
var G__9179 = (j__9176 - 1);
var G__9180 = (len__9177 - 1);
i__9175 = G__9178;
j__9176 = G__9179;
len__9177 = G__9180;
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
{var G__9184__9185 = s;
if(G__9184__9185)
{if((function (){var or__3824__auto____9186 = (G__9184__9185.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9186)
{return or__3824__auto____9186;
} else
{return G__9184__9185.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9184__9185.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9184__9185);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9184__9185);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9190__9191 = s;
if(G__9190__9191)
{if((function (){var or__3824__auto____9192 = (G__9190__9191.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____9192)
{return or__3824__auto____9192;
} else
{return G__9190__9191.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9190__9191.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9190__9191);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9190__9191);
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
var and__3822__auto____9195 = goog.isString(x);
if(and__3822__auto____9195)
{return !((function (){var or__3824__auto____9196 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____9196)
{return or__3824__auto____9196;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____9195;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____9198 = goog.isString(x);
if(and__3822__auto____9198)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____9198;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____9200 = goog.isString(x);
if(and__3822__auto____9200)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____9200;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____9205 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____9205)
{return or__3824__auto____9205;
} else
{var G__9206__9207 = f;
if(G__9206__9207)
{if((function (){var or__3824__auto____9208 = (G__9206__9207.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____9208)
{return or__3824__auto____9208;
} else
{return G__9206__9207.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9206__9207.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9206__9207);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9206__9207);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____9210 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____9210)
{return (n == n.toFixed());
} else
{return and__3822__auto____9210;
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
if(cljs.core.truth_((function (){var and__3822__auto____9213 = coll;
if(cljs.core.truth_(and__3822__auto____9213))
{var and__3822__auto____9214 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____9214)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____9214;
}
} else
{return and__3822__auto____9213;
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
var G__9223__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9219 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9220 = more;
while(true){
var x__9221 = cljs.core.first.call(null,xs__9220);
var etc__9222 = cljs.core.next.call(null,xs__9220);
if(cljs.core.truth_(xs__9220))
{if(cljs.core.contains_QMARK_.call(null,s__9219,x__9221))
{return false;
} else
{{
var G__9224 = cljs.core.conj.call(null,s__9219,x__9221);
var G__9225 = etc__9222;
s__9219 = G__9224;
xs__9220 = G__9225;
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
var G__9223 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9223__delegate.call(this, x, y, more);
};
G__9223.cljs$lang$maxFixedArity = 2;
G__9223.cljs$lang$applyTo = (function (arglist__9226){
var x = cljs.core.first(arglist__9226);
var y = cljs.core.first(cljs.core.next(arglist__9226));
var more = cljs.core.rest(cljs.core.next(arglist__9226));
return G__9223__delegate(x, y, more);
});
G__9223.cljs$lang$arity$variadic = G__9223__delegate;
return G__9223;
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
{if((function (){var G__9230__9231 = x;
if(G__9230__9231)
{if(cljs.core.truth_((function (){var or__3824__auto____9232 = null;
if(cljs.core.truth_(or__3824__auto____9232))
{return or__3824__auto____9232;
} else
{return G__9230__9231.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9230__9231.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9230__9231);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9230__9231);
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
var xl__9237 = cljs.core.count.call(null,xs);
var yl__9238 = cljs.core.count.call(null,ys);
if((xl__9237 < yl__9238))
{return -1;
} else
{if((xl__9237 > yl__9238))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9237,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9239 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____9240 = (d__9239 === 0);
if(and__3822__auto____9240)
{return ((n + 1) < len);
} else
{return and__3822__auto____9240;
}
})())
{{
var G__9241 = xs;
var G__9242 = ys;
var G__9243 = len;
var G__9244 = (n + 1);
xs = G__9241;
ys = G__9242;
len = G__9243;
n = G__9244;
continue;
}
} else
{return d__9239;
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
var r__9246 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9246))
{return r__9246;
} else
{if(cljs.core.truth_(r__9246))
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
{var a__9248 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9248,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9248);
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
var temp__3971__auto____9254 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9254)
{var s__9255 = temp__3971__auto____9254;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9255),cljs.core.next.call(null,s__9255));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9256 = val;
var coll__9257 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9257)
{var nval__9258 = f.call(null,val__9256,cljs.core.first.call(null,coll__9257));
if(cljs.core.reduced_QMARK_.call(null,nval__9258))
{return cljs.core.deref.call(null,nval__9258);
} else
{{
var G__9259 = nval__9258;
var G__9260 = cljs.core.next.call(null,coll__9257);
val__9256 = G__9259;
coll__9257 = G__9260;
continue;
}
}
} else
{return val__9256;
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
var a__9262 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9262);
return cljs.core.vec.call(null,a__9262);
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
if((function (){var G__9269__9270 = coll;
if(G__9269__9270)
{if((function (){var or__3824__auto____9271 = (G__9269__9270.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9271)
{return or__3824__auto____9271;
} else
{return G__9269__9270.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9269__9270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9269__9270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9269__9270);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9272__9273 = coll;
if(G__9272__9273)
{if((function (){var or__3824__auto____9274 = (G__9272__9273.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9274)
{return or__3824__auto____9274;
} else
{return G__9272__9273.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9272__9273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9272__9273);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9272__9273);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__9275 = this;
return this__9275.val;
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
var G__9276__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9276__delegate.call(this, x, y, more);
};
G__9276.cljs$lang$maxFixedArity = 2;
G__9276.cljs$lang$applyTo = (function (arglist__9277){
var x = cljs.core.first(arglist__9277);
var y = cljs.core.first(cljs.core.next(arglist__9277));
var more = cljs.core.rest(cljs.core.next(arglist__9277));
return G__9276__delegate(x, y, more);
});
G__9276.cljs$lang$arity$variadic = G__9276__delegate;
return G__9276;
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
var G__9278__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9278 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9278__delegate.call(this, x, y, more);
};
G__9278.cljs$lang$maxFixedArity = 2;
G__9278.cljs$lang$applyTo = (function (arglist__9279){
var x = cljs.core.first(arglist__9279);
var y = cljs.core.first(cljs.core.next(arglist__9279));
var more = cljs.core.rest(cljs.core.next(arglist__9279));
return G__9278__delegate(x, y, more);
});
G__9278.cljs$lang$arity$variadic = G__9278__delegate;
return G__9278;
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
var G__9280__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9280 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9280__delegate.call(this, x, y, more);
};
G__9280.cljs$lang$maxFixedArity = 2;
G__9280.cljs$lang$applyTo = (function (arglist__9281){
var x = cljs.core.first(arglist__9281);
var y = cljs.core.first(cljs.core.next(arglist__9281));
var more = cljs.core.rest(cljs.core.next(arglist__9281));
return G__9280__delegate(x, y, more);
});
G__9280.cljs$lang$arity$variadic = G__9280__delegate;
return G__9280;
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
var G__9282__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9282__delegate.call(this, x, y, more);
};
G__9282.cljs$lang$maxFixedArity = 2;
G__9282.cljs$lang$applyTo = (function (arglist__9283){
var x = cljs.core.first(arglist__9283);
var y = cljs.core.first(cljs.core.next(arglist__9283));
var more = cljs.core.rest(cljs.core.next(arglist__9283));
return G__9282__delegate(x, y, more);
});
G__9282.cljs$lang$arity$variadic = G__9282__delegate;
return G__9282;
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
var G__9284__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9285 = y;
var G__9286 = cljs.core.first.call(null,more);
var G__9287 = cljs.core.next.call(null,more);
x = G__9285;
y = G__9286;
more = G__9287;
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
var G__9284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9284__delegate.call(this, x, y, more);
};
G__9284.cljs$lang$maxFixedArity = 2;
G__9284.cljs$lang$applyTo = (function (arglist__9288){
var x = cljs.core.first(arglist__9288);
var y = cljs.core.first(cljs.core.next(arglist__9288));
var more = cljs.core.rest(cljs.core.next(arglist__9288));
return G__9284__delegate(x, y, more);
});
G__9284.cljs$lang$arity$variadic = G__9284__delegate;
return G__9284;
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
var G__9289__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9290 = y;
var G__9291 = cljs.core.first.call(null,more);
var G__9292 = cljs.core.next.call(null,more);
x = G__9290;
y = G__9291;
more = G__9292;
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
var G__9289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9289__delegate.call(this, x, y, more);
};
G__9289.cljs$lang$maxFixedArity = 2;
G__9289.cljs$lang$applyTo = (function (arglist__9293){
var x = cljs.core.first(arglist__9293);
var y = cljs.core.first(cljs.core.next(arglist__9293));
var more = cljs.core.rest(cljs.core.next(arglist__9293));
return G__9289__delegate(x, y, more);
});
G__9289.cljs$lang$arity$variadic = G__9289__delegate;
return G__9289;
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
var G__9294__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9295 = y;
var G__9296 = cljs.core.first.call(null,more);
var G__9297 = cljs.core.next.call(null,more);
x = G__9295;
y = G__9296;
more = G__9297;
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
var G__9294 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9294__delegate.call(this, x, y, more);
};
G__9294.cljs$lang$maxFixedArity = 2;
G__9294.cljs$lang$applyTo = (function (arglist__9298){
var x = cljs.core.first(arglist__9298);
var y = cljs.core.first(cljs.core.next(arglist__9298));
var more = cljs.core.rest(cljs.core.next(arglist__9298));
return G__9294__delegate(x, y, more);
});
G__9294.cljs$lang$arity$variadic = G__9294__delegate;
return G__9294;
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
var G__9299__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9300 = y;
var G__9301 = cljs.core.first.call(null,more);
var G__9302 = cljs.core.next.call(null,more);
x = G__9300;
y = G__9301;
more = G__9302;
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
var G__9299 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9299__delegate.call(this, x, y, more);
};
G__9299.cljs$lang$maxFixedArity = 2;
G__9299.cljs$lang$applyTo = (function (arglist__9303){
var x = cljs.core.first(arglist__9303);
var y = cljs.core.first(cljs.core.next(arglist__9303));
var more = cljs.core.rest(cljs.core.next(arglist__9303));
return G__9299__delegate(x, y, more);
});
G__9299.cljs$lang$arity$variadic = G__9299__delegate;
return G__9299;
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
var G__9304__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9304__delegate.call(this, x, y, more);
};
G__9304.cljs$lang$maxFixedArity = 2;
G__9304.cljs$lang$applyTo = (function (arglist__9305){
var x = cljs.core.first(arglist__9305);
var y = cljs.core.first(cljs.core.next(arglist__9305));
var more = cljs.core.rest(cljs.core.next(arglist__9305));
return G__9304__delegate(x, y, more);
});
G__9304.cljs$lang$arity$variadic = G__9304__delegate;
return G__9304;
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
var G__9306__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9306 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9306__delegate.call(this, x, y, more);
};
G__9306.cljs$lang$maxFixedArity = 2;
G__9306.cljs$lang$applyTo = (function (arglist__9307){
var x = cljs.core.first(arglist__9307);
var y = cljs.core.first(cljs.core.next(arglist__9307));
var more = cljs.core.rest(cljs.core.next(arglist__9307));
return G__9306__delegate(x, y, more);
});
G__9306.cljs$lang$arity$variadic = G__9306__delegate;
return G__9306;
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
var rem__9309 = (n % d);
return cljs.core.fix.call(null,((n - rem__9309) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9311 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9311));
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
var v__9314 = (v - ((v >> 1) & 1431655765));
var v__9315 = ((v__9314 & 858993459) + ((v__9314 >> 2) & 858993459));
return ((((v__9315 + (v__9315 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9316__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9317 = y;
var G__9318 = cljs.core.first.call(null,more);
var G__9319 = cljs.core.next.call(null,more);
x = G__9317;
y = G__9318;
more = G__9319;
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
var G__9316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9316__delegate.call(this, x, y, more);
};
G__9316.cljs$lang$maxFixedArity = 2;
G__9316.cljs$lang$applyTo = (function (arglist__9320){
var x = cljs.core.first(arglist__9320);
var y = cljs.core.first(cljs.core.next(arglist__9320));
var more = cljs.core.rest(cljs.core.next(arglist__9320));
return G__9316__delegate(x, y, more);
});
G__9316.cljs$lang$arity$variadic = G__9316__delegate;
return G__9316;
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
var n__9324 = n;
var xs__9325 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9326 = xs__9325;
if(and__3822__auto____9326)
{return (n__9324 > 0);
} else
{return and__3822__auto____9326;
}
})()))
{{
var G__9327 = (n__9324 - 1);
var G__9328 = cljs.core.next.call(null,xs__9325);
n__9324 = G__9327;
xs__9325 = G__9328;
continue;
}
} else
{return xs__9325;
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
var G__9329__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9330 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9331 = cljs.core.next.call(null,more);
sb = G__9330;
more = G__9331;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9329 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9329__delegate.call(this, x, ys);
};
G__9329.cljs$lang$maxFixedArity = 1;
G__9329.cljs$lang$applyTo = (function (arglist__9332){
var x = cljs.core.first(arglist__9332);
var ys = cljs.core.rest(arglist__9332);
return G__9329__delegate(x, ys);
});
G__9329.cljs$lang$arity$variadic = G__9329__delegate;
return G__9329;
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
var G__9333__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9334 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9335 = cljs.core.next.call(null,more);
sb = G__9334;
more = G__9335;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9333 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9333__delegate.call(this, x, ys);
};
G__9333.cljs$lang$maxFixedArity = 1;
G__9333.cljs$lang$applyTo = (function (arglist__9336){
var x = cljs.core.first(arglist__9336);
var ys = cljs.core.rest(arglist__9336);
return G__9333__delegate(x, ys);
});
G__9333.cljs$lang$arity$variadic = G__9333__delegate;
return G__9333;
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
format.cljs$lang$applyTo = (function (arglist__9337){
var fmt = cljs.core.first(arglist__9337);
var args = cljs.core.rest(arglist__9337);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9340 = cljs.core.seq.call(null,x);
var ys__9341 = cljs.core.seq.call(null,y);
while(true){
if((xs__9340 == null))
{return (ys__9341 == null);
} else
{if((ys__9341 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9340),cljs.core.first.call(null,ys__9341)))
{{
var G__9342 = cljs.core.next.call(null,xs__9340);
var G__9343 = cljs.core.next.call(null,ys__9341);
xs__9340 = G__9342;
ys__9341 = G__9343;
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
return cljs.core.reduce.call(null,(function (p1__9344_SHARP_,p2__9345_SHARP_){
return cljs.core.hash_combine.call(null,p1__9344_SHARP_,cljs.core.hash.call(null,p2__9345_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9349 = 0;
var s__9350 = cljs.core.seq.call(null,m);
while(true){
if(s__9350)
{var e__9351 = cljs.core.first.call(null,s__9350);
{
var G__9352 = ((h__9349 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9351)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9351)))) % 4503599627370496);
var G__9353 = cljs.core.next.call(null,s__9350);
h__9349 = G__9352;
s__9350 = G__9353;
continue;
}
} else
{return h__9349;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9357 = 0;
var s__9358 = cljs.core.seq.call(null,s);
while(true){
if(s__9358)
{var e__9359 = cljs.core.first.call(null,s__9358);
{
var G__9360 = ((h__9357 + cljs.core.hash.call(null,e__9359)) % 4503599627370496);
var G__9361 = cljs.core.next.call(null,s__9358);
h__9357 = G__9360;
s__9358 = G__9361;
continue;
}
} else
{return h__9357;
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
var G__9382__9383 = cljs.core.seq.call(null,fn_map);
if(G__9382__9383)
{var G__9385__9387 = cljs.core.first.call(null,G__9382__9383);
var vec__9386__9388 = G__9385__9387;
var key_name__9389 = cljs.core.nth.call(null,vec__9386__9388,0,null);
var f__9390 = cljs.core.nth.call(null,vec__9386__9388,1,null);
var G__9382__9391 = G__9382__9383;
var G__9385__9392 = G__9385__9387;
var G__9382__9393 = G__9382__9391;
while(true){
var vec__9394__9395 = G__9385__9392;
var key_name__9396 = cljs.core.nth.call(null,vec__9394__9395,0,null);
var f__9397 = cljs.core.nth.call(null,vec__9394__9395,1,null);
var G__9382__9398 = G__9382__9393;
var str_name__9399 = cljs.core.name.call(null,key_name__9396);
(obj[str_name__9399] = f__9397);
var temp__3974__auto____9400 = cljs.core.next.call(null,G__9382__9398);
if(temp__3974__auto____9400)
{var G__9382__9401 = temp__3974__auto____9400;
{
var G__9402 = cljs.core.first.call(null,G__9382__9401);
var G__9403 = G__9382__9401;
G__9385__9392 = G__9402;
G__9382__9393 = G__9403;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9404 = this;
var h__2242__auto____9405 = this__9404.__hash;
if(!((h__2242__auto____9405 == null)))
{return h__2242__auto____9405;
} else
{var h__2242__auto____9406 = cljs.core.hash_coll.call(null,coll);
this__9404.__hash = h__2242__auto____9406;
return h__2242__auto____9406;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9407 = this;
if((this__9407.count === 1))
{return null;
} else
{return this__9407.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9408 = this;
return (new cljs.core.List(this__9408.meta,o,coll,(this__9408.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9409 = this;
var this__9410 = this;
return cljs.core.pr_str.call(null,this__9410);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9411 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9412 = this;
return this__9412.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9413 = this;
return this__9413.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9414 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9415 = this;
return this__9415.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9416 = this;
if((this__9416.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9416.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9417 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9418 = this;
return (new cljs.core.List(meta,this__9418.first,this__9418.rest,this__9418.count,this__9418.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9419 = this;
return this__9419.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9420 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9421 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9422 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9423 = this;
return (new cljs.core.List(this__9423.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9424 = this;
var this__9425 = this;
return cljs.core.pr_str.call(null,this__9425);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9426 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9427 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9428 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9429 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9430 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9431 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9432 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9433 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9434 = this;
return this__9434.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9435 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9439__9440 = coll;
if(G__9439__9440)
{if((function (){var or__3824__auto____9441 = (G__9439__9440.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9441)
{return or__3824__auto____9441;
} else
{return G__9439__9440.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9439__9440.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9439__9440);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9439__9440);
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
var G__9442__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9442 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9442__delegate.call(this, x, y, z, items);
};
G__9442.cljs$lang$maxFixedArity = 3;
G__9442.cljs$lang$applyTo = (function (arglist__9443){
var x = cljs.core.first(arglist__9443);
var y = cljs.core.first(cljs.core.next(arglist__9443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9443)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9443)));
return G__9442__delegate(x, y, z, items);
});
G__9442.cljs$lang$arity$variadic = G__9442__delegate;
return G__9442;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9444 = this;
var h__2242__auto____9445 = this__9444.__hash;
if(!((h__2242__auto____9445 == null)))
{return h__2242__auto____9445;
} else
{var h__2242__auto____9446 = cljs.core.hash_coll.call(null,coll);
this__9444.__hash = h__2242__auto____9446;
return h__2242__auto____9446;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9447 = this;
if((this__9447.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9447.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9448 = this;
return (new cljs.core.Cons(null,o,coll,this__9448.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9449 = this;
var this__9450 = this;
return cljs.core.pr_str.call(null,this__9450);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9451 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9452 = this;
return this__9452.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9453 = this;
if((this__9453.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9453.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9454 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9455 = this;
return (new cljs.core.Cons(meta,this__9455.first,this__9455.rest,this__9455.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9456 = this;
return this__9456.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9457 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9457.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9462 = (coll == null);
if(or__3824__auto____9462)
{return or__3824__auto____9462;
} else
{var G__9463__9464 = coll;
if(G__9463__9464)
{if((function (){var or__3824__auto____9465 = (G__9463__9464.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9465)
{return or__3824__auto____9465;
} else
{return G__9463__9464.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9463__9464.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9463__9464);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9463__9464);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9469__9470 = x;
if(G__9469__9470)
{if((function (){var or__3824__auto____9471 = (G__9469__9470.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9471)
{return or__3824__auto____9471;
} else
{return G__9469__9470.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9469__9470.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9469__9470);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9469__9470);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9472 = null;
var G__9472__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9472__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9472 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9472__2.call(this,string,f);
case 3:
return G__9472__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9472;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9473 = null;
var G__9473__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9473__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9473 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9473__2.call(this,string,k);
case 3:
return G__9473__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9473;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9474 = null;
var G__9474__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9474__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9474 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9474__2.call(this,string,n);
case 3:
return G__9474__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9474;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__9486 = null;
var G__9486__2 = (function (this_sym9477,coll){
var this__9479 = this;
var this_sym9477__9480 = this;
var ___9481 = this_sym9477__9480;
if((coll == null))
{return null;
} else
{var strobj__9482 = coll.strobj;
if((strobj__9482 == null))
{return cljs.core._lookup.call(null,coll,this__9479.k,null);
} else
{return (strobj__9482[this__9479.k]);
}
}
});
var G__9486__3 = (function (this_sym9478,coll,not_found){
var this__9479 = this;
var this_sym9478__9483 = this;
var ___9484 = this_sym9478__9483;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9479.k,not_found);
}
});
G__9486 = function(this_sym9478,coll,not_found){
switch(arguments.length){
case 2:
return G__9486__2.call(this,this_sym9478,coll);
case 3:
return G__9486__3.call(this,this_sym9478,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9486;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9475,args9476){
var this__9485 = this;
return this_sym9475.call.apply(this_sym9475,[this_sym9475].concat(args9476.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9495 = null;
var G__9495__2 = (function (this_sym9489,coll){
var this_sym9489__9491 = this;
var this__9492 = this_sym9489__9491;
return cljs.core._lookup.call(null,coll,this__9492.toString(),null);
});
var G__9495__3 = (function (this_sym9490,coll,not_found){
var this_sym9490__9493 = this;
var this__9494 = this_sym9490__9493;
return cljs.core._lookup.call(null,coll,this__9494.toString(),not_found);
});
G__9495 = function(this_sym9490,coll,not_found){
switch(arguments.length){
case 2:
return G__9495__2.call(this,this_sym9490,coll);
case 3:
return G__9495__3.call(this,this_sym9490,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9495;
})()
;
String.prototype.apply = (function (this_sym9487,args9488){
return this_sym9487.call.apply(this_sym9487,[this_sym9487].concat(args9488.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9497 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9497;
} else
{lazy_seq.x = x__9497.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9498 = this;
var h__2242__auto____9499 = this__9498.__hash;
if(!((h__2242__auto____9499 == null)))
{return h__2242__auto____9499;
} else
{var h__2242__auto____9500 = cljs.core.hash_coll.call(null,coll);
this__9498.__hash = h__2242__auto____9500;
return h__2242__auto____9500;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9501 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9502 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9503 = this;
var this__9504 = this;
return cljs.core.pr_str.call(null,this__9504);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9505 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9506 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9507 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9508 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9509 = this;
return (new cljs.core.LazySeq(meta,this__9509.realized,this__9509.x,this__9509.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9510 = this;
return this__9510.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9511 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9511.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9512 = this;
return this__9512.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9513 = this;
var ___9514 = this;
(this__9513.buf[this__9513.end] = o);
return this__9513.end = (this__9513.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9515 = this;
var ___9516 = this;
var ret__9517 = (new cljs.core.ArrayChunk(this__9515.buf,0,this__9515.end));
this__9515.buf = null;
return ret__9517;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9518 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9518.arr[this__9518.off]),(this__9518.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9519 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9519.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9520 = this;
if((this__9520.off === this__9520.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9520.arr,(this__9520.off + 1),this__9520.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9521 = this;
return (this__9521.arr[(this__9521.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9522 = this;
if((function (){var and__3822__auto____9523 = (i >= 0);
if(and__3822__auto____9523)
{return (i < (this__9522.end - this__9522.off));
} else
{return and__3822__auto____9523;
}
})())
{return (this__9522.arr[(this__9522.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9524 = this;
return (this__9524.end - this__9524.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__9525 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9526 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9527 = this;
return cljs.core._nth.call(null,this__9527.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9528 = this;
if((cljs.core._count.call(null,this__9528.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9528.chunk),this__9528.more,this__9528.meta));
} else
{if((this__9528.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9528.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9529 = this;
if((this__9529.more == null))
{return null;
} else
{return this__9529.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9530 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9531 = this;
return (new cljs.core.ChunkedCons(this__9531.chunk,this__9531.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9532 = this;
return this__9532.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9533 = this;
return this__9533.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9534 = this;
if((this__9534.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9534.more;
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
if((function (){var G__9538__9539 = s;
if(G__9538__9539)
{if(cljs.core.truth_((function (){var or__3824__auto____9540 = null;
if(cljs.core.truth_(or__3824__auto____9540))
{return or__3824__auto____9540;
} else
{return G__9538__9539.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9538__9539.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9538__9539);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9538__9539);
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
var ary__9543 = [];
var s__9544 = s;
while(true){
if(cljs.core.seq.call(null,s__9544))
{ary__9543.push(cljs.core.first.call(null,s__9544));
{
var G__9545 = cljs.core.next.call(null,s__9544);
s__9544 = G__9545;
continue;
}
} else
{return ary__9543;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9549 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9550 = 0;
var xs__9551 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9551)
{(ret__9549[i__9550] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9551)));
{
var G__9552 = (i__9550 + 1);
var G__9553 = cljs.core.next.call(null,xs__9551);
i__9550 = G__9552;
xs__9551 = G__9553;
continue;
}
} else
{}
break;
}
return ret__9549;
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
var a__9561 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9562 = cljs.core.seq.call(null,init_val_or_seq);
var i__9563 = 0;
var s__9564 = s__9562;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9565 = s__9564;
if(and__3822__auto____9565)
{return (i__9563 < size);
} else
{return and__3822__auto____9565;
}
})()))
{(a__9561[i__9563] = cljs.core.first.call(null,s__9564));
{
var G__9568 = (i__9563 + 1);
var G__9569 = cljs.core.next.call(null,s__9564);
i__9563 = G__9568;
s__9564 = G__9569;
continue;
}
} else
{return a__9561;
}
break;
}
} else
{var n__2577__auto____9566 = size;
var i__9567 = 0;
while(true){
if((i__9567 < n__2577__auto____9566))
{(a__9561[i__9567] = init_val_or_seq);
{
var G__9570 = (i__9567 + 1);
i__9567 = G__9570;
continue;
}
} else
{}
break;
}
return a__9561;
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
var a__9578 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9579 = cljs.core.seq.call(null,init_val_or_seq);
var i__9580 = 0;
var s__9581 = s__9579;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9582 = s__9581;
if(and__3822__auto____9582)
{return (i__9580 < size);
} else
{return and__3822__auto____9582;
}
})()))
{(a__9578[i__9580] = cljs.core.first.call(null,s__9581));
{
var G__9585 = (i__9580 + 1);
var G__9586 = cljs.core.next.call(null,s__9581);
i__9580 = G__9585;
s__9581 = G__9586;
continue;
}
} else
{return a__9578;
}
break;
}
} else
{var n__2577__auto____9583 = size;
var i__9584 = 0;
while(true){
if((i__9584 < n__2577__auto____9583))
{(a__9578[i__9584] = init_val_or_seq);
{
var G__9587 = (i__9584 + 1);
i__9584 = G__9587;
continue;
}
} else
{}
break;
}
return a__9578;
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
var a__9595 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9596 = cljs.core.seq.call(null,init_val_or_seq);
var i__9597 = 0;
var s__9598 = s__9596;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9599 = s__9598;
if(and__3822__auto____9599)
{return (i__9597 < size);
} else
{return and__3822__auto____9599;
}
})()))
{(a__9595[i__9597] = cljs.core.first.call(null,s__9598));
{
var G__9602 = (i__9597 + 1);
var G__9603 = cljs.core.next.call(null,s__9598);
i__9597 = G__9602;
s__9598 = G__9603;
continue;
}
} else
{return a__9595;
}
break;
}
} else
{var n__2577__auto____9600 = size;
var i__9601 = 0;
while(true){
if((i__9601 < n__2577__auto____9600))
{(a__9595[i__9601] = init_val_or_seq);
{
var G__9604 = (i__9601 + 1);
i__9601 = G__9604;
continue;
}
} else
{}
break;
}
return a__9595;
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
{var s__9609 = s;
var i__9610 = n;
var sum__9611 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9612 = (i__9610 > 0);
if(and__3822__auto____9612)
{return cljs.core.seq.call(null,s__9609);
} else
{return and__3822__auto____9612;
}
})()))
{{
var G__9613 = cljs.core.next.call(null,s__9609);
var G__9614 = (i__9610 - 1);
var G__9615 = (sum__9611 + 1);
s__9609 = G__9613;
i__9610 = G__9614;
sum__9611 = G__9615;
continue;
}
} else
{return sum__9611;
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
var s__9620 = cljs.core.seq.call(null,x);
if(s__9620)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9620))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9620),concat.call(null,cljs.core.chunk_rest.call(null,s__9620),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9620),concat.call(null,cljs.core.rest.call(null,s__9620),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9624__delegate = function (x,y,zs){
var cat__9623 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9622 = cljs.core.seq.call(null,xys);
if(xys__9622)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9622))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9622),cat.call(null,cljs.core.chunk_rest.call(null,xys__9622),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9622),cat.call(null,cljs.core.rest.call(null,xys__9622),zs));
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
return cat__9623.call(null,concat.call(null,x,y),zs);
};
var G__9624 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9624__delegate.call(this, x, y, zs);
};
G__9624.cljs$lang$maxFixedArity = 2;
G__9624.cljs$lang$applyTo = (function (arglist__9625){
var x = cljs.core.first(arglist__9625);
var y = cljs.core.first(cljs.core.next(arglist__9625));
var zs = cljs.core.rest(cljs.core.next(arglist__9625));
return G__9624__delegate(x, y, zs);
});
G__9624.cljs$lang$arity$variadic = G__9624__delegate;
return G__9624;
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
var G__9626__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9626 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9626__delegate.call(this, a, b, c, d, more);
};
G__9626.cljs$lang$maxFixedArity = 4;
G__9626.cljs$lang$applyTo = (function (arglist__9627){
var a = cljs.core.first(arglist__9627);
var b = cljs.core.first(cljs.core.next(arglist__9627));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9627)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9627))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9627))));
return G__9626__delegate(a, b, c, d, more);
});
G__9626.cljs$lang$arity$variadic = G__9626__delegate;
return G__9626;
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
var args__9669 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9670 = cljs.core._first.call(null,args__9669);
var args__9671 = cljs.core._rest.call(null,args__9669);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9670);
} else
{return f.call(null,a__9670);
}
} else
{var b__9672 = cljs.core._first.call(null,args__9671);
var args__9673 = cljs.core._rest.call(null,args__9671);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9670,b__9672);
} else
{return f.call(null,a__9670,b__9672);
}
} else
{var c__9674 = cljs.core._first.call(null,args__9673);
var args__9675 = cljs.core._rest.call(null,args__9673);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9670,b__9672,c__9674);
} else
{return f.call(null,a__9670,b__9672,c__9674);
}
} else
{var d__9676 = cljs.core._first.call(null,args__9675);
var args__9677 = cljs.core._rest.call(null,args__9675);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9670,b__9672,c__9674,d__9676);
} else
{return f.call(null,a__9670,b__9672,c__9674,d__9676);
}
} else
{var e__9678 = cljs.core._first.call(null,args__9677);
var args__9679 = cljs.core._rest.call(null,args__9677);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9670,b__9672,c__9674,d__9676,e__9678);
} else
{return f.call(null,a__9670,b__9672,c__9674,d__9676,e__9678);
}
} else
{var f__9680 = cljs.core._first.call(null,args__9679);
var args__9681 = cljs.core._rest.call(null,args__9679);
if((argc === 6))
{if(f__9680.cljs$lang$arity$6)
{return f__9680.cljs$lang$arity$6(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680);
}
} else
{var g__9682 = cljs.core._first.call(null,args__9681);
var args__9683 = cljs.core._rest.call(null,args__9681);
if((argc === 7))
{if(f__9680.cljs$lang$arity$7)
{return f__9680.cljs$lang$arity$7(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682);
}
} else
{var h__9684 = cljs.core._first.call(null,args__9683);
var args__9685 = cljs.core._rest.call(null,args__9683);
if((argc === 8))
{if(f__9680.cljs$lang$arity$8)
{return f__9680.cljs$lang$arity$8(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684);
}
} else
{var i__9686 = cljs.core._first.call(null,args__9685);
var args__9687 = cljs.core._rest.call(null,args__9685);
if((argc === 9))
{if(f__9680.cljs$lang$arity$9)
{return f__9680.cljs$lang$arity$9(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686);
}
} else
{var j__9688 = cljs.core._first.call(null,args__9687);
var args__9689 = cljs.core._rest.call(null,args__9687);
if((argc === 10))
{if(f__9680.cljs$lang$arity$10)
{return f__9680.cljs$lang$arity$10(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688);
}
} else
{var k__9690 = cljs.core._first.call(null,args__9689);
var args__9691 = cljs.core._rest.call(null,args__9689);
if((argc === 11))
{if(f__9680.cljs$lang$arity$11)
{return f__9680.cljs$lang$arity$11(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690);
}
} else
{var l__9692 = cljs.core._first.call(null,args__9691);
var args__9693 = cljs.core._rest.call(null,args__9691);
if((argc === 12))
{if(f__9680.cljs$lang$arity$12)
{return f__9680.cljs$lang$arity$12(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692);
}
} else
{var m__9694 = cljs.core._first.call(null,args__9693);
var args__9695 = cljs.core._rest.call(null,args__9693);
if((argc === 13))
{if(f__9680.cljs$lang$arity$13)
{return f__9680.cljs$lang$arity$13(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694);
}
} else
{var n__9696 = cljs.core._first.call(null,args__9695);
var args__9697 = cljs.core._rest.call(null,args__9695);
if((argc === 14))
{if(f__9680.cljs$lang$arity$14)
{return f__9680.cljs$lang$arity$14(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696);
}
} else
{var o__9698 = cljs.core._first.call(null,args__9697);
var args__9699 = cljs.core._rest.call(null,args__9697);
if((argc === 15))
{if(f__9680.cljs$lang$arity$15)
{return f__9680.cljs$lang$arity$15(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698);
}
} else
{var p__9700 = cljs.core._first.call(null,args__9699);
var args__9701 = cljs.core._rest.call(null,args__9699);
if((argc === 16))
{if(f__9680.cljs$lang$arity$16)
{return f__9680.cljs$lang$arity$16(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700);
}
} else
{var q__9702 = cljs.core._first.call(null,args__9701);
var args__9703 = cljs.core._rest.call(null,args__9701);
if((argc === 17))
{if(f__9680.cljs$lang$arity$17)
{return f__9680.cljs$lang$arity$17(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702);
}
} else
{var r__9704 = cljs.core._first.call(null,args__9703);
var args__9705 = cljs.core._rest.call(null,args__9703);
if((argc === 18))
{if(f__9680.cljs$lang$arity$18)
{return f__9680.cljs$lang$arity$18(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704);
}
} else
{var s__9706 = cljs.core._first.call(null,args__9705);
var args__9707 = cljs.core._rest.call(null,args__9705);
if((argc === 19))
{if(f__9680.cljs$lang$arity$19)
{return f__9680.cljs$lang$arity$19(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704,s__9706);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704,s__9706);
}
} else
{var t__9708 = cljs.core._first.call(null,args__9707);
var args__9709 = cljs.core._rest.call(null,args__9707);
if((argc === 20))
{if(f__9680.cljs$lang$arity$20)
{return f__9680.cljs$lang$arity$20(a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704,s__9706,t__9708);
} else
{return f__9680.call(null,a__9670,b__9672,c__9674,d__9676,e__9678,f__9680,g__9682,h__9684,i__9686,j__9688,k__9690,l__9692,m__9694,n__9696,o__9698,p__9700,q__9702,r__9704,s__9706,t__9708);
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
var fixed_arity__9724 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9725 = cljs.core.bounded_count.call(null,args,(fixed_arity__9724 + 1));
if((bc__9725 <= fixed_arity__9724))
{return cljs.core.apply_to.call(null,f,bc__9725,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9726 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9727 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9728 = cljs.core.bounded_count.call(null,arglist__9726,(fixed_arity__9727 + 1));
if((bc__9728 <= fixed_arity__9727))
{return cljs.core.apply_to.call(null,f,bc__9728,arglist__9726);
} else
{return f.cljs$lang$applyTo(arglist__9726);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9726));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9729 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9730 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9731 = cljs.core.bounded_count.call(null,arglist__9729,(fixed_arity__9730 + 1));
if((bc__9731 <= fixed_arity__9730))
{return cljs.core.apply_to.call(null,f,bc__9731,arglist__9729);
} else
{return f.cljs$lang$applyTo(arglist__9729);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9729));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9732 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9733 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9734 = cljs.core.bounded_count.call(null,arglist__9732,(fixed_arity__9733 + 1));
if((bc__9734 <= fixed_arity__9733))
{return cljs.core.apply_to.call(null,f,bc__9734,arglist__9732);
} else
{return f.cljs$lang$applyTo(arglist__9732);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9732));
}
});
var apply__6 = (function() { 
var G__9738__delegate = function (f,a,b,c,d,args){
var arglist__9735 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9736 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9737 = cljs.core.bounded_count.call(null,arglist__9735,(fixed_arity__9736 + 1));
if((bc__9737 <= fixed_arity__9736))
{return cljs.core.apply_to.call(null,f,bc__9737,arglist__9735);
} else
{return f.cljs$lang$applyTo(arglist__9735);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9735));
}
};
var G__9738 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9738__delegate.call(this, f, a, b, c, d, args);
};
G__9738.cljs$lang$maxFixedArity = 5;
G__9738.cljs$lang$applyTo = (function (arglist__9739){
var f = cljs.core.first(arglist__9739);
var a = cljs.core.first(cljs.core.next(arglist__9739));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9739)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9739))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9739)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9739)))));
return G__9738__delegate(f, a, b, c, d, args);
});
G__9738.cljs$lang$arity$variadic = G__9738__delegate;
return G__9738;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9740){
var obj = cljs.core.first(arglist__9740);
var f = cljs.core.first(cljs.core.next(arglist__9740));
var args = cljs.core.rest(cljs.core.next(arglist__9740));
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
var G__9741__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9741 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9741__delegate.call(this, x, y, more);
};
G__9741.cljs$lang$maxFixedArity = 2;
G__9741.cljs$lang$applyTo = (function (arglist__9742){
var x = cljs.core.first(arglist__9742);
var y = cljs.core.first(cljs.core.next(arglist__9742));
var more = cljs.core.rest(cljs.core.next(arglist__9742));
return G__9741__delegate(x, y, more);
});
G__9741.cljs$lang$arity$variadic = G__9741__delegate;
return G__9741;
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
var G__9743 = pred;
var G__9744 = cljs.core.next.call(null,coll);
pred = G__9743;
coll = G__9744;
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
{var or__3824__auto____9746 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9746))
{return or__3824__auto____9746;
} else
{{
var G__9747 = pred;
var G__9748 = cljs.core.next.call(null,coll);
pred = G__9747;
coll = G__9748;
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
var G__9749 = null;
var G__9749__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9749__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9749__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9749__3 = (function() { 
var G__9750__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9750 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9750__delegate.call(this, x, y, zs);
};
G__9750.cljs$lang$maxFixedArity = 2;
G__9750.cljs$lang$applyTo = (function (arglist__9751){
var x = cljs.core.first(arglist__9751);
var y = cljs.core.first(cljs.core.next(arglist__9751));
var zs = cljs.core.rest(cljs.core.next(arglist__9751));
return G__9750__delegate(x, y, zs);
});
G__9750.cljs$lang$arity$variadic = G__9750__delegate;
return G__9750;
})()
;
G__9749 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9749__0.call(this);
case 1:
return G__9749__1.call(this,x);
case 2:
return G__9749__2.call(this,x,y);
default:
return G__9749__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9749.cljs$lang$maxFixedArity = 2;
G__9749.cljs$lang$applyTo = G__9749__3.cljs$lang$applyTo;
return G__9749;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9752__delegate = function (args){
return x;
};
var G__9752 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9752__delegate.call(this, args);
};
G__9752.cljs$lang$maxFixedArity = 0;
G__9752.cljs$lang$applyTo = (function (arglist__9753){
var args = cljs.core.seq(arglist__9753);;
return G__9752__delegate(args);
});
G__9752.cljs$lang$arity$variadic = G__9752__delegate;
return G__9752;
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
var G__9760 = null;
var G__9760__0 = (function (){
return f.call(null,g.call(null));
});
var G__9760__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9760__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9760__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9760__4 = (function() { 
var G__9761__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9761__delegate.call(this, x, y, z, args);
};
G__9761.cljs$lang$maxFixedArity = 3;
G__9761.cljs$lang$applyTo = (function (arglist__9762){
var x = cljs.core.first(arglist__9762);
var y = cljs.core.first(cljs.core.next(arglist__9762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9762)));
return G__9761__delegate(x, y, z, args);
});
G__9761.cljs$lang$arity$variadic = G__9761__delegate;
return G__9761;
})()
;
G__9760 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9760__0.call(this);
case 1:
return G__9760__1.call(this,x);
case 2:
return G__9760__2.call(this,x,y);
case 3:
return G__9760__3.call(this,x,y,z);
default:
return G__9760__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9760.cljs$lang$maxFixedArity = 3;
G__9760.cljs$lang$applyTo = G__9760__4.cljs$lang$applyTo;
return G__9760;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9763 = null;
var G__9763__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9763__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9763__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9763__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9763__4 = (function() { 
var G__9764__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9764 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9764__delegate.call(this, x, y, z, args);
};
G__9764.cljs$lang$maxFixedArity = 3;
G__9764.cljs$lang$applyTo = (function (arglist__9765){
var x = cljs.core.first(arglist__9765);
var y = cljs.core.first(cljs.core.next(arglist__9765));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9765)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9765)));
return G__9764__delegate(x, y, z, args);
});
G__9764.cljs$lang$arity$variadic = G__9764__delegate;
return G__9764;
})()
;
G__9763 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9763__0.call(this);
case 1:
return G__9763__1.call(this,x);
case 2:
return G__9763__2.call(this,x,y);
case 3:
return G__9763__3.call(this,x,y,z);
default:
return G__9763__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9763.cljs$lang$maxFixedArity = 3;
G__9763.cljs$lang$applyTo = G__9763__4.cljs$lang$applyTo;
return G__9763;
})()
});
var comp__4 = (function() { 
var G__9766__delegate = function (f1,f2,f3,fs){
var fs__9757 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9767__delegate = function (args){
var ret__9758 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9757),args);
var fs__9759 = cljs.core.next.call(null,fs__9757);
while(true){
if(fs__9759)
{{
var G__9768 = cljs.core.first.call(null,fs__9759).call(null,ret__9758);
var G__9769 = cljs.core.next.call(null,fs__9759);
ret__9758 = G__9768;
fs__9759 = G__9769;
continue;
}
} else
{return ret__9758;
}
break;
}
};
var G__9767 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9767__delegate.call(this, args);
};
G__9767.cljs$lang$maxFixedArity = 0;
G__9767.cljs$lang$applyTo = (function (arglist__9770){
var args = cljs.core.seq(arglist__9770);;
return G__9767__delegate(args);
});
G__9767.cljs$lang$arity$variadic = G__9767__delegate;
return G__9767;
})()
;
};
var G__9766 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9766__delegate.call(this, f1, f2, f3, fs);
};
G__9766.cljs$lang$maxFixedArity = 3;
G__9766.cljs$lang$applyTo = (function (arglist__9771){
var f1 = cljs.core.first(arglist__9771);
var f2 = cljs.core.first(cljs.core.next(arglist__9771));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9771)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9771)));
return G__9766__delegate(f1, f2, f3, fs);
});
G__9766.cljs$lang$arity$variadic = G__9766__delegate;
return G__9766;
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
var G__9772__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9772 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9772__delegate.call(this, args);
};
G__9772.cljs$lang$maxFixedArity = 0;
G__9772.cljs$lang$applyTo = (function (arglist__9773){
var args = cljs.core.seq(arglist__9773);;
return G__9772__delegate(args);
});
G__9772.cljs$lang$arity$variadic = G__9772__delegate;
return G__9772;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9774__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9774 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9774__delegate.call(this, args);
};
G__9774.cljs$lang$maxFixedArity = 0;
G__9774.cljs$lang$applyTo = (function (arglist__9775){
var args = cljs.core.seq(arglist__9775);;
return G__9774__delegate(args);
});
G__9774.cljs$lang$arity$variadic = G__9774__delegate;
return G__9774;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9776__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9776 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9776__delegate.call(this, args);
};
G__9776.cljs$lang$maxFixedArity = 0;
G__9776.cljs$lang$applyTo = (function (arglist__9777){
var args = cljs.core.seq(arglist__9777);;
return G__9776__delegate(args);
});
G__9776.cljs$lang$arity$variadic = G__9776__delegate;
return G__9776;
})()
;
});
var partial__5 = (function() { 
var G__9778__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9779__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9779 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9779__delegate.call(this, args);
};
G__9779.cljs$lang$maxFixedArity = 0;
G__9779.cljs$lang$applyTo = (function (arglist__9780){
var args = cljs.core.seq(arglist__9780);;
return G__9779__delegate(args);
});
G__9779.cljs$lang$arity$variadic = G__9779__delegate;
return G__9779;
})()
;
};
var G__9778 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9778__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9778.cljs$lang$maxFixedArity = 4;
G__9778.cljs$lang$applyTo = (function (arglist__9781){
var f = cljs.core.first(arglist__9781);
var arg1 = cljs.core.first(cljs.core.next(arglist__9781));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9781)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9781))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9781))));
return G__9778__delegate(f, arg1, arg2, arg3, more);
});
G__9778.cljs$lang$arity$variadic = G__9778__delegate;
return G__9778;
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
var G__9782 = null;
var G__9782__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9782__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9782__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9782__4 = (function() { 
var G__9783__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9783 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9783__delegate.call(this, a, b, c, ds);
};
G__9783.cljs$lang$maxFixedArity = 3;
G__9783.cljs$lang$applyTo = (function (arglist__9784){
var a = cljs.core.first(arglist__9784);
var b = cljs.core.first(cljs.core.next(arglist__9784));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9784)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9784)));
return G__9783__delegate(a, b, c, ds);
});
G__9783.cljs$lang$arity$variadic = G__9783__delegate;
return G__9783;
})()
;
G__9782 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9782__1.call(this,a);
case 2:
return G__9782__2.call(this,a,b);
case 3:
return G__9782__3.call(this,a,b,c);
default:
return G__9782__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9782.cljs$lang$maxFixedArity = 3;
G__9782.cljs$lang$applyTo = G__9782__4.cljs$lang$applyTo;
return G__9782;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9785 = null;
var G__9785__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9785__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9785__4 = (function() { 
var G__9786__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9786 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9786__delegate.call(this, a, b, c, ds);
};
G__9786.cljs$lang$maxFixedArity = 3;
G__9786.cljs$lang$applyTo = (function (arglist__9787){
var a = cljs.core.first(arglist__9787);
var b = cljs.core.first(cljs.core.next(arglist__9787));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9787)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9787)));
return G__9786__delegate(a, b, c, ds);
});
G__9786.cljs$lang$arity$variadic = G__9786__delegate;
return G__9786;
})()
;
G__9785 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9785__2.call(this,a,b);
case 3:
return G__9785__3.call(this,a,b,c);
default:
return G__9785__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9785.cljs$lang$maxFixedArity = 3;
G__9785.cljs$lang$applyTo = G__9785__4.cljs$lang$applyTo;
return G__9785;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9788 = null;
var G__9788__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9788__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9788__4 = (function() { 
var G__9789__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9789 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9789__delegate.call(this, a, b, c, ds);
};
G__9789.cljs$lang$maxFixedArity = 3;
G__9789.cljs$lang$applyTo = (function (arglist__9790){
var a = cljs.core.first(arglist__9790);
var b = cljs.core.first(cljs.core.next(arglist__9790));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9790)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9790)));
return G__9789__delegate(a, b, c, ds);
});
G__9789.cljs$lang$arity$variadic = G__9789__delegate;
return G__9789;
})()
;
G__9788 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9788__2.call(this,a,b);
case 3:
return G__9788__3.call(this,a,b,c);
default:
return G__9788__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9788.cljs$lang$maxFixedArity = 3;
G__9788.cljs$lang$applyTo = G__9788__4.cljs$lang$applyTo;
return G__9788;
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
var mapi__9806 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9814 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9814)
{var s__9815 = temp__3974__auto____9814;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9815))
{var c__9816 = cljs.core.chunk_first.call(null,s__9815);
var size__9817 = cljs.core.count.call(null,c__9816);
var b__9818 = cljs.core.chunk_buffer.call(null,size__9817);
var n__2577__auto____9819 = size__9817;
var i__9820 = 0;
while(true){
if((i__9820 < n__2577__auto____9819))
{cljs.core.chunk_append.call(null,b__9818,f.call(null,(idx + i__9820),cljs.core._nth.call(null,c__9816,i__9820)));
{
var G__9821 = (i__9820 + 1);
i__9820 = G__9821;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9818),mapi.call(null,(idx + size__9817),cljs.core.chunk_rest.call(null,s__9815)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9815)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9815)));
}
} else
{return null;
}
}),null));
});
return mapi__9806.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9831 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9831)
{var s__9832 = temp__3974__auto____9831;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9832))
{var c__9833 = cljs.core.chunk_first.call(null,s__9832);
var size__9834 = cljs.core.count.call(null,c__9833);
var b__9835 = cljs.core.chunk_buffer.call(null,size__9834);
var n__2577__auto____9836 = size__9834;
var i__9837 = 0;
while(true){
if((i__9837 < n__2577__auto____9836))
{var x__9838 = f.call(null,cljs.core._nth.call(null,c__9833,i__9837));
if((x__9838 == null))
{} else
{cljs.core.chunk_append.call(null,b__9835,x__9838);
}
{
var G__9840 = (i__9837 + 1);
i__9837 = G__9840;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9835),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9832)));
} else
{var x__9839 = f.call(null,cljs.core.first.call(null,s__9832));
if((x__9839 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9832));
} else
{return cljs.core.cons.call(null,x__9839,keep.call(null,f,cljs.core.rest.call(null,s__9832)));
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
var keepi__9866 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9876 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9876)
{var s__9877 = temp__3974__auto____9876;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9877))
{var c__9878 = cljs.core.chunk_first.call(null,s__9877);
var size__9879 = cljs.core.count.call(null,c__9878);
var b__9880 = cljs.core.chunk_buffer.call(null,size__9879);
var n__2577__auto____9881 = size__9879;
var i__9882 = 0;
while(true){
if((i__9882 < n__2577__auto____9881))
{var x__9883 = f.call(null,(idx + i__9882),cljs.core._nth.call(null,c__9878,i__9882));
if((x__9883 == null))
{} else
{cljs.core.chunk_append.call(null,b__9880,x__9883);
}
{
var G__9885 = (i__9882 + 1);
i__9882 = G__9885;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9880),keepi.call(null,(idx + size__9879),cljs.core.chunk_rest.call(null,s__9877)));
} else
{var x__9884 = f.call(null,idx,cljs.core.first.call(null,s__9877));
if((x__9884 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9877));
} else
{return cljs.core.cons.call(null,x__9884,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9877)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9866.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9971 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9971))
{return p.call(null,y);
} else
{return and__3822__auto____9971;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9972 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9972))
{var and__3822__auto____9973 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9973))
{return p.call(null,z);
} else
{return and__3822__auto____9973;
}
} else
{return and__3822__auto____9972;
}
})());
});
var ep1__4 = (function() { 
var G__10042__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9974 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9974))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9974;
}
})());
};
var G__10042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10042__delegate.call(this, x, y, z, args);
};
G__10042.cljs$lang$maxFixedArity = 3;
G__10042.cljs$lang$applyTo = (function (arglist__10043){
var x = cljs.core.first(arglist__10043);
var y = cljs.core.first(cljs.core.next(arglist__10043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10043)));
return G__10042__delegate(x, y, z, args);
});
G__10042.cljs$lang$arity$variadic = G__10042__delegate;
return G__10042;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9986 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9986))
{return p2.call(null,x);
} else
{return and__3822__auto____9986;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9987 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9987))
{var and__3822__auto____9988 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9988))
{var and__3822__auto____9989 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9989))
{return p2.call(null,y);
} else
{return and__3822__auto____9989;
}
} else
{return and__3822__auto____9988;
}
} else
{return and__3822__auto____9987;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9990 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9990))
{var and__3822__auto____9991 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9991))
{var and__3822__auto____9992 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9992))
{var and__3822__auto____9993 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9993))
{var and__3822__auto____9994 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9994))
{return p2.call(null,z);
} else
{return and__3822__auto____9994;
}
} else
{return and__3822__auto____9993;
}
} else
{return and__3822__auto____9992;
}
} else
{return and__3822__auto____9991;
}
} else
{return and__3822__auto____9990;
}
})());
});
var ep2__4 = (function() { 
var G__10044__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9995 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9995))
{return cljs.core.every_QMARK_.call(null,(function (p1__9841_SHARP_){
var and__3822__auto____9996 = p1.call(null,p1__9841_SHARP_);
if(cljs.core.truth_(and__3822__auto____9996))
{return p2.call(null,p1__9841_SHARP_);
} else
{return and__3822__auto____9996;
}
}),args);
} else
{return and__3822__auto____9995;
}
})());
};
var G__10044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10044__delegate.call(this, x, y, z, args);
};
G__10044.cljs$lang$maxFixedArity = 3;
G__10044.cljs$lang$applyTo = (function (arglist__10045){
var x = cljs.core.first(arglist__10045);
var y = cljs.core.first(cljs.core.next(arglist__10045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10045)));
return G__10044__delegate(x, y, z, args);
});
G__10044.cljs$lang$arity$variadic = G__10044__delegate;
return G__10044;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10015 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10015))
{var and__3822__auto____10016 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10016))
{return p3.call(null,x);
} else
{return and__3822__auto____10016;
}
} else
{return and__3822__auto____10015;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10017 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10017))
{var and__3822__auto____10018 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10018))
{var and__3822__auto____10019 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10019))
{var and__3822__auto____10020 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10020))
{var and__3822__auto____10021 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10021))
{return p3.call(null,y);
} else
{return and__3822__auto____10021;
}
} else
{return and__3822__auto____10020;
}
} else
{return and__3822__auto____10019;
}
} else
{return and__3822__auto____10018;
}
} else
{return and__3822__auto____10017;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10022 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10022))
{var and__3822__auto____10023 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10023))
{var and__3822__auto____10024 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10024))
{var and__3822__auto____10025 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10025))
{var and__3822__auto____10026 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10026))
{var and__3822__auto____10027 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____10027))
{var and__3822__auto____10028 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10028))
{var and__3822__auto____10029 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____10029))
{return p3.call(null,z);
} else
{return and__3822__auto____10029;
}
} else
{return and__3822__auto____10028;
}
} else
{return and__3822__auto____10027;
}
} else
{return and__3822__auto____10026;
}
} else
{return and__3822__auto____10025;
}
} else
{return and__3822__auto____10024;
}
} else
{return and__3822__auto____10023;
}
} else
{return and__3822__auto____10022;
}
})());
});
var ep3__4 = (function() { 
var G__10046__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10030 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10030))
{return cljs.core.every_QMARK_.call(null,(function (p1__9842_SHARP_){
var and__3822__auto____10031 = p1.call(null,p1__9842_SHARP_);
if(cljs.core.truth_(and__3822__auto____10031))
{var and__3822__auto____10032 = p2.call(null,p1__9842_SHARP_);
if(cljs.core.truth_(and__3822__auto____10032))
{return p3.call(null,p1__9842_SHARP_);
} else
{return and__3822__auto____10032;
}
} else
{return and__3822__auto____10031;
}
}),args);
} else
{return and__3822__auto____10030;
}
})());
};
var G__10046 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10046__delegate.call(this, x, y, z, args);
};
G__10046.cljs$lang$maxFixedArity = 3;
G__10046.cljs$lang$applyTo = (function (arglist__10047){
var x = cljs.core.first(arglist__10047);
var y = cljs.core.first(cljs.core.next(arglist__10047));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10047)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10047)));
return G__10046__delegate(x, y, z, args);
});
G__10046.cljs$lang$arity$variadic = G__10046__delegate;
return G__10046;
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
var G__10048__delegate = function (p1,p2,p3,ps){
var ps__10033 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9843_SHARP_){
return p1__9843_SHARP_.call(null,x);
}),ps__10033);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9844_SHARP_){
var and__3822__auto____10038 = p1__9844_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10038))
{return p1__9844_SHARP_.call(null,y);
} else
{return and__3822__auto____10038;
}
}),ps__10033);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9845_SHARP_){
var and__3822__auto____10039 = p1__9845_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10039))
{var and__3822__auto____10040 = p1__9845_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____10040))
{return p1__9845_SHARP_.call(null,z);
} else
{return and__3822__auto____10040;
}
} else
{return and__3822__auto____10039;
}
}),ps__10033);
});
var epn__4 = (function() { 
var G__10049__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10041 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10041))
{return cljs.core.every_QMARK_.call(null,(function (p1__9846_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9846_SHARP_,args);
}),ps__10033);
} else
{return and__3822__auto____10041;
}
})());
};
var G__10049 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10049__delegate.call(this, x, y, z, args);
};
G__10049.cljs$lang$maxFixedArity = 3;
G__10049.cljs$lang$applyTo = (function (arglist__10050){
var x = cljs.core.first(arglist__10050);
var y = cljs.core.first(cljs.core.next(arglist__10050));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10050)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10050)));
return G__10049__delegate(x, y, z, args);
});
G__10049.cljs$lang$arity$variadic = G__10049__delegate;
return G__10049;
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
var G__10048 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10048__delegate.call(this, p1, p2, p3, ps);
};
G__10048.cljs$lang$maxFixedArity = 3;
G__10048.cljs$lang$applyTo = (function (arglist__10051){
var p1 = cljs.core.first(arglist__10051);
var p2 = cljs.core.first(cljs.core.next(arglist__10051));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10051)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10051)));
return G__10048__delegate(p1, p2, p3, ps);
});
G__10048.cljs$lang$arity$variadic = G__10048__delegate;
return G__10048;
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
var or__3824__auto____10132 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10132))
{return or__3824__auto____10132;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____10133 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10133))
{return or__3824__auto____10133;
} else
{var or__3824__auto____10134 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____10134))
{return or__3824__auto____10134;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10203__delegate = function (x,y,z,args){
var or__3824__auto____10135 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10135))
{return or__3824__auto____10135;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10203 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10203__delegate.call(this, x, y, z, args);
};
G__10203.cljs$lang$maxFixedArity = 3;
G__10203.cljs$lang$applyTo = (function (arglist__10204){
var x = cljs.core.first(arglist__10204);
var y = cljs.core.first(cljs.core.next(arglist__10204));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10204)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10204)));
return G__10203__delegate(x, y, z, args);
});
G__10203.cljs$lang$arity$variadic = G__10203__delegate;
return G__10203;
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
var or__3824__auto____10147 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10147))
{return or__3824__auto____10147;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____10148 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10148))
{return or__3824__auto____10148;
} else
{var or__3824__auto____10149 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10149))
{return or__3824__auto____10149;
} else
{var or__3824__auto____10150 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10150))
{return or__3824__auto____10150;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____10151 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10151))
{return or__3824__auto____10151;
} else
{var or__3824__auto____10152 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10152))
{return or__3824__auto____10152;
} else
{var or__3824__auto____10153 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10153))
{return or__3824__auto____10153;
} else
{var or__3824__auto____10154 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10154))
{return or__3824__auto____10154;
} else
{var or__3824__auto____10155 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10155))
{return or__3824__auto____10155;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10205__delegate = function (x,y,z,args){
var or__3824__auto____10156 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10156))
{return or__3824__auto____10156;
} else
{return cljs.core.some.call(null,(function (p1__9886_SHARP_){
var or__3824__auto____10157 = p1.call(null,p1__9886_SHARP_);
if(cljs.core.truth_(or__3824__auto____10157))
{return or__3824__auto____10157;
} else
{return p2.call(null,p1__9886_SHARP_);
}
}),args);
}
};
var G__10205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10205__delegate.call(this, x, y, z, args);
};
G__10205.cljs$lang$maxFixedArity = 3;
G__10205.cljs$lang$applyTo = (function (arglist__10206){
var x = cljs.core.first(arglist__10206);
var y = cljs.core.first(cljs.core.next(arglist__10206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10206)));
return G__10205__delegate(x, y, z, args);
});
G__10205.cljs$lang$arity$variadic = G__10205__delegate;
return G__10205;
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
var or__3824__auto____10176 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10176))
{return or__3824__auto____10176;
} else
{var or__3824__auto____10177 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10177))
{return or__3824__auto____10177;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____10178 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10178))
{return or__3824__auto____10178;
} else
{var or__3824__auto____10179 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10179))
{return or__3824__auto____10179;
} else
{var or__3824__auto____10180 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10180))
{return or__3824__auto____10180;
} else
{var or__3824__auto____10181 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10181))
{return or__3824__auto____10181;
} else
{var or__3824__auto____10182 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10182))
{return or__3824__auto____10182;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____10183 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10183))
{return or__3824__auto____10183;
} else
{var or__3824__auto____10184 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10184))
{return or__3824__auto____10184;
} else
{var or__3824__auto____10185 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10185))
{return or__3824__auto____10185;
} else
{var or__3824__auto____10186 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10186))
{return or__3824__auto____10186;
} else
{var or__3824__auto____10187 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10187))
{return or__3824__auto____10187;
} else
{var or__3824__auto____10188 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____10188))
{return or__3824__auto____10188;
} else
{var or__3824__auto____10189 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10189))
{return or__3824__auto____10189;
} else
{var or__3824__auto____10190 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____10190))
{return or__3824__auto____10190;
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
var G__10207__delegate = function (x,y,z,args){
var or__3824__auto____10191 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10191))
{return or__3824__auto____10191;
} else
{return cljs.core.some.call(null,(function (p1__9887_SHARP_){
var or__3824__auto____10192 = p1.call(null,p1__9887_SHARP_);
if(cljs.core.truth_(or__3824__auto____10192))
{return or__3824__auto____10192;
} else
{var or__3824__auto____10193 = p2.call(null,p1__9887_SHARP_);
if(cljs.core.truth_(or__3824__auto____10193))
{return or__3824__auto____10193;
} else
{return p3.call(null,p1__9887_SHARP_);
}
}
}),args);
}
};
var G__10207 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10207__delegate.call(this, x, y, z, args);
};
G__10207.cljs$lang$maxFixedArity = 3;
G__10207.cljs$lang$applyTo = (function (arglist__10208){
var x = cljs.core.first(arglist__10208);
var y = cljs.core.first(cljs.core.next(arglist__10208));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10208)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10208)));
return G__10207__delegate(x, y, z, args);
});
G__10207.cljs$lang$arity$variadic = G__10207__delegate;
return G__10207;
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
var G__10209__delegate = function (p1,p2,p3,ps){
var ps__10194 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9888_SHARP_){
return p1__9888_SHARP_.call(null,x);
}),ps__10194);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9889_SHARP_){
var or__3824__auto____10199 = p1__9889_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10199))
{return or__3824__auto____10199;
} else
{return p1__9889_SHARP_.call(null,y);
}
}),ps__10194);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9890_SHARP_){
var or__3824__auto____10200 = p1__9890_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10200))
{return or__3824__auto____10200;
} else
{var or__3824__auto____10201 = p1__9890_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____10201))
{return or__3824__auto____10201;
} else
{return p1__9890_SHARP_.call(null,z);
}
}
}),ps__10194);
});
var spn__4 = (function() { 
var G__10210__delegate = function (x,y,z,args){
var or__3824__auto____10202 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10202))
{return or__3824__auto____10202;
} else
{return cljs.core.some.call(null,(function (p1__9891_SHARP_){
return cljs.core.some.call(null,p1__9891_SHARP_,args);
}),ps__10194);
}
};
var G__10210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10210__delegate.call(this, x, y, z, args);
};
G__10210.cljs$lang$maxFixedArity = 3;
G__10210.cljs$lang$applyTo = (function (arglist__10211){
var x = cljs.core.first(arglist__10211);
var y = cljs.core.first(cljs.core.next(arglist__10211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10211)));
return G__10210__delegate(x, y, z, args);
});
G__10210.cljs$lang$arity$variadic = G__10210__delegate;
return G__10210;
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
var G__10209 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10209__delegate.call(this, p1, p2, p3, ps);
};
G__10209.cljs$lang$maxFixedArity = 3;
G__10209.cljs$lang$applyTo = (function (arglist__10212){
var p1 = cljs.core.first(arglist__10212);
var p2 = cljs.core.first(cljs.core.next(arglist__10212));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10212)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10212)));
return G__10209__delegate(p1, p2, p3, ps);
});
G__10209.cljs$lang$arity$variadic = G__10209__delegate;
return G__10209;
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
var temp__3974__auto____10231 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10231)
{var s__10232 = temp__3974__auto____10231;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10232))
{var c__10233 = cljs.core.chunk_first.call(null,s__10232);
var size__10234 = cljs.core.count.call(null,c__10233);
var b__10235 = cljs.core.chunk_buffer.call(null,size__10234);
var n__2577__auto____10236 = size__10234;
var i__10237 = 0;
while(true){
if((i__10237 < n__2577__auto____10236))
{cljs.core.chunk_append.call(null,b__10235,f.call(null,cljs.core._nth.call(null,c__10233,i__10237)));
{
var G__10249 = (i__10237 + 1);
i__10237 = G__10249;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10235),map.call(null,f,cljs.core.chunk_rest.call(null,s__10232)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10232)),map.call(null,f,cljs.core.rest.call(null,s__10232)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10238 = cljs.core.seq.call(null,c1);
var s2__10239 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10240 = s1__10238;
if(and__3822__auto____10240)
{return s2__10239;
} else
{return and__3822__auto____10240;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10238),cljs.core.first.call(null,s2__10239)),map.call(null,f,cljs.core.rest.call(null,s1__10238),cljs.core.rest.call(null,s2__10239)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10241 = cljs.core.seq.call(null,c1);
var s2__10242 = cljs.core.seq.call(null,c2);
var s3__10243 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____10244 = s1__10241;
if(and__3822__auto____10244)
{var and__3822__auto____10245 = s2__10242;
if(and__3822__auto____10245)
{return s3__10243;
} else
{return and__3822__auto____10245;
}
} else
{return and__3822__auto____10244;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10241),cljs.core.first.call(null,s2__10242),cljs.core.first.call(null,s3__10243)),map.call(null,f,cljs.core.rest.call(null,s1__10241),cljs.core.rest.call(null,s2__10242),cljs.core.rest.call(null,s3__10243)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10250__delegate = function (f,c1,c2,c3,colls){
var step__10248 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10247 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10247))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10247),step.call(null,map.call(null,cljs.core.rest,ss__10247)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10052_SHARP_){
return cljs.core.apply.call(null,f,p1__10052_SHARP_);
}),step__10248.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10250 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10250__delegate.call(this, f, c1, c2, c3, colls);
};
G__10250.cljs$lang$maxFixedArity = 4;
G__10250.cljs$lang$applyTo = (function (arglist__10251){
var f = cljs.core.first(arglist__10251);
var c1 = cljs.core.first(cljs.core.next(arglist__10251));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10251)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10251))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10251))));
return G__10250__delegate(f, c1, c2, c3, colls);
});
G__10250.cljs$lang$arity$variadic = G__10250__delegate;
return G__10250;
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
{var temp__3974__auto____10254 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10254)
{var s__10255 = temp__3974__auto____10254;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10255),take.call(null,(n - 1),cljs.core.rest.call(null,s__10255)));
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
var step__10261 = (function (n,coll){
while(true){
var s__10259 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10260 = (n > 0);
if(and__3822__auto____10260)
{return s__10259;
} else
{return and__3822__auto____10260;
}
})()))
{{
var G__10262 = (n - 1);
var G__10263 = cljs.core.rest.call(null,s__10259);
n = G__10262;
coll = G__10263;
continue;
}
} else
{return s__10259;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10261.call(null,n,coll);
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
var s__10266 = cljs.core.seq.call(null,coll);
var lead__10267 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10267)
{{
var G__10268 = cljs.core.next.call(null,s__10266);
var G__10269 = cljs.core.next.call(null,lead__10267);
s__10266 = G__10268;
lead__10267 = G__10269;
continue;
}
} else
{return s__10266;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10275 = (function (pred,coll){
while(true){
var s__10273 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10274 = s__10273;
if(and__3822__auto____10274)
{return pred.call(null,cljs.core.first.call(null,s__10273));
} else
{return and__3822__auto____10274;
}
})()))
{{
var G__10276 = pred;
var G__10277 = cljs.core.rest.call(null,s__10273);
pred = G__10276;
coll = G__10277;
continue;
}
} else
{return s__10273;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10275.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10280 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10280)
{var s__10281 = temp__3974__auto____10280;
return cljs.core.concat.call(null,s__10281,cycle.call(null,s__10281));
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
var s1__10286 = cljs.core.seq.call(null,c1);
var s2__10287 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10288 = s1__10286;
if(and__3822__auto____10288)
{return s2__10287;
} else
{return and__3822__auto____10288;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10286),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10287),interleave.call(null,cljs.core.rest.call(null,s1__10286),cljs.core.rest.call(null,s2__10287))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10290__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10289 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10289))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10289),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10289)));
} else
{return null;
}
}),null));
};
var G__10290 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10290__delegate.call(this, c1, c2, colls);
};
G__10290.cljs$lang$maxFixedArity = 2;
G__10290.cljs$lang$applyTo = (function (arglist__10291){
var c1 = cljs.core.first(arglist__10291);
var c2 = cljs.core.first(cljs.core.next(arglist__10291));
var colls = cljs.core.rest(cljs.core.next(arglist__10291));
return G__10290__delegate(c1, c2, colls);
});
G__10290.cljs$lang$arity$variadic = G__10290__delegate;
return G__10290;
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
var cat__10301 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10299 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10299)
{var coll__10300 = temp__3971__auto____10299;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10300),cat.call(null,cljs.core.rest.call(null,coll__10300),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10301.call(null,null,colls);
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
var G__10302__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10302 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10302__delegate.call(this, f, coll, colls);
};
G__10302.cljs$lang$maxFixedArity = 2;
G__10302.cljs$lang$applyTo = (function (arglist__10303){
var f = cljs.core.first(arglist__10303);
var coll = cljs.core.first(cljs.core.next(arglist__10303));
var colls = cljs.core.rest(cljs.core.next(arglist__10303));
return G__10302__delegate(f, coll, colls);
});
G__10302.cljs$lang$arity$variadic = G__10302__delegate;
return G__10302;
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
var temp__3974__auto____10313 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10313)
{var s__10314 = temp__3974__auto____10313;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10314))
{var c__10315 = cljs.core.chunk_first.call(null,s__10314);
var size__10316 = cljs.core.count.call(null,c__10315);
var b__10317 = cljs.core.chunk_buffer.call(null,size__10316);
var n__2577__auto____10318 = size__10316;
var i__10319 = 0;
while(true){
if((i__10319 < n__2577__auto____10318))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10315,i__10319))))
{cljs.core.chunk_append.call(null,b__10317,cljs.core._nth.call(null,c__10315,i__10319));
} else
{}
{
var G__10322 = (i__10319 + 1);
i__10319 = G__10322;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10317),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10314)));
} else
{var f__10320 = cljs.core.first.call(null,s__10314);
var r__10321 = cljs.core.rest.call(null,s__10314);
if(cljs.core.truth_(pred.call(null,f__10320)))
{return cljs.core.cons.call(null,f__10320,filter.call(null,pred,r__10321));
} else
{return filter.call(null,pred,r__10321);
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
var walk__10325 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10325.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10323_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10323_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10329__10330 = to;
if(G__10329__10330)
{if((function (){var or__3824__auto____10331 = (G__10329__10330.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____10331)
{return or__3824__auto____10331;
} else
{return G__10329__10330.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10329__10330.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10329__10330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10329__10330);
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
var G__10332__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10332 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10332__delegate.call(this, f, c1, c2, c3, colls);
};
G__10332.cljs$lang$maxFixedArity = 4;
G__10332.cljs$lang$applyTo = (function (arglist__10333){
var f = cljs.core.first(arglist__10333);
var c1 = cljs.core.first(cljs.core.next(arglist__10333));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10333)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10333))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10333))));
return G__10332__delegate(f, c1, c2, c3, colls);
});
G__10332.cljs$lang$arity$variadic = G__10332__delegate;
return G__10332;
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
var temp__3974__auto____10340 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10340)
{var s__10341 = temp__3974__auto____10340;
var p__10342 = cljs.core.take.call(null,n,s__10341);
if((n === cljs.core.count.call(null,p__10342)))
{return cljs.core.cons.call(null,p__10342,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10341)));
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
var temp__3974__auto____10343 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10343)
{var s__10344 = temp__3974__auto____10343;
var p__10345 = cljs.core.take.call(null,n,s__10344);
if((n === cljs.core.count.call(null,p__10345)))
{return cljs.core.cons.call(null,p__10345,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10344)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10345,pad)));
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
var sentinel__10350 = cljs.core.lookup_sentinel;
var m__10351 = m;
var ks__10352 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10352)
{var m__10353 = cljs.core._lookup.call(null,m__10351,cljs.core.first.call(null,ks__10352),sentinel__10350);
if((sentinel__10350 === m__10353))
{return not_found;
} else
{{
var G__10354 = sentinel__10350;
var G__10355 = m__10353;
var G__10356 = cljs.core.next.call(null,ks__10352);
sentinel__10350 = G__10354;
m__10351 = G__10355;
ks__10352 = G__10356;
continue;
}
}
} else
{return m__10351;
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
cljs.core.assoc_in = (function assoc_in(m,p__10357,v){
var vec__10362__10363 = p__10357;
var k__10364 = cljs.core.nth.call(null,vec__10362__10363,0,null);
var ks__10365 = cljs.core.nthnext.call(null,vec__10362__10363,1);
if(cljs.core.truth_(ks__10365))
{return cljs.core.assoc.call(null,m,k__10364,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10364,null),ks__10365,v));
} else
{return cljs.core.assoc.call(null,m,k__10364,v);
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
var update_in__delegate = function (m,p__10366,f,args){
var vec__10371__10372 = p__10366;
var k__10373 = cljs.core.nth.call(null,vec__10371__10372,0,null);
var ks__10374 = cljs.core.nthnext.call(null,vec__10371__10372,1);
if(cljs.core.truth_(ks__10374))
{return cljs.core.assoc.call(null,m,k__10373,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10373,null),ks__10374,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10373,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10373,null),args));
}
};
var update_in = function (m,p__10366,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10366, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10375){
var m = cljs.core.first(arglist__10375);
var p__10366 = cljs.core.first(cljs.core.next(arglist__10375));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10375)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10375)));
return update_in__delegate(m, p__10366, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10378 = this;
var h__2242__auto____10379 = this__10378.__hash;
if(!((h__2242__auto____10379 == null)))
{return h__2242__auto____10379;
} else
{var h__2242__auto____10380 = cljs.core.hash_coll.call(null,coll);
this__10378.__hash = h__2242__auto____10380;
return h__2242__auto____10380;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10381 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10382 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10383 = this;
var new_array__10384 = this__10383.array.slice();
(new_array__10384[k] = v);
return (new cljs.core.Vector(this__10383.meta,new_array__10384,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10415 = null;
var G__10415__2 = (function (this_sym10385,k){
var this__10387 = this;
var this_sym10385__10388 = this;
var coll__10389 = this_sym10385__10388;
return coll__10389.cljs$core$ILookup$_lookup$arity$2(coll__10389,k);
});
var G__10415__3 = (function (this_sym10386,k,not_found){
var this__10387 = this;
var this_sym10386__10390 = this;
var coll__10391 = this_sym10386__10390;
return coll__10391.cljs$core$ILookup$_lookup$arity$3(coll__10391,k,not_found);
});
G__10415 = function(this_sym10386,k,not_found){
switch(arguments.length){
case 2:
return G__10415__2.call(this,this_sym10386,k);
case 3:
return G__10415__3.call(this,this_sym10386,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10415;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10376,args10377){
var this__10392 = this;
return this_sym10376.call.apply(this_sym10376,[this_sym10376].concat(args10377.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10393 = this;
var new_array__10394 = this__10393.array.slice();
new_array__10394.push(o);
return (new cljs.core.Vector(this__10393.meta,new_array__10394,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10395 = this;
var this__10396 = this;
return cljs.core.pr_str.call(null,this__10396);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10397 = this;
return cljs.core.ci_reduce.call(null,this__10397.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10398 = this;
return cljs.core.ci_reduce.call(null,this__10398.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10399 = this;
if((this__10399.array.length > 0))
{var vector_seq__10400 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10399.array.length))
{return cljs.core.cons.call(null,(this__10399.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10400.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10401 = this;
return this__10401.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10402 = this;
var count__10403 = this__10402.array.length;
if((count__10403 > 0))
{return (this__10402.array[(count__10403 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10404 = this;
if((this__10404.array.length > 0))
{var new_array__10405 = this__10404.array.slice();
new_array__10405.pop();
return (new cljs.core.Vector(this__10404.meta,new_array__10405,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10406 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10407 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10408 = this;
return (new cljs.core.Vector(meta,this__10408.array,this__10408.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10409 = this;
return this__10409.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10410 = this;
if((function (){var and__3822__auto____10411 = (0 <= n);
if(and__3822__auto____10411)
{return (n < this__10410.array.length);
} else
{return and__3822__auto____10411;
}
})())
{return (this__10410.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10412 = this;
if((function (){var and__3822__auto____10413 = (0 <= n);
if(and__3822__auto____10413)
{return (n < this__10412.array.length);
} else
{return and__3822__auto____10413;
}
})())
{return (this__10412.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10414 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10414.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2360__auto__){
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
var cnt__10417 = pv.cnt;
if((cnt__10417 < 32))
{return 0;
} else
{return (((cnt__10417 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10423 = level;
var ret__10424 = node;
while(true){
if((ll__10423 === 0))
{return ret__10424;
} else
{var embed__10425 = ret__10424;
var r__10426 = cljs.core.pv_fresh_node.call(null,edit);
var ___10427 = cljs.core.pv_aset.call(null,r__10426,0,embed__10425);
{
var G__10428 = (ll__10423 - 5);
var G__10429 = r__10426;
ll__10423 = G__10428;
ret__10424 = G__10429;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10435 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10436 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10435,subidx__10436,tailnode);
return ret__10435;
} else
{var child__10437 = cljs.core.pv_aget.call(null,parent,subidx__10436);
if(!((child__10437 == null)))
{var node_to_insert__10438 = push_tail.call(null,pv,(level - 5),child__10437,tailnode);
cljs.core.pv_aset.call(null,ret__10435,subidx__10436,node_to_insert__10438);
return ret__10435;
} else
{var node_to_insert__10439 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10435,subidx__10436,node_to_insert__10439);
return ret__10435;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10443 = (0 <= i);
if(and__3822__auto____10443)
{return (i < pv.cnt);
} else
{return and__3822__auto____10443;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10444 = pv.root;
var level__10445 = pv.shift;
while(true){
if((level__10445 > 0))
{{
var G__10446 = cljs.core.pv_aget.call(null,node__10444,((i >>> level__10445) & 31));
var G__10447 = (level__10445 - 5);
node__10444 = G__10446;
level__10445 = G__10447;
continue;
}
} else
{return node__10444.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10450 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10450,(i & 31),val);
return ret__10450;
} else
{var subidx__10451 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10450,subidx__10451,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10451),i,val));
return ret__10450;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10457 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10458 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10457));
if((function (){var and__3822__auto____10459 = (new_child__10458 == null);
if(and__3822__auto____10459)
{return (subidx__10457 === 0);
} else
{return and__3822__auto____10459;
}
})())
{return null;
} else
{var ret__10460 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10460,subidx__10457,new_child__10458);
return ret__10460;
}
} else
{if((subidx__10457 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10461 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10461,subidx__10457,null);
return ret__10461;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10464 = this;
return (new cljs.core.TransientVector(this__10464.cnt,this__10464.shift,cljs.core.tv_editable_root.call(null,this__10464.root),cljs.core.tv_editable_tail.call(null,this__10464.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10465 = this;
var h__2242__auto____10466 = this__10465.__hash;
if(!((h__2242__auto____10466 == null)))
{return h__2242__auto____10466;
} else
{var h__2242__auto____10467 = cljs.core.hash_coll.call(null,coll);
this__10465.__hash = h__2242__auto____10467;
return h__2242__auto____10467;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10468 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10469 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10470 = this;
if((function (){var and__3822__auto____10471 = (0 <= k);
if(and__3822__auto____10471)
{return (k < this__10470.cnt);
} else
{return and__3822__auto____10471;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10472 = this__10470.tail.slice();
(new_tail__10472[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10470.meta,this__10470.cnt,this__10470.shift,this__10470.root,new_tail__10472,null));
} else
{return (new cljs.core.PersistentVector(this__10470.meta,this__10470.cnt,this__10470.shift,cljs.core.do_assoc.call(null,coll,this__10470.shift,this__10470.root,k,v),this__10470.tail,null));
}
} else
{if((k === this__10470.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10470.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10520 = null;
var G__10520__2 = (function (this_sym10473,k){
var this__10475 = this;
var this_sym10473__10476 = this;
var coll__10477 = this_sym10473__10476;
return coll__10477.cljs$core$ILookup$_lookup$arity$2(coll__10477,k);
});
var G__10520__3 = (function (this_sym10474,k,not_found){
var this__10475 = this;
var this_sym10474__10478 = this;
var coll__10479 = this_sym10474__10478;
return coll__10479.cljs$core$ILookup$_lookup$arity$3(coll__10479,k,not_found);
});
G__10520 = function(this_sym10474,k,not_found){
switch(arguments.length){
case 2:
return G__10520__2.call(this,this_sym10474,k);
case 3:
return G__10520__3.call(this,this_sym10474,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10520;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10462,args10463){
var this__10480 = this;
return this_sym10462.call.apply(this_sym10462,[this_sym10462].concat(args10463.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10481 = this;
var step_init__10482 = [0,init];
var i__10483 = 0;
while(true){
if((i__10483 < this__10481.cnt))
{var arr__10484 = cljs.core.array_for.call(null,v,i__10483);
var len__10485 = arr__10484.length;
var init__10489 = (function (){var j__10486 = 0;
var init__10487 = (step_init__10482[1]);
while(true){
if((j__10486 < len__10485))
{var init__10488 = f.call(null,init__10487,(j__10486 + i__10483),(arr__10484[j__10486]));
if(cljs.core.reduced_QMARK_.call(null,init__10488))
{return init__10488;
} else
{{
var G__10521 = (j__10486 + 1);
var G__10522 = init__10488;
j__10486 = G__10521;
init__10487 = G__10522;
continue;
}
}
} else
{(step_init__10482[0] = len__10485);
(step_init__10482[1] = init__10487);
return init__10487;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10489))
{return cljs.core.deref.call(null,init__10489);
} else
{{
var G__10523 = (i__10483 + (step_init__10482[0]));
i__10483 = G__10523;
continue;
}
}
} else
{return (step_init__10482[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10490 = this;
if(((this__10490.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10491 = this__10490.tail.slice();
new_tail__10491.push(o);
return (new cljs.core.PersistentVector(this__10490.meta,(this__10490.cnt + 1),this__10490.shift,this__10490.root,new_tail__10491,null));
} else
{var root_overflow_QMARK___10492 = ((this__10490.cnt >>> 5) > (1 << this__10490.shift));
var new_shift__10493 = ((root_overflow_QMARK___10492)?(this__10490.shift + 5):this__10490.shift);
var new_root__10495 = ((root_overflow_QMARK___10492)?(function (){var n_r__10494 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10494,0,this__10490.root);
cljs.core.pv_aset.call(null,n_r__10494,1,cljs.core.new_path.call(null,null,this__10490.shift,(new cljs.core.VectorNode(null,this__10490.tail))));
return n_r__10494;
})():cljs.core.push_tail.call(null,coll,this__10490.shift,this__10490.root,(new cljs.core.VectorNode(null,this__10490.tail))));
return (new cljs.core.PersistentVector(this__10490.meta,(this__10490.cnt + 1),new_shift__10493,new_root__10495,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10496 = this;
if((this__10496.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10496.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10497 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10498 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10499 = this;
var this__10500 = this;
return cljs.core.pr_str.call(null,this__10500);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10501 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10502 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10503 = this;
if((this__10503.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10504 = this;
return this__10504.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10505 = this;
if((this__10505.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10505.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10506 = this;
if((this__10506.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10506.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10506.meta);
} else
{if((1 < (this__10506.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10506.meta,(this__10506.cnt - 1),this__10506.shift,this__10506.root,this__10506.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10507 = cljs.core.array_for.call(null,coll,(this__10506.cnt - 2));
var nr__10508 = cljs.core.pop_tail.call(null,coll,this__10506.shift,this__10506.root);
var new_root__10509 = (((nr__10508 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10508);
var cnt_1__10510 = (this__10506.cnt - 1);
if((function (){var and__3822__auto____10511 = (5 < this__10506.shift);
if(and__3822__auto____10511)
{return (cljs.core.pv_aget.call(null,new_root__10509,1) == null);
} else
{return and__3822__auto____10511;
}
})())
{return (new cljs.core.PersistentVector(this__10506.meta,cnt_1__10510,(this__10506.shift - 5),cljs.core.pv_aget.call(null,new_root__10509,0),new_tail__10507,null));
} else
{return (new cljs.core.PersistentVector(this__10506.meta,cnt_1__10510,this__10506.shift,new_root__10509,new_tail__10507,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10512 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10513 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10514 = this;
return (new cljs.core.PersistentVector(meta,this__10514.cnt,this__10514.shift,this__10514.root,this__10514.tail,this__10514.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10515 = this;
return this__10515.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10516 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10517 = this;
if((function (){var and__3822__auto____10518 = (0 <= n);
if(and__3822__auto____10518)
{return (n < this__10517.cnt);
} else
{return and__3822__auto____10518;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10519 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10519.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10524 = xs.length;
var xs__10525 = (((no_clone === true))?xs:xs.slice());
if((l__10524 < 32))
{return (new cljs.core.PersistentVector(null,l__10524,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10525,null));
} else
{var node__10526 = xs__10525.slice(0,32);
var v__10527 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10526,null));
var i__10528 = 32;
var out__10529 = cljs.core._as_transient.call(null,v__10527);
while(true){
if((i__10528 < l__10524))
{{
var G__10530 = (i__10528 + 1);
var G__10531 = cljs.core.conj_BANG_.call(null,out__10529,(xs__10525[i__10528]));
i__10528 = G__10530;
out__10529 = G__10531;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10529);
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
vector.cljs$lang$applyTo = (function (arglist__10532){
var args = cljs.core.seq(arglist__10532);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10533 = this;
if(((this__10533.off + 1) < this__10533.node.length))
{var s__10534 = cljs.core.chunked_seq.call(null,this__10533.vec,this__10533.node,this__10533.i,(this__10533.off + 1));
if((s__10534 == null))
{return null;
} else
{return s__10534;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10535 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10536 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10537 = this;
return (this__10537.node[this__10537.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10538 = this;
if(((this__10538.off + 1) < this__10538.node.length))
{var s__10539 = cljs.core.chunked_seq.call(null,this__10538.vec,this__10538.node,this__10538.i,(this__10538.off + 1));
if((s__10539 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10539;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10540 = this;
var l__10541 = this__10540.node.length;
var s__10542 = ((((this__10540.i + l__10541) < cljs.core._count.call(null,this__10540.vec)))?cljs.core.chunked_seq.call(null,this__10540.vec,(this__10540.i + l__10541),0):null);
if((s__10542 == null))
{return null;
} else
{return s__10542;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10544 = this;
return cljs.core.chunked_seq.call(null,this__10544.vec,this__10544.node,this__10544.i,this__10544.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10545 = this;
return this__10545.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10546 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10546.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10547 = this;
return cljs.core.array_chunk.call(null,this__10547.node,this__10547.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10548 = this;
var l__10549 = this__10548.node.length;
var s__10550 = ((((this__10548.i + l__10549) < cljs.core._count.call(null,this__10548.vec)))?cljs.core.chunked_seq.call(null,this__10548.vec,(this__10548.i + l__10549),0):null);
if((s__10550 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10550;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10553 = this;
var h__2242__auto____10554 = this__10553.__hash;
if(!((h__2242__auto____10554 == null)))
{return h__2242__auto____10554;
} else
{var h__2242__auto____10555 = cljs.core.hash_coll.call(null,coll);
this__10553.__hash = h__2242__auto____10555;
return h__2242__auto____10555;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10556 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10557 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10558 = this;
var v_pos__10559 = (this__10558.start + key);
return (new cljs.core.Subvec(this__10558.meta,cljs.core._assoc.call(null,this__10558.v,v_pos__10559,val),this__10558.start,((this__10558.end > (v_pos__10559 + 1)) ? this__10558.end : (v_pos__10559 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10585 = null;
var G__10585__2 = (function (this_sym10560,k){
var this__10562 = this;
var this_sym10560__10563 = this;
var coll__10564 = this_sym10560__10563;
return coll__10564.cljs$core$ILookup$_lookup$arity$2(coll__10564,k);
});
var G__10585__3 = (function (this_sym10561,k,not_found){
var this__10562 = this;
var this_sym10561__10565 = this;
var coll__10566 = this_sym10561__10565;
return coll__10566.cljs$core$ILookup$_lookup$arity$3(coll__10566,k,not_found);
});
G__10585 = function(this_sym10561,k,not_found){
switch(arguments.length){
case 2:
return G__10585__2.call(this,this_sym10561,k);
case 3:
return G__10585__3.call(this,this_sym10561,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10585;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10551,args10552){
var this__10567 = this;
return this_sym10551.call.apply(this_sym10551,[this_sym10551].concat(args10552.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10568 = this;
return (new cljs.core.Subvec(this__10568.meta,cljs.core._assoc_n.call(null,this__10568.v,this__10568.end,o),this__10568.start,(this__10568.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10569 = this;
var this__10570 = this;
return cljs.core.pr_str.call(null,this__10570);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10571 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10572 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10573 = this;
var subvec_seq__10574 = (function subvec_seq(i){
if((i === this__10573.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10573.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10574.call(null,this__10573.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10575 = this;
return (this__10575.end - this__10575.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10576 = this;
return cljs.core._nth.call(null,this__10576.v,(this__10576.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10577 = this;
if((this__10577.start === this__10577.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10577.meta,this__10577.v,this__10577.start,(this__10577.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10578 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10579 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10580 = this;
return (new cljs.core.Subvec(meta,this__10580.v,this__10580.start,this__10580.end,this__10580.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10581 = this;
return this__10581.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10582 = this;
return cljs.core._nth.call(null,this__10582.v,(this__10582.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10583 = this;
return cljs.core._nth.call(null,this__10583.v,(this__10583.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10584 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10584.meta);
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
var ret__10587 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10587,0,tl.length);
return ret__10587;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10591 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10592 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10591,subidx__10592,(((level === 5))?tail_node:(function (){var child__10593 = cljs.core.pv_aget.call(null,ret__10591,subidx__10592);
if(!((child__10593 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10593,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10591;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10598 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10599 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10600 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10598,subidx__10599));
if((function (){var and__3822__auto____10601 = (new_child__10600 == null);
if(and__3822__auto____10601)
{return (subidx__10599 === 0);
} else
{return and__3822__auto____10601;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10598,subidx__10599,new_child__10600);
return node__10598;
}
} else
{if((subidx__10599 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10598,subidx__10599,null);
return node__10598;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10606 = (0 <= i);
if(and__3822__auto____10606)
{return (i < tv.cnt);
} else
{return and__3822__auto____10606;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10607 = tv.root;
var node__10608 = root__10607;
var level__10609 = tv.shift;
while(true){
if((level__10609 > 0))
{{
var G__10610 = cljs.core.tv_ensure_editable.call(null,root__10607.edit,cljs.core.pv_aget.call(null,node__10608,((i >>> level__10609) & 31)));
var G__10611 = (level__10609 - 5);
node__10608 = G__10610;
level__10609 = G__10611;
continue;
}
} else
{return node__10608.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__10651 = null;
var G__10651__2 = (function (this_sym10614,k){
var this__10616 = this;
var this_sym10614__10617 = this;
var coll__10618 = this_sym10614__10617;
return coll__10618.cljs$core$ILookup$_lookup$arity$2(coll__10618,k);
});
var G__10651__3 = (function (this_sym10615,k,not_found){
var this__10616 = this;
var this_sym10615__10619 = this;
var coll__10620 = this_sym10615__10619;
return coll__10620.cljs$core$ILookup$_lookup$arity$3(coll__10620,k,not_found);
});
G__10651 = function(this_sym10615,k,not_found){
switch(arguments.length){
case 2:
return G__10651__2.call(this,this_sym10615,k);
case 3:
return G__10651__3.call(this,this_sym10615,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10651;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10612,args10613){
var this__10621 = this;
return this_sym10612.call.apply(this_sym10612,[this_sym10612].concat(args10613.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10622 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10623 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10624 = this;
if(this__10624.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10625 = this;
if((function (){var and__3822__auto____10626 = (0 <= n);
if(and__3822__auto____10626)
{return (n < this__10625.cnt);
} else
{return and__3822__auto____10626;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10627 = this;
if(this__10627.root.edit)
{return this__10627.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10628 = this;
if(this__10628.root.edit)
{if((function (){var and__3822__auto____10629 = (0 <= n);
if(and__3822__auto____10629)
{return (n < this__10628.cnt);
} else
{return and__3822__auto____10629;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10628.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10634 = (function go(level,node){
var node__10632 = cljs.core.tv_ensure_editable.call(null,this__10628.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10632,(n & 31),val);
return node__10632;
} else
{var subidx__10633 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10632,subidx__10633,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10632,subidx__10633)));
return node__10632;
}
}).call(null,this__10628.shift,this__10628.root);
this__10628.root = new_root__10634;
return tcoll;
}
} else
{if((n === this__10628.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10628.cnt)].join('')));
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
var this__10635 = this;
if(this__10635.root.edit)
{if((this__10635.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10635.cnt))
{this__10635.cnt = 0;
return tcoll;
} else
{if((((this__10635.cnt - 1) & 31) > 0))
{this__10635.cnt = (this__10635.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10636 = cljs.core.editable_array_for.call(null,tcoll,(this__10635.cnt - 2));
var new_root__10638 = (function (){var nr__10637 = cljs.core.tv_pop_tail.call(null,tcoll,this__10635.shift,this__10635.root);
if(!((nr__10637 == null)))
{return nr__10637;
} else
{return (new cljs.core.VectorNode(this__10635.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10639 = (5 < this__10635.shift);
if(and__3822__auto____10639)
{return (cljs.core.pv_aget.call(null,new_root__10638,1) == null);
} else
{return and__3822__auto____10639;
}
})())
{var new_root__10640 = cljs.core.tv_ensure_editable.call(null,this__10635.root.edit,cljs.core.pv_aget.call(null,new_root__10638,0));
this__10635.root = new_root__10640;
this__10635.shift = (this__10635.shift - 5);
this__10635.cnt = (this__10635.cnt - 1);
this__10635.tail = new_tail__10636;
return tcoll;
} else
{this__10635.root = new_root__10638;
this__10635.cnt = (this__10635.cnt - 1);
this__10635.tail = new_tail__10636;
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
var this__10641 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10642 = this;
if(this__10642.root.edit)
{if(((this__10642.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10642.tail[(this__10642.cnt & 31)] = o);
this__10642.cnt = (this__10642.cnt + 1);
return tcoll;
} else
{var tail_node__10643 = (new cljs.core.VectorNode(this__10642.root.edit,this__10642.tail));
var new_tail__10644 = cljs.core.make_array.call(null,32);
(new_tail__10644[0] = o);
this__10642.tail = new_tail__10644;
if(((this__10642.cnt >>> 5) > (1 << this__10642.shift)))
{var new_root_array__10645 = cljs.core.make_array.call(null,32);
var new_shift__10646 = (this__10642.shift + 5);
(new_root_array__10645[0] = this__10642.root);
(new_root_array__10645[1] = cljs.core.new_path.call(null,this__10642.root.edit,this__10642.shift,tail_node__10643));
this__10642.root = (new cljs.core.VectorNode(this__10642.root.edit,new_root_array__10645));
this__10642.shift = new_shift__10646;
this__10642.cnt = (this__10642.cnt + 1);
return tcoll;
} else
{var new_root__10647 = cljs.core.tv_push_tail.call(null,tcoll,this__10642.shift,this__10642.root,tail_node__10643);
this__10642.root = new_root__10647;
this__10642.cnt = (this__10642.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10648 = this;
if(this__10648.root.edit)
{this__10648.root.edit = null;
var len__10649 = (this__10648.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10650 = cljs.core.make_array.call(null,len__10649);
cljs.core.array_copy.call(null,this__10648.tail,0,trimmed_tail__10650,0,len__10649);
return (new cljs.core.PersistentVector(null,this__10648.cnt,this__10648.shift,this__10648.root,trimmed_tail__10650,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10652 = this;
var h__2242__auto____10653 = this__10652.__hash;
if(!((h__2242__auto____10653 == null)))
{return h__2242__auto____10653;
} else
{var h__2242__auto____10654 = cljs.core.hash_coll.call(null,coll);
this__10652.__hash = h__2242__auto____10654;
return h__2242__auto____10654;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10655 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10656 = this;
var this__10657 = this;
return cljs.core.pr_str.call(null,this__10657);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10658 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10659 = this;
return cljs.core._first.call(null,this__10659.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10660 = this;
var temp__3971__auto____10661 = cljs.core.next.call(null,this__10660.front);
if(temp__3971__auto____10661)
{var f1__10662 = temp__3971__auto____10661;
return (new cljs.core.PersistentQueueSeq(this__10660.meta,f1__10662,this__10660.rear,null));
} else
{if((this__10660.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10660.meta,this__10660.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10663 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10664 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10664.front,this__10664.rear,this__10664.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10665 = this;
return this__10665.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10666 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10666.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10667 = this;
var h__2242__auto____10668 = this__10667.__hash;
if(!((h__2242__auto____10668 == null)))
{return h__2242__auto____10668;
} else
{var h__2242__auto____10669 = cljs.core.hash_coll.call(null,coll);
this__10667.__hash = h__2242__auto____10669;
return h__2242__auto____10669;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10670 = this;
if(cljs.core.truth_(this__10670.front))
{return (new cljs.core.PersistentQueue(this__10670.meta,(this__10670.count + 1),this__10670.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10671 = this__10670.rear;
if(cljs.core.truth_(or__3824__auto____10671))
{return or__3824__auto____10671;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10670.meta,(this__10670.count + 1),cljs.core.conj.call(null,this__10670.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10672 = this;
var this__10673 = this;
return cljs.core.pr_str.call(null,this__10673);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10674 = this;
var rear__10675 = cljs.core.seq.call(null,this__10674.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10676 = this__10674.front;
if(cljs.core.truth_(or__3824__auto____10676))
{return or__3824__auto____10676;
} else
{return rear__10675;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10674.front,cljs.core.seq.call(null,rear__10675),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10677 = this;
return this__10677.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10678 = this;
return cljs.core._first.call(null,this__10678.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10679 = this;
if(cljs.core.truth_(this__10679.front))
{var temp__3971__auto____10680 = cljs.core.next.call(null,this__10679.front);
if(temp__3971__auto____10680)
{var f1__10681 = temp__3971__auto____10680;
return (new cljs.core.PersistentQueue(this__10679.meta,(this__10679.count - 1),f1__10681,this__10679.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10679.meta,(this__10679.count - 1),cljs.core.seq.call(null,this__10679.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10682 = this;
return cljs.core.first.call(null,this__10682.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10683 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10684 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10685 = this;
return (new cljs.core.PersistentQueue(meta,this__10685.count,this__10685.front,this__10685.rear,this__10685.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10686 = this;
return this__10686.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10687 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10688 = this;
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
var len__10691 = array.length;
var i__10692 = 0;
while(true){
if((i__10692 < len__10691))
{if((k === (array[i__10692])))
{return i__10692;
} else
{{
var G__10693 = (i__10692 + incr);
i__10692 = G__10693;
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
var a__10696 = cljs.core.hash.call(null,a);
var b__10697 = cljs.core.hash.call(null,b);
if((a__10696 < b__10697))
{return -1;
} else
{if((a__10696 > b__10697))
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
var ks__10705 = m.keys;
var len__10706 = ks__10705.length;
var so__10707 = m.strobj;
var out__10708 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10709 = 0;
var out__10710 = cljs.core.transient$.call(null,out__10708);
while(true){
if((i__10709 < len__10706))
{var k__10711 = (ks__10705[i__10709]);
{
var G__10712 = (i__10709 + 1);
var G__10713 = cljs.core.assoc_BANG_.call(null,out__10710,k__10711,(so__10707[k__10711]));
i__10709 = G__10712;
out__10710 = G__10713;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10710,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10719 = {};
var l__10720 = ks.length;
var i__10721 = 0;
while(true){
if((i__10721 < l__10720))
{var k__10722 = (ks[i__10721]);
(new_obj__10719[k__10722] = (obj[k__10722]));
{
var G__10723 = (i__10721 + 1);
i__10721 = G__10723;
continue;
}
} else
{}
break;
}
return new_obj__10719;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10726 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10727 = this;
var h__2242__auto____10728 = this__10727.__hash;
if(!((h__2242__auto____10728 == null)))
{return h__2242__auto____10728;
} else
{var h__2242__auto____10729 = cljs.core.hash_imap.call(null,coll);
this__10727.__hash = h__2242__auto____10729;
return h__2242__auto____10729;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10730 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10731 = this;
if((function (){var and__3822__auto____10732 = goog.isString(k);
if(and__3822__auto____10732)
{return !((cljs.core.scan_array.call(null,1,k,this__10731.keys) == null));
} else
{return and__3822__auto____10732;
}
})())
{return (this__10731.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10733 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10734 = (this__10733.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10734)
{return or__3824__auto____10734;
} else
{return (this__10733.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10733.keys) == null)))
{var new_strobj__10735 = cljs.core.obj_clone.call(null,this__10733.strobj,this__10733.keys);
(new_strobj__10735[k] = v);
return (new cljs.core.ObjMap(this__10733.meta,this__10733.keys,new_strobj__10735,(this__10733.update_count + 1),null));
} else
{var new_strobj__10736 = cljs.core.obj_clone.call(null,this__10733.strobj,this__10733.keys);
var new_keys__10737 = this__10733.keys.slice();
(new_strobj__10736[k] = v);
new_keys__10737.push(k);
return (new cljs.core.ObjMap(this__10733.meta,new_keys__10737,new_strobj__10736,(this__10733.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10738 = this;
if((function (){var and__3822__auto____10739 = goog.isString(k);
if(and__3822__auto____10739)
{return !((cljs.core.scan_array.call(null,1,k,this__10738.keys) == null));
} else
{return and__3822__auto____10739;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10761 = null;
var G__10761__2 = (function (this_sym10740,k){
var this__10742 = this;
var this_sym10740__10743 = this;
var coll__10744 = this_sym10740__10743;
return coll__10744.cljs$core$ILookup$_lookup$arity$2(coll__10744,k);
});
var G__10761__3 = (function (this_sym10741,k,not_found){
var this__10742 = this;
var this_sym10741__10745 = this;
var coll__10746 = this_sym10741__10745;
return coll__10746.cljs$core$ILookup$_lookup$arity$3(coll__10746,k,not_found);
});
G__10761 = function(this_sym10741,k,not_found){
switch(arguments.length){
case 2:
return G__10761__2.call(this,this_sym10741,k);
case 3:
return G__10761__3.call(this,this_sym10741,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10761;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10724,args10725){
var this__10747 = this;
return this_sym10724.call.apply(this_sym10724,[this_sym10724].concat(args10725.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10748 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10749 = this;
var this__10750 = this;
return cljs.core.pr_str.call(null,this__10750);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10751 = this;
if((this__10751.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10714_SHARP_){
return cljs.core.vector.call(null,p1__10714_SHARP_,(this__10751.strobj[p1__10714_SHARP_]));
}),this__10751.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10752 = this;
return this__10752.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10753 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10754 = this;
return (new cljs.core.ObjMap(meta,this__10754.keys,this__10754.strobj,this__10754.update_count,this__10754.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10755 = this;
return this__10755.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10756 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10756.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10757 = this;
if((function (){var and__3822__auto____10758 = goog.isString(k);
if(and__3822__auto____10758)
{return !((cljs.core.scan_array.call(null,1,k,this__10757.keys) == null));
} else
{return and__3822__auto____10758;
}
})())
{var new_keys__10759 = this__10757.keys.slice();
var new_strobj__10760 = cljs.core.obj_clone.call(null,this__10757.strobj,this__10757.keys);
new_keys__10759.splice(cljs.core.scan_array.call(null,1,k,new_keys__10759),1);
cljs.core.js_delete.call(null,new_strobj__10760,k);
return (new cljs.core.ObjMap(this__10757.meta,new_keys__10759,new_strobj__10760,(this__10757.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10765 = this;
var h__2242__auto____10766 = this__10765.__hash;
if(!((h__2242__auto____10766 == null)))
{return h__2242__auto____10766;
} else
{var h__2242__auto____10767 = cljs.core.hash_imap.call(null,coll);
this__10765.__hash = h__2242__auto____10767;
return h__2242__auto____10767;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10768 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10769 = this;
var bucket__10770 = (this__10769.hashobj[cljs.core.hash.call(null,k)]);
var i__10771 = (cljs.core.truth_(bucket__10770)?cljs.core.scan_array.call(null,2,k,bucket__10770):null);
if(cljs.core.truth_(i__10771))
{return (bucket__10770[(i__10771 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10772 = this;
var h__10773 = cljs.core.hash.call(null,k);
var bucket__10774 = (this__10772.hashobj[h__10773]);
if(cljs.core.truth_(bucket__10774))
{var new_bucket__10775 = bucket__10774.slice();
var new_hashobj__10776 = goog.object.clone(this__10772.hashobj);
(new_hashobj__10776[h__10773] = new_bucket__10775);
var temp__3971__auto____10777 = cljs.core.scan_array.call(null,2,k,new_bucket__10775);
if(cljs.core.truth_(temp__3971__auto____10777))
{var i__10778 = temp__3971__auto____10777;
(new_bucket__10775[(i__10778 + 1)] = v);
return (new cljs.core.HashMap(this__10772.meta,this__10772.count,new_hashobj__10776,null));
} else
{new_bucket__10775.push(k,v);
return (new cljs.core.HashMap(this__10772.meta,(this__10772.count + 1),new_hashobj__10776,null));
}
} else
{var new_hashobj__10779 = goog.object.clone(this__10772.hashobj);
(new_hashobj__10779[h__10773] = [k,v]);
return (new cljs.core.HashMap(this__10772.meta,(this__10772.count + 1),new_hashobj__10779,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10780 = this;
var bucket__10781 = (this__10780.hashobj[cljs.core.hash.call(null,k)]);
var i__10782 = (cljs.core.truth_(bucket__10781)?cljs.core.scan_array.call(null,2,k,bucket__10781):null);
if(cljs.core.truth_(i__10782))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10807 = null;
var G__10807__2 = (function (this_sym10783,k){
var this__10785 = this;
var this_sym10783__10786 = this;
var coll__10787 = this_sym10783__10786;
return coll__10787.cljs$core$ILookup$_lookup$arity$2(coll__10787,k);
});
var G__10807__3 = (function (this_sym10784,k,not_found){
var this__10785 = this;
var this_sym10784__10788 = this;
var coll__10789 = this_sym10784__10788;
return coll__10789.cljs$core$ILookup$_lookup$arity$3(coll__10789,k,not_found);
});
G__10807 = function(this_sym10784,k,not_found){
switch(arguments.length){
case 2:
return G__10807__2.call(this,this_sym10784,k);
case 3:
return G__10807__3.call(this,this_sym10784,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10807;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10763,args10764){
var this__10790 = this;
return this_sym10763.call.apply(this_sym10763,[this_sym10763].concat(args10764.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10791 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10792 = this;
var this__10793 = this;
return cljs.core.pr_str.call(null,this__10793);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10794 = this;
if((this__10794.count > 0))
{var hashes__10795 = cljs.core.js_keys.call(null,this__10794.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10762_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10794.hashobj[p1__10762_SHARP_])));
}),hashes__10795);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10796 = this;
return this__10796.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10797 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10798 = this;
return (new cljs.core.HashMap(meta,this__10798.count,this__10798.hashobj,this__10798.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10799 = this;
return this__10799.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10800 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10800.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10801 = this;
var h__10802 = cljs.core.hash.call(null,k);
var bucket__10803 = (this__10801.hashobj[h__10802]);
var i__10804 = (cljs.core.truth_(bucket__10803)?cljs.core.scan_array.call(null,2,k,bucket__10803):null);
if(cljs.core.not.call(null,i__10804))
{return coll;
} else
{var new_hashobj__10805 = goog.object.clone(this__10801.hashobj);
if((3 > bucket__10803.length))
{cljs.core.js_delete.call(null,new_hashobj__10805,h__10802);
} else
{var new_bucket__10806 = bucket__10803.slice();
new_bucket__10806.splice(i__10804,2);
(new_hashobj__10805[h__10802] = new_bucket__10806);
}
return (new cljs.core.HashMap(this__10801.meta,(this__10801.count - 1),new_hashobj__10805,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10808 = ks.length;
var i__10809 = 0;
var out__10810 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10809 < len__10808))
{{
var G__10811 = (i__10809 + 1);
var G__10812 = cljs.core.assoc.call(null,out__10810,(ks[i__10809]),(vs[i__10809]));
i__10809 = G__10811;
out__10810 = G__10812;
continue;
}
} else
{return out__10810;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10816 = m.arr;
var len__10817 = arr__10816.length;
var i__10818 = 0;
while(true){
if((len__10817 <= i__10818))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10816[i__10818]),k))
{return i__10818;
} else
{if("\uFDD0'else")
{{
var G__10819 = (i__10818 + 2);
i__10818 = G__10819;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10822 = this;
return (new cljs.core.TransientArrayMap({},this__10822.arr.length,this__10822.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10823 = this;
var h__2242__auto____10824 = this__10823.__hash;
if(!((h__2242__auto____10824 == null)))
{return h__2242__auto____10824;
} else
{var h__2242__auto____10825 = cljs.core.hash_imap.call(null,coll);
this__10823.__hash = h__2242__auto____10825;
return h__2242__auto____10825;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10826 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10827 = this;
var idx__10828 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10828 === -1))
{return not_found;
} else
{return (this__10827.arr[(idx__10828 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10829 = this;
var idx__10830 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10830 === -1))
{if((this__10829.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10829.meta,(this__10829.cnt + 1),(function (){var G__10831__10832 = this__10829.arr.slice();
G__10831__10832.push(k);
G__10831__10832.push(v);
return G__10831__10832;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10829.arr[(idx__10830 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10829.meta,this__10829.cnt,(function (){var G__10833__10834 = this__10829.arr.slice();
(G__10833__10834[(idx__10830 + 1)] = v);
return G__10833__10834;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10835 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10867 = null;
var G__10867__2 = (function (this_sym10836,k){
var this__10838 = this;
var this_sym10836__10839 = this;
var coll__10840 = this_sym10836__10839;
return coll__10840.cljs$core$ILookup$_lookup$arity$2(coll__10840,k);
});
var G__10867__3 = (function (this_sym10837,k,not_found){
var this__10838 = this;
var this_sym10837__10841 = this;
var coll__10842 = this_sym10837__10841;
return coll__10842.cljs$core$ILookup$_lookup$arity$3(coll__10842,k,not_found);
});
G__10867 = function(this_sym10837,k,not_found){
switch(arguments.length){
case 2:
return G__10867__2.call(this,this_sym10837,k);
case 3:
return G__10867__3.call(this,this_sym10837,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10867;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10820,args10821){
var this__10843 = this;
return this_sym10820.call.apply(this_sym10820,[this_sym10820].concat(args10821.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10844 = this;
var len__10845 = this__10844.arr.length;
var i__10846 = 0;
var init__10847 = init;
while(true){
if((i__10846 < len__10845))
{var init__10848 = f.call(null,init__10847,(this__10844.arr[i__10846]),(this__10844.arr[(i__10846 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10848))
{return cljs.core.deref.call(null,init__10848);
} else
{{
var G__10868 = (i__10846 + 2);
var G__10869 = init__10848;
i__10846 = G__10868;
init__10847 = G__10869;
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
var this__10849 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10850 = this;
var this__10851 = this;
return cljs.core.pr_str.call(null,this__10851);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10852 = this;
if((this__10852.cnt > 0))
{var len__10853 = this__10852.arr.length;
var array_map_seq__10854 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10853))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10852.arr[i]),(this__10852.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10854.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10855 = this;
return this__10855.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10856 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10857 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10857.cnt,this__10857.arr,this__10857.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10858 = this;
return this__10858.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10859 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10859.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10860 = this;
var idx__10861 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10861 >= 0))
{var len__10862 = this__10860.arr.length;
var new_len__10863 = (len__10862 - 2);
if((new_len__10863 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10864 = cljs.core.make_array.call(null,new_len__10863);
var s__10865 = 0;
var d__10866 = 0;
while(true){
if((s__10865 >= len__10862))
{return (new cljs.core.PersistentArrayMap(this__10860.meta,(this__10860.cnt - 1),new_arr__10864,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10860.arr[s__10865])))
{{
var G__10870 = (s__10865 + 2);
var G__10871 = d__10866;
s__10865 = G__10870;
d__10866 = G__10871;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10864[d__10866] = (this__10860.arr[s__10865]));
(new_arr__10864[(d__10866 + 1)] = (this__10860.arr[(s__10865 + 1)]));
{
var G__10872 = (s__10865 + 2);
var G__10873 = (d__10866 + 2);
s__10865 = G__10872;
d__10866 = G__10873;
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
var len__10874 = cljs.core.count.call(null,ks);
var i__10875 = 0;
var out__10876 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10875 < len__10874))
{{
var G__10877 = (i__10875 + 1);
var G__10878 = cljs.core.assoc_BANG_.call(null,out__10876,(ks[i__10875]),(vs[i__10875]));
i__10875 = G__10877;
out__10876 = G__10878;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10876);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10879 = this;
if(cljs.core.truth_(this__10879.editable_QMARK_))
{var idx__10880 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10880 >= 0))
{(this__10879.arr[idx__10880] = (this__10879.arr[(this__10879.len - 2)]));
(this__10879.arr[(idx__10880 + 1)] = (this__10879.arr[(this__10879.len - 1)]));
var G__10881__10882 = this__10879.arr;
G__10881__10882.pop();
G__10881__10882.pop();
G__10881__10882;
this__10879.len = (this__10879.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10883 = this;
if(cljs.core.truth_(this__10883.editable_QMARK_))
{var idx__10884 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10884 === -1))
{if(((this__10883.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10883.len = (this__10883.len + 2);
this__10883.arr.push(key);
this__10883.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10883.len,this__10883.arr),key,val);
}
} else
{if((val === (this__10883.arr[(idx__10884 + 1)])))
{return tcoll;
} else
{(this__10883.arr[(idx__10884 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10885 = this;
if(cljs.core.truth_(this__10885.editable_QMARK_))
{if((function (){var G__10886__10887 = o;
if(G__10886__10887)
{if((function (){var or__3824__auto____10888 = (G__10886__10887.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10888)
{return or__3824__auto____10888;
} else
{return G__10886__10887.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10886__10887.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10886__10887);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10886__10887);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10889 = cljs.core.seq.call(null,o);
var tcoll__10890 = tcoll;
while(true){
var temp__3971__auto____10891 = cljs.core.first.call(null,es__10889);
if(cljs.core.truth_(temp__3971__auto____10891))
{var e__10892 = temp__3971__auto____10891;
{
var G__10898 = cljs.core.next.call(null,es__10889);
var G__10899 = tcoll__10890.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10890,cljs.core.key.call(null,e__10892),cljs.core.val.call(null,e__10892));
es__10889 = G__10898;
tcoll__10890 = G__10899;
continue;
}
} else
{return tcoll__10890;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10893 = this;
if(cljs.core.truth_(this__10893.editable_QMARK_))
{this__10893.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10893.len,2),this__10893.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10894 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10895 = this;
if(cljs.core.truth_(this__10895.editable_QMARK_))
{var idx__10896 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10896 === -1))
{return not_found;
} else
{return (this__10895.arr[(idx__10896 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10897 = this;
if(cljs.core.truth_(this__10897.editable_QMARK_))
{return cljs.core.quot.call(null,this__10897.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10902 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10903 = 0;
while(true){
if((i__10903 < len))
{{
var G__10904 = cljs.core.assoc_BANG_.call(null,out__10902,(arr[i__10903]),(arr[(i__10903 + 1)]));
var G__10905 = (i__10903 + 2);
out__10902 = G__10904;
i__10903 = G__10905;
continue;
}
} else
{return out__10902;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2360__auto__){
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
var G__10910__10911 = arr.slice();
(G__10910__10911[i] = a);
return G__10910__10911;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10912__10913 = arr.slice();
(G__10912__10913[i] = a);
(G__10912__10913[j] = b);
return G__10912__10913;
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
var new_arr__10915 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10915,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10915,(2 * i),(new_arr__10915.length - (2 * i)));
return new_arr__10915;
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
var editable__10918 = inode.ensure_editable(edit);
(editable__10918.arr[i] = a);
return editable__10918;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10919 = inode.ensure_editable(edit);
(editable__10919.arr[i] = a);
(editable__10919.arr[j] = b);
return editable__10919;
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
var len__10926 = arr.length;
var i__10927 = 0;
var init__10928 = init;
while(true){
if((i__10927 < len__10926))
{var init__10931 = (function (){var k__10929 = (arr[i__10927]);
if(!((k__10929 == null)))
{return f.call(null,init__10928,k__10929,(arr[(i__10927 + 1)]));
} else
{var node__10930 = (arr[(i__10927 + 1)]);
if(!((node__10930 == null)))
{return node__10930.kv_reduce(f,init__10928);
} else
{return init__10928;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10931))
{return cljs.core.deref.call(null,init__10931);
} else
{{
var G__10932 = (i__10927 + 2);
var G__10933 = init__10931;
i__10927 = G__10932;
init__10928 = G__10933;
continue;
}
}
} else
{return init__10928;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__10934 = this;
var inode__10935 = this;
if((this__10934.bitmap === bit))
{return null;
} else
{var editable__10936 = inode__10935.ensure_editable(e);
var earr__10937 = editable__10936.arr;
var len__10938 = earr__10937.length;
editable__10936.bitmap = (bit ^ editable__10936.bitmap);
cljs.core.array_copy.call(null,earr__10937,(2 * (i + 1)),earr__10937,(2 * i),(len__10938 - (2 * (i + 1))));
(earr__10937[(len__10938 - 2)] = null);
(earr__10937[(len__10938 - 1)] = null);
return editable__10936;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10939 = this;
var inode__10940 = this;
var bit__10941 = (1 << ((hash >>> shift) & 0x01f));
var idx__10942 = cljs.core.bitmap_indexed_node_index.call(null,this__10939.bitmap,bit__10941);
if(((this__10939.bitmap & bit__10941) === 0))
{var n__10943 = cljs.core.bit_count.call(null,this__10939.bitmap);
if(((2 * n__10943) < this__10939.arr.length))
{var editable__10944 = inode__10940.ensure_editable(edit);
var earr__10945 = editable__10944.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10945,(2 * idx__10942),earr__10945,(2 * (idx__10942 + 1)),(2 * (n__10943 - idx__10942)));
(earr__10945[(2 * idx__10942)] = key);
(earr__10945[((2 * idx__10942) + 1)] = val);
editable__10944.bitmap = (editable__10944.bitmap | bit__10941);
return editable__10944;
} else
{if((n__10943 >= 16))
{var nodes__10946 = cljs.core.make_array.call(null,32);
var jdx__10947 = ((hash >>> shift) & 0x01f);
(nodes__10946[jdx__10947] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10948 = 0;
var j__10949 = 0;
while(true){
if((i__10948 < 32))
{if((((this__10939.bitmap >>> i__10948) & 1) === 0))
{{
var G__11002 = (i__10948 + 1);
var G__11003 = j__10949;
i__10948 = G__11002;
j__10949 = G__11003;
continue;
}
} else
{(nodes__10946[i__10948] = ((!(((this__10939.arr[j__10949]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10939.arr[j__10949])),(this__10939.arr[j__10949]),(this__10939.arr[(j__10949 + 1)]),added_leaf_QMARK_):(this__10939.arr[(j__10949 + 1)])));
{
var G__11004 = (i__10948 + 1);
var G__11005 = (j__10949 + 2);
i__10948 = G__11004;
j__10949 = G__11005;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10943 + 1),nodes__10946));
} else
{if("\uFDD0'else")
{var new_arr__10950 = cljs.core.make_array.call(null,(2 * (n__10943 + 4)));
cljs.core.array_copy.call(null,this__10939.arr,0,new_arr__10950,0,(2 * idx__10942));
(new_arr__10950[(2 * idx__10942)] = key);
(new_arr__10950[((2 * idx__10942) + 1)] = val);
cljs.core.array_copy.call(null,this__10939.arr,(2 * idx__10942),new_arr__10950,(2 * (idx__10942 + 1)),(2 * (n__10943 - idx__10942)));
added_leaf_QMARK_.val = true;
var editable__10951 = inode__10940.ensure_editable(edit);
editable__10951.arr = new_arr__10950;
editable__10951.bitmap = (editable__10951.bitmap | bit__10941);
return editable__10951;
} else
{return null;
}
}
}
} else
{var key_or_nil__10952 = (this__10939.arr[(2 * idx__10942)]);
var val_or_node__10953 = (this__10939.arr[((2 * idx__10942) + 1)]);
if((key_or_nil__10952 == null))
{var n__10954 = val_or_node__10953.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10954 === val_or_node__10953))
{return inode__10940;
} else
{return cljs.core.edit_and_set.call(null,inode__10940,edit,((2 * idx__10942) + 1),n__10954);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10952))
{if((val === val_or_node__10953))
{return inode__10940;
} else
{return cljs.core.edit_and_set.call(null,inode__10940,edit,((2 * idx__10942) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10940,edit,(2 * idx__10942),null,((2 * idx__10942) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10952,val_or_node__10953,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10955 = this;
var inode__10956 = this;
return cljs.core.create_inode_seq.call(null,this__10955.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10957 = this;
var inode__10958 = this;
var bit__10959 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10957.bitmap & bit__10959) === 0))
{return inode__10958;
} else
{var idx__10960 = cljs.core.bitmap_indexed_node_index.call(null,this__10957.bitmap,bit__10959);
var key_or_nil__10961 = (this__10957.arr[(2 * idx__10960)]);
var val_or_node__10962 = (this__10957.arr[((2 * idx__10960) + 1)]);
if((key_or_nil__10961 == null))
{var n__10963 = val_or_node__10962.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10963 === val_or_node__10962))
{return inode__10958;
} else
{if(!((n__10963 == null)))
{return cljs.core.edit_and_set.call(null,inode__10958,edit,((2 * idx__10960) + 1),n__10963);
} else
{if((this__10957.bitmap === bit__10959))
{return null;
} else
{if("\uFDD0'else")
{return inode__10958.edit_and_remove_pair(edit,bit__10959,idx__10960);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10961))
{(removed_leaf_QMARK_[0] = true);
return inode__10958.edit_and_remove_pair(edit,bit__10959,idx__10960);
} else
{if("\uFDD0'else")
{return inode__10958;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10964 = this;
var inode__10965 = this;
if((e === this__10964.edit))
{return inode__10965;
} else
{var n__10966 = cljs.core.bit_count.call(null,this__10964.bitmap);
var new_arr__10967 = cljs.core.make_array.call(null,(((n__10966 < 0))?4:(2 * (n__10966 + 1))));
cljs.core.array_copy.call(null,this__10964.arr,0,new_arr__10967,0,(2 * n__10966));
return (new cljs.core.BitmapIndexedNode(e,this__10964.bitmap,new_arr__10967));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10968 = this;
var inode__10969 = this;
return cljs.core.inode_kv_reduce.call(null,this__10968.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10970 = this;
var inode__10971 = this;
var bit__10972 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10970.bitmap & bit__10972) === 0))
{return not_found;
} else
{var idx__10973 = cljs.core.bitmap_indexed_node_index.call(null,this__10970.bitmap,bit__10972);
var key_or_nil__10974 = (this__10970.arr[(2 * idx__10973)]);
var val_or_node__10975 = (this__10970.arr[((2 * idx__10973) + 1)]);
if((key_or_nil__10974 == null))
{return val_or_node__10975.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10974))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10974,val_or_node__10975], true);
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
var this__10976 = this;
var inode__10977 = this;
var bit__10978 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10976.bitmap & bit__10978) === 0))
{return inode__10977;
} else
{var idx__10979 = cljs.core.bitmap_indexed_node_index.call(null,this__10976.bitmap,bit__10978);
var key_or_nil__10980 = (this__10976.arr[(2 * idx__10979)]);
var val_or_node__10981 = (this__10976.arr[((2 * idx__10979) + 1)]);
if((key_or_nil__10980 == null))
{var n__10982 = val_or_node__10981.inode_without((shift + 5),hash,key);
if((n__10982 === val_or_node__10981))
{return inode__10977;
} else
{if(!((n__10982 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10976.bitmap,cljs.core.clone_and_set.call(null,this__10976.arr,((2 * idx__10979) + 1),n__10982)));
} else
{if((this__10976.bitmap === bit__10978))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10976.bitmap ^ bit__10978),cljs.core.remove_pair.call(null,this__10976.arr,idx__10979)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10980))
{return (new cljs.core.BitmapIndexedNode(null,(this__10976.bitmap ^ bit__10978),cljs.core.remove_pair.call(null,this__10976.arr,idx__10979)));
} else
{if("\uFDD0'else")
{return inode__10977;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10983 = this;
var inode__10984 = this;
var bit__10985 = (1 << ((hash >>> shift) & 0x01f));
var idx__10986 = cljs.core.bitmap_indexed_node_index.call(null,this__10983.bitmap,bit__10985);
if(((this__10983.bitmap & bit__10985) === 0))
{var n__10987 = cljs.core.bit_count.call(null,this__10983.bitmap);
if((n__10987 >= 16))
{var nodes__10988 = cljs.core.make_array.call(null,32);
var jdx__10989 = ((hash >>> shift) & 0x01f);
(nodes__10988[jdx__10989] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10990 = 0;
var j__10991 = 0;
while(true){
if((i__10990 < 32))
{if((((this__10983.bitmap >>> i__10990) & 1) === 0))
{{
var G__11006 = (i__10990 + 1);
var G__11007 = j__10991;
i__10990 = G__11006;
j__10991 = G__11007;
continue;
}
} else
{(nodes__10988[i__10990] = ((!(((this__10983.arr[j__10991]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10983.arr[j__10991])),(this__10983.arr[j__10991]),(this__10983.arr[(j__10991 + 1)]),added_leaf_QMARK_):(this__10983.arr[(j__10991 + 1)])));
{
var G__11008 = (i__10990 + 1);
var G__11009 = (j__10991 + 2);
i__10990 = G__11008;
j__10991 = G__11009;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10987 + 1),nodes__10988));
} else
{var new_arr__10992 = cljs.core.make_array.call(null,(2 * (n__10987 + 1)));
cljs.core.array_copy.call(null,this__10983.arr,0,new_arr__10992,0,(2 * idx__10986));
(new_arr__10992[(2 * idx__10986)] = key);
(new_arr__10992[((2 * idx__10986) + 1)] = val);
cljs.core.array_copy.call(null,this__10983.arr,(2 * idx__10986),new_arr__10992,(2 * (idx__10986 + 1)),(2 * (n__10987 - idx__10986)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10983.bitmap | bit__10985),new_arr__10992));
}
} else
{var key_or_nil__10993 = (this__10983.arr[(2 * idx__10986)]);
var val_or_node__10994 = (this__10983.arr[((2 * idx__10986) + 1)]);
if((key_or_nil__10993 == null))
{var n__10995 = val_or_node__10994.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10995 === val_or_node__10994))
{return inode__10984;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10983.bitmap,cljs.core.clone_and_set.call(null,this__10983.arr,((2 * idx__10986) + 1),n__10995)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10993))
{if((val === val_or_node__10994))
{return inode__10984;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10983.bitmap,cljs.core.clone_and_set.call(null,this__10983.arr,((2 * idx__10986) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10983.bitmap,cljs.core.clone_and_set.call(null,this__10983.arr,(2 * idx__10986),null,((2 * idx__10986) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10993,val_or_node__10994,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10996 = this;
var inode__10997 = this;
var bit__10998 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10996.bitmap & bit__10998) === 0))
{return not_found;
} else
{var idx__10999 = cljs.core.bitmap_indexed_node_index.call(null,this__10996.bitmap,bit__10998);
var key_or_nil__11000 = (this__10996.arr[(2 * idx__10999)]);
var val_or_node__11001 = (this__10996.arr[((2 * idx__10999) + 1)]);
if((key_or_nil__11000 == null))
{return val_or_node__11001.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11000))
{return val_or_node__11001;
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
var arr__11017 = array_node.arr;
var len__11018 = (2 * (array_node.cnt - 1));
var new_arr__11019 = cljs.core.make_array.call(null,len__11018);
var i__11020 = 0;
var j__11021 = 1;
var bitmap__11022 = 0;
while(true){
if((i__11020 < len__11018))
{if((function (){var and__3822__auto____11023 = !((i__11020 === idx));
if(and__3822__auto____11023)
{return !(((arr__11017[i__11020]) == null));
} else
{return and__3822__auto____11023;
}
})())
{(new_arr__11019[j__11021] = (arr__11017[i__11020]));
{
var G__11024 = (i__11020 + 1);
var G__11025 = (j__11021 + 2);
var G__11026 = (bitmap__11022 | (1 << i__11020));
i__11020 = G__11024;
j__11021 = G__11025;
bitmap__11022 = G__11026;
continue;
}
} else
{{
var G__11027 = (i__11020 + 1);
var G__11028 = j__11021;
var G__11029 = bitmap__11022;
i__11020 = G__11027;
j__11021 = G__11028;
bitmap__11022 = G__11029;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11022,new_arr__11019));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11030 = this;
var inode__11031 = this;
var idx__11032 = ((hash >>> shift) & 0x01f);
var node__11033 = (this__11030.arr[idx__11032]);
if((node__11033 == null))
{var editable__11034 = cljs.core.edit_and_set.call(null,inode__11031,edit,idx__11032,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11034.cnt = (editable__11034.cnt + 1);
return editable__11034;
} else
{var n__11035 = node__11033.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11035 === node__11033))
{return inode__11031;
} else
{return cljs.core.edit_and_set.call(null,inode__11031,edit,idx__11032,n__11035);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11036 = this;
var inode__11037 = this;
return cljs.core.create_array_node_seq.call(null,this__11036.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11038 = this;
var inode__11039 = this;
var idx__11040 = ((hash >>> shift) & 0x01f);
var node__11041 = (this__11038.arr[idx__11040]);
if((node__11041 == null))
{return inode__11039;
} else
{var n__11042 = node__11041.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11042 === node__11041))
{return inode__11039;
} else
{if((n__11042 == null))
{if((this__11038.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11039,edit,idx__11040);
} else
{var editable__11043 = cljs.core.edit_and_set.call(null,inode__11039,edit,idx__11040,n__11042);
editable__11043.cnt = (editable__11043.cnt - 1);
return editable__11043;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11039,edit,idx__11040,n__11042);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11044 = this;
var inode__11045 = this;
if((e === this__11044.edit))
{return inode__11045;
} else
{return (new cljs.core.ArrayNode(e,this__11044.cnt,this__11044.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11046 = this;
var inode__11047 = this;
var len__11048 = this__11046.arr.length;
var i__11049 = 0;
var init__11050 = init;
while(true){
if((i__11049 < len__11048))
{var node__11051 = (this__11046.arr[i__11049]);
if(!((node__11051 == null)))
{var init__11052 = node__11051.kv_reduce(f,init__11050);
if(cljs.core.reduced_QMARK_.call(null,init__11052))
{return cljs.core.deref.call(null,init__11052);
} else
{{
var G__11071 = (i__11049 + 1);
var G__11072 = init__11052;
i__11049 = G__11071;
init__11050 = G__11072;
continue;
}
}
} else
{return null;
}
} else
{return init__11050;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11053 = this;
var inode__11054 = this;
var idx__11055 = ((hash >>> shift) & 0x01f);
var node__11056 = (this__11053.arr[idx__11055]);
if(!((node__11056 == null)))
{return node__11056.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11057 = this;
var inode__11058 = this;
var idx__11059 = ((hash >>> shift) & 0x01f);
var node__11060 = (this__11057.arr[idx__11059]);
if(!((node__11060 == null)))
{var n__11061 = node__11060.inode_without((shift + 5),hash,key);
if((n__11061 === node__11060))
{return inode__11058;
} else
{if((n__11061 == null))
{if((this__11057.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11058,null,idx__11059);
} else
{return (new cljs.core.ArrayNode(null,(this__11057.cnt - 1),cljs.core.clone_and_set.call(null,this__11057.arr,idx__11059,n__11061)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11057.cnt,cljs.core.clone_and_set.call(null,this__11057.arr,idx__11059,n__11061)));
} else
{return null;
}
}
}
} else
{return inode__11058;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11062 = this;
var inode__11063 = this;
var idx__11064 = ((hash >>> shift) & 0x01f);
var node__11065 = (this__11062.arr[idx__11064]);
if((node__11065 == null))
{return (new cljs.core.ArrayNode(null,(this__11062.cnt + 1),cljs.core.clone_and_set.call(null,this__11062.arr,idx__11064,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11066 = node__11065.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11066 === node__11065))
{return inode__11063;
} else
{return (new cljs.core.ArrayNode(null,this__11062.cnt,cljs.core.clone_and_set.call(null,this__11062.arr,idx__11064,n__11066)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11067 = this;
var inode__11068 = this;
var idx__11069 = ((hash >>> shift) & 0x01f);
var node__11070 = (this__11067.arr[idx__11069]);
if(!((node__11070 == null)))
{return node__11070.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11075 = (2 * cnt);
var i__11076 = 0;
while(true){
if((i__11076 < lim__11075))
{if(cljs.core.key_test.call(null,key,(arr[i__11076])))
{return i__11076;
} else
{{
var G__11077 = (i__11076 + 2);
i__11076 = G__11077;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11078 = this;
var inode__11079 = this;
if((hash === this__11078.collision_hash))
{var idx__11080 = cljs.core.hash_collision_node_find_index.call(null,this__11078.arr,this__11078.cnt,key);
if((idx__11080 === -1))
{if((this__11078.arr.length > (2 * this__11078.cnt)))
{var editable__11081 = cljs.core.edit_and_set.call(null,inode__11079,edit,(2 * this__11078.cnt),key,((2 * this__11078.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11081.cnt = (editable__11081.cnt + 1);
return editable__11081;
} else
{var len__11082 = this__11078.arr.length;
var new_arr__11083 = cljs.core.make_array.call(null,(len__11082 + 2));
cljs.core.array_copy.call(null,this__11078.arr,0,new_arr__11083,0,len__11082);
(new_arr__11083[len__11082] = key);
(new_arr__11083[(len__11082 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11079.ensure_editable_array(edit,(this__11078.cnt + 1),new_arr__11083);
}
} else
{if(((this__11078.arr[(idx__11080 + 1)]) === val))
{return inode__11079;
} else
{return cljs.core.edit_and_set.call(null,inode__11079,edit,(idx__11080 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11078.collision_hash >>> shift) & 0x01f)),[null,inode__11079,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11084 = this;
var inode__11085 = this;
return cljs.core.create_inode_seq.call(null,this__11084.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11086 = this;
var inode__11087 = this;
var idx__11088 = cljs.core.hash_collision_node_find_index.call(null,this__11086.arr,this__11086.cnt,key);
if((idx__11088 === -1))
{return inode__11087;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11086.cnt === 1))
{return null;
} else
{var editable__11089 = inode__11087.ensure_editable(edit);
var earr__11090 = editable__11089.arr;
(earr__11090[idx__11088] = (earr__11090[((2 * this__11086.cnt) - 2)]));
(earr__11090[(idx__11088 + 1)] = (earr__11090[((2 * this__11086.cnt) - 1)]));
(earr__11090[((2 * this__11086.cnt) - 1)] = null);
(earr__11090[((2 * this__11086.cnt) - 2)] = null);
editable__11089.cnt = (editable__11089.cnt - 1);
return editable__11089;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11091 = this;
var inode__11092 = this;
if((e === this__11091.edit))
{return inode__11092;
} else
{var new_arr__11093 = cljs.core.make_array.call(null,(2 * (this__11091.cnt + 1)));
cljs.core.array_copy.call(null,this__11091.arr,0,new_arr__11093,0,(2 * this__11091.cnt));
return (new cljs.core.HashCollisionNode(e,this__11091.collision_hash,this__11091.cnt,new_arr__11093));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11094 = this;
var inode__11095 = this;
return cljs.core.inode_kv_reduce.call(null,this__11094.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11096 = this;
var inode__11097 = this;
var idx__11098 = cljs.core.hash_collision_node_find_index.call(null,this__11096.arr,this__11096.cnt,key);
if((idx__11098 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11096.arr[idx__11098])))
{return cljs.core.PersistentVector.fromArray([(this__11096.arr[idx__11098]),(this__11096.arr[(idx__11098 + 1)])], true);
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
var this__11099 = this;
var inode__11100 = this;
var idx__11101 = cljs.core.hash_collision_node_find_index.call(null,this__11099.arr,this__11099.cnt,key);
if((idx__11101 === -1))
{return inode__11100;
} else
{if((this__11099.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11099.collision_hash,(this__11099.cnt - 1),cljs.core.remove_pair.call(null,this__11099.arr,cljs.core.quot.call(null,idx__11101,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11102 = this;
var inode__11103 = this;
if((hash === this__11102.collision_hash))
{var idx__11104 = cljs.core.hash_collision_node_find_index.call(null,this__11102.arr,this__11102.cnt,key);
if((idx__11104 === -1))
{var len__11105 = this__11102.arr.length;
var new_arr__11106 = cljs.core.make_array.call(null,(len__11105 + 2));
cljs.core.array_copy.call(null,this__11102.arr,0,new_arr__11106,0,len__11105);
(new_arr__11106[len__11105] = key);
(new_arr__11106[(len__11105 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11102.collision_hash,(this__11102.cnt + 1),new_arr__11106));
} else
{if(cljs.core._EQ_.call(null,(this__11102.arr[idx__11104]),val))
{return inode__11103;
} else
{return (new cljs.core.HashCollisionNode(null,this__11102.collision_hash,this__11102.cnt,cljs.core.clone_and_set.call(null,this__11102.arr,(idx__11104 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11102.collision_hash >>> shift) & 0x01f)),[null,inode__11103])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11107 = this;
var inode__11108 = this;
var idx__11109 = cljs.core.hash_collision_node_find_index.call(null,this__11107.arr,this__11107.cnt,key);
if((idx__11109 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11107.arr[idx__11109])))
{return (this__11107.arr[(idx__11109 + 1)]);
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
var this__11110 = this;
var inode__11111 = this;
if((e === this__11110.edit))
{this__11110.arr = array;
this__11110.cnt = count;
return inode__11111;
} else
{return (new cljs.core.HashCollisionNode(this__11110.edit,this__11110.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11116 = cljs.core.hash.call(null,key1);
if((key1hash__11116 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11116,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11117 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11116,key1,val1,added_leaf_QMARK___11117).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11117);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11118 = cljs.core.hash.call(null,key1);
if((key1hash__11118 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11118,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11119 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11118,key1,val1,added_leaf_QMARK___11119).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11119);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11120 = this;
var h__2242__auto____11121 = this__11120.__hash;
if(!((h__2242__auto____11121 == null)))
{return h__2242__auto____11121;
} else
{var h__2242__auto____11122 = cljs.core.hash_coll.call(null,coll);
this__11120.__hash = h__2242__auto____11122;
return h__2242__auto____11122;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11123 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11124 = this;
var this__11125 = this;
return cljs.core.pr_str.call(null,this__11125);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11126 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11127 = this;
if((this__11127.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11127.nodes[this__11127.i]),(this__11127.nodes[(this__11127.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11127.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11128 = this;
if((this__11128.s == null))
{return cljs.core.create_inode_seq.call(null,this__11128.nodes,(this__11128.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11128.nodes,this__11128.i,cljs.core.next.call(null,this__11128.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11129 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11130 = this;
return (new cljs.core.NodeSeq(meta,this__11130.nodes,this__11130.i,this__11130.s,this__11130.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11131 = this;
return this__11131.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11132 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11132.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11139 = nodes.length;
var j__11140 = i;
while(true){
if((j__11140 < len__11139))
{if(!(((nodes[j__11140]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11140,null,null));
} else
{var temp__3971__auto____11141 = (nodes[(j__11140 + 1)]);
if(cljs.core.truth_(temp__3971__auto____11141))
{var node__11142 = temp__3971__auto____11141;
var temp__3971__auto____11143 = node__11142.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11143))
{var node_seq__11144 = temp__3971__auto____11143;
return (new cljs.core.NodeSeq(null,nodes,(j__11140 + 2),node_seq__11144,null));
} else
{{
var G__11145 = (j__11140 + 2);
j__11140 = G__11145;
continue;
}
}
} else
{{
var G__11146 = (j__11140 + 2);
j__11140 = G__11146;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11147 = this;
var h__2242__auto____11148 = this__11147.__hash;
if(!((h__2242__auto____11148 == null)))
{return h__2242__auto____11148;
} else
{var h__2242__auto____11149 = cljs.core.hash_coll.call(null,coll);
this__11147.__hash = h__2242__auto____11149;
return h__2242__auto____11149;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11150 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11151 = this;
var this__11152 = this;
return cljs.core.pr_str.call(null,this__11152);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11153 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11154 = this;
return cljs.core.first.call(null,this__11154.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11155 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11155.nodes,this__11155.i,cljs.core.next.call(null,this__11155.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11156 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11157 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11157.nodes,this__11157.i,this__11157.s,this__11157.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11158 = this;
return this__11158.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11159 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11159.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11166 = nodes.length;
var j__11167 = i;
while(true){
if((j__11167 < len__11166))
{var temp__3971__auto____11168 = (nodes[j__11167]);
if(cljs.core.truth_(temp__3971__auto____11168))
{var nj__11169 = temp__3971__auto____11168;
var temp__3971__auto____11170 = nj__11169.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11170))
{var ns__11171 = temp__3971__auto____11170;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11167 + 1),ns__11171,null));
} else
{{
var G__11172 = (j__11167 + 1);
j__11167 = G__11172;
continue;
}
}
} else
{{
var G__11173 = (j__11167 + 1);
j__11167 = G__11173;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11176 = this;
return (new cljs.core.TransientHashMap({},this__11176.root,this__11176.cnt,this__11176.has_nil_QMARK_,this__11176.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11177 = this;
var h__2242__auto____11178 = this__11177.__hash;
if(!((h__2242__auto____11178 == null)))
{return h__2242__auto____11178;
} else
{var h__2242__auto____11179 = cljs.core.hash_imap.call(null,coll);
this__11177.__hash = h__2242__auto____11179;
return h__2242__auto____11179;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11180 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11181 = this;
if((k == null))
{if(this__11181.has_nil_QMARK_)
{return this__11181.nil_val;
} else
{return not_found;
}
} else
{if((this__11181.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11181.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11182 = this;
if((k == null))
{if((function (){var and__3822__auto____11183 = this__11182.has_nil_QMARK_;
if(and__3822__auto____11183)
{return (v === this__11182.nil_val);
} else
{return and__3822__auto____11183;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11182.meta,((this__11182.has_nil_QMARK_)?this__11182.cnt:(this__11182.cnt + 1)),this__11182.root,true,v,null));
}
} else
{var added_leaf_QMARK___11184 = (new cljs.core.Box(false));
var new_root__11185 = (((this__11182.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11182.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11184);
if((new_root__11185 === this__11182.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11182.meta,((added_leaf_QMARK___11184.val)?(this__11182.cnt + 1):this__11182.cnt),new_root__11185,this__11182.has_nil_QMARK_,this__11182.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11186 = this;
if((k == null))
{return this__11186.has_nil_QMARK_;
} else
{if((this__11186.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11186.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11209 = null;
var G__11209__2 = (function (this_sym11187,k){
var this__11189 = this;
var this_sym11187__11190 = this;
var coll__11191 = this_sym11187__11190;
return coll__11191.cljs$core$ILookup$_lookup$arity$2(coll__11191,k);
});
var G__11209__3 = (function (this_sym11188,k,not_found){
var this__11189 = this;
var this_sym11188__11192 = this;
var coll__11193 = this_sym11188__11192;
return coll__11193.cljs$core$ILookup$_lookup$arity$3(coll__11193,k,not_found);
});
G__11209 = function(this_sym11188,k,not_found){
switch(arguments.length){
case 2:
return G__11209__2.call(this,this_sym11188,k);
case 3:
return G__11209__3.call(this,this_sym11188,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11209;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11174,args11175){
var this__11194 = this;
return this_sym11174.call.apply(this_sym11174,[this_sym11174].concat(args11175.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11195 = this;
var init__11196 = ((this__11195.has_nil_QMARK_)?f.call(null,init,null,this__11195.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11196))
{return cljs.core.deref.call(null,init__11196);
} else
{if(!((this__11195.root == null)))
{return this__11195.root.kv_reduce(f,init__11196);
} else
{if("\uFDD0'else")
{return init__11196;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11197 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11198 = this;
var this__11199 = this;
return cljs.core.pr_str.call(null,this__11199);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11200 = this;
if((this__11200.cnt > 0))
{var s__11201 = ((!((this__11200.root == null)))?this__11200.root.inode_seq():null);
if(this__11200.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11200.nil_val], true),s__11201);
} else
{return s__11201;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11202 = this;
return this__11202.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11203 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11204 = this;
return (new cljs.core.PersistentHashMap(meta,this__11204.cnt,this__11204.root,this__11204.has_nil_QMARK_,this__11204.nil_val,this__11204.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11205 = this;
return this__11205.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11206 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11206.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11207 = this;
if((k == null))
{if(this__11207.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11207.meta,(this__11207.cnt - 1),this__11207.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11207.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11208 = this__11207.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11208 === this__11207.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11207.meta,(this__11207.cnt - 1),new_root__11208,this__11207.has_nil_QMARK_,this__11207.nil_val,null));
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
var len__11210 = ks.length;
var i__11211 = 0;
var out__11212 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11211 < len__11210))
{{
var G__11213 = (i__11211 + 1);
var G__11214 = cljs.core.assoc_BANG_.call(null,out__11212,(ks[i__11211]),(vs[i__11211]));
i__11211 = G__11213;
out__11212 = G__11214;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11212);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__11215 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11216 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11217 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11218 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11219 = this;
if((k == null))
{if(this__11219.has_nil_QMARK_)
{return this__11219.nil_val;
} else
{return null;
}
} else
{if((this__11219.root == null))
{return null;
} else
{return this__11219.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11220 = this;
if((k == null))
{if(this__11220.has_nil_QMARK_)
{return this__11220.nil_val;
} else
{return not_found;
}
} else
{if((this__11220.root == null))
{return not_found;
} else
{return this__11220.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11221 = this;
if(this__11221.edit)
{return this__11221.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11222 = this;
var tcoll__11223 = this;
if(this__11222.edit)
{if((function (){var G__11224__11225 = o;
if(G__11224__11225)
{if((function (){var or__3824__auto____11226 = (G__11224__11225.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11226)
{return or__3824__auto____11226;
} else
{return G__11224__11225.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11224__11225.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11224__11225);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11224__11225);
}
})())
{return tcoll__11223.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11227 = cljs.core.seq.call(null,o);
var tcoll__11228 = tcoll__11223;
while(true){
var temp__3971__auto____11229 = cljs.core.first.call(null,es__11227);
if(cljs.core.truth_(temp__3971__auto____11229))
{var e__11230 = temp__3971__auto____11229;
{
var G__11241 = cljs.core.next.call(null,es__11227);
var G__11242 = tcoll__11228.assoc_BANG_(cljs.core.key.call(null,e__11230),cljs.core.val.call(null,e__11230));
es__11227 = G__11241;
tcoll__11228 = G__11242;
continue;
}
} else
{return tcoll__11228;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11231 = this;
var tcoll__11232 = this;
if(this__11231.edit)
{if((k == null))
{if((this__11231.nil_val === v))
{} else
{this__11231.nil_val = v;
}
if(this__11231.has_nil_QMARK_)
{} else
{this__11231.count = (this__11231.count + 1);
this__11231.has_nil_QMARK_ = true;
}
return tcoll__11232;
} else
{var added_leaf_QMARK___11233 = (new cljs.core.Box(false));
var node__11234 = (((this__11231.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11231.root).inode_assoc_BANG_(this__11231.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11233);
if((node__11234 === this__11231.root))
{} else
{this__11231.root = node__11234;
}
if(added_leaf_QMARK___11233.val)
{this__11231.count = (this__11231.count + 1);
} else
{}
return tcoll__11232;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11235 = this;
var tcoll__11236 = this;
if(this__11235.edit)
{if((k == null))
{if(this__11235.has_nil_QMARK_)
{this__11235.has_nil_QMARK_ = false;
this__11235.nil_val = null;
this__11235.count = (this__11235.count - 1);
return tcoll__11236;
} else
{return tcoll__11236;
}
} else
{if((this__11235.root == null))
{return tcoll__11236;
} else
{var removed_leaf_QMARK___11237 = (new cljs.core.Box(false));
var node__11238 = this__11235.root.inode_without_BANG_(this__11235.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11237);
if((node__11238 === this__11235.root))
{} else
{this__11235.root = node__11238;
}
if(cljs.core.truth_((removed_leaf_QMARK___11237[0])))
{this__11235.count = (this__11235.count - 1);
} else
{}
return tcoll__11236;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11239 = this;
var tcoll__11240 = this;
if(this__11239.edit)
{this__11239.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11239.count,this__11239.root,this__11239.has_nil_QMARK_,this__11239.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11245 = node;
var stack__11246 = stack;
while(true){
if(!((t__11245 == null)))
{{
var G__11247 = ((ascending_QMARK_)?t__11245.left:t__11245.right);
var G__11248 = cljs.core.conj.call(null,stack__11246,t__11245);
t__11245 = G__11247;
stack__11246 = G__11248;
continue;
}
} else
{return stack__11246;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11249 = this;
var h__2242__auto____11250 = this__11249.__hash;
if(!((h__2242__auto____11250 == null)))
{return h__2242__auto____11250;
} else
{var h__2242__auto____11251 = cljs.core.hash_coll.call(null,coll);
this__11249.__hash = h__2242__auto____11251;
return h__2242__auto____11251;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11252 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11253 = this;
var this__11254 = this;
return cljs.core.pr_str.call(null,this__11254);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11255 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11256 = this;
if((this__11256.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11256.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11257 = this;
return cljs.core.peek.call(null,this__11257.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11258 = this;
var t__11259 = cljs.core.first.call(null,this__11258.stack);
var next_stack__11260 = cljs.core.tree_map_seq_push.call(null,((this__11258.ascending_QMARK_)?t__11259.right:t__11259.left),cljs.core.next.call(null,this__11258.stack),this__11258.ascending_QMARK_);
if(!((next_stack__11260 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11260,this__11258.ascending_QMARK_,(this__11258.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11261 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11262 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11262.stack,this__11262.ascending_QMARK_,this__11262.cnt,this__11262.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11263 = this;
return this__11263.meta;
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
{if((function (){var and__3822__auto____11265 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____11265)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____11265;
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
{if((function (){var and__3822__auto____11267 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____11267)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____11267;
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
var init__11271 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11271))
{return cljs.core.deref.call(null,init__11271);
} else
{var init__11272 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11271):init__11271);
if(cljs.core.reduced_QMARK_.call(null,init__11272))
{return cljs.core.deref.call(null,init__11272);
} else
{var init__11273 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11272):init__11272);
if(cljs.core.reduced_QMARK_.call(null,init__11273))
{return cljs.core.deref.call(null,init__11273);
} else
{return init__11273;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11276 = this;
var h__2242__auto____11277 = this__11276.__hash;
if(!((h__2242__auto____11277 == null)))
{return h__2242__auto____11277;
} else
{var h__2242__auto____11278 = cljs.core.hash_coll.call(null,coll);
this__11276.__hash = h__2242__auto____11278;
return h__2242__auto____11278;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11279 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11280 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11281 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11281.key,this__11281.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11329 = null;
var G__11329__2 = (function (this_sym11282,k){
var this__11284 = this;
var this_sym11282__11285 = this;
var node__11286 = this_sym11282__11285;
return node__11286.cljs$core$ILookup$_lookup$arity$2(node__11286,k);
});
var G__11329__3 = (function (this_sym11283,k,not_found){
var this__11284 = this;
var this_sym11283__11287 = this;
var node__11288 = this_sym11283__11287;
return node__11288.cljs$core$ILookup$_lookup$arity$3(node__11288,k,not_found);
});
G__11329 = function(this_sym11283,k,not_found){
switch(arguments.length){
case 2:
return G__11329__2.call(this,this_sym11283,k);
case 3:
return G__11329__3.call(this,this_sym11283,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11329;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11274,args11275){
var this__11289 = this;
return this_sym11274.call.apply(this_sym11274,[this_sym11274].concat(args11275.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11290 = this;
return cljs.core.PersistentVector.fromArray([this__11290.key,this__11290.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11291 = this;
return this__11291.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11292 = this;
return this__11292.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11293 = this;
var node__11294 = this;
return ins.balance_right(node__11294);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11295 = this;
var node__11296 = this;
return (new cljs.core.RedNode(this__11295.key,this__11295.val,this__11295.left,this__11295.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11297 = this;
var node__11298 = this;
return cljs.core.balance_right_del.call(null,this__11297.key,this__11297.val,this__11297.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11299 = this;
var node__11300 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11301 = this;
var node__11302 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11302,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11303 = this;
var node__11304 = this;
return cljs.core.balance_left_del.call(null,this__11303.key,this__11303.val,del,this__11303.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11305 = this;
var node__11306 = this;
return ins.balance_left(node__11306);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11307 = this;
var node__11308 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11308,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11330 = null;
var G__11330__0 = (function (){
var this__11309 = this;
var this__11311 = this;
return cljs.core.pr_str.call(null,this__11311);
});
G__11330 = function(){
switch(arguments.length){
case 0:
return G__11330__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11330;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11312 = this;
var node__11313 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11313,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11314 = this;
var node__11315 = this;
return node__11315;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11316 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11317 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11318 = this;
return cljs.core.list.call(null,this__11318.key,this__11318.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11319 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11320 = this;
return this__11320.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11321 = this;
return cljs.core.PersistentVector.fromArray([this__11321.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11322 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11322.key,this__11322.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11323 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11324 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11324.key,this__11324.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11325 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11326 = this;
if((n === 0))
{return this__11326.key;
} else
{if((n === 1))
{return this__11326.val;
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
var this__11327 = this;
if((n === 0))
{return this__11327.key;
} else
{if((n === 1))
{return this__11327.val;
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
var this__11328 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11333 = this;
var h__2242__auto____11334 = this__11333.__hash;
if(!((h__2242__auto____11334 == null)))
{return h__2242__auto____11334;
} else
{var h__2242__auto____11335 = cljs.core.hash_coll.call(null,coll);
this__11333.__hash = h__2242__auto____11335;
return h__2242__auto____11335;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11336 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11337 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11338 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11338.key,this__11338.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11386 = null;
var G__11386__2 = (function (this_sym11339,k){
var this__11341 = this;
var this_sym11339__11342 = this;
var node__11343 = this_sym11339__11342;
return node__11343.cljs$core$ILookup$_lookup$arity$2(node__11343,k);
});
var G__11386__3 = (function (this_sym11340,k,not_found){
var this__11341 = this;
var this_sym11340__11344 = this;
var node__11345 = this_sym11340__11344;
return node__11345.cljs$core$ILookup$_lookup$arity$3(node__11345,k,not_found);
});
G__11386 = function(this_sym11340,k,not_found){
switch(arguments.length){
case 2:
return G__11386__2.call(this,this_sym11340,k);
case 3:
return G__11386__3.call(this,this_sym11340,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11386;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11331,args11332){
var this__11346 = this;
return this_sym11331.call.apply(this_sym11331,[this_sym11331].concat(args11332.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11347 = this;
return cljs.core.PersistentVector.fromArray([this__11347.key,this__11347.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11348 = this;
return this__11348.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11349 = this;
return this__11349.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11350 = this;
var node__11351 = this;
return (new cljs.core.RedNode(this__11350.key,this__11350.val,this__11350.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11352 = this;
var node__11353 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11354 = this;
var node__11355 = this;
return (new cljs.core.RedNode(this__11354.key,this__11354.val,this__11354.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11356 = this;
var node__11357 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11358 = this;
var node__11359 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11359,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11360 = this;
var node__11361 = this;
return (new cljs.core.RedNode(this__11360.key,this__11360.val,del,this__11360.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11362 = this;
var node__11363 = this;
return (new cljs.core.RedNode(this__11362.key,this__11362.val,ins,this__11362.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11364 = this;
var node__11365 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11364.left))
{return (new cljs.core.RedNode(this__11364.key,this__11364.val,this__11364.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11364.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11364.right))
{return (new cljs.core.RedNode(this__11364.right.key,this__11364.right.val,(new cljs.core.BlackNode(this__11364.key,this__11364.val,this__11364.left,this__11364.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11364.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11365,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11387 = null;
var G__11387__0 = (function (){
var this__11366 = this;
var this__11368 = this;
return cljs.core.pr_str.call(null,this__11368);
});
G__11387 = function(){
switch(arguments.length){
case 0:
return G__11387__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11387;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11369 = this;
var node__11370 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11369.right))
{return (new cljs.core.RedNode(this__11369.key,this__11369.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11369.left,null)),this__11369.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11369.left))
{return (new cljs.core.RedNode(this__11369.left.key,this__11369.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11369.left.left,null)),(new cljs.core.BlackNode(this__11369.key,this__11369.val,this__11369.left.right,this__11369.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11370,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11371 = this;
var node__11372 = this;
return (new cljs.core.BlackNode(this__11371.key,this__11371.val,this__11371.left,this__11371.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11373 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11374 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11375 = this;
return cljs.core.list.call(null,this__11375.key,this__11375.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11376 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11377 = this;
return this__11377.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11378 = this;
return cljs.core.PersistentVector.fromArray([this__11378.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11379 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11379.key,this__11379.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11380 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11381 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11381.key,this__11381.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11382 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11383 = this;
if((n === 0))
{return this__11383.key;
} else
{if((n === 1))
{return this__11383.val;
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
var this__11384 = this;
if((n === 0))
{return this__11384.key;
} else
{if((n === 1))
{return this__11384.val;
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
var this__11385 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11391 = comp.call(null,k,tree.key);
if((c__11391 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11391 < 0))
{var ins__11392 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11392 == null)))
{return tree.add_left(ins__11392);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11393 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11393 == null)))
{return tree.add_right(ins__11393);
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
{var app__11396 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11396))
{return (new cljs.core.RedNode(app__11396.key,app__11396.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11396.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11396.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11396,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11397 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11397))
{return (new cljs.core.RedNode(app__11397.key,app__11397.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11397.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11397.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11397,right.right,null)));
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
{var c__11403 = comp.call(null,k,tree.key);
if((c__11403 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11403 < 0))
{var del__11404 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____11405 = !((del__11404 == null));
if(or__3824__auto____11405)
{return or__3824__auto____11405;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11404,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11404,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11406 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____11407 = !((del__11406 == null));
if(or__3824__auto____11407)
{return or__3824__auto____11407;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11406);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11406,null));
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
var tk__11410 = tree.key;
var c__11411 = comp.call(null,k,tk__11410);
if((c__11411 === 0))
{return tree.replace(tk__11410,v,tree.left,tree.right);
} else
{if((c__11411 < 0))
{return tree.replace(tk__11410,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11410,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11414 = this;
var h__2242__auto____11415 = this__11414.__hash;
if(!((h__2242__auto____11415 == null)))
{return h__2242__auto____11415;
} else
{var h__2242__auto____11416 = cljs.core.hash_imap.call(null,coll);
this__11414.__hash = h__2242__auto____11416;
return h__2242__auto____11416;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11417 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11418 = this;
var n__11419 = coll.entry_at(k);
if(!((n__11419 == null)))
{return n__11419.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11420 = this;
var found__11421 = [null];
var t__11422 = cljs.core.tree_map_add.call(null,this__11420.comp,this__11420.tree,k,v,found__11421);
if((t__11422 == null))
{var found_node__11423 = cljs.core.nth.call(null,found__11421,0);
if(cljs.core._EQ_.call(null,v,found_node__11423.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11420.comp,cljs.core.tree_map_replace.call(null,this__11420.comp,this__11420.tree,k,v),this__11420.cnt,this__11420.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11420.comp,t__11422.blacken(),(this__11420.cnt + 1),this__11420.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11424 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11458 = null;
var G__11458__2 = (function (this_sym11425,k){
var this__11427 = this;
var this_sym11425__11428 = this;
var coll__11429 = this_sym11425__11428;
return coll__11429.cljs$core$ILookup$_lookup$arity$2(coll__11429,k);
});
var G__11458__3 = (function (this_sym11426,k,not_found){
var this__11427 = this;
var this_sym11426__11430 = this;
var coll__11431 = this_sym11426__11430;
return coll__11431.cljs$core$ILookup$_lookup$arity$3(coll__11431,k,not_found);
});
G__11458 = function(this_sym11426,k,not_found){
switch(arguments.length){
case 2:
return G__11458__2.call(this,this_sym11426,k);
case 3:
return G__11458__3.call(this,this_sym11426,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11458;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11412,args11413){
var this__11432 = this;
return this_sym11412.call.apply(this_sym11412,[this_sym11412].concat(args11413.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11433 = this;
if(!((this__11433.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11433.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11434 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11435 = this;
if((this__11435.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11435.tree,false,this__11435.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11436 = this;
var this__11437 = this;
return cljs.core.pr_str.call(null,this__11437);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11438 = this;
var coll__11439 = this;
var t__11440 = this__11438.tree;
while(true){
if(!((t__11440 == null)))
{var c__11441 = this__11438.comp.call(null,k,t__11440.key);
if((c__11441 === 0))
{return t__11440;
} else
{if((c__11441 < 0))
{{
var G__11459 = t__11440.left;
t__11440 = G__11459;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11460 = t__11440.right;
t__11440 = G__11460;
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
var this__11442 = this;
if((this__11442.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11442.tree,ascending_QMARK_,this__11442.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11443 = this;
if((this__11443.cnt > 0))
{var stack__11444 = null;
var t__11445 = this__11443.tree;
while(true){
if(!((t__11445 == null)))
{var c__11446 = this__11443.comp.call(null,k,t__11445.key);
if((c__11446 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11444,t__11445),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11446 < 0))
{{
var G__11461 = cljs.core.conj.call(null,stack__11444,t__11445);
var G__11462 = t__11445.left;
stack__11444 = G__11461;
t__11445 = G__11462;
continue;
}
} else
{{
var G__11463 = stack__11444;
var G__11464 = t__11445.right;
stack__11444 = G__11463;
t__11445 = G__11464;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11446 > 0))
{{
var G__11465 = cljs.core.conj.call(null,stack__11444,t__11445);
var G__11466 = t__11445.right;
stack__11444 = G__11465;
t__11445 = G__11466;
continue;
}
} else
{{
var G__11467 = stack__11444;
var G__11468 = t__11445.left;
stack__11444 = G__11467;
t__11445 = G__11468;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11444 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11444,ascending_QMARK_,-1,null));
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
var this__11447 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11448 = this;
return this__11448.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11449 = this;
if((this__11449.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11449.tree,true,this__11449.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11450 = this;
return this__11450.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11451 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11452 = this;
return (new cljs.core.PersistentTreeMap(this__11452.comp,this__11452.tree,this__11452.cnt,meta,this__11452.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11453 = this;
return this__11453.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11454 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11454.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11455 = this;
var found__11456 = [null];
var t__11457 = cljs.core.tree_map_remove.call(null,this__11455.comp,this__11455.tree,k,found__11456);
if((t__11457 == null))
{if((cljs.core.nth.call(null,found__11456,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11455.comp,null,0,this__11455.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11455.comp,t__11457.blacken(),(this__11455.cnt - 1),this__11455.meta,null));
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
var in__11471 = cljs.core.seq.call(null,keyvals);
var out__11472 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11471)
{{
var G__11473 = cljs.core.nnext.call(null,in__11471);
var G__11474 = cljs.core.assoc_BANG_.call(null,out__11472,cljs.core.first.call(null,in__11471),cljs.core.second.call(null,in__11471));
in__11471 = G__11473;
out__11472 = G__11474;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11472);
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
hash_map.cljs$lang$applyTo = (function (arglist__11475){
var keyvals = cljs.core.seq(arglist__11475);;
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
array_map.cljs$lang$applyTo = (function (arglist__11476){
var keyvals = cljs.core.seq(arglist__11476);;
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
var ks__11480 = [];
var obj__11481 = {};
var kvs__11482 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11482)
{ks__11480.push(cljs.core.first.call(null,kvs__11482));
(obj__11481[cljs.core.first.call(null,kvs__11482)] = cljs.core.second.call(null,kvs__11482));
{
var G__11483 = cljs.core.nnext.call(null,kvs__11482);
kvs__11482 = G__11483;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11480,obj__11481);
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
obj_map.cljs$lang$applyTo = (function (arglist__11484){
var keyvals = cljs.core.seq(arglist__11484);;
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
var in__11487 = cljs.core.seq.call(null,keyvals);
var out__11488 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11487)
{{
var G__11489 = cljs.core.nnext.call(null,in__11487);
var G__11490 = cljs.core.assoc.call(null,out__11488,cljs.core.first.call(null,in__11487),cljs.core.second.call(null,in__11487));
in__11487 = G__11489;
out__11488 = G__11490;
continue;
}
} else
{return out__11488;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11491){
var keyvals = cljs.core.seq(arglist__11491);;
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
var in__11494 = cljs.core.seq.call(null,keyvals);
var out__11495 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11494)
{{
var G__11496 = cljs.core.nnext.call(null,in__11494);
var G__11497 = cljs.core.assoc.call(null,out__11495,cljs.core.first.call(null,in__11494),cljs.core.second.call(null,in__11494));
in__11494 = G__11496;
out__11495 = G__11497;
continue;
}
} else
{return out__11495;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11498){
var comparator = cljs.core.first(arglist__11498);
var keyvals = cljs.core.rest(arglist__11498);
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
{return cljs.core.reduce.call(null,(function (p1__11499_SHARP_,p2__11500_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11502 = p1__11499_SHARP_;
if(cljs.core.truth_(or__3824__auto____11502))
{return or__3824__auto____11502;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11500_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11503){
var maps = cljs.core.seq(arglist__11503);;
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
{var merge_entry__11511 = (function (m,e){
var k__11509 = cljs.core.first.call(null,e);
var v__11510 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11509))
{return cljs.core.assoc.call(null,m,k__11509,f.call(null,cljs.core._lookup.call(null,m,k__11509,null),v__11510));
} else
{return cljs.core.assoc.call(null,m,k__11509,v__11510);
}
});
var merge2__11513 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11511,(function (){var or__3824__auto____11512 = m1;
if(cljs.core.truth_(or__3824__auto____11512))
{return or__3824__auto____11512;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11513,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11514){
var f = cljs.core.first(arglist__11514);
var maps = cljs.core.rest(arglist__11514);
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
var ret__11519 = cljs.core.ObjMap.EMPTY;
var keys__11520 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11520)
{var key__11521 = cljs.core.first.call(null,keys__11520);
var entry__11522 = cljs.core._lookup.call(null,map,key__11521,"\uFDD0'user/not-found");
{
var G__11523 = ((cljs.core.not_EQ_.call(null,entry__11522,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__11519,key__11521,entry__11522):ret__11519);
var G__11524 = cljs.core.next.call(null,keys__11520);
ret__11519 = G__11523;
keys__11520 = G__11524;
continue;
}
} else
{return ret__11519;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11528 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11528.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11529 = this;
var h__2242__auto____11530 = this__11529.__hash;
if(!((h__2242__auto____11530 == null)))
{return h__2242__auto____11530;
} else
{var h__2242__auto____11531 = cljs.core.hash_iset.call(null,coll);
this__11529.__hash = h__2242__auto____11531;
return h__2242__auto____11531;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11532 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11533 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11533.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11554 = null;
var G__11554__2 = (function (this_sym11534,k){
var this__11536 = this;
var this_sym11534__11537 = this;
var coll__11538 = this_sym11534__11537;
return coll__11538.cljs$core$ILookup$_lookup$arity$2(coll__11538,k);
});
var G__11554__3 = (function (this_sym11535,k,not_found){
var this__11536 = this;
var this_sym11535__11539 = this;
var coll__11540 = this_sym11535__11539;
return coll__11540.cljs$core$ILookup$_lookup$arity$3(coll__11540,k,not_found);
});
G__11554 = function(this_sym11535,k,not_found){
switch(arguments.length){
case 2:
return G__11554__2.call(this,this_sym11535,k);
case 3:
return G__11554__3.call(this,this_sym11535,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11554;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11526,args11527){
var this__11541 = this;
return this_sym11526.call.apply(this_sym11526,[this_sym11526].concat(args11527.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11542 = this;
return (new cljs.core.PersistentHashSet(this__11542.meta,cljs.core.assoc.call(null,this__11542.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11543 = this;
var this__11544 = this;
return cljs.core.pr_str.call(null,this__11544);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11545 = this;
return cljs.core.keys.call(null,this__11545.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11546 = this;
return (new cljs.core.PersistentHashSet(this__11546.meta,cljs.core.dissoc.call(null,this__11546.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11547 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11548 = this;
var and__3822__auto____11549 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11549)
{var and__3822__auto____11550 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11550)
{return cljs.core.every_QMARK_.call(null,(function (p1__11525_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11525_SHARP_);
}),other);
} else
{return and__3822__auto____11550;
}
} else
{return and__3822__auto____11549;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11551 = this;
return (new cljs.core.PersistentHashSet(meta,this__11551.hash_map,this__11551.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11552 = this;
return this__11552.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11553 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11553.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11555 = cljs.core.count.call(null,items);
var i__11556 = 0;
var out__11557 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11556 < len__11555))
{{
var G__11558 = (i__11556 + 1);
var G__11559 = cljs.core.conj_BANG_.call(null,out__11557,(items[i__11556]));
i__11556 = G__11558;
out__11557 = G__11559;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11557);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__11577 = null;
var G__11577__2 = (function (this_sym11563,k){
var this__11565 = this;
var this_sym11563__11566 = this;
var tcoll__11567 = this_sym11563__11566;
if((cljs.core._lookup.call(null,this__11565.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11577__3 = (function (this_sym11564,k,not_found){
var this__11565 = this;
var this_sym11564__11568 = this;
var tcoll__11569 = this_sym11564__11568;
if((cljs.core._lookup.call(null,this__11565.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11577 = function(this_sym11564,k,not_found){
switch(arguments.length){
case 2:
return G__11577__2.call(this,this_sym11564,k);
case 3:
return G__11577__3.call(this,this_sym11564,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11577;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11561,args11562){
var this__11570 = this;
return this_sym11561.call.apply(this_sym11561,[this_sym11561].concat(args11562.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11571 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11572 = this;
if((cljs.core._lookup.call(null,this__11572.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11573 = this;
return cljs.core.count.call(null,this__11573.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11574 = this;
this__11574.transient_map = cljs.core.dissoc_BANG_.call(null,this__11574.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11575 = this;
this__11575.transient_map = cljs.core.assoc_BANG_.call(null,this__11575.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11576 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11576.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11580 = this;
var h__2242__auto____11581 = this__11580.__hash;
if(!((h__2242__auto____11581 == null)))
{return h__2242__auto____11581;
} else
{var h__2242__auto____11582 = cljs.core.hash_iset.call(null,coll);
this__11580.__hash = h__2242__auto____11582;
return h__2242__auto____11582;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11583 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11584 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11584.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11610 = null;
var G__11610__2 = (function (this_sym11585,k){
var this__11587 = this;
var this_sym11585__11588 = this;
var coll__11589 = this_sym11585__11588;
return coll__11589.cljs$core$ILookup$_lookup$arity$2(coll__11589,k);
});
var G__11610__3 = (function (this_sym11586,k,not_found){
var this__11587 = this;
var this_sym11586__11590 = this;
var coll__11591 = this_sym11586__11590;
return coll__11591.cljs$core$ILookup$_lookup$arity$3(coll__11591,k,not_found);
});
G__11610 = function(this_sym11586,k,not_found){
switch(arguments.length){
case 2:
return G__11610__2.call(this,this_sym11586,k);
case 3:
return G__11610__3.call(this,this_sym11586,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11610;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11578,args11579){
var this__11592 = this;
return this_sym11578.call.apply(this_sym11578,[this_sym11578].concat(args11579.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11593 = this;
return (new cljs.core.PersistentTreeSet(this__11593.meta,cljs.core.assoc.call(null,this__11593.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11594 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11594.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11595 = this;
var this__11596 = this;
return cljs.core.pr_str.call(null,this__11596);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11597 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11597.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11598 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11598.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11599 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11600 = this;
return cljs.core._comparator.call(null,this__11600.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11601 = this;
return cljs.core.keys.call(null,this__11601.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11602 = this;
return (new cljs.core.PersistentTreeSet(this__11602.meta,cljs.core.dissoc.call(null,this__11602.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11603 = this;
return cljs.core.count.call(null,this__11603.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11604 = this;
var and__3822__auto____11605 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11605)
{var and__3822__auto____11606 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11606)
{return cljs.core.every_QMARK_.call(null,(function (p1__11560_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11560_SHARP_);
}),other);
} else
{return and__3822__auto____11606;
}
} else
{return and__3822__auto____11605;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11607 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11607.tree_map,this__11607.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11608 = this;
return this__11608.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11609 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11609.meta);
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
var G__11615__delegate = function (keys){
var in__11613 = cljs.core.seq.call(null,keys);
var out__11614 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11613))
{{
var G__11616 = cljs.core.next.call(null,in__11613);
var G__11617 = cljs.core.conj_BANG_.call(null,out__11614,cljs.core.first.call(null,in__11613));
in__11613 = G__11616;
out__11614 = G__11617;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11614);
}
break;
}
};
var G__11615 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11615__delegate.call(this, keys);
};
G__11615.cljs$lang$maxFixedArity = 0;
G__11615.cljs$lang$applyTo = (function (arglist__11618){
var keys = cljs.core.seq(arglist__11618);;
return G__11615__delegate(keys);
});
G__11615.cljs$lang$arity$variadic = G__11615__delegate;
return G__11615;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11619){
var keys = cljs.core.seq(arglist__11619);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11621){
var comparator = cljs.core.first(arglist__11621);
var keys = cljs.core.rest(arglist__11621);
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
{var n__11627 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11628 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11628))
{var e__11629 = temp__3971__auto____11628;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11629));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11627,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11620_SHARP_){
var temp__3971__auto____11630 = cljs.core.find.call(null,smap,p1__11620_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11630))
{var e__11631 = temp__3971__auto____11630;
return cljs.core.second.call(null,e__11631);
} else
{return p1__11620_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11661 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11654,seen){
while(true){
var vec__11655__11656 = p__11654;
var f__11657 = cljs.core.nth.call(null,vec__11655__11656,0,null);
var xs__11658 = vec__11655__11656;
var temp__3974__auto____11659 = cljs.core.seq.call(null,xs__11658);
if(temp__3974__auto____11659)
{var s__11660 = temp__3974__auto____11659;
if(cljs.core.contains_QMARK_.call(null,seen,f__11657))
{{
var G__11662 = cljs.core.rest.call(null,s__11660);
var G__11663 = seen;
p__11654 = G__11662;
seen = G__11663;
continue;
}
} else
{return cljs.core.cons.call(null,f__11657,step.call(null,cljs.core.rest.call(null,s__11660),cljs.core.conj.call(null,seen,f__11657)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11661.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11666 = cljs.core.PersistentVector.EMPTY;
var s__11667 = s;
while(true){
if(cljs.core.next.call(null,s__11667))
{{
var G__11668 = cljs.core.conj.call(null,ret__11666,cljs.core.first.call(null,s__11667));
var G__11669 = cljs.core.next.call(null,s__11667);
ret__11666 = G__11668;
s__11667 = G__11669;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11666);
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
{if((function (){var or__3824__auto____11672 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11672)
{return or__3824__auto____11672;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11673 = x.lastIndexOf("/");
if((i__11673 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11673 + 1));
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
if((function (){var or__3824__auto____11676 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11676)
{return or__3824__auto____11676;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11677 = x.lastIndexOf("/");
if((i__11677 > -1))
{return cljs.core.subs.call(null,x,2,i__11677);
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
var map__11684 = cljs.core.ObjMap.EMPTY;
var ks__11685 = cljs.core.seq.call(null,keys);
var vs__11686 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11687 = ks__11685;
if(and__3822__auto____11687)
{return vs__11686;
} else
{return and__3822__auto____11687;
}
})())
{{
var G__11688 = cljs.core.assoc.call(null,map__11684,cljs.core.first.call(null,ks__11685),cljs.core.first.call(null,vs__11686));
var G__11689 = cljs.core.next.call(null,ks__11685);
var G__11690 = cljs.core.next.call(null,vs__11686);
map__11684 = G__11688;
ks__11685 = G__11689;
vs__11686 = G__11690;
continue;
}
} else
{return map__11684;
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
var G__11693__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11678_SHARP_,p2__11679_SHARP_){
return max_key.call(null,k,p1__11678_SHARP_,p2__11679_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11693 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11693__delegate.call(this, k, x, y, more);
};
G__11693.cljs$lang$maxFixedArity = 3;
G__11693.cljs$lang$applyTo = (function (arglist__11694){
var k = cljs.core.first(arglist__11694);
var x = cljs.core.first(cljs.core.next(arglist__11694));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11694)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11694)));
return G__11693__delegate(k, x, y, more);
});
G__11693.cljs$lang$arity$variadic = G__11693__delegate;
return G__11693;
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
var G__11695__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11691_SHARP_,p2__11692_SHARP_){
return min_key.call(null,k,p1__11691_SHARP_,p2__11692_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11695 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11695__delegate.call(this, k, x, y, more);
};
G__11695.cljs$lang$maxFixedArity = 3;
G__11695.cljs$lang$applyTo = (function (arglist__11696){
var k = cljs.core.first(arglist__11696);
var x = cljs.core.first(cljs.core.next(arglist__11696));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11696)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11696)));
return G__11695__delegate(k, x, y, more);
});
G__11695.cljs$lang$arity$variadic = G__11695__delegate;
return G__11695;
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
var temp__3974__auto____11699 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11699)
{var s__11700 = temp__3974__auto____11699;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11700),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11700)));
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
var temp__3974__auto____11703 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11703)
{var s__11704 = temp__3974__auto____11703;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11704))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11704),take_while.call(null,pred,cljs.core.rest.call(null,s__11704)));
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
var comp__11706 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11706.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__11718 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11719 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11719))
{var vec__11720__11721 = temp__3974__auto____11719;
var e__11722 = cljs.core.nth.call(null,vec__11720__11721,0,null);
var s__11723 = vec__11720__11721;
if(cljs.core.truth_(include__11718.call(null,e__11722)))
{return s__11723;
} else
{return cljs.core.next.call(null,s__11723);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11718,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11724 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11724))
{var vec__11725__11726 = temp__3974__auto____11724;
var e__11727 = cljs.core.nth.call(null,vec__11725__11726,0,null);
var s__11728 = vec__11725__11726;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11727))?s__11728:cljs.core.next.call(null,s__11728)));
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
var include__11740 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11741 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11741))
{var vec__11742__11743 = temp__3974__auto____11741;
var e__11744 = cljs.core.nth.call(null,vec__11742__11743,0,null);
var s__11745 = vec__11742__11743;
if(cljs.core.truth_(include__11740.call(null,e__11744)))
{return s__11745;
} else
{return cljs.core.next.call(null,s__11745);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11740,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11746 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11746))
{var vec__11747__11748 = temp__3974__auto____11746;
var e__11749 = cljs.core.nth.call(null,vec__11747__11748,0,null);
var s__11750 = vec__11747__11748;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11749))?s__11750:cljs.core.next.call(null,s__11750)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__11751 = this;
var h__2242__auto____11752 = this__11751.__hash;
if(!((h__2242__auto____11752 == null)))
{return h__2242__auto____11752;
} else
{var h__2242__auto____11753 = cljs.core.hash_coll.call(null,rng);
this__11751.__hash = h__2242__auto____11753;
return h__2242__auto____11753;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11754 = this;
if((this__11754.step > 0))
{if(((this__11754.start + this__11754.step) < this__11754.end))
{return (new cljs.core.Range(this__11754.meta,(this__11754.start + this__11754.step),this__11754.end,this__11754.step,null));
} else
{return null;
}
} else
{if(((this__11754.start + this__11754.step) > this__11754.end))
{return (new cljs.core.Range(this__11754.meta,(this__11754.start + this__11754.step),this__11754.end,this__11754.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11755 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11756 = this;
var this__11757 = this;
return cljs.core.pr_str.call(null,this__11757);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11758 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11759 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11760 = this;
if((this__11760.step > 0))
{if((this__11760.start < this__11760.end))
{return rng;
} else
{return null;
}
} else
{if((this__11760.start > this__11760.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11761 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11761.end - this__11761.start) / this__11761.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11762 = this;
return this__11762.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11763 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11763.meta,(this__11763.start + this__11763.step),this__11763.end,this__11763.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11764 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11765 = this;
return (new cljs.core.Range(meta,this__11765.start,this__11765.end,this__11765.step,this__11765.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11766 = this;
return this__11766.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11767 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11767.start + (n * this__11767.step));
} else
{if((function (){var and__3822__auto____11768 = (this__11767.start > this__11767.end);
if(and__3822__auto____11768)
{return (this__11767.step === 0);
} else
{return and__3822__auto____11768;
}
})())
{return this__11767.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11769 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11769.start + (n * this__11769.step));
} else
{if((function (){var and__3822__auto____11770 = (this__11769.start > this__11769.end);
if(and__3822__auto____11770)
{return (this__11769.step === 0);
} else
{return and__3822__auto____11770;
}
})())
{return this__11769.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11771 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11771.meta);
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
var temp__3974__auto____11774 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11774)
{var s__11775 = temp__3974__auto____11774;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11775),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11775)));
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
var temp__3974__auto____11782 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11782)
{var s__11783 = temp__3974__auto____11782;
var fst__11784 = cljs.core.first.call(null,s__11783);
var fv__11785 = f.call(null,fst__11784);
var run__11786 = cljs.core.cons.call(null,fst__11784,cljs.core.take_while.call(null,(function (p1__11776_SHARP_){
return cljs.core._EQ_.call(null,fv__11785,f.call(null,p1__11776_SHARP_));
}),cljs.core.next.call(null,s__11783)));
return cljs.core.cons.call(null,run__11786,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11786),s__11783))));
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
var temp__3971__auto____11801 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11801)
{var s__11802 = temp__3971__auto____11801;
return reductions.call(null,f,cljs.core.first.call(null,s__11802),cljs.core.rest.call(null,s__11802));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11803 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11803)
{var s__11804 = temp__3974__auto____11803;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11804)),cljs.core.rest.call(null,s__11804));
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
var G__11807 = null;
var G__11807__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11807__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11807__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11807__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11807__4 = (function() { 
var G__11808__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11808 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11808__delegate.call(this, x, y, z, args);
};
G__11808.cljs$lang$maxFixedArity = 3;
G__11808.cljs$lang$applyTo = (function (arglist__11809){
var x = cljs.core.first(arglist__11809);
var y = cljs.core.first(cljs.core.next(arglist__11809));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11809)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11809)));
return G__11808__delegate(x, y, z, args);
});
G__11808.cljs$lang$arity$variadic = G__11808__delegate;
return G__11808;
})()
;
G__11807 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11807__0.call(this);
case 1:
return G__11807__1.call(this,x);
case 2:
return G__11807__2.call(this,x,y);
case 3:
return G__11807__3.call(this,x,y,z);
default:
return G__11807__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11807.cljs$lang$maxFixedArity = 3;
G__11807.cljs$lang$applyTo = G__11807__4.cljs$lang$applyTo;
return G__11807;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11810 = null;
var G__11810__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11810__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11810__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11810__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11810__4 = (function() { 
var G__11811__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11811 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11811__delegate.call(this, x, y, z, args);
};
G__11811.cljs$lang$maxFixedArity = 3;
G__11811.cljs$lang$applyTo = (function (arglist__11812){
var x = cljs.core.first(arglist__11812);
var y = cljs.core.first(cljs.core.next(arglist__11812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11812)));
return G__11811__delegate(x, y, z, args);
});
G__11811.cljs$lang$arity$variadic = G__11811__delegate;
return G__11811;
})()
;
G__11810 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11810__0.call(this);
case 1:
return G__11810__1.call(this,x);
case 2:
return G__11810__2.call(this,x,y);
case 3:
return G__11810__3.call(this,x,y,z);
default:
return G__11810__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11810.cljs$lang$maxFixedArity = 3;
G__11810.cljs$lang$applyTo = G__11810__4.cljs$lang$applyTo;
return G__11810;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11813 = null;
var G__11813__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11813__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11813__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11813__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11813__4 = (function() { 
var G__11814__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11814 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11814__delegate.call(this, x, y, z, args);
};
G__11814.cljs$lang$maxFixedArity = 3;
G__11814.cljs$lang$applyTo = (function (arglist__11815){
var x = cljs.core.first(arglist__11815);
var y = cljs.core.first(cljs.core.next(arglist__11815));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11815)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11815)));
return G__11814__delegate(x, y, z, args);
});
G__11814.cljs$lang$arity$variadic = G__11814__delegate;
return G__11814;
})()
;
G__11813 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11813__0.call(this);
case 1:
return G__11813__1.call(this,x);
case 2:
return G__11813__2.call(this,x,y);
case 3:
return G__11813__3.call(this,x,y,z);
default:
return G__11813__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11813.cljs$lang$maxFixedArity = 3;
G__11813.cljs$lang$applyTo = G__11813__4.cljs$lang$applyTo;
return G__11813;
})()
});
var juxt__4 = (function() { 
var G__11816__delegate = function (f,g,h,fs){
var fs__11806 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11817 = null;
var G__11817__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11787_SHARP_,p2__11788_SHARP_){
return cljs.core.conj.call(null,p1__11787_SHARP_,p2__11788_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11806);
});
var G__11817__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11789_SHARP_,p2__11790_SHARP_){
return cljs.core.conj.call(null,p1__11789_SHARP_,p2__11790_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11806);
});
var G__11817__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11791_SHARP_,p2__11792_SHARP_){
return cljs.core.conj.call(null,p1__11791_SHARP_,p2__11792_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11806);
});
var G__11817__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11793_SHARP_,p2__11794_SHARP_){
return cljs.core.conj.call(null,p1__11793_SHARP_,p2__11794_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11806);
});
var G__11817__4 = (function() { 
var G__11818__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11795_SHARP_,p2__11796_SHARP_){
return cljs.core.conj.call(null,p1__11795_SHARP_,cljs.core.apply.call(null,p2__11796_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11806);
};
var G__11818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11818__delegate.call(this, x, y, z, args);
};
G__11818.cljs$lang$maxFixedArity = 3;
G__11818.cljs$lang$applyTo = (function (arglist__11819){
var x = cljs.core.first(arglist__11819);
var y = cljs.core.first(cljs.core.next(arglist__11819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11819)));
return G__11818__delegate(x, y, z, args);
});
G__11818.cljs$lang$arity$variadic = G__11818__delegate;
return G__11818;
})()
;
G__11817 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11817__0.call(this);
case 1:
return G__11817__1.call(this,x);
case 2:
return G__11817__2.call(this,x,y);
case 3:
return G__11817__3.call(this,x,y,z);
default:
return G__11817__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11817.cljs$lang$maxFixedArity = 3;
G__11817.cljs$lang$applyTo = G__11817__4.cljs$lang$applyTo;
return G__11817;
})()
};
var G__11816 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11816__delegate.call(this, f, g, h, fs);
};
G__11816.cljs$lang$maxFixedArity = 3;
G__11816.cljs$lang$applyTo = (function (arglist__11820){
var f = cljs.core.first(arglist__11820);
var g = cljs.core.first(cljs.core.next(arglist__11820));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11820)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11820)));
return G__11816__delegate(f, g, h, fs);
});
G__11816.cljs$lang$arity$variadic = G__11816__delegate;
return G__11816;
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
var G__11823 = cljs.core.next.call(null,coll);
coll = G__11823;
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
if(cljs.core.truth_((function (){var and__3822__auto____11822 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11822)
{return (n > 0);
} else
{return and__3822__auto____11822;
}
})()))
{{
var G__11824 = (n - 1);
var G__11825 = cljs.core.next.call(null,coll);
n = G__11824;
coll = G__11825;
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
var matches__11827 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11827),s))
{if((cljs.core.count.call(null,matches__11827) === 1))
{return cljs.core.first.call(null,matches__11827);
} else
{return cljs.core.vec.call(null,matches__11827);
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
var matches__11829 = re.exec(s);
if((matches__11829 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11829) === 1))
{return cljs.core.first.call(null,matches__11829);
} else
{return cljs.core.vec.call(null,matches__11829);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11834 = cljs.core.re_find.call(null,re,s);
var match_idx__11835 = s.search(re);
var match_str__11836 = ((cljs.core.coll_QMARK_.call(null,match_data__11834))?cljs.core.first.call(null,match_data__11834):match_data__11834);
var post_match__11837 = cljs.core.subs.call(null,s,(match_idx__11835 + cljs.core.count.call(null,match_str__11836)));
if(cljs.core.truth_(match_data__11834))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11834,re_seq.call(null,re,post_match__11837));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11844__11845 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11846 = cljs.core.nth.call(null,vec__11844__11845,0,null);
var flags__11847 = cljs.core.nth.call(null,vec__11844__11845,1,null);
var pattern__11848 = cljs.core.nth.call(null,vec__11844__11845,2,null);
return (new RegExp(pattern__11848,flags__11847));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11838_SHARP_){
return print_one.call(null,p1__11838_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11858 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11858))
{var and__3822__auto____11862 = (function (){var G__11859__11860 = obj;
if(G__11859__11860)
{if((function (){var or__3824__auto____11861 = (G__11859__11860.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11861)
{return or__3824__auto____11861;
} else
{return G__11859__11860.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11859__11860.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11859__11860);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11859__11860);
}
})();
if(cljs.core.truth_(and__3822__auto____11862))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11862;
}
} else
{return and__3822__auto____11858;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11863 = !((obj == null));
if(and__3822__auto____11863)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11863;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11864__11865 = obj;
if(G__11864__11865)
{if((function (){var or__3824__auto____11866 = (G__11864__11865.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11866)
{return or__3824__auto____11866;
} else
{return G__11864__11865.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11864__11865.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11864__11865);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11864__11865);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11886 = (new goog.string.StringBuffer());
var G__11887__11888 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11887__11888)
{var string__11889 = cljs.core.first.call(null,G__11887__11888);
var G__11887__11890 = G__11887__11888;
while(true){
sb__11886.append(string__11889);
var temp__3974__auto____11891 = cljs.core.next.call(null,G__11887__11890);
if(temp__3974__auto____11891)
{var G__11887__11892 = temp__3974__auto____11891;
{
var G__11905 = cljs.core.first.call(null,G__11887__11892);
var G__11906 = G__11887__11892;
string__11889 = G__11905;
G__11887__11890 = G__11906;
continue;
}
} else
{}
break;
}
} else
{}
var G__11893__11894 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11893__11894)
{var obj__11895 = cljs.core.first.call(null,G__11893__11894);
var G__11893__11896 = G__11893__11894;
while(true){
sb__11886.append(" ");
var G__11897__11898 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11895,opts));
if(G__11897__11898)
{var string__11899 = cljs.core.first.call(null,G__11897__11898);
var G__11897__11900 = G__11897__11898;
while(true){
sb__11886.append(string__11899);
var temp__3974__auto____11901 = cljs.core.next.call(null,G__11897__11900);
if(temp__3974__auto____11901)
{var G__11897__11902 = temp__3974__auto____11901;
{
var G__11907 = cljs.core.first.call(null,G__11897__11902);
var G__11908 = G__11897__11902;
string__11899 = G__11907;
G__11897__11900 = G__11908;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11903 = cljs.core.next.call(null,G__11893__11896);
if(temp__3974__auto____11903)
{var G__11893__11904 = temp__3974__auto____11903;
{
var G__11909 = cljs.core.first.call(null,G__11893__11904);
var G__11910 = G__11893__11904;
obj__11895 = G__11909;
G__11893__11896 = G__11910;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11886;
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
var sb__11912 = cljs.core.pr_sb.call(null,objs,opts);
sb__11912.append("\n");
return [cljs.core.str(sb__11912)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11931__11932 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11931__11932)
{var string__11933 = cljs.core.first.call(null,G__11931__11932);
var G__11931__11934 = G__11931__11932;
while(true){
cljs.core.string_print.call(null,string__11933);
var temp__3974__auto____11935 = cljs.core.next.call(null,G__11931__11934);
if(temp__3974__auto____11935)
{var G__11931__11936 = temp__3974__auto____11935;
{
var G__11949 = cljs.core.first.call(null,G__11931__11936);
var G__11950 = G__11931__11936;
string__11933 = G__11949;
G__11931__11934 = G__11950;
continue;
}
} else
{}
break;
}
} else
{}
var G__11937__11938 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11937__11938)
{var obj__11939 = cljs.core.first.call(null,G__11937__11938);
var G__11937__11940 = G__11937__11938;
while(true){
cljs.core.string_print.call(null," ");
var G__11941__11942 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11939,opts));
if(G__11941__11942)
{var string__11943 = cljs.core.first.call(null,G__11941__11942);
var G__11941__11944 = G__11941__11942;
while(true){
cljs.core.string_print.call(null,string__11943);
var temp__3974__auto____11945 = cljs.core.next.call(null,G__11941__11944);
if(temp__3974__auto____11945)
{var G__11941__11946 = temp__3974__auto____11945;
{
var G__11951 = cljs.core.first.call(null,G__11941__11946);
var G__11952 = G__11941__11946;
string__11943 = G__11951;
G__11941__11944 = G__11952;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11947 = cljs.core.next.call(null,G__11937__11940);
if(temp__3974__auto____11947)
{var G__11937__11948 = temp__3974__auto____11947;
{
var G__11953 = cljs.core.first.call(null,G__11937__11948);
var G__11954 = G__11937__11948;
obj__11939 = G__11953;
G__11937__11940 = G__11954;
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
pr_str.cljs$lang$applyTo = (function (arglist__11955){
var objs = cljs.core.seq(arglist__11955);;
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
prn_str.cljs$lang$applyTo = (function (arglist__11956){
var objs = cljs.core.seq(arglist__11956);;
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
pr.cljs$lang$applyTo = (function (arglist__11957){
var objs = cljs.core.seq(arglist__11957);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__11958){
var objs = cljs.core.seq(arglist__11958);;
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
print_str.cljs$lang$applyTo = (function (arglist__11959){
var objs = cljs.core.seq(arglist__11959);;
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
println.cljs$lang$applyTo = (function (arglist__11960){
var objs = cljs.core.seq(arglist__11960);;
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
println_str.cljs$lang$applyTo = (function (arglist__11961){
var objs = cljs.core.seq(arglist__11961);;
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
prn.cljs$lang$applyTo = (function (arglist__11962){
var objs = cljs.core.seq(arglist__11962);;
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
printf.cljs$lang$applyTo = (function (arglist__11963){
var fmt = cljs.core.first(arglist__11963);
var args = cljs.core.rest(arglist__11963);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11964 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11964,"{",", ","}",opts,coll);
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
var pr_pair__11965 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11965,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11966 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11966,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11967 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11967))
{var nspc__11968 = temp__3974__auto____11967;
return [cljs.core.str(nspc__11968),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11969 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11969))
{var nspc__11970 = temp__3974__auto____11969;
return [cljs.core.str(nspc__11970),cljs.core.str("/")].join('');
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
var pr_pair__11971 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11971,"{",", ","}",opts,coll);
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
var normalize__11973 = (function (n,len){
var ns__11972 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11972) < len))
{{
var G__11975 = [cljs.core.str("0"),cljs.core.str(ns__11972)].join('');
ns__11972 = G__11975;
continue;
}
} else
{return ns__11972;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11973.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11973.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11973.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11973.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11973.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11973.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__11974 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11974,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11976 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11977 = this;
var G__11978__11979 = cljs.core.seq.call(null,this__11977.watches);
if(G__11978__11979)
{var G__11981__11983 = cljs.core.first.call(null,G__11978__11979);
var vec__11982__11984 = G__11981__11983;
var key__11985 = cljs.core.nth.call(null,vec__11982__11984,0,null);
var f__11986 = cljs.core.nth.call(null,vec__11982__11984,1,null);
var G__11978__11987 = G__11978__11979;
var G__11981__11988 = G__11981__11983;
var G__11978__11989 = G__11978__11987;
while(true){
var vec__11990__11991 = G__11981__11988;
var key__11992 = cljs.core.nth.call(null,vec__11990__11991,0,null);
var f__11993 = cljs.core.nth.call(null,vec__11990__11991,1,null);
var G__11978__11994 = G__11978__11989;
f__11993.call(null,key__11992,this$,oldval,newval);
var temp__3974__auto____11995 = cljs.core.next.call(null,G__11978__11994);
if(temp__3974__auto____11995)
{var G__11978__11996 = temp__3974__auto____11995;
{
var G__12003 = cljs.core.first.call(null,G__11978__11996);
var G__12004 = G__11978__11996;
G__11981__11988 = G__12003;
G__11978__11989 = G__12004;
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
var this__11997 = this;
return this$.watches = cljs.core.assoc.call(null,this__11997.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11998 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11998.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11999 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11999.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12000 = this;
return this__12000.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12001 = this;
return this__12001.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12002 = this;
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
var G__12016__delegate = function (x,p__12005){
var map__12011__12012 = p__12005;
var map__12011__12013 = ((cljs.core.seq_QMARK_.call(null,map__12011__12012))?cljs.core.apply.call(null,cljs.core.hash_map,map__12011__12012):map__12011__12012);
var validator__12014 = cljs.core._lookup.call(null,map__12011__12013,"\uFDD0'validator",null);
var meta__12015 = cljs.core._lookup.call(null,map__12011__12013,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12015,validator__12014,null));
};
var G__12016 = function (x,var_args){
var p__12005 = null;
if (goog.isDef(var_args)) {
  p__12005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12016__delegate.call(this, x, p__12005);
};
G__12016.cljs$lang$maxFixedArity = 1;
G__12016.cljs$lang$applyTo = (function (arglist__12017){
var x = cljs.core.first(arglist__12017);
var p__12005 = cljs.core.rest(arglist__12017);
return G__12016__delegate(x, p__12005);
});
G__12016.cljs$lang$arity$variadic = G__12016__delegate;
return G__12016;
})()
;
atom = function(x,var_args){
var p__12005 = var_args;
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
var temp__3974__auto____12021 = a.validator;
if(cljs.core.truth_(temp__3974__auto____12021))
{var validate__12022 = temp__3974__auto____12021;
if(cljs.core.truth_(validate__12022.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__12023 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12023,new_value);
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
var G__12024__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12024 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12024__delegate.call(this, a, f, x, y, z, more);
};
G__12024.cljs$lang$maxFixedArity = 5;
G__12024.cljs$lang$applyTo = (function (arglist__12025){
var a = cljs.core.first(arglist__12025);
var f = cljs.core.first(cljs.core.next(arglist__12025));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12025)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12025))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12025)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12025)))));
return G__12024__delegate(a, f, x, y, z, more);
});
G__12024.cljs$lang$arity$variadic = G__12024__delegate;
return G__12024;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12026){
var iref = cljs.core.first(arglist__12026);
var f = cljs.core.first(cljs.core.next(arglist__12026));
var args = cljs.core.rest(cljs.core.next(arglist__12026));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__12027 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12027.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12028 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12028.state,(function (p__12029){
var map__12030__12031 = p__12029;
var map__12030__12032 = ((cljs.core.seq_QMARK_.call(null,map__12030__12031))?cljs.core.apply.call(null,cljs.core.hash_map,map__12030__12031):map__12030__12031);
var curr_state__12033 = map__12030__12032;
var done__12034 = cljs.core._lookup.call(null,map__12030__12032,"\uFDD0'done",null);
if(cljs.core.truth_(done__12034))
{return curr_state__12033;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12028.f.call(null)});
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
var map__12055__12056 = options;
var map__12055__12057 = ((cljs.core.seq_QMARK_.call(null,map__12055__12056))?cljs.core.apply.call(null,cljs.core.hash_map,map__12055__12056):map__12055__12056);
var keywordize_keys__12058 = cljs.core._lookup.call(null,map__12055__12057,"\uFDD0'keywordize-keys",null);
var keyfn__12059 = (cljs.core.truth_(keywordize_keys__12058)?cljs.core.keyword:cljs.core.str);
var f__12074 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2512__auto____12073 = (function iter__12067(s__12068){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12068__12071 = s__12068;
while(true){
if(cljs.core.seq.call(null,s__12068__12071))
{var k__12072 = cljs.core.first.call(null,s__12068__12071);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12059.call(null,k__12072),thisfn.call(null,(x[k__12072]))], true),iter__12067.call(null,cljs.core.rest.call(null,s__12068__12071)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2512__auto____12073.call(null,cljs.core.js_keys.call(null,x));
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
return f__12074.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12075){
var x = cljs.core.first(arglist__12075);
var options = cljs.core.rest(arglist__12075);
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
var mem__12080 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12084__delegate = function (args){
var temp__3971__auto____12081 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12080),args,null);
if(cljs.core.truth_(temp__3971__auto____12081))
{var v__12082 = temp__3971__auto____12081;
return v__12082;
} else
{var ret__12083 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12080,cljs.core.assoc,args,ret__12083);
return ret__12083;
}
};
var G__12084 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12084__delegate.call(this, args);
};
G__12084.cljs$lang$maxFixedArity = 0;
G__12084.cljs$lang$applyTo = (function (arglist__12085){
var args = cljs.core.seq(arglist__12085);;
return G__12084__delegate(args);
});
G__12084.cljs$lang$arity$variadic = G__12084__delegate;
return G__12084;
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
var ret__12087 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12087))
{{
var G__12088 = ret__12087;
f = G__12088;
continue;
}
} else
{return ret__12087;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12089__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12089 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12089__delegate.call(this, f, args);
};
G__12089.cljs$lang$maxFixedArity = 1;
G__12089.cljs$lang$applyTo = (function (arglist__12090){
var f = cljs.core.first(arglist__12090);
var args = cljs.core.rest(arglist__12090);
return G__12089__delegate(f, args);
});
G__12089.cljs$lang$arity$variadic = G__12089__delegate;
return G__12089;
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
var k__12092 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12092,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12092,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____12101 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____12101)
{return or__3824__auto____12101;
} else
{var or__3824__auto____12102 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____12102)
{return or__3824__auto____12102;
} else
{var and__3822__auto____12103 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____12103)
{var and__3822__auto____12104 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____12104)
{var and__3822__auto____12105 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____12105)
{var ret__12106 = true;
var i__12107 = 0;
while(true){
if((function (){var or__3824__auto____12108 = cljs.core.not.call(null,ret__12106);
if(or__3824__auto____12108)
{return or__3824__auto____12108;
} else
{return (i__12107 === cljs.core.count.call(null,parent));
}
})())
{return ret__12106;
} else
{{
var G__12109 = isa_QMARK_.call(null,h,child.call(null,i__12107),parent.call(null,i__12107));
var G__12110 = (i__12107 + 1);
ret__12106 = G__12109;
i__12107 = G__12110;
continue;
}
}
break;
}
} else
{return and__3822__auto____12105;
}
} else
{return and__3822__auto____12104;
}
} else
{return and__3822__auto____12103;
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
var tp__12119 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12120 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12121 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12122 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____12123 = ((cljs.core.contains_QMARK_.call(null,tp__12119.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12121.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12121.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12119,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12122.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12120,parent,ta__12121),"\uFDD0'descendants":tf__12122.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12121,tag,td__12120)});
})());
if(cljs.core.truth_(or__3824__auto____12123))
{return or__3824__auto____12123;
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
var parentMap__12128 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12129 = (cljs.core.truth_(parentMap__12128.call(null,tag))?cljs.core.disj.call(null,parentMap__12128.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12130 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12129))?cljs.core.assoc.call(null,parentMap__12128,tag,childsParents__12129):cljs.core.dissoc.call(null,parentMap__12128,tag));
var deriv_seq__12131 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12111_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12111_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12111_SHARP_),cljs.core.second.call(null,p1__12111_SHARP_)));
}),cljs.core.seq.call(null,newParents__12130)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12128.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12112_SHARP_,p2__12113_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12112_SHARP_,p2__12113_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12131));
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
var xprefs__12139 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____12141 = (cljs.core.truth_((function (){var and__3822__auto____12140 = xprefs__12139;
if(cljs.core.truth_(and__3822__auto____12140))
{return xprefs__12139.call(null,y);
} else
{return and__3822__auto____12140;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____12141))
{return or__3824__auto____12141;
} else
{var or__3824__auto____12143 = (function (){var ps__12142 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12142) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12142),prefer_table)))
{} else
{}
{
var G__12146 = cljs.core.rest.call(null,ps__12142);
ps__12142 = G__12146;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12143))
{return or__3824__auto____12143;
} else
{var or__3824__auto____12145 = (function (){var ps__12144 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12144) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12144),y,prefer_table)))
{} else
{}
{
var G__12147 = cljs.core.rest.call(null,ps__12144);
ps__12144 = G__12147;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12145))
{return or__3824__auto____12145;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____12149 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____12149))
{return or__3824__auto____12149;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12167 = cljs.core.reduce.call(null,(function (be,p__12159){
var vec__12160__12161 = p__12159;
var k__12162 = cljs.core.nth.call(null,vec__12160__12161,0,null);
var ___12163 = cljs.core.nth.call(null,vec__12160__12161,1,null);
var e__12164 = vec__12160__12161;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12162))
{var be2__12166 = (cljs.core.truth_((function (){var or__3824__auto____12165 = (be == null);
if(or__3824__auto____12165)
{return or__3824__auto____12165;
} else
{return cljs.core.dominates.call(null,k__12162,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12164:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12166),k__12162,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12162),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12166)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12166;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12167))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12167));
return cljs.core.second.call(null,best_entry__12167);
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
if((function (){var and__3822__auto____12172 = mf;
if(and__3822__auto____12172)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____12172;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2413__auto____12173 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12174 = (cljs.core._reset[goog.typeOf(x__2413__auto____12173)]);
if(or__3824__auto____12174)
{return or__3824__auto____12174;
} else
{var or__3824__auto____12175 = (cljs.core._reset["_"]);
if(or__3824__auto____12175)
{return or__3824__auto____12175;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____12180 = mf;
if(and__3822__auto____12180)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____12180;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2413__auto____12181 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12182 = (cljs.core._add_method[goog.typeOf(x__2413__auto____12181)]);
if(or__3824__auto____12182)
{return or__3824__auto____12182;
} else
{var or__3824__auto____12183 = (cljs.core._add_method["_"]);
if(or__3824__auto____12183)
{return or__3824__auto____12183;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____12188 = mf;
if(and__3822__auto____12188)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____12188;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2413__auto____12189 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12190 = (cljs.core._remove_method[goog.typeOf(x__2413__auto____12189)]);
if(or__3824__auto____12190)
{return or__3824__auto____12190;
} else
{var or__3824__auto____12191 = (cljs.core._remove_method["_"]);
if(or__3824__auto____12191)
{return or__3824__auto____12191;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____12196 = mf;
if(and__3822__auto____12196)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____12196;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2413__auto____12197 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12198 = (cljs.core._prefer_method[goog.typeOf(x__2413__auto____12197)]);
if(or__3824__auto____12198)
{return or__3824__auto____12198;
} else
{var or__3824__auto____12199 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____12199)
{return or__3824__auto____12199;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____12204 = mf;
if(and__3822__auto____12204)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____12204;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2413__auto____12205 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12206 = (cljs.core._get_method[goog.typeOf(x__2413__auto____12205)]);
if(or__3824__auto____12206)
{return or__3824__auto____12206;
} else
{var or__3824__auto____12207 = (cljs.core._get_method["_"]);
if(or__3824__auto____12207)
{return or__3824__auto____12207;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____12212 = mf;
if(and__3822__auto____12212)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____12212;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2413__auto____12213 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12214 = (cljs.core._methods[goog.typeOf(x__2413__auto____12213)]);
if(or__3824__auto____12214)
{return or__3824__auto____12214;
} else
{var or__3824__auto____12215 = (cljs.core._methods["_"]);
if(or__3824__auto____12215)
{return or__3824__auto____12215;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____12220 = mf;
if(and__3822__auto____12220)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____12220;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2413__auto____12221 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12222 = (cljs.core._prefers[goog.typeOf(x__2413__auto____12221)]);
if(or__3824__auto____12222)
{return or__3824__auto____12222;
} else
{var or__3824__auto____12223 = (cljs.core._prefers["_"]);
if(or__3824__auto____12223)
{return or__3824__auto____12223;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____12228 = mf;
if(and__3822__auto____12228)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____12228;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2413__auto____12229 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12230 = (cljs.core._dispatch[goog.typeOf(x__2413__auto____12229)]);
if(or__3824__auto____12230)
{return or__3824__auto____12230;
} else
{var or__3824__auto____12231 = (cljs.core._dispatch["_"]);
if(or__3824__auto____12231)
{return or__3824__auto____12231;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12234 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12235 = cljs.core._get_method.call(null,mf,dispatch_val__12234);
if(cljs.core.truth_(target_fn__12235))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12234)].join('')));
}
return cljs.core.apply.call(null,target_fn__12235,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12236 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12237 = this;
cljs.core.swap_BANG_.call(null,this__12237.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12237.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12237.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12237.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12238 = this;
cljs.core.swap_BANG_.call(null,this__12238.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12238.method_cache,this__12238.method_table,this__12238.cached_hierarchy,this__12238.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12239 = this;
cljs.core.swap_BANG_.call(null,this__12239.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12239.method_cache,this__12239.method_table,this__12239.cached_hierarchy,this__12239.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12240 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12240.cached_hierarchy),cljs.core.deref.call(null,this__12240.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12240.method_cache,this__12240.method_table,this__12240.cached_hierarchy,this__12240.hierarchy);
}
var temp__3971__auto____12241 = cljs.core.deref.call(null,this__12240.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____12241))
{var target_fn__12242 = temp__3971__auto____12241;
return target_fn__12242;
} else
{var temp__3971__auto____12243 = cljs.core.find_and_cache_best_method.call(null,this__12240.name,dispatch_val,this__12240.hierarchy,this__12240.method_table,this__12240.prefer_table,this__12240.method_cache,this__12240.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____12243))
{var target_fn__12244 = temp__3971__auto____12243;
return target_fn__12244;
} else
{return cljs.core.deref.call(null,this__12240.method_table).call(null,this__12240.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12245 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12245.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12245.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12245.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12245.method_cache,this__12245.method_table,this__12245.cached_hierarchy,this__12245.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12246 = this;
return cljs.core.deref.call(null,this__12246.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12247 = this;
return cljs.core.deref.call(null,this__12247.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12248 = this;
return cljs.core.do_dispatch.call(null,mf,this__12248.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12250__delegate = function (_,args){
var self__12249 = this;
return cljs.core._dispatch.call(null,self__12249,args);
};
var G__12250 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12250__delegate.call(this, _, args);
};
G__12250.cljs$lang$maxFixedArity = 1;
G__12250.cljs$lang$applyTo = (function (arglist__12251){
var _ = cljs.core.first(arglist__12251);
var args = cljs.core.rest(arglist__12251);
return G__12250__delegate(_, args);
});
G__12250.cljs$lang$arity$variadic = G__12250__delegate;
return G__12250;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12252 = this;
return cljs.core._dispatch.call(null,self__12252,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2359__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12253 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12255,_){
var this__12254 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12254.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12256 = this;
var and__3822__auto____12257 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____12257)
{return (this__12256.uuid === other.uuid);
} else
{return and__3822__auto____12257;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12258 = this;
var this__12259 = this;
return cljs.core.pr_str.call(null,this__12259);
});
cljs.core.UUID;
