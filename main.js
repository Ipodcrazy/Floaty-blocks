// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let block1 = {
    x: 100,
    y: 200,
    w: 100,
    h: 10,
    xspeed: randomDec(-5, 5),
    color: 'orange'
};

let block2 = {
    x: 300,
    y: 300,
    w: 75,
    h: 10,
    xspeed: randomDec(-5, 5),
    color: 'purple'
};

let block3 = {
    x: 500,
    y: 500,
    w: 120,
    h: 10,
    xspeed: randomDec(-5, 5),
    color: 'green'
};

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE

    // Update block - move and bounce horizontally
    updateblock(block1);
    updateblock(block2);
    updateblock(block3);

    // DRAW
    
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw block 1
    drawblock(block1);
    drawblock(block2);
    drawblock(block3);
    
    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

function updateblock(ablock) {
    ablock.x += ablock.xspeed;
    if (ablock.x + ablock.w > cnv.width || ablock.x < 0) {
        ablock.xspeed = -ablock.xspeed;
    }
}

function drawblock(ablock) {
    ctx.fillStyle = ablock.color;
    ctx.fillRect(ablock.x, ablock.y, ablock.w, ablock.h);
}
