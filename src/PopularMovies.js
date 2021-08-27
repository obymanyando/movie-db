import React from 'react'
// import SearchMovies from './SearchResults'

const PopularMovies = ({ popularMovies }) => {
	return (
		<div>
			<div className='popular-title'>
				<h2>Popular Movies Right Now</h2>
			</div>

			<div className='movie-list'>
				{popularMovies.map((movie) => {
					return (
						<div className='card' key={movie.id}>
							<div className='poster'>
								<img
									src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
									alt='poster'
								/>
							</div>
							<div className='content'>
								<h6>{movie.title}</h6>
								<p>Released: {movie.release_date}</p>
								<p>RATING: {movie.vote_average}</p>
								<div className='overview'>
									<br />

									<p>Overview:</p>
									<p>{movie.overview}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PopularMovies
