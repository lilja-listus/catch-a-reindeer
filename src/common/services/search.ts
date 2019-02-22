import algoliasearch from 'algoliasearch';

// let query = ''; 
let events = [];
export function searchClick(query) {

    let client = algoliasearch('UFI1GERD33', '0f949363e44d09d51dd523165f9f36a0');
    let index = client.initIndex('conferences');

    index.search(query).then(result => {
        const hits = result.hits;
        hits.forEach((element) => {
            let name = element.name;
            let dates = element.start_date + ' - ' + element.end_date;
            let links = element.links;
            let listOfLinks = '';

            links.forEach((link) => {
                if (link !== '') {
                    listOfLinks += '<a>' + link + '</a>' + ', ';
                }
            });

            let location = element.location.country.eng + ", " + element.location.city.eng;
            let event = name +
                " (" + dates + ") " +
                " learn more at: " + listOfLinks +
                "location: " + location;

            events.push(event);
        });
    });

    return events;
}
