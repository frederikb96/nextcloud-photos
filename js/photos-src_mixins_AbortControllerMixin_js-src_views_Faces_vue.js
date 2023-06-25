/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_views_Faces_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_views_Faces_vue"],{69363:(t,e,n)=>{n.d(e,{Z:()=>a});const a={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(t,e,n){this.abortController.abort(),this.abortController=new AbortController,n()}}},85818:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(87537),o=n.n(a),i=n(23645),r=n.n(i)()(o());r.push([t.id,".face-cover[data-v-c72c5064]{display:flex;flex-direction:column;padding:10px;border-radius:var(--border-radius-large)}.face-cover__crop-container[data-v-c72c5064]{overflow:hidden;width:128px;height:128px;border-radius:128px;position:relative;background:var(--color-background-darker);--photos-face-width: 128px}@media only screen and (max-width: 1020px){.face-cover__crop-container[data-v-c72c5064]{width:95px;height:95px;--photos-face-width: 95px}}.face-cover[data-v-c72c5064]:hover,.face-cover[data-v-c72c5064]:focus{background:var(--color-background-hover)}.face-cover__details[data-v-c72c5064]{display:flex;flex-direction:column;width:128px;margin-top:4px;text-align:center}@media only screen and (max-width: 1020px){.face-cover__details[data-v-c72c5064]{width:95px}}.face-cover__details__first-line[data-v-c72c5064]{display:flex;height:2em;overflow:hidden;text-overflow:ellipsis}.face-cover__details__second-line[data-v-c72c5064]{margin-top:6px;color:var(--color-text-maxcontrast)}.face-cover__details__name[data-v-c72c5064]{flex-grow:1;margin:0}.face-cover--small *[data-v-c72c5064]{font-size:15px !important}.face-cover--small .face-cover__details[data-v-c72c5064]{width:60px !important}.face-cover--small .face-cover__crop-container[data-v-c72c5064]{width:60px !important;height:60px !important;--photos-face-width: 60px !important}","",{version:3,sources:["webpack://./src/mixins/FaceCover.scss"],names:[],mappings:"AAqBA,6BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,6CACC,eAAA,CACA,WAAA,CACA,YAAA,CACA,mBAAA,CACA,iBAAA,CACA,yCAAA,CACA,0BAAA,CAEA,2CATD,6CAUE,UAAA,CACA,WAAA,CACA,yBAAA,CAAA,CAIF,sEACC,wCAAA,CAGD,sCACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CAEA,2CAPD,sCAQE,UAAA,CAAA,CAGD,kDACC,YAAA,CACA,UAAA,CACA,eAAA,CACA,sBAAA,CAGD,mDACC,cAAA,CACA,mCAAA,CAGD,4CACC,WAAA,CACA,QAAA,CAMF,sCACC,yBAAA,CAED,yDACC,qBAAA,CAED,gEACC,qBAAA,CACA,sBAAA,CACA,oCAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>\n *\n * @author Marcel Klehr <mklehr@gmx.net>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.face-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px;\n\tborder-radius: var(--border-radius-large);\n\n\t&__crop-container {\n\t\toverflow: hidden;\n\t\twidth: 128px;\n\t\theight: 128px;\n\t\tborder-radius: 128px;\n\t\tposition: relative;\n\t\tbackground: var(--color-background-darker);\n\t\t--photos-face-width: 128px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t\theight: 95px;\n\t\t\t--photos-face-width: 95px;\n\t\t}\n\t}\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-hover);\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 128px;\n\t\tmargin-top: 4px;\n\t\ttext-align: center;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t\theight: 2em;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tmargin-top: 6px;\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n\n.face-cover--small {\n\t* {\n\t\tfont-size: 15px !important;\n\t}\n\t.face-cover__details {\n\t\twidth: 60px !important;\n\t}\n\t.face-cover__crop-container {\n\t\twidth: 60px !important;\n\t\theight: 60px !important;\n\t\t--photos-face-width: 60px !important;\n\t}\n}"],sourceRoot:""}]);const s=r},74824:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(87537),o=n.n(a),i=n(23645),r=n.n(i)()(o());r.push([t.id,".faces[data-v-48f1a63a]{display:flex;flex-direction:column;height:calc(100vh - var(--header-height));padding-left:64px}@media only screen and (max-width: 1020px){.faces[data-v-48f1a63a]{padding:0}}.faces__header[data-v-48f1a63a]{display:flex;min-height:60px;align-items:center}.faces__header button[data-v-48f1a63a]{margin-right:32px}.faces__list[data-v-48f1a63a]{padding-top:24px;padding-bottom:32px;flex-grow:1;display:flex;flex-wrap:wrap;gap:32px;align-content:flex-start}.faces__empty[data-v-48f1a63a]{display:flex;flex-direction:column;align-items:center}.faces__empty__button[data-v-48f1a63a]{margin-top:32px}.empty-content-with-illustration[data-v-48f1a63a] .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-48f1a63a] .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Faces.vue"],names:[],mappings:"AAEA,wBACC,YAAA,CACA,qBAAA,CACA,yCAAA,CACA,iBAAA,CAEA,2CAND,wBAOE,SAAA,CAAA,CAGD,gCACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,uCACC,iBAAA,CAIF,8BACC,gBAAA,CACA,mBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,wBAAA,CAGD,+BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,uCACC,eAAA,CAKH,uEACC,WAAA,CACA,YAAA,CAEA,2EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.faces {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--header-height));\n\tpadding-left: 64px;\n\n\t@media only screen and (max-width: 1020px) {\n\t\tpadding: 0;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\n\t\tbutton {\n\t\t\tmargin-right: 32px;\n\t\t}\n\t}\n\n\t&__list {\n\t\tpadding-top: 24px;\n\t\tpadding-bottom: 32px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 32px;\n\t\talign-content: flex-start;\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration :deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const s=r},95807:(t,e,n)=>{n.d(e,{Z:()=>o});const a={name:"AccountBoxMultipleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,n(51900).Z)(a,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon account-box-multiple-outline-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6M18.5 14.25C18.5 12.75 15.5 12 14 12S9.5 12.75 9.5 14.25V15H18.5M14 10.25C15.24 10.25 16.25 9.24 16.25 8S15.24 5.75 14 5.75 11.75 6.76 11.75 8 12.76 10.25 14 10.25M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.89 21.1 2 20 2M20 16H8V4H20V16Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},31862:(t,e,n)=>{n.r(e),n.d(e,{default:()=>T});var a=n(95807),o=n(15961),i=n(99751),r=n(2295),s=n(20629),c=n(46116);const A={name:"AccountOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var l=n(51900);const d={name:"UnassignedFacesCover",components:{AccountOffIcon:(0,l.Z)(A,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon account-off-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12.28,14L18.28,20L20,21.72L18.73,23L15.73,20H4V18C4,16.16 6.5,14.61 9.87,14.14L2.78,7.05L4.05,5.78L12.28,14M20,18V19.18L15.14,14.32C18,14.93 20,16.35 20,18Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},mixins:[i.Z,c.Z],props:{small:{type:Boolean,default:!1}},computed:{...(0,s.Se)(["unassignedFilesCount"]),colorMainBackground:()=>getComputedStyle(document.documentElement).getPropertyValue("--color-main-background")},async mounted(){await this.fetchUnassignedFacesCount()}};var p=n(93379),C=n.n(p),m=n(7795),u=n.n(m),h=n(90569),f=n.n(h),g=n(3565),x=n.n(g),v=n(19216),_=n.n(v),w=n(44589),b=n.n(w),y=n(85818),k={};k.styleTagTransform=b(),k.setAttributes=x(),k.insert=f().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=_();C()(y.Z,k);y.Z&&y.Z.locals&&y.Z.locals;const B={name:"Faces",components:{UnassignedFacesCover:(0,l.Z)(d,(function(){var t=this,e=t._self._c;return e("div",{class:["face-cover",t.small&&"face-cover--small"],on:{click:function(e){return t.$emit("click")}}},[e("div",{staticClass:"face-cover__crop-container"},[e("AccountOffIcon",{attrs:{size:"auto","fill-color":t.colorMainBackground}})],1),t._v(" "),e("div",{staticClass:"face-cover__details"},[t.small?t._e():e("div",{staticClass:"face-cover__details__second-line"},[t._v("\n\t\t\t"+t._s(t.n("photos","%n unassigned photo","%n unassigned photos",t.unassignedFilesCount))+"\n\t\t")])])])}),[],!1,null,"c72c5064",null).exports,FaceCover:r.Z,NcEmptyContent:o.SL,NcLoadingIcon:o.lb,AccountBoxMultipleOutline:a.Z},mixins:[i.Z],computed:{...(0,s.Se)(["facesFiles","unassignedFilesCount"]),noFaces(){return 0===Object.keys(this.faces).length},orderedFaces(){return Object.values(this.faces).sort(((t,e)=>t.props.nbItems&&e.props.nbItems?e.props.nbItems-t.props.nbItems:this.facesFiles[e.basename]&&this.facesFiles[t.basename]?this.facesFiles[e.basename].length-this.facesFiles[t.basename].length:0))}}};var F=n(74824),E={};E.styleTagTransform=b(),E.setAttributes=x(),E.insert=f().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=_();C()(F.Z,E);F.Z&&F.Z.locals&&F.Z.locals;const T=(0,l.Z)(B,(function(){var t=this,e=t._self._c;return t.errorFetchingFaces?e("NcEmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"faces"},[t.loadingFaces?e("NcLoadingIcon"):t._e(),t._v(" "),t.noFaces&&!t.loadingFaces?e("div",{staticClass:"faces__empty"},[e("NcEmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:t._u([{key:"icon",fn:function(){return[e("AccountBoxMultipleOutline")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("photos","This might take some time depending on the size of your photo library."))+"\n\t\t\t")]},proxy:!0}],null,!1,3796275108)},[t._v(" "),t._v("\n\t\t\t"+t._s(t.t("photos","Recognized people will show up here"))+"\n\t\t")])],1):t.noFaces?t._e():e("div",{staticClass:"faces__list"},[t._l(t.orderedFaces,(function(t){return e("router-link",{key:t.basename,attrs:{to:"/faces/".concat(t.basename)}},[e("FaceCover",{attrs:{"base-name":t.basename}})],1)})),t._v(" "),e("router-link",{key:"unassigned",attrs:{to:"/faces/unassigned"}},[e("UnassignedFacesCover")],1)],2)],1)}),[],!1,null,"48f1a63a",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_views_Faces_vue.js.map?v=5a5eb82462cc41ff3924