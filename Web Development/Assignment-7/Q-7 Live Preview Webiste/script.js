const share_story = document.getElementById('btn'); // share story button
const image = document.getElementById('img');
const title_heading = document.getElementById('heading');
const paragraph = document.getElementById('para');
const author = document.getElementById('btn-author');
const container = document.getElementsByClassName('container')[0];

// form input box
let title = document.getElementById('title');
let image_url = document.getElementById('img-url');
let author_name = document.getElementById('author-name');
let story = document.getElementById('story');

function updatePreview(event) {
    event.preventDefault(); /// Prevent form submission

    container.style.display = "flex"; 

    title_heading.textContent = title.value;
    image.src = image_url.value;
    author.textContent = author_name.value;
    paragraph.textContent = story.value;
}

share_story.addEventListener('click', updatePreview);