import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getMovie(movieId: number) {
    return new Movie(1, 'batman', 1);
  }
}
