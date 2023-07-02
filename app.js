
showData();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value= "";
    console.log(notesObj);
    showData();
});

function showData() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="notecard card col-lg-4 col-12 border bg-dark text-white ">
            <div class="card-body main_card">
                <h5 class="card-title text-warning">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id=${index}  onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
            </div>
        </div>
    
                `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use <b><span class="text-primary"> " Add a note " </span> </b>section above to add a notes`;
    }
     
}

// Delete note form localStorage 
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showData();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired" , inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText; 
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})




