// Compiled by ClojureScript 1.9.494 {:static-fns true, :optimize-constants true}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__7583__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__14448(s__14449){
return (new cljs.core.LazySeq(null,(function (){
var s__14449__$1 = s__14449;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14449__$1);
if(temp__4657__auto__){
var s__14449__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14449__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14449__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14451 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14450 = (0);
while(true){
if((i__14450 < size__7582__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14450);
cljs.core.chunk_append(b__14451,((j + cnt) + (- (n + (1)))));

var G__14456 = (i__14450 + (1));
i__14450 = G__14456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14451),clojure$math$combinatorics$index_combinations_$_iter__14448(cljs.core.chunk_rest(s__14449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14451),null);
}
} else {
var j = cljs.core.first(s__14449__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__14448(cljs.core.rest(s__14449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__14457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__14458 = (j__$1 - (1));
c__$3 = G__14457;
j__$1 = G__14458;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__14459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__14460 = (index__$1 + (1));
var G__14461 = (already_distributed__$1 + mi);
distribution__$1 = G__14459;
index__$1 = G__14460;
already_distributed__$1 = G__14461;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__14468 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14468,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__14471 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14471,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14471,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14471,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__14474 = distribution__$2;
distribution__$1 = G__14474;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__4657__auto__)){
var next_step = temp__4657__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__7583__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__14563(s__14564){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__14564__$1 = s__14564;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14564__$1);
if(temp__4657__auto__){
var s__14564__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14564__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14564__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14566 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14565 = (0);
while(true){
if((i__14565 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14565);
cljs.core.chunk_append(b__14566,(function (){var G__14571 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14571) : f.call(null,G__14571));
})());

var G__14651 = (i__14565 + (1));
i__14565 = G__14651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14566),clojure$math$combinatorics$multi_comb_$_iter__14563(cljs.core.chunk_rest(s__14564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14566),null);
}
} else {
var i = cljs.core.first(s__14564__$2);
return cljs.core.cons((function (){var G__14572 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14572) : f.call(null,G__14572));
})(),clojure$math$combinatorics$multi_comb_$_iter__14563(cljs.core.rest(s__14564__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__7583__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__7583__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__14573(s__14574){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__14574__$1 = s__14574;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14574__$1);
if(temp__4657__auto__){
var s__14574__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14574__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14574__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14576 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14575 = (0);
while(true){
if((i__14575 < size__7582__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14575);
cljs.core.chunk_append(b__14576,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (i__14575,q,c__7581__auto__,size__7582__auto__,b__14576,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14615(s__14616){
return (new cljs.core.LazySeq(null,((function (i__14575,q,c__7581__auto__,size__7582__auto__,b__14576,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__14616__$1 = s__14616;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__14616__$1);
if(temp__4657__auto____$1){
var s__14616__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14616__$2)){
var c__7581__auto____$1 = cljs.core.chunk_first(s__14616__$2);
var size__7582__auto____$1 = cljs.core.count(c__7581__auto____$1);
var b__14618 = cljs.core.chunk_buffer(size__7582__auto____$1);
if((function (){var i__14617 = (0);
while(true){
if((i__14617 < size__7582__auto____$1)){
var vec__14627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto____$1,i__14617);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14627,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14627,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14627,(2),null);
cljs.core.chunk_append(b__14618,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__14652 = (i__14617 + (1));
i__14617 = G__14652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14618),clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14615(cljs.core.chunk_rest(s__14616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14618),null);
}
} else {
var vec__14630 = cljs.core.first(s__14616__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14615(cljs.core.rest(s__14616__$2)));
}
} else {
return null;
}
break;
}
});})(i__14575,q,c__7581__auto__,size__7582__auto__,b__14576,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(i__14575,q,c__7581__auto__,size__7582__auto__,b__14576,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__7583__auto__(q);
})()));

var G__14653 = (i__14575 + (1));
i__14575 = G__14653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14576),clojure$math$combinatorics$multi_comb_$_iter__14573(cljs.core.chunk_rest(s__14574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14576),null);
}
} else {
var q = cljs.core.first(s__14574__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (q,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14633(s__14634){
return (new cljs.core.LazySeq(null,((function (q,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__14634__$1 = s__14634;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__14634__$1);
if(temp__4657__auto____$1){
var s__14634__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14634__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14634__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14636 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14635 = (0);
while(true){
if((i__14635 < size__7582__auto__)){
var vec__14645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14635);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(2),null);
cljs.core.chunk_append(b__14636,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__14654 = (i__14635 + (1));
i__14635 = G__14654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14636),clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14633(cljs.core.chunk_rest(s__14634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14636),null);
}
} else {
var vec__14648 = cljs.core.first(s__14634__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__14573_$_iter__14633(cljs.core.rest(s__14634__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__14574__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__7583__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__14573(cljs.core.rest(s__14574__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__7583__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
var x__7637__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__7583__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__14662(s__14663){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__14663__$1 = s__14663;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14663__$1);
if(temp__4657__auto__){
var s__14663__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14663__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14663__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14665 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14664 = (0);
while(true){
if((i__14664 < size__7582__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14664);
cljs.core.chunk_append(b__14665,(function (){var x__7637__auto__ = item;
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})());

var G__14668 = (i__14664 + (1));
i__14664 = G__14668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14665),clojure$math$combinatorics$combinations_$_iter__14662(cljs.core.chunk_rest(s__14663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14665),null);
}
} else {
var item = cljs.core.first(s__14663__$2);
return cljs.core.cons((function (){var x__7637__auto__ = item;
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__14662(cljs.core.rest(s__14663__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__7583__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
var x__7637__auto__ = cljs.core.seq(items);
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cnt,v_items){
return (function (p1__14655_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__14655_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__14670 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__14670) : clojure.math.combinatorics.unchunk.call(null,G__14670));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),cljs.core.array_seq([clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1))))], 0));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__7915__auto__ = [];
var len__7908__auto___14673 = arguments.length;
var i__7909__auto___14674 = (0);
while(true){
if((i__7909__auto___14674 < len__7908__auto___14673)){
args__7915__auto__.push((arguments[i__7909__auto___14674]));

var G__14675 = (i__7909__auto___14674 + (1));
i__7909__auto___14674 = G__14675;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((0) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__7916__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__14676 = (i - (1));
var G__14677 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__14676;
v_seqs__$2 = G__14677;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq14671){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14671));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__14679 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__14679) : v.call(null,G__14679));
})())){
return i;
} else {
var G__14680 = (i - (1));
i = G__14680;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__14681 = (i - (1));
i = G__14681;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.array_seq([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__14682 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.array_seq([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__14683 = (k + (1));
var G__14684 = (l__$1 - (1));
v__$1 = G__14682;
k = G__14683;
l__$1 = G__14684;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__14686 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__14686) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__14686));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
var x__7637__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__6783__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__6783__auto__){
var or__6795__auto__ = cljs.core.empty_QMARK_(s);
if(or__6795__auto__){
return or__6795__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__6783__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__14697(s__14698){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__14698__$1 = s__14698;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14698__$1);
if(temp__4657__auto__){
var s__14698__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14698__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14698__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14700 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14699 = (0);
while(true){
if((i__14699 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14699);
cljs.core.chunk_append(b__14700,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14705 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14705) : f.call(null,G__14705));
})(),i));

var G__14707 = (i__14699 + (1));
i__14699 = G__14707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14700),clojure$math$combinatorics$multi_perm_$_iter__14697(cljs.core.chunk_rest(s__14698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14700),null);
}
} else {
var i = cljs.core.first(s__14698__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14706 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14706) : f.call(null,G__14706));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__14697(cljs.core.rest(s__14698__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (v){
return (function (p1__14708_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__14708_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__14709 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__14710 = (n__$1 - (1));
acc = G__14709;
n__$1 = G__14710;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__14711 = q;
var G__14712 = cljs.core.cons(r,digits);
var G__14713 = (divisor + (1));
n__$1 = G__14711;
digits = G__14712;
divisor = G__14713;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__14714 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__14715 = cljs.core.rest(l__$1);
var G__14716 = (n__$1 - (1));
acc = G__14714;
l__$1 = G__14715;
n__$1 = G__14716;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< n (factorial (count l)))")].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__14717 = cljs.core.rest(indices);
var G__14718 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__14719 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__14717;
l__$1 = G__14718;
perm = G__14719;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__7583__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__14738(s__14739){
return (new cljs.core.LazySeq(null,(function (){
var s__14739__$1 = s__14739;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14739__$1);
if(temp__4657__auto__){
var s__14739__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14739__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14739__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14741 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14740 = (0);
while(true){
if((i__14740 < size__7582__auto__)){
var vec__14750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14740);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(1),null);
cljs.core.chunk_append(b__14741,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__14756 = (i__14740 + (1));
i__14740 = G__14756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14741),clojure$math$combinatorics$initial_perm_numbers_$_iter__14738(cljs.core.chunk_rest(s__14739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14741),null);
}
} else {
var vec__14753 = cljs.core.first(s__14739__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14753,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__14738(cljs.core.rest(s__14739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7583__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__14757 = cljs.core.rest(perm_numbers__$1);
var G__14758 = (index + (1));
perm_numbers__$1 = G__14757;
index = G__14758;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__14762 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(1),null);
var G__14765 = remainder;
var G__14766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__14767 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__14765;
digits = G__14766;
freqs__$1 = G__14767;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< n (count-permutations l))")].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__14768 = clojure.math.combinatorics.dec_key(freqs,item);
var G__14769 = cljs.core.rest(indices);
var G__14770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__14768;
indices = G__14769;
perm = G__14770;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__14781(s__14782){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__14782__$1 = s__14782;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14782__$1);
if(temp__4657__auto__){
var s__14782__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14782__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14782__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14784 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14783 = (0);
while(true){
if((i__14783 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14783);
cljs.core.chunk_append(b__14784,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14789 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14789) : f.call(null,G__14789));
})(),i));

var G__14791 = (i__14783 + (1));
i__14783 = G__14791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14784),clojure$math$combinatorics$nth_permutation_$_iter__14781(cljs.core.chunk_rest(s__14782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14784),null);
}
} else {
var i = cljs.core.first(s__14782__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14790 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14790) : f.call(null,G__14790));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__14781(cljs.core.rest(s__14782__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__14802(s__14803){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__14803__$1 = s__14803;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14803__$1);
if(temp__4657__auto__){
var s__14803__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14803__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14803__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14805 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14804 = (0);
while(true){
if((i__14804 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14804);
cljs.core.chunk_append(b__14805,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14810 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14810) : f.call(null,G__14810));
})(),i));

var G__14812 = (i__14804 + (1));
i__14804 = G__14812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14805),clojure$math$combinatorics$drop_permutations_$_iter__14802(cljs.core.chunk_rest(s__14803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14805),null);
}
} else {
var i = cljs.core.first(s__14803__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14811 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14811) : f.call(null,G__14811));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__14802(cljs.core.rest(s__14803__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__14813 = n;
var G__14814 = (n - k);
n = G__14813;
k = G__14814;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__14821 = (function (){var G__14823 = new_freqs;
var G__14824 = (t - (1));
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__14823,G__14824) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__14823,G__14824));
})();
var G__14822 = (function (){var G__14825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__14826 = t;
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__14825,G__14826) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__14825,G__14826));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__14821,G__14822) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__14821,G__14822));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(items),t) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t));
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies14828 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies14828;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__14829 = n__$1;
var G__14830 = y;
var G__14831 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__14829;
y = G__14830;
z = G__14831;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__14832 = n__$1;
var G__14833 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__14834 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__14832;
y = G__14833;
z = G__14834;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__7583__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__14841(s__14842){
return (new cljs.core.LazySeq(null,(function (){
var s__14842__$1 = s__14842;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14842__$1);
if(temp__4657__auto__){
var s__14842__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14842__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14842__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14844 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14843 = (0);
while(true){
if((i__14843 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14843);
cljs.core.chunk_append(b__14844,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__14847 = (i__14843 + (1));
i__14843 = G__14847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14844),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__14841(cljs.core.chunk_rest(s__14842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14844),null);
}
} else {
var i = cljs.core.first(s__14842__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__14841(cljs.core.rest(s__14842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies14849 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies14849;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__14850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__14851 = cljs.core.rest(items__$1);
var G__14852 = (t__$1 - (1));
var G__14853 = n__$1;
comb = G__14850;
items__$1 = G__14851;
t__$1 = G__14852;
n__$1 = G__14853;
continue;
} else {
var G__14854 = comb;
var G__14855 = cljs.core.rest(items__$1);
var G__14856 = t__$1;
var G__14857 = (n__$1 - dc_dt);
comb = G__14854;
items__$1 = G__14855;
t__$1 = G__14856;
n__$1 = G__14857;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__14876(s__14877){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__14877__$1 = s__14877;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14877__$1);
if(temp__4657__auto__){
var s__14877__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14877__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14877__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14879 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14878 = (0);
while(true){
if((i__14878 < size__7582__auto__)){
var vec__14888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(1),null);
cljs.core.chunk_append(b__14879,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__14894 = (i__14878 + (1));
i__14878 = G__14894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14879),clojure$math$combinatorics$nth_combination_freqs_$_iter__14876(cljs.core.chunk_rest(s__14877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14879),null);
}
} else {
var vec__14891 = cljs.core.first(s__14877__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14891,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__14876(cljs.core.rest(s__14877__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__7583__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(remove_one_key,(t__$1 - (1))) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1))));
if((n__$1 < dc_dt)){
var G__14895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__14896 = remove_one_key;
var G__14897 = (t__$1 - (1));
var G__14898 = n__$1;
comb = G__14895;
freqs__$1 = G__14896;
t__$1 = G__14897;
n__$1 = G__14898;
continue;
} else {
var G__14899 = comb;
var G__14900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__14901 = t__$1;
var G__14902 = (n__$1 - dc_dt);
comb = G__14899;
freqs__$1 = G__14900;
t__$1 = G__14901;
n__$1 = G__14902;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< n (count-combinations items t))")].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies14914 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7583__auto__ = ((function (v,f,count_combinations_from_frequencies14914){
return (function clojure$math$combinatorics$nth_combination_$_iter__14915(s__14916){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies14914){
return (function (){
var s__14916__$1 = s__14916;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14916__$1);
if(temp__4657__auto__){
var s__14916__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14916__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14916__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14918 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14917 = (0);
while(true){
if((i__14917 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14917);
cljs.core.chunk_append(b__14918,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14923 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14923) : f.call(null,G__14923));
})(),i));

var G__14925 = (i__14917 + (1));
i__14917 = G__14925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14918),clojure$math$combinatorics$nth_combination_$_iter__14915(cljs.core.chunk_rest(s__14916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14918),null);
}
} else {
var i = cljs.core.first(s__14916__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__14924 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14924) : f.call(null,G__14924));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__14915(cljs.core.rest(s__14916__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies14914))
,null,null));
});})(v,f,count_combinations_from_frequencies14914))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies14914;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< n (count-subsets items))")].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__14926 = (size + (1));
var G__14927 = (n__$1 - num_combinations);
size = G__14926;
n__$1 = G__14927;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__14928 = cljs.core.rest(l__$1);
var G__14929 = (n + (1));
l__$1 = G__14928;
n = G__14929;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__14938 = cljs.core.rest(l__$1);
var G__14939 = (function (){var G__14934 = index;
var G__14935 = (function (){var G__14936 = clojure.math.combinatorics.factorial(n);
var G__14937 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__14936,G__14937) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__14936,G__14937));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__14934,G__14935) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__14934,G__14935));
})();
var G__14940 = (n - (1));
l__$1 = G__14938;
index = G__14939;
n = G__14940;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__14954 = cljs.core.rest(l__$1);
var G__14955 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__7583__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__14948(s__14949){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__14949__$1 = s__14949;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14949__$1);
if(temp__4657__auto__){
var s__14949__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14949__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14949__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14951 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14950 = (0);
while(true){
if((i__14950 < size__7582__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14950);
cljs.core.chunk_append(b__14951,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__14957 = (i__14950 + (1));
i__14950 = G__14957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14951),clojure$math$combinatorics$permutation_index_duplicates_$_iter__14948(cljs.core.chunk_rest(s__14949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14951),null);
}
} else {
var k = cljs.core.first(s__14949__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__14948(cljs.core.rest(s__14949__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__7583__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__7583__auto__){
return (function (p1__14941_SHARP_){
return (cljs.core.compare(p1__14941_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__7583__auto__))
,cljs.core.keys(freqs)));
})());
var G__14956 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__14954;
index = G__14955;
freqs = G__14956;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__7583__auto__ = (function clojure$math$combinatorics$init_$_iter__14964(s__14965){
return (new cljs.core.LazySeq(null,(function (){
var s__14965__$1 = s__14965;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14965__$1);
if(temp__4657__auto__){
var s__14965__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14965__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14965__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14967 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14966 = (0);
while(true){
if((i__14966 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14966);
cljs.core.chunk_append(b__14967,(function (){var x__7131__auto__ = (0);
var y__7132__auto__ = (i - ((n - s) - (-1)));
return ((x__7131__auto__ > y__7132__auto__) ? x__7131__auto__ : y__7132__auto__);
})());

var G__14970 = (i__14966 + (1));
i__14966 = G__14970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14967),clojure$math$combinatorics$init_$_iter__14964(cljs.core.chunk_rest(s__14965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14967),null);
}
} else {
var i = cljs.core.first(s__14965__$2);
return cljs.core.cons((function (){var x__7131__auto__ = (0);
var y__7132__auto__ = (i - ((n - s) - (-1)));
return ((x__7131__auto__ > y__7132__auto__) ? x__7131__auto__ : y__7132__auto__);
})(),clojure$math$combinatorics$init_$_iter__14964(cljs.core.rest(s__14965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var args14971 = [];
var len__7908__auto___14977 = arguments.length;
var i__7909__auto___14978 = (0);
while(true){
if((i__7909__auto___14978 < len__7908__auto___14977)){
args14971.push((arguments[i__7909__auto___14978]));

var G__14979 = (i__7909__auto___14978 + (1));
i__7909__auto___14978 = G__14979;
continue;
} else {
}
break;
}

var G__14973 = args14971.length;
switch (G__14973) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14971.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__6783__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__6783__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__6783__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__6783__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__6783__auto__){
var and__6783__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__6783__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__6783__auto____$1;
}
} else {
return and__6783__auto__;
}
})()){
return j;
} else {
var G__14981 = (j - (1));
j = G__14981;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__14974 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__6783__auto__ = s;
if(cljs.core.truth_(and__6783__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__6783__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__14982 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__14983 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__14984 = (i + (1));
var G__14985 = (function (){var x__7131__auto__ = current_max;
var y__7132__auto__ = (new_a_i + (1));
return ((x__7131__auto__ > y__7132__auto__) ? x__7131__auto__ : y__7132__auto__);
})();
a__$2 = G__14982;
b__$1 = G__14983;
i = G__14984;
current_max = G__14985;
continue;
} else {
var G__14986 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__14987 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__14988 = (i + (1));
var G__14989 = current_max;
a__$2 = G__14986;
b__$1 = G__14987;
i = G__14988;
current_max = G__14989;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14974,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14974,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15001 = arguments.length;
var i__7909__auto___15002 = (0);
while(true){
if((i__7909__auto___15002 < len__7908__auto___15001)){
args__7915__auto__.push((arguments[i__7909__auto___15002]));

var G__15003 = (i__7909__auto___15002 + (1));
i__7909__auto___15002 = G__15003;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__14992){
var map__14993 = p__14992;
var map__14993__$1 = ((((!((map__14993 == null)))?((((map__14993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14993):map__14993);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if((((function (){var or__6795__auto__ = from;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__6795__auto__ = to;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__6783__auto__ = from;
if(cljs.core.truth_(and__6783__auto__)){
return (from <= (1));
} else {
return and__6783__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__6783__auto__ = to;
if(cljs.core.truth_(and__6783__auto__)){
return (to >= N);
} else {
return and__6783__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__6795__auto__ = from__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__6795__auto__ = from__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (1);
}
})() <= (function (){var or__6795__auto__ = to__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return N;
}
})())) && (((function (){var or__6795__auto__ = to__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7637__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7637__auto__ = cljs.core.range.cljs$core$IFn$_invoke$arity$1(N);
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})())));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__7583__auto__ = ((function (growth_strings,from__$1,to__$1,map__14993,map__14993__$1,from,to){
return (function clojure$math$combinatorics$iter__14995(s__14996){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__14993,map__14993__$1,from,to){
return (function (){
var s__14996__$1 = s__14996;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14996__$1);
if(temp__4657__auto__){
var s__14996__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14996__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__14996__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__14998 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__14997 = (0);
while(true){
if((i__14997 < size__7582__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__14997);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__14998,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__15004 = (i__14997 + (1));
i__14997 = G__15004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14998),clojure$math$combinatorics$iter__14995(cljs.core.chunk_rest(s__14996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14998),null);
}
} else {
var growth_string = cljs.core.first(s__14996__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__14995(cljs.core.rest(s__14996__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__14993,map__14993__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__14993,map__14993__$1,from,to))
;
return iter__7583__auto__(growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq14990){
var G__14991 = cljs.core.first(seq14990);
var seq14990__$1 = cljs.core.next(seq14990);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__14991,seq14990__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15037 = arguments.length;
var i__7909__auto___15038 = (0);
while(true){
if((i__7909__auto___15038 < len__7908__auto___15037)){
args__7915__auto__.push((arguments[i__7909__auto___15038]));

var G__15039 = (i__7909__auto___15038 + (1));
i__7909__auto___15038 = G__15039;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__7583__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__15007(s__15008){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__15008__$1 = s__15008;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15008__$1);
if(temp__4657__auto__){
var s__15008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15008__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15008__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15010 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15009 = (0);
while(true){
if((i__15009 < size__7582__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15009);
cljs.core.chunk_append(b__15010,(function (){var iter__7583__auto__ = ((function (i__15009,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__15007_$_iter__15025(s__15026){
return (new cljs.core.LazySeq(null,((function (i__15009,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__15026__$1 = s__15026;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15026__$1);
if(temp__4657__auto____$1){
var s__15026__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15026__$2)){
var c__7581__auto____$1 = cljs.core.chunk_first(s__15026__$2);
var size__7582__auto____$1 = cljs.core.count(c__7581__auto____$1);
var b__15028 = cljs.core.chunk_buffer(size__7582__auto____$1);
if((function (){var i__15027 = (0);
while(true){
if((i__15027 < size__7582__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto____$1,i__15027);
cljs.core.chunk_append(b__15028,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15027,i__15009,part,c__7581__auto____$1,size__7582__auto____$1,b__15028,s__15026__$2,temp__4657__auto____$1,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15027,i__15009,part,c__7581__auto____$1,size__7582__auto____$1,b__15028,s__15026__$2,temp__4657__auto____$1,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__15040 = (i__15027 + (1));
i__15027 = G__15040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15028),clojure$math$combinatorics$iter__15007_$_iter__15025(cljs.core.chunk_rest(s__15026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15028),null);
}
} else {
var part = cljs.core.first(s__15026__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15009,part,s__15026__$2,temp__4657__auto____$1,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15009,part,s__15026__$2,temp__4657__auto____$1,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__15007_$_iter__15025(cljs.core.rest(s__15026__$2)));
}
} else {
return null;
}
break;
}
});})(i__15009,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(i__15009,parts,c__7581__auto__,size__7582__auto__,b__15010,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__7583__auto__(parts);
})());

var G__15041 = (i__15009 + (1));
i__15009 = G__15041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15010),clojure$math$combinatorics$iter__15007(cljs.core.chunk_rest(s__15008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15010),null);
}
} else {
var parts = cljs.core.first(s__15008__$2);
return cljs.core.cons((function (){var iter__7583__auto__ = ((function (parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__15007_$_iter__15031(s__15032){
return (new cljs.core.LazySeq(null,((function (parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__15032__$1 = s__15032;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15032__$1);
if(temp__4657__auto____$1){
var s__15032__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15032__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15032__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15034 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15033 = (0);
while(true){
if((i__15033 < size__7582__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15033);
cljs.core.chunk_append(b__15034,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15033,part,c__7581__auto__,size__7582__auto__,b__15034,s__15032__$2,temp__4657__auto____$1,parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15033,part,c__7581__auto__,size__7582__auto__,b__15034,s__15032__$2,temp__4657__auto____$1,parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__15042 = (i__15033 + (1));
i__15033 = G__15042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15034),clojure$math$combinatorics$iter__15007_$_iter__15031(cljs.core.chunk_rest(s__15032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15034),null);
}
} else {
var part = cljs.core.first(s__15032__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__15032__$2,temp__4657__auto____$1,parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__15032__$2,temp__4657__auto____$1,parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__15007_$_iter__15031(cljs.core.rest(s__15032__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__15008__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__7583__auto__(parts);
})(),clojure$math$combinatorics$iter__15007(cljs.core.rest(s__15008__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__7583__auto__(lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq15005){
var G__15006 = cljs.core.first(seq15005);
var seq15005__$1 = cljs.core.next(seq15005);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__15006,seq15005__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var args15043 = [];
var len__7908__auto___15088 = arguments.length;
var i__7909__auto___15089 = (0);
while(true){
if((i__7909__auto___15089 < len__7908__auto___15088)){
args15043.push((arguments[i__7909__auto___15089]));

var G__15090 = (i__7909__auto___15089 + (1));
i__7909__auto___15089 = G__15090;
continue;
} else {
}
break;
}

var G__15045 = args15043.length;
switch (G__15045) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15043.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__15046 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__15092 = (j + (1));
var G__15093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__15094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__15049 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__15049) : multiset.call(null,G__15049));
})());
var G__15095 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__15050 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__15050) : multiset.call(null,G__15050));
})());
j = G__15092;
c__$1 = G__15093;
u__$1 = G__15094;
v__$1 = G__15095;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15046,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15046,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15046,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.array_seq([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__15051 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__15096 = (j + (1));
var G__15097 = k;
var G__15098 = true;
var G__15099 = u__$2;
var G__15100 = v__$1;
var G__15101 = c__$1;
j = G__15096;
k = G__15097;
x = G__15098;
u__$1 = G__15099;
v__$1 = G__15100;
c__$1 = G__15101;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__7138__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__7139__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__7138__auto__ < y__7139__auto__) ? x__7138__auto__ : y__7139__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__15102 = j__$1;
var G__15103 = k__$1;
var G__15104 = x__$1;
var G__15105 = u__$2;
var G__15106 = v__$2;
var G__15107 = c__$2;
j = G__15102;
k = G__15103;
x = G__15104;
u__$1 = G__15105;
v__$1 = G__15106;
c__$1 = G__15107;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__15108 = j__$1;
var G__15109 = k__$1;
var G__15110 = x;
var G__15111 = u__$2;
var G__15112 = v__$2;
var G__15113 = c__$2;
j = G__15108;
k = G__15109;
x = G__15110;
u__$1 = G__15111;
v__$1 = G__15112;
c__$1 = G__15113;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(4),null);
if(cljs.core.truth_((function (){var and__6783__auto__ = r;
if(cljs.core.truth_(and__6783__auto__)){
return ((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1))));
} else {
return and__6783__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__6783__auto__ = s;
if(cljs.core.truth_(and__6783__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__6783__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__15114 = n;
var G__15115 = m;
var G__15116 = f__$1;
var G__15117 = c__$1;
var G__15118 = u__$1;
var G__15119 = v__$1;
var G__15120 = a__$1;
var G__15121 = b__$1;
var G__15122 = l__$1;
var G__15123 = r;
var G__15124 = s;
n = G__15114;
m = G__15115;
f = G__15116;
c = G__15117;
u = G__15118;
v = G__15119;
a = G__15120;
b = G__15121;
l = G__15122;
r = G__15123;
s = G__15124;
continue;
} else {
var part = (function (){var iter__7583__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15054(s__15055){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15055__$1 = s__15055;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15055__$1);
if(temp__4657__auto__){
var s__15055__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15055__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15055__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15057 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15056 = (0);
while(true){
if((i__15056 < size__7582__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15056);
cljs.core.chunk_append(b__15057,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__15074 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15074) : f.call(null,G__15074));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7583__auto__ = ((function (i__15056,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7581__auto__,size__7582__auto__,b__15057,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15054_$_iter__15075(s__15076){
return (new cljs.core.LazySeq(null,((function (i__15056,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7581__auto__,size__7582__auto__,b__15057,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15076__$1 = s__15076;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15076__$1);
if(temp__4657__auto____$1){
var s__15076__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15076__$2)){
var c__7581__auto____$1 = cljs.core.chunk_first(s__15076__$2);
var size__7582__auto____$1 = cljs.core.count(c__7581__auto____$1);
var b__15078 = cljs.core.chunk_buffer(size__7582__auto____$1);
if((function (){var i__15077 = (0);
while(true){
if((i__15077 < size__7582__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto____$1,i__15077);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__15078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__15125 = (i__15077 + (1));
i__15077 = G__15125;
continue;
} else {
var G__15126 = (i__15077 + (1));
i__15077 = G__15126;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15078),clojure$math$combinatorics$iter__15054_$_iter__15075(cljs.core.chunk_rest(s__15076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15078),null);
}
} else {
var z = cljs.core.first(s__15076__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__15054_$_iter__15075(cljs.core.rest(s__15076__$2)));
} else {
var G__15127 = cljs.core.rest(s__15076__$2);
s__15076__$1 = G__15127;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__15056,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7581__auto__,size__7582__auto__,b__15057,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__15056,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7581__auto__,size__7582__auto__,b__15057,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__15128 = (i__15056 + (1));
i__15056 = G__15128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15057),clojure$math$combinatorics$iter__15054(cljs.core.chunk_rest(s__15055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15057),null);
}
} else {
var y = cljs.core.first(s__15055__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__15081 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15081) : f.call(null,G__15081));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7583__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15054_$_iter__15082(s__15083){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15083__$1 = s__15083;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15083__$1);
if(temp__4657__auto____$1){
var s__15083__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15083__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15083__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15085 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15084 = (0);
while(true){
if((i__15084 < size__7582__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15084);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__15085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__15129 = (i__15084 + (1));
i__15084 = G__15129;
continue;
} else {
var G__15130 = (i__15084 + (1));
i__15084 = G__15130;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15085),clojure$math$combinatorics$iter__15054_$_iter__15082(cljs.core.chunk_rest(s__15083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15085),null);
}
} else {
var z = cljs.core.first(s__15083__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__15054_$_iter__15082(cljs.core.rest(s__15083__$2)));
} else {
var G__15131 = cljs.core.rest(s__15083__$2);
s__15083__$1 = G__15131;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15055__$2,temp__4657__auto__,vec__15051,u__$1,v__$1,c__$1,j,k))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__15054(cljs.core.rest(s__15055__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__15051,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__15051,u__$1,v__$1,c__$1,j,k))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__15051,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__15051,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__15144 = (j - (1));
j = G__15144;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__6783__auto__ = r;
if(cljs.core.truth_(and__6783__auto__)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j))));
} else {
return and__6783__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1)))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7583__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__15138(s__15139){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__15139__$1 = s__15139;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15139__$1);
if(temp__4657__auto__){
var s__15139__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15139__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15139__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15141 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15140 = (0);
while(true){
if((i__15140 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15140);
cljs.core.chunk_append(b__15141,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__15145 = (i__15140 + (1));
i__15140 = G__15145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15141),clojure$math$combinatorics$m5_$_iter__15138(cljs.core.chunk_rest(s__15139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15141),null);
}
} else {
var i = cljs.core.first(s__15139__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__15138(cljs.core.rest(s__15139__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__15146 = cljs.core.rest(ks);
var G__15147 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__15146;
v__$2 = G__15147;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__7131__auto__ = (0);
var y__7132__auto__ = (min_partitions_after_this - diff_uv);
return ((x__7131__auto__ > y__7132__auto__) ? x__7131__auto__ : y__7132__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__15148 = (k_1 - (1));
var G__15149 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__15150 = (amount - vk);
k_1 = G__15148;
v__$3 = G__15149;
amount = G__15150;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15276 = arguments.length;
var i__7909__auto___15277 = (0);
while(true){
if((i__7909__auto___15277 < len__7908__auto___15276)){
args__7915__auto__.push((arguments[i__7909__auto___15277]));

var G__15278 = (i__7909__auto___15277 + (1));
i__7909__auto___15277 = G__15278;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__15153){
var map__15154 = p__15153;
var map__15154__$1 = ((((!((map__15154 == null)))?((((map__15154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15154):map__15154);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15154__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15154__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if((((function (){var or__6795__auto__ = from;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__6795__auto__ = to;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__6783__auto__ = from;
if(cljs.core.truth_(and__6783__auto__)){
return (from <= (1));
} else {
return and__6783__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__6783__auto__ = to;
if(cljs.core.truth_(and__6783__auto__)){
return (to >= N);
} else {
return and__6783__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__6795__auto__ = from__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__6795__auto__ = from__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return (1);
}
})() <= (function (){var or__6795__auto__ = to__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return N;
}
})())) && (((function (){var or__6795__auto__ = to__$1;
if(cljs.core.truth_(or__6795__auto__)){
return or__6795__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7637__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7637__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7637__auto__ = cljs.core.first(items__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7637__auto__);
})())));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7583__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function clojure$math$combinatorics$iter__15156(s__15157){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (){
var s__15157__$1 = s__15157;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15157__$1);
if(temp__4657__auto__){
var s__15157__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15157__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15157__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15159 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15158 = (0);
while(true){
if((i__15158 < size__7582__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15158);
var j = (i + (1));
cljs.core.chunk_append(b__15159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__15164 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__15164) : freqs.call(null,G__15164));
})()], null));

var G__15279 = (i__15158 + (1));
i__15158 = G__15279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15159),clojure$math$combinatorics$iter__15156(cljs.core.chunk_rest(s__15157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15159),null);
}
} else {
var i = cljs.core.first(s__15157__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__15165 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__15165) : freqs.call(null,G__15165));
})()], null),clojure$math$combinatorics$iter__15156(cljs.core.rest(s__15157__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
;
return iter__7583__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__7583__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function clojure$math$combinatorics$iter__15166(s__15167){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (){
var s__15167__$1 = s__15167;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15167__$1);
if(temp__4657__auto__){
var s__15167__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15167__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15167__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15169 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15168 = (0);
while(true){
if((i__15168 < size__7582__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15168);
cljs.core.chunk_append(b__15169,(function (){var iter__7583__auto__ = ((function (i__15168,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function clojure$math$combinatorics$iter__15166_$_iter__15224(s__15225){
return (new cljs.core.LazySeq(null,((function (i__15168,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (){
var s__15225__$1 = s__15225;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15225__$1);
if(temp__4657__auto____$1){
var s__15225__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15225__$2)){
var c__7581__auto____$1 = cljs.core.chunk_first(s__15225__$2);
var size__7582__auto____$1 = cljs.core.count(c__7581__auto____$1);
var b__15227 = cljs.core.chunk_buffer(size__7582__auto____$1);
if((function (){var i__15226 = (0);
while(true){
if((i__15226 < size__7582__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto____$1,i__15226);
cljs.core.chunk_append(b__15227,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__15226,i__15168,multiset,c__7581__auto____$1,size__7582__auto____$1,b__15227,s__15225__$2,temp__4657__auto____$1,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (p__15240){
var vec__15241 = p__15240;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15244 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15244) : ditems.call(null,G__15244));
})());
});})(i__15226,i__15168,multiset,c__7581__auto____$1,size__7582__auto____$1,b__15227,s__15225__$2,temp__4657__auto____$1,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,cljs.core.array_seq([multiset], 0))));

var G__15280 = (i__15226 + (1));
i__15226 = G__15280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15227),clojure$math$combinatorics$iter__15166_$_iter__15224(cljs.core.chunk_rest(s__15225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15227),null);
}
} else {
var multiset = cljs.core.first(s__15225__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__15168,multiset,s__15225__$2,temp__4657__auto____$1,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (p__15245){
var vec__15246 = p__15245;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15249 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15249) : ditems.call(null,G__15249));
})());
});})(i__15168,multiset,s__15225__$2,temp__4657__auto____$1,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,cljs.core.array_seq([multiset], 0))),clojure$math$combinatorics$iter__15166_$_iter__15224(cljs.core.rest(s__15225__$2)));
}
} else {
return null;
}
break;
}
});})(i__15168,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,null,null));
});})(i__15168,part,c__7581__auto__,size__7582__auto__,b__15169,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
;
return iter__7583__auto__(part);
})());

var G__15281 = (i__15168 + (1));
i__15168 = G__15281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15169),clojure$math$combinatorics$iter__15166(cljs.core.chunk_rest(s__15167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15169),null);
}
} else {
var part = cljs.core.first(s__15167__$2);
return cljs.core.cons((function (){var iter__7583__auto__ = ((function (part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function clojure$math$combinatorics$iter__15166_$_iter__15250(s__15251){
return (new cljs.core.LazySeq(null,((function (part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (){
var s__15251__$1 = s__15251;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15251__$1);
if(temp__4657__auto____$1){
var s__15251__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15251__$2)){
var c__7581__auto__ = cljs.core.chunk_first(s__15251__$2);
var size__7582__auto__ = cljs.core.count(c__7581__auto__);
var b__15253 = cljs.core.chunk_buffer(size__7582__auto__);
if((function (){var i__15252 = (0);
while(true){
if((i__15252 < size__7582__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7581__auto__,i__15252);
cljs.core.chunk_append(b__15253,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__15252,multiset,c__7581__auto__,size__7582__auto__,b__15253,s__15251__$2,temp__4657__auto____$1,part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (p__15266){
var vec__15267 = p__15266;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15267,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15267,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15270 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15270) : ditems.call(null,G__15270));
})());
});})(i__15252,multiset,c__7581__auto__,size__7582__auto__,b__15253,s__15251__$2,temp__4657__auto____$1,part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,cljs.core.array_seq([multiset], 0))));

var G__15282 = (i__15252 + (1));
i__15252 = G__15282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15253),clojure$math$combinatorics$iter__15166_$_iter__15250(cljs.core.chunk_rest(s__15251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15253),null);
}
} else {
var multiset = cljs.core.first(s__15251__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (multiset,s__15251__$2,temp__4657__auto____$1,part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to){
return (function (p__15271){
var vec__15272 = p__15271;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15275 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15275) : ditems.call(null,G__15275));
})());
});})(multiset,s__15251__$2,temp__4657__auto____$1,part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,cljs.core.array_seq([multiset], 0))),clojure$math$combinatorics$iter__15166_$_iter__15250(cljs.core.rest(s__15251__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,null,null));
});})(part,s__15167__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
;
return iter__7583__auto__(part);
})(),clojure$math$combinatorics$iter__15166(cljs.core.rest(s__15167__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15154,map__15154__$1,from,to))
;
return iter__7583__auto__(parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq15151){
var G__15152 = cljs.core.first(seq15151);
var seq15151__$1 = cljs.core.next(seq15151);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__15152,seq15151__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__7915__auto__ = [];
var len__7908__auto___15285 = arguments.length;
var i__7909__auto___15286 = (0);
while(true){
if((i__7909__auto___15286 < len__7908__auto___15285)){
args__7915__auto__.push((arguments[i__7909__auto___15286]));

var G__15287 = (i__7909__auto___15286 + (1));
i__7909__auto___15286 = G__15287;
continue;
} else {
}
break;
}

var argseq__7916__auto__ = ((((1) < args__7915__auto__.length))?(new cljs.core.IndexedSeq(args__7915__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7916__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq15283){
var G__15284 = cljs.core.first(seq15283);
var seq15283__$1 = cljs.core.next(seq15283);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__15284,seq15283__$1);
});

