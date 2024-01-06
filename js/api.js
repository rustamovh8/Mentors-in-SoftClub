import getData from "./dom.js";


let api = "http://localhost:3000/data"
let search = document.querySelector(".search")

search.oninput = async () =>{
    try {
        const {data}= await axios.get(`${api}?q=${search.value}`)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

async function getUser(){
    try {
        const {data} = await axios.get(api)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}


export default getUser