import React from 'react'
import PopularMovies from './PopularMovies.js'

const Home = ({ popularMovies }) => {
	return (
		<div>
			<PopularMovies popularMovies={popularMovies} />
		</div>
	)
}

export default Home
