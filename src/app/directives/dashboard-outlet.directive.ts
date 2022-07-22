import { Directive, Input, ViewContainerRef } from "@angular/core";

@Directive({ selector: '[nj-dashboardOutlet]' })
export class DashboardOutletDirective {
  @Input() item: any;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
