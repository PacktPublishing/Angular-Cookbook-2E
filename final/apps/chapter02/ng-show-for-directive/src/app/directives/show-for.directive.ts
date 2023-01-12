import {
  Directive,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appShowFor]',
})
export class ShowForDirective {
  @Input() duration = 1500;
  @Input() set appShowFor(value: boolean) {
    console.log({ showForValue: value });
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  @Output() elementHidden = new EventEmitter();
  timer!: ReturnType<typeof setTimeout>;

  show() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.timer = setTimeout(() => {
      this.elementHidden.emit();
    }, this.duration);
  }

  hide() {
    clearTimeout(this.timer);
    this.viewContainerRef.clear();
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
