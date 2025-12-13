let routeNum, routeName, routeHeight
let i = 0
var showRoutes = false

function preload(){
    busRoutes = loadTable("Bus_Route_20251127.csv", "header");
    geoData = loadJSON("Bus_Route_20251201.geojson");
}

function setup(){
    createCanvas(1000,600);
    textSize(24);
    textFont('courier new')
    fill(0);

    print(geoData);  // figuring out how to get length
    console.log(geoData.features[0].geometry.coordinates[0][0][0])
 
}

function draw(){
    background(200,180,130);
    text('Baton Rouge CATS Bus Routes', width-400,30)
    print(i);
    
    if(key === "g"){
        routesList();
    } else {
        text('Press G to show routes',10,30)
    }
}

function keyPressed() {
    if(key == "g") {
        i++;
    }
       if(i === 19){
        i = 0
    }
}

function routesList(){
        routeNum = busRoutes.getString(i, 'Route Number');
        routeName = busRoutes.getString(i,'ROUTE NAME');
        geo = busRoutes.getString(i,'GEOMETRY');
        let y = 60 + i * 10;
        routeHeight = geo.length/100; // takes number of characters in geometry section of csv, turns into bar height

        // print("height:", routeHeight)
        // print("length:",geo.length)
        // text(geoData,10,50);  trying to show lat/long
        // text(geo,10,80)


        text(routeNum,20,y);  // print routes
        text(routeName,60,y);

        push();  // route length bar
        noStroke();
        fill(200,100,70);
        rect(880,50,80,routeHeight);
        pop();


}