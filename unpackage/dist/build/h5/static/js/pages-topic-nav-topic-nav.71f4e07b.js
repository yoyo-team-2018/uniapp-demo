(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-topic-nav-topic-nav"],{"009c":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("768b"));n("96cf");var r=i(n("3b8d")),s=i(n("e814")),o=i(n("4295")),u=i(n("6460")),c=i(n("f851")),d=i(n("f514")),l={data:function(){return{swiperHeight:500,tabIndex:0,tabBars:[],newsList:[],ischange:!1}},components:{swiperTabHead:o.default,emptyContent:u.default,loadMore:c.default,topicList:d.default},onLoad:function(t){var e=this;console.log(t),t.page&&(this.tabIndex=(0,s.default)(t.page)-1),uni.getSystemInfo({success:function(t){var n=t.windowHeight-uni.upx2px(100);e.swiperHeight=n}}),t.ischange&&(this.ischange=!0,uni.setNavigationBarTitle({title:"选择所属话题"})),this.getNav()},methods:{getList:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,n,i,r,s,o,u,c,d,l,f=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.tabIndex,n="topicclass/".concat(this.tabBars[this.tabIndex].id,"/topic/").concat(this.newsList[this.tabIndex].page),t.next=4,this.$http.get(n,{});case 4:if(i=t.sent,r=(0,a.default)(i,2),s=r[0],o=r[1],u=this.$http.errorCheck(s,o,function(){f.newsList[e].loadText="上拉加载更多"},function(){f.newsList[e].loadText="上拉加载更多"}),console.log(o),u){t.next=12;break}return t.abrupt("return");case 12:for(c=[],d=o.data.data.list,l=0;l<d.length;l++)c.push({id:d[l].id,titlePic:d[l].titlepic,title:d[l].title,desc:d[l].desc,totalPostNum:d[l].post_count,todayPostNum:d[l].todaypost_count});return this.newsList[e].list=this.newsList[e].page>1?this.newsList[e].list.concat(c):c,this.newsList[e].firstload=!0,d.length<10?this.newsList[e].loadText="没有更多数据了(`ε´ )":this.newsList[e].loadText="上拉加载更多",t.abrupt("return");case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getNav:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,n,i,r,s,o,u,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("topicclass");case 2:if(e=t.sent,n=(0,a.default)(e,2),i=n[0],r=n[1],!i){t.next=8;break}return t.abrupt("return",uni.showToast({title:"加载失败",icon:"none"}));case 8:if(!r.data.errorCode){t.next=10;break}return t.abrupt("return",uni.showToast({title:r.data.msg,icon:"none"}));case 10:for(console.log(r),s=r.data.data.list,o=[],u=[],c=0;c<s.length;c++)o.push({id:s[c].id,name:s[c].classname}),u.push({loadText:"上拉加载更多",list:[],page:1,firstload:!1});this.tabBars=o,this.newsList=u,this.tabBars.length>0&&this.getList();case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadMore:function(t){"上拉加载更多"==this.newsList[t].loadText&&(this.newsList[t].loadText="加载中(＾o＾)ﾉ",this.newsList[this.tabIndex].page++,this.getList())},tabSwitch:function(t){this.tabIndex=t,this.getList()},tabChange:function(t){this.tabIndex=t.detail.current,this.getList()}}};e.default=l},"087d":function(t,e,n){"use strict";n.r(e);var i=n("009c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},1078:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{loadText:String}};e.default=i},2746:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"empty-content u-f-ajc animated fadeIn fast"},[n("v-uni-image",{attrs:{src:"../../static/common/LUWEI.png",mode:"widthFix"}})],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},"2a04":function(t,e,n){"use strict";n.r(e);var i=n("5ab0"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},4295:function(t,e,n){"use strict";n.r(e);var i=n("b1bd"),a=n("8907");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("d69a");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"72ffdd34",null,!1,i["a"],s);e["default"]=u.exports},"44c0":function(t,e,n){"use strict";n.r(e);var i=n("1078"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"5ab0":function(t,e,n){},"5d98":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadText))])},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},6237:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f499"));n("c5f6");var r={props:{item:Object,index:Number,ischange:{type:Boolean,default:!1}},methods:{openTopicDetial:function(){if(this.ischange)return uni.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void uni.navigateBack({delta:1});uni.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+(0,a.default)(this.item)})}}};e.default=r},6460:function(t,e,n){"use strict";n.r(e);var i=n("2746"),a=n("2a04");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"32b7bd0e",null,!1,i["a"],s);e["default"]=u.exports},"7eb6":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".topic-list>uni-image[data-v-51cafd47]{width:%?150?%;height:%?150?%;border:%?10?%;margin:%?10?% %?20?%;box-shadow:0 %?4?% %?8?% rgba(0,0,0,.3)}.topic-list[data-v-51cafd47]{border-bottom:%?1?% solid #eee;box-shadow:0 %?2?% %?4?% rgba(0,0,0,.3);background-color:#fff!important;margin:%?10?% %?15?%}.topic-list>uni-view>uni-view[data-v-51cafd47]{color:#a4a4a4}\n/* 话题名称 */.topic-list>uni-view>uni-view[data-v-51cafd47]:first-child{color:#333;font-size:%?32?%}",""])},"86e3":function(t,e,n){var i=n("b0b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("28f67ef4",i,!0,{sourceMap:!1,shadowMode:!1})},"88cd":function(t,e,n){var i=n("b2c0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("50e64bec",i,!0,{sourceMap:!1,shadowMode:!1})},8907:function(t,e,n){"use strict";n.r(e);var i=n("94c9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"94c9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={props:{tabBars:Array,tabIndex:Number},methods:{tabSwitch:function(t){this.$emit("tabSwitch",t)}}};e.default=i},9651:function(t,e,n){"use strict";var i=n("e994"),a=n.n(i);a.a},"98b6":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"topic-list u-f animated fadeIn faster",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTopicDetial.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.item.titlePic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",{},[n("v-uni-view",{},[t._v("#"+t._s(t.item.title)+"#")]),n("v-uni-view",{},[t._v(t._s(t.item.desc))]),n("v-uni-view",{},[t._v("动态 "+t._s(t.item.totalPostNum)+" 今日 "+t._s(t.item.todayPostNum))])],1)],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},af4a:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"background-color":"#EEEEEE"}},[n("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex},on:{tabSwitch:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitch.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperHeight+"px"},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}},t._l(t.newsList,function(e,i){return n("v-uni-swiper-item",{key:i},[n("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(i)}}},[0!=e.list.length?[t._l(e.list,function(e,i){return[n("topic-list",{key:i+"_0",attrs:{item:e,index:i,ischange:t.ischange}})]}),n("load-more",{attrs:{loadText:e.loadText}})]:e.firstload?[n("empty-content")]:[n("v-uni-view",{staticClass:"u-f-ajc",staticStyle:{"font-size":"50upx","font-weight":"bold",color:"#CCCCCC","padding-top":"100upx"}},[t._v("Loading...")])]],2)],1)}),1)],1)],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},b0b6:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".swiper-tab-list[data-v-72ffdd34]{color:#969696;font-size:%?30?%;font-weight:700}.uni-tab-bar .active[data-v-72ffdd34]{color:#343434;font-size:%?38?%}.active .swiper-tab-underLine[data-v-72ffdd34]{border:%?1?% solid #009687;width:%?70?%;margin:auto;border-top:6px solid #009687;border-radius:%?10?%}.uni-swiper-tab[data-v-72ffdd34]{border-bottom:0 %?4?% %?8?% rgba(0,0,0,.3)}",""])},b1bd:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{"scroll-x":!0}},[t._l(t.tabBars,function(e,i){return[n("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitch(i)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),n("v-uni-view",{staticClass:"swiper-tab-underLine"})],1)]})],2)],1)},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},b2c0:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".load-more[data-v-16d8eb94]{text-align:center;color:#aaa;padding:%?15?%}",""])},d56e:function(t,e,n){"use strict";n.r(e);var i=n("af4a"),a=n("087d");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"9b85eac6",null,!1,i["a"],s);e["default"]=u.exports},d69a:function(t,e,n){"use strict";var i=n("86e3"),a=n.n(i);a.a},e4c9:function(t,e,n){"use strict";n.r(e);var i=n("6237"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},e994:function(t,e,n){var i=n("7eb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("10a753a6",i,!0,{sourceMap:!1,shadowMode:!1})},f38c:function(t,e,n){"use strict";var i=n("88cd"),a=n.n(i);a.a},f514:function(t,e,n){"use strict";n.r(e);var i=n("98b6"),a=n("e4c9");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("9651");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"51cafd47",null,!1,i["a"],s);e["default"]=u.exports},f851:function(t,e,n){"use strict";n.r(e);var i=n("5d98"),a=n("44c0");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("f38c");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"16d8eb94",null,!1,i["a"],s);e["default"]=u.exports}}]);