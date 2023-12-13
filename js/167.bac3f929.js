"use strict";(self["webpackChunkvue_shopping_car"]=self["webpackChunkvue_shopping_car"]||[]).push([[167],{6167:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getMacCode}},[t._v(t._s(t.second===t.totalSecond?"获取验证码":t.second+"秒后重新发送"))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],o=s(4471);const n=()=>o.Z.get("/captcha/image"),r=(t,e,s)=>o.Z.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:s}}),c=(t,e)=>o.Z.post("/passport/login",{form:{isParty:!1,partyData:{},mobile:t,smsCode:e}});var l={name:"LoginPage",data(){return{picCode:"",picKey:"",picUrl:"",totalSecond:60,second:60,timer:null,phoneNumber:"",msgCode:""}},computed:{url(){return this.$router.query.backUrl}},async created(){this.getPicCode()},methods:{async getPicCode(){const{data:{base64:t,key:e}}=await n();this.picKey=e,this.picUrl=t},async getMacCode(){this.validFn()&&(this.timer||this.second!==this.totalSecond||(await r(this.picCode,this.picKey,this.phoneNumber),this.timer=setInterval((()=>{this.second--,this.second<=0&&(clearInterval(this.timer),this.second=this.totalSecond,this.timer=null)}),1e3),this.$toast("发送成功，请注意查收")))},validFn(){return/^1[3-9]\d{9}$/.test(this.phoneNumber)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("图形验证码错误"),!1):(this.$toast("请输入正确的手机号"),!1)},async login(){if(!this.validFn())return;if(!/^\d{6}$/.test(this.msgCode))return void this.$toast("请输入正确的手机验证码");const t=await c(this.phoneNumber,this.msgCode);this.$store.commit("User/setUserInfo",t.data);const e=this.$route.query.backUrl||"/";this.$router.replace(e),this.$toast("登录成功")}},destroyed(){clearInterval(this.timer)}},d=l,p=s(1001),m=(0,p.Z)(d,i,a,!1,null,"2807e4f8",null),h=m.exports}}]);
//# sourceMappingURL=167.bac3f929.js.map