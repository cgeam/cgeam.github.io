import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, Subscription } from 'rxjs';

import { Certificate } from './../../../shared/models/certificate.model';
import { CrudCertificatesService } from './../../../shared/services/crud-certificates.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  certificate$?: Observable<Certificate>;
  subscription?: Subscription;
  err: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private crud: CrudCertificatesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.certificate$ = this.crud.get(id).pipe(
          catchError(err => {
            this.err = true;
            return of();
          })
        );
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
