import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appAdminPanel]',
})
export class AdminPanelDirective implements OnChanges {
  @Input()
  appAdminPanel: string = "";

  admin:string[]=['Scott','Smith','Robert','Mark'];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnChanges() {
    if (this.admin.indexOf(this.appAdminPanel) > -1) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
