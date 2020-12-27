class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(220,10);
        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');
        input.position(200,100);
        button.position(250,150);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name)
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(220,100);
        });
    }
}