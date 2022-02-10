import { FlowerList } from "./FlowerList.js"
import { RetailerList } from "./RetailerList.js"

// function that gets all html and puts it together
export const FlowerShop = () => {
    let html = ""

    // add list of flowers
    html += `<section class="flowers List">
                ${FlowerList()}
            </section>`
            
    // add list of retailers
    html += `<section class="retailers List">
                ${RetailerList()}
            </section>`

    return html
}