import { getDistributors } from "./dataAccess.js"


// function that makes list of distributors
export const DistributorList = () => {
    const distributors = getDistributors()
    // initialize list string
    let html = `<ul>
                    <h2>Distributors</h2>`
    // map the distributor objects to list element strings and add to list
    html += distributors.map(distributor => {
        return `<li id="distributor--${distributor.id}">
                    <div class="distributor name">${distributor.name}</div>
                    <div class="distributor address_line1">${distributor.address}</div>
                    <div class="distributor address_line2">${distributor.city} ${distributor.state}</div>    
                </li>`
    }).join("")

    // close list
    html += '</ul>'

    return html
}