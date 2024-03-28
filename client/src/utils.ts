// ex: formatParams({ some_key: "some_value", a: "b"}) => "some_key=some_value&a=b"
function formatParams(params: Record<string, string>) {
    // iterate of all the keys of params as an array,
    // map it to a new array of URL string encoded key,value pairs
    // join all the url params using an ampersand (&).
    return Object.keys(params)
        .map((key) => key + "=" + encodeURIComponent(params[key]))
        .join("&");
}

// convert a fetch result to a JSON object with error handling for fetch and json errors
// TODO: get rid of any? no
function convertToJSON(res: any) {
    if (!res.ok) {
        throw `API request failed with response status ${res.status} and text: ${res.statusText}`;
    }

    return res
        .clone() // clone so that the original is still readable for debugging
        .json() // start converting to JSON object
        .catch((error: string) => {
            // throw an error containing the text that couldn't be converted to JSON
            return res.text().then((text: string) => {
                throw `API request's result could not be converted to a JSON object: \n${text}`;
            });
        });
}

// Helper code to make a get request. Default parameter of empty JSON Object for params.
// Returns a Promise to a JSON Object.
export function get(endpoint: string, params = {}) {
    const fullPath = endpoint + "?" + formatParams(params);
    return fetch(fullPath)
        .then(convertToJSON)
        .catch((error) => {
            // give a useful error message
            throw `GET request to ${fullPath} failed with error:\n${error}`;
        });
}

// Helper code to make a post request. Default parameter of empty JSON Object for params.
// Returns a Promise to a JSON Object.
export function post(endpoint: string, params = {}) {
    return fetch(endpoint, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(params),
    })
        .then(convertToJSON) // convert result to JSON object
        .catch((error) => {
            // give a useful error message
            throw `POST request to ${endpoint} failed with error:\n${error}`;
        });
}