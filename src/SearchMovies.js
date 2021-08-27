import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import SearchResults from './SearchResults'

const SearchMovies = () => {
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([])

	const fetchMovies = async (e) => {
		e.preventDefault()

		const url = `https://api.themoviedb.org/3/search/movie?api_key=6eb55ad79a592f17a089ecf444f7670a&language=en-US&query=${query}&page=1&include_adult=false`

		try {
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		} catch (err) {
			console.log(err)
		}
	}

	const handleInput = (e) => {
		setQuery(e.target.value)
	}

	return (
		<div>
			<form className='form' onSubmit={fetchMovies}>
				<label htmlFor='query'>Search Movies</label>
				<input
					type='text'
					name='query'
					className='input'
					placeholder='Example: Super Man'
					value={query}
					onChange={handleInput}
					required={true}
				/>
				<div>
					<button type='submit' id='search-button'>
						Search
					</button>
					<Button href='/' id='back-button'>
						Go back
					</Button>
				</div>
			</form>
			<SearchResults movies={movies} key={movies.key} />
		</div>
	)
}

export default SearchMovies
