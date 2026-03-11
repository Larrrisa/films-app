import { getShows } from "@/api/api";

export default function ShowsPage() {

  const showsData = getShows(1 );

  return <div>ShowsPage</div>
}
