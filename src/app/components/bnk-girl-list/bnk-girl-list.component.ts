import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[] = [];

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Member[]>(`${environment.api_url}/bnk/members`)
        .subscribe(data => this.members = data);
    // .subscribe(function(data){this.members = data});
  }

}
