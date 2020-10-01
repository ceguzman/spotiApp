import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  loading: boolean;
  errorAlerta: boolean;
  errorMensaje: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.errorAlerta = false;

    this.spotifyService.getNewRelease()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, errorServicio => {
        this.loading = false;
        this.errorAlerta = true;
        this.errorMensaje = errorServicio.error.error.message;
        console.log(errorServicio.error.error.message);
      });
  }

  ngOnInit(): void {
  }

}
