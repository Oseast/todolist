(function(){"use strict";var n={2150:function(n,t,e){var o=e(6848),r=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.newTask,expression:"newTask"}],attrs:{type:"text",placeholder:"请输入你的任务名称"},domProps:{value:n.newTask},on:{input:function(t){t.target.composing||(n.newTask=t.target.value)}}}),t("button",{on:{click:n.addTask}},[n._v("添加")])]),t("div",[t("ul",n._l(n.tasks,(function(e){return t("li",{key:e.id,class:{completed:e.completed},on:{click:function(t){return n.toggleCompletion(e)}}},[t("span",[n._v(n._s(e.name))])])})),0)])])},i=[],u=(e(4114),{name:"App",data(){return{newTask:"",tasks:[]}},methods:{addTask(){this.newTask.trim()&&(this.tasks.push({id:Date.now(),name:this.newTask.trim(),completed:!1}),this.newTask="")},toggleCompletion(n){n.completed=!n.completed}}}),a=u,c=e(1656),s=(0,c.A)(a,r,i,!1,null,null,null),l=s.exports;o.Ay.config.productionTip=!1,new o.Ay({render:n=>n(l)}).$mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var u=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var l=c(e)}for(t&&t(o);s<u.length;s++)i=u[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(2150)}));o=e.O(o)})();
//# sourceMappingURL=app.719697e4.js.map