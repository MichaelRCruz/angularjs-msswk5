export default function filterCategories() {
  return function(applets, query, catObject) {
    if (query) {
      let filteredObject = {};
      for (const category in catObject) {
        const found = applets.some(el => catObject[category].includes(el));
        if (found) {
          filteredObject[category] = catObject[category];
        }
      }
      return filteredObject;
    } else {
      return catObject;
    }
  };
}