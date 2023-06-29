
export function randomNumber(number: number){
    const randomNumber = Math.ceil(Math.random() * number);
    console.log(randomNumber)
    return randomNumber
}