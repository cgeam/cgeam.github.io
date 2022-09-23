import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewsRoutingModule } from './views-routing.module';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertificateComponent } from './certificates/certificate/certificate.component';


@NgModule({
  declarations: [
    CertificatesComponent,
    CertificateComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
  ]
})
export class ViewsModule { }
