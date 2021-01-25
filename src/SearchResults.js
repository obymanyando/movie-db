import React from 'react'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const SearchMovies = ({ movies }) => {
	return (
		<div key={movies.id}>
			<Container>
				<Row>
					{movies.map((movie) => {
						return (
							<Col key={movie.id} x={4} className='mb-4'>
								<Card
									className='h-100 align-items-center mt-3'
									style={{ width: '18rem' }}>
									<Card.Img
										variant='top'
										src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
									/>
									<Card.Body className='d-flex flex-column align-items-center'>
										<Card.Title>{movie.title}</Card.Title>
										<p>
											<small>RELEASE DATE: {movie.release_date}</small>
										</p>
										<Card.Text>{movie.overview}</Card.Text>
										{/* <Button variant='primary'>Go somewhere</Button> */}
									</Card.Body>
								</Card>
							</Col>
						)
					})}
				</Row>
			</Container>
		</div>
	)
}

export default SearchMovies
