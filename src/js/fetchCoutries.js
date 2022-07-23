function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/name/';
    return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
        .then(response => response.json())
        .catch(error => console.log(error));

};
export { fetchCountries };
