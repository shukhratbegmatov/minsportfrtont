(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{284:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},285:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},350:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(284),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(284),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{src:n(285),alt:""}})])}],l=(n(9),n(5),n(6),n(1),n(8),n(14),n(0)),o=(n(12),n(2)),c=n(37);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"index",data:function(){return{selectFunctions:{name:"",info:"",desc:""},selectBiography:{name:"",info:"",desc:""}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("ministry/fetchLeader");case 2:case"end":return e.stop()}}),e)})))()},computed:v(v({},Object(c.b)({leaders:function(t){return t.ministry.leader}})),{},{leaderMain:function(){return this.leaders.filter((function(t){return t.main}))},leaderOther:function(){return this.leaders.filter((function(t){return!t.main}))}}),methods:{setFunctions:function(t,title,e){this.selectFunctions.info=t,this.selectFunctions.name=title,this.selectFunctions.desc=e},setBiography:function(t,title,e){this.selectBiography.info=t,this.selectBiography.name=title,this.selectBiography.desc=e}}},m=n(31),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"territorial-administrations leadership page"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale}},[t._v("\n                  "+t._s(t.$t("home"))+"\n                ")]),t._v(" "),t._m(0)],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry"}},[t._v("\n                  "+t._s(t.$t("ministry"))+"\n                ")]),t._v(" "),t._m(1)],1),t._v(" "),n("li",[t._v(t._s(t.$t("leadership")))])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9"},[n("div",{staticClass:"inner"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("leadership")))]),t._v(" "),t.leaderMain.length?n("div",{staticClass:"item item-main"},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:t.leaderMain[0].image,alt:""}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v(t._s(t.leaderMain[0].position))]),t._v(" "),n("h6",[t._v(t._s(t.leaderMain[0].title))]),t._v(" "),n("ul",[n("li",[n("span",[t._v(t._s(t.$t("reception"))+":")]),t._v(" "),n("b",[t._v(t._s(t.leaderMain[0].reception_days))])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("phone_number"))+":")]),t._v(" "),n("b",[n("a",{attrs:{href:"tel:"+t.leaderMain[0].inner_phone_number}},[t._v(t._s(t.leaderMain[0].inner_phone_number))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("e_mail"))+":")]),t._v(" "),n("b",[n("a",{attrs:{href:"mailto:"+t.leaderMain[0].email}},[t._v(t._s(t.leaderMain[0].email))])])])])]),t._v(" "),n("div",{staticClass:"more"},[n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.functions",modifiers:{functions:!0}}],staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return t.setFunctions(t.leaderMain[0].position,t.leaderMain[0].title,t.leaderMain[0].duty)}}},[t._v(t._s(t.$t("supervises")))]),t._v(" "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.biography",modifiers:{biography:!0}}],staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return t.setBiography(t.leaderMain[0].position,t.leaderMain[0].title,t.leaderMain[0].work_history)}}},[t._v(t._s(t.$t("b_iography")))]),t._v(" "),n("nuxt-link",{staticClass:"btn",attrs:{to:"/"+t.$i18n.locale+"/contacts"}},[t._v(t._s(t.$t("c_ontacts")))])],1)]):t._e(),t._v(" "),t._l(t.leaderOther,(function(e){return n("div",{staticClass:"item"},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v("\n                  "+t._s(e.position)+"\n                ")]),t._v(" "),n("h6",[t._v(" "+t._s(e.title))]),t._v(" "),n("ul",[n("li",[n("span",[t._v(t._s(t.$t("reception"))+":")]),t._v(" "),n("b",[t._v(t._s(e.reception_days))])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("phone_number"))+":")]),t._v(" "),n("b",[n("a",{attrs:{href:"tel:"+e.inner_phone_number}},[t._v(t._s(e.inner_phone_number))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("e_mail"))+":")]),t._v(" "),n("b",[n("a",{attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])])])])]),t._v(" "),n("div",{staticClass:"more"},[n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.functions",modifiers:{functions:!0}}],staticClass:"btn",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.setFunctions(e.position,e.title,e.duty)}}},[t._v(t._s(t.$t("supervises")))]),t._v(" "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.biography",modifiers:{biography:!0}}],staticClass:"btn",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.setBiography(e.position,e.title,e.work_history)}}},[t._v(t._s(t.$t("b_iography")))]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(t._s(t.$t("c_ontacts")))])])])}))],2)]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"side-bar-nav"},[n("div",{staticClass:"side-bar-nav-head d-flex"},[t._m(2),t._v(" "),n("h6",[t._v(" "+t._s(t.$t("ministry")))])]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry/territorial-administrations"}},[t._v("\n                    "+t._s(t.$t("territorial_administrations"))+"\n                  ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry"}},[t._v("\n                    "+t._s(t.$t("about_ministry"))+"\n                  ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry/leadership"}},[t._v("\n                    "+t._s(t.$t("leadership"))+"\n                  ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry/ministry-structure"}},[t._v("\n                    "+t._s(t.$t("ministry_structure"))+"\n                  ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry/central-office"}},[t._v("\n                    "+t._s(t.$t("central_office"))+"\n                  ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/ministry/organization"}},[t._v("\n                    "+t._s(t.$t("organization"))+"\n                  ")])],1)])])])])])]),t._v(" "),n("b-modal",{attrs:{id:"functions"}},[n("div",{staticClass:"modal-head"},[n("p",[t._v(t._s(t.selectFunctions.info))]),t._v(" "),n("h6",[t._v(t._s(t.selectFunctions.name))]),t._v(" "),n("button",{staticClass:"btn btn-close",on:{click:function(e){return t.$bvModal.hide("functions")}}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5303 6.46967L13.4462 6.39705C13.1852 6.2034 12.827 6.20101 12.5636 6.38988L12.4697 6.46967L10 8.939L7.53033 6.46967L7.44621 6.39705C7.18522 6.2034 6.82701 6.20101 6.56362 6.38988L6.46967 6.46967L6.39705 6.55379C6.2034 6.81478 6.20101 7.17299 6.38988 7.43638L6.46967 7.53033L8.939 10L6.46967 12.4697L6.39705 12.5538C6.2034 12.8148 6.20101 13.173 6.38988 13.4364L6.46967 13.5303L6.55379 13.6029C6.81478 13.7966 7.17299 13.799 7.43638 13.6101L7.53033 13.5303L10 11.061L12.4697 13.5303L12.5538 13.6029C12.8148 13.7966 13.173 13.799 13.4364 13.6101L13.5303 13.5303L13.6029 13.4462C13.7966 13.1852 13.799 12.827 13.6101 12.5636L13.5303 12.4697L11.061 10L13.5303 7.53033L13.6029 7.44621C13.7966 7.18522 13.799 6.82701 13.6101 6.56362L13.5303 6.46967L13.4462 6.39705L13.5303 6.46967Z",fill:"#063F62"}})])])]),t._v(" "),n("div",{staticClass:"modal-my-body"},[n("p",{domProps:{innerHTML:t._s(t.selectFunctions.desc)}})])]),t._v(" "),n("b-modal",{attrs:{id:"biography"}},[n("div",{staticClass:"modal-head"},[n("p",[t._v(t._s(t.selectBiography.info))]),t._v(" "),n("h6",[t._v(t._s(t.selectBiography.name))]),t._v(" "),n("button",{staticClass:"btn btn-close",on:{click:function(e){return t.$bvModal.hide("biography")}}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5303 6.46967L13.4462 6.39705C13.1852 6.2034 12.827 6.20101 12.5636 6.38988L12.4697 6.46967L10 8.939L7.53033 6.46967L7.44621 6.39705C7.18522 6.2034 6.82701 6.20101 6.56362 6.38988L6.46967 6.46967L6.39705 6.55379C6.2034 6.81478 6.20101 7.17299 6.38988 7.43638L6.46967 7.53033L8.939 10L6.46967 12.4697L6.39705 12.5538C6.2034 12.8148 6.20101 13.173 6.38988 13.4364L6.46967 13.5303L6.55379 13.6029C6.81478 13.7966 7.17299 13.799 7.43638 13.6101L7.53033 13.5303L10 11.061L12.4697 13.5303L12.5538 13.6029C12.8148 13.7966 13.173 13.799 13.4364 13.6101L13.5303 13.5303L13.6029 13.4462C13.7966 13.1852 13.799 12.827 13.6101 12.5636L13.5303 12.4697L11.061 10L13.5303 7.53033L13.6029 7.44621C13.7966 7.18522 13.799 6.82701 13.6101 6.56362L13.5303 6.46967L13.4462 6.39705L13.5303 6.46967Z",fill:"#063F62"}})])])]),t._v(" "),n("div",{staticClass:"modal-my-body"},[n("p",{domProps:{innerHTML:t._s(t.selectBiography.desc)}})])])],1)}),r,!1,null,"42cf1f4a",null);e.default=component.exports}}]);