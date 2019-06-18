var i = Math.floor(Math.random()*100)+1;

var j=i%2;//gets the modulus and stores the result in j
if (j==0)//checks the results in the module if its zero or not

 console.log (i +"is even");

 else 

 console.log(i +"is odd");

 for(count=1;count<=10;count++)
    let num=prompt ("please enter your number");//Outputs 

    if (num>0)
        console.log(1);

            else if (num<0)
            console.log(-1);

    else
    console.log(0);
}

if (num>i)
    alert("number is higher,make another guess");

else if (num<i)
alert("number is lower, make another guess");

else if (num===i)
alert("YOU WIN !");

else
    alert("YOU LOSE !!");

}


