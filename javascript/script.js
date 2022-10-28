function multiplicationTable()
{
    var Num = document.getElementById("TN").value;
    var x;
    var init = document.getElementById("Start").value;
    var fin = document.getElementById("End").value;
    var temp = "";
    for(x=init; x <= fin; x++)
    {
        temp+="<tr><td>"+Num+"</td><td>*</td><td>"+x+"</td><td>=</td><td>"+Num*x+"</td></tr>";
    }
    $("#displayTables").append(temp);
}