const socket = io.connect();

(() => {

   $('#start-game').on('click', event => {
      console.log("clicked on start game ==============="+ document.URL);
      let game_id = document.URL.slice(document.URL.indexOf("=")+1);
      event.preventDefault();
      let user_info = {
         'gameid':game_id,
      }
         socket.emit('start game',user_info);
      });

    //Preston and Chris these are the calls to the server
    //We need to wrap these in to functions
    //I left some examples up above
    // socket.emit('get num players', data);
    // socket.emit('get player', data);
    // socket.emit('get player data', data);
    // socket.emit('get play result', data);
    // socket.emit('current discard top card', data);
    // socket.emit('get other player data', data);
    // socket.emit('get current player points' data);
    // socket.emit('get play', data);


    //These functions are the call backs that the
    //Server will call
    socket.on('start game response', data => {
      //Preston and Chris fill in here
      if(data.result) {
        let game_id = document.URL.slice(document.URL.indexOf("=")+1);
        console.log("========= GAME STARTED!!! ============");
        socket.emit('current discard top card', {gameid : game_id});
        socket.emit('get players name', {gameid : game_id});
        socket.emit('get player data', {gameid : game_id});
        socket.emit('get is it my turn', {gameid : game_id});
      }
      else {
        console.log("========= GAME FAILED TO START!!! ============");
      }
    });

    socket.on('get players name response', data =>{
      if(data.result) {
        console.log("========= HERE ARE PLAYERS IN THE GAME!!! ============");
        console.log(JSON.stringify(data.players_names));
      }
      else {
        console.log("========= COULD NOT GET PLAYERS ============");
      }
    });

    socket.on('get num players response', data => {
      //Preston and Chris fill in here
    });

    socket.on('get is it my turn response', data => {
      if(data.result) {
        if(data.myTurn) {
          console.log("========= MY TURN ============");
        }
        else {
          console.log("========= NOT MY TURN ============");
        }
      }
      else {
        console.log("========= COULD NOT GET PLAYERS TURN ============");
      }
    });

    socket.on('get player response', data => {
      //Preston and Chris fill in here
    });

    socket.on('get player data response', data => {
      //Preston and Chris fill in here
      if(data.result) {
        console.log("========= HERE IS MY INFO!!! ============");
        console.log(JSON.stringify(data.cardsToSend));
      }
      else {
        console.log("========= COULD NOT GET MY INFO!!! ============");
      }
    });

    socket.on('get play result response', data => {
      //Preston and Chris fill in here
    });

    socket.on('current discard top card response', data => {
      //Preston and Chris fill in here
      if(data.result) {
        console.log("========= GOT TOP CARD!!! ============");
        console.log("CARD ATTR ==> " + JSON.stringify(data.currentTopCard));
      }
      else {
        console.log("========= FAILED TO GET TOP CARD!!! ============");
      }
    });

    socket.on('get other player data response', data => {
      //Preston and Chris fill in here
    });

    socket.on('get current player points response', data => {
      //Preston and Chris fill in here
    });

    socket.on('get play response', data => {
      //Preston and Chris fill in here
    });


})();