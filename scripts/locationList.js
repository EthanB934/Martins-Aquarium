import { getLocation } from "./aquariumData.js";

const underWaterAddresses = getLocation()

export const findFish = () => {
    let locationHtml = "<section class='locations'>"

    for (const address of underWaterAddresses) {
        locationHtml += `
        <div class='location'>
        <h2>${address.name}</h2>
        ${address.country}
        ${address.description}
        </div>
        `
    }

    locationHtml += "</section>"

    return locationHtml
}

