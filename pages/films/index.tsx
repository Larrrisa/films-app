import { getFilms } from "@/api/api";

export default function FilmsPage() {

  const filmsData = getFilms(1 );

  return <div>FilmsPage</div>
}
