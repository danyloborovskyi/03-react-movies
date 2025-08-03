import css from "./MovieGrid.module.css"
import type Movie from "../../types/movie"


interface MovieGridProps {
    onSelect: (id:number) => void;
    movies: Movie[];
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
    return (
        <ul className={css.grid}>
            {movies.map(({ poster_path, title, id}) => 
            (
    <li key={id} onClick={() => onSelect(id)}>
    <div className={css.card}>
      <img 
		    className={css.image} 
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
		    alt={title} 
		    loading="lazy" 
		  />
	    <h2 className={css.title}>{title}</h2>
    </div>
  </li>
  ))
  
        }
</ul>
    )
}