const list = document.querySelector("#song-list ul");
const forms = document.forms;

// delete songs
list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

//add songs
const addForm = forms["add-song"];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
})