(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Amber\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item",{attrs:{to:"/",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[t._v("\n          Home\n        ")])],1),a("q-item",{attrs:{to:"/profile",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"face"}})],1),a("q-item-section",[t._v("\n          Profile\n        ")])],1),a("q-item",{attrs:{to:"/login",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"exit_to_app"}})],1),a("q-item-section",[t._v("\n          Disconnect\n        ")])],1),a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Essential Links\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=s,c=a("2877"),m=a("66e5"),b=a("4074"),p=a("0016"),u=a("0170"),q=a("eebe"),f=a.n(q),d=Object(c["a"])(l,o,r,!1,null,null,null),v=d.exports;f()(d,"components",{QItem:m["a"],QItemSection:b["a"],QIcon:p["a"],QItemLabel:u["a"]});const w=[{title:"Web",caption:"OBiBa web site",icon:"favorite",link:"https://www.obiba.org"},{title:"Docs",caption:"Amber documentation",icon:"school",link:"https://amberdoc.obiba.org"},{title:"Github",caption:"github.com/obiba",icon:"code",link:"https://github.com/obiba"},{title:"Forum",caption:"OBiBa users group",icon:"record_voice_over",link:"https://groups.google.com/d/forum/obiba-users"}];var _={name:"MainLayout",components:{EssentialLink:v},data(){return{leftDrawerOpen:!1,essentialLinks:w}}},g=_,k=a("4d5a"),h=a("e359"),Q=a("65c6"),L=a("9c40"),y=a("6ac5"),O=a("9404"),D=a("1c1c"),x=a("09e3"),I=Object(c["a"])(g,n,i,!1,null,null,null);e["default"]=I.exports;f()(I,"components",{QLayout:k["a"],QHeader:h["a"],QToolbar:Q["a"],QBtn:L["a"],QToolbarTitle:y["a"],QDrawer:O["a"],QList:D["a"],QItem:m["a"],QItemSection:b["a"],QIcon:p["a"],QItemLabel:u["a"],QPageContainer:x["a"]})}}]);