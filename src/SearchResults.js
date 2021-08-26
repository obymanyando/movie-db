import React from 'react'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const SearchMovies = ({ movies }) => {
	return (
		<div>
			<div className='search-results'>
				<h6>Your search results...</h6>
			</div>

			<div className='movie-list'>
				{movies.map((movie) => {
					return (
						<div className='box' key={movie.id}>
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
								{/* <div className='overview'><p>{movie.overview}</p></div> */}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SearchMovies

// <div key={movies.id}>
// 			<Container>
// 				<Row>
// 					{movies.map((movie) => {
// 						return (
// 							<Col key={movie.id} x={4} className='mb-4'>
// 								<Card
// 									className='h-100 align-items-center mt-3'
// 									style={{ width: '18rem' }}>
// 									<Card.Img
// 										variant='top'
// 										src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
// 									/>
// 									<Card.Body className='d-flex flex-column align-items-center'>
// 										<Card.Title>{movie.title}</Card.Title>
// 										<p>
// 											<small>RELEASE DATE: {movie.release_date}</small>
// 										</p>
// 										<Card.Text>{movie.overview}</Card.Text>
// 									</Card.Body>
// 								</Card>
// 							</Col>
// 						)
// 					})}
// 				</Row>
// 			</Container>
// 		</div>
