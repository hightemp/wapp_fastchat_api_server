(function(){"use strict";var e={8112:function(e,t,s){var r=s(7195),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("div",{staticClass:"promt"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.promt,expression:"promt"}],domProps:{value:e.promt},on:{input:function(t){t.target.composing||(e.promt=t.target.value)}}}),t("div",[t("button",{staticClass:"btn btn-light",on:{click:e.sendPromtMessage}},[e._v("send message")])])]),t("div",{staticClass:"messages"},[t("div",{staticClass:"messages-inner-wrapper"},[e.showWaitMessage?t("div",{staticClass:"message message-wait"},[e._v(" 🕒 Waiting... ")]):e._e(),e.showErrorMessage?t("div",{staticClass:"message message-error"},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),e._l(e.messages,(function(s){return[t("div",{class:"message message-"+s.type},[e._v(e._s(s.message))])]}))],2)])])])},o=[],i=s(306),a={name:"App",components:{},data(){return{promt:"",showWaitMessage:!1,showErrorMessage:!1,errorMessage:"",messages:[]}},methods:{sendPromtMessage(){var e=this.promt;this.promt="",this.messages.splice(0,0,{type:"user",timestamp:new Date,message:e}),this.showWaitMessage=!0,this.showErrorMessage=!1,(0,i.Z)({method:"post",url:"/predict",timeout:3e5,data:{text:e}}).then((function(e){console.log(e),this.messages.splice(0,0,{type:"ai",timestamp:new Date,message:e.text}),this.showWaitMessage=!1})).catch((function(e){console.log(e),this.showErrorMessage=!0,this.errorMessage=e}))}}},u=a,c=s(1001),l=(0,c.Z)(u,n,o,!1,null,null,null),p=l.exports;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(p)}).$mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],a=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(u)var l=u(s)}for(t&&t(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(8112)}));r=s.O(r)})();
//# sourceMappingURL=app.3db26ba3.js.map