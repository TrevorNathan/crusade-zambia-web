(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(e,t,r){var content=r(202);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("99de22c4",content,!0,{sourceMap:!1})},199:function(e,t,r){var content=r(204);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("3bb8f492",content,!0,{sourceMap:!1})},200:function(e,t,r){"use strict";r(127);var n=r(27),o={props:{img:{type:String,default:""},title:{type:String,required:!0},lede:{type:String,default:""},tags:{type:Array,default:function(){return{}}},link:{type:String,required:!0},date:{type:String,default:null},position:{type:Number,required:!0}},computed:{host:function(){return n.a.api_host},category:function(){return this.tags&&this.tags.length?this.tags.filter((function(e){return 14===e.vocabulary_id}))[0]:null},issue:function(){return this.tags&&this.tags.length?this.tags.filter((function(e){return 15===e.vocabulary_id}))[0]:null}}},c=r(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["card","card--"+e.position]},[e.link?r("a",{staticClass:"story",attrs:{href:e.link}},[r("div",{staticClass:"teaser-image",style:"background: url("+e.host+"/images/"+e.img+") center center / cover no-repeat transparent;"}),e._v(" "),r("div",{staticClass:"text"},[e.category?r("p",{staticClass:"category"},[e._v("\n        "+e._s(e.category.title)+"\n      ")]):e._e(),e._v(" "),e.title?r("p",{staticClass:"title"},[e._v("\n        "+e._s(e.title)+"\n      ")]):e._e(),e._v(" "),e.lede?r("p",{staticClass:"description"},[e._v("\n        "+e._s(e.lede)+"\n      ")]):e._e(),e._v(" "),e.issue?r("p",{staticClass:"date"},[e._v("\n        "+e._s(e.issue.title)+"\n      ")]):e._e()])]):e._e()])}),[],!1,null,"a831a0ea",null);t.a=component.exports},201:function(e,t,r){"use strict";var n=r(198);r.n(n).a},202:function(e,t,r){(t=r(71)(!1)).push([e.i,'div[data-v-449ad81c]{display:inline-block;max-width:calc(50% - .5em);position:relative}div[data-v-449ad81c]:after{border-right:1px solid #000;border-top:1px solid #000;content:"";height:.5em;position:absolute;right:1em;top:calc(50% - .375em);transform:rotate(135deg);width:.5em}div+div[data-v-449ad81c]{margin-left:.5em}select[data-v-449ad81c]{-webkit-appearance:none;border:1px solid #3a3a3a;border-radius:.3em;box-sizing:border-box;display:inline-block;font-family:freight-sans-pro,sans-serif;font-size:1em;outline:0;padding:.5em 2.25em .5em .75em;position:relative;transition:border .5s ease}select[data-v-449ad81c]::-moz-placeholder{color:#007392}select[data-v-449ad81c]:-ms-input-placeholder{color:#007392}select[data-v-449ad81c]::-ms-input-placeholder{color:#007392}select[data-v-449ad81c]::placeholder{color:#007392}select[data-v-449ad81c]:focus,select[data-v-449ad81c]:hover{border:1px solid #007392}',""]),e.exports=t},203:function(e,t,r){"use strict";var n=r(199);r.n(n).a},204:function(e,t,r){(t=r(71)(!1)).push([e.i,".filters--wrapper[data-v-3f9333c0]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;margin-top:1em;margin-bottom:0;position:relative}@media (min-width:500px){.filters--wrapper[data-v-3f9333c0]{justify-content:space-between;margin-top:5em}}@media (min-width:531px){.filters--wrapper[data-v-3f9333c0]{justify-content:space-between;margin-top:1em}}.filters--wrapper h3[data-v-3f9333c0]{font-weight:400;letter-spacing:.14286em}.filters--wrapper h3[data-v-3f9333c0],.filters-label[data-v-3f9333c0]{font-size:14px;text-transform:uppercase}.filters-label[data-v-3f9333c0]{color:#666;font-weight:700;letter-spacing:.07143em;margin:1em 0}",""]),e.exports=t},206:function(e,t,r){"use strict";r(196),r(127);var n={props:{disabled:{type:Boolean,default:!1}}},o=r(55),c=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"arrow",attrs:{disabled:this.disabled}},[this._t("default")],2)}),[],!1,null,null,null).exports,l={props:{pageNumber:{type:Number,required:!0}},methods:{onClick:function(){this.$emit("loadPage",Number(this.pageNumber)),this.$router.push("/"+Number(this.pageNumber))}}},d={components:{BaseButton:c,BasePaginationTrigger:Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"base-pagination-trigger",on:{click:this.onClick}},[this._v("\n  "+this._s(this.pageNumber)+"\n")])}),[],!1,null,null,null).exports},props:{currentPage:{type:Number,required:!0},pageCount:{type:Number,required:!0},visiblePagesCount:{type:Number,default:5}},computed:{isPreviousButtonDisabled:function(){return 1===this.currentPage},isNextButtonDisabled:function(){return this.currentPage===this.pageCount},paginationTriggers:function(){var e=this.currentPage,t=this.pageCount,r=(this.visiblePagesCount-1)/2,n=Array(this.visiblePagesCount-1).fill(0);if(e<=r+1){n[0]=1;var o=n.map((function(e,t){return n[0]+t}));return o.push(t),o}if(e>=t-r+1){var c=n.map((function(e,r){return t-r}));return c.reverse().unshift(1),c}n[0]=e-r+1;var l=n.map((function(e,t){return n[0]+t}));return l.unshift(1),l[l.length-1]=t,l}},methods:{nextPage:function(){this.$emit("nextPage"),this.$router.push("/"+(this.currentPage+=1))},onLoadPage:function(e){this.$emit("loadPage",e)},previousPage:function(){this.$emit("previousPage"),this.$router.push("/"+(this.currentPage-=1))}}},f=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"base-pagination"},[r("BaseButton",{attrs:{disabled:e.isPreviousButtonDisabled},nativeOn:{click:function(t){return e.previousPage(t)}}},[e._v("\n    ←\n  ")]),e._v(" "),e._l(e.paginationTriggers,(function(t){return r("BasePaginationTrigger",{key:t,staticClass:"base-pagination__description",class:{"base-pagination__description--current":t===e.currentPage},attrs:{"page-number":t},on:{loadPage:e.onLoadPage}})})),e._v(" "),r("BaseButton",{attrs:{disabled:e.isNextButtonDisabled},nativeOn:{click:function(t){return e.nextPage(t)}}},[e._v("\n    →\n  ")])],2)}),[],!1,null,null,null);t.a=f.exports},207:function(e,t,r){"use strict";r(56),r(20),r(17),r(8),r(36);var n=r(12),o=r(28);r(127);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{vocabularyId:{type:Number,required:!0},name:{type:String,required:!0}},computed:l(l({},Object(o.b)("vocabularies",["tagList"])),{},{selected:{get:function(){var e=this;return this.tags.some((function(t){return t.id===e.choseTag}))?this.choseTag:""},set:function(e){this.$router.push("/tag/"+e)}},choseTag:function(){return Number(this.$route.params.id)},tags:function(){return this.tagList?this.tagList[this.vocabularyId]:[]},tagsWithCards:function(){return this.tags?this.tags.filter((function(e){return e.published_card_count>0})):[]}})},f=(r(201),r(55));function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={components:{FilterSelect:Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tagsWithCards.length>0?r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{staticClass:"placeholder-select",attrs:{id:"filter--"+e.name,value:"",disabled:"disabled"},domProps:{selected:e.selected}},[e._v("\n      "+e._s(e.name)+"\n    ")]),e._v(" "),e._l(e.tagsWithCards,(function(t,n){return r("option",{key:n,domProps:{value:t.id}},[e._v("\n      "+e._s(t.title)+"\n    ")])}))],2)]):e._e()}),[],!1,null,"449ad81c",null).exports},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)("vocabularies",["list"]))},m=(r(203),Object(f.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"filters--wrapper"},[t("div",{staticClass:"filters-label"},[this._v("\n    Filter Stories\n  ")]),this._v(" "),t("div",{staticClass:"filters"},[t("filter-select",{attrs:{"vocabulary-id":15,name:"Issue"}}),this._v(" "),t("filter-select",{attrs:{"vocabulary-id":16,name:"Contributor"}})],1)])}),[],!1,null,"3f9333c0",null));t.a=m.exports},214:function(e,t,r){"use strict";r.r(t);r(56),r(20),r(36);var n=r(12),o=(r(17),r(8),r(37),r(21),r(2)),c=r(28),l=r(200),d=r(206),f=r(207);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{StoryCard:l.a,BasePagination:d.a,SelectFilter:f.a},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,e.params,n=e.error,t.prev=1,t.next=4,Promise.all([r.dispatch("loadResourcesDesc","1"),r.dispatch("vocabularies/loadVocabularies"),r.dispatch("vocabularies/loadTags",15),r.dispatch("vocabularies/loadTags",16)]);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),t.t0.response&&t.t0.response.status&&n({statusCode:t.t0.response.status,message:403===t.t0.response.status?"Could not access feed.":"Could not find feed."});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()},data:function(){return{currentPage:1}},computed:v(v({},Object(c.b)(["resources","pages"])),{},{stories:function(){return this.resources}}),mounted:function(){this.$store.commit("filters/clearFilters",{})},methods:{pageChangeHandle:function(e){switch(e){case"next":this.currentPage+=1;break;case"previous":this.currentPage-=1;break;default:this.currentPage=e}}}},y=r(55),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"body-container"},[e.stories?r("div",{staticClass:"stories"},[r("select-filter"),e._v(" "),e._l(e.stories,(function(e,t){return r("story-card",{key:t,attrs:{img:e.image?e.image.image:null,title:e.title,lede:e.description,tags:e.tags,link:e.url,date:e.date,position:t}})}))],2):e._e(),e._v(" "),r("BasePagination",{staticClass:"articles-list__pagination",attrs:{"current-page":e.currentPage,"page-count":e.pages},on:{nextPage:function(t){return e.pageChangeHandle("next")},previousPage:function(t){return e.pageChangeHandle("previous")},loadPage:e.pageChangeHandle}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);