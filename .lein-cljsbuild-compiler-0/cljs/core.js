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
var x__7359 = (((x == null))?null:x);
if((p[goog.typeOf(x__7359)]))
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
var G__7360__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7360 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7360__delegate.call(this, array, i, idxs);
};
G__7360.cljs$lang$maxFixedArity = 2;
G__7360.cljs$lang$applyTo = (function (arglist__7361){
var array = cljs.core.first(arglist__7361);
var i = cljs.core.first(cljs.core.next(arglist__7361));
var idxs = cljs.core.rest(cljs.core.next(arglist__7361));
return G__7360__delegate(array, i, idxs);
});
G__7360.cljs$lang$arity$variadic = G__7360__delegate;
return G__7360;
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
if((function (){var and__3822__auto____7446 = this$;
if(and__3822__auto____7446)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7446;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2389__auto____7447 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7448 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7447)]);
if(or__3824__auto____7448)
{return or__3824__auto____7448;
} else
{var or__3824__auto____7449 = (cljs.core._invoke["_"]);
if(or__3824__auto____7449)
{return or__3824__auto____7449;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7450 = this$;
if(and__3822__auto____7450)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7450;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2389__auto____7451 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7452 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7451)]);
if(or__3824__auto____7452)
{return or__3824__auto____7452;
} else
{var or__3824__auto____7453 = (cljs.core._invoke["_"]);
if(or__3824__auto____7453)
{return or__3824__auto____7453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7454 = this$;
if(and__3822__auto____7454)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7454;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2389__auto____7455 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7456 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7455)]);
if(or__3824__auto____7456)
{return or__3824__auto____7456;
} else
{var or__3824__auto____7457 = (cljs.core._invoke["_"]);
if(or__3824__auto____7457)
{return or__3824__auto____7457;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7458 = this$;
if(and__3822__auto____7458)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7458;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2389__auto____7459 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7460 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7459)]);
if(or__3824__auto____7460)
{return or__3824__auto____7460;
} else
{var or__3824__auto____7461 = (cljs.core._invoke["_"]);
if(or__3824__auto____7461)
{return or__3824__auto____7461;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7462 = this$;
if(and__3822__auto____7462)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7462;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2389__auto____7463 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7464 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7463)]);
if(or__3824__auto____7464)
{return or__3824__auto____7464;
} else
{var or__3824__auto____7465 = (cljs.core._invoke["_"]);
if(or__3824__auto____7465)
{return or__3824__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7466 = this$;
if(and__3822__auto____7466)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7466;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2389__auto____7467 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7468 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7467)]);
if(or__3824__auto____7468)
{return or__3824__auto____7468;
} else
{var or__3824__auto____7469 = (cljs.core._invoke["_"]);
if(or__3824__auto____7469)
{return or__3824__auto____7469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7470 = this$;
if(and__3822__auto____7470)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7470;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2389__auto____7471 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7472 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7471)]);
if(or__3824__auto____7472)
{return or__3824__auto____7472;
} else
{var or__3824__auto____7473 = (cljs.core._invoke["_"]);
if(or__3824__auto____7473)
{return or__3824__auto____7473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7474 = this$;
if(and__3822__auto____7474)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7474;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2389__auto____7475 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7476 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7475)]);
if(or__3824__auto____7476)
{return or__3824__auto____7476;
} else
{var or__3824__auto____7477 = (cljs.core._invoke["_"]);
if(or__3824__auto____7477)
{return or__3824__auto____7477;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7478 = this$;
if(and__3822__auto____7478)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7478;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2389__auto____7479 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7480 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7479)]);
if(or__3824__auto____7480)
{return or__3824__auto____7480;
} else
{var or__3824__auto____7481 = (cljs.core._invoke["_"]);
if(or__3824__auto____7481)
{return or__3824__auto____7481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7482 = this$;
if(and__3822__auto____7482)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7482;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2389__auto____7483 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7484 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7483)]);
if(or__3824__auto____7484)
{return or__3824__auto____7484;
} else
{var or__3824__auto____7485 = (cljs.core._invoke["_"]);
if(or__3824__auto____7485)
{return or__3824__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7486 = this$;
if(and__3822__auto____7486)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7486;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2389__auto____7487 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7488 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7487)]);
if(or__3824__auto____7488)
{return or__3824__auto____7488;
} else
{var or__3824__auto____7489 = (cljs.core._invoke["_"]);
if(or__3824__auto____7489)
{return or__3824__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7490 = this$;
if(and__3822__auto____7490)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7490;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2389__auto____7491 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7492 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7491)]);
if(or__3824__auto____7492)
{return or__3824__auto____7492;
} else
{var or__3824__auto____7493 = (cljs.core._invoke["_"]);
if(or__3824__auto____7493)
{return or__3824__auto____7493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7494 = this$;
if(and__3822__auto____7494)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7494;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2389__auto____7495 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7496 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7495)]);
if(or__3824__auto____7496)
{return or__3824__auto____7496;
} else
{var or__3824__auto____7497 = (cljs.core._invoke["_"]);
if(or__3824__auto____7497)
{return or__3824__auto____7497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7498 = this$;
if(and__3822__auto____7498)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7498;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2389__auto____7499 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7500 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7499)]);
if(or__3824__auto____7500)
{return or__3824__auto____7500;
} else
{var or__3824__auto____7501 = (cljs.core._invoke["_"]);
if(or__3824__auto____7501)
{return or__3824__auto____7501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7502 = this$;
if(and__3822__auto____7502)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7502;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2389__auto____7503 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7504 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7503)]);
if(or__3824__auto____7504)
{return or__3824__auto____7504;
} else
{var or__3824__auto____7505 = (cljs.core._invoke["_"]);
if(or__3824__auto____7505)
{return or__3824__auto____7505;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7506 = this$;
if(and__3822__auto____7506)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7506;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2389__auto____7507 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7508 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7507)]);
if(or__3824__auto____7508)
{return or__3824__auto____7508;
} else
{var or__3824__auto____7509 = (cljs.core._invoke["_"]);
if(or__3824__auto____7509)
{return or__3824__auto____7509;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7510 = this$;
if(and__3822__auto____7510)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7510;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2389__auto____7511 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7512 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7511)]);
if(or__3824__auto____7512)
{return or__3824__auto____7512;
} else
{var or__3824__auto____7513 = (cljs.core._invoke["_"]);
if(or__3824__auto____7513)
{return or__3824__auto____7513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7514 = this$;
if(and__3822__auto____7514)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7514;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2389__auto____7515 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7516 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7515)]);
if(or__3824__auto____7516)
{return or__3824__auto____7516;
} else
{var or__3824__auto____7517 = (cljs.core._invoke["_"]);
if(or__3824__auto____7517)
{return or__3824__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7518 = this$;
if(and__3822__auto____7518)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7518;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2389__auto____7519 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7520 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7519)]);
if(or__3824__auto____7520)
{return or__3824__auto____7520;
} else
{var or__3824__auto____7521 = (cljs.core._invoke["_"]);
if(or__3824__auto____7521)
{return or__3824__auto____7521;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7522 = this$;
if(and__3822__auto____7522)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7522;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2389__auto____7523 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7524 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7523)]);
if(or__3824__auto____7524)
{return or__3824__auto____7524;
} else
{var or__3824__auto____7525 = (cljs.core._invoke["_"]);
if(or__3824__auto____7525)
{return or__3824__auto____7525;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7526 = this$;
if(and__3822__auto____7526)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7526;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2389__auto____7527 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7528 = (cljs.core._invoke[goog.typeOf(x__2389__auto____7527)]);
if(or__3824__auto____7528)
{return or__3824__auto____7528;
} else
{var or__3824__auto____7529 = (cljs.core._invoke["_"]);
if(or__3824__auto____7529)
{return or__3824__auto____7529;
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
if((function (){var and__3822__auto____7534 = coll;
if(and__3822__auto____7534)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7534;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2389__auto____7535 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7536 = (cljs.core._count[goog.typeOf(x__2389__auto____7535)]);
if(or__3824__auto____7536)
{return or__3824__auto____7536;
} else
{var or__3824__auto____7537 = (cljs.core._count["_"]);
if(or__3824__auto____7537)
{return or__3824__auto____7537;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7542 = coll;
if(and__3822__auto____7542)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7542;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2389__auto____7543 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7544 = (cljs.core._empty[goog.typeOf(x__2389__auto____7543)]);
if(or__3824__auto____7544)
{return or__3824__auto____7544;
} else
{var or__3824__auto____7545 = (cljs.core._empty["_"]);
if(or__3824__auto____7545)
{return or__3824__auto____7545;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7550 = coll;
if(and__3822__auto____7550)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7550;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2389__auto____7551 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7552 = (cljs.core._conj[goog.typeOf(x__2389__auto____7551)]);
if(or__3824__auto____7552)
{return or__3824__auto____7552;
} else
{var or__3824__auto____7553 = (cljs.core._conj["_"]);
if(or__3824__auto____7553)
{return or__3824__auto____7553;
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
if((function (){var and__3822__auto____7562 = coll;
if(and__3822__auto____7562)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7562;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2389__auto____7563 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7564 = (cljs.core._nth[goog.typeOf(x__2389__auto____7563)]);
if(or__3824__auto____7564)
{return or__3824__auto____7564;
} else
{var or__3824__auto____7565 = (cljs.core._nth["_"]);
if(or__3824__auto____7565)
{return or__3824__auto____7565;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7566 = coll;
if(and__3822__auto____7566)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7566;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2389__auto____7567 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7568 = (cljs.core._nth[goog.typeOf(x__2389__auto____7567)]);
if(or__3824__auto____7568)
{return or__3824__auto____7568;
} else
{var or__3824__auto____7569 = (cljs.core._nth["_"]);
if(or__3824__auto____7569)
{return or__3824__auto____7569;
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
if((function (){var and__3822__auto____7574 = coll;
if(and__3822__auto____7574)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7574;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2389__auto____7575 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7576 = (cljs.core._first[goog.typeOf(x__2389__auto____7575)]);
if(or__3824__auto____7576)
{return or__3824__auto____7576;
} else
{var or__3824__auto____7577 = (cljs.core._first["_"]);
if(or__3824__auto____7577)
{return or__3824__auto____7577;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7582 = coll;
if(and__3822__auto____7582)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7582;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2389__auto____7583 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7584 = (cljs.core._rest[goog.typeOf(x__2389__auto____7583)]);
if(or__3824__auto____7584)
{return or__3824__auto____7584;
} else
{var or__3824__auto____7585 = (cljs.core._rest["_"]);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7590 = coll;
if(and__3822__auto____7590)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7590;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2389__auto____7591 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7592 = (cljs.core._next[goog.typeOf(x__2389__auto____7591)]);
if(or__3824__auto____7592)
{return or__3824__auto____7592;
} else
{var or__3824__auto____7593 = (cljs.core._next["_"]);
if(or__3824__auto____7593)
{return or__3824__auto____7593;
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
if((function (){var and__3822__auto____7602 = o;
if(and__3822__auto____7602)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7602;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2389__auto____7603 = (((o == null))?null:o);
return (function (){var or__3824__auto____7604 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7603)]);
if(or__3824__auto____7604)
{return or__3824__auto____7604;
} else
{var or__3824__auto____7605 = (cljs.core._lookup["_"]);
if(or__3824__auto____7605)
{return or__3824__auto____7605;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7606 = o;
if(and__3822__auto____7606)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7606;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2389__auto____7607 = (((o == null))?null:o);
return (function (){var or__3824__auto____7608 = (cljs.core._lookup[goog.typeOf(x__2389__auto____7607)]);
if(or__3824__auto____7608)
{return or__3824__auto____7608;
} else
{var or__3824__auto____7609 = (cljs.core._lookup["_"]);
if(or__3824__auto____7609)
{return or__3824__auto____7609;
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
if((function (){var and__3822__auto____7614 = coll;
if(and__3822__auto____7614)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7614;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2389__auto____7615 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7616 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2389__auto____7615)]);
if(or__3824__auto____7616)
{return or__3824__auto____7616;
} else
{var or__3824__auto____7617 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7617)
{return or__3824__auto____7617;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7622 = coll;
if(and__3822__auto____7622)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7622;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2389__auto____7623 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7624 = (cljs.core._assoc[goog.typeOf(x__2389__auto____7623)]);
if(or__3824__auto____7624)
{return or__3824__auto____7624;
} else
{var or__3824__auto____7625 = (cljs.core._assoc["_"]);
if(or__3824__auto____7625)
{return or__3824__auto____7625;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7630 = coll;
if(and__3822__auto____7630)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7630;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2389__auto____7631 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7632 = (cljs.core._dissoc[goog.typeOf(x__2389__auto____7631)]);
if(or__3824__auto____7632)
{return or__3824__auto____7632;
} else
{var or__3824__auto____7633 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7633)
{return or__3824__auto____7633;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7638 = coll;
if(and__3822__auto____7638)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7638;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2389__auto____7639 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7640 = (cljs.core._key[goog.typeOf(x__2389__auto____7639)]);
if(or__3824__auto____7640)
{return or__3824__auto____7640;
} else
{var or__3824__auto____7641 = (cljs.core._key["_"]);
if(or__3824__auto____7641)
{return or__3824__auto____7641;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7646 = coll;
if(and__3822__auto____7646)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7646;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2389__auto____7647 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7648 = (cljs.core._val[goog.typeOf(x__2389__auto____7647)]);
if(or__3824__auto____7648)
{return or__3824__auto____7648;
} else
{var or__3824__auto____7649 = (cljs.core._val["_"]);
if(or__3824__auto____7649)
{return or__3824__auto____7649;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7654 = coll;
if(and__3822__auto____7654)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7654;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2389__auto____7655 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7656 = (cljs.core._disjoin[goog.typeOf(x__2389__auto____7655)]);
if(or__3824__auto____7656)
{return or__3824__auto____7656;
} else
{var or__3824__auto____7657 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7657)
{return or__3824__auto____7657;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7662 = coll;
if(and__3822__auto____7662)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7662;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2389__auto____7663 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7664 = (cljs.core._peek[goog.typeOf(x__2389__auto____7663)]);
if(or__3824__auto____7664)
{return or__3824__auto____7664;
} else
{var or__3824__auto____7665 = (cljs.core._peek["_"]);
if(or__3824__auto____7665)
{return or__3824__auto____7665;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7670 = coll;
if(and__3822__auto____7670)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7670;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2389__auto____7671 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7672 = (cljs.core._pop[goog.typeOf(x__2389__auto____7671)]);
if(or__3824__auto____7672)
{return or__3824__auto____7672;
} else
{var or__3824__auto____7673 = (cljs.core._pop["_"]);
if(or__3824__auto____7673)
{return or__3824__auto____7673;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7678 = coll;
if(and__3822__auto____7678)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7678;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2389__auto____7679 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7680 = (cljs.core._assoc_n[goog.typeOf(x__2389__auto____7679)]);
if(or__3824__auto____7680)
{return or__3824__auto____7680;
} else
{var or__3824__auto____7681 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7681)
{return or__3824__auto____7681;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7686 = o;
if(and__3822__auto____7686)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7686;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2389__auto____7687 = (((o == null))?null:o);
return (function (){var or__3824__auto____7688 = (cljs.core._deref[goog.typeOf(x__2389__auto____7687)]);
if(or__3824__auto____7688)
{return or__3824__auto____7688;
} else
{var or__3824__auto____7689 = (cljs.core._deref["_"]);
if(or__3824__auto____7689)
{return or__3824__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7694 = o;
if(and__3822__auto____7694)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7694;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2389__auto____7695 = (((o == null))?null:o);
return (function (){var or__3824__auto____7696 = (cljs.core._deref_with_timeout[goog.typeOf(x__2389__auto____7695)]);
if(or__3824__auto____7696)
{return or__3824__auto____7696;
} else
{var or__3824__auto____7697 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7697)
{return or__3824__auto____7697;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7702 = o;
if(and__3822__auto____7702)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7702;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2389__auto____7703 = (((o == null))?null:o);
return (function (){var or__3824__auto____7704 = (cljs.core._meta[goog.typeOf(x__2389__auto____7703)]);
if(or__3824__auto____7704)
{return or__3824__auto____7704;
} else
{var or__3824__auto____7705 = (cljs.core._meta["_"]);
if(or__3824__auto____7705)
{return or__3824__auto____7705;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7710 = o;
if(and__3822__auto____7710)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7710;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2389__auto____7711 = (((o == null))?null:o);
return (function (){var or__3824__auto____7712 = (cljs.core._with_meta[goog.typeOf(x__2389__auto____7711)]);
if(or__3824__auto____7712)
{return or__3824__auto____7712;
} else
{var or__3824__auto____7713 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7713)
{return or__3824__auto____7713;
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
if((function (){var and__3822__auto____7722 = coll;
if(and__3822__auto____7722)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7722;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2389__auto____7723 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7724 = (cljs.core._reduce[goog.typeOf(x__2389__auto____7723)]);
if(or__3824__auto____7724)
{return or__3824__auto____7724;
} else
{var or__3824__auto____7725 = (cljs.core._reduce["_"]);
if(or__3824__auto____7725)
{return or__3824__auto____7725;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7726 = coll;
if(and__3822__auto____7726)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7726;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2389__auto____7727 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7728 = (cljs.core._reduce[goog.typeOf(x__2389__auto____7727)]);
if(or__3824__auto____7728)
{return or__3824__auto____7728;
} else
{var or__3824__auto____7729 = (cljs.core._reduce["_"]);
if(or__3824__auto____7729)
{return or__3824__auto____7729;
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
if((function (){var and__3822__auto____7734 = coll;
if(and__3822__auto____7734)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7734;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2389__auto____7735 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7736 = (cljs.core._kv_reduce[goog.typeOf(x__2389__auto____7735)]);
if(or__3824__auto____7736)
{return or__3824__auto____7736;
} else
{var or__3824__auto____7737 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7737)
{return or__3824__auto____7737;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7742 = o;
if(and__3822__auto____7742)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7742;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2389__auto____7743 = (((o == null))?null:o);
return (function (){var or__3824__auto____7744 = (cljs.core._equiv[goog.typeOf(x__2389__auto____7743)]);
if(or__3824__auto____7744)
{return or__3824__auto____7744;
} else
{var or__3824__auto____7745 = (cljs.core._equiv["_"]);
if(or__3824__auto____7745)
{return or__3824__auto____7745;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7750 = o;
if(and__3822__auto____7750)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7750;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2389__auto____7751 = (((o == null))?null:o);
return (function (){var or__3824__auto____7752 = (cljs.core._hash[goog.typeOf(x__2389__auto____7751)]);
if(or__3824__auto____7752)
{return or__3824__auto____7752;
} else
{var or__3824__auto____7753 = (cljs.core._hash["_"]);
if(or__3824__auto____7753)
{return or__3824__auto____7753;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7758 = o;
if(and__3822__auto____7758)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7758;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2389__auto____7759 = (((o == null))?null:o);
return (function (){var or__3824__auto____7760 = (cljs.core._seq[goog.typeOf(x__2389__auto____7759)]);
if(or__3824__auto____7760)
{return or__3824__auto____7760;
} else
{var or__3824__auto____7761 = (cljs.core._seq["_"]);
if(or__3824__auto____7761)
{return or__3824__auto____7761;
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
if((function (){var and__3822__auto____7766 = coll;
if(and__3822__auto____7766)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7766;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2389__auto____7767 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7768 = (cljs.core._rseq[goog.typeOf(x__2389__auto____7767)]);
if(or__3824__auto____7768)
{return or__3824__auto____7768;
} else
{var or__3824__auto____7769 = (cljs.core._rseq["_"]);
if(or__3824__auto____7769)
{return or__3824__auto____7769;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7774 = coll;
if(and__3822__auto____7774)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7774;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2389__auto____7775 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7776 = (cljs.core._sorted_seq[goog.typeOf(x__2389__auto____7775)]);
if(or__3824__auto____7776)
{return or__3824__auto____7776;
} else
{var or__3824__auto____7777 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7777)
{return or__3824__auto____7777;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7782 = coll;
if(and__3822__auto____7782)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7782;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2389__auto____7783 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7784 = (cljs.core._sorted_seq_from[goog.typeOf(x__2389__auto____7783)]);
if(or__3824__auto____7784)
{return or__3824__auto____7784;
} else
{var or__3824__auto____7785 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7785)
{return or__3824__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7790 = coll;
if(and__3822__auto____7790)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7790;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2389__auto____7791 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7792 = (cljs.core._entry_key[goog.typeOf(x__2389__auto____7791)]);
if(or__3824__auto____7792)
{return or__3824__auto____7792;
} else
{var or__3824__auto____7793 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7793)
{return or__3824__auto____7793;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7798 = coll;
if(and__3822__auto____7798)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7798;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2389__auto____7799 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7800 = (cljs.core._comparator[goog.typeOf(x__2389__auto____7799)]);
if(or__3824__auto____7800)
{return or__3824__auto____7800;
} else
{var or__3824__auto____7801 = (cljs.core._comparator["_"]);
if(or__3824__auto____7801)
{return or__3824__auto____7801;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7806 = o;
if(and__3822__auto____7806)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7806;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2389__auto____7807 = (((o == null))?null:o);
return (function (){var or__3824__auto____7808 = (cljs.core._pr_seq[goog.typeOf(x__2389__auto____7807)]);
if(or__3824__auto____7808)
{return or__3824__auto____7808;
} else
{var or__3824__auto____7809 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7809)
{return or__3824__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7814 = d;
if(and__3822__auto____7814)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7814;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2389__auto____7815 = (((d == null))?null:d);
return (function (){var or__3824__auto____7816 = (cljs.core._realized_QMARK_[goog.typeOf(x__2389__auto____7815)]);
if(or__3824__auto____7816)
{return or__3824__auto____7816;
} else
{var or__3824__auto____7817 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7817)
{return or__3824__auto____7817;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7822 = this$;
if(and__3822__auto____7822)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7822;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2389__auto____7823 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7824 = (cljs.core._notify_watches[goog.typeOf(x__2389__auto____7823)]);
if(or__3824__auto____7824)
{return or__3824__auto____7824;
} else
{var or__3824__auto____7825 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7825)
{return or__3824__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7830 = this$;
if(and__3822__auto____7830)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7830;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2389__auto____7831 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7832 = (cljs.core._add_watch[goog.typeOf(x__2389__auto____7831)]);
if(or__3824__auto____7832)
{return or__3824__auto____7832;
} else
{var or__3824__auto____7833 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7833)
{return or__3824__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7838 = this$;
if(and__3822__auto____7838)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7838;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2389__auto____7839 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7840 = (cljs.core._remove_watch[goog.typeOf(x__2389__auto____7839)]);
if(or__3824__auto____7840)
{return or__3824__auto____7840;
} else
{var or__3824__auto____7841 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7841)
{return or__3824__auto____7841;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7846 = coll;
if(and__3822__auto____7846)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7846;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2389__auto____7847 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7848 = (cljs.core._as_transient[goog.typeOf(x__2389__auto____7847)]);
if(or__3824__auto____7848)
{return or__3824__auto____7848;
} else
{var or__3824__auto____7849 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7849)
{return or__3824__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7854 = tcoll;
if(and__3822__auto____7854)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7854;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2389__auto____7855 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7856 = (cljs.core._conj_BANG_[goog.typeOf(x__2389__auto____7855)]);
if(or__3824__auto____7856)
{return or__3824__auto____7856;
} else
{var or__3824__auto____7857 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7857)
{return or__3824__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7862 = tcoll;
if(and__3822__auto____7862)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7862;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____7863 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7864 = (cljs.core._persistent_BANG_[goog.typeOf(x__2389__auto____7863)]);
if(or__3824__auto____7864)
{return or__3824__auto____7864;
} else
{var or__3824__auto____7865 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7865)
{return or__3824__auto____7865;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7870 = tcoll;
if(and__3822__auto____7870)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7870;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2389__auto____7871 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7872 = (cljs.core._assoc_BANG_[goog.typeOf(x__2389__auto____7871)]);
if(or__3824__auto____7872)
{return or__3824__auto____7872;
} else
{var or__3824__auto____7873 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7873)
{return or__3824__auto____7873;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7878 = tcoll;
if(and__3822__auto____7878)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7878;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2389__auto____7879 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7880 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2389__auto____7879)]);
if(or__3824__auto____7880)
{return or__3824__auto____7880;
} else
{var or__3824__auto____7881 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7881)
{return or__3824__auto____7881;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7886 = tcoll;
if(and__3822__auto____7886)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7886;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2389__auto____7887 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7888 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2389__auto____7887)]);
if(or__3824__auto____7888)
{return or__3824__auto____7888;
} else
{var or__3824__auto____7889 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7889)
{return or__3824__auto____7889;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7894 = tcoll;
if(and__3822__auto____7894)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7894;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2389__auto____7895 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7896 = (cljs.core._pop_BANG_[goog.typeOf(x__2389__auto____7895)]);
if(or__3824__auto____7896)
{return or__3824__auto____7896;
} else
{var or__3824__auto____7897 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7897)
{return or__3824__auto____7897;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7902 = tcoll;
if(and__3822__auto____7902)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7902;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2389__auto____7903 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7904 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2389__auto____7903)]);
if(or__3824__auto____7904)
{return or__3824__auto____7904;
} else
{var or__3824__auto____7905 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7905)
{return or__3824__auto____7905;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7910 = x;
if(and__3822__auto____7910)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7910;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2389__auto____7911 = (((x == null))?null:x);
return (function (){var or__3824__auto____7912 = (cljs.core._compare[goog.typeOf(x__2389__auto____7911)]);
if(or__3824__auto____7912)
{return or__3824__auto____7912;
} else
{var or__3824__auto____7913 = (cljs.core._compare["_"]);
if(or__3824__auto____7913)
{return or__3824__auto____7913;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7918 = coll;
if(and__3822__auto____7918)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7918;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2389__auto____7919 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7920 = (cljs.core._drop_first[goog.typeOf(x__2389__auto____7919)]);
if(or__3824__auto____7920)
{return or__3824__auto____7920;
} else
{var or__3824__auto____7921 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7921)
{return or__3824__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7926 = coll;
if(and__3822__auto____7926)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7926;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2389__auto____7927 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7928 = (cljs.core._chunked_first[goog.typeOf(x__2389__auto____7927)]);
if(or__3824__auto____7928)
{return or__3824__auto____7928;
} else
{var or__3824__auto____7929 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7929)
{return or__3824__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7934 = coll;
if(and__3822__auto____7934)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7934;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2389__auto____7935 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7936 = (cljs.core._chunked_rest[goog.typeOf(x__2389__auto____7935)]);
if(or__3824__auto____7936)
{return or__3824__auto____7936;
} else
{var or__3824__auto____7937 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7937)
{return or__3824__auto____7937;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7942 = coll;
if(and__3822__auto____7942)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7942;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2389__auto____7943 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7944 = (cljs.core._chunked_next[goog.typeOf(x__2389__auto____7943)]);
if(or__3824__auto____7944)
{return or__3824__auto____7944;
} else
{var or__3824__auto____7945 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7945)
{return or__3824__auto____7945;
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
var or__3824__auto____7947 = (x === y);
if(or__3824__auto____7947)
{return or__3824__auto____7947;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7948__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7949 = y;
var G__7950 = cljs.core.first.call(null,more);
var G__7951 = cljs.core.next.call(null,more);
x = G__7949;
y = G__7950;
more = G__7951;
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
var G__7948 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7948__delegate.call(this, x, y, more);
};
G__7948.cljs$lang$maxFixedArity = 2;
G__7948.cljs$lang$applyTo = (function (arglist__7952){
var x = cljs.core.first(arglist__7952);
var y = cljs.core.first(cljs.core.next(arglist__7952));
var more = cljs.core.rest(cljs.core.next(arglist__7952));
return G__7948__delegate(x, y, more);
});
G__7948.cljs$lang$arity$variadic = G__7948__delegate;
return G__7948;
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
var G__7953 = null;
var G__7953__2 = (function (o,k){
return null;
});
var G__7953__3 = (function (o,k,not_found){
return not_found;
});
G__7953 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7953__2.call(this,o,k);
case 3:
return G__7953__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7953;
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
var G__7954 = null;
var G__7954__2 = (function (_,f){
return f.call(null);
});
var G__7954__3 = (function (_,f,start){
return start;
});
G__7954 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7954__2.call(this,_,f);
case 3:
return G__7954__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7954;
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
var G__7955 = null;
var G__7955__2 = (function (_,n){
return null;
});
var G__7955__3 = (function (_,n,not_found){
return not_found;
});
G__7955 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7955__2.call(this,_,n);
case 3:
return G__7955__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7955;
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
var and__3822__auto____7956 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7956)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7956;
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
var cnt__7969 = cljs.core._count.call(null,cicoll);
if((cnt__7969 === 0))
{return f.call(null);
} else
{var val__7970 = cljs.core._nth.call(null,cicoll,0);
var n__7971 = 1;
while(true){
if((n__7971 < cnt__7969))
{var nval__7972 = f.call(null,val__7970,cljs.core._nth.call(null,cicoll,n__7971));
if(cljs.core.reduced_QMARK_.call(null,nval__7972))
{return cljs.core.deref.call(null,nval__7972);
} else
{{
var G__7981 = nval__7972;
var G__7982 = (n__7971 + 1);
val__7970 = G__7981;
n__7971 = G__7982;
continue;
}
}
} else
{return val__7970;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7973 = cljs.core._count.call(null,cicoll);
var val__7974 = val;
var n__7975 = 0;
while(true){
if((n__7975 < cnt__7973))
{var nval__7976 = f.call(null,val__7974,cljs.core._nth.call(null,cicoll,n__7975));
if(cljs.core.reduced_QMARK_.call(null,nval__7976))
{return cljs.core.deref.call(null,nval__7976);
} else
{{
var G__7983 = nval__7976;
var G__7984 = (n__7975 + 1);
val__7974 = G__7983;
n__7975 = G__7984;
continue;
}
}
} else
{return val__7974;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7977 = cljs.core._count.call(null,cicoll);
var val__7978 = val;
var n__7979 = idx;
while(true){
if((n__7979 < cnt__7977))
{var nval__7980 = f.call(null,val__7978,cljs.core._nth.call(null,cicoll,n__7979));
if(cljs.core.reduced_QMARK_.call(null,nval__7980))
{return cljs.core.deref.call(null,nval__7980);
} else
{{
var G__7985 = nval__7980;
var G__7986 = (n__7979 + 1);
val__7978 = G__7985;
n__7979 = G__7986;
continue;
}
}
} else
{return val__7978;
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
var cnt__7999 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8000 = (arr[0]);
var n__8001 = 1;
while(true){
if((n__8001 < cnt__7999))
{var nval__8002 = f.call(null,val__8000,(arr[n__8001]));
if(cljs.core.reduced_QMARK_.call(null,nval__8002))
{return cljs.core.deref.call(null,nval__8002);
} else
{{
var G__8011 = nval__8002;
var G__8012 = (n__8001 + 1);
val__8000 = G__8011;
n__8001 = G__8012;
continue;
}
}
} else
{return val__8000;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8003 = arr.length;
var val__8004 = val;
var n__8005 = 0;
while(true){
if((n__8005 < cnt__8003))
{var nval__8006 = f.call(null,val__8004,(arr[n__8005]));
if(cljs.core.reduced_QMARK_.call(null,nval__8006))
{return cljs.core.deref.call(null,nval__8006);
} else
{{
var G__8013 = nval__8006;
var G__8014 = (n__8005 + 1);
val__8004 = G__8013;
n__8005 = G__8014;
continue;
}
}
} else
{return val__8004;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8007 = arr.length;
var val__8008 = val;
var n__8009 = idx;
while(true){
if((n__8009 < cnt__8007))
{var nval__8010 = f.call(null,val__8008,(arr[n__8009]));
if(cljs.core.reduced_QMARK_.call(null,nval__8010))
{return cljs.core.deref.call(null,nval__8010);
} else
{{
var G__8015 = nval__8010;
var G__8016 = (n__8009 + 1);
val__8008 = G__8015;
n__8009 = G__8016;
continue;
}
}
} else
{return val__8008;
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
var this__8017 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8018 = this;
if(((this__8018.i + 1) < this__8018.a.length))
{return (new cljs.core.IndexedSeq(this__8018.a,(this__8018.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8019 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8020 = this;
var c__8021 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8021 > 0))
{return (new cljs.core.RSeq(coll,(c__8021 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8022 = this;
var this__8023 = this;
return cljs.core.pr_str.call(null,this__8023);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8024 = this;
if(cljs.core.counted_QMARK_.call(null,this__8024.a))
{return cljs.core.ci_reduce.call(null,this__8024.a,f,(this__8024.a[this__8024.i]),(this__8024.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8024.a[this__8024.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8025 = this;
if(cljs.core.counted_QMARK_.call(null,this__8025.a))
{return cljs.core.ci_reduce.call(null,this__8025.a,f,start,this__8025.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8026 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8027 = this;
return (this__8027.a.length - this__8027.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8028 = this;
return (this__8028.a[this__8028.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8029 = this;
if(((this__8029.i + 1) < this__8029.a.length))
{return (new cljs.core.IndexedSeq(this__8029.a,(this__8029.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8030 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8031 = this;
var i__8032 = (n + this__8031.i);
if((i__8032 < this__8031.a.length))
{return (this__8031.a[i__8032]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8033 = this;
var i__8034 = (n + this__8033.i);
if((i__8034 < this__8033.a.length))
{return (this__8033.a[i__8034]);
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
var G__8035 = null;
var G__8035__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8035__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8035 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8035__2.call(this,array,f);
case 3:
return G__8035__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8035;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8036 = null;
var G__8036__2 = (function (array,k){
return (array[k]);
});
var G__8036__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8036 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8036__2.call(this,array,k);
case 3:
return G__8036__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8036;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8037 = null;
var G__8037__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8037__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8037 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8037__2.call(this,array,n);
case 3:
return G__8037__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8037;
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
var this__8038 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8039 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8040 = this;
var this__8041 = this;
return cljs.core.pr_str.call(null,this__8041);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8042 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8043 = this;
return (this__8043.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8044 = this;
return cljs.core._nth.call(null,this__8044.ci,this__8044.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8045 = this;
if((this__8045.i > 0))
{return (new cljs.core.RSeq(this__8045.ci,(this__8045.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8046 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8047 = this;
return (new cljs.core.RSeq(this__8047.ci,this__8047.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8048 = this;
return this__8048.meta;
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
{if((function (){var G__8052__8053 = coll;
if(G__8052__8053)
{if((function (){var or__3824__auto____8054 = (G__8052__8053.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8054)
{return or__3824__auto____8054;
} else
{return G__8052__8053.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8052__8053.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8052__8053);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8052__8053);
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
{if((function (){var G__8059__8060 = coll;
if(G__8059__8060)
{if((function (){var or__3824__auto____8061 = (G__8059__8060.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8061)
{return or__3824__auto____8061;
} else
{return G__8059__8060.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8059__8060.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8059__8060);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8059__8060);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8062 = cljs.core.seq.call(null,coll);
if((s__8062 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8062);
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
{if((function (){var G__8067__8068 = coll;
if(G__8067__8068)
{if((function (){var or__3824__auto____8069 = (G__8067__8068.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8069)
{return or__3824__auto____8069;
} else
{return G__8067__8068.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8067__8068.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8067__8068);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8067__8068);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8070 = cljs.core.seq.call(null,coll);
if(!((s__8070 == null)))
{return cljs.core._rest.call(null,s__8070);
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
{if((function (){var G__8074__8075 = coll;
if(G__8074__8075)
{if((function (){var or__3824__auto____8076 = (G__8074__8075.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8076)
{return or__3824__auto____8076;
} else
{return G__8074__8075.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8074__8075.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8074__8075);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8074__8075);
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
var sn__8078 = cljs.core.next.call(null,s);
if(!((sn__8078 == null)))
{{
var G__8079 = sn__8078;
s = G__8079;
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
var G__8080__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8081 = conj.call(null,coll,x);
var G__8082 = cljs.core.first.call(null,xs);
var G__8083 = cljs.core.next.call(null,xs);
coll = G__8081;
x = G__8082;
xs = G__8083;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8080 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8080__delegate.call(this, coll, x, xs);
};
G__8080.cljs$lang$maxFixedArity = 2;
G__8080.cljs$lang$applyTo = (function (arglist__8084){
var coll = cljs.core.first(arglist__8084);
var x = cljs.core.first(cljs.core.next(arglist__8084));
var xs = cljs.core.rest(cljs.core.next(arglist__8084));
return G__8080__delegate(coll, x, xs);
});
G__8080.cljs$lang$arity$variadic = G__8080__delegate;
return G__8080;
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
var s__8087 = cljs.core.seq.call(null,coll);
var acc__8088 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8087))
{return (acc__8088 + cljs.core._count.call(null,s__8087));
} else
{{
var G__8089 = cljs.core.next.call(null,s__8087);
var G__8090 = (acc__8088 + 1);
s__8087 = G__8089;
acc__8088 = G__8090;
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
{if((function (){var G__8097__8098 = coll;
if(G__8097__8098)
{if((function (){var or__3824__auto____8099 = (G__8097__8098.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8099)
{return or__3824__auto____8099;
} else
{return G__8097__8098.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8097__8098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8097__8098);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8097__8098);
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
{if((function (){var G__8100__8101 = coll;
if(G__8100__8101)
{if((function (){var or__3824__auto____8102 = (G__8100__8101.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8102)
{return or__3824__auto____8102;
} else
{return G__8100__8101.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8100__8101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8100__8101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8100__8101);
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
var G__8105__delegate = function (coll,k,v,kvs){
while(true){
var ret__8104 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8106 = ret__8104;
var G__8107 = cljs.core.first.call(null,kvs);
var G__8108 = cljs.core.second.call(null,kvs);
var G__8109 = cljs.core.nnext.call(null,kvs);
coll = G__8106;
k = G__8107;
v = G__8108;
kvs = G__8109;
continue;
}
} else
{return ret__8104;
}
break;
}
};
var G__8105 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8105__delegate.call(this, coll, k, v, kvs);
};
G__8105.cljs$lang$maxFixedArity = 3;
G__8105.cljs$lang$applyTo = (function (arglist__8110){
var coll = cljs.core.first(arglist__8110);
var k = cljs.core.first(cljs.core.next(arglist__8110));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8110)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8110)));
return G__8105__delegate(coll, k, v, kvs);
});
G__8105.cljs$lang$arity$variadic = G__8105__delegate;
return G__8105;
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
var G__8113__delegate = function (coll,k,ks){
while(true){
var ret__8112 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8114 = ret__8112;
var G__8115 = cljs.core.first.call(null,ks);
var G__8116 = cljs.core.next.call(null,ks);
coll = G__8114;
k = G__8115;
ks = G__8116;
continue;
}
} else
{return ret__8112;
}
break;
}
};
var G__8113 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8113__delegate.call(this, coll, k, ks);
};
G__8113.cljs$lang$maxFixedArity = 2;
G__8113.cljs$lang$applyTo = (function (arglist__8117){
var coll = cljs.core.first(arglist__8117);
var k = cljs.core.first(cljs.core.next(arglist__8117));
var ks = cljs.core.rest(cljs.core.next(arglist__8117));
return G__8113__delegate(coll, k, ks);
});
G__8113.cljs$lang$arity$variadic = G__8113__delegate;
return G__8113;
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
if((function (){var G__8121__8122 = o;
if(G__8121__8122)
{if((function (){var or__3824__auto____8123 = (G__8121__8122.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8123)
{return or__3824__auto____8123;
} else
{return G__8121__8122.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8121__8122.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8121__8122);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8121__8122);
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
var G__8126__delegate = function (coll,k,ks){
while(true){
var ret__8125 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8127 = ret__8125;
var G__8128 = cljs.core.first.call(null,ks);
var G__8129 = cljs.core.next.call(null,ks);
coll = G__8127;
k = G__8128;
ks = G__8129;
continue;
}
} else
{return ret__8125;
}
break;
}
};
var G__8126 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8126__delegate.call(this, coll, k, ks);
};
G__8126.cljs$lang$maxFixedArity = 2;
G__8126.cljs$lang$applyTo = (function (arglist__8130){
var coll = cljs.core.first(arglist__8130);
var k = cljs.core.first(cljs.core.next(arglist__8130));
var ks = cljs.core.rest(cljs.core.next(arglist__8130));
return G__8126__delegate(coll, k, ks);
});
G__8126.cljs$lang$arity$variadic = G__8126__delegate;
return G__8126;
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
var h__8132 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8132);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8132;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8134 = (cljs.core.string_hash_cache[k]);
if(!((h__8134 == null)))
{return h__8134;
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
if((function (){var and__3822__auto____8136 = goog.isString(o);
if(and__3822__auto____8136)
{return check_cache;
} else
{return and__3822__auto____8136;
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
{var G__8140__8141 = x;
if(G__8140__8141)
{if((function (){var or__3824__auto____8142 = (G__8140__8141.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8142)
{return or__3824__auto____8142;
} else
{return G__8140__8141.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8140__8141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8140__8141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8140__8141);
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
{var G__8146__8147 = x;
if(G__8146__8147)
{if((function (){var or__3824__auto____8148 = (G__8146__8147.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8148)
{return or__3824__auto____8148;
} else
{return G__8146__8147.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8146__8147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8146__8147);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8146__8147);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8152__8153 = x;
if(G__8152__8153)
{if((function (){var or__3824__auto____8154 = (G__8152__8153.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8154)
{return or__3824__auto____8154;
} else
{return G__8152__8153.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8152__8153.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8152__8153);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8152__8153);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8158__8159 = x;
if(G__8158__8159)
{if((function (){var or__3824__auto____8160 = (G__8158__8159.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8160)
{return or__3824__auto____8160;
} else
{return G__8158__8159.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8158__8159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8158__8159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8158__8159);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8164__8165 = x;
if(G__8164__8165)
{if((function (){var or__3824__auto____8166 = (G__8164__8165.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8166)
{return or__3824__auto____8166;
} else
{return G__8164__8165.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8164__8165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8164__8165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8164__8165);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8170__8171 = x;
if(G__8170__8171)
{if((function (){var or__3824__auto____8172 = (G__8170__8171.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8172)
{return or__3824__auto____8172;
} else
{return G__8170__8171.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8170__8171.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8170__8171);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8170__8171);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8176__8177 = x;
if(G__8176__8177)
{if((function (){var or__3824__auto____8178 = (G__8176__8177.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8178)
{return or__3824__auto____8178;
} else
{return G__8176__8177.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8176__8177.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8176__8177);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8176__8177);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8182__8183 = x;
if(G__8182__8183)
{if((function (){var or__3824__auto____8184 = (G__8182__8183.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8184)
{return or__3824__auto____8184;
} else
{return G__8182__8183.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8182__8183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8182__8183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8182__8183);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8188__8189 = x;
if(G__8188__8189)
{if((function (){var or__3824__auto____8190 = (G__8188__8189.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8190)
{return or__3824__auto____8190;
} else
{return G__8188__8189.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8188__8189.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8188__8189);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8188__8189);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8194__8195 = x;
if(G__8194__8195)
{if(cljs.core.truth_((function (){var or__3824__auto____8196 = null;
if(cljs.core.truth_(or__3824__auto____8196))
{return or__3824__auto____8196;
} else
{return G__8194__8195.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8194__8195.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8194__8195);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8194__8195);
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
var G__8197__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8197 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8197__delegate.call(this, keyvals);
};
G__8197.cljs$lang$maxFixedArity = 0;
G__8197.cljs$lang$applyTo = (function (arglist__8198){
var keyvals = cljs.core.seq(arglist__8198);;
return G__8197__delegate(keyvals);
});
G__8197.cljs$lang$arity$variadic = G__8197__delegate;
return G__8197;
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
var keys__8200 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8200.push(key);
}));
return keys__8200;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8204 = i;
var j__8205 = j;
var len__8206 = len;
while(true){
if((len__8206 === 0))
{return to;
} else
{(to[j__8205] = (from[i__8204]));
{
var G__8207 = (i__8204 + 1);
var G__8208 = (j__8205 + 1);
var G__8209 = (len__8206 - 1);
i__8204 = G__8207;
j__8205 = G__8208;
len__8206 = G__8209;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8213 = (i + (len - 1));
var j__8214 = (j + (len - 1));
var len__8215 = len;
while(true){
if((len__8215 === 0))
{return to;
} else
{(to[j__8214] = (from[i__8213]));
{
var G__8216 = (i__8213 - 1);
var G__8217 = (j__8214 - 1);
var G__8218 = (len__8215 - 1);
i__8213 = G__8216;
j__8214 = G__8217;
len__8215 = G__8218;
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
{var G__8222__8223 = s;
if(G__8222__8223)
{if((function (){var or__3824__auto____8224 = (G__8222__8223.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8224)
{return or__3824__auto____8224;
} else
{return G__8222__8223.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8222__8223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8222__8223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8222__8223);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8228__8229 = s;
if(G__8228__8229)
{if((function (){var or__3824__auto____8230 = (G__8228__8229.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8230)
{return or__3824__auto____8230;
} else
{return G__8228__8229.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8228__8229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8228__8229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8228__8229);
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
var and__3822__auto____8233 = goog.isString(x);
if(and__3822__auto____8233)
{return !((function (){var or__3824__auto____8234 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8234)
{return or__3824__auto____8234;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8233;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8236 = goog.isString(x);
if(and__3822__auto____8236)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8236;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8238 = goog.isString(x);
if(and__3822__auto____8238)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8238;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8243 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8243)
{return or__3824__auto____8243;
} else
{var G__8244__8245 = f;
if(G__8244__8245)
{if((function (){var or__3824__auto____8246 = (G__8244__8245.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8246)
{return or__3824__auto____8246;
} else
{return G__8244__8245.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8244__8245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8244__8245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8244__8245);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8248 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8248)
{return (n == n.toFixed());
} else
{return and__3822__auto____8248;
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
if(cljs.core.truth_((function (){var and__3822__auto____8251 = coll;
if(cljs.core.truth_(and__3822__auto____8251))
{var and__3822__auto____8252 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8252)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8252;
}
} else
{return and__3822__auto____8251;
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
var G__8261__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8257 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8258 = more;
while(true){
var x__8259 = cljs.core.first.call(null,xs__8258);
var etc__8260 = cljs.core.next.call(null,xs__8258);
if(cljs.core.truth_(xs__8258))
{if(cljs.core.contains_QMARK_.call(null,s__8257,x__8259))
{return false;
} else
{{
var G__8262 = cljs.core.conj.call(null,s__8257,x__8259);
var G__8263 = etc__8260;
s__8257 = G__8262;
xs__8258 = G__8263;
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
var G__8261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8261__delegate.call(this, x, y, more);
};
G__8261.cljs$lang$maxFixedArity = 2;
G__8261.cljs$lang$applyTo = (function (arglist__8264){
var x = cljs.core.first(arglist__8264);
var y = cljs.core.first(cljs.core.next(arglist__8264));
var more = cljs.core.rest(cljs.core.next(arglist__8264));
return G__8261__delegate(x, y, more);
});
G__8261.cljs$lang$arity$variadic = G__8261__delegate;
return G__8261;
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
{if((function (){var G__8268__8269 = x;
if(G__8268__8269)
{if(cljs.core.truth_((function (){var or__3824__auto____8270 = null;
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{return G__8268__8269.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8268__8269.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8268__8269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8268__8269);
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
var xl__8275 = cljs.core.count.call(null,xs);
var yl__8276 = cljs.core.count.call(null,ys);
if((xl__8275 < yl__8276))
{return -1;
} else
{if((xl__8275 > yl__8276))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8275,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8277 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8278 = (d__8277 === 0);
if(and__3822__auto____8278)
{return ((n + 1) < len);
} else
{return and__3822__auto____8278;
}
})())
{{
var G__8279 = xs;
var G__8280 = ys;
var G__8281 = len;
var G__8282 = (n + 1);
xs = G__8279;
ys = G__8280;
len = G__8281;
n = G__8282;
continue;
}
} else
{return d__8277;
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
var r__8284 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8284))
{return r__8284;
} else
{if(cljs.core.truth_(r__8284))
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
{var a__8286 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8286,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8286);
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
var temp__3971__auto____8292 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8292)
{var s__8293 = temp__3971__auto____8292;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8293),cljs.core.next.call(null,s__8293));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8294 = val;
var coll__8295 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8295)
{var nval__8296 = f.call(null,val__8294,cljs.core.first.call(null,coll__8295));
if(cljs.core.reduced_QMARK_.call(null,nval__8296))
{return cljs.core.deref.call(null,nval__8296);
} else
{{
var G__8297 = nval__8296;
var G__8298 = cljs.core.next.call(null,coll__8295);
val__8294 = G__8297;
coll__8295 = G__8298;
continue;
}
}
} else
{return val__8294;
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
var a__8300 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8300);
return cljs.core.vec.call(null,a__8300);
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
if((function (){var G__8307__8308 = coll;
if(G__8307__8308)
{if((function (){var or__3824__auto____8309 = (G__8307__8308.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8309)
{return or__3824__auto____8309;
} else
{return G__8307__8308.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8307__8308.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8307__8308);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8307__8308);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8310__8311 = coll;
if(G__8310__8311)
{if((function (){var or__3824__auto____8312 = (G__8310__8311.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8312)
{return or__3824__auto____8312;
} else
{return G__8310__8311.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8310__8311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8310__8311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8310__8311);
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
var this__8313 = this;
return this__8313.val;
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
var G__8314__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8314 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8314__delegate.call(this, x, y, more);
};
G__8314.cljs$lang$maxFixedArity = 2;
G__8314.cljs$lang$applyTo = (function (arglist__8315){
var x = cljs.core.first(arglist__8315);
var y = cljs.core.first(cljs.core.next(arglist__8315));
var more = cljs.core.rest(cljs.core.next(arglist__8315));
return G__8314__delegate(x, y, more);
});
G__8314.cljs$lang$arity$variadic = G__8314__delegate;
return G__8314;
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
var G__8316__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8316__delegate.call(this, x, y, more);
};
G__8316.cljs$lang$maxFixedArity = 2;
G__8316.cljs$lang$applyTo = (function (arglist__8317){
var x = cljs.core.first(arglist__8317);
var y = cljs.core.first(cljs.core.next(arglist__8317));
var more = cljs.core.rest(cljs.core.next(arglist__8317));
return G__8316__delegate(x, y, more);
});
G__8316.cljs$lang$arity$variadic = G__8316__delegate;
return G__8316;
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
var G__8318__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8318 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8318__delegate.call(this, x, y, more);
};
G__8318.cljs$lang$maxFixedArity = 2;
G__8318.cljs$lang$applyTo = (function (arglist__8319){
var x = cljs.core.first(arglist__8319);
var y = cljs.core.first(cljs.core.next(arglist__8319));
var more = cljs.core.rest(cljs.core.next(arglist__8319));
return G__8318__delegate(x, y, more);
});
G__8318.cljs$lang$arity$variadic = G__8318__delegate;
return G__8318;
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
var G__8320__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8320 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8320__delegate.call(this, x, y, more);
};
G__8320.cljs$lang$maxFixedArity = 2;
G__8320.cljs$lang$applyTo = (function (arglist__8321){
var x = cljs.core.first(arglist__8321);
var y = cljs.core.first(cljs.core.next(arglist__8321));
var more = cljs.core.rest(cljs.core.next(arglist__8321));
return G__8320__delegate(x, y, more);
});
G__8320.cljs$lang$arity$variadic = G__8320__delegate;
return G__8320;
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
var G__8322__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8323 = y;
var G__8324 = cljs.core.first.call(null,more);
var G__8325 = cljs.core.next.call(null,more);
x = G__8323;
y = G__8324;
more = G__8325;
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
var G__8322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8322__delegate.call(this, x, y, more);
};
G__8322.cljs$lang$maxFixedArity = 2;
G__8322.cljs$lang$applyTo = (function (arglist__8326){
var x = cljs.core.first(arglist__8326);
var y = cljs.core.first(cljs.core.next(arglist__8326));
var more = cljs.core.rest(cljs.core.next(arglist__8326));
return G__8322__delegate(x, y, more);
});
G__8322.cljs$lang$arity$variadic = G__8322__delegate;
return G__8322;
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
var G__8327__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8328 = y;
var G__8329 = cljs.core.first.call(null,more);
var G__8330 = cljs.core.next.call(null,more);
x = G__8328;
y = G__8329;
more = G__8330;
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
var G__8327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8327__delegate.call(this, x, y, more);
};
G__8327.cljs$lang$maxFixedArity = 2;
G__8327.cljs$lang$applyTo = (function (arglist__8331){
var x = cljs.core.first(arglist__8331);
var y = cljs.core.first(cljs.core.next(arglist__8331));
var more = cljs.core.rest(cljs.core.next(arglist__8331));
return G__8327__delegate(x, y, more);
});
G__8327.cljs$lang$arity$variadic = G__8327__delegate;
return G__8327;
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
var G__8332__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8333 = y;
var G__8334 = cljs.core.first.call(null,more);
var G__8335 = cljs.core.next.call(null,more);
x = G__8333;
y = G__8334;
more = G__8335;
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
var G__8332 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8332__delegate.call(this, x, y, more);
};
G__8332.cljs$lang$maxFixedArity = 2;
G__8332.cljs$lang$applyTo = (function (arglist__8336){
var x = cljs.core.first(arglist__8336);
var y = cljs.core.first(cljs.core.next(arglist__8336));
var more = cljs.core.rest(cljs.core.next(arglist__8336));
return G__8332__delegate(x, y, more);
});
G__8332.cljs$lang$arity$variadic = G__8332__delegate;
return G__8332;
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
var G__8337__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8338 = y;
var G__8339 = cljs.core.first.call(null,more);
var G__8340 = cljs.core.next.call(null,more);
x = G__8338;
y = G__8339;
more = G__8340;
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
var G__8337 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8337__delegate.call(this, x, y, more);
};
G__8337.cljs$lang$maxFixedArity = 2;
G__8337.cljs$lang$applyTo = (function (arglist__8341){
var x = cljs.core.first(arglist__8341);
var y = cljs.core.first(cljs.core.next(arglist__8341));
var more = cljs.core.rest(cljs.core.next(arglist__8341));
return G__8337__delegate(x, y, more);
});
G__8337.cljs$lang$arity$variadic = G__8337__delegate;
return G__8337;
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
var G__8342__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8342 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8342__delegate.call(this, x, y, more);
};
G__8342.cljs$lang$maxFixedArity = 2;
G__8342.cljs$lang$applyTo = (function (arglist__8343){
var x = cljs.core.first(arglist__8343);
var y = cljs.core.first(cljs.core.next(arglist__8343));
var more = cljs.core.rest(cljs.core.next(arglist__8343));
return G__8342__delegate(x, y, more);
});
G__8342.cljs$lang$arity$variadic = G__8342__delegate;
return G__8342;
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
var G__8344__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8344__delegate.call(this, x, y, more);
};
G__8344.cljs$lang$maxFixedArity = 2;
G__8344.cljs$lang$applyTo = (function (arglist__8345){
var x = cljs.core.first(arglist__8345);
var y = cljs.core.first(cljs.core.next(arglist__8345));
var more = cljs.core.rest(cljs.core.next(arglist__8345));
return G__8344__delegate(x, y, more);
});
G__8344.cljs$lang$arity$variadic = G__8344__delegate;
return G__8344;
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
var rem__8347 = (n % d);
return cljs.core.fix.call(null,((n - rem__8347) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8349 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8349));
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
var v__8352 = (v - ((v >> 1) & 1431655765));
var v__8353 = ((v__8352 & 858993459) + ((v__8352 >> 2) & 858993459));
return ((((v__8353 + (v__8353 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__8354__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8355 = y;
var G__8356 = cljs.core.first.call(null,more);
var G__8357 = cljs.core.next.call(null,more);
x = G__8355;
y = G__8356;
more = G__8357;
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
var G__8354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8354__delegate.call(this, x, y, more);
};
G__8354.cljs$lang$maxFixedArity = 2;
G__8354.cljs$lang$applyTo = (function (arglist__8358){
var x = cljs.core.first(arglist__8358);
var y = cljs.core.first(cljs.core.next(arglist__8358));
var more = cljs.core.rest(cljs.core.next(arglist__8358));
return G__8354__delegate(x, y, more);
});
G__8354.cljs$lang$arity$variadic = G__8354__delegate;
return G__8354;
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
var n__8362 = n;
var xs__8363 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8364 = xs__8363;
if(and__3822__auto____8364)
{return (n__8362 > 0);
} else
{return and__3822__auto____8364;
}
})()))
{{
var G__8365 = (n__8362 - 1);
var G__8366 = cljs.core.next.call(null,xs__8363);
n__8362 = G__8365;
xs__8363 = G__8366;
continue;
}
} else
{return xs__8363;
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
var G__8367__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8368 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8369 = cljs.core.next.call(null,more);
sb = G__8368;
more = G__8369;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8367 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8367__delegate.call(this, x, ys);
};
G__8367.cljs$lang$maxFixedArity = 1;
G__8367.cljs$lang$applyTo = (function (arglist__8370){
var x = cljs.core.first(arglist__8370);
var ys = cljs.core.rest(arglist__8370);
return G__8367__delegate(x, ys);
});
G__8367.cljs$lang$arity$variadic = G__8367__delegate;
return G__8367;
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
var G__8371__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8372 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8373 = cljs.core.next.call(null,more);
sb = G__8372;
more = G__8373;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8371 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8371__delegate.call(this, x, ys);
};
G__8371.cljs$lang$maxFixedArity = 1;
G__8371.cljs$lang$applyTo = (function (arglist__8374){
var x = cljs.core.first(arglist__8374);
var ys = cljs.core.rest(arglist__8374);
return G__8371__delegate(x, ys);
});
G__8371.cljs$lang$arity$variadic = G__8371__delegate;
return G__8371;
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
format.cljs$lang$applyTo = (function (arglist__8375){
var fmt = cljs.core.first(arglist__8375);
var args = cljs.core.rest(arglist__8375);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8378 = cljs.core.seq.call(null,x);
var ys__8379 = cljs.core.seq.call(null,y);
while(true){
if((xs__8378 == null))
{return (ys__8379 == null);
} else
{if((ys__8379 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8378),cljs.core.first.call(null,ys__8379)))
{{
var G__8380 = cljs.core.next.call(null,xs__8378);
var G__8381 = cljs.core.next.call(null,ys__8379);
xs__8378 = G__8380;
ys__8379 = G__8381;
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
return cljs.core.reduce.call(null,(function (p1__8382_SHARP_,p2__8383_SHARP_){
return cljs.core.hash_combine.call(null,p1__8382_SHARP_,cljs.core.hash.call(null,p2__8383_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8387 = 0;
var s__8388 = cljs.core.seq.call(null,m);
while(true){
if(s__8388)
{var e__8389 = cljs.core.first.call(null,s__8388);
{
var G__8390 = ((h__8387 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8389)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8389)))) % 4503599627370496);
var G__8391 = cljs.core.next.call(null,s__8388);
h__8387 = G__8390;
s__8388 = G__8391;
continue;
}
} else
{return h__8387;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8395 = 0;
var s__8396 = cljs.core.seq.call(null,s);
while(true){
if(s__8396)
{var e__8397 = cljs.core.first.call(null,s__8396);
{
var G__8398 = ((h__8395 + cljs.core.hash.call(null,e__8397)) % 4503599627370496);
var G__8399 = cljs.core.next.call(null,s__8396);
h__8395 = G__8398;
s__8396 = G__8399;
continue;
}
} else
{return h__8395;
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
var G__8420__8421 = cljs.core.seq.call(null,fn_map);
if(G__8420__8421)
{var G__8423__8425 = cljs.core.first.call(null,G__8420__8421);
var vec__8424__8426 = G__8423__8425;
var key_name__8427 = cljs.core.nth.call(null,vec__8424__8426,0,null);
var f__8428 = cljs.core.nth.call(null,vec__8424__8426,1,null);
var G__8420__8429 = G__8420__8421;
var G__8423__8430 = G__8423__8425;
var G__8420__8431 = G__8420__8429;
while(true){
var vec__8432__8433 = G__8423__8430;
var key_name__8434 = cljs.core.nth.call(null,vec__8432__8433,0,null);
var f__8435 = cljs.core.nth.call(null,vec__8432__8433,1,null);
var G__8420__8436 = G__8420__8431;
var str_name__8437 = cljs.core.name.call(null,key_name__8434);
(obj[str_name__8437] = f__8435);
var temp__3974__auto____8438 = cljs.core.next.call(null,G__8420__8436);
if(temp__3974__auto____8438)
{var G__8420__8439 = temp__3974__auto____8438;
{
var G__8440 = cljs.core.first.call(null,G__8420__8439);
var G__8441 = G__8420__8439;
G__8423__8430 = G__8440;
G__8420__8431 = G__8441;
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
var this__8442 = this;
var h__2218__auto____8443 = this__8442.__hash;
if(!((h__2218__auto____8443 == null)))
{return h__2218__auto____8443;
} else
{var h__2218__auto____8444 = cljs.core.hash_coll.call(null,coll);
this__8442.__hash = h__2218__auto____8444;
return h__2218__auto____8444;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8445 = this;
if((this__8445.count === 1))
{return null;
} else
{return this__8445.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8446 = this;
return (new cljs.core.List(this__8446.meta,o,coll,(this__8446.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8447 = this;
var this__8448 = this;
return cljs.core.pr_str.call(null,this__8448);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8449 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8450 = this;
return this__8450.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8451 = this;
return this__8451.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8452 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8453 = this;
return this__8453.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8454 = this;
if((this__8454.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8454.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8455 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8456 = this;
return (new cljs.core.List(meta,this__8456.first,this__8456.rest,this__8456.count,this__8456.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8457 = this;
return this__8457.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8458 = this;
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
var this__8459 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8460 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8461 = this;
return (new cljs.core.List(this__8461.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8462 = this;
var this__8463 = this;
return cljs.core.pr_str.call(null,this__8463);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8464 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8465 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8466 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8467 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8468 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8469 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8470 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8471 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8472 = this;
return this__8472.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8473 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8477__8478 = coll;
if(G__8477__8478)
{if((function (){var or__3824__auto____8479 = (G__8477__8478.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8479)
{return or__3824__auto____8479;
} else
{return G__8477__8478.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8477__8478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8477__8478);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8477__8478);
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
var G__8480__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8480 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8480__delegate.call(this, x, y, z, items);
};
G__8480.cljs$lang$maxFixedArity = 3;
G__8480.cljs$lang$applyTo = (function (arglist__8481){
var x = cljs.core.first(arglist__8481);
var y = cljs.core.first(cljs.core.next(arglist__8481));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8481)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8481)));
return G__8480__delegate(x, y, z, items);
});
G__8480.cljs$lang$arity$variadic = G__8480__delegate;
return G__8480;
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
var this__8482 = this;
var h__2218__auto____8483 = this__8482.__hash;
if(!((h__2218__auto____8483 == null)))
{return h__2218__auto____8483;
} else
{var h__2218__auto____8484 = cljs.core.hash_coll.call(null,coll);
this__8482.__hash = h__2218__auto____8484;
return h__2218__auto____8484;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8485 = this;
if((this__8485.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8485.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8486 = this;
return (new cljs.core.Cons(null,o,coll,this__8486.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8487 = this;
var this__8488 = this;
return cljs.core.pr_str.call(null,this__8488);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8489 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8490 = this;
return this__8490.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8491 = this;
if((this__8491.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8491.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8492 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8493 = this;
return (new cljs.core.Cons(meta,this__8493.first,this__8493.rest,this__8493.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8494 = this;
return this__8494.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8495 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8495.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8500 = (coll == null);
if(or__3824__auto____8500)
{return or__3824__auto____8500;
} else
{var G__8501__8502 = coll;
if(G__8501__8502)
{if((function (){var or__3824__auto____8503 = (G__8501__8502.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8503)
{return or__3824__auto____8503;
} else
{return G__8501__8502.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8501__8502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8501__8502);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8501__8502);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8507__8508 = x;
if(G__8507__8508)
{if((function (){var or__3824__auto____8509 = (G__8507__8508.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8509)
{return or__3824__auto____8509;
} else
{return G__8507__8508.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8507__8508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8507__8508);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8507__8508);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8510 = null;
var G__8510__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8510__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8510 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8510__2.call(this,string,f);
case 3:
return G__8510__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8510;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8511 = null;
var G__8511__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8511__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8511 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8511__2.call(this,string,k);
case 3:
return G__8511__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8511;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8512 = null;
var G__8512__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8512__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8512 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8512__2.call(this,string,n);
case 3:
return G__8512__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8512;
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
var G__8524 = null;
var G__8524__2 = (function (this_sym8515,coll){
var this__8517 = this;
var this_sym8515__8518 = this;
var ___8519 = this_sym8515__8518;
if((coll == null))
{return null;
} else
{var strobj__8520 = coll.strobj;
if((strobj__8520 == null))
{return cljs.core._lookup.call(null,coll,this__8517.k,null);
} else
{return (strobj__8520[this__8517.k]);
}
}
});
var G__8524__3 = (function (this_sym8516,coll,not_found){
var this__8517 = this;
var this_sym8516__8521 = this;
var ___8522 = this_sym8516__8521;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8517.k,not_found);
}
});
G__8524 = function(this_sym8516,coll,not_found){
switch(arguments.length){
case 2:
return G__8524__2.call(this,this_sym8516,coll);
case 3:
return G__8524__3.call(this,this_sym8516,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8524;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8513,args8514){
var this__8523 = this;
return this_sym8513.call.apply(this_sym8513,[this_sym8513].concat(args8514.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8533 = null;
var G__8533__2 = (function (this_sym8527,coll){
var this_sym8527__8529 = this;
var this__8530 = this_sym8527__8529;
return cljs.core._lookup.call(null,coll,this__8530.toString(),null);
});
var G__8533__3 = (function (this_sym8528,coll,not_found){
var this_sym8528__8531 = this;
var this__8532 = this_sym8528__8531;
return cljs.core._lookup.call(null,coll,this__8532.toString(),not_found);
});
G__8533 = function(this_sym8528,coll,not_found){
switch(arguments.length){
case 2:
return G__8533__2.call(this,this_sym8528,coll);
case 3:
return G__8533__3.call(this,this_sym8528,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8533;
})()
;
String.prototype.apply = (function (this_sym8525,args8526){
return this_sym8525.call.apply(this_sym8525,[this_sym8525].concat(args8526.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8535 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8535;
} else
{lazy_seq.x = x__8535.call(null);
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
var this__8536 = this;
var h__2218__auto____8537 = this__8536.__hash;
if(!((h__2218__auto____8537 == null)))
{return h__2218__auto____8537;
} else
{var h__2218__auto____8538 = cljs.core.hash_coll.call(null,coll);
this__8536.__hash = h__2218__auto____8538;
return h__2218__auto____8538;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8539 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8540 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8541 = this;
var this__8542 = this;
return cljs.core.pr_str.call(null,this__8542);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8543 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8544 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8545 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8547 = this;
return (new cljs.core.LazySeq(meta,this__8547.realized,this__8547.x,this__8547.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8548 = this;
return this__8548.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8549 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8549.meta);
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
var this__8550 = this;
return this__8550.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8551 = this;
var ___8552 = this;
(this__8551.buf[this__8551.end] = o);
return this__8551.end = (this__8551.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8553 = this;
var ___8554 = this;
var ret__8555 = (new cljs.core.ArrayChunk(this__8553.buf,0,this__8553.end));
this__8553.buf = null;
return ret__8555;
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
var this__8556 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8556.arr[this__8556.off]),(this__8556.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8557 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8557.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8558 = this;
if((this__8558.off === this__8558.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8558.arr,(this__8558.off + 1),this__8558.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8559 = this;
return (this__8559.arr[(this__8559.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8560 = this;
if((function (){var and__3822__auto____8561 = (i >= 0);
if(and__3822__auto____8561)
{return (i < (this__8560.end - this__8560.off));
} else
{return and__3822__auto____8561;
}
})())
{return (this__8560.arr[(this__8560.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8562 = this;
return (this__8562.end - this__8562.off);
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
var this__8563 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8564 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8565 = this;
return cljs.core._nth.call(null,this__8565.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8566 = this;
if((cljs.core._count.call(null,this__8566.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8566.chunk),this__8566.more,this__8566.meta));
} else
{if((this__8566.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8566.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8567 = this;
if((this__8567.more == null))
{return null;
} else
{return this__8567.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8569 = this;
return (new cljs.core.ChunkedCons(this__8569.chunk,this__8569.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8570 = this;
return this__8570.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8571 = this;
return this__8571.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8572 = this;
if((this__8572.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8572.more;
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
if((function (){var G__8576__8577 = s;
if(G__8576__8577)
{if(cljs.core.truth_((function (){var or__3824__auto____8578 = null;
if(cljs.core.truth_(or__3824__auto____8578))
{return or__3824__auto____8578;
} else
{return G__8576__8577.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8576__8577.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8576__8577);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8576__8577);
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
var ary__8581 = [];
var s__8582 = s;
while(true){
if(cljs.core.seq.call(null,s__8582))
{ary__8581.push(cljs.core.first.call(null,s__8582));
{
var G__8583 = cljs.core.next.call(null,s__8582);
s__8582 = G__8583;
continue;
}
} else
{return ary__8581;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8587 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8588 = 0;
var xs__8589 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8589)
{(ret__8587[i__8588] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8589)));
{
var G__8590 = (i__8588 + 1);
var G__8591 = cljs.core.next.call(null,xs__8589);
i__8588 = G__8590;
xs__8589 = G__8591;
continue;
}
} else
{}
break;
}
return ret__8587;
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
var a__8599 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8600 = cljs.core.seq.call(null,init_val_or_seq);
var i__8601 = 0;
var s__8602 = s__8600;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8603 = s__8602;
if(and__3822__auto____8603)
{return (i__8601 < size);
} else
{return and__3822__auto____8603;
}
})()))
{(a__8599[i__8601] = cljs.core.first.call(null,s__8602));
{
var G__8606 = (i__8601 + 1);
var G__8607 = cljs.core.next.call(null,s__8602);
i__8601 = G__8606;
s__8602 = G__8607;
continue;
}
} else
{return a__8599;
}
break;
}
} else
{var n__2553__auto____8604 = size;
var i__8605 = 0;
while(true){
if((i__8605 < n__2553__auto____8604))
{(a__8599[i__8605] = init_val_or_seq);
{
var G__8608 = (i__8605 + 1);
i__8605 = G__8608;
continue;
}
} else
{}
break;
}
return a__8599;
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
var a__8616 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8617 = cljs.core.seq.call(null,init_val_or_seq);
var i__8618 = 0;
var s__8619 = s__8617;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8620 = s__8619;
if(and__3822__auto____8620)
{return (i__8618 < size);
} else
{return and__3822__auto____8620;
}
})()))
{(a__8616[i__8618] = cljs.core.first.call(null,s__8619));
{
var G__8623 = (i__8618 + 1);
var G__8624 = cljs.core.next.call(null,s__8619);
i__8618 = G__8623;
s__8619 = G__8624;
continue;
}
} else
{return a__8616;
}
break;
}
} else
{var n__2553__auto____8621 = size;
var i__8622 = 0;
while(true){
if((i__8622 < n__2553__auto____8621))
{(a__8616[i__8622] = init_val_or_seq);
{
var G__8625 = (i__8622 + 1);
i__8622 = G__8625;
continue;
}
} else
{}
break;
}
return a__8616;
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
var a__8633 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8634 = cljs.core.seq.call(null,init_val_or_seq);
var i__8635 = 0;
var s__8636 = s__8634;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8637 = s__8636;
if(and__3822__auto____8637)
{return (i__8635 < size);
} else
{return and__3822__auto____8637;
}
})()))
{(a__8633[i__8635] = cljs.core.first.call(null,s__8636));
{
var G__8640 = (i__8635 + 1);
var G__8641 = cljs.core.next.call(null,s__8636);
i__8635 = G__8640;
s__8636 = G__8641;
continue;
}
} else
{return a__8633;
}
break;
}
} else
{var n__2553__auto____8638 = size;
var i__8639 = 0;
while(true){
if((i__8639 < n__2553__auto____8638))
{(a__8633[i__8639] = init_val_or_seq);
{
var G__8642 = (i__8639 + 1);
i__8639 = G__8642;
continue;
}
} else
{}
break;
}
return a__8633;
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
{var s__8647 = s;
var i__8648 = n;
var sum__8649 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8650 = (i__8648 > 0);
if(and__3822__auto____8650)
{return cljs.core.seq.call(null,s__8647);
} else
{return and__3822__auto____8650;
}
})()))
{{
var G__8651 = cljs.core.next.call(null,s__8647);
var G__8652 = (i__8648 - 1);
var G__8653 = (sum__8649 + 1);
s__8647 = G__8651;
i__8648 = G__8652;
sum__8649 = G__8653;
continue;
}
} else
{return sum__8649;
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
var s__8658 = cljs.core.seq.call(null,x);
if(s__8658)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8658))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8658),concat.call(null,cljs.core.chunk_rest.call(null,s__8658),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8658),concat.call(null,cljs.core.rest.call(null,s__8658),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8662__delegate = function (x,y,zs){
var cat__8661 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8660 = cljs.core.seq.call(null,xys);
if(xys__8660)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8660))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8660),cat.call(null,cljs.core.chunk_rest.call(null,xys__8660),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8660),cat.call(null,cljs.core.rest.call(null,xys__8660),zs));
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
return cat__8661.call(null,concat.call(null,x,y),zs);
};
var G__8662 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8662__delegate.call(this, x, y, zs);
};
G__8662.cljs$lang$maxFixedArity = 2;
G__8662.cljs$lang$applyTo = (function (arglist__8663){
var x = cljs.core.first(arglist__8663);
var y = cljs.core.first(cljs.core.next(arglist__8663));
var zs = cljs.core.rest(cljs.core.next(arglist__8663));
return G__8662__delegate(x, y, zs);
});
G__8662.cljs$lang$arity$variadic = G__8662__delegate;
return G__8662;
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
var G__8664__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8664 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8664__delegate.call(this, a, b, c, d, more);
};
G__8664.cljs$lang$maxFixedArity = 4;
G__8664.cljs$lang$applyTo = (function (arglist__8665){
var a = cljs.core.first(arglist__8665);
var b = cljs.core.first(cljs.core.next(arglist__8665));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8665)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8665))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8665))));
return G__8664__delegate(a, b, c, d, more);
});
G__8664.cljs$lang$arity$variadic = G__8664__delegate;
return G__8664;
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
var args__8707 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8708 = cljs.core._first.call(null,args__8707);
var args__8709 = cljs.core._rest.call(null,args__8707);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8708);
} else
{return f.call(null,a__8708);
}
} else
{var b__8710 = cljs.core._first.call(null,args__8709);
var args__8711 = cljs.core._rest.call(null,args__8709);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8708,b__8710);
} else
{return f.call(null,a__8708,b__8710);
}
} else
{var c__8712 = cljs.core._first.call(null,args__8711);
var args__8713 = cljs.core._rest.call(null,args__8711);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8708,b__8710,c__8712);
} else
{return f.call(null,a__8708,b__8710,c__8712);
}
} else
{var d__8714 = cljs.core._first.call(null,args__8713);
var args__8715 = cljs.core._rest.call(null,args__8713);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8708,b__8710,c__8712,d__8714);
} else
{return f.call(null,a__8708,b__8710,c__8712,d__8714);
}
} else
{var e__8716 = cljs.core._first.call(null,args__8715);
var args__8717 = cljs.core._rest.call(null,args__8715);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8708,b__8710,c__8712,d__8714,e__8716);
} else
{return f.call(null,a__8708,b__8710,c__8712,d__8714,e__8716);
}
} else
{var f__8718 = cljs.core._first.call(null,args__8717);
var args__8719 = cljs.core._rest.call(null,args__8717);
if((argc === 6))
{if(f__8718.cljs$lang$arity$6)
{return f__8718.cljs$lang$arity$6(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718);
}
} else
{var g__8720 = cljs.core._first.call(null,args__8719);
var args__8721 = cljs.core._rest.call(null,args__8719);
if((argc === 7))
{if(f__8718.cljs$lang$arity$7)
{return f__8718.cljs$lang$arity$7(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720);
}
} else
{var h__8722 = cljs.core._first.call(null,args__8721);
var args__8723 = cljs.core._rest.call(null,args__8721);
if((argc === 8))
{if(f__8718.cljs$lang$arity$8)
{return f__8718.cljs$lang$arity$8(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722);
}
} else
{var i__8724 = cljs.core._first.call(null,args__8723);
var args__8725 = cljs.core._rest.call(null,args__8723);
if((argc === 9))
{if(f__8718.cljs$lang$arity$9)
{return f__8718.cljs$lang$arity$9(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724);
}
} else
{var j__8726 = cljs.core._first.call(null,args__8725);
var args__8727 = cljs.core._rest.call(null,args__8725);
if((argc === 10))
{if(f__8718.cljs$lang$arity$10)
{return f__8718.cljs$lang$arity$10(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726);
}
} else
{var k__8728 = cljs.core._first.call(null,args__8727);
var args__8729 = cljs.core._rest.call(null,args__8727);
if((argc === 11))
{if(f__8718.cljs$lang$arity$11)
{return f__8718.cljs$lang$arity$11(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728);
}
} else
{var l__8730 = cljs.core._first.call(null,args__8729);
var args__8731 = cljs.core._rest.call(null,args__8729);
if((argc === 12))
{if(f__8718.cljs$lang$arity$12)
{return f__8718.cljs$lang$arity$12(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730);
}
} else
{var m__8732 = cljs.core._first.call(null,args__8731);
var args__8733 = cljs.core._rest.call(null,args__8731);
if((argc === 13))
{if(f__8718.cljs$lang$arity$13)
{return f__8718.cljs$lang$arity$13(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732);
}
} else
{var n__8734 = cljs.core._first.call(null,args__8733);
var args__8735 = cljs.core._rest.call(null,args__8733);
if((argc === 14))
{if(f__8718.cljs$lang$arity$14)
{return f__8718.cljs$lang$arity$14(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734);
}
} else
{var o__8736 = cljs.core._first.call(null,args__8735);
var args__8737 = cljs.core._rest.call(null,args__8735);
if((argc === 15))
{if(f__8718.cljs$lang$arity$15)
{return f__8718.cljs$lang$arity$15(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736);
}
} else
{var p__8738 = cljs.core._first.call(null,args__8737);
var args__8739 = cljs.core._rest.call(null,args__8737);
if((argc === 16))
{if(f__8718.cljs$lang$arity$16)
{return f__8718.cljs$lang$arity$16(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738);
}
} else
{var q__8740 = cljs.core._first.call(null,args__8739);
var args__8741 = cljs.core._rest.call(null,args__8739);
if((argc === 17))
{if(f__8718.cljs$lang$arity$17)
{return f__8718.cljs$lang$arity$17(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740);
}
} else
{var r__8742 = cljs.core._first.call(null,args__8741);
var args__8743 = cljs.core._rest.call(null,args__8741);
if((argc === 18))
{if(f__8718.cljs$lang$arity$18)
{return f__8718.cljs$lang$arity$18(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742);
}
} else
{var s__8744 = cljs.core._first.call(null,args__8743);
var args__8745 = cljs.core._rest.call(null,args__8743);
if((argc === 19))
{if(f__8718.cljs$lang$arity$19)
{return f__8718.cljs$lang$arity$19(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742,s__8744);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742,s__8744);
}
} else
{var t__8746 = cljs.core._first.call(null,args__8745);
var args__8747 = cljs.core._rest.call(null,args__8745);
if((argc === 20))
{if(f__8718.cljs$lang$arity$20)
{return f__8718.cljs$lang$arity$20(a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742,s__8744,t__8746);
} else
{return f__8718.call(null,a__8708,b__8710,c__8712,d__8714,e__8716,f__8718,g__8720,h__8722,i__8724,j__8726,k__8728,l__8730,m__8732,n__8734,o__8736,p__8738,q__8740,r__8742,s__8744,t__8746);
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
var fixed_arity__8762 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8763 = cljs.core.bounded_count.call(null,args,(fixed_arity__8762 + 1));
if((bc__8763 <= fixed_arity__8762))
{return cljs.core.apply_to.call(null,f,bc__8763,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8764 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8765 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8766 = cljs.core.bounded_count.call(null,arglist__8764,(fixed_arity__8765 + 1));
if((bc__8766 <= fixed_arity__8765))
{return cljs.core.apply_to.call(null,f,bc__8766,arglist__8764);
} else
{return f.cljs$lang$applyTo(arglist__8764);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8764));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8767 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8768 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8769 = cljs.core.bounded_count.call(null,arglist__8767,(fixed_arity__8768 + 1));
if((bc__8769 <= fixed_arity__8768))
{return cljs.core.apply_to.call(null,f,bc__8769,arglist__8767);
} else
{return f.cljs$lang$applyTo(arglist__8767);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8767));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8770 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8771 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8772 = cljs.core.bounded_count.call(null,arglist__8770,(fixed_arity__8771 + 1));
if((bc__8772 <= fixed_arity__8771))
{return cljs.core.apply_to.call(null,f,bc__8772,arglist__8770);
} else
{return f.cljs$lang$applyTo(arglist__8770);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8770));
}
});
var apply__6 = (function() { 
var G__8776__delegate = function (f,a,b,c,d,args){
var arglist__8773 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8774 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8775 = cljs.core.bounded_count.call(null,arglist__8773,(fixed_arity__8774 + 1));
if((bc__8775 <= fixed_arity__8774))
{return cljs.core.apply_to.call(null,f,bc__8775,arglist__8773);
} else
{return f.cljs$lang$applyTo(arglist__8773);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8773));
}
};
var G__8776 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8776__delegate.call(this, f, a, b, c, d, args);
};
G__8776.cljs$lang$maxFixedArity = 5;
G__8776.cljs$lang$applyTo = (function (arglist__8777){
var f = cljs.core.first(arglist__8777);
var a = cljs.core.first(cljs.core.next(arglist__8777));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8777)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8777))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8777)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8777)))));
return G__8776__delegate(f, a, b, c, d, args);
});
G__8776.cljs$lang$arity$variadic = G__8776__delegate;
return G__8776;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8778){
var obj = cljs.core.first(arglist__8778);
var f = cljs.core.first(cljs.core.next(arglist__8778));
var args = cljs.core.rest(cljs.core.next(arglist__8778));
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
var G__8779__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8779 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8779__delegate.call(this, x, y, more);
};
G__8779.cljs$lang$maxFixedArity = 2;
G__8779.cljs$lang$applyTo = (function (arglist__8780){
var x = cljs.core.first(arglist__8780);
var y = cljs.core.first(cljs.core.next(arglist__8780));
var more = cljs.core.rest(cljs.core.next(arglist__8780));
return G__8779__delegate(x, y, more);
});
G__8779.cljs$lang$arity$variadic = G__8779__delegate;
return G__8779;
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
var G__8781 = pred;
var G__8782 = cljs.core.next.call(null,coll);
pred = G__8781;
coll = G__8782;
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
{var or__3824__auto____8784 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____8784))
{return or__3824__auto____8784;
} else
{{
var G__8785 = pred;
var G__8786 = cljs.core.next.call(null,coll);
pred = G__8785;
coll = G__8786;
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
var G__8787 = null;
var G__8787__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8787__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8787__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8787__3 = (function() { 
var G__8788__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8788 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8788__delegate.call(this, x, y, zs);
};
G__8788.cljs$lang$maxFixedArity = 2;
G__8788.cljs$lang$applyTo = (function (arglist__8789){
var x = cljs.core.first(arglist__8789);
var y = cljs.core.first(cljs.core.next(arglist__8789));
var zs = cljs.core.rest(cljs.core.next(arglist__8789));
return G__8788__delegate(x, y, zs);
});
G__8788.cljs$lang$arity$variadic = G__8788__delegate;
return G__8788;
})()
;
G__8787 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8787__0.call(this);
case 1:
return G__8787__1.call(this,x);
case 2:
return G__8787__2.call(this,x,y);
default:
return G__8787__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8787.cljs$lang$maxFixedArity = 2;
G__8787.cljs$lang$applyTo = G__8787__3.cljs$lang$applyTo;
return G__8787;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8790__delegate = function (args){
return x;
};
var G__8790 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8790__delegate.call(this, args);
};
G__8790.cljs$lang$maxFixedArity = 0;
G__8790.cljs$lang$applyTo = (function (arglist__8791){
var args = cljs.core.seq(arglist__8791);;
return G__8790__delegate(args);
});
G__8790.cljs$lang$arity$variadic = G__8790__delegate;
return G__8790;
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
var G__8798 = null;
var G__8798__0 = (function (){
return f.call(null,g.call(null));
});
var G__8798__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8798__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8798__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8798__4 = (function() { 
var G__8799__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8799__delegate.call(this, x, y, z, args);
};
G__8799.cljs$lang$maxFixedArity = 3;
G__8799.cljs$lang$applyTo = (function (arglist__8800){
var x = cljs.core.first(arglist__8800);
var y = cljs.core.first(cljs.core.next(arglist__8800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8800)));
return G__8799__delegate(x, y, z, args);
});
G__8799.cljs$lang$arity$variadic = G__8799__delegate;
return G__8799;
})()
;
G__8798 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8798__0.call(this);
case 1:
return G__8798__1.call(this,x);
case 2:
return G__8798__2.call(this,x,y);
case 3:
return G__8798__3.call(this,x,y,z);
default:
return G__8798__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8798.cljs$lang$maxFixedArity = 3;
G__8798.cljs$lang$applyTo = G__8798__4.cljs$lang$applyTo;
return G__8798;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8801 = null;
var G__8801__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8801__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8801__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8801__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8801__4 = (function() { 
var G__8802__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8802__delegate.call(this, x, y, z, args);
};
G__8802.cljs$lang$maxFixedArity = 3;
G__8802.cljs$lang$applyTo = (function (arglist__8803){
var x = cljs.core.first(arglist__8803);
var y = cljs.core.first(cljs.core.next(arglist__8803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8803)));
return G__8802__delegate(x, y, z, args);
});
G__8802.cljs$lang$arity$variadic = G__8802__delegate;
return G__8802;
})()
;
G__8801 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8801__0.call(this);
case 1:
return G__8801__1.call(this,x);
case 2:
return G__8801__2.call(this,x,y);
case 3:
return G__8801__3.call(this,x,y,z);
default:
return G__8801__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8801.cljs$lang$maxFixedArity = 3;
G__8801.cljs$lang$applyTo = G__8801__4.cljs$lang$applyTo;
return G__8801;
})()
});
var comp__4 = (function() { 
var G__8804__delegate = function (f1,f2,f3,fs){
var fs__8795 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8805__delegate = function (args){
var ret__8796 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8795),args);
var fs__8797 = cljs.core.next.call(null,fs__8795);
while(true){
if(fs__8797)
{{
var G__8806 = cljs.core.first.call(null,fs__8797).call(null,ret__8796);
var G__8807 = cljs.core.next.call(null,fs__8797);
ret__8796 = G__8806;
fs__8797 = G__8807;
continue;
}
} else
{return ret__8796;
}
break;
}
};
var G__8805 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8805__delegate.call(this, args);
};
G__8805.cljs$lang$maxFixedArity = 0;
G__8805.cljs$lang$applyTo = (function (arglist__8808){
var args = cljs.core.seq(arglist__8808);;
return G__8805__delegate(args);
});
G__8805.cljs$lang$arity$variadic = G__8805__delegate;
return G__8805;
})()
;
};
var G__8804 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8804__delegate.call(this, f1, f2, f3, fs);
};
G__8804.cljs$lang$maxFixedArity = 3;
G__8804.cljs$lang$applyTo = (function (arglist__8809){
var f1 = cljs.core.first(arglist__8809);
var f2 = cljs.core.first(cljs.core.next(arglist__8809));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8809)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8809)));
return G__8804__delegate(f1, f2, f3, fs);
});
G__8804.cljs$lang$arity$variadic = G__8804__delegate;
return G__8804;
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
var G__8810__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8810 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8810__delegate.call(this, args);
};
G__8810.cljs$lang$maxFixedArity = 0;
G__8810.cljs$lang$applyTo = (function (arglist__8811){
var args = cljs.core.seq(arglist__8811);;
return G__8810__delegate(args);
});
G__8810.cljs$lang$arity$variadic = G__8810__delegate;
return G__8810;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8812__delegate.call(this, args);
};
G__8812.cljs$lang$maxFixedArity = 0;
G__8812.cljs$lang$applyTo = (function (arglist__8813){
var args = cljs.core.seq(arglist__8813);;
return G__8812__delegate(args);
});
G__8812.cljs$lang$arity$variadic = G__8812__delegate;
return G__8812;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8814__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8814 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8814__delegate.call(this, args);
};
G__8814.cljs$lang$maxFixedArity = 0;
G__8814.cljs$lang$applyTo = (function (arglist__8815){
var args = cljs.core.seq(arglist__8815);;
return G__8814__delegate(args);
});
G__8814.cljs$lang$arity$variadic = G__8814__delegate;
return G__8814;
})()
;
});
var partial__5 = (function() { 
var G__8816__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8817__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8817 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8817__delegate.call(this, args);
};
G__8817.cljs$lang$maxFixedArity = 0;
G__8817.cljs$lang$applyTo = (function (arglist__8818){
var args = cljs.core.seq(arglist__8818);;
return G__8817__delegate(args);
});
G__8817.cljs$lang$arity$variadic = G__8817__delegate;
return G__8817;
})()
;
};
var G__8816 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8816__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8816.cljs$lang$maxFixedArity = 4;
G__8816.cljs$lang$applyTo = (function (arglist__8819){
var f = cljs.core.first(arglist__8819);
var arg1 = cljs.core.first(cljs.core.next(arglist__8819));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8819)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8819))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8819))));
return G__8816__delegate(f, arg1, arg2, arg3, more);
});
G__8816.cljs$lang$arity$variadic = G__8816__delegate;
return G__8816;
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
var G__8820 = null;
var G__8820__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8820__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8820__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8820__4 = (function() { 
var G__8821__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8821 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8821__delegate.call(this, a, b, c, ds);
};
G__8821.cljs$lang$maxFixedArity = 3;
G__8821.cljs$lang$applyTo = (function (arglist__8822){
var a = cljs.core.first(arglist__8822);
var b = cljs.core.first(cljs.core.next(arglist__8822));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8822)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8822)));
return G__8821__delegate(a, b, c, ds);
});
G__8821.cljs$lang$arity$variadic = G__8821__delegate;
return G__8821;
})()
;
G__8820 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8820__1.call(this,a);
case 2:
return G__8820__2.call(this,a,b);
case 3:
return G__8820__3.call(this,a,b,c);
default:
return G__8820__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8820.cljs$lang$maxFixedArity = 3;
G__8820.cljs$lang$applyTo = G__8820__4.cljs$lang$applyTo;
return G__8820;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8823 = null;
var G__8823__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8823__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8823__4 = (function() { 
var G__8824__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8824 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8824__delegate.call(this, a, b, c, ds);
};
G__8824.cljs$lang$maxFixedArity = 3;
G__8824.cljs$lang$applyTo = (function (arglist__8825){
var a = cljs.core.first(arglist__8825);
var b = cljs.core.first(cljs.core.next(arglist__8825));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8825)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8825)));
return G__8824__delegate(a, b, c, ds);
});
G__8824.cljs$lang$arity$variadic = G__8824__delegate;
return G__8824;
})()
;
G__8823 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8823__2.call(this,a,b);
case 3:
return G__8823__3.call(this,a,b,c);
default:
return G__8823__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8823.cljs$lang$maxFixedArity = 3;
G__8823.cljs$lang$applyTo = G__8823__4.cljs$lang$applyTo;
return G__8823;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8826 = null;
var G__8826__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8826__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8826__4 = (function() { 
var G__8827__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8827 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8827__delegate.call(this, a, b, c, ds);
};
G__8827.cljs$lang$maxFixedArity = 3;
G__8827.cljs$lang$applyTo = (function (arglist__8828){
var a = cljs.core.first(arglist__8828);
var b = cljs.core.first(cljs.core.next(arglist__8828));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8828)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8828)));
return G__8827__delegate(a, b, c, ds);
});
G__8827.cljs$lang$arity$variadic = G__8827__delegate;
return G__8827;
})()
;
G__8826 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8826__2.call(this,a,b);
case 3:
return G__8826__3.call(this,a,b,c);
default:
return G__8826__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8826.cljs$lang$maxFixedArity = 3;
G__8826.cljs$lang$applyTo = G__8826__4.cljs$lang$applyTo;
return G__8826;
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
var mapi__8844 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8852 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8852)
{var s__8853 = temp__3974__auto____8852;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8853))
{var c__8854 = cljs.core.chunk_first.call(null,s__8853);
var size__8855 = cljs.core.count.call(null,c__8854);
var b__8856 = cljs.core.chunk_buffer.call(null,size__8855);
var n__2553__auto____8857 = size__8855;
var i__8858 = 0;
while(true){
if((i__8858 < n__2553__auto____8857))
{cljs.core.chunk_append.call(null,b__8856,f.call(null,(idx + i__8858),cljs.core._nth.call(null,c__8854,i__8858)));
{
var G__8859 = (i__8858 + 1);
i__8858 = G__8859;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8856),mapi.call(null,(idx + size__8855),cljs.core.chunk_rest.call(null,s__8853)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8853)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8853)));
}
} else
{return null;
}
}),null));
});
return mapi__8844.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8869 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8869)
{var s__8870 = temp__3974__auto____8869;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8870))
{var c__8871 = cljs.core.chunk_first.call(null,s__8870);
var size__8872 = cljs.core.count.call(null,c__8871);
var b__8873 = cljs.core.chunk_buffer.call(null,size__8872);
var n__2553__auto____8874 = size__8872;
var i__8875 = 0;
while(true){
if((i__8875 < n__2553__auto____8874))
{var x__8876 = f.call(null,cljs.core._nth.call(null,c__8871,i__8875));
if((x__8876 == null))
{} else
{cljs.core.chunk_append.call(null,b__8873,x__8876);
}
{
var G__8878 = (i__8875 + 1);
i__8875 = G__8878;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8873),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8870)));
} else
{var x__8877 = f.call(null,cljs.core.first.call(null,s__8870));
if((x__8877 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8870));
} else
{return cljs.core.cons.call(null,x__8877,keep.call(null,f,cljs.core.rest.call(null,s__8870)));
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
var keepi__8904 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8914 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8914)
{var s__8915 = temp__3974__auto____8914;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8915))
{var c__8916 = cljs.core.chunk_first.call(null,s__8915);
var size__8917 = cljs.core.count.call(null,c__8916);
var b__8918 = cljs.core.chunk_buffer.call(null,size__8917);
var n__2553__auto____8919 = size__8917;
var i__8920 = 0;
while(true){
if((i__8920 < n__2553__auto____8919))
{var x__8921 = f.call(null,(idx + i__8920),cljs.core._nth.call(null,c__8916,i__8920));
if((x__8921 == null))
{} else
{cljs.core.chunk_append.call(null,b__8918,x__8921);
}
{
var G__8923 = (i__8920 + 1);
i__8920 = G__8923;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8918),keepi.call(null,(idx + size__8917),cljs.core.chunk_rest.call(null,s__8915)));
} else
{var x__8922 = f.call(null,idx,cljs.core.first.call(null,s__8915));
if((x__8922 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8915));
} else
{return cljs.core.cons.call(null,x__8922,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8915)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8904.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9009 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9009))
{return p.call(null,y);
} else
{return and__3822__auto____9009;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9010 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9010))
{var and__3822__auto____9011 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9011))
{return p.call(null,z);
} else
{return and__3822__auto____9011;
}
} else
{return and__3822__auto____9010;
}
})());
});
var ep1__4 = (function() { 
var G__9080__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9012 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9012))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9012;
}
})());
};
var G__9080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9080__delegate.call(this, x, y, z, args);
};
G__9080.cljs$lang$maxFixedArity = 3;
G__9080.cljs$lang$applyTo = (function (arglist__9081){
var x = cljs.core.first(arglist__9081);
var y = cljs.core.first(cljs.core.next(arglist__9081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9081)));
return G__9080__delegate(x, y, z, args);
});
G__9080.cljs$lang$arity$variadic = G__9080__delegate;
return G__9080;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9024 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9024))
{return p2.call(null,x);
} else
{return and__3822__auto____9024;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9025 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9025))
{var and__3822__auto____9026 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9026))
{var and__3822__auto____9027 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9027))
{return p2.call(null,y);
} else
{return and__3822__auto____9027;
}
} else
{return and__3822__auto____9026;
}
} else
{return and__3822__auto____9025;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9028 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9028))
{var and__3822__auto____9029 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9029))
{var and__3822__auto____9030 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9030))
{var and__3822__auto____9031 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9031))
{var and__3822__auto____9032 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9032))
{return p2.call(null,z);
} else
{return and__3822__auto____9032;
}
} else
{return and__3822__auto____9031;
}
} else
{return and__3822__auto____9030;
}
} else
{return and__3822__auto____9029;
}
} else
{return and__3822__auto____9028;
}
})());
});
var ep2__4 = (function() { 
var G__9082__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9033 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9033))
{return cljs.core.every_QMARK_.call(null,(function (p1__8879_SHARP_){
var and__3822__auto____9034 = p1.call(null,p1__8879_SHARP_);
if(cljs.core.truth_(and__3822__auto____9034))
{return p2.call(null,p1__8879_SHARP_);
} else
{return and__3822__auto____9034;
}
}),args);
} else
{return and__3822__auto____9033;
}
})());
};
var G__9082 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9082__delegate.call(this, x, y, z, args);
};
G__9082.cljs$lang$maxFixedArity = 3;
G__9082.cljs$lang$applyTo = (function (arglist__9083){
var x = cljs.core.first(arglist__9083);
var y = cljs.core.first(cljs.core.next(arglist__9083));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9083)));
return G__9082__delegate(x, y, z, args);
});
G__9082.cljs$lang$arity$variadic = G__9082__delegate;
return G__9082;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9053 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9053))
{var and__3822__auto____9054 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9054))
{return p3.call(null,x);
} else
{return and__3822__auto____9054;
}
} else
{return and__3822__auto____9053;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9055 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9055))
{var and__3822__auto____9056 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9056))
{var and__3822__auto____9057 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9057))
{var and__3822__auto____9058 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9058))
{var and__3822__auto____9059 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9059))
{return p3.call(null,y);
} else
{return and__3822__auto____9059;
}
} else
{return and__3822__auto____9058;
}
} else
{return and__3822__auto____9057;
}
} else
{return and__3822__auto____9056;
}
} else
{return and__3822__auto____9055;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9060 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9060))
{var and__3822__auto____9061 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9061))
{var and__3822__auto____9062 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9062))
{var and__3822__auto____9063 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9063))
{var and__3822__auto____9064 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9064))
{var and__3822__auto____9065 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9065))
{var and__3822__auto____9066 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9066))
{var and__3822__auto____9067 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9067))
{return p3.call(null,z);
} else
{return and__3822__auto____9067;
}
} else
{return and__3822__auto____9066;
}
} else
{return and__3822__auto____9065;
}
} else
{return and__3822__auto____9064;
}
} else
{return and__3822__auto____9063;
}
} else
{return and__3822__auto____9062;
}
} else
{return and__3822__auto____9061;
}
} else
{return and__3822__auto____9060;
}
})());
});
var ep3__4 = (function() { 
var G__9084__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9068 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9068))
{return cljs.core.every_QMARK_.call(null,(function (p1__8880_SHARP_){
var and__3822__auto____9069 = p1.call(null,p1__8880_SHARP_);
if(cljs.core.truth_(and__3822__auto____9069))
{var and__3822__auto____9070 = p2.call(null,p1__8880_SHARP_);
if(cljs.core.truth_(and__3822__auto____9070))
{return p3.call(null,p1__8880_SHARP_);
} else
{return and__3822__auto____9070;
}
} else
{return and__3822__auto____9069;
}
}),args);
} else
{return and__3822__auto____9068;
}
})());
};
var G__9084 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9084__delegate.call(this, x, y, z, args);
};
G__9084.cljs$lang$maxFixedArity = 3;
G__9084.cljs$lang$applyTo = (function (arglist__9085){
var x = cljs.core.first(arglist__9085);
var y = cljs.core.first(cljs.core.next(arglist__9085));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9085)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9085)));
return G__9084__delegate(x, y, z, args);
});
G__9084.cljs$lang$arity$variadic = G__9084__delegate;
return G__9084;
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
var G__9086__delegate = function (p1,p2,p3,ps){
var ps__9071 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8881_SHARP_){
return p1__8881_SHARP_.call(null,x);
}),ps__9071);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8882_SHARP_){
var and__3822__auto____9076 = p1__8882_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9076))
{return p1__8882_SHARP_.call(null,y);
} else
{return and__3822__auto____9076;
}
}),ps__9071);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8883_SHARP_){
var and__3822__auto____9077 = p1__8883_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9077))
{var and__3822__auto____9078 = p1__8883_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9078))
{return p1__8883_SHARP_.call(null,z);
} else
{return and__3822__auto____9078;
}
} else
{return and__3822__auto____9077;
}
}),ps__9071);
});
var epn__4 = (function() { 
var G__9087__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9079 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9079))
{return cljs.core.every_QMARK_.call(null,(function (p1__8884_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8884_SHARP_,args);
}),ps__9071);
} else
{return and__3822__auto____9079;
}
})());
};
var G__9087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9087__delegate.call(this, x, y, z, args);
};
G__9087.cljs$lang$maxFixedArity = 3;
G__9087.cljs$lang$applyTo = (function (arglist__9088){
var x = cljs.core.first(arglist__9088);
var y = cljs.core.first(cljs.core.next(arglist__9088));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9088)));
return G__9087__delegate(x, y, z, args);
});
G__9087.cljs$lang$arity$variadic = G__9087__delegate;
return G__9087;
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
var G__9086 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9086__delegate.call(this, p1, p2, p3, ps);
};
G__9086.cljs$lang$maxFixedArity = 3;
G__9086.cljs$lang$applyTo = (function (arglist__9089){
var p1 = cljs.core.first(arglist__9089);
var p2 = cljs.core.first(cljs.core.next(arglist__9089));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9089)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9089)));
return G__9086__delegate(p1, p2, p3, ps);
});
G__9086.cljs$lang$arity$variadic = G__9086__delegate;
return G__9086;
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
var or__3824__auto____9170 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9170))
{return or__3824__auto____9170;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9171 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9171))
{return or__3824__auto____9171;
} else
{var or__3824__auto____9172 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9172))
{return or__3824__auto____9172;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9241__delegate = function (x,y,z,args){
var or__3824__auto____9173 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9173))
{return or__3824__auto____9173;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9241 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9241__delegate.call(this, x, y, z, args);
};
G__9241.cljs$lang$maxFixedArity = 3;
G__9241.cljs$lang$applyTo = (function (arglist__9242){
var x = cljs.core.first(arglist__9242);
var y = cljs.core.first(cljs.core.next(arglist__9242));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9242)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9242)));
return G__9241__delegate(x, y, z, args);
});
G__9241.cljs$lang$arity$variadic = G__9241__delegate;
return G__9241;
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
var or__3824__auto____9185 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9185))
{return or__3824__auto____9185;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9186 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9186))
{return or__3824__auto____9186;
} else
{var or__3824__auto____9187 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9187))
{return or__3824__auto____9187;
} else
{var or__3824__auto____9188 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9188))
{return or__3824__auto____9188;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9189 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9189))
{return or__3824__auto____9189;
} else
{var or__3824__auto____9190 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9190))
{return or__3824__auto____9190;
} else
{var or__3824__auto____9191 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9191))
{return or__3824__auto____9191;
} else
{var or__3824__auto____9192 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9192))
{return or__3824__auto____9192;
} else
{var or__3824__auto____9193 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9193))
{return or__3824__auto____9193;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9243__delegate = function (x,y,z,args){
var or__3824__auto____9194 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9194))
{return or__3824__auto____9194;
} else
{return cljs.core.some.call(null,(function (p1__8924_SHARP_){
var or__3824__auto____9195 = p1.call(null,p1__8924_SHARP_);
if(cljs.core.truth_(or__3824__auto____9195))
{return or__3824__auto____9195;
} else
{return p2.call(null,p1__8924_SHARP_);
}
}),args);
}
};
var G__9243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9243__delegate.call(this, x, y, z, args);
};
G__9243.cljs$lang$maxFixedArity = 3;
G__9243.cljs$lang$applyTo = (function (arglist__9244){
var x = cljs.core.first(arglist__9244);
var y = cljs.core.first(cljs.core.next(arglist__9244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9244)));
return G__9243__delegate(x, y, z, args);
});
G__9243.cljs$lang$arity$variadic = G__9243__delegate;
return G__9243;
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
var or__3824__auto____9214 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9214))
{return or__3824__auto____9214;
} else
{var or__3824__auto____9215 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9215))
{return or__3824__auto____9215;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9216 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9216))
{return or__3824__auto____9216;
} else
{var or__3824__auto____9217 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9217))
{return or__3824__auto____9217;
} else
{var or__3824__auto____9218 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9218))
{return or__3824__auto____9218;
} else
{var or__3824__auto____9219 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9219))
{return or__3824__auto____9219;
} else
{var or__3824__auto____9220 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9220))
{return or__3824__auto____9220;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9221 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9221))
{return or__3824__auto____9221;
} else
{var or__3824__auto____9222 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9222))
{return or__3824__auto____9222;
} else
{var or__3824__auto____9223 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9223))
{return or__3824__auto____9223;
} else
{var or__3824__auto____9224 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9224))
{return or__3824__auto____9224;
} else
{var or__3824__auto____9225 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9225))
{return or__3824__auto____9225;
} else
{var or__3824__auto____9226 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9226))
{return or__3824__auto____9226;
} else
{var or__3824__auto____9227 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9227))
{return or__3824__auto____9227;
} else
{var or__3824__auto____9228 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9228))
{return or__3824__auto____9228;
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
var G__9245__delegate = function (x,y,z,args){
var or__3824__auto____9229 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9229))
{return or__3824__auto____9229;
} else
{return cljs.core.some.call(null,(function (p1__8925_SHARP_){
var or__3824__auto____9230 = p1.call(null,p1__8925_SHARP_);
if(cljs.core.truth_(or__3824__auto____9230))
{return or__3824__auto____9230;
} else
{var or__3824__auto____9231 = p2.call(null,p1__8925_SHARP_);
if(cljs.core.truth_(or__3824__auto____9231))
{return or__3824__auto____9231;
} else
{return p3.call(null,p1__8925_SHARP_);
}
}
}),args);
}
};
var G__9245 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9245__delegate.call(this, x, y, z, args);
};
G__9245.cljs$lang$maxFixedArity = 3;
G__9245.cljs$lang$applyTo = (function (arglist__9246){
var x = cljs.core.first(arglist__9246);
var y = cljs.core.first(cljs.core.next(arglist__9246));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9246)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9246)));
return G__9245__delegate(x, y, z, args);
});
G__9245.cljs$lang$arity$variadic = G__9245__delegate;
return G__9245;
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
var G__9247__delegate = function (p1,p2,p3,ps){
var ps__9232 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8926_SHARP_){
return p1__8926_SHARP_.call(null,x);
}),ps__9232);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8927_SHARP_){
var or__3824__auto____9237 = p1__8927_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9237))
{return or__3824__auto____9237;
} else
{return p1__8927_SHARP_.call(null,y);
}
}),ps__9232);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8928_SHARP_){
var or__3824__auto____9238 = p1__8928_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9238))
{return or__3824__auto____9238;
} else
{var or__3824__auto____9239 = p1__8928_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9239))
{return or__3824__auto____9239;
} else
{return p1__8928_SHARP_.call(null,z);
}
}
}),ps__9232);
});
var spn__4 = (function() { 
var G__9248__delegate = function (x,y,z,args){
var or__3824__auto____9240 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9240))
{return or__3824__auto____9240;
} else
{return cljs.core.some.call(null,(function (p1__8929_SHARP_){
return cljs.core.some.call(null,p1__8929_SHARP_,args);
}),ps__9232);
}
};
var G__9248 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9248__delegate.call(this, x, y, z, args);
};
G__9248.cljs$lang$maxFixedArity = 3;
G__9248.cljs$lang$applyTo = (function (arglist__9249){
var x = cljs.core.first(arglist__9249);
var y = cljs.core.first(cljs.core.next(arglist__9249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9249)));
return G__9248__delegate(x, y, z, args);
});
G__9248.cljs$lang$arity$variadic = G__9248__delegate;
return G__9248;
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
var G__9247 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9247__delegate.call(this, p1, p2, p3, ps);
};
G__9247.cljs$lang$maxFixedArity = 3;
G__9247.cljs$lang$applyTo = (function (arglist__9250){
var p1 = cljs.core.first(arglist__9250);
var p2 = cljs.core.first(cljs.core.next(arglist__9250));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9250)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9250)));
return G__9247__delegate(p1, p2, p3, ps);
});
G__9247.cljs$lang$arity$variadic = G__9247__delegate;
return G__9247;
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
var temp__3974__auto____9269 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9269)
{var s__9270 = temp__3974__auto____9269;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9270))
{var c__9271 = cljs.core.chunk_first.call(null,s__9270);
var size__9272 = cljs.core.count.call(null,c__9271);
var b__9273 = cljs.core.chunk_buffer.call(null,size__9272);
var n__2553__auto____9274 = size__9272;
var i__9275 = 0;
while(true){
if((i__9275 < n__2553__auto____9274))
{cljs.core.chunk_append.call(null,b__9273,f.call(null,cljs.core._nth.call(null,c__9271,i__9275)));
{
var G__9287 = (i__9275 + 1);
i__9275 = G__9287;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9273),map.call(null,f,cljs.core.chunk_rest.call(null,s__9270)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9270)),map.call(null,f,cljs.core.rest.call(null,s__9270)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9276 = cljs.core.seq.call(null,c1);
var s2__9277 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9278 = s1__9276;
if(and__3822__auto____9278)
{return s2__9277;
} else
{return and__3822__auto____9278;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9276),cljs.core.first.call(null,s2__9277)),map.call(null,f,cljs.core.rest.call(null,s1__9276),cljs.core.rest.call(null,s2__9277)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9279 = cljs.core.seq.call(null,c1);
var s2__9280 = cljs.core.seq.call(null,c2);
var s3__9281 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9282 = s1__9279;
if(and__3822__auto____9282)
{var and__3822__auto____9283 = s2__9280;
if(and__3822__auto____9283)
{return s3__9281;
} else
{return and__3822__auto____9283;
}
} else
{return and__3822__auto____9282;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9279),cljs.core.first.call(null,s2__9280),cljs.core.first.call(null,s3__9281)),map.call(null,f,cljs.core.rest.call(null,s1__9279),cljs.core.rest.call(null,s2__9280),cljs.core.rest.call(null,s3__9281)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9288__delegate = function (f,c1,c2,c3,colls){
var step__9286 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9285 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9285))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9285),step.call(null,map.call(null,cljs.core.rest,ss__9285)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9090_SHARP_){
return cljs.core.apply.call(null,f,p1__9090_SHARP_);
}),step__9286.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9288 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9288__delegate.call(this, f, c1, c2, c3, colls);
};
G__9288.cljs$lang$maxFixedArity = 4;
G__9288.cljs$lang$applyTo = (function (arglist__9289){
var f = cljs.core.first(arglist__9289);
var c1 = cljs.core.first(cljs.core.next(arglist__9289));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9289)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9289))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9289))));
return G__9288__delegate(f, c1, c2, c3, colls);
});
G__9288.cljs$lang$arity$variadic = G__9288__delegate;
return G__9288;
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
{var temp__3974__auto____9292 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9292)
{var s__9293 = temp__3974__auto____9292;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9293),take.call(null,(n - 1),cljs.core.rest.call(null,s__9293)));
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
var step__9299 = (function (n,coll){
while(true){
var s__9297 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9298 = (n > 0);
if(and__3822__auto____9298)
{return s__9297;
} else
{return and__3822__auto____9298;
}
})()))
{{
var G__9300 = (n - 1);
var G__9301 = cljs.core.rest.call(null,s__9297);
n = G__9300;
coll = G__9301;
continue;
}
} else
{return s__9297;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9299.call(null,n,coll);
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
var s__9304 = cljs.core.seq.call(null,coll);
var lead__9305 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9305)
{{
var G__9306 = cljs.core.next.call(null,s__9304);
var G__9307 = cljs.core.next.call(null,lead__9305);
s__9304 = G__9306;
lead__9305 = G__9307;
continue;
}
} else
{return s__9304;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9313 = (function (pred,coll){
while(true){
var s__9311 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9312 = s__9311;
if(and__3822__auto____9312)
{return pred.call(null,cljs.core.first.call(null,s__9311));
} else
{return and__3822__auto____9312;
}
})()))
{{
var G__9314 = pred;
var G__9315 = cljs.core.rest.call(null,s__9311);
pred = G__9314;
coll = G__9315;
continue;
}
} else
{return s__9311;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9313.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9318 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9318)
{var s__9319 = temp__3974__auto____9318;
return cljs.core.concat.call(null,s__9319,cycle.call(null,s__9319));
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
var s1__9324 = cljs.core.seq.call(null,c1);
var s2__9325 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9326 = s1__9324;
if(and__3822__auto____9326)
{return s2__9325;
} else
{return and__3822__auto____9326;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9324),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9325),interleave.call(null,cljs.core.rest.call(null,s1__9324),cljs.core.rest.call(null,s2__9325))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9328__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9327 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9327))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9327),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9327)));
} else
{return null;
}
}),null));
};
var G__9328 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9328__delegate.call(this, c1, c2, colls);
};
G__9328.cljs$lang$maxFixedArity = 2;
G__9328.cljs$lang$applyTo = (function (arglist__9329){
var c1 = cljs.core.first(arglist__9329);
var c2 = cljs.core.first(cljs.core.next(arglist__9329));
var colls = cljs.core.rest(cljs.core.next(arglist__9329));
return G__9328__delegate(c1, c2, colls);
});
G__9328.cljs$lang$arity$variadic = G__9328__delegate;
return G__9328;
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
var cat__9339 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9337 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9337)
{var coll__9338 = temp__3971__auto____9337;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9338),cat.call(null,cljs.core.rest.call(null,coll__9338),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9339.call(null,null,colls);
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
var G__9340__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9340 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9340__delegate.call(this, f, coll, colls);
};
G__9340.cljs$lang$maxFixedArity = 2;
G__9340.cljs$lang$applyTo = (function (arglist__9341){
var f = cljs.core.first(arglist__9341);
var coll = cljs.core.first(cljs.core.next(arglist__9341));
var colls = cljs.core.rest(cljs.core.next(arglist__9341));
return G__9340__delegate(f, coll, colls);
});
G__9340.cljs$lang$arity$variadic = G__9340__delegate;
return G__9340;
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
var temp__3974__auto____9351 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9351)
{var s__9352 = temp__3974__auto____9351;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9352))
{var c__9353 = cljs.core.chunk_first.call(null,s__9352);
var size__9354 = cljs.core.count.call(null,c__9353);
var b__9355 = cljs.core.chunk_buffer.call(null,size__9354);
var n__2553__auto____9356 = size__9354;
var i__9357 = 0;
while(true){
if((i__9357 < n__2553__auto____9356))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9353,i__9357))))
{cljs.core.chunk_append.call(null,b__9355,cljs.core._nth.call(null,c__9353,i__9357));
} else
{}
{
var G__9360 = (i__9357 + 1);
i__9357 = G__9360;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9355),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9352)));
} else
{var f__9358 = cljs.core.first.call(null,s__9352);
var r__9359 = cljs.core.rest.call(null,s__9352);
if(cljs.core.truth_(pred.call(null,f__9358)))
{return cljs.core.cons.call(null,f__9358,filter.call(null,pred,r__9359));
} else
{return filter.call(null,pred,r__9359);
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
var walk__9363 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9363.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9361_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9361_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9367__9368 = to;
if(G__9367__9368)
{if((function (){var or__3824__auto____9369 = (G__9367__9368.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9369)
{return or__3824__auto____9369;
} else
{return G__9367__9368.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9367__9368.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9367__9368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9367__9368);
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
var G__9370__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9370 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9370__delegate.call(this, f, c1, c2, c3, colls);
};
G__9370.cljs$lang$maxFixedArity = 4;
G__9370.cljs$lang$applyTo = (function (arglist__9371){
var f = cljs.core.first(arglist__9371);
var c1 = cljs.core.first(cljs.core.next(arglist__9371));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9371)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9371))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9371))));
return G__9370__delegate(f, c1, c2, c3, colls);
});
G__9370.cljs$lang$arity$variadic = G__9370__delegate;
return G__9370;
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
var temp__3974__auto____9378 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9378)
{var s__9379 = temp__3974__auto____9378;
var p__9380 = cljs.core.take.call(null,n,s__9379);
if((n === cljs.core.count.call(null,p__9380)))
{return cljs.core.cons.call(null,p__9380,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9379)));
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
var temp__3974__auto____9381 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9381)
{var s__9382 = temp__3974__auto____9381;
var p__9383 = cljs.core.take.call(null,n,s__9382);
if((n === cljs.core.count.call(null,p__9383)))
{return cljs.core.cons.call(null,p__9383,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9382)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9383,pad)));
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
var sentinel__9388 = cljs.core.lookup_sentinel;
var m__9389 = m;
var ks__9390 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9390)
{var m__9391 = cljs.core._lookup.call(null,m__9389,cljs.core.first.call(null,ks__9390),sentinel__9388);
if((sentinel__9388 === m__9391))
{return not_found;
} else
{{
var G__9392 = sentinel__9388;
var G__9393 = m__9391;
var G__9394 = cljs.core.next.call(null,ks__9390);
sentinel__9388 = G__9392;
m__9389 = G__9393;
ks__9390 = G__9394;
continue;
}
}
} else
{return m__9389;
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
cljs.core.assoc_in = (function assoc_in(m,p__9395,v){
var vec__9400__9401 = p__9395;
var k__9402 = cljs.core.nth.call(null,vec__9400__9401,0,null);
var ks__9403 = cljs.core.nthnext.call(null,vec__9400__9401,1);
if(cljs.core.truth_(ks__9403))
{return cljs.core.assoc.call(null,m,k__9402,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9402,null),ks__9403,v));
} else
{return cljs.core.assoc.call(null,m,k__9402,v);
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
var update_in__delegate = function (m,p__9404,f,args){
var vec__9409__9410 = p__9404;
var k__9411 = cljs.core.nth.call(null,vec__9409__9410,0,null);
var ks__9412 = cljs.core.nthnext.call(null,vec__9409__9410,1);
if(cljs.core.truth_(ks__9412))
{return cljs.core.assoc.call(null,m,k__9411,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9411,null),ks__9412,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9411,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9411,null),args));
}
};
var update_in = function (m,p__9404,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9404, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9413){
var m = cljs.core.first(arglist__9413);
var p__9404 = cljs.core.first(cljs.core.next(arglist__9413));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9413)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9413)));
return update_in__delegate(m, p__9404, f, args);
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
var this__9416 = this;
var h__2218__auto____9417 = this__9416.__hash;
if(!((h__2218__auto____9417 == null)))
{return h__2218__auto____9417;
} else
{var h__2218__auto____9418 = cljs.core.hash_coll.call(null,coll);
this__9416.__hash = h__2218__auto____9418;
return h__2218__auto____9418;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9419 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9420 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9421 = this;
var new_array__9422 = this__9421.array.slice();
(new_array__9422[k] = v);
return (new cljs.core.Vector(this__9421.meta,new_array__9422,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9453 = null;
var G__9453__2 = (function (this_sym9423,k){
var this__9425 = this;
var this_sym9423__9426 = this;
var coll__9427 = this_sym9423__9426;
return coll__9427.cljs$core$ILookup$_lookup$arity$2(coll__9427,k);
});
var G__9453__3 = (function (this_sym9424,k,not_found){
var this__9425 = this;
var this_sym9424__9428 = this;
var coll__9429 = this_sym9424__9428;
return coll__9429.cljs$core$ILookup$_lookup$arity$3(coll__9429,k,not_found);
});
G__9453 = function(this_sym9424,k,not_found){
switch(arguments.length){
case 2:
return G__9453__2.call(this,this_sym9424,k);
case 3:
return G__9453__3.call(this,this_sym9424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9453;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9414,args9415){
var this__9430 = this;
return this_sym9414.call.apply(this_sym9414,[this_sym9414].concat(args9415.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9431 = this;
var new_array__9432 = this__9431.array.slice();
new_array__9432.push(o);
return (new cljs.core.Vector(this__9431.meta,new_array__9432,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9433 = this;
var this__9434 = this;
return cljs.core.pr_str.call(null,this__9434);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9435 = this;
return cljs.core.ci_reduce.call(null,this__9435.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9436 = this;
return cljs.core.ci_reduce.call(null,this__9436.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9437 = this;
if((this__9437.array.length > 0))
{var vector_seq__9438 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9437.array.length))
{return cljs.core.cons.call(null,(this__9437.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9438.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9439 = this;
return this__9439.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9440 = this;
var count__9441 = this__9440.array.length;
if((count__9441 > 0))
{return (this__9440.array[(count__9441 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9442 = this;
if((this__9442.array.length > 0))
{var new_array__9443 = this__9442.array.slice();
new_array__9443.pop();
return (new cljs.core.Vector(this__9442.meta,new_array__9443,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9444 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9446 = this;
return (new cljs.core.Vector(meta,this__9446.array,this__9446.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9447 = this;
return this__9447.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9448 = this;
if((function (){var and__3822__auto____9449 = (0 <= n);
if(and__3822__auto____9449)
{return (n < this__9448.array.length);
} else
{return and__3822__auto____9449;
}
})())
{return (this__9448.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9450 = this;
if((function (){var and__3822__auto____9451 = (0 <= n);
if(and__3822__auto____9451)
{return (n < this__9450.array.length);
} else
{return and__3822__auto____9451;
}
})())
{return (this__9450.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9452 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9452.meta);
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
var cnt__9455 = pv.cnt;
if((cnt__9455 < 32))
{return 0;
} else
{return (((cnt__9455 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9461 = level;
var ret__9462 = node;
while(true){
if((ll__9461 === 0))
{return ret__9462;
} else
{var embed__9463 = ret__9462;
var r__9464 = cljs.core.pv_fresh_node.call(null,edit);
var ___9465 = cljs.core.pv_aset.call(null,r__9464,0,embed__9463);
{
var G__9466 = (ll__9461 - 5);
var G__9467 = r__9464;
ll__9461 = G__9466;
ret__9462 = G__9467;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9473 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9474 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9473,subidx__9474,tailnode);
return ret__9473;
} else
{var child__9475 = cljs.core.pv_aget.call(null,parent,subidx__9474);
if(!((child__9475 == null)))
{var node_to_insert__9476 = push_tail.call(null,pv,(level - 5),child__9475,tailnode);
cljs.core.pv_aset.call(null,ret__9473,subidx__9474,node_to_insert__9476);
return ret__9473;
} else
{var node_to_insert__9477 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9473,subidx__9474,node_to_insert__9477);
return ret__9473;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9481 = (0 <= i);
if(and__3822__auto____9481)
{return (i < pv.cnt);
} else
{return and__3822__auto____9481;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9482 = pv.root;
var level__9483 = pv.shift;
while(true){
if((level__9483 > 0))
{{
var G__9484 = cljs.core.pv_aget.call(null,node__9482,((i >>> level__9483) & 31));
var G__9485 = (level__9483 - 5);
node__9482 = G__9484;
level__9483 = G__9485;
continue;
}
} else
{return node__9482.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9488 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9488,(i & 31),val);
return ret__9488;
} else
{var subidx__9489 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9488,subidx__9489,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9489),i,val));
return ret__9488;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9495 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9496 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9495));
if((function (){var and__3822__auto____9497 = (new_child__9496 == null);
if(and__3822__auto____9497)
{return (subidx__9495 === 0);
} else
{return and__3822__auto____9497;
}
})())
{return null;
} else
{var ret__9498 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9498,subidx__9495,new_child__9496);
return ret__9498;
}
} else
{if((subidx__9495 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9499 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9499,subidx__9495,null);
return ret__9499;
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
var this__9502 = this;
return (new cljs.core.TransientVector(this__9502.cnt,this__9502.shift,cljs.core.tv_editable_root.call(null,this__9502.root),cljs.core.tv_editable_tail.call(null,this__9502.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9503 = this;
var h__2218__auto____9504 = this__9503.__hash;
if(!((h__2218__auto____9504 == null)))
{return h__2218__auto____9504;
} else
{var h__2218__auto____9505 = cljs.core.hash_coll.call(null,coll);
this__9503.__hash = h__2218__auto____9505;
return h__2218__auto____9505;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9506 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9507 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9508 = this;
if((function (){var and__3822__auto____9509 = (0 <= k);
if(and__3822__auto____9509)
{return (k < this__9508.cnt);
} else
{return and__3822__auto____9509;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9510 = this__9508.tail.slice();
(new_tail__9510[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9508.meta,this__9508.cnt,this__9508.shift,this__9508.root,new_tail__9510,null));
} else
{return (new cljs.core.PersistentVector(this__9508.meta,this__9508.cnt,this__9508.shift,cljs.core.do_assoc.call(null,coll,this__9508.shift,this__9508.root,k,v),this__9508.tail,null));
}
} else
{if((k === this__9508.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9508.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9558 = null;
var G__9558__2 = (function (this_sym9511,k){
var this__9513 = this;
var this_sym9511__9514 = this;
var coll__9515 = this_sym9511__9514;
return coll__9515.cljs$core$ILookup$_lookup$arity$2(coll__9515,k);
});
var G__9558__3 = (function (this_sym9512,k,not_found){
var this__9513 = this;
var this_sym9512__9516 = this;
var coll__9517 = this_sym9512__9516;
return coll__9517.cljs$core$ILookup$_lookup$arity$3(coll__9517,k,not_found);
});
G__9558 = function(this_sym9512,k,not_found){
switch(arguments.length){
case 2:
return G__9558__2.call(this,this_sym9512,k);
case 3:
return G__9558__3.call(this,this_sym9512,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9558;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9500,args9501){
var this__9518 = this;
return this_sym9500.call.apply(this_sym9500,[this_sym9500].concat(args9501.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9519 = this;
var step_init__9520 = [0,init];
var i__9521 = 0;
while(true){
if((i__9521 < this__9519.cnt))
{var arr__9522 = cljs.core.array_for.call(null,v,i__9521);
var len__9523 = arr__9522.length;
var init__9527 = (function (){var j__9524 = 0;
var init__9525 = (step_init__9520[1]);
while(true){
if((j__9524 < len__9523))
{var init__9526 = f.call(null,init__9525,(j__9524 + i__9521),(arr__9522[j__9524]));
if(cljs.core.reduced_QMARK_.call(null,init__9526))
{return init__9526;
} else
{{
var G__9559 = (j__9524 + 1);
var G__9560 = init__9526;
j__9524 = G__9559;
init__9525 = G__9560;
continue;
}
}
} else
{(step_init__9520[0] = len__9523);
(step_init__9520[1] = init__9525);
return init__9525;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9527))
{return cljs.core.deref.call(null,init__9527);
} else
{{
var G__9561 = (i__9521 + (step_init__9520[0]));
i__9521 = G__9561;
continue;
}
}
} else
{return (step_init__9520[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9528 = this;
if(((this__9528.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9529 = this__9528.tail.slice();
new_tail__9529.push(o);
return (new cljs.core.PersistentVector(this__9528.meta,(this__9528.cnt + 1),this__9528.shift,this__9528.root,new_tail__9529,null));
} else
{var root_overflow_QMARK___9530 = ((this__9528.cnt >>> 5) > (1 << this__9528.shift));
var new_shift__9531 = ((root_overflow_QMARK___9530)?(this__9528.shift + 5):this__9528.shift);
var new_root__9533 = ((root_overflow_QMARK___9530)?(function (){var n_r__9532 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9532,0,this__9528.root);
cljs.core.pv_aset.call(null,n_r__9532,1,cljs.core.new_path.call(null,null,this__9528.shift,(new cljs.core.VectorNode(null,this__9528.tail))));
return n_r__9532;
})():cljs.core.push_tail.call(null,coll,this__9528.shift,this__9528.root,(new cljs.core.VectorNode(null,this__9528.tail))));
return (new cljs.core.PersistentVector(this__9528.meta,(this__9528.cnt + 1),new_shift__9531,new_root__9533,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9534 = this;
if((this__9534.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9534.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9535 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9536 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9537 = this;
var this__9538 = this;
return cljs.core.pr_str.call(null,this__9538);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9539 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9540 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9541 = this;
if((this__9541.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9542 = this;
return this__9542.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9543 = this;
if((this__9543.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9543.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9544 = this;
if((this__9544.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9544.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9544.meta);
} else
{if((1 < (this__9544.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9544.meta,(this__9544.cnt - 1),this__9544.shift,this__9544.root,this__9544.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9545 = cljs.core.array_for.call(null,coll,(this__9544.cnt - 2));
var nr__9546 = cljs.core.pop_tail.call(null,coll,this__9544.shift,this__9544.root);
var new_root__9547 = (((nr__9546 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9546);
var cnt_1__9548 = (this__9544.cnt - 1);
if((function (){var and__3822__auto____9549 = (5 < this__9544.shift);
if(and__3822__auto____9549)
{return (cljs.core.pv_aget.call(null,new_root__9547,1) == null);
} else
{return and__3822__auto____9549;
}
})())
{return (new cljs.core.PersistentVector(this__9544.meta,cnt_1__9548,(this__9544.shift - 5),cljs.core.pv_aget.call(null,new_root__9547,0),new_tail__9545,null));
} else
{return (new cljs.core.PersistentVector(this__9544.meta,cnt_1__9548,this__9544.shift,new_root__9547,new_tail__9545,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9550 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9551 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9552 = this;
return (new cljs.core.PersistentVector(meta,this__9552.cnt,this__9552.shift,this__9552.root,this__9552.tail,this__9552.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9553 = this;
return this__9553.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9554 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9555 = this;
if((function (){var and__3822__auto____9556 = (0 <= n);
if(and__3822__auto____9556)
{return (n < this__9555.cnt);
} else
{return and__3822__auto____9556;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9557 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9557.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9562 = xs.length;
var xs__9563 = (((no_clone === true))?xs:xs.slice());
if((l__9562 < 32))
{return (new cljs.core.PersistentVector(null,l__9562,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9563,null));
} else
{var node__9564 = xs__9563.slice(0,32);
var v__9565 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9564,null));
var i__9566 = 32;
var out__9567 = cljs.core._as_transient.call(null,v__9565);
while(true){
if((i__9566 < l__9562))
{{
var G__9568 = (i__9566 + 1);
var G__9569 = cljs.core.conj_BANG_.call(null,out__9567,(xs__9563[i__9566]));
i__9566 = G__9568;
out__9567 = G__9569;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9567);
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
vector.cljs$lang$applyTo = (function (arglist__9570){
var args = cljs.core.seq(arglist__9570);;
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
var this__9571 = this;
if(((this__9571.off + 1) < this__9571.node.length))
{var s__9572 = cljs.core.chunked_seq.call(null,this__9571.vec,this__9571.node,this__9571.i,(this__9571.off + 1));
if((s__9572 == null))
{return null;
} else
{return s__9572;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9573 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9574 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9575 = this;
return (this__9575.node[this__9575.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9576 = this;
if(((this__9576.off + 1) < this__9576.node.length))
{var s__9577 = cljs.core.chunked_seq.call(null,this__9576.vec,this__9576.node,this__9576.i,(this__9576.off + 1));
if((s__9577 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9577;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9578 = this;
var l__9579 = this__9578.node.length;
var s__9580 = ((((this__9578.i + l__9579) < cljs.core._count.call(null,this__9578.vec)))?cljs.core.chunked_seq.call(null,this__9578.vec,(this__9578.i + l__9579),0):null);
if((s__9580 == null))
{return null;
} else
{return s__9580;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9581 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9582 = this;
return cljs.core.chunked_seq.call(null,this__9582.vec,this__9582.node,this__9582.i,this__9582.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9583 = this;
return this__9583.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9584 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9584.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9585 = this;
return cljs.core.array_chunk.call(null,this__9585.node,this__9585.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9586 = this;
var l__9587 = this__9586.node.length;
var s__9588 = ((((this__9586.i + l__9587) < cljs.core._count.call(null,this__9586.vec)))?cljs.core.chunked_seq.call(null,this__9586.vec,(this__9586.i + l__9587),0):null);
if((s__9588 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9588;
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
var this__9591 = this;
var h__2218__auto____9592 = this__9591.__hash;
if(!((h__2218__auto____9592 == null)))
{return h__2218__auto____9592;
} else
{var h__2218__auto____9593 = cljs.core.hash_coll.call(null,coll);
this__9591.__hash = h__2218__auto____9593;
return h__2218__auto____9593;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9594 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9595 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9596 = this;
var v_pos__9597 = (this__9596.start + key);
return (new cljs.core.Subvec(this__9596.meta,cljs.core._assoc.call(null,this__9596.v,v_pos__9597,val),this__9596.start,((this__9596.end > (v_pos__9597 + 1)) ? this__9596.end : (v_pos__9597 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9623 = null;
var G__9623__2 = (function (this_sym9598,k){
var this__9600 = this;
var this_sym9598__9601 = this;
var coll__9602 = this_sym9598__9601;
return coll__9602.cljs$core$ILookup$_lookup$arity$2(coll__9602,k);
});
var G__9623__3 = (function (this_sym9599,k,not_found){
var this__9600 = this;
var this_sym9599__9603 = this;
var coll__9604 = this_sym9599__9603;
return coll__9604.cljs$core$ILookup$_lookup$arity$3(coll__9604,k,not_found);
});
G__9623 = function(this_sym9599,k,not_found){
switch(arguments.length){
case 2:
return G__9623__2.call(this,this_sym9599,k);
case 3:
return G__9623__3.call(this,this_sym9599,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9623;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9589,args9590){
var this__9605 = this;
return this_sym9589.call.apply(this_sym9589,[this_sym9589].concat(args9590.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9606 = this;
return (new cljs.core.Subvec(this__9606.meta,cljs.core._assoc_n.call(null,this__9606.v,this__9606.end,o),this__9606.start,(this__9606.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9607 = this;
var this__9608 = this;
return cljs.core.pr_str.call(null,this__9608);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9609 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9610 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9611 = this;
var subvec_seq__9612 = (function subvec_seq(i){
if((i === this__9611.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9611.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9612.call(null,this__9611.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9613 = this;
return (this__9613.end - this__9613.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9614 = this;
return cljs.core._nth.call(null,this__9614.v,(this__9614.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9615 = this;
if((this__9615.start === this__9615.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9615.meta,this__9615.v,this__9615.start,(this__9615.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9616 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9617 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9618 = this;
return (new cljs.core.Subvec(meta,this__9618.v,this__9618.start,this__9618.end,this__9618.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9619 = this;
return this__9619.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9620 = this;
return cljs.core._nth.call(null,this__9620.v,(this__9620.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9621 = this;
return cljs.core._nth.call(null,this__9621.v,(this__9621.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9622 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9622.meta);
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
var ret__9625 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9625,0,tl.length);
return ret__9625;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9629 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9630 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9629,subidx__9630,(((level === 5))?tail_node:(function (){var child__9631 = cljs.core.pv_aget.call(null,ret__9629,subidx__9630);
if(!((child__9631 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9631,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9629;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9636 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9637 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9638 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9636,subidx__9637));
if((function (){var and__3822__auto____9639 = (new_child__9638 == null);
if(and__3822__auto____9639)
{return (subidx__9637 === 0);
} else
{return and__3822__auto____9639;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9636,subidx__9637,new_child__9638);
return node__9636;
}
} else
{if((subidx__9637 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9636,subidx__9637,null);
return node__9636;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9644 = (0 <= i);
if(and__3822__auto____9644)
{return (i < tv.cnt);
} else
{return and__3822__auto____9644;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9645 = tv.root;
var node__9646 = root__9645;
var level__9647 = tv.shift;
while(true){
if((level__9647 > 0))
{{
var G__9648 = cljs.core.tv_ensure_editable.call(null,root__9645.edit,cljs.core.pv_aget.call(null,node__9646,((i >>> level__9647) & 31)));
var G__9649 = (level__9647 - 5);
node__9646 = G__9648;
level__9647 = G__9649;
continue;
}
} else
{return node__9646.arr;
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
var G__9689 = null;
var G__9689__2 = (function (this_sym9652,k){
var this__9654 = this;
var this_sym9652__9655 = this;
var coll__9656 = this_sym9652__9655;
return coll__9656.cljs$core$ILookup$_lookup$arity$2(coll__9656,k);
});
var G__9689__3 = (function (this_sym9653,k,not_found){
var this__9654 = this;
var this_sym9653__9657 = this;
var coll__9658 = this_sym9653__9657;
return coll__9658.cljs$core$ILookup$_lookup$arity$3(coll__9658,k,not_found);
});
G__9689 = function(this_sym9653,k,not_found){
switch(arguments.length){
case 2:
return G__9689__2.call(this,this_sym9653,k);
case 3:
return G__9689__3.call(this,this_sym9653,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9689;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9650,args9651){
var this__9659 = this;
return this_sym9650.call.apply(this_sym9650,[this_sym9650].concat(args9651.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9660 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9661 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9662 = this;
if(this__9662.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9663 = this;
if((function (){var and__3822__auto____9664 = (0 <= n);
if(and__3822__auto____9664)
{return (n < this__9663.cnt);
} else
{return and__3822__auto____9664;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9665 = this;
if(this__9665.root.edit)
{return this__9665.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9666 = this;
if(this__9666.root.edit)
{if((function (){var and__3822__auto____9667 = (0 <= n);
if(and__3822__auto____9667)
{return (n < this__9666.cnt);
} else
{return and__3822__auto____9667;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9666.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9672 = (function go(level,node){
var node__9670 = cljs.core.tv_ensure_editable.call(null,this__9666.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9670,(n & 31),val);
return node__9670;
} else
{var subidx__9671 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9670,subidx__9671,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9670,subidx__9671)));
return node__9670;
}
}).call(null,this__9666.shift,this__9666.root);
this__9666.root = new_root__9672;
return tcoll;
}
} else
{if((n === this__9666.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9666.cnt)].join('')));
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
var this__9673 = this;
if(this__9673.root.edit)
{if((this__9673.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9673.cnt))
{this__9673.cnt = 0;
return tcoll;
} else
{if((((this__9673.cnt - 1) & 31) > 0))
{this__9673.cnt = (this__9673.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9674 = cljs.core.editable_array_for.call(null,tcoll,(this__9673.cnt - 2));
var new_root__9676 = (function (){var nr__9675 = cljs.core.tv_pop_tail.call(null,tcoll,this__9673.shift,this__9673.root);
if(!((nr__9675 == null)))
{return nr__9675;
} else
{return (new cljs.core.VectorNode(this__9673.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____9677 = (5 < this__9673.shift);
if(and__3822__auto____9677)
{return (cljs.core.pv_aget.call(null,new_root__9676,1) == null);
} else
{return and__3822__auto____9677;
}
})())
{var new_root__9678 = cljs.core.tv_ensure_editable.call(null,this__9673.root.edit,cljs.core.pv_aget.call(null,new_root__9676,0));
this__9673.root = new_root__9678;
this__9673.shift = (this__9673.shift - 5);
this__9673.cnt = (this__9673.cnt - 1);
this__9673.tail = new_tail__9674;
return tcoll;
} else
{this__9673.root = new_root__9676;
this__9673.cnt = (this__9673.cnt - 1);
this__9673.tail = new_tail__9674;
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
var this__9679 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9680 = this;
if(this__9680.root.edit)
{if(((this__9680.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9680.tail[(this__9680.cnt & 31)] = o);
this__9680.cnt = (this__9680.cnt + 1);
return tcoll;
} else
{var tail_node__9681 = (new cljs.core.VectorNode(this__9680.root.edit,this__9680.tail));
var new_tail__9682 = cljs.core.make_array.call(null,32);
(new_tail__9682[0] = o);
this__9680.tail = new_tail__9682;
if(((this__9680.cnt >>> 5) > (1 << this__9680.shift)))
{var new_root_array__9683 = cljs.core.make_array.call(null,32);
var new_shift__9684 = (this__9680.shift + 5);
(new_root_array__9683[0] = this__9680.root);
(new_root_array__9683[1] = cljs.core.new_path.call(null,this__9680.root.edit,this__9680.shift,tail_node__9681));
this__9680.root = (new cljs.core.VectorNode(this__9680.root.edit,new_root_array__9683));
this__9680.shift = new_shift__9684;
this__9680.cnt = (this__9680.cnt + 1);
return tcoll;
} else
{var new_root__9685 = cljs.core.tv_push_tail.call(null,tcoll,this__9680.shift,this__9680.root,tail_node__9681);
this__9680.root = new_root__9685;
this__9680.cnt = (this__9680.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9686 = this;
if(this__9686.root.edit)
{this__9686.root.edit = null;
var len__9687 = (this__9686.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9688 = cljs.core.make_array.call(null,len__9687);
cljs.core.array_copy.call(null,this__9686.tail,0,trimmed_tail__9688,0,len__9687);
return (new cljs.core.PersistentVector(null,this__9686.cnt,this__9686.shift,this__9686.root,trimmed_tail__9688,null));
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
var this__9690 = this;
var h__2218__auto____9691 = this__9690.__hash;
if(!((h__2218__auto____9691 == null)))
{return h__2218__auto____9691;
} else
{var h__2218__auto____9692 = cljs.core.hash_coll.call(null,coll);
this__9690.__hash = h__2218__auto____9692;
return h__2218__auto____9692;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9693 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9694 = this;
var this__9695 = this;
return cljs.core.pr_str.call(null,this__9695);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9696 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9697 = this;
return cljs.core._first.call(null,this__9697.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9698 = this;
var temp__3971__auto____9699 = cljs.core.next.call(null,this__9698.front);
if(temp__3971__auto____9699)
{var f1__9700 = temp__3971__auto____9699;
return (new cljs.core.PersistentQueueSeq(this__9698.meta,f1__9700,this__9698.rear,null));
} else
{if((this__9698.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9698.meta,this__9698.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9701 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9702 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9702.front,this__9702.rear,this__9702.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9703 = this;
return this__9703.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9704 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9704.meta);
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
var this__9705 = this;
var h__2218__auto____9706 = this__9705.__hash;
if(!((h__2218__auto____9706 == null)))
{return h__2218__auto____9706;
} else
{var h__2218__auto____9707 = cljs.core.hash_coll.call(null,coll);
this__9705.__hash = h__2218__auto____9707;
return h__2218__auto____9707;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9708 = this;
if(cljs.core.truth_(this__9708.front))
{return (new cljs.core.PersistentQueue(this__9708.meta,(this__9708.count + 1),this__9708.front,cljs.core.conj.call(null,(function (){var or__3824__auto____9709 = this__9708.rear;
if(cljs.core.truth_(or__3824__auto____9709))
{return or__3824__auto____9709;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9708.meta,(this__9708.count + 1),cljs.core.conj.call(null,this__9708.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9710 = this;
var this__9711 = this;
return cljs.core.pr_str.call(null,this__9711);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9712 = this;
var rear__9713 = cljs.core.seq.call(null,this__9712.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9714 = this__9712.front;
if(cljs.core.truth_(or__3824__auto____9714))
{return or__3824__auto____9714;
} else
{return rear__9713;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9712.front,cljs.core.seq.call(null,rear__9713),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9715 = this;
return this__9715.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9716 = this;
return cljs.core._first.call(null,this__9716.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9717 = this;
if(cljs.core.truth_(this__9717.front))
{var temp__3971__auto____9718 = cljs.core.next.call(null,this__9717.front);
if(temp__3971__auto____9718)
{var f1__9719 = temp__3971__auto____9718;
return (new cljs.core.PersistentQueue(this__9717.meta,(this__9717.count - 1),f1__9719,this__9717.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9717.meta,(this__9717.count - 1),cljs.core.seq.call(null,this__9717.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9720 = this;
return cljs.core.first.call(null,this__9720.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9721 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9723 = this;
return (new cljs.core.PersistentQueue(meta,this__9723.count,this__9723.front,this__9723.rear,this__9723.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9724 = this;
return this__9724.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9725 = this;
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
var this__9726 = this;
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
var len__9729 = array.length;
var i__9730 = 0;
while(true){
if((i__9730 < len__9729))
{if((k === (array[i__9730])))
{return i__9730;
} else
{{
var G__9731 = (i__9730 + incr);
i__9730 = G__9731;
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
var a__9734 = cljs.core.hash.call(null,a);
var b__9735 = cljs.core.hash.call(null,b);
if((a__9734 < b__9735))
{return -1;
} else
{if((a__9734 > b__9735))
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
var ks__9743 = m.keys;
var len__9744 = ks__9743.length;
var so__9745 = m.strobj;
var out__9746 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9747 = 0;
var out__9748 = cljs.core.transient$.call(null,out__9746);
while(true){
if((i__9747 < len__9744))
{var k__9749 = (ks__9743[i__9747]);
{
var G__9750 = (i__9747 + 1);
var G__9751 = cljs.core.assoc_BANG_.call(null,out__9748,k__9749,(so__9745[k__9749]));
i__9747 = G__9750;
out__9748 = G__9751;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9748,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9757 = {};
var l__9758 = ks.length;
var i__9759 = 0;
while(true){
if((i__9759 < l__9758))
{var k__9760 = (ks[i__9759]);
(new_obj__9757[k__9760] = (obj[k__9760]));
{
var G__9761 = (i__9759 + 1);
i__9759 = G__9761;
continue;
}
} else
{}
break;
}
return new_obj__9757;
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
var this__9764 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9765 = this;
var h__2218__auto____9766 = this__9765.__hash;
if(!((h__2218__auto____9766 == null)))
{return h__2218__auto____9766;
} else
{var h__2218__auto____9767 = cljs.core.hash_imap.call(null,coll);
this__9765.__hash = h__2218__auto____9767;
return h__2218__auto____9767;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9768 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9769 = this;
if((function (){var and__3822__auto____9770 = goog.isString(k);
if(and__3822__auto____9770)
{return !((cljs.core.scan_array.call(null,1,k,this__9769.keys) == null));
} else
{return and__3822__auto____9770;
}
})())
{return (this__9769.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9771 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9772 = (this__9771.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9772)
{return or__3824__auto____9772;
} else
{return (this__9771.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9771.keys) == null)))
{var new_strobj__9773 = cljs.core.obj_clone.call(null,this__9771.strobj,this__9771.keys);
(new_strobj__9773[k] = v);
return (new cljs.core.ObjMap(this__9771.meta,this__9771.keys,new_strobj__9773,(this__9771.update_count + 1),null));
} else
{var new_strobj__9774 = cljs.core.obj_clone.call(null,this__9771.strobj,this__9771.keys);
var new_keys__9775 = this__9771.keys.slice();
(new_strobj__9774[k] = v);
new_keys__9775.push(k);
return (new cljs.core.ObjMap(this__9771.meta,new_keys__9775,new_strobj__9774,(this__9771.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9776 = this;
if((function (){var and__3822__auto____9777 = goog.isString(k);
if(and__3822__auto____9777)
{return !((cljs.core.scan_array.call(null,1,k,this__9776.keys) == null));
} else
{return and__3822__auto____9777;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9799 = null;
var G__9799__2 = (function (this_sym9778,k){
var this__9780 = this;
var this_sym9778__9781 = this;
var coll__9782 = this_sym9778__9781;
return coll__9782.cljs$core$ILookup$_lookup$arity$2(coll__9782,k);
});
var G__9799__3 = (function (this_sym9779,k,not_found){
var this__9780 = this;
var this_sym9779__9783 = this;
var coll__9784 = this_sym9779__9783;
return coll__9784.cljs$core$ILookup$_lookup$arity$3(coll__9784,k,not_found);
});
G__9799 = function(this_sym9779,k,not_found){
switch(arguments.length){
case 2:
return G__9799__2.call(this,this_sym9779,k);
case 3:
return G__9799__3.call(this,this_sym9779,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9799;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9762,args9763){
var this__9785 = this;
return this_sym9762.call.apply(this_sym9762,[this_sym9762].concat(args9763.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9786 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9787 = this;
var this__9788 = this;
return cljs.core.pr_str.call(null,this__9788);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9789 = this;
if((this__9789.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9752_SHARP_){
return cljs.core.vector.call(null,p1__9752_SHARP_,(this__9789.strobj[p1__9752_SHARP_]));
}),this__9789.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9790 = this;
return this__9790.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9791 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9792 = this;
return (new cljs.core.ObjMap(meta,this__9792.keys,this__9792.strobj,this__9792.update_count,this__9792.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9793 = this;
return this__9793.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9794 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9794.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9795 = this;
if((function (){var and__3822__auto____9796 = goog.isString(k);
if(and__3822__auto____9796)
{return !((cljs.core.scan_array.call(null,1,k,this__9795.keys) == null));
} else
{return and__3822__auto____9796;
}
})())
{var new_keys__9797 = this__9795.keys.slice();
var new_strobj__9798 = cljs.core.obj_clone.call(null,this__9795.strobj,this__9795.keys);
new_keys__9797.splice(cljs.core.scan_array.call(null,1,k,new_keys__9797),1);
cljs.core.js_delete.call(null,new_strobj__9798,k);
return (new cljs.core.ObjMap(this__9795.meta,new_keys__9797,new_strobj__9798,(this__9795.update_count + 1),null));
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
var this__9803 = this;
var h__2218__auto____9804 = this__9803.__hash;
if(!((h__2218__auto____9804 == null)))
{return h__2218__auto____9804;
} else
{var h__2218__auto____9805 = cljs.core.hash_imap.call(null,coll);
this__9803.__hash = h__2218__auto____9805;
return h__2218__auto____9805;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9806 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9807 = this;
var bucket__9808 = (this__9807.hashobj[cljs.core.hash.call(null,k)]);
var i__9809 = (cljs.core.truth_(bucket__9808)?cljs.core.scan_array.call(null,2,k,bucket__9808):null);
if(cljs.core.truth_(i__9809))
{return (bucket__9808[(i__9809 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9810 = this;
var h__9811 = cljs.core.hash.call(null,k);
var bucket__9812 = (this__9810.hashobj[h__9811]);
if(cljs.core.truth_(bucket__9812))
{var new_bucket__9813 = bucket__9812.slice();
var new_hashobj__9814 = goog.object.clone(this__9810.hashobj);
(new_hashobj__9814[h__9811] = new_bucket__9813);
var temp__3971__auto____9815 = cljs.core.scan_array.call(null,2,k,new_bucket__9813);
if(cljs.core.truth_(temp__3971__auto____9815))
{var i__9816 = temp__3971__auto____9815;
(new_bucket__9813[(i__9816 + 1)] = v);
return (new cljs.core.HashMap(this__9810.meta,this__9810.count,new_hashobj__9814,null));
} else
{new_bucket__9813.push(k,v);
return (new cljs.core.HashMap(this__9810.meta,(this__9810.count + 1),new_hashobj__9814,null));
}
} else
{var new_hashobj__9817 = goog.object.clone(this__9810.hashobj);
(new_hashobj__9817[h__9811] = [k,v]);
return (new cljs.core.HashMap(this__9810.meta,(this__9810.count + 1),new_hashobj__9817,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9818 = this;
var bucket__9819 = (this__9818.hashobj[cljs.core.hash.call(null,k)]);
var i__9820 = (cljs.core.truth_(bucket__9819)?cljs.core.scan_array.call(null,2,k,bucket__9819):null);
if(cljs.core.truth_(i__9820))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9845 = null;
var G__9845__2 = (function (this_sym9821,k){
var this__9823 = this;
var this_sym9821__9824 = this;
var coll__9825 = this_sym9821__9824;
return coll__9825.cljs$core$ILookup$_lookup$arity$2(coll__9825,k);
});
var G__9845__3 = (function (this_sym9822,k,not_found){
var this__9823 = this;
var this_sym9822__9826 = this;
var coll__9827 = this_sym9822__9826;
return coll__9827.cljs$core$ILookup$_lookup$arity$3(coll__9827,k,not_found);
});
G__9845 = function(this_sym9822,k,not_found){
switch(arguments.length){
case 2:
return G__9845__2.call(this,this_sym9822,k);
case 3:
return G__9845__3.call(this,this_sym9822,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9845;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9801,args9802){
var this__9828 = this;
return this_sym9801.call.apply(this_sym9801,[this_sym9801].concat(args9802.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9829 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9830 = this;
var this__9831 = this;
return cljs.core.pr_str.call(null,this__9831);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9832 = this;
if((this__9832.count > 0))
{var hashes__9833 = cljs.core.js_keys.call(null,this__9832.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9800_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9832.hashobj[p1__9800_SHARP_])));
}),hashes__9833);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9834 = this;
return this__9834.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9835 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9836 = this;
return (new cljs.core.HashMap(meta,this__9836.count,this__9836.hashobj,this__9836.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9837 = this;
return this__9837.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9838 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9838.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9839 = this;
var h__9840 = cljs.core.hash.call(null,k);
var bucket__9841 = (this__9839.hashobj[h__9840]);
var i__9842 = (cljs.core.truth_(bucket__9841)?cljs.core.scan_array.call(null,2,k,bucket__9841):null);
if(cljs.core.not.call(null,i__9842))
{return coll;
} else
{var new_hashobj__9843 = goog.object.clone(this__9839.hashobj);
if((3 > bucket__9841.length))
{cljs.core.js_delete.call(null,new_hashobj__9843,h__9840);
} else
{var new_bucket__9844 = bucket__9841.slice();
new_bucket__9844.splice(i__9842,2);
(new_hashobj__9843[h__9840] = new_bucket__9844);
}
return (new cljs.core.HashMap(this__9839.meta,(this__9839.count - 1),new_hashobj__9843,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9846 = ks.length;
var i__9847 = 0;
var out__9848 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9847 < len__9846))
{{
var G__9849 = (i__9847 + 1);
var G__9850 = cljs.core.assoc.call(null,out__9848,(ks[i__9847]),(vs[i__9847]));
i__9847 = G__9849;
out__9848 = G__9850;
continue;
}
} else
{return out__9848;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9854 = m.arr;
var len__9855 = arr__9854.length;
var i__9856 = 0;
while(true){
if((len__9855 <= i__9856))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9854[i__9856]),k))
{return i__9856;
} else
{if("\uFDD0'else")
{{
var G__9857 = (i__9856 + 2);
i__9856 = G__9857;
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
var this__9860 = this;
return (new cljs.core.TransientArrayMap({},this__9860.arr.length,this__9860.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9861 = this;
var h__2218__auto____9862 = this__9861.__hash;
if(!((h__2218__auto____9862 == null)))
{return h__2218__auto____9862;
} else
{var h__2218__auto____9863 = cljs.core.hash_imap.call(null,coll);
this__9861.__hash = h__2218__auto____9863;
return h__2218__auto____9863;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9864 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9865 = this;
var idx__9866 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9866 === -1))
{return not_found;
} else
{return (this__9865.arr[(idx__9866 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9867 = this;
var idx__9868 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9868 === -1))
{if((this__9867.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9867.meta,(this__9867.cnt + 1),(function (){var G__9869__9870 = this__9867.arr.slice();
G__9869__9870.push(k);
G__9869__9870.push(v);
return G__9869__9870;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9867.arr[(idx__9868 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9867.meta,this__9867.cnt,(function (){var G__9871__9872 = this__9867.arr.slice();
(G__9871__9872[(idx__9868 + 1)] = v);
return G__9871__9872;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9873 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9905 = null;
var G__9905__2 = (function (this_sym9874,k){
var this__9876 = this;
var this_sym9874__9877 = this;
var coll__9878 = this_sym9874__9877;
return coll__9878.cljs$core$ILookup$_lookup$arity$2(coll__9878,k);
});
var G__9905__3 = (function (this_sym9875,k,not_found){
var this__9876 = this;
var this_sym9875__9879 = this;
var coll__9880 = this_sym9875__9879;
return coll__9880.cljs$core$ILookup$_lookup$arity$3(coll__9880,k,not_found);
});
G__9905 = function(this_sym9875,k,not_found){
switch(arguments.length){
case 2:
return G__9905__2.call(this,this_sym9875,k);
case 3:
return G__9905__3.call(this,this_sym9875,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9905;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9858,args9859){
var this__9881 = this;
return this_sym9858.call.apply(this_sym9858,[this_sym9858].concat(args9859.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9882 = this;
var len__9883 = this__9882.arr.length;
var i__9884 = 0;
var init__9885 = init;
while(true){
if((i__9884 < len__9883))
{var init__9886 = f.call(null,init__9885,(this__9882.arr[i__9884]),(this__9882.arr[(i__9884 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9886))
{return cljs.core.deref.call(null,init__9886);
} else
{{
var G__9906 = (i__9884 + 2);
var G__9907 = init__9886;
i__9884 = G__9906;
init__9885 = G__9907;
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
var this__9887 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9888 = this;
var this__9889 = this;
return cljs.core.pr_str.call(null,this__9889);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9890 = this;
if((this__9890.cnt > 0))
{var len__9891 = this__9890.arr.length;
var array_map_seq__9892 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9891))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9890.arr[i]),(this__9890.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9892.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9893 = this;
return this__9893.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9894 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9895 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9895.cnt,this__9895.arr,this__9895.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9896 = this;
return this__9896.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9897 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9897.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9898 = this;
var idx__9899 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9899 >= 0))
{var len__9900 = this__9898.arr.length;
var new_len__9901 = (len__9900 - 2);
if((new_len__9901 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9902 = cljs.core.make_array.call(null,new_len__9901);
var s__9903 = 0;
var d__9904 = 0;
while(true){
if((s__9903 >= len__9900))
{return (new cljs.core.PersistentArrayMap(this__9898.meta,(this__9898.cnt - 1),new_arr__9902,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9898.arr[s__9903])))
{{
var G__9908 = (s__9903 + 2);
var G__9909 = d__9904;
s__9903 = G__9908;
d__9904 = G__9909;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9902[d__9904] = (this__9898.arr[s__9903]));
(new_arr__9902[(d__9904 + 1)] = (this__9898.arr[(s__9903 + 1)]));
{
var G__9910 = (s__9903 + 2);
var G__9911 = (d__9904 + 2);
s__9903 = G__9910;
d__9904 = G__9911;
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
var len__9912 = cljs.core.count.call(null,ks);
var i__9913 = 0;
var out__9914 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9913 < len__9912))
{{
var G__9915 = (i__9913 + 1);
var G__9916 = cljs.core.assoc_BANG_.call(null,out__9914,(ks[i__9913]),(vs[i__9913]));
i__9913 = G__9915;
out__9914 = G__9916;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9914);
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
var this__9917 = this;
if(cljs.core.truth_(this__9917.editable_QMARK_))
{var idx__9918 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9918 >= 0))
{(this__9917.arr[idx__9918] = (this__9917.arr[(this__9917.len - 2)]));
(this__9917.arr[(idx__9918 + 1)] = (this__9917.arr[(this__9917.len - 1)]));
var G__9919__9920 = this__9917.arr;
G__9919__9920.pop();
G__9919__9920.pop();
G__9919__9920;
this__9917.len = (this__9917.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9921 = this;
if(cljs.core.truth_(this__9921.editable_QMARK_))
{var idx__9922 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9922 === -1))
{if(((this__9921.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9921.len = (this__9921.len + 2);
this__9921.arr.push(key);
this__9921.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9921.len,this__9921.arr),key,val);
}
} else
{if((val === (this__9921.arr[(idx__9922 + 1)])))
{return tcoll;
} else
{(this__9921.arr[(idx__9922 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9923 = this;
if(cljs.core.truth_(this__9923.editable_QMARK_))
{if((function (){var G__9924__9925 = o;
if(G__9924__9925)
{if((function (){var or__3824__auto____9926 = (G__9924__9925.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9926)
{return or__3824__auto____9926;
} else
{return G__9924__9925.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9924__9925.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9924__9925);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9924__9925);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9927 = cljs.core.seq.call(null,o);
var tcoll__9928 = tcoll;
while(true){
var temp__3971__auto____9929 = cljs.core.first.call(null,es__9927);
if(cljs.core.truth_(temp__3971__auto____9929))
{var e__9930 = temp__3971__auto____9929;
{
var G__9936 = cljs.core.next.call(null,es__9927);
var G__9937 = tcoll__9928.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9928,cljs.core.key.call(null,e__9930),cljs.core.val.call(null,e__9930));
es__9927 = G__9936;
tcoll__9928 = G__9937;
continue;
}
} else
{return tcoll__9928;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9931 = this;
if(cljs.core.truth_(this__9931.editable_QMARK_))
{this__9931.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9931.len,2),this__9931.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9932 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9933 = this;
if(cljs.core.truth_(this__9933.editable_QMARK_))
{var idx__9934 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9934 === -1))
{return not_found;
} else
{return (this__9933.arr[(idx__9934 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9935 = this;
if(cljs.core.truth_(this__9935.editable_QMARK_))
{return cljs.core.quot.call(null,this__9935.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9940 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9941 = 0;
while(true){
if((i__9941 < len))
{{
var G__9942 = cljs.core.assoc_BANG_.call(null,out__9940,(arr[i__9941]),(arr[(i__9941 + 1)]));
var G__9943 = (i__9941 + 2);
out__9940 = G__9942;
i__9941 = G__9943;
continue;
}
} else
{return out__9940;
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
var G__9948__9949 = arr.slice();
(G__9948__9949[i] = a);
return G__9948__9949;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9950__9951 = arr.slice();
(G__9950__9951[i] = a);
(G__9950__9951[j] = b);
return G__9950__9951;
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
var new_arr__9953 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9953,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9953,(2 * i),(new_arr__9953.length - (2 * i)));
return new_arr__9953;
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
var editable__9956 = inode.ensure_editable(edit);
(editable__9956.arr[i] = a);
return editable__9956;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9957 = inode.ensure_editable(edit);
(editable__9957.arr[i] = a);
(editable__9957.arr[j] = b);
return editable__9957;
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
var len__9964 = arr.length;
var i__9965 = 0;
var init__9966 = init;
while(true){
if((i__9965 < len__9964))
{var init__9969 = (function (){var k__9967 = (arr[i__9965]);
if(!((k__9967 == null)))
{return f.call(null,init__9966,k__9967,(arr[(i__9965 + 1)]));
} else
{var node__9968 = (arr[(i__9965 + 1)]);
if(!((node__9968 == null)))
{return node__9968.kv_reduce(f,init__9966);
} else
{return init__9966;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9969))
{return cljs.core.deref.call(null,init__9969);
} else
{{
var G__9970 = (i__9965 + 2);
var G__9971 = init__9969;
i__9965 = G__9970;
init__9966 = G__9971;
continue;
}
}
} else
{return init__9966;
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
var this__9972 = this;
var inode__9973 = this;
if((this__9972.bitmap === bit))
{return null;
} else
{var editable__9974 = inode__9973.ensure_editable(e);
var earr__9975 = editable__9974.arr;
var len__9976 = earr__9975.length;
editable__9974.bitmap = (bit ^ editable__9974.bitmap);
cljs.core.array_copy.call(null,earr__9975,(2 * (i + 1)),earr__9975,(2 * i),(len__9976 - (2 * (i + 1))));
(earr__9975[(len__9976 - 2)] = null);
(earr__9975[(len__9976 - 1)] = null);
return editable__9974;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9977 = this;
var inode__9978 = this;
var bit__9979 = (1 << ((hash >>> shift) & 0x01f));
var idx__9980 = cljs.core.bitmap_indexed_node_index.call(null,this__9977.bitmap,bit__9979);
if(((this__9977.bitmap & bit__9979) === 0))
{var n__9981 = cljs.core.bit_count.call(null,this__9977.bitmap);
if(((2 * n__9981) < this__9977.arr.length))
{var editable__9982 = inode__9978.ensure_editable(edit);
var earr__9983 = editable__9982.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9983,(2 * idx__9980),earr__9983,(2 * (idx__9980 + 1)),(2 * (n__9981 - idx__9980)));
(earr__9983[(2 * idx__9980)] = key);
(earr__9983[((2 * idx__9980) + 1)] = val);
editable__9982.bitmap = (editable__9982.bitmap | bit__9979);
return editable__9982;
} else
{if((n__9981 >= 16))
{var nodes__9984 = cljs.core.make_array.call(null,32);
var jdx__9985 = ((hash >>> shift) & 0x01f);
(nodes__9984[jdx__9985] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9986 = 0;
var j__9987 = 0;
while(true){
if((i__9986 < 32))
{if((((this__9977.bitmap >>> i__9986) & 1) === 0))
{{
var G__10040 = (i__9986 + 1);
var G__10041 = j__9987;
i__9986 = G__10040;
j__9987 = G__10041;
continue;
}
} else
{(nodes__9984[i__9986] = ((!(((this__9977.arr[j__9987]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9977.arr[j__9987])),(this__9977.arr[j__9987]),(this__9977.arr[(j__9987 + 1)]),added_leaf_QMARK_):(this__9977.arr[(j__9987 + 1)])));
{
var G__10042 = (i__9986 + 1);
var G__10043 = (j__9987 + 2);
i__9986 = G__10042;
j__9987 = G__10043;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9981 + 1),nodes__9984));
} else
{if("\uFDD0'else")
{var new_arr__9988 = cljs.core.make_array.call(null,(2 * (n__9981 + 4)));
cljs.core.array_copy.call(null,this__9977.arr,0,new_arr__9988,0,(2 * idx__9980));
(new_arr__9988[(2 * idx__9980)] = key);
(new_arr__9988[((2 * idx__9980) + 1)] = val);
cljs.core.array_copy.call(null,this__9977.arr,(2 * idx__9980),new_arr__9988,(2 * (idx__9980 + 1)),(2 * (n__9981 - idx__9980)));
added_leaf_QMARK_.val = true;
var editable__9989 = inode__9978.ensure_editable(edit);
editable__9989.arr = new_arr__9988;
editable__9989.bitmap = (editable__9989.bitmap | bit__9979);
return editable__9989;
} else
{return null;
}
}
}
} else
{var key_or_nil__9990 = (this__9977.arr[(2 * idx__9980)]);
var val_or_node__9991 = (this__9977.arr[((2 * idx__9980) + 1)]);
if((key_or_nil__9990 == null))
{var n__9992 = val_or_node__9991.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9992 === val_or_node__9991))
{return inode__9978;
} else
{return cljs.core.edit_and_set.call(null,inode__9978,edit,((2 * idx__9980) + 1),n__9992);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9990))
{if((val === val_or_node__9991))
{return inode__9978;
} else
{return cljs.core.edit_and_set.call(null,inode__9978,edit,((2 * idx__9980) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9978,edit,(2 * idx__9980),null,((2 * idx__9980) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9990,val_or_node__9991,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9993 = this;
var inode__9994 = this;
return cljs.core.create_inode_seq.call(null,this__9993.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9995 = this;
var inode__9996 = this;
var bit__9997 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9995.bitmap & bit__9997) === 0))
{return inode__9996;
} else
{var idx__9998 = cljs.core.bitmap_indexed_node_index.call(null,this__9995.bitmap,bit__9997);
var key_or_nil__9999 = (this__9995.arr[(2 * idx__9998)]);
var val_or_node__10000 = (this__9995.arr[((2 * idx__9998) + 1)]);
if((key_or_nil__9999 == null))
{var n__10001 = val_or_node__10000.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10001 === val_or_node__10000))
{return inode__9996;
} else
{if(!((n__10001 == null)))
{return cljs.core.edit_and_set.call(null,inode__9996,edit,((2 * idx__9998) + 1),n__10001);
} else
{if((this__9995.bitmap === bit__9997))
{return null;
} else
{if("\uFDD0'else")
{return inode__9996.edit_and_remove_pair(edit,bit__9997,idx__9998);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9999))
{(removed_leaf_QMARK_[0] = true);
return inode__9996.edit_and_remove_pair(edit,bit__9997,idx__9998);
} else
{if("\uFDD0'else")
{return inode__9996;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10002 = this;
var inode__10003 = this;
if((e === this__10002.edit))
{return inode__10003;
} else
{var n__10004 = cljs.core.bit_count.call(null,this__10002.bitmap);
var new_arr__10005 = cljs.core.make_array.call(null,(((n__10004 < 0))?4:(2 * (n__10004 + 1))));
cljs.core.array_copy.call(null,this__10002.arr,0,new_arr__10005,0,(2 * n__10004));
return (new cljs.core.BitmapIndexedNode(e,this__10002.bitmap,new_arr__10005));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10006 = this;
var inode__10007 = this;
return cljs.core.inode_kv_reduce.call(null,this__10006.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10008 = this;
var inode__10009 = this;
var bit__10010 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10008.bitmap & bit__10010) === 0))
{return not_found;
} else
{var idx__10011 = cljs.core.bitmap_indexed_node_index.call(null,this__10008.bitmap,bit__10010);
var key_or_nil__10012 = (this__10008.arr[(2 * idx__10011)]);
var val_or_node__10013 = (this__10008.arr[((2 * idx__10011) + 1)]);
if((key_or_nil__10012 == null))
{return val_or_node__10013.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10012))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10012,val_or_node__10013], true);
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
var this__10014 = this;
var inode__10015 = this;
var bit__10016 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10014.bitmap & bit__10016) === 0))
{return inode__10015;
} else
{var idx__10017 = cljs.core.bitmap_indexed_node_index.call(null,this__10014.bitmap,bit__10016);
var key_or_nil__10018 = (this__10014.arr[(2 * idx__10017)]);
var val_or_node__10019 = (this__10014.arr[((2 * idx__10017) + 1)]);
if((key_or_nil__10018 == null))
{var n__10020 = val_or_node__10019.inode_without((shift + 5),hash,key);
if((n__10020 === val_or_node__10019))
{return inode__10015;
} else
{if(!((n__10020 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10014.bitmap,cljs.core.clone_and_set.call(null,this__10014.arr,((2 * idx__10017) + 1),n__10020)));
} else
{if((this__10014.bitmap === bit__10016))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10014.bitmap ^ bit__10016),cljs.core.remove_pair.call(null,this__10014.arr,idx__10017)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10018))
{return (new cljs.core.BitmapIndexedNode(null,(this__10014.bitmap ^ bit__10016),cljs.core.remove_pair.call(null,this__10014.arr,idx__10017)));
} else
{if("\uFDD0'else")
{return inode__10015;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10021 = this;
var inode__10022 = this;
var bit__10023 = (1 << ((hash >>> shift) & 0x01f));
var idx__10024 = cljs.core.bitmap_indexed_node_index.call(null,this__10021.bitmap,bit__10023);
if(((this__10021.bitmap & bit__10023) === 0))
{var n__10025 = cljs.core.bit_count.call(null,this__10021.bitmap);
if((n__10025 >= 16))
{var nodes__10026 = cljs.core.make_array.call(null,32);
var jdx__10027 = ((hash >>> shift) & 0x01f);
(nodes__10026[jdx__10027] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10028 = 0;
var j__10029 = 0;
while(true){
if((i__10028 < 32))
{if((((this__10021.bitmap >>> i__10028) & 1) === 0))
{{
var G__10044 = (i__10028 + 1);
var G__10045 = j__10029;
i__10028 = G__10044;
j__10029 = G__10045;
continue;
}
} else
{(nodes__10026[i__10028] = ((!(((this__10021.arr[j__10029]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10021.arr[j__10029])),(this__10021.arr[j__10029]),(this__10021.arr[(j__10029 + 1)]),added_leaf_QMARK_):(this__10021.arr[(j__10029 + 1)])));
{
var G__10046 = (i__10028 + 1);
var G__10047 = (j__10029 + 2);
i__10028 = G__10046;
j__10029 = G__10047;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10025 + 1),nodes__10026));
} else
{var new_arr__10030 = cljs.core.make_array.call(null,(2 * (n__10025 + 1)));
cljs.core.array_copy.call(null,this__10021.arr,0,new_arr__10030,0,(2 * idx__10024));
(new_arr__10030[(2 * idx__10024)] = key);
(new_arr__10030[((2 * idx__10024) + 1)] = val);
cljs.core.array_copy.call(null,this__10021.arr,(2 * idx__10024),new_arr__10030,(2 * (idx__10024 + 1)),(2 * (n__10025 - idx__10024)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10021.bitmap | bit__10023),new_arr__10030));
}
} else
{var key_or_nil__10031 = (this__10021.arr[(2 * idx__10024)]);
var val_or_node__10032 = (this__10021.arr[((2 * idx__10024) + 1)]);
if((key_or_nil__10031 == null))
{var n__10033 = val_or_node__10032.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10033 === val_or_node__10032))
{return inode__10022;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10021.bitmap,cljs.core.clone_and_set.call(null,this__10021.arr,((2 * idx__10024) + 1),n__10033)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10031))
{if((val === val_or_node__10032))
{return inode__10022;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10021.bitmap,cljs.core.clone_and_set.call(null,this__10021.arr,((2 * idx__10024) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10021.bitmap,cljs.core.clone_and_set.call(null,this__10021.arr,(2 * idx__10024),null,((2 * idx__10024) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10031,val_or_node__10032,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10034 = this;
var inode__10035 = this;
var bit__10036 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10034.bitmap & bit__10036) === 0))
{return not_found;
} else
{var idx__10037 = cljs.core.bitmap_indexed_node_index.call(null,this__10034.bitmap,bit__10036);
var key_or_nil__10038 = (this__10034.arr[(2 * idx__10037)]);
var val_or_node__10039 = (this__10034.arr[((2 * idx__10037) + 1)]);
if((key_or_nil__10038 == null))
{return val_or_node__10039.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10038))
{return val_or_node__10039;
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
var arr__10055 = array_node.arr;
var len__10056 = (2 * (array_node.cnt - 1));
var new_arr__10057 = cljs.core.make_array.call(null,len__10056);
var i__10058 = 0;
var j__10059 = 1;
var bitmap__10060 = 0;
while(true){
if((i__10058 < len__10056))
{if((function (){var and__3822__auto____10061 = !((i__10058 === idx));
if(and__3822__auto____10061)
{return !(((arr__10055[i__10058]) == null));
} else
{return and__3822__auto____10061;
}
})())
{(new_arr__10057[j__10059] = (arr__10055[i__10058]));
{
var G__10062 = (i__10058 + 1);
var G__10063 = (j__10059 + 2);
var G__10064 = (bitmap__10060 | (1 << i__10058));
i__10058 = G__10062;
j__10059 = G__10063;
bitmap__10060 = G__10064;
continue;
}
} else
{{
var G__10065 = (i__10058 + 1);
var G__10066 = j__10059;
var G__10067 = bitmap__10060;
i__10058 = G__10065;
j__10059 = G__10066;
bitmap__10060 = G__10067;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10060,new_arr__10057));
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
var this__10068 = this;
var inode__10069 = this;
var idx__10070 = ((hash >>> shift) & 0x01f);
var node__10071 = (this__10068.arr[idx__10070]);
if((node__10071 == null))
{var editable__10072 = cljs.core.edit_and_set.call(null,inode__10069,edit,idx__10070,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10072.cnt = (editable__10072.cnt + 1);
return editable__10072;
} else
{var n__10073 = node__10071.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10073 === node__10071))
{return inode__10069;
} else
{return cljs.core.edit_and_set.call(null,inode__10069,edit,idx__10070,n__10073);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10074 = this;
var inode__10075 = this;
return cljs.core.create_array_node_seq.call(null,this__10074.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10076 = this;
var inode__10077 = this;
var idx__10078 = ((hash >>> shift) & 0x01f);
var node__10079 = (this__10076.arr[idx__10078]);
if((node__10079 == null))
{return inode__10077;
} else
{var n__10080 = node__10079.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10080 === node__10079))
{return inode__10077;
} else
{if((n__10080 == null))
{if((this__10076.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10077,edit,idx__10078);
} else
{var editable__10081 = cljs.core.edit_and_set.call(null,inode__10077,edit,idx__10078,n__10080);
editable__10081.cnt = (editable__10081.cnt - 1);
return editable__10081;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10077,edit,idx__10078,n__10080);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10082 = this;
var inode__10083 = this;
if((e === this__10082.edit))
{return inode__10083;
} else
{return (new cljs.core.ArrayNode(e,this__10082.cnt,this__10082.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10084 = this;
var inode__10085 = this;
var len__10086 = this__10084.arr.length;
var i__10087 = 0;
var init__10088 = init;
while(true){
if((i__10087 < len__10086))
{var node__10089 = (this__10084.arr[i__10087]);
if(!((node__10089 == null)))
{var init__10090 = node__10089.kv_reduce(f,init__10088);
if(cljs.core.reduced_QMARK_.call(null,init__10090))
{return cljs.core.deref.call(null,init__10090);
} else
{{
var G__10109 = (i__10087 + 1);
var G__10110 = init__10090;
i__10087 = G__10109;
init__10088 = G__10110;
continue;
}
}
} else
{return null;
}
} else
{return init__10088;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10091 = this;
var inode__10092 = this;
var idx__10093 = ((hash >>> shift) & 0x01f);
var node__10094 = (this__10091.arr[idx__10093]);
if(!((node__10094 == null)))
{return node__10094.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10095 = this;
var inode__10096 = this;
var idx__10097 = ((hash >>> shift) & 0x01f);
var node__10098 = (this__10095.arr[idx__10097]);
if(!((node__10098 == null)))
{var n__10099 = node__10098.inode_without((shift + 5),hash,key);
if((n__10099 === node__10098))
{return inode__10096;
} else
{if((n__10099 == null))
{if((this__10095.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10096,null,idx__10097);
} else
{return (new cljs.core.ArrayNode(null,(this__10095.cnt - 1),cljs.core.clone_and_set.call(null,this__10095.arr,idx__10097,n__10099)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10095.cnt,cljs.core.clone_and_set.call(null,this__10095.arr,idx__10097,n__10099)));
} else
{return null;
}
}
}
} else
{return inode__10096;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10100 = this;
var inode__10101 = this;
var idx__10102 = ((hash >>> shift) & 0x01f);
var node__10103 = (this__10100.arr[idx__10102]);
if((node__10103 == null))
{return (new cljs.core.ArrayNode(null,(this__10100.cnt + 1),cljs.core.clone_and_set.call(null,this__10100.arr,idx__10102,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10104 = node__10103.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10104 === node__10103))
{return inode__10101;
} else
{return (new cljs.core.ArrayNode(null,this__10100.cnt,cljs.core.clone_and_set.call(null,this__10100.arr,idx__10102,n__10104)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10105 = this;
var inode__10106 = this;
var idx__10107 = ((hash >>> shift) & 0x01f);
var node__10108 = (this__10105.arr[idx__10107]);
if(!((node__10108 == null)))
{return node__10108.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10113 = (2 * cnt);
var i__10114 = 0;
while(true){
if((i__10114 < lim__10113))
{if(cljs.core.key_test.call(null,key,(arr[i__10114])))
{return i__10114;
} else
{{
var G__10115 = (i__10114 + 2);
i__10114 = G__10115;
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
var this__10116 = this;
var inode__10117 = this;
if((hash === this__10116.collision_hash))
{var idx__10118 = cljs.core.hash_collision_node_find_index.call(null,this__10116.arr,this__10116.cnt,key);
if((idx__10118 === -1))
{if((this__10116.arr.length > (2 * this__10116.cnt)))
{var editable__10119 = cljs.core.edit_and_set.call(null,inode__10117,edit,(2 * this__10116.cnt),key,((2 * this__10116.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10119.cnt = (editable__10119.cnt + 1);
return editable__10119;
} else
{var len__10120 = this__10116.arr.length;
var new_arr__10121 = cljs.core.make_array.call(null,(len__10120 + 2));
cljs.core.array_copy.call(null,this__10116.arr,0,new_arr__10121,0,len__10120);
(new_arr__10121[len__10120] = key);
(new_arr__10121[(len__10120 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10117.ensure_editable_array(edit,(this__10116.cnt + 1),new_arr__10121);
}
} else
{if(((this__10116.arr[(idx__10118 + 1)]) === val))
{return inode__10117;
} else
{return cljs.core.edit_and_set.call(null,inode__10117,edit,(idx__10118 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10116.collision_hash >>> shift) & 0x01f)),[null,inode__10117,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10122 = this;
var inode__10123 = this;
return cljs.core.create_inode_seq.call(null,this__10122.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10124 = this;
var inode__10125 = this;
var idx__10126 = cljs.core.hash_collision_node_find_index.call(null,this__10124.arr,this__10124.cnt,key);
if((idx__10126 === -1))
{return inode__10125;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10124.cnt === 1))
{return null;
} else
{var editable__10127 = inode__10125.ensure_editable(edit);
var earr__10128 = editable__10127.arr;
(earr__10128[idx__10126] = (earr__10128[((2 * this__10124.cnt) - 2)]));
(earr__10128[(idx__10126 + 1)] = (earr__10128[((2 * this__10124.cnt) - 1)]));
(earr__10128[((2 * this__10124.cnt) - 1)] = null);
(earr__10128[((2 * this__10124.cnt) - 2)] = null);
editable__10127.cnt = (editable__10127.cnt - 1);
return editable__10127;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10129 = this;
var inode__10130 = this;
if((e === this__10129.edit))
{return inode__10130;
} else
{var new_arr__10131 = cljs.core.make_array.call(null,(2 * (this__10129.cnt + 1)));
cljs.core.array_copy.call(null,this__10129.arr,0,new_arr__10131,0,(2 * this__10129.cnt));
return (new cljs.core.HashCollisionNode(e,this__10129.collision_hash,this__10129.cnt,new_arr__10131));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10132 = this;
var inode__10133 = this;
return cljs.core.inode_kv_reduce.call(null,this__10132.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10134 = this;
var inode__10135 = this;
var idx__10136 = cljs.core.hash_collision_node_find_index.call(null,this__10134.arr,this__10134.cnt,key);
if((idx__10136 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10134.arr[idx__10136])))
{return cljs.core.PersistentVector.fromArray([(this__10134.arr[idx__10136]),(this__10134.arr[(idx__10136 + 1)])], true);
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
var this__10137 = this;
var inode__10138 = this;
var idx__10139 = cljs.core.hash_collision_node_find_index.call(null,this__10137.arr,this__10137.cnt,key);
if((idx__10139 === -1))
{return inode__10138;
} else
{if((this__10137.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10137.collision_hash,(this__10137.cnt - 1),cljs.core.remove_pair.call(null,this__10137.arr,cljs.core.quot.call(null,idx__10139,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10140 = this;
var inode__10141 = this;
if((hash === this__10140.collision_hash))
{var idx__10142 = cljs.core.hash_collision_node_find_index.call(null,this__10140.arr,this__10140.cnt,key);
if((idx__10142 === -1))
{var len__10143 = this__10140.arr.length;
var new_arr__10144 = cljs.core.make_array.call(null,(len__10143 + 2));
cljs.core.array_copy.call(null,this__10140.arr,0,new_arr__10144,0,len__10143);
(new_arr__10144[len__10143] = key);
(new_arr__10144[(len__10143 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10140.collision_hash,(this__10140.cnt + 1),new_arr__10144));
} else
{if(cljs.core._EQ_.call(null,(this__10140.arr[idx__10142]),val))
{return inode__10141;
} else
{return (new cljs.core.HashCollisionNode(null,this__10140.collision_hash,this__10140.cnt,cljs.core.clone_and_set.call(null,this__10140.arr,(idx__10142 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10140.collision_hash >>> shift) & 0x01f)),[null,inode__10141])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10145 = this;
var inode__10146 = this;
var idx__10147 = cljs.core.hash_collision_node_find_index.call(null,this__10145.arr,this__10145.cnt,key);
if((idx__10147 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10145.arr[idx__10147])))
{return (this__10145.arr[(idx__10147 + 1)]);
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
var this__10148 = this;
var inode__10149 = this;
if((e === this__10148.edit))
{this__10148.arr = array;
this__10148.cnt = count;
return inode__10149;
} else
{return (new cljs.core.HashCollisionNode(this__10148.edit,this__10148.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10154 = cljs.core.hash.call(null,key1);
if((key1hash__10154 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10154,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10155 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10154,key1,val1,added_leaf_QMARK___10155).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10155);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10156 = cljs.core.hash.call(null,key1);
if((key1hash__10156 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10156,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10157 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10156,key1,val1,added_leaf_QMARK___10157).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10157);
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
var this__10158 = this;
var h__2218__auto____10159 = this__10158.__hash;
if(!((h__2218__auto____10159 == null)))
{return h__2218__auto____10159;
} else
{var h__2218__auto____10160 = cljs.core.hash_coll.call(null,coll);
this__10158.__hash = h__2218__auto____10160;
return h__2218__auto____10160;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10161 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10162 = this;
var this__10163 = this;
return cljs.core.pr_str.call(null,this__10163);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10164 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10165 = this;
if((this__10165.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10165.nodes[this__10165.i]),(this__10165.nodes[(this__10165.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10165.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10166 = this;
if((this__10166.s == null))
{return cljs.core.create_inode_seq.call(null,this__10166.nodes,(this__10166.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10166.nodes,this__10166.i,cljs.core.next.call(null,this__10166.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10167 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10168 = this;
return (new cljs.core.NodeSeq(meta,this__10168.nodes,this__10168.i,this__10168.s,this__10168.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10169 = this;
return this__10169.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10170 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10170.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10177 = nodes.length;
var j__10178 = i;
while(true){
if((j__10178 < len__10177))
{if(!(((nodes[j__10178]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10178,null,null));
} else
{var temp__3971__auto____10179 = (nodes[(j__10178 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10179))
{var node__10180 = temp__3971__auto____10179;
var temp__3971__auto____10181 = node__10180.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10181))
{var node_seq__10182 = temp__3971__auto____10181;
return (new cljs.core.NodeSeq(null,nodes,(j__10178 + 2),node_seq__10182,null));
} else
{{
var G__10183 = (j__10178 + 2);
j__10178 = G__10183;
continue;
}
}
} else
{{
var G__10184 = (j__10178 + 2);
j__10178 = G__10184;
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
var this__10185 = this;
var h__2218__auto____10186 = this__10185.__hash;
if(!((h__2218__auto____10186 == null)))
{return h__2218__auto____10186;
} else
{var h__2218__auto____10187 = cljs.core.hash_coll.call(null,coll);
this__10185.__hash = h__2218__auto____10187;
return h__2218__auto____10187;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10188 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10189 = this;
var this__10190 = this;
return cljs.core.pr_str.call(null,this__10190);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10191 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10192 = this;
return cljs.core.first.call(null,this__10192.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10193 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10193.nodes,this__10193.i,cljs.core.next.call(null,this__10193.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10194 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10195 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10195.nodes,this__10195.i,this__10195.s,this__10195.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10196 = this;
return this__10196.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10197 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10197.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10204 = nodes.length;
var j__10205 = i;
while(true){
if((j__10205 < len__10204))
{var temp__3971__auto____10206 = (nodes[j__10205]);
if(cljs.core.truth_(temp__3971__auto____10206))
{var nj__10207 = temp__3971__auto____10206;
var temp__3971__auto____10208 = nj__10207.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10208))
{var ns__10209 = temp__3971__auto____10208;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10205 + 1),ns__10209,null));
} else
{{
var G__10210 = (j__10205 + 1);
j__10205 = G__10210;
continue;
}
}
} else
{{
var G__10211 = (j__10205 + 1);
j__10205 = G__10211;
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
var this__10214 = this;
return (new cljs.core.TransientHashMap({},this__10214.root,this__10214.cnt,this__10214.has_nil_QMARK_,this__10214.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10215 = this;
var h__2218__auto____10216 = this__10215.__hash;
if(!((h__2218__auto____10216 == null)))
{return h__2218__auto____10216;
} else
{var h__2218__auto____10217 = cljs.core.hash_imap.call(null,coll);
this__10215.__hash = h__2218__auto____10217;
return h__2218__auto____10217;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10218 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10219 = this;
if((k == null))
{if(this__10219.has_nil_QMARK_)
{return this__10219.nil_val;
} else
{return not_found;
}
} else
{if((this__10219.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10219.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10220 = this;
if((k == null))
{if((function (){var and__3822__auto____10221 = this__10220.has_nil_QMARK_;
if(and__3822__auto____10221)
{return (v === this__10220.nil_val);
} else
{return and__3822__auto____10221;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10220.meta,((this__10220.has_nil_QMARK_)?this__10220.cnt:(this__10220.cnt + 1)),this__10220.root,true,v,null));
}
} else
{var added_leaf_QMARK___10222 = (new cljs.core.Box(false));
var new_root__10223 = (((this__10220.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10220.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10222);
if((new_root__10223 === this__10220.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10220.meta,((added_leaf_QMARK___10222.val)?(this__10220.cnt + 1):this__10220.cnt),new_root__10223,this__10220.has_nil_QMARK_,this__10220.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10224 = this;
if((k == null))
{return this__10224.has_nil_QMARK_;
} else
{if((this__10224.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10224.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10247 = null;
var G__10247__2 = (function (this_sym10225,k){
var this__10227 = this;
var this_sym10225__10228 = this;
var coll__10229 = this_sym10225__10228;
return coll__10229.cljs$core$ILookup$_lookup$arity$2(coll__10229,k);
});
var G__10247__3 = (function (this_sym10226,k,not_found){
var this__10227 = this;
var this_sym10226__10230 = this;
var coll__10231 = this_sym10226__10230;
return coll__10231.cljs$core$ILookup$_lookup$arity$3(coll__10231,k,not_found);
});
G__10247 = function(this_sym10226,k,not_found){
switch(arguments.length){
case 2:
return G__10247__2.call(this,this_sym10226,k);
case 3:
return G__10247__3.call(this,this_sym10226,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10247;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10212,args10213){
var this__10232 = this;
return this_sym10212.call.apply(this_sym10212,[this_sym10212].concat(args10213.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10233 = this;
var init__10234 = ((this__10233.has_nil_QMARK_)?f.call(null,init,null,this__10233.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10234))
{return cljs.core.deref.call(null,init__10234);
} else
{if(!((this__10233.root == null)))
{return this__10233.root.kv_reduce(f,init__10234);
} else
{if("\uFDD0'else")
{return init__10234;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10235 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10236 = this;
var this__10237 = this;
return cljs.core.pr_str.call(null,this__10237);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10238 = this;
if((this__10238.cnt > 0))
{var s__10239 = ((!((this__10238.root == null)))?this__10238.root.inode_seq():null);
if(this__10238.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10238.nil_val], true),s__10239);
} else
{return s__10239;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10240 = this;
return this__10240.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10241 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10242 = this;
return (new cljs.core.PersistentHashMap(meta,this__10242.cnt,this__10242.root,this__10242.has_nil_QMARK_,this__10242.nil_val,this__10242.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10243 = this;
return this__10243.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10244 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10244.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10245 = this;
if((k == null))
{if(this__10245.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10245.meta,(this__10245.cnt - 1),this__10245.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10245.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10246 = this__10245.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10246 === this__10245.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10245.meta,(this__10245.cnt - 1),new_root__10246,this__10245.has_nil_QMARK_,this__10245.nil_val,null));
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
var len__10248 = ks.length;
var i__10249 = 0;
var out__10250 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10249 < len__10248))
{{
var G__10251 = (i__10249 + 1);
var G__10252 = cljs.core.assoc_BANG_.call(null,out__10250,(ks[i__10249]),(vs[i__10249]));
i__10249 = G__10251;
out__10250 = G__10252;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10250);
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
var this__10253 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10254 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10255 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10256 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10257 = this;
if((k == null))
{if(this__10257.has_nil_QMARK_)
{return this__10257.nil_val;
} else
{return null;
}
} else
{if((this__10257.root == null))
{return null;
} else
{return this__10257.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10258 = this;
if((k == null))
{if(this__10258.has_nil_QMARK_)
{return this__10258.nil_val;
} else
{return not_found;
}
} else
{if((this__10258.root == null))
{return not_found;
} else
{return this__10258.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10259 = this;
if(this__10259.edit)
{return this__10259.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10260 = this;
var tcoll__10261 = this;
if(this__10260.edit)
{if((function (){var G__10262__10263 = o;
if(G__10262__10263)
{if((function (){var or__3824__auto____10264 = (G__10262__10263.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10264)
{return or__3824__auto____10264;
} else
{return G__10262__10263.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10262__10263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10262__10263);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10262__10263);
}
})())
{return tcoll__10261.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10265 = cljs.core.seq.call(null,o);
var tcoll__10266 = tcoll__10261;
while(true){
var temp__3971__auto____10267 = cljs.core.first.call(null,es__10265);
if(cljs.core.truth_(temp__3971__auto____10267))
{var e__10268 = temp__3971__auto____10267;
{
var G__10279 = cljs.core.next.call(null,es__10265);
var G__10280 = tcoll__10266.assoc_BANG_(cljs.core.key.call(null,e__10268),cljs.core.val.call(null,e__10268));
es__10265 = G__10279;
tcoll__10266 = G__10280;
continue;
}
} else
{return tcoll__10266;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10269 = this;
var tcoll__10270 = this;
if(this__10269.edit)
{if((k == null))
{if((this__10269.nil_val === v))
{} else
{this__10269.nil_val = v;
}
if(this__10269.has_nil_QMARK_)
{} else
{this__10269.count = (this__10269.count + 1);
this__10269.has_nil_QMARK_ = true;
}
return tcoll__10270;
} else
{var added_leaf_QMARK___10271 = (new cljs.core.Box(false));
var node__10272 = (((this__10269.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10269.root).inode_assoc_BANG_(this__10269.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10271);
if((node__10272 === this__10269.root))
{} else
{this__10269.root = node__10272;
}
if(added_leaf_QMARK___10271.val)
{this__10269.count = (this__10269.count + 1);
} else
{}
return tcoll__10270;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10273 = this;
var tcoll__10274 = this;
if(this__10273.edit)
{if((k == null))
{if(this__10273.has_nil_QMARK_)
{this__10273.has_nil_QMARK_ = false;
this__10273.nil_val = null;
this__10273.count = (this__10273.count - 1);
return tcoll__10274;
} else
{return tcoll__10274;
}
} else
{if((this__10273.root == null))
{return tcoll__10274;
} else
{var removed_leaf_QMARK___10275 = (new cljs.core.Box(false));
var node__10276 = this__10273.root.inode_without_BANG_(this__10273.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10275);
if((node__10276 === this__10273.root))
{} else
{this__10273.root = node__10276;
}
if(cljs.core.truth_((removed_leaf_QMARK___10275[0])))
{this__10273.count = (this__10273.count - 1);
} else
{}
return tcoll__10274;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10277 = this;
var tcoll__10278 = this;
if(this__10277.edit)
{this__10277.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10277.count,this__10277.root,this__10277.has_nil_QMARK_,this__10277.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10283 = node;
var stack__10284 = stack;
while(true){
if(!((t__10283 == null)))
{{
var G__10285 = ((ascending_QMARK_)?t__10283.left:t__10283.right);
var G__10286 = cljs.core.conj.call(null,stack__10284,t__10283);
t__10283 = G__10285;
stack__10284 = G__10286;
continue;
}
} else
{return stack__10284;
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
var this__10287 = this;
var h__2218__auto____10288 = this__10287.__hash;
if(!((h__2218__auto____10288 == null)))
{return h__2218__auto____10288;
} else
{var h__2218__auto____10289 = cljs.core.hash_coll.call(null,coll);
this__10287.__hash = h__2218__auto____10289;
return h__2218__auto____10289;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10290 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10291 = this;
var this__10292 = this;
return cljs.core.pr_str.call(null,this__10292);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10293 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10294 = this;
if((this__10294.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10294.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10295 = this;
return cljs.core.peek.call(null,this__10295.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10296 = this;
var t__10297 = cljs.core.first.call(null,this__10296.stack);
var next_stack__10298 = cljs.core.tree_map_seq_push.call(null,((this__10296.ascending_QMARK_)?t__10297.right:t__10297.left),cljs.core.next.call(null,this__10296.stack),this__10296.ascending_QMARK_);
if(!((next_stack__10298 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10298,this__10296.ascending_QMARK_,(this__10296.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10300 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10300.stack,this__10300.ascending_QMARK_,this__10300.cnt,this__10300.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10301 = this;
return this__10301.meta;
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
{if((function (){var and__3822__auto____10303 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10303)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10303;
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
{if((function (){var and__3822__auto____10305 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10305)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10305;
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
var init__10309 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10309))
{return cljs.core.deref.call(null,init__10309);
} else
{var init__10310 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10309):init__10309);
if(cljs.core.reduced_QMARK_.call(null,init__10310))
{return cljs.core.deref.call(null,init__10310);
} else
{var init__10311 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10310):init__10310);
if(cljs.core.reduced_QMARK_.call(null,init__10311))
{return cljs.core.deref.call(null,init__10311);
} else
{return init__10311;
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
var this__10314 = this;
var h__2218__auto____10315 = this__10314.__hash;
if(!((h__2218__auto____10315 == null)))
{return h__2218__auto____10315;
} else
{var h__2218__auto____10316 = cljs.core.hash_coll.call(null,coll);
this__10314.__hash = h__2218__auto____10316;
return h__2218__auto____10316;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10317 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10318 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10319 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10319.key,this__10319.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10367 = null;
var G__10367__2 = (function (this_sym10320,k){
var this__10322 = this;
var this_sym10320__10323 = this;
var node__10324 = this_sym10320__10323;
return node__10324.cljs$core$ILookup$_lookup$arity$2(node__10324,k);
});
var G__10367__3 = (function (this_sym10321,k,not_found){
var this__10322 = this;
var this_sym10321__10325 = this;
var node__10326 = this_sym10321__10325;
return node__10326.cljs$core$ILookup$_lookup$arity$3(node__10326,k,not_found);
});
G__10367 = function(this_sym10321,k,not_found){
switch(arguments.length){
case 2:
return G__10367__2.call(this,this_sym10321,k);
case 3:
return G__10367__3.call(this,this_sym10321,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10367;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10312,args10313){
var this__10327 = this;
return this_sym10312.call.apply(this_sym10312,[this_sym10312].concat(args10313.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10328 = this;
return cljs.core.PersistentVector.fromArray([this__10328.key,this__10328.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10329 = this;
return this__10329.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10330 = this;
return this__10330.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10331 = this;
var node__10332 = this;
return ins.balance_right(node__10332);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10333 = this;
var node__10334 = this;
return (new cljs.core.RedNode(this__10333.key,this__10333.val,this__10333.left,this__10333.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10335 = this;
var node__10336 = this;
return cljs.core.balance_right_del.call(null,this__10335.key,this__10335.val,this__10335.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10337 = this;
var node__10338 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10339 = this;
var node__10340 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10340,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10341 = this;
var node__10342 = this;
return cljs.core.balance_left_del.call(null,this__10341.key,this__10341.val,del,this__10341.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10343 = this;
var node__10344 = this;
return ins.balance_left(node__10344);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10345 = this;
var node__10346 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10346,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10368 = null;
var G__10368__0 = (function (){
var this__10347 = this;
var this__10349 = this;
return cljs.core.pr_str.call(null,this__10349);
});
G__10368 = function(){
switch(arguments.length){
case 0:
return G__10368__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10368;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10350 = this;
var node__10351 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10351,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10352 = this;
var node__10353 = this;
return node__10353;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10354 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10355 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10356 = this;
return cljs.core.list.call(null,this__10356.key,this__10356.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10357 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10358 = this;
return this__10358.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10359 = this;
return cljs.core.PersistentVector.fromArray([this__10359.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10360 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10360.key,this__10360.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10362 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10362.key,this__10362.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10363 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10364 = this;
if((n === 0))
{return this__10364.key;
} else
{if((n === 1))
{return this__10364.val;
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
var this__10365 = this;
if((n === 0))
{return this__10365.key;
} else
{if((n === 1))
{return this__10365.val;
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
var this__10366 = this;
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
var this__10371 = this;
var h__2218__auto____10372 = this__10371.__hash;
if(!((h__2218__auto____10372 == null)))
{return h__2218__auto____10372;
} else
{var h__2218__auto____10373 = cljs.core.hash_coll.call(null,coll);
this__10371.__hash = h__2218__auto____10373;
return h__2218__auto____10373;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10374 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10375 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10376 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10376.key,this__10376.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10424 = null;
var G__10424__2 = (function (this_sym10377,k){
var this__10379 = this;
var this_sym10377__10380 = this;
var node__10381 = this_sym10377__10380;
return node__10381.cljs$core$ILookup$_lookup$arity$2(node__10381,k);
});
var G__10424__3 = (function (this_sym10378,k,not_found){
var this__10379 = this;
var this_sym10378__10382 = this;
var node__10383 = this_sym10378__10382;
return node__10383.cljs$core$ILookup$_lookup$arity$3(node__10383,k,not_found);
});
G__10424 = function(this_sym10378,k,not_found){
switch(arguments.length){
case 2:
return G__10424__2.call(this,this_sym10378,k);
case 3:
return G__10424__3.call(this,this_sym10378,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10424;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10369,args10370){
var this__10384 = this;
return this_sym10369.call.apply(this_sym10369,[this_sym10369].concat(args10370.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10385 = this;
return cljs.core.PersistentVector.fromArray([this__10385.key,this__10385.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10386 = this;
return this__10386.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10387 = this;
return this__10387.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10388 = this;
var node__10389 = this;
return (new cljs.core.RedNode(this__10388.key,this__10388.val,this__10388.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10390 = this;
var node__10391 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10392 = this;
var node__10393 = this;
return (new cljs.core.RedNode(this__10392.key,this__10392.val,this__10392.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10394 = this;
var node__10395 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10396 = this;
var node__10397 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10397,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10398 = this;
var node__10399 = this;
return (new cljs.core.RedNode(this__10398.key,this__10398.val,del,this__10398.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10400 = this;
var node__10401 = this;
return (new cljs.core.RedNode(this__10400.key,this__10400.val,ins,this__10400.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10402 = this;
var node__10403 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10402.left))
{return (new cljs.core.RedNode(this__10402.key,this__10402.val,this__10402.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10402.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10402.right))
{return (new cljs.core.RedNode(this__10402.right.key,this__10402.right.val,(new cljs.core.BlackNode(this__10402.key,this__10402.val,this__10402.left,this__10402.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10402.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10403,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10425 = null;
var G__10425__0 = (function (){
var this__10404 = this;
var this__10406 = this;
return cljs.core.pr_str.call(null,this__10406);
});
G__10425 = function(){
switch(arguments.length){
case 0:
return G__10425__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10425;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10407 = this;
var node__10408 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10407.right))
{return (new cljs.core.RedNode(this__10407.key,this__10407.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10407.left,null)),this__10407.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10407.left))
{return (new cljs.core.RedNode(this__10407.left.key,this__10407.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10407.left.left,null)),(new cljs.core.BlackNode(this__10407.key,this__10407.val,this__10407.left.right,this__10407.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10408,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10409 = this;
var node__10410 = this;
return (new cljs.core.BlackNode(this__10409.key,this__10409.val,this__10409.left,this__10409.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10411 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10412 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10413 = this;
return cljs.core.list.call(null,this__10413.key,this__10413.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10414 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10415 = this;
return this__10415.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10416 = this;
return cljs.core.PersistentVector.fromArray([this__10416.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10417 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10417.key,this__10417.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10418 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10419 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10419.key,this__10419.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10420 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10421 = this;
if((n === 0))
{return this__10421.key;
} else
{if((n === 1))
{return this__10421.val;
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
var this__10422 = this;
if((n === 0))
{return this__10422.key;
} else
{if((n === 1))
{return this__10422.val;
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
var this__10423 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10429 = comp.call(null,k,tree.key);
if((c__10429 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10429 < 0))
{var ins__10430 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10430 == null)))
{return tree.add_left(ins__10430);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10431 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10431 == null)))
{return tree.add_right(ins__10431);
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
{var app__10434 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10434))
{return (new cljs.core.RedNode(app__10434.key,app__10434.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10434.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10434.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10434,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10435 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10435))
{return (new cljs.core.RedNode(app__10435.key,app__10435.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10435.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10435.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10435,right.right,null)));
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
{var c__10441 = comp.call(null,k,tree.key);
if((c__10441 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10441 < 0))
{var del__10442 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10443 = !((del__10442 == null));
if(or__3824__auto____10443)
{return or__3824__auto____10443;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10442,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10442,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10444 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10445 = !((del__10444 == null));
if(or__3824__auto____10445)
{return or__3824__auto____10445;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10444);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10444,null));
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
var tk__10448 = tree.key;
var c__10449 = comp.call(null,k,tk__10448);
if((c__10449 === 0))
{return tree.replace(tk__10448,v,tree.left,tree.right);
} else
{if((c__10449 < 0))
{return tree.replace(tk__10448,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10448,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__10452 = this;
var h__2218__auto____10453 = this__10452.__hash;
if(!((h__2218__auto____10453 == null)))
{return h__2218__auto____10453;
} else
{var h__2218__auto____10454 = cljs.core.hash_imap.call(null,coll);
this__10452.__hash = h__2218__auto____10454;
return h__2218__auto____10454;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10455 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10456 = this;
var n__10457 = coll.entry_at(k);
if(!((n__10457 == null)))
{return n__10457.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10458 = this;
var found__10459 = [null];
var t__10460 = cljs.core.tree_map_add.call(null,this__10458.comp,this__10458.tree,k,v,found__10459);
if((t__10460 == null))
{var found_node__10461 = cljs.core.nth.call(null,found__10459,0);
if(cljs.core._EQ_.call(null,v,found_node__10461.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10458.comp,cljs.core.tree_map_replace.call(null,this__10458.comp,this__10458.tree,k,v),this__10458.cnt,this__10458.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10458.comp,t__10460.blacken(),(this__10458.cnt + 1),this__10458.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10462 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10496 = null;
var G__10496__2 = (function (this_sym10463,k){
var this__10465 = this;
var this_sym10463__10466 = this;
var coll__10467 = this_sym10463__10466;
return coll__10467.cljs$core$ILookup$_lookup$arity$2(coll__10467,k);
});
var G__10496__3 = (function (this_sym10464,k,not_found){
var this__10465 = this;
var this_sym10464__10468 = this;
var coll__10469 = this_sym10464__10468;
return coll__10469.cljs$core$ILookup$_lookup$arity$3(coll__10469,k,not_found);
});
G__10496 = function(this_sym10464,k,not_found){
switch(arguments.length){
case 2:
return G__10496__2.call(this,this_sym10464,k);
case 3:
return G__10496__3.call(this,this_sym10464,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10496;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10450,args10451){
var this__10470 = this;
return this_sym10450.call.apply(this_sym10450,[this_sym10450].concat(args10451.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10471 = this;
if(!((this__10471.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10471.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10472 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10473 = this;
if((this__10473.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10473.tree,false,this__10473.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10474 = this;
var this__10475 = this;
return cljs.core.pr_str.call(null,this__10475);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10476 = this;
var coll__10477 = this;
var t__10478 = this__10476.tree;
while(true){
if(!((t__10478 == null)))
{var c__10479 = this__10476.comp.call(null,k,t__10478.key);
if((c__10479 === 0))
{return t__10478;
} else
{if((c__10479 < 0))
{{
var G__10497 = t__10478.left;
t__10478 = G__10497;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10498 = t__10478.right;
t__10478 = G__10498;
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
var this__10480 = this;
if((this__10480.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10480.tree,ascending_QMARK_,this__10480.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10481 = this;
if((this__10481.cnt > 0))
{var stack__10482 = null;
var t__10483 = this__10481.tree;
while(true){
if(!((t__10483 == null)))
{var c__10484 = this__10481.comp.call(null,k,t__10483.key);
if((c__10484 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10482,t__10483),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10484 < 0))
{{
var G__10499 = cljs.core.conj.call(null,stack__10482,t__10483);
var G__10500 = t__10483.left;
stack__10482 = G__10499;
t__10483 = G__10500;
continue;
}
} else
{{
var G__10501 = stack__10482;
var G__10502 = t__10483.right;
stack__10482 = G__10501;
t__10483 = G__10502;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10484 > 0))
{{
var G__10503 = cljs.core.conj.call(null,stack__10482,t__10483);
var G__10504 = t__10483.right;
stack__10482 = G__10503;
t__10483 = G__10504;
continue;
}
} else
{{
var G__10505 = stack__10482;
var G__10506 = t__10483.left;
stack__10482 = G__10505;
t__10483 = G__10506;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10482 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10482,ascending_QMARK_,-1,null));
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
var this__10485 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10486 = this;
return this__10486.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10487 = this;
if((this__10487.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10487.tree,true,this__10487.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10488 = this;
return this__10488.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10489 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10490 = this;
return (new cljs.core.PersistentTreeMap(this__10490.comp,this__10490.tree,this__10490.cnt,meta,this__10490.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10491 = this;
return this__10491.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10492 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10492.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10493 = this;
var found__10494 = [null];
var t__10495 = cljs.core.tree_map_remove.call(null,this__10493.comp,this__10493.tree,k,found__10494);
if((t__10495 == null))
{if((cljs.core.nth.call(null,found__10494,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10493.comp,null,0,this__10493.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10493.comp,t__10495.blacken(),(this__10493.cnt - 1),this__10493.meta,null));
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
var in__10509 = cljs.core.seq.call(null,keyvals);
var out__10510 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10509)
{{
var G__10511 = cljs.core.nnext.call(null,in__10509);
var G__10512 = cljs.core.assoc_BANG_.call(null,out__10510,cljs.core.first.call(null,in__10509),cljs.core.second.call(null,in__10509));
in__10509 = G__10511;
out__10510 = G__10512;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10510);
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
hash_map.cljs$lang$applyTo = (function (arglist__10513){
var keyvals = cljs.core.seq(arglist__10513);;
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
array_map.cljs$lang$applyTo = (function (arglist__10514){
var keyvals = cljs.core.seq(arglist__10514);;
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
var ks__10518 = [];
var obj__10519 = {};
var kvs__10520 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10520)
{ks__10518.push(cljs.core.first.call(null,kvs__10520));
(obj__10519[cljs.core.first.call(null,kvs__10520)] = cljs.core.second.call(null,kvs__10520));
{
var G__10521 = cljs.core.nnext.call(null,kvs__10520);
kvs__10520 = G__10521;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10518,obj__10519);
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
obj_map.cljs$lang$applyTo = (function (arglist__10522){
var keyvals = cljs.core.seq(arglist__10522);;
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
var in__10525 = cljs.core.seq.call(null,keyvals);
var out__10526 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10525)
{{
var G__10527 = cljs.core.nnext.call(null,in__10525);
var G__10528 = cljs.core.assoc.call(null,out__10526,cljs.core.first.call(null,in__10525),cljs.core.second.call(null,in__10525));
in__10525 = G__10527;
out__10526 = G__10528;
continue;
}
} else
{return out__10526;
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
sorted_map.cljs$lang$applyTo = (function (arglist__10529){
var keyvals = cljs.core.seq(arglist__10529);;
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
var in__10532 = cljs.core.seq.call(null,keyvals);
var out__10533 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10532)
{{
var G__10534 = cljs.core.nnext.call(null,in__10532);
var G__10535 = cljs.core.assoc.call(null,out__10533,cljs.core.first.call(null,in__10532),cljs.core.second.call(null,in__10532));
in__10532 = G__10534;
out__10533 = G__10535;
continue;
}
} else
{return out__10533;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__10536){
var comparator = cljs.core.first(arglist__10536);
var keyvals = cljs.core.rest(arglist__10536);
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
{return cljs.core.reduce.call(null,(function (p1__10537_SHARP_,p2__10538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10540 = p1__10537_SHARP_;
if(cljs.core.truth_(or__3824__auto____10540))
{return or__3824__auto____10540;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__10541){
var maps = cljs.core.seq(arglist__10541);;
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
{var merge_entry__10549 = (function (m,e){
var k__10547 = cljs.core.first.call(null,e);
var v__10548 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10547))
{return cljs.core.assoc.call(null,m,k__10547,f.call(null,cljs.core._lookup.call(null,m,k__10547,null),v__10548));
} else
{return cljs.core.assoc.call(null,m,k__10547,v__10548);
}
});
var merge2__10551 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10549,(function (){var or__3824__auto____10550 = m1;
if(cljs.core.truth_(or__3824__auto____10550))
{return or__3824__auto____10550;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10551,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__10552){
var f = cljs.core.first(arglist__10552);
var maps = cljs.core.rest(arglist__10552);
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
var ret__10557 = cljs.core.ObjMap.EMPTY;
var keys__10558 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10558)
{var key__10559 = cljs.core.first.call(null,keys__10558);
var entry__10560 = cljs.core._lookup.call(null,map,key__10559,"\uFDD0'user/not-found");
{
var G__10561 = ((cljs.core.not_EQ_.call(null,entry__10560,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__10557,key__10559,entry__10560):ret__10557);
var G__10562 = cljs.core.next.call(null,keys__10558);
ret__10557 = G__10561;
keys__10558 = G__10562;
continue;
}
} else
{return ret__10557;
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
var this__10566 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10566.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10567 = this;
var h__2218__auto____10568 = this__10567.__hash;
if(!((h__2218__auto____10568 == null)))
{return h__2218__auto____10568;
} else
{var h__2218__auto____10569 = cljs.core.hash_iset.call(null,coll);
this__10567.__hash = h__2218__auto____10569;
return h__2218__auto____10569;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10570 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10571 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10571.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10592 = null;
var G__10592__2 = (function (this_sym10572,k){
var this__10574 = this;
var this_sym10572__10575 = this;
var coll__10576 = this_sym10572__10575;
return coll__10576.cljs$core$ILookup$_lookup$arity$2(coll__10576,k);
});
var G__10592__3 = (function (this_sym10573,k,not_found){
var this__10574 = this;
var this_sym10573__10577 = this;
var coll__10578 = this_sym10573__10577;
return coll__10578.cljs$core$ILookup$_lookup$arity$3(coll__10578,k,not_found);
});
G__10592 = function(this_sym10573,k,not_found){
switch(arguments.length){
case 2:
return G__10592__2.call(this,this_sym10573,k);
case 3:
return G__10592__3.call(this,this_sym10573,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10592;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10564,args10565){
var this__10579 = this;
return this_sym10564.call.apply(this_sym10564,[this_sym10564].concat(args10565.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10580 = this;
return (new cljs.core.PersistentHashSet(this__10580.meta,cljs.core.assoc.call(null,this__10580.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10581 = this;
var this__10582 = this;
return cljs.core.pr_str.call(null,this__10582);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10583 = this;
return cljs.core.keys.call(null,this__10583.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10584 = this;
return (new cljs.core.PersistentHashSet(this__10584.meta,cljs.core.dissoc.call(null,this__10584.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10585 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10586 = this;
var and__3822__auto____10587 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10587)
{var and__3822__auto____10588 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10588)
{return cljs.core.every_QMARK_.call(null,(function (p1__10563_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10563_SHARP_);
}),other);
} else
{return and__3822__auto____10588;
}
} else
{return and__3822__auto____10587;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10589 = this;
return (new cljs.core.PersistentHashSet(meta,this__10589.hash_map,this__10589.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10590 = this;
return this__10590.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10591 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10591.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10593 = cljs.core.count.call(null,items);
var i__10594 = 0;
var out__10595 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10594 < len__10593))
{{
var G__10596 = (i__10594 + 1);
var G__10597 = cljs.core.conj_BANG_.call(null,out__10595,(items[i__10594]));
i__10594 = G__10596;
out__10595 = G__10597;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10595);
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
var G__10615 = null;
var G__10615__2 = (function (this_sym10601,k){
var this__10603 = this;
var this_sym10601__10604 = this;
var tcoll__10605 = this_sym10601__10604;
if((cljs.core._lookup.call(null,this__10603.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10615__3 = (function (this_sym10602,k,not_found){
var this__10603 = this;
var this_sym10602__10606 = this;
var tcoll__10607 = this_sym10602__10606;
if((cljs.core._lookup.call(null,this__10603.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10615 = function(this_sym10602,k,not_found){
switch(arguments.length){
case 2:
return G__10615__2.call(this,this_sym10602,k);
case 3:
return G__10615__3.call(this,this_sym10602,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10615;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10599,args10600){
var this__10608 = this;
return this_sym10599.call.apply(this_sym10599,[this_sym10599].concat(args10600.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10609 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10610 = this;
if((cljs.core._lookup.call(null,this__10610.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10611 = this;
return cljs.core.count.call(null,this__10611.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10612 = this;
this__10612.transient_map = cljs.core.dissoc_BANG_.call(null,this__10612.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10613 = this;
this__10613.transient_map = cljs.core.assoc_BANG_.call(null,this__10613.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10614 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10614.transient_map),null));
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
var this__10618 = this;
var h__2218__auto____10619 = this__10618.__hash;
if(!((h__2218__auto____10619 == null)))
{return h__2218__auto____10619;
} else
{var h__2218__auto____10620 = cljs.core.hash_iset.call(null,coll);
this__10618.__hash = h__2218__auto____10620;
return h__2218__auto____10620;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10621 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10622 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10622.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10648 = null;
var G__10648__2 = (function (this_sym10623,k){
var this__10625 = this;
var this_sym10623__10626 = this;
var coll__10627 = this_sym10623__10626;
return coll__10627.cljs$core$ILookup$_lookup$arity$2(coll__10627,k);
});
var G__10648__3 = (function (this_sym10624,k,not_found){
var this__10625 = this;
var this_sym10624__10628 = this;
var coll__10629 = this_sym10624__10628;
return coll__10629.cljs$core$ILookup$_lookup$arity$3(coll__10629,k,not_found);
});
G__10648 = function(this_sym10624,k,not_found){
switch(arguments.length){
case 2:
return G__10648__2.call(this,this_sym10624,k);
case 3:
return G__10648__3.call(this,this_sym10624,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10648;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10616,args10617){
var this__10630 = this;
return this_sym10616.call.apply(this_sym10616,[this_sym10616].concat(args10617.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10631 = this;
return (new cljs.core.PersistentTreeSet(this__10631.meta,cljs.core.assoc.call(null,this__10631.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10632 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10632.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10633 = this;
var this__10634 = this;
return cljs.core.pr_str.call(null,this__10634);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10635 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10635.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10636 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10636.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10637 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10638 = this;
return cljs.core._comparator.call(null,this__10638.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10639 = this;
return cljs.core.keys.call(null,this__10639.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10640 = this;
return (new cljs.core.PersistentTreeSet(this__10640.meta,cljs.core.dissoc.call(null,this__10640.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10641 = this;
return cljs.core.count.call(null,this__10641.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10642 = this;
var and__3822__auto____10643 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10643)
{var and__3822__auto____10644 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10644)
{return cljs.core.every_QMARK_.call(null,(function (p1__10598_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10598_SHARP_);
}),other);
} else
{return and__3822__auto____10644;
}
} else
{return and__3822__auto____10643;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10645 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10645.tree_map,this__10645.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10646 = this;
return this__10646.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10647 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10647.meta);
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
var G__10653__delegate = function (keys){
var in__10651 = cljs.core.seq.call(null,keys);
var out__10652 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10651))
{{
var G__10654 = cljs.core.next.call(null,in__10651);
var G__10655 = cljs.core.conj_BANG_.call(null,out__10652,cljs.core.first.call(null,in__10651));
in__10651 = G__10654;
out__10652 = G__10655;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10652);
}
break;
}
};
var G__10653 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10653__delegate.call(this, keys);
};
G__10653.cljs$lang$maxFixedArity = 0;
G__10653.cljs$lang$applyTo = (function (arglist__10656){
var keys = cljs.core.seq(arglist__10656);;
return G__10653__delegate(keys);
});
G__10653.cljs$lang$arity$variadic = G__10653__delegate;
return G__10653;
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
sorted_set.cljs$lang$applyTo = (function (arglist__10657){
var keys = cljs.core.seq(arglist__10657);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__10659){
var comparator = cljs.core.first(arglist__10659);
var keys = cljs.core.rest(arglist__10659);
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
{var n__10665 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____10666 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____10666))
{var e__10667 = temp__3971__auto____10666;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10667));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10665,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10658_SHARP_){
var temp__3971__auto____10668 = cljs.core.find.call(null,smap,p1__10658_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10668))
{var e__10669 = temp__3971__auto____10668;
return cljs.core.second.call(null,e__10669);
} else
{return p1__10658_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10699 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10692,seen){
while(true){
var vec__10693__10694 = p__10692;
var f__10695 = cljs.core.nth.call(null,vec__10693__10694,0,null);
var xs__10696 = vec__10693__10694;
var temp__3974__auto____10697 = cljs.core.seq.call(null,xs__10696);
if(temp__3974__auto____10697)
{var s__10698 = temp__3974__auto____10697;
if(cljs.core.contains_QMARK_.call(null,seen,f__10695))
{{
var G__10700 = cljs.core.rest.call(null,s__10698);
var G__10701 = seen;
p__10692 = G__10700;
seen = G__10701;
continue;
}
} else
{return cljs.core.cons.call(null,f__10695,step.call(null,cljs.core.rest.call(null,s__10698),cljs.core.conj.call(null,seen,f__10695)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10699.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__10704 = cljs.core.PersistentVector.EMPTY;
var s__10705 = s;
while(true){
if(cljs.core.next.call(null,s__10705))
{{
var G__10706 = cljs.core.conj.call(null,ret__10704,cljs.core.first.call(null,s__10705));
var G__10707 = cljs.core.next.call(null,s__10705);
ret__10704 = G__10706;
s__10705 = G__10707;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10704);
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
{if((function (){var or__3824__auto____10710 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10710)
{return or__3824__auto____10710;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10711 = x.lastIndexOf("/");
if((i__10711 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10711 + 1));
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
if((function (){var or__3824__auto____10714 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10714)
{return or__3824__auto____10714;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10715 = x.lastIndexOf("/");
if((i__10715 > -1))
{return cljs.core.subs.call(null,x,2,i__10715);
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
var map__10722 = cljs.core.ObjMap.EMPTY;
var ks__10723 = cljs.core.seq.call(null,keys);
var vs__10724 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____10725 = ks__10723;
if(and__3822__auto____10725)
{return vs__10724;
} else
{return and__3822__auto____10725;
}
})())
{{
var G__10726 = cljs.core.assoc.call(null,map__10722,cljs.core.first.call(null,ks__10723),cljs.core.first.call(null,vs__10724));
var G__10727 = cljs.core.next.call(null,ks__10723);
var G__10728 = cljs.core.next.call(null,vs__10724);
map__10722 = G__10726;
ks__10723 = G__10727;
vs__10724 = G__10728;
continue;
}
} else
{return map__10722;
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
var G__10731__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10716_SHARP_,p2__10717_SHARP_){
return max_key.call(null,k,p1__10716_SHARP_,p2__10717_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10731 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10731__delegate.call(this, k, x, y, more);
};
G__10731.cljs$lang$maxFixedArity = 3;
G__10731.cljs$lang$applyTo = (function (arglist__10732){
var k = cljs.core.first(arglist__10732);
var x = cljs.core.first(cljs.core.next(arglist__10732));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10732)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10732)));
return G__10731__delegate(k, x, y, more);
});
G__10731.cljs$lang$arity$variadic = G__10731__delegate;
return G__10731;
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
var G__10733__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10729_SHARP_,p2__10730_SHARP_){
return min_key.call(null,k,p1__10729_SHARP_,p2__10730_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10733 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10733__delegate.call(this, k, x, y, more);
};
G__10733.cljs$lang$maxFixedArity = 3;
G__10733.cljs$lang$applyTo = (function (arglist__10734){
var k = cljs.core.first(arglist__10734);
var x = cljs.core.first(cljs.core.next(arglist__10734));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10734)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10734)));
return G__10733__delegate(k, x, y, more);
});
G__10733.cljs$lang$arity$variadic = G__10733__delegate;
return G__10733;
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
var temp__3974__auto____10737 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10737)
{var s__10738 = temp__3974__auto____10737;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10738),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10738)));
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
var temp__3974__auto____10741 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10741)
{var s__10742 = temp__3974__auto____10741;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10742))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10742),take_while.call(null,pred,cljs.core.rest.call(null,s__10742)));
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
var comp__10744 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10744.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__10756 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10757 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10757))
{var vec__10758__10759 = temp__3974__auto____10757;
var e__10760 = cljs.core.nth.call(null,vec__10758__10759,0,null);
var s__10761 = vec__10758__10759;
if(cljs.core.truth_(include__10756.call(null,e__10760)))
{return s__10761;
} else
{return cljs.core.next.call(null,s__10761);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10756,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10762 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10762))
{var vec__10763__10764 = temp__3974__auto____10762;
var e__10765 = cljs.core.nth.call(null,vec__10763__10764,0,null);
var s__10766 = vec__10763__10764;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10765))?s__10766:cljs.core.next.call(null,s__10766)));
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
var include__10778 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10779 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10779))
{var vec__10780__10781 = temp__3974__auto____10779;
var e__10782 = cljs.core.nth.call(null,vec__10780__10781,0,null);
var s__10783 = vec__10780__10781;
if(cljs.core.truth_(include__10778.call(null,e__10782)))
{return s__10783;
} else
{return cljs.core.next.call(null,s__10783);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10778,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10784 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10784))
{var vec__10785__10786 = temp__3974__auto____10784;
var e__10787 = cljs.core.nth.call(null,vec__10785__10786,0,null);
var s__10788 = vec__10785__10786;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10787))?s__10788:cljs.core.next.call(null,s__10788)));
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
var this__10789 = this;
var h__2218__auto____10790 = this__10789.__hash;
if(!((h__2218__auto____10790 == null)))
{return h__2218__auto____10790;
} else
{var h__2218__auto____10791 = cljs.core.hash_coll.call(null,rng);
this__10789.__hash = h__2218__auto____10791;
return h__2218__auto____10791;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10792 = this;
if((this__10792.step > 0))
{if(((this__10792.start + this__10792.step) < this__10792.end))
{return (new cljs.core.Range(this__10792.meta,(this__10792.start + this__10792.step),this__10792.end,this__10792.step,null));
} else
{return null;
}
} else
{if(((this__10792.start + this__10792.step) > this__10792.end))
{return (new cljs.core.Range(this__10792.meta,(this__10792.start + this__10792.step),this__10792.end,this__10792.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10793 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10794 = this;
var this__10795 = this;
return cljs.core.pr_str.call(null,this__10795);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10796 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10797 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10798 = this;
if((this__10798.step > 0))
{if((this__10798.start < this__10798.end))
{return rng;
} else
{return null;
}
} else
{if((this__10798.start > this__10798.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10799 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10799.end - this__10799.start) / this__10799.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10800 = this;
return this__10800.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10801 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10801.meta,(this__10801.start + this__10801.step),this__10801.end,this__10801.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10802 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10803 = this;
return (new cljs.core.Range(meta,this__10803.start,this__10803.end,this__10803.step,this__10803.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10804 = this;
return this__10804.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10805 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10805.start + (n * this__10805.step));
} else
{if((function (){var and__3822__auto____10806 = (this__10805.start > this__10805.end);
if(and__3822__auto____10806)
{return (this__10805.step === 0);
} else
{return and__3822__auto____10806;
}
})())
{return this__10805.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10807 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10807.start + (n * this__10807.step));
} else
{if((function (){var and__3822__auto____10808 = (this__10807.start > this__10807.end);
if(and__3822__auto____10808)
{return (this__10807.step === 0);
} else
{return and__3822__auto____10808;
}
})())
{return this__10807.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10809 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10809.meta);
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
var temp__3974__auto____10812 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10812)
{var s__10813 = temp__3974__auto____10812;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10813),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10813)));
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
var temp__3974__auto____10820 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10820)
{var s__10821 = temp__3974__auto____10820;
var fst__10822 = cljs.core.first.call(null,s__10821);
var fv__10823 = f.call(null,fst__10822);
var run__10824 = cljs.core.cons.call(null,fst__10822,cljs.core.take_while.call(null,(function (p1__10814_SHARP_){
return cljs.core._EQ_.call(null,fv__10823,f.call(null,p1__10814_SHARP_));
}),cljs.core.next.call(null,s__10821)));
return cljs.core.cons.call(null,run__10824,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10824),s__10821))));
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
var temp__3971__auto____10839 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10839)
{var s__10840 = temp__3971__auto____10839;
return reductions.call(null,f,cljs.core.first.call(null,s__10840),cljs.core.rest.call(null,s__10840));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10841 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10841)
{var s__10842 = temp__3974__auto____10841;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10842)),cljs.core.rest.call(null,s__10842));
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
var G__10845 = null;
var G__10845__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10845__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10845__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10845__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10845__4 = (function() { 
var G__10846__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10846 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10846__delegate.call(this, x, y, z, args);
};
G__10846.cljs$lang$maxFixedArity = 3;
G__10846.cljs$lang$applyTo = (function (arglist__10847){
var x = cljs.core.first(arglist__10847);
var y = cljs.core.first(cljs.core.next(arglist__10847));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10847)));
return G__10846__delegate(x, y, z, args);
});
G__10846.cljs$lang$arity$variadic = G__10846__delegate;
return G__10846;
})()
;
G__10845 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10845__0.call(this);
case 1:
return G__10845__1.call(this,x);
case 2:
return G__10845__2.call(this,x,y);
case 3:
return G__10845__3.call(this,x,y,z);
default:
return G__10845__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10845.cljs$lang$maxFixedArity = 3;
G__10845.cljs$lang$applyTo = G__10845__4.cljs$lang$applyTo;
return G__10845;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10848 = null;
var G__10848__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10848__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10848__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10848__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10848__4 = (function() { 
var G__10849__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10849__delegate.call(this, x, y, z, args);
};
G__10849.cljs$lang$maxFixedArity = 3;
G__10849.cljs$lang$applyTo = (function (arglist__10850){
var x = cljs.core.first(arglist__10850);
var y = cljs.core.first(cljs.core.next(arglist__10850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10850)));
return G__10849__delegate(x, y, z, args);
});
G__10849.cljs$lang$arity$variadic = G__10849__delegate;
return G__10849;
})()
;
G__10848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10848__0.call(this);
case 1:
return G__10848__1.call(this,x);
case 2:
return G__10848__2.call(this,x,y);
case 3:
return G__10848__3.call(this,x,y,z);
default:
return G__10848__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10848.cljs$lang$maxFixedArity = 3;
G__10848.cljs$lang$applyTo = G__10848__4.cljs$lang$applyTo;
return G__10848;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10851 = null;
var G__10851__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10851__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10851__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10851__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10851__4 = (function() { 
var G__10852__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10852__delegate.call(this, x, y, z, args);
};
G__10852.cljs$lang$maxFixedArity = 3;
G__10852.cljs$lang$applyTo = (function (arglist__10853){
var x = cljs.core.first(arglist__10853);
var y = cljs.core.first(cljs.core.next(arglist__10853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10853)));
return G__10852__delegate(x, y, z, args);
});
G__10852.cljs$lang$arity$variadic = G__10852__delegate;
return G__10852;
})()
;
G__10851 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10851__0.call(this);
case 1:
return G__10851__1.call(this,x);
case 2:
return G__10851__2.call(this,x,y);
case 3:
return G__10851__3.call(this,x,y,z);
default:
return G__10851__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10851.cljs$lang$maxFixedArity = 3;
G__10851.cljs$lang$applyTo = G__10851__4.cljs$lang$applyTo;
return G__10851;
})()
});
var juxt__4 = (function() { 
var G__10854__delegate = function (f,g,h,fs){
var fs__10844 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10855 = null;
var G__10855__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10825_SHARP_,p2__10826_SHARP_){
return cljs.core.conj.call(null,p1__10825_SHARP_,p2__10826_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10844);
});
var G__10855__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10827_SHARP_,p2__10828_SHARP_){
return cljs.core.conj.call(null,p1__10827_SHARP_,p2__10828_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10844);
});
var G__10855__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10829_SHARP_,p2__10830_SHARP_){
return cljs.core.conj.call(null,p1__10829_SHARP_,p2__10830_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10844);
});
var G__10855__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10831_SHARP_,p2__10832_SHARP_){
return cljs.core.conj.call(null,p1__10831_SHARP_,p2__10832_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10844);
});
var G__10855__4 = (function() { 
var G__10856__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10833_SHARP_,p2__10834_SHARP_){
return cljs.core.conj.call(null,p1__10833_SHARP_,cljs.core.apply.call(null,p2__10834_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10844);
};
var G__10856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10856__delegate.call(this, x, y, z, args);
};
G__10856.cljs$lang$maxFixedArity = 3;
G__10856.cljs$lang$applyTo = (function (arglist__10857){
var x = cljs.core.first(arglist__10857);
var y = cljs.core.first(cljs.core.next(arglist__10857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10857)));
return G__10856__delegate(x, y, z, args);
});
G__10856.cljs$lang$arity$variadic = G__10856__delegate;
return G__10856;
})()
;
G__10855 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10855__0.call(this);
case 1:
return G__10855__1.call(this,x);
case 2:
return G__10855__2.call(this,x,y);
case 3:
return G__10855__3.call(this,x,y,z);
default:
return G__10855__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10855.cljs$lang$maxFixedArity = 3;
G__10855.cljs$lang$applyTo = G__10855__4.cljs$lang$applyTo;
return G__10855;
})()
};
var G__10854 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10854__delegate.call(this, f, g, h, fs);
};
G__10854.cljs$lang$maxFixedArity = 3;
G__10854.cljs$lang$applyTo = (function (arglist__10858){
var f = cljs.core.first(arglist__10858);
var g = cljs.core.first(cljs.core.next(arglist__10858));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10858)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10858)));
return G__10854__delegate(f, g, h, fs);
});
G__10854.cljs$lang$arity$variadic = G__10854__delegate;
return G__10854;
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
var G__10861 = cljs.core.next.call(null,coll);
coll = G__10861;
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
if(cljs.core.truth_((function (){var and__3822__auto____10860 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10860)
{return (n > 0);
} else
{return and__3822__auto____10860;
}
})()))
{{
var G__10862 = (n - 1);
var G__10863 = cljs.core.next.call(null,coll);
n = G__10862;
coll = G__10863;
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
var matches__10865 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10865),s))
{if((cljs.core.count.call(null,matches__10865) === 1))
{return cljs.core.first.call(null,matches__10865);
} else
{return cljs.core.vec.call(null,matches__10865);
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
var matches__10867 = re.exec(s);
if((matches__10867 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10867) === 1))
{return cljs.core.first.call(null,matches__10867);
} else
{return cljs.core.vec.call(null,matches__10867);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10872 = cljs.core.re_find.call(null,re,s);
var match_idx__10873 = s.search(re);
var match_str__10874 = ((cljs.core.coll_QMARK_.call(null,match_data__10872))?cljs.core.first.call(null,match_data__10872):match_data__10872);
var post_match__10875 = cljs.core.subs.call(null,s,(match_idx__10873 + cljs.core.count.call(null,match_str__10874)));
if(cljs.core.truth_(match_data__10872))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10872,re_seq.call(null,re,post_match__10875));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10882__10883 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10884 = cljs.core.nth.call(null,vec__10882__10883,0,null);
var flags__10885 = cljs.core.nth.call(null,vec__10882__10883,1,null);
var pattern__10886 = cljs.core.nth.call(null,vec__10882__10883,2,null);
return (new RegExp(pattern__10886,flags__10885));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10876_SHARP_){
return print_one.call(null,p1__10876_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10896 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10896))
{var and__3822__auto____10900 = (function (){var G__10897__10898 = obj;
if(G__10897__10898)
{if((function (){var or__3824__auto____10899 = (G__10897__10898.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10899)
{return or__3824__auto____10899;
} else
{return G__10897__10898.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10897__10898.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10897__10898);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10897__10898);
}
})();
if(cljs.core.truth_(and__3822__auto____10900))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10900;
}
} else
{return and__3822__auto____10896;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10901 = !((obj == null));
if(and__3822__auto____10901)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10901;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10902__10903 = obj;
if(G__10902__10903)
{if((function (){var or__3824__auto____10904 = (G__10902__10903.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10904)
{return or__3824__auto____10904;
} else
{return G__10902__10903.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10902__10903.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10902__10903);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10902__10903);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10924 = (new goog.string.StringBuffer());
var G__10925__10926 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10925__10926)
{var string__10927 = cljs.core.first.call(null,G__10925__10926);
var G__10925__10928 = G__10925__10926;
while(true){
sb__10924.append(string__10927);
var temp__3974__auto____10929 = cljs.core.next.call(null,G__10925__10928);
if(temp__3974__auto____10929)
{var G__10925__10930 = temp__3974__auto____10929;
{
var G__10943 = cljs.core.first.call(null,G__10925__10930);
var G__10944 = G__10925__10930;
string__10927 = G__10943;
G__10925__10928 = G__10944;
continue;
}
} else
{}
break;
}
} else
{}
var G__10931__10932 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10931__10932)
{var obj__10933 = cljs.core.first.call(null,G__10931__10932);
var G__10931__10934 = G__10931__10932;
while(true){
sb__10924.append(" ");
var G__10935__10936 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10933,opts));
if(G__10935__10936)
{var string__10937 = cljs.core.first.call(null,G__10935__10936);
var G__10935__10938 = G__10935__10936;
while(true){
sb__10924.append(string__10937);
var temp__3974__auto____10939 = cljs.core.next.call(null,G__10935__10938);
if(temp__3974__auto____10939)
{var G__10935__10940 = temp__3974__auto____10939;
{
var G__10945 = cljs.core.first.call(null,G__10935__10940);
var G__10946 = G__10935__10940;
string__10937 = G__10945;
G__10935__10938 = G__10946;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10941 = cljs.core.next.call(null,G__10931__10934);
if(temp__3974__auto____10941)
{var G__10931__10942 = temp__3974__auto____10941;
{
var G__10947 = cljs.core.first.call(null,G__10931__10942);
var G__10948 = G__10931__10942;
obj__10933 = G__10947;
G__10931__10934 = G__10948;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10924;
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
var sb__10950 = cljs.core.pr_sb.call(null,objs,opts);
sb__10950.append("\n");
return [cljs.core.str(sb__10950)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10969__10970 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10969__10970)
{var string__10971 = cljs.core.first.call(null,G__10969__10970);
var G__10969__10972 = G__10969__10970;
while(true){
cljs.core.string_print.call(null,string__10971);
var temp__3974__auto____10973 = cljs.core.next.call(null,G__10969__10972);
if(temp__3974__auto____10973)
{var G__10969__10974 = temp__3974__auto____10973;
{
var G__10987 = cljs.core.first.call(null,G__10969__10974);
var G__10988 = G__10969__10974;
string__10971 = G__10987;
G__10969__10972 = G__10988;
continue;
}
} else
{}
break;
}
} else
{}
var G__10975__10976 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10975__10976)
{var obj__10977 = cljs.core.first.call(null,G__10975__10976);
var G__10975__10978 = G__10975__10976;
while(true){
cljs.core.string_print.call(null," ");
var G__10979__10980 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10977,opts));
if(G__10979__10980)
{var string__10981 = cljs.core.first.call(null,G__10979__10980);
var G__10979__10982 = G__10979__10980;
while(true){
cljs.core.string_print.call(null,string__10981);
var temp__3974__auto____10983 = cljs.core.next.call(null,G__10979__10982);
if(temp__3974__auto____10983)
{var G__10979__10984 = temp__3974__auto____10983;
{
var G__10989 = cljs.core.first.call(null,G__10979__10984);
var G__10990 = G__10979__10984;
string__10981 = G__10989;
G__10979__10982 = G__10990;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10985 = cljs.core.next.call(null,G__10975__10978);
if(temp__3974__auto____10985)
{var G__10975__10986 = temp__3974__auto____10985;
{
var G__10991 = cljs.core.first.call(null,G__10975__10986);
var G__10992 = G__10975__10986;
obj__10977 = G__10991;
G__10975__10978 = G__10992;
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
pr_str.cljs$lang$applyTo = (function (arglist__10993){
var objs = cljs.core.seq(arglist__10993);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10994){
var objs = cljs.core.seq(arglist__10994);;
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
pr.cljs$lang$applyTo = (function (arglist__10995){
var objs = cljs.core.seq(arglist__10995);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10996){
var objs = cljs.core.seq(arglist__10996);;
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
print_str.cljs$lang$applyTo = (function (arglist__10997){
var objs = cljs.core.seq(arglist__10997);;
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
println.cljs$lang$applyTo = (function (arglist__10998){
var objs = cljs.core.seq(arglist__10998);;
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
println_str.cljs$lang$applyTo = (function (arglist__10999){
var objs = cljs.core.seq(arglist__10999);;
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
prn.cljs$lang$applyTo = (function (arglist__11000){
var objs = cljs.core.seq(arglist__11000);;
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
printf.cljs$lang$applyTo = (function (arglist__11001){
var fmt = cljs.core.first(arglist__11001);
var args = cljs.core.rest(arglist__11001);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11002 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11002,"{",", ","}",opts,coll);
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
var pr_pair__11003 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11003,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11004 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11004,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11005 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11005))
{var nspc__11006 = temp__3974__auto____11005;
return [cljs.core.str(nspc__11006),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11007 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11007))
{var nspc__11008 = temp__3974__auto____11007;
return [cljs.core.str(nspc__11008),cljs.core.str("/")].join('');
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
var pr_pair__11009 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11009,"{",", ","}",opts,coll);
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
var normalize__11011 = (function (n,len){
var ns__11010 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11010) < len))
{{
var G__11013 = [cljs.core.str("0"),cljs.core.str(ns__11010)].join('');
ns__11010 = G__11013;
continue;
}
} else
{return ns__11010;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11011.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11011.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11011.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11011.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11011.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11011.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__11012 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11012,"{",", ","}",opts,coll);
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
var this__11014 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11015 = this;
var G__11016__11017 = cljs.core.seq.call(null,this__11015.watches);
if(G__11016__11017)
{var G__11019__11021 = cljs.core.first.call(null,G__11016__11017);
var vec__11020__11022 = G__11019__11021;
var key__11023 = cljs.core.nth.call(null,vec__11020__11022,0,null);
var f__11024 = cljs.core.nth.call(null,vec__11020__11022,1,null);
var G__11016__11025 = G__11016__11017;
var G__11019__11026 = G__11019__11021;
var G__11016__11027 = G__11016__11025;
while(true){
var vec__11028__11029 = G__11019__11026;
var key__11030 = cljs.core.nth.call(null,vec__11028__11029,0,null);
var f__11031 = cljs.core.nth.call(null,vec__11028__11029,1,null);
var G__11016__11032 = G__11016__11027;
f__11031.call(null,key__11030,this$,oldval,newval);
var temp__3974__auto____11033 = cljs.core.next.call(null,G__11016__11032);
if(temp__3974__auto____11033)
{var G__11016__11034 = temp__3974__auto____11033;
{
var G__11041 = cljs.core.first.call(null,G__11016__11034);
var G__11042 = G__11016__11034;
G__11019__11026 = G__11041;
G__11016__11027 = G__11042;
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
var this__11035 = this;
return this$.watches = cljs.core.assoc.call(null,this__11035.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11036 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11036.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11037 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11037.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11038 = this;
return this__11038.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11039 = this;
return this__11039.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11040 = this;
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
var G__11054__delegate = function (x,p__11043){
var map__11049__11050 = p__11043;
var map__11049__11051 = ((cljs.core.seq_QMARK_.call(null,map__11049__11050))?cljs.core.apply.call(null,cljs.core.hash_map,map__11049__11050):map__11049__11050);
var validator__11052 = cljs.core._lookup.call(null,map__11049__11051,"\uFDD0'validator",null);
var meta__11053 = cljs.core._lookup.call(null,map__11049__11051,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11053,validator__11052,null));
};
var G__11054 = function (x,var_args){
var p__11043 = null;
if (goog.isDef(var_args)) {
  p__11043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11054__delegate.call(this, x, p__11043);
};
G__11054.cljs$lang$maxFixedArity = 1;
G__11054.cljs$lang$applyTo = (function (arglist__11055){
var x = cljs.core.first(arglist__11055);
var p__11043 = cljs.core.rest(arglist__11055);
return G__11054__delegate(x, p__11043);
});
G__11054.cljs$lang$arity$variadic = G__11054__delegate;
return G__11054;
})()
;
atom = function(x,var_args){
var p__11043 = var_args;
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
var temp__3974__auto____11059 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11059))
{var validate__11060 = temp__3974__auto____11059;
if(cljs.core.truth_(validate__11060.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11061 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11061,new_value);
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
var G__11062__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11062 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11062__delegate.call(this, a, f, x, y, z, more);
};
G__11062.cljs$lang$maxFixedArity = 5;
G__11062.cljs$lang$applyTo = (function (arglist__11063){
var a = cljs.core.first(arglist__11063);
var f = cljs.core.first(cljs.core.next(arglist__11063));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11063)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11063))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11063)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11063)))));
return G__11062__delegate(a, f, x, y, z, more);
});
G__11062.cljs$lang$arity$variadic = G__11062__delegate;
return G__11062;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11064){
var iref = cljs.core.first(arglist__11064);
var f = cljs.core.first(cljs.core.next(arglist__11064));
var args = cljs.core.rest(cljs.core.next(arglist__11064));
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
var this__11065 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11065.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11066 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11066.state,(function (p__11067){
var map__11068__11069 = p__11067;
var map__11068__11070 = ((cljs.core.seq_QMARK_.call(null,map__11068__11069))?cljs.core.apply.call(null,cljs.core.hash_map,map__11068__11069):map__11068__11069);
var curr_state__11071 = map__11068__11070;
var done__11072 = cljs.core._lookup.call(null,map__11068__11070,"\uFDD0'done",null);
if(cljs.core.truth_(done__11072))
{return curr_state__11071;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11066.f.call(null)});
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
var map__11093__11094 = options;
var map__11093__11095 = ((cljs.core.seq_QMARK_.call(null,map__11093__11094))?cljs.core.apply.call(null,cljs.core.hash_map,map__11093__11094):map__11093__11094);
var keywordize_keys__11096 = cljs.core._lookup.call(null,map__11093__11095,"\uFDD0'keywordize-keys",null);
var keyfn__11097 = (cljs.core.truth_(keywordize_keys__11096)?cljs.core.keyword:cljs.core.str);
var f__11112 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2488__auto____11111 = (function iter__11105(s__11106){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11106__11109 = s__11106;
while(true){
if(cljs.core.seq.call(null,s__11106__11109))
{var k__11110 = cljs.core.first.call(null,s__11106__11109);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11097.call(null,k__11110),thisfn.call(null,(x[k__11110]))], true),iter__11105.call(null,cljs.core.rest.call(null,s__11106__11109)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2488__auto____11111.call(null,cljs.core.js_keys.call(null,x));
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
return f__11112.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11113){
var x = cljs.core.first(arglist__11113);
var options = cljs.core.rest(arglist__11113);
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
var mem__11118 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11122__delegate = function (args){
var temp__3971__auto____11119 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11118),args,null);
if(cljs.core.truth_(temp__3971__auto____11119))
{var v__11120 = temp__3971__auto____11119;
return v__11120;
} else
{var ret__11121 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11118,cljs.core.assoc,args,ret__11121);
return ret__11121;
}
};
var G__11122 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11122__delegate.call(this, args);
};
G__11122.cljs$lang$maxFixedArity = 0;
G__11122.cljs$lang$applyTo = (function (arglist__11123){
var args = cljs.core.seq(arglist__11123);;
return G__11122__delegate(args);
});
G__11122.cljs$lang$arity$variadic = G__11122__delegate;
return G__11122;
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
var ret__11125 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11125))
{{
var G__11126 = ret__11125;
f = G__11126;
continue;
}
} else
{return ret__11125;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11127__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11127 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11127__delegate.call(this, f, args);
};
G__11127.cljs$lang$maxFixedArity = 1;
G__11127.cljs$lang$applyTo = (function (arglist__11128){
var f = cljs.core.first(arglist__11128);
var args = cljs.core.rest(arglist__11128);
return G__11127__delegate(f, args);
});
G__11127.cljs$lang$arity$variadic = G__11127__delegate;
return G__11127;
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
var k__11130 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11130,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11130,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____11139 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11139)
{return or__3824__auto____11139;
} else
{var or__3824__auto____11140 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11140)
{return or__3824__auto____11140;
} else
{var and__3822__auto____11141 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11141)
{var and__3822__auto____11142 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11142)
{var and__3822__auto____11143 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11143)
{var ret__11144 = true;
var i__11145 = 0;
while(true){
if((function (){var or__3824__auto____11146 = cljs.core.not.call(null,ret__11144);
if(or__3824__auto____11146)
{return or__3824__auto____11146;
} else
{return (i__11145 === cljs.core.count.call(null,parent));
}
})())
{return ret__11144;
} else
{{
var G__11147 = isa_QMARK_.call(null,h,child.call(null,i__11145),parent.call(null,i__11145));
var G__11148 = (i__11145 + 1);
ret__11144 = G__11147;
i__11145 = G__11148;
continue;
}
}
break;
}
} else
{return and__3822__auto____11143;
}
} else
{return and__3822__auto____11142;
}
} else
{return and__3822__auto____11141;
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
var tp__11157 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11158 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11159 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11160 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11161 = ((cljs.core.contains_QMARK_.call(null,tp__11157.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11159.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11159.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11157,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11160.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11158,parent,ta__11159),"\uFDD0'descendants":tf__11160.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11159,tag,td__11158)});
})());
if(cljs.core.truth_(or__3824__auto____11161))
{return or__3824__auto____11161;
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
var parentMap__11166 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11167 = (cljs.core.truth_(parentMap__11166.call(null,tag))?cljs.core.disj.call(null,parentMap__11166.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11168 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11167))?cljs.core.assoc.call(null,parentMap__11166,tag,childsParents__11167):cljs.core.dissoc.call(null,parentMap__11166,tag));
var deriv_seq__11169 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11149_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11149_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11149_SHARP_),cljs.core.second.call(null,p1__11149_SHARP_)));
}),cljs.core.seq.call(null,newParents__11168)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11166.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11150_SHARP_,p2__11151_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11150_SHARP_,p2__11151_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11169));
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
var xprefs__11177 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11179 = (cljs.core.truth_((function (){var and__3822__auto____11178 = xprefs__11177;
if(cljs.core.truth_(and__3822__auto____11178))
{return xprefs__11177.call(null,y);
} else
{return and__3822__auto____11178;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11179))
{return or__3824__auto____11179;
} else
{var or__3824__auto____11181 = (function (){var ps__11180 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11180) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11180),prefer_table)))
{} else
{}
{
var G__11184 = cljs.core.rest.call(null,ps__11180);
ps__11180 = G__11184;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11181))
{return or__3824__auto____11181;
} else
{var or__3824__auto____11183 = (function (){var ps__11182 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11182) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11182),y,prefer_table)))
{} else
{}
{
var G__11185 = cljs.core.rest.call(null,ps__11182);
ps__11182 = G__11185;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11183))
{return or__3824__auto____11183;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11187 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11187))
{return or__3824__auto____11187;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11205 = cljs.core.reduce.call(null,(function (be,p__11197){
var vec__11198__11199 = p__11197;
var k__11200 = cljs.core.nth.call(null,vec__11198__11199,0,null);
var ___11201 = cljs.core.nth.call(null,vec__11198__11199,1,null);
var e__11202 = vec__11198__11199;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11200))
{var be2__11204 = (cljs.core.truth_((function (){var or__3824__auto____11203 = (be == null);
if(or__3824__auto____11203)
{return or__3824__auto____11203;
} else
{return cljs.core.dominates.call(null,k__11200,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11202:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11204),k__11200,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11200),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11204)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11204;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11205))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11205));
return cljs.core.second.call(null,best_entry__11205);
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
if((function (){var and__3822__auto____11210 = mf;
if(and__3822__auto____11210)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11210;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2389__auto____11211 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11212 = (cljs.core._reset[goog.typeOf(x__2389__auto____11211)]);
if(or__3824__auto____11212)
{return or__3824__auto____11212;
} else
{var or__3824__auto____11213 = (cljs.core._reset["_"]);
if(or__3824__auto____11213)
{return or__3824__auto____11213;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11218 = mf;
if(and__3822__auto____11218)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11218;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2389__auto____11219 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11220 = (cljs.core._add_method[goog.typeOf(x__2389__auto____11219)]);
if(or__3824__auto____11220)
{return or__3824__auto____11220;
} else
{var or__3824__auto____11221 = (cljs.core._add_method["_"]);
if(or__3824__auto____11221)
{return or__3824__auto____11221;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11226 = mf;
if(and__3822__auto____11226)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11226;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11227 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11228 = (cljs.core._remove_method[goog.typeOf(x__2389__auto____11227)]);
if(or__3824__auto____11228)
{return or__3824__auto____11228;
} else
{var or__3824__auto____11229 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11229)
{return or__3824__auto____11229;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11234 = mf;
if(and__3822__auto____11234)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11234;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2389__auto____11235 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11236 = (cljs.core._prefer_method[goog.typeOf(x__2389__auto____11235)]);
if(or__3824__auto____11236)
{return or__3824__auto____11236;
} else
{var or__3824__auto____11237 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11237)
{return or__3824__auto____11237;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11242 = mf;
if(and__3822__auto____11242)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11242;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2389__auto____11243 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11244 = (cljs.core._get_method[goog.typeOf(x__2389__auto____11243)]);
if(or__3824__auto____11244)
{return or__3824__auto____11244;
} else
{var or__3824__auto____11245 = (cljs.core._get_method["_"]);
if(or__3824__auto____11245)
{return or__3824__auto____11245;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11250 = mf;
if(and__3822__auto____11250)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11250;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2389__auto____11251 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11252 = (cljs.core._methods[goog.typeOf(x__2389__auto____11251)]);
if(or__3824__auto____11252)
{return or__3824__auto____11252;
} else
{var or__3824__auto____11253 = (cljs.core._methods["_"]);
if(or__3824__auto____11253)
{return or__3824__auto____11253;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11258 = mf;
if(and__3822__auto____11258)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11258;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2389__auto____11259 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11260 = (cljs.core._prefers[goog.typeOf(x__2389__auto____11259)]);
if(or__3824__auto____11260)
{return or__3824__auto____11260;
} else
{var or__3824__auto____11261 = (cljs.core._prefers["_"]);
if(or__3824__auto____11261)
{return or__3824__auto____11261;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11266 = mf;
if(and__3822__auto____11266)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11266;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2389__auto____11267 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11268 = (cljs.core._dispatch[goog.typeOf(x__2389__auto____11267)]);
if(or__3824__auto____11268)
{return or__3824__auto____11268;
} else
{var or__3824__auto____11269 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11269)
{return or__3824__auto____11269;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11272 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11273 = cljs.core._get_method.call(null,mf,dispatch_val__11272);
if(cljs.core.truth_(target_fn__11273))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11272)].join('')));
}
return cljs.core.apply.call(null,target_fn__11273,args);
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
var this__11274 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11275 = this;
cljs.core.swap_BANG_.call(null,this__11275.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11275.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11275.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11275.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11276 = this;
cljs.core.swap_BANG_.call(null,this__11276.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11276.method_cache,this__11276.method_table,this__11276.cached_hierarchy,this__11276.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11277 = this;
cljs.core.swap_BANG_.call(null,this__11277.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11277.method_cache,this__11277.method_table,this__11277.cached_hierarchy,this__11277.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11278 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11278.cached_hierarchy),cljs.core.deref.call(null,this__11278.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11278.method_cache,this__11278.method_table,this__11278.cached_hierarchy,this__11278.hierarchy);
}
var temp__3971__auto____11279 = cljs.core.deref.call(null,this__11278.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11279))
{var target_fn__11280 = temp__3971__auto____11279;
return target_fn__11280;
} else
{var temp__3971__auto____11281 = cljs.core.find_and_cache_best_method.call(null,this__11278.name,dispatch_val,this__11278.hierarchy,this__11278.method_table,this__11278.prefer_table,this__11278.method_cache,this__11278.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11281))
{var target_fn__11282 = temp__3971__auto____11281;
return target_fn__11282;
} else
{return cljs.core.deref.call(null,this__11278.method_table).call(null,this__11278.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11283 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11283.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11283.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11283.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11283.method_cache,this__11283.method_table,this__11283.cached_hierarchy,this__11283.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11284 = this;
return cljs.core.deref.call(null,this__11284.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11285 = this;
return cljs.core.deref.call(null,this__11285.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11286 = this;
return cljs.core.do_dispatch.call(null,mf,this__11286.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11288__delegate = function (_,args){
var self__11287 = this;
return cljs.core._dispatch.call(null,self__11287,args);
};
var G__11288 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11288__delegate.call(this, _, args);
};
G__11288.cljs$lang$maxFixedArity = 1;
G__11288.cljs$lang$applyTo = (function (arglist__11289){
var _ = cljs.core.first(arglist__11289);
var args = cljs.core.rest(arglist__11289);
return G__11288__delegate(_, args);
});
G__11288.cljs$lang$arity$variadic = G__11288__delegate;
return G__11288;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11290 = this;
return cljs.core._dispatch.call(null,self__11290,args);
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
var this__11291 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11293,_){
var this__11292 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11292.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11294 = this;
var and__3822__auto____11295 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11295)
{return (this__11294.uuid === other.uuid);
} else
{return and__3822__auto____11295;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11296 = this;
var this__11297 = this;
return cljs.core.pr_str.call(null,this__11297);
});
cljs.core.UUID;
