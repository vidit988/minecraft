canvas=new fabric.Canvas('mycanvas')
playerx=10
playery=10
blockwidth=20
blockheight=20
function player(){
fabric.Image.fromURL('player.png',function (Img){
    playerobject=Img
    playerobject.scaleToWidth(140)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:playery,left:playerx    })
        canvas.add(playerobject)
})
}
function block(image1){
fabric.Image.fromURL(image1,function (Img){
    blockobject=Img
    blockobject.scaleToWidth(blockwidth)
    blockobject.scaleToHeight(blockheight)
    blockobject.set({
        top:playery,
        left:playerx

    })
    canvas.add(blockobject)
})
}
player()
block('trunk.jpg')
window.addEventListener('keydown',keys)


function keys(e){
    e.keycode
    console.log(e.keyCode)
    
    if(e.keyCode==38){
        console.log('up')
        up()
    }
    if(e.keyCode==40){
console.log('down')
down()
    }
    if(e.keyCode==37){
        console.log('left')
        left()

    }
    if(e.keyCode==39){
        console.log('right')
        right()
    }
    if(e.keyCode==84){
        console.log('t');
        block('trunk.jpg')
    }
    if(e.keyCode==68){
console.log('d')
block('dark_green.png')
    }
    if(e.keyCode==76){
        console.log('l')
        block('light_green.png')

    }
    if(e.keyCode==71){
        console.log('g')
        block('ground.png')

    }
    if(e.keyCode==87){
        console.log('w')
        block('wall.jpg')


    }
    if(e.keyCode==89){
        console.log('y')
        block('yellow_wall.png')

    }
    if(e.keyCode==82){
        console.log('r')
        block('roof.jpg')

    }
    if(e.keyCode==67){
        console.log('c')
        block('cloud.jpg')

    }
    if(e.keyCode==85){
        console.log('u')
        block('unique.png')


    }
    if(e.keyCode==80 && e.shiftKey==true){
        console.log('shift')
        blockwidth=blockwidth+10
        blockheight=blockheight+10
        document.getElementById('width').innerHTML='currentwidth='+blockwidth
        document.getElementById('height').innerHTML='currentheight='+blockheight
    }
    if(e.keyCode==77 && e.shiftKey==true){
        console.log('shift')
        blockwidth=blockwidth-10
        blockheight=blockheight-10
        document.getElementById('width').innerHTML='currentwidth='+blockwidth
        document.getElementById('height').innerHTML='currentheight='+blockheight

    }
    
}
function up(){
    if (playery>0){
        playery=playery-blockheight
        canvas.remove(playerobject)
        player()
    }
    
}
function down(){
    if(playery<canvas.height-140){
        playery=playery+blockheight
        canvas.remove(playerobject)
        player()
    }
}
function left(){
    if(playerx>0){
        playerx=playerx-blockwidth
        canvas.remove(playerobject)
        player()
    }
}
function right(){
    if(playerx<canvas.width-140){
        playerx=playerx+blockwidth
        canvas.remove(playerobject)
        player()
    }
}