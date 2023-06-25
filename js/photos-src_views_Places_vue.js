/*! For license information please see photos-src_views_Places_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Places_vue"],{46417:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(87537),l=o.n(n),s=o(23645),a=o.n(s)()(l());a.push([t.id,".places-list[data-v-0c0bf9ab]{display:flex;flex-direction:column}.places-list .place__name[data-v-0c0bf9ab]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/Places.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.places-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.place__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const i=a},20464:(t,e,o)=>{o.r(e),o.d(e,{default:()=>F});var n=o(57563),l=o(79753),s=o(15961),a=o(45994),i=o(9944),c=o(20629),r=o(69363),p=o(87076);const m={name:"FetchCollectionsMixin",data:()=>({errorFetchingCollections:null,loadingCollections:!1}),mixins:[r.Z],methods:{...(0,c.nv)(["addCollections"]),async fetchCollections(t){if(this.loadingCollections)return[];try{this.loadingCollections=!0,this.errorFetchingCollections=null;const e=await(0,p.XK)(t,{signal:this.abortController.signal});return this.addCollections({collections:e}),e}catch(t){var e;404===(null===(e=t.response)||void 0===e?void 0:e.status)?this.errorFetchingCollections=404:this.errorFetchingCollections=t}finally{this.loadingCollections=!1}return[]}}};var h=o(94446),d=o(99282),u=o(71823);const g={name:"Places",components:{FolderMultipleImage:n.Z,NcEmptyContent:s.SL,CollectionsList:h.Z,CollectionCover:d.Z,HeaderNavigation:u.Z},filters:{coverUrl:t=>-1===t?"":(0,l.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",512,"&y=",512))},mixins:[m],computed:{places(){return this.$store.getters.places}},async beforeMount(){this.fetchPlaces()},methods:{fetchPlaces(){var t;this.fetchCollections("/photos/".concat(null===(t=(0,a.ts)())||void 0===t?void 0:t.uid,"/places"))},t:i.translate,n:i.translatePlural}};var C=o(93379),v=o.n(C),A=o(7795),f=o.n(A),_=o(90569),b=o.n(_),w=o(3565),y=o.n(w),T=o(19216),x=o.n(T),k=o(44589),P=o.n(k),Z=o(46417),W={};W.styleTagTransform=P(),W.setAttributes=y(),W.insert=b().bind(null,"head"),W.domAPI=f(),W.insertStyleElement=x();v()(Z.Z,W);Z.Z&&Z.Z.locals&&Z.Z.locals;const F=(0,o(51900).Z)(g,(function(){var t=this,e=t._self._c;return e("div",[e("CollectionsList",{staticClass:"places-list",attrs:{collections:t.places,loading:t.loadingCollections,error:t.errorFetchingCollections},scopedSlots:t._u([{key:"default",fn:function(o){let{collection:n}=o;return e("CollectionCover",{key:n.basename,attrs:{link:"/places/".concat(n.basename),"alt-img":t.t("photos","Cover photo for place {placeName}",{placeName:n.basename}),"cover-url":t._f("coverUrl")(n.lastPhoto)}},[e("h2",{staticClass:"place__name"},[t._v("\n\t\t\t\t"+t._s(n.basename)+"\n\t\t\t")]),t._v(" "),e("div",{staticClass:"place__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(t.n("photos","%n item","%n photos and videos",n.nbItems))+"\n\t\t\t")])])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:t.loadingCollections,title:t.t("photos","Places"),"root-title":t.t("photos","Places")},on:{refresh:t.fetchPlaces},slot:"header"}),t._v(" "),t._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:t.t("photos","There is no place yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)],1)}),[],!1,null,"0c0bf9ab",null).exports}}]);
//# sourceMappingURL=photos-src_views_Places_vue.js.map?v=1de02384f9b0c01717e2