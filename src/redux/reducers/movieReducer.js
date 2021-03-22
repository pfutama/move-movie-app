const initialState = {
	movies: [],
	foundMovie: [],
	movieDetail: null,
	cast: [],
	trailer: null,
	genres: [],
	reviews: null,
}

const movieReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'GET_MOVIES':
			return {
				...state,
				movies: payload,
			}
		case 'GET_MOVIE_DETAIL':
			return {
				...state,
				movieDetail: payload,
			}
		case 'GET_TRAILER':
			return {
				...state,
				trailer: [payload, ...state.trailer],
			}
		case 'GET_GENRES':
			return {
				...state,
				genres: payload,
			}
		case 'SEARCH_MOVIE':
			return {
				...state,
				foundMovie: payload,
			}
		case 'GET_REVIEWS_BY_MOVIE_ID':
			return {
				...state,
				reviews: payload,
			}
		case 'POST_REVIEWS_BY_MOVIE_ID':
			return {
				...state,
				reviews: [payload, ...state.reviews],
			}
		case 'GET_MOVIES_BY_GENRE_ID':
			return {
				...state,
				movies: payload,
			}
		case 'GET_CAST':
			return {
				...state,
				cast: payload,
			}
		default:
			return { ...state }
	}
}

export default movieReducer
