# Description

www.catchareindeer.com is a platform for Finno-ugrists to provide them with tools for searching for the events for students and activists.

The special characters page contains characters that are often needed in research.

The project is written on React using Algolia search service.

## Algolia search

Create file `common/config.ts` and pass in the variables you get from Algolia service instead of empty strings:

```
export const algoliaCreds = {
  client: "",
  key: ""
};
```
