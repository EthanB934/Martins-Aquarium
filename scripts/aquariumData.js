export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://th.bing.com/th/id/OIP.kfQpDUbqQpxDdHs4COHeIgHaF7?rs=1&pid=ImgDetMain"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://i.natgeofe.com/n/e7629970-7a7c-4980-abaa-e144307bd7cc/blue-tang-nationalgeographic_2175267.jpg"
        },
        {
            name: "Sammy",
            species: "Atlantic Salmon",
            length: 8,
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://th.bing.com/th/id/R.805ed3db6ce0a4d3bf10be0ea35045f5?rik=N9YFcAaMUX3r5g&riu=http%3a%2f%2fourmarinespecies.com%2fwp-content%2fuploads%2f2019%2f01%2fsalmon_2.jpg&ehk=2XVAA7K8sxJuxnNFzJS2e8r1%2fkY8h8YBJ4lrq0sxSzQ%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Trish",
            species: "Rainbow Trout",
            length: 1,
            location: "North American Rivers",
            diet: "Carnivore",
            image: "https://i.redd.it/s4ljw7thrw351.jpg" 
        },
        {
            name: "Cathy",
            species: "Catfish",
            length: 4,
            location: "Freshwater rivers and ponds",
            diet: "Omnivore",
            image: "https://1.bp.blogspot.com/-QvLgtSwmHU4/Wma3CGB15qI/AAAAAAAACkM/kkvit6619OMbUWNcKrErO0-IPau-VJv-gCLcBGAs/s1600/catfish.jpg"
        },
        {
            name: "Vanity",
            species: "Pufferfish",
            length: 6,
            location: "Tropical Ocean Waters",
            diet: "Omnivore",
            image: "https://i.natgeofe.com/k/b7a6ee44-f96f-434a-8606-6ae742f6ab23/pufferfish-inflated-closeup_square.jpg"
        },
        {
            name: "Courderoy",
            species: "Koi",
            length: 10,
            location: "Black Sea",
            diet: "Omnivore",
            image: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg"
        }
    ],
    tips: [
        {
            topic: "Cleanliness: ",
            text: "Whether in a pond or an aquarium, keep the water clean and free from debris. \n If in an aquarium, be sure to check water filtration regularly!"
        },
        {
            topic: "Water Temperature: ",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
        {
            topic: "Dieting: ",
            text: "There are various species of fish displayed, and each has a unique diet. The dieting information provided here is only general; more research is required for proper feeding."
        },
        {
            topic: "Compatibility: ",
            text: "If you love having fish as pets, be aware that some species of fish are highly aggressive towards others. Take the time to learn if the new fish you are purchasing will be in a friendly environment."
        },
        {
            topic: "Interaction: ",
            text: "Keep an eye on your fish! Many owners get a fish, and after a while, tend to forget about their fishy friends. Check up on them frequently and monitor their health!"
        },
        {
            topic: "And as always: ",
            text: "DON'T TOUCH THE GLASS!"
        }
    ],
    location: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
        },
        {
            name: "Atlantic Ocean",
            country: "International Waters",
            description: "The Atlantic Ocean is the dividing ocean between the East of the United States and the West of Europe. Atlantic Salmon has various subspecies depending on where it was caught."
        },
        {
            name: "North American Rivers",
            country: "North America",
            description: "North American rivers are home to many fish. The rainbow trout is featured on this page, and grow to have many beautifully colored scales."
        },
        {
            name: "Freshwater ponds",
            country: "North America",
            description: "Hosts of fish may be found in freshwater ponds. Individuals may even create these ponds for their pleasure. However, larger catfish have been found in such ponds, even near dams!"
        },
        {
            name: "Tropical Ocean Waters",
            country: "Pacific Ocean",
            description: "The Pacific Ocean divides the West of the United States and the East of China, and includes Oceania, a cluster of archipelagos. The pufferfish found in these waters are considered a delicacy in Japan because of the skill needed to prepare it."
        },
        {
            name: "Black Sea",
            country: "The Black Sea is located in the near East centered between Russia, Turkey, Romania, Bulgaria, and Ukraine. It is one home of the Koi fish.",
            description: "Although the Black Sea is mentioned on this page as the main area for koi fish, they also live in the Caspian and Aral seas. "
        }
    ]
}

export const getTips = () => {
    return database.tips.map(tip => ({...tip}))
}

export const getLocation = () => {
    return database.location.map(location => ({...location}))
}