const UserObject = [
    {

    }
];
var updateObject;
$(function() {
 
    $("#add").click(addRow);
    $("#update").click(updateRow);
    $("#reset").click(resetRow);
  });

  
  
  
function addRow() {
   
    if(checkValidity()){
        const name = $("#name").val();
    const gender = $("#form")[0].gender.value;
    console.log(gender)
    const age =  $("#age").val();
    const city = $("#city").val();
    // if(UserObject.some(e => e.name === name))
    let obj = {
       id:UserObject[UserObject.length-1]+1,
        name,gender,age,city
    }
    UserObject.push(obj);

    // const { name,gender,age,city } = Obj;
    $("#tbody").append(`<tr>
        <td>${name}</td>
        <td>${gender}</td>
        <td>${age}</td>
        <td>${city}</td>
        <td>
            <button class="edit" id="${obj.id}"  onclick="editRow(this)">Edit</button>
            <button class="Remove" id="${obj.id}" onclick="removeRow(this)">Remove</button>
        </td>
    </tr>`)
   
    }
    // myFunction();
   

  
}
// 
function removeRow(oButton) {
    // setIndex();
    console.log(oButton.parentNode.parentNode.rowIndex)
    UserObject.filter(e => e.id===oButton.id);
    document.getElementById("table").deleteRow(oButton.parentNode.parentNode.rowIndex);
   
    
console.log(oButton.parentNode.parentNode.rowIndex);

}

function editRow(oButton) {
    // setIndex();
    const name = $("#name");
    const gender = $("#form").gender;
    const age =  $("#age");
    const city = $("#city");
    let row = $(oButton).parents("tr")
    var cols = row.children("td");
    $("#name").val($(cols[0]).text());
    $("#form")[0].gender.value=$(cols[1]).text();
    $("#age").val($(cols[2]).text());
    $("#city").val($(cols[3]).text());
    $("#update").attr("disabled", false);
    $("#add").attr("disabled", true); 
updateObject = oButton; 

}
function updateRow(){
if(updateObject&&checkValidity()){
    const name = $("#name");
    const gender = $("#form")[0].gender;
    const age =  $("#age");
    const city = $("#city");
    let row = $(updateObject).parents("tr")
    var cols = row.children("td");
    cols[0].innerText=name.val();
    cols[1].innerText=gender.value;
    cols[2].innerText=age.val();
    cols[3].innerText=city.val();

    $("#update").attr("disabled", true);
    $("#add").attr("disabled", false);
    UserObject.forEach(data =>{
        if(data.id===updateObject.id){
            data.name = name.val();
            data.gender = gender.value;
            data.age = age.val();
            data.city = city.val();
        }
    })
    updateObject='';
    formClear();

}
else alert("Can't find the row to update")
}


function resetRow(){
        
    formClear();
        $("#update").attr("disabled", true);
        $("#add").attr("disabled", false);
        updateObject='';
    
     }
function checkValidity(){
    if($("#name").val() && $("#form")[0].gender.value && $("#age").val()&&$("#city").val())
    return true;
    else false
}