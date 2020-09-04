import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inavbar',
  templateUrl: './navbar-inside.component.html',
  styleUrls: ['./navbar-inside.component.css']
})
export class NavbarInsideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(page) {
    sessionStorage.removeItem('uid');
    this.router.navigate([page]);
  }

  goToProfile(page) {
    this.router.navigate([page]);
  }
}
