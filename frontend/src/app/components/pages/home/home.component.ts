import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user: String;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/user/1').subscribe(res => {
      this.user = res.firstName;
    });
  }
}
