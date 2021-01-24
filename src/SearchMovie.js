import React, { useState } from 'react'
import DisplayMovies from './DisplayMovies'

const SearchMovie = () => {
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([])

	const fetchMovies = async (e) => {
		e.preventDefault()

		const url = `https://api.themoviedb.org/3/search/movie?api_key=6eb55ad79a592f17a089ecf444f7670a&language=en-US&query=${query}&page=1&include_adult=false`

		try {
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
			console.log(movies)
		} catch (err) {
			console.log(err)
		}
	}

	const handleInput = (e) => {
		setQuery(e.target.value)
		console.log(query)
	}

	return (
		<div>
			<form className='form' onSubmit={fetchMovies}>
				<label htmlFor='query' className='label'>
					Movie Name
				</label>
				<input
					type='text'
					name='query'
					className='input'
					placeholder='i.e. Iron Man'
					value={query}
					onChange={handleInput}
				/>
				<button type='submit' className='btn'>
					Search
				</button>
			</form>
			{movies.map((movie) => {
				return <DisplayMovies movie={movie} />
			})}
		</div>
	)
}

export default SearchMovie
