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
                            ${retailerInfo(retailer)}`    
                
        // get distributor retailer sources from
        const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        // add distributor to html
        retailerHTML += `<div class="distributor name">Distributor: ${distributor.name} - Available Flowers:</div>`
    
        // get nurseryFlower pairs distributor buys
        const matchedDistributorNurseries = distributorNurseries.filter(distributorNursery => distributorNursery.distributorId === distributor.id)
        
        const matchedNurseryFlowers = matchedDistributorNurseries.map(distributorNursery => {
            const match = nurseryFlowers.find(nurseryFlower => nurseryFlower.id === distributorNursery.nurseryFlowerId)
            return match
        })

        retailerHTML += "<ul class='sourceList'>"
        retailerHTML += matchedNurseryFlowers.map(nurseryFlower => {
            // get flower of nursery flower pair
            const flower = flowers.find(flower => nurseryFlower.flowerId === flower.id)
            // get nursery of nurseryFlower pairs
            const nursery = nurseries.find(nursery => nurseryFlower.nurseryId === nursery.id)
            return `<li class="nurseryFlower">${flower.color} ${flower.commonName} from ${nursery.name}</li>`
        }).join("")

        retailerHTML += "</ul></li>"


        return retailerHTML
    }).join("")



    // close list
    html += '</ul>'

    return html
}

const retailerInfo = (retailer) => {
    return `<div class="retailer name">${retailer.name}</div>
    <div class="retailer address">${retailer.address}</div>
    <div class="retailer address">${retailer.city} ${retailer.state}</div>`    
}