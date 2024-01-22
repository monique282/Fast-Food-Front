export default function handleSearchHome(
  query,
  setSearch,
  setSearchResults,
  setProductFiltered,
  setSelectedCategory,
  products
) {
  setSearch(query);
  const filteredResults = products.filter((product) => {
    const lowercaseQuery = query.toLowerCase();
    const lowercaseName = product.name.toLowerCase();
    const stringifiedId = String(product.id);
    return (
      lowercaseName.includes(lowercaseQuery) ||
      stringifiedId.includes(lowercaseQuery)
    );
  });

  setSearchResults(filteredResults);
  setProductFiltered(query.length > 0);
  setSelectedCategory();
};
