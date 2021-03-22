import React, { Fragment } from 'react'
import '../../../Styles/Overview.css'

export default function Overview(props) {
	return (
		<Fragment>
			<hr></hr>
			<div className='movie-synopsis'>
				<h2> Synopsis </h2>
				<p> {props.movieDetail.overview} </p>
			</div>
			<hr></hr>
			<div className='movie-info'>
				<h3> Movie Information </h3>
				<div className='movie-info-detail'></div>
				<p>
					Original Title: <span>{props.movieDetail.original_title}</span>
				</p>
				<p>
					Release date: <span>{props.movieDetail.release_date}</span>
				</p>
				<p>
					Movie runtime: <span>{props.movieDetail.runtime}</span>
				</p>
				<p>
					Production cost: <span>{props.movieDetail.budget}</span>
				</p>
				<p>
					Revenue: <span>{props.movieDetail.revenue}</span>
				</p>
			</div>
		</Fragment>
	)
}
