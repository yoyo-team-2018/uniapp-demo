(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0c28":function(t,e,n){"use strict";n.r(e);var i=n("d70c"),a=n("9d59");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("d8f0");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0bc0c72d",null,!1,i["a"],r);e["default"]=u.exports},"2b31":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".empty-content[data-v-0bc0c72d]{background:#fff;position:absolute;top:0;left:0;right:0;bottom:0}.empty-content uni-image[data-v-0bc0c72d]{width:60%}",""])},"35b1":function(t,e,n){var i=n("2b31");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b75c7772",i,!0,{sourceMap:!1,shadowMode:!1})},4295:function(t,e,n){"use strict";n.r(e);var i=n("b1bd"),a=n("8907");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("d69a");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"72ffdd34",null,!1,i["a"],r);e["default"]=u.exports},"86e3":function(t,e,n){var i=n("b0b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("28f67ef4",i,!0,{sourceMap:!1,shadowMode:!1})},8907:function(t,e,n){"use strict";n.r(e);var i=n("94c9"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"8e9e":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("768b"));n("96cf");var s=i(n("3b8d"));n("20d6"),n("ac6a"),n("7514");var r=i(n("f499")),o=i(n("2899")),u=i(n("70e8")),d=i(n("4295")),c=i(n("f851")),l=i(n("6460")),f={components:{indexList:u.default,swiperTabHead:d.default,loadMore:c.default,emptyContent:l.default,uniNavBar:o.default},data:function(){return{swiperHeight:500,tabIndex:0,tabBars:[],newsList:[]}},methods:{search:function(){uni.navigateTo({url:"../search/search"})},post:function(){this.User.navigate({url:"../addINput/addINput?postClass="+(0,r.default)(this.tabBars)})},updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break;case"updateList":this.updateList(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var e=this.newsList[this.tabIndex].list.find(function(e){return e.id===t.post_id});e&&e.commentNum++},updateSupport:function(t){var e=this.newsList[this.tabIndex].list.find(function(e){return e.id===t.post_id});if(e){var n=e.likeInfo.index;e.likeInfo.index=t.do,0!==n&&(1==n?e.likeInfo.likeNum--:e.likeInfo.dislikeNum--),0!==e.likeInfo.index&&(1==e.likeInfo.index?e.likeInfo.likeNum++:e.likeInfo.dislikeNum++)}},updateGuanZhu:function(t){this.newsList[this.tabIndex].list.forEach(function(e,n){e.userid===t.userid&&(e.isFollow=t.data)})},updateList:function(t){var e=this.tabBars.findIndex(function(e){return e.id===t.post_class_id});e>-1&&this.newsList[e].list.push(this.__format(t))},getNav:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e,n,i,s,r,o,u,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("postclass");case 2:if(e=t.sent,n=(0,a.default)(e,2),i=n[0],s=n[1],!i){t.next=8;break}return t.abrupt("return",uni.showToast({title:"加载失败",icon:"none"}));case 8:if(!s.data.errorCode){t.next=10;break}return t.abrupt("return",uni.showToast({title:s.data.msg,icon:"none"}));case 10:for(console.log(s),r=s.data.data.list,o=[],u=[],d=0;d<r.length;d++)o.push({id:r[d].id,name:r[d].classname}),u.push({loadText:"上拉加载更多",list:[],page:1,firstload:!1});this.tabBars=o,this.newsList=u,this.tabBars.length>0&&this.getList();case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e,n,i,s,r,o,u,d,c,l,f=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.tabIndex,n="postclass/".concat(this.tabBars[this.tabIndex].id,"/post/").concat(this.newsList[this.tabIndex].page),t.next=4,this.$http.get(n,{},{token:!0});case 4:if(i=t.sent,s=(0,a.default)(i,2),r=s[0],o=s[1],u=this.$http.errorCheck(r,o,function(){f.newsList[e].loadText="上拉加载更多"},function(){f.newsList[e].loadText="上拉加载更多"}),console.log(o),u){t.next=12;break}return t.abrupt("return");case 12:for(d=[],c=o.data.data.list,l=0;l<c.length;l++)d.push(this.__format(c[l]));return this.newsList[e].list=this.newsList[e].page>1?this.newsList[e].list.concat(d):d,this.newsList[e].firstload=!0,c.length<10?this.newsList[e].loadText="没有更多数据了(`ε´ )":this.newsList[e].loadText="上拉加载更多",t.abrupt("return");case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__format:function(t){return{userid:t.user.id,userPic:t.user.userpic||this.User.defaultUserPic,userName:t.user.username,isFollow:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlePic:t.images[0]?t.images[0].url:"",video:!1,path:t.path,share:!!t.share,likeInfo:{index:t.support.length>0?t.support[0].type+1:0,likeNum:t.ding_count,dislikeNum:t.cai_count},commentNum:t.comment_count,shareNum:t.sharenum}},tabSwitch:function(t){this.tabIndex=t,this.getList()},tabChange:function(t){this.tabIndex=t.detail.current,this.getList()},loadMore:function(t){"上拉加载更多"==this.newsList[t].loadText&&(this.newsList[t].loadText="加载中(＾o＾)ﾉ",this.newsList[this.tabIndex].page++,this.getList())}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){var n=e.windowHeight-uni.upx2px(100);t.swiperHeight=n}}),this.getNav(),uni.$on("updateData",this.updateData)},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(t){if(1==t.index&&this.User.navigate({url:"../addINput/addINput?postClass="+(0,r.default)(this.tabBars)}),0==t.index){uni.showLoading({title:"刷新中...",mask:!0}),this.tabIndex=0;for(var e=0;e<this.newsList.length;e++)this.newsList[this.tabIndex].page=1;this.getList(),uni.hideLoading()}},onPullDownRefresh:function(){this.tabIndex=0;for(var t=0;t<this.newsList.length;t++)this.newsList[this.tabIndex].page=1;this.getList(),uni.stopPullDownRefresh()},onTabItemTap:function(t){if(0==t.index){uni.showLoading({title:"刷新中...",mask:!0}),this.tabIndex=0;for(var e=0;e<this.newsList.length;e++)this.newsList[this.tabIndex].page=1;this.getList(),uni.hideLoading(),uni.pageScrollTo({scrollTop:0,duration:300})}}};e.default=f},"94c9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={props:{tabBars:Array,tabIndex:Number},methods:{tabSwitch:function(t){this.$emit("tabSwitch",t)}}};e.default=i},"9d59":function(t,e,n){"use strict";n.r(e);var i=n("8e9e"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},b0b6:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".swiper-tab-list[data-v-72ffdd34]{color:#969696;font-size:%?30?%;font-weight:700}.uni-tab-bar .active[data-v-72ffdd34]{color:#343434;font-size:%?38?%}.active .swiper-tab-underLine[data-v-72ffdd34]{border:%?1?% solid #009687;width:%?70?%;margin:auto;border-top:6px solid #009687;border-radius:%?10?%}.uni-swiper-tab[data-v-72ffdd34]{border-bottom:0 %?4?% %?8?% rgba(0,0,0,.3)}",""])},b1bd:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{"scroll-x":!0}},[t._l(t.tabBars,function(e,i){return[n("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitch(i)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),n("v-uni-view",{staticClass:"swiper-tab-underLine"})],1)]})],2)],1)},s=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},d69a:function(t,e,n){"use strict";var i=n("86e3"),a=n.n(i);a.a},d70c:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"background-color":"#EEEEEE"}},[n("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex},on:{tabSwitch:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitch.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperHeight+"px"},attrs:{current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}},t._l(t.newsList,function(e,i){return n("v-uni-swiper-item",{key:i},[n("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(i)}}},[0!=e.list.length?[t._l(e.list,function(e,i){return[n("index-list",{key:i+"_0",attrs:{item:e,index:i},on:{changeevent:function(e){arguments[0]=e=t.$handleEvent(e),t.updateData.apply(void 0,arguments)}}})]}),n("load-more",{attrs:{loadText:e.loadText}})]:e.firstload?[n("empty-content")]:[n("v-uni-view",{staticClass:"u-f-ajc",staticStyle:{"font-size":"50upx","font-weight":"bold",color:"#CCCCCC","padding-top":"100upx"}},[t._v("Loading...")])]],2)],1)}),1)],1)],1)},s=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},d8f0:function(t,e,n){"use strict";var i=n("35b1"),a=n.n(i);a.a}}]);