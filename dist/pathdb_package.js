parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"aJmB":[function(require,module,exports) {
function e(){function e(e){var t=RegExp(e+"[^;]+").exec(document.cookie);return decodeURIComponent(t?t.toString().replace(/^[^=]+./,""):"")}console.log("PathDbMods()..."),fetch("/jwt/token",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log(e),e.hasOwnProperty("token")&&e.token&&(document.cookie="token="+e.token+";")}),console.warn("{PathDB mods enabled}"),Store.prototype.default_findMark=Store.prototype.findMark,Store.prototype.findMark=function(e,t,r,i,o,n,a,p,d,s){var l=this,u=this.base+"Mark/find",c={};return e&&(c.slide=e),t&&(c.name=t),r&&(c.specimen=r),i&&(c.study=i),o&&(c.footprint=o),n&&(c.source=n),a&&(c.x0=a),p&&(c.x1=p),d&&(c.y0=d),s&&(c.y1=s),fetch(u+"?"+objToParamStr(c),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.getMarkByIds=function(e,t,r,i,o,n,a,p,d,s){var l=this;if(!Array.isArray(e)||!t)return{hasError:!0,message:"args are illegal"};var u=this.base+"Mark/multi",c={},m=e.map(function(e){return'"'+e+'"'}).join(",");return c.name="["+m+"]",c.slide=t,r&&(c.study=r),i&&(c.specimen=i),o&&(c.source=o),n&&(c.footprint=n),a&&(c.x0=a),p&&(c.x1=p),d&&(c.y0=d),s&&(c.y1=s),fetch(u+"?"+objToParamStr(c),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.findMarkTypes=function(e,t){var r="Mark/types",i=this.base+r,o={};return e?(parseInt(e)==e||parseFloat(e)==e?o.slide='"'+e+'"':o.slide=e,t&&(o.name=t,r="Mark/typesExec"),fetch(i+"?"+objToParamStr(o),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler)):(console.error("Store.findMarkTypes needs slide ... "),null)},Store.prototype.default_findSlide=Store.prototype.findSlide,Store.prototype.findSlide=function(t,r,i,o){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_getSlide=Store.prototype.getSlide,Store.prototype.getSlide=function(t){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_findHeatmapType=Store.prototype.findHeatmapType,Store.prototype.findHeatmapType=function(e,t){var r=this,i=this.base+"Heatmap/types",o={};return o.slide=e,o.specimen="",o.study="",t&&(o.name=t),fetch(i+"?"+objToParamStr(o),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return r.filterBroken(e,"heatmap")})},Store.prototype.default_findHeatmap=Store.prototype.findHeatmap,Store.prototype.findHeatmap=function(e,t){var r=this,i=this.base+"Heatmap/find",o={};return o.slide=e,o.specimen="",o.study="",t&&(o.name=t),fetch(i+"?"+objToParamStr(o),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return r.filterBroken(e,"heatmap")})},Store.prototype.default_getHeatmap=Store.prototype.getHeatmap,Store.prototype.getHeatmap=function(e,t){var r=this,i=this.base+"Heatmap/get",o={};return o.slide=e,o.specimen="",o.study="",t&&(o.name=t),fetch(i+"?"+objToParamStr(o),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return r.filterBroken(e,"heatmap")})},StatesHelper.prototype.default_getCurrentStatesURL=StatesHelper.prototype.getCurrentStatesURL,getCurrentStatesURL=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=StatesHelper.getCurrentStates(e);if(t)return console.log(t),t=StatesHelper.encodeStates(t),""+location.origin+location.pathname+"?slideId="+$D.params.slideId+"&states="+$D.params.states+"&mode="+$D.params.mode},CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var t=this,r=new URLSearchParams(window.location.search).get("slideId");this.slideId=r,this.slideName=r,this.study="",this.specimen="",this.subject_id="",this.image_id="",this.study_id="",this.store.getSlide(r).then(function(r){if(r=r[0],console.log(r),t.mpp=1e9,r.field_mpp_y&&r.field_mpp_y.length>=1&&(t.mpp_y=r.field_mpp_y[0].value,t.mpp=t.mpp_y),r.field_mpp_x&&r.field_mpp_x.length>=1&&(t.mpp_x=r.field_mpp_x[0].value,t.mpp=t.mpp_x),r.referencepixelphysicalvaluey&&r.referencepixelphysicalvaluey.length>=1&&(t.mpp_y=r.referencepixelphysicalvaluey[0].value,t.mpp=t.mpp_y),r.referencepixelphysicalvaluex&&r.referencepixelphysicalvaluex.length>=1&&(t.mpp_x=r.referencepixelphysicalvaluex[0].value,t.mpp=t.mpp_x),r.field_subject_id&&r.field_subject_id.length>=1&&(t.subject_id=r.field_subject_id[0].value),r.clinicaltrialsubjectid&&r.clinicaltrialsubjectid.length>=1&&(t.subject_id=r.clinicaltrialsubjectid[0].value),r.field_image_id&&r.field_image_id.length>=1&&(t.image_id=r.field_image_id[0].value),r.imageid&&r.imageid.length>=1&&(t.image_id=r.imageid[0].value),r.field_study_id&&r.field_study_id.length>=1&&(t.study_id=r.field_study_id[0].value),r.studyid&&r.studyid.length>=1&&(t.study_id=r.studyid[0].value),Store.prototype.pdb_hm_name=t.image_id,!(r.field_iip_path&&r.field_iip_path.length>=1))throw"No image location --could be token";t.location=r.field_iip_path[0].value,t.url="../../img/IIP/raw/?DeepZoom="+t.location+".dzi",t.viewer.open(t.url),t.viewer.mpp=t.mpp,t.viewer.mpp_x=t.mpp_x,t.viewer.mpp_y=t.mpp_y,t.mpp&&1e9!=t.mpp&&t.createScalebar(t.mpp),new OpenSeadragonImaging.ImagingHelper({viewer:t.viewer}).setMaxZoom(1);var i={};i._id=t.slideId,i.name=t.slideName,i.subject_id=t.subject_id,i.image_id=t.image_id,i.study_id=t.study_id,i.study=t.study,i.specimen=t.specimen,i.mpp=t.mpp,i.mpp_x=t.mpp_x,i.mpp_y=t.mpp_y,i.location=t.location,i.url=t.url,e&&"function"==typeof e&&e.call(null,i),Loading.text.textContent="Loading Slide's Tiles..."}).catch(function(e){console.error(e),Loading.text.textContent="ERROR - PathDB Image Error (Try A Refresh)"})}}e(),console.warn("This Setup Is Intended For Pathdb");
},{}]},{},["aJmB"], null)
//# sourceMappingURL=/pathdb_package.map