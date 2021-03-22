import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../../Styles/Characters.css'
import { getCast } from '../../../redux/actions/movie'
import { connect } from 'react-redux'
const imgSrc = 'https://image.tmdb.org/t/p/w500'

function Characters(props) {
	const { id } = useParams()
	useEffect(() => {
		props.getCast(id)
	}, [props.getCast, id])

	return (
		<div className='actor'>
			{props.casts && props.casts.length !== 0
				? props.casts.map((cast, index) => (
						<div className='actor-item' key={index}>
							<hr></hr>
							<img src={`${imgSrc}${cast.profile_path}`} alt={cast.original_name} /> <h4> {cast.original_name} </h4>
						</div>
				  ))
				: ''}
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		casts: state.movie.cast,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCast: (id) => dispatch(getCast(id)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Characters)
