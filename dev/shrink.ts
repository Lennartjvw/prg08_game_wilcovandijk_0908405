class Shrink implements Behaviour {

    player: Player;
    private timer:number = 100;


    constructor(p: Player) {
        this.player = p;

    }

    update() {
        this.timer--;
        console.log(this.timer);
        document.getElementById("shrinkText").innerHTML = "Shrinking --- " + this.timer;
        if(this.timer < 1) {
        this.player.width -= 5;
        this.player.height -= 5;
        this.player.div.style.width = this.player.width + "px";
        this.player.div.style.height = this.player.height + "px";
        this.onMove();
        }
    }

    onShrink() {
        this.player.behaviour = new Shrink(this.player);
    }

    onMove() {
        document.getElementById("shrinkText").innerHTML = "Press space to shrink";

        this.player.behaviour = new Move(this.player);
    }

    onGrow() {
        this.player.behaviour = new Grow(this.player);
    }

}