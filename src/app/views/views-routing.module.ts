import { CertificateComponent } from './certificates/certificate/certificate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificatesComponent } from './certificates/certificates.component';

const routes: Routes = [
  { path: '', component: CertificatesComponent },
  { path: ':id', component: CertificateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
