function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $("#img_set").attr("src", e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]); 
    }
  }
  $("#img_file").change(function() {
    readURL(this);
  });
function myInputName()
{
  let str = document.getElementById("input").value;
  if(str=="")
  {
    document.getElementById("warn_name").innerHTML=" * Name is required";
    return str;
  }
  else 
  {
    document.getElementById("warn_name").innerHTML="";
    return str;
  }
}
function mySelected()
{
  let str = document.getElementById("myChoose").value;
  if(str== "NoSelected")
  {
    document.getElementById("warn_selected").innerHTML=" * Category is required";
    return str;
  }
  else 
  {
    document.getElementById("warn_selected").innerHTML="";
    return str;
  }
}
function checkImg()
{
  if( document.getElementById("img_file").files.length == 0 )
    {
      document.getElementById("warn_choose").innerHTML=" * No file selected";
      return false;
    }
    else 
    {
      document.getElementById("warn_choose").innerHTML="";
      return true;
    }
}
function submit_item()
{
   if(checkImg()==false || mySelected()=="NoSelected" || myInputName()==""
   || document.getElementById("img_set").src == "" ||  $("#input").val().length >= 10 || 
     ($("#input").val().charAt(0) >= '0' && $("#input").val().charAt(0) <= '9'))
   {
     alert("Dữ liệu không hợp lệ!"); 
   } 
   else
   {
    insertNewRecord();
    document.getElementById("input").value="";
    document.getElementById("myChoose").value="NoSelected";
   //document.getElementById("img_file").value="";
   }
}
function insertNewRecord() {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var i = document.getElementById("table").rows.length;
  var newRow = table.insertRow(table.length);
  cell0=newRow.insertCell(0);
  cell0.innerHTML = i;

  cell1 = newRow.insertCell(1);
  cell1.innerHTML = document.getElementById("input").value;

  cell2 = newRow.insertCell(2);
  cell2.innerHTML = document.getElementById("myChoose").value;

  cell3 = newRow.insertCell(3);
  cell3.innerHTML =  "<img src = '"+document.getElementById("img_set").src+"' id=img_edit>";
  cell3.src= document.getElementById("img_set").src;
  cell3.value = document.getElementById("img_file").value;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `
                    <input onclick="onEdit(this)" type="button" value="Edit" id="btn_Edit"></input>
                    <input onclick="onDelete(this)" type="button" value="Delete" id="btn_Delete"></input>`;
  
  document.getElementById("input").value = "";
  document.getElementById("myChoose").value = "";
  document.getElementById("img_set").src = "";
}
function onEdit(td) 
{   
  selectedRow = td.parentElement.parentElement;
  onDelete(td);
  document.getElementById("input").value = selectedRow.cells[1].innerHTML;
  document.getElementById("myChoose").value =selectedRow.cells[2].innerHTML;
  document.getElementById("img_set").src = selectedRow.cells[3].src;
  document.getElementById("img_file").value = selectedRow.cells[3].value;
 
}
function onDelete(td) {
      let row = td.parentElement.parentElement;
      document.getElementById("table").deleteRow(row.rowIndex);
      resetForm();
}

function resetForm() {
  let number = document.getElementById("table").rows.length;
  for(let i =1;i<number;i++)
  {
    document.getElementById("table").rows[i].cells[0].innerHTML= i;
  }
}

  