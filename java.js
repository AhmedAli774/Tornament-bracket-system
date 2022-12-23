// const Result00 = document.getElementById("Result0");
// //------------------------Box 1-------------------------------
// {
//     const Res01 = document.getElementById("select");
//     const Res02 = document.getElementById("select2");

//     const Name01 = document.getElementById("name");
//     const Name02 = document.getElementById("name2");

//     Res01.addEventListener("change",()=>{
//         let Result01 = parseInt(Res01.value);

//         if(Result01 === parseInt(Result00.value)){
//             document.getElementById("final1").innerHTML = Name01.value;

//         } else if (Result01 != parseInt(Result00.value)){
//             document.getElementById("final1").innerHTML = "";            
//         }
//     })
//     Res02.addEventListener("change",()=>{
//         let Result02 = parseInt(Res02.value);

//         if(Result02 === parseInt(Result00.value)){
//             document.getElementById("final1").innerHTML = Name02.value;

//         } else if (Result02 != parseInt(Result00.value)){
//             document.getElementById("final1").innerHTML = "";            
//         }
//     })

// }








    const Res01 = document.getElementById("select");
    const Res02 = document.getElementById("select2");

    const Name01 = document.getElementById("name");
    const Name02 = document.getElementById("name2");

     
     



   function table(){

    
    const Res01 = document.getElementById("select").value;
    const Res02 = document.getElementById("select2").value;

    const Name01 = document.getElementById("name");
    const Name02 = document.getElementById("name2");
    // alert(Res01);
    // alert(Res02);
//    console.log(Res01);

    if(Res01 > Res02){
        alert("Hallo world 5");
    }
    else if(Res01 < Res02) {
        alert("Hallo World 10");
    }
    else{
        alert("Ali");
    }

}  













// let n = parseInt(Res01);
// let n2 = parseInt(Res02);
// if(n > n2){
//     alert("hallo wordl 5");
// }
// else if(n2 > n){

//     alert("Hallo world 10");
// }
// else{
//     alert("hallo world 15");
// }