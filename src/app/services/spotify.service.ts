import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDL8gXJE0MpMH0MnlZJr1eDC8ElUdQl8PoHn-DIOHnrPzJHHEuR20hwRoX45KWwaxRPUdEBLzy2iXSsSlc'
    });

    return this.http.get(url, {headers});
  }

  getNewRelease(): any {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
