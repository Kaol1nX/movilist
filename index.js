const movieTitles = [
    'Космическая станция',
    'Тайна старого дома',
    'Поезд на север',
];
const moviePosters = [
    'covers/aida.jpg',
    'covers/meow.jpg',
    'covers/slPozan.jpg',
];
const movieList = document.getElementById('movieList');
const nameInput = document.getElementById('movieName');
const posterInput = document.getElementById('moviePoster');
const addButton = document.getElementById('addMovie');

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');

        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Удалить';

        removeButton.addEventListener('click', () => {
            movieTitles.splice(index, 1);
            moviePosters.splice(index, 1);
            renderMovies();

        });
        item.append(poster, title, removeButton);
        movieList.append(item);
    });
}
addButton.addEventListener('click', () => {
    const title = nameInput.value.trim();
    const poster = posterInput.value.trim();

    if (!title || !poster) {
        return;
    }
    movieTitles.push(title);
    moviePosters.push(poster);

    nameInput.value = '';
    posterInput.value = '';

    renderMovies();
});

renderMovies();