let output = document.getElementById("input_box");
let calculators_btn =  Array.from(document.getElementsByTagName("button"));

calculators_btn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        output.innerText += btn.innerText
    })
})

document.getElementById("big").addEventListener("click" , ()=>{csalculatingString()})

function csalculatingString(){
    let numsArray = [];
    let opreator = []
    let num = ""
    for(let i = 0; i<output.innerText.length; i++){
        switch(output.innerText[i]){
            case "+":
            case "-":
            case "/":
            case "*":
                numsArray.push(+num)
                num=""
                opreator.push(output.innerText[i])
                console.log(numsArray)
                break;
            
            default:
                num+=output.innerText[i]
                break;
        }
    }
    
    let res = numsArray[0]
    for(let i=0; i < opreator.length; i++){
        switch(opreator[i]){
                case "+":
                     res += numsArray[i+1]
                     break;
                case "-":
                     res -= numsArray[i+1]
                     break;
                case "/":
                     res /= numsArray[i+1]
                     break;
                case "*":
                     res *= numsArray[i+1]
                     break;
        }
    }
    output.innerText = res
}

// function clearOutput(){
//     output.innerText = ""
// }