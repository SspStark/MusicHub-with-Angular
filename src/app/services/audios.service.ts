import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Audio } from '../interfaces/audio';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudiosService {
  private audioFetchingUrl = 'https://musichub-backend-2e5p.onrender.com/audio'

  constructor(private http:HttpClient) { }

  getHomePageSongs():Observable<Audio[]>{
    return this.http.get<Audio[]>(this.audioFetchingUrl).pipe(
      catchError(error =>{
        console.error("Error fetching home page songs", error);
        return throwError(()=>new Error("Failed to fetch home page songs"));
      })
    );
  }
}
