(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0c51":function(t,n,e){"use strict";var i=e("577c"),o=e.n(i);o.a},"15a9":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight,background:t.backgroundColor}},[t._t("default")],2)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},2013:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-status-bar[data-v-7cfd81e6]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""])},"2ab1":function(t,n,e){"use strict";e.r(n);var i=e("8cc4"),o=e("849c");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("c4ca");var r,u=e("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"1196ed3a",null,!1,i["a"],r);n["default"]=s.exports},"577c":function(t,n,e){var i=e("2013");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("9627f0c6",i,!0,{sourceMap:!1,shadowMode:!1})},6624:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("768b"));e("96cf");var a=i(e("3b8d")),r=i(e("a7bb")),u=i(e("f57f")),s={components:{uniStatusBar:r.default,otherLogin:u.default},data:function(){return{vericodeAble:!0,isLoginById:!0,disable:!0,loading:!1,userName:"",pw:"",phoneNum:"",vericode:"",countDown:0}},methods:{initInput:function(){this.userName="",this.pw="",this.phoneNum="",this.vericode=""},back:function(){uni.navigateBack({delta:1})},submit:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isLoginById){t.next=5;break}return console.log("login: id:"+this.userName+" pw:"+this.pw),t.abrupt("return",this.User.login({url:"user/login",data:{username:this.userName,password:this.pw}}));case 5:return console.log("login: phonenum:"+this.phoneNum+" verify code:"+this.vericode),t.abrupt("return",this.User.login({url:"user/phonelogin",data:{phone:this.phoneNum,code:this.vericode}}));case 7:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),loginSwitch:function(){this.initInput(),this.isLoginById=!this.isLoginById},OnBtnChange:function(){this.userName&&this.pw||this.phoneNum&&this.vericode&&this.isPhoneNumVaild(this.phoneNum)?this.disable=!1:this.disable=!0},isPhoneNumVaild:function(t){var n=/^1[34578]\d{9}$/;return!!n.test(this.phoneNum)},getVericode:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var n,e,i,a,r,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.vericodeAble=!1,!(this.countDown>0)){t.next=5;break}return t.abrupt("return");case 5:if(this.isPhoneNumVaild(this.phoneNum)){t.next=9;break}return uni.showToast({title:"请检查手机号码格式！",icon:"none"}),this.vericodeAble=!0,t.abrupt("return");case 9:return t.next=11,this.$http.post("user/sendcode",{phone:this.phoneNum});case 11:if(n=t.sent,e=(0,o.default)(n,2),i=e[0],a=e[1],this.$http.errorCheck(i,a),30001!==a.data.errCode){t.next=19;break}return uni.showToast({title:"操作过于频繁，请稍后再试",icon:"none"}),t.abrupt("return");case 19:uni.showToast({title:a.data.msg,duration:3e3,icon:"none"}),this.countDown=60,r=setInterval(function(){if(u.countDown--,0===u.countDown)return u.vericodeAble=!0,clearInterval(r),void(u.countDown=0);u.vericodeAble=!1},1e3);case 22:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()},watch:{userName:function(t){this.OnBtnChange()},pw:function(t){this.OnBtnChange()},phoneNum:function(t){this.OnBtnChange()},vericode:function(t){this.OnBtnChange()}}};n.default=s},"6cea":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{margin:"30upx 0"}},[e("v-uni-view",{staticClass:"other-login u-f-ac"},[t._l(t.providerList,function(n,i){return[e("v-uni-view",{key:i+"_0",staticClass:"u-f-ajc u-f1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tologin(n)}}},[e("v-uni-view",{staticClass:"icon iconfont  u-f-ajc ",class:["icon-"+n.icon]})],1)]})],2),e("v-uni-view",{staticClass:"u-f-ajc",staticStyle:{padding:"10upx"}},[t._v("登录以查看更多内容")])],1)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"70b1":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".other-login[data-v-0fb5ed75]{padding:%?20?% %?80?%}.other-login>uni-view>uni-view[data-v-0fb5ed75]{width:%?100?%;height:%?100?%;border-radius:100%;font-size:%?55?%;color:#fff}.other-login .icon-weixin[data-v-0fb5ed75]{background:#28de98}.other-login .icon-xinlangweibo[data-v-0fb5ed75]{background:#fc7729}.other-login .icon-QQ[data-v-0fb5ed75]{background:#2caefc}",""])},7420:function(t,n,e){"use strict";var i=e("c47f"),o=e.n(i);o.a},"761f":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"/* 公共按钮 */.user-set-btn[data-v-1196ed3a]{width:100%;margin:%?20?% 0;background:#009687!important;border:0!important;\r\n\t/* color: #333333!important; */color:#fff!important}.user-set-btn-disable[data-v-1196ed3a]{background:#f4f4f4!important;border:%?1?% solid #eee!important;color:#909090!important}.body[data-v-1196ed3a]{padding:0 %?20?%!important}.common-input[data-v-1196ed3a]{font-size:%?30?%;border-bottom:%?1?% solid #f4f4f4}.pureColor[data-v-1196ed3a]{height:%?400?%;background:rgba(0,150,135,.5);margin-bottom:%?100?%;box-shadow:%?2?% %?2?% %?10?% #333}.icon-guanbi[data-v-1196ed3a]{position:fixed;top:%?60?%;left:%?30?%;font-size:%?40?%;font-weight:700;color:#fff;z-index:100}.user-setting-logout-btn[data-v-1196ed3a]{margin:%?30?%;background:#009687}.login-status[data-v-1196ed3a]{margin:%?20?% 0}.login-color[data-v-1196ed3a]{color:#9e9e9e}.login-input-box[data-v-1196ed3a]{position:relative}.login-input-box .forget-input[data-v-1196ed3a]{\r\n    /* 腾出150upx的空间防止遮档 */padding-right:%?150?%}.login-input-box .vericode-input[data-v-1196ed3a]{padding-right:%?150?%}.login-input-box .forget[data-v-1196ed3a]{\r\n    /* 容器声明reletive 子组件可以用absolute 来针对容器相对定位 */position:absolute;right:0;top:0;height:100%;width:%?150?%}.login-input-box .vericode[data-v-1196ed3a]{position:absolute;right:0;top:0;height:100%;width:%?150?%;background:#eee}.vericode-active[data-v-1196ed3a]{background:#009687!important}.login-input-box .phone-verify[data-v-1196ed3a]{width:%?50?%;font-weight:700;position:absolute;height:100%;top:0;left:0}.login-input-box .phone-verify-input[data-v-1196ed3a]{padding-left:%?80?%}",""])},8138:function(t,n,e){"use strict";e.r(n);var i=e("c135"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"849c":function(t,n,e){"use strict";e.r(n);var i=e("6624"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"88f9":function(t,n,e){var i=e("761f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("db762a72",i,!0,{sourceMap:!1,shadowMode:!1})},"8cc4":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-status-bar",{attrs:{backgroundColor:"#009687"}}),e("v-uni-view",{staticClass:"icon iconfont icon-guanbi",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"pureColor"}),t.isLoginById?e("v-uni-view",{staticClass:"body"},[e("v-uni-input",{staticClass:"uni-input common-input",attrs:{type:"text",placeholder:"昵称/手机号/邮箱"},model:{value:t.userName,callback:function(n){t.userName=n},expression:"userName"}}),e("v-uni-view",{staticClass:"login-input-box"},[e("v-uni-input",{staticClass:"uni-input common-input forget-input",attrs:{type:"password",placeholder:"密码"},model:{value:t.pw,callback:function(n){t.pw=n},expression:"pw"}}),e("v-uni-view",{staticClass:"forget u-f-ajc"},[t._v("忘记密码？")])],1)],1):e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"login-input-box"},[e("v-uni-view",{staticClass:"phone-verify u-f-ajc"},[t._v("+86")]),e("v-uni-input",{staticClass:"uni-input common-input phone-verify-input",attrs:{type:"text",placeholder:"手机号码(仅限中国大陆)"},model:{value:t.phoneNum,callback:function(n){t.phoneNum=n},expression:"phoneNum"}})],1),e("v-uni-view",{staticClass:"login-input-box"},[e("v-uni-input",{staticClass:"uni-input common-input vericode-input",attrs:{type:"text",placeholder:"验证码"},model:{value:t.vericode,callback:function(n){t.vericode=n},expression:"vericode"}}),e("v-uni-view",{staticClass:"vericode u-f-ajc",class:{"vericode-active":t.vericodeAble},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getVericode.apply(void 0,arguments)}}},[t._v(t._s(t.countDown?t.countDown+"s":"获取验证码"))])],1)],1),e("v-uni-button",{staticClass:"user-setting-logout-btn ",class:{"user-set-btn-disable":t.disable},attrs:{type:"primary",disabled:t.disable,loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("登录")]),t.isLoginById?e("v-uni-view",{staticClass:"login-status u-f-ajc ",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginSwitch.apply(void 0,arguments)}}},[t._v("验证码登陆"),e("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1):e("v-uni-view",{staticClass:"login-status u-f-ajc ",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginSwitch.apply(void 0,arguments)}}},[t._v("账号密码登陆"),e("v-uni-view",{staticClass:"icon iconfont icon-jinru"})],1),e("v-uni-view",{staticClass:"other-login-title u-f-ajc"},[t._v("第三方登录")]),e("other-login",{attrs:{noback:!1}}),e("v-uni-view",{staticClass:"login-agreement u-f-ajc login-color"},[t._v("注册即代表您同意"),e("v-uni-view",{},[t._v("《xxx》协议")])],1)],1)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},a7bb:function(t,n,e){"use strict";e.r(n);var i=e("15a9"),o=e("8138");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0c51");var r,u=e("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"7cfd81e6",null,!1,i["a"],r);n["default"]=s.exports},bb0e:function(t,n,e){"use strict";e.r(n);var i=e("eefb"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},c135:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",o={props:{backgroundColor:{type:String,default:""}},name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};n.default=o},c47f:function(t,n,e){var i=e("70b1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("20fce94b",i,!0,{sourceMap:!1,shadowMode:!1})},c4ca:function(t,n,e){"use strict";var i=e("88f9"),o=e.n(i);o.a},eefb:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("5176")),a=i(e("f499"));e("96cf");var r=i(e("3b8d")),u=i(e("768b")),s={props:{noback:{type:Boolean,default:!0}},data:function(){return{providerList:[]}},methods:{mpGetUserInfo:function(t){var n=this;if(uni.showLoading({title:"登录中...",mask:!0}),"getUserInfo:ok"!==t.detail.errMsg)return uni.hideLoading(),void uni.showModal({title:"获取用户信息失败",content:"错误原因"+t.detail.errMsg,showCancel:!1});var e=t.detail.userInfo;uni.login({provider:"weixin",success:function(t){n.MpLogin({url:"/wxlogin",code:t.code,nickName:e.nickName,avatarUrl:e.avatarUrl})},complete:function(){uni.hideLoading()}})},MpLogin:function(t){var n=this;this.$http.post(t.url,{code:t.code,nickName:t.nickName,avatarUrl:t.avatarUrl}).then(function(t){var e=(0,u.default)(t,2),i=e[0],o=e[1];if(!n.$http.errorCheck(i,o))return!1;console.log("微信登录成功返回信息"),console.log(o.data.data),n.User.token=o.data.data.token,n.User.userinfo=n.User.__formatUserinfo(o.data.data),uni.setStorageSync("userinfo",n.User.userinfo),uni.setStorageSync("token",n.User.token),n.User.userinfo.id&&n.User.getCounts(),uni.showToast({title:"登录成功"}),n.$emit("logining"),n.noback||uni.reLaunch({url:"/pages/me/me"})})},loginEvent:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(n){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.User.login({url:"user/otherlogin",data:n,Noback:this.noback});case 2:e=t.sent,e&&this.$emit("logining");case 4:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),tologin:function(t){var n=this;uni.login({provider:t.id,success:function(e){uni.showLoading({title:"登陆中...",mask:!1}),console.log("登录成功返回信息"),console.log((0,a.default)(e)),console.log("login success:",e),console.log("登录成功 保存到本地 修改当前登录状态"),uni.getUserInfo({provider:t.id,success:function(i){console.log((0,a.default)(i.userInfo));var r=n.User.__formatOtherLogin(t.id,(0,o.default)(i,e));n.loginEvent(r)}}),console.log("登录成功，保存到本地存储，修改当前用户登录状态")},fail:function(t){console.log("login fail:",t)},complete:function(){uni.hideLoading()}})},getLoadingAuth:function(){var t=this;uni.getProvider({service:"oauth",success:function(n){t.providerList=n.provider.map(function(t){var n="",e="";switch(t){case"weixin":n="微信登录",e="weixin";break;case"qq":n="QQ登录",e="QQ";break;case"sinaweibo":n="新浪微博登录",e="xinlangweibo";break;case"xiaomi":n="小米登录",e="gengduo";break;case"alipay":n="支付宝登录",e="gengduo";break;case"baidu":n="百度登录",e="gengduo";break;case"toutiao":n="头条登录",e="gengduo";break;case"apple":n="苹果登录",e="gengduo";break}return{name:n,icon:e,id:t}})},fail:function(t){console.log("获取登录通道失败",t)}})}},created:function(){this.getLoadingAuth()}};n.default=s},f57f:function(t,n,e){"use strict";e.r(n);var i=e("6cea"),o=e("bb0e");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("7420");var r,u=e("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"0fb5ed75",null,!1,i["a"],r);n["default"]=s.exports}}]);