(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t){},cgbw:function(e,t,o){"use strict";o.r(t);var a=o("yQhg"),r=new a.a({debug:!0,autoProceed:!0,restrictions:{maxFileSize:10485760,maxNumberOfFiles:1,allowedFileTypes:[".jpg",".jpeg",".png",".gif"]}}),i={name:"uppy-loader",mounted:function(){var e=this;r.close(),r.use(a.b,{target:".uppy-drag-drop",note:"PNG, JPG, GIF up to 10MB",locale:{strings:{dropHereOr:"%{browse} or drag and drop",browse:"Upload a file"}}}).use(a.c,{id:"XHRUpload",endpoint:"https://pixxo.nl/api/upload",method:"post",formData:!0,fieldName:"file",limit:1}),r.on("upload",(function(t){e.$emit("upload-start",t)})),r.on("complete",(function(t){e.$emit("upload-success",t)})),r.on("error",(function(){e.$emit("upload-error",r.getState().error)}))}},n=(o("6lKQ"),o("KHd+")),l=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-grow uppy uppy-drag-drop relative"},[t("div",{staticClass:"absolute left-0 right-0 flex justify-center pointer-events-none z-50"},[t("svg-icon",{staticClass:"bg-white text-gray-700 w-20 mt-10 pt-5",attrs:{name:"upload"}})],1)])}),[],!1,null,null,null);t.default=l.exports}}]);