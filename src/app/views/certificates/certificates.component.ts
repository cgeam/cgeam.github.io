import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

  value: string = '';

  constructor(
    private router: Router
  ) { }

  onSubmit() {
    this.router.navigate([`/certificates/${this.value}`]);
  }

}
