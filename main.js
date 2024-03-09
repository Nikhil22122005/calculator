
let buttons = document.querySelectorAll(".digit");
let answer = document.querySelector("#ansbox");
let anstext = document.querySelector(".anstext");
let c = document.querySelector("#C");
let del = document.querySelector("#DEL");
let ans = document.querySelector("#ans");

let string='';



ans.addEventListener("click" , ()=>{
  string = eval(string);
  let anr = Number(string);
  let finalAnswer = anr.toFixed(2);
  console.log(finalAnswer);
  answer.value = finalAnswer ;
})

  
buttons.forEach((choice) => { 
  choice.addEventListener('click', (e) =>{   
    console.log(e.target.id);
    string = string.toString().slice(0 ,6);
      string +=e.target.id;
      answer.value = string;
      console.log(string.length);
  }) 
})


c.addEventListener("click" , () =>{
  string = '' ;
  answer.value = string ;
})

del.addEventListener("click" , () => {
  string = string.toString().slice(0 ,-1) ;
  answer.value = string ;
  })


/*btn.onclick = (e) => {   
  console.log("hi i am nikhil");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX , evt.clientY); 
}*/ 