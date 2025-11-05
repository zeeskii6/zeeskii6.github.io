$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
  
createPlatform(300,600,100,10,"green");
createPlatform(200,700,100,10);
createPlatform(400,500,100,10,"purple");
createPlatform(500,400,100,10);
createPlatform(600,400,100,10);
createPlatform(700,500,100,10,"green");
createPlatform(200,700,100,10,"pink");
createPlatform(800,400,100,10,"blue");
createPlatform(900,700,100,10,"orange");
createPlatform(400,900,100,10);
createPlatform(200,500,100,10);
createPlatform(100,400,100,10);
createPlatform(300,200,100,10);
createPlatform(200,300,100,10);
createPlatform(100,400,100,10);
createPlatform(400,100,100,10);
createPlatform(100,400,100,10);













    // TODO 3 - Create Collectables
    createCollectable("max",350,550,0.5,0.7);
    createCollectable("max",750,460,0.5,0.7);
    createCollectable("max",100,40,0.5,0.7);
    createCollectable("max",480,195,0.5,0.7);



    
    // TODO 4 - Create Cannons
    createCannon("left",300,2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
