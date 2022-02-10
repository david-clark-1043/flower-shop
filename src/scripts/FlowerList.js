import { getFlowers } from "./dataAccess.js"


// function that makes list of flowers
export const FlowerList = () => {
    const flowers = getFlowers()
    // initialize list string
    let html = `<ul>
                    <h2>Flowers</h2>`
    // map the flower objects to list element strings and add to list
    html += flowers.map(flower => {
        return `<li id="flower--${flower.id}">${flower.color} ${flower.commonName}</li>`
    }).join("")

    // close list
    html += '</ul>'

    return html
}