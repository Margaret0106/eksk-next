const getFormData = object => Object.keys(object).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(object[key]);
  }).join('&');


export default getFormData
