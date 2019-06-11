import algoliasearch from "algoliasearch";
import { IEvent } from "../interfaces/events";
import { algoliaCreds } from "../config";

let client;
let index;

export async function searchClick(query): Promise<IEvent[]> {
  client = algoliasearch(algoliaCreds.client, algoliaCreds.key);
  index = client.initIndex("conferences");
  return index.search(query).then(result => {
    const hits = result.hits || [];
    return hits.map(hit => ({
      name: hit.name,
      dates: hit.start_date + " - " + hit.end_date,
      links:
        hit.links ||
        [].filter(link => link !== "").map(link => ({ url: link })),
      location: hit.location.city.eng + " (" + hit.location.country.eng + ")"
    }));
  });
}
