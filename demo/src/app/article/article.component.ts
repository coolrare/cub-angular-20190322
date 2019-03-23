import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { DataService } from '../data.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [DataService]
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    // this.article = 3;
  }

  ngOnInit() {}
}
