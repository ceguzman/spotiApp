import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAm-7-GV6Rtmpr8e8wUe7BOSc-UMc7x1WYdLkIMRqYdmUbOE2CThzmtcqE23WHmJiCYp0CxYnlk70TohMk'
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
