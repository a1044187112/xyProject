// Compiled by ClojureScript 1.9.494 {:static-fns true, :optimize-constants true}
goog.provide('game.lottery.betting_note');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.math.combinatorics');
game.lottery.betting_note.zhix = (function game$lottery$betting_note$zhix(bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15290_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__15290_SHARP_),cljs.core.count(bet));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15291_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(p1__15291_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,bet))));
});
goog.exportSymbol('game.lottery.betting_note.zhix', game.lottery.betting_note.zhix);
game.lottery.betting_note.zhix1 = (function game$lottery$betting_note$zhix1(bet){
return cljs.core.clj__GT_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,bet));
});
goog.exportSymbol('game.lottery.betting_note.zhix1', game.lottery.betting_note.zhix1);
game.lottery.betting_note.danshi = (function game$lottery$betting_note$danshi(n){
return (function (zhus){
return cljs.core.clj__GT_js(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (zhu){
var z = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(zhu));
var and__6783__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(zhu));
if(and__6783__auto__){
return z;
} else {
return and__6783__auto__;
}
}),zhus)));
});
});
goog.exportSymbol('game.lottery.betting_note.danshi', game.lottery.betting_note.danshi);
game.lottery.betting_note.zux = (function game$lottery$betting_note$zux(n){
return (function (bet){
return cljs.core.clj__GT_js(clojure.math.combinatorics.combinations(bet,n));
});
});
goog.exportSymbol('game.lottery.betting_note.zux', game.lottery.betting_note.zux);
game.lottery.betting_note.dt = (function game$lottery$betting_note$dt(cnt){

return (function (p__15297){
var vec__15298 = p__15297;
var dan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298,(0),null);
var tuo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298,(1),null);
return cljs.core.clj__GT_js((function (){var dan_count = cljs.core.count(dan);
if((((0) < dan_count)) && ((dan_count < cnt))){
var tuo__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (dan_count,vec__15298,dan,tuo){
return (function (p1__15292_SHARP_){
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p1__15292_SHARP_], true),dan));
});})(dan_count,vec__15298,dan,tuo))
,tuo);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuo__$1,dan_count,vec__15298,dan,tuo){
return (function (t){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(t,dan);
});})(tuo__$1,dan_count,vec__15298,dan,tuo))
,clojure.math.combinatorics.combinations(tuo__$1,(cnt - dan_count)));
} else {
return null;
}
})());
});
});
goog.exportSymbol('game.lottery.betting_note.dt', game.lottery.betting_note.dt);
game.lottery.betting_note.bdw = (function game$lottery$betting_note$bdw(bet){
return cljs.core.clj__GT_js(((cljs.core.vector_QMARK_(bet))?bet:cljs.core.vec(bet)));
});
goog.exportSymbol('game.lottery.betting_note.bdw', game.lottery.betting_note.bdw);
game.lottery.betting_note.dwd = (function game$lottery$betting_note$dwd(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15308 = arguments.length;
var i__7909__auto___15309 = (0);
while(true){
if((i__7909__auto___15309 < len__7908__auto___15308)){
args__7915__auto__.push((arguments[i__7909__auto___15309]));

var G__15310 = (i__7909__auto___15309 + (1));
i__7909__auto___15309 = G__15310;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return game.lottery.betting_note.dwd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});
goog.exportSymbol('game.lottery.betting_note.dwd', game.lottery.betting_note.dwd);

game.lottery.betting_note.dwd.cljs$core$IFn$_invoke$arity$variadic = (function (bet,p__15304){
var vec__15305 = p__15304;
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,(0),null);
return cljs.core.clj__GT_js((function (){var len__$1 = (function (){var or__6795__auto__ = len;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (5);
}
})();
var indexs = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bet));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (len__$1,indexs,vec__15305,len){
return (function (p1__15301_SHARP_){
return (cljs.core.first(p1__15301_SHARP_) < len__$1);
});})(len__$1,indexs,vec__15305,len))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (len__$1,indexs,vec__15305,len){
return (function (pos,i){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (len__$1,indexs,vec__15305,len){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,n], null);
});})(len__$1,indexs,vec__15305,len))
,pos);
});})(len__$1,indexs,vec__15305,len))
,cljs.core.array_seq([bet,indexs], 0)));
})());
});

game.lottery.betting_note.dwd.cljs$lang$maxFixedArity = (1);

game.lottery.betting_note.dwd.cljs$lang$applyTo = (function (seq15302){
var G__15303 = cljs.core.first(seq15302);
var seq15302__$1 = cljs.core.next(seq15302);
return game.lottery.betting_note.dwd.cljs$core$IFn$_invoke$arity$variadic(G__15303,seq15302__$1);
});

game.lottery.betting_note.ds = (function game$lottery$betting_note$ds(dans){
return cljs.core.clj__GT_js((((cljs.core.count(dans) > (0)))?dans:null));
});
goog.exportSymbol('game.lottery.betting_note.ds', game.lottery.betting_note.ds);
game.lottery.betting_note.zhongw = (function game$lottery$betting_note$zhongw(zhongs){
return cljs.core.clj__GT_js((((cljs.core.count(zhongs) > (0)))?zhongs:null));
});
goog.exportSymbol('game.lottery.betting_note.zhongw', game.lottery.betting_note.zhongw);
/**
 * 任选
 */
game.lottery.betting_note.renx = (function game$lottery$betting_note$renx(n){
return (function (bet){
return cljs.core.clj__GT_js(clojure.math.combinatorics.combinations(bet,n));
});
});
goog.exportSymbol('game.lottery.betting_note.renx', game.lottery.betting_note.renx);
game.lottery.betting_note.xingzu = (function game$lottery$betting_note$xingzu(len){
return (function() { 
var G__15319__delegate = function (bet,p__15315){
var vec__15316 = p__15315;
var iscount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
return cljs.core.clj__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(bet),len))?(function (){var notes = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,bet);
if(cljs.core.truth_(iscount)){
return (len * cljs.core.count(notes));
} else {
return notes;
}
})():null));
};
var G__15319 = function (bet,var_args){
var p__15315 = null;
if (arguments.length > 1) {
var G__15320__i = 0, G__15320__a = new Array(arguments.length -  1);
while (G__15320__i < G__15320__a.length) {G__15320__a[G__15320__i] = arguments[G__15320__i + 1]; ++G__15320__i;}
  p__15315 = new cljs.core.IndexedSeq(G__15320__a,0);
} 
return G__15319__delegate.call(this,bet,p__15315);};
G__15319.cljs$lang$maxFixedArity = 1;
G__15319.cljs$lang$applyTo = (function (arglist__15321){
var bet = cljs.core.first(arglist__15321);
var p__15315 = cljs.core.rest(arglist__15321);
return G__15319__delegate(bet,p__15315);
});
G__15319.cljs$core$IFn$_invoke$arity$variadic = G__15319__delegate;
return G__15319;
})()
;
});
goog.exportSymbol('game.lottery.betting_note.xingzu', game.lottery.betting_note.xingzu);
game.lottery.betting_note.zuxuanchongdan = (function game$lottery$betting_note$zuxuanchongdan(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15333 = arguments.length;
var i__7909__auto___15334 = (0);
while(true){
if((i__7909__auto___15334 < len__7908__auto___15333)){
args__7915__auto__.push((arguments[i__7909__auto___15334]));

var G__15335 = (i__7909__auto___15334 + (1));
i__7909__auto___15334 = G__15335;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return game.lottery.betting_note.zuxuanchongdan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});
goog.exportSymbol('game.lottery.betting_note.zuxuanchongdan', game.lottery.betting_note.zuxuanchongdan);

game.lottery.betting_note.zuxuanchongdan.cljs$core$IFn$_invoke$arity$variadic = (function (cc,p__15325){
var vec__15326 = p__15325;
var cn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,(1),null);
var cn__$1 = (function (){var or__6795__auto__ = cn;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (1);
}
})();
var len__$1 = (function (){var or__6795__auto__ = len;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (5);
}
})();
var cnd = (len__$1 - (cc * cn__$1));
return ((function (cn__$1,len__$1,cnd,vec__15326,cn,len){
return (function (p__15329){
var vec__15330 = p__15329;
var chong = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15330,(0),null);
var dan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15330,(1),null);
return cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len){
return (function (c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,d,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cc,c));
});})(vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len){
return (function (p1__15322_SHARP_){
return cljs.core.not(cljs.core.some(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(c)))),p1__15322_SHARP_));
});})(vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len))
,clojure.math.combinatorics.combinations(dan,cnd)));
});})(vec__15330,chong,dan,cn__$1,len__$1,cnd,vec__15326,cn,len))
,cljs.core.array_seq([clojure.math.combinatorics.combinations(chong,cn__$1)], 0)));
});
;})(cn__$1,len__$1,cnd,vec__15326,cn,len))
});

game.lottery.betting_note.zuxuanchongdan.cljs$lang$maxFixedArity = (1);

game.lottery.betting_note.zuxuanchongdan.cljs$lang$applyTo = (function (seq15323){
var G__15324 = cljs.core.first(seq15323);
var seq15323__$1 = cljs.core.next(seq15323);
return game.lottery.betting_note.zuxuanchongdan.cljs$core$IFn$_invoke$arity$variadic(G__15324,seq15323__$1);
});

game.lottery.betting_note.zuxuan2chong = (function game$lottery$betting_note$zuxuan2chong(cc1,cc2){
return (function (p__15342){
var vec__15343 = p__15342;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(1),null);
return cljs.core.clj__GT_js((function (){var notes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__15343,c1,c2){
return (function (p1__15336_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__15336_SHARP_),cljs.core.second(p1__15336_SHARP_));
});})(vec__15343,c1,c2))
,clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c1,c2], 0)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,vec__15343,c1,c2){
return (function (p1__15337_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cc1,cljs.core.first(p1__15337_SHARP_)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cc2,cljs.core.second(p1__15337_SHARP_)));
});})(notes,vec__15343,c1,c2))
,notes);
})());
});
});
goog.exportSymbol('game.lottery.betting_note.zuxuan2chong', game.lottery.betting_note.zuxuan2chong);
game.lottery.betting_note.wuxingteshu = (function game$lottery$betting_note$wuxingteshu(bet){
return cljs.core.clj__GT_js(bet);
});
goog.exportSymbol('game.lottery.betting_note.wuxingteshu', game.lottery.betting_note.wuxingteshu);
game.lottery.betting_note.baijia = (function game$lottery$betting_note$baijia(bet){
return cljs.core.clj__GT_js(bet);
});
goog.exportSymbol('game.lottery.betting_note.baijia', game.lottery.betting_note.baijia);
game.lottery.betting_note.zuxuanchong_xxx = (function game$lottery$betting_note$zuxuanchong_xxx(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15351 = arguments.length;
var i__7909__auto___15352 = (0);
while(true){
if((i__7909__auto___15352 < len__7908__auto___15351)){
args__7915__auto__.push((arguments[i__7909__auto___15352]));

var G__15353 = (i__7909__auto___15352 + (1));
i__7909__auto___15352 = G__15353;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((0) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((0)),(0),null)):null);
return game.lottery.betting_note.zuxuanchong_xxx.cljs$core$IFn$_invoke$arity$variadic(argseq__7916__auto__);
});
goog.exportSymbol('game.lottery.betting_note.zuxuanchong_xxx', game.lottery.betting_note.zuxuanchong_xxx);

game.lottery.betting_note.zuxuanchong_xxx.cljs$core$IFn$_invoke$arity$variadic = (function (p__15347){
var vec__15348 = p__15347;
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15348,(0),null);
var cn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15348,(1),null);
var cc__$1 = (function (){var or__6795__auto__ = cc;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (2);
}
})();
var cn__$1 = (function (){var or__6795__auto__ = cn;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (2);
}
})();
return ((function (cc__$1,cn__$1,vec__15348,cc,cn){
return (function (bet){
return cljs.core.clj__GT_js((function (){var nodes = clojure.math.combinatorics.combinations(bet,cn__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes,cc__$1,cn__$1,vec__15348,cc,cn){
return (function (n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cc__$1,n));
});})(nodes,cc__$1,cn__$1,vec__15348,cc,cn))
,nodes);
})());
});
;})(cc__$1,cn__$1,vec__15348,cc,cn))
});

game.lottery.betting_note.zuxuanchong_xxx.cljs$lang$maxFixedArity = (0);

game.lottery.betting_note.zuxuanchong_xxx.cljs$lang$applyTo = (function (seq15346){
return game.lottery.betting_note.zuxuanchong_xxx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15346));
});

game.lottery.betting_note.zuxbaodan = (function game$lottery$betting_note$zuxbaodan(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15363 = arguments.length;
var i__7909__auto___15364 = (0);
while(true){
if((i__7909__auto___15364 < len__7908__auto___15363)){
args__7915__auto__.push((arguments[i__7909__auto___15364]));

var G__15365 = (i__7909__auto___15364 + (1));
i__7909__auto___15364 = G__15365;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((0) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((0)),(0),null)):null);
return game.lottery.betting_note.zuxbaodan.cljs$core$IFn$_invoke$arity$variadic(argseq__7916__auto__);
});
goog.exportSymbol('game.lottery.betting_note.zuxbaodan', game.lottery.betting_note.zuxbaodan);

game.lottery.betting_note.zuxbaodan.cljs$core$IFn$_invoke$arity$variadic = (function (p__15355){
var vec__15356 = p__15355;
var mc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356,(0),null);
var mc__$1 = (function (){var or__6795__auto__ = mc;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (54);
}
})();
return ((function (mc__$1,vec__15356,mc){
return (function() { 
var G__15366__delegate = function (bet,p__15359){
var vec__15360 = p__15359;
var iscount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15360,(0),null);
return cljs.core.clj__GT_js((cljs.core.truth_(iscount)?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(bet),(1)))?(0):mc__$1):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(bet),(1)))?cljs.core.PersistentVector.EMPTY:bet)));
};
var G__15366 = function (bet,var_args){
var p__15359 = null;
if (arguments.length > 1) {
var G__15367__i = 0, G__15367__a = new Array(arguments.length -  1);
while (G__15367__i < G__15367__a.length) {G__15367__a[G__15367__i] = arguments[G__15367__i + 1]; ++G__15367__i;}
  p__15359 = new cljs.core.IndexedSeq(G__15367__a,0);
} 
return G__15366__delegate.call(this,bet,p__15359);};
G__15366.cljs$lang$maxFixedArity = 1;
G__15366.cljs$lang$applyTo = (function (arglist__15368){
var bet = cljs.core.first(arglist__15368);
var p__15359 = cljs.core.rest(arglist__15368);
return G__15366__delegate(bet,p__15359);
});
G__15366.cljs$core$IFn$_invoke$arity$variadic = G__15366__delegate;
return G__15366;
})()
;
;})(mc__$1,vec__15356,mc))
});

game.lottery.betting_note.zuxbaodan.cljs$lang$maxFixedArity = (0);

game.lottery.betting_note.zuxbaodan.cljs$lang$applyTo = (function (seq15354){
return game.lottery.betting_note.zuxbaodan.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15354));
});

game.lottery.betting_note.hemap_fn = (function game$lottery$betting_note$hemap_fn(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15381 = arguments.length;
var i__7909__auto___15382 = (0);
while(true){
if((i__7909__auto___15382 < len__7908__auto___15381)){
args__7915__auto__.push((arguments[i__7909__auto___15382]));

var G__15383 = (i__7909__auto___15382 + (1));
i__7909__auto___15382 = G__15383;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return game.lottery.betting_note.hemap_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});

game.lottery.betting_note.hemap_fn.cljs$core$IFn$_invoke$arity$variadic = (function (hemap,p__15373){
var vec__15374 = p__15373;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15374,(0),null);
var pos__$1 = (function (){var or__6795__auto__ = pos;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (0);
}
})();
return ((function (pos__$1,vec__15374,pos){
return (function() { 
var G__15384__delegate = function (bet,p__15377){
var vec__15378 = p__15377;
var iscount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15378,(0),null);
return cljs.core.clj__GT_js((function (){var len = cljs.core.count(hemap);
var bet__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (len,vec__15378,iscount,pos__$1,vec__15374,pos){
return (function (p1__15369_SHARP_){
return !((p1__15369_SHARP_ >= (len + pos__$1)));
});})(len,vec__15378,iscount,pos__$1,vec__15374,pos))
,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(bet));
if(cljs.core.truth_(iscount)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (len,bet__$1,vec__15378,iscount,pos__$1,vec__15374,pos){
return (function (p1__15370_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hemap,(p1__15370_SHARP_ - pos__$1));
});})(len,bet__$1,vec__15378,iscount,pos__$1,vec__15374,pos))
,bet__$1));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bet,bet__$1,cljs.core.cst$kw$hemap,hemap], null);
}
})());
};
var G__15384 = function (bet,var_args){
var p__15377 = null;
if (arguments.length > 1) {
var G__15385__i = 0, G__15385__a = new Array(arguments.length -  1);
while (G__15385__i < G__15385__a.length) {G__15385__a[G__15385__i] = arguments[G__15385__i + 1]; ++G__15385__i;}
  p__15377 = new cljs.core.IndexedSeq(G__15385__a,0);
} 
return G__15384__delegate.call(this,bet,p__15377);};
G__15384.cljs$lang$maxFixedArity = 1;
G__15384.cljs$lang$applyTo = (function (arglist__15386){
var bet = cljs.core.first(arglist__15386);
var p__15377 = cljs.core.rest(arglist__15386);
return G__15384__delegate(bet,p__15377);
});
G__15384.cljs$core$IFn$_invoke$arity$variadic = G__15384__delegate;
return G__15384;
})()
;
;})(pos__$1,vec__15374,pos))
});

game.lottery.betting_note.hemap_fn.cljs$lang$maxFixedArity = (1);

game.lottery.betting_note.hemap_fn.cljs$lang$applyTo = (function (seq15371){
var G__15372 = cljs.core.first(seq15371);
var seq15371__$1 = cljs.core.next(seq15371);
return game.lottery.betting_note.hemap_fn.cljs$core$IFn$_invoke$arity$variadic(G__15372,seq15371__$1);
});

game.lottery.betting_note.zhixhe3 = game.lottery.betting_note.hemap_fn(new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(6),(10),(15),(21),(28),(36),(45),(55),(63),(69),(73),(75),(75),(73),(69),(63),(55),(45),(36),(28),(21),(15),(10),(6),(3),(1)], null));
goog.exportSymbol('game.lottery.betting_note.zhixhe3', game.lottery.betting_note.zhixhe3);
game.lottery.betting_note.zhixkd3 = game.lottery.betting_note.hemap_fn(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(54),(96),(126),(144),(150),(144),(126),(96),(54)], null));
goog.exportSymbol('game.lottery.betting_note.zhixkd3', game.lottery.betting_note.zhixkd3);
game.lottery.betting_note.zuxhe3 = game.lottery.betting_note.hemap_fn.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(4),(5),(6),(8),(10),(11),(13),(14),(14),(15),(15),(14),(14),(13),(11),(10),(8),(6),(5),(4),(2),(2),(1)], null),cljs.core.array_seq([(1)], 0));
goog.exportSymbol('game.lottery.betting_note.zuxhe3', game.lottery.betting_note.zuxhe3);
game.lottery.betting_note.zhixhe2 = game.lottery.betting_note.hemap_fn(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(9),(8),(7),(6),(5),(4),(3),(2),(1)], null));
goog.exportSymbol('game.lottery.betting_note.zhixhe2', game.lottery.betting_note.zhixhe2);
game.lottery.betting_note.zhixkd2 = game.lottery.betting_note.hemap_fn(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(18),(16),(14),(12),(10),(8),(6),(4),(2)], null));
goog.exportSymbol('game.lottery.betting_note.zhixkd2', game.lottery.betting_note.zhixkd2);
game.lottery.betting_note.zuxhe2 = game.lottery.betting_note.hemap_fn.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(2),(3),(3),(4),(4),(5),(4),(4),(3),(3),(2),(2),(1),(1)], null),cljs.core.array_seq([(1)], 0));
goog.exportSymbol('game.lottery.betting_note.zuxhe2', game.lottery.betting_note.zuxhe2);
game.lottery.betting_note.zhixdanshi = (function game$lottery$betting_note$zhixdanshi(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15393 = arguments.length;
var i__7909__auto___15394 = (0);
while(true){
if((i__7909__auto___15394 < len__7908__auto___15393)){
args__7915__auto__.push((arguments[i__7909__auto___15394]));

var G__15395 = (i__7909__auto___15394 + (1));
i__7909__auto___15394 = G__15395;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((0) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((0)),(0),null)):null);
return game.lottery.betting_note.zhixdanshi.cljs$core$IFn$_invoke$arity$variadic(argseq__7916__auto__);
});
goog.exportSymbol('game.lottery.betting_note.zhixdanshi', game.lottery.betting_note.zhixdanshi);

game.lottery.betting_note.zhixdanshi.cljs$core$IFn$_invoke$arity$variadic = (function (p__15389){
var vec__15390 = p__15389;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15390,(0),null);
var n__$1 = (function (){var or__6795__auto__ = n;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (3);
}
})();
return ((function (n__$1,vec__15390,n){
return (function (bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (n__$1,vec__15390,n){
return (function (p1__15387_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__15387_SHARP_),n__$1);
});})(n__$1,vec__15390,n))
,bet));
});
;})(n__$1,vec__15390,n))
});

game.lottery.betting_note.zhixdanshi.cljs$lang$maxFixedArity = (0);

game.lottery.betting_note.zhixdanshi.cljs$lang$applyTo = (function (seq15388){
return game.lottery.betting_note.zhixdanshi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15388));
});

game.lottery.betting_note.zhixdanshi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(2)], 0)).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null)], null));
game.lottery.betting_note.zuxfushi3 = (function game$lottery$betting_note$zuxfushi3(bet){
var notes = clojure.math.combinatorics.combinations(bet,(2));
return cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (notes){
return (function (n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes){
return (function (p1__15396_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15396_SHARP_], null));
});})(notes))
,n);
});})(notes))
,cljs.core.array_seq([notes], 0)));
});
goog.exportSymbol('game.lottery.betting_note.zuxfushi3', game.lottery.betting_note.zuxfushi3);
game.lottery.betting_note.zuxdanshi3 = (function game$lottery$betting_note$zuxdanshi3(bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15397_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__15397_SHARP_),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(p1__15397_SHARP_)),(2)));
}),bet));
});
goog.exportSymbol('game.lottery.betting_note.zuxdanshi3', game.lottery.betting_note.zuxdanshi3);
game.lottery.betting_note.zuxfushi6 = (function game$lottery$betting_note$zuxfushi6(bet){
var notes = clojure.math.combinatorics.combinations(bet,(2));
return cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (notes){
return (function (n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes){
return (function (p1__15398_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15398_SHARP_], null));
});})(notes))
,n);
});})(notes))
,cljs.core.array_seq([notes], 0)));
});
goog.exportSymbol('game.lottery.betting_note.zuxfushi6', game.lottery.betting_note.zuxfushi6);
game.lottery.betting_note.zuxdanshi6 = (function game$lottery$betting_note$zuxdanshi6(bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(p1__15399_SHARP_),cljs.core.count(cljs.core.set(p1__15399_SHARP_)),cljs.core.array_seq([(3)], 0));
}),bet));
});
goog.exportSymbol('game.lottery.betting_note.zuxdanshi6', game.lottery.betting_note.zuxdanshi6);
game.lottery.betting_note.zuxhunhe3 = (function game$lottery$betting_note$zuxhunhe3(bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15400_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__15400_SHARP_),(3))) && (((1) < cljs.core.count(cljs.core.set(p1__15400_SHARP_))));
}),bet));
});
goog.exportSymbol('game.lottery.betting_note.zuxhunhe3', game.lottery.betting_note.zuxhunhe3);
game.lottery.betting_note.hewei = (function game$lottery$betting_note$hewei(bet){
return cljs.core.clj__GT_js(bet);
});
goog.exportSymbol('game.lottery.betting_note.hewei', game.lottery.betting_note.hewei);
game.lottery.betting_note.teshuhao = (function game$lottery$betting_note$teshuhao(bet){
return cljs.core.clj__GT_js(bet);
});
goog.exportSymbol('game.lottery.betting_note.teshuhao', game.lottery.betting_note.teshuhao);
game.lottery.betting_note.zuxfushi2 = (function game$lottery$betting_note$zuxfushi2(bet){
return cljs.core.clj__GT_js(clojure.math.combinatorics.combinations(bet,(2)));
});
goog.exportSymbol('game.lottery.betting_note.zuxfushi2', game.lottery.betting_note.zuxfushi2);
game.lottery.betting_note.zuxdanshi2 = (function game$lottery$betting_note$zuxdanshi2(bet){
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15401_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(p1__15401_SHARP_),cljs.core.count(cljs.core.set(p1__15401_SHARP_)),cljs.core.array_seq([(2)], 0));
}),bet));
});
goog.exportSymbol('game.lottery.betting_note.zuxdanshi2', game.lottery.betting_note.zuxdanshi2);
