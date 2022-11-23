function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function getNumberFromUser(message){
    let userValue;
    let flag=false;
     do {
         if(flag){
             alert('You have to enter value');
         }
         userValue=+prompt(message);
         flag=true;
     } while(isNaN(userValue)){
         return userValue;
     }
 }
 // task 1;
//  const itemsCount=getNumberFromUser("Please enter the value");
//  const array=[];
//  let min;
//  for(let index=0;index<itemsCount;index++){
//     array[index]=getRandomNumber(0,101);
//     console.log(array[index]);
//  }
//  min=array[0];
//  for(let index=1;index<itemsCount;index++){
//     if(array[index]<min){
//         min=array[index];
//     }
//  }
    
//  console.log(min);


//task2
//  const itemsCount2=getNumberFromUser("Please enter the value");
//  const array2=[];
//  let max;
//  for(let index2=0;index2<itemsCount2;index2++){
//     array2[index2]=getRandomNumber(0,101);
//     console.log(array2[index2]);
//  }
//  max=array2[0];
//  for(let index2=1;index2<itemsCount2;index2++){
//     if(array2[index2]>max){
//         max=array2[index2];
//     }
//  }
    
//  console.log(max);

//task3
//  const itemsCount=getNumberFromUser("Please enter the value");
//  const array=[];
//  let min;
//  let min_index;
//  for(let index=0;index<itemsCount;index++){
//     array[index]=getRandomNumber(0,101);
//     console.log(array[index]);
//  }
//  min=array[0];
//  for(let index=1;index<itemsCount;index++){
//     if(array[index]<min){
//         min=array[index];
//         min_index=index;
//     }
//  }
//  console.log(min);
//  console.log(min_index);

//task4
//  const itemsCount2=getNumberFromUser("Please enter the value");
//  const array2=[];
//  let max;
//  let max_index;
//  for(let index2=0;index2<itemsCount2;index2++){
//     array2[index2]=getRandomNumber(0,101);
//     console.log(array2[index2]);
//  }
//  max=array2[0];
//  for(let index2=1;index2<itemsCount2;index2++){
//     if(array2[index2]>max){
//         max=array2[index2];
//         max_index=index2;
//     }
//  }
// console.log(max_index);

//task5
//  const itemsCount5=getNumberFromUser("Please enter the value");
//  const array5=[];
//  let sum5=0;
//  for(let index5=0;index5<itemsCount5;index5++){
//     array5[index5]=getRandomNumber(0,101);
//     console.log(array5[index5]);
//  }
//  for(let index5=1;index5<itemsCount5;index5+=2){
//   sum5=sum5+array5[index5];
//  }
//  console.log(sum5);

//task7
//  const itemsCount5=getNumberFromUser("Please enter the value");
//  const array5=[];
//  let count5=0;
//  for(let index5=0;index5<itemsCount5;index5++){
//     array5[index5]=getRandomNumber(0,101);
//     console.log(array5[index5]);
//     if(array5[index5]%2==1){
//         count5=count5+1;
//     }
//  }
//  console.log(count5);
 

//task6
//  const itemsCount5=getNumberFromUser("Please enter the value");
//  const array5=[];
//  for(let index5=0;index5<itemsCount5;index5++){
//     array5[index5]=getRandomNumber(0,101);
//     console.log(array5[index5]);
//  }
//  function reverseArray(array5){
     
//  }

//task9
//  const itemsCount9=getNumberFromUser("Please enter the value");
//  const array9=[];
//  for(let index9=0;index9<itemsCount9;index9++){
//     array9[index9]=getRandomNumber(0,101);
//     console.log(array9[index9]);
//  }
//  function bubbleSort(array5){
//     for(let i5 = 0; i5 < array5.length; i5++){
//         for(let j5 = 0; j5 < ( array5.length - i5 -1 ); j5++){
//             if(array5[j5] > array5[j5+1]){
//                 let temp = array5[j5]
//                 array5[j5] = array5[j5 + 1]
//                 array5[j5+1] = temp
//               }
//         }
//     }
//     console.log(array5);
//  }
//  bubbleSort(array9);


//task10
//  const itemsCount10=getNumberFromUser("Please enter the value");
//  const array10=[];
//  for(let index10=0;index10<itemsCount10;index10++){
//     array10[index10]=getRandomNumber(0,101);
//     console.log(array10[index10]);
//  }
 

//task6
//   const itemsCount8=getNumberFromUser("Please enter the value");
//   const array8=[];
//   for(let index8=0;index8<itemsCount8;index8++){
//     array8[index8]=getRandomNumber(0,101);
//     console.log(array8[index8]);
//  }
//  array_Reverse(array8);
// function array_Reverse(array6){
//     let l=array6.length;
//     for(let i=0;i<Math.floor(l/2);i++){
//        [array6[i],array6[l-i-1]]=[array6[l-i-1],array6[i]];
//     }
//     console.log(array6);
// }

//task8
  const itemsCount6=getNumberFromUser("Please enter the value");
  const array6=[];
  for(let index6=0;index6<itemsCount6;index6++){
    array6[index6]=getRandomNumber(0,101);
    console.log(array6[index6]);
 }
 swapArray(array6);
 function swapArray(array12){
    let l6=Math.floor(array12.length/2);
    if(array12.length%2==0){
        for(let i=0;i<l6;i++){
            [array12[i],array12[l6+i]]=[array12[l6+i],array12[i]];
         }
    }
     else{
        for(let i=0;i<l6;i++){
            [array12[i],array12[l6+i+1]]=[array12[l6+i+1],array12[i]];
         }
     }
    console.log(array12);
 }
 
 