import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Feed, FeedItem } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  feed: Feed;
  feedItem: FeedItem [];
  id: string;
  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('instagramId');
    this.bnk.instagram(this.id).subscribe(data => {
      this.feed = data;
      this.feedItem = this.feed.feeds;
    });
  }

}
