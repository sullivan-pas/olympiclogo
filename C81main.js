canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");
color="gold";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(245,240,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
     color = document.getElementById("color").value; 
     mouse_x = e.clientX - canvas.offsetLeft; 
     mouse_y = e.clientY - canvas.offsetTop; 
     circle(mouse_x , mouse_y); 
}



    function circle(mouse_x , mouse_y) 
    {
        ctx.beginPath();
        ctx.strokeStyle = color; 
        ctx.lineWidth = 5; 
        ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); 
        ctx.stroke(); 
    }

    function cleararea() 
    { 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }


    ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(190,200,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);


ctx=canvas.getContext("2d");
color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);


ctx=canvas.getContext("2d");
color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(355,240,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);


ctx=canvas.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(410,200,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);