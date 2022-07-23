import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[nj-loading]' })
export class LoadingDirective {
  @Input() loading: boolean;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
