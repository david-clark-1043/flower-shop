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

// get functions

export const getFlowers = () => {
    return applicationState.flowers.map(flower => ({...flower}))
}