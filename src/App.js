import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import SearchMovies from './SearchMovies'
import { useEffect, useState } from 'react'
// import NavBar from './Nav'
import SingleMovie from './SingleMovie'
import Home from './Home'

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
		<Router>
			<div className='App'>
				{/* <NavBar /> */}
				<h2 className='title'>
					<a href='/'>{`Oby's Movie DB`.toUpperCase()}</a>
				</h2>

				<SearchMovies />
				{/* <PopularMovies popularMovies={popularMovies} key={popularMovies.id} /> */}
				<Switch>
					<Route exact path='/'>
						<Home popularMovies={popularMovies} />
					</Route>
					<Route exact path='/popularMovies/:id'>
						<SingleMovie popularMovies={popularMovies} />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
