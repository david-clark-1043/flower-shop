import { getRetailers } from "./dataAccess.js"


// function that makes list of retailers
export const RetailerList = () => {
    const retailers = getRetailers()
    // initialize list string
    let html = `<ul>
                    retailers`
    // map the retailer objects to list element strings and add to list
    html += retailers.map(retailer => {
        return `<li id="retailer--${retailer.id}">
                    <div class="retailer name">${retailer.name}</div>
                    <div class="retailer address_line1">${retailer.address}</div>
                    <div class="retailer address_line2">${retailer.city} ${retailer.state}</div>    
                </li>`
    }).join("")

    // close list
    html += '</ul>'

    return html
}