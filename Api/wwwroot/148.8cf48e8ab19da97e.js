"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[148],{4148:(ee,b,m)=>{m.r(b),m.d(b,{AdminModule:()=>W});var d=m(6895),c=m(8184),e=m(1571),u=m(2340),T=m(529);let f=(()=>{class r{constructor(t){this.http=t}getMembers(){return this.http.get(`${u.N.appUrl}admin/get-members`)}getMember(t){return this.http.get(`${u.N.appUrl}admin/get-member/${t}`)}getApplicationRoles(){return this.http.get(`${u.N.appUrl}admin/get-application-roles`)}addEditMemeber(t){return this.http.post(`${u.N.appUrl}admin/add-edit-member`,t)}lockMember(t){return this.http.put(`${u.N.appUrl}admin/lock-member/${t}`,{})}unlockMember(t){return this.http.put(`${u.N.appUrl}admin/unlock-member/${t}`,{})}deleteMember(t){return this.http.delete(`${u.N.appUrl}admin/delete-member/${t}`,{})}static#e=this.\u0275fac=function(n){return new(n||r)(e.LFG(T.eN))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var h=m(5423),N=m(220);function M(r,o){1&r&&(e.TgZ(0,"tr")(1,"td",8),e._uU(2,"No Memebers"),e.qZA()())}function k(r,o){1&r&&(e.TgZ(0,"span"),e._uU(1,", "),e.qZA())}function U(r,o){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.YNc(2,k,2,0,"span",5),e.qZA()),2&r){const t=o.$implicit,n=o.index,i=e.oxw().$implicit;e.xp6(1),e.hij(" ",t,""),e.xp6(1),e.Q6J("ngIf",n+1<i.roles.length)}}function q(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"a",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.lockMember(i.id))}),e._uU(1," Lock "),e.qZA()}}function F(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.unlockMember(i.id))}),e._uU(1," Unlock "),e.qZA()}}function C(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"titlecase"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"titlecase"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"td"),e.YNc(13,U,3,2,"span",6),e.qZA(),e.TgZ(14,"td",4),e.YNc(15,q,2,0,"a",9),e.YNc(16,F,2,0,"a",10),e.qZA(),e.TgZ(17,"td",4)(18,"button",11),e._uU(19," Edit "),e.qZA(),e.TgZ(20,"button",12),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(),p=e.MAs(24);return e.KtG(l.deleteMember(a.id,p))}),e._uU(21," Delete "),e.qZA()()()}if(2&r){const t=o.$implicit;e.xp6(2),e.Oqu(t.userName),e.xp6(2),e.Oqu(e.lcZ(5,8,t.firstName)),e.xp6(3),e.Oqu(e.lcZ(8,10,t.lastName)),e.xp6(3),e.Oqu(e.lcZ(11,12,t.dateCreated)),e.xp6(3),e.Q6J("ngForOf",t.roles),e.xp6(2),e.Q6J("ngIf",!t.isLocked),e.xp6(1),e.Q6J("ngIf",t.isLocked),e.xp6(2),e.MGl("routerLink","/admin/add-edit-member/",t.id,"")}}function w(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",15)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"button",16),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.confirm())}),e._uU(4,"Yes"),e.qZA(),e.TgZ(5,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.decline())}),e._uU(6,"No"),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(2),e.hij("Are you sure you want to delete ",null==t.memberToDelete?null:t.memberToDelete.userName,"?")}}let I=(()=>{class r{constructor(t,n,i){this.adminService=t,this.sharedService=n,this.modalService=i,this.members=[]}ngOnInit(){this.adminService.getMembers().subscribe({next:t=>this.members=t})}lockMember(t){this.adminService.lockMember(t).subscribe({next:n=>{this.handleLockUnlockFilterMessage(t,!0)}})}unlockMember(t){this.adminService.unlockMember(t).subscribe({next:n=>{this.handleLockUnlockFilterMessage(t,!1)}})}deleteMember(t,n){let i=this.findMember(t);i&&(this.memberToDelete=i,this.modalRef=this.modalService.show(n,{class:"modal-sm"}))}confirm(){this.memberToDelete&&this.adminService.deleteMember(this.memberToDelete.id).subscribe({next:t=>{this.sharedService.showNotification(!0,"Deleted",`Memeber of ${this.memberToDelete?.userName} has been deleted!`),this.members=this.members.filter(n=>n.id!==this.memberToDelete?.id),this.memberToDelete=void 0,this.modalRef?.hide()}})}decline(){this.memberToDelete=void 0,this.modalRef?.hide()}handleLockUnlockFilterMessage(t,n){let i=this.findMember(t);i&&(i.isLocked=!i.isLocked,n?this.sharedService.showNotification(!0,"Locked",`${i.userName} member has been locked`):this.sharedService.showNotification(!0,"Unlocked",`${i.userName} member has been unlocked`))}findMember(t){let n=this.members.find(i=>i.id===t);if(n)return n}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(f),e.Y36(h.F),e.Y36(N.tT))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-admin"]],decls:25,vars:2,consts:[[1,"my-3"],["routerLink","/admin/add-edit-member",1,"btn","btn-outline-primary"],[1,"table","table-striped"],[1,"table-warning"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["template",""],["colspan","7",1,"text-center"],["class","btn btn-warning btn-sm",3,"click",4,"ngIf"],["class","btn btn-success btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-primary","btn-sm","me-2",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"Create Member"),e.qZA()(),e.TgZ(3,"table",2)(4,"thead")(5,"tr",3)(6,"th"),e._uU(7,"Username"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"First name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Last name"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Date created"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Roles"),e.qZA(),e.TgZ(16,"th",4),e._uU(17,"Lock / Unlock"),e.qZA(),e.TgZ(18,"th",4),e._uU(19,"Edit / Delete"),e.qZA()()(),e.TgZ(20,"tbody"),e.YNc(21,M,3,0,"tr",5),e.YNc(22,C,22,14,"tr",6),e.qZA()(),e.YNc(23,w,7,1,"ng-template",null,7,e.W1O)),2&n&&(e.xp6(21),e.Q6J("ngIf",0===i.members.length),e.xp6(1),e.Q6J("ngForOf",i.members))},dependencies:[d.sg,d.O5,c.rH,d.rS,d.uU]})}return r})();var y=m(4004),E=m(5656),J=m(9479);let L=(()=>{class r{constructor(t,n,i){this.accountService=t,this.sharedService=n,this.router=i}canActivate(){return this.accountService.user$.pipe((0,y.U)(t=>!(!t||!(0,E.o)(t.jwt).role.includes("Admin"))||(this.sharedService.showNotification(!1,"Admin Area","Leave now!"),this.router.navigateByUrl("/"),!1)))}static#e=this.\u0275fac=function(n){return new(n||r)(e.LFG(J.B),e.LFG(h.F),e.LFG(c.F0))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var s=m(433),Y=m(8860);function S(r,o){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Add"),e.qZA())}function $(r,o){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Update"),e.qZA())}function Q(r,o){1&r&&(e.TgZ(0,"span",32),e._uU(1," First name is required "),e.qZA())}function O(r,o){1&r&&(e.TgZ(0,"span",32),e._uU(1," Last name is required "),e.qZA())}function R(r,o){1&r&&(e.TgZ(0,"span",32),e._uU(1," Username is required "),e.qZA())}function G(r,o){1&r&&(e.TgZ(0,"span",32),e._uU(1," Password is required "),e.qZA())}function j(r,o){1&r&&(e.TgZ(0,"span",32),e._uU(1," Password must be at least 6 and maximum 45 characters "),e.qZA())}function D(r,o){1&r&&(e.TgZ(0,"div")(1,"span",33),e._uU(2,"Note:"),e.qZA(),e._uU(3," if you don't want intend to change the member password, then leave the password field empty "),e.qZA())}function z(r,o){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"input",34),e.NdJ("change",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.roleOnChange(a))}),e.qZA(),e.TgZ(2,"label",35),e._uU(3),e.qZA(),e.BQk()}if(2&r){const t=o.$implicit,n=e.oxw(2);let i;e.xp6(1),e.ekj("is-invalid",n.submitted&&(null==(i=n.memberForm.get("roles"))?null:i.errors)),e.s9C("id",t),e.Q6J("checked",n.existingMemberRoles.includes(t)),e.xp6(1),e.s9C("for",t),e.xp6(1),e.Oqu(t)}}function B(r,o){1&r&&(e.TgZ(0,"div",32),e._uU(1," Please select at least one role "),e.qZA())}function H(r,o){if(1&r&&(e.TgZ(0,"div",36),e._UZ(1,"app-validation-messages",37),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("errorMessages",t.errorMessages)}}function K(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e.TgZ(4,"div",5)(5,"h3",6),e.YNc(6,S,2,0,"span",7),e.YNc(7,$,2,0,"span",7),e._uU(8," Member "),e.qZA()(),e.TgZ(9,"div",8),e._UZ(10,"input",9),e.TgZ(11,"label",10),e._uU(12,"First name"),e.qZA(),e.YNc(13,Q,2,0,"span",11),e.qZA(),e.TgZ(14,"div",8),e._UZ(15,"input",12),e.TgZ(16,"label",13),e._uU(17,"Last name"),e.qZA(),e.YNc(18,O,2,0,"span",11),e.qZA(),e.TgZ(19,"div",8),e._UZ(20,"input",14),e.TgZ(21,"label",15),e._uU(22,"UserName"),e.qZA(),e.YNc(23,R,2,0,"span",11),e.qZA(),e.TgZ(24,"div",8)(25,"input",16),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.passwordOnChange())}),e.qZA(),e.TgZ(26,"label",17),e._uU(27,"Password"),e.qZA(),e.YNc(28,G,2,0,"span",11),e.YNc(29,j,2,0,"span",11),e.YNc(30,D,4,0,"div",18),e.qZA(),e.TgZ(31,"div",19)(32,"div",20)(33,"label",21),e._uU(34,"Roles:"),e.qZA()(),e.TgZ(35,"div",22)(36,"div",23),e.YNc(37,z,4,6,"ng-container",24),e.qZA()()(),e.YNc(38,B,2,0,"div",11),e.YNc(39,H,2,1,"div",25),e.TgZ(40,"div",26)(41,"div",27)(42,"div",28)(43,"button",29),e._uU(44),e.qZA()()(),e.TgZ(45,"div",27)(46,"div",28)(47,"button",30),e._uU(48," Back to list "),e.qZA()()()()()()()()}if(2&r){const t=e.oxw();let n,i,a,l,p,x,Z,v,_,A;e.xp6(3),e.Q6J("formGroup",t.memberForm),e.xp6(3),e.Q6J("ngIf",t.addNew),e.xp6(1),e.Q6J("ngIf",!t.addNew),e.xp6(3),e.ekj("is-invalid",t.submitted&&(null==(n=t.memberForm.get("firstName"))?null:n.errors)),e.xp6(3),e.Q6J("ngIf",t.submitted&&(null==(i=t.memberForm.get("firstName"))?null:i.hasError("required"))),e.xp6(2),e.ekj("is-invalid",t.submitted&&(null==(a=t.memberForm.get("lastName"))?null:a.errors)),e.xp6(3),e.Q6J("ngIf",t.submitted&&(null==(l=t.memberForm.get("lastName"))?null:l.hasError("required"))),e.xp6(2),e.ekj("is-invalid",t.submitted&&(null==(p=t.memberForm.get("userName"))?null:p.errors)),e.xp6(3),e.Q6J("ngIf",t.submitted&&(null==(x=t.memberForm.get("userName"))?null:x.hasError("required"))),e.xp6(2),e.ekj("is-invalid",t.submitted&&(null==(Z=t.memberForm.get("password"))?null:Z.errors)),e.xp6(3),e.Q6J("ngIf",t.submitted&&(null==(v=t.memberForm.get("password"))?null:v.hasError("required"))),e.xp6(1),e.Q6J("ngIf",t.submitted&&(null==(_=t.memberForm.get("password"))?null:_.hasError("minlength"))||(null==(_=t.memberForm.get("password"))?null:_.hasError("maxlength"))),e.xp6(1),e.Q6J("ngIf",!t.addNew),e.xp6(7),e.Q6J("ngForOf",t.applicationRoles),e.xp6(1),e.Q6J("ngIf",t.submitted&&(null==(A=t.memberForm.get("roles"))?null:A.hasError("required"))),e.xp6(1),e.Q6J("ngIf",t.errorMessages.length>0),e.xp6(5),e.hij(" ",t.addNew?"Create":"Update"," Member ")}}let g=(()=>{class r{constructor(t,n,i,a,l){this.adminService=t,this.sharedService=n,this.formBuilder=i,this.activatedRoute=a,this.router=l,this.memberForm=new s.cw({}),this.formInitialized=!1,this.addNew=!0,this.submitted=!1,this.errorMessages=[],this.applicationRoles=[],this.existingMemberRoles=[]}ngOnInit(){const t=this.activatedRoute.snapshot.paramMap.get("id");t?(this.addNew=!1,this.getMember(t)):this.initializeForm(void 0),this.getRoles()}getMember(t){this.adminService.getMember(t).subscribe({next:n=>{this.initializeForm(n)}})}getRoles(){this.adminService.getApplicationRoles().subscribe({next:t=>this.applicationRoles=t})}initializeForm(t){t?(this.memberForm=this.formBuilder.group({id:[t.id],firstName:[t.firstName,s.kI.required],lastName:[t.lastName,s.kI.required],userName:[t.userName,s.kI.required],password:[""],roles:[t.roles,s.kI.required]}),this.existingMemberRoles=t.roles.split(",")):this.memberForm=this.formBuilder.group({id:[""],firstName:["",s.kI.required],lastName:["",s.kI.required],userName:["",s.kI.required],password:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(45)]],roles:["",s.kI.required]}),this.formInitialized=!0}passwordOnChange(){0==this.addNew&&(this.memberForm.get("password")?.value?this.memberForm.controls.password.setValidators([s.kI.required,s.kI.minLength(6),s.kI.maxLength(45)]):this.memberForm.get("password")?.clearValidators(),this.memberForm.controls.password.updateValueAndValidity())}roleOnChange(t){let n=this.memberForm.get("roles")?.value.split(",");const i=n.indexOf(t);-1!==i?n.splice(i,1):n.push(t),""===n[0]&&n.splice(0,1),this.memberForm.controls.roles.setValue(n.join(","))}submit(){this.submitted=!0,this.errorMessages=[],this.memberForm.valid&&this.adminService.addEditMemeber(this.memberForm.value).subscribe({next:t=>{this.sharedService.showNotification(!0,t.value.title,t.value.message),this.router.navigateByUrl("/admin")},error:t=>{t.error.errors?this.errorMessages=t.error.errors:this.errorMessages.push(t.error)}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(f),e.Y36(h.F),e.Y36(s.qu),e.Y36(c.gz),e.Y36(c.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-edit-member"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],["class","text-warning",4,"ngIf"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First Name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last Name",1,"form-control"],["for","latName"],["formControlName","userName","type","text","placeholder","UserName",1,"form-control"],["for","userName"],["formControlName","password","type","text","placeholder","Password",1,"form-control",3,"change"],["for","password"],[4,"ngIf"],[1,"row"],[1,"col-2"],["for","roles"],[1,"col-10"],[1,"btn-group"],[4,"ngFor","ngForOf"],["class","form-floatin",4,"ngIf"],[1,"row","my-4"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-info"],["type","button","routerLink","/admin",1,"btn","btn-block","btn-danger"],[1,"text-warning"],[1,"text-danger"],[1,"text-info","fw-bold"],["type","checkbox",1,"btn-check",3,"id","checked","change"],[1,"btn","btn-outline-primary",3,"for"],[1,"form-floatin"],[3,"errorMessages"]],template:function(n,i){1&n&&e.YNc(0,K,49,21,"div",0),2&n&&e.Q6J("ngIf",i.formInitialized)},dependencies:[d.sg,d.O5,c.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,Y.s]})}return r})();const P=[{path:"",runGuardsAndResolvers:"always",canActivate:[L],children:[{path:"",component:I},{path:"add-edit-member",component:g},{path:"add-edit-member/:id",component:g}]}];let V=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(P),c.Bz]})}return r})();var X=m(4466);let W=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[d.ez,V,X.m]})}return r})()}}]);