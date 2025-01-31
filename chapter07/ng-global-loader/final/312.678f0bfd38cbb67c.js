"use strict";(self.webpackChunkng_global_loader=self.webpackChunkng_global_loader||[]).push([[312],{1312:(Yn,Ve,u)=>{u.d(Ve,{m:()=>Kn});var C=u(177),r=u(3953),be=u(6648),De=u(1985),Ae=u(3073),Fe=u(8750),Me=u(9326),Ee=u(4360),we=u(6450),Se=u(8496),Ne=u(1413),xe=u(6354);let ft=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(r.sFG),r.rXU(r.aKT))};static#e=this.\u0275dir=r.FsC({type:n})}return n})(),_=(()=>{class n extends ft{static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=r.xGo(n)))(s||n)}})();static#e=this.\u0275dir=r.FsC({type:n,features:[r.Vt3]})}return n})();const f=new r.nKC(""),Be={provide:f,useExisting:(0,r.Rfq)(()=>$),multi:!0},Ge=new r.nKC("");let $=(()=>{class n extends ft{constructor(t,i,s){super(t,i),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ie(){const n=(0,C.QT)()?(0,C.QT)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(r.sFG),r.rXU(r.aKT),r.rXU(Ge,8))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,s){1&i&&r.bIt("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[r.Jv_([Be]),r.Vt3]})}return n})();const l=new r.nKC(""),m=new r.nKC("");function At(n){return null!=n}function Ft(n){return(0,r.jNT)(n)?(0,be.H)(n):n}function Mt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Et(n,e){return e.map(t=>t(n))}function wt(n){return n.map(e=>function Ue(n){return!n.validate}(e)?e:t=>e.validate(t))}function L(n){return null!=n?function St(n){if(!n)return null;const e=n.filter(At);return 0==e.length?null:function(t){return Mt(Et(t,e))}}(wt(n)):null}function X(n){return null!=n?function Ot(n){if(!n)return null;const e=n.filter(At);return 0==e.length?null:function(t){return function Oe(...n){const e=(0,Me.ms)(n),{args:t,keys:i}=(0,Ae.D)(n),s=new De.c(o=>{const{length:a}=t;if(!a)return void o.complete();const d=new Array(a);let v=a,A=a;for(let j=0;j<a;j++){let ht=!1;(0,Fe.Tg)(t[j]).subscribe((0,Ee._)(o,Qn=>{ht||(ht=!0,A--),d[j]=Qn},()=>v--,void 0,()=>{(!v||!ht)&&(A||o.next(i?(0,Se.e)(i,d):d),o.complete())}))}});return e?s.pipe((0,we.I)(e)):s}(Et(t,e).map(Ft)).pipe((0,xe.T)(Mt))}}(wt(n)):null}function Nt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function W(n){return n?Array.isArray(n)?n:[n]:[]}function O(n,e){return Array.isArray(n)?n.includes(e):n===e}function Bt(n,e){const t=W(e);return W(n).forEach(s=>{O(t,s)||t.push(s)}),t}function It(n,e){return W(e).filter(t=>!O(n,t))}class Gt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class c extends Gt{get formDirective(){return null}get path(){return null}}class g extends Gt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Pt{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ut=(()=>{class n extends Pt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(g,2))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,s){2&i&&r.AVh("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[r.Vt3]})}return n})();const F="VALID",x="INVALID",V="PENDING",M="DISABLED";class b{}class Rt extends b{constructor(e,t){super(),this.value=e,this.source=t}}class z extends b{constructor(e,t){super(),this.pristine=e,this.source=t}}class K extends b{constructor(e,t){super(),this.touched=e,this.source=t}}class k extends b{constructor(e,t){super(),this.status=e,this.source=t}}function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Z{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new Ne.B,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===x}get pending(){return this.status==V}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Bt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Bt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(It(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(It(e,this._rawAsyncValidators))}hasValidator(e){return O(this._rawValidators,e)}hasAsyncValidator(e){return O(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){const t=!1===this.touched;this.touched=!0;const i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched({...e,sourceControl:i}),t&&!1!==e.emitEvent&&this._events.next(new K(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){const t=!0===this.touched;this.touched=!1,this._pendingTouched=!1;const i=e.sourceControl??this;this._forEachChild(s=>{s.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&!1!==e.emitEvent&&this._events.next(new K(!1,i))}markAsDirty(e={}){const t=!0===this.pristine;this.pristine=!1;const i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty({...e,sourceControl:i}),t&&!1!==e.emitEvent&&this._events.next(new z(!1,i))}markAsPristine(e={}){const t=!1===this.pristine;this.pristine=!0,this._pendingDirty=!1;const i=e.sourceControl??this;this._forEachChild(s=>{s.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&!1!==e.emitEvent&&this._events.next(new z(!0,i))}markAsPending(e={}){this.status=V;const t=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new k(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending({...e,sourceControl:t})}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(s=>{s.disable({...e,onlySelf:!0})}),this._updateValue();const i=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new Rt(this.value,i)),this._events.next(new k(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(s=>s(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){const i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}const t=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new Rt(this.value,t)),this._events.next(new k(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity({...e,sourceControl:t})}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:!1!==t};const i=Ft(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(s=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(s,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();const e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent,this,t.shouldHaveEmitted)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,s)=>i&&i._find(s),this)}getError(e,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new k(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new r.bkB,this.statusChanges=new r.bkB}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(x)?x:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){const i=!this._anyControlsDirty(),s=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),s&&this._events.next(new z(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new K(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function We(n){return Array.isArray(n)?L(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function qe(n){return Array.isArray(n)?X(n):n||null}(this._rawAsyncValidators)}}const D=new r.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>I}),I="always";function E(n,e,t=I){(function et(n,e){const t=function xt(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Nt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const i=function kt(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Nt(i,e.asyncValidator)):"function"==typeof i&&n.setAsyncValidators([i]);const s=()=>n.updateValueAndValidity();U(e._rawValidators,s),U(e._rawAsyncValidators,s)})(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function Ke(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&$t(n,e)})}(n,e),function Ye(n,e){const t=(i,s)=>{e.valueAccessor.writeValue(i),s&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Qe(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&$t(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function ze(n,e){if(e.valueAccessor.setDisabledState){const t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function U(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function $t(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Wt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function qt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}Promise.resolve();const Jt=class extends Z{constructor(e=null,t,i){super(function Q(n){return(B(n)?n.validators:n)||null}(t),function Y(n,e){return(B(e)?e.asyncValidators:n)||null}(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=qt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Wt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Wt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){qt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},an={provide:g,useExisting:(0,r.Rfq)(()=>ot)},Qt=Promise.resolve();let ot=(()=>{class n extends g{constructor(t,i,s,o,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new Jt,this._registered=!1,this.name="",this.update=new r.bkB,this._parent=t,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=function rt(n,e){if(!e)return null;let t,i,s;return Array.isArray(e),e.forEach(o=>{o.constructor===$?t=o:function en(n){return Object.getPrototypeOf(n.constructor)===_}(o)?i=o:s=o}),s||i||t||null}(0,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function it(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){E(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Qt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,s=0!==i&&(0,r.L39)(i);Qt.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function G(n,e){return[...e.path,n]}(t,this._parent):[t]}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(c,9),r.rXU(l,10),r.rXU(m,10),r.rXU(f,10),r.rXU(r.gRc,8),r.rXU(D,8))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r.Jv_([an]),r.Vt3,r.OA$]})}return n})();const yn={provide:f,useExisting:(0,r.Rfq)(()=>R),multi:!0};function se(n,e){return null==n?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${n}: ${e}`.slice(0,50))}let R=(()=>{class n extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const s=se(this._getOptionId(t),t);this.setProperty("value",s)}registerOnChange(t){this.onChange=i=>{this.value=this._getOptionValue(i),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),t))return i;return null}_getOptionValue(t){const i=function vn(n){return n.split(":")[0]}(t);return this._optionMap.has(i)?this._optionMap.get(i):t}static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=r.xGo(n)))(s||n)}})();static#e=this.\u0275dir=r.FsC({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,s){1&i&&r.bIt("change",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[r.Jv_([yn]),r.Vt3]})}return n})(),oe=(()=>{class n{constructor(t,i,s){this._element=t,this._renderer=i,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(se(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(r.aKT),r.rXU(r.sFG),r.rXU(R,9))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return n})();const Cn={provide:f,useExisting:(0,r.Rfq)(()=>ct),multi:!0};function ae(n,e){return null==n?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${n}: ${e}`.slice(0,50))}let ct=(()=>{class n extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let i;if(this.value=t,Array.isArray(t)){const s=t.map(o=>this._getOptionId(o));i=(o,a)=>{o._setSelected(s.indexOf(a.toString())>-1)}}else i=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(t){this.onChange=i=>{const s=[],o=i.selectedOptions;if(void 0!==o){const a=o;for(let d=0;d<a.length;d++){const A=this._getOptionValue(a[d].value);s.push(A)}}else{const a=i.options;for(let d=0;d<a.length;d++){const v=a[d];if(v.selected){const A=this._getOptionValue(v.value);s.push(A)}}}this.value=s,t(s)}}_registerOption(t){const i=(this._idCounter++).toString();return this._optionMap.set(i,t),i}_getOptionId(t){for(const i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,t))return i;return null}_getOptionValue(t){const i=function Vn(n){return n.split(":")[0]}(t);return this._optionMap.has(i)?this._optionMap.get(i)._value:t}static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=r.xGo(n)))(s||n)}})();static#e=this.\u0275dir=r.FsC({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,s){1&i&&r.bIt("change",function(a){return s.onChange(a.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[r.Jv_([Cn]),r.Vt3]})}return n})(),le=(()=>{class n{constructor(t,i,s){this._element=t,this._renderer=i,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(ae(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ae(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(i){return new(i||n)(r.rXU(r.aKT),r.rXU(r.sFG),r.rXU(ct,9))};static#e=this.\u0275dir=r.FsC({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return n})(),On=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=r.$C({type:n});static#n=this.\u0275inj=r.G2t({})}return n})(),xn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:D,useValue:t.callSetDisabledState??I}]}}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=r.$C({type:n});static#n=this.\u0275inj=r.G2t({imports:[On]})}return n})();var h=function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n}(h||{});function ye(n,e=null){return{type:h.Animate,styles:e,timings:n}}function H(n){return{type:h.Style,styles:n,offset:null}}function ve(n,e,t=null){return{type:h.Query,selector:n,animation:e,options:t}}const Rn={LIST_ITEM_ANIMATION:function kn(n,e){return{type:h.Trigger,name:n,definitions:e,options:{}}}("listItemAnimation",[function Bn(n,e,t=null){return{type:h.Transition,expr:n,animation:e,options:t}}("* <=> *",[ve(":enter",[H({opacity:0}),function In(n,e){return{type:h.Stagger,timings:n,animation:e}}(100,[ye("0.5s ease",H({opacity:1}))])],{optional:!0}),ve(":leave",[H({opacity:1}),ye("0.5s ease",H({opacity:0}))],{optional:!0})])])};var Hn=u(2732),Ce=function(n){return n.Apple="Apple \u{1f34e}",n.Banana="Banana \u{1f34c}",n.Grapes="Grapes \u{1f347}",n.Cherries="Cherry \u{1f352}",n}(Ce||{}),jn=u(4412);let $n=(()=>{class n{constructor(){this.bucketSource=new jn.t([]),this.$bucket=this.bucketSource.asObservable()}loadItems(){const t=JSON.parse(window.localStorage.getItem("bucket")||"[]");this.bucketSource.next(t)}addItem(t){const i=[t,...this.bucketSource.value];this.bucketSource.next(i),window.localStorage.setItem("bucket",JSON.stringify(i))}removeItem(t){const i=this.bucketSource.value.filter(s=>s.id!==t.id);this.bucketSource.next([...i]),window.localStorage.setItem("bucket",JSON.stringify(i))}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275prov=r.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ln(n,e){if(1&n&&(r.j41(0,"option",12),r.EFF(1),r.k0s()),2&n){const t=e.$implicit;r.FS9("value",t),r.R7$(),r.SpI(" ",t," ")}}function Xn(n,e){if(1&n){const t=r.RV6();r.j41(0,"div",19),r.bIt("click",function(){r.eBV(t);const s=r.XpG().$implicit,o=r.XpG(3);return r.Njj(o.deleteFromBucket(s))}),r.j41(1,"div",20),r.EFF(2,"delete"),r.k0s()()}}function Wn(n,e){if(1&n&&(r.j41(0,"div",16)(1,"div",17),r.EFF(2),r.k0s(),r.DNE(3,Xn,3,0,"div",18),r.k0s()),2&n){const t=e.$implicit,i=r.XpG(3);r.R7$(2),r.JRh(t.name),r.R7$(),r.Y8G("ngIf",i.appConfig.canDeleteItems)}}function qn(n,e){if(1&n&&(r.qex(0),r.DNE(1,Wn,4,2,"div",15),r.bVm()),2&n){const t=r.XpG().ngIf;r.R7$(),r.Y8G("ngForOf",t)}}function Jn(n,e){1&n&&(r.j41(0,"div",21),r.EFF(1," No items in bucket. Add some fruits! "),r.k0s())}function zn(n,e){if(1&n&&(r.j41(0,"div",13),r.DNE(1,qn,2,1,"ng-container",14)(2,Jn,2,0,"ng-template",null,0,r.C5r),r.k0s()),2&n){const t=e.ngIf,i=r.sdS(3);r.Y8G("@listItemAnimation",t.length),r.R7$(),r.Y8G("ngIf",t.length>0)("ngIfElse",i)}}let Kn=(()=>{class n{constructor(){this.bucketService=(0,r.WQX)($n),this.appConfig=(0,r.WQX)(Hn.v),this.$bucket=this.bucketService.$bucket,this.selectedFruit="",this.fruits=Object.values(Ce)}ngOnInit(){this.bucketService.loadItems()}addSelectedFruitToBucket(){this.bucketService.addItem({id:Date.now(),name:this.selectedFruit})}deleteFromBucket(t){this.bucketService.removeItem(t)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=r.VBU({type:n,selectors:[["app-bucket"]],standalone:!0,features:[r.aNF],decls:17,vars:6,consts:[["bucketEmptyMessage",""],[1,"add-section"],[1,"input-group","flex","items-center","gap-4","justify-between","w-full"],["id","inputGroupSelect04","aria-label","Example select with button addon",1,"custom-select","flex-1","cursor-pointer","outline-none","rounded-md","border","border-slate-900","px-2","py-1.5",3,"ngModelChange","ngModel"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],[1,"page-section"],[1,"text-2xl","mt-4","flex","items-center","gap-2"],[1,"text-lg","material-symbols-outlined"],["class","fruits",4,"ngIf"],[3,"value"],[1,"fruits"],[4,"ngIf","ngIfElse"],["class","fruits__item",4,"ngFor","ngForOf"],[1,"fruits__item"],[1,"fruits__item__title"],["class","fruites__item__delete-icon",3,"click",4,"ngIf"],[1,"fruites__item__delete-icon",3,"click"],[1,"material-symbols-outlined"],[1,"fruits__no-items-msg"]],template:function(i,s){1&i&&(r.j41(0,"div",1)(1,"div",2)(2,"select",3),r.mxI("ngModelChange",function(a){return r.DH7(s.selectedFruit,a)||(s.selectedFruit=a),a}),r.j41(3,"option",4),r.EFF(4,"Choose..."),r.k0s(),r.DNE(5,Ln,2,2,"option",5),r.k0s(),r.j41(6,"div",6)(7,"button",7),r.bIt("click",function(){return s.addSelectedFruitToBucket()}),r.EFF(8," Add to Bucket "),r.k0s()()()(),r.j41(9,"div",8)(10,"h2",9)(11,"span"),r.EFF(12,"Bucket"),r.k0s(),r.j41(13,"span",10),r.EFF(14," shopping_cart "),r.k0s()(),r.DNE(15,zn,4,3,"div",11),r.nI1(16,"async"),r.k0s()),2&i&&(r.R7$(2),r.R50("ngModel",s.selectedFruit),r.R7$(3),r.Y8G("ngForOf",s.fruits),r.R7$(2),r.Y8G("disabled",!s.selectedFruit),r.R7$(8),r.Y8G("ngIf",r.bMT(16,4,s.$bucket)))},dependencies:[C.MD,C.Sq,C.bT,C.Jj,xn,oe,le,R,Ut,ot],styles:[".fruits[_ngcontent-%COMP%]{width:300px}.fruits__item[_ngcontent-%COMP%]{padding:4px 8px;border:1px solid rgba(238,238,238,.9333333333);display:flex;align-items:center}.fruits__item__title[_ngcontent-%COMP%]{flex:1;margin-right:16px}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:red;cursor:pointer}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]:hover{color:#333}.fruits__item--limited[_ngcontent-%COMP%]{background-color:#333;color:#fff}.add-section[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center}"],data:{animation:[Rn.LIST_ITEM_ANIMATION]}})}return n})()}}]);