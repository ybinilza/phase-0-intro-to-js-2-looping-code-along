// Code your solutions in this file

const names =["Charlie", "Samip", "Ali"];
const eventName="birthday";


function writeCards(names,eventName)
{    const giftMessage=[];
     let temp;
     for(let i=0;i<names.length;i++)
     {
       temp= `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
       giftMessage.push(temp);

     }
    
   return giftMessage;
}


function countDown()
{
    let number=10;
    while(number>=0)
    {
        console.log(number);
        number--;
    }
}