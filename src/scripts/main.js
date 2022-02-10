import { fetchFlowers } from "./dataAccess.js"
import { FlowerShop } from "./FlowerShop.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchFlowers()
    .then(() => {
        mainContainer.innerHTML = FlowerShop()
    })
}

render()