export type PagedResult<T> = {
    page: number;
    pageSize: number;
    pageCount: number;
    rowCount: number;
    results: T[];
};