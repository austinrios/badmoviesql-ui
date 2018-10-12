import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../model/Movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  movieItem: Movie;
  @Input()
  movieId: number;

  ngOnInit() {
   this.movieItem = this.apiService.getMovie(this.movieId);
  }

}
