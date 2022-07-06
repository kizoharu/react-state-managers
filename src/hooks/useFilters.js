import { useMemo } from "react"

export const useSortedItems = (items, sort) => {
  const sortedPosts = useMemo(() => {
    if(sort === 'completed') {
      return [...items].sort((a, b) => b[sort]-a[sort])
    } else if (sort === 'title') {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return items
  }, [sort, items])

  return sortedPosts
}

export const useFilters = (items, sort, query) => {
  const sortedItems = useSortedItems(items, sort)
  const sortedAndSearchedItems = useMemo(() => {
    return sortedItems.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, sort, items])

  return sortedAndSearchedItems;
}