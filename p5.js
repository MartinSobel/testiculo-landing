let scroll, scrollPercent;
let windowHeight = window.innerHeight;

window.addEventListener("scroll", (event) => {
    scroll = this.scrollY;
    scrollPercent = scroll / windowHeight;
    let pos = scrollPercent * 20
    console.log(pos);
    
});

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    // background(0);
    fill(255);
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        ellipse(x, y, 10, 10);
        if(i < 50) {
            fill(0);
        }
    }
}