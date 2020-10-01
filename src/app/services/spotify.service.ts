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
      Authorization: 'Bearer BQDt2Fv8Es1ZDV598l5e_UBdPPPLvjBh0s3ybltdCXlkif_lpItalJax2JnDjpA9tbuTrQ01tsRaZpu1j5U'
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

  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(cancion: string): any {
    return this.getQuery(`artists/${cancion}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }
}
