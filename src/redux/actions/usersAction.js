import axios from 'axios'

export const postSignUp = (body) => (dispatch) => {
	axios.post(`https://isengberhadiah.herokuapp.com/api/auth/register`, body).then((res) => {
		dispatch({
			type: 'POST_SIGNUP',
			payload: res.data.message,
		})
	})
}

export const postSignIn = (body) => (dispatch) => {
	axios.post(`https://isengberhadiah.herokuapp.com/api/auth/login`, body).then((res) => {
		dispatch({
			type: 'POST_SIGNIN',
			payload: res.data.token,
			token: localStorage.setItem('token', res.data.token),
		})
	})
}

// export const login = () => (dispatch) => {
// 	const fakeToken = 'ggfiuewvqlOQIEOV3GBJLQeOVUYF'
// 	Cookies.set('token', { expires: 7 })
// 	dispatch({ type: 'SIGN_IN', payload: { token: fakeToken } })
// }

export const setDataToken = () => (dispatch) => {
	dispatch({
		type: 'SET_TOKEN',
		payload: localStorage.getItem('token'),
	})
}
