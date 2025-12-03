let routeNum, routeName
let i = 0
let time = 0
var showRoutes = false

function preload(){
    busRoutes = loadTable("Bus_Route_20251127.csv", "header")
}

function setup(){
    createCanvas(1000,600);
    textSize(24);
    textFont('courier new')
 
}

function draw(){
    background(200,180,130);
       text('Baton Rouge CATS Bus Routes', width-400,30)

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
}

function routesList(){
    // time += 0.1
    // if(time > 1){
        // for (let i = 0; i < busRoutes.getRowCount(); i += 1){
        routeNum = busRoutes.getString(i, 'Route Number');
        routeName = busRoutes.getString(i,'ROUTE NAME');
        geo = busRoutes.getString(i,'GEOMETRY');


        // 

        let y = 100 + i * 10;
        // let y = 30;

        text(routeNum, 20,y);
        text(routeName,60,y);
        text(geo,10,70);


        // } 
    // }

}