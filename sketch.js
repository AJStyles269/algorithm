ar mObj, fObj; 
function setup()
 {
    createCanvas(600,400);
     mObj=createSprite(500,200,100,40); 
     fObj=createSprite(200,200,40,100);
      mObj.shapeColor="green";
       fObj.shapeColor="green";
        mObj.debug=true; 
        fObj.debug=true; 
      }
         function draw() 
         {
            background("black"); 
            mObj.x=mouseX;
             mObj.y=mouseY; 
             console.log(mObj.x); 
             console.log(fObj.x);
              console.log(mObj.width/2+fObj.width/2);
               console.log(mObj.x-fObj.x);
                console.log(fObj.x-mObj.x); 
   if(mObj.x-fObj.x<mObj.width/2+fObj.width/2
     && fObj.x-mObj.x<mObj.width/2+fObj.width/2
      && mObj.y-fObj.y<mObj.width/2+fObj.width/2 
      && fObj.y-mObj.y<mObj.width/2+fObj.width/2)
      {
         mObj.shapeColor="red";
          fObj.shapeColor="red";
         } 
         else
          {
             mObj.shapeColor="green";
          fObj.shapeColor="green";
         }
          drawSprites(); 
        }