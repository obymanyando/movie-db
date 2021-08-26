// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { Container, Row, Col } from 'react-bootstrap'

// const PopularMovies = ({ popularMovies }) => {
// 	return (
// 		<div>
// 			<div className='popular-title'>
// 				<h2>Popular Movies Right Now</h2>
// 			</div>

// 			<Container style={{ border: '1px solid #999' }}>
// 				<Row className='d-flex justify-content-center w-40'>
// 					{popularMovies.map((movie) => {
// 						return (
// 							<Col key={movie.id} md='auto' className='d-flex mb-4'>
// 								<Card
// 									className='align-items-center mt-3'
// 									style={{ width: '32rem' }}>
// 									<Card.Img
// 										variant='top'
// 										src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
// 									/>
// 									<Card.Body className='d-flex flex-column align-items-center'>
// 										<Card.Title>{movie.title}</Card.Title>
// 										<p>
// 											<small>RELEASE DATE: {movie.release_date}</small>
// 										</p>
// 										<p>
// 											<small>RATING: {movie.vote_average}</small>
// 										</p>

// 										<Card.Text>{movie.overview}</Card.Text>
// 										{/* <Button variant='primary'>Go somewhere</Button> */}
// 									</Card.Body>
// 								</Card>
// 							</Col>
// 						)
// 					})}
// 				</Row>
// 			</Container>
// 		</div>
// 	)
// }

// export default PopularMovies
