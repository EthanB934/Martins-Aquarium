import { database } from './aquariumData.js'
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { findFish } from './locationList.js'
import { mostHolyFish } from './filtering.js'
import { soldierFish } from './filtering.js'
import { regularFish } from './filtering.js'

const fishListEl = document.getElementById("fishList")

const holyFish = mostHolyFish(database.fish)
const soldiers = soldierFish(database.fish)
const normalFish = regularFish(database.fish)

let fishHTML = fishList(holyFish)
fishListEl.innerHTML = fishHTML

fishHTML += fishList(soldiers)
fishListEl.innerHTML = fishHTML

fishHTML += fishList(normalFish)
fishListEl.innerHTML = fishHTML

const tipsHTML = tipList()
const locationHTML = findFish()

const tipsListEl = document.getElementById("tipList")
tipsListEl.innerHTML = tipsHTML

const locationEl = document.getElementById("locationList")
locationEl.innerHTML = locationHTML