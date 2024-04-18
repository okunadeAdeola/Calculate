
// const clearbutton = () =>   {
// let inp = document.getElementById('inp').value
//       inp.value = ''
//     }
let inputvid = document.getElementById('inp')
function clearbutton(man) {
    inputvid.value += man
    // console.log(man);

}
function clearbutton3(){
    //   inputvid.value = eval(inputvid)
    inputvid.value = ''
}
function clearbutton2(){
    //   inputvid.value = eval(inputvid)
    let clear = inputvid.value
    inputvid.value = clear.slice(0, -1)
}

function clearbutton5(){
    try{
        inputvid.value = eval(inputvid.value)
    } catch (error){
        inputvid.value = 'Syntax error'
    }
}
function clearbutto(){
    inputvid.value = inputvid.value/100
}
function squareme(){
   inputvid.value = inputvid.value**2
}
