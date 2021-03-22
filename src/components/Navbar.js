import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postSignUp, postSignIn } from '../redux/actions/usersAction'
import '../Styles/Navbar.css'
import _ from 'lodash'
import jwt_decode from 'jwt-decode'
import Modal from 'react-modal'
import movE from '../Assets/movE.png'

export const MODAL_LOGIN = 1
export const MODAL_SIGNUP = 2

function Navbarr() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [whichModal, setWhichModal] = useState(null)
	const [userData, setUserData] = useState({
		username: '',
		email: '',
		password: '',
	})

	const [userSignIn, setUserSignIn] = useState({
		username: '',
		password: '',
		token: '',
	})

	const { signup, signIn, jwtToken } = useSelector((state) => state.users)
	console.log('response signup', signup)
	console.log(userData)

	const dispatch = useDispatch()

	const token = localStorage.getItem('token')
	let decoded
	if (token && !_.isEmpty(token)) decoded = jwt_decode(token)

	return (
		<Fragment>
			<div className='navbar-container'>
				<a href='/'>
					<img className='logoE' src={movE} alt='movE' />
				</a>
				<div className='signin-button'>
					{decoded ? (
						<div>
							<div className='username'>{decoded.username}</div>
							<button
								className='signout-button'
								onClick={() => {
									localStorage.removeItem('token')
									window.open('/', '_self')
								}}>
								SIGN OUT
							</button>
						</div>
					) : (
						<button
							className='signin-button'
							onClick={() => {
								setIsModalOpen(true)
								setWhichModal(MODAL_SIGNUP)
							}}>
							Register
						</button>
					)}
				</div>
				<div>
					<Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className='modal-container' overlayClassName='modal-overlay-center' contentLabel='Sign in'>
						{renderWhichModal()}
					</Modal>
				</div>
			</div>
		</Fragment>
	)

	function renderWhichModal() {
		const handleLogin = (event) => {
			event.preventDefault()
			setWhichModal(false)
		}

		const handleChange = (event) => {
			setUserData({
				...userData,
				[event.target.name]: event.target.value,
			})
		}

		const handleSignIn = (event) => {
			setUserSignIn({
				...userSignIn,
				[event.target.name]: event.target.value,
			})
		}

		const submitSignUp = (event) => {
			event.preventDefault()
			const body = {
				username: userData.name,
				email: userData.email,
				password: userData.password,
			}

			dispatch(postSignUp(body))
		}

		const submitSignIn = (event) => {
			event.preventDefault()
			const body = {
				email: userSignIn.email,
				password: userSignIn.password,
			}

			dispatch(postSignIn(body))
		}

		switch (whichModal) {
			case MODAL_LOGIN:
				return (
					<div className='home-signup'>
						<img className='movE' src={movE} alt='movE' />
						<form className='home-signup-form' onSubmit={handleLogin}>
							<div>email</div>
							<input className='form-input' type='email' name='email' onChange={(event) => handleSignIn(event)} />

							<div>Password</div>
							<input className='form-input' type='password' name='password' onChange={(event) => handleSignIn(event)} />

							<button className='home-signup-form-submit' type='submit' onClick={submitSignIn}>
								Login
							</button>
						</form>

						<h2 className='home-signup-redirect'>
							Haven't create an account yet?
							<span className='clickToLogin' onClick={() => setWhichModal(MODAL_SIGNUP)}>
								&nbsp;Register Here
							</span>
						</h2>
					</div>
				)
			case MODAL_SIGNUP:
				return (
					<div>
						<div className='home-signup'>
							<img className='movE' src={movE} alt='movE' />
							<form className='home-signup-form' onSubmit={handleLogin}>
								<div>Full Name</div>
								<input className='form-input' type='text' name='name' onChange={(event) => handleChange(event)} />

								<div>Email</div>
								<input className='form-input' type='email' name='email' onChange={(event) => handleChange(event)} />

								<div>Password</div>
								<input className='form-input' type='password' name='password' onChange={(event) => handleChange(event)} />

								<button className='home-signup-form-submit' type='submit' onClick={submitSignUp}>
									Sign up
								</button>
							</form>
							<h2 className='home-signup-redirect'>
								Already have an account?
								<span className='clickToLogin' onClick={() => setWhichModal(MODAL_LOGIN)}>
									&nbsp;Login here
								</span>
							</h2>
						</div>
					</div>
				)
			default:
				break
		}
	}
}

export default Navbarr
