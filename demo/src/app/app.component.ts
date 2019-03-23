import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello world';
  subtitle = '記載著 Will 在網路世界的學習心得與<u>技術分享</u>';
  url = 'https://blog.miniasp.com/';
  titleLeft = true;

  defaultKeyword = 'angular';
  keyword = '';

  // articles = [
  //   {
  //     title: 'test1',
  //     content: 'hello'
  //   },
  //   {
  //     title: 'test2',
  //     content: 'hello world',
  //     age: 9
  //   }
  // ];

  // articles = this.dataService.articles;
  articles: Article[];
  originalArticles = this.dataService.articles;

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('http://localhost:4200/assets/api.json').subscribe((data: Article[]) => {
    //   // console.log(data);
    //   this.articles = data;
    // });

    this.dataService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

  search(e: MouseEvent) {
    if (e.altKey) {
      this.title = this.title + '!';
    }
    console.log(e.altKey);
  }

  keywordInput(e: KeyboardEvent) {
    this.keyword = (e.target as HTMLInputElement).value;
  }

  searchKeyword() {
    console.log(this.keyword);
  }

  searchArticle(keyword) {
    this.keyword = keyword;
    this.title = this.title + '!';
    // console.log(keyword);
    // this.articles = this.originalArticles
    //   .filter(article => article.title.indexOf(keyword) !== -1);
  }
}

// ---- 模擬的 Angular 行為 ----

// const component = new HeaderComponent();

// // 檢查是否需要 service
// if(hasService) {
//   // const service = new DataService();
//   const service = new FakeService();
//   component.dataService = service;
// }
// component.ngOnInit();

// while(true) {
//   // 變更偵測
//   const newHeaderTitle = 'test2';
//   const chnage = true;
//   if(change) {
//     component.headerTitle = newHeaderTitle;
//     component.ngOnChanges({...});
//   }
// }
