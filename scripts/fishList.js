
export const fishList = (fishes) => {
    // Generate an HTML representation of each fish
    let fishHtml = ""
    for (const fish of fishes) {
        fishHtml += `
        <div class="fish">
            <h2 class="fishSpecie">${fish.species}</h2>
            <img src="${fish.image}" alt="${fish.name}" class="fishPicture">
            <p class="text">They live in ${fish.location} and are a ${fish.diet}.</p>
        </div>            
    `

    }
    return fishHtml

};