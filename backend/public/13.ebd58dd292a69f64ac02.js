(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{eDec:function(e,t,n){"use strict";n.r(t),n.d(t,"RolesModule",(function(){return M}));var r=n("aceb"),i=n("RS3s"),o=n("vTDv"),s=n("tyNb"),a=n("fXoL"),c=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-roles"]],decls:1,vars:0,template:function(e,t){1&e&&a["\u0275\u0275element"](0,"router-outlet")},directives:[s.h],encapsulation:2}),e}(),l=n("AN2D"),m=function(e){return[e]},u=function(){function e(){}return e.prototype.ngOnInit=function(){this.linkText=this.value,this.id=this.rowData.id,this.url=this.id+this.linkUrl},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],inputs:{value:"value",linkUrl:"linkUrl",rowData:"rowData"},decls:2,vars:4,consts:[["size","small","shape","round","outline","","nbButton","","status","success",3,"routerLink"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"a",0),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction1"](2,m,t.url)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](t.linkText))},directives:[r.q,s.f],encapsulation:2}),e}(),d=["table"],p=function(){function e(e,t,n){var r=this;this.service=e,this._router=t,this._toastrService=n,this.settings={actions:{columnTitle:"Acciones",add:!0,edit:!0,position:"right",delete:!0},hideSubHeader:!1,add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0,saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},mode:"external",columns:{id:{title:"ID",type:"number",filter:!1,editable:!1},name:{title:"Nombre",type:"custom",renderComponent:u,onComponentInitFunction:function(e){e.linkUrl=""}},last_update:{title:"\xdaltima Actualizaci\xf3n",type:"string",filter:!1,editable:!1},permissions_count:{title:"Permisos",type:"number",filter:!1,editable:!1},users_count:{title:"Usuarios",type:"custom",renderComponent:u,onComponentInitFunction:function(e){e.linkUrl="/users"},filter:!1,editable:!1}}},this.source=new i.b,this.roles=new Array,this.index=0,this.service.getAll().subscribe((function(e){r.roles=e,r.source.load(e)}))}return e.prototype.ngAfterViewInit=function(){var e=this;this.smartTable.edit.subscribe((function(t){e._router.navigateByUrl("/pages/roles/"+t.data.id)})),this.smartTable.create.subscribe((function(t){e._router.navigateByUrl("/pages/roles/add")})),this.smartTable.delete.subscribe((function(t){e.onDeleteConfirm(t)}))},e.prototype.actions=function(e,t){e.url=t},e.prototype.onDeleteConfirm=function(e){var t=this;window.confirm("Seguro que desea borrar?  ")?this.service.deleteRole(e.data.id).subscribe({next:function(n){if(n){t.showToast("top-right","success","Borrado Correctamente");var r=t.roles.indexOf(e.data);t.roles.splice(r,1),t.source=new i.b(t.roles),e.confirm.resolve()}else t.showToast("top-right","danger","Error al borrar"),e.confirm.reject()},error:function(n){t.showToast("top-right","danger","Error al borrar"),e.confirm.reject()},complete:function(){}}):e.confirm.reject()},e.prototype.showToast=function(e,t,n){this.index+=1,this._toastrService.show(n,"Informaci\xf3n",{limit:3,position:e,status:t})},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.c),a["\u0275\u0275directiveInject"](r.Gb))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-roles-view"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](d,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.smartTable=n.first)},decls:6,vars:2,consts:[[1,"table","table-hover",3,"settings","source","deleteConfirm"],["table",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275text"](2," Gesti\xf3n de Roles "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"nb-card-body"),a["\u0275\u0275elementStart"](4,"ng2-smart-table",0,1),a["\u0275\u0275listener"]("deleteConfirm",(function(e){return t.onDeleteConfirm(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[r.u,r.x,r.t,i.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-obsrio   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e}(),f=n("LRne"),h=n("itXk"),b=n("eIep"),v=n("NlxY"),g=n("3Pt+"),y=n("ofXK");function C(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",13),a["\u0275\u0275elementStart"](1,"nb-toggle",14),a["\u0275\u0275listener"]("change",(function(e){a["\u0275\u0275restoreView"](n);var r=t.index;return a["\u0275\u0275nextContext"]().onCheckboxChange(e,r)})),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=t.index;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate"]("status",r.active?"basic":"success"),a["\u0275\u0275property"]("formControlName",i)("value",r.name),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",r.name," ")}}var w=function(){function e(e,t,n,r){var i=this;this.route=e,this.service=t,this.fb=n,this.toastrService=r,this.role=new v.a,this.form=this.fb.group({id:[""],last_update:[""],name:["",g.z.required],description:[""],permissions:new g.c([])}),this.index=0,this.role$=this.route.paramMap.pipe(Object(b.a)((function(e){return i.selectedId=e.get("id"),"add"===i.selectedId?Object(f.a)(new v.a([])):i.service.getSingle(i.selectedId)}))),this.systemPermissions$=this.service.getSystemPermissions(),Object(h.a)([this.systemPermissions$,this.role$]).subscribe({next:function(e){var t=e[0];i.role=e[1],i.systemPermission=t,i.form=i.fb.group({id:[i.role.id],update_at:[i.role.update_at],name:[i.role.name,g.z.required],description:[i.role.description],permissions:i.buildPermissions()})},error:function(e){i.showToast("top-right","danger",e)},complete:function(){}})}return e.prototype.save=function(){var e=this;""!==this.form.get("id").value?(this.role.name=this.form.get("name").value,this.role.description=this.form.get("description").value,this.role$=this.service.updateRole(this.role)):(this.role.id="",this.role.name=this.form.get("name").value,this.role.description=this.form.get("description").value,this.role$=this.service.addRole(this.role)),this.role$.subscribe({next:function(t){t?e.showToast("top-right","success","Guardado Correctamente"):e.showToast("top-right","danger","Error al guardar")},error:function(t){e.showToast("top-right","success",t)},complete:function(){}})},e.prototype.delete=function(e){this.service.deleteRole(e).subscribe()},e.prototype.trackByMethod=function(e,t){return t.id},e.prototype.buildPermissions=function(){var e=this,t=0,n=!1,r=[];return this.systemPermission.map((function(i){e.role.permissions.map((function(e){e.name!==i.name||(n=!0)})),r[t]=n,n=!1,t++})),this.fb.array(r)},e.prototype.onCheckboxChange=function(e,t){var n=this;if(e.target.checked)this.role.permissions.push(this.systemPermission[t]),this.systemPermission[t].active=!0;else{var r=0;this.role.permissions.forEach((function(e){if(e.name===n.systemPermission[t].name)return n.role.permissions.splice(r,1),void(n.systemPermission[t].active=!1);r++}))}},e.prototype.showToast=function(e,t,n){this.index+=1,this.toastrService.show(n,"Informaci\xf3n",{limit:3,position:e,status:t})},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](g.e),a["\u0275\u0275directiveInject"](r.Gb))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-role-edit"]],decls:26,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-12"],[1,"inline-form-card"],[1,"form-inline"],["formControlName","name","type","text","nbInput","","fullWidth","","status","primary","placeholder","Nombre"],["formControlName","description","type","text","nbInput","","fullWidth","","status","primary","placeholder","Descripci\xf3n"],[1,"form-group","row"],[1,"col-sm-3","label"],["class","col-sm-3","formArrayName","permissions",4,"ngFor","ngForOf","ngForTrackBy"],[1,"offset-sm-5","col-sm-7"],["type","submit","hero","","nbButton","","status","primary"],["icon","save-outline"],["formArrayName","permissions",1,"col-sm-3"],[1,"col-sm-12","items-rows",3,"formControlName","status","value","change"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"form",0),a["\u0275\u0275listener"]("ngSubmit",(function(){return t.save()})),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"nb-card",3),a["\u0275\u0275elementStart"](4,"nb-card-header"),a["\u0275\u0275text"](5,"Role"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"nb-card-body"),a["\u0275\u0275elementStart"](7,"div",4),a["\u0275\u0275element"](8,"input",5),a["\u0275\u0275element"](9,"input",6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",1),a["\u0275\u0275elementStart"](11,"div",2),a["\u0275\u0275elementStart"](12,"nb-card"),a["\u0275\u0275elementStart"](13,"nb-card-header"),a["\u0275\u0275text"](14,"Permisos"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"nb-card-body"),a["\u0275\u0275elementStart"](16,"div",7),a["\u0275\u0275elementStart"](17,"label",8),a["\u0275\u0275text"](18,"Permisos disponibles"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",1),a["\u0275\u0275template"](20,C,3,4,"div",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",7),a["\u0275\u0275elementStart"](22,"div",10),a["\u0275\u0275elementStart"](23,"button",11),a["\u0275\u0275element"](24,"nb-icon",12),a["\u0275\u0275text"](25,"Guardar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("formGroup",t.form),a["\u0275\u0275advance"](20),a["\u0275\u0275property"]("ngForOf",t.systemPermission)("ngForTrackBy",t.trackByMethod))},directives:[g.B,g.r,g.i,r.u,r.x,r.t,g.b,r.N,g.q,g.h,y.l,r.q,r.K,g.d,r.Hb],styles:[".form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}.items-rows[_ngcontent-%COMP%]{align-items:center;max-height:200px}nb-toggle[_ngcontent-%COMP%]:not(:only-child){margin-right:1.5rem}nb-toggle[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),e}(),x=function(e){return[e]};function S(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",2),a["\u0275\u0275elementStart"](1,"a",3),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction1"](2,x,"/pages/roles/"+n.id)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](n.name)}}var P=function(){function e(){}return e.prototype.ngOnInit=function(){this.items=this.rowData.roles},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],inputs:{rowData:"rowData",value:"value"},decls:2,vars:1,consts:[[1,"row"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"col-sm-3"],["shape","round","size","small","outline","","nbButton","","status","success",3,"routerLink"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275template"](1,S,3,4,"div",1),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.items))},directives:[y.l,r.q,s.f],encapsulation:2}),e}(),_=["table"],E=[{path:"",component:c,children:[{path:"",component:p},{path:":id",component:w},{path:"add",component:w},{path:"permissions/view",component:function(){function e(e,t,n){var r=this;this.service=e,this._router=t,this._toastrService=n,this.settings={actions:{columnTitle:"Acciones",add:!1,edit:!1,position:"right",delete:!1},hideSubHeader:!1,mode:"external",columns:{id:{title:"ID",type:"number",filter:!1,editable:!1},name:{title:"Nombre",type:"text"},roles:{title:"Roles",type:"custom",renderComponent:P,onComponentInitFunction:function(e){e.items="/roles"},filter:!1,editable:!1},users_count:{title:"Usuarios",type:"custom",renderComponent:u,onComponentInitFunction:function(e){e.linkUrl="/users"},filter:!1,editable:!1}}},this.source=new i.b,this.permissions=new Array,this.index=0,this.service.getSystemPermissions().subscribe((function(e){r.permissions=e,r.source.load(e)}))}return e.prototype.actions=function(e,t){e.url=t},e.prototype.showToast=function(e,t,n){this.index+=1,this._toastrService.show(n,"Informaci\xf3n",{limit:3,position:e,status:t})},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.c),a["\u0275\u0275directiveInject"](r.Gb))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-permissions"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](_,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.smartTable=n.first)},decls:6,vars:2,consts:[[1,"table","table-hover",3,"settings","source"],["table",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275text"](2," Visor de Roles "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"nb-card-body"),a["\u0275\u0275element"](4,"ng2-smart-table",0,1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[r.u,r.x,r.t,i.c],styles:[""]}),e}()}]}],I=function(){function e(){}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(E)],s.g]}),e}(),O=n("+P1L"),M=function(){function e(){}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.y,r.Lb,r.M,r.O,o.a,I,i.d,r.r,r.m,r.Nb,r.A,r.jb,r.D,r.nb,r.Ib,g.w,O.UsersModule]]}),e}()}}]);