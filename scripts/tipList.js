import { getTips } from "./aquariumData.js";

const fishCare = getTips()

export const tipList = () => {
    let tipHtml = "<ul class='tips'>"
    
    for (const tip of fishCare) {
        tipHtml += `<li class='tip'><strong>${tip.topic}</strong>${tip.text}</li>`
    }
    
    tipHtml += "</ul>"

    return tipHtml
}
