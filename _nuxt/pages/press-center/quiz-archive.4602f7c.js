(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{284:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},285:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},355:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(284),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{src:n(285),alt:""}})])}],l=(n(9),n(5),n(6),n(1),n(8),n(0)),o=(n(12),n(2)),c=n(37);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"quizArchive",data:function(){return{page:1,participants:123}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("polls/fetchArchivePolls");case 2:case"end":return e.stop()}}),e)})))()},computed:_(_({},Object(c.b)({archivePolls:function(t){return t.polls.archivePolls},perPage:function(t){return t.polls.perPage},total:function(t){return t.polls.total},currentPage:function(t){return t.polls.currentPage}})),{},{formatDate:function(){var t=this,e="uz_Latn";return"ru"==this.$i18n.locale?e="ru_RU":"en"==this.$i18n.locale&&(e="en_EN"),function(n){return t.$moment(n).locale(e).format("Do MMM")}}}),created:function(){this.page=this.currentPage},watch:{page:function(t){this.$store.dispatch("polls/fetchArchivePollsPage",t)}}},M=n(31),component=Object(M.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale}},[t._v("\n                "+t._s(t.$t("home"))+"\n              ")]),t._v(" "),t._m(0)],1),t._v(" "),n("li",[t._v(t._s(t.$t("polls")))])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9"},[n("div",{staticClass:"inner"},[n("h1",{staticClass:"title"},[t._v(t._s(t.$t("polls")))]),t._v(" "),n("div",{staticClass:"quiz-wrap"},t._l(t.archivePolls,(function(e,r){return n("div",{staticClass:"item"},[n("div",{staticClass:"left"},[n("span",{staticClass:"index"},[t._v("\n                  "+t._s(r+1)+".\n                ")]),t._v(" "),n("nuxt-link",{staticClass:"title",attrs:{to:"/"+t.$i18n.locale+"/press-center/"+e.id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("span",{staticClass:"participants"},[t._v("\n                  "+t._s(e.result_count)+"  ta ishtirokchi\n                ")])],1),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.$i18n.locale+"/press-center/"+e.id}},[n("i",[n("svg",{attrs:{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8 0.666016C3.24358 0.666016 0.171194 5.57864 0.115625 5.6681C0.0408285 5.76232 8.08654e-05 5.87905 0 5.99935C9.4615e-05 6.10255 0.030128 6.2035 0.0864583 6.28997C0.0871491 6.29102 0.0878436 6.29206 0.0885417 6.2931C0.0977116 6.31202 2.67671 11.3327 8 11.3327C13.3007 11.3327 15.8759 6.36134 15.9073 6.30039C15.9094 6.29694 15.9115 6.29347 15.9135 6.28997C15.9699 6.2035 15.9999 6.10255 16 5.99935C16 5.87953 15.9596 5.76321 15.8854 5.66914C15.8851 5.66879 15.8847 5.66845 15.8844 5.6681C15.8288 5.57864 12.7564 0.666016 8 0.666016ZM8 2.26602C10.0619 2.26602 11.7333 3.93748 11.7333 5.99935C11.7333 8.06121 10.0619 9.73268 8 9.73268C5.93813 9.73268 4.26667 8.06121 4.26667 5.99935C4.26667 3.93748 5.93813 2.26602 8 2.26602ZM8 4.39935C7.57565 4.39935 7.16869 4.56792 6.86863 4.86798C6.56857 5.16804 6.4 5.575 6.4 5.99935C6.4 6.4237 6.56857 6.83066 6.86863 7.13072C7.16869 7.43078 7.57565 7.59935 8 7.59935C8.42435 7.59935 8.83131 7.43078 9.13137 7.13072C9.43143 6.83066 9.6 6.4237 9.6 5.99935C9.6 5.575 9.43143 5.16804 9.13137 4.86798C8.83131 4.56792 8.42435 4.39935 8 4.39935Z",fill:"#2B5CA8"}})])]),t._v(" "),n("span",[t._v(t._s(t.$t("see")))])])],1)})),0),t._v(" "),n("div",{staticClass:"pagination-wrap"},[n("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perPage,"first-number":"","last-number":"","aria-controls":"stadiums-items"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"side-bar-nav"},[n("div",{staticClass:"side-bar-nav-head d-flex"},[t._m(1),t._v(" "),n("h6",[t._v(" "+t._s(t.$t("press_service")))])]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/sport"}},[t._v(t._s(t.$t("sport_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/regional-news"}},[t._v(t._s(t.$t("region_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/vazirlik-nashrlari"}},[t._v(t._s(t.$t("ministerial_edition")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/anonslar-va-elonlar-1"}},[t._v(t._s(t.$t("announcement")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/hayati-yigilishlari"}},[t._v(t._s(t.$t("board_meeting")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/oav-akkreditatsiyadan-otkazish"}},[t._v(t._s(t.$t("media_accredited_firing")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/yangiliklar"}},[t._v(t._s(t.$t("news_of_uzbekistan")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/video"}},[t._v(t._s(t.$t("videos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/press-relizlar"}},[t._v(t._s(t.$t("press_realization")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/fotos"}},[t._v(t._s(t.$t("fotos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/media-is-about-us"}},[t._v(t._s(t.$t("media_is_about_us")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/vazirning-nutqlari"}},[t._v(t._s(t.$t("minister_speeches")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/intervyu"}},[t._v(t._s(t.$t("interview")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/quiz-archive"}},[t._v(t._s(t.$t("polls")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/faq"}},[t._v(t._s(t.$t("questions_and_answers")))])],1)])])])])])])])}),r,!1,null,"74ae90ce",null);e.default=component.exports}}]);