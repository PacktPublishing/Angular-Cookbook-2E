import { AfterViewInit, ChangeDetectorRef, Directive, Input, OnChanges, Renderer2, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[appPopoverPositionalClass]',
  standalone: true,
})
export class PopoverPositionalClassDirective implements AfterViewInit, OnChanges {
  @Input() originY: string | undefined = 'top';
  @Input() targetSelector!: string;
  @Input() inverseClass = '';
  @Input() initialDirection: 'top' | 'center' | 'bottom' = 'bottom';
  renderer = inject(Renderer2);
  cdRef = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    this.inverseClass = this.inverseClass || `${this.targetSelector}-inverse`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!(changes && changes['originY'])) {
      return;
    }
    if (changes['originY'].currentValue !== changes['originY'].previousValue) {
      // let the popover appear
      setTimeout(() => {
        this.applyClass(changes['originY'].currentValue);
      }, 0);
    }
  }

  applyClass(originY: 'top' | 'center' | 'bottom') {
    const target = document.querySelector(this.targetSelector);
    if (!target) {
      return;
    }
    if (originY !== this.initialDirection) {
      this.renderer.addClass(target, this.inverseClass);
    } else {
      this.renderer.removeClass(target, this.inverseClass);
    }
    this.cdRef.markForCheck();
  }
}