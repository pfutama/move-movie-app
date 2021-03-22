export default function NotFound({ history }) {
	return (
		<div>
			<div>
				<h1>404</h1>
				<h2>Umm hey, You're lost!</h2>
				<h3>The page you are looking for does not exist. You can click the button below to go back to the homepage.</h3>
			</div>
			<br></br>
			<br />
			<button onClick={() => history.push('/')}>Go to Home</button>
			<br />
			<br />
		</div>
	)
}
