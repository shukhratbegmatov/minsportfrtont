(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},346:function(e,t,n){"use strict";n.r(t);var c=[function(){var e=this.$createElement,t=this._self._c||e;return t("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[t("img",{attrs:{src:n(284),alt:""}})])}],r=(n(9),n(5),n(6),n(1),n(8),n(12),n(2)),l=n(0),o=(n(14),n(37));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={name:"vacancies",data:function(){return{perPage:15,currentPage:1,fields:[{key:"index",label:"#"},{key:"title",label:"Lavozim"},{key:"education",label:"Ta’lim"},{key:"employment",label:"Bandlik turi"},{key:"date",label:"E’lon sanasi"},{key:"count",label:"Ish o‘rinlar soni"},{key:"link",label:"Murojaat"}],selectVacancies:{name:"",desc:""}}},methods:{setVacancies:function(e,t){console.log(e,t),this.selectVacancies.name="title",this.selectVacancies.desc=e}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({rows:function(){return this.vacancies.length}},Object(o.b)({vacancies:function(e){return e.tables.vacancies}})),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("tables/fetchVacancies");case 2:case"end":return t.stop()}}),t)})))()}},v=n(31),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+e.$i18n.locale}},[e._v("\n                "+e._s(e.$t("home"))+"\n              ")]),e._v(" "),e._m(0)],1),e._v(" "),n("li",[e._v(e._s(e.$t("media_is_about_us")))])])])])])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"inner"},[n("h1",{staticClass:"title"},[e._v(e._s(e.$t("media_is_about_us")))]),e._v(" "),n("div",{staticClass:"table-wrap vacancies"},[n("b-table",{attrs:{id:"my-table","per-page":e.perPage,"current-page":e.currentPage,striped:"",fields:e.fields,items:e.vacancies,responsive:"lg",stacked:"lg"},scopedSlots:e._u([{key:"cell(index)",fn:function(data){return[e._v("\n                "+e._s(data.index+1)+"\n              ")]}},{key:"cell(title)",fn:function(data){return[e._v("\n                "+e._s(data.item.title)+"\n              ")]}},{key:"cell(education)",fn:function(data){return[e._v("\n                "+e._s(data.item.education)+"\n              ")]}},{key:"cell(employment)",fn:function(data){return[e._v("\n                "+e._s(data.item.employment)+"\n              ")]}},{key:"cell(date)",fn:function(data){return[e._v("\n                "+e._s(e.$moment(data.item.date).format("L"))),n("br")]}},{key:"cell(count)",fn:function(data){return[e._v("\n                "+e._s(data.item.count)+"\n              ")]}},{key:"cell(link)",fn:function(data){return[n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.vacancies",modifiers:{vacancies:!0}}],attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setVacancies(data.item.about,data.item.tasks)}}},[e._v("\n                  Murojaat qilish")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination-wrap"},[n("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"first-number":"","last-number":"","aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])]),e._v(" "),n("b-modal",{attrs:{id:"vacancies"}},[n("div",{staticClass:"modal-head"},[n("h6",[e._v(e._s(e.selectVacancies.name))]),e._v(" "),n("button",{staticClass:"btn btn-close",on:{click:function(t){return e.$bvModal.hide("vacancies")}}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5303 6.46967L13.4462 6.39705C13.1852 6.2034 12.827 6.20101 12.5636 6.38988L12.4697 6.46967L10 8.939L7.53033 6.46967L7.44621 6.39705C7.18522 6.2034 6.82701 6.20101 6.56362 6.38988L6.46967 6.46967L6.39705 6.55379C6.2034 6.81478 6.20101 7.17299 6.38988 7.43638L6.46967 7.53033L8.939 10L6.46967 12.4697L6.39705 12.5538C6.2034 12.8148 6.20101 13.173 6.38988 13.4364L6.46967 13.5303L6.55379 13.6029C6.81478 13.7966 7.17299 13.799 7.43638 13.6101L7.53033 13.5303L10 11.061L12.4697 13.5303L12.5538 13.6029C12.8148 13.7966 13.173 13.799 13.4364 13.6101L13.5303 13.5303L13.6029 13.4462C13.7966 13.1852 13.799 12.827 13.6101 12.5636L13.5303 12.4697L11.061 10L13.5303 7.53033L13.6029 7.44621C13.7966 7.18522 13.799 6.82701 13.6101 6.56362L13.5303 6.46967L13.4462 6.39705L13.5303 6.46967Z",fill:"#063F62"}})])])]),e._v(" "),n("div",{staticClass:"modal-my-body"},[n("div",{domProps:{innerHTML:e._s(e.selectVacancies.desc)}})])])],1)}),c,!1,null,"500bafcb",null);t.default=component.exports}}]);