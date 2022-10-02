(function(){"use strict";var e={4283:function(e,t,s){var r=s(144),n=s(998),a=s(704),i=s(6570),o=s(4324),c=s(5495),u=s(3059),d=s(8718),l=function(){var e=this,t=e._self._c;return t(n.Z,[t(a.Z,{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(c.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),t(c.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),t(d.Z),t(i.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[t("span",{staticClass:"mr-2"},[e._v("Latest Release")]),t(o.Z,[e._v("mdi-open-in-new")])],1)],1),t(u.Z,[t("router-view")],1)],1)},f=[],h={name:"App",data:()=>({})},p=h,v=s(1001),m=(0,v.Z)(p,l,f,!1,null,null,null),Z=m.exports,g=s(8345),y=s(8325),_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex py-8"},[t(y.Z,{attrs:{cols:"6"}},[t("serach-users"),t("user-list")],1),t(y.Z,{attrs:{cols:"6"}},[t("user-list")],1)],1)},U=[],k=s(5808),b=s(4525),w=s(5187),x=s(523),O=s(5329),P=s(982),A=s(165),C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search__wrap d-flex flex-column"},[t("div",{staticClass:"d-flex align-start"},[t(A.Z,{staticClass:"mr-4",attrs:{label:"Поиск пользователей",clearable:"",solo:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(i.Z,{staticClass:"mt-3",on:{click:function(t){return e.searchUsers(e.userOutput)}}},[e._v("Поиск"),t(o.Z,{attrs:{right:""}},[e._v(" mdi-magnify ")])],1)],1),t(k.Z,[t(P.Z,{attrs:{"active-class":"primary--text",multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.searchedUsers,(function(s,r){return[t(b.Z,{key:s.id,on:{click:function(t){return e.toggleUser(s,r)}},scopedSlots:e._u([{key:"default",fn:function({active:n}){return[t(x.Z,[t(c.Z,{attrs:{alt:`${s.first_name} avatar`,src:s.photo_max}})],1),t(O.km,[t(O.V9,{domProps:{textContent:e._s(s.first_name+" "+s.last_name)}})],1),t(w.Z,[t(i.Z,{attrs:{icon:""}},[e.selected.includes(r)?t(o.Z,{attrs:{color:"primary"}},[e._v("mdi-account-plus")]):t(o.Z,[e._v("mdi-account-plus-outline")])],1)],1)]}}],null,!0)})]}))],2)],1),e.searchedUsers.length&&e.searchedUsers.length%e.userOutput===0?t(i.Z,{attrs:{color:"primary"},on:{click:function(t){return e.searchUsers(e.searchedUsers.length+e.userOutput)}}},[e._v("Загрузить еще")]):e._e()],1)},j=[],S=s(629),I={data(){return{search:"",selected:[],searchedUsers:[],userOutput:10}},computed:{...(0,S.rn)(["addedUsers"])},methods:{...(0,S.nv)(["vkAPI"]),...(0,S.OI)(["setAddedUsers","addAddedUsers","deleteAddedUser"]),async searchUsers(e=this.userOutput){this.search||(this.search="");const t=await this.vkAPI({link:"users.search",option:{q:this.search,count:e,fields:"bdate, has_photo, city, photo_max"}});this.searchedUsers=t.response.items},toggleUser(e,t){this.selected.includes(t)?this.deleteAddedUser(e.id):this.addAddedUsers(e)}},watch:{},mounted(){this.searchUsers()}},T=I,V=(0,v.Z)(T,C,j,!1,null,"f2a6b52a",null),L=V.exports,M=function(){var e=this,t=e._self._c;return t("div")},F=[],$={data(){return{}},methods:{...(0,S.OI)(["setAddedUsers"])},mounted(){console.log("check ",this.addedUsers)}},q=$,E=(0,v.Z)(q,M,F,!1,null,"9639ae60",null),H=E.exports,K={name:"Home",components:{SerachUsers:L,UserList:H}},N=K,R=(0,v.Z)(N,_,U,!1,null,null,null),z=R.exports;r.ZP.use(g.ZP);const B=[{path:"/",name:"home",component:z}],D=new g.ZP({mode:"history",base:"/VkFriends/",routes:B});var G=D;s(7658);r.ZP.use(S.ZP);var J=new S.ZP.Store({state:{addedUsers:[]},getters:{},mutations:{setAddedUsers(e,t){e.addedUsers=t},addAddedUsers(e,t){e.addedUsers.push(t)},deleteAddedUser(e,t){e.addedUsers=e.addedUsers.filter((e=>e.id!==t))}},actions:{vkAPI(e,t){const s=new Promise((e=>{VK.Api.call(t.link,{v:"5.131",...t.option},(function(t){return e(t)}))}));return s}},modules:{}}),Q=s(8864);r.ZP.use(Q.Z);var W=new Q.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:G,store:J,vuetify:W,render:e=>e(Z)}).$mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],a=e[d][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[c])}))?r.splice(c--,1):(o=!1,a<i&&(i=a));if(o){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],o=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var d=c(s)}for(t&&t(r);u<i.length;u++)a=i[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},r=self["webpackChunkvkfriend"]=self["webpackChunkvkfriend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(4283)}));r=s.O(r)})();
//# sourceMappingURL=app.9d613fbb.js.map