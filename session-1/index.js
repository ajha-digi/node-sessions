const fs = require("fs");
const {parse} = require("csv-parse");

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === "CONFIRMED" 
        && planet['koi_insol'] > 0.36 
            && planet['koi_insol'] < 1.11
                && planet['koi_prad'] < 1.6
}

function renderPlanetName() {
    return habitablePlanets.map(planet => {
        return planet['kepler_name']
    })
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment:"#",
        columns: true
    }))
    .on('data', function(data){
        if(isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    }).on('error', function(error){
        console.log(error);
    })
    .on('end', function(){
        console.log(renderPlanetName());
        console.log(`${habitablePlanets.length}  habitable planets founds!`);
    })