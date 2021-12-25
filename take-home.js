const gardenGrid = []
const x = 10
const y = 10

//construct garden
function generateGardenGrid(x, y) {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < x; j++) {
        gardenGrid.push({coordinateX: i, coordinateY: j, watered: false})
      }
    }
}
//fill garden
generateGardenGrid(x, y)


//create function to randomly generate raindrop coordinates
function waterGarden(days){

  //array to contain the number of watered squares (all squares === 100)
  const wateredGrid = gardenGrid.filter(el => el.watered===true)// []

  //generate random x, y coordinates for rain
  const rainX = Math.floor(Math.random() * x); // 3
  const rainY = Math.floor(Math.random() * y); // 3


  //select corresponding garden square & indicate watered
  for (let i = 0; i < gardenGrid.length; i++) {
    if (gardenGrid[i].coordinateX === (rainX) && gardenGrid[i].coordinateY === (rainY)) {
         gardenGrid[i].watered = true
    } 
  }
  
  //conditional with base case where all 100 plants are watered;
  //else, run function again and add another day (assuming one day per square watered) until the wateredGrid length is 100
  if (wateredGrid.length >= 100) { 
    return `It took ${days} days to water all the plants.`
  } else {
    return waterGarden(days + 1)
  }
}