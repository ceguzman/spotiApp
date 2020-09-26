import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewRelease(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDL8gXJE0MpMH0MnlZJr1eDC8ElUdQl8PoHn-DIOHnrPzJHHEuR20hwRoX45KWwaxRPUdEBLzy2iXSsSlc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDL8gXJE0MpMH0MnlZJr1eDC8ElUdQl8PoHn-DIOHnrPzJHHEuR20hwRoX45KWwaxRPUdEBLzy2iXSsSlc'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map((data: any) => data.artists.items));
  }
}
