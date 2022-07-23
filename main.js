 
 //https://i.postimg.cc/7ZBcjDqp/clownnose.png
 
 nose_x=0;

 nose_y=0;
  function preload(){
img = loadImage("https://i.postimg.cc/L8x1dpk4/Buuterfly-removebg-preview.png");
 }

 function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
     video = createCapture(VIDEO);
     video.size(400 , 400);
     video.hide();

     poseNet = ml5.poseNet(video , modelLoaded)
     poseNet.on('pose' , gotPoses)
 }

  function modelLoaded(){
console.log("Pose Net is Initializing ...")
  }


 function gotPoses(results){
if (results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;

}
 }
 function draw(){
  image(video , 0 , 0 ,400 , 400);
  image( img , nose_x-150, nose_y-160 , 300 , 200);
 }

 function takesnapshot(){
  save( "MyFunnyPic.png");
 }
 //nose_x = results[0].pose.nose.x-15;
 //nose_y = results[0].pose.nose.y-15;
