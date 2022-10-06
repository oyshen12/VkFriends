(function(){"use strict";var e={6106:function(e,t,s){var r=s(144),i=s(998),a=s(704),n=s(6190),d=s(3059),o=s(8718),c=function(){var e=this,t=e._self._c;return t(i.Z,[t(a.Z,{attrs:{app:"",color:"primary",dark:""}},[t("span",{staticClass:"text-h4"},[e._v("VkFriends")]),t(o.Z),e.authed?t(n.Z,{attrs:{color:"teal"},on:{click:e.logout}},[e._v("Выйти")]):t(n.Z,{attrs:{color:"teal"},on:{click:e.login}},[e._v("Войти")])],1),t(d.Z,[t("router-view")],1)],1)},u=[],l=(s(7658),s(629)),h={name:"App",data:()=>({}),computed:{...(0,l.rn)(["authed"])},methods:{...(0,l.OI)(["setAuthed","clearState"]),login(){VK.Auth.login((e=>{"connected"===e.status&&this.setAuthed(!0)}))},logout(){VK.Auth.logout(),this.setAuthed(!1),this.clearState(),"/"!==this.$route.path&&this.$router.push("/")}},mounted(){document.cookie.includes("vk_app_51438811")&&this.setAuthed(!0)}},p=h,f=s(1001),m=(0,f.Z)(p,c,u,!1,null,null,null),g=m.exports,v=s(8345),A=s(8325),P=function(){var e=this,t=e._self._c;return e.authed?t("div",{staticClass:"home__wrap"},[t(A.Z,{staticClass:"pr-8",attrs:{cols:"6"}},[t("search-users")],1),t(A.Z,{staticClass:"pl-8",attrs:{cols:"6"}},[t("user-list")],1)],1):t("div",{staticClass:"text-h2 text-center mt-16"},[e._v(" Авторизуйтесь чтобы использовать приложение ")])},_=[],U=s(4324),Z=s(5495),b=s(5808),x=s(4525),C=s(5187),k=s(6900),y=s(347),E=s(7149),F=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search__wrap d-flex flex-column"},[t("div",{staticClass:"d-flex align-start"},[t(E.Z,{staticClass:"mr-4",attrs:{label:"Поиск пользователей",clearable:"",solo:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(n.Z,{staticClass:"mt-3",attrs:{color:"primary"},on:{click:function(t){return e.searchUsers(e.userOutput)}}},[e._v("Поиск"),t(U.Z,{attrs:{right:""}},[e._v(" mdi-magnify ")])],1)],1),t(b.Z,e._l(e.searchedUsers,(function(s,r){return t(x.Z,{key:s.id,on:{click:function(t){return e.toggleUser(s,r)}}},[[t(k.Z,[t(Z.Z,{attrs:{alt:`${s.first_name} avatar`,src:s.photo_max}})],1),t(y.km,[t(y.V9,{domProps:{textContent:e._s(`${s.first_name} ${s.last_name}`)}})],1),t(C.Z,[t(n.Z,{attrs:{icon:""}},[-1!==e.userSelected(s)?t(U.Z,{attrs:{color:"primary"}},[e._v("mdi-account-plus")]):t(U.Z,[e._v("mdi-account-plus-outline")])],1)],1)]],2)})),1),e.searchedUsers.length&&e.searchedUsers.length%e.userOutput===0?t(n.Z,{attrs:{color:"primary"},on:{click:function(t){return e.searchUsers(e.searchedUsers.length+e.userOutput)}}},[e._v("Загрузить еще")]):e._e()],1)},K=[],B={data(){return{search:"",searchedUsers:[],userOutput:100}},computed:{...(0,l.rn)(["addedUsers","authed"]),...(0,l.Se)(["allFriends"])},methods:{...(0,l.nv)(["vkAPI"]),...(0,l.OI)(["setAddedUsers","addAddedUsers","deleteAddedUser","setAuthed"]),async searchUsers(e=this.userOutput){this.search||(this.search="");const t=await this.vkAPI({link:"users.search",option:{q:this.search,count:e,fields:"bdate, photo_max"}});this.searchedUsers=t.response.items,0===this.searchedUsers.length&&""===this.search&&this.authed&&this.setAuthed(!1)},async searchFriends(e){const{response:t}=await this.vkAPI({link:"friends.get",option:{user_id:e.id}});return t?t.items:[]},async toggleUser(e,t){if(-1!==this.userSelected(e))this.deleteAddedUser(e);else{const t=await this.searchFriends(e);this.addAddedUsers({friends:t,...e})}},userSelected(e){const t=this.addedUsers.findIndex((t=>t.id===e.id));return t}},watch:{authed(e){e?this.searchUsers():this.searchedUsers=[]}},mounted(){this.searchUsers()}},w=B,O=(0,f.Z)(w,F,K,!1,null,"6d264fa2",null),X=O.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"list-wrap"},[t("div",{staticClass:"d-flex justify-space-between mt-4"},[t("span",{staticClass:"list-text"},[e._v("Добавленные пользователи")]),t(n.Z,{attrs:{color:"primary"},on:{click:e.buildFriends}},[e._v("Построить")])],1),0===e.allFriends.length&&0!==e.addedUsers.length?t("div",{staticClass:"list-text mt-4 alarm-friends"},[e._v(" У выбранных пользователей нету друзей или это приватные аккаунты ")]):e._e(),t(b.Z,{staticClass:"mt-6"},e._l(e.addedUsers,(function(s){return t(x.Z,{key:s.id},[t(k.Z,[t(Z.Z,{attrs:{alt:`${s.first_name} avatar`,src:s.photo_max}})],1),t(y.km,[t(y.V9,{domProps:{textContent:e._s(`${s.first_name} ${s.last_name}`)}})],1),t(n.Z,{attrs:{color:"error"},on:{click:function(t){return e.deleteAddedUser(s)}}},[e._v("Удалить")])],1)})),1)],1)},S=[],T={data(){return{}},computed:{...(0,l.rn)(["addedUsers","usersFriends"]),...(0,l.Se)(["allFriends"])},methods:{...(0,l.nv)(["vkAPI"]),...(0,l.OI)(["setAddedUsers","deleteAddedUser","setUsersFriends"]),async buildFriends(){if(0===this.allFriends.length)return;const{response:e}=await this.vkAPI({link:"users.get",option:{user_ids:this.allFriends,fields:"photo_max, bdate, sex"}});this.allFriends.map((t=>{const s=this.addedUsers.reduce(((e,s)=>(s.friends.includes(t)&&(e+=1),e)),0),r=e.findIndex((e=>e.id===t));if(-1!==r)return e[r]["mutualFriends"]=s,t})),this.setUsersFriends(e),this.$router.push("friends")}}},N=T,V=(0,f.Z)(N,j,S,!1,null,"ce2e2462",null),R=V.exports,D={name:"Home",components:{SearchUsers:X,UserList:R},computed:{...(0,l.rn)(["authed"])}},I=D,G=(0,f.Z)(I,P,_,!1,null,"2e3ede22",null),W=G.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"friends__wrap"},[t("div",{staticClass:"grid__wrap"},e._l(e.usersFriends,(function(s){return t("user-card",{key:s.id,staticClass:"mt-6",attrs:{user:s},nativeOn:{click:function(t){return e.goToProfile(s)}}})})),1)])},Y=[],H=s(9582),q=s(4886),Q=function(){var e=this,t=e._self._c;return t(H.Z,{staticClass:"user__card",class:{hover:e.hover},style:{backgroundColor:`rgba(25, 118, 210, ${.1*e.user.mutualFriends})`},attrs:{width:"300"}},[t(Z.Z,{attrs:{height:"250",src:e.user.photo_max}}),t(q.EB,[e._v(e._s(e.user.first_name)+" "+e._s(e.user.last_name))]),e.user.mutualFriends?t(q.ZB,{staticClass:"pb-0"},[e._v("Общих друзей: "+e._s(e.user.mutualFriends))]):e._e(),t(q.ZB,{staticClass:"pt-0"},[e._v(e._s(1===e.user.sex?"Девушка":"Мужчина")+", "+e._s(e.getAge)+" "+e._s(e.ageFormat()))])],1)},z=[],J={props:{user:{require:!0},hover:{default:!0}},data(){return{}},computed:{getAge(){if(3===this.user.bdate?.split(".").length){const e=this.user.bdate.replaceAll(".","-").split("-").reverse().join("-"),t=new Date,s=new Date(e);let r=t.getFullYear()-s.getFullYear();const i=t.getMonth()-s.getMonth();return(i<0||0===i&&t.getDate()<s.getDate())&&r--,r}return"возраст скрыт"}},methods:{ageFormat(){const e=this.getAge;if("возраст скрыт"!==e)return e<5?1==e?"год":"года":e<21?"лет":e%10===1?"год":e%10===2||e%10===3||e%10===4?"года":"лет"}}},L=J,$=(0,f.Z)(L,Q,z,!1,null,"50af4374",null),ee=$.exports,te={components:{UserCard:ee},data(){return{}},computed:{...(0,l.rn)(["usersFriends"])},methods:{goToProfile(e){this.$router.push({name:"user",params:{id:e.id}})}}},se=te,re=(0,f.Z)(se,M,Y,!1,null,"fbf03646",null),ie=re.exports,ae=function(){var e=this,t=e._self._c;return e.userExist?t("div",{staticClass:"d-flex mt-8 justify-center user-view__wrap"},[t(U.Z,{staticClass:"back-img",attrs:{color:"primary","x-large":""},on:{click:function(t){return e.$router.back()}}},[e._v("mdi-keyboard-backspace")]),t("user-card",{staticClass:"current-user",attrs:{user:e.user,hover:!1}}),t("div",{staticClass:"user-info d-flex flex-column"},[t("div",{staticClass:"text-h3"},[e._v("В друзьях у пользователей:")]),t("div",{staticClass:"users__grid mt-4"},e._l(e.addedFriends,(function(e){return t("user-card",{key:e.id,attrs:{user:e,hover:!1}})})),1),t("span",{staticClass:"text-h3 mt-4"},[e._v("Записи на странице:")]),e.records?t("div",{staticClass:"record__grid mt-4"},e._l(e.records.items,(function(s){return t("record-card",{key:s.id,attrs:{recordProp:s,groups:e.records.groups,profiles:e.records.profiles,user:e.user}})})),1):t("div",{staticClass:"text-h3 mt-4"},[e._v("Это приватный аккаунт")])])],1):e._e()},ne=[],de=s(3423),oe=function(){var e=this,t=e._self._c;return t(H.Z,{staticClass:"record__wrap pa-4"},[t("div",{staticClass:"d-flex mb-2 align-center"},[t(de.Z,[t("img",{attrs:{src:e.currentUser.photo_max}})]),t("div",{staticClass:"d-flex flex-column mt-1 ml-2"},[t("span",[e._v(" "+e._s(e.currentUser.first_name))]),t("span",[e._v(e._s(e.getDate(e.recordProp.date,!1)))])])],1),t("div",{class:{border:e.record.itPost}},[e.record.itPost?t("div",{staticClass:"d-flex ml-2 mb-2 align-center"},[t(de.Z,[t("img",{attrs:{src:e.getGroup.photo_50}})]),t("div",{staticClass:"d-flex flex-column mt-1 ml-2"},[t("span",[e._v(e._s(e.getGroup.name))]),t("span",[e._v(e._s(e.getDate(e.record.date)))])])],1):e._e(),e.record.text?t("div",{staticClass:"ml-2"},[e._v(e._s(e.record.text))]):e._e(),e.videoType?t("div",{staticClass:"record-video ml-2"},[t(Z.Z,{attrs:{src:e.record.image}}),t(Z.Z,{staticClass:"video__play",attrs:{src:s(5093)}})],1):t("div",{staticClass:"img__wrap"},e._l(e.record.attachments,(function(s,r){return t(Z.Z,{key:r,staticClass:"imgElement ml-2 mt-2",attrs:{src:e.getPhotoUrl(s.photo)}})})),1)]),e._l(e.record.songs,(function(s){return t("div",{staticClass:"d-flex align-center mt-2 py-1 record-songs"},[t(U.Z,{staticClass:"ml-1",attrs:{large:"",color:"primary"}},[e._v(" mdi-play-circle ")]),t("div",{staticClass:"ml-2"},[t("span",{staticClass:"song-artist"},[e._v(e._s(s.artist))]),e._v(" - "+e._s(s.title)+" ")])],1)}))],2)},ce=[],ue={props:["recordProp","groups","profiles","user"],data(){return{record:{},currentUser:{},videoType:!1}},computed:{getGroup(){let e=this.groups.find((e=>Math.abs(e.id)===Math.abs(this.record.owner_id)));return e||(e=this.profiles.find((e=>Math.abs(e.id)===Math.abs(this.record.owner_id))),e.name||(e["name"]=`${e.first_name} ${e.last_name}`),e.photo_50||(e["photo_50"]="https://vk.com/images/camera_200.png")),e}},methods:{filter(e,t){return e?.length?e.filter((e=>e.type===t)):[]},setCorrectRecord(){let e=this.recordProp;this.recordProp?.copy_history&&(e={...this.recordProp,...this.recordProp.copy_history[0],itPost:!0});const{attachments:t}=e,s=this.filter(t,"video");if(1===s?.length&&1===t?.length){this.videoType=!0;const s=t[0].video.image;e.image=s[s.length-1].url,this.record=e}e.songs=this.filter(t,"audio").map((e=>e.audio)),this.videoType||(e.attachments=this.filter(t,"photo"),this.record=e)},setCurrentUser(){if(this.recordProp.owner_id!==this.recordProp.from_id){const e=this.profiles.find((e=>e.id===this.recordProp.from_id));e["photo_max"]=e.photo_max||e.photo_50||e.photo_100||"https://vk.com/images/camera_200.png",this.currentUser=e}else this.currentUser=this.user},getPhotoUrl(e){return e.sizes[e.sizes.length-1].url},getDate(e,t=!0){const s=new Date(1e3*e);let r=`${s.getDate()} ${this.getMonth(s.getMonth())} ${s.getFullYear()}`;return t?r+` в ${s.getHours()}:${s.getMinutes()}`:r},getMonth(e){switch(e){case 0:return"янв";case 1:return"фев";case 2:return"мар";case 3:return"апр";case 4:return"май";case 5:return"июн";case 6:return"июл";case 7:return"авг";case 8:return"сен";case 9:return"окт";case 10:return"ноя";case 11:return"дек"}}},mounted(){this.setCurrentUser(),this.setCorrectRecord()}},le=ue,he=(0,f.Z)(le,oe,ce,!1,null,"3abb9bdd",null),pe=he.exports,fe={components:{UserCard:ee,RecordCard:pe},component:{UserCard:ee},data(){return{id:0,user:{},records:{}}},computed:{...(0,l.rn)(["usersFriends","addedUsers"]),userExist(){return this.user&&Object.keys(this.user).length},addedFriends(){return this.addedUsers.filter((e=>e.friends.includes(this.id)))}},methods:{...(0,l.nv)(["vkAPI"]),async getRecords(){const{response:e}=await this.vkAPI({link:"wall.get",option:{owner_id:this.id,extended:1}});this.records=e}},async mounted(){if(this.id=this.$route.params.id,await this.getRecords(),this.user=this.usersFriends.find((e=>e.id===this.id)),!this.userExist){const{response:e}=await this.vkAPI({link:"users.get",option:{user_ids:this.id,fields:"photo_max, bdate, sex"}});this.user=e[0]}}},me=fe,ge=(0,f.Z)(me,ae,ne,!1,null,"71c1f8b9",null),ve=ge.exports;r.ZP.use(v.ZP);const Ae=[{path:"/",name:"home",component:W},{path:"/friends",name:"friends",component:ie},{path:"/user/:id",name:"user",component:ve}],Pe=new v.ZP({mode:"history",base:"/VkFriends/",routes:Ae});var _e=Pe;r.ZP.use(l.ZP);var Ue=new l.ZP.Store({state:{addedUsers:[],usersFriends:[],authed:!1},getters:{allFriends(e){return e.addedUsers.reduce(((e,t)=>e.concat(t.friends)),[])}},mutations:{setAddedUsers(e,t){e.addedUsers=t},setAuthed(e,t){e.authed=t},setUsersFriends(e,t){e.usersFriends=t},addAddedUsers(e,t){e.addedUsers.push(t)},deleteAddedUser(e,t){e.addedUsers=e.addedUsers.filter((e=>e.id!==t.id))},clearState(e){e.addedUsers=[],e.usersFriends=[]}},actions:{vkAPI(e,t){const s=new Promise((e=>{VK.Api.call(t.link,{v:"5.131",...t.option},(function(t){return e(t)}))}));return s}},modules:{}}),Ze=s(8864);r.ZP.use(Ze.Z);var be=new Ze.Z({}),xe=s(2364);r.ZP.config.productionTip=!1,r.ZP.use(xe.Z),new r.ZP({router:_e,store:Ue,vuetify:be,render:e=>e(g)}).$mount("#app")},5093:function(e){e.exports="data:image/png;base64,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"}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,r,i,a){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],a=e[u][2];for(var d=!0,o=0;o<r.length;o++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[o])}))?r.splice(o--,1):(d=!1,a<n&&(n=a));if(d){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,n=r[0],d=r[1],o=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in d)s.o(d,i)&&(s.m[i]=d[i]);if(o)var u=o(s)}for(t&&t(r);c<n.length;c++)a=n[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},r=self["webpackChunkvkfriend"]=self["webpackChunkvkfriend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(6106)}));r=s.O(r)})();
//# sourceMappingURL=app.0322870d.js.map