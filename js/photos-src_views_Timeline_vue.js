/*! For license information please see photos-src_views_Timeline_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Timeline_vue"],{66951:(t,e,n)=>{n.d(e,{Z:()=>h});var i=n(59537),o=n(94236),a=n(45994),l=n(3301),s=n(81067),r=n(2161),c=n(80351),d=n.n(c);var m=n(32114),u=n(69363),p=n(25108);const h={name:"FetchFilesMixin",mixins:[u.Z],data:()=>({errorFetchingFiles:null,loadingFiles:!1,doneFetchingFiles:!1,fetchSemaphore:new m.Z(1),fetchedFileIds:[]}),watch:{$route(){this.resetFetchFilesState()}},methods:{async fetchFiles(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.doneFetchingFiles&&!c||this.loadingFiles)return[];const m=await this.fetchSemaphore.acquire();try{this.errorFetchingFiles=null,this.loadingFiles=!0;const c=200,m=await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e={firstResult:0,nbResults:200,mimesType:l.Oj,onThisDay:!1,onlyFavorites:!1,...e};const n="/files/".concat((0,a.ts)().uid),i=e.mimesType.reduce(((t,e)=>"".concat(t,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(e,"</d:literal>\n\t\t</d:eq>\n\t")),""),c=e.onlyFavorites?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",m=e.onThisDay?"<d:or>".concat(Array(20).fill(1).map(((t,e)=>{const n=d()(Date.now()).startOf("day").subtract(3,"d").subtract(e+1,"y"),i=d()(Date.now()).endOf("day").add(3,"d").subtract(e+1,"y");return"<d:and>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>".concat(n.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t\t<d:lt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>").concat(i.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:lt>\n\t\t\t</d:and>")})).join("\n"),"</d:or>"):"";return e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(r.N,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(n,"/").concat(t,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(c,"\n\t\t\t\t\t\t\t").concat(m,"\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.nbResults,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.firstResult,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),(await s.ZP.getDirectoryContents("",e)).data.map((t=>(0,o.AX)(t)))}(t,{firstResult:this.fetchedFileIds.length,nbResults:c,...e,signal:this.abortController.signal});m.length!==c&&(this.doneFetchingFiles=!0);const u=m.map((t=>t.fileid)).filter((t=>!this.fetchedFileIds.includes(t)));return this.fetchedFileIds.push(...u.map((t=>t.toString())).filter((t=>!n.includes(t)))),this.$store.dispatch("appendFiles",m),i.Z.debug("[FetchFilesMixin] Fetched ".concat(u.length," new files: "),u),u}catch(t){var u;if(404===(null===(u=t.response)||void 0===u?void 0:u.status))this.errorFetchingFiles=404;else{if("ERR_CANCELED"===t.code)return[];this.errorFetchingFiles=t}i.Z.error("Error fetching files",{error:t}),p.error(t)}finally{this.loadingFiles=!1,this.fetchSemaphore.release(m)}return[]},resetFetchFilesState(){this.doneFetchingFiles=!1,this.errorFetchingFiles=null,this.loadingFiles=!1,this.fetchedFileIds=[]}}}},28391:(t,e,n)=>{n.d(e,{Z:()=>i});const i={name:"FilesByMonthMixin",computed:{fileIdsByMonth(){const t={};for(const n of this.fetchedFileIds){const i=this.files[n];var e;if(i)t[i.month]=null!==(e=t[i.month])&&void 0!==e?e:[],t[i.month].push(i.fileid)}return Object.keys(t).forEach((e=>t[e].sort(this.sortFilesByTimestamp))),t},monthsList(){return Object.keys(this.fileIdsByMonth).sort(((t,e)=>t>e?-1:1))}},methods:{sortFilesByTimestamp(t,e){return this.files[t].timestamp>this.files[e].timestamp?-1:1}}}},88364:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(87537),o=n.n(i),a=n(23645),l=n.n(a)()(o());l.push([t.id,".album-picker[data-v-6b923187]{padding:32px;padding-top:16px}.album-picker h2[data-v-6b923187]{display:flex;align-items:center;height:60px}.album-picker h2 .loading-icon[data-v-6b923187]{margin-left:32px}.album-picker .albums-container[data-v-6b923187]{min-height:150px;max-height:350px;overflow-x:scroll;padding:2px}.album-picker .albums-container .album[data-v-6b923187] .list-item{padding:8px 16px;box-sizing:border-box}.album-picker .albums-container .album[data-v-6b923187]:not(:last-child){margin-bottom:16px}.album-picker .albums-container .album__image[data-v-6b923187]{width:40px;height:40px;object-fit:none;border-radius:var(--border-radius)}.album-picker .albums-container .album__image--placeholder[data-v-6b923187]{background:var(--color-primary-element-light)}.album-picker .albums-container .album__image--placeholder[data-v-6b923187] .material-design-icon{width:100%;height:100%}.album-picker .albums-container .album__image--placeholder[data-v-6b923187] .material-design-icon .material-design-icon__svg{fill:var(--color-primary-element)}.album-picker .new-album-button[data-v-6b923187]{margin-top:32px}","",{version:3,sources:["webpack://./src/components/Albums/AlbumPicker.vue"],names:[],mappings:"AAEA,+BACC,YAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,gDACC,gBAAA,CAIF,iDACC,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAIC,mEACC,gBAAA,CACA,qBAAA,CAGD,yEACC,kBAAA,CAGD,+DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,kCAAA,CAEA,4EACC,6CAAA,CAEA,kGACC,UAAA,CACA,WAAA,CAEA,6HACC,iCAAA,CAQN,iDACC,eAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album-picker {\n\tpadding: 32px;\n\tpadding-top: 16px;\n\n\th2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 60px;\n\n\t\t.loading-icon {\n\t\t\tmargin-left: 32px;\n\t\t}\n\t}\n\n\t.albums-container {\n\t\tmin-height: 150px;\n\t\tmax-height: 350px;\n\t\toverflow-x: scroll;\n\t\tpadding: 2px;\n\n\t\t.album {\n\n\t\t\t:deep .list-item {\n\t\t\t\tpadding: 8px 16px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\n\t\t\t&__image {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tobject-fit: none;\n\t\t\t\tborder-radius: var(--border-radius);\n\n\t\t\t\t&--placeholder {\n\t\t\t\t\tbackground: var(--color-primary-element-light);\n\n\t\t\t\t\t:deep .material-design-icon {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\n\t\t\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\t\t\tfill: var(--color-primary-element);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.new-album-button {\n\t\tmargin-top: 32px;\n\t}\n}\n'],sourceRoot:""}]);const s=l},73408:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(87537),o=n.n(i),a=n(23645),l=n.n(a)()(o());l.push([t.id,".timeline[data-v-4047f5a3]{display:flex;flex-direction:column}.timeline__header__left[data-v-4047f5a3]{display:flex;gap:4px}.timeline__file-list[data-v-4047f5a3]{padding:0 64px}@media only screen and (max-width: 1200px){.timeline__file-list[data-v-4047f5a3]{padding:0 4px}}.timeline__file-list[data-v-4047f5a3] .files-list-viewer__section-header{top:var(--photos-navigation-height)}","",{version:3,sources:["webpack://./src/views/Timeline.vue"],names:[],mappings:"AAEA,2BACC,YAAA,CACA,qBAAA,CAGC,yCACC,YAAA,CACA,OAAA,CAIF,sCACC,cAAA,CAEA,2CAHD,sCAIE,aAAA,CAAA,CAGD,yEACC,mCAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.timeline {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__header {\n\t\t&__left {\n\t\t\tdisplay: flex;\n\t\t\tgap: 4px;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\n\t\t:deep .files-list-viewer__section-header {\n\t\t\ttop: var(--photos-navigation-height);\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const s=l},61225:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(20629),o=n(82400),a=n(15961);const l={name:"ActionFavorite",components:{Star:o.default,NcActionButton:a.Js},props:{selectedFileIds:{type:Array,required:!0}},computed:{...(0,i.Se)(["files"]),shouldFavoriteSelection(){return this.selectedFileIds.some((t=>0===this.files[t].favorite))}},methods:{...(0,i.nv)(["toggleFavoriteForFiles"]),async favoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:1})},async unFavoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:0})}}};const s=(0,n(51900).Z)(l,(function(){var t=this,e=t._self._c;return t.shouldFavoriteSelection?e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Add selection to favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1):e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Remove selection from favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},41610:(t,e,n)=>{n.r(e),n.d(e,{default:()=>z});var i=n(20629),o=n(69141),a=n(11341),l=n(63225),s=n(47741),r=n(98293),c=n(15961),d=n(80351),m=n.n(d),u=n(3301),p=n(66951),h=n(28391),A=n(98171),f=n(68411),g=n(42375),b=n(11762),v=n(48450),C=n(79753),F=n(12945);const _={name:"AlbumPicker",components:{Plus:o.Z,ImageMultiple:v.Z,NcButton:c.P2,NcListItem:c.hx,NcLoadingIcon:c.lb,AlbumForm:b.Z},filters:{toCoverUrl:t=>(0,C.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",64,"&y=",64))},mixins:[F.Z],data:()=>({showAlbumCreationForm:!1}),methods:{albumCreatedHandler(){this.showAlbumCreationForm=!1,this.fetchAlbums()},pickAlbum(t){this.$emit("album-picked",t)}}};var y=n(93379),x=n.n(y),w=n(7795),k=n.n(w),T=n(90569),S=n.n(T),I=n(3565),N=n.n(I),Z=n(19216),B=n.n(Z),M=n(44589),D=n.n(M),P=n(88364),E={};E.styleTagTransform=D(),E.setAttributes=N(),E.insert=S().bind(null,"head"),E.domAPI=k(),E.insertStyleElement=B();x()(P.Z,E);P.Z&&P.Z.locals&&P.Z.locals;var W=n(51900);const Y=(0,W.Z)(_,(function(){var t=this,e=t._self._c;return t.showAlbumCreationForm?e("AlbumForm",{attrs:{"display-back-button":!0,title:t.t("photos","New album")},on:{back:function(e){t.showAlbumCreationForm=!1},done:t.albumCreatedHandler}}):e("div",{staticClass:"album-picker"},[e("h2",[t._v("\n\t\t"+t._s(t.t("photos","Add to Album"))+"\n\t\t"),t.loadingAlbums?e("NcLoadingIcon",{staticClass:"loading-icon"}):t._e()],1),t._v(" "),e("ul",{staticClass:"albums-container"},t._l(t.albums,(function(n){return e("NcListItem",{key:n.basename,staticClass:"album",attrs:{title:n.basename,"aria-label":t.t("photos","Add selection to album {albumName}",{albumName:n.basename})},on:{click:function(e){return t.pickAlbum(n.basename)}}},[e("template",{slot:"icon"},[-1!==n.lastPhoto?e("img",{staticClass:"album__image",attrs:{src:t._f("toCoverUrl")(n.lastPhoto)}}):e("div",{staticClass:"album__image album__image--placeholder"},[e("ImageMultiple",{attrs:{size:32}})],1)]),t._v(" "),e("template",{slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(t.n("photos","%n item","%n photos and videos",n.nbItems))+"\n\t\t\t\t")])],2)})),1),t._v(" "),e("NcButton",{staticClass:"new-album-button",attrs:{"aria-label":t.t("photos","Create a new album."),type:"tertiary"},on:{click:function(e){t.showAlbumCreationForm=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[t._v("\n\t\t"+t._s(t.t("photos","Create new album"))+"\n\t")])],1)}),[],!1,null,"6b923187",null).exports;var L=n(61225);const U={name:"ActionDownload",components:{NcActionLink:c.ih},props:{title:{type:String,required:!0},selectedFileIds:{type:Array,required:!0}},computed:{...(0,i.Se)(["files"]),downloadUrl(){const t=new URLSearchParams,e=this.fileNames.map((t=>"/"+t.split("/").splice(3).join("/")));return t.append("files",JSON.stringify(e)),(0,C.generateUrl)("/apps/files/ajax/download.php?".concat(t))},fileNames(){return this.selectedFileIds.map((t=>this.files[t].filename))}}};const R=(0,W.Z)(U,(function(){var t=this;return(0,t._self._c)("NcActionLink",{attrs:{"close-after-click":!0,href:t.downloadUrl,download:t.downloadUrl,"aria-label":t.title}},[t._v("\n\t"+t._s(t.title)+"\n\t"),t._t("icon",null,{slot:"icon"})],2)}),[],!1,null,null,null).exports;var q=n(71823),O=n(9944);const j={name:"Timeline",components:{Delete:a.Z,PlusBoxMultiple:l.Z,Download:s.Z,Close:r.default,Plus:o.Z,NcEmptyContent:c.SL,NcModal:c.Jc,NcActions:c.O3,NcActionButton:c.Js,NcButton:c.P2,AlbumForm:b.Z,AlbumPicker:Y,FilesListViewer:f.Z,File:g.Z,ActionFavorite:L.Z,ActionDownload:R,HeaderNavigation:q.Z},filters:{dateMonth:t=>m()(t,"YYYYMM").format("MMMM"),dateYear:t=>m()(t,"YYYYMM").format("YYYY")},mixins:[p.Z,A.Z,h.Z,c.tq],beforeRouteLeave(t,e,n){window.scrollTo(0,0),n()},props:{onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:()=>u.Oj},onThisDay:{type:Boolean,default:!1},rootTitle:{type:String,required:!0}},data:()=>({loadingCount:0,showAlbumCreationForm:!1,showAlbumPicker:!1,appContent:document.getElementById("app-content-vue")}),computed:{...(0,i.Se)(["files"])},methods:{...(0,i.nv)(["deleteFiles","addFilesToAlbum"]),getContent(){this.fetchFiles("",{mimesType:this.mimesType,onThisDay:this.onThisDay,onlyFavorites:this.onlyFavorites})},openViewer(t){const e=this.files[t];OCA.Viewer.open({fileInfo:e,list:Object.values(this.fileIdsByMonth).flat().map((t=>this.files[t])),loadMore:e.loadMore?async()=>await e.loadMore(!0):()=>[],canLoop:e.canLoop})},openUploader(){},async addSelectionToAlbum(t){this.showAlbumPicker=!1,await this.addFilesToAlbum({albumName:t,fileIdsToAdd:this.selectedFileIds})},async deleteSelection(){const t=this.selectedFileIds;this.onUncheckFiles(t),this.fetchedFileIds=this.fetchedFileIds.filter((e=>!t.includes(e))),await this.deleteFiles(t)},t:O.translate}};var H=n(73408),V={};V.styleTagTransform=D(),V.setAttributes=N(),V.insert=S().bind(null,"head"),V.domAPI=k(),V.insertStyleElement=B();x()(H.Z,V);H.Z&&H.Z.locals&&H.Z.locals;const z=(0,W.Z)(j,(function(){var t=this,e=t._self._c;return t.errorFetchingFiles?e("NcEmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"timeline"},[e("HeaderNavigation",{key:"navigation",attrs:{loading:t.loadingCount>0,path:"/",title:t.rootTitle,"root-title":t.rootTitle},on:{refresh:t.resetFetchFilesState}},[e("div",{staticClass:"timeline__header__left"},[0===t.selectedFileIds.length?e("NcActions",{attrs:{"force-menu":!0,"menu-title":t.t("photos","Add")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Create a new album")},on:{click:function(e){t.showAlbumCreationForm=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("PlusBoxMultiple")]},proxy:!0}],null,!1,2640725948)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Create new album"))+"\n\t\t\t\t\t")])],1):[e("NcButton",{attrs:{"close-after-click":!0,type:"primary","aria-label":t.t("photos","Add selection to an album")},on:{click:function(e){t.showAlbumPicker=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}])},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Add to album"))+"\n\t\t\t\t")]),t._v(" "),t.selectedFileIds.length>0?e("NcButton",{attrs:{"aria-label":t.t("photos","Unselect all")},on:{click:t.resetSelection},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Close")]},proxy:!0}],null,!1,1051939733)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Unselect all"))+"\n\t\t\t\t")]):t._e(),t._v(" "),e("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[e("ActionDownload",{attrs:{"selected-file-ids":t.selectedFileIds,title:t.t("photos","Download selected files")}},[e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":t.selectedFileIds}}),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Delete selection")},on:{click:t.deleteSelection},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Delete")]},proxy:!0}])},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete selection"))+"\n\t\t\t\t\t\t")])],1)]],2)]),t._v(" "),e("FilesListViewer",{ref:"filesListViewer",staticClass:"timeline__file-list",attrs:{"container-element":t.appContent,"file-ids-by-section":t.fileIdsByMonth,sections:t.monthsList,loading:t.loadingFiles,"base-height":t.isMobile?120:200,"empty-message":t.t("photos","No photos or videos in here")},on:{"need-content":t.getContent},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,distance:o}=n;return[i.sectionHeader?e("h3",{staticClass:"section-header",attrs:{id:"file-picker-section-header-".concat(i.id)}},[e("b",[t._v(t._s(t._f("dateMonth")(i.id)))]),t._v("\n\t\t\t\t"+t._s(t._f("dateYear")(i.id))+"\n\t\t\t")]):e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],distance:o},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})]}}])}),t._v(" "),t.showAlbumCreationForm?e("NcModal",{key:"albumCreationForm",attrs:{"close-button-contained":!1,title:t.t("photos","New album")},on:{close:function(e){t.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:function(e){t.showAlbumCreationForm=!1}}})],1):t._e(),t._v(" "),t.showAlbumPicker?e("NcModal",{key:"albumPicker",attrs:{"close-button-contained":!1,title:t.t("photos","Add to album")},on:{close:function(e){t.showAlbumPicker=!1}}},[e("AlbumPicker",{on:{"album-picked":t.addSelectionToAlbum}})],1):t._e()],1)}),[],!1,null,"4047f5a3",null).exports}}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=8a19213411083131e490