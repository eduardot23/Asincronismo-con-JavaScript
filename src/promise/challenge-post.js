import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1"

function postData(urlAPI, data){
    const response = fetch(urlAPI, {
        method: "POST",
        mode: "cors",
        credencials: "same-origin",
        headers: {
            "Conten-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "Product",
    "price": 9990,
    "description": "descripcion",
    "categoryId": 1,
    "imagenes": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => console.log(response.json()))
    .then(dato => console.log(data))