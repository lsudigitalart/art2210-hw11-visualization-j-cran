let routeNum, routeName

function preload(){
    busRoutes = loadTable("Bus_Route_20251127.csv", "header")
}

function setup(){
    createCanvas(1000,600);
 
}
function draw(){
    background(200,180,130);

    if(mouseIsPressed){
        for (let i = 0; i < busRoutes.getRowCount(); i++) {
            routeNum = busRoutes.getString(i, 'Route Number');
            routeName = busRoutes.getString(i,'ROUTE NAME',);

            let y = 30 + i * 30;
            textSize(24)
            textFont("courier new")
            text(routeNum, 10,y);
            text(routeName,60,y);
            } 
    } else{
        textSize(24)
        textFont('courier new')
        text("Hold the mouse show available routes.",10,30)
    }   

}