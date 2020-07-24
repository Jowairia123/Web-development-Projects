var a,old,curr,NaN;


//Adding digits from 0-9
function add(b)
{
    if(document.querySelector("input").value === "0" && b.innerHTML !== "0") 
        document.querySelector("input").value = b.innerHTML;
    else
        document.querySelector("input").value += b.innerHTML;
}

//Adding 1/x in the input field
function one()
{
    inputValue = document.querySelector("input").value;
    if(!inputValue.charAt(inputValue.length-1).match(/[/.%]/) && !inputValue.includes("^")&&
        !inputValue.charAt(inputValue.length-1).match(/\d/g)) 
            
            document.querySelector("input").value += "1/";
}

//Adding operators in text field
function operator(b)
{
    inputValue = document.querySelector("input").value;
    
    if(inputValue !== "" || b.innerHTML === "-")    
        if(!inputValue.charAt(inputValue.length-1).match(/[-*+/%.]/) && !inputValue.includes("^"))
            document.querySelector("input").value += b.innerHTML;
}


//Erase to the left
function back()
{
    inputValue = document.querySelector("input").value;
    var a = inputValue.replace(inputValue.charAt(inputValue.length-1),"");
    document.querySelector("input").value = a;
}

//Get result by clicking on "=" button
function result(c)
{  
    if(c.innerHTML === "C")
        document.querySelector("input").value = "";
    
    else if(document.querySelector("input").value.includes("^"))
    {
        a = document.querySelector("input").value.split("^");
        document.querySelector("input").value = Math.pow(a[0],a[1]);      
    } 
    
    else
        document.querySelector("input").value = eval(document.querySelector("input").value);   
}

//Finding power of numbers by ^ and x^2 and x^3
function power(b)
{
    inputValue = document.querySelector("input").value;
    
    if( /\W/.test(inputValue) === false && !inputValue.charAt(inputValue.length-1).includes("^") && inputValue !== "")
        
        if(b.innerHTML === "x<sup>2</sup>") 
            document.querySelector("input").value += "^2";
    
        else if(b.innerHTML === "x<sup>3</sup>")
            document.querySelector("input").value += "^3";
        
        else
            document.querySelector("input").value += b.innerHTML;
}

//Handling Decimal numbers
function point(b)
{   
    if(!document.querySelector("input").value.charAt(document.querySelector("input").value.length-1).match(/[-*+/%.]/))
        document.querySelector("input").value += b.innerHTML;      
}

//Inserting value of PI = 3.1428 in input field
function pi()
{
    inputValue = document.querySelector("input").value;
    
    if(!inputValue.charAt(inputValue.length-1).match(/[.]/) && !inputValue.charAt(inputValue.length-1).match(/\d/g))
        document.querySelector("input").value += 3.1416;
}