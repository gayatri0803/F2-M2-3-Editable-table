const NewRow = document.getElementById("btn")

const tablebody = document.getElementById("body")
const NewData = [];



function submitdata(name, roll, subject, marks, markedby) {
    NewRow.disabled = false

    if (name == "" || roll == "" || marks == "" || markedby == "" || subject == "") {
        alert("Please Fill all the fields");
    }
    else if (markedby.includes("@") == false) {
        alert("Please Enter valid Email")
    }
    else {
        let data = { id: NewData.length + 1, student_name: name, student_roll: roll, subject: subject, marks: marks, markedBy: markedby }
        console.log("New Row Entered:", data);
        NewData.push(data);
        console.log("All Table Data", NewData);
        tablebody.innerHTML = NewData.map((item, ind) => {
            return (` <tr> <td>${item.id}</td>
            <td>${item.student_name}</td>
            <td>${item.student_roll}</td>
            <td>${item.subject}</td>
            <td>${item.marks}</td>
            <td>${item.markedBy}</td></tr>`)
        }).join("")

    }

}


NewRow.addEventListener("click", () => {

    tablebody.innerHTML = tablebody.innerHTML + `
  <td>${NewData.length + 1}</td>
  <form >
  <td><input id="stuname" type="text"/></td>
  <td><input id="rollno" type="text"/></td>
  <td><input id="subject" type="text"/></td>
  <td><input id="marks" type="number"/></td>
  <td><input id="markedby" type="email"/></td>
  <td><button class="savebtn" onclick="submitdata(document.getElementById('stuname').value,document.getElementById('rollno').value,document.getElementById('subject').value,document.getElementById('marks').value,document.getElementById('markedby').value)">Save</button></td>
  </form>`

    NewRow.disabled = true
})
