const list = document.querySelector("#song-list ul");
const forms = document.forms;

// delete books
list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});