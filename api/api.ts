const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  "Content-Type": "application/json",
};

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { headers });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const getFilm = (movie_id: number) =>
  apiFetch(`/movie/${movie_id}`);

export const getFilms = (page: number) =>
  apiFetch(`/movie/popular?page=${page}`);

export const getShows = (page: number) =>
  apiFetch(`/tv/popular?page=${page}`);

export const getTrendingFilms = () =>
  apiFetch(`/trending/movie/day`);

export const getByKeyword = (keyword: string) =>
  apiFetch(`/search/multi?query=${encodeURIComponent(keyword)}`);
