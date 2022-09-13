
function myFunction() 
{
    alert("Hello World!");
}

function variables()
{
    var A =0;
    var B ="3,5,7,8";
    
    const fgames= ["TLOU","BOII","GW"];
    for(let i=0; i < fgames.length; i++)
    {
        document.write("<p>Respuesta: " + fgames[i] + "</p>");
    }
    var i=0;
    while ( i < 10) 
    {
        document.write("<p>The number is </p>" + i);
        i++;
    }

    if(fgames == 3)
    {
        document.write("<p>Sin contexto alguno</p>");
    }

}

function formulario()
{
    
}
