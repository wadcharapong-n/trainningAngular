import { Component, OnInit, Input } from '@angular/core';
import { Feed, FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram-member',
  templateUrl: './instagram-member.component.html',
  styleUrls: ['./instagram-member.component.css']
})
export class InstagramMemberComponent implements OnInit {

  @Input() feedItem: FeedItem;
  constructor() { }

  ngOnInit() {
  }

}
