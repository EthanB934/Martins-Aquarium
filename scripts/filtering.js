import {database} from "./aquariumData.js"

const fishes = database.fish

export const mostHolyFish = () => {
    const holyFishes = []
    for (const fish of fishes) {
        if(fish.length % 3 === 0) {
            holyFishes.push(fish)
        }
    } return holyFishes
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishes) {
        if(fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    } return soldiers
}

export const regularFish = () => {
    const normalFish = []
    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            normalFish.push(fish)
        }
    } return normalFish
}