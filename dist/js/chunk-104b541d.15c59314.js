(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-104b541d"],{"057f":function(t,e,c){var o=c("fc6a"),r=c("241c").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?a(t):r(o(t))}},"159b":function(t,e,c){var o=c("da84"),r=c("fdbc"),n=c("17c2"),i=c("9112");for(var a in r){var l=o[a],s=l&&l.prototype;if(s&&s.forEach!==n)try{i(s,"forEach",n)}catch(u){s.forEach=n}}},"17c2":function(t,e,c){"use strict";var o=c("b727").forEach,r=c("a640"),n=r("forEach");t.exports=n?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,c){"use strict";var o=c("23e7"),r=c("b727").filter,n=c("1dde"),i=n("filter");o({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,c){var o=c("428f"),r=c("5135"),n=c("e538"),i=c("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||i(e,t,{value:n.f(t)})}},a4d3:function(t,e,c){"use strict";var o=c("23e7"),r=c("da84"),n=c("d066"),i=c("c430"),a=c("83ab"),l=c("4930"),s=c("fdbf"),u=c("d039"),d=c("5135"),b=c("e8b5"),f=c("861d"),p=c("825a"),m=c("7b0b"),h=c("fc6a"),O=c("c04e"),j=c("5c6c"),v=c("7c73"),g=c("df75"),y=c("241c"),w=c("057f"),P=c("7418"),x=c("06cf"),M=c("9bf2"),S=c("d1e7"),k=c("9112"),D=c("6eeb"),U=c("5692"),I=c("f772"),E=c("d012"),$=c("90e3"),F=c("b622"),N=c("e538"),_=c("746f"),C=c("d44e"),L=c("69f3"),R=c("b727").forEach,V=I("hidden"),J="Symbol",T="prototype",A=F("toPrimitive"),Q=L.set,W=L.getterFor(J),q=Object[T],z=r.Symbol,B=n("JSON","stringify"),G=x.f,H=M.f,K=w.f,X=S.f,Y=U("symbols"),Z=U("op-symbols"),tt=U("string-to-symbol-registry"),et=U("symbol-to-string-registry"),ct=U("wks"),ot=r.QObject,rt=!ot||!ot[T]||!ot[T].findChild,nt=a&&u((function(){return 7!=v(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,c){var o=G(q,e);o&&delete q[e],H(t,e,c),o&&t!==q&&H(q,e,o)}:H,it=function(t,e){var c=Y[t]=v(z[T]);return Q(c,{type:J,tag:t,description:e}),a||(c.description=e),c},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},lt=function(t,e,c){t===q&&lt(Z,e,c),p(t);var o=O(e,!0);return p(c),d(Y,o)?(c.enumerable?(d(t,V)&&t[V][o]&&(t[V][o]=!1),c=v(c,{enumerable:j(0,!1)})):(d(t,V)||H(t,V,j(1,{})),t[V][o]=!0),nt(t,o,c)):H(t,o,c)},st=function(t,e){p(t);var c=h(e),o=g(c).concat(pt(c));return R(o,(function(e){a&&!dt.call(c,e)||lt(t,e,c[e])})),t},ut=function(t,e){return void 0===e?v(t):st(v(t),e)},dt=function(t){var e=O(t,!0),c=X.call(this,e);return!(this===q&&d(Y,e)&&!d(Z,e))&&(!(c||!d(this,e)||!d(Y,e)||d(this,V)&&this[V][e])||c)},bt=function(t,e){var c=h(t),o=O(e,!0);if(c!==q||!d(Y,o)||d(Z,o)){var r=G(c,o);return!r||!d(Y,o)||d(c,V)&&c[V][o]||(r.enumerable=!0),r}},ft=function(t){var e=K(h(t)),c=[];return R(e,(function(t){d(Y,t)||d(E,t)||c.push(t)})),c},pt=function(t){var e=t===q,c=K(e?Z:h(t)),o=[];return R(c,(function(t){!d(Y,t)||e&&!d(q,t)||o.push(Y[t])})),o};if(l||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),c=function(t){this===q&&c.call(Z,t),d(this,V)&&d(this[V],e)&&(this[V][e]=!1),nt(this,e,j(1,t))};return a&&rt&&nt(q,e,{configurable:!0,set:c}),it(e,t)},D(z[T],"toString",(function(){return W(this).tag})),D(z,"withoutSetter",(function(t){return it($(t),t)})),S.f=dt,M.f=lt,x.f=bt,y.f=w.f=ft,P.f=pt,N.f=function(t){return it(F(t),t)},a&&(H(z[T],"description",{configurable:!0,get:function(){return W(this).description}}),i||D(q,"propertyIsEnumerable",dt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:z}),R(g(ct),(function(t){_(t)})),o({target:J,stat:!0,forced:!l},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var c=z(e);return tt[e]=c,et[c]=e,c},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!a},{create:ut,defineProperty:lt,defineProperties:st,getOwnPropertyDescriptor:bt}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),o({target:"Object",stat:!0,forced:u((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(m(t))}}),B){var mt=!l||u((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));o({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,c){var o,r=[t],n=1;while(arguments.length>n)r.push(arguments[n++]);if(o=e,(f(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!at(e))return e}),r[1]=e,B.apply(null,r)}})}z[T][A]||k(z[T],A,z[T].valueOf),C(z,J),E[V]=!0},a640:function(t,e,c){"use strict";var o=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&o((function(){c.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,c){var o=c("23e7"),r=c("7b0b"),n=c("df75"),i=c("d039"),a=i((function(){n(1)}));o({target:"Object",stat:!0,forced:a},{keys:function(t){return n(r(t))}})},b727:function(t,e,c){var o=c("0366"),r=c("44ad"),n=c("7b0b"),i=c("50c4"),a=c("65f0"),l=[].push,s=function(t){var e=1==t,c=2==t,s=3==t,u=4==t,d=6==t,b=7==t,f=5==t||d;return function(p,m,h,O){for(var j,v,g=n(p),y=r(g),w=o(m,h,3),P=i(y.length),x=0,M=O||a,S=e?M(p,P):c||b?M(p,0):void 0;P>x;x++)if((f||x in y)&&(j=y[x],v=w(j,x,g),t))if(e)S[x]=v;else if(v)switch(t){case 3:return!0;case 5:return j;case 6:return x;case 2:l.call(S,j)}else switch(t){case 4:return!1;case 7:l.call(S,j)}return d?-1:s||u?u:S}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},dbb4:function(t,e,c){var o=c("23e7"),r=c("83ab"),n=c("56ef"),i=c("fc6a"),a=c("06cf"),l=c("8418");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,c,o=i(t),r=a.f,s=n(o),u={},d=0;while(s.length>d)c=r(o,e=s[d++]),void 0!==c&&l(u,e,c);return u}})},e01a:function(t,e,c){"use strict";var o=c("23e7"),r=c("83ab"),n=c("da84"),i=c("5135"),a=c("861d"),l=c("9bf2").f,s=c("e893"),u=n.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};s(b,u);var f=b.prototype=u.prototype;f.constructor=b;var p=f.toString,m="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var c=m?e.slice(7,-1):e.replace(h,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}},e439:function(t,e,c){var o=c("23e7"),r=c("d039"),n=c("fc6a"),i=c("06cf").f,a=c("83ab"),l=r((function(){i(1)})),s=!a||l;o({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(n(t),e)}})},e538:function(t,e,c){var o=c("b622");e.f=o},e6dc:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),r={class:"text-end mt-3"},n={class:"table mt-4 text-white"},i=Object(o["i"])("thead",null,[Object(o["i"])("tr",null,[Object(o["i"])("th",{width:"120"},"分類"),Object(o["i"])("th",null,"產品名稱"),Object(o["i"])("th",{width:"120"},"原價"),Object(o["i"])("th",{width:"120"},"售價"),Object(o["i"])("th",{width:"100"},"是否啟用"),Object(o["i"])("th",{width:"200"},"編輯")])],-1),a={class:"text-right"},l={class:"text-right"},s={key:0,class:"text-success"},u={key:1,class:"text-muted"},d={class:"btn-group"};function b(t,e,c,b,f,p){var m=Object(o["F"])("loading"),h=Object(o["F"])("productModal"),O=Object(o["F"])("delModal");return Object(o["w"])(),Object(o["e"])(o["a"],null,[Object(o["i"])(m,{active:f.isLoading},null,8,["active"]),Object(o["i"])("div",r,[Object(o["i"])("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=function(t){return p.openModal(f.isNew=!0)})}," 增加產品 ")]),Object(o["i"])("table",n,[i,Object(o["i"])("tbody",null,[(Object(o["w"])(!0),Object(o["e"])(o["a"],null,Object(o["D"])(f.products,(function(t){return Object(o["w"])(),Object(o["e"])("tr",{key:t.id},[Object(o["i"])("td",null,Object(o["I"])(t.category),1),Object(o["i"])("td",null,Object(o["I"])(t.title),1),Object(o["i"])("td",a,Object(o["I"])(t.origin_price),1),Object(o["i"])("td",l,Object(o["I"])(t.price),1),Object(o["i"])("td",null,[t.is_enabled?(Object(o["w"])(),Object(o["e"])("span",s,"啟用")):(Object(o["w"])(),Object(o["e"])("span",u,"未啟用"))]),Object(o["i"])("td",null,[Object(o["i"])("div",d,[Object(o["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return p.openModal(f.isNew=!1,t)}}," 編輯 ",8,["onClick"]),Object(o["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return p.delModal(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["i"])(h,{ref:"productModal",product:f.tempProduct,onUpdateProduct:p.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["i"])(O,{ref:"delModal",onDeleteItem:p.deleteProduct},null,8,["onDeleteItem"])],64)}c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function f(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function p(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}function m(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?p(Object(c),!0).forEach((function(e){f(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):p(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}c("99af"),c("e01a");var h={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},v=Object(o["i"])("div",{class:"modal-header bg-dark text-white"},[Object(o["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["i"])("span",null,"新增產品")]),Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},y={class:"row"},w={class:"col-sm-4"},P={class:"mb-3"},x=Object(o["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},S=Object(o["i"])("label",{for:"customFile",class:"form-label"},[Object(o["h"])("或 上傳圖片 "),Object(o["i"])("i",{class:"fas fa-spinner fa-spin"})],-1),k=Object(o["g"])('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',1),D={class:"col-sm-8"},U={class:"mb-3"},I=Object(o["i"])("label",{for:"title",class:"form-label"},"標題",-1),E={class:"row gx-2"},$={class:"mb-3 col-md-6"},F=Object(o["i"])("label",{for:"category",class:"form-label"},"分類",-1),N={class:"mb-3 col-md-6"},_=Object(o["i"])("label",{for:"price",class:"form-label"},"單位",-1),C={class:"row gx-2"},L={class:"mb-3 col-md-6"},R=Object(o["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),V={class:"mb-3 col-md-6"},J=Object(o["i"])("label",{for:"price",class:"form-label"},"售價",-1),T=Object(o["i"])("hr",null,null,-1),A={class:"mb-3"},Q=Object(o["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),W={class:"mb-3"},q=Object(o["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),z={class:"mb-3"},B={class:"form-check"},G=Object(o["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),H={class:"modal-footer"},K=Object(o["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function X(t,e,c,r,n,i){return Object(o["w"])(),Object(o["e"])("div",h,[Object(o["i"])("div",O,[Object(o["i"])("div",j,[v,Object(o["i"])("div",g,[Object(o["i"])("div",y,[Object(o["i"])("div",w,[Object(o["i"])("div",P,[x,Object(o["R"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.tempProduct.imageUrl=t})},null,512),[[o["M"],n.tempProduct.imageUrl]])]),Object(o["i"])("div",M,[S,Object(o["i"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[2]||(e[2]=function(){return i.uploadFile&&i.uploadFile.apply(i,arguments)})},null,544)]),Object(o["i"])("img",{class:"img-fluid",alt:"",src:n.tempProduct.imageUrl},null,8,["src"]),k]),Object(o["i"])("div",D,[Object(o["i"])("div",U,[I,Object(o["R"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempProduct.title=t})},null,512),[[o["M"],n.tempProduct.title]])]),Object(o["i"])("div",E,[Object(o["i"])("div",$,[F,Object(o["R"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.category=t})},null,512),[[o["M"],n.tempProduct.category]])]),Object(o["i"])("div",N,[_,Object(o["R"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.unit=t})},null,512),[[o["M"],n.tempProduct.unit]])])]),Object(o["i"])("div",C,[Object(o["i"])("div",L,[R,Object(o["R"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.origin_price=t})},null,512),[[o["M"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["i"])("div",V,[J,Object(o["R"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.price=t})},null,512),[[o["M"],n.tempProduct.price,void 0,{number:!0}]])])]),T,Object(o["i"])("div",A,[Q,Object(o["R"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.description=t})},null,512),[[o["M"],n.tempProduct.description]])]),Object(o["i"])("div",W,[q,Object(o["R"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.content=t})},null,512),[[o["M"],n.tempProduct.content]])]),Object(o["i"])("div",z,[Object(o["i"])("div",B,[Object(o["R"])(Object(o["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.is_enabled=t})},null,512),[[o["L"],n.tempProduct.is_enabled]]),G])])])])]),Object(o["i"])("div",H,[K,Object(o["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(e){return t.$emit("update-product",n.tempProduct)})},"確認")])])])],512)}var Y=c("db44"),Z={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},mixins:[Y["a"]],data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/upload");this.$http.post(o,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}}};Z.render=X;var tt=Z,et=c("6ff1"),ct={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isDelete:!1,deletedID:"",isLoading:!1}},components:{productModal:tt,delModal:et["a"]},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination,t.isLoading=!1)}))},openModal:function(t,e){this.tempProduct=t?{}:m({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},delModal:function(t){this.deletedID=t;var e=this.$refs.delModal;e.showModal()},updateProduct:function(t){var e=this;this.isLoading=!0,this.tempProduct=t;var c=this.$refs.productModal,o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/product"),r="post";this.isNew||(o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/product/").concat(t.id),r="put"),this.$http[r](o,{data:this.tempProduct}).then((function(t){c.hideModal(),console.log(t),e.getProducts()}))},deleteProduct:function(t){var e=this;this.isDelete=t;var c=this.$refs.delModal;if(this.isLoading=!0,this.isDelete){var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sly8462","/admin/product/").concat(this.deletedID);this.$http.delete(o).then((function(t){c.hideModal(),e.isDelete=!1,e.deletedID="",e.getProducts(),alert("刪除成功")}))}}},created:function(){this.getProducts()}};ct.render=b;e["default"]=ct}}]);
//# sourceMappingURL=chunk-104b541d.15c59314.js.map