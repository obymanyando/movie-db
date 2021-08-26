import './App.css'
import SearchMovies from './SearchMovies'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

import PopularMovies from './PopularMovies'

const App = () => {
	const [popularMovies, setPopularMovies] = useState([])

	const url =
		'https://api.themoviedb.org/3/movie/popular?api_key=6eb55ad79a592f17a089ecf444f7670a&language=en-US&page=1'

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setPopularMovies(data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div className='App'>
			<h2 className='title'>{`Oby's Movie DB`.toUpperCase()}</h2>
			<SearchMovies />
			<PopularMovies popularMovies={popularMovies} key={popularMovies.id} />
		</div>
	)
}

export default App
