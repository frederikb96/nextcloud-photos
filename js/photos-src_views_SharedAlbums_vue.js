/*! For license information please see photos-src_views_SharedAlbums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_SharedAlbums_vue"],{49723:(t,e,a)=>{a.d(e,{Z:()=>r});var s=a(20629),n=a(45994),o=a(69363),l=a(99622);const r={name:"FetchSharedAlbumsMixin",data:()=>({errorFetchingAlbums:null,loadingAlbums:!1}),mixins:[o.Z],async beforeMount(){this.fetchAlbums()},computed:{...(0,s.Se)(["sharedAlbums"])},methods:{...(0,s.nv)(["addSharedAlbums"]),async fetchAlbums(){if(!this.loadingAlbums)try{var t;this.loadingAlbums=!0,this.errorFetchingAlbums=null;const e=await(0,l.CE)("/photos/".concat(null===(t=(0,n.ts)())||void 0===t?void 0:t.uid,"/sharedalbums"),this.abortController.signal);this.addSharedAlbums({albums:e})}catch(t){var e;404===(null===(e=t.response)||void 0===e?void 0:e.status)?this.errorFetchingAlbums=404:this.errorFetchingAlbums=t}finally{this.loadingAlbums=!1}}}}},30376:(t,e,a)=>{a.d(e,{Z:()=>r});var s=a(87537),n=a.n(s),o=a(23645),l=a.n(o)()(n());l.push([t.id,".albums-list[data-v-10a1f9c9]{display:flex;flex-direction:column}.albums-list .album__name[data-v-10a1f9c9]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/SharedAlbums.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.albums-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.album__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const r=l},48059:(t,e,a)=>{a.r(e),a.d(e,{default:()=>T});var s=a(1099),n=a(79753),o=a(15961),l=a(49723),r=a(13103),i=a(48462),m=a(67635),u=a(9944);const c={name:"SharedAlbums",components:{FolderMultipleImage:s.Z,NcEmptyContent:o.SL,CollectionsList:r.Z,CollectionCover:i.Z,HeaderNavigation:m.Z,NcUserBubble:o.uq},filters:{coverUrl:t=>-1===t?"":(0,n.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",512,"&y=",512)),albumOriginalName:t=>t.basename.replace(new RegExp("\\(".concat(t.collaborators[0].id,"\\)$")),"")},mixins:[l.Z],methods:{t:u.translate,n:u.translatePlural}};var d=a(93379),b=a.n(d),h=a(7795),A=a.n(h),p=a(90569),g=a.n(p),v=a(3565),f=a.n(v),C=a(19216),_=a.n(C),y=a(44589),w=a.n(y),x=a(30376),S={};S.styleTagTransform=w(),S.setAttributes=f(),S.insert=g().bind(null,"head"),S.domAPI=A(),S.insertStyleElement=_();b()(x.Z,S);x.Z&&x.Z.locals&&x.Z.locals;const T=(0,a(51900).Z)(c,(function(){var t=this,e=t._self._c;return e("CollectionsList",{staticClass:"albums-list",attrs:{collections:t.sharedAlbums,loading:t.loadingAlbums,error:t.errorFetchingAlbums},scopedSlots:t._u([{key:"default",fn:function(a){let{collection:s}=a;return e("CollectionCover",{key:s.basename,attrs:{link:"/sharedalbums/".concat(s.basename),"alt-img":t.t("photos","Cover photo for shared album {albumName}.",{albumName:s.basename}),"data-test":s.basename,"cover-url":t._f("coverUrl")(s.lastPhoto)}},[e("h2",{staticClass:"album__name"},[t._v("\n\t\t\t"+t._s(t._f("albumOriginalName")(s))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"album__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t"+t._s(s.date)+" ⸱ "+t._s(t.n("photos","%n item","%n photos and videos",s.nbItems))+"\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("photos","Shared by"))+" "),e("NcUserBubble",{attrs:{"display-name":s.collaborators[0].label,user:s.collaborators[0].id}})],1)])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:t.loadingAlbums,title:t.t("photos","Shared albums"),"root-title":t.t("photos","Shared albums")},on:{refresh:t.fetchAlbums},slot:"header"}),t._v(" "),t._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:t.t("photos","There is no album yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)}),[],!1,null,"10a1f9c9",null).exports}}]);
//# sourceMappingURL=photos-src_views_SharedAlbums_vue.js.map?v=41e3364e59d73a4226d2