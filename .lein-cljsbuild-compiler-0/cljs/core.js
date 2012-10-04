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
var x__8317 = (((x == null))?null:x);
if((p[goog.typeOf(x__8317)]))
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
var G__8318__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8318 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8318__delegate.call(this, array, i, idxs);
};
G__8318.cljs$lang$maxFixedArity = 2;
G__8318.cljs$lang$applyTo = (function (arglist__8319){
var array = cljs.core.first(arglist__8319);
var i = cljs.core.first(cljs.core.next(arglist__8319));
var idxs = cljs.core.rest(cljs.core.next(arglist__8319));
return G__8318__delegate(array, i, idxs);
});
G__8318.cljs$lang$arity$variadic = G__8318__delegate;
return G__8318;
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
if((function (){var and__3822__auto____8404 = this$;
if(and__3822__auto____8404)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____8404;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2413__auto____8405 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8406 = (cljs.core._invoke[goog.typeOf(x__2413__auto____8405)]);
if(or__3824__auto____8406)
{return or__3824__auto____8406;
} else
{var or__3824__auto____8407 = (cljs.core._invoke["_"]);
if(or__3824__auto____8407)
{return or__3824__auto____8407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____8408 = this$;
if(and__3822__auto____8408)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____8408;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____8412 = this$;
if(and__3822__auto____8412)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____8412;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____8416 = this$;
if(and__3822__auto____8416)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____8416;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8420 = this$;
if(and__3822__auto____8420)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8420;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8424 = this$;
if(and__3822__auto____8424)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8424;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8428 = this$;
if(and__3822__auto____8428)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8428;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8432 = this$;
if(and__3822__auto____8432)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8432;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8436 = this$;
if(and__3822__auto____8436)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8436;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8440 = this$;
if(and__3822__auto____8440)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8440;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8444 = this$;
if(and__3822__auto____8444)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8444;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8448 = this$;
if(and__3822__auto____8448)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8448;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8452 = this$;
if(and__3822__auto____8452)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8452;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8456 = this$;
if(and__3822__auto____8456)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8456;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8460 = this$;
if(and__3822__auto____8460)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8460;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8464 = this$;
if(and__3822__auto____8464)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8464;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8468 = this$;
if(and__3822__auto____8468)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8468;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8472 = this$;
if(and__3822__auto____8472)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8472;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8476 = this$;
if(and__3822__auto____8476)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8476;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8480 = this$;
if(and__3822__auto____8480)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8480;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8484 = this$;
if(and__3822__auto____8484)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8484;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if((function (){var and__3822__auto____8492 = coll;
if(and__3822__auto____8492)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8492;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2413__auto____8493 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8494 = (cljs.core._count[goog.typeOf(x__2413__auto____8493)]);
if(or__3824__auto____8494)
{return or__3824__auto____8494;
} else
{var or__3824__auto____8495 = (cljs.core._count["_"]);
if(or__3824__auto____8495)
{return or__3824__auto____8495;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8500 = coll;
if(and__3822__auto____8500)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8500;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2413__auto____8501 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8502 = (cljs.core._empty[goog.typeOf(x__2413__auto____8501)]);
if(or__3824__auto____8502)
{return or__3824__auto____8502;
} else
{var or__3824__auto____8503 = (cljs.core._empty["_"]);
if(or__3824__auto____8503)
{return or__3824__auto____8503;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8508 = coll;
if(and__3822__auto____8508)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8508;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2413__auto____8509 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8510 = (cljs.core._conj[goog.typeOf(x__2413__auto____8509)]);
if(or__3824__auto____8510)
{return or__3824__auto____8510;
} else
{var or__3824__auto____8511 = (cljs.core._conj["_"]);
if(or__3824__auto____8511)
{return or__3824__auto____8511;
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
if((function (){var and__3822__auto____8520 = coll;
if(and__3822__auto____8520)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8520;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2413__auto____8521 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8522 = (cljs.core._nth[goog.typeOf(x__2413__auto____8521)]);
if(or__3824__auto____8522)
{return or__3824__auto____8522;
} else
{var or__3824__auto____8523 = (cljs.core._nth["_"]);
if(or__3824__auto____8523)
{return or__3824__auto____8523;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8524 = coll;
if(and__3822__auto____8524)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8524;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
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
if((function (){var and__3822__auto____8532 = coll;
if(and__3822__auto____8532)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8532;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2413__auto____8533 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8534 = (cljs.core._first[goog.typeOf(x__2413__auto____8533)]);
if(or__3824__auto____8534)
{return or__3824__auto____8534;
} else
{var or__3824__auto____8535 = (cljs.core._first["_"]);
if(or__3824__auto____8535)
{return or__3824__auto____8535;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8540 = coll;
if(and__3822__auto____8540)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8540;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2413__auto____8541 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8542 = (cljs.core._rest[goog.typeOf(x__2413__auto____8541)]);
if(or__3824__auto____8542)
{return or__3824__auto____8542;
} else
{var or__3824__auto____8543 = (cljs.core._rest["_"]);
if(or__3824__auto____8543)
{return or__3824__auto____8543;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8548 = coll;
if(and__3822__auto____8548)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8548;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2413__auto____8549 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8550 = (cljs.core._next[goog.typeOf(x__2413__auto____8549)]);
if(or__3824__auto____8550)
{return or__3824__auto____8550;
} else
{var or__3824__auto____8551 = (cljs.core._next["_"]);
if(or__3824__auto____8551)
{return or__3824__auto____8551;
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
if((function (){var and__3822__auto____8560 = o;
if(and__3822__auto____8560)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8560;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2413__auto____8561 = (((o == null))?null:o);
return (function (){var or__3824__auto____8562 = (cljs.core._lookup[goog.typeOf(x__2413__auto____8561)]);
if(or__3824__auto____8562)
{return or__3824__auto____8562;
} else
{var or__3824__auto____8563 = (cljs.core._lookup["_"]);
if(or__3824__auto____8563)
{return or__3824__auto____8563;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8564 = o;
if(and__3822__auto____8564)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8564;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
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
if((function (){var and__3822__auto____8572 = coll;
if(and__3822__auto____8572)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8572;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2413__auto____8573 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8574 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2413__auto____8573)]);
if(or__3824__auto____8574)
{return or__3824__auto____8574;
} else
{var or__3824__auto____8575 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8575)
{return or__3824__auto____8575;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8580 = coll;
if(and__3822__auto____8580)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8580;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2413__auto____8581 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8582 = (cljs.core._assoc[goog.typeOf(x__2413__auto____8581)]);
if(or__3824__auto____8582)
{return or__3824__auto____8582;
} else
{var or__3824__auto____8583 = (cljs.core._assoc["_"]);
if(or__3824__auto____8583)
{return or__3824__auto____8583;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8588 = coll;
if(and__3822__auto____8588)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8588;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2413__auto____8589 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8590 = (cljs.core._dissoc[goog.typeOf(x__2413__auto____8589)]);
if(or__3824__auto____8590)
{return or__3824__auto____8590;
} else
{var or__3824__auto____8591 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8591)
{return or__3824__auto____8591;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8596 = coll;
if(and__3822__auto____8596)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8596;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2413__auto____8597 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8598 = (cljs.core._key[goog.typeOf(x__2413__auto____8597)]);
if(or__3824__auto____8598)
{return or__3824__auto____8598;
} else
{var or__3824__auto____8599 = (cljs.core._key["_"]);
if(or__3824__auto____8599)
{return or__3824__auto____8599;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8604 = coll;
if(and__3822__auto____8604)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8604;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2413__auto____8605 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8606 = (cljs.core._val[goog.typeOf(x__2413__auto____8605)]);
if(or__3824__auto____8606)
{return or__3824__auto____8606;
} else
{var or__3824__auto____8607 = (cljs.core._val["_"]);
if(or__3824__auto____8607)
{return or__3824__auto____8607;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8612 = coll;
if(and__3822__auto____8612)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8612;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2413__auto____8613 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8614 = (cljs.core._disjoin[goog.typeOf(x__2413__auto____8613)]);
if(or__3824__auto____8614)
{return or__3824__auto____8614;
} else
{var or__3824__auto____8615 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8615)
{return or__3824__auto____8615;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8620 = coll;
if(and__3822__auto____8620)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8620;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2413__auto____8621 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8622 = (cljs.core._peek[goog.typeOf(x__2413__auto____8621)]);
if(or__3824__auto____8622)
{return or__3824__auto____8622;
} else
{var or__3824__auto____8623 = (cljs.core._peek["_"]);
if(or__3824__auto____8623)
{return or__3824__auto____8623;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8628 = coll;
if(and__3822__auto____8628)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8628;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2413__auto____8629 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8630 = (cljs.core._pop[goog.typeOf(x__2413__auto____8629)]);
if(or__3824__auto____8630)
{return or__3824__auto____8630;
} else
{var or__3824__auto____8631 = (cljs.core._pop["_"]);
if(or__3824__auto____8631)
{return or__3824__auto____8631;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8636 = coll;
if(and__3822__auto____8636)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8636;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2413__auto____8637 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8638 = (cljs.core._assoc_n[goog.typeOf(x__2413__auto____8637)]);
if(or__3824__auto____8638)
{return or__3824__auto____8638;
} else
{var or__3824__auto____8639 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8639)
{return or__3824__auto____8639;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8644 = o;
if(and__3822__auto____8644)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8644;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2413__auto____8645 = (((o == null))?null:o);
return (function (){var or__3824__auto____8646 = (cljs.core._deref[goog.typeOf(x__2413__auto____8645)]);
if(or__3824__auto____8646)
{return or__3824__auto____8646;
} else
{var or__3824__auto____8647 = (cljs.core._deref["_"]);
if(or__3824__auto____8647)
{return or__3824__auto____8647;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8652 = o;
if(and__3822__auto____8652)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8652;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2413__auto____8653 = (((o == null))?null:o);
return (function (){var or__3824__auto____8654 = (cljs.core._deref_with_timeout[goog.typeOf(x__2413__auto____8653)]);
if(or__3824__auto____8654)
{return or__3824__auto____8654;
} else
{var or__3824__auto____8655 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8655)
{return or__3824__auto____8655;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8660 = o;
if(and__3822__auto____8660)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8660;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2413__auto____8661 = (((o == null))?null:o);
return (function (){var or__3824__auto____8662 = (cljs.core._meta[goog.typeOf(x__2413__auto____8661)]);
if(or__3824__auto____8662)
{return or__3824__auto____8662;
} else
{var or__3824__auto____8663 = (cljs.core._meta["_"]);
if(or__3824__auto____8663)
{return or__3824__auto____8663;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8668 = o;
if(and__3822__auto____8668)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8668;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2413__auto____8669 = (((o == null))?null:o);
return (function (){var or__3824__auto____8670 = (cljs.core._with_meta[goog.typeOf(x__2413__auto____8669)]);
if(or__3824__auto____8670)
{return or__3824__auto____8670;
} else
{var or__3824__auto____8671 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8671)
{return or__3824__auto____8671;
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
if((function (){var and__3822__auto____8680 = coll;
if(and__3822__auto____8680)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8680;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2413__auto____8681 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8682 = (cljs.core._reduce[goog.typeOf(x__2413__auto____8681)]);
if(or__3824__auto____8682)
{return or__3824__auto____8682;
} else
{var or__3824__auto____8683 = (cljs.core._reduce["_"]);
if(or__3824__auto____8683)
{return or__3824__auto____8683;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8684 = coll;
if(and__3822__auto____8684)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8684;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
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
if((function (){var and__3822__auto____8692 = coll;
if(and__3822__auto____8692)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8692;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2413__auto____8693 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8694 = (cljs.core._kv_reduce[goog.typeOf(x__2413__auto____8693)]);
if(or__3824__auto____8694)
{return or__3824__auto____8694;
} else
{var or__3824__auto____8695 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8695)
{return or__3824__auto____8695;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8700 = o;
if(and__3822__auto____8700)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8700;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2413__auto____8701 = (((o == null))?null:o);
return (function (){var or__3824__auto____8702 = (cljs.core._equiv[goog.typeOf(x__2413__auto____8701)]);
if(or__3824__auto____8702)
{return or__3824__auto____8702;
} else
{var or__3824__auto____8703 = (cljs.core._equiv["_"]);
if(or__3824__auto____8703)
{return or__3824__auto____8703;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8708 = o;
if(and__3822__auto____8708)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8708;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2413__auto____8709 = (((o == null))?null:o);
return (function (){var or__3824__auto____8710 = (cljs.core._hash[goog.typeOf(x__2413__auto____8709)]);
if(or__3824__auto____8710)
{return or__3824__auto____8710;
} else
{var or__3824__auto____8711 = (cljs.core._hash["_"]);
if(or__3824__auto____8711)
{return or__3824__auto____8711;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8716 = o;
if(and__3822__auto____8716)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8716;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2413__auto____8717 = (((o == null))?null:o);
return (function (){var or__3824__auto____8718 = (cljs.core._seq[goog.typeOf(x__2413__auto____8717)]);
if(or__3824__auto____8718)
{return or__3824__auto____8718;
} else
{var or__3824__auto____8719 = (cljs.core._seq["_"]);
if(or__3824__auto____8719)
{return or__3824__auto____8719;
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
if((function (){var and__3822__auto____8724 = coll;
if(and__3822__auto____8724)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8724;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2413__auto____8725 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8726 = (cljs.core._rseq[goog.typeOf(x__2413__auto____8725)]);
if(or__3824__auto____8726)
{return or__3824__auto____8726;
} else
{var or__3824__auto____8727 = (cljs.core._rseq["_"]);
if(or__3824__auto____8727)
{return or__3824__auto____8727;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8732 = coll;
if(and__3822__auto____8732)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8732;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2413__auto____8733 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8734 = (cljs.core._sorted_seq[goog.typeOf(x__2413__auto____8733)]);
if(or__3824__auto____8734)
{return or__3824__auto____8734;
} else
{var or__3824__auto____8735 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8735)
{return or__3824__auto____8735;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8740 = coll;
if(and__3822__auto____8740)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8740;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2413__auto____8741 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8742 = (cljs.core._sorted_seq_from[goog.typeOf(x__2413__auto____8741)]);
if(or__3824__auto____8742)
{return or__3824__auto____8742;
} else
{var or__3824__auto____8743 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8743)
{return or__3824__auto____8743;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8748 = coll;
if(and__3822__auto____8748)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8748;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2413__auto____8749 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8750 = (cljs.core._entry_key[goog.typeOf(x__2413__auto____8749)]);
if(or__3824__auto____8750)
{return or__3824__auto____8750;
} else
{var or__3824__auto____8751 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8751)
{return or__3824__auto____8751;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8756 = coll;
if(and__3822__auto____8756)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8756;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2413__auto____8757 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8758 = (cljs.core._comparator[goog.typeOf(x__2413__auto____8757)]);
if(or__3824__auto____8758)
{return or__3824__auto____8758;
} else
{var or__3824__auto____8759 = (cljs.core._comparator["_"]);
if(or__3824__auto____8759)
{return or__3824__auto____8759;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8764 = o;
if(and__3822__auto____8764)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8764;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2413__auto____8765 = (((o == null))?null:o);
return (function (){var or__3824__auto____8766 = (cljs.core._pr_seq[goog.typeOf(x__2413__auto____8765)]);
if(or__3824__auto____8766)
{return or__3824__auto____8766;
} else
{var or__3824__auto____8767 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8767)
{return or__3824__auto____8767;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8772 = d;
if(and__3822__auto____8772)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8772;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2413__auto____8773 = (((d == null))?null:d);
return (function (){var or__3824__auto____8774 = (cljs.core._realized_QMARK_[goog.typeOf(x__2413__auto____8773)]);
if(or__3824__auto____8774)
{return or__3824__auto____8774;
} else
{var or__3824__auto____8775 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8775)
{return or__3824__auto____8775;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8780 = this$;
if(and__3822__auto____8780)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8780;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2413__auto____8781 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8782 = (cljs.core._notify_watches[goog.typeOf(x__2413__auto____8781)]);
if(or__3824__auto____8782)
{return or__3824__auto____8782;
} else
{var or__3824__auto____8783 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8783)
{return or__3824__auto____8783;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8788 = this$;
if(and__3822__auto____8788)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8788;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2413__auto____8789 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8790 = (cljs.core._add_watch[goog.typeOf(x__2413__auto____8789)]);
if(or__3824__auto____8790)
{return or__3824__auto____8790;
} else
{var or__3824__auto____8791 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8791)
{return or__3824__auto____8791;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8796 = this$;
if(and__3822__auto____8796)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8796;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2413__auto____8797 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8798 = (cljs.core._remove_watch[goog.typeOf(x__2413__auto____8797)]);
if(or__3824__auto____8798)
{return or__3824__auto____8798;
} else
{var or__3824__auto____8799 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8799)
{return or__3824__auto____8799;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8804 = coll;
if(and__3822__auto____8804)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8804;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2413__auto____8805 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8806 = (cljs.core._as_transient[goog.typeOf(x__2413__auto____8805)]);
if(or__3824__auto____8806)
{return or__3824__auto____8806;
} else
{var or__3824__auto____8807 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8807)
{return or__3824__auto____8807;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8812 = tcoll;
if(and__3822__auto____8812)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8812;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2413__auto____8813 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8814 = (cljs.core._conj_BANG_[goog.typeOf(x__2413__auto____8813)]);
if(or__3824__auto____8814)
{return or__3824__auto____8814;
} else
{var or__3824__auto____8815 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8815)
{return or__3824__auto____8815;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8820 = tcoll;
if(and__3822__auto____8820)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8820;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2413__auto____8821 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8822 = (cljs.core._persistent_BANG_[goog.typeOf(x__2413__auto____8821)]);
if(or__3824__auto____8822)
{return or__3824__auto____8822;
} else
{var or__3824__auto____8823 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8823)
{return or__3824__auto____8823;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8828 = tcoll;
if(and__3822__auto____8828)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8828;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2413__auto____8829 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8830 = (cljs.core._assoc_BANG_[goog.typeOf(x__2413__auto____8829)]);
if(or__3824__auto____8830)
{return or__3824__auto____8830;
} else
{var or__3824__auto____8831 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8831)
{return or__3824__auto____8831;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8836 = tcoll;
if(and__3822__auto____8836)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8836;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2413__auto____8837 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8838 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2413__auto____8837)]);
if(or__3824__auto____8838)
{return or__3824__auto____8838;
} else
{var or__3824__auto____8839 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8839)
{return or__3824__auto____8839;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8844 = tcoll;
if(and__3822__auto____8844)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8844;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2413__auto____8845 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8846 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2413__auto____8845)]);
if(or__3824__auto____8846)
{return or__3824__auto____8846;
} else
{var or__3824__auto____8847 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8847)
{return or__3824__auto____8847;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8852 = tcoll;
if(and__3822__auto____8852)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8852;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2413__auto____8853 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8854 = (cljs.core._pop_BANG_[goog.typeOf(x__2413__auto____8853)]);
if(or__3824__auto____8854)
{return or__3824__auto____8854;
} else
{var or__3824__auto____8855 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8855)
{return or__3824__auto____8855;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8860 = tcoll;
if(and__3822__auto____8860)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8860;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2413__auto____8861 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8862 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2413__auto____8861)]);
if(or__3824__auto____8862)
{return or__3824__auto____8862;
} else
{var or__3824__auto____8863 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8863)
{return or__3824__auto____8863;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8868 = x;
if(and__3822__auto____8868)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8868;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2413__auto____8869 = (((x == null))?null:x);
return (function (){var or__3824__auto____8870 = (cljs.core._compare[goog.typeOf(x__2413__auto____8869)]);
if(or__3824__auto____8870)
{return or__3824__auto____8870;
} else
{var or__3824__auto____8871 = (cljs.core._compare["_"]);
if(or__3824__auto____8871)
{return or__3824__auto____8871;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8876 = coll;
if(and__3822__auto____8876)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8876;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2413__auto____8877 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8878 = (cljs.core._drop_first[goog.typeOf(x__2413__auto____8877)]);
if(or__3824__auto____8878)
{return or__3824__auto____8878;
} else
{var or__3824__auto____8879 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8879)
{return or__3824__auto____8879;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8884 = coll;
if(and__3822__auto____8884)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8884;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2413__auto____8885 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8886 = (cljs.core._chunked_first[goog.typeOf(x__2413__auto____8885)]);
if(or__3824__auto____8886)
{return or__3824__auto____8886;
} else
{var or__3824__auto____8887 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8887)
{return or__3824__auto____8887;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8892 = coll;
if(and__3822__auto____8892)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8892;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2413__auto____8893 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8894 = (cljs.core._chunked_rest[goog.typeOf(x__2413__auto____8893)]);
if(or__3824__auto____8894)
{return or__3824__auto____8894;
} else
{var or__3824__auto____8895 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8895)
{return or__3824__auto____8895;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8900 = coll;
if(and__3822__auto____8900)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8900;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2413__auto____8901 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8902 = (cljs.core._chunked_next[goog.typeOf(x__2413__auto____8901)]);
if(or__3824__auto____8902)
{return or__3824__auto____8902;
} else
{var or__3824__auto____8903 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8903)
{return or__3824__auto____8903;
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
var or__3824__auto____8905 = (x === y);
if(or__3824__auto____8905)
{return or__3824__auto____8905;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8906__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8907 = y;
var G__8908 = cljs.core.first.call(null,more);
var G__8909 = cljs.core.next.call(null,more);
x = G__8907;
y = G__8908;
more = G__8909;
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
var G__8906 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8906__delegate.call(this, x, y, more);
};
G__8906.cljs$lang$maxFixedArity = 2;
G__8906.cljs$lang$applyTo = (function (arglist__8910){
var x = cljs.core.first(arglist__8910);
var y = cljs.core.first(cljs.core.next(arglist__8910));
var more = cljs.core.rest(cljs.core.next(arglist__8910));
return G__8906__delegate(x, y, more);
});
G__8906.cljs$lang$arity$variadic = G__8906__delegate;
return G__8906;
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
var G__8911 = null;
var G__8911__2 = (function (o,k){
return null;
});
var G__8911__3 = (function (o,k,not_found){
return not_found;
});
G__8911 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8911__2.call(this,o,k);
case 3:
return G__8911__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8911;
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
var G__8912 = null;
var G__8912__2 = (function (_,f){
return f.call(null);
});
var G__8912__3 = (function (_,f,start){
return start;
});
G__8912 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8912__2.call(this,_,f);
case 3:
return G__8912__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8912;
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
var G__8913 = null;
var G__8913__2 = (function (_,n){
return null;
});
var G__8913__3 = (function (_,n,not_found){
return not_found;
});
G__8913 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8913__2.call(this,_,n);
case 3:
return G__8913__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8913;
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
var and__3822__auto____8914 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8914)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8914;
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
var cnt__8927 = cljs.core._count.call(null,cicoll);
if((cnt__8927 === 0))
{return f.call(null);
} else
{var val__8928 = cljs.core._nth.call(null,cicoll,0);
var n__8929 = 1;
while(true){
if((n__8929 < cnt__8927))
{var nval__8930 = f.call(null,val__8928,cljs.core._nth.call(null,cicoll,n__8929));
if(cljs.core.reduced_QMARK_.call(null,nval__8930))
{return cljs.core.deref.call(null,nval__8930);
} else
{{
var G__8939 = nval__8930;
var G__8940 = (n__8929 + 1);
val__8928 = G__8939;
n__8929 = G__8940;
continue;
}
}
} else
{return val__8928;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8931 = cljs.core._count.call(null,cicoll);
var val__8932 = val;
var n__8933 = 0;
while(true){
if((n__8933 < cnt__8931))
{var nval__8934 = f.call(null,val__8932,cljs.core._nth.call(null,cicoll,n__8933));
if(cljs.core.reduced_QMARK_.call(null,nval__8934))
{return cljs.core.deref.call(null,nval__8934);
} else
{{
var G__8941 = nval__8934;
var G__8942 = (n__8933 + 1);
val__8932 = G__8941;
n__8933 = G__8942;
continue;
}
}
} else
{return val__8932;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8935 = cljs.core._count.call(null,cicoll);
var val__8936 = val;
var n__8937 = idx;
while(true){
if((n__8937 < cnt__8935))
{var nval__8938 = f.call(null,val__8936,cljs.core._nth.call(null,cicoll,n__8937));
if(cljs.core.reduced_QMARK_.call(null,nval__8938))
{return cljs.core.deref.call(null,nval__8938);
} else
{{
var G__8943 = nval__8938;
var G__8944 = (n__8937 + 1);
val__8936 = G__8943;
n__8937 = G__8944;
continue;
}
}
} else
{return val__8936;
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
var cnt__8957 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8958 = (arr[0]);
var n__8959 = 1;
while(true){
if((n__8959 < cnt__8957))
{var nval__8960 = f.call(null,val__8958,(arr[n__8959]));
if(cljs.core.reduced_QMARK_.call(null,nval__8960))
{return cljs.core.deref.call(null,nval__8960);
} else
{{
var G__8969 = nval__8960;
var G__8970 = (n__8959 + 1);
val__8958 = G__8969;
n__8959 = G__8970;
continue;
}
}
} else
{return val__8958;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8961 = arr.length;
var val__8962 = val;
var n__8963 = 0;
while(true){
if((n__8963 < cnt__8961))
{var nval__8964 = f.call(null,val__8962,(arr[n__8963]));
if(cljs.core.reduced_QMARK_.call(null,nval__8964))
{return cljs.core.deref.call(null,nval__8964);
} else
{{
var G__8971 = nval__8964;
var G__8972 = (n__8963 + 1);
val__8962 = G__8971;
n__8963 = G__8972;
continue;
}
}
} else
{return val__8962;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8965 = arr.length;
var val__8966 = val;
var n__8967 = idx;
while(true){
if((n__8967 < cnt__8965))
{var nval__8968 = f.call(null,val__8966,(arr[n__8967]));
if(cljs.core.reduced_QMARK_.call(null,nval__8968))
{return cljs.core.deref.call(null,nval__8968);
} else
{{
var G__8973 = nval__8968;
var G__8974 = (n__8967 + 1);
val__8966 = G__8973;
n__8967 = G__8974;
continue;
}
}
} else
{return val__8966;
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
var this__8975 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8976 = this;
if(((this__8976.i + 1) < this__8976.a.length))
{return (new cljs.core.IndexedSeq(this__8976.a,(this__8976.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8977 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8978 = this;
var c__8979 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8979 > 0))
{return (new cljs.core.RSeq(coll,(c__8979 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8980 = this;
var this__8981 = this;
return cljs.core.pr_str.call(null,this__8981);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8982 = this;
if(cljs.core.counted_QMARK_.call(null,this__8982.a))
{return cljs.core.ci_reduce.call(null,this__8982.a,f,(this__8982.a[this__8982.i]),(this__8982.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8982.a[this__8982.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8983 = this;
if(cljs.core.counted_QMARK_.call(null,this__8983.a))
{return cljs.core.ci_reduce.call(null,this__8983.a,f,start,this__8983.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8984 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8985 = this;
return (this__8985.a.length - this__8985.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8986 = this;
return (this__8986.a[this__8986.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8987 = this;
if(((this__8987.i + 1) < this__8987.a.length))
{return (new cljs.core.IndexedSeq(this__8987.a,(this__8987.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8989 = this;
var i__8990 = (n + this__8989.i);
if((i__8990 < this__8989.a.length))
{return (this__8989.a[i__8990]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8991 = this;
var i__8992 = (n + this__8991.i);
if((i__8992 < this__8991.a.length))
{return (this__8991.a[i__8992]);
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
var G__8993 = null;
var G__8993__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8993__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8993 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8993__2.call(this,array,f);
case 3:
return G__8993__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8993;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8994 = null;
var G__8994__2 = (function (array,k){
return (array[k]);
});
var G__8994__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8994 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8994__2.call(this,array,k);
case 3:
return G__8994__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8994;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8995 = null;
var G__8995__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8995__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8995 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8995__2.call(this,array,n);
case 3:
return G__8995__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8995;
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
var this__8996 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8997 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8998 = this;
var this__8999 = this;
return cljs.core.pr_str.call(null,this__8999);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9000 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9001 = this;
return (this__9001.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9002 = this;
return cljs.core._nth.call(null,this__9002.ci,this__9002.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9003 = this;
if((this__9003.i > 0))
{return (new cljs.core.RSeq(this__9003.ci,(this__9003.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9004 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9005 = this;
return (new cljs.core.RSeq(this__9005.ci,this__9005.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9006 = this;
return this__9006.meta;
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
{if((function (){var G__9010__9011 = coll;
if(G__9010__9011)
{if((function (){var or__3824__auto____9012 = (G__9010__9011.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____9012)
{return or__3824__auto____9012;
} else
{return G__9010__9011.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9010__9011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9010__9011);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9010__9011);
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
{if((function (){var G__9017__9018 = coll;
if(G__9017__9018)
{if((function (){var or__3824__auto____9019 = (G__9017__9018.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9019)
{return or__3824__auto____9019;
} else
{return G__9017__9018.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9017__9018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9017__9018);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9017__9018);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9020 = cljs.core.seq.call(null,coll);
if((s__9020 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9020);
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
{if((function (){var G__9025__9026 = coll;
if(G__9025__9026)
{if((function (){var or__3824__auto____9027 = (G__9025__9026.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9027)
{return or__3824__auto____9027;
} else
{return G__9025__9026.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9025__9026.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9025__9026);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9025__9026);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9028 = cljs.core.seq.call(null,coll);
if(!((s__9028 == null)))
{return cljs.core._rest.call(null,s__9028);
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
{if((function (){var G__9032__9033 = coll;
if(G__9032__9033)
{if((function (){var or__3824__auto____9034 = (G__9032__9033.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____9034)
{return or__3824__auto____9034;
} else
{return G__9032__9033.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9032__9033.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9032__9033);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9032__9033);
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
var sn__9036 = cljs.core.next.call(null,s);
if(!((sn__9036 == null)))
{{
var G__9037 = sn__9036;
s = G__9037;
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
var G__9038__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9039 = conj.call(null,coll,x);
var G__9040 = cljs.core.first.call(null,xs);
var G__9041 = cljs.core.next.call(null,xs);
coll = G__9039;
x = G__9040;
xs = G__9041;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9038 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9038__delegate.call(this, coll, x, xs);
};
G__9038.cljs$lang$maxFixedArity = 2;
G__9038.cljs$lang$applyTo = (function (arglist__9042){
var coll = cljs.core.first(arglist__9042);
var x = cljs.core.first(cljs.core.next(arglist__9042));
var xs = cljs.core.rest(cljs.core.next(arglist__9042));
return G__9038__delegate(coll, x, xs);
});
G__9038.cljs$lang$arity$variadic = G__9038__delegate;
return G__9038;
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
var s__9045 = cljs.core.seq.call(null,coll);
var acc__9046 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9045))
{return (acc__9046 + cljs.core._count.call(null,s__9045));
} else
{{
var G__9047 = cljs.core.next.call(null,s__9045);
var G__9048 = (acc__9046 + 1);
s__9045 = G__9047;
acc__9046 = G__9048;
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
{if((function (){var G__9055__9056 = coll;
if(G__9055__9056)
{if((function (){var or__3824__auto____9057 = (G__9055__9056.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9057)
{return or__3824__auto____9057;
} else
{return G__9055__9056.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9055__9056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9055__9056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9055__9056);
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
{if((function (){var G__9058__9059 = coll;
if(G__9058__9059)
{if((function (){var or__3824__auto____9060 = (G__9058__9059.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9060)
{return or__3824__auto____9060;
} else
{return G__9058__9059.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9058__9059.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9058__9059);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9058__9059);
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
var G__9063__delegate = function (coll,k,v,kvs){
while(true){
var ret__9062 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9064 = ret__9062;
var G__9065 = cljs.core.first.call(null,kvs);
var G__9066 = cljs.core.second.call(null,kvs);
var G__9067 = cljs.core.nnext.call(null,kvs);
coll = G__9064;
k = G__9065;
v = G__9066;
kvs = G__9067;
continue;
}
} else
{return ret__9062;
}
break;
}
};
var G__9063 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9063__delegate.call(this, coll, k, v, kvs);
};
G__9063.cljs$lang$maxFixedArity = 3;
G__9063.cljs$lang$applyTo = (function (arglist__9068){
var coll = cljs.core.first(arglist__9068);
var k = cljs.core.first(cljs.core.next(arglist__9068));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9068)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9068)));
return G__9063__delegate(coll, k, v, kvs);
});
G__9063.cljs$lang$arity$variadic = G__9063__delegate;
return G__9063;
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
var G__9071__delegate = function (coll,k,ks){
while(true){
var ret__9070 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9072 = ret__9070;
var G__9073 = cljs.core.first.call(null,ks);
var G__9074 = cljs.core.next.call(null,ks);
coll = G__9072;
k = G__9073;
ks = G__9074;
continue;
}
} else
{return ret__9070;
}
break;
}
};
var G__9071 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9071__delegate.call(this, coll, k, ks);
};
G__9071.cljs$lang$maxFixedArity = 2;
G__9071.cljs$lang$applyTo = (function (arglist__9075){
var coll = cljs.core.first(arglist__9075);
var k = cljs.core.first(cljs.core.next(arglist__9075));
var ks = cljs.core.rest(cljs.core.next(arglist__9075));
return G__9071__delegate(coll, k, ks);
});
G__9071.cljs$lang$arity$variadic = G__9071__delegate;
return G__9071;
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
if((function (){var G__9079__9080 = o;
if(G__9079__9080)
{if((function (){var or__3824__auto____9081 = (G__9079__9080.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9081)
{return or__3824__auto____9081;
} else
{return G__9079__9080.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9079__9080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9079__9080);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9079__9080);
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
var G__9084__delegate = function (coll,k,ks){
while(true){
var ret__9083 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9085 = ret__9083;
var G__9086 = cljs.core.first.call(null,ks);
var G__9087 = cljs.core.next.call(null,ks);
coll = G__9085;
k = G__9086;
ks = G__9087;
continue;
}
} else
{return ret__9083;
}
break;
}
};
var G__9084 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9084__delegate.call(this, coll, k, ks);
};
G__9084.cljs$lang$maxFixedArity = 2;
G__9084.cljs$lang$applyTo = (function (arglist__9088){
var coll = cljs.core.first(arglist__9088);
var k = cljs.core.first(cljs.core.next(arglist__9088));
var ks = cljs.core.rest(cljs.core.next(arglist__9088));
return G__9084__delegate(coll, k, ks);
});
G__9084.cljs$lang$arity$variadic = G__9084__delegate;
return G__9084;
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
var h__9090 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9090);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9090;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9092 = (cljs.core.string_hash_cache[k]);
if(!((h__9092 == null)))
{return h__9092;
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
if((function (){var and__3822__auto____9094 = goog.isString(o);
if(and__3822__auto____9094)
{return check_cache;
} else
{return and__3822__auto____9094;
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
{var G__9098__9099 = x;
if(G__9098__9099)
{if((function (){var or__3824__auto____9100 = (G__9098__9099.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____9100)
{return or__3824__auto____9100;
} else
{return G__9098__9099.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9098__9099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9098__9099);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9098__9099);
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
{var G__9104__9105 = x;
if(G__9104__9105)
{if((function (){var or__3824__auto____9106 = (G__9104__9105.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____9106)
{return or__3824__auto____9106;
} else
{return G__9104__9105.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9104__9105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9104__9105);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9104__9105);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9110__9111 = x;
if(G__9110__9111)
{if((function (){var or__3824__auto____9112 = (G__9110__9111.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____9112)
{return or__3824__auto____9112;
} else
{return G__9110__9111.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9110__9111.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9110__9111);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9110__9111);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9116__9117 = x;
if(G__9116__9117)
{if((function (){var or__3824__auto____9118 = (G__9116__9117.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____9118)
{return or__3824__auto____9118;
} else
{return G__9116__9117.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9116__9117.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9116__9117);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9116__9117);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9122__9123 = x;
if(G__9122__9123)
{if((function (){var or__3824__auto____9124 = (G__9122__9123.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____9124)
{return or__3824__auto____9124;
} else
{return G__9122__9123.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9122__9123.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9122__9123);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9122__9123);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9128__9129 = x;
if(G__9128__9129)
{if((function (){var or__3824__auto____9130 = (G__9128__9129.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9130)
{return or__3824__auto____9130;
} else
{return G__9128__9129.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9128__9129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9128__9129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9128__9129);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9134__9135 = x;
if(G__9134__9135)
{if((function (){var or__3824__auto____9136 = (G__9134__9135.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9136)
{return or__3824__auto____9136;
} else
{return G__9134__9135.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9134__9135.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9134__9135);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9134__9135);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9140__9141 = x;
if(G__9140__9141)
{if((function (){var or__3824__auto____9142 = (G__9140__9141.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____9142)
{return or__3824__auto____9142;
} else
{return G__9140__9141.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9140__9141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9140__9141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9140__9141);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9146__9147 = x;
if(G__9146__9147)
{if((function (){var or__3824__auto____9148 = (G__9146__9147.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____9148)
{return or__3824__auto____9148;
} else
{return G__9146__9147.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9146__9147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9146__9147);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9146__9147);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9152__9153 = x;
if(G__9152__9153)
{if(cljs.core.truth_((function (){var or__3824__auto____9154 = null;
if(cljs.core.truth_(or__3824__auto____9154))
{return or__3824__auto____9154;
} else
{return G__9152__9153.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9152__9153.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9152__9153);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9152__9153);
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
var G__9155__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9155 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9155__delegate.call(this, keyvals);
};
G__9155.cljs$lang$maxFixedArity = 0;
G__9155.cljs$lang$applyTo = (function (arglist__9156){
var keyvals = cljs.core.seq(arglist__9156);;
return G__9155__delegate(keyvals);
});
G__9155.cljs$lang$arity$variadic = G__9155__delegate;
return G__9155;
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
var keys__9158 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9158.push(key);
}));
return keys__9158;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9162 = i;
var j__9163 = j;
var len__9164 = len;
while(true){
if((len__9164 === 0))
{return to;
} else
{(to[j__9163] = (from[i__9162]));
{
var G__9165 = (i__9162 + 1);
var G__9166 = (j__9163 + 1);
var G__9167 = (len__9164 - 1);
i__9162 = G__9165;
j__9163 = G__9166;
len__9164 = G__9167;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9171 = (i + (len - 1));
var j__9172 = (j + (len - 1));
var len__9173 = len;
while(true){
if((len__9173 === 0))
{return to;
} else
{(to[j__9172] = (from[i__9171]));
{
var G__9174 = (i__9171 - 1);
var G__9175 = (j__9172 - 1);
var G__9176 = (len__9173 - 1);
i__9171 = G__9174;
j__9172 = G__9175;
len__9173 = G__9176;
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
{var G__9180__9181 = s;
if(G__9180__9181)
{if((function (){var or__3824__auto____9182 = (G__9180__9181.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9182)
{return or__3824__auto____9182;
} else
{return G__9180__9181.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9180__9181.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9180__9181);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9180__9181);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9186__9187 = s;
if(G__9186__9187)
{if((function (){var or__3824__auto____9188 = (G__9186__9187.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____9188)
{return or__3824__auto____9188;
} else
{return G__9186__9187.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9186__9187.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9186__9187);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9186__9187);
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
var and__3822__auto____9191 = goog.isString(x);
if(and__3822__auto____9191)
{return !((function (){var or__3824__auto____9192 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____9192)
{return or__3824__auto____9192;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____9191;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____9194 = goog.isString(x);
if(and__3822__auto____9194)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____9194;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____9196 = goog.isString(x);
if(and__3822__auto____9196)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____9196;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____9201 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____9201)
{return or__3824__auto____9201;
} else
{var G__9202__9203 = f;
if(G__9202__9203)
{if((function (){var or__3824__auto____9204 = (G__9202__9203.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____9204)
{return or__3824__auto____9204;
} else
{return G__9202__9203.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9202__9203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9202__9203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9202__9203);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____9206 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____9206)
{return (n == n.toFixed());
} else
{return and__3822__auto____9206;
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
if(cljs.core.truth_((function (){var and__3822__auto____9209 = coll;
if(cljs.core.truth_(and__3822__auto____9209))
{var and__3822__auto____9210 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____9210)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____9210;
}
} else
{return and__3822__auto____9209;
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
var G__9219__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9215 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9216 = more;
while(true){
var x__9217 = cljs.core.first.call(null,xs__9216);
var etc__9218 = cljs.core.next.call(null,xs__9216);
if(cljs.core.truth_(xs__9216))
{if(cljs.core.contains_QMARK_.call(null,s__9215,x__9217))
{return false;
} else
{{
var G__9220 = cljs.core.conj.call(null,s__9215,x__9217);
var G__9221 = etc__9218;
s__9215 = G__9220;
xs__9216 = G__9221;
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
var G__9219 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9219__delegate.call(this, x, y, more);
};
G__9219.cljs$lang$maxFixedArity = 2;
G__9219.cljs$lang$applyTo = (function (arglist__9222){
var x = cljs.core.first(arglist__9222);
var y = cljs.core.first(cljs.core.next(arglist__9222));
var more = cljs.core.rest(cljs.core.next(arglist__9222));
return G__9219__delegate(x, y, more);
});
G__9219.cljs$lang$arity$variadic = G__9219__delegate;
return G__9219;
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
{if((function (){var G__9226__9227 = x;
if(G__9226__9227)
{if(cljs.core.truth_((function (){var or__3824__auto____9228 = null;
if(cljs.core.truth_(or__3824__auto____9228))
{return or__3824__auto____9228;
} else
{return G__9226__9227.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9226__9227.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9226__9227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9226__9227);
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
var xl__9233 = cljs.core.count.call(null,xs);
var yl__9234 = cljs.core.count.call(null,ys);
if((xl__9233 < yl__9234))
{return -1;
} else
{if((xl__9233 > yl__9234))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9233,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9235 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____9236 = (d__9235 === 0);
if(and__3822__auto____9236)
{return ((n + 1) < len);
} else
{return and__3822__auto____9236;
}
})())
{{
var G__9237 = xs;
var G__9238 = ys;
var G__9239 = len;
var G__9240 = (n + 1);
xs = G__9237;
ys = G__9238;
len = G__9239;
n = G__9240;
continue;
}
} else
{return d__9235;
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
var r__9242 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9242))
{return r__9242;
} else
{if(cljs.core.truth_(r__9242))
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
{var a__9244 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9244,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9244);
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
var temp__3971__auto____9250 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9250)
{var s__9251 = temp__3971__auto____9250;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9251),cljs.core.next.call(null,s__9251));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9252 = val;
var coll__9253 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9253)
{var nval__9254 = f.call(null,val__9252,cljs.core.first.call(null,coll__9253));
if(cljs.core.reduced_QMARK_.call(null,nval__9254))
{return cljs.core.deref.call(null,nval__9254);
} else
{{
var G__9255 = nval__9254;
var G__9256 = cljs.core.next.call(null,coll__9253);
val__9252 = G__9255;
coll__9253 = G__9256;
continue;
}
}
} else
{return val__9252;
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
var a__9258 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9258);
return cljs.core.vec.call(null,a__9258);
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
if((function (){var G__9265__9266 = coll;
if(G__9265__9266)
{if((function (){var or__3824__auto____9267 = (G__9265__9266.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9267)
{return or__3824__auto____9267;
} else
{return G__9265__9266.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9265__9266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9265__9266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9265__9266);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9268__9269 = coll;
if(G__9268__9269)
{if((function (){var or__3824__auto____9270 = (G__9268__9269.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9270)
{return or__3824__auto____9270;
} else
{return G__9268__9269.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9268__9269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9268__9269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9268__9269);
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
var this__9271 = this;
return this__9271.val;
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
var G__9272__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9272__delegate.call(this, x, y, more);
};
G__9272.cljs$lang$maxFixedArity = 2;
G__9272.cljs$lang$applyTo = (function (arglist__9273){
var x = cljs.core.first(arglist__9273);
var y = cljs.core.first(cljs.core.next(arglist__9273));
var more = cljs.core.rest(cljs.core.next(arglist__9273));
return G__9272__delegate(x, y, more);
});
G__9272.cljs$lang$arity$variadic = G__9272__delegate;
return G__9272;
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
var G__9274__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9274 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9274__delegate.call(this, x, y, more);
};
G__9274.cljs$lang$maxFixedArity = 2;
G__9274.cljs$lang$applyTo = (function (arglist__9275){
var x = cljs.core.first(arglist__9275);
var y = cljs.core.first(cljs.core.next(arglist__9275));
var more = cljs.core.rest(cljs.core.next(arglist__9275));
return G__9274__delegate(x, y, more);
});
G__9274.cljs$lang$arity$variadic = G__9274__delegate;
return G__9274;
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
var G__9276__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
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
var G__9278__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
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
var G__9280__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9281 = y;
var G__9282 = cljs.core.first.call(null,more);
var G__9283 = cljs.core.next.call(null,more);
x = G__9281;
y = G__9282;
more = G__9283;
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
var G__9280 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9280__delegate.call(this, x, y, more);
};
G__9280.cljs$lang$maxFixedArity = 2;
G__9280.cljs$lang$applyTo = (function (arglist__9284){
var x = cljs.core.first(arglist__9284);
var y = cljs.core.first(cljs.core.next(arglist__9284));
var more = cljs.core.rest(cljs.core.next(arglist__9284));
return G__9280__delegate(x, y, more);
});
G__9280.cljs$lang$arity$variadic = G__9280__delegate;
return G__9280;
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
var G__9285__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9286 = y;
var G__9287 = cljs.core.first.call(null,more);
var G__9288 = cljs.core.next.call(null,more);
x = G__9286;
y = G__9287;
more = G__9288;
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
var G__9285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9285__delegate.call(this, x, y, more);
};
G__9285.cljs$lang$maxFixedArity = 2;
G__9285.cljs$lang$applyTo = (function (arglist__9289){
var x = cljs.core.first(arglist__9289);
var y = cljs.core.first(cljs.core.next(arglist__9289));
var more = cljs.core.rest(cljs.core.next(arglist__9289));
return G__9285__delegate(x, y, more);
});
G__9285.cljs$lang$arity$variadic = G__9285__delegate;
return G__9285;
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
var G__9290__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9291 = y;
var G__9292 = cljs.core.first.call(null,more);
var G__9293 = cljs.core.next.call(null,more);
x = G__9291;
y = G__9292;
more = G__9293;
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
var G__9290 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9290__delegate.call(this, x, y, more);
};
G__9290.cljs$lang$maxFixedArity = 2;
G__9290.cljs$lang$applyTo = (function (arglist__9294){
var x = cljs.core.first(arglist__9294);
var y = cljs.core.first(cljs.core.next(arglist__9294));
var more = cljs.core.rest(cljs.core.next(arglist__9294));
return G__9290__delegate(x, y, more);
});
G__9290.cljs$lang$arity$variadic = G__9290__delegate;
return G__9290;
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
var G__9295__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9296 = y;
var G__9297 = cljs.core.first.call(null,more);
var G__9298 = cljs.core.next.call(null,more);
x = G__9296;
y = G__9297;
more = G__9298;
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
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9299){
var x = cljs.core.first(arglist__9299);
var y = cljs.core.first(cljs.core.next(arglist__9299));
var more = cljs.core.rest(cljs.core.next(arglist__9299));
return G__9295__delegate(x, y, more);
});
G__9295.cljs$lang$arity$variadic = G__9295__delegate;
return G__9295;
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
var G__9300__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9300__delegate.call(this, x, y, more);
};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9301){
var x = cljs.core.first(arglist__9301);
var y = cljs.core.first(cljs.core.next(arglist__9301));
var more = cljs.core.rest(cljs.core.next(arglist__9301));
return G__9300__delegate(x, y, more);
});
G__9300.cljs$lang$arity$variadic = G__9300__delegate;
return G__9300;
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
var G__9302__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9302 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9302__delegate.call(this, x, y, more);
};
G__9302.cljs$lang$maxFixedArity = 2;
G__9302.cljs$lang$applyTo = (function (arglist__9303){
var x = cljs.core.first(arglist__9303);
var y = cljs.core.first(cljs.core.next(arglist__9303));
var more = cljs.core.rest(cljs.core.next(arglist__9303));
return G__9302__delegate(x, y, more);
});
G__9302.cljs$lang$arity$variadic = G__9302__delegate;
return G__9302;
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
var rem__9305 = (n % d);
return cljs.core.fix.call(null,((n - rem__9305) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9307 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9307));
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
var v__9310 = (v - ((v >> 1) & 1431655765));
var v__9311 = ((v__9310 & 858993459) + ((v__9310 >> 2) & 858993459));
return ((((v__9311 + (v__9311 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9312__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9313 = y;
var G__9314 = cljs.core.first.call(null,more);
var G__9315 = cljs.core.next.call(null,more);
x = G__9313;
y = G__9314;
more = G__9315;
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
var G__9312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9312__delegate.call(this, x, y, more);
};
G__9312.cljs$lang$maxFixedArity = 2;
G__9312.cljs$lang$applyTo = (function (arglist__9316){
var x = cljs.core.first(arglist__9316);
var y = cljs.core.first(cljs.core.next(arglist__9316));
var more = cljs.core.rest(cljs.core.next(arglist__9316));
return G__9312__delegate(x, y, more);
});
G__9312.cljs$lang$arity$variadic = G__9312__delegate;
return G__9312;
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
var n__9320 = n;
var xs__9321 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9322 = xs__9321;
if(and__3822__auto____9322)
{return (n__9320 > 0);
} else
{return and__3822__auto____9322;
}
})()))
{{
var G__9323 = (n__9320 - 1);
var G__9324 = cljs.core.next.call(null,xs__9321);
n__9320 = G__9323;
xs__9321 = G__9324;
continue;
}
} else
{return xs__9321;
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
var G__9325__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9326 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9327 = cljs.core.next.call(null,more);
sb = G__9326;
more = G__9327;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9325 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9325__delegate.call(this, x, ys);
};
G__9325.cljs$lang$maxFixedArity = 1;
G__9325.cljs$lang$applyTo = (function (arglist__9328){
var x = cljs.core.first(arglist__9328);
var ys = cljs.core.rest(arglist__9328);
return G__9325__delegate(x, ys);
});
G__9325.cljs$lang$arity$variadic = G__9325__delegate;
return G__9325;
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
var G__9329__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9330 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9331 = cljs.core.next.call(null,more);
sb = G__9330;
more = G__9331;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
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
format.cljs$lang$applyTo = (function (arglist__9333){
var fmt = cljs.core.first(arglist__9333);
var args = cljs.core.rest(arglist__9333);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9336 = cljs.core.seq.call(null,x);
var ys__9337 = cljs.core.seq.call(null,y);
while(true){
if((xs__9336 == null))
{return (ys__9337 == null);
} else
{if((ys__9337 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9336),cljs.core.first.call(null,ys__9337)))
{{
var G__9338 = cljs.core.next.call(null,xs__9336);
var G__9339 = cljs.core.next.call(null,ys__9337);
xs__9336 = G__9338;
ys__9337 = G__9339;
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
return cljs.core.reduce.call(null,(function (p1__9340_SHARP_,p2__9341_SHARP_){
return cljs.core.hash_combine.call(null,p1__9340_SHARP_,cljs.core.hash.call(null,p2__9341_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9345 = 0;
var s__9346 = cljs.core.seq.call(null,m);
while(true){
if(s__9346)
{var e__9347 = cljs.core.first.call(null,s__9346);
{
var G__9348 = ((h__9345 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9347)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9347)))) % 4503599627370496);
var G__9349 = cljs.core.next.call(null,s__9346);
h__9345 = G__9348;
s__9346 = G__9349;
continue;
}
} else
{return h__9345;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9353 = 0;
var s__9354 = cljs.core.seq.call(null,s);
while(true){
if(s__9354)
{var e__9355 = cljs.core.first.call(null,s__9354);
{
var G__9356 = ((h__9353 + cljs.core.hash.call(null,e__9355)) % 4503599627370496);
var G__9357 = cljs.core.next.call(null,s__9354);
h__9353 = G__9356;
s__9354 = G__9357;
continue;
}
} else
{return h__9353;
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
var G__9378__9379 = cljs.core.seq.call(null,fn_map);
if(G__9378__9379)
{var G__9381__9383 = cljs.core.first.call(null,G__9378__9379);
var vec__9382__9384 = G__9381__9383;
var key_name__9385 = cljs.core.nth.call(null,vec__9382__9384,0,null);
var f__9386 = cljs.core.nth.call(null,vec__9382__9384,1,null);
var G__9378__9387 = G__9378__9379;
var G__9381__9388 = G__9381__9383;
var G__9378__9389 = G__9378__9387;
while(true){
var vec__9390__9391 = G__9381__9388;
var key_name__9392 = cljs.core.nth.call(null,vec__9390__9391,0,null);
var f__9393 = cljs.core.nth.call(null,vec__9390__9391,1,null);
var G__9378__9394 = G__9378__9389;
var str_name__9395 = cljs.core.name.call(null,key_name__9392);
(obj[str_name__9395] = f__9393);
var temp__3974__auto____9396 = cljs.core.next.call(null,G__9378__9394);
if(temp__3974__auto____9396)
{var G__9378__9397 = temp__3974__auto____9396;
{
var G__9398 = cljs.core.first.call(null,G__9378__9397);
var G__9399 = G__9378__9397;
G__9381__9388 = G__9398;
G__9378__9389 = G__9399;
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
var this__9400 = this;
var h__2242__auto____9401 = this__9400.__hash;
if(!((h__2242__auto____9401 == null)))
{return h__2242__auto____9401;
} else
{var h__2242__auto____9402 = cljs.core.hash_coll.call(null,coll);
this__9400.__hash = h__2242__auto____9402;
return h__2242__auto____9402;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9403 = this;
if((this__9403.count === 1))
{return null;
} else
{return this__9403.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9404 = this;
return (new cljs.core.List(this__9404.meta,o,coll,(this__9404.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9405 = this;
var this__9406 = this;
return cljs.core.pr_str.call(null,this__9406);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9407 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9408 = this;
return this__9408.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9409 = this;
return this__9409.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9410 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9411 = this;
return this__9411.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9412 = this;
if((this__9412.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9412.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9413 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9414 = this;
return (new cljs.core.List(meta,this__9414.first,this__9414.rest,this__9414.count,this__9414.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9415 = this;
return this__9415.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9416 = this;
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
var this__9417 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9418 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9419 = this;
return (new cljs.core.List(this__9419.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9420 = this;
var this__9421 = this;
return cljs.core.pr_str.call(null,this__9421);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9422 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9423 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9424 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9425 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9426 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9427 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9429 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9430 = this;
return this__9430.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9431 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9435__9436 = coll;
if(G__9435__9436)
{if((function (){var or__3824__auto____9437 = (G__9435__9436.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9437)
{return or__3824__auto____9437;
} else
{return G__9435__9436.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9435__9436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9435__9436);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9435__9436);
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
var G__9438__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9438 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9438__delegate.call(this, x, y, z, items);
};
G__9438.cljs$lang$maxFixedArity = 3;
G__9438.cljs$lang$applyTo = (function (arglist__9439){
var x = cljs.core.first(arglist__9439);
var y = cljs.core.first(cljs.core.next(arglist__9439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9439)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9439)));
return G__9438__delegate(x, y, z, items);
});
G__9438.cljs$lang$arity$variadic = G__9438__delegate;
return G__9438;
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
var this__9440 = this;
var h__2242__auto____9441 = this__9440.__hash;
if(!((h__2242__auto____9441 == null)))
{return h__2242__auto____9441;
} else
{var h__2242__auto____9442 = cljs.core.hash_coll.call(null,coll);
this__9440.__hash = h__2242__auto____9442;
return h__2242__auto____9442;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9443 = this;
if((this__9443.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9443.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9444 = this;
return (new cljs.core.Cons(null,o,coll,this__9444.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9445 = this;
var this__9446 = this;
return cljs.core.pr_str.call(null,this__9446);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9447 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9448 = this;
return this__9448.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9449 = this;
if((this__9449.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9449.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9450 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9451 = this;
return (new cljs.core.Cons(meta,this__9451.first,this__9451.rest,this__9451.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9452 = this;
return this__9452.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9453 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9453.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9458 = (coll == null);
if(or__3824__auto____9458)
{return or__3824__auto____9458;
} else
{var G__9459__9460 = coll;
if(G__9459__9460)
{if((function (){var or__3824__auto____9461 = (G__9459__9460.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9461)
{return or__3824__auto____9461;
} else
{return G__9459__9460.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9459__9460.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9459__9460);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9459__9460);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9465__9466 = x;
if(G__9465__9466)
{if((function (){var or__3824__auto____9467 = (G__9465__9466.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9467)
{return or__3824__auto____9467;
} else
{return G__9465__9466.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9465__9466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9465__9466);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9465__9466);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9468 = null;
var G__9468__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9468__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9468 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9468__2.call(this,string,f);
case 3:
return G__9468__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9468;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9469 = null;
var G__9469__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9469__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9469 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9469__2.call(this,string,k);
case 3:
return G__9469__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9469;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9470 = null;
var G__9470__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9470__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9470 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9470__2.call(this,string,n);
case 3:
return G__9470__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9470;
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
var G__9482 = null;
var G__9482__2 = (function (this_sym9473,coll){
var this__9475 = this;
var this_sym9473__9476 = this;
var ___9477 = this_sym9473__9476;
if((coll == null))
{return null;
} else
{var strobj__9478 = coll.strobj;
if((strobj__9478 == null))
{return cljs.core._lookup.call(null,coll,this__9475.k,null);
} else
{return (strobj__9478[this__9475.k]);
}
}
});
var G__9482__3 = (function (this_sym9474,coll,not_found){
var this__9475 = this;
var this_sym9474__9479 = this;
var ___9480 = this_sym9474__9479;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9475.k,not_found);
}
});
G__9482 = function(this_sym9474,coll,not_found){
switch(arguments.length){
case 2:
return G__9482__2.call(this,this_sym9474,coll);
case 3:
return G__9482__3.call(this,this_sym9474,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9482;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9471,args9472){
var this__9481 = this;
return this_sym9471.call.apply(this_sym9471,[this_sym9471].concat(args9472.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9491 = null;
var G__9491__2 = (function (this_sym9485,coll){
var this_sym9485__9487 = this;
var this__9488 = this_sym9485__9487;
return cljs.core._lookup.call(null,coll,this__9488.toString(),null);
});
var G__9491__3 = (function (this_sym9486,coll,not_found){
var this_sym9486__9489 = this;
var this__9490 = this_sym9486__9489;
return cljs.core._lookup.call(null,coll,this__9490.toString(),not_found);
});
G__9491 = function(this_sym9486,coll,not_found){
switch(arguments.length){
case 2:
return G__9491__2.call(this,this_sym9486,coll);
case 3:
return G__9491__3.call(this,this_sym9486,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9491;
})()
;
String.prototype.apply = (function (this_sym9483,args9484){
return this_sym9483.call.apply(this_sym9483,[this_sym9483].concat(args9484.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9493 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9493;
} else
{lazy_seq.x = x__9493.call(null);
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
var this__9494 = this;
var h__2242__auto____9495 = this__9494.__hash;
if(!((h__2242__auto____9495 == null)))
{return h__2242__auto____9495;
} else
{var h__2242__auto____9496 = cljs.core.hash_coll.call(null,coll);
this__9494.__hash = h__2242__auto____9496;
return h__2242__auto____9496;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9497 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9498 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9499 = this;
var this__9500 = this;
return cljs.core.pr_str.call(null,this__9500);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9501 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9502 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9503 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9504 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9505 = this;
return (new cljs.core.LazySeq(meta,this__9505.realized,this__9505.x,this__9505.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9506 = this;
return this__9506.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9507 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9507.meta);
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
var this__9508 = this;
return this__9508.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9509 = this;
var ___9510 = this;
(this__9509.buf[this__9509.end] = o);
return this__9509.end = (this__9509.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9511 = this;
var ___9512 = this;
var ret__9513 = (new cljs.core.ArrayChunk(this__9511.buf,0,this__9511.end));
this__9511.buf = null;
return ret__9513;
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
var this__9514 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9514.arr[this__9514.off]),(this__9514.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9515 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9515.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9516 = this;
if((this__9516.off === this__9516.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9516.arr,(this__9516.off + 1),this__9516.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9517 = this;
return (this__9517.arr[(this__9517.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9518 = this;
if((function (){var and__3822__auto____9519 = (i >= 0);
if(and__3822__auto____9519)
{return (i < (this__9518.end - this__9518.off));
} else
{return and__3822__auto____9519;
}
})())
{return (this__9518.arr[(this__9518.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9520 = this;
return (this__9520.end - this__9520.off);
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
var this__9521 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9522 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9523 = this;
return cljs.core._nth.call(null,this__9523.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9524 = this;
if((cljs.core._count.call(null,this__9524.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9524.chunk),this__9524.more,this__9524.meta));
} else
{if((this__9524.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9524.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9525 = this;
if((this__9525.more == null))
{return null;
} else
{return this__9525.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9527 = this;
return (new cljs.core.ChunkedCons(this__9527.chunk,this__9527.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9528 = this;
return this__9528.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9529 = this;
return this__9529.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9530 = this;
if((this__9530.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9530.more;
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
if((function (){var G__9534__9535 = s;
if(G__9534__9535)
{if(cljs.core.truth_((function (){var or__3824__auto____9536 = null;
if(cljs.core.truth_(or__3824__auto____9536))
{return or__3824__auto____9536;
} else
{return G__9534__9535.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9534__9535.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9534__9535);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9534__9535);
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
var ary__9539 = [];
var s__9540 = s;
while(true){
if(cljs.core.seq.call(null,s__9540))
{ary__9539.push(cljs.core.first.call(null,s__9540));
{
var G__9541 = cljs.core.next.call(null,s__9540);
s__9540 = G__9541;
continue;
}
} else
{return ary__9539;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9545 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9546 = 0;
var xs__9547 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9547)
{(ret__9545[i__9546] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9547)));
{
var G__9548 = (i__9546 + 1);
var G__9549 = cljs.core.next.call(null,xs__9547);
i__9546 = G__9548;
xs__9547 = G__9549;
continue;
}
} else
{}
break;
}
return ret__9545;
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
var a__9557 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9558 = cljs.core.seq.call(null,init_val_or_seq);
var i__9559 = 0;
var s__9560 = s__9558;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9561 = s__9560;
if(and__3822__auto____9561)
{return (i__9559 < size);
} else
{return and__3822__auto____9561;
}
})()))
{(a__9557[i__9559] = cljs.core.first.call(null,s__9560));
{
var G__9564 = (i__9559 + 1);
var G__9565 = cljs.core.next.call(null,s__9560);
i__9559 = G__9564;
s__9560 = G__9565;
continue;
}
} else
{return a__9557;
}
break;
}
} else
{var n__2577__auto____9562 = size;
var i__9563 = 0;
while(true){
if((i__9563 < n__2577__auto____9562))
{(a__9557[i__9563] = init_val_or_seq);
{
var G__9566 = (i__9563 + 1);
i__9563 = G__9566;
continue;
}
} else
{}
break;
}
return a__9557;
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
var a__9574 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9575 = cljs.core.seq.call(null,init_val_or_seq);
var i__9576 = 0;
var s__9577 = s__9575;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9578 = s__9577;
if(and__3822__auto____9578)
{return (i__9576 < size);
} else
{return and__3822__auto____9578;
}
})()))
{(a__9574[i__9576] = cljs.core.first.call(null,s__9577));
{
var G__9581 = (i__9576 + 1);
var G__9582 = cljs.core.next.call(null,s__9577);
i__9576 = G__9581;
s__9577 = G__9582;
continue;
}
} else
{return a__9574;
}
break;
}
} else
{var n__2577__auto____9579 = size;
var i__9580 = 0;
while(true){
if((i__9580 < n__2577__auto____9579))
{(a__9574[i__9580] = init_val_or_seq);
{
var G__9583 = (i__9580 + 1);
i__9580 = G__9583;
continue;
}
} else
{}
break;
}
return a__9574;
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
var a__9591 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9592 = cljs.core.seq.call(null,init_val_or_seq);
var i__9593 = 0;
var s__9594 = s__9592;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9595 = s__9594;
if(and__3822__auto____9595)
{return (i__9593 < size);
} else
{return and__3822__auto____9595;
}
})()))
{(a__9591[i__9593] = cljs.core.first.call(null,s__9594));
{
var G__9598 = (i__9593 + 1);
var G__9599 = cljs.core.next.call(null,s__9594);
i__9593 = G__9598;
s__9594 = G__9599;
continue;
}
} else
{return a__9591;
}
break;
}
} else
{var n__2577__auto____9596 = size;
var i__9597 = 0;
while(true){
if((i__9597 < n__2577__auto____9596))
{(a__9591[i__9597] = init_val_or_seq);
{
var G__9600 = (i__9597 + 1);
i__9597 = G__9600;
continue;
}
} else
{}
break;
}
return a__9591;
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
{var s__9605 = s;
var i__9606 = n;
var sum__9607 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9608 = (i__9606 > 0);
if(and__3822__auto____9608)
{return cljs.core.seq.call(null,s__9605);
} else
{return and__3822__auto____9608;
}
})()))
{{
var G__9609 = cljs.core.next.call(null,s__9605);
var G__9610 = (i__9606 - 1);
var G__9611 = (sum__9607 + 1);
s__9605 = G__9609;
i__9606 = G__9610;
sum__9607 = G__9611;
continue;
}
} else
{return sum__9607;
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
var s__9616 = cljs.core.seq.call(null,x);
if(s__9616)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9616))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9616),concat.call(null,cljs.core.chunk_rest.call(null,s__9616),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9616),concat.call(null,cljs.core.rest.call(null,s__9616),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9620__delegate = function (x,y,zs){
var cat__9619 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9618 = cljs.core.seq.call(null,xys);
if(xys__9618)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9618))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9618),cat.call(null,cljs.core.chunk_rest.call(null,xys__9618),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9618),cat.call(null,cljs.core.rest.call(null,xys__9618),zs));
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
return cat__9619.call(null,concat.call(null,x,y),zs);
};
var G__9620 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9620__delegate.call(this, x, y, zs);
};
G__9620.cljs$lang$maxFixedArity = 2;
G__9620.cljs$lang$applyTo = (function (arglist__9621){
var x = cljs.core.first(arglist__9621);
var y = cljs.core.first(cljs.core.next(arglist__9621));
var zs = cljs.core.rest(cljs.core.next(arglist__9621));
return G__9620__delegate(x, y, zs);
});
G__9620.cljs$lang$arity$variadic = G__9620__delegate;
return G__9620;
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
var G__9622__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9622 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9622__delegate.call(this, a, b, c, d, more);
};
G__9622.cljs$lang$maxFixedArity = 4;
G__9622.cljs$lang$applyTo = (function (arglist__9623){
var a = cljs.core.first(arglist__9623);
var b = cljs.core.first(cljs.core.next(arglist__9623));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9623)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9623))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9623))));
return G__9622__delegate(a, b, c, d, more);
});
G__9622.cljs$lang$arity$variadic = G__9622__delegate;
return G__9622;
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
var args__9665 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9666 = cljs.core._first.call(null,args__9665);
var args__9667 = cljs.core._rest.call(null,args__9665);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9666);
} else
{return f.call(null,a__9666);
}
} else
{var b__9668 = cljs.core._first.call(null,args__9667);
var args__9669 = cljs.core._rest.call(null,args__9667);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9666,b__9668);
} else
{return f.call(null,a__9666,b__9668);
}
} else
{var c__9670 = cljs.core._first.call(null,args__9669);
var args__9671 = cljs.core._rest.call(null,args__9669);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9666,b__9668,c__9670);
} else
{return f.call(null,a__9666,b__9668,c__9670);
}
} else
{var d__9672 = cljs.core._first.call(null,args__9671);
var args__9673 = cljs.core._rest.call(null,args__9671);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9666,b__9668,c__9670,d__9672);
} else
{return f.call(null,a__9666,b__9668,c__9670,d__9672);
}
} else
{var e__9674 = cljs.core._first.call(null,args__9673);
var args__9675 = cljs.core._rest.call(null,args__9673);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9666,b__9668,c__9670,d__9672,e__9674);
} else
{return f.call(null,a__9666,b__9668,c__9670,d__9672,e__9674);
}
} else
{var f__9676 = cljs.core._first.call(null,args__9675);
var args__9677 = cljs.core._rest.call(null,args__9675);
if((argc === 6))
{if(f__9676.cljs$lang$arity$6)
{return f__9676.cljs$lang$arity$6(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676);
}
} else
{var g__9678 = cljs.core._first.call(null,args__9677);
var args__9679 = cljs.core._rest.call(null,args__9677);
if((argc === 7))
{if(f__9676.cljs$lang$arity$7)
{return f__9676.cljs$lang$arity$7(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678);
}
} else
{var h__9680 = cljs.core._first.call(null,args__9679);
var args__9681 = cljs.core._rest.call(null,args__9679);
if((argc === 8))
{if(f__9676.cljs$lang$arity$8)
{return f__9676.cljs$lang$arity$8(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680);
}
} else
{var i__9682 = cljs.core._first.call(null,args__9681);
var args__9683 = cljs.core._rest.call(null,args__9681);
if((argc === 9))
{if(f__9676.cljs$lang$arity$9)
{return f__9676.cljs$lang$arity$9(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682);
}
} else
{var j__9684 = cljs.core._first.call(null,args__9683);
var args__9685 = cljs.core._rest.call(null,args__9683);
if((argc === 10))
{if(f__9676.cljs$lang$arity$10)
{return f__9676.cljs$lang$arity$10(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684);
}
} else
{var k__9686 = cljs.core._first.call(null,args__9685);
var args__9687 = cljs.core._rest.call(null,args__9685);
if((argc === 11))
{if(f__9676.cljs$lang$arity$11)
{return f__9676.cljs$lang$arity$11(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686);
}
} else
{var l__9688 = cljs.core._first.call(null,args__9687);
var args__9689 = cljs.core._rest.call(null,args__9687);
if((argc === 12))
{if(f__9676.cljs$lang$arity$12)
{return f__9676.cljs$lang$arity$12(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688);
}
} else
{var m__9690 = cljs.core._first.call(null,args__9689);
var args__9691 = cljs.core._rest.call(null,args__9689);
if((argc === 13))
{if(f__9676.cljs$lang$arity$13)
{return f__9676.cljs$lang$arity$13(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690);
}
} else
{var n__9692 = cljs.core._first.call(null,args__9691);
var args__9693 = cljs.core._rest.call(null,args__9691);
if((argc === 14))
{if(f__9676.cljs$lang$arity$14)
{return f__9676.cljs$lang$arity$14(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692);
}
} else
{var o__9694 = cljs.core._first.call(null,args__9693);
var args__9695 = cljs.core._rest.call(null,args__9693);
if((argc === 15))
{if(f__9676.cljs$lang$arity$15)
{return f__9676.cljs$lang$arity$15(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694);
}
} else
{var p__9696 = cljs.core._first.call(null,args__9695);
var args__9697 = cljs.core._rest.call(null,args__9695);
if((argc === 16))
{if(f__9676.cljs$lang$arity$16)
{return f__9676.cljs$lang$arity$16(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696);
}
} else
{var q__9698 = cljs.core._first.call(null,args__9697);
var args__9699 = cljs.core._rest.call(null,args__9697);
if((argc === 17))
{if(f__9676.cljs$lang$arity$17)
{return f__9676.cljs$lang$arity$17(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698);
}
} else
{var r__9700 = cljs.core._first.call(null,args__9699);
var args__9701 = cljs.core._rest.call(null,args__9699);
if((argc === 18))
{if(f__9676.cljs$lang$arity$18)
{return f__9676.cljs$lang$arity$18(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700);
}
} else
{var s__9702 = cljs.core._first.call(null,args__9701);
var args__9703 = cljs.core._rest.call(null,args__9701);
if((argc === 19))
{if(f__9676.cljs$lang$arity$19)
{return f__9676.cljs$lang$arity$19(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700,s__9702);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700,s__9702);
}
} else
{var t__9704 = cljs.core._first.call(null,args__9703);
var args__9705 = cljs.core._rest.call(null,args__9703);
if((argc === 20))
{if(f__9676.cljs$lang$arity$20)
{return f__9676.cljs$lang$arity$20(a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700,s__9702,t__9704);
} else
{return f__9676.call(null,a__9666,b__9668,c__9670,d__9672,e__9674,f__9676,g__9678,h__9680,i__9682,j__9684,k__9686,l__9688,m__9690,n__9692,o__9694,p__9696,q__9698,r__9700,s__9702,t__9704);
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
var fixed_arity__9720 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9721 = cljs.core.bounded_count.call(null,args,(fixed_arity__9720 + 1));
if((bc__9721 <= fixed_arity__9720))
{return cljs.core.apply_to.call(null,f,bc__9721,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9722 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9723 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9724 = cljs.core.bounded_count.call(null,arglist__9722,(fixed_arity__9723 + 1));
if((bc__9724 <= fixed_arity__9723))
{return cljs.core.apply_to.call(null,f,bc__9724,arglist__9722);
} else
{return f.cljs$lang$applyTo(arglist__9722);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9722));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9725 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9726 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9727 = cljs.core.bounded_count.call(null,arglist__9725,(fixed_arity__9726 + 1));
if((bc__9727 <= fixed_arity__9726))
{return cljs.core.apply_to.call(null,f,bc__9727,arglist__9725);
} else
{return f.cljs$lang$applyTo(arglist__9725);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9725));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9728 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9729 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9730 = cljs.core.bounded_count.call(null,arglist__9728,(fixed_arity__9729 + 1));
if((bc__9730 <= fixed_arity__9729))
{return cljs.core.apply_to.call(null,f,bc__9730,arglist__9728);
} else
{return f.cljs$lang$applyTo(arglist__9728);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9728));
}
});
var apply__6 = (function() { 
var G__9734__delegate = function (f,a,b,c,d,args){
var arglist__9731 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9732 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9733 = cljs.core.bounded_count.call(null,arglist__9731,(fixed_arity__9732 + 1));
if((bc__9733 <= fixed_arity__9732))
{return cljs.core.apply_to.call(null,f,bc__9733,arglist__9731);
} else
{return f.cljs$lang$applyTo(arglist__9731);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9731));
}
};
var G__9734 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9734__delegate.call(this, f, a, b, c, d, args);
};
G__9734.cljs$lang$maxFixedArity = 5;
G__9734.cljs$lang$applyTo = (function (arglist__9735){
var f = cljs.core.first(arglist__9735);
var a = cljs.core.first(cljs.core.next(arglist__9735));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9735)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9735))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9735)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9735)))));
return G__9734__delegate(f, a, b, c, d, args);
});
G__9734.cljs$lang$arity$variadic = G__9734__delegate;
return G__9734;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9736){
var obj = cljs.core.first(arglist__9736);
var f = cljs.core.first(cljs.core.next(arglist__9736));
var args = cljs.core.rest(cljs.core.next(arglist__9736));
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
var G__9737__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9737__delegate.call(this, x, y, more);
};
G__9737.cljs$lang$maxFixedArity = 2;
G__9737.cljs$lang$applyTo = (function (arglist__9738){
var x = cljs.core.first(arglist__9738);
var y = cljs.core.first(cljs.core.next(arglist__9738));
var more = cljs.core.rest(cljs.core.next(arglist__9738));
return G__9737__delegate(x, y, more);
});
G__9737.cljs$lang$arity$variadic = G__9737__delegate;
return G__9737;
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
var G__9739 = pred;
var G__9740 = cljs.core.next.call(null,coll);
pred = G__9739;
coll = G__9740;
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
{var or__3824__auto____9742 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9742))
{return or__3824__auto____9742;
} else
{{
var G__9743 = pred;
var G__9744 = cljs.core.next.call(null,coll);
pred = G__9743;
coll = G__9744;
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
var G__9745 = null;
var G__9745__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9745__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9745__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9745__3 = (function() { 
var G__9746__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9746 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9746__delegate.call(this, x, y, zs);
};
G__9746.cljs$lang$maxFixedArity = 2;
G__9746.cljs$lang$applyTo = (function (arglist__9747){
var x = cljs.core.first(arglist__9747);
var y = cljs.core.first(cljs.core.next(arglist__9747));
var zs = cljs.core.rest(cljs.core.next(arglist__9747));
return G__9746__delegate(x, y, zs);
});
G__9746.cljs$lang$arity$variadic = G__9746__delegate;
return G__9746;
})()
;
G__9745 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9745__0.call(this);
case 1:
return G__9745__1.call(this,x);
case 2:
return G__9745__2.call(this,x,y);
default:
return G__9745__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9745.cljs$lang$maxFixedArity = 2;
G__9745.cljs$lang$applyTo = G__9745__3.cljs$lang$applyTo;
return G__9745;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9748__delegate = function (args){
return x;
};
var G__9748 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9748__delegate.call(this, args);
};
G__9748.cljs$lang$maxFixedArity = 0;
G__9748.cljs$lang$applyTo = (function (arglist__9749){
var args = cljs.core.seq(arglist__9749);;
return G__9748__delegate(args);
});
G__9748.cljs$lang$arity$variadic = G__9748__delegate;
return G__9748;
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
var G__9756 = null;
var G__9756__0 = (function (){
return f.call(null,g.call(null));
});
var G__9756__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9756__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9756__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9756__4 = (function() { 
var G__9757__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9757__delegate.call(this, x, y, z, args);
};
G__9757.cljs$lang$maxFixedArity = 3;
G__9757.cljs$lang$applyTo = (function (arglist__9758){
var x = cljs.core.first(arglist__9758);
var y = cljs.core.first(cljs.core.next(arglist__9758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9758)));
return G__9757__delegate(x, y, z, args);
});
G__9757.cljs$lang$arity$variadic = G__9757__delegate;
return G__9757;
})()
;
G__9756 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9756__0.call(this);
case 1:
return G__9756__1.call(this,x);
case 2:
return G__9756__2.call(this,x,y);
case 3:
return G__9756__3.call(this,x,y,z);
default:
return G__9756__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9756.cljs$lang$maxFixedArity = 3;
G__9756.cljs$lang$applyTo = G__9756__4.cljs$lang$applyTo;
return G__9756;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9759 = null;
var G__9759__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9759__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9759__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9759__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9759__4 = (function() { 
var G__9760__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9760 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9760__delegate.call(this, x, y, z, args);
};
G__9760.cljs$lang$maxFixedArity = 3;
G__9760.cljs$lang$applyTo = (function (arglist__9761){
var x = cljs.core.first(arglist__9761);
var y = cljs.core.first(cljs.core.next(arglist__9761));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9761)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9761)));
return G__9760__delegate(x, y, z, args);
});
G__9760.cljs$lang$arity$variadic = G__9760__delegate;
return G__9760;
})()
;
G__9759 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9759__0.call(this);
case 1:
return G__9759__1.call(this,x);
case 2:
return G__9759__2.call(this,x,y);
case 3:
return G__9759__3.call(this,x,y,z);
default:
return G__9759__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9759.cljs$lang$maxFixedArity = 3;
G__9759.cljs$lang$applyTo = G__9759__4.cljs$lang$applyTo;
return G__9759;
})()
});
var comp__4 = (function() { 
var G__9762__delegate = function (f1,f2,f3,fs){
var fs__9753 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9763__delegate = function (args){
var ret__9754 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9753),args);
var fs__9755 = cljs.core.next.call(null,fs__9753);
while(true){
if(fs__9755)
{{
var G__9764 = cljs.core.first.call(null,fs__9755).call(null,ret__9754);
var G__9765 = cljs.core.next.call(null,fs__9755);
ret__9754 = G__9764;
fs__9755 = G__9765;
continue;
}
} else
{return ret__9754;
}
break;
}
};
var G__9763 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9763__delegate.call(this, args);
};
G__9763.cljs$lang$maxFixedArity = 0;
G__9763.cljs$lang$applyTo = (function (arglist__9766){
var args = cljs.core.seq(arglist__9766);;
return G__9763__delegate(args);
});
G__9763.cljs$lang$arity$variadic = G__9763__delegate;
return G__9763;
})()
;
};
var G__9762 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9762__delegate.call(this, f1, f2, f3, fs);
};
G__9762.cljs$lang$maxFixedArity = 3;
G__9762.cljs$lang$applyTo = (function (arglist__9767){
var f1 = cljs.core.first(arglist__9767);
var f2 = cljs.core.first(cljs.core.next(arglist__9767));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9767)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9767)));
return G__9762__delegate(f1, f2, f3, fs);
});
G__9762.cljs$lang$arity$variadic = G__9762__delegate;
return G__9762;
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
var G__9768__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9768 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9768__delegate.call(this, args);
};
G__9768.cljs$lang$maxFixedArity = 0;
G__9768.cljs$lang$applyTo = (function (arglist__9769){
var args = cljs.core.seq(arglist__9769);;
return G__9768__delegate(args);
});
G__9768.cljs$lang$arity$variadic = G__9768__delegate;
return G__9768;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9770__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9770 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9770__delegate.call(this, args);
};
G__9770.cljs$lang$maxFixedArity = 0;
G__9770.cljs$lang$applyTo = (function (arglist__9771){
var args = cljs.core.seq(arglist__9771);;
return G__9770__delegate(args);
});
G__9770.cljs$lang$arity$variadic = G__9770__delegate;
return G__9770;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9772__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
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
var partial__5 = (function() { 
var G__9774__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9775__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9775 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9775__delegate.call(this, args);
};
G__9775.cljs$lang$maxFixedArity = 0;
G__9775.cljs$lang$applyTo = (function (arglist__9776){
var args = cljs.core.seq(arglist__9776);;
return G__9775__delegate(args);
});
G__9775.cljs$lang$arity$variadic = G__9775__delegate;
return G__9775;
})()
;
};
var G__9774 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9774__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9774.cljs$lang$maxFixedArity = 4;
G__9774.cljs$lang$applyTo = (function (arglist__9777){
var f = cljs.core.first(arglist__9777);
var arg1 = cljs.core.first(cljs.core.next(arglist__9777));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9777)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9777))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9777))));
return G__9774__delegate(f, arg1, arg2, arg3, more);
});
G__9774.cljs$lang$arity$variadic = G__9774__delegate;
return G__9774;
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
var G__9778 = null;
var G__9778__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9778__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9778__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9778__4 = (function() { 
var G__9779__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9779 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9779__delegate.call(this, a, b, c, ds);
};
G__9779.cljs$lang$maxFixedArity = 3;
G__9779.cljs$lang$applyTo = (function (arglist__9780){
var a = cljs.core.first(arglist__9780);
var b = cljs.core.first(cljs.core.next(arglist__9780));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9780)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9780)));
return G__9779__delegate(a, b, c, ds);
});
G__9779.cljs$lang$arity$variadic = G__9779__delegate;
return G__9779;
})()
;
G__9778 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9778__1.call(this,a);
case 2:
return G__9778__2.call(this,a,b);
case 3:
return G__9778__3.call(this,a,b,c);
default:
return G__9778__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9778.cljs$lang$maxFixedArity = 3;
G__9778.cljs$lang$applyTo = G__9778__4.cljs$lang$applyTo;
return G__9778;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9781 = null;
var G__9781__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9781__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9781__4 = (function() { 
var G__9782__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9782 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9782__delegate.call(this, a, b, c, ds);
};
G__9782.cljs$lang$maxFixedArity = 3;
G__9782.cljs$lang$applyTo = (function (arglist__9783){
var a = cljs.core.first(arglist__9783);
var b = cljs.core.first(cljs.core.next(arglist__9783));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9783)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9783)));
return G__9782__delegate(a, b, c, ds);
});
G__9782.cljs$lang$arity$variadic = G__9782__delegate;
return G__9782;
})()
;
G__9781 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9781__2.call(this,a,b);
case 3:
return G__9781__3.call(this,a,b,c);
default:
return G__9781__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9781.cljs$lang$maxFixedArity = 3;
G__9781.cljs$lang$applyTo = G__9781__4.cljs$lang$applyTo;
return G__9781;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9784 = null;
var G__9784__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9784__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9784__4 = (function() { 
var G__9785__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9785 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9785__delegate.call(this, a, b, c, ds);
};
G__9785.cljs$lang$maxFixedArity = 3;
G__9785.cljs$lang$applyTo = (function (arglist__9786){
var a = cljs.core.first(arglist__9786);
var b = cljs.core.first(cljs.core.next(arglist__9786));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9786)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9786)));
return G__9785__delegate(a, b, c, ds);
});
G__9785.cljs$lang$arity$variadic = G__9785__delegate;
return G__9785;
})()
;
G__9784 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9784__2.call(this,a,b);
case 3:
return G__9784__3.call(this,a,b,c);
default:
return G__9784__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9784.cljs$lang$maxFixedArity = 3;
G__9784.cljs$lang$applyTo = G__9784__4.cljs$lang$applyTo;
return G__9784;
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
var mapi__9802 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9810 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9810)
{var s__9811 = temp__3974__auto____9810;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9811))
{var c__9812 = cljs.core.chunk_first.call(null,s__9811);
var size__9813 = cljs.core.count.call(null,c__9812);
var b__9814 = cljs.core.chunk_buffer.call(null,size__9813);
var n__2577__auto____9815 = size__9813;
var i__9816 = 0;
while(true){
if((i__9816 < n__2577__auto____9815))
{cljs.core.chunk_append.call(null,b__9814,f.call(null,(idx + i__9816),cljs.core._nth.call(null,c__9812,i__9816)));
{
var G__9817 = (i__9816 + 1);
i__9816 = G__9817;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9814),mapi.call(null,(idx + size__9813),cljs.core.chunk_rest.call(null,s__9811)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9811)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9811)));
}
} else
{return null;
}
}),null));
});
return mapi__9802.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9827 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9827)
{var s__9828 = temp__3974__auto____9827;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9828))
{var c__9829 = cljs.core.chunk_first.call(null,s__9828);
var size__9830 = cljs.core.count.call(null,c__9829);
var b__9831 = cljs.core.chunk_buffer.call(null,size__9830);
var n__2577__auto____9832 = size__9830;
var i__9833 = 0;
while(true){
if((i__9833 < n__2577__auto____9832))
{var x__9834 = f.call(null,cljs.core._nth.call(null,c__9829,i__9833));
if((x__9834 == null))
{} else
{cljs.core.chunk_append.call(null,b__9831,x__9834);
}
{
var G__9836 = (i__9833 + 1);
i__9833 = G__9836;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9831),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9828)));
} else
{var x__9835 = f.call(null,cljs.core.first.call(null,s__9828));
if((x__9835 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9828));
} else
{return cljs.core.cons.call(null,x__9835,keep.call(null,f,cljs.core.rest.call(null,s__9828)));
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
var keepi__9862 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9872 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9872)
{var s__9873 = temp__3974__auto____9872;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9873))
{var c__9874 = cljs.core.chunk_first.call(null,s__9873);
var size__9875 = cljs.core.count.call(null,c__9874);
var b__9876 = cljs.core.chunk_buffer.call(null,size__9875);
var n__2577__auto____9877 = size__9875;
var i__9878 = 0;
while(true){
if((i__9878 < n__2577__auto____9877))
{var x__9879 = f.call(null,(idx + i__9878),cljs.core._nth.call(null,c__9874,i__9878));
if((x__9879 == null))
{} else
{cljs.core.chunk_append.call(null,b__9876,x__9879);
}
{
var G__9881 = (i__9878 + 1);
i__9878 = G__9881;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9876),keepi.call(null,(idx + size__9875),cljs.core.chunk_rest.call(null,s__9873)));
} else
{var x__9880 = f.call(null,idx,cljs.core.first.call(null,s__9873));
if((x__9880 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9873));
} else
{return cljs.core.cons.call(null,x__9880,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9873)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9862.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9967 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9967))
{return p.call(null,y);
} else
{return and__3822__auto____9967;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9968 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9968))
{var and__3822__auto____9969 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9969))
{return p.call(null,z);
} else
{return and__3822__auto____9969;
}
} else
{return and__3822__auto____9968;
}
})());
});
var ep1__4 = (function() { 
var G__10038__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9970 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9970))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9970;
}
})());
};
var G__10038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10038__delegate.call(this, x, y, z, args);
};
G__10038.cljs$lang$maxFixedArity = 3;
G__10038.cljs$lang$applyTo = (function (arglist__10039){
var x = cljs.core.first(arglist__10039);
var y = cljs.core.first(cljs.core.next(arglist__10039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10039)));
return G__10038__delegate(x, y, z, args);
});
G__10038.cljs$lang$arity$variadic = G__10038__delegate;
return G__10038;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9982 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9982))
{return p2.call(null,x);
} else
{return and__3822__auto____9982;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9983 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9983))
{var and__3822__auto____9984 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9984))
{var and__3822__auto____9985 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9985))
{return p2.call(null,y);
} else
{return and__3822__auto____9985;
}
} else
{return and__3822__auto____9984;
}
} else
{return and__3822__auto____9983;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9986 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9986))
{var and__3822__auto____9987 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9987))
{var and__3822__auto____9988 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9988))
{var and__3822__auto____9989 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9989))
{var and__3822__auto____9990 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9990))
{return p2.call(null,z);
} else
{return and__3822__auto____9990;
}
} else
{return and__3822__auto____9989;
}
} else
{return and__3822__auto____9988;
}
} else
{return and__3822__auto____9987;
}
} else
{return and__3822__auto____9986;
}
})());
});
var ep2__4 = (function() { 
var G__10040__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9991 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9991))
{return cljs.core.every_QMARK_.call(null,(function (p1__9837_SHARP_){
var and__3822__auto____9992 = p1.call(null,p1__9837_SHARP_);
if(cljs.core.truth_(and__3822__auto____9992))
{return p2.call(null,p1__9837_SHARP_);
} else
{return and__3822__auto____9992;
}
}),args);
} else
{return and__3822__auto____9991;
}
})());
};
var G__10040 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10040__delegate.call(this, x, y, z, args);
};
G__10040.cljs$lang$maxFixedArity = 3;
G__10040.cljs$lang$applyTo = (function (arglist__10041){
var x = cljs.core.first(arglist__10041);
var y = cljs.core.first(cljs.core.next(arglist__10041));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10041)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10041)));
return G__10040__delegate(x, y, z, args);
});
G__10040.cljs$lang$arity$variadic = G__10040__delegate;
return G__10040;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10011 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10011))
{var and__3822__auto____10012 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10012))
{return p3.call(null,x);
} else
{return and__3822__auto____10012;
}
} else
{return and__3822__auto____10011;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10013 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10013))
{var and__3822__auto____10014 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10014))
{var and__3822__auto____10015 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10015))
{var and__3822__auto____10016 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10016))
{var and__3822__auto____10017 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10017))
{return p3.call(null,y);
} else
{return and__3822__auto____10017;
}
} else
{return and__3822__auto____10016;
}
} else
{return and__3822__auto____10015;
}
} else
{return and__3822__auto____10014;
}
} else
{return and__3822__auto____10013;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10018 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10018))
{var and__3822__auto____10019 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10019))
{var and__3822__auto____10020 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10020))
{var and__3822__auto____10021 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10021))
{var and__3822__auto____10022 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10022))
{var and__3822__auto____10023 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____10023))
{var and__3822__auto____10024 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10024))
{var and__3822__auto____10025 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____10025))
{return p3.call(null,z);
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
})());
});
var ep3__4 = (function() { 
var G__10042__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10026 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10026))
{return cljs.core.every_QMARK_.call(null,(function (p1__9838_SHARP_){
var and__3822__auto____10027 = p1.call(null,p1__9838_SHARP_);
if(cljs.core.truth_(and__3822__auto____10027))
{var and__3822__auto____10028 = p2.call(null,p1__9838_SHARP_);
if(cljs.core.truth_(and__3822__auto____10028))
{return p3.call(null,p1__9838_SHARP_);
} else
{return and__3822__auto____10028;
}
} else
{return and__3822__auto____10027;
}
}),args);
} else
{return and__3822__auto____10026;
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
var G__10044__delegate = function (p1,p2,p3,ps){
var ps__10029 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9839_SHARP_){
return p1__9839_SHARP_.call(null,x);
}),ps__10029);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9840_SHARP_){
var and__3822__auto____10034 = p1__9840_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10034))
{return p1__9840_SHARP_.call(null,y);
} else
{return and__3822__auto____10034;
}
}),ps__10029);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9841_SHARP_){
var and__3822__auto____10035 = p1__9841_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10035))
{var and__3822__auto____10036 = p1__9841_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____10036))
{return p1__9841_SHARP_.call(null,z);
} else
{return and__3822__auto____10036;
}
} else
{return and__3822__auto____10035;
}
}),ps__10029);
});
var epn__4 = (function() { 
var G__10045__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10037 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10037))
{return cljs.core.every_QMARK_.call(null,(function (p1__9842_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9842_SHARP_,args);
}),ps__10029);
} else
{return and__3822__auto____10037;
}
})());
};
var G__10045 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10045__delegate.call(this, x, y, z, args);
};
G__10045.cljs$lang$maxFixedArity = 3;
G__10045.cljs$lang$applyTo = (function (arglist__10046){
var x = cljs.core.first(arglist__10046);
var y = cljs.core.first(cljs.core.next(arglist__10046));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10046)));
return G__10045__delegate(x, y, z, args);
});
G__10045.cljs$lang$arity$variadic = G__10045__delegate;
return G__10045;
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
var G__10044 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10044__delegate.call(this, p1, p2, p3, ps);
};
G__10044.cljs$lang$maxFixedArity = 3;
G__10044.cljs$lang$applyTo = (function (arglist__10047){
var p1 = cljs.core.first(arglist__10047);
var p2 = cljs.core.first(cljs.core.next(arglist__10047));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10047)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10047)));
return G__10044__delegate(p1, p2, p3, ps);
});
G__10044.cljs$lang$arity$variadic = G__10044__delegate;
return G__10044;
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
var or__3824__auto____10128 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10128))
{return or__3824__auto____10128;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____10129 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10129))
{return or__3824__auto____10129;
} else
{var or__3824__auto____10130 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____10130))
{return or__3824__auto____10130;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10199__delegate = function (x,y,z,args){
var or__3824__auto____10131 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10131))
{return or__3824__auto____10131;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10199__delegate.call(this, x, y, z, args);
};
G__10199.cljs$lang$maxFixedArity = 3;
G__10199.cljs$lang$applyTo = (function (arglist__10200){
var x = cljs.core.first(arglist__10200);
var y = cljs.core.first(cljs.core.next(arglist__10200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10200)));
return G__10199__delegate(x, y, z, args);
});
G__10199.cljs$lang$arity$variadic = G__10199__delegate;
return G__10199;
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
var or__3824__auto____10143 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10143))
{return or__3824__auto____10143;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____10144 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10144))
{return or__3824__auto____10144;
} else
{var or__3824__auto____10145 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10145))
{return or__3824__auto____10145;
} else
{var or__3824__auto____10146 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10146))
{return or__3824__auto____10146;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____10147 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10147))
{return or__3824__auto____10147;
} else
{var or__3824__auto____10148 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10148))
{return or__3824__auto____10148;
} else
{var or__3824__auto____10149 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10149))
{return or__3824__auto____10149;
} else
{var or__3824__auto____10150 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10150))
{return or__3824__auto____10150;
} else
{var or__3824__auto____10151 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10151))
{return or__3824__auto____10151;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10201__delegate = function (x,y,z,args){
var or__3824__auto____10152 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10152))
{return or__3824__auto____10152;
} else
{return cljs.core.some.call(null,(function (p1__9882_SHARP_){
var or__3824__auto____10153 = p1.call(null,p1__9882_SHARP_);
if(cljs.core.truth_(or__3824__auto____10153))
{return or__3824__auto____10153;
} else
{return p2.call(null,p1__9882_SHARP_);
}
}),args);
}
};
var G__10201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10201__delegate.call(this, x, y, z, args);
};
G__10201.cljs$lang$maxFixedArity = 3;
G__10201.cljs$lang$applyTo = (function (arglist__10202){
var x = cljs.core.first(arglist__10202);
var y = cljs.core.first(cljs.core.next(arglist__10202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10202)));
return G__10201__delegate(x, y, z, args);
});
G__10201.cljs$lang$arity$variadic = G__10201__delegate;
return G__10201;
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
var or__3824__auto____10172 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10172))
{return or__3824__auto____10172;
} else
{var or__3824__auto____10173 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10173))
{return or__3824__auto____10173;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____10174 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10174))
{return or__3824__auto____10174;
} else
{var or__3824__auto____10175 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10175))
{return or__3824__auto____10175;
} else
{var or__3824__auto____10176 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10176))
{return or__3824__auto____10176;
} else
{var or__3824__auto____10177 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10177))
{return or__3824__auto____10177;
} else
{var or__3824__auto____10178 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10178))
{return or__3824__auto____10178;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____10179 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10179))
{return or__3824__auto____10179;
} else
{var or__3824__auto____10180 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10180))
{return or__3824__auto____10180;
} else
{var or__3824__auto____10181 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10181))
{return or__3824__auto____10181;
} else
{var or__3824__auto____10182 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10182))
{return or__3824__auto____10182;
} else
{var or__3824__auto____10183 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10183))
{return or__3824__auto____10183;
} else
{var or__3824__auto____10184 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____10184))
{return or__3824__auto____10184;
} else
{var or__3824__auto____10185 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10185))
{return or__3824__auto____10185;
} else
{var or__3824__auto____10186 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____10186))
{return or__3824__auto____10186;
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
var G__10203__delegate = function (x,y,z,args){
var or__3824__auto____10187 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10187))
{return or__3824__auto____10187;
} else
{return cljs.core.some.call(null,(function (p1__9883_SHARP_){
var or__3824__auto____10188 = p1.call(null,p1__9883_SHARP_);
if(cljs.core.truth_(or__3824__auto____10188))
{return or__3824__auto____10188;
} else
{var or__3824__auto____10189 = p2.call(null,p1__9883_SHARP_);
if(cljs.core.truth_(or__3824__auto____10189))
{return or__3824__auto____10189;
} else
{return p3.call(null,p1__9883_SHARP_);
}
}
}),args);
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
var G__10205__delegate = function (p1,p2,p3,ps){
var ps__10190 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9884_SHARP_){
return p1__9884_SHARP_.call(null,x);
}),ps__10190);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9885_SHARP_){
var or__3824__auto____10195 = p1__9885_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10195))
{return or__3824__auto____10195;
} else
{return p1__9885_SHARP_.call(null,y);
}
}),ps__10190);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9886_SHARP_){
var or__3824__auto____10196 = p1__9886_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10196))
{return or__3824__auto____10196;
} else
{var or__3824__auto____10197 = p1__9886_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____10197))
{return or__3824__auto____10197;
} else
{return p1__9886_SHARP_.call(null,z);
}
}
}),ps__10190);
});
var spn__4 = (function() { 
var G__10206__delegate = function (x,y,z,args){
var or__3824__auto____10198 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10198))
{return or__3824__auto____10198;
} else
{return cljs.core.some.call(null,(function (p1__9887_SHARP_){
return cljs.core.some.call(null,p1__9887_SHARP_,args);
}),ps__10190);
}
};
var G__10206 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10206__delegate.call(this, x, y, z, args);
};
G__10206.cljs$lang$maxFixedArity = 3;
G__10206.cljs$lang$applyTo = (function (arglist__10207){
var x = cljs.core.first(arglist__10207);
var y = cljs.core.first(cljs.core.next(arglist__10207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10207)));
return G__10206__delegate(x, y, z, args);
});
G__10206.cljs$lang$arity$variadic = G__10206__delegate;
return G__10206;
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
var G__10205 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10205__delegate.call(this, p1, p2, p3, ps);
};
G__10205.cljs$lang$maxFixedArity = 3;
G__10205.cljs$lang$applyTo = (function (arglist__10208){
var p1 = cljs.core.first(arglist__10208);
var p2 = cljs.core.first(cljs.core.next(arglist__10208));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10208)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10208)));
return G__10205__delegate(p1, p2, p3, ps);
});
G__10205.cljs$lang$arity$variadic = G__10205__delegate;
return G__10205;
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
var temp__3974__auto____10227 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10227)
{var s__10228 = temp__3974__auto____10227;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10228))
{var c__10229 = cljs.core.chunk_first.call(null,s__10228);
var size__10230 = cljs.core.count.call(null,c__10229);
var b__10231 = cljs.core.chunk_buffer.call(null,size__10230);
var n__2577__auto____10232 = size__10230;
var i__10233 = 0;
while(true){
if((i__10233 < n__2577__auto____10232))
{cljs.core.chunk_append.call(null,b__10231,f.call(null,cljs.core._nth.call(null,c__10229,i__10233)));
{
var G__10245 = (i__10233 + 1);
i__10233 = G__10245;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10231),map.call(null,f,cljs.core.chunk_rest.call(null,s__10228)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10228)),map.call(null,f,cljs.core.rest.call(null,s__10228)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10234 = cljs.core.seq.call(null,c1);
var s2__10235 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10236 = s1__10234;
if(and__3822__auto____10236)
{return s2__10235;
} else
{return and__3822__auto____10236;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10234),cljs.core.first.call(null,s2__10235)),map.call(null,f,cljs.core.rest.call(null,s1__10234),cljs.core.rest.call(null,s2__10235)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10237 = cljs.core.seq.call(null,c1);
var s2__10238 = cljs.core.seq.call(null,c2);
var s3__10239 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____10240 = s1__10237;
if(and__3822__auto____10240)
{var and__3822__auto____10241 = s2__10238;
if(and__3822__auto____10241)
{return s3__10239;
} else
{return and__3822__auto____10241;
}
} else
{return and__3822__auto____10240;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10237),cljs.core.first.call(null,s2__10238),cljs.core.first.call(null,s3__10239)),map.call(null,f,cljs.core.rest.call(null,s1__10237),cljs.core.rest.call(null,s2__10238),cljs.core.rest.call(null,s3__10239)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10246__delegate = function (f,c1,c2,c3,colls){
var step__10244 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10243 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10243))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10243),step.call(null,map.call(null,cljs.core.rest,ss__10243)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10048_SHARP_){
return cljs.core.apply.call(null,f,p1__10048_SHARP_);
}),step__10244.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10246 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10246__delegate.call(this, f, c1, c2, c3, colls);
};
G__10246.cljs$lang$maxFixedArity = 4;
G__10246.cljs$lang$applyTo = (function (arglist__10247){
var f = cljs.core.first(arglist__10247);
var c1 = cljs.core.first(cljs.core.next(arglist__10247));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10247)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10247))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10247))));
return G__10246__delegate(f, c1, c2, c3, colls);
});
G__10246.cljs$lang$arity$variadic = G__10246__delegate;
return G__10246;
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
{var temp__3974__auto____10250 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10250)
{var s__10251 = temp__3974__auto____10250;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10251),take.call(null,(n - 1),cljs.core.rest.call(null,s__10251)));
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
var step__10257 = (function (n,coll){
while(true){
var s__10255 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10256 = (n > 0);
if(and__3822__auto____10256)
{return s__10255;
} else
{return and__3822__auto____10256;
}
})()))
{{
var G__10258 = (n - 1);
var G__10259 = cljs.core.rest.call(null,s__10255);
n = G__10258;
coll = G__10259;
continue;
}
} else
{return s__10255;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10257.call(null,n,coll);
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
var s__10262 = cljs.core.seq.call(null,coll);
var lead__10263 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10263)
{{
var G__10264 = cljs.core.next.call(null,s__10262);
var G__10265 = cljs.core.next.call(null,lead__10263);
s__10262 = G__10264;
lead__10263 = G__10265;
continue;
}
} else
{return s__10262;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10271 = (function (pred,coll){
while(true){
var s__10269 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10270 = s__10269;
if(and__3822__auto____10270)
{return pred.call(null,cljs.core.first.call(null,s__10269));
} else
{return and__3822__auto____10270;
}
})()))
{{
var G__10272 = pred;
var G__10273 = cljs.core.rest.call(null,s__10269);
pred = G__10272;
coll = G__10273;
continue;
}
} else
{return s__10269;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10271.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10276 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10276)
{var s__10277 = temp__3974__auto____10276;
return cljs.core.concat.call(null,s__10277,cycle.call(null,s__10277));
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
var s1__10282 = cljs.core.seq.call(null,c1);
var s2__10283 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10284 = s1__10282;
if(and__3822__auto____10284)
{return s2__10283;
} else
{return and__3822__auto____10284;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10282),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10283),interleave.call(null,cljs.core.rest.call(null,s1__10282),cljs.core.rest.call(null,s2__10283))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10286__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10285 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10285))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10285),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10285)));
} else
{return null;
}
}),null));
};
var G__10286 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10286__delegate.call(this, c1, c2, colls);
};
G__10286.cljs$lang$maxFixedArity = 2;
G__10286.cljs$lang$applyTo = (function (arglist__10287){
var c1 = cljs.core.first(arglist__10287);
var c2 = cljs.core.first(cljs.core.next(arglist__10287));
var colls = cljs.core.rest(cljs.core.next(arglist__10287));
return G__10286__delegate(c1, c2, colls);
});
G__10286.cljs$lang$arity$variadic = G__10286__delegate;
return G__10286;
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
var cat__10297 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10295 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10295)
{var coll__10296 = temp__3971__auto____10295;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10296),cat.call(null,cljs.core.rest.call(null,coll__10296),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10297.call(null,null,colls);
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
var G__10298__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10298 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10298__delegate.call(this, f, coll, colls);
};
G__10298.cljs$lang$maxFixedArity = 2;
G__10298.cljs$lang$applyTo = (function (arglist__10299){
var f = cljs.core.first(arglist__10299);
var coll = cljs.core.first(cljs.core.next(arglist__10299));
var colls = cljs.core.rest(cljs.core.next(arglist__10299));
return G__10298__delegate(f, coll, colls);
});
G__10298.cljs$lang$arity$variadic = G__10298__delegate;
return G__10298;
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
var temp__3974__auto____10309 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10309)
{var s__10310 = temp__3974__auto____10309;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10310))
{var c__10311 = cljs.core.chunk_first.call(null,s__10310);
var size__10312 = cljs.core.count.call(null,c__10311);
var b__10313 = cljs.core.chunk_buffer.call(null,size__10312);
var n__2577__auto____10314 = size__10312;
var i__10315 = 0;
while(true){
if((i__10315 < n__2577__auto____10314))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10311,i__10315))))
{cljs.core.chunk_append.call(null,b__10313,cljs.core._nth.call(null,c__10311,i__10315));
} else
{}
{
var G__10318 = (i__10315 + 1);
i__10315 = G__10318;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10313),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10310)));
} else
{var f__10316 = cljs.core.first.call(null,s__10310);
var r__10317 = cljs.core.rest.call(null,s__10310);
if(cljs.core.truth_(pred.call(null,f__10316)))
{return cljs.core.cons.call(null,f__10316,filter.call(null,pred,r__10317));
} else
{return filter.call(null,pred,r__10317);
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
var walk__10321 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10321.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10319_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10319_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10325__10326 = to;
if(G__10325__10326)
{if((function (){var or__3824__auto____10327 = (G__10325__10326.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____10327)
{return or__3824__auto____10327;
} else
{return G__10325__10326.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10325__10326.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10325__10326);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10325__10326);
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
var G__10328__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10328 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10328__delegate.call(this, f, c1, c2, c3, colls);
};
G__10328.cljs$lang$maxFixedArity = 4;
G__10328.cljs$lang$applyTo = (function (arglist__10329){
var f = cljs.core.first(arglist__10329);
var c1 = cljs.core.first(cljs.core.next(arglist__10329));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10329)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10329))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10329))));
return G__10328__delegate(f, c1, c2, c3, colls);
});
G__10328.cljs$lang$arity$variadic = G__10328__delegate;
return G__10328;
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
var temp__3974__auto____10336 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10336)
{var s__10337 = temp__3974__auto____10336;
var p__10338 = cljs.core.take.call(null,n,s__10337);
if((n === cljs.core.count.call(null,p__10338)))
{return cljs.core.cons.call(null,p__10338,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10337)));
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
var temp__3974__auto____10339 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10339)
{var s__10340 = temp__3974__auto____10339;
var p__10341 = cljs.core.take.call(null,n,s__10340);
if((n === cljs.core.count.call(null,p__10341)))
{return cljs.core.cons.call(null,p__10341,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10340)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10341,pad)));
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
var sentinel__10346 = cljs.core.lookup_sentinel;
var m__10347 = m;
var ks__10348 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10348)
{var m__10349 = cljs.core._lookup.call(null,m__10347,cljs.core.first.call(null,ks__10348),sentinel__10346);
if((sentinel__10346 === m__10349))
{return not_found;
} else
{{
var G__10350 = sentinel__10346;
var G__10351 = m__10349;
var G__10352 = cljs.core.next.call(null,ks__10348);
sentinel__10346 = G__10350;
m__10347 = G__10351;
ks__10348 = G__10352;
continue;
}
}
} else
{return m__10347;
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
cljs.core.assoc_in = (function assoc_in(m,p__10353,v){
var vec__10358__10359 = p__10353;
var k__10360 = cljs.core.nth.call(null,vec__10358__10359,0,null);
var ks__10361 = cljs.core.nthnext.call(null,vec__10358__10359,1);
if(cljs.core.truth_(ks__10361))
{return cljs.core.assoc.call(null,m,k__10360,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10360,null),ks__10361,v));
} else
{return cljs.core.assoc.call(null,m,k__10360,v);
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
var update_in__delegate = function (m,p__10362,f,args){
var vec__10367__10368 = p__10362;
var k__10369 = cljs.core.nth.call(null,vec__10367__10368,0,null);
var ks__10370 = cljs.core.nthnext.call(null,vec__10367__10368,1);
if(cljs.core.truth_(ks__10370))
{return cljs.core.assoc.call(null,m,k__10369,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10369,null),ks__10370,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10369,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10369,null),args));
}
};
var update_in = function (m,p__10362,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10362, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10371){
var m = cljs.core.first(arglist__10371);
var p__10362 = cljs.core.first(cljs.core.next(arglist__10371));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10371)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10371)));
return update_in__delegate(m, p__10362, f, args);
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
var this__10374 = this;
var h__2242__auto____10375 = this__10374.__hash;
if(!((h__2242__auto____10375 == null)))
{return h__2242__auto____10375;
} else
{var h__2242__auto____10376 = cljs.core.hash_coll.call(null,coll);
this__10374.__hash = h__2242__auto____10376;
return h__2242__auto____10376;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10377 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10378 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10379 = this;
var new_array__10380 = this__10379.array.slice();
(new_array__10380[k] = v);
return (new cljs.core.Vector(this__10379.meta,new_array__10380,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10411 = null;
var G__10411__2 = (function (this_sym10381,k){
var this__10383 = this;
var this_sym10381__10384 = this;
var coll__10385 = this_sym10381__10384;
return coll__10385.cljs$core$ILookup$_lookup$arity$2(coll__10385,k);
});
var G__10411__3 = (function (this_sym10382,k,not_found){
var this__10383 = this;
var this_sym10382__10386 = this;
var coll__10387 = this_sym10382__10386;
return coll__10387.cljs$core$ILookup$_lookup$arity$3(coll__10387,k,not_found);
});
G__10411 = function(this_sym10382,k,not_found){
switch(arguments.length){
case 2:
return G__10411__2.call(this,this_sym10382,k);
case 3:
return G__10411__3.call(this,this_sym10382,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10411;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10372,args10373){
var this__10388 = this;
return this_sym10372.call.apply(this_sym10372,[this_sym10372].concat(args10373.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10389 = this;
var new_array__10390 = this__10389.array.slice();
new_array__10390.push(o);
return (new cljs.core.Vector(this__10389.meta,new_array__10390,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10391 = this;
var this__10392 = this;
return cljs.core.pr_str.call(null,this__10392);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10393 = this;
return cljs.core.ci_reduce.call(null,this__10393.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10394 = this;
return cljs.core.ci_reduce.call(null,this__10394.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10395 = this;
if((this__10395.array.length > 0))
{var vector_seq__10396 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10395.array.length))
{return cljs.core.cons.call(null,(this__10395.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10396.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10397 = this;
return this__10397.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10398 = this;
var count__10399 = this__10398.array.length;
if((count__10399 > 0))
{return (this__10398.array[(count__10399 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10400 = this;
if((this__10400.array.length > 0))
{var new_array__10401 = this__10400.array.slice();
new_array__10401.pop();
return (new cljs.core.Vector(this__10400.meta,new_array__10401,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10402 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10403 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10404 = this;
return (new cljs.core.Vector(meta,this__10404.array,this__10404.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10405 = this;
return this__10405.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10406 = this;
if((function (){var and__3822__auto____10407 = (0 <= n);
if(and__3822__auto____10407)
{return (n < this__10406.array.length);
} else
{return and__3822__auto____10407;
}
})())
{return (this__10406.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10408 = this;
if((function (){var and__3822__auto____10409 = (0 <= n);
if(and__3822__auto____10409)
{return (n < this__10408.array.length);
} else
{return and__3822__auto____10409;
}
})())
{return (this__10408.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10410 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10410.meta);
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
var cnt__10413 = pv.cnt;
if((cnt__10413 < 32))
{return 0;
} else
{return (((cnt__10413 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10419 = level;
var ret__10420 = node;
while(true){
if((ll__10419 === 0))
{return ret__10420;
} else
{var embed__10421 = ret__10420;
var r__10422 = cljs.core.pv_fresh_node.call(null,edit);
var ___10423 = cljs.core.pv_aset.call(null,r__10422,0,embed__10421);
{
var G__10424 = (ll__10419 - 5);
var G__10425 = r__10422;
ll__10419 = G__10424;
ret__10420 = G__10425;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10431 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10432 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10431,subidx__10432,tailnode);
return ret__10431;
} else
{var child__10433 = cljs.core.pv_aget.call(null,parent,subidx__10432);
if(!((child__10433 == null)))
{var node_to_insert__10434 = push_tail.call(null,pv,(level - 5),child__10433,tailnode);
cljs.core.pv_aset.call(null,ret__10431,subidx__10432,node_to_insert__10434);
return ret__10431;
} else
{var node_to_insert__10435 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10431,subidx__10432,node_to_insert__10435);
return ret__10431;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10439 = (0 <= i);
if(and__3822__auto____10439)
{return (i < pv.cnt);
} else
{return and__3822__auto____10439;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10440 = pv.root;
var level__10441 = pv.shift;
while(true){
if((level__10441 > 0))
{{
var G__10442 = cljs.core.pv_aget.call(null,node__10440,((i >>> level__10441) & 31));
var G__10443 = (level__10441 - 5);
node__10440 = G__10442;
level__10441 = G__10443;
continue;
}
} else
{return node__10440.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10446 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10446,(i & 31),val);
return ret__10446;
} else
{var subidx__10447 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10446,subidx__10447,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10447),i,val));
return ret__10446;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10453 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10454 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10453));
if((function (){var and__3822__auto____10455 = (new_child__10454 == null);
if(and__3822__auto____10455)
{return (subidx__10453 === 0);
} else
{return and__3822__auto____10455;
}
})())
{return null;
} else
{var ret__10456 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10456,subidx__10453,new_child__10454);
return ret__10456;
}
} else
{if((subidx__10453 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10457 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10457,subidx__10453,null);
return ret__10457;
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
var this__10460 = this;
return (new cljs.core.TransientVector(this__10460.cnt,this__10460.shift,cljs.core.tv_editable_root.call(null,this__10460.root),cljs.core.tv_editable_tail.call(null,this__10460.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10461 = this;
var h__2242__auto____10462 = this__10461.__hash;
if(!((h__2242__auto____10462 == null)))
{return h__2242__auto____10462;
} else
{var h__2242__auto____10463 = cljs.core.hash_coll.call(null,coll);
this__10461.__hash = h__2242__auto____10463;
return h__2242__auto____10463;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10464 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10465 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10466 = this;
if((function (){var and__3822__auto____10467 = (0 <= k);
if(and__3822__auto____10467)
{return (k < this__10466.cnt);
} else
{return and__3822__auto____10467;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10468 = this__10466.tail.slice();
(new_tail__10468[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10466.meta,this__10466.cnt,this__10466.shift,this__10466.root,new_tail__10468,null));
} else
{return (new cljs.core.PersistentVector(this__10466.meta,this__10466.cnt,this__10466.shift,cljs.core.do_assoc.call(null,coll,this__10466.shift,this__10466.root,k,v),this__10466.tail,null));
}
} else
{if((k === this__10466.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10466.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10516 = null;
var G__10516__2 = (function (this_sym10469,k){
var this__10471 = this;
var this_sym10469__10472 = this;
var coll__10473 = this_sym10469__10472;
return coll__10473.cljs$core$ILookup$_lookup$arity$2(coll__10473,k);
});
var G__10516__3 = (function (this_sym10470,k,not_found){
var this__10471 = this;
var this_sym10470__10474 = this;
var coll__10475 = this_sym10470__10474;
return coll__10475.cljs$core$ILookup$_lookup$arity$3(coll__10475,k,not_found);
});
G__10516 = function(this_sym10470,k,not_found){
switch(arguments.length){
case 2:
return G__10516__2.call(this,this_sym10470,k);
case 3:
return G__10516__3.call(this,this_sym10470,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10516;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10458,args10459){
var this__10476 = this;
return this_sym10458.call.apply(this_sym10458,[this_sym10458].concat(args10459.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10477 = this;
var step_init__10478 = [0,init];
var i__10479 = 0;
while(true){
if((i__10479 < this__10477.cnt))
{var arr__10480 = cljs.core.array_for.call(null,v,i__10479);
var len__10481 = arr__10480.length;
var init__10485 = (function (){var j__10482 = 0;
var init__10483 = (step_init__10478[1]);
while(true){
if((j__10482 < len__10481))
{var init__10484 = f.call(null,init__10483,(j__10482 + i__10479),(arr__10480[j__10482]));
if(cljs.core.reduced_QMARK_.call(null,init__10484))
{return init__10484;
} else
{{
var G__10517 = (j__10482 + 1);
var G__10518 = init__10484;
j__10482 = G__10517;
init__10483 = G__10518;
continue;
}
}
} else
{(step_init__10478[0] = len__10481);
(step_init__10478[1] = init__10483);
return init__10483;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10485))
{return cljs.core.deref.call(null,init__10485);
} else
{{
var G__10519 = (i__10479 + (step_init__10478[0]));
i__10479 = G__10519;
continue;
}
}
} else
{return (step_init__10478[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10486 = this;
if(((this__10486.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10487 = this__10486.tail.slice();
new_tail__10487.push(o);
return (new cljs.core.PersistentVector(this__10486.meta,(this__10486.cnt + 1),this__10486.shift,this__10486.root,new_tail__10487,null));
} else
{var root_overflow_QMARK___10488 = ((this__10486.cnt >>> 5) > (1 << this__10486.shift));
var new_shift__10489 = ((root_overflow_QMARK___10488)?(this__10486.shift + 5):this__10486.shift);
var new_root__10491 = ((root_overflow_QMARK___10488)?(function (){var n_r__10490 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10490,0,this__10486.root);
cljs.core.pv_aset.call(null,n_r__10490,1,cljs.core.new_path.call(null,null,this__10486.shift,(new cljs.core.VectorNode(null,this__10486.tail))));
return n_r__10490;
})():cljs.core.push_tail.call(null,coll,this__10486.shift,this__10486.root,(new cljs.core.VectorNode(null,this__10486.tail))));
return (new cljs.core.PersistentVector(this__10486.meta,(this__10486.cnt + 1),new_shift__10489,new_root__10491,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10492 = this;
if((this__10492.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10492.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10493 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10494 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10495 = this;
var this__10496 = this;
return cljs.core.pr_str.call(null,this__10496);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10497 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10498 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10499 = this;
if((this__10499.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10500 = this;
return this__10500.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10501 = this;
if((this__10501.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10501.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10502 = this;
if((this__10502.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10502.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10502.meta);
} else
{if((1 < (this__10502.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10502.meta,(this__10502.cnt - 1),this__10502.shift,this__10502.root,this__10502.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10503 = cljs.core.array_for.call(null,coll,(this__10502.cnt - 2));
var nr__10504 = cljs.core.pop_tail.call(null,coll,this__10502.shift,this__10502.root);
var new_root__10505 = (((nr__10504 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10504);
var cnt_1__10506 = (this__10502.cnt - 1);
if((function (){var and__3822__auto____10507 = (5 < this__10502.shift);
if(and__3822__auto____10507)
{return (cljs.core.pv_aget.call(null,new_root__10505,1) == null);
} else
{return and__3822__auto____10507;
}
})())
{return (new cljs.core.PersistentVector(this__10502.meta,cnt_1__10506,(this__10502.shift - 5),cljs.core.pv_aget.call(null,new_root__10505,0),new_tail__10503,null));
} else
{return (new cljs.core.PersistentVector(this__10502.meta,cnt_1__10506,this__10502.shift,new_root__10505,new_tail__10503,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10508 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10509 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10510 = this;
return (new cljs.core.PersistentVector(meta,this__10510.cnt,this__10510.shift,this__10510.root,this__10510.tail,this__10510.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10511 = this;
return this__10511.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10512 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10513 = this;
if((function (){var and__3822__auto____10514 = (0 <= n);
if(and__3822__auto____10514)
{return (n < this__10513.cnt);
} else
{return and__3822__auto____10514;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10515 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10515.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10520 = xs.length;
var xs__10521 = (((no_clone === true))?xs:xs.slice());
if((l__10520 < 32))
{return (new cljs.core.PersistentVector(null,l__10520,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10521,null));
} else
{var node__10522 = xs__10521.slice(0,32);
var v__10523 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10522,null));
var i__10524 = 32;
var out__10525 = cljs.core._as_transient.call(null,v__10523);
while(true){
if((i__10524 < l__10520))
{{
var G__10526 = (i__10524 + 1);
var G__10527 = cljs.core.conj_BANG_.call(null,out__10525,(xs__10521[i__10524]));
i__10524 = G__10526;
out__10525 = G__10527;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10525);
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
vector.cljs$lang$applyTo = (function (arglist__10528){
var args = cljs.core.seq(arglist__10528);;
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
var this__10529 = this;
if(((this__10529.off + 1) < this__10529.node.length))
{var s__10530 = cljs.core.chunked_seq.call(null,this__10529.vec,this__10529.node,this__10529.i,(this__10529.off + 1));
if((s__10530 == null))
{return null;
} else
{return s__10530;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10531 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10532 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10533 = this;
return (this__10533.node[this__10533.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10534 = this;
if(((this__10534.off + 1) < this__10534.node.length))
{var s__10535 = cljs.core.chunked_seq.call(null,this__10534.vec,this__10534.node,this__10534.i,(this__10534.off + 1));
if((s__10535 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10535;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10536 = this;
var l__10537 = this__10536.node.length;
var s__10538 = ((((this__10536.i + l__10537) < cljs.core._count.call(null,this__10536.vec)))?cljs.core.chunked_seq.call(null,this__10536.vec,(this__10536.i + l__10537),0):null);
if((s__10538 == null))
{return null;
} else
{return s__10538;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10539 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10540 = this;
return cljs.core.chunked_seq.call(null,this__10540.vec,this__10540.node,this__10540.i,this__10540.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10541 = this;
return this__10541.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10542 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10542.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10543 = this;
return cljs.core.array_chunk.call(null,this__10543.node,this__10543.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10544 = this;
var l__10545 = this__10544.node.length;
var s__10546 = ((((this__10544.i + l__10545) < cljs.core._count.call(null,this__10544.vec)))?cljs.core.chunked_seq.call(null,this__10544.vec,(this__10544.i + l__10545),0):null);
if((s__10546 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10546;
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
var this__10549 = this;
var h__2242__auto____10550 = this__10549.__hash;
if(!((h__2242__auto____10550 == null)))
{return h__2242__auto____10550;
} else
{var h__2242__auto____10551 = cljs.core.hash_coll.call(null,coll);
this__10549.__hash = h__2242__auto____10551;
return h__2242__auto____10551;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10552 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10553 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10554 = this;
var v_pos__10555 = (this__10554.start + key);
return (new cljs.core.Subvec(this__10554.meta,cljs.core._assoc.call(null,this__10554.v,v_pos__10555,val),this__10554.start,((this__10554.end > (v_pos__10555 + 1)) ? this__10554.end : (v_pos__10555 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10581 = null;
var G__10581__2 = (function (this_sym10556,k){
var this__10558 = this;
var this_sym10556__10559 = this;
var coll__10560 = this_sym10556__10559;
return coll__10560.cljs$core$ILookup$_lookup$arity$2(coll__10560,k);
});
var G__10581__3 = (function (this_sym10557,k,not_found){
var this__10558 = this;
var this_sym10557__10561 = this;
var coll__10562 = this_sym10557__10561;
return coll__10562.cljs$core$ILookup$_lookup$arity$3(coll__10562,k,not_found);
});
G__10581 = function(this_sym10557,k,not_found){
switch(arguments.length){
case 2:
return G__10581__2.call(this,this_sym10557,k);
case 3:
return G__10581__3.call(this,this_sym10557,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10581;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10547,args10548){
var this__10563 = this;
return this_sym10547.call.apply(this_sym10547,[this_sym10547].concat(args10548.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10564 = this;
return (new cljs.core.Subvec(this__10564.meta,cljs.core._assoc_n.call(null,this__10564.v,this__10564.end,o),this__10564.start,(this__10564.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10565 = this;
var this__10566 = this;
return cljs.core.pr_str.call(null,this__10566);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10567 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10568 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10569 = this;
var subvec_seq__10570 = (function subvec_seq(i){
if((i === this__10569.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10569.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10570.call(null,this__10569.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10571 = this;
return (this__10571.end - this__10571.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10572 = this;
return cljs.core._nth.call(null,this__10572.v,(this__10572.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10573 = this;
if((this__10573.start === this__10573.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10573.meta,this__10573.v,this__10573.start,(this__10573.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10574 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10575 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10576 = this;
return (new cljs.core.Subvec(meta,this__10576.v,this__10576.start,this__10576.end,this__10576.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10577 = this;
return this__10577.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10578 = this;
return cljs.core._nth.call(null,this__10578.v,(this__10578.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10579 = this;
return cljs.core._nth.call(null,this__10579.v,(this__10579.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10580 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10580.meta);
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
var ret__10583 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10583,0,tl.length);
return ret__10583;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10587 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10588 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10587,subidx__10588,(((level === 5))?tail_node:(function (){var child__10589 = cljs.core.pv_aget.call(null,ret__10587,subidx__10588);
if(!((child__10589 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10589,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10587;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10594 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10595 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10596 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10594,subidx__10595));
if((function (){var and__3822__auto____10597 = (new_child__10596 == null);
if(and__3822__auto____10597)
{return (subidx__10595 === 0);
} else
{return and__3822__auto____10597;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10594,subidx__10595,new_child__10596);
return node__10594;
}
} else
{if((subidx__10595 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10594,subidx__10595,null);
return node__10594;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10602 = (0 <= i);
if(and__3822__auto____10602)
{return (i < tv.cnt);
} else
{return and__3822__auto____10602;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10603 = tv.root;
var node__10604 = root__10603;
var level__10605 = tv.shift;
while(true){
if((level__10605 > 0))
{{
var G__10606 = cljs.core.tv_ensure_editable.call(null,root__10603.edit,cljs.core.pv_aget.call(null,node__10604,((i >>> level__10605) & 31)));
var G__10607 = (level__10605 - 5);
node__10604 = G__10606;
level__10605 = G__10607;
continue;
}
} else
{return node__10604.arr;
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
var G__10647 = null;
var G__10647__2 = (function (this_sym10610,k){
var this__10612 = this;
var this_sym10610__10613 = this;
var coll__10614 = this_sym10610__10613;
return coll__10614.cljs$core$ILookup$_lookup$arity$2(coll__10614,k);
});
var G__10647__3 = (function (this_sym10611,k,not_found){
var this__10612 = this;
var this_sym10611__10615 = this;
var coll__10616 = this_sym10611__10615;
return coll__10616.cljs$core$ILookup$_lookup$arity$3(coll__10616,k,not_found);
});
G__10647 = function(this_sym10611,k,not_found){
switch(arguments.length){
case 2:
return G__10647__2.call(this,this_sym10611,k);
case 3:
return G__10647__3.call(this,this_sym10611,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10647;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10608,args10609){
var this__10617 = this;
return this_sym10608.call.apply(this_sym10608,[this_sym10608].concat(args10609.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10618 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10619 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10620 = this;
if(this__10620.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10621 = this;
if((function (){var and__3822__auto____10622 = (0 <= n);
if(and__3822__auto____10622)
{return (n < this__10621.cnt);
} else
{return and__3822__auto____10622;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10623 = this;
if(this__10623.root.edit)
{return this__10623.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10624 = this;
if(this__10624.root.edit)
{if((function (){var and__3822__auto____10625 = (0 <= n);
if(and__3822__auto____10625)
{return (n < this__10624.cnt);
} else
{return and__3822__auto____10625;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10624.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10630 = (function go(level,node){
var node__10628 = cljs.core.tv_ensure_editable.call(null,this__10624.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10628,(n & 31),val);
return node__10628;
} else
{var subidx__10629 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10628,subidx__10629,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10628,subidx__10629)));
return node__10628;
}
}).call(null,this__10624.shift,this__10624.root);
this__10624.root = new_root__10630;
return tcoll;
}
} else
{if((n === this__10624.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10624.cnt)].join('')));
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
var this__10631 = this;
if(this__10631.root.edit)
{if((this__10631.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10631.cnt))
{this__10631.cnt = 0;
return tcoll;
} else
{if((((this__10631.cnt - 1) & 31) > 0))
{this__10631.cnt = (this__10631.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10632 = cljs.core.editable_array_for.call(null,tcoll,(this__10631.cnt - 2));
var new_root__10634 = (function (){var nr__10633 = cljs.core.tv_pop_tail.call(null,tcoll,this__10631.shift,this__10631.root);
if(!((nr__10633 == null)))
{return nr__10633;
} else
{return (new cljs.core.VectorNode(this__10631.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10635 = (5 < this__10631.shift);
if(and__3822__auto____10635)
{return (cljs.core.pv_aget.call(null,new_root__10634,1) == null);
} else
{return and__3822__auto____10635;
}
})())
{var new_root__10636 = cljs.core.tv_ensure_editable.call(null,this__10631.root.edit,cljs.core.pv_aget.call(null,new_root__10634,0));
this__10631.root = new_root__10636;
this__10631.shift = (this__10631.shift - 5);
this__10631.cnt = (this__10631.cnt - 1);
this__10631.tail = new_tail__10632;
return tcoll;
} else
{this__10631.root = new_root__10634;
this__10631.cnt = (this__10631.cnt - 1);
this__10631.tail = new_tail__10632;
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
var this__10637 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10638 = this;
if(this__10638.root.edit)
{if(((this__10638.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10638.tail[(this__10638.cnt & 31)] = o);
this__10638.cnt = (this__10638.cnt + 1);
return tcoll;
} else
{var tail_node__10639 = (new cljs.core.VectorNode(this__10638.root.edit,this__10638.tail));
var new_tail__10640 = cljs.core.make_array.call(null,32);
(new_tail__10640[0] = o);
this__10638.tail = new_tail__10640;
if(((this__10638.cnt >>> 5) > (1 << this__10638.shift)))
{var new_root_array__10641 = cljs.core.make_array.call(null,32);
var new_shift__10642 = (this__10638.shift + 5);
(new_root_array__10641[0] = this__10638.root);
(new_root_array__10641[1] = cljs.core.new_path.call(null,this__10638.root.edit,this__10638.shift,tail_node__10639));
this__10638.root = (new cljs.core.VectorNode(this__10638.root.edit,new_root_array__10641));
this__10638.shift = new_shift__10642;
this__10638.cnt = (this__10638.cnt + 1);
return tcoll;
} else
{var new_root__10643 = cljs.core.tv_push_tail.call(null,tcoll,this__10638.shift,this__10638.root,tail_node__10639);
this__10638.root = new_root__10643;
this__10638.cnt = (this__10638.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10644 = this;
if(this__10644.root.edit)
{this__10644.root.edit = null;
var len__10645 = (this__10644.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10646 = cljs.core.make_array.call(null,len__10645);
cljs.core.array_copy.call(null,this__10644.tail,0,trimmed_tail__10646,0,len__10645);
return (new cljs.core.PersistentVector(null,this__10644.cnt,this__10644.shift,this__10644.root,trimmed_tail__10646,null));
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
var this__10648 = this;
var h__2242__auto____10649 = this__10648.__hash;
if(!((h__2242__auto____10649 == null)))
{return h__2242__auto____10649;
} else
{var h__2242__auto____10650 = cljs.core.hash_coll.call(null,coll);
this__10648.__hash = h__2242__auto____10650;
return h__2242__auto____10650;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10651 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10652 = this;
var this__10653 = this;
return cljs.core.pr_str.call(null,this__10653);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10654 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10655 = this;
return cljs.core._first.call(null,this__10655.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10656 = this;
var temp__3971__auto____10657 = cljs.core.next.call(null,this__10656.front);
if(temp__3971__auto____10657)
{var f1__10658 = temp__3971__auto____10657;
return (new cljs.core.PersistentQueueSeq(this__10656.meta,f1__10658,this__10656.rear,null));
} else
{if((this__10656.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10656.meta,this__10656.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10660 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10660.front,this__10660.rear,this__10660.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10661 = this;
return this__10661.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10662 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10662.meta);
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
var this__10663 = this;
var h__2242__auto____10664 = this__10663.__hash;
if(!((h__2242__auto____10664 == null)))
{return h__2242__auto____10664;
} else
{var h__2242__auto____10665 = cljs.core.hash_coll.call(null,coll);
this__10663.__hash = h__2242__auto____10665;
return h__2242__auto____10665;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10666 = this;
if(cljs.core.truth_(this__10666.front))
{return (new cljs.core.PersistentQueue(this__10666.meta,(this__10666.count + 1),this__10666.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10667 = this__10666.rear;
if(cljs.core.truth_(or__3824__auto____10667))
{return or__3824__auto____10667;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10666.meta,(this__10666.count + 1),cljs.core.conj.call(null,this__10666.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10668 = this;
var this__10669 = this;
return cljs.core.pr_str.call(null,this__10669);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10670 = this;
var rear__10671 = cljs.core.seq.call(null,this__10670.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10672 = this__10670.front;
if(cljs.core.truth_(or__3824__auto____10672))
{return or__3824__auto____10672;
} else
{return rear__10671;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10670.front,cljs.core.seq.call(null,rear__10671),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10673 = this;
return this__10673.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10674 = this;
return cljs.core._first.call(null,this__10674.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10675 = this;
if(cljs.core.truth_(this__10675.front))
{var temp__3971__auto____10676 = cljs.core.next.call(null,this__10675.front);
if(temp__3971__auto____10676)
{var f1__10677 = temp__3971__auto____10676;
return (new cljs.core.PersistentQueue(this__10675.meta,(this__10675.count - 1),f1__10677,this__10675.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10675.meta,(this__10675.count - 1),cljs.core.seq.call(null,this__10675.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10678 = this;
return cljs.core.first.call(null,this__10678.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10679 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10680 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10681 = this;
return (new cljs.core.PersistentQueue(meta,this__10681.count,this__10681.front,this__10681.rear,this__10681.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10682 = this;
return this__10682.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10683 = this;
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
var this__10684 = this;
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
var len__10687 = array.length;
var i__10688 = 0;
while(true){
if((i__10688 < len__10687))
{if((k === (array[i__10688])))
{return i__10688;
} else
{{
var G__10689 = (i__10688 + incr);
i__10688 = G__10689;
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
var a__10692 = cljs.core.hash.call(null,a);
var b__10693 = cljs.core.hash.call(null,b);
if((a__10692 < b__10693))
{return -1;
} else
{if((a__10692 > b__10693))
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
var ks__10701 = m.keys;
var len__10702 = ks__10701.length;
var so__10703 = m.strobj;
var out__10704 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10705 = 0;
var out__10706 = cljs.core.transient$.call(null,out__10704);
while(true){
if((i__10705 < len__10702))
{var k__10707 = (ks__10701[i__10705]);
{
var G__10708 = (i__10705 + 1);
var G__10709 = cljs.core.assoc_BANG_.call(null,out__10706,k__10707,(so__10703[k__10707]));
i__10705 = G__10708;
out__10706 = G__10709;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10706,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10715 = {};
var l__10716 = ks.length;
var i__10717 = 0;
while(true){
if((i__10717 < l__10716))
{var k__10718 = (ks[i__10717]);
(new_obj__10715[k__10718] = (obj[k__10718]));
{
var G__10719 = (i__10717 + 1);
i__10717 = G__10719;
continue;
}
} else
{}
break;
}
return new_obj__10715;
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
var this__10722 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10723 = this;
var h__2242__auto____10724 = this__10723.__hash;
if(!((h__2242__auto____10724 == null)))
{return h__2242__auto____10724;
} else
{var h__2242__auto____10725 = cljs.core.hash_imap.call(null,coll);
this__10723.__hash = h__2242__auto____10725;
return h__2242__auto____10725;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10726 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10727 = this;
if((function (){var and__3822__auto____10728 = goog.isString(k);
if(and__3822__auto____10728)
{return !((cljs.core.scan_array.call(null,1,k,this__10727.keys) == null));
} else
{return and__3822__auto____10728;
}
})())
{return (this__10727.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10729 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10730 = (this__10729.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10730)
{return or__3824__auto____10730;
} else
{return (this__10729.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10729.keys) == null)))
{var new_strobj__10731 = cljs.core.obj_clone.call(null,this__10729.strobj,this__10729.keys);
(new_strobj__10731[k] = v);
return (new cljs.core.ObjMap(this__10729.meta,this__10729.keys,new_strobj__10731,(this__10729.update_count + 1),null));
} else
{var new_strobj__10732 = cljs.core.obj_clone.call(null,this__10729.strobj,this__10729.keys);
var new_keys__10733 = this__10729.keys.slice();
(new_strobj__10732[k] = v);
new_keys__10733.push(k);
return (new cljs.core.ObjMap(this__10729.meta,new_keys__10733,new_strobj__10732,(this__10729.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10734 = this;
if((function (){var and__3822__auto____10735 = goog.isString(k);
if(and__3822__auto____10735)
{return !((cljs.core.scan_array.call(null,1,k,this__10734.keys) == null));
} else
{return and__3822__auto____10735;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10757 = null;
var G__10757__2 = (function (this_sym10736,k){
var this__10738 = this;
var this_sym10736__10739 = this;
var coll__10740 = this_sym10736__10739;
return coll__10740.cljs$core$ILookup$_lookup$arity$2(coll__10740,k);
});
var G__10757__3 = (function (this_sym10737,k,not_found){
var this__10738 = this;
var this_sym10737__10741 = this;
var coll__10742 = this_sym10737__10741;
return coll__10742.cljs$core$ILookup$_lookup$arity$3(coll__10742,k,not_found);
});
G__10757 = function(this_sym10737,k,not_found){
switch(arguments.length){
case 2:
return G__10757__2.call(this,this_sym10737,k);
case 3:
return G__10757__3.call(this,this_sym10737,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10757;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10720,args10721){
var this__10743 = this;
return this_sym10720.call.apply(this_sym10720,[this_sym10720].concat(args10721.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10744 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10745 = this;
var this__10746 = this;
return cljs.core.pr_str.call(null,this__10746);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10747 = this;
if((this__10747.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10710_SHARP_){
return cljs.core.vector.call(null,p1__10710_SHARP_,(this__10747.strobj[p1__10710_SHARP_]));
}),this__10747.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10748 = this;
return this__10748.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10749 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10750 = this;
return (new cljs.core.ObjMap(meta,this__10750.keys,this__10750.strobj,this__10750.update_count,this__10750.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10751 = this;
return this__10751.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10752 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10752.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10753 = this;
if((function (){var and__3822__auto____10754 = goog.isString(k);
if(and__3822__auto____10754)
{return !((cljs.core.scan_array.call(null,1,k,this__10753.keys) == null));
} else
{return and__3822__auto____10754;
}
})())
{var new_keys__10755 = this__10753.keys.slice();
var new_strobj__10756 = cljs.core.obj_clone.call(null,this__10753.strobj,this__10753.keys);
new_keys__10755.splice(cljs.core.scan_array.call(null,1,k,new_keys__10755),1);
cljs.core.js_delete.call(null,new_strobj__10756,k);
return (new cljs.core.ObjMap(this__10753.meta,new_keys__10755,new_strobj__10756,(this__10753.update_count + 1),null));
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
var this__10761 = this;
var h__2242__auto____10762 = this__10761.__hash;
if(!((h__2242__auto____10762 == null)))
{return h__2242__auto____10762;
} else
{var h__2242__auto____10763 = cljs.core.hash_imap.call(null,coll);
this__10761.__hash = h__2242__auto____10763;
return h__2242__auto____10763;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10764 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10765 = this;
var bucket__10766 = (this__10765.hashobj[cljs.core.hash.call(null,k)]);
var i__10767 = (cljs.core.truth_(bucket__10766)?cljs.core.scan_array.call(null,2,k,bucket__10766):null);
if(cljs.core.truth_(i__10767))
{return (bucket__10766[(i__10767 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10768 = this;
var h__10769 = cljs.core.hash.call(null,k);
var bucket__10770 = (this__10768.hashobj[h__10769]);
if(cljs.core.truth_(bucket__10770))
{var new_bucket__10771 = bucket__10770.slice();
var new_hashobj__10772 = goog.object.clone(this__10768.hashobj);
(new_hashobj__10772[h__10769] = new_bucket__10771);
var temp__3971__auto____10773 = cljs.core.scan_array.call(null,2,k,new_bucket__10771);
if(cljs.core.truth_(temp__3971__auto____10773))
{var i__10774 = temp__3971__auto____10773;
(new_bucket__10771[(i__10774 + 1)] = v);
return (new cljs.core.HashMap(this__10768.meta,this__10768.count,new_hashobj__10772,null));
} else
{new_bucket__10771.push(k,v);
return (new cljs.core.HashMap(this__10768.meta,(this__10768.count + 1),new_hashobj__10772,null));
}
} else
{var new_hashobj__10775 = goog.object.clone(this__10768.hashobj);
(new_hashobj__10775[h__10769] = [k,v]);
return (new cljs.core.HashMap(this__10768.meta,(this__10768.count + 1),new_hashobj__10775,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10776 = this;
var bucket__10777 = (this__10776.hashobj[cljs.core.hash.call(null,k)]);
var i__10778 = (cljs.core.truth_(bucket__10777)?cljs.core.scan_array.call(null,2,k,bucket__10777):null);
if(cljs.core.truth_(i__10778))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10803 = null;
var G__10803__2 = (function (this_sym10779,k){
var this__10781 = this;
var this_sym10779__10782 = this;
var coll__10783 = this_sym10779__10782;
return coll__10783.cljs$core$ILookup$_lookup$arity$2(coll__10783,k);
});
var G__10803__3 = (function (this_sym10780,k,not_found){
var this__10781 = this;
var this_sym10780__10784 = this;
var coll__10785 = this_sym10780__10784;
return coll__10785.cljs$core$ILookup$_lookup$arity$3(coll__10785,k,not_found);
});
G__10803 = function(this_sym10780,k,not_found){
switch(arguments.length){
case 2:
return G__10803__2.call(this,this_sym10780,k);
case 3:
return G__10803__3.call(this,this_sym10780,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10803;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10759,args10760){
var this__10786 = this;
return this_sym10759.call.apply(this_sym10759,[this_sym10759].concat(args10760.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10787 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10788 = this;
var this__10789 = this;
return cljs.core.pr_str.call(null,this__10789);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10790 = this;
if((this__10790.count > 0))
{var hashes__10791 = cljs.core.js_keys.call(null,this__10790.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10758_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10790.hashobj[p1__10758_SHARP_])));
}),hashes__10791);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10792 = this;
return this__10792.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10793 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10794 = this;
return (new cljs.core.HashMap(meta,this__10794.count,this__10794.hashobj,this__10794.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10795 = this;
return this__10795.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10796 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10796.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10797 = this;
var h__10798 = cljs.core.hash.call(null,k);
var bucket__10799 = (this__10797.hashobj[h__10798]);
var i__10800 = (cljs.core.truth_(bucket__10799)?cljs.core.scan_array.call(null,2,k,bucket__10799):null);
if(cljs.core.not.call(null,i__10800))
{return coll;
} else
{var new_hashobj__10801 = goog.object.clone(this__10797.hashobj);
if((3 > bucket__10799.length))
{cljs.core.js_delete.call(null,new_hashobj__10801,h__10798);
} else
{var new_bucket__10802 = bucket__10799.slice();
new_bucket__10802.splice(i__10800,2);
(new_hashobj__10801[h__10798] = new_bucket__10802);
}
return (new cljs.core.HashMap(this__10797.meta,(this__10797.count - 1),new_hashobj__10801,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10804 = ks.length;
var i__10805 = 0;
var out__10806 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10805 < len__10804))
{{
var G__10807 = (i__10805 + 1);
var G__10808 = cljs.core.assoc.call(null,out__10806,(ks[i__10805]),(vs[i__10805]));
i__10805 = G__10807;
out__10806 = G__10808;
continue;
}
} else
{return out__10806;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10812 = m.arr;
var len__10813 = arr__10812.length;
var i__10814 = 0;
while(true){
if((len__10813 <= i__10814))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10812[i__10814]),k))
{return i__10814;
} else
{if("\uFDD0'else")
{{
var G__10815 = (i__10814 + 2);
i__10814 = G__10815;
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
var this__10818 = this;
return (new cljs.core.TransientArrayMap({},this__10818.arr.length,this__10818.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10819 = this;
var h__2242__auto____10820 = this__10819.__hash;
if(!((h__2242__auto____10820 == null)))
{return h__2242__auto____10820;
} else
{var h__2242__auto____10821 = cljs.core.hash_imap.call(null,coll);
this__10819.__hash = h__2242__auto____10821;
return h__2242__auto____10821;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10822 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10823 = this;
var idx__10824 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10824 === -1))
{return not_found;
} else
{return (this__10823.arr[(idx__10824 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10825 = this;
var idx__10826 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10826 === -1))
{if((this__10825.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10825.meta,(this__10825.cnt + 1),(function (){var G__10827__10828 = this__10825.arr.slice();
G__10827__10828.push(k);
G__10827__10828.push(v);
return G__10827__10828;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10825.arr[(idx__10826 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10825.meta,this__10825.cnt,(function (){var G__10829__10830 = this__10825.arr.slice();
(G__10829__10830[(idx__10826 + 1)] = v);
return G__10829__10830;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10831 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10863 = null;
var G__10863__2 = (function (this_sym10832,k){
var this__10834 = this;
var this_sym10832__10835 = this;
var coll__10836 = this_sym10832__10835;
return coll__10836.cljs$core$ILookup$_lookup$arity$2(coll__10836,k);
});
var G__10863__3 = (function (this_sym10833,k,not_found){
var this__10834 = this;
var this_sym10833__10837 = this;
var coll__10838 = this_sym10833__10837;
return coll__10838.cljs$core$ILookup$_lookup$arity$3(coll__10838,k,not_found);
});
G__10863 = function(this_sym10833,k,not_found){
switch(arguments.length){
case 2:
return G__10863__2.call(this,this_sym10833,k);
case 3:
return G__10863__3.call(this,this_sym10833,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10863;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10816,args10817){
var this__10839 = this;
return this_sym10816.call.apply(this_sym10816,[this_sym10816].concat(args10817.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10840 = this;
var len__10841 = this__10840.arr.length;
var i__10842 = 0;
var init__10843 = init;
while(true){
if((i__10842 < len__10841))
{var init__10844 = f.call(null,init__10843,(this__10840.arr[i__10842]),(this__10840.arr[(i__10842 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10844))
{return cljs.core.deref.call(null,init__10844);
} else
{{
var G__10864 = (i__10842 + 2);
var G__10865 = init__10844;
i__10842 = G__10864;
init__10843 = G__10865;
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
var this__10845 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10846 = this;
var this__10847 = this;
return cljs.core.pr_str.call(null,this__10847);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10848 = this;
if((this__10848.cnt > 0))
{var len__10849 = this__10848.arr.length;
var array_map_seq__10850 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10849))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10848.arr[i]),(this__10848.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10850.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10851 = this;
return this__10851.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10853 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10853.cnt,this__10853.arr,this__10853.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10854 = this;
return this__10854.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10855 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10855.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10856 = this;
var idx__10857 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10857 >= 0))
{var len__10858 = this__10856.arr.length;
var new_len__10859 = (len__10858 - 2);
if((new_len__10859 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10860 = cljs.core.make_array.call(null,new_len__10859);
var s__10861 = 0;
var d__10862 = 0;
while(true){
if((s__10861 >= len__10858))
{return (new cljs.core.PersistentArrayMap(this__10856.meta,(this__10856.cnt - 1),new_arr__10860,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10856.arr[s__10861])))
{{
var G__10866 = (s__10861 + 2);
var G__10867 = d__10862;
s__10861 = G__10866;
d__10862 = G__10867;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10860[d__10862] = (this__10856.arr[s__10861]));
(new_arr__10860[(d__10862 + 1)] = (this__10856.arr[(s__10861 + 1)]));
{
var G__10868 = (s__10861 + 2);
var G__10869 = (d__10862 + 2);
s__10861 = G__10868;
d__10862 = G__10869;
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
var len__10870 = cljs.core.count.call(null,ks);
var i__10871 = 0;
var out__10872 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10871 < len__10870))
{{
var G__10873 = (i__10871 + 1);
var G__10874 = cljs.core.assoc_BANG_.call(null,out__10872,(ks[i__10871]),(vs[i__10871]));
i__10871 = G__10873;
out__10872 = G__10874;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10872);
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
var this__10875 = this;
if(cljs.core.truth_(this__10875.editable_QMARK_))
{var idx__10876 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10876 >= 0))
{(this__10875.arr[idx__10876] = (this__10875.arr[(this__10875.len - 2)]));
(this__10875.arr[(idx__10876 + 1)] = (this__10875.arr[(this__10875.len - 1)]));
var G__10877__10878 = this__10875.arr;
G__10877__10878.pop();
G__10877__10878.pop();
G__10877__10878;
this__10875.len = (this__10875.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10879 = this;
if(cljs.core.truth_(this__10879.editable_QMARK_))
{var idx__10880 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10880 === -1))
{if(((this__10879.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10879.len = (this__10879.len + 2);
this__10879.arr.push(key);
this__10879.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10879.len,this__10879.arr),key,val);
}
} else
{if((val === (this__10879.arr[(idx__10880 + 1)])))
{return tcoll;
} else
{(this__10879.arr[(idx__10880 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10881 = this;
if(cljs.core.truth_(this__10881.editable_QMARK_))
{if((function (){var G__10882__10883 = o;
if(G__10882__10883)
{if((function (){var or__3824__auto____10884 = (G__10882__10883.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10884)
{return or__3824__auto____10884;
} else
{return G__10882__10883.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10882__10883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10882__10883);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10882__10883);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10885 = cljs.core.seq.call(null,o);
var tcoll__10886 = tcoll;
while(true){
var temp__3971__auto____10887 = cljs.core.first.call(null,es__10885);
if(cljs.core.truth_(temp__3971__auto____10887))
{var e__10888 = temp__3971__auto____10887;
{
var G__10894 = cljs.core.next.call(null,es__10885);
var G__10895 = tcoll__10886.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10886,cljs.core.key.call(null,e__10888),cljs.core.val.call(null,e__10888));
es__10885 = G__10894;
tcoll__10886 = G__10895;
continue;
}
} else
{return tcoll__10886;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10889 = this;
if(cljs.core.truth_(this__10889.editable_QMARK_))
{this__10889.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10889.len,2),this__10889.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10890 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10891 = this;
if(cljs.core.truth_(this__10891.editable_QMARK_))
{var idx__10892 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10892 === -1))
{return not_found;
} else
{return (this__10891.arr[(idx__10892 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10893 = this;
if(cljs.core.truth_(this__10893.editable_QMARK_))
{return cljs.core.quot.call(null,this__10893.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10898 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10899 = 0;
while(true){
if((i__10899 < len))
{{
var G__10900 = cljs.core.assoc_BANG_.call(null,out__10898,(arr[i__10899]),(arr[(i__10899 + 1)]));
var G__10901 = (i__10899 + 2);
out__10898 = G__10900;
i__10899 = G__10901;
continue;
}
} else
{return out__10898;
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
var G__10906__10907 = arr.slice();
(G__10906__10907[i] = a);
return G__10906__10907;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10908__10909 = arr.slice();
(G__10908__10909[i] = a);
(G__10908__10909[j] = b);
return G__10908__10909;
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
var new_arr__10911 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10911,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10911,(2 * i),(new_arr__10911.length - (2 * i)));
return new_arr__10911;
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
var editable__10914 = inode.ensure_editable(edit);
(editable__10914.arr[i] = a);
return editable__10914;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10915 = inode.ensure_editable(edit);
(editable__10915.arr[i] = a);
(editable__10915.arr[j] = b);
return editable__10915;
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
var len__10922 = arr.length;
var i__10923 = 0;
var init__10924 = init;
while(true){
if((i__10923 < len__10922))
{var init__10927 = (function (){var k__10925 = (arr[i__10923]);
if(!((k__10925 == null)))
{return f.call(null,init__10924,k__10925,(arr[(i__10923 + 1)]));
} else
{var node__10926 = (arr[(i__10923 + 1)]);
if(!((node__10926 == null)))
{return node__10926.kv_reduce(f,init__10924);
} else
{return init__10924;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10927))
{return cljs.core.deref.call(null,init__10927);
} else
{{
var G__10928 = (i__10923 + 2);
var G__10929 = init__10927;
i__10923 = G__10928;
init__10924 = G__10929;
continue;
}
}
} else
{return init__10924;
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
var this__10930 = this;
var inode__10931 = this;
if((this__10930.bitmap === bit))
{return null;
} else
{var editable__10932 = inode__10931.ensure_editable(e);
var earr__10933 = editable__10932.arr;
var len__10934 = earr__10933.length;
editable__10932.bitmap = (bit ^ editable__10932.bitmap);
cljs.core.array_copy.call(null,earr__10933,(2 * (i + 1)),earr__10933,(2 * i),(len__10934 - (2 * (i + 1))));
(earr__10933[(len__10934 - 2)] = null);
(earr__10933[(len__10934 - 1)] = null);
return editable__10932;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10935 = this;
var inode__10936 = this;
var bit__10937 = (1 << ((hash >>> shift) & 0x01f));
var idx__10938 = cljs.core.bitmap_indexed_node_index.call(null,this__10935.bitmap,bit__10937);
if(((this__10935.bitmap & bit__10937) === 0))
{var n__10939 = cljs.core.bit_count.call(null,this__10935.bitmap);
if(((2 * n__10939) < this__10935.arr.length))
{var editable__10940 = inode__10936.ensure_editable(edit);
var earr__10941 = editable__10940.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10941,(2 * idx__10938),earr__10941,(2 * (idx__10938 + 1)),(2 * (n__10939 - idx__10938)));
(earr__10941[(2 * idx__10938)] = key);
(earr__10941[((2 * idx__10938) + 1)] = val);
editable__10940.bitmap = (editable__10940.bitmap | bit__10937);
return editable__10940;
} else
{if((n__10939 >= 16))
{var nodes__10942 = cljs.core.make_array.call(null,32);
var jdx__10943 = ((hash >>> shift) & 0x01f);
(nodes__10942[jdx__10943] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10944 = 0;
var j__10945 = 0;
while(true){
if((i__10944 < 32))
{if((((this__10935.bitmap >>> i__10944) & 1) === 0))
{{
var G__10998 = (i__10944 + 1);
var G__10999 = j__10945;
i__10944 = G__10998;
j__10945 = G__10999;
continue;
}
} else
{(nodes__10942[i__10944] = ((!(((this__10935.arr[j__10945]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10935.arr[j__10945])),(this__10935.arr[j__10945]),(this__10935.arr[(j__10945 + 1)]),added_leaf_QMARK_):(this__10935.arr[(j__10945 + 1)])));
{
var G__11000 = (i__10944 + 1);
var G__11001 = (j__10945 + 2);
i__10944 = G__11000;
j__10945 = G__11001;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10939 + 1),nodes__10942));
} else
{if("\uFDD0'else")
{var new_arr__10946 = cljs.core.make_array.call(null,(2 * (n__10939 + 4)));
cljs.core.array_copy.call(null,this__10935.arr,0,new_arr__10946,0,(2 * idx__10938));
(new_arr__10946[(2 * idx__10938)] = key);
(new_arr__10946[((2 * idx__10938) + 1)] = val);
cljs.core.array_copy.call(null,this__10935.arr,(2 * idx__10938),new_arr__10946,(2 * (idx__10938 + 1)),(2 * (n__10939 - idx__10938)));
added_leaf_QMARK_.val = true;
var editable__10947 = inode__10936.ensure_editable(edit);
editable__10947.arr = new_arr__10946;
editable__10947.bitmap = (editable__10947.bitmap | bit__10937);
return editable__10947;
} else
{return null;
}
}
}
} else
{var key_or_nil__10948 = (this__10935.arr[(2 * idx__10938)]);
var val_or_node__10949 = (this__10935.arr[((2 * idx__10938) + 1)]);
if((key_or_nil__10948 == null))
{var n__10950 = val_or_node__10949.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10950 === val_or_node__10949))
{return inode__10936;
} else
{return cljs.core.edit_and_set.call(null,inode__10936,edit,((2 * idx__10938) + 1),n__10950);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10948))
{if((val === val_or_node__10949))
{return inode__10936;
} else
{return cljs.core.edit_and_set.call(null,inode__10936,edit,((2 * idx__10938) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10936,edit,(2 * idx__10938),null,((2 * idx__10938) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10948,val_or_node__10949,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10951 = this;
var inode__10952 = this;
return cljs.core.create_inode_seq.call(null,this__10951.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10953 = this;
var inode__10954 = this;
var bit__10955 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10953.bitmap & bit__10955) === 0))
{return inode__10954;
} else
{var idx__10956 = cljs.core.bitmap_indexed_node_index.call(null,this__10953.bitmap,bit__10955);
var key_or_nil__10957 = (this__10953.arr[(2 * idx__10956)]);
var val_or_node__10958 = (this__10953.arr[((2 * idx__10956) + 1)]);
if((key_or_nil__10957 == null))
{var n__10959 = val_or_node__10958.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10959 === val_or_node__10958))
{return inode__10954;
} else
{if(!((n__10959 == null)))
{return cljs.core.edit_and_set.call(null,inode__10954,edit,((2 * idx__10956) + 1),n__10959);
} else
{if((this__10953.bitmap === bit__10955))
{return null;
} else
{if("\uFDD0'else")
{return inode__10954.edit_and_remove_pair(edit,bit__10955,idx__10956);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10957))
{(removed_leaf_QMARK_[0] = true);
return inode__10954.edit_and_remove_pair(edit,bit__10955,idx__10956);
} else
{if("\uFDD0'else")
{return inode__10954;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10960 = this;
var inode__10961 = this;
if((e === this__10960.edit))
{return inode__10961;
} else
{var n__10962 = cljs.core.bit_count.call(null,this__10960.bitmap);
var new_arr__10963 = cljs.core.make_array.call(null,(((n__10962 < 0))?4:(2 * (n__10962 + 1))));
cljs.core.array_copy.call(null,this__10960.arr,0,new_arr__10963,0,(2 * n__10962));
return (new cljs.core.BitmapIndexedNode(e,this__10960.bitmap,new_arr__10963));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10964 = this;
var inode__10965 = this;
return cljs.core.inode_kv_reduce.call(null,this__10964.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10966 = this;
var inode__10967 = this;
var bit__10968 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10966.bitmap & bit__10968) === 0))
{return not_found;
} else
{var idx__10969 = cljs.core.bitmap_indexed_node_index.call(null,this__10966.bitmap,bit__10968);
var key_or_nil__10970 = (this__10966.arr[(2 * idx__10969)]);
var val_or_node__10971 = (this__10966.arr[((2 * idx__10969) + 1)]);
if((key_or_nil__10970 == null))
{return val_or_node__10971.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10970))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10970,val_or_node__10971], true);
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
var this__10972 = this;
var inode__10973 = this;
var bit__10974 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10972.bitmap & bit__10974) === 0))
{return inode__10973;
} else
{var idx__10975 = cljs.core.bitmap_indexed_node_index.call(null,this__10972.bitmap,bit__10974);
var key_or_nil__10976 = (this__10972.arr[(2 * idx__10975)]);
var val_or_node__10977 = (this__10972.arr[((2 * idx__10975) + 1)]);
if((key_or_nil__10976 == null))
{var n__10978 = val_or_node__10977.inode_without((shift + 5),hash,key);
if((n__10978 === val_or_node__10977))
{return inode__10973;
} else
{if(!((n__10978 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10972.bitmap,cljs.core.clone_and_set.call(null,this__10972.arr,((2 * idx__10975) + 1),n__10978)));
} else
{if((this__10972.bitmap === bit__10974))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10972.bitmap ^ bit__10974),cljs.core.remove_pair.call(null,this__10972.arr,idx__10975)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10976))
{return (new cljs.core.BitmapIndexedNode(null,(this__10972.bitmap ^ bit__10974),cljs.core.remove_pair.call(null,this__10972.arr,idx__10975)));
} else
{if("\uFDD0'else")
{return inode__10973;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10979 = this;
var inode__10980 = this;
var bit__10981 = (1 << ((hash >>> shift) & 0x01f));
var idx__10982 = cljs.core.bitmap_indexed_node_index.call(null,this__10979.bitmap,bit__10981);
if(((this__10979.bitmap & bit__10981) === 0))
{var n__10983 = cljs.core.bit_count.call(null,this__10979.bitmap);
if((n__10983 >= 16))
{var nodes__10984 = cljs.core.make_array.call(null,32);
var jdx__10985 = ((hash >>> shift) & 0x01f);
(nodes__10984[jdx__10985] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10986 = 0;
var j__10987 = 0;
while(true){
if((i__10986 < 32))
{if((((this__10979.bitmap >>> i__10986) & 1) === 0))
{{
var G__11002 = (i__10986 + 1);
var G__11003 = j__10987;
i__10986 = G__11002;
j__10987 = G__11003;
continue;
}
} else
{(nodes__10984[i__10986] = ((!(((this__10979.arr[j__10987]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10979.arr[j__10987])),(this__10979.arr[j__10987]),(this__10979.arr[(j__10987 + 1)]),added_leaf_QMARK_):(this__10979.arr[(j__10987 + 1)])));
{
var G__11004 = (i__10986 + 1);
var G__11005 = (j__10987 + 2);
i__10986 = G__11004;
j__10987 = G__11005;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10983 + 1),nodes__10984));
} else
{var new_arr__10988 = cljs.core.make_array.call(null,(2 * (n__10983 + 1)));
cljs.core.array_copy.call(null,this__10979.arr,0,new_arr__10988,0,(2 * idx__10982));
(new_arr__10988[(2 * idx__10982)] = key);
(new_arr__10988[((2 * idx__10982) + 1)] = val);
cljs.core.array_copy.call(null,this__10979.arr,(2 * idx__10982),new_arr__10988,(2 * (idx__10982 + 1)),(2 * (n__10983 - idx__10982)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10979.bitmap | bit__10981),new_arr__10988));
}
} else
{var key_or_nil__10989 = (this__10979.arr[(2 * idx__10982)]);
var val_or_node__10990 = (this__10979.arr[((2 * idx__10982) + 1)]);
if((key_or_nil__10989 == null))
{var n__10991 = val_or_node__10990.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10991 === val_or_node__10990))
{return inode__10980;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10979.bitmap,cljs.core.clone_and_set.call(null,this__10979.arr,((2 * idx__10982) + 1),n__10991)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10989))
{if((val === val_or_node__10990))
{return inode__10980;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10979.bitmap,cljs.core.clone_and_set.call(null,this__10979.arr,((2 * idx__10982) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10979.bitmap,cljs.core.clone_and_set.call(null,this__10979.arr,(2 * idx__10982),null,((2 * idx__10982) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10989,val_or_node__10990,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10992 = this;
var inode__10993 = this;
var bit__10994 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10992.bitmap & bit__10994) === 0))
{return not_found;
} else
{var idx__10995 = cljs.core.bitmap_indexed_node_index.call(null,this__10992.bitmap,bit__10994);
var key_or_nil__10996 = (this__10992.arr[(2 * idx__10995)]);
var val_or_node__10997 = (this__10992.arr[((2 * idx__10995) + 1)]);
if((key_or_nil__10996 == null))
{return val_or_node__10997.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10996))
{return val_or_node__10997;
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
var arr__11013 = array_node.arr;
var len__11014 = (2 * (array_node.cnt - 1));
var new_arr__11015 = cljs.core.make_array.call(null,len__11014);
var i__11016 = 0;
var j__11017 = 1;
var bitmap__11018 = 0;
while(true){
if((i__11016 < len__11014))
{if((function (){var and__3822__auto____11019 = !((i__11016 === idx));
if(and__3822__auto____11019)
{return !(((arr__11013[i__11016]) == null));
} else
{return and__3822__auto____11019;
}
})())
{(new_arr__11015[j__11017] = (arr__11013[i__11016]));
{
var G__11020 = (i__11016 + 1);
var G__11021 = (j__11017 + 2);
var G__11022 = (bitmap__11018 | (1 << i__11016));
i__11016 = G__11020;
j__11017 = G__11021;
bitmap__11018 = G__11022;
continue;
}
} else
{{
var G__11023 = (i__11016 + 1);
var G__11024 = j__11017;
var G__11025 = bitmap__11018;
i__11016 = G__11023;
j__11017 = G__11024;
bitmap__11018 = G__11025;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11018,new_arr__11015));
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
var this__11026 = this;
var inode__11027 = this;
var idx__11028 = ((hash >>> shift) & 0x01f);
var node__11029 = (this__11026.arr[idx__11028]);
if((node__11029 == null))
{var editable__11030 = cljs.core.edit_and_set.call(null,inode__11027,edit,idx__11028,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11030.cnt = (editable__11030.cnt + 1);
return editable__11030;
} else
{var n__11031 = node__11029.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11031 === node__11029))
{return inode__11027;
} else
{return cljs.core.edit_and_set.call(null,inode__11027,edit,idx__11028,n__11031);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11032 = this;
var inode__11033 = this;
return cljs.core.create_array_node_seq.call(null,this__11032.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11034 = this;
var inode__11035 = this;
var idx__11036 = ((hash >>> shift) & 0x01f);
var node__11037 = (this__11034.arr[idx__11036]);
if((node__11037 == null))
{return inode__11035;
} else
{var n__11038 = node__11037.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11038 === node__11037))
{return inode__11035;
} else
{if((n__11038 == null))
{if((this__11034.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11035,edit,idx__11036);
} else
{var editable__11039 = cljs.core.edit_and_set.call(null,inode__11035,edit,idx__11036,n__11038);
editable__11039.cnt = (editable__11039.cnt - 1);
return editable__11039;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11035,edit,idx__11036,n__11038);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11040 = this;
var inode__11041 = this;
if((e === this__11040.edit))
{return inode__11041;
} else
{return (new cljs.core.ArrayNode(e,this__11040.cnt,this__11040.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11042 = this;
var inode__11043 = this;
var len__11044 = this__11042.arr.length;
var i__11045 = 0;
var init__11046 = init;
while(true){
if((i__11045 < len__11044))
{var node__11047 = (this__11042.arr[i__11045]);
if(!((node__11047 == null)))
{var init__11048 = node__11047.kv_reduce(f,init__11046);
if(cljs.core.reduced_QMARK_.call(null,init__11048))
{return cljs.core.deref.call(null,init__11048);
} else
{{
var G__11067 = (i__11045 + 1);
var G__11068 = init__11048;
i__11045 = G__11067;
init__11046 = G__11068;
continue;
}
}
} else
{return null;
}
} else
{return init__11046;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11049 = this;
var inode__11050 = this;
var idx__11051 = ((hash >>> shift) & 0x01f);
var node__11052 = (this__11049.arr[idx__11051]);
if(!((node__11052 == null)))
{return node__11052.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11053 = this;
var inode__11054 = this;
var idx__11055 = ((hash >>> shift) & 0x01f);
var node__11056 = (this__11053.arr[idx__11055]);
if(!((node__11056 == null)))
{var n__11057 = node__11056.inode_without((shift + 5),hash,key);
if((n__11057 === node__11056))
{return inode__11054;
} else
{if((n__11057 == null))
{if((this__11053.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11054,null,idx__11055);
} else
{return (new cljs.core.ArrayNode(null,(this__11053.cnt - 1),cljs.core.clone_and_set.call(null,this__11053.arr,idx__11055,n__11057)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11053.cnt,cljs.core.clone_and_set.call(null,this__11053.arr,idx__11055,n__11057)));
} else
{return null;
}
}
}
} else
{return inode__11054;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11058 = this;
var inode__11059 = this;
var idx__11060 = ((hash >>> shift) & 0x01f);
var node__11061 = (this__11058.arr[idx__11060]);
if((node__11061 == null))
{return (new cljs.core.ArrayNode(null,(this__11058.cnt + 1),cljs.core.clone_and_set.call(null,this__11058.arr,idx__11060,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11062 = node__11061.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11062 === node__11061))
{return inode__11059;
} else
{return (new cljs.core.ArrayNode(null,this__11058.cnt,cljs.core.clone_and_set.call(null,this__11058.arr,idx__11060,n__11062)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11063 = this;
var inode__11064 = this;
var idx__11065 = ((hash >>> shift) & 0x01f);
var node__11066 = (this__11063.arr[idx__11065]);
if(!((node__11066 == null)))
{return node__11066.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11071 = (2 * cnt);
var i__11072 = 0;
while(true){
if((i__11072 < lim__11071))
{if(cljs.core.key_test.call(null,key,(arr[i__11072])))
{return i__11072;
} else
{{
var G__11073 = (i__11072 + 2);
i__11072 = G__11073;
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
var this__11074 = this;
var inode__11075 = this;
if((hash === this__11074.collision_hash))
{var idx__11076 = cljs.core.hash_collision_node_find_index.call(null,this__11074.arr,this__11074.cnt,key);
if((idx__11076 === -1))
{if((this__11074.arr.length > (2 * this__11074.cnt)))
{var editable__11077 = cljs.core.edit_and_set.call(null,inode__11075,edit,(2 * this__11074.cnt),key,((2 * this__11074.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11077.cnt = (editable__11077.cnt + 1);
return editable__11077;
} else
{var len__11078 = this__11074.arr.length;
var new_arr__11079 = cljs.core.make_array.call(null,(len__11078 + 2));
cljs.core.array_copy.call(null,this__11074.arr,0,new_arr__11079,0,len__11078);
(new_arr__11079[len__11078] = key);
(new_arr__11079[(len__11078 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11075.ensure_editable_array(edit,(this__11074.cnt + 1),new_arr__11079);
}
} else
{if(((this__11074.arr[(idx__11076 + 1)]) === val))
{return inode__11075;
} else
{return cljs.core.edit_and_set.call(null,inode__11075,edit,(idx__11076 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11074.collision_hash >>> shift) & 0x01f)),[null,inode__11075,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11080 = this;
var inode__11081 = this;
return cljs.core.create_inode_seq.call(null,this__11080.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11082 = this;
var inode__11083 = this;
var idx__11084 = cljs.core.hash_collision_node_find_index.call(null,this__11082.arr,this__11082.cnt,key);
if((idx__11084 === -1))
{return inode__11083;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11082.cnt === 1))
{return null;
} else
{var editable__11085 = inode__11083.ensure_editable(edit);
var earr__11086 = editable__11085.arr;
(earr__11086[idx__11084] = (earr__11086[((2 * this__11082.cnt) - 2)]));
(earr__11086[(idx__11084 + 1)] = (earr__11086[((2 * this__11082.cnt) - 1)]));
(earr__11086[((2 * this__11082.cnt) - 1)] = null);
(earr__11086[((2 * this__11082.cnt) - 2)] = null);
editable__11085.cnt = (editable__11085.cnt - 1);
return editable__11085;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11087 = this;
var inode__11088 = this;
if((e === this__11087.edit))
{return inode__11088;
} else
{var new_arr__11089 = cljs.core.make_array.call(null,(2 * (this__11087.cnt + 1)));
cljs.core.array_copy.call(null,this__11087.arr,0,new_arr__11089,0,(2 * this__11087.cnt));
return (new cljs.core.HashCollisionNode(e,this__11087.collision_hash,this__11087.cnt,new_arr__11089));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11090 = this;
var inode__11091 = this;
return cljs.core.inode_kv_reduce.call(null,this__11090.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11092 = this;
var inode__11093 = this;
var idx__11094 = cljs.core.hash_collision_node_find_index.call(null,this__11092.arr,this__11092.cnt,key);
if((idx__11094 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11092.arr[idx__11094])))
{return cljs.core.PersistentVector.fromArray([(this__11092.arr[idx__11094]),(this__11092.arr[(idx__11094 + 1)])], true);
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
var this__11095 = this;
var inode__11096 = this;
var idx__11097 = cljs.core.hash_collision_node_find_index.call(null,this__11095.arr,this__11095.cnt,key);
if((idx__11097 === -1))
{return inode__11096;
} else
{if((this__11095.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11095.collision_hash,(this__11095.cnt - 1),cljs.core.remove_pair.call(null,this__11095.arr,cljs.core.quot.call(null,idx__11097,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11098 = this;
var inode__11099 = this;
if((hash === this__11098.collision_hash))
{var idx__11100 = cljs.core.hash_collision_node_find_index.call(null,this__11098.arr,this__11098.cnt,key);
if((idx__11100 === -1))
{var len__11101 = this__11098.arr.length;
var new_arr__11102 = cljs.core.make_array.call(null,(len__11101 + 2));
cljs.core.array_copy.call(null,this__11098.arr,0,new_arr__11102,0,len__11101);
(new_arr__11102[len__11101] = key);
(new_arr__11102[(len__11101 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11098.collision_hash,(this__11098.cnt + 1),new_arr__11102));
} else
{if(cljs.core._EQ_.call(null,(this__11098.arr[idx__11100]),val))
{return inode__11099;
} else
{return (new cljs.core.HashCollisionNode(null,this__11098.collision_hash,this__11098.cnt,cljs.core.clone_and_set.call(null,this__11098.arr,(idx__11100 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11098.collision_hash >>> shift) & 0x01f)),[null,inode__11099])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11103 = this;
var inode__11104 = this;
var idx__11105 = cljs.core.hash_collision_node_find_index.call(null,this__11103.arr,this__11103.cnt,key);
if((idx__11105 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11103.arr[idx__11105])))
{return (this__11103.arr[(idx__11105 + 1)]);
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
var this__11106 = this;
var inode__11107 = this;
if((e === this__11106.edit))
{this__11106.arr = array;
this__11106.cnt = count;
return inode__11107;
} else
{return (new cljs.core.HashCollisionNode(this__11106.edit,this__11106.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11112 = cljs.core.hash.call(null,key1);
if((key1hash__11112 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11112,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11113 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11112,key1,val1,added_leaf_QMARK___11113).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11113);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11114 = cljs.core.hash.call(null,key1);
if((key1hash__11114 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11114,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11115 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11114,key1,val1,added_leaf_QMARK___11115).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11115);
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
var this__11116 = this;
var h__2242__auto____11117 = this__11116.__hash;
if(!((h__2242__auto____11117 == null)))
{return h__2242__auto____11117;
} else
{var h__2242__auto____11118 = cljs.core.hash_coll.call(null,coll);
this__11116.__hash = h__2242__auto____11118;
return h__2242__auto____11118;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11119 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11120 = this;
var this__11121 = this;
return cljs.core.pr_str.call(null,this__11121);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11122 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11123 = this;
if((this__11123.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11123.nodes[this__11123.i]),(this__11123.nodes[(this__11123.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11123.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11124 = this;
if((this__11124.s == null))
{return cljs.core.create_inode_seq.call(null,this__11124.nodes,(this__11124.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11124.nodes,this__11124.i,cljs.core.next.call(null,this__11124.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11125 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11126 = this;
return (new cljs.core.NodeSeq(meta,this__11126.nodes,this__11126.i,this__11126.s,this__11126.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11127 = this;
return this__11127.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11128 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11128.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11135 = nodes.length;
var j__11136 = i;
while(true){
if((j__11136 < len__11135))
{if(!(((nodes[j__11136]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11136,null,null));
} else
{var temp__3971__auto____11137 = (nodes[(j__11136 + 1)]);
if(cljs.core.truth_(temp__3971__auto____11137))
{var node__11138 = temp__3971__auto____11137;
var temp__3971__auto____11139 = node__11138.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11139))
{var node_seq__11140 = temp__3971__auto____11139;
return (new cljs.core.NodeSeq(null,nodes,(j__11136 + 2),node_seq__11140,null));
} else
{{
var G__11141 = (j__11136 + 2);
j__11136 = G__11141;
continue;
}
}
} else
{{
var G__11142 = (j__11136 + 2);
j__11136 = G__11142;
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
var this__11143 = this;
var h__2242__auto____11144 = this__11143.__hash;
if(!((h__2242__auto____11144 == null)))
{return h__2242__auto____11144;
} else
{var h__2242__auto____11145 = cljs.core.hash_coll.call(null,coll);
this__11143.__hash = h__2242__auto____11145;
return h__2242__auto____11145;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11146 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11147 = this;
var this__11148 = this;
return cljs.core.pr_str.call(null,this__11148);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11149 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11150 = this;
return cljs.core.first.call(null,this__11150.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11151 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11151.nodes,this__11151.i,cljs.core.next.call(null,this__11151.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11152 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11153 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11153.nodes,this__11153.i,this__11153.s,this__11153.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11154 = this;
return this__11154.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11155 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11155.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11162 = nodes.length;
var j__11163 = i;
while(true){
if((j__11163 < len__11162))
{var temp__3971__auto____11164 = (nodes[j__11163]);
if(cljs.core.truth_(temp__3971__auto____11164))
{var nj__11165 = temp__3971__auto____11164;
var temp__3971__auto____11166 = nj__11165.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11166))
{var ns__11167 = temp__3971__auto____11166;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11163 + 1),ns__11167,null));
} else
{{
var G__11168 = (j__11163 + 1);
j__11163 = G__11168;
continue;
}
}
} else
{{
var G__11169 = (j__11163 + 1);
j__11163 = G__11169;
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
var this__11172 = this;
return (new cljs.core.TransientHashMap({},this__11172.root,this__11172.cnt,this__11172.has_nil_QMARK_,this__11172.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11173 = this;
var h__2242__auto____11174 = this__11173.__hash;
if(!((h__2242__auto____11174 == null)))
{return h__2242__auto____11174;
} else
{var h__2242__auto____11175 = cljs.core.hash_imap.call(null,coll);
this__11173.__hash = h__2242__auto____11175;
return h__2242__auto____11175;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11176 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11177 = this;
if((k == null))
{if(this__11177.has_nil_QMARK_)
{return this__11177.nil_val;
} else
{return not_found;
}
} else
{if((this__11177.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11177.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11178 = this;
if((k == null))
{if((function (){var and__3822__auto____11179 = this__11178.has_nil_QMARK_;
if(and__3822__auto____11179)
{return (v === this__11178.nil_val);
} else
{return and__3822__auto____11179;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11178.meta,((this__11178.has_nil_QMARK_)?this__11178.cnt:(this__11178.cnt + 1)),this__11178.root,true,v,null));
}
} else
{var added_leaf_QMARK___11180 = (new cljs.core.Box(false));
var new_root__11181 = (((this__11178.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11178.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11180);
if((new_root__11181 === this__11178.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11178.meta,((added_leaf_QMARK___11180.val)?(this__11178.cnt + 1):this__11178.cnt),new_root__11181,this__11178.has_nil_QMARK_,this__11178.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11182 = this;
if((k == null))
{return this__11182.has_nil_QMARK_;
} else
{if((this__11182.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11182.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11205 = null;
var G__11205__2 = (function (this_sym11183,k){
var this__11185 = this;
var this_sym11183__11186 = this;
var coll__11187 = this_sym11183__11186;
return coll__11187.cljs$core$ILookup$_lookup$arity$2(coll__11187,k);
});
var G__11205__3 = (function (this_sym11184,k,not_found){
var this__11185 = this;
var this_sym11184__11188 = this;
var coll__11189 = this_sym11184__11188;
return coll__11189.cljs$core$ILookup$_lookup$arity$3(coll__11189,k,not_found);
});
G__11205 = function(this_sym11184,k,not_found){
switch(arguments.length){
case 2:
return G__11205__2.call(this,this_sym11184,k);
case 3:
return G__11205__3.call(this,this_sym11184,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11205;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11170,args11171){
var this__11190 = this;
return this_sym11170.call.apply(this_sym11170,[this_sym11170].concat(args11171.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11191 = this;
var init__11192 = ((this__11191.has_nil_QMARK_)?f.call(null,init,null,this__11191.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11192))
{return cljs.core.deref.call(null,init__11192);
} else
{if(!((this__11191.root == null)))
{return this__11191.root.kv_reduce(f,init__11192);
} else
{if("\uFDD0'else")
{return init__11192;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11193 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11194 = this;
var this__11195 = this;
return cljs.core.pr_str.call(null,this__11195);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11196 = this;
if((this__11196.cnt > 0))
{var s__11197 = ((!((this__11196.root == null)))?this__11196.root.inode_seq():null);
if(this__11196.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11196.nil_val], true),s__11197);
} else
{return s__11197;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11198 = this;
return this__11198.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11199 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11200 = this;
return (new cljs.core.PersistentHashMap(meta,this__11200.cnt,this__11200.root,this__11200.has_nil_QMARK_,this__11200.nil_val,this__11200.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11201 = this;
return this__11201.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11202 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11202.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11203 = this;
if((k == null))
{if(this__11203.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11203.meta,(this__11203.cnt - 1),this__11203.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11203.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11204 = this__11203.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11204 === this__11203.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11203.meta,(this__11203.cnt - 1),new_root__11204,this__11203.has_nil_QMARK_,this__11203.nil_val,null));
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
var len__11206 = ks.length;
var i__11207 = 0;
var out__11208 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11207 < len__11206))
{{
var G__11209 = (i__11207 + 1);
var G__11210 = cljs.core.assoc_BANG_.call(null,out__11208,(ks[i__11207]),(vs[i__11207]));
i__11207 = G__11209;
out__11208 = G__11210;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11208);
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
var this__11211 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11212 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11213 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11214 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11215 = this;
if((k == null))
{if(this__11215.has_nil_QMARK_)
{return this__11215.nil_val;
} else
{return null;
}
} else
{if((this__11215.root == null))
{return null;
} else
{return this__11215.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11216 = this;
if((k == null))
{if(this__11216.has_nil_QMARK_)
{return this__11216.nil_val;
} else
{return not_found;
}
} else
{if((this__11216.root == null))
{return not_found;
} else
{return this__11216.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11217 = this;
if(this__11217.edit)
{return this__11217.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11218 = this;
var tcoll__11219 = this;
if(this__11218.edit)
{if((function (){var G__11220__11221 = o;
if(G__11220__11221)
{if((function (){var or__3824__auto____11222 = (G__11220__11221.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11222)
{return or__3824__auto____11222;
} else
{return G__11220__11221.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11220__11221.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11220__11221);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11220__11221);
}
})())
{return tcoll__11219.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11223 = cljs.core.seq.call(null,o);
var tcoll__11224 = tcoll__11219;
while(true){
var temp__3971__auto____11225 = cljs.core.first.call(null,es__11223);
if(cljs.core.truth_(temp__3971__auto____11225))
{var e__11226 = temp__3971__auto____11225;
{
var G__11237 = cljs.core.next.call(null,es__11223);
var G__11238 = tcoll__11224.assoc_BANG_(cljs.core.key.call(null,e__11226),cljs.core.val.call(null,e__11226));
es__11223 = G__11237;
tcoll__11224 = G__11238;
continue;
}
} else
{return tcoll__11224;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11227 = this;
var tcoll__11228 = this;
if(this__11227.edit)
{if((k == null))
{if((this__11227.nil_val === v))
{} else
{this__11227.nil_val = v;
}
if(this__11227.has_nil_QMARK_)
{} else
{this__11227.count = (this__11227.count + 1);
this__11227.has_nil_QMARK_ = true;
}
return tcoll__11228;
} else
{var added_leaf_QMARK___11229 = (new cljs.core.Box(false));
var node__11230 = (((this__11227.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11227.root).inode_assoc_BANG_(this__11227.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11229);
if((node__11230 === this__11227.root))
{} else
{this__11227.root = node__11230;
}
if(added_leaf_QMARK___11229.val)
{this__11227.count = (this__11227.count + 1);
} else
{}
return tcoll__11228;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11231 = this;
var tcoll__11232 = this;
if(this__11231.edit)
{if((k == null))
{if(this__11231.has_nil_QMARK_)
{this__11231.has_nil_QMARK_ = false;
this__11231.nil_val = null;
this__11231.count = (this__11231.count - 1);
return tcoll__11232;
} else
{return tcoll__11232;
}
} else
{if((this__11231.root == null))
{return tcoll__11232;
} else
{var removed_leaf_QMARK___11233 = (new cljs.core.Box(false));
var node__11234 = this__11231.root.inode_without_BANG_(this__11231.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11233);
if((node__11234 === this__11231.root))
{} else
{this__11231.root = node__11234;
}
if(cljs.core.truth_((removed_leaf_QMARK___11233[0])))
{this__11231.count = (this__11231.count - 1);
} else
{}
return tcoll__11232;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11235 = this;
var tcoll__11236 = this;
if(this__11235.edit)
{this__11235.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11235.count,this__11235.root,this__11235.has_nil_QMARK_,this__11235.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11241 = node;
var stack__11242 = stack;
while(true){
if(!((t__11241 == null)))
{{
var G__11243 = ((ascending_QMARK_)?t__11241.left:t__11241.right);
var G__11244 = cljs.core.conj.call(null,stack__11242,t__11241);
t__11241 = G__11243;
stack__11242 = G__11244;
continue;
}
} else
{return stack__11242;
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
var this__11245 = this;
var h__2242__auto____11246 = this__11245.__hash;
if(!((h__2242__auto____11246 == null)))
{return h__2242__auto____11246;
} else
{var h__2242__auto____11247 = cljs.core.hash_coll.call(null,coll);
this__11245.__hash = h__2242__auto____11247;
return h__2242__auto____11247;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11248 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11249 = this;
var this__11250 = this;
return cljs.core.pr_str.call(null,this__11250);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11251 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11252 = this;
if((this__11252.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11252.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11253 = this;
return cljs.core.peek.call(null,this__11253.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11254 = this;
var t__11255 = cljs.core.first.call(null,this__11254.stack);
var next_stack__11256 = cljs.core.tree_map_seq_push.call(null,((this__11254.ascending_QMARK_)?t__11255.right:t__11255.left),cljs.core.next.call(null,this__11254.stack),this__11254.ascending_QMARK_);
if(!((next_stack__11256 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11256,this__11254.ascending_QMARK_,(this__11254.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11257 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11258 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11258.stack,this__11258.ascending_QMARK_,this__11258.cnt,this__11258.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11259 = this;
return this__11259.meta;
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
{if((function (){var and__3822__auto____11261 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____11261)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____11261;
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
{if((function (){var and__3822__auto____11263 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____11263)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____11263;
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
var init__11267 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11267))
{return cljs.core.deref.call(null,init__11267);
} else
{var init__11268 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11267):init__11267);
if(cljs.core.reduced_QMARK_.call(null,init__11268))
{return cljs.core.deref.call(null,init__11268);
} else
{var init__11269 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11268):init__11268);
if(cljs.core.reduced_QMARK_.call(null,init__11269))
{return cljs.core.deref.call(null,init__11269);
} else
{return init__11269;
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
var this__11272 = this;
var h__2242__auto____11273 = this__11272.__hash;
if(!((h__2242__auto____11273 == null)))
{return h__2242__auto____11273;
} else
{var h__2242__auto____11274 = cljs.core.hash_coll.call(null,coll);
this__11272.__hash = h__2242__auto____11274;
return h__2242__auto____11274;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11275 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11276 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11277 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11277.key,this__11277.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11325 = null;
var G__11325__2 = (function (this_sym11278,k){
var this__11280 = this;
var this_sym11278__11281 = this;
var node__11282 = this_sym11278__11281;
return node__11282.cljs$core$ILookup$_lookup$arity$2(node__11282,k);
});
var G__11325__3 = (function (this_sym11279,k,not_found){
var this__11280 = this;
var this_sym11279__11283 = this;
var node__11284 = this_sym11279__11283;
return node__11284.cljs$core$ILookup$_lookup$arity$3(node__11284,k,not_found);
});
G__11325 = function(this_sym11279,k,not_found){
switch(arguments.length){
case 2:
return G__11325__2.call(this,this_sym11279,k);
case 3:
return G__11325__3.call(this,this_sym11279,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11325;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11270,args11271){
var this__11285 = this;
return this_sym11270.call.apply(this_sym11270,[this_sym11270].concat(args11271.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11286 = this;
return cljs.core.PersistentVector.fromArray([this__11286.key,this__11286.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11287 = this;
return this__11287.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11288 = this;
return this__11288.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11289 = this;
var node__11290 = this;
return ins.balance_right(node__11290);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11291 = this;
var node__11292 = this;
return (new cljs.core.RedNode(this__11291.key,this__11291.val,this__11291.left,this__11291.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11293 = this;
var node__11294 = this;
return cljs.core.balance_right_del.call(null,this__11293.key,this__11293.val,this__11293.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11295 = this;
var node__11296 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11297 = this;
var node__11298 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11298,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11299 = this;
var node__11300 = this;
return cljs.core.balance_left_del.call(null,this__11299.key,this__11299.val,del,this__11299.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11301 = this;
var node__11302 = this;
return ins.balance_left(node__11302);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11303 = this;
var node__11304 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11304,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11326 = null;
var G__11326__0 = (function (){
var this__11305 = this;
var this__11307 = this;
return cljs.core.pr_str.call(null,this__11307);
});
G__11326 = function(){
switch(arguments.length){
case 0:
return G__11326__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11326;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11308 = this;
var node__11309 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11309,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11310 = this;
var node__11311 = this;
return node__11311;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11312 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11313 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11314 = this;
return cljs.core.list.call(null,this__11314.key,this__11314.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11315 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11316 = this;
return this__11316.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11317 = this;
return cljs.core.PersistentVector.fromArray([this__11317.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11318 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11318.key,this__11318.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11319 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11320 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11320.key,this__11320.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11321 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11322 = this;
if((n === 0))
{return this__11322.key;
} else
{if((n === 1))
{return this__11322.val;
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
var this__11323 = this;
if((n === 0))
{return this__11323.key;
} else
{if((n === 1))
{return this__11323.val;
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
var this__11324 = this;
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
var this__11329 = this;
var h__2242__auto____11330 = this__11329.__hash;
if(!((h__2242__auto____11330 == null)))
{return h__2242__auto____11330;
} else
{var h__2242__auto____11331 = cljs.core.hash_coll.call(null,coll);
this__11329.__hash = h__2242__auto____11331;
return h__2242__auto____11331;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11332 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11333 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11334 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11334.key,this__11334.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11382 = null;
var G__11382__2 = (function (this_sym11335,k){
var this__11337 = this;
var this_sym11335__11338 = this;
var node__11339 = this_sym11335__11338;
return node__11339.cljs$core$ILookup$_lookup$arity$2(node__11339,k);
});
var G__11382__3 = (function (this_sym11336,k,not_found){
var this__11337 = this;
var this_sym11336__11340 = this;
var node__11341 = this_sym11336__11340;
return node__11341.cljs$core$ILookup$_lookup$arity$3(node__11341,k,not_found);
});
G__11382 = function(this_sym11336,k,not_found){
switch(arguments.length){
case 2:
return G__11382__2.call(this,this_sym11336,k);
case 3:
return G__11382__3.call(this,this_sym11336,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11382;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11327,args11328){
var this__11342 = this;
return this_sym11327.call.apply(this_sym11327,[this_sym11327].concat(args11328.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11343 = this;
return cljs.core.PersistentVector.fromArray([this__11343.key,this__11343.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11344 = this;
return this__11344.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11345 = this;
return this__11345.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11346 = this;
var node__11347 = this;
return (new cljs.core.RedNode(this__11346.key,this__11346.val,this__11346.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11348 = this;
var node__11349 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11350 = this;
var node__11351 = this;
return (new cljs.core.RedNode(this__11350.key,this__11350.val,this__11350.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11352 = this;
var node__11353 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11354 = this;
var node__11355 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11355,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11356 = this;
var node__11357 = this;
return (new cljs.core.RedNode(this__11356.key,this__11356.val,del,this__11356.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11358 = this;
var node__11359 = this;
return (new cljs.core.RedNode(this__11358.key,this__11358.val,ins,this__11358.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11360 = this;
var node__11361 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11360.left))
{return (new cljs.core.RedNode(this__11360.key,this__11360.val,this__11360.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11360.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11360.right))
{return (new cljs.core.RedNode(this__11360.right.key,this__11360.right.val,(new cljs.core.BlackNode(this__11360.key,this__11360.val,this__11360.left,this__11360.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11360.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11361,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11383 = null;
var G__11383__0 = (function (){
var this__11362 = this;
var this__11364 = this;
return cljs.core.pr_str.call(null,this__11364);
});
G__11383 = function(){
switch(arguments.length){
case 0:
return G__11383__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11383;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11365 = this;
var node__11366 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11365.right))
{return (new cljs.core.RedNode(this__11365.key,this__11365.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11365.left,null)),this__11365.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11365.left))
{return (new cljs.core.RedNode(this__11365.left.key,this__11365.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11365.left.left,null)),(new cljs.core.BlackNode(this__11365.key,this__11365.val,this__11365.left.right,this__11365.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11366,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11367 = this;
var node__11368 = this;
return (new cljs.core.BlackNode(this__11367.key,this__11367.val,this__11367.left,this__11367.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11369 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11370 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11371 = this;
return cljs.core.list.call(null,this__11371.key,this__11371.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11372 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11373 = this;
return this__11373.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11374 = this;
return cljs.core.PersistentVector.fromArray([this__11374.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11375 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11375.key,this__11375.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11377 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11377.key,this__11377.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11378 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11379 = this;
if((n === 0))
{return this__11379.key;
} else
{if((n === 1))
{return this__11379.val;
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
var this__11380 = this;
if((n === 0))
{return this__11380.key;
} else
{if((n === 1))
{return this__11380.val;
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
var this__11381 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11387 = comp.call(null,k,tree.key);
if((c__11387 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11387 < 0))
{var ins__11388 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11388 == null)))
{return tree.add_left(ins__11388);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11389 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11389 == null)))
{return tree.add_right(ins__11389);
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
{var app__11392 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11392))
{return (new cljs.core.RedNode(app__11392.key,app__11392.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11392.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11392.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11392,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11393 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11393))
{return (new cljs.core.RedNode(app__11393.key,app__11393.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11393.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11393.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11393,right.right,null)));
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
{var c__11399 = comp.call(null,k,tree.key);
if((c__11399 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11399 < 0))
{var del__11400 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____11401 = !((del__11400 == null));
if(or__3824__auto____11401)
{return or__3824__auto____11401;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11400,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11400,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11402 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____11403 = !((del__11402 == null));
if(or__3824__auto____11403)
{return or__3824__auto____11403;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11402);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11402,null));
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
var tk__11406 = tree.key;
var c__11407 = comp.call(null,k,tk__11406);
if((c__11407 === 0))
{return tree.replace(tk__11406,v,tree.left,tree.right);
} else
{if((c__11407 < 0))
{return tree.replace(tk__11406,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11406,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11410 = this;
var h__2242__auto____11411 = this__11410.__hash;
if(!((h__2242__auto____11411 == null)))
{return h__2242__auto____11411;
} else
{var h__2242__auto____11412 = cljs.core.hash_imap.call(null,coll);
this__11410.__hash = h__2242__auto____11412;
return h__2242__auto____11412;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11413 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11414 = this;
var n__11415 = coll.entry_at(k);
if(!((n__11415 == null)))
{return n__11415.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11416 = this;
var found__11417 = [null];
var t__11418 = cljs.core.tree_map_add.call(null,this__11416.comp,this__11416.tree,k,v,found__11417);
if((t__11418 == null))
{var found_node__11419 = cljs.core.nth.call(null,found__11417,0);
if(cljs.core._EQ_.call(null,v,found_node__11419.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11416.comp,cljs.core.tree_map_replace.call(null,this__11416.comp,this__11416.tree,k,v),this__11416.cnt,this__11416.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11416.comp,t__11418.blacken(),(this__11416.cnt + 1),this__11416.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11420 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11454 = null;
var G__11454__2 = (function (this_sym11421,k){
var this__11423 = this;
var this_sym11421__11424 = this;
var coll__11425 = this_sym11421__11424;
return coll__11425.cljs$core$ILookup$_lookup$arity$2(coll__11425,k);
});
var G__11454__3 = (function (this_sym11422,k,not_found){
var this__11423 = this;
var this_sym11422__11426 = this;
var coll__11427 = this_sym11422__11426;
return coll__11427.cljs$core$ILookup$_lookup$arity$3(coll__11427,k,not_found);
});
G__11454 = function(this_sym11422,k,not_found){
switch(arguments.length){
case 2:
return G__11454__2.call(this,this_sym11422,k);
case 3:
return G__11454__3.call(this,this_sym11422,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11454;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11408,args11409){
var this__11428 = this;
return this_sym11408.call.apply(this_sym11408,[this_sym11408].concat(args11409.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11429 = this;
if(!((this__11429.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11429.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11430 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11431 = this;
if((this__11431.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11431.tree,false,this__11431.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11432 = this;
var this__11433 = this;
return cljs.core.pr_str.call(null,this__11433);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11434 = this;
var coll__11435 = this;
var t__11436 = this__11434.tree;
while(true){
if(!((t__11436 == null)))
{var c__11437 = this__11434.comp.call(null,k,t__11436.key);
if((c__11437 === 0))
{return t__11436;
} else
{if((c__11437 < 0))
{{
var G__11455 = t__11436.left;
t__11436 = G__11455;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11456 = t__11436.right;
t__11436 = G__11456;
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
var this__11438 = this;
if((this__11438.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11438.tree,ascending_QMARK_,this__11438.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11439 = this;
if((this__11439.cnt > 0))
{var stack__11440 = null;
var t__11441 = this__11439.tree;
while(true){
if(!((t__11441 == null)))
{var c__11442 = this__11439.comp.call(null,k,t__11441.key);
if((c__11442 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11440,t__11441),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11442 < 0))
{{
var G__11457 = cljs.core.conj.call(null,stack__11440,t__11441);
var G__11458 = t__11441.left;
stack__11440 = G__11457;
t__11441 = G__11458;
continue;
}
} else
{{
var G__11459 = stack__11440;
var G__11460 = t__11441.right;
stack__11440 = G__11459;
t__11441 = G__11460;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11442 > 0))
{{
var G__11461 = cljs.core.conj.call(null,stack__11440,t__11441);
var G__11462 = t__11441.right;
stack__11440 = G__11461;
t__11441 = G__11462;
continue;
}
} else
{{
var G__11463 = stack__11440;
var G__11464 = t__11441.left;
stack__11440 = G__11463;
t__11441 = G__11464;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11440 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11440,ascending_QMARK_,-1,null));
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
var this__11443 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11444 = this;
return this__11444.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11445 = this;
if((this__11445.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11445.tree,true,this__11445.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11446 = this;
return this__11446.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11447 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11448 = this;
return (new cljs.core.PersistentTreeMap(this__11448.comp,this__11448.tree,this__11448.cnt,meta,this__11448.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11449 = this;
return this__11449.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11450 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11450.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11451 = this;
var found__11452 = [null];
var t__11453 = cljs.core.tree_map_remove.call(null,this__11451.comp,this__11451.tree,k,found__11452);
if((t__11453 == null))
{if((cljs.core.nth.call(null,found__11452,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11451.comp,null,0,this__11451.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11451.comp,t__11453.blacken(),(this__11451.cnt - 1),this__11451.meta,null));
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
var in__11467 = cljs.core.seq.call(null,keyvals);
var out__11468 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11467)
{{
var G__11469 = cljs.core.nnext.call(null,in__11467);
var G__11470 = cljs.core.assoc_BANG_.call(null,out__11468,cljs.core.first.call(null,in__11467),cljs.core.second.call(null,in__11467));
in__11467 = G__11469;
out__11468 = G__11470;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11468);
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
hash_map.cljs$lang$applyTo = (function (arglist__11471){
var keyvals = cljs.core.seq(arglist__11471);;
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
array_map.cljs$lang$applyTo = (function (arglist__11472){
var keyvals = cljs.core.seq(arglist__11472);;
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
var ks__11476 = [];
var obj__11477 = {};
var kvs__11478 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11478)
{ks__11476.push(cljs.core.first.call(null,kvs__11478));
(obj__11477[cljs.core.first.call(null,kvs__11478)] = cljs.core.second.call(null,kvs__11478));
{
var G__11479 = cljs.core.nnext.call(null,kvs__11478);
kvs__11478 = G__11479;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11476,obj__11477);
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
obj_map.cljs$lang$applyTo = (function (arglist__11480){
var keyvals = cljs.core.seq(arglist__11480);;
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
var in__11483 = cljs.core.seq.call(null,keyvals);
var out__11484 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11483)
{{
var G__11485 = cljs.core.nnext.call(null,in__11483);
var G__11486 = cljs.core.assoc.call(null,out__11484,cljs.core.first.call(null,in__11483),cljs.core.second.call(null,in__11483));
in__11483 = G__11485;
out__11484 = G__11486;
continue;
}
} else
{return out__11484;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11487){
var keyvals = cljs.core.seq(arglist__11487);;
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
var in__11490 = cljs.core.seq.call(null,keyvals);
var out__11491 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11490)
{{
var G__11492 = cljs.core.nnext.call(null,in__11490);
var G__11493 = cljs.core.assoc.call(null,out__11491,cljs.core.first.call(null,in__11490),cljs.core.second.call(null,in__11490));
in__11490 = G__11492;
out__11491 = G__11493;
continue;
}
} else
{return out__11491;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11494){
var comparator = cljs.core.first(arglist__11494);
var keyvals = cljs.core.rest(arglist__11494);
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
{return cljs.core.reduce.call(null,(function (p1__11495_SHARP_,p2__11496_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11498 = p1__11495_SHARP_;
if(cljs.core.truth_(or__3824__auto____11498))
{return or__3824__auto____11498;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11496_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11499){
var maps = cljs.core.seq(arglist__11499);;
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
{var merge_entry__11507 = (function (m,e){
var k__11505 = cljs.core.first.call(null,e);
var v__11506 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11505))
{return cljs.core.assoc.call(null,m,k__11505,f.call(null,cljs.core._lookup.call(null,m,k__11505,null),v__11506));
} else
{return cljs.core.assoc.call(null,m,k__11505,v__11506);
}
});
var merge2__11509 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11507,(function (){var or__3824__auto____11508 = m1;
if(cljs.core.truth_(or__3824__auto____11508))
{return or__3824__auto____11508;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11509,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11510){
var f = cljs.core.first(arglist__11510);
var maps = cljs.core.rest(arglist__11510);
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
var ret__11515 = cljs.core.ObjMap.EMPTY;
var keys__11516 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11516)
{var key__11517 = cljs.core.first.call(null,keys__11516);
var entry__11518 = cljs.core._lookup.call(null,map,key__11517,"\uFDD0'user/not-found");
{
var G__11519 = ((cljs.core.not_EQ_.call(null,entry__11518,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__11515,key__11517,entry__11518):ret__11515);
var G__11520 = cljs.core.next.call(null,keys__11516);
ret__11515 = G__11519;
keys__11516 = G__11520;
continue;
}
} else
{return ret__11515;
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
var this__11524 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11524.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11525 = this;
var h__2242__auto____11526 = this__11525.__hash;
if(!((h__2242__auto____11526 == null)))
{return h__2242__auto____11526;
} else
{var h__2242__auto____11527 = cljs.core.hash_iset.call(null,coll);
this__11525.__hash = h__2242__auto____11527;
return h__2242__auto____11527;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11528 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11529 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11529.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11550 = null;
var G__11550__2 = (function (this_sym11530,k){
var this__11532 = this;
var this_sym11530__11533 = this;
var coll__11534 = this_sym11530__11533;
return coll__11534.cljs$core$ILookup$_lookup$arity$2(coll__11534,k);
});
var G__11550__3 = (function (this_sym11531,k,not_found){
var this__11532 = this;
var this_sym11531__11535 = this;
var coll__11536 = this_sym11531__11535;
return coll__11536.cljs$core$ILookup$_lookup$arity$3(coll__11536,k,not_found);
});
G__11550 = function(this_sym11531,k,not_found){
switch(arguments.length){
case 2:
return G__11550__2.call(this,this_sym11531,k);
case 3:
return G__11550__3.call(this,this_sym11531,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11550;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11522,args11523){
var this__11537 = this;
return this_sym11522.call.apply(this_sym11522,[this_sym11522].concat(args11523.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11538 = this;
return (new cljs.core.PersistentHashSet(this__11538.meta,cljs.core.assoc.call(null,this__11538.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11539 = this;
var this__11540 = this;
return cljs.core.pr_str.call(null,this__11540);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11541 = this;
return cljs.core.keys.call(null,this__11541.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11542 = this;
return (new cljs.core.PersistentHashSet(this__11542.meta,cljs.core.dissoc.call(null,this__11542.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11543 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11544 = this;
var and__3822__auto____11545 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11545)
{var and__3822__auto____11546 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11546)
{return cljs.core.every_QMARK_.call(null,(function (p1__11521_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11521_SHARP_);
}),other);
} else
{return and__3822__auto____11546;
}
} else
{return and__3822__auto____11545;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11547 = this;
return (new cljs.core.PersistentHashSet(meta,this__11547.hash_map,this__11547.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11548 = this;
return this__11548.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11549 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11549.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11551 = cljs.core.count.call(null,items);
var i__11552 = 0;
var out__11553 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11552 < len__11551))
{{
var G__11554 = (i__11552 + 1);
var G__11555 = cljs.core.conj_BANG_.call(null,out__11553,(items[i__11552]));
i__11552 = G__11554;
out__11553 = G__11555;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11553);
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
var G__11573 = null;
var G__11573__2 = (function (this_sym11559,k){
var this__11561 = this;
var this_sym11559__11562 = this;
var tcoll__11563 = this_sym11559__11562;
if((cljs.core._lookup.call(null,this__11561.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11573__3 = (function (this_sym11560,k,not_found){
var this__11561 = this;
var this_sym11560__11564 = this;
var tcoll__11565 = this_sym11560__11564;
if((cljs.core._lookup.call(null,this__11561.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11573 = function(this_sym11560,k,not_found){
switch(arguments.length){
case 2:
return G__11573__2.call(this,this_sym11560,k);
case 3:
return G__11573__3.call(this,this_sym11560,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11573;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11557,args11558){
var this__11566 = this;
return this_sym11557.call.apply(this_sym11557,[this_sym11557].concat(args11558.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11567 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11568 = this;
if((cljs.core._lookup.call(null,this__11568.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11569 = this;
return cljs.core.count.call(null,this__11569.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11570 = this;
this__11570.transient_map = cljs.core.dissoc_BANG_.call(null,this__11570.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11571 = this;
this__11571.transient_map = cljs.core.assoc_BANG_.call(null,this__11571.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11572 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11572.transient_map),null));
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
var this__11576 = this;
var h__2242__auto____11577 = this__11576.__hash;
if(!((h__2242__auto____11577 == null)))
{return h__2242__auto____11577;
} else
{var h__2242__auto____11578 = cljs.core.hash_iset.call(null,coll);
this__11576.__hash = h__2242__auto____11578;
return h__2242__auto____11578;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11579 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11580 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11580.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11606 = null;
var G__11606__2 = (function (this_sym11581,k){
var this__11583 = this;
var this_sym11581__11584 = this;
var coll__11585 = this_sym11581__11584;
return coll__11585.cljs$core$ILookup$_lookup$arity$2(coll__11585,k);
});
var G__11606__3 = (function (this_sym11582,k,not_found){
var this__11583 = this;
var this_sym11582__11586 = this;
var coll__11587 = this_sym11582__11586;
return coll__11587.cljs$core$ILookup$_lookup$arity$3(coll__11587,k,not_found);
});
G__11606 = function(this_sym11582,k,not_found){
switch(arguments.length){
case 2:
return G__11606__2.call(this,this_sym11582,k);
case 3:
return G__11606__3.call(this,this_sym11582,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11606;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11574,args11575){
var this__11588 = this;
return this_sym11574.call.apply(this_sym11574,[this_sym11574].concat(args11575.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11589 = this;
return (new cljs.core.PersistentTreeSet(this__11589.meta,cljs.core.assoc.call(null,this__11589.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11590 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11590.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11591 = this;
var this__11592 = this;
return cljs.core.pr_str.call(null,this__11592);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11593 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11593.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11594 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11594.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11595 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11596 = this;
return cljs.core._comparator.call(null,this__11596.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11597 = this;
return cljs.core.keys.call(null,this__11597.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11598 = this;
return (new cljs.core.PersistentTreeSet(this__11598.meta,cljs.core.dissoc.call(null,this__11598.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11599 = this;
return cljs.core.count.call(null,this__11599.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11600 = this;
var and__3822__auto____11601 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11601)
{var and__3822__auto____11602 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11602)
{return cljs.core.every_QMARK_.call(null,(function (p1__11556_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11556_SHARP_);
}),other);
} else
{return and__3822__auto____11602;
}
} else
{return and__3822__auto____11601;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11603 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11603.tree_map,this__11603.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11604 = this;
return this__11604.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11605 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11605.meta);
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
var G__11611__delegate = function (keys){
var in__11609 = cljs.core.seq.call(null,keys);
var out__11610 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11609))
{{
var G__11612 = cljs.core.next.call(null,in__11609);
var G__11613 = cljs.core.conj_BANG_.call(null,out__11610,cljs.core.first.call(null,in__11609));
in__11609 = G__11612;
out__11610 = G__11613;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11610);
}
break;
}
};
var G__11611 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11611__delegate.call(this, keys);
};
G__11611.cljs$lang$maxFixedArity = 0;
G__11611.cljs$lang$applyTo = (function (arglist__11614){
var keys = cljs.core.seq(arglist__11614);;
return G__11611__delegate(keys);
});
G__11611.cljs$lang$arity$variadic = G__11611__delegate;
return G__11611;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11615){
var keys = cljs.core.seq(arglist__11615);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11617){
var comparator = cljs.core.first(arglist__11617);
var keys = cljs.core.rest(arglist__11617);
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
{var n__11623 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11624 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11624))
{var e__11625 = temp__3971__auto____11624;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11625));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11623,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11616_SHARP_){
var temp__3971__auto____11626 = cljs.core.find.call(null,smap,p1__11616_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11626))
{var e__11627 = temp__3971__auto____11626;
return cljs.core.second.call(null,e__11627);
} else
{return p1__11616_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11657 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11650,seen){
while(true){
var vec__11651__11652 = p__11650;
var f__11653 = cljs.core.nth.call(null,vec__11651__11652,0,null);
var xs__11654 = vec__11651__11652;
var temp__3974__auto____11655 = cljs.core.seq.call(null,xs__11654);
if(temp__3974__auto____11655)
{var s__11656 = temp__3974__auto____11655;
if(cljs.core.contains_QMARK_.call(null,seen,f__11653))
{{
var G__11658 = cljs.core.rest.call(null,s__11656);
var G__11659 = seen;
p__11650 = G__11658;
seen = G__11659;
continue;
}
} else
{return cljs.core.cons.call(null,f__11653,step.call(null,cljs.core.rest.call(null,s__11656),cljs.core.conj.call(null,seen,f__11653)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11657.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11662 = cljs.core.PersistentVector.EMPTY;
var s__11663 = s;
while(true){
if(cljs.core.next.call(null,s__11663))
{{
var G__11664 = cljs.core.conj.call(null,ret__11662,cljs.core.first.call(null,s__11663));
var G__11665 = cljs.core.next.call(null,s__11663);
ret__11662 = G__11664;
s__11663 = G__11665;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11662);
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
{if((function (){var or__3824__auto____11668 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11668)
{return or__3824__auto____11668;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11669 = x.lastIndexOf("/");
if((i__11669 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11669 + 1));
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
if((function (){var or__3824__auto____11672 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11672)
{return or__3824__auto____11672;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11673 = x.lastIndexOf("/");
if((i__11673 > -1))
{return cljs.core.subs.call(null,x,2,i__11673);
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
var map__11680 = cljs.core.ObjMap.EMPTY;
var ks__11681 = cljs.core.seq.call(null,keys);
var vs__11682 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11683 = ks__11681;
if(and__3822__auto____11683)
{return vs__11682;
} else
{return and__3822__auto____11683;
}
})())
{{
var G__11684 = cljs.core.assoc.call(null,map__11680,cljs.core.first.call(null,ks__11681),cljs.core.first.call(null,vs__11682));
var G__11685 = cljs.core.next.call(null,ks__11681);
var G__11686 = cljs.core.next.call(null,vs__11682);
map__11680 = G__11684;
ks__11681 = G__11685;
vs__11682 = G__11686;
continue;
}
} else
{return map__11680;
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
var G__11689__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11674_SHARP_,p2__11675_SHARP_){
return max_key.call(null,k,p1__11674_SHARP_,p2__11675_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11689 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11689__delegate.call(this, k, x, y, more);
};
G__11689.cljs$lang$maxFixedArity = 3;
G__11689.cljs$lang$applyTo = (function (arglist__11690){
var k = cljs.core.first(arglist__11690);
var x = cljs.core.first(cljs.core.next(arglist__11690));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11690)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11690)));
return G__11689__delegate(k, x, y, more);
});
G__11689.cljs$lang$arity$variadic = G__11689__delegate;
return G__11689;
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
var G__11691__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11687_SHARP_,p2__11688_SHARP_){
return min_key.call(null,k,p1__11687_SHARP_,p2__11688_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11691 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11691__delegate.call(this, k, x, y, more);
};
G__11691.cljs$lang$maxFixedArity = 3;
G__11691.cljs$lang$applyTo = (function (arglist__11692){
var k = cljs.core.first(arglist__11692);
var x = cljs.core.first(cljs.core.next(arglist__11692));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11692)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11692)));
return G__11691__delegate(k, x, y, more);
});
G__11691.cljs$lang$arity$variadic = G__11691__delegate;
return G__11691;
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
var temp__3974__auto____11695 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11695)
{var s__11696 = temp__3974__auto____11695;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11696),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11696)));
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
var temp__3974__auto____11699 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11699)
{var s__11700 = temp__3974__auto____11699;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11700))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11700),take_while.call(null,pred,cljs.core.rest.call(null,s__11700)));
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
var comp__11702 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11702.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__11714 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11715 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11715))
{var vec__11716__11717 = temp__3974__auto____11715;
var e__11718 = cljs.core.nth.call(null,vec__11716__11717,0,null);
var s__11719 = vec__11716__11717;
if(cljs.core.truth_(include__11714.call(null,e__11718)))
{return s__11719;
} else
{return cljs.core.next.call(null,s__11719);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11714,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11720 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11720))
{var vec__11721__11722 = temp__3974__auto____11720;
var e__11723 = cljs.core.nth.call(null,vec__11721__11722,0,null);
var s__11724 = vec__11721__11722;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11723))?s__11724:cljs.core.next.call(null,s__11724)));
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
var include__11736 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11737 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11737))
{var vec__11738__11739 = temp__3974__auto____11737;
var e__11740 = cljs.core.nth.call(null,vec__11738__11739,0,null);
var s__11741 = vec__11738__11739;
if(cljs.core.truth_(include__11736.call(null,e__11740)))
{return s__11741;
} else
{return cljs.core.next.call(null,s__11741);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11736,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11742 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11742))
{var vec__11743__11744 = temp__3974__auto____11742;
var e__11745 = cljs.core.nth.call(null,vec__11743__11744,0,null);
var s__11746 = vec__11743__11744;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11745))?s__11746:cljs.core.next.call(null,s__11746)));
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
var this__11747 = this;
var h__2242__auto____11748 = this__11747.__hash;
if(!((h__2242__auto____11748 == null)))
{return h__2242__auto____11748;
} else
{var h__2242__auto____11749 = cljs.core.hash_coll.call(null,rng);
this__11747.__hash = h__2242__auto____11749;
return h__2242__auto____11749;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11750 = this;
if((this__11750.step > 0))
{if(((this__11750.start + this__11750.step) < this__11750.end))
{return (new cljs.core.Range(this__11750.meta,(this__11750.start + this__11750.step),this__11750.end,this__11750.step,null));
} else
{return null;
}
} else
{if(((this__11750.start + this__11750.step) > this__11750.end))
{return (new cljs.core.Range(this__11750.meta,(this__11750.start + this__11750.step),this__11750.end,this__11750.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11751 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11752 = this;
var this__11753 = this;
return cljs.core.pr_str.call(null,this__11753);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11754 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11755 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11756 = this;
if((this__11756.step > 0))
{if((this__11756.start < this__11756.end))
{return rng;
} else
{return null;
}
} else
{if((this__11756.start > this__11756.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11757 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11757.end - this__11757.start) / this__11757.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11758 = this;
return this__11758.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11759 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11759.meta,(this__11759.start + this__11759.step),this__11759.end,this__11759.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11760 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11761 = this;
return (new cljs.core.Range(meta,this__11761.start,this__11761.end,this__11761.step,this__11761.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11762 = this;
return this__11762.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11763 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11763.start + (n * this__11763.step));
} else
{if((function (){var and__3822__auto____11764 = (this__11763.start > this__11763.end);
if(and__3822__auto____11764)
{return (this__11763.step === 0);
} else
{return and__3822__auto____11764;
}
})())
{return this__11763.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11765 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11765.start + (n * this__11765.step));
} else
{if((function (){var and__3822__auto____11766 = (this__11765.start > this__11765.end);
if(and__3822__auto____11766)
{return (this__11765.step === 0);
} else
{return and__3822__auto____11766;
}
})())
{return this__11765.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11767 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11767.meta);
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
var temp__3974__auto____11770 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11770)
{var s__11771 = temp__3974__auto____11770;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11771),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11771)));
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
var temp__3974__auto____11778 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11778)
{var s__11779 = temp__3974__auto____11778;
var fst__11780 = cljs.core.first.call(null,s__11779);
var fv__11781 = f.call(null,fst__11780);
var run__11782 = cljs.core.cons.call(null,fst__11780,cljs.core.take_while.call(null,(function (p1__11772_SHARP_){
return cljs.core._EQ_.call(null,fv__11781,f.call(null,p1__11772_SHARP_));
}),cljs.core.next.call(null,s__11779)));
return cljs.core.cons.call(null,run__11782,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11782),s__11779))));
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
var temp__3971__auto____11797 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11797)
{var s__11798 = temp__3971__auto____11797;
return reductions.call(null,f,cljs.core.first.call(null,s__11798),cljs.core.rest.call(null,s__11798));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11799 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11799)
{var s__11800 = temp__3974__auto____11799;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11800)),cljs.core.rest.call(null,s__11800));
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
var G__11803 = null;
var G__11803__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11803__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11803__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11803__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11803__4 = (function() { 
var G__11804__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11804 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11804__delegate.call(this, x, y, z, args);
};
G__11804.cljs$lang$maxFixedArity = 3;
G__11804.cljs$lang$applyTo = (function (arglist__11805){
var x = cljs.core.first(arglist__11805);
var y = cljs.core.first(cljs.core.next(arglist__11805));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11805)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11805)));
return G__11804__delegate(x, y, z, args);
});
G__11804.cljs$lang$arity$variadic = G__11804__delegate;
return G__11804;
})()
;
G__11803 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11803__0.call(this);
case 1:
return G__11803__1.call(this,x);
case 2:
return G__11803__2.call(this,x,y);
case 3:
return G__11803__3.call(this,x,y,z);
default:
return G__11803__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11803.cljs$lang$maxFixedArity = 3;
G__11803.cljs$lang$applyTo = G__11803__4.cljs$lang$applyTo;
return G__11803;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11806 = null;
var G__11806__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11806__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11806__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11806__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11806__4 = (function() { 
var G__11807__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11807 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11807__delegate.call(this, x, y, z, args);
};
G__11807.cljs$lang$maxFixedArity = 3;
G__11807.cljs$lang$applyTo = (function (arglist__11808){
var x = cljs.core.first(arglist__11808);
var y = cljs.core.first(cljs.core.next(arglist__11808));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11808)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11808)));
return G__11807__delegate(x, y, z, args);
});
G__11807.cljs$lang$arity$variadic = G__11807__delegate;
return G__11807;
})()
;
G__11806 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11806__0.call(this);
case 1:
return G__11806__1.call(this,x);
case 2:
return G__11806__2.call(this,x,y);
case 3:
return G__11806__3.call(this,x,y,z);
default:
return G__11806__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11806.cljs$lang$maxFixedArity = 3;
G__11806.cljs$lang$applyTo = G__11806__4.cljs$lang$applyTo;
return G__11806;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11809 = null;
var G__11809__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11809__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11809__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11809__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11809__4 = (function() { 
var G__11810__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11810 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11810__delegate.call(this, x, y, z, args);
};
G__11810.cljs$lang$maxFixedArity = 3;
G__11810.cljs$lang$applyTo = (function (arglist__11811){
var x = cljs.core.first(arglist__11811);
var y = cljs.core.first(cljs.core.next(arglist__11811));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11811)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11811)));
return G__11810__delegate(x, y, z, args);
});
G__11810.cljs$lang$arity$variadic = G__11810__delegate;
return G__11810;
})()
;
G__11809 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11809__0.call(this);
case 1:
return G__11809__1.call(this,x);
case 2:
return G__11809__2.call(this,x,y);
case 3:
return G__11809__3.call(this,x,y,z);
default:
return G__11809__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11809.cljs$lang$maxFixedArity = 3;
G__11809.cljs$lang$applyTo = G__11809__4.cljs$lang$applyTo;
return G__11809;
})()
});
var juxt__4 = (function() { 
var G__11812__delegate = function (f,g,h,fs){
var fs__11802 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11813 = null;
var G__11813__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11783_SHARP_,p2__11784_SHARP_){
return cljs.core.conj.call(null,p1__11783_SHARP_,p2__11784_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11802);
});
var G__11813__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11785_SHARP_,p2__11786_SHARP_){
return cljs.core.conj.call(null,p1__11785_SHARP_,p2__11786_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11802);
});
var G__11813__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11787_SHARP_,p2__11788_SHARP_){
return cljs.core.conj.call(null,p1__11787_SHARP_,p2__11788_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11802);
});
var G__11813__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11789_SHARP_,p2__11790_SHARP_){
return cljs.core.conj.call(null,p1__11789_SHARP_,p2__11790_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11802);
});
var G__11813__4 = (function() { 
var G__11814__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11791_SHARP_,p2__11792_SHARP_){
return cljs.core.conj.call(null,p1__11791_SHARP_,cljs.core.apply.call(null,p2__11792_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11802);
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
};
var G__11812 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11812__delegate.call(this, f, g, h, fs);
};
G__11812.cljs$lang$maxFixedArity = 3;
G__11812.cljs$lang$applyTo = (function (arglist__11816){
var f = cljs.core.first(arglist__11816);
var g = cljs.core.first(cljs.core.next(arglist__11816));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11816)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11816)));
return G__11812__delegate(f, g, h, fs);
});
G__11812.cljs$lang$arity$variadic = G__11812__delegate;
return G__11812;
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
var G__11819 = cljs.core.next.call(null,coll);
coll = G__11819;
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
if(cljs.core.truth_((function (){var and__3822__auto____11818 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11818)
{return (n > 0);
} else
{return and__3822__auto____11818;
}
})()))
{{
var G__11820 = (n - 1);
var G__11821 = cljs.core.next.call(null,coll);
n = G__11820;
coll = G__11821;
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
var matches__11823 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11823),s))
{if((cljs.core.count.call(null,matches__11823) === 1))
{return cljs.core.first.call(null,matches__11823);
} else
{return cljs.core.vec.call(null,matches__11823);
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
var matches__11825 = re.exec(s);
if((matches__11825 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11825) === 1))
{return cljs.core.first.call(null,matches__11825);
} else
{return cljs.core.vec.call(null,matches__11825);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11830 = cljs.core.re_find.call(null,re,s);
var match_idx__11831 = s.search(re);
var match_str__11832 = ((cljs.core.coll_QMARK_.call(null,match_data__11830))?cljs.core.first.call(null,match_data__11830):match_data__11830);
var post_match__11833 = cljs.core.subs.call(null,s,(match_idx__11831 + cljs.core.count.call(null,match_str__11832)));
if(cljs.core.truth_(match_data__11830))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11830,re_seq.call(null,re,post_match__11833));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11840__11841 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11842 = cljs.core.nth.call(null,vec__11840__11841,0,null);
var flags__11843 = cljs.core.nth.call(null,vec__11840__11841,1,null);
var pattern__11844 = cljs.core.nth.call(null,vec__11840__11841,2,null);
return (new RegExp(pattern__11844,flags__11843));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11834_SHARP_){
return print_one.call(null,p1__11834_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11854 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11854))
{var and__3822__auto____11858 = (function (){var G__11855__11856 = obj;
if(G__11855__11856)
{if((function (){var or__3824__auto____11857 = (G__11855__11856.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11857)
{return or__3824__auto____11857;
} else
{return G__11855__11856.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11855__11856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11855__11856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11855__11856);
}
})();
if(cljs.core.truth_(and__3822__auto____11858))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11858;
}
} else
{return and__3822__auto____11854;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11859 = !((obj == null));
if(and__3822__auto____11859)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11859;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11860__11861 = obj;
if(G__11860__11861)
{if((function (){var or__3824__auto____11862 = (G__11860__11861.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11862)
{return or__3824__auto____11862;
} else
{return G__11860__11861.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11860__11861.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11860__11861);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11860__11861);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11882 = (new goog.string.StringBuffer());
var G__11883__11884 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11883__11884)
{var string__11885 = cljs.core.first.call(null,G__11883__11884);
var G__11883__11886 = G__11883__11884;
while(true){
sb__11882.append(string__11885);
var temp__3974__auto____11887 = cljs.core.next.call(null,G__11883__11886);
if(temp__3974__auto____11887)
{var G__11883__11888 = temp__3974__auto____11887;
{
var G__11901 = cljs.core.first.call(null,G__11883__11888);
var G__11902 = G__11883__11888;
string__11885 = G__11901;
G__11883__11886 = G__11902;
continue;
}
} else
{}
break;
}
} else
{}
var G__11889__11890 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11889__11890)
{var obj__11891 = cljs.core.first.call(null,G__11889__11890);
var G__11889__11892 = G__11889__11890;
while(true){
sb__11882.append(" ");
var G__11893__11894 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11891,opts));
if(G__11893__11894)
{var string__11895 = cljs.core.first.call(null,G__11893__11894);
var G__11893__11896 = G__11893__11894;
while(true){
sb__11882.append(string__11895);
var temp__3974__auto____11897 = cljs.core.next.call(null,G__11893__11896);
if(temp__3974__auto____11897)
{var G__11893__11898 = temp__3974__auto____11897;
{
var G__11903 = cljs.core.first.call(null,G__11893__11898);
var G__11904 = G__11893__11898;
string__11895 = G__11903;
G__11893__11896 = G__11904;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11899 = cljs.core.next.call(null,G__11889__11892);
if(temp__3974__auto____11899)
{var G__11889__11900 = temp__3974__auto____11899;
{
var G__11905 = cljs.core.first.call(null,G__11889__11900);
var G__11906 = G__11889__11900;
obj__11891 = G__11905;
G__11889__11892 = G__11906;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11882;
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
var sb__11908 = cljs.core.pr_sb.call(null,objs,opts);
sb__11908.append("\n");
return [cljs.core.str(sb__11908)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11927__11928 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11927__11928)
{var string__11929 = cljs.core.first.call(null,G__11927__11928);
var G__11927__11930 = G__11927__11928;
while(true){
cljs.core.string_print.call(null,string__11929);
var temp__3974__auto____11931 = cljs.core.next.call(null,G__11927__11930);
if(temp__3974__auto____11931)
{var G__11927__11932 = temp__3974__auto____11931;
{
var G__11945 = cljs.core.first.call(null,G__11927__11932);
var G__11946 = G__11927__11932;
string__11929 = G__11945;
G__11927__11930 = G__11946;
continue;
}
} else
{}
break;
}
} else
{}
var G__11933__11934 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11933__11934)
{var obj__11935 = cljs.core.first.call(null,G__11933__11934);
var G__11933__11936 = G__11933__11934;
while(true){
cljs.core.string_print.call(null," ");
var G__11937__11938 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11935,opts));
if(G__11937__11938)
{var string__11939 = cljs.core.first.call(null,G__11937__11938);
var G__11937__11940 = G__11937__11938;
while(true){
cljs.core.string_print.call(null,string__11939);
var temp__3974__auto____11941 = cljs.core.next.call(null,G__11937__11940);
if(temp__3974__auto____11941)
{var G__11937__11942 = temp__3974__auto____11941;
{
var G__11947 = cljs.core.first.call(null,G__11937__11942);
var G__11948 = G__11937__11942;
string__11939 = G__11947;
G__11937__11940 = G__11948;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11943 = cljs.core.next.call(null,G__11933__11936);
if(temp__3974__auto____11943)
{var G__11933__11944 = temp__3974__auto____11943;
{
var G__11949 = cljs.core.first.call(null,G__11933__11944);
var G__11950 = G__11933__11944;
obj__11935 = G__11949;
G__11933__11936 = G__11950;
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
pr_str.cljs$lang$applyTo = (function (arglist__11951){
var objs = cljs.core.seq(arglist__11951);;
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
prn_str.cljs$lang$applyTo = (function (arglist__11952){
var objs = cljs.core.seq(arglist__11952);;
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
pr.cljs$lang$applyTo = (function (arglist__11953){
var objs = cljs.core.seq(arglist__11953);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__11954){
var objs = cljs.core.seq(arglist__11954);;
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
print_str.cljs$lang$applyTo = (function (arglist__11955){
var objs = cljs.core.seq(arglist__11955);;
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
println.cljs$lang$applyTo = (function (arglist__11956){
var objs = cljs.core.seq(arglist__11956);;
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
println_str.cljs$lang$applyTo = (function (arglist__11957){
var objs = cljs.core.seq(arglist__11957);;
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
prn.cljs$lang$applyTo = (function (arglist__11958){
var objs = cljs.core.seq(arglist__11958);;
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
printf.cljs$lang$applyTo = (function (arglist__11959){
var fmt = cljs.core.first(arglist__11959);
var args = cljs.core.rest(arglist__11959);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11960 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11960,"{",", ","}",opts,coll);
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
var pr_pair__11961 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11961,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11962 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11962,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11963 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11963))
{var nspc__11964 = temp__3974__auto____11963;
return [cljs.core.str(nspc__11964),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11965 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11965))
{var nspc__11966 = temp__3974__auto____11965;
return [cljs.core.str(nspc__11966),cljs.core.str("/")].join('');
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
var pr_pair__11967 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11967,"{",", ","}",opts,coll);
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
var normalize__11969 = (function (n,len){
var ns__11968 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11968) < len))
{{
var G__11971 = [cljs.core.str("0"),cljs.core.str(ns__11968)].join('');
ns__11968 = G__11971;
continue;
}
} else
{return ns__11968;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11969.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11969.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11969.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11969.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11969.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11969.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__11970 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11970,"{",", ","}",opts,coll);
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
var this__11972 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11973 = this;
var G__11974__11975 = cljs.core.seq.call(null,this__11973.watches);
if(G__11974__11975)
{var G__11977__11979 = cljs.core.first.call(null,G__11974__11975);
var vec__11978__11980 = G__11977__11979;
var key__11981 = cljs.core.nth.call(null,vec__11978__11980,0,null);
var f__11982 = cljs.core.nth.call(null,vec__11978__11980,1,null);
var G__11974__11983 = G__11974__11975;
var G__11977__11984 = G__11977__11979;
var G__11974__11985 = G__11974__11983;
while(true){
var vec__11986__11987 = G__11977__11984;
var key__11988 = cljs.core.nth.call(null,vec__11986__11987,0,null);
var f__11989 = cljs.core.nth.call(null,vec__11986__11987,1,null);
var G__11974__11990 = G__11974__11985;
f__11989.call(null,key__11988,this$,oldval,newval);
var temp__3974__auto____11991 = cljs.core.next.call(null,G__11974__11990);
if(temp__3974__auto____11991)
{var G__11974__11992 = temp__3974__auto____11991;
{
var G__11999 = cljs.core.first.call(null,G__11974__11992);
var G__12000 = G__11974__11992;
G__11977__11984 = G__11999;
G__11974__11985 = G__12000;
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
var this__11993 = this;
return this$.watches = cljs.core.assoc.call(null,this__11993.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11994 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11994.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11995 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11995.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11996 = this;
return this__11996.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11997 = this;
return this__11997.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11998 = this;
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
var G__12012__delegate = function (x,p__12001){
var map__12007__12008 = p__12001;
var map__12007__12009 = ((cljs.core.seq_QMARK_.call(null,map__12007__12008))?cljs.core.apply.call(null,cljs.core.hash_map,map__12007__12008):map__12007__12008);
var validator__12010 = cljs.core._lookup.call(null,map__12007__12009,"\uFDD0'validator",null);
var meta__12011 = cljs.core._lookup.call(null,map__12007__12009,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12011,validator__12010,null));
};
var G__12012 = function (x,var_args){
var p__12001 = null;
if (goog.isDef(var_args)) {
  p__12001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12012__delegate.call(this, x, p__12001);
};
G__12012.cljs$lang$maxFixedArity = 1;
G__12012.cljs$lang$applyTo = (function (arglist__12013){
var x = cljs.core.first(arglist__12013);
var p__12001 = cljs.core.rest(arglist__12013);
return G__12012__delegate(x, p__12001);
});
G__12012.cljs$lang$arity$variadic = G__12012__delegate;
return G__12012;
})()
;
atom = function(x,var_args){
var p__12001 = var_args;
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
var temp__3974__auto____12017 = a.validator;
if(cljs.core.truth_(temp__3974__auto____12017))
{var validate__12018 = temp__3974__auto____12017;
if(cljs.core.truth_(validate__12018.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__12019 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12019,new_value);
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
var G__12020__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12020 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12020__delegate.call(this, a, f, x, y, z, more);
};
G__12020.cljs$lang$maxFixedArity = 5;
G__12020.cljs$lang$applyTo = (function (arglist__12021){
var a = cljs.core.first(arglist__12021);
var f = cljs.core.first(cljs.core.next(arglist__12021));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12021)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12021))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12021)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12021)))));
return G__12020__delegate(a, f, x, y, z, more);
});
G__12020.cljs$lang$arity$variadic = G__12020__delegate;
return G__12020;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12022){
var iref = cljs.core.first(arglist__12022);
var f = cljs.core.first(cljs.core.next(arglist__12022));
var args = cljs.core.rest(cljs.core.next(arglist__12022));
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
var this__12023 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12023.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12024 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12024.state,(function (p__12025){
var map__12026__12027 = p__12025;
var map__12026__12028 = ((cljs.core.seq_QMARK_.call(null,map__12026__12027))?cljs.core.apply.call(null,cljs.core.hash_map,map__12026__12027):map__12026__12027);
var curr_state__12029 = map__12026__12028;
var done__12030 = cljs.core._lookup.call(null,map__12026__12028,"\uFDD0'done",null);
if(cljs.core.truth_(done__12030))
{return curr_state__12029;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12024.f.call(null)});
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
var map__12051__12052 = options;
var map__12051__12053 = ((cljs.core.seq_QMARK_.call(null,map__12051__12052))?cljs.core.apply.call(null,cljs.core.hash_map,map__12051__12052):map__12051__12052);
var keywordize_keys__12054 = cljs.core._lookup.call(null,map__12051__12053,"\uFDD0'keywordize-keys",null);
var keyfn__12055 = (cljs.core.truth_(keywordize_keys__12054)?cljs.core.keyword:cljs.core.str);
var f__12070 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2512__auto____12069 = (function iter__12063(s__12064){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12064__12067 = s__12064;
while(true){
if(cljs.core.seq.call(null,s__12064__12067))
{var k__12068 = cljs.core.first.call(null,s__12064__12067);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12055.call(null,k__12068),thisfn.call(null,(x[k__12068]))], true),iter__12063.call(null,cljs.core.rest.call(null,s__12064__12067)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2512__auto____12069.call(null,cljs.core.js_keys.call(null,x));
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
return f__12070.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12071){
var x = cljs.core.first(arglist__12071);
var options = cljs.core.rest(arglist__12071);
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
var mem__12076 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12080__delegate = function (args){
var temp__3971__auto____12077 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12076),args,null);
if(cljs.core.truth_(temp__3971__auto____12077))
{var v__12078 = temp__3971__auto____12077;
return v__12078;
} else
{var ret__12079 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12076,cljs.core.assoc,args,ret__12079);
return ret__12079;
}
};
var G__12080 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12080__delegate.call(this, args);
};
G__12080.cljs$lang$maxFixedArity = 0;
G__12080.cljs$lang$applyTo = (function (arglist__12081){
var args = cljs.core.seq(arglist__12081);;
return G__12080__delegate(args);
});
G__12080.cljs$lang$arity$variadic = G__12080__delegate;
return G__12080;
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
var ret__12083 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12083))
{{
var G__12084 = ret__12083;
f = G__12084;
continue;
}
} else
{return ret__12083;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12085__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12085 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12085__delegate.call(this, f, args);
};
G__12085.cljs$lang$maxFixedArity = 1;
G__12085.cljs$lang$applyTo = (function (arglist__12086){
var f = cljs.core.first(arglist__12086);
var args = cljs.core.rest(arglist__12086);
return G__12085__delegate(f, args);
});
G__12085.cljs$lang$arity$variadic = G__12085__delegate;
return G__12085;
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
var k__12088 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12088,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12088,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____12097 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____12097)
{return or__3824__auto____12097;
} else
{var or__3824__auto____12098 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____12098)
{return or__3824__auto____12098;
} else
{var and__3822__auto____12099 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____12099)
{var and__3822__auto____12100 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____12100)
{var and__3822__auto____12101 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____12101)
{var ret__12102 = true;
var i__12103 = 0;
while(true){
if((function (){var or__3824__auto____12104 = cljs.core.not.call(null,ret__12102);
if(or__3824__auto____12104)
{return or__3824__auto____12104;
} else
{return (i__12103 === cljs.core.count.call(null,parent));
}
})())
{return ret__12102;
} else
{{
var G__12105 = isa_QMARK_.call(null,h,child.call(null,i__12103),parent.call(null,i__12103));
var G__12106 = (i__12103 + 1);
ret__12102 = G__12105;
i__12103 = G__12106;
continue;
}
}
break;
}
} else
{return and__3822__auto____12101;
}
} else
{return and__3822__auto____12100;
}
} else
{return and__3822__auto____12099;
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
var tp__12115 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12116 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12117 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12118 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____12119 = ((cljs.core.contains_QMARK_.call(null,tp__12115.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12117.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12117.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12115,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12118.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12116,parent,ta__12117),"\uFDD0'descendants":tf__12118.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12117,tag,td__12116)});
})());
if(cljs.core.truth_(or__3824__auto____12119))
{return or__3824__auto____12119;
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
var parentMap__12124 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12125 = (cljs.core.truth_(parentMap__12124.call(null,tag))?cljs.core.disj.call(null,parentMap__12124.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12126 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12125))?cljs.core.assoc.call(null,parentMap__12124,tag,childsParents__12125):cljs.core.dissoc.call(null,parentMap__12124,tag));
var deriv_seq__12127 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12107_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12107_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12107_SHARP_),cljs.core.second.call(null,p1__12107_SHARP_)));
}),cljs.core.seq.call(null,newParents__12126)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12124.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12108_SHARP_,p2__12109_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12108_SHARP_,p2__12109_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12127));
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
var xprefs__12135 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____12137 = (cljs.core.truth_((function (){var and__3822__auto____12136 = xprefs__12135;
if(cljs.core.truth_(and__3822__auto____12136))
{return xprefs__12135.call(null,y);
} else
{return and__3822__auto____12136;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____12137))
{return or__3824__auto____12137;
} else
{var or__3824__auto____12139 = (function (){var ps__12138 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12138) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12138),prefer_table)))
{} else
{}
{
var G__12142 = cljs.core.rest.call(null,ps__12138);
ps__12138 = G__12142;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12139))
{return or__3824__auto____12139;
} else
{var or__3824__auto____12141 = (function (){var ps__12140 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12140) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12140),y,prefer_table)))
{} else
{}
{
var G__12143 = cljs.core.rest.call(null,ps__12140);
ps__12140 = G__12143;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12141))
{return or__3824__auto____12141;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____12145 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____12145))
{return or__3824__auto____12145;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12163 = cljs.core.reduce.call(null,(function (be,p__12155){
var vec__12156__12157 = p__12155;
var k__12158 = cljs.core.nth.call(null,vec__12156__12157,0,null);
var ___12159 = cljs.core.nth.call(null,vec__12156__12157,1,null);
var e__12160 = vec__12156__12157;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12158))
{var be2__12162 = (cljs.core.truth_((function (){var or__3824__auto____12161 = (be == null);
if(or__3824__auto____12161)
{return or__3824__auto____12161;
} else
{return cljs.core.dominates.call(null,k__12158,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12160:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12162),k__12158,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12158),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12162)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12162;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12163))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12163));
return cljs.core.second.call(null,best_entry__12163);
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
if((function (){var and__3822__auto____12168 = mf;
if(and__3822__auto____12168)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____12168;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2413__auto____12169 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12170 = (cljs.core._reset[goog.typeOf(x__2413__auto____12169)]);
if(or__3824__auto____12170)
{return or__3824__auto____12170;
} else
{var or__3824__auto____12171 = (cljs.core._reset["_"]);
if(or__3824__auto____12171)
{return or__3824__auto____12171;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____12176 = mf;
if(and__3822__auto____12176)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____12176;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2413__auto____12177 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12178 = (cljs.core._add_method[goog.typeOf(x__2413__auto____12177)]);
if(or__3824__auto____12178)
{return or__3824__auto____12178;
} else
{var or__3824__auto____12179 = (cljs.core._add_method["_"]);
if(or__3824__auto____12179)
{return or__3824__auto____12179;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____12184 = mf;
if(and__3822__auto____12184)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____12184;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2413__auto____12185 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12186 = (cljs.core._remove_method[goog.typeOf(x__2413__auto____12185)]);
if(or__3824__auto____12186)
{return or__3824__auto____12186;
} else
{var or__3824__auto____12187 = (cljs.core._remove_method["_"]);
if(or__3824__auto____12187)
{return or__3824__auto____12187;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____12192 = mf;
if(and__3822__auto____12192)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____12192;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2413__auto____12193 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12194 = (cljs.core._prefer_method[goog.typeOf(x__2413__auto____12193)]);
if(or__3824__auto____12194)
{return or__3824__auto____12194;
} else
{var or__3824__auto____12195 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____12195)
{return or__3824__auto____12195;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____12200 = mf;
if(and__3822__auto____12200)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____12200;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2413__auto____12201 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12202 = (cljs.core._get_method[goog.typeOf(x__2413__auto____12201)]);
if(or__3824__auto____12202)
{return or__3824__auto____12202;
} else
{var or__3824__auto____12203 = (cljs.core._get_method["_"]);
if(or__3824__auto____12203)
{return or__3824__auto____12203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____12208 = mf;
if(and__3822__auto____12208)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____12208;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2413__auto____12209 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12210 = (cljs.core._methods[goog.typeOf(x__2413__auto____12209)]);
if(or__3824__auto____12210)
{return or__3824__auto____12210;
} else
{var or__3824__auto____12211 = (cljs.core._methods["_"]);
if(or__3824__auto____12211)
{return or__3824__auto____12211;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____12216 = mf;
if(and__3822__auto____12216)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____12216;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2413__auto____12217 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12218 = (cljs.core._prefers[goog.typeOf(x__2413__auto____12217)]);
if(or__3824__auto____12218)
{return or__3824__auto____12218;
} else
{var or__3824__auto____12219 = (cljs.core._prefers["_"]);
if(or__3824__auto____12219)
{return or__3824__auto____12219;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____12224 = mf;
if(and__3822__auto____12224)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____12224;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2413__auto____12225 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12226 = (cljs.core._dispatch[goog.typeOf(x__2413__auto____12225)]);
if(or__3824__auto____12226)
{return or__3824__auto____12226;
} else
{var or__3824__auto____12227 = (cljs.core._dispatch["_"]);
if(or__3824__auto____12227)
{return or__3824__auto____12227;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12230 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12231 = cljs.core._get_method.call(null,mf,dispatch_val__12230);
if(cljs.core.truth_(target_fn__12231))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12230)].join('')));
}
return cljs.core.apply.call(null,target_fn__12231,args);
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
var this__12232 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12233 = this;
cljs.core.swap_BANG_.call(null,this__12233.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12233.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12233.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12233.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12234 = this;
cljs.core.swap_BANG_.call(null,this__12234.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12234.method_cache,this__12234.method_table,this__12234.cached_hierarchy,this__12234.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12235 = this;
cljs.core.swap_BANG_.call(null,this__12235.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12235.method_cache,this__12235.method_table,this__12235.cached_hierarchy,this__12235.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12236 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12236.cached_hierarchy),cljs.core.deref.call(null,this__12236.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12236.method_cache,this__12236.method_table,this__12236.cached_hierarchy,this__12236.hierarchy);
}
var temp__3971__auto____12237 = cljs.core.deref.call(null,this__12236.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____12237))
{var target_fn__12238 = temp__3971__auto____12237;
return target_fn__12238;
} else
{var temp__3971__auto____12239 = cljs.core.find_and_cache_best_method.call(null,this__12236.name,dispatch_val,this__12236.hierarchy,this__12236.method_table,this__12236.prefer_table,this__12236.method_cache,this__12236.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____12239))
{var target_fn__12240 = temp__3971__auto____12239;
return target_fn__12240;
} else
{return cljs.core.deref.call(null,this__12236.method_table).call(null,this__12236.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12241 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12241.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12241.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12241.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12241.method_cache,this__12241.method_table,this__12241.cached_hierarchy,this__12241.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12242 = this;
return cljs.core.deref.call(null,this__12242.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12243 = this;
return cljs.core.deref.call(null,this__12243.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12244 = this;
return cljs.core.do_dispatch.call(null,mf,this__12244.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12246__delegate = function (_,args){
var self__12245 = this;
return cljs.core._dispatch.call(null,self__12245,args);
};
var G__12246 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12246__delegate.call(this, _, args);
};
G__12246.cljs$lang$maxFixedArity = 1;
G__12246.cljs$lang$applyTo = (function (arglist__12247){
var _ = cljs.core.first(arglist__12247);
var args = cljs.core.rest(arglist__12247);
return G__12246__delegate(_, args);
});
G__12246.cljs$lang$arity$variadic = G__12246__delegate;
return G__12246;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12248 = this;
return cljs.core._dispatch.call(null,self__12248,args);
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
var this__12249 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12251,_){
var this__12250 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12250.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12252 = this;
var and__3822__auto____12253 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____12253)
{return (this__12252.uuid === other.uuid);
} else
{return and__3822__auto____12253;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12254 = this;
var this__12255 = this;
return cljs.core.pr_str.call(null,this__12255);
});
cljs.core.UUID;
