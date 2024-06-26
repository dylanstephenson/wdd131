
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));

button.addEventListener('click', function(){
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
})

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    input.focus();
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        item= '';
    }
)}

function setChapterList(){
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.splice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== (chapter));
    setChapterList();
}

