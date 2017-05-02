!function t(e,o,n){function r(a,s){if(!o[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){var o=e[a][1][t];return r(o?o:t)},p,p.exports,t,e,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.initialize=function(){return this.onReady()},e.prototype.onReady=function(){return Backbone.history.start()},e}(Marionette.Service),e.exports=n},{}],2:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.el="body",o.prototype.template=!1,o.prototype.regions={main:"[data-region=main]",modal:{selector:"[data-region=modal]",regionClass:t("hn_regions/lib/regions/modal")}},o}(Marionette.LayoutView),e.exports=(new n).render()},{"hn_regions/lib/regions/modal":37}],3:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={colorpicker:".colorpicker-element"},e.prototype.onRender=function(){return this.ui.colorpicker.colorpicker({component:".input-group-addon",align:"left"})},e}(Mn.Behavior),e.exports=n},{}],4:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={checkbox:"input[type=checkbox]"},e.prototype.events={"switchChange.bootstrapSwitch @ui.checkbox":"_on_switch_change"},e.prototype.onRender=function(){return this.ui.checkbox.bootstrapSwitch({size:"mini",onText:"Enabled",offText:"Disabled"})},e.prototype._on_switch_change=function(){return this.view.triggerMethod("switch:change")},e}(Mn.Behavior),e.exports=n},{}],5:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={enableButton:"[data-enabled]"},e.prototype.events={"click @ui.enableButton":"onEnableChange"},e.prototype.onEnableChange=function(t){var e,o,n;return e=this.$(t.currentTarget),e.hasClass("active")?void 0:(e.addClass("active").siblings(".btn").removeClass("active"),e.blur(),o=e.data("enabled"),n=1===o?!0:!1,e=$("input[name="+this.options.targetName+"]"),e.val(n),e.trigger("change"))},e}(Mn.Behavior),e.exports=n},{}],6:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={checkbox:"input[type=checkbox]",number:"input[type=number]",range:"input[type=range]",text:"input[type=text]",hidden:"input[type=hidden]"},e.prototype.events={"change @ui.checkbox":"updateAttrs","change @ui.hidden":"updateAttrs","input  @ui.range":"updateAttrs","input  @ui.number":"updateAttrs","input  @ui.text":"updateAttrs"},e.prototype.initialize=function(){return this.view.updateAttrs=function(t){return function(){return t.updateAttrs()}}(this),this.view.getFormData=function(t){return function(e){return t.getFormData(e)}}(this)},e.prototype.onRender=function(){return this.setFormData()},e.prototype.getFormData=function(t){var e,o,n;if(null==t&&(t={}),!t.excludeFalsey)return Backbone.Syphon.serialize(this.view);e=Backbone.Syphon.serialize(this.view);for(o in e)n=e[o],n||delete e[o];return e},e.prototype.setFormData=function(t){return Backbone.Syphon.deserialize(this.view,this.view.model.toJSON())},e.prototype.updateAttrs=function(t){var e;return null!=t&&t.stopPropagation(),e=Backbone.Syphon.serialize(this.view),this.view.model.set(e)},e}(Mn.Behavior),e.exports=n},{}],7:[function(t,e,o){e.exports={SubmitButton:t("hn_behaviors/lib/submitButton"),DownloadFile:t("hn_behaviors/lib/downloadFile"),BootstrapSwitch:t("./bootstrapSwitch"),BootstrapColorPicker:t("./bootstrapColorPicker"),Form:t("./form"),RangeSlider:t("./rangeSlider"),EnableToggler:t("./enableToggler")}},{"./bootstrapColorPicker":3,"./bootstrapSwitch":4,"./enableToggler":5,"./form":6,"./rangeSlider":8,"hn_behaviors/lib/downloadFile":32,"hn_behaviors/lib/submitButton":33}],8:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={range:"input[type=range]"},e.prototype.onRender=function(){return this.ui.range.rangeslider({polyfill:!1})},e}(Mn.Behavior),e.exports=n},{}],9:[function(t,e,o){var n,r,i=function(t,e){function o(){this.constructor=t}for(var n in e)a.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},a={}.hasOwnProperty;r=t("./views/layout"),n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,t),e.prototype.radioEvents={"about show":"showAbout"},e.prototype.showAbout=function(){var t;return t=new r,this.showModal(t,{size:"large"})},e}(t("hn_modal/lib/abstract")),e.exports=n},{"./views/layout":10,"hn_modal/lib/abstract":34}],10:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./templates/about"),o.prototype.className="modal-content",o}(Mn.LayoutView),e.exports=n},{"./templates/about":11}],11:[function(t,e,o){t("jade/runtime");e.exports=function(t){var e=[];return e.push('<div class="modal-body"><div class="row"><div class="col-lg-12 text-center"><h5 class="modal-title">ABOUT</h5></div><div class="col-lg-12 text-center"><hr/></div><div class="col-lg-12 text-center"><p class="lead"><a href="https://github.com/aeksco/pantograph_cv" target="_blank">Pantograph</a> is a tool that lowers the barrier to entry for working with 3D printers.</p><p>Pantograph provides a simple interface anybody can use for basic 3D design.</p><p>Simply drop any image and begin adjusting to the design to your desired size and shape.</p></div><div class="col-lg-8 push-lg-2"><img src="./img/about.png" class="w-100 mb-1"/></div><div class="col-lg-12 text-center"><p>When you\'re finished editing your design,</p><p>simply click the Download button to generate a 3D-printable STL file.</p><p>It\'s that easy.</p></div><div class="col-lg-12 text-center"><hr/><p>Built by&nbsp;<a href="http://aeks.co" target="_blank">Alexander Schwartzberg</a>&nbsp;for&nbsp;<a href="https://rcos.io/" target="_blank">RCOS.</a></p><p>Powered by&nbsp;<a href="https://threejs.org/" target="_blank">Three.js</a>,&nbsp;<a href="http://potrace.sourceforge.net/" target="_blank">Potrace</a>,&nbsp;and&nbsp;<a href="https://github.com/kilobtye/potrace" target="_blank">Potrace.js</a>.</p></div></div></div>'),e.join("")}},{"jade/runtime":40}],12:[function(t,e,o){t("./marionette")},{"./marionette":13}],13:[function(t,e,o){Marionette.Behaviors.behaviorsLookup=function(){return t("../behaviors")}},{"../behaviors":7}],14:[function(t,e,o){var n,r,i,a;t("./config"),r=t("./application/app"),i=t("./application/layout"),n=t("./components/about/component"),new n({container:i.modal}),a=t("./modules/home/router"),new a({container:i.main}),$(document).on("ready",function(t){return function(){return new r}}(this))},{"./application/app":1,"./application/layout":2,"./components/about/component":9,"./config":12,"./modules/home/router":30}],15:[function(t,e,o){var n,r,i,a=function(t,e){function o(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=t("./views/layout"),n=t("../model"),r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.title="Pantograph - Home",e.prototype.render=function(){return this.container.show(new i({model:n}))},e}(t("hn_routing/lib/route")),e.exports=r},{"../model":28,"./views/layout":17,"hn_routing/lib/route":38}],16:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./templates/download"),o.prototype.className="row",o.prototype.triggers={"click [data-download=stl]":"download:stl","click [data-download=svg]":"download:svg"},o}(Marionette.LayoutView),e.exports=n},{"./templates/download":21}],17:[function(t,e,o){var n,r,i,a,s,u,p=function(t,e){function o(){this.constructor=t}for(var n in e)c.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},c={}.hasOwnProperty;u=t("./upload"),i=t("./object"),a=t("./platform"),n=t("./download"),s=t("./render"),r=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return p(o,e),o.prototype.template=t("./templates/layout"),o.prototype.className="container-fluid",o.prototype.behaviors={DownloadFile:{},BootstrapSwitch:{}},o.prototype.regions={uploadRegion:"[data-region=upload]",objectRegion:"[data-region=object]",platformRegion:"[data-region=platform]",downloadRegion:"[data-region=download]",renderRegion:"[data-region=render]"},o.prototype.onRender=function(){return this.renderView=new s({model:this.model}),this.renderRegion.show(this.renderView),this.uploadView=new u({model:this.model}),this.uploadRegion.show(this.uploadView),this.objectRegion.show(new i({model:this.model})),this.platformRegion.show(new a({model:this.model.get("platform")})),this.downloadForm=new n,this.downloadForm.on("download:stl",function(t){return function(){return t.onDownloadSTL()}}(this)),this.downloadForm.on("download:svg",function(t){return function(){return t.onDownloadSVG()}}(this)),this.downloadRegion.show(this.downloadForm)},o.prototype.generateFilename=function(t){var e,o;return e=(new Date).toJSON().slice(0,10).replace(/-/g,"_"),o=["pantograph_export_",e,".",t],o.join("")},o.prototype.onDownloadSTL=function(){var t,e,o;if(this.uploadView.uploadedSVG)return t=new THREE.STLExporter,e=this.renderView.scene,o=t.parse(e),this.downloadFile({content:o,type:"text/plain",filename:this.generateFilename("stl")})},o.prototype.onDownloadSVG=function(){return this.uploadView.uploadedSVG?this.downloadFile({content:this.uploadView.uploadedSVG,type:"text/plain",filename:this.generateFilename("svg")}):void 0},o}(Marionette.LayoutView),e.exports=r},{"./download":16,"./object":18,"./platform":19,"./render":20,"./templates/layout":22,"./upload":27}],18:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./templates/object"),o.prototype.className="row",o.prototype.behaviors={Form:{},BootstrapSwitch:{}},o.prototype.initialize=function(){var t;return t=function(t){return function(){var e;return e=Backbone.Syphon.serialize(t),t.model.set(e)}}(this),this.onChange=_.debounce(t,500)},o.prototype.onSwitchChange=function(){return this.updateAttrs()},o}(Marionette.LayoutView),e.exports=n},{"./templates/object":23}],19:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./templates/platform"),o.prototype.className="row",o.prototype.behaviors={Form:{},BootstrapSwitch:{}},o.prototype.ui={shape:"[data-shape]",shapeInput:"input[name=shape]"},o.prototype.events={"click @ui.shape":"onShapeChange"},o.prototype.modelEvents={change:"onModelChange"},o.prototype.onShapeChange=function(t){var e,o;return e=this.$(t.currentTarget),e.hasClass("active")?void 0:(e.addClass("active").siblings(".btn").removeClass("active"),e.blur(),o=e.data("shape"),this.ui.shapeInput.val(o).trigger("change"))},o.prototype.onModelChange=function(){return this.model.parent.trigger("child:change")},o.prototype.onSwitchChange=function(){return this.updateAttrs()},o}(Marionette.LayoutView),e.exports=n},{"./templates/platform":24}],20:[function(t,e,o){var n,r=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function o(){this.constructor=t}for(var n in e)a.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},a={}.hasOwnProperty;n=function(e){function o(){return this.buildObject=r(this.buildObject,this),this.clearGroup=r(this.clearGroup,this),this.onWindowResize=r(this.onWindowResize,this),this.animate=r(this.animate,this),this.startAnimate=r(this.startAnimate,this),this.initScene=r(this.initScene,this),o.__super__.constructor.apply(this,arguments)}return i(o,e),o.prototype.template=t("./templates/render"),o.prototype.className="row",o.prototype.ui={scene:"[data-display=scene]"},o.prototype.modelEvents={change:"onModelChange","render:svg":"buildObject","child:change":"onModelChange"},o.prototype.onModelChange=function(){return this.paths?this.buildObject(this.paths):void 0},o.prototype.onRender=function(){var t;return this.initScene(),t=this.ui.scene[0],t.append(this.renderer.domElement)},o.prototype.initScene=function(){var t,e,o,n;return e=window.innerWidth/2-100,t=window.innerHeight-60,this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(14737632),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(50,e/t,1,1e3),this.camera.position.set(0,-200,200),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.minDistance=50,this.controls.maxDistance=200,this.scene.add(new THREE.AmbientLight(2236962)),n=new THREE.DirectionalLight(15987699),n.position.set(.75,.75,1).normalize(),this.scene.add(n),n=new THREE.PointLight(15987699),n.position.copy(this.camera.position),this.scene.add(n),o=new THREE.GridHelper(70,10),o.rotation.x=Math.PI/2,this.scene.add(o),this.group=new THREE.Group,this.scene.add(this.group),this.startAnimate(),window.addEventListener("resize",this.onWindowResize,!1)},o.prototype.startAnimate=function(){return setInterval(function(t){return function(){return requestAnimationFrame(t.animate)}}(this),25)},o.prototype.animate=function(){this.controls.update(),this.renderer.render(this.scene,this.camera)},o.prototype.onWindowResize=function(){var t,e;e=window.innerWidth/2-100,t=window.innerHeight-60,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)},o.prototype.clearGroup=function(){var t;for(t=this.group.children.length;t>=0;)this.group.remove(this.group.children[t]),t--;return!0},o.prototype.buildObject=function(t){var e,o,n,r,i;for(t=t||this.paths,this.paths=t,this.clearGroup(),i=_.clone(this.model.toJSON()),r=this.model.objectBuilder.build(t,i),e=0,o=r.length;o>e;e++)n=r[e],this.group.add(n);return!0},o}(Marionette.LayoutView),e.exports=n},{"./templates/render":25}],21:[function(t,e,o){var n=t("jade/runtime");e.exports=function(t){var e,o=[],r={};return r.downloadButton=e=function(t){this&&this.block,this&&this.attributes||{};o.push("<button"+n.attr("data-download",t.type,!0,!1)+' class="btn btn-outline-success w-50 m-b-1"><i'+n.cls(["fa","fa-fw",t.icon],[null,null,!0])+"></i>&nbsp;"+n.escape(null==(e=t.text)?"":e)+"</button>")},o.push('<div class="col-lg-12"><p class="lead">Download</p></div><div class="col-lg-12"><div class="btn-group w-100">'),r.downloadButton({type:"stl",icon:"fa-cube",text:"STL"}),r.downloadButton({type:"svg",icon:"fa-file-image-o",text:"SVG"}),o.push("</div></div>"),o.join("")}},{"jade/runtime":40}],22:[function(t,e,o){t("jade/runtime");e.exports=function(t){var e=[];return e.push('<div class="row m-t-1"><div class="col-md-4 col-lg-3"><div class="card py-3"><div data-region="upload" class="col-lg-12"></div><div class="col-lg-12"><hr/></div><div data-region="object" class="col-lg-12"></div><div class="col-lg-12"><hr class="m-t-0"/></div><div data-region="platform" class="col-lg-12"></div><div class="col-lg-12"><hr class="m-t-0"/></div><div data-region="download" class="col-lg-12"></div></div></div><div class="col-md-8 col-lg-9"><div data-region="render" class="card card-block"></div></div></div>'),e.join("")}},{"jade/runtime":40}],23:[function(t,e,o){var n=t("jade/runtime");e.exports=function(t){var e,o=[],r={};return r.formGroup=e=function(t){var r=this&&this.block;this&&this.attributes||{};o.push("<fieldset"+n.cls(["form-group",t.formGroupCss],[null,!0])+">"),t.label&&o.push('<label class="form-control-label">'+n.escape(null==(e=t.label)?"":e)+"</label>"),r&&r(),o.push("</fieldset>")},o.push(""),r.formInput=e=function(t){var e=(this&&this.block,this&&this.attributes||{});r.formGroup.call({block:function(){o.push("<input"+n.attrs(n.merge([{placeholder:n.escape(t.placeholder),name:n.escape(t.name),type:n.escape(t.type),"class":"form-control"},e]),!1)+"/>")}},t)},o.push(""),r.formRange=e=function(t){var e=(this&&this.block,this&&this.attributes||{});r.formGroup.call({block:function(){o.push("<input"+n.attrs(n.merge([{name:n.escape(t.name),type:n.escape(t.type),max:n.escape(t.max),min:n.escape(t.mixin),defaultValue:n.escape(t["default"]),"class":"form-control"},e]),!1)+"/>")}},t)},o.push(""),o.push(""),o.push(""),o.push(""),r.button=e=function(t){var r=(this&&this.block,this&&this.attributes||{});o.push("<button"+n.attrs(n.merge([{type:"button","class":"btn"},r]),!1)+">"),t.icon&&o.push("<i"+n.cls(["fa","fa-fw",t.icon],[null,null,!0])+"></i>&nbsp;"),o.push(n.escape(null==(e=t.text)?"":e)+"</button>")},o.push(""),o.push(""),o.push('<div class="col-lg-12"><p class="lead">Object</p></div><div class="col-lg-12">'),r.formInput({label:"Invert",name:"invert",type:"checkbox"}),r.formInput({label:"Bevel",name:"bevel",type:"checkbox"}),r.formRange({label:"Height",name:"height",type:"number",max:100,min:1}),r.formRange({label:"Width",name:"width",type:"number",max:100,min:60,formGroupCss:"mb-0"}),o.push("</div>"),o.join("")}},{"jade/runtime":40}],24:[function(t,e,o){var n=t("jade/runtime");e.exports=function(t){var e,o=[],r={};return r.formGroup=e=function(t){var r=this&&this.block;this&&this.attributes||{};o.push("<fieldset"+n.cls(["form-group",t.formGroupCss],[null,!0])+">"),t.label&&o.push('<label class="form-control-label">'+n.escape(null==(e=t.label)?"":e)+"</label>"),r&&r(),o.push("</fieldset>")},o.push(""),r.formInput=e=function(t){var e=(this&&this.block,this&&this.attributes||{});r.formGroup.call({block:function(){o.push("<input"+n.attrs(n.merge([{placeholder:n.escape(t.placeholder),name:n.escape(t.name),type:n.escape(t.type),"class":"form-control"},e]),!1)+"/>")}},t)},o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),r.button=e=function(t){var r=(this&&this.block,this&&this.attributes||{});o.push("<button"+n.attrs(n.merge([{type:"button","class":"btn"},r]),!1)+">"),t.icon&&o.push("<i"+n.cls(["fa","fa-fw",t.icon],[null,null,!0])+"></i>&nbsp;"),o.push(n.escape(null==(e=t.text)?"":e)+"</button>")},o.push(""),o.push(""),r.shapeButton=e=function(t){this&&this.block,this&&this.attributes||{};o.push("<button"+n.attr("data-shape",t.shape,!0,!1)+n.cls(["btn","btn-sm","btn-outline-primary","w-50","cursor-pointer",t.css],[null,null,null,null,null,!0])+"><i"+n.cls(["fa","fa-fw",t.icon],[null,null,!0])+"></i>&nbsp;"+n.escape(null==(e=t.text)?"":e)+"</button>")},o.push('<div class="col-lg-12"><p class="lead">Platform</p></div><div class="col-lg-12">'),r.formInput({label:"Enabled",name:"enabled",type:"checkbox"}),o.push('</div><div class="col-lg-12"><fieldset class="form-group"><label class="form-control-label">Shape</label><input name="shape" type="hidden"/><div class="btn-group w-100">'),r.shapeButton({shape:"rect",icon:"fa-square-o",text:"Rectangle"}),r.shapeButton({shape:"circ",icon:"fa-circle-o",text:"Circle",css:"active"}),o.push('</div></fieldset></div><div class="col-lg-12">'),r.formInput({label:"Height",placeholder:2,value:5,name:"height",type:"range",max:100,min:1}),r.formInput({label:"Buffer",placeholder:2,value:5,name:"buffer",type:"range",max:100,min:1,formGroupCss:"mb-0"}),o.push("</div>"),o.join("")}},{"jade/runtime":40}],25:[function(t,e,o){t("jade/runtime");e.exports=function(t){var e=[];return e.push('<div class="col-lg-12"><div data-display="scene" class="scene-wrapper"></div></div>'),e.join("")}},{"jade/runtime":40}],26:[function(t,e,o){t("jade/runtime");e.exports=function(t){var e=[];return e.push('<div class="col-lg-12"><div class="form-group"><input type="file" id="file_upload" accept="image/*" data-title="DROP OR OPEN AN IMAGE" class="form-control-file"/></div></div>'),e.join("")}},{"jade/runtime":40}],27:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./templates/upload"),o.prototype.className="row",o.prototype.events={"change input[type=file]":"onInputChange"},o.prototype.onInputChange=function(t){var e,o;e=t.target.files[0],e&&("image/svg+xml"===e.type?(o=new FileReader,o.onload=function(t){return function(){return t.onUploadSVG(o.result)}}(this),o.readAsText(e)):(Potrace.loadImageFromFile(e),Potrace.process(function(t){return function(){return t.onUploadSVG(Potrace.getSVG(1))}}(this))))},o.prototype.onUploadSVG=function(t){var e,o;return this.uploadedSVG=t,e=$.parseXML(t),flatten(e.children[0]),o=$("path",e).map(function(){return $(this).attr("d")}).get(),this.model.trigger("render:svg",o)},o}(Mn.LayoutView),e.exports=n},{"./templates/upload":26}],28:[function(t,e,o){var n,r,i,a,s=function(t,e){function o(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},u={}.hasOwnProperty;r=t("./objectBuilder"),a=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,t),e.prototype.initialize=function(){return this.parent=n.find({id:"default"})},e}(Backbone.RelationalModel),a.setup(),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,t),e.prototype.defaults={enabled:!1,shape:"circ",height:2,buffer:5},e}(a),i.setup(),n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,t),e.prototype.defaults={id:"default",width:60,height:2,invert:!1,color:"#333333",bevel:!1,platform:{},edges:{color:16777215,enabled:!0}},e.prototype.relations=[{type:Backbone.HasOne,key:"edges",relatedModel:a},{type:Backbone.HasOne,key:"platform",relatedModel:i}],e.prototype.initialize=function(t){return null==t&&(t={}),this.objectBuilder=new r},e.prototype.toJSON=function(){var t;return t=e.__super__.toJSON.call(this),t.height=Number(t.height),t.width=Number(t.width),t},e}(Backbone.RelationalModel),e.exports=new n},{"./objectBuilder":29}],29:[function(t,e,o){var n;n=function(){function t(){}return t.prototype.pathsToShapes=function(t){var e,o,n,r,i,a;for(a=[],o=0,n=t.length;n>o;o++)e=t[o],i=d3.transformSVGPath(e),r=i.toShapes(!1),a=a.concat(r);return a},t.prototype.getExtruded=function(t,e){var o,n,r,i,a,s;return n=new THREE.ExtrudeGeometry(t,{amount:e.height,bevelEnabled:!1}),n.computeBoundingBox(),i=this.getMaxExtent(n.boundingBox),e.bevel&&(o={amount:0,bevelEnabled:!0,bevelThickness:e.height,bevelSize:e.height*i/e.width,bevelSegments:1},n=new THREE.ExtrudeGeometry(t,o)),e.invert||(r=(new THREE.Matrix4).makeScale(-1,1,1),n.applyMatrix(r)),a=new THREE.Mesh(n,e.material),s=(new THREE.Matrix4).makeScale(e.width/i,e.width/i,1),a.geometry.applyMatrix(s),a},t.prototype.extrudeSVG=function(t,e){var o,n,r,i,a;return i=this.pathsToShapes(t),n=this.getExtruded(i,e),n.geometry.computeBoundingBox(),o=n.geometry.boundingBox,a=(new THREE.Matrix4).makeTranslation(-(Math.abs((o.max.x-o.min.x)/2)+o.min.x),-(Math.abs((o.max.y-o.min.y)/2)+o.min.y),0),n.geometry.applyMatrix(a),r=(new THREE.Matrix4).makeRotationZ(Math.PI),n.geometry.applyMatrix(r),n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere(),n},t.prototype.getMaxExtent=function(t){var e,o,n;return n=t.max.x-t.min.x,o=t.max.y-t.min.y,e=n>o?n:o},t.prototype.getRectangularPlatform=function(t,e){var o,n,r,i;return n=this.getMaxExtent(t.geometry.boundingBox),o=n+Number(e.platform.buffer),r=new THREE.BoxGeometry(o,o,e.platform.height),i=new THREE.Mesh(r,e.material)},t.prototype.getCircularPlatform=function(t,e){var o,n,r,i,a,s;return s=t.geometry.boundingSphere.radius,r=s+Number(e.platform.buffer),i=60,o=new THREE.CylinderGeometry(r,r,e.platform.height,i),n=new THREE.Mesh(o,e.material),a=(new THREE.Matrix4).makeRotationX(Math.PI/2),n.geometry.applyMatrix(a),n},t.prototype.getPlatformObject=function(t,e){var o,n;return o="rect"===e.platform.shape?this.getRectangularPlatform(t,e):this.getCircularPlatform(t,e),n=(new THREE.Matrix4).makeTranslation(0,0,e.platform.height/2),o.geometry.applyMatrix(n),o},t.prototype.setPlatform=function(t,e){var o,n,r,i,a;return e.platform.enabled?(a=(new THREE.Matrix4).makeTranslation(0,0,e.platform.height),t.geometry.applyMatrix(a),r=this.getPlatformObject(t,e),o=new ThreeBSP(r),i=new ThreeBSP(t),e.invert||(i=new ThreeBSP(i.tree.clone().invert())),n=e.height>0?o.union(i).toMesh(e.material):o.intersect(i).toMesh(e.material)):t},t.prototype.setEdges=function(t,e){var o;return e.edges.enabled?(o=new THREE.EdgesHelper(t,e.edges.color),void this.objects.push(o)):!1},t.prototype.build=function(t,e){var o;return(0===e.height||void 0===e.height)&&(e.height=1),e.color=new THREE.Color(e.color),e.material=new THREE.MeshLambertMaterial({color:e.color,emissive:e.color,side:THREE.DoubleSide}),o=this.extrudeSVG(t,e),o=this.setPlatform(o,e),this.objects=[],this.objects.push(o),this.setEdges(o,e),this.objects},t}(),e.exports=n},{}],30:[function(t,e,o){var n,r,i=function(t,e){function o(){this.constructor=t}for(var n in e)a.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},a={}.hasOwnProperty;n=t("./home/route"),r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,t),e.prototype.routes={"(/)":"home"},e.prototype.home=function(){return new n({container:this.container})},e}(t("hn_routing/lib/router")),e.exports=r},{"./home/route":15,"hn_routing/lib/router":39}],31:[function(t,e,o){},{}],32:[function(t,e,o){var n,r,i,a=function(t,e){function o(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=function(t){return $(t.currentTarget).remove()},r={filename:"download.txt",type:"text/plain",content:null},n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.initialize=function(t){return null==t&&(t={}),this.view.downloadFile=this.downloadFile},e.prototype.downloadFile=function(t){var e,o;return null==t&&(t={}),t=_.extend(r,t),o=new Blob([t.content],{type:t.type}),t.preview?window.open(window.URL.createObjectURL(o),"_blank"):(e=document.createElement("a"),e.download=t.filename,e.innerHTML="Download File",e.href=window.URL.createObjectURL(o),e.onclick=i,e.style.display="none",document.body.appendChild(e),e.click())},e}(Marionette.Behavior),e.exports=n},{}],33:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.ui={submit:"[data-click=submit]"},e.prototype.events={"click @ui.submit:not(.disabled)":"onSubmitClick"},e.prototype.initialize=function(t){return null==t&&(t={}),this.view.disableSubmit=function(t){return function(){return t.disableSubmit()}}(this),this.view.enableSubmit=function(t){return function(){return t.enableSubmit()}}(this)},e.prototype.onSubmitClick=function(t){var e;return"function"==typeof(e=this.view).onSubmit?e.onSubmit(t):void 0},e.prototype.disableSubmit=function(){return this.ui.submit.addClass("disabled")},e.prototype.enableSubmit=function(){return this.ui.submit.removeClass("disabled")},e}(Marionette.Behavior),e.exports=n},{}],34:[function(t,e,o){var n,r,i,a=function(t,e){function o(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},s={}.hasOwnProperty;r=t("./view"),i=function(){return window.modalWindow.hideModal()},n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.initialize=function(t){return null==t&&(t={}),this.container=t.container},e.prototype.hideModal=function(){return this.modalView.hideModal()},e.prototype.showModal=function(t,e){return null==e&&(e={}),this.modalView=new r(e),this.modalView.on("show",function(e){return function(){return e.modalView.contentRegion.show(t),window.addEventListener("hashchange",i),window.modalWindow=e.modalView}}(this)),this.modalView.on("destroy",function(){return window.removeEventListener("hashchange",i),delete window.modalWindow}),this.modalView.on("hidden:modal",function(t){return function(){return"function"==typeof t.onModalHidden?t.onModalHidden():void 0}}(this)),this.container.show(this.modalView)},e}(Marionette.Service),e.exports=n},{"./view":36}],35:[function(t,e,o){var n=t("jade/runtime");e.exports=function(t){var e=[],o=t||{};return function(t){e.push('<div role="document" data-region="modal-content"'+n.cls([t],[!0])+"></div>")}.call(this,"modalCss"in o?o.modalCss:"undefined"!=typeof modalCss?modalCss:void 0),e.join("")}},{"jade/runtime":40}],36:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,e),o.prototype.template=t("./modal_template"),o.prototype.attributes={role:"dialog",tabindex:"-1"},o.prototype.className="modal fade",o.prototype.templateHelpers=function(){var t,e;return e=this.options.size||"",t="modal-dialog","small"===e&&(t+=" modal-sm"),"large"===e&&(t+=" modal-lg"),{modalCss:t}},o.prototype.regions={contentRegion:"[data-region=modal-content]"
},o.prototype.events={"show.bs.modal":function(){return this.triggerMethod("show:modal")},"shown.bs.modal":function(){return this.triggerMethod("shown:modal")},"hide.bs.modal":function(){return this.triggerMethod("hide:modal")},"hidden.bs.modal":function(){return this.triggerMethod("hidden:modal")},"loaded.bs.modal":function(){return this.triggerMethod("loaded:modal")}},o.prototype.onShow=function(){return this.$el.modal(this.options.modalOptions||{})},o.prototype.hideModal=function(){return this.$el.modal("hide")},o}(Marionette.LayoutView),e.exports=n},{"./modal_template":35}],37:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.show=function(t,o){return null==o&&(o={}),t.on("hidden:modal",function(){return this.destroy()}),e.__super__.show.call(this,t,o)},e}(Marionette.Region),e.exports=n},{}],38:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.breadcrumbs=[],e.prototype.initialize=function(t){return this.options=t,this.container=t.container,this.on("before:enter",function(t){return function(){return"function"==typeof t.onBeforeEnter?t.onBeforeEnter(arguments):void 0}}(this)),this.on("before:fetch",function(t){return function(){return"function"==typeof t.onBeforeFetch?t.onBeforeFetch(arguments):void 0}}(this)),this.on("before:render",function(t){return function(){return"function"==typeof t.onBeforeRender?t.onBeforeRender(arguments):void 0}}(this)),this.on("fetch",function(t){return function(){return"function"==typeof t.onFetch?t.onFetch(arguments):void 0}}(this)),this.on("render",function(t){return function(){return"function"==typeof t.onRender?t.onRender(arguments):void 0}}(this)),this.on("enter",function(t){return function(){return"function"==typeof t.onEnter?t.onEnter(arguments):void 0}}(this)),Backbone.Radio.channel("sidebar").trigger("hide")},e.prototype._setPageTitle=function(){return document.title=_.result(this,"title")},e.prototype._updateBreadcrumbs=function(){var t;return t=_.result(this,"breadcrumbs"),t?Backbone.Radio.channel("breadcrumb").trigger("set",t):void 0},e.prototype.onFetch=function(){return this._setPageTitle(),this._updateBreadcrumbs()},e}(Backbone.Routing.Route),e.exports=n},{}],39:[function(t,e,o){var n,r=function(t,e){function o(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,t),e.prototype.initialize=function(t){return this.container=t.container},e}(Backbone.Routing.Router),e.exports=n},{}],40:[function(t,e,o){(function(n){!function(t){if("object"==typeof o&&"undefined"!=typeof e)e.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof n?n:"undefined"!=typeof self?self:this,r.jade=t()}}(function(){return function e(o,n,r){function i(s,u){if(!n[s]){if(!o[s]){var p="function"==typeof t&&t;if(!u&&p)return p(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};o[s][0].call(l.exports,function(t){var e=o[s][1][t];return i(e?e:t)},l,l.exports,e,o,n,r)}return n[s].exports}for(var a="function"==typeof t&&t,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,o){"use strict";function n(t){return null!=t&&""!==t}function r(t){return(Array.isArray(t)?t.map(r):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(n).join(" ")}function i(t){return s[t]||t}function a(t){var e=String(t).replace(u,i);return e===""+t?t:e}o.merge=function p(t,e){if(1===arguments.length){for(var o=t[0],r=1;r<t.length;r++)o=p(o,t[r]);return o}var i=t["class"],a=e["class"];(i||a)&&(i=i||[],a=a||[],Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),t["class"]=i.concat(a).filter(n));for(var s in e)"class"!=s&&(t[s]=e[s]);return t},o.joinClasses=r,o.cls=function(t,e){for(var n=[],i=0;i<t.length;i++)e&&e[i]?n.push(o.escape(r([t[i]]))):n.push(r(t[i]));var a=r(n);return a.length?' class="'+a+'"':""},o.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},o.attr=function(t,e,n,r){return"style"===t&&(e=o.style(e)),"boolean"==typeof e||null==e?e?" "+(r?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof e?(-1!==JSON.stringify(e).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),e&&"function"==typeof e.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(e).replace(/'/g,"&apos;")+"'"):n?(e&&"function"==typeof e.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+o.escape(e)+'"'):(e&&"function"==typeof e.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e+'"')},o.attrs=function(t,e){var n=[],i=Object.keys(t);if(i.length)for(var a=0;a<i.length;++a){var s=i[a],u=t[s];"class"==s?(u=r(u))&&n.push(" "+s+'="'+u+'"'):n.push(o.attr(s,u,!1,e))}return n.join("")};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;o.escape=a,o.rethrow=function c(e,o,n,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&o||r))throw e.message+=" on line "+n,e;try{r=r||t("fs").readFileSync(o,"utf8")}catch(i){c(e,null,n)}var a=3,s=r.split("\n"),u=Math.max(n-a,0),p=Math.min(s.length,n+a),a=s.slice(u,p).map(function(t,e){var o=e+u+1;return(o==n?"  > ":"    ")+o+"| "+t}).join("\n");throw e.path=o,e.message=(o||"Jade")+":"+n+"\n"+a+"\n\n"+e.message,e},o.DebugItem=function(t,e){this.lineno=t,this.filename=e}},{fs:2}],2:[function(t,e,o){},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{fs:31}]},{},[14]);