function keys_and_rooms() {
    var rooms = [[1,3],[3,0,1],[2],[0]];
    var room = {};
    if(rooms.length ==1 ) return console.log(true);
    for(var i=0;i<rooms.length;i++){
        
        if(room[i] != true)
        {
            if(i==0) room[i] = true;
            else room[i] = false;
        }
    }
    
    travel(rooms[0],room,rooms);
    console.log(room)
    for(var key in room){
      if(room[key] === false) return console.log(false);
    }
    return console.log(true);
      
};

function travel(currentRoom,room,rooms){
    
    for(var i=0;i<currentRoom.length;i++){
        var keys = currentRoom[i];
        //determine which which room i can visit
        if(room[keys] == false){
          room[keys] = true;
          travel(rooms[keys],room,rooms)  
        } 
        
    }
    
}

keys_and_rooms();