import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    activatedRoute.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string): any {
    this.loading = true;
    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loading = false;
      });
  }

  getTopTracks(cancion: string): any {
    this.spotifyService.getTopTracks(cancion)
      .subscribe(tracks => {
        console.log(tracks);
        this.topTracks = tracks;
      });
  }

}
