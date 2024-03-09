let inp1 = document.getElementById('task')
let inp2 = document.getElementById('priority')
let myform = document.querySelector('form')
let tbody = document.querySelector('tbody')


let alldata = []

myform.addEventListener('submit',function(e){

    e.preventDefault();

    let Data = {};
    Data.task = inp1.value;
    Data.priority = inp2.value
    alldata.push(Data)
    console.log(alldata)
    tbody.innerText = "";
    

 alldata.map((ele)=>
 {

    row = document.createElement('tr')
    td1 = document.createElement('td')
    td2 = document.createElement('td')

    td1.innerText = ele.task
    td2.innerText = ele.priority

    
    if(ele.priority == "High"){

        td2.style.background = "red"
        

   
           
     }
     else{
 
             td2.style.background = "green"

     }

    row.append(td1,td2)

    tbody.append(row);

   

 })



})
