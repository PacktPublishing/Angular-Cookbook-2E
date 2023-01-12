import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowForDirective } from './show-for.directive';

@Component({
  template: '<ng-template appShowFor></ng-template>',
})
class TestHostComponent {
  @ViewChild(ShowForDirective)
  showForDirective!: ShowForDirective;
}

describe('ShowForDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowForDirective, TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
  });
  afterEach(() => {
    fixture.nativeElement.remove();
    TestBed.resetTestingModule();
  });
  it('should create an instance', () => {
    fixture.detectChanges();
    const fooDirective = fixture.componentInstance.showForDirective;
    expect(fooDirective).toBeTruthy();
  });
});
