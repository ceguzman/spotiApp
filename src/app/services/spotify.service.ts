import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  release: any = {};

  constructor(private http: HttpClient) {
  }

  getNewRelease(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDYB4Ju_EMG9D1usQBAFnDGEyPnPaxfttCgFAcpPBweS4M26DCcKIHQ92JbQ1kwcRH_Ug_JIDZcKi4nlhQ'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(value => {
        console.log(value);
      });
  }
}
