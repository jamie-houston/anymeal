(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(t,e,n){var content=n(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("e510ae4e",content,!0,{sourceMap:!1})},305:function(t,e,n){var content=n(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3b8c6356",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var r=n(9),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),v=n(44),m=n(13);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h,_=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"style",get:function(){return"background-color: ".concat(this.tag.color.rgb,";")}}]),n}(v.e);_([Object(v.c)(),j("design:type","function"==typeof(h=void 0!==m.a&&m.a)?h:Object)],O.prototype,"tag",void 0),_([Object(v.c)(),j("design:type",Boolean)],O.prototype,"showName",void 0);var R=O=_([v.a],O),w=(n(316),n(25)),component=Object(w.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 py-1 rounded-full inline-block",style:t.style},[n("span",{staticClass:"tag-icon"},[t._v("\n    "+t._s(t.tag.icon)+"\n  ")]),t._v(" "),t.showName?[n("span",{staticClass:"text-xs"},[t._v("\n      "+t._s(t.tag.name)+"\n    ")])]:t._e()],2)}),[],!1,null,"7f20f38e",null);e.a=component.exports},316:function(t,e,n){"use strict";n(304)},317:function(t,e,n){(e=n(49)(!1)).push([t.i,".tag-icon[data-v-7f20f38e]{text-shadow:1px 1px 2px #000}",""]),t.exports=e},318:function(t,e,n){"use strict";n(305)},319:function(t,e,n){(e=n(49)(!1)).push([t.i,".delete-icon[data-v-cd760b84]{top:50%;transform:translateY(-50%);right:8px}",""]),t.exports=e},324:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var r=n(9),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),v=n(44);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).searchTerm="",t}return Object(c.a)(n,[{key:"getFilterPredicate",value:function(t){throw new Error("Not implemented")}},{key:"displayableItems",get:function(){return this.items.filter(this.getFilterPredicate(this.searchTerm))}}]),n}(v.e);y([Object(v.c)({default:[]}),h("design:type",Array)],_.prototype,"items",void 0),y([Object(v.d)(),h("design:type",Object)],_.prototype,"searchTerm",void 0);var j=_,O=(n(318),n(25)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex-0"},[n("label",{staticClass:"mb-2",attrs:{for:"search"}},[n("span",{staticClass:"font-bold"},[t._v(t._s(t.$t("search.title")))]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("("+t._s(t.$t("search.hint"))+")")])]),t._v(" "),n("div",{staticClass:"relative mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"search",type:"text"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),t.searchTerm&&t.searchTerm.length>0?n("font-awesome-icon",{staticClass:"right-0 top-0.5 absolute cursor-pointer delete-icon",attrs:{icon:["fas","times"]},on:{click:function(e){t.searchTerm=""}}}):t._e()],1),t._v(" "),n("p",{staticClass:"text-xs mb-2"},[t._v("\n      "+t._s(t.$t("search.showingXofY",{x:t.displayableItems?t.displayableItems.length:0,y:t.items.length}))+"\n    ")])]),t._v(" "),t._t("default",null,{items:t.displayableItems})],2)}),[],!1,null,"cd760b84",null);e.a=component.exports},340:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var r=n(9),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),v=n(44),m=n(68),y=n(93),h=n(137);n(109);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(t){Object(o.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).editingEntity=null,t}return Object(c.a)(n,[{key:"createNew",value:function(){var t=this;this.createNewEntityFunction(),this.$nextTick((function(){t.editingEntity=t.items[t.items.length-1],t.$nextTick((function(){t.$refs.editModal.show()}))}))}},{key:"edit",value:function(t){var e=this;this.editingEntity=t,this.$nextTick((function(){e.$refs.editModal.show()}))}},{key:"deleteEntity",value:function(t){this.$refs.editModal.hide(),this.deleteEntityFunction(t)}}]),n}(v.e);j([Object(v.c)(),O("design:type",Function)],R.prototype,"createNewEntityFunction",void 0),j([Object(v.c)(),O("design:type",Function)],R.prototype,"deleteEntityFunction",void 0),j([Object(v.c)(),O("design:type",Array)],R.prototype,"items",void 0),j([Object(v.c)(),O("design:type",String)],R.prototype,"translationKey",void 0),j([Object(v.d)(),O("design:type",Object)],R.prototype,"editingEntity",void 0);var w=R=j([Object(v.a)({components:{FButton:y.a,FModal:h.a,FontAwesomeIcon:m.a}})],R),x=n(25),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-3xl"},[t._v("\n    "+t._s(t.$t(t.translationKey+".title"))+"\n  ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t(t.translationKey+".introduction"))+"\n  ")]),t._v(" "),n("f-button",{staticClass:"mb-4 create-new-button",on:{click:t.createNew}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","plus"]}}),t._v("\n    "+t._s(t.$t(t.translationKey+".edit.new"))+"\n  ")],1),t._v(" "),t._t("searchableList",null,{editFunction:t.edit}),t._v(" "),t.editingEntity?n("f-modal",{ref:"editModal"},[n("div",{staticClass:"flex my-4"},[n("h2",{staticClass:"text-xl flex-1"},[t._v("\n        "+t._s(t.$t(t.translationKey+".edit.modalTitle"))+"\n      ")]),t._v(" "),n("div",[n("f-button",{staticClass:"flex-0",on:{click:function(e){return t.deleteEntity(t.editingEntity)}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","trash"]}}),t._v("\n          "+t._s(t.$t(t.translationKey+".edit.delete"))+"\n        ")],1)],1)]),t._v(" "),t._t("editModalForm",null,{editingEntity:t.editingEntity}),t._v(" "),n("f-button",{staticClass:"w-full mb-2",on:{click:function(e){return t.$refs.editModal.hide()}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","check"]}}),t._v("\n      "+t._s(t.$t(t.translationKey+".edit.save"))+"\n    ")],1)],2):t._e()],2)}),[],!1,null,null,null);e.a=component.exports},351:function(t,e,n){"use strict";n(22),n(23),n(15),n(67),n(72);var r=n(9),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),v=n(44);n(11);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"getFilterPredicate",value:function(t){var e=t.split(",").map((function(s){return s.trim()}));return function(t){return e.some((function(e){return e.split("&").map((function(s){return s.trim()})).every((function(e){return t.doesMatch(e)}))}))}}}]),n}(n(324).a);h=y([v.a],h),e.a=h},379:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("84129492",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(379)},446:function(t,e,n){(e=n(49)(!1)).push([t.i,".amount-input[data-v-740f079c]{max-width:60px}",""]),t.exports=e},706:function(t,e,n){"use strict";n.r(e);n(22),n(23),n(67),n(30),n(15),n(46),n(198);var r=n(66),c=n(9),o=n(24),l=n(34),f=n(35),d=n(20),v=n(5),m=n(44),y=n(351),h=(n(7),n(340)),_=n(11),j=n(315),O=(n(27),n(3)),R=n(2),w=n(93);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var C=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},k=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},$=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).innerValue=t.createDeepCopy(t.value),t.ingredients=t.$store.state.ingredients,t}return Object(o.a)(n,[{key:"updateIngredient",value:function(t,e){this.innerValue[t].ingredient=this.ingredients[parseInt(e.target.value)],this.emitChange()}},{key:"updateAmount",value:function(t,e){this.innerValue[t].amount=parseFloat(e.target.value),this.emitChange()}},{key:"removeIngredient",value:function(t){this.innerValue.splice(t,1),this.emitChange()}},{key:"addIngredient",value:function(){this.innerValue=[new R.a(this.ingredients[0],0)].concat(Object(r.a)(this.innerValue)),this.emitChange()}},{key:"emitChange",value:function(){this.$emit("input",this.createDeepCopy(this.innerValue))}},{key:"createDeepCopy",value:function(t){return JSON.parse(JSON.stringify(t)).map((function(t){return Object(O.deserialize)(t,R.a)}))}},{key:"sortedIngredients",get:function(){return this.ingredients.sort((function(a,b){var t=a.name.toUpperCase(),e=b.name.toUpperCase();return t<e?-1:t>e?1:0}))}}]),n}(m.e);C([Object(m.c)({required:!0}),k("design:type",Array)],$.prototype,"value",void 0),C([Object(m.d)(),k("design:type",Array)],$.prototype,"innerValue",void 0),C([Object(m.d)(),k("design:type",Array)],$.prototype,"ingredients",void 0);var E=$=C([Object(m.a)({components:{FButton:w.a}})],$),P=(n(445),n(25)),D=Object(P.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("f-button",{staticClass:"w-full mb-2",on:{click:t.addIngredient}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","cart-plus"]}}),t._v("\n    "+t._s(t.$t("meals.edit.addIngredient"))+"\n  ")],1),t._v(" "),n("ul",t._l(t.innerValue,(function(e,r){return n("li",{key:e.ingredient.name+r,staticClass:"flex items-center shadow-lg mb-4 p-1 bg-gray-100"},[n("button",{staticClass:"text-xl px-4 py-3",attrs:{"aria-label":t.$t("meals.edit.removeIngredient")},on:{click:function(e){return t.removeIngredient(r)}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1),t._v(" "),n("input",{staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none flex-1 amount-input",attrs:{id:e.ingredient.name+"_"+r+"_amount",type:"number"},domProps:{value:e.amount},on:{input:function(e){return t.updateAmount(r,e)}}}),t._v(" "),n("span",{staticClass:"mr-4"},[t._v("\n        "+t._s(e.ingredient.unit)+"\n      ")]),t._v(" "),n("select",{staticClass:"border-b-2 border-black bg-transparent focus:bg-yellow-200 p-2 outline-none mr-4 flex-1 w-full",attrs:{id:e.ingredient.name+"_"+r+"_ingredient"},on:{input:function(e){return t.updateIngredient(r,e)}}},t._l(t.sortedIngredients,(function(c,o){return n("option",{key:c.name+"_select_"+r+"_"+o,domProps:{selected:c.name===e.ingredient.name,value:o}},[t._v("\n          "+t._s(c.name)+"\n        ")])})),0)])})),0)],1)}),[],!1,null,"740f079c",null).exports;function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var I=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},F=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},M=function(t){Object(l.a)(n,t);var e=T(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).tags=t.$store.state.tags,t}return Object(o.a)(n,[{key:"createNew",value:function(){var t=new _.a("","",[],[],"");this.$store.commit("SET_MEAL",{index:this.items.length,meal:t})}},{key:"deleteItem",value:function(t){this.$store.commit("DELETE_MEAL",{meal:t})}},{key:"items",get:function(){var t=this,e={get:function(e,n){return"object"!==Object(v.a)(e[n])||null===e[n]?e[n]:new Proxy(e[n],{get:function(t,e){return t[e]},set:function(e,c,o){return Array.isArray(o)&&(o=Object(r.a)(new Set(o))),t.$store.commit("UPDATE_MEAL_PROPERTY",{index:n,key:c,meal:e,value:o}),!0}})}};return new Proxy(this.$store.state.meals,e)}}]),n}(m.e);I([Object(m.d)(),F("design:type",Object)],M.prototype,"tags",void 0);var N=M=I([Object(m.a)({components:{SearchableMealList:y.a,EditPage:h.a,TagPill:j.a,MealIngredientEditor:D},head:function(){return{title:this.$t("meals.title")}}})],M),A=Object(P.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("edit-page",{attrs:{"create-new-entity-function":t.createNew,"delete-entity-function":t.deleteItem,items:t.items,"translation-key":"meals"},scopedSlots:t._u([{key:"searchableList",fn:function(e){var r=e.editFunction;return[n("searchable-meal-list",{attrs:{items:t.items},scopedSlots:t._u([{key:"default",fn:function(e){var c=e.items;return[n("ul",t._l(c,(function(e){return n("li",{key:e.title,staticClass:"transition-all duration-150 ease-in-out mb-4 p-3 bg-white hover:bg-yellow-100 shadow-lg hover:shadow-xl cursor-pointer",on:{click:function(t){return r(e)}}},[n("span",{staticClass:"mr-4"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),t._l(e.tags,(function(t){return n("tag-pill",{key:t.name+"_"+e.title,staticClass:"mr-2",attrs:{tag:t,"show-name":!1}})}))],2)})),0)]}}],null,!0)})]}},{key:"editModalForm",fn:function(e){var r=e.editingEntity;return[r?n("div",[n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editTitle"}},[t._v("\n          "+t._s(t.$t("meals.edit.title"))+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.title,expression:"editingEntity.title"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editTitle",type:"text"},domProps:{value:r.title},on:{input:function(e){e.target.composing||t.$set(r,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editUrl"}},[t._v("\n          "+t._s(t.$t("meals.edit.url"))+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.url,expression:"editingEntity.url"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editUrl",type:"text"},domProps:{value:r.url},on:{input:function(e){e.target.composing||t.$set(r,"url",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editNotes"}},[t._v("\n          "+t._s(t.$t("meals.edit.notes"))+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.notes,expression:"editingEntity.notes"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editNotes",type:"text"},domProps:{value:r.notes},on:{input:function(e){e.target.composing||t.$set(r,"notes",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-8"},[n("p",{staticClass:"mb-2 font-bold"},[t._v("\n          "+t._s(t.$t("meals.edit.tags"))+"\n        ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n          "+t._s(t.$t("meals.edit.tagsHint"))+"\n        ")]),t._v(" "),n("div",{staticClass:"pt-2 pl-2 mb-2 bg-yellow-200 border-b-2 border-black"},[n("span",{staticClass:"mb-2 inline-block"},[t._v("\n            "+t._s(t.$t("meals.edit.assignedTags"))+"\n          ")]),t._v(" "),n("draggable",{attrs:{group:{name:"tag",put:!0}},model:{value:r.tags,callback:function(e){t.$set(r,"tags",e)},expression:"editingEntity.tags"}},t._l(r.tags,(function(t){return n("tag-pill",{key:t.name,staticClass:"mr-2 mb-2",attrs:{tag:t,"show-name":!0}})})),1)],1),t._v(" "),n("span",{staticClass:"mb-2 inline-block"},[t._v("\n          "+t._s(t.$t("meals.edit.allTags"))+"\n        ")]),t._v(" "),n("draggable",{attrs:{group:{name:"tag",pull:"clone",put:!0},list:[].concat(t.tags)}},t._l(t.tags,(function(t){return n("tag-pill",{key:t.name,staticClass:"mr-2 mb-2",attrs:{tag:t,"show-name":!0}})})),1)],1),t._v(" "),n("div",{staticClass:"mb-8"},[n("p",{staticClass:"mb-2 font-bold"},[t._v("\n          "+t._s(t.$t("meals.edit.ingredients"))+"\n        ")]),t._v(" "),n("meal-ingredient-editor",{model:{value:r.ingredients,callback:function(e){t.$set(r,"ingredients",e)},expression:"editingEntity.ingredients"}})],1)]):t._e()]}}])})}),[],!1,null,null,null);e.default=A.exports}}]);