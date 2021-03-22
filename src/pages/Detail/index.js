import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Jumbotron, Button, Spinner } from 'reactstrap'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import { getMovieDetails, getTrailer } from '../../redux/actions/movie'
import { IMG_SRC } from '../../API/index'
import Characters from './Tab/Characters'
import Review from './Tab/Review'
import Overview from './Tab/Overview'
import ReactStars from 'react-rating-stars-component'
import '../../Styles/Tab.css'
function Detail(props) {
	const { id } = useParams()
	useEffect(() => {
		props.getMovieDetails(id)
		props.getTrailer(id)
	}, [props.getMovieDetails, props.getTrailer])
	return (
		<div>
			<Container className='jumbotron'>
				{!props.movieDetail ? (
					<Spinner />
				) : (
					<>
						<Jumbotron
							style={{
								backgroundImage: `url('${IMG_SRC}${props.movieDetail.backdrop_path}')`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								color: 'white',
							}}
							className='my-4'>
							<div>
								<h1> {props.movieDetail.title} </h1>
								<div className='ratings d-flex'>
									<div className='mr-3'>
										<ReactStars size={18} value={props.movieDetail.vote_average / 2} edit={false} isHalf={true} />
									</div>
									<div>
										{props.movieDetail.vote_count}
										vote
									</div>
								</div>
								<p className='short-synopsis my-3'>{props.movieDetail.tagline}</p>
								<div>
									{/* <Link to={{ pathname: `https://www.youtube.com/watch?v=${props.trailer.key}` }} target='_blank'> */}
									<Button className='mr-3' color='primary'>
										Watch trailer
									</Button>
									{/* </Link> */}
									<Button color='primary' outline>
										Add to Watchlist
									</Button>
								</div>
							</div>
						</Jumbotron>
						<div className='nav-container'>
							<ul className='nav nav-pills'>
								<li className='nav-item'>
									<a className='nav-link' href={`/detail/${props.movieDetail.id}`} exact>
										Overview
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href={`/detail/${props.movieDetail.id}/review`}>
										Review
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link ' href={`/detail/${props.movieDetail.id}/characters`}>
										Characters
									</a>
								</li>
							</ul>
						</div>
						<Switch>
							<Route path='/detail/:id/review' exact component={Review} />
							<Route path='/detail/:id/characters' exact component={Characters} />
							<Route path='/detail/:id' exact component={() => <Overview movieDetail={props.movieDetail} />} />
						</Switch>
					</>
				)}
			</Container>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		movieDetail: state.movie.movieDetail,
		trailer: state.movie.trailer,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getMovieDetails: (id) => dispatch(getMovieDetails(id)),
		getTrailer: (id) => dispatch(getTrailer(id)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
