"use strict";(self.webpackChunkng_animating_lists=self.webpackChunkng_animating_lists||[]).push([[72],{1072:(h,a,e)=>{e.r(a),e.d(a,{AuthComponent:()=>_});var n=e(1808),r=e(177),c=e(5656),u=e(7046),s=e(5492);let _=(()=>{class o{constructor(){this.auth=(0,n.WQX)(c.u),this.router=(0,n.WQX)(u.Ix)}ngOnInit(){const t=this.auth.loggedInUserType;t&&this.naviageToUserRoute(t)}naviageToUserRoute(t){switch(t){case s.u.Admin:this.router.navigate(["/admin"]);break;case s.u.Employee:this.router.navigate(["/employee"])}}loginAsAdmin(){const t=s.u.Admin;this.auth.login(t),this.naviageToUserRoute(t)}loginAsEmployee(){const t=s.u.Employee;this.auth.login(t),this.naviageToUserRoute(t)}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=n.VBU({type:o,selectors:[["app-auth"]],decls:5,vars:0,consts:[[1,"login","flex","items-center","justify-around","gap-4"],["type","button",3,"click"]],template:function(i,l){1&i&&(n.j41(0,"div",0)(1,"button",1),n.bIt("click",function(){return l.loginAsAdmin()}),n.EFF(2,"Login as Admin"),n.k0s(),n.j41(3,"button",1),n.bIt("click",function(){return l.loginAsEmployee()}),n.EFF(4,"Login as Employee"),n.k0s()())},dependencies:[r.MD,u.iI],encapsulation:2})}}return o})()}}]);