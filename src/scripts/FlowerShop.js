import { FlowerList } from "./FlowerList.js"

// function that gets all html and puts it together
export const FlowerShop = () => {
    let html = ""

    // add list of flowers
    html += `<section class="flowerList">
                ${FlowerList()}
            </section>`

    return html
}