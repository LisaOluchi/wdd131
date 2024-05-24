const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function getChapterList(){
    return JSON.parse(localStorage.getItem('chaptersList'));
}

function saveChapterList(chaptersArray){
    localStorage.setItem('chaptersList', JSON.stringify(chaptersArray));
}

let chaptersArray = getChapterList() || [];

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); 
        input.focus();
    });
}

function deleteChapter(chapter) {
    // No need to slice off the last character since item does not include '❌' in the event listener
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    saveChapterList(chaptersArray);

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });
}

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    const newChapter = input.value.trim();
    if (newChapter !== '') {
        chaptersArray.push(newChapter);
        saveChapterList(chaptersArray);
        displayList(newChapter);
        input.value = '';
        input.focus();
    }
});
