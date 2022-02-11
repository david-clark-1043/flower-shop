import { fetchDistributorNurseries, fetchDistributors, fetchFlowers, fetchNurseries, fetchNurseryFlowers, fetchRetailers } from "./dataAccess.js"
import { FlowerShop } from "./FlowerShop.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchFlowers()
        .then(() => fetchRetailers())
        .then(() => fetchDistributors())
        .then(() => fetchDistributorNurseries())
        .then(() => fetchNurseries())
        .then(() => fetchNurseryFlowers())
        .then(() => {
            mainContainer.innerHTML = FlowerShop()
        })
}

render()

