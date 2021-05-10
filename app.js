const inputId = document.querySelector('#inputId');
const too = document.querySelector('#too');
const tooo = document.querySelector('#tooo');
const hf = document.getElementById('headingId');
hf.addEventListener("click", taskAdd);
function clickedFun(vall) {
                    div = document.createElement('div'); 
                    div.className="added";
                    const checkBox = document.createElement('input');
                    checkBox.type = "checkbox";
                    checkBox.className = "inputClass";
                    const label = document.createElement("label");
                    var editInput = document.createElement("input");
                    const edit = document.createElement('a');
                    editInput.type = "email";
                    edit.className = "editClass";
                    edit.innerText = "Edit";
                    const del = document.createElement('a'); 
                    del.className = "delClass";
                    del.innerText = "Delete";
                    const val = document.createElement('p');
                    val.className ="valClass";
                    label.innerText=vall;
                    div.appendChild(checkBox);
                    div.appendChild(label);
                    div.appendChild(editInput);
                    div.appendChild(edit);
                    div.appendChild(del);
                    return div;
}
function taskAdd() {
    if(inputId.value == '') alert("You must Add a todo...");
    else{
	const liCreated = clickedFun(inputId.value);
	too.appendChild(liCreated);
	checkBoxHanndler(liCreated, checked);
	inputId.value = "";
    }
}
function editMyTask() {
	const editedli = this.parentNode;
	let editInput = editedli.querySelector('input[type=email]');
    let label = editedli.querySelector("label");
    let containsClass = editedli.classList.contains("editM");
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    editedli.classList.toggle("editM");
}
function onDelete() {
    if (confirm("Are You Sure..??")) {
        console.log("............");
        const deletedLi = this.parentNode;
        console.log(deletedLi);
	    const div = deletedLi.parentNode;
	    div.removeChild(deletedLi);
    }
}
function checked() {
	const newLi = this.parentNode;
	tooo.appendChild(newLi);
	checkBoxHanndler(newLi, unChecked);
}
function unChecked() {
	const uncheckedLi = this.parentNode;
	too.appendChild(uncheckedLi);
	checkBoxHanndler(uncheckedLi, checked);
}
function checkBoxHanndler(anyLi, div) {
	const checkBox = anyLi.querySelector("input[type=checkbox]");
	const editBtn = anyLi.querySelector("a.editClass");
	const delBtn = anyLi.querySelector("a.delClass");
	editBtn.onclick = editMyTask;
	delBtn.onclick = onDelete;
	checkBox.onchange = div;
}

