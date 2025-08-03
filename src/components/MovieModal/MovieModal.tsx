import css from "./MovieModal.module.css"
import type Movie from "../../types/movie"
import { createPortal } from "react-dom";

interface MovieModalProps {
    onClose: () => void;
    movie: Movie;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  
  const {backdrop_path, title, overview, release_date, vote_average } = movie;

  return createPortal(
      <div className={css.backdrop} role="dialog" aria-modal="true">
  <div className={css.modal}>
    <button className={css.closeButton} onClick={onClose} aria-label="Close modal">
      &times;
    </button>
    <img
      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      alt={title}
      className={css.image}
    />
    <div className={css.content}>
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>
            <strong>Release Date:</strong> { release_date }
      </p>
      <p>
        <strong>Rating:</strong> {vote_average}/10
      </p>
    </div>
  </div>
</div>,
    document.body
    )   
}