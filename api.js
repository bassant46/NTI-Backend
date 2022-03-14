const create = (el)=> {
    const p = document.createElement("p")
    p.textContent = el
    document.body.appendChild(p)
}

const getAPI = async (link, callback) => {
    try {
        let data = await fetch(link)
        create(data)
        let json = await data.json()
        callback(json)
    }

    catch(e) {
        callback(e.message)
    }
}

getAPI("https://jsonplaceholder.typicode.com/todos/1", (resp)=> console.log(resp))

