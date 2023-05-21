// Good Luck! You got this 💪🏾
// Write your code here.


let bmiCalc = (weight, height)=>{

        let BMI = (weight)/(height**2);

        return BMI;
}


let mohemedBmi = bmiCalc(83, 1.70);
let aliBmi = bmiCalc(81, 1.70);

if (mohemedBmi > aliBmi){
    console.log(`mohamed has higher MBI than ali`)
}
else if(aliBmi > mohemedBmi) {
    console.log(`Ali has higher MBI than Mohamed`)
}

else {
    console.log(`they have equal BMI`)
}