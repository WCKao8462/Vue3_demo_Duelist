(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6813e6"],{2632:function(t,e,o){},4859:function(t,e,o){"use strict";o("2632")},a15b:function(t,e,o){"use strict";var i=o("23e7"),n=o("44ad"),c=o("fc6a"),a=o("a640"),s=[].join,l=n!=Object,d=a("join",",");i({target:"Array",proto:!0,forced:l||!d},{join:function(t){return s.call(c(this),void 0===t?",":t)}})},e532:function(t,e,o){"use strict";o.r(e);var i=o("7a23"),n=Object(i["T"])("data-v-5efa36b6");Object(i["z"])("data-v-5efa36b6");var c={class:"text-end"},a={class:"container"},s={class:"table mt-4 text-white m-auto text-center mb-5",style:{"min-width":"800px"}},l=Object(i["i"])("thead",null,[Object(i["i"])("tr",{class:"fs-5"},[Object(i["i"])("th",{width:"150",class:"py-4 text-info"},"優惠名稱"),Object(i["i"])("th",{width:"150",class:"py-4 text-info"},"優惠碼"),Object(i["i"])("th",{width:"150",class:"py-4 text-info"},"折扣"),Object(i["i"])("th",{width:"150",class:"py-4 text-info"},"到期日"),Object(i["i"])("th",{width:"150",class:"py-4 text-info"},"是否啟用"),Object(i["i"])("th",{width:"200",class:"py-4 text-info"},"編輯")])],-1),d={class:"py-3"},u={class:"py-3"},p={class:"py-3"},b={class:"py-3"},r={class:"py-3"},m={key:0,class:"text-success"},j={key:1,class:"text-muted"},O={class:"py-3"},h={class:"btn-group"};Object(i["x"])();var f=n((function(t,e,o,n,f,v){var g=Object(i["F"])("LoadingCustom"),y=Object(i["F"])("Pagination"),C=Object(i["F"])("CouponModal"),w=Object(i["F"])("DelModal");return Object(i["w"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(g,{tempIsLoading:v.isLoading},null,8,["tempIsLoading"]),Object(i["i"])("div",c,[Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return v.openModal&&v.openModal.apply(v,arguments)})}," 增加優惠券 ")]),Object(i["i"])("div",a,[Object(i["i"])("table",s,[l,Object(i["i"])("tbody",null,[(Object(i["w"])(!0),Object(i["e"])(i["a"],null,Object(i["D"])(v.couponsAdmin,(function(t){return Object(i["w"])(),Object(i["e"])("tr",{key:t.id},[Object(i["i"])("td",d,Object(i["I"])(t.title),1),Object(i["i"])("td",u,Object(i["I"])(t.code),1),Object(i["i"])("td",p,Object(i["I"])(t.percent)+"%",1),Object(i["i"])("td",b,Object(i["I"])(t.due_date),1),Object(i["i"])("td",r,[t.is_enabled?(Object(i["w"])(),Object(i["e"])("span",m,"啟用")):(Object(i["w"])(),Object(i["e"])("span",j,"未啟用"))]),Object(i["i"])("td",O,[Object(i["i"])("div",h,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-primary btn-md mx-2",onClick:function(e){return v.openModal(f.isNew=!1,t)}}," 編輯 ",8,["onClick"]),Object(i["i"])("button",{type:"button",class:"btn btn-outline-danger btn-md mx-2",onClick:function(e){return v.delModal(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(i["i"])(y,{pages:v.pagination,onEmitPages:v.getCoupons},null,8,["pages","onEmitPages"])]),Object(i["i"])(C,{ref:"couponModal",coupon:f.tempCoupon,onUpdateCoupon:v.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(i["i"])(w,{ref:"delModal",onDeleteItem:v.deleteProduct},null,8,["onDeleteItem"])],64)})),v=o("5530"),g=(o("99af"),o("a15b"),o("5c0d")),y={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-md",role:"document"},w={class:"modal-content border-0"},x=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"新增優惠券")]),Object(i["i"])("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},k={class:"row"},$={class:"col-sm-8"},D={class:"row gx-2"},L={class:"mb-3 col-md-12"},I=Object(i["i"])("label",{for:"price",class:"form-label"},"優惠名稱",-1),_={class:"row gx-2"},U={class:"mb-3 col-md-12"},P=Object(i["i"])("label",{for:"price",class:"form-label"},"優惠碼",-1),A={class:"row gx-2"},R={class:"mb-3 col-md-12"},V=Object(i["i"])("label",{for:"origin_price",class:"form-label"},"折扣",-1),F={class:"row gx-2"},N={class:"mb-3 col-md-12"},E=Object(i["i"])("label",{for:"price",class:"form-label"},"到期日",-1),J={class:"mb-3"},T={class:"form-check"},z=Object(i["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),q={class:"modal-footer"},B=Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function G(t,e,o,n,c,a){return Object(i["w"])(),Object(i["e"])("div",y,[Object(i["i"])("div",C,[Object(i["i"])("div",w,[x,Object(i["i"])("div",M,[Object(i["i"])("div",k,[Object(i["i"])("div",$,[Object(i["i"])("div",D,[Object(i["i"])("div",L,[I,Object(i["R"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠名稱","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.tempCoupon.title=t})},null,512),[[i["M"],c.tempCoupon.title]])])]),Object(i["i"])("div",_,[Object(i["i"])("div",U,[P,Object(i["R"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.tempCoupon.code=t})},null,512),[[i["M"],c.tempCoupon.code]])])]),Object(i["i"])("div",A,[Object(i["i"])("div",R,[V,Object(i["R"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"percent",min:"10",max:"90",step:"5",placeholder:"請輸入折扣","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.tempCoupon.percent=t})},null,512),[[i["M"],c.tempCoupon.percent,void 0,{number:!0}]])])]),Object(i["i"])("div",F,[Object(i["i"])("div",N,[E,Object(i["R"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.tempCoupon.due_date=t})},null,512),[[i["M"],c.tempCoupon.due_date]])])]),Object(i["i"])("div",J,[Object(i["i"])("div",T,[Object(i["R"])(Object(i["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[5]||(e[5]=function(t){return c.tempCoupon.is_enabled=t}),id:"is_enabled"},null,512),[[i["L"],c.tempCoupon.is_enabled]]),z])])])])]),Object(i["i"])("div",q,[B,Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=function(e){return t.$emit("update-coupon",c.tempCoupon)})},"確認")])])])],512)}var H=o("db44"),K={data:function(){return{modal:{},tempCoupon:{due_date:new Date(2021,9,20).getTime()/1e3}}},props:{coupon:{type:Object,default:function(){return{}}}},mixins:[H["a"]],watch:{coupon:function(){this.tempCoupon=this.coupon}}};K.render=G;var Q=K,S=o("590b"),W=o("1799"),X={data:function(){return{tempCoupon:{},isDelete:!1,deletedID:"",isNew:!1}},components:{LoadingCustom:g["a"],CouponModal:Q,DelModal:S["a"],Pagination:W["a"]},inject:["emitter"],computed:{isLoading:function(){return this.$store.state.isLoading},couponsAdmin:function(){return this.$store.state.couponsAdmin},pagination:function(){return this.$store.state.pagination}},methods:{getCoupons:function(t){this.$store.dispatch("getCouponsAdmin",t)},openModal:function(t,e){this.tempCoupon=t?{}:Object(v["a"])({},e),this.isNew=t;var o=this.$refs.couponModal;o.showModal()},delModal:function(t){this.deletedID=t;var e=this.$refs.delModal;e.showModal()},updateCoupon:function(t){var e=this;this.$store.dispatch("updateLoading",!0),this.tempCoupon=t;var o=this.$refs.couponModal,i="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon"),n="post";this.isNew||(i="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon/").concat(t.id),n="put"),this.$http[n](i,{data:this.tempCoupon}).then((function(t){o.hideModal(),e.getCoupons(),t.data.success?(e.getCoupons(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}),e.$store.dispatch("updateLoading",!1)}))},deleteProduct:function(t){var e=this;this.isDelete=t,this.$store.dispatch("updateLoading",!0);var o=this.$refs.delModal;if(this.isDelete){var i="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon/").concat(this.deletedID);this.$http.delete(i).then((function(t){t.data.success&&(o.hideModal(),e.isDelete=!1,e.deletedID="",e.getCoupons(),e.emitter.emit("push-message",{style:"success",title:"刪除成功"}))}))}this.$store.dispatch("updateLoading",!1)}},created:function(){this.getCoupons()}};o("4859");X.render=f,X.__scopeId="data-v-5efa36b6";e["default"]=X}}]);
//# sourceMappingURL=chunk-6e6813e6.3fa65f00.js.map