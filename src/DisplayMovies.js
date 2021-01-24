import React from 'react'

const DisplayMovies = ({ movie }) => {
	return (
		<div key={movie.id}>
			<div key={movie.id}>
				<h2>{movie.title}</h2>
			</div>
		</div>
	)
}

export default DisplayMovies
