import algoliasearch from 'algoliasearch';
import { IEvent } from '../interfaces/events';

let client;
let index;

export async function searchClick(query): Promise<IEvent[]> {
    client = algoliasearch('UFI1GERD33', '0f949363e44d09d51dd523165f9f36a0');
    index = client.initIndex('conferences');

    return index.search(query)
        .then(result => {
            const hits = result.hits || [];
            return hits.map((hit => ({
                name: hit.name,
                dates: hit.start_date + ' - ' + hit.end_date,
                links: hit.links || []
                    .filter(link => link !== '')
                    .map((link) => ({ url: link })),
                location: hit.location.city.eng + " (" + hit.location.country.eng + ")"
            })));

        });
}
