import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css']
})
export class CsharpComponent implements OnInit {
  courseDetail: any;
  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit(): Promise<void> {

    if (sessionStorage.getItem('uid')) {
      const items = await this.http.get('http://localhost:3000/csharp').toPromise();
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
