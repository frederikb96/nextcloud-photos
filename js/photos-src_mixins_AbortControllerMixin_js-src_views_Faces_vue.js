/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_views_Faces_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_views_Faces_vue"],{69363:(t,n,e)=>{e.d(n,{Z:()=>a});const a={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(t,n,e){this.abortController.abort(),this.abortController=new AbortController,e()}}},517:(t,n,e)=>{e.d(n,{Z:()=>r});var a=e(87537),o=e.n(a),i=e(23645),s=e.n(i)()(o());s.push([t.id,".faces[data-v-f75bc546]{display:flex;flex-direction:column;height:calc(100vh - var(--header-height));padding-left:64px}@media only screen and (max-width: 1020px){.faces[data-v-f75bc546]{padding:0}}.faces__header[data-v-f75bc546]{display:flex;min-height:60px;align-items:center}.faces__header button[data-v-f75bc546]{margin-right:32px}.faces__list[data-v-f75bc546]{padding-top:24px;padding-bottom:32px;flex-grow:1;display:flex;flex-wrap:wrap;gap:32px;align-content:flex-start}.faces__empty[data-v-f75bc546]{display:flex;flex-direction:column;align-items:center}.faces__empty__button[data-v-f75bc546]{margin-top:32px}.empty-content-with-illustration[data-v-f75bc546] .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-f75bc546] .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Faces.vue"],names:[],mappings:"AAEA,wBACC,YAAA,CACA,qBAAA,CACA,yCAAA,CACA,iBAAA,CAEA,2CAND,wBAOE,SAAA,CAAA,CAGD,gCACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,uCACC,iBAAA,CAIF,8BACC,gBAAA,CACA,mBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,wBAAA,CAGD,+BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,uCACC,eAAA,CAKH,uEACC,WAAA,CACA,YAAA,CAEA,2EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.faces {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--header-height));\n\tpadding-left: 64px;\n\n\t@media only screen and (max-width: 1020px) {\n\t\tpadding: 0;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\n\t\tbutton {\n\t\t\tmargin-right: 32px;\n\t\t}\n\t}\n\n\t&__list {\n\t\tpadding-top: 24px;\n\t\tpadding-bottom: 32px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 32px;\n\t\talign-content: flex-start;\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration :deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const r=s},98475:(t,n,e)=>{e.r(n),e.d(n,{default:()=>y});var a=e(95807),o=e(15961),i=e(99751),s=e(17968),r=e(20629);const A={name:"Faces",components:{FaceCover:s.Z,NcEmptyContent:o.SL,NcLoadingIcon:o.lb,AccountBoxMultipleOutline:a.Z},mixins:[i.Z],computed:{...(0,r.Se)(["facesFiles"]),noFaces(){return 0===Object.keys(this.faces).length},orderedFaces(){return Object.values(this.faces).sort(((t,n)=>t.props.nbItems&&n.props.nbItems?n.props.nbItems-t.props.nbItems:this.facesFiles[n.basename]&&this.facesFiles[t.basename]?this.facesFiles[n.basename].length-this.facesFiles[t.basename].length:0))}}};var c=e(93379),l=e.n(c),p=e(7795),m=e.n(p),d=e(90569),C=e.n(d),g=e(3565),h=e.n(g),u=e(19216),f=e.n(u),x=e(44589),_=e.n(x),b=e(517),v={};v.styleTagTransform=_(),v.setAttributes=h(),v.insert=C().bind(null,"head"),v.domAPI=m(),v.insertStyleElement=f();l()(b.Z,v);b.Z&&b.Z.locals&&b.Z.locals;const y=(0,e(51900).Z)(A,(function(){var t=this,n=t._self._c;return t.errorFetchingFaces?n("NcEmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):n("div",{staticClass:"faces"},[t.loadingFaces?n("NcLoadingIcon"):t._e(),t._v(" "),t.noFaces&&!t.loadingFaces?n("div",{staticClass:"faces__empty"},[n("NcEmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:t._u([{key:"icon",fn:function(){return[n("AccountBoxMultipleOutline")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("photos","This might take some time depending on the size of your photo library."))+"\n\t\t\t")]},proxy:!0}],null,!1,3796275108)},[t._v(" "),t._v("\n\t\t\t"+t._s(t.t("photos","Recognized people will show up here"))+"\n\t\t")])],1):t.noFaces?t._e():n("div",{staticClass:"faces__list"},t._l(t.orderedFaces,(function(t){return n("router-link",{key:t.basename,attrs:{to:"/faces/".concat(t.basename)}},[n("FaceCover",{attrs:{"base-name":t.basename}})],1)})),1)],1)}),[],!1,null,"f75bc546",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_views_Faces_vue.js.map?v=5e08119eae891ce6c876