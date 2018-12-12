import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../../services/movie-api.service';
import { Favorite } from 'src/app/models/favorite';
import { MovieAPI } from 'src/app/models/MovieAPI';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  public favArray = [];
  public favMovieArray = [];
  public tempMovie: MovieAPI;

  constructor(
    public movieService: MovieAPIService
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.movieService.getFavorites(1).subscribe(
      (favorite) => {
        for(let i = 0; i < favorite.length; i++) {
          this.favArray.push(favorite[i].movieId);
        }
        this.getFavMovies();
      }
    );
  }

  getFavMovies() {
    let num;
    if (this.favArray.length > 12) {
      num=12;
    }
    else {
      num=this.favArray.length;
    }
    for (let i = 0; i < num; i++) {
      this.movieService.getMovie(this.favArray[i]).subscribe(
        (movie) =>  {
                      this.tempMovie = movie;
                      this.tempMovie.poster_path = this.movieService.formatPosterImage(this.tempMovie.poster_path);
                      this.favMovieArray.push(movie);
        });
    }
  }

}
