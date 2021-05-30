var canvas = new fabric.Canvas('mycanvas');
player_x = 10;
player_y = 10;
super_image_width = 30;
super_image_height = 30;
var player_object = "";
var super_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
       super_image_object = Img;
        super_image_object.scaleToWidth(super_image_width);
        super_image_object.scaleToHeight(super_image_height);
       super_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(super_image_object);
    })
}