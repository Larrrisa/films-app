import { getShows } from "@/api/api";

export default async function ShowsPage() {

  const showsData = await getShows(1 );

  return <div>ShowsPage</div>
}
