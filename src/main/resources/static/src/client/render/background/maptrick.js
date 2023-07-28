const Constants = require('../../../shared/constants');
const { MAP_SIZE } = Constants;

function maptrick(a, b) {
    // a : 플레이어 기준 
    // b : 오브젝트
    let realx = b.x;
    let realy = b.y;

    if(a.x >= MAP_SIZE/2 && a.y >= MAP_SIZE/2){
        if(b.x >= MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            //같은 박스 안에 있음
        }else if(b.x >= MAP_SIZE/2 && b.y < MAP_SIZE/2){
            if(a.y >= (MAP_SIZE /2 + MAP_SIZE/4)){
                realy = MAP_SIZE + b.y;
            }
        }else if(b.x < MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.x >= (MAP_SIZE /2 + MAP_SIZE/4)){
                realx = MAP_SIZE + b.x;
            }     
        }else{
            if(a.x >= (MAP_SIZE /2 + MAP_SIZE /4)&& a.y >= (MAP_SIZE/2 + MAP_SIZE/4)){
                realx = MAP_SIZE + b.x;
                realy = MAP_SIZE + b.y;
            }else if(a.x < (MAP_SIZE /2 + MAP_SIZE /4)&& a.y >= (MAP_SIZE/2 + MAP_SIZE/4)){
                realy = MAP_SIZE + b.y;
            }else if(a.x >= (MAP_SIZE /2 + MAP_SIZE /4)&& a.y < (MAP_SIZE/2 + MAP_SIZE/4)){
                realx = MAP_SIZE + b.x;
            }else{
                // 위치를 바꿀 필요가 없음
            }
        }
    }
    else if(a.x < MAP_SIZE/2 && a.y >= MAP_SIZE/2){
        if(b.x >= MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.x < MAP_SIZE/4){
                realx = b.x - MAP_SIZE;
            }
        }else if(b.x >= MAP_SIZE/2 && b.y < MAP_SIZE/2){
            if(a.x >= MAP_SIZE / 4 && a.y >= (MAP_SIZE / 2 + MAP_SIZE/4)){
                realy = MAP_SIZE + b.y;
            }else if(a.x < MAP_SIZE /4 && a.y >= (MAP_SIZE/2 + MAP_SIZE/4)){
                realx = b.x - MAP_SIZE;
                realy = MAP_SIZE + b.y;
            }else if(a.x >= MAP_SIZE /4 && a.y < (MAP_SIZE/2 + MAP_SIZE/4)){
                // 위치를 바꿀 필요가 없음
            }else{
                realx = b.x - MAP_SIZE;
            }
        }else if(b.x < MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            //같은 박스 안에 있음
        }else{
            if(a.y > (MAP_SIZE/2 + MAP_SIZE/4)){
                realy = MAP_SIZE + b.y;
            }
        }
    }
    else if (a.x >= MAP_SIZE/2 && a.y < MAP_SIZE/2){
        if(b.x >= MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.y < MAP_SIZE /4){
                realy = b.y - MAP_SIZE;
            }
        }else if(b.x >= MAP_SIZE/2 && b.y < MAP_SIZE/2){
            //같은 박스 안에 있음
        }else if(b.x < MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.x >= (MAP_SIZE /2 + MAP_SIZE /4)&& a.y >= MAP_SIZE/4){
                realx = MAP_SIZE + b.x;
            }else if(a.x < (MAP_SIZE /2 + MAP_SIZE /4)&& a.y >= MAP_SIZE/4){
                // 위치를 바꿀 필요가 없음
            }else if(a.x >= (MAP_SIZE /2 + MAP_SIZE /4)&& a.y < MAP_SIZE/4){
                realx = MAP_SIZE + b.x;
                realy = b.y - MAP_SIZE;
            }else{
                realy = b.y - MAP_SIZE;
            }            
        }else{
            if(a.x > (MAP_SIZE /2 + MAP_SIZE /4)){
                realx = MAP_SIZE + b.x;
            }
        }
    }
    else{
        if(b.x >= MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.x >= MAP_SIZE /4 && a.y >= MAP_SIZE/4){
                // 위치를 바꿀 필요가 없음
            }else if(a.x < MAP_SIZE /4 && a.y >= MAP_SIZE/4){
                realx = b.x - MAP_SIZE;
            }else if(a.x >= MAP_SIZE /4 && a.y < MAP_SIZE/4){
                realy = b.y - MAP_SIZE;
            }else{
                realx = b.x - MAP_SIZE;
                realy = b.y - MAP_SIZE;
            }
        }else if(b.x >= MAP_SIZE/2 && b.y < MAP_SIZE/2){
            if(a.x < MAP_SIZE/4){
                realx = b.x - MAP_SIZE;
            }
        }else if(b.x < MAP_SIZE/2 && b.y >= MAP_SIZE/2){
            if(a.y < MAP_SIZE/4){
                realy = b.y - MAP_SIZE;   
            }                 
        }else{
            // 같은 박스 안에 있음
        }
    }

    return {
        rx : realx,
        ry : realy,
    };
}

export default maptrick;