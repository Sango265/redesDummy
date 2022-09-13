function popup() {
alert("Hello")
}

function validateForm()
{
var x=document.forms["myForm"]["fname"].value;
var y=document.forms["myForm"]["email"].value;

var mensaje = "";

if (x==null || x=="")
  {
    mensaje += "First name must be filled out\n"; 
  }

var atpos=y.indexOf("@");
var dotpos=y.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
  {
    mensaje+="Not a valid e-mail address";
  }

    if(mensaje != ""){
        alert(mensaje);
        return false;
    }
}


function mobileWrite(){
    if(detectmob()){
        document.write("<h1> Mobile </h1>");
    } else {
        document.write("<h1> Desktop </h1>");
    }
}


function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

//JQuery

/*function myFunction()//Script
{
var obj=document.getElementById("h01");
obj.innerHTML="Hello jQuery";
}
onload=myFunction;*/


function myFunction()//JQuery
{
    $("#h01").attr("style","color:red").html("Hello jQuery");



    $("#hide").click(function(){
      $("li").hide(500);
    });

    $("#show").click(function(){
      $("li").show(500);
    });




  $("#fadeIn").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
    
    $("#fadeOut").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });




  $("#anim").click(function(){
    var div=$("div");  
    div.animate({left:'100px'},"slow");
    div.animate({fontSize:'3em'},"slow");
  });




  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });



  $("#btn4").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn5").click(function(){
    alert("HTML: " + $("#test").html());
  });


  $("#btn6").click(function(){
    $("img").before("<b>Before</b>");
  });

  $("#btn7").click(function(){
    $("img").after("<i>After</i>");
  });
}

