/* Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.*/

// Carousel
// 1. Write a program that launches a carousel for 10 turns, showing the turn number each time.
  
// for(let i = 1; i <= 10; i++){
//  console.log(i)
//} 


/* When it's done, improve it so that the number of turns is given by the user.*/


  let turns = prompt('Please enter a number', 0)

for(let i = 1; i <= turns; i++){
 console.log(i)
}  


// Parity
// 2. Check the following program that shows even numbers (divisible by 2) between 1 and 10.


    for(let i = 1; i <= 10; i++){
      if(i % 2 == 0){
      console.log(i)
    }

  }

 /* Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

  This program must show exactly 10 numbers including the first one, not 11 numbers!*/

  let userInput = prompt('Please enter a number', 0)

    for(let i = userInput; i <= (+userInput) + 9; i++){
      if(i % 2 == 0){
        console.log(`${i} is even`)
      }else{
        console.log(`${i} is odd`)
      }

  }


// Input validation
// 3. Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

 let input = prompt("Enter a number", 0)

   while(input > 100){
      input = prompt("Enter a number", 0)
}

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

  let inputOne = prompt("Enter a number", 0)

    while(inputOne > 100 || inputOne < 50){
      inputOne = prompt("Enter a number", 1)
}

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// let inputTwo = prompt("Enter a number", 0)

//   for(let i = 1; i <= inputTwo; i++){
//     let result = inputTwo * i
//     console.log(`${inputTwo} * ${i} = ${result}`)
//   }


// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let inputTwo = prompt("Enter a number", 0)

  while(inputTwo < 2 || input > 9){
    inputTwo = prompt("Enter a number", 0)
  }

  for(let i = 1; i <= inputTwo; i++){
    let result = inputTwo * i
    console.log(`${inputTwo} * ${i} = ${result}`)
  }


// // Neither yes nor no
// // 4. Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

 let userInputOne = (prompt("Enter Yes/No")).toLowerCase()

   while((userInputOne !== "yes") && (userInputOne !== "no")){
     userInputOne = prompt("Enter Yes/No")
  }



// // FizzBuzz
// // 5. Write a program that shows all numbers between 1 and 100 with the following exceptions:

// // It shows "Fizz" instead if the number is divisible by 3.

// // It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// // When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.


function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("fizzBuzz")

    }else if(i % 3 === 0){
      console.log("fizz")
    
    }else if(i % 5 === 0){
      console.log("Buzz")
    
    }else{
      console.log(i)
    }
  }
}
fizzBuzz()