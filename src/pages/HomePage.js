import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getMovies, getGenres, getMoviesByGenreId, searchMovie, getTrailer } from '../redux/actions/movie'
import { sliderData } from '../components/karosel'
import { Container, Button } from 'reactstrap'
import '../Styles/Homepage.css'
import Carrosell from '../components/Carousel'

const imgSrc = 'https://image.tmdb.org/t/p/w500'

function HomePage(props) {
	const [page, setPage] = useState(1)
	const [genreId, setGenreId] = useState(0)
	const [search, setSearch] = useState('')

	useEffect(() => {
		props.getMovies()
		props.getGenres()
	}, [props.getMovies])

	const handleChangePage = (pg) => {
		setPage(pg)

		props.getMovies(pg)
	}
	const handleGetMovieByGenre = (id) => {
		setGenreId(id)
		props.getMoviesByGenreId(id)
	}

	const handleSearchChange = (e) => {
		setSearch(e.target.value)
		props.searchMovie({ query: e.target.value })
	}

	const { foundMovie } = props

	return (
		<div className='content-container'>
			<Carrosell slides={sliderData} />
			<div className='my-3'>
				<Button
					color={genreId === 0 ? 'primary' : 'light'}
					className='mr-2 mt-2'
					onClick={() => {
						setGenreId(0)
						props.getMovies()
					}}>
					All
				</Button>
				{props.genres && props.genres.length !== 0
					? props.genres.map((genre, index) => (
							<Button color={genreId === genre.id ? 'primary' : 'light'} className='mr-2 mt-2' key={index} onClick={() => handleGetMovieByGenre(genre.id)}>
								{genre.name}
							</Button>
					  ))
					: ''}
			</div>

			<div className='searchMovies'>
				<input className='searchMovies-box' type='text' placeholder='search......' onChange={handleSearchChange}></input>
			</div>

			<Container fluid className='mt-5'>
				{foundMovie.length === 0 ? (
					<div className='movies-list'>
						{props.movies && props.movies.length !== 0
							? props.movies.map((movie, index) => (
									<div onClick={() => props.history.push(`/detail/${movie.id}`)} className='movie-item' key={index}>
										<img src={`${imgSrc}${movie.poster_path}`} alt={movie.name} />
										<h4>{movie.title}</h4>
										<p>{movie.release_date}</p>
									</div>
							  ))
							: ''}
					</div>
				) : (
					<div className='movies-list'>
						{foundMovie.map((movie, index) => (
							<div onClick={() => props.history.push(`/detail/${movie.id}`)} className='movie-item' key={index}>
								<img src={`${imgSrc}${movie.poster_path}`} alt={movie.name} />
								<h4>{movie.title}</h4>
								<p>{movie.release_date}</p>
							</div>
						))}
					</div>
				)}
				<div className='home-pagination my-4 d-flex justify-content-center'>
					{page !== 1 && (
						<Button onClick={() => handleChangePage(page - 1)} color='link' className='rounded-circle mr-2'>
							Previous
						</Button>
					)}
					<Button
						onClick={() => {
							foundMovie.length === 0 ? handleChangePage(1) : searchMovie({ query: search, page: 1 })
						}}
						color={page === 1 ? 'primary' : 'light'}
						className='rounded-circle mr-2'>
						1
					</Button>
					<Button
						onClick={() => {
							foundMovie.length === 0 ? handleChangePage(2) : searchMovie({ query: search, page: 2 })
						}}
						color={page === 2 ? 'primary' : 'light'}
						className='rounded-circle mr-2'>
						2
					</Button>
					<Button
						onClick={() => {
							foundMovie.length === 0 ? handleChangePage(3) : searchMovie({ query: search, page: 3 })
						}}
						color={page === 3 ? 'primary' : 'light'}
						className='rounded-circle mr-2'>
						3
					</Button>
					<Button
						onClick={() => {
							foundMovie.length === 0 ? handleChangePage(4) : searchMovie({ query: search, page: 4 })
						}}
						color={page === 4 ? 'primary' : 'light'}
						className='rounded-circle mr-2'>
						4
					</Button>
					<Button
						onClick={() => {
							foundMovie.length === 0 ? handleChangePage(5) : searchMovie({ query: search, page: 5 })
						}}
						color={page === 5 ? 'primary' : 'light'}
						className='rounded-circle mr-2'>
						5
					</Button>
					<Button onClick={() => handleChangePage(page + 1)} color='link' className='rounded-circle mr-2'>
						Next
					</Button>
				</div>
			</Container>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		movies: state.movie.movies,
		genres: state.movie.genres,
		input: state.movie.title,
		foundMovie: state.movie.foundMovie,
	}
}

export default connect(mapStateToProps, { getMovies, getGenres, getMoviesByGenreId, searchMovie })(HomePage)
