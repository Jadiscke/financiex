enum FilterOperations {
  EQUAL = 'EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
  CONTAINS = 'CONTAINS',
}

export type Query = {
  filters: {
    [key: string]: {
      operation: FilterOperations;
      value: string;
    };
  },
  sorters: {
    [key: string]: 'ASC'|'DESC';
  },
  pagination: {
    skip: number | undefined;
    limit: number | undefined;
  }

}