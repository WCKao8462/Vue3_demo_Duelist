(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9124e730"],{a15b:function(t,e,o){"use strict";var c=o("23e7"),i=o("44ad"),n=o("fc6a"),a=o("a640"),s=[].join,l=i!=Object,d=a("join",",");c({target:"Array",proto:!0,forced:l||!d},{join:function(t){return s.call(n(this),void 0===t?",":t)}})},e31c:function(t,e,o){},e532:function(t,e,o){"use strict";o.r(e);var c=o("7a23"),i=Object(c["T"])("data-v-2a09bf98");Object(c["z"])("data-v-2a09bf98");var n={class:"text-end"},a={class:"container"},s={class:"table mt-4 text-white m-auto text-center mb-5",style:{"min-width":"800px"}},l=Object(c["i"])("thead",null,[Object(c["i"])("tr",{class:"fs-5"},[Object(c["i"])("th",{width:"150",class:"py-4 text-info"},"優惠名稱"),Object(c["i"])("th",{width:"150",class:"py-4 text-info"},"優惠碼"),Object(c["i"])("th",{width:"150",class:"py-4 text-info"},"折扣"),Object(c["i"])("th",{width:"150",class:"py-4 text-info"},"到期日"),Object(c["i"])("th",{width:"150",class:"py-4 text-info"},"是否啟用"),Object(c["i"])("th",{width:"200",class:"py-4 text-info"},"編輯")])],-1),d={class:"py-3"},u={class:"py-3"},p={class:"py-3"},b={class:"py-3"},r={class:"py-3"},m={key:0,class:"text-success"},j={key:1,class:"text-muted"},O={class:"py-3"},h={class:"btn-group"};Object(c["x"])();var f=i((function(t,e,o,i,f,v){var g=Object(c["F"])("loadingCustom"),y=Object(c["F"])("pagination"),C=Object(c["F"])("couponModal"),w=Object(c["F"])("delModal");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(g,{tempIsLoading:v.isLoading},null,8,["tempIsLoading"]),Object(c["i"])("div",n,[Object(c["i"])("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=function(){return v.openModal&&v.openModal.apply(v,arguments)})}," 增加優惠券 ")]),Object(c["i"])("div",a,[Object(c["i"])("table",s,[l,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(v.couponsAdmin,(function(t){return Object(c["w"])(),Object(c["e"])("tr",{key:t.id},[Object(c["i"])("td",d,Object(c["I"])(t.title),1),Object(c["i"])("td",u,Object(c["I"])(t.code),1),Object(c["i"])("td",p,Object(c["I"])(t.percent)+"%",1),Object(c["i"])("td",b,Object(c["I"])(t.due_date),1),Object(c["i"])("td",r,[t.is_enabled?(Object(c["w"])(),Object(c["e"])("span",m,"啟用")):(Object(c["w"])(),Object(c["e"])("span",j,"未啟用"))]),Object(c["i"])("td",O,[Object(c["i"])("div",h,[Object(c["i"])("button",{class:"btn btn-outline-primary btn-md mx-2",onClick:function(e){return v.openModal(f.isNew=!1,t)}}," 編輯 ",8,["onClick"]),Object(c["i"])("button",{class:"btn btn-outline-danger btn-md mx-2",onClick:function(e){return v.delModal(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(c["i"])(y,{pages:v.pagination,onEmitPages:v.getCoupons},null,8,["pages","onEmitPages"])]),Object(c["i"])(C,{ref:"couponModal",coupon:f.tempCoupon,onUpdateCoupon:v.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(c["i"])(w,{ref:"delModal",onDeleteItem:v.deleteProduct},null,8,["onDeleteItem"])],64)})),v=o("5530"),g=(o("99af"),o("a15b"),o("5c0d")),y={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-md",role:"document"},w={class:"modal-content border-0"},x=Object(c["i"])("div",{class:"modal-header bg-dark text-white"},[Object(c["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["i"])("span",null,"新增優惠券")]),Object(c["i"])("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},k={class:"row"},$={class:"col-sm-8"},I={class:"row gx-2"},_={class:"mb-3 col-md-12"},D=Object(c["i"])("label",{for:"price",class:"form-label"},"優惠名稱",-1),L={class:"row gx-2"},U={class:"mb-3 col-md-12"},A=Object(c["i"])("label",{for:"price",class:"form-label"},"優惠碼",-1),R={class:"row gx-2"},V={class:"mb-3 col-md-12"},F=Object(c["i"])("label",{for:"origin_price",class:"form-label"},"折扣",-1),N={class:"row gx-2"},P={class:"mb-3 col-md-12"},E=Object(c["i"])("label",{for:"price",class:"form-label"},"到期日",-1),J={class:"mb-3"},T={class:"form-check"},z=Object(c["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),q={class:"modal-footer"},B=Object(c["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function G(t,e,o,i,n,a){return Object(c["w"])(),Object(c["e"])("div",y,[Object(c["i"])("div",C,[Object(c["i"])("div",w,[x,Object(c["i"])("div",M,[Object(c["i"])("div",k,[Object(c["i"])("div",$,[Object(c["i"])("div",I,[Object(c["i"])("div",_,[D,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠名稱","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.tempCoupon.title=t})},null,512),[[c["M"],n.tempCoupon.title]])])]),Object(c["i"])("div",L,[Object(c["i"])("div",U,[A,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return n.tempCoupon.code=t})},null,512),[[c["M"],n.tempCoupon.code]])])]),Object(c["i"])("div",R,[Object(c["i"])("div",V,[F,Object(c["R"])(Object(c["i"])("input",{type:"number",class:"form-control",id:"percent",min:"10",max:"90",step:"5",placeholder:"請輸入折扣","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempCoupon.percent=t})},null,512),[[c["M"],n.tempCoupon.percent,void 0,{number:!0}]])])]),Object(c["i"])("div",N,[Object(c["i"])("div",P,[E,Object(c["R"])(Object(c["i"])("input",{type:"number",class:"form-control",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempCoupon.due_date=t})},null,512),[[c["M"],n.tempCoupon.due_date]])])]),Object(c["i"])("div",J,[Object(c["i"])("div",T,[Object(c["R"])(Object(c["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempCoupon.is_enabled=t}),id:"is_enabled"},null,512),[[c["L"],n.tempCoupon.is_enabled]]),z])])])])]),Object(c["i"])("div",q,[B,Object(c["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=function(e){return t.$emit("update-coupon",n.tempCoupon)})},"確認")])])])],512)}var H=o("db44"),K={data:function(){return{modal:{},tempCoupon:{due_date:new Date(2021,9,20).getTime()/1e3}}},props:{coupon:{type:Object,default:function(){return{}}}},watch:{coupon:function(){this.tempCoupon=this.coupon}},mixins:[H["a"]]};K.render=G;var Q=K,S=o("590b"),W=o("1799"),X={data:function(){return{tempCoupon:{},isDelete:!1,deletedID:"",isNew:!1}},components:{loadingCustom:g["a"],couponModal:Q,delModal:S["a"],pagination:W["a"]},inject:["emitter"],computed:{isLoading:function(){return this.$store.state.isLoading},couponsAdmin:function(){return this.$store.state.couponsAdmin},pagination:function(){return this.$store.state.pagination}},methods:{getCoupons:function(t){this.$store.dispatch("getCouponsAdmin",t)},openModal:function(t,e){this.tempCoupon=t?{}:Object(v["a"])({},e),this.isNew=t;var o=this.$refs.couponModal;o.showModal()},delModal:function(t){this.deletedID=t;var e=this.$refs.delModal;e.showModal()},updateCoupon:function(t){var e=this;this.$store.dispatch("updateLoading",!0),this.tempCoupon=t;var o=this.$refs.couponModal,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon"),i="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon/").concat(t.id),i="put"),this.$http[i](c,{data:this.tempCoupon}).then((function(t){o.hideModal(),e.getCoupons(),t.data.success?(e.getCoupons(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}),e.$store.dispatch("updateLoading",!1)}))},deleteProduct:function(t){var e=this;this.isDelete=t,this.$store.dispatch("updateLoading",!0);var o=this.$refs.delModal;if(this.isDelete){var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon/").concat(this.deletedID);this.$http.delete(c).then((function(t){t.data.success&&(o.hideModal(),e.isDelete=!1,e.deletedID="",e.getCoupons(),e.emitter.emit("push-message",{style:"success",title:"刪除成功"}))}))}this.$store.dispatch("updateLoading",!1)}},created:function(){this.getCoupons()}};o("fe21");X.render=f,X.__scopeId="data-v-2a09bf98";e["default"]=X},fe21:function(t,e,o){"use strict";o("e31c")}}]);
//# sourceMappingURL=chunk-9124e730.415da0b1.js.map