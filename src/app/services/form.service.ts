import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserData {
  name: string;
  phone: string;
  agreed: boolean;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://not-real-server/posts';

  constructor(private http: HttpClient) {}

  submit(data: UserData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, data, { responseType: 'json' });
  }
}
