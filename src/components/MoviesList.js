import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
	<ul>
		{Object.keys(movies).map((id) => (
			<li key={id}>
				<Link to={`/movies/${id}`}>{movies[id].title}</Link>
			</li>))}
	</ul>
  	
	)
}
