console.log("Welcome to notes app. This is app.js");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let ttl = document.getElementById('ttl').value;
    let a = 0;
    let html = "";
    notesObj.forEach(function (element, index) {
        if(ttl == ""){
            a++;
        } else {
            a = ttl;
        }
        html += `
                <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">${a}</h5> <hr>
                        <p class="card-text">${element}</p>
                        <button id="${index}" class="btn" onclick="deleteNote(this.id)"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>`;
    });
    
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
addBtn.addEventListener('click', () => {
    ttl.value = ""
})

// Function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

let click = document.getElementById('click');
let disp = document.getElementById('disp')
click.addEventListener('click', function () {
    console.log("Button Clicked!");
    if(disp.style.display != "none"){
        disp.style.display = "none";
    } else {
        disp.style.display = "block"
    }
})

