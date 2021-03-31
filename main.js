var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_img="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    }
    );
}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_img_object=Img;
        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    }
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and Shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keyPressed == '70') {
        new_img('face.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_img('body.png');
        console.log("b");
    }
    if(keyPressed == '76') {
        new_img('legs.png');
        console.log("l");
    }
    if(keyPressed == '82') {
        new_img('right_hand.png');
        console.log("r");
    }
    if(keyPressed == '72') {
        new_img('left_hand.png');
        console.log("h");
    }
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
    left();
    console.log("left");
}
    if(keyPressed == '39') {
    right();
    console.log("right");
}
}    
function up(){
    if (player_y>=0) {
        player_y=player_y-block_image_height;
        console.log("Block image height = "+block_image_height);
        console.log("When up arrow key is pressed ,x ="+player_x+" ,y = "+player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_image_height;
        console.log("Block image height ="+block_image_height);
        console.log("When down arrow key is pressed, x ="+player_x+" ,y ="+player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function left(){
    if (player_x >0){
        player_x=player_x-block_image_width;
        console.log("Block image width ="+block_image_width);
        console.log("When left arrow key is pressed ,x ="+player_x+" ,y ="+player_y);
        canvas.remove(player_img);
        player_update()
    }
}
function right(){
    if (player_x <=850){
        player_x=player_x+block_image_width;
        console.log("Block image width ="+block_image_width);
        console.log("When left arrow key is pressed ,x ="+player_x+" ,y ="+player_y);
        canvas.remove(player_img);
        player_update()
    }
}
