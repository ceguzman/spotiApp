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
      Authorization: 'Bearer BQACLvU1z9J3oMYM_lt3TNrnQnIUMBJUV1mS5E2ChNuM8e15u3L6kGT5MZyLJeUVzkCIlJE9PKG1hWr1cz8'
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
}
