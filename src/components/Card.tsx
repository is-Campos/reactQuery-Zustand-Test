import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

export const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = (id: number) => {
    if (isFavorite) {
      removeFavoriteRepo(id);
      return;
    }

    addFavoriteRepo(id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button
        onClick={() => {
          toggleFavorite(repository.id);
        }}
      >
        {isFavorite ? "dislike" : "like"}
      </button>
    </div>
  );
};
