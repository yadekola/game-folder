let GameManger = {
    setGameStart: function(clasType) {
        this.resetPlayer(clasType);
        this.setPrefight();
    },
    resetPlayer: function(clasType) {
        switch (clasType) {

            case "warrior":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;

            case "Rogue":
            player = new Player(classType, 100, 0, 100, 150, 200);
            break;

            case "Mage":
            player = new Player(classType, 80, 0, 50, 200, 50);
            break;

            case "Hunter":
            player = new Player(classType, 200, 0, 50, 200, 100);
            break;
            
        }

        let getInterface = document.querySelector(".interface");
        grtInterface.innerHTML = '<img src="img/avatar-player/' + classType.tolowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3<p class="health-player">Healh: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p><div>';

    },
    setProfight: function() {
        let getHeader = document.querySelector(".header");
        let grtActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.computedStyleMap.visibility = "visible";
    },
    setProfight: function() {
        let getHeader = document.querySelector(".header");
        let grtActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        // Create enemy!
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
                
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>'
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.tolowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}