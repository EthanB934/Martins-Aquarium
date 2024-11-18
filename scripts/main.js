import { database } from './aquariumData.js'
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { findFish } from './locationList.js'


const fishHTML = fishList(database.fish)
const tipsHTML = tipList()
const locationHTML = findFish()

const fishListEl = document.getElementById("fishList")
fishListEl.innerHTML = fishHTML

const tipsListEl = document.getElementById("tipList")
tipsListEl.innerHTML = tipsHTML

const locationEl = document.getElementById("locationList")
locationEl.innerHTML = locationHTML