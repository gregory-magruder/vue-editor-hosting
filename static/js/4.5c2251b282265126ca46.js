(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{JZac:function(t,e,n){"use strict";n.r(e);var r={name:"hint-tag",props:["node","updateAttrs","view"],data:function(){return{variants:["info","success","error"]}},computed:{variant:{get:function(){return this.node.attrs.variant},set:function(t){this.updateAttrs({variant:t})}}},methods:{onChangeVariant:function(){var t=(this.variants.indexOf(this.variant)+1)%this.variants.length;this.variant=this.variants[t]}}},a=n("KHd+"),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["hint-tag",t.variant],attrs:{"content-editable":t.view.editable,variant:t.variant}},[n("div",{staticClass:"hint-tag__icon"},[t.view.editable?n("a",{on:{click:t.onChangeVariant}},[n("svg-icon",{attrs:{name:t.variant}})],1):n("svg-icon",{attrs:{name:t.variant}})],1),t._v(" "),n("div",{ref:"content",staticClass:"hint-tag__text"})])}),[],!1,null,null,null);e.default=i.exports},dYle:function(t,e,n){"use strict";n.r(e);var r={name:"image",props:["node","updateAttrs","view"],data:function(){return{show_modal:!1,caption:"",credits_name:"",credits_url:""}},computed:{attrCaption:{get:function(){return this.node.attrs.caption},set:function(t){this.updateAttrs({caption:t})}},attrCreditsName:{get:function(){return this.node.attrs.credits_name},set:function(t){this.updateAttrs({credits_name:t})}},attrCreditsUrl:{get:function(){return this.node.attrs.credits_url},set:function(t){this.updateAttrs({credits_url:t})}}},methods:{onShowSettingModal:function(){this.caption=this.attrCaption,this.credits_name=this.attrCreditsName,this.credits_url=this.attrCreditsUrl,this.show_modal=!0},onRemoveImage:function(){},onSaveSettings:function(){this.attrCaption=this.caption,this.attrCreditsName=this.credits_name,this.attrCreditsUrl=this.credits_url,this.show_modal=!1}}},a=n("KHd+"),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-wrapper"},[n("img",{attrs:{src:t.node.attrs.src}}),t._v(" "),n("p",{staticClass:"text-center text-gray-600 pt-1"},[t._v(t._s(t.attrCaption))]),t._v(" "),t.view.editable?n("div",{staticClass:"setting-icons border bg-gray-100 rounded absolute top-0 right-0 mt-2 mr-2"},[n("a",{staticClass:"p-2 hover:bg-gray-300 border-b border-color-gray-500",on:{click:t.onShowSettingModal}},[n("svg-icon",{attrs:{name:"cog"}})],1),t._v(" "),n("a",{staticClass:"p-2 hover:bg-gray-300",on:{click:t.onRemoveImage}},[n("svg-icon",{attrs:{name:"remove"}})],1)]):t._e(),t._v(" "),n("t-modal",{attrs:{"container-class":"flex items-center relative h-full mx-auto z-50","wrapper-class":"t-modal flex-auto bg-white rounded","overlay-class":"fixed left-0 top-0 bottom-0 right-0 bg-black opacity-75 z-40","body-class":"flex flex-col flex-grow items-start p-6","hide-close-button":""},model:{value:t.show_modal,callback:function(e){t.show_modal=e},expression:"show_modal"}},[n("h2",{staticClass:"text-lg"},[t._v("Edit Image")]),t._v(" "),n("div",{staticClass:"flex w-full mt-10"},[n("div",{staticClass:"text-left w-1/3"},[n("img",{staticClass:"w-full",attrs:{src:t.node.attrs.src}})]),t._v(" "),n("div",{staticClass:"flex flex-col w-2/3 px-3"},[n("p",[t._v("Caption")]),t._v(" "),n("t-input",{staticClass:"w-full",attrs:{size:"sm"},model:{value:t.caption,callback:function(e){t.caption=e},expression:"caption"}}),t._v(" "),n("p",{staticClass:"pt-3"},[t._v("Photo credits - name")]),t._v(" "),n("t-input",{staticClass:"w-full",attrs:{size:"sm"},model:{value:t.credits_name,callback:function(e){t.credits_name=e},expression:"credits_name"}}),t._v(" "),n("p",{staticClass:"pt-3"},[t._v("Photo credits - url")]),t._v(" "),n("t-input",{staticClass:"w-full",attrs:{size:"sm"},model:{value:t.credits_url,callback:function(e){t.credits_url=e},expression:"credits_url"}})],1)]),t._v(" "),n("div",{staticClass:"flex w-full mt-10"},[n("div",{staticClass:"text-left w-1/2"},[n("t-button",{staticClass:"t-btn-cancel",attrs:{size:"sm"},on:{click:function(e){t.show_modal=!1}}},[n("span",{staticClass:"mr-2"},[t._v("Cancel")]),t._v(" "),n("svg-icon",{attrs:{name:"close"}})],1)],1),t._v(" "),n("div",{staticClass:"text-right w-1/2"},[n("t-button",{attrs:{variant:"primary",size:"sm"},on:{click:t.onSaveSettings}},[n("span",{staticClass:"mr-2"},[t._v("Save")])])],1)])])],1)}),[],!1,null,null,null);e.default=i.exports},iu4U:function(t,e,n){"use strict";n.r(e);var r={name:"embed-video",props:["node","updateAttrs","view"],computed:{src:{get:function(){return this.node.attrs.src},set:function(t){this.updateAttrs({src:t})}}}},a=n("KHd+"),i=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embed-video"},[e("iframe",{staticClass:"embed-video__iframe",attrs:{src:this.src}})])}),[],!1,null,null,null);e.default=i.exports},p24f:function(t,e,n){"use strict";n.r(e);var r=n("zUJn"),a=n("8j27"),i=n("lwsE"),o=n.n(i),c=n("W8MJ"),s=n.n(c),u=n("7W2i"),l=n.n(u),d=n("a1gu"),m=n.n(d),f=n("Nsbk"),v=n.n(f),h=n("qd4/");function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var _=function(t){l()(r,t);var e=p(r);function r(){return o()(this,r),e.apply(this,arguments)}return s()(r,[{key:"commands",value:function(t){var e=t.type;t.schema;return function(t){return function(n,r){var a=n.selection,i=a.$cursor?a.$cursor.pos:a.$to.pos,o=e.create(t);r(n.tr.insert(i,o))}}}},{key:"inputRules",value:function(t){var e=t.type;return[Object(h.u)(/^\s*video\s$/,e)]}},{key:"name",get:function(){return"embed_video"}},{key:"schema",get:function(){return{attrs:{src:{default:null}},group:"block",selectable:!1,parseDOM:[{tag:"iframe",getAttrs:function(t){return{src:t.getAttribute("src")}}}],toDOM:function(t){return["iframe",{src:t.attrs.src,frameborder:0,allowfullscreen:"true"}]}}}},{key:"view",get:function(){return n("iu4U").default}}]),r}(r.f);function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var b=function(t){l()(r,t);var e=g(r);function r(){return o()(this,r),e.apply(this,arguments)}return s()(r,[{key:"commands",value:function(t){var e=t.type;t.schema;return function(){return Object(h.s)(e)}}},{key:"keys",value:function(t){var e=t.type;return{"Shift-Ctrl-h":Object(h.s)(e)}}},{key:"inputRules",value:function(t){var e=t.type;return[Object(h.u)(/^\s*video\s$/,e)]}},{key:"name",get:function(){return"hint_tag"}},{key:"schema",get:function(){return{attrs:{variant:{default:"info"}},content:"block+",group:"block",defining:!0,draggable:!0,selectable:!0,parseDOM:[{tag:'[class="hint-tag"]',getAttrs:function(t){return{variant:t.getAttribute("variant")||"info"}}}],toDOM:function(t){return["div",{class:"hint-tag ".concat(t.attrs.variant),contenteditable:"true"},["div",{class:"hint-tag__icon"}],["div",{class:"hint-tag__text"},0]]}}}},{key:"view",get:function(){return n("JZac").default}}]),r}(r.f),w=n("J4zp"),y=n.n(w);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var k=/!\[(.+|:?)\]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,x=function(t){l()(r,t);var e=C(r);function r(){return o()(this,r),e.apply(this,arguments)}return s()(r,[{key:"commands",value:function(t){var e=t.type;return function(t){return function(n,r){var a=n.selection,i=a.$cursor?a.$cursor.pos:a.$to.pos,o=e.create(t);r(n.tr.insert(i,o))}}}},{key:"inputRules",value:function(t){var e=t.type;return[Object(h.g)(k,e,(function(t){var e=y()(t,4),n=e[1];return{src:e[2],alt:n,caption:e[3]}}))]}},{key:"name",get:function(){return"image"}},{key:"schema",get:function(){return{inline:!0,attrs:{src:{},alt:{default:null},caption:{default:null},credits_name:{default:""},credits_url:{default:""}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(t){return{src:t.getAttribute("src"),alt:t.getAttribute("alt"),caption:t.getAttribute("caption"),credits_name:t.getAttribute("credits-name")||"",credits_url:t.getAttribute("credits-url")||""}}}],toDOM:function(t){return["img",t.attrs]}}}},{key:"view",get:function(){return n("dYle").default}}]),r}(r.f),A={name:"text-editor",components:{EditorContent:r.b,EditorMenuBar:r.c,ImageModal:function(){return n.e(5).then(n.bind(null,"aOMp"))},VideoModal:function(){return n.e(6).then(n.bind(null,"8/Gp"))}},data:function(){var t=this;return{html:"",show_modal:null,custom_command:null,editor:new r.a({extensions:[new a.a,new a.c,new a.e,new a.f,new a.g({levels:[1,2,3]}),new a.i,new a.l,new a.m,new a.s,new a.t,new a.k,new a.b,new a.d,new a.j,new a.n,new a.u,new a.o({resizable:!0}),new a.q,new a.p,new a.r,new a.h,new _,new b,new x],content:"<em>editable text</em>"}),editor_menus:[{name:"bold",active:function(t){return t.bold()},command:function(t){return t.bold()}},{name:"italic",active:function(t){return t.italic()},command:function(t){return t.italic()}},{name:"strike",active:function(t){return t.strike()},command:function(t){return t.strike()}},{name:"underline",active:function(t){return t.underline()},command:function(t){return t.underline()}},{name:"code",active:function(t){return t.code()},command:function(t){return t.code()}},{name:"paragraph",active:function(t){return t.paragraph()},command:function(t){return t.paragraph()}},{name:"heading1",text:"H1",active:function(t){return t.heading({level:1})},command:function(t){return t.heading({level:1})}},{name:"heading2",text:"H2",active:function(t){return t.heading({level:2})},command:function(t){return t.heading({level:2})}},{name:"heading3",text:"H3",active:function(t){return t.heading({level:3})},command:function(t){return t.heading({level:3})}},{name:"bullet_list",active:function(t){return t.bullet_list()},command:function(t){return t.bullet_list()}},{name:"ordered_list",active:function(t){return t.ordered_list()},command:function(t){return t.ordered_list()}},{name:"blockquote",active:function(t){return t.blockquote()},command:function(t){return t.blockquote()}},{name:"code_block",active:function(t){return t.code_block()},command:function(t){return t.code_block()}},{name:"image",active:function(t){},command:function(e){return t.onShowModal("image",e.image)}},{name:"embed_video",active:function(t){},command:function(e){return t.onShowModal("video",e.embed_video)}},{name:"info_fill",active:function(t){return t.hint_tag()},command:function(t){return t.hint_tag()}},{name:"table",active:function(t){},command:function(t){return t.createTable({rowsCount:3,colsCount:2,withHeaderRow:!1})}},{name:"horizontal_rule",active:function(t){},command:function(t){return t.horizontal_rule()}},{name:"undo",active:function(t){},command:function(t){return t.undo()}},{name:"redo",active:function(t){},command:function(t){return t.redo()}}],table_menus:[{name:"delete_table",command:function(t){return t.deleteTable()}},{name:"add_col_before",command:function(t){return t.addColumnBefore()}},{name:"add_col_after",command:function(t){return t.addColumnAfter()}},{name:"delete_col",command:function(t){return t.deleteColumn()}},{name:"add_row_before",command:function(t){return t.addRowBefore()}},{name:"add_row_after",command:function(t){return t.addRowAfter()}},{name:"delete_row",command:function(t){return t.deleteRow()}},{name:"combine_cells",command:function(t){return t.toggleCellMerge()}}]}},beforeDestroy:function(){this.editor&&this.editor.destroy()},created:function(){var t=this;this.html=this.editor.getHTML(),this.editor.on("update",(function(){t.html=t.editor.getHTML(),t.$emit("update",t.html)}))},methods:{onShowModal:function(t,e){this.custom_command=e,this.show_modal=t},onCloseModal:function(){this.custom_command=null,this.show_modal=null},onAddVideo:function(t){this.custom_command&&(this.custom_command({src:t}),this.show_modal=null)},onAddImage:function(t){this.custom_command&&(this.custom_command({src:t}),this.show_modal=null)}}},R=n("KHd+"),M=Object(R.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor border-2 border-gray-400"},[n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.commands,a=e.isActive;return[n("div",{staticClass:"editor__menubar border-b border-gray-400 py-1 px-3"},[t._l(t.editor_menus,(function(e){return n("a",{key:e.name,class:["menu-button m-1","menu-button--"+e.name,{"is-active":e.active(a)}],on:{click:function(t){return e.command(r)}}},[e.text?n("span",{staticClass:"text-sm font-bold leading-none"},[t._v("\n          "+t._s(e.text)+"\n        ")]):n("svg-icon",{attrs:{name:e.name}})],1)})),t._v(" "),a.table()?t._l(t.table_menus,(function(t){return n("a",{key:t.name,class:"menu-button m-1",on:{click:function(e){return t.command(r)}}},[n("svg-icon",{attrs:{name:t.name}})],1)})):t._e()],2)]}}])}),t._v(" "),n("editor-content",{class:"editor__content px-20 py-8",attrs:{editor:t.editor}}),t._v(" "),n("image-modal",{attrs:{value:"image"===t.show_modal},on:{add:t.onAddImage,close:t.onCloseModal}}),t._v(" "),n("video-modal",{attrs:{value:"video"===t.show_modal},on:{add:t.onAddVideo,close:t.onCloseModal}})],1)}),[],!1,null,null,null);e.default=M.exports}}]);