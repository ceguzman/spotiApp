import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    console.log(termino);
    this.spotifyService.getArtistas(termino)
      .subscribe((data: any) => {
        console.log(data.artists.items);
        this.artistas = data.artists.items;
      });
  }

}
