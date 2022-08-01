// Code your solution in this file!
function distanceFromHqInBlocks(pickLoc){
    const scuber = 42;
    let distance;
    if (scuber < pickLoc){
        return  distance = pickLoc - scuber;
    }else {
        return  distance = scuber - pickLoc;
    }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264 ;
    
}

function distanceTravelledInFeet(start,destination){
    if(start < destination){
        return (destination - start)*264;
    }else {
        return (start - destination)* 264;
    }
}
function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start,destination)<= 400){
        return distanceTravelledInFeet(start,destination)*0;
    }else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) <= 2000){
        return (distanceTravelledInFeet(start,destination) - 400 ) * 0.02 ;
    }else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination)< 2500){
        return 25;
    }else {
        return "cannot travel that far"
    }
        

}  