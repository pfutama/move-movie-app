import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getReviewsByMovieId, postReview } from '../../../redux/actions/movie'
import { useParams } from 'react-router-dom'
import { Button, Row, Col, FormGroup, Input } from 'reactstrap'
import ReactStars from 'react-rating-stars-component'
const imgSrc = 'https://image.tmdb.org/t/p/w500'
// import '../../../Styles/Review.css'

function Review(props) {
	const { id } = useParams()
	const [review, setReview] = useState({
		author: 'Chonky',
		author_details: {
			avatar_path: '/https://static.boredpanda.com/blog/wp-content/uploads/2019/10/cinderblock-fat-cat-workout-fb.png',
		},
		content: '',
	})
	useEffect(() => {
		props.getReviewsByMovieId(id)
	}, [props.getReviewsByMovieId, id])
	useEffect(() => {
		console.log(props.reviews)
	}, [props])

	const renderImg = (img) => {
		let rendered = 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'

		if (img) {
			if (img.substring(1, 5) === 'http') {
				rendered = img.substring(1)
			} else {
				rendered = `${imgSrc}${img}`
			}
		}

		return rendered
	}

	const handleSubmit = () => {
		props.postReview(review)
	}
	return (
		<div className='movie-reviews'>
			<hr></hr>
			<Row>
				<Col md={2}>
					<img
						style={{
							width: '100px',
							height: '100px',
							objectFit: 'cover',
							borderRadius: '50%',
						}}
						src={renderImg(review.author_details.avatar_path)}
						alt='cat'
					/>
				</Col>
				<Col>
					<div class='author'>
						<h4 className='mb-0'> {review.author} </h4>
					</div>
					<div class='author-rating mb-1'>
						<ReactStars size={20} edit={true} isHalf={true} />
					</div>
					<div class='author-review'>
						<FormGroup>
							<Input type='textarea' onChange={(e) => setReview({ ...review, content: e.target.value })} value={review.content} />
						</FormGroup>
						<Button onClick={handleSubmit} color='primary'>
							Submit Review
						</Button>
					</div>
				</Col>
			</Row>
			{props.reviews &&
				props.reviews.map((review, index) => (
					<Row className='mt-4' key={index}>
						<Col md={2}>
							<img
								style={{
									width: '100px',
									height: '100px',
									objectFit: 'cover',
									borderRadius: '50%',
								}}
								src={renderImg(review.author_details.avatar_path)}
								alt='cat'
							/>
						</Col>
						<Col>
							<div class='author'>
								<h4> {review.author} </h4>
							</div>
							<div class='author-review'>
								<p> {review.content.slice(0, 500)}... </p>
							</div>
						</Col>
					</Row>
				))}
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		reviews: state.movie.reviews,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		postReview: (data) => dispatch(postReview(data)),
		getReviewsByMovieId: (movieId) => dispatch(getReviewsByMovieId(movieId)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Review)
