const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    const country = countries.find(country => country.iso3 === isoCode);
    return country;
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const country = countries.find(country => country.iso3 === isoCode)
    return newCountry = {
        name: country.name,
        iso3: country.iso3,
        iso2: country.iso2,
        phone_code: country.phone_code,
        capital: country.capital,
        currency: country.currency,
        tld: country.tld,
        region: country.region,
        emoji: country.emoji
    }
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();