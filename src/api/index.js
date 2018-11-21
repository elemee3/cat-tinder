const BASE = process.env.API_KEY

let getCats = function () {
  return fetch(BASE + '/cats')
  .then((resp) => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

let getCat = function (id) {
  return fetch(BASE + '/cats/' + id)
  .then((resp) => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

let newCat = function (cat) {
  return fetch(BASE + '/cats', {
    body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
        "Content-Type": "application/json"
    },
    method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
  })
  .then(resp => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

let destroyCat = function (id) {
  return fetch(BASE + '/cats/' + id, {
    body: JSON.stringify(id),
    method: "DELETE"
  })
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

export {
  getCats, getCat, newCat, destroyCat
}
