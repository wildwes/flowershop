const protea = {
    type: "Protea",
    color: "pink",
    stemLength:12,
    price: 15.99
}

const rose = {
    type: "Rose",
    color: "red",
    stemLength:12,
    price:7.00
}
const venusflytrap = {
    type: "venusflytrap",
    color: "green",
    stemLength:12,
    price:20.00
}
const pitcherplant = {
    type: "pitcherplant",
    color: "green",
    stemLength:12,
    price:15.00
}
const aloevera = {
    type: "aloevera",
    color: "green",
    stemLength:20,
    price:8.00
}
const dandylion = {
    type:"dandylion",
    color:"yellow",
    stemLength: 5,
    price: 2.50,

}

// array holds all flowers
const flowerCollection = []

// putting all flowers in array
flowerCollection.push(protea)
flowerCollection.push(rose)
flowerCollection.push(venusflytrap)
flowerCollection.push(pitcherplant)
flowerCollection.push(aloevera)
flowerCollection.push(dandylion)

const flowerShop = {
    name: "Nashville Software Flowers",
    mothersDay: [],
    vDay: [],
}
// function that takes a single flower and returns it as a html <li>
const bouquetHTMLRepresentation = (flowerplaceholder) => {
    return `<li>${flowerplaceholder}</li>`

}
// loop through all of our flowers
for (const singleFlowerobj of flowerCollection) {
    let html = bouquetHTMLRepresentation(singleFlowerobj)
    const mothersDayUL= document.querySelector(".mothersday")
    const vDayUL= document.querySelector(".vDay")

    // check to see if the flower's price is less than $5
    if (singleFlowerobj.price < 9){
        // check to see if flower meets requirement of mother's day bouquet
        // (yellow & < 6" stem)
        if (singleFlowerobj.color=== "yellow" && singleFlowerobj.stemLength <6) {
            console.log("mothers day flowers",singleFlowerobj) 
            // lets put our single flower into the mother's day array
            flowerShop.mothersDay.push(singleFlowerobj)

            mothersDayUL.innerHTML += html
        }
        // check to see if flowers meet VDay requirements(stem is more that 8" & color is pink or red)
        else if ((singleFlowerobj.color === "red" || singleFlowerobj.color === "pink") && singleFlowerobj.stemLength > 8) {
            console.log("valentines day flowers", singleFlowerobj)
            flowerShop.vDay.push(singleFlowerobj)
            
            vDayUL.innerHTML += html
        }
    }



}
