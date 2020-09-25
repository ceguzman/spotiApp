import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewRelease(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDZRuAL-P_JK0Me_zvQXG00VWklxNFTT8aX_vdYx8FtUB-FY5oD6MjNHS9Qgume7fNxHApm93JIAvwkC00'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
