export namespace ISearchInput {
  export enum SearchType {
    RESTAURANT,
    CITY,
    MEAL,
  }

  export interface FilteredSearchItem {
    name: string,
    type: SearchType,
  }

}