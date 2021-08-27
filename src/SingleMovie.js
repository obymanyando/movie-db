import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const SingleMovie = ({ popularMovies }) => {
	const { id } = useParams()
	return (
		<div className='full-card'>
			<Container className='d-flex flex-column align-items-center w-50'>
				{popularMovies
					// eslint-disable-next-line
					.filter((movie) => movie.id == id)

					.map((movie) => (
						<div className='card_full_inner' key={movie.id}>
							<div className='movie-details'>
								<h2>Movie details</h2>
							</div>
							<div className='poster_full'>
								<img
									src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
									alt='poster'
								/>
							</div>
							<div className='content_full'>
								<h6>{movie.title}</h6>
								<p>Released: {movie.release_date}</p>
								<p>RATING: {movie.vote_average}</p>
								<div className='overview_full'>
									<br />

									<p>Overview:</p>
									<p>{movie.overview}</p>
								</div>
							</div>
						</div>
					))}
			</Container>
			<Button variant='info' href='/' className='btn'>
				⇦
			</Button>
		</div>
	)
}

export default SingleMovie
