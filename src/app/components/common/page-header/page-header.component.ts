import { Component, Input, TemplateRef } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsComponent } from 'ng-zorro-antd/descriptions';
import { NzSpaceComponent } from 'ng-zorro-antd/space';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lg-page-header',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    NgIf,
    NgTemplateOutlet,
    NzBreadCrumbModule,
    NzDividerModule,
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() hiddenBreadcrumb: boolean = false;
  @Input() action: TemplateRef<NzSpaceComponent> | undefined;
  @Input() description: TemplateRef<NzDescriptionsComponent> | undefined;
}
