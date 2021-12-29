// $('.main-container').style
var main= document.querySelector(".main-container");
main.classList.add("main");


var middle = document.querySelector(".middle-page");
middle.classList.add("middle")

var btn = document.querySelector(".show-percentage");
btn.addEventListener("click", ()=>{
    console.log("event")
   document.querySelector(".show-percentage").style.visibility=""
   document.querySelector("h1").style.color="red";
//    document.querySelector(".result").innerHTML= "How are you"
})

btn.addEventListener("click", ()=>{
    
})

// var link = document.querySelector("a");

// // console.log(link.innerHTML)
// // console.log(link.textContent)

// // link.innerHTML = 'prepbytes'
// link.textContent= 'prepbytes'
const showResult =()=>{
    const wd = document.getElementById('wd').value;
    const phy = document.getElementById('phy').value;
    const eng = document.getElementById('eng').value;
    const math = document.getElementById('math').value;

   
    let totalGrades = parseFloat(wd) + parseFloat(phy) + parseFloat(eng) + parseFloat(math);
//    alert(totalGrades)


    let perc = (totalGrades/400)*100;
    // alert(perc)
    let grade = "";
    // document.querySelector(".result-heading").textContent="Total marks is " + (totalGrades) + " and Percentage is " + perc
     
    if((perc>100)|| (perc<0)){
        // document.querySelector(".result").textContent = "Enter correct Marks"
    }
    else if((perc>60) && (perc<=100)){
       grade = "A"
    } else if ((perc>=45)&&(perc<60)){
        grade = "B"
    }
    else if ((perc>=30)&&(perc<45)){
        grade = "C"
    }
    else{
        grade = "Fail"
    }

    // document.querySelector(".result").innerHTML = "Total Marks is " + totalGrades + " and total percentage is "+ perc + " and got " +grade
    document.querySelector(".result").innerHTML = ` Out of 400 your total marks is ${totalGrades} and percentage is ${perc}% <br> Your Grade is ${grade} `
}
