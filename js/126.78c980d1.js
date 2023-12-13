"use strict";(self["webpackChunkvue_shopping_car"]=self["webpackChunkvue_shopping_car"]||[]).push([[126],{1126:function(t,s,a){a.r(s),a.d(s,{default:function(){return _}});a(560);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"prodetail"},[s("div",{staticClass:"detailmeg"},[s("van-nav-bar",{style:{opacity:t.num},attrs:{fixed:"","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}},scopedSlots:t._u([{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])}),s("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+" / "+t._s(t.images.length))])]},proxy:!0}])},t._l(t.images,(function(t,a){return s("van-swipe-item",{key:a},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.external_url,expression:"image.external_url"}]})])})),1)],1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.detail.goods_price_min))]),s("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.detail.goods_price_max))])]),s("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.detail.goods_sales)+"件")])]),s("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.detail.goods_name)+" ")]),s("div",{staticClass:"service"},[s("div",{staticClass:"left-words"},[s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),s("div",{staticClass:"right-icon"},[s("van-icon",{attrs:{name:"arrow"}})],1)])]),s("div",{staticClass:"comment"},[s("div",{staticClass:"comment-title"},[s("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(t.total)+"条)")]),s("div",{staticClass:"right",on:{click:function(s){return t.$router.push("/")}}},[t._v("查看更多 "),s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"comment-list"},t._l(t.commentList,(function(a){return s("div",{key:a.comment_id,staticClass:"comment-item"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:a.user.avatar_url,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(a.user.nick_name))]),s("van-rate",{attrs:{size:16,value:a.score/2,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),s("div",{staticClass:"content"},[t._v(" "+t._s(a.content)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(a.create_time)+" ")])])})),0)]),s("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.detail.content)}}),s("div",{staticClass:"footer"},[s("div",{staticClass:"icon-home",on:{click:function(s){return t.$router.push("/")}}},[s("van-icon",{attrs:{name:"wap-home-o"}}),s("span",[t._v("首页")])],1),s("div",{staticClass:"icon-cart",on:{click:function(s){return t.$router.push("/cart?")}}},[t.cartTotal>0?s("span",{staticClass:"num"},[t._v(t._s(t.cartTotal))]):t._e(),s("van-icon",{attrs:{name:"shopping-cart-o"}}),s("span",[t._v("购物车")])],1),s("div",{staticClass:"btn-add",on:{click:t.addFn}},[t._v("加入购物车")]),s("div",{staticClass:"btn-buy",on:{click:t.buyFn}},[t._v("立刻购买")])]),s("van-action-sheet",{attrs:{title:"cart"===t.mode?"加入购物车":"立刻购买"},model:{value:t.showPannel,callback:function(s){t.showPannel=s},expression:"showPannel"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"product-title"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.detail.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v("¥")]),s("span",{staticClass:"nowprice"},[t._v(t._s(t.detail.goods_price_min))])]),s("div",{staticClass:"count"},[s("span",[t._v("库存")]),s("span",[t._v(t._s(t.detail.stock_total))])])])]),s("div",{staticClass:"num-box"},[s("span",[t._v("数量")]),s("CountBox",{model:{value:t.count,callback:function(s){t.count=s},expression:"count"}})],1),t.detail.stock_total>0?s("div",{staticClass:"showbtn"},["cart"===t.mode?s("div",{staticClass:"btn",on:{click:t.addcart}},[t._v("加入购物车")]):t._e(),"buyNow"===t.mode?s("div",{staticClass:"btn now",on:{click:t.goBuyNow}},[t._v("立刻购买")]):t._e()]):s("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1)},o=[],n=a(9166),e=a(1787),c=a(6624),r=a(6945),l={methods:{loginConfirm(){return!this.$store.getters.token&&(this.$dialog.confirm({title:"温馨提示",message:"此时需要先登录才能继续操作哦",confirmButtonText:"去登陆",cancelButtonText:"再逛逛",confirmButtonColor:"#ffaa38",cancelButtonColor:"#7a7a7a"}).then((()=>{this.$router.push({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{})),!0)}}},d={name:"ProDetail",mixins:[l],components:{CountBox:n.Z},data(){return{images:[],current:0,detail:{},total:0,commentList:[],defaultImg:r,mode:"cart",showPannel:!1,count:1,cartTotal:0,num:.8}},computed:{datailId(){return this.$route.params.id}},created(){this.getDatail(),this.getComment()},methods:{onChange(t){this.current=t},async getDatail(){const{data:{detail:t}}=await(0,e.Aw)(this.datailId);this.detail=t,this.images=t.goods_images},async getComment(){const{data:{list:t,total:s}}=await(0,e.U3)(this.datailId,3);this.commentList=t,this.total=s},async addcart(){if(this.loginConfirm())return;const{data:t}=await(0,c.Z5)(this.datailId,this.count,this.detail.skuList[0].goods_sku_id);this.cartTotal=t.cartTotal,this.$toast("加入购物车成功"),this.showPannel=!1,this.count=1},addFn(){this.mode="cart",this.showPannel=!0},buyFn(){this.mode="buyNow",this.showPannel=!0},goBuyNow(){this.loginConfirm()||this.$router.push({path:"/pay",query:{mode:"buyNow",goodsId:this.datailId,goodsSkuId:this.detail.skuList[0].goods_sku_id,goodsNum:this.count}})}}},u=d,m=a(1001),v=(0,m.Z)(u,i,o,!1,null,"0f041c76",null),_=v.exports},1787:function(t,s,a){a.d(s,{Aw:function(){return n},Fs:function(){return o},U3:function(){return e}});var i=a(4471);const o=t=>{const{categoryId:s,goodsName:a,page:o}=t;return i.Z.get("/goods/list",{params:{categoryId:s,goodsName:a,page:o}})},n=t=>i.Z.get("/goods/detail",{params:{goodsId:t}}),e=(t,s)=>i.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=126.78c980d1.js.map