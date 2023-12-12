/*! For license information please see photos-src_components_Collection_CollectionContent_vue-src_components_FilesPicker_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_components_Collection_CollectionContent_vue-src_components_FilesPicker_vue"],{66951:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var i=n(59537),o=n(94236),l=n(77958),s=n(3301),a=n(81067),r=n(2161),c=n(80351),d=n.n(c);var p=n(32114);const A={name:"FetchFilesMixin",mixins:[n(69363).Z],data:()=>({errorFetchingFiles:null,loadingFiles:!1,doneFetchingFiles:!1,fetchSemaphore:new p.Z(1),fetchedFileIds:[]}),watch:{$route(){this.resetFetchFilesState()}},methods:{async fetchFiles(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.doneFetchingFiles&&!c||this.loadingFiles)return[];const p=await this.fetchSemaphore.acquire();try{this.errorFetchingFiles=null,this.loadingFiles=!0;const c=200,p=await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e={firstResult:0,nbResults:200,mimesType:s.Oj,onThisDay:!1,onlyFavorites:!1,...e};const n="/files/".concat((0,l.ts)().uid),i=e.mimesType.reduce(((t,e)=>"".concat(t,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(e,"</d:literal>\n\t\t</d:eq>\n\t")),""),c=e.onlyFavorites?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",p=e.onThisDay?"<d:or>".concat(Array(20).fill(1).map(((t,e)=>{const n=d()(Date.now()).startOf("day").subtract(3,"d").subtract(e+1,"y"),i=d()(Date.now()).endOf("day").add(3,"d").subtract(e+1,"y");return"<d:and>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>".concat(n.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t\t<d:lt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified />\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>").concat(i.format(d().defaultFormatUtc),"</d:literal>\n\t\t\t\t</d:lt>\n\t\t\t</d:and>")})).join("\n"),"</d:or>"):"";return e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(r.N,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(n,"/").concat(t,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(c,"\n\t\t\t\t\t\t\t").concat(p,"\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><nc:metadata-photos-original_date_time/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.nbResults,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.firstResult,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),(await a.ZP.getDirectoryContents("",e)).data.map((t=>(0,o.AX)(t)))}(t,{firstResult:this.fetchedFileIds.length,nbResults:c,...e,signal:this.abortController.signal});p.length!==c&&(this.doneFetchingFiles=!0);const A=p.map((t=>t.fileid)).filter((t=>!this.fetchedFileIds.includes(t.toString())));return this.fetchedFileIds.push(...A.map((t=>t.toString())).filter((t=>!n.includes(t)))),this.$store.dispatch("appendFiles",p),i.Z.debug("[FetchFilesMixin] Fetched ".concat(A.length," new files: "),A),A}catch(t){var A;if(404===(null===(A=t.response)||void 0===A?void 0:A.status))this.errorFetchingFiles=404;else{if("ERR_CANCELED"===t.code)return[];this.errorFetchingFiles=t}i.Z.error("Error fetching files",{error:t}),console.error(t)}finally{this.loadingFiles=!1,this.fetchSemaphore.release(p)}return[]},resetFetchFilesState(){this.doneFetchingFiles=!1,this.errorFetchingFiles=null,this.loadingFiles=!1,this.fetchedFileIds=[]}}}},28391:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i={name:"FilesByMonthMixin",computed:{fileIdsByMonth(){const t={};for(const n of this.fetchedFileIds){const i=this.files[n];var e;if(i)t[i.month]=null!==(e=t[i.month])&&void 0!==e?e:[],t[i.month].push(i.fileid)}return Object.keys(t).forEach((e=>t[e].sort(this.sortFilesByTimestamp))),t},monthsList(){return Object.keys(this.fileIdsByMonth).sort(((t,e)=>t>e?-1:1))}},methods:{sortFilesByTimestamp(t,e){return this.files[t].timestamp>this.files[e].timestamp?-1:1}}}},54268:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(87537),o=n.n(i),l=n(23645),s=n.n(l)()(o());s.push([t.id,".collection[data-v-6c460935]{display:flex;flex-direction:column}.collection__media[data-v-6c460935]{padding:0 64px}@media only screen and (max-width: 1200px){.collection__media[data-v-6c460935]{padding:0 4px}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionContent.vue"],names:[],mappings:"AAEA,6BACC,YAAA,CACA,qBAAA,CAEA,oCACC,cAAA,CAEA,2CAHD,oCAIE,aAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.collection {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__media {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const a=s},8618:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(87537),o=n.n(i),l=n(23645),s=n.n(l)()(o());s.push([t.id,".file-picker[data-v-2d4c39ac]{display:flex;flex-direction:column;padding:12px}.file-picker__content[data-v-2d4c39ac]{display:flex;align-items:flex-start;flex-grow:1;height:500px}.file-picker__navigation[data-v-2d4c39ac]{flex-basis:200px;overflow:scroll;margin-right:8px;padding-right:8px;height:100%}@media only screen and (max-width: 1200px){.file-picker__navigation[data-v-2d4c39ac]{flex-basis:100px}}.file-picker__navigation--placeholder[data-v-2d4c39ac]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.file-picker__navigation__month[data-v-2d4c39ac]{font-weight:bold;font-size:16px;border-radius:var(--border-radius-pill);padding:8px 16px;margin:4px 0;cursor:pointer}@media only screen and (max-width: 1200px){.file-picker__navigation__month[data-v-2d4c39ac]{text-align:center}}.file-picker__navigation__month[data-v-2d4c39ac]:hover{background:var(--color-background-dark)}.file-picker__navigation__month.selected[data-v-2d4c39ac]{background:var(--color-primary-element-lighter)}.file-picker__file-list[data-v-2d4c39ac]{flex-grow:1;min-width:0;height:100%}.file-picker__file-list--placeholder[data-v-2d4c39ac]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.file-picker__file-list .section-header[data-v-2d4c39ac]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.file-picker__file-list[data-v-2d4c39ac] .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}.file-picker__actions[data-v-2d4c39ac]{display:flex;justify-content:space-between;justify-items:center;padding-top:16px}","",{version:3,sources:["webpack://./src/components/FilesPicker.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CAEA,uCACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,YAAA,CAGD,0CACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,2CAPD,0CAQE,gBAAA,CAAA,CAGD,uDACC,6CAAA,CACA,wCAAA,CAGD,iDACC,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CAEA,2CARD,iDASE,iBAAA,CAAA,CAGD,uDACC,uCAAA,CAGD,0DACC,+CAAA,CAKH,yCACC,WAAA,CACA,WAAA,CACA,WAAA,CAEA,sDACC,6CAAA,CACA,wCAAA,CAGD,yDACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,wDACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CAIF,uCACC,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.file-picker {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 12px;\n\n\t&__content {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tflex-grow: 1;\n\t\theight: 500px;\n\t}\n\n\t&__navigation {\n\t\tflex-basis: 200px;\n\t\toverflow: scroll;\n\t\tmargin-right: 8px;\n\t\tpadding-right: 8px;\n\t\theight: 100%;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tflex-basis: 100px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t&__month {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tpadding: 8px 16px;\n\t\t\tmargin: 4px 0;\n\t\t\tcursor: pointer;\n\n\t\t\t@media only screen and (max-width: 1200px) {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&.selected {\n\t\t\t\tbackground: var(--color-primary-element-lighter);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t:deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tjustify-items: center;\n\t\tpadding-top: 16px;\n\t}\n}\n'],sourceRoot:""}]);const a=s},82124:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const i={name:"AlertCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon alert-circle-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},91522:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const i={name:"FolderMultipleImageIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon folder-multiple-image-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},93754:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const i={name:"ImagePlusIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon image-plus-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},94709:(t,e,n)=>{"use strict";n.d(e,{Z:()=>k});var i=n(82124),o=n(91522),l=n(12806),s=n(31352),a=n(98171),r=n(58063),c=n(39070);const d={name:"CollectionContent",components:{AlertCircle:i.Z,FolderMultipleImage:o.Z,NcEmptyContent:l.SL,FilesListViewer:r.Z,File:c.Z},mixins:[a.Z,l.tq],props:{collection:{type:Object,default:()=>{}},collectionFileIds:{type:Array,required:!0},loading:{type:Boolean,default:!1},allowSelection:{type:Boolean,default:!0},error:{type:[Error,Number],default:null}},data:()=>({appContent:document.getElementById("app-content-vue")}),computed:{files(){return this.$store.getters.files}},methods:{openViewer(t){const e=this.files[t];OCA.Viewer.open({fileInfo:e,list:this.collectionFileIds.map((t=>this.files[t])).filter((t=>!t.sectionHeader)),loadMore:e.loadMore?async()=>await e.loadMore(!0):()=>[],canLoop:e.canLoop})},t:s.Iu}};var p=n(93379),A=n.n(p),h=n(7795),g=n.n(h),u=n(90569),m=n.n(u),f=n(3565),C=n.n(f),_=n(19216),v=n.n(_),x=n(44589),y=n.n(x),F=n(54268),b={};b.styleTagTransform=y(),b.setAttributes=C(),b.insert=m().bind(null,"head"),b.domAPI=g(),b.insertStyleElement=v();A()(F.Z,b);F.Z&&F.Z.locals&&F.Z.locals;const k=(0,n(51900).Z)(d,(function(){var t=this,e=t._self._c;return void 0===t.collection&&!t.loading||404===t.error?e("NcEmptyContent",{staticClass:"empty-content-with-illustration",attrs:{name:t.t("photos","This collection does not exist")}},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1):t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}},[e("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):e("div",{staticClass:"collection"},[t._t("header",null,{selectedFileIds:t.selectedFileIds,resetSelection:t.resetSelection}),t._v(" "),0!==t.collectionFileIds.length||t.loading?t._e():t._t("empty-content"),t._v(" "),void 0!==t.collection?e("FilesListViewer",{staticClass:"collection__media",attrs:{"container-element":t.appContent,"file-ids":t.collectionFileIds,"base-height":t.isMobile?120:200,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,distance:o}=n;return e("File",{attrs:{file:t.files[i.id],"allow-selection":t.allowSelection,selected:!0===t.selection[i.id],distance:o},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})}}],null,!1,3813029717)}):t._e()],2)}),[],!1,null,"6c460935",null).exports},54159:(t,e,n)=>{"use strict";n.d(e,{Z:()=>B});var i=n(20629),o=n(12806),l=n(52587),s=n(80351),a=n.n(s),r=n(93754),c=n(58063),d=n(39070),p=n(66951),A=n(98171),h=n(28391),g=n(81090),u=n(3301);const m={name:"FilesPicker",components:{File:d.Z,FilesListViewer:c.Z,ImagePlus:r.Z,NcButton:o.P2,NcLoadingIcon:o.lb,UploadPicker:l.e},filters:{dateMonthAndYear:t=>a()(t,"YYYYMM").format("MMMM YYYY")},mixins:[p.Z,h.Z,A.Z,g.Z],props:{destination:{type:String,required:!0},blacklistIds:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},data:()=>({allowedMimes:u.ZP,targetMonth:null,uploadContext:{route:"albumpicker"}}),computed:{...(0,i.Se)(["files"])},watch:{monthsList(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{getFiles(){this.fetchFiles("",{},this.blacklistIds)},refreshFiles(){this.fetchFiles("",{firstResult:0},[...this.blacklistIds,...this.fetchedFileIds],!0)},emitPickedEvent(){this.$emit("files-picked",this.selectedFileIds)}}};var f=n(93379),C=n.n(f),_=n(7795),v=n.n(_),x=n(90569),y=n.n(x),F=n(3565),b=n.n(F),k=n(19216),w=n.n(k),Z=n(44589),I=n.n(Z),M=n(8618),T={};T.styleTagTransform=I(),T.setAttributes=b(),T.insert=y().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=w();C()(M.Z,T);M.Z&&M.Z.locals&&M.Z.locals;const B=(0,n(51900).Z)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-picker"},[e("div",{staticClass:"file-picker__content"},[e("nav",{staticClass:"file-picker__navigation",class:{"file-picker__navigation--placeholder":0===t.monthsList.length}},[e("ul",t._l(t.monthsList,(function(n){return e("li",{key:n,staticClass:"file-picker__navigation__month",class:{selected:t.targetMonth===n},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t\t"+t._s(t._f("dateMonthAndYear")(n))+"\n\t\t\t\t")])})),0)]),t._v(" "),e("FilesListViewer",{staticClass:"file-picker__file-list",class:{"file-picker__file-list--placeholder":0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,"empty-message":t.t("photos","There are no photos or videos yet!"),sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},scopedSlots:t._u([{key:"default",fn:function(n){let{file:i,height:o,isHeader:l,distance:s}=n;return[l?e("h3",{staticClass:"section-header",style:{height:"".concat(o,"px")},attrs:{id:"file-picker-section-header-".concat(i.id)}},[t._v("\n\t\t\t\t\t"+t._s(t._f("dateMonthAndYear")(i.id))+"\n\t\t\t\t")]):e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],distance:s},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1),t._v(" "),e("div",{staticClass:"file-picker__actions"},[e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.photosLocation,multiple:!0},on:{uploaded:t.refreshFiles}}),t._v(" "),e("NcButton",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("NcLoadingIcon"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t")])],1)])}),[],!1,null,"2d4c39ac",null).exports},80950:()=>{},46601:()=>{},89214:()=>{},96419:()=>{},56353:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},69386:()=>{},31616:()=>{},56619:()=>{},77108:()=>{},71408:()=>{},23646:()=>{}}]);
//# sourceMappingURL=photos-src_components_Collection_CollectionContent_vue-src_components_FilesPicker_vue.js.map?v=1488f182f6ad0c5a2dbf