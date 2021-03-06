/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../shared/services/our-leaders.service';
import * as import2 from './our-leaders.component';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from './our-leaders.component.css.shim';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
  const nodeDebugInfos_OurLeadersComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([
    import1.OurLeadersService,
    import2.OurLeadersComponent
  ]
,import2.OurLeadersComponent,{})];
var renderType_OurLeadersComponent_Host:import3.RenderComponentType = (null as any);
class _View_OurLeadersComponent_Host0 extends import4.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _OurLeadersService_0_4:import1.OurLeadersService;
  _OurLeadersComponent_0_5:import2.OurLeadersComponent;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_OurLeadersComponent_Host0,renderType_OurLeadersComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_OurLeadersComponent_Host0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.selectOrCreateHostElement('our-leaders',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_OurLeadersComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OurLeadersService_0_4 = new import1.OurLeadersService(this.parentInjector.get(import10.Http));
    this._OurLeadersComponent_0_5 = new import2.OurLeadersComponent(this._OurLeadersService_0_4,new import11.ElementRef(this._el_0));
    this._appEl_0.initComponent(this._OurLeadersComponent_0_5,[],compView_0);
    compView_0.create(this._OurLeadersComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.OurLeadersService) && (0 === requestNodeIndex))) { return this._OurLeadersService_0_4; }
    if (((token === import2.OurLeadersComponent) && (0 === requestNodeIndex))) { return this._OurLeadersComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._OurLeadersComponent_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_OurLeadersComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  if ((renderType_OurLeadersComponent_Host === (null as any))) { (renderType_OurLeadersComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_OurLeadersComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const OurLeadersComponentNgFactory:import13.ComponentFactory<import2.OurLeadersComponent> = new import13.ComponentFactory<import2.OurLeadersComponent>('our-leaders',viewFactory_OurLeadersComponent_Host0,import2.OurLeadersComponent);
const styles_OurLeadersComponent:any[] = [import14.styles];
const nodeDebugInfos_OurLeadersComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import16.NgFor
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import16.NgFor
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_OurLeadersComponent:import3.RenderComponentType = (null as any);
class _View_OurLeadersComponent0 extends import4.DebugAppView<import2.OurLeadersComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import5.AppElement;
  _TemplateRef_13_5:any;
  _NgFor_13_6:import16.NgFor;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _anchor_28:any;
  /*private*/ _appEl_28:import5.AppElement;
  _TemplateRef_28_5:any;
  _NgFor_28_6:import16.NgFor;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_OurLeadersComponent0,renderType_OurLeadersComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_OurLeadersComponent0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,' Our Leaders ',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(2,0,22));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',this.debug(3,2,27));
    this._el_4 = this.renderer.createElement(parentRenderNode,'div',this.debug(4,3,0));
    this.renderer.setElementAttribute(this._el_4,'class','data-wrapper');
    this.renderer.setElementAttribute(this._el_4,'id','lokSabha');
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',this.debug(5,3,40));
    this._el_6 = this.renderer.createElement(this._el_4,'div',this.debug(6,4,4));
    this.renderer.setElementAttribute(this._el_6,'class','data-container');
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',this.debug(7,4,32));
    this._el_8 = this.renderer.createElement(this._el_6,'h2',this.debug(8,5,8));
    this.renderer.setElementAttribute(this._el_8,'class','data-container__title');
    this._text_9 = this.renderer.createText(this._el_8,'Lok Sabha 15 - Attendence',this.debug(9,5,42));
    this._text_10 = this.renderer.createText(this._el_6,'\n        ',this.debug(10,5,72));
    this._el_11 = this.renderer.createElement(this._el_6,'div',this.debug(11,6,8));
    this.renderer.setElementAttribute(this._el_11,'class','data-container__list');
    this._text_12 = this.renderer.createText(this._el_11,'\n            ',this.debug(12,6,42));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11,this.debug(13,7,12));
    this._appEl_13 = new import5.AppElement(13,11,this,this._anchor_13);
    this._TemplateRef_13_5 = new import15.TemplateRef_(this._appEl_13,viewFactory_OurLeadersComponent1);
    this._NgFor_13_6 = new import16.NgFor(this._appEl_13.vcRef,this._TemplateRef_13_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_14 = this.renderer.createText(this._el_11,'\n        ',this.debug(14,25,17));
    this._text_15 = this.renderer.createText(this._el_6,'\n    ',this.debug(15,26,14));
    this._text_16 = this.renderer.createText(this._el_4,'\n',this.debug(16,27,10));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(17,28,6));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n',this.debug(18,30,29));
    this._el_19 = this.renderer.createElement(parentRenderNode,'div',this.debug(19,31,0));
    this.renderer.setElementAttribute(this._el_19,'class','data-wrapper');
    this.renderer.setElementAttribute(this._el_19,'id','rajyaSabha');
    this._text_20 = this.renderer.createText(this._el_19,'\n    ',this.debug(20,31,42));
    this._el_21 = this.renderer.createElement(this._el_19,'div',this.debug(21,32,4));
    this.renderer.setElementAttribute(this._el_21,'class','data-container');
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',this.debug(22,32,32));
    this._el_23 = this.renderer.createElement(this._el_21,'h2',this.debug(23,33,8));
    this.renderer.setElementAttribute(this._el_23,'class','data-container__title');
    this._text_24 = this.renderer.createText(this._el_23,'Rajya Sabha 15 - Attendence',this.debug(24,33,42));
    this._text_25 = this.renderer.createText(this._el_21,'\n        ',this.debug(25,33,74));
    this._el_26 = this.renderer.createElement(this._el_21,'div',this.debug(26,34,8));
    this.renderer.setElementAttribute(this._el_26,'class','data-container__list');
    this._text_27 = this.renderer.createText(this._el_26,'\n            ',this.debug(27,34,42));
    this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26,this.debug(28,35,12));
    this._appEl_28 = new import5.AppElement(28,26,this,this._anchor_28);
    this._TemplateRef_28_5 = new import15.TemplateRef_(this._appEl_28,viewFactory_OurLeadersComponent2);
    this._NgFor_28_6 = new import16.NgFor(this._appEl_28.vcRef,this._TemplateRef_28_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_29 = this.renderer.createText(this._el_26,'\n        ',this.debug(29,53,17));
    this._text_30 = this.renderer.createText(this._el_21,'\n    ',this.debug(30,54,14));
    this._text_31 = this.renderer.createText(this._el_19,'\n',this.debug(31,55,10));
    this._text_32 = this.renderer.createText(parentRenderNode,'\n',this.debug(32,56,6));
    this._expr_0 = import9.UNINITIALIZED;
    this._expr_1 = import9.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._anchor_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import16.NgFor) && (13 === requestNodeIndex))) { return this._NgFor_13_6; }
    if (((token === import15.TemplateRef) && (28 === requestNodeIndex))) { return this._TemplateRef_28_5; }
    if (((token === import16.NgFor) && (28 === requestNodeIndex))) { return this._NgFor_28_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import9.SimpleChange} = (null as any);
    this.debug(13,7,12);
    changes = (null as any);
    this.debug(13,7,33);
    const currVal_0:any = this.context.lokSabhaAttendance;
    if (import6.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_13_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import9.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_13_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_13_6.ngDoCheck(); }
    this.debug(28,35,12);
    changes = (null as any);
    this.debug(28,35,33);
    const currVal_1:any = this.context.rajyaSabhaAttendance;
    if (import6.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_28_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import9.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_28_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_28_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_OurLeadersComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<import2.OurLeadersComponent> {
  if ((renderType_OurLeadersComponent === (null as any))) { (renderType_OurLeadersComponent = viewUtils.createRenderComponentType('/Users/vrufu1/git-play/my-india-aot/app/layouts/our-leaders/our-leaders.component.html',0,import12.ViewEncapsulation.Emulated,styles_OurLeadersComponent,{})); }
  return new _View_OurLeadersComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_OurLeadersComponent1:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([import18.NgClass],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{progress: (null as any)}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_OurLeadersComponent1 extends import4.DebugAppView<any> {
  _el_0:any;
  _NgClass_0_3:import18.NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_OurLeadersComponent1,renderType_OurLeadersComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_OurLeadersComponent1);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ul',this.debug(0,7,12));
    this.renderer.setElementAttribute(this._el_0,'class','data-row');
    this._NgClass_0_3 = new import18.NgClass(this.parent.parentInjector.get(import17.IterableDiffers),this.parent.parentInjector.get(import19.KeyValueDiffers),new import11.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',this.debug(1,7,168));
    this._el_2 = this.renderer.createElement(this._el_0,'li',this.debug(2,8,16));
    this.renderer.setElementAttribute(this._el_2,'class','data-column');
    this._text_3 = this.renderer.createText(this._el_2,'\n                    ',this.debug(3,8,40));
    this._el_4 = this.renderer.createElement(this._el_2,'span',this.debug(4,9,20));
    this.renderer.setElementAttribute(this._el_4,'class','data-container__serial-no');
    this._text_5 = this.renderer.createText(this._el_4,'',this.debug(5,9,60));
    this._text_6 = this.renderer.createText(this._el_2,'\n                ',this.debug(6,9,74));
    this._text_7 = this.renderer.createText(this._el_0,'\n                ',this.debug(7,10,21));
    this._el_8 = this.renderer.createElement(this._el_0,'li',this.debug(8,11,16));
    this.renderer.setElementAttribute(this._el_8,'class','data-column');
    this._text_9 = this.renderer.createText(this._el_8,'\n                    ',this.debug(9,11,40));
    this._el_10 = this.renderer.createElement(this._el_8,'span',this.debug(10,12,20));
    this.renderer.setElementAttribute(this._el_10,'class','data-container__member-name');
    this._text_11 = this.renderer.createText(this._el_10,'',this.debug(11,12,62));
    this._text_12 = this.renderer.createText(this._el_8,'\n                    ',this.debug(12,12,82));
    this._el_13 = this.renderer.createElement(this._el_8,'span',this.debug(13,13,20));
    this.renderer.setElementAttribute(this._el_13,'class','data-container__member-state');
    this._el_14 = this.renderer.createElement(this._el_13,'em',this.debug(14,13,63));
    this._text_15 = this.renderer.createText(this._el_14,'',this.debug(15,13,67));
    this._text_16 = this.renderer.createText(this._el_8,'\n                ',this.debug(16,13,92));
    this._text_17 = this.renderer.createText(this._el_0,'\n                ',this.debug(17,14,21));
    this._el_18 = this.renderer.createElement(this._el_0,'li',this.debug(18,15,16));
    this.renderer.setElementAttribute(this._el_18,'class','data-column');
    this._text_19 = this.renderer.createText(this._el_18,'\n                    ',this.debug(19,15,40));
    this._text_20 = this.renderer.createText(this._el_18,'\n                    ',this.debug(20,16,89));
    this._el_21 = this.renderer.createElement(this._el_18,'div',this.debug(21,17,20));
    this.renderer.setElementAttribute(this._el_21,'class','progress-bar horizontal');
    this._text_22 = this.renderer.createText(this._el_21,'\n                        ',this.debug(22,17,57));
    this._el_23 = this.renderer.createElement(this._el_21,'div',this.debug(23,18,24));
    this.renderer.setElementAttribute(this._el_23,'class','progress-track');
    this._text_24 = this.renderer.createText(this._el_23,'\n                            ',this.debug(24,18,52));
    this._el_25 = this.renderer.createElement(this._el_23,'div',this.debug(25,19,28));
    this.renderer.setElementAttribute(this._el_25,'class','progress-fill');
    this._text_26 = this.renderer.createText(this._el_25,'\n                                ',this.debug(26,19,65));
    this._text_27 = this.renderer.createText(this._el_25,'\n                            ',this.debug(27,20,58));
    this._text_28 = this.renderer.createText(this._el_23,'\n                        ',this.debug(28,21,34));
    this._text_29 = this.renderer.createText(this._el_21,'\n                    ',this.debug(29,22,30));
    this._text_30 = this.renderer.createText(this._el_18,'\n                ',this.debug(30,23,26));
    this._text_31 = this.renderer.createText(this._el_0,'\n            ',this.debug(31,24,21));
    this._expr_0 = import9.UNINITIALIZED;
    this._map_0 = import6.pureProxy1((p0:any):{[key: string]:any} => {
      return {hide: p0};
    });
    this._expr_1 = import9.UNINITIALIZED;
    this._expr_2 = import9.UNINITIALIZED;
    this._expr_3 = import9.UNINITIALIZED;
    this._expr_4 = import9.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._text_31
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,7,16);
    const currVal_0:any = 'data-row';
    if (import6.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.initialClasses = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.debug(0,7,90);
    const currVal_1:any = this._map_0((((this.context.$implicit[8] === 'M') || (this.context.$implicit[8] === 'LOP')) || (this.context.$implicit[8] === 'HDC')));
    if (import6.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(5,9,60);
    const currVal_2:any = import6.interpolate(1,'',(this.context.index + 1),'');
    if (import6.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.debug(11,12,62);
    const currVal_3:any = import6.interpolate(1,'',this.context.$implicit[2],'');
    if (import6.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_11,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.debug(15,13,67);
    const currVal_4:any = import6.interpolate(1,'',this.context.$implicit[6],'');
    if (import6.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_15,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_OurLeadersComponent1(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  return new _View_OurLeadersComponent1(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_OurLeadersComponent2:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([import18.NgClass],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{progress: (null as any)}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_OurLeadersComponent2 extends import4.DebugAppView<any> {
  _el_0:any;
  _NgClass_0_3:import18.NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_OurLeadersComponent2,renderType_OurLeadersComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_OurLeadersComponent2);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ul',this.debug(0,35,12));
    this.renderer.setElementAttribute(this._el_0,'class','data-row');
    this._NgClass_0_3 = new import18.NgClass(this.parent.parentInjector.get(import17.IterableDiffers),this.parent.parentInjector.get(import19.KeyValueDiffers),new import11.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',this.debug(1,35,170));
    this._el_2 = this.renderer.createElement(this._el_0,'li',this.debug(2,36,16));
    this.renderer.setElementAttribute(this._el_2,'class','data-column');
    this._text_3 = this.renderer.createText(this._el_2,'\n                    ',this.debug(3,36,40));
    this._el_4 = this.renderer.createElement(this._el_2,'span',this.debug(4,37,20));
    this.renderer.setElementAttribute(this._el_4,'class','data-container__serial-no');
    this._text_5 = this.renderer.createText(this._el_4,'',this.debug(5,37,60));
    this._text_6 = this.renderer.createText(this._el_2,'\n                ',this.debug(6,37,74));
    this._text_7 = this.renderer.createText(this._el_0,'\n                ',this.debug(7,38,21));
    this._el_8 = this.renderer.createElement(this._el_0,'li',this.debug(8,39,16));
    this.renderer.setElementAttribute(this._el_8,'class','data-column');
    this._text_9 = this.renderer.createText(this._el_8,'\n                    ',this.debug(9,39,40));
    this._el_10 = this.renderer.createElement(this._el_8,'span',this.debug(10,40,20));
    this.renderer.setElementAttribute(this._el_10,'class','data-container__member-name');
    this._text_11 = this.renderer.createText(this._el_10,'',this.debug(11,40,62));
    this._text_12 = this.renderer.createText(this._el_8,'\n                    ',this.debug(12,40,82));
    this._el_13 = this.renderer.createElement(this._el_8,'span',this.debug(13,41,20));
    this.renderer.setElementAttribute(this._el_13,'class','data-container__member-state');
    this._el_14 = this.renderer.createElement(this._el_13,'em',this.debug(14,41,63));
    this._text_15 = this.renderer.createText(this._el_14,'',this.debug(15,41,67));
    this._text_16 = this.renderer.createText(this._el_8,'\n                ',this.debug(16,41,92));
    this._text_17 = this.renderer.createText(this._el_0,'\n                ',this.debug(17,42,21));
    this._el_18 = this.renderer.createElement(this._el_0,'li',this.debug(18,43,16));
    this.renderer.setElementAttribute(this._el_18,'class','data-column');
    this._text_19 = this.renderer.createText(this._el_18,'\n                    ',this.debug(19,43,40));
    this._text_20 = this.renderer.createText(this._el_18,'\n                    ',this.debug(20,44,89));
    this._el_21 = this.renderer.createElement(this._el_18,'div',this.debug(21,45,20));
    this.renderer.setElementAttribute(this._el_21,'class','progress-bar horizontal');
    this._text_22 = this.renderer.createText(this._el_21,'\n                        ',this.debug(22,45,57));
    this._el_23 = this.renderer.createElement(this._el_21,'div',this.debug(23,46,24));
    this.renderer.setElementAttribute(this._el_23,'class','progress-track');
    this._text_24 = this.renderer.createText(this._el_23,'\n                            ',this.debug(24,46,52));
    this._el_25 = this.renderer.createElement(this._el_23,'div',this.debug(25,47,28));
    this.renderer.setElementAttribute(this._el_25,'class','progress-fill');
    this._text_26 = this.renderer.createText(this._el_25,'\n                                ',this.debug(26,47,65));
    this._text_27 = this.renderer.createText(this._el_25,'\n                            ',this.debug(27,48,58));
    this._text_28 = this.renderer.createText(this._el_23,'\n                        ',this.debug(28,49,34));
    this._text_29 = this.renderer.createText(this._el_21,'\n                    ',this.debug(29,50,30));
    this._text_30 = this.renderer.createText(this._el_18,'\n                ',this.debug(30,51,26));
    this._text_31 = this.renderer.createText(this._el_0,'\n            ',this.debug(31,52,21));
    this._expr_0 = import9.UNINITIALIZED;
    this._map_0 = import6.pureProxy1((p0:any):{[key: string]:any} => {
      return {hide: p0};
    });
    this._expr_1 = import9.UNINITIALIZED;
    this._expr_2 = import9.UNINITIALIZED;
    this._expr_3 = import9.UNINITIALIZED;
    this._expr_4 = import9.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._text_31
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,35,16);
    const currVal_0:any = 'data-row';
    if (import6.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.initialClasses = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.debug(0,35,92);
    const currVal_1:any = this._map_0((((this.context.$implicit[8] === 'M') || (this.context.$implicit[8] === 'LOP')) || (this.context.$implicit[8] === 'HDC')));
    if (import6.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(5,37,60);
    const currVal_2:any = import6.interpolate(1,'',(this.context.index + 1),'');
    if (import6.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.debug(11,40,62);
    const currVal_3:any = import6.interpolate(1,'',this.context.$implicit[2],'');
    if (import6.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_11,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.debug(15,41,67);
    const currVal_4:any = import6.interpolate(1,'',this.context.$implicit[6],'');
    if (import6.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_15,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_OurLeadersComponent2(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  return new _View_OurLeadersComponent2(viewUtils,parentInjector,declarationEl);
}