(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{pQIV:function(s,t,r){"use strict";r.r(t),r.d(t,"LogsModule",(function(){return l}));var n=r("tyNb"),e=r("fXoL");const c=function(){return{status:"open"}},o=function(){return{status:"closed"}},a=function(){return["closed","open"]},u=function(s){return{status:s}},i=[{path:"",component:(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Db({type:s,selectors:[["app-logs"]],decls:10,vars:0,consts:[["routerLink","abcd","queryParamsHandling","merge"],["routerLink","efgh","queryParamsHandling","merge"],["routerLink","ijkl","queryParamsHandling","merge"]],template:function(s,t){1&s&&(e.Pb(0,"h1"),e.xc(1,"Logs"),e.Ob(),e.Pb(2,"a",0),e.xc(3,"Log abcd"),e.Ob(),e.Kb(4,"br"),e.Pb(5,"a",1),e.xc(6,"Log efgh"),e.Ob(),e.Kb(7,"br"),e.Pb(8,"a",2),e.xc(9,"Log ijkl"),e.Ob())},directives:[n.f],styles:[""]}),s})()},{path:":id",component:(()=>{class s{constructor(s){this.route=s,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.route.queryParams.subscribe(s=>{this.status=s.status})),this.subscriptions.push(this.route.params.subscribe(s=>{this.logID=s.id}))}ngOnDestroy(){this.subscriptions.forEach(s=>s.unsubscribe())}}return s.\u0275fac=function(t){return new(t||s)(e.Jb(n.a))},s.\u0275cmp=e.Db({type:s,selectors:[["app-log"]],decls:13,vars:10,consts:[["routerLink",".","queryParamsHandling","merge",3,"queryParams"]],template:function(s,t){1&s&&(e.Pb(0,"h1"),e.xc(1),e.Ob(),e.Pb(2,"a",0),e.xc(3," Open\n"),e.Ob(),e.Kb(4,"br"),e.Pb(5,"a",0),e.xc(6," Closed\n"),e.Ob(),e.Kb(7,"br"),e.Pb(8,"a",0),e.xc(9," Closed and Open\n"),e.Ob(),e.Kb(10,"br"),e.Kb(11,"br"),e.xc(12)),2&s&&(e.yb(1),e.zc("Log: ",t.logID,""),e.yb(1),e.ec("queryParams",e.hc(5,c)),e.yb(3),e.ec("queryParams",e.hc(6,o)),e.yb(3),e.ec("queryParams",e.ic(8,u,e.hc(7,a))),e.yb(4),e.zc("\nStatus: ",t.status,"\n"))},directives:[n.f],styles:[""]}),s})()}];let b=(()=>{class s{}return s.\u0275mod=e.Hb({type:s}),s.\u0275inj=e.Gb({factory:function(t){return new(t||s)},imports:[[n.g.forChild(i)],n.g]}),s})();var p=r("PCNd");let l=(()=>{class s{}return s.\u0275mod=e.Hb({type:s}),s.\u0275inj=e.Gb({factory:function(t){return new(t||s)},imports:[[b,p.a]]}),s})()}}]);