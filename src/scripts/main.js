import { fetchDistributors, fetchFlowers, fetchRetailers } from "./dataAccess.js"
import { FlowerShop } from "./FlowerShop.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchFlowers()
        .then(() => fetchRetailers())
        .then(() => fetchDistributors())
        .then(() => {
            mainContainer.innerHTML = FlowerShop()
        })
}

render()

