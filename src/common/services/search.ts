import algoliasearch from 'algoliasearch';
import { IEvent } from '../interfaces/events';

// let query = ''; 
let event: IEvent;
let client;
let index;
let events: IEvent[];

export async function searchClick(query): Promise<IEvent[]> {
    events = [];

    client = algoliasearch('UFI1GERD33', '0f949363e44d09d51dd523165f9f36a0');
    index = client.initIndex('conferences');

    return index.search(query).then(result => {
        const hits = result.hits;

        hits.forEach((element) => {
            let links = element.links;
            let listOfLinks = '';
            let locationLinks = [];
            links.forEach((link) => {
                if (link !== '') {
                    listOfLinks += '<a>' + link + '</a>' + ', ';
                    locationLinks.push(listOfLinks);
                }
            });

            event = {
                name: element.name,
                dates: element.start_date + ' - ' + element.end_date,
                links: locationLinks,
                location: element.location.country.eng + ", " + element.location.city.eng
            }

            events.push(event);


        });
        return events;
    });

    // return events;
}
