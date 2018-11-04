export function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date(date);
  const month = monthNames[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function getMetafields(productId) {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  return fetch(`/api/products/${productId}/metafields.json`, fetchOptions)
    .then((response) => response.json())
    .then((json) => {
      const metafields = json.metafields.filter((metafield) => {
        return metafield.namespace === 'sousChef';
      });

      if (metafields.length > 0) {
        const ingredients = JSON.parse(metafields[0].value);
        return ingredients;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
