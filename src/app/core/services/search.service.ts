import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';


export interface ISearchResultItem {
  answer_count: number;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
}

@Injectable()
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: HttpClient) {

  }

  search(keyword: string): Observable<any> {
    return this.http.get(SearchService.apiUrl + keyword).pipe(
      map((res: HttpResponse<any>) => {
        const data = res.body;
        console.log(`API USAGE: ${data.quota_remaining} of ${data.quota_max} requests available`);
        return data;
      }),
      catchError((err: HttpErrorResponse) => of({error: err.message}))
    )
  }


}
