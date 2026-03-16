import { getFilms } from "@/api/api";

export default async function FilmsPage() {

  const filmsData = await getFilms(1);

  return <div>FilmsPage</div>
}
