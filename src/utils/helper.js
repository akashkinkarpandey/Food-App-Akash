export function filterData(searchText,restaurants)
{
    return restaurants?.filter((restaurants)=>restaurants?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
}