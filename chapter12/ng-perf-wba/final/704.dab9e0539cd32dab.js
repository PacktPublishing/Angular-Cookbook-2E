"use strict";(self.webpackChunkng_perf_wba=self.webpackChunkng_perf_wba||[]).push([[704],{3704:($n,ve,l)=>{l.d(ve,{m:()=>Pn});var C=l(177),i=l(4438),ye=l(6648),Ce=l(1985),Ve=l(3073),be=l(8750),Ae=l(3794),De=l(4360),Me=l(6450),Fe=l(8496),we=l(1413),Oe=l(6354);let ht=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT))};static \u0275dir=i.FsC({type:e})}return e})(),_=(()=>{class e extends ht{static \u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static \u0275dir=i.FsC({type:e,features:[i.Vt3]})}return e})();const f=new i.nKC(""),Ne={provide:f,useExisting:(0,i.Rfq)(()=>$),multi:!0},ke=new i.nKC("");let $=(()=>{class e extends ht{_compositionMode;_composing=!1;constructor(t,r,o){super(t,r),this._compositionMode=o,null==this._compositionMode&&(this._compositionMode=!function xe(){const e=(0,C.QT)()?(0,C.QT)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT),i.rXU(ke,8))};static \u0275dir=i.FsC({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.bIt("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[i.Jv_([Ne]),i.Vt3]})}return e})();const u=new i.nKC(""),m=new i.nKC("");function At(e){return null!=e}function Dt(e){return(0,i.jNT)(e)?(0,ye.H)(e):e}function Mt(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Ft(e,n){return n.map(t=>t(e))}function Et(e){return e.map(n=>function Ge(e){return!e.validate}(n)?n:t=>n.validate(t))}function j(e){return null!=e?function wt(e){if(!e)return null;const n=e.filter(At);return 0==n.length?null:function(t){return Mt(Ft(t,n))}}(Et(e)):null}function L(e){return null!=e?function Ot(e){if(!e)return null;const n=e.filter(At);return 0==n.length?null:function(t){return function Ee(...e){const n=(0,Ae.ms)(e),{args:t,keys:r}=(0,Ve.D)(e),o=new Ce.c(s=>{const{length:a}=t;if(!a)return void s.complete();const d=new Array(a);let y=a,D=a;for(let H=0;H<a;H++){let dt=!1;(0,be.Tg)(t[H]).subscribe((0,De._)(s,Hn=>{dt||(dt=!0,D--),d[H]=Hn},()=>y--,void 0,()=>{(!y||!dt)&&(D||s.next(r?(0,Fe.e)(r,d):d),s.complete())}))}});return n?o.pipe((0,Me.I)(n)):o}(Ft(t,n).map(Dt)).pipe((0,Oe.T)(Mt))}}(Et(e)):null}function St(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function X(e){return e?Array.isArray(e)?e:[e]:[]}function S(e,n){return Array.isArray(e)?e.includes(n):e===n}function kt(e,n){const t=X(n);return X(e).forEach(o=>{S(t,o)||t.push(o)}),t}function It(e,n){return X(n).filter(t=>!S(e,t))}class Gt{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=j(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=L(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class c extends Gt{name;get formDirective(){return null}get path(){return null}}class g extends Gt{_parent=null;name=null;valueAccessor=null}class Bt{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}}let Tt=(()=>{class e extends Bt{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(i.rXU(g,2))};static \u0275dir=i.FsC({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.AVh("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[i.Vt3]})}return e})();const M="VALID",x="INVALID",V="PENDING",F="DISABLED";class b{}class Ut extends b{value;source;constructor(n,t){super(),this.value=n,this.source=t}}class J extends b{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}}class z extends b{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}}class k extends b{status;source;constructor(n,t){super(),this.status=n,this.source=t}}function I(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Y{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return(0,i.O8t)(this.statusReactive)}set status(n){(0,i.O8t)(()=>this.statusReactive.set(n))}_status=(0,i.EWP)(()=>this.statusReactive());statusReactive=(0,i.vPA)(void 0);get valid(){return this.status===M}get invalid(){return this.status===x}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}errors;get pristine(){return(0,i.O8t)(this.pristineReactive)}set pristine(n){(0,i.O8t)(()=>this.pristineReactive.set(n))}_pristine=(0,i.EWP)(()=>this.pristineReactive());pristineReactive=(0,i.vPA)(!0);get dirty(){return!this.pristine}get touched(){return(0,i.O8t)(this.touchedReactive)}set touched(n){(0,i.O8t)(()=>this.touchedReactive.set(n))}_touched=(0,i.EWP)(()=>this.touchedReactive());touchedReactive=(0,i.vPA)(!1);get untouched(){return!this.touched}_events=new we.B;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(kt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(kt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(It(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}hasValidator(n){return S(this._rawValidators,n)}hasAsyncValidator(n){return S(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){const t=!1===this.touched;this.touched=!0;const r=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched({...n,sourceControl:r}),t&&!1!==n.emitEvent&&this._events.next(new z(!0,r))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){const t=!0===this.touched;this.touched=!1,this._pendingTouched=!1;const r=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,r),t&&!1!==n.emitEvent&&this._events.next(new z(!1,r))}markAsDirty(n={}){const t=!0===this.pristine;this.pristine=!1;const r=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty({...n,sourceControl:r}),t&&!1!==n.emitEvent&&this._events.next(new J(!1,r))}markAsPristine(n={}){const t=!1===this.pristine;this.pristine=!0,this._pendingDirty=!1;const r=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,r),t&&!1!==n.emitEvent&&this._events.next(new J(!0,r))}markAsPending(n={}){this.status=V;const t=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new k(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending({...n,sourceControl:t})}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=F,this.errors=null,this._forEachChild(o=>{o.disable({...n,onlySelf:!0})}),this._updateValue();const r=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new Ut(this.value,r)),this._events.next(new k(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t},this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=M,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t},this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){const r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(r,n.emitEvent)}const t=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new Ut(this.value,t)),this._events.next(new k(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity({...n,sourceControl:t})}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:!1!==t};const r=Dt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();const n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent,this,t.shouldHaveEmitted)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new k(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new i.bkB,this.statusChanges=new i.bkB}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(x)?x:M}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){const r=!this._anyControlsDirty(),o=this.pristine!==r;this.pristine=r,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new J(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new z(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){I(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function je(e){return Array.isArray(e)?j(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Le(e){return Array.isArray(e)?L(e):e||null}(this._rawAsyncValidators)}}const A=new i.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>G}),G="always";function E(e,n,t=G){(function tt(e,n){const t=function Nt(e){return e._rawValidators}(e);null!==n.validator?e.setValidators(St(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=function xt(e){return e._rawAsyncValidators}(e);null!==n.asyncValidator?e.setAsyncValidators(St(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();R(n._rawValidators,o),R(n._rawAsyncValidators,o)})(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function qe(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&$t(e,n)})}(e,n),function ze(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Je(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&$t(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function We(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function R(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function $t(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Xt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Wt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}Promise.resolve();const qt=class extends Y{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(function K(e){return(I(e)?e.validators:e)||null}(t),function Q(e,n){return(I(n)?n.asyncValidators:e)||null}(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Wt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Xt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Xt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Wt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},rn={provide:g,useExisting:(0,i.Rfq)(()=>ot)},Kt=Promise.resolve();let ot=(()=>{class e extends g{_changeDetectorRef;callSetDisabledState;control=new qt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new i.bkB;constructor(t,r,o,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function rt(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===$?t=s:function Ye(e){return Object.getPrototypeOf(e.constructor)===_}(s)?r=s:o=s}),o||r||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function nt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){E(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Kt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,o=0!==r&&(0,i.L39)(r);Kt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function B(e,n){return[...n.path,e]}(t,this._parent):[t]}static \u0275fac=function(r){return new(r||e)(i.rXU(c,9),i.rXU(u,10),i.rXU(m,10),i.rXU(f,10),i.rXU(i.gRc,8),i.rXU(A,8))};static \u0275dir=i.FsC({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[i.Jv_([rn]),i.Vt3,i.OA$]})}return e})();const mn={provide:f,useExisting:(0,i.Rfq)(()=>P),multi:!0};function ie(e,n){return null==e?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let P=(()=>{class e extends _{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;writeValue(t){this.value=t;const o=ie(this._getOptionId(t),t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){const r=function gn(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r):t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static \u0275dir=i.FsC({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){1&r&&i.bIt("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[i.Jv_([mn]),i.Vt3]})}return e})(),oe=(()=>{class e{_element;_renderer;_select;id;constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ie(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(r){return new(r||e)(i.rXU(i.aKT),i.rXU(i.sFG),i.rXU(P,9))};static \u0275dir=i.FsC({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})();const _n={provide:f,useExisting:(0,i.Rfq)(()=>ut),multi:!0};function se(e,n){return null==e?`${n}`:("string"==typeof n&&(n=`'${n}'`),n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let ut=(()=>{class e extends _{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;writeValue(t){let r;if(this.value=t,Array.isArray(t)){const o=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{const o=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let d=0;d<a.length;d++){const D=this._getOptionValue(a[d].value);o.push(D)}}else{const a=r.options;for(let d=0;d<a.length;d++){const y=a[d];if(y.selected){const D=this._getOptionValue(y.value);o.push(D)}}}this.value=o,t(o)}}_registerOption(t){const r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){const r=function vn(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static \u0275dir=i.FsC({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){1&r&&i.bIt("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[i.Jv_([_n]),i.Vt3]})}return e})(),ae=(()=>{class e{_element;_renderer;_select;id;_value;constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(se(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(se(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(r){return new(r||e)(i.rXU(i.aKT),i.rXU(i.sFG),i.rXU(ut,9))};static \u0275dir=i.FsC({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})(),En=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=i.$C({type:e});static \u0275inj=i.G2t({})}return e})(),On=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:A,useValue:t.callSetDisabledState??G}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=i.$C({type:e});static \u0275inj=i.G2t({imports:[En]})}return e})();var h=l(9969);const Sn={LIST_ITEM_ANIMATION:(0,h.hZ)("listItemAnimation",[(0,h.kY)("* <=> *",[(0,h.P)(":enter",[(0,h.iF)({opacity:0}),(0,h.yc)(100,[(0,h.i0)("0.5s ease",(0,h.iF)({opacity:1}))])],{optional:!0}),(0,h.P)(":leave",[(0,h.iF)({opacity:1}),(0,h.i0)("0.5s ease",(0,h.iF)({opacity:0}))],{optional:!0})])])};var Nn=l(8943),_e=function(e){return e.Apple="Apple \u{1f34e}",e.Banana="Banana \u{1f34c}",e.Grapes="Grapes \u{1f347}",e.Cherries="Cherry \u{1f352}",e}(_e||{}),xn=l(4412);let kn=(()=>{class e{constructor(){this.bucketSource=new xn.t([]),this.$bucket=this.bucketSource.asObservable()}loadItems(){const t=JSON.parse(window.localStorage.getItem("bucket")||"[]");this.bucketSource.next(t)}addItem(t){const r=[t,...this.bucketSource.value];this.bucketSource.next(r),window.localStorage.setItem("bucket",JSON.stringify(r))}removeItem(t){const r=this.bucketSource.value.filter(o=>o.id!==t.id);this.bucketSource.next([...r]),window.localStorage.setItem("bucket",JSON.stringify(r))}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=i.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function In(e,n){if(1&e&&(i.j41(0,"option",12),i.EFF(1),i.k0s()),2&e){const t=n.$implicit;i.FS9("value",t),i.R7$(),i.SpI(" ",t," ")}}function Gn(e,n){if(1&e){const t=i.RV6();i.j41(0,"div",19),i.bIt("click",function(){i.eBV(t);const o=i.XpG().$implicit,s=i.XpG(3);return i.Njj(s.deleteFromBucket(o))}),i.j41(1,"div",20),i.EFF(2,"delete"),i.k0s()()}}function Bn(e,n){if(1&e&&(i.j41(0,"div",16)(1,"div",17),i.EFF(2),i.k0s(),i.DNE(3,Gn,3,0,"div",18),i.k0s()),2&e){const t=n.$implicit,r=i.XpG(3);i.R7$(2),i.JRh(t.name),i.R7$(),i.Y8G("ngIf",r.appConfig.canDeleteItems)}}function Tn(e,n){if(1&e&&(i.qex(0),i.DNE(1,Bn,4,2,"div",15),i.bVm()),2&e){const t=i.XpG().ngIf;i.R7$(),i.Y8G("ngForOf",t)}}function Rn(e,n){1&e&&(i.j41(0,"div",21),i.EFF(1," No items in bucket. Add some fruits! "),i.k0s())}function Un(e,n){if(1&e&&(i.j41(0,"div",13),i.DNE(1,Tn,2,1,"ng-container",14)(2,Rn,2,0,"ng-template",null,0,i.C5r),i.k0s()),2&e){const t=n.ngIf,r=i.sdS(3);i.Y8G("@listItemAnimation",t.length),i.R7$(),i.Y8G("ngIf",t.length>0)("ngIfElse",r)}}let Pn=(()=>{class e{constructor(){this.bucketService=(0,i.WQX)(kn),this.appConfig=(0,i.WQX)(Nn.v),this.$bucket=this.bucketService.$bucket,this.selectedFruit="",this.fruits=Object.values(_e)}ngOnInit(){this.bucketService.loadItems()}addSelectedFruitToBucket(){this.bucketService.addItem({id:Date.now(),name:this.selectedFruit})}deleteFromBucket(t){this.bucketService.removeItem(t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=i.VBU({type:e,selectors:[["app-bucket"]],decls:17,vars:6,consts:[["bucketEmptyMessage",""],[1,"add-section"],[1,"input-group","flex","items-center","gap-4","justify-between","w-full"],["id","inputGroupSelect04","aria-label","Example select with button addon",1,"custom-select","flex-1","cursor-pointer","outline-none","rounded-md","border","border-slate-900","px-2","py-1.5",3,"ngModelChange","ngModel"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],[1,"page-section"],[1,"text-2xl","mt-4","flex","items-center","gap-2"],[1,"text-lg","material-symbols-outlined"],["class","fruits",4,"ngIf"],[3,"value"],[1,"fruits"],[4,"ngIf","ngIfElse"],["class","fruits__item",4,"ngFor","ngForOf"],[1,"fruits__item"],[1,"fruits__item__title"],["class","fruites__item__delete-icon",3,"click",4,"ngIf"],[1,"fruites__item__delete-icon",3,"click"],[1,"material-symbols-outlined"],[1,"fruits__no-items-msg"]],template:function(r,o){1&r&&(i.j41(0,"div",1)(1,"div",2)(2,"select",3),i.mxI("ngModelChange",function(a){return i.DH7(o.selectedFruit,a)||(o.selectedFruit=a),a}),i.j41(3,"option",4),i.EFF(4,"Choose..."),i.k0s(),i.DNE(5,In,2,2,"option",5),i.k0s(),i.j41(6,"div",6)(7,"button",7),i.bIt("click",function(){return o.addSelectedFruitToBucket()}),i.EFF(8," Add to Bucket "),i.k0s()()()(),i.j41(9,"div",8)(10,"h2",9)(11,"span"),i.EFF(12,"Bucket"),i.k0s(),i.j41(13,"span",10),i.EFF(14," shopping_cart "),i.k0s()(),i.DNE(15,Un,4,3,"div",11),i.nI1(16,"async"),i.k0s()),2&r&&(i.R7$(2),i.R50("ngModel",o.selectedFruit),i.R7$(3),i.Y8G("ngForOf",o.fruits),i.R7$(2),i.Y8G("disabled",!o.selectedFruit),i.R7$(8),i.Y8G("ngIf",i.bMT(16,4,o.$bucket)))},dependencies:[C.MD,C.Sq,C.bT,C.Jj,On,oe,ae,P,Tt,ot],styles:[".fruits[_ngcontent-%COMP%]{width:300px}.fruits__item[_ngcontent-%COMP%]{padding:4px 8px;border:1px solid rgba(238,238,238,.9333333333);display:flex;align-items:center}.fruits__item__title[_ngcontent-%COMP%]{flex:1;margin-right:16px}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:red;cursor:pointer}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]:hover{color:#333}.fruits__item--limited[_ngcontent-%COMP%]{background-color:#333;color:#fff}.add-section[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center}"],data:{animation:[Sn.LIST_ITEM_ANIMATION]}})}}return e})()}}]);