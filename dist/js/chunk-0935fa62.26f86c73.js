(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0935fa62"],{"590b":function(e,t,o){"use strict";var c=o("7a23"),l={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static"},i={class:"modal-dialog"},a={class:"modal-content"},n=Object(c["i"])("div",{class:"modal-header"},[Object(c["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},"!!!注意!!!您準備刪除該物品"),Object(c["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),d=Object(c["i"])("div",{class:"modal-body"}," 確定要刪除該物品嗎????? ",-1),s={class:"modal-footer"},b=Object(c["i"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function u(e,t,o,u,r,p){return Object(c["w"])(),Object(c["e"])("div",l,[Object(c["i"])("div",i,[Object(c["i"])("div",a,[n,d,Object(c["i"])("div",s,[b,Object(c["i"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(){return p.comfirmDel&&p.comfirmDel.apply(p,arguments)})},"確定")])])])],512)}var r=o("db44"),p={mixins:[r["a"]],data:function(){return{modal:{},isDelete:!0}},methods:{comfirmDel:function(){this.$emit("delete-item",this.isDelete)}}};p.render=u;t["a"]=p},e532:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),l={class:"text-end"},i={class:"table mt-4 text-white m-auto",style:{"max-width":"1140px"}},a=Object(c["i"])("thead",null,[Object(c["i"])("tr",null,[Object(c["i"])("th",{width:"150"},"優惠名稱"),Object(c["i"])("th",{width:"150"},"優惠碼"),Object(c["i"])("th",{width:"150"},"折扣"),Object(c["i"])("th",{width:"150"},"到期日"),Object(c["i"])("th",{width:"150"},"是否啟用"),Object(c["i"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},d={class:"text-right"},s={key:0,class:"text-success"},b={key:1,class:"text-muted"},u={class:"btn-group"};function r(e,t,o,r,p,m){var j=Object(c["F"])("loading"),O=Object(c["F"])("couponModal"),h=Object(c["F"])("delModal");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(j,{active:p.isLoading},null,8,["active"]),Object(c["i"])("div",l,[Object(c["i"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return m.openModal&&m.openModal.apply(m,arguments)})}," 增加優惠券 ")]),Object(c["i"])("table",i,[a,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(p.coupons,(function(t){return Object(c["w"])(),Object(c["e"])("tr",{key:t.id},[Object(c["i"])("td",null,Object(c["I"])(t.title),1),Object(c["i"])("td",null,Object(c["I"])(t.code),1),Object(c["i"])("td",n,Object(c["I"])(t.percent)+"%",1),Object(c["i"])("td",d,Object(c["I"])(t.due_date),1),Object(c["i"])("td",null,[t.is_enabled?(Object(c["w"])(),Object(c["e"])("span",s,"啟用")):(Object(c["w"])(),Object(c["e"])("span",b,"未啟用"))]),Object(c["i"])("td",null,[Object(c["i"])("div",u,[Object(c["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(o){return m.openModal(e.isNew=!1,t)}}," 編輯 ",8,["onClick"]),Object(c["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return m.delModal(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(c["i"])(O,{ref:"couponModal",coupon:p.tempCoupon,onUpdateCoupon:m.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(c["i"])(h,{ref:"delModal",onDeleteItem:m.deleteProduct},null,8,["onDeleteItem"])],64)}o("99af");var p={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},m={class:"modal-dialog modal-md",role:"document"},j={class:"modal-content border-0"},O=Object(c["i"])("div",{class:"modal-header bg-dark text-white"},[Object(c["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["i"])("span",null,"新增優惠券")]),Object(c["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},f={class:"row"},v={class:"col-sm-8"},C={class:"row gx-2"},w={class:"mb-3 col-md-12"},y=Object(c["i"])("label",{for:"price",class:"form-label"},"優惠名稱",-1),g={class:"row gx-2"},x={class:"mb-3 col-md-12"},M=Object(c["i"])("label",{for:"price",class:"form-label"},"優惠碼",-1),k={class:"row gx-2"},D={class:"mb-3 col-md-12"},L=Object(c["i"])("label",{for:"origin_price",class:"form-label"},"折扣",-1),_={class:"row gx-2"},I={class:"mb-3 col-md-12"},$=Object(c["i"])("label",{for:"price",class:"form-label"},"到期日",-1),U={class:"mb-3"},R={class:"form-check"},V=Object(c["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),F={class:"modal-footer"},J=Object(c["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function P(e,t,o,l,i,a){return Object(c["w"])(),Object(c["e"])("div",p,[Object(c["i"])("div",m,[Object(c["i"])("div",j,[O,Object(c["i"])("div",h,[Object(c["i"])("div",f,[Object(c["i"])("div",v,[Object(c["i"])("div",C,[Object(c["i"])("div",w,[y,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠名稱","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.tempCoupon.title=e})},null,512),[[c["M"],i.tempCoupon.title]])])]),Object(c["i"])("div",g,[Object(c["i"])("div",x,[M,Object(c["R"])(Object(c["i"])("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.tempCoupon.code=e})},null,512),[[c["M"],i.tempCoupon.code]])])]),Object(c["i"])("div",k,[Object(c["i"])("div",D,[L,Object(c["R"])(Object(c["i"])("input",{type:"number",class:"form-control",id:"percent",min:"10",max:"90",step:"5",placeholder:"請輸入折扣","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.tempCoupon.percent=e})},null,512),[[c["M"],i.tempCoupon.percent,void 0,{number:!0}]])])]),Object(c["i"])("div",_,[Object(c["i"])("div",I,[$,Object(c["R"])(Object(c["i"])("input",{type:"number",class:"form-control",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.tempCoupon.due_date=e})},null,512),[[c["M"],i.tempCoupon.due_date]])])]),Object(c["i"])("div",U,[Object(c["i"])("div",R,[Object(c["R"])(Object(c["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.tempCoupon.is_enabled=e}),id:"is_enabled"},null,512),[[c["L"],i.tempCoupon.is_enabled]]),V])])])])]),Object(c["i"])("div",F,[J,Object(c["i"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(t){return e.$emit("update-coupon",i.tempCoupon)})},"確認")])])])],512)}var T=o("db44"),N={props:{coupon:{type:Object,default:function(){return{}}}},watch:{coupon:function(){this.tempCoupon=this.coupon}},mixins:[T["a"]],data:function(){return{modal:{},tempCoupon:{due_date:new Date(2021,9,20).getTime()/1e3}}}};N.render=P;var q=N,z=o("590b"),A={data:function(){return{coupons:[],isLoading:!1,tempCoupon:{},isDelete:!1,deletedID:""}},components:{couponModal:q,delModal:z["a"]},methods:{getCoupons:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupons");this.isLoading=!0,this.$http.get(t).then((function(t){t.data.success&&(console.log(t),e.coupons=t.data.coupons,e.isLoading=!1)}))},openModal:function(){var e=this.$refs.couponModal;e.showModal()},delModal:function(e){this.deletedID=e;var t=this.$refs.delModal;t.showModal()},updateCoupon:function(e){var t=this;this.isLoading=!0,this.tempCoupon=e;var o=this.$refs.couponModal,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon"),l="post";this.$http[l](c,{data:this.tempCoupon}).then((function(e){console.log("庫碰眷",e),t.tempCoupon={},o.hideModal(),t.getCoupons()}))},deleteProduct:function(e){var t=this;this.isDelete=e;var o=this.$refs.delModal;if(this.isLoading=!0,this.isDelete){var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/coupon/").concat(this.deletedID);this.$http.delete(c).then((function(e){console.log(e),o.hideModal(),t.isDelete=!1,t.deletedID="",t.getCoupons(),alert("刪除成功")}))}}},created:function(){this.getCoupons(),console.log(new Date(2021,9,20).getTime())}};A.render=r;t["default"]=A}}]);
//# sourceMappingURL=chunk-0935fa62.26f86c73.js.map