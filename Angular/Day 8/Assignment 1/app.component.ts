import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  title = 'my-project';

  // sort: string = '';

  // sortBy(sortValue: string) {
  //   this.sort = sortValue;
  // }

  // users:any[] = [];
  // onClick(){
  //   this.http.get("https://reqres.in/api/users").subscribe( (response:any) => {                          
  //   //console.log(response.data)
  //   this.users = response.data;
  // });
  // }
}
