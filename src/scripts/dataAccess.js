const applicationState = {
    // should get
        // flowers: []
        // 
}

const API = "http://localhost:8088"

// fetch functions

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
        .then(response => response.json())
        .then(
            (flowers) => {
                // Store the external state in application state
                applicationState.flowers = flowers
            }
        )
}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
        .then(response => response.json())
        .then(
            (retailers) => {
                // Store the external state in application state
                applicationState.retailers = retailers
            }
        )
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
        .then(response => response.json())
        .then(
            (distributors) => {
                // Store the external state in application state
                applicationState.distributors = distributors
            }
        )
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
        .then(response => response.json())
        .then(
            (nurseries) => {
                // Store the external state in application state
                applicationState.nurseries = nurseries
            }
        )
}
export const fetchNurseryFlowers = () => {
    return fetch(`${API}/nurseryFlowers`)
        .then(response => response.json())
        .then(
            (nurseryFlowers) => {
                // Store the external state in application state
                applicationState.nurseryFlowers = nurseryFlowers
            }
        )
}
export const fetchDistributorNurseries = () => {
    return fetch(`${API}/distributorNurseries`)
        .then(response => response.json())
        .then(
            (distributorNurseries) => {
                // Store the external state in application state
                applicationState.distributorNurseries = distributorNurseries
            }
        )
}



// get functions

export const getFlowers = () => {
    return applicationState.flowers.map(flower => ({...flower}))
}
export const getRetailers = () => {
    return applicationState.retailers.map(retailer => ({...retailer}))
}
export const getDistributors = () => {
    return applicationState.distributors.map(distributor => ({...distributor}))
}
export const getNurseries = () => {
    return applicationState.nurseries.map(nursery => ({...nursery}))
}
export const getNurseryFlowers = () => {
    return applicationState.nurseryFlowers.map(nurseryFlower => ({...nurseryFlower}))
}
export const getDistributorNurseries = () => {
    return applicationState.distributorNurseries.map(distributorNursery => ({...distributorNursery}))
}
