import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt',
  templateUrl: './dbt.component.html',
  styleUrls: ['./dbt.component.css']
})
export class DbtComponent implements OnInit {
  courseDetail: any;
  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit(): Promise<void> {

    if (sessionStorage.getItem('uid') == 'true') {
      const items = await this.http.get('http://localhost:3000/dbt').toPromise();
      this.courseDetail = items;
      console.log(items);
    } else {
      alert('Please Login ');
      this.router.navigate(['Signin']);
    }
  }

  goToPage(page) {
    this.router.navigate([page]);
  }

}
