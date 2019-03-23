import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articles = [
    {
      title: 'test1',
      content: 'hello'
    },
    {
      title: 'test2',
      content: 'hello world',
      age: 9
    }
  ];

  constructor(private http: HttpClient) {}

  search(articles: Article[], keyword: string): any {
    if (articles) {
      return articles.filter(article => article.title.indexOf(keyword) !== -1);
    }

    return [];
  }

  getArticles() {
    return this.http.get('http://localhost:4200/assets/api.json');
  }
}
