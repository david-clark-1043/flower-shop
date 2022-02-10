import { getDistributorNurseries, getDistributors, getFlowers, getNurseries, getNurseryFlowers, getRetailers } from "./dataAccess.js"


// function that makes list of retailers
export const RetailerList = () => {
    const retailers = getRetailers()
    const distributors = getDistributors()
    const distributorNurseries = getDistributorNurseries()
    const flowers = getFlowers()
    const nurseries = getNurseries()
    const nurseryFlowers = getNurseryFlowers()

    // initialize list string
    let html = `<ul>
                    <h2>Retailers</h2>`
    // map the retailer objects to list element strings and add to list
    html += retailers.map(retailer => {
        let retailerHTML = `<li id="retailer--${retailer.id}">
                    <div class="retailer name">${retailer.name}</div>
                    <div class="retailer address_line1">${retailer.address}</div>
                    <div class="retailer address_line2">${retailer.city} ${retailer.state}</div>`    
                
        // get distributor retailer sources from
        const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        // add distributor to html
        retailerHTML += `<div class="distributor name">Distributor: ${distributor.name}</div>`
    
        // get nurseries distributor buys from
        const matchedDistributorNurseries = distributorNurseries.filter(distributorNursery => distributorNursery.distributorId === distributor.id)
        const matchedNurseries = matchedDistributorNurseries.map(pair => {
            const nursery = nurseries.find(nursery => nursery.id === pair.nurseryId)
            return `<div class="nursery name">Source nursery: ${nursery.name}</div>`
        }).join("")

        // add list of nurseries to html
        retailerHTML += matchedNurseries

        // get flowers distributor buys
        

        // add flowers available at retailer based on flowers from distributor
    }).join("")



    // close list
    html += '</ul>'

    return html
}