
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM2ODZkMDdhMTcxNDUyZWUyYzM2MGUwODFjNjAxMyIsInN1YiI6IjY0NzRjMGFhNWNkMTZlMDBiZjEyNDQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgYpZS6S6GHYU8eq2rRevqoZz5g80tZ7hZ5KJ3soHVU'
            }
        };
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
        
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                let rows = data['results'];
                const cardList = document.querySelector('.card-list');
                cardList.innerHTML = '';

                rows.forEach((a) => {
                    let _title = a['title'];
                    let _overview = a['overview'];
                    let _poster_path = a['poster_path'];
                    let _vote_average = a['vote_average'];
                    let _id = a['id'];

                    let temp_html = `
                        <div class="movie-card" data-id="${_id}">
                            <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
                            <h3>${_title}</h3>
                            <p>${_overview}</p>
                            <p>Rating: ${_vote_average}</p>
                        </div>
                    `;
                    cardList.insertAdjacentHTML('beforeend', temp_html);
                });

                const movieCards = document.querySelectorAll('.movie-card'); 
                movieCards.forEach(card => {
                    card.addEventListener('click', function() {
                        let movieId = this.getAttribute('data-id') 
                        alert(`영화 id: ${movieId}`);
                    });
                });
                
                const searchInput = document.getElementById('search-input');
                const searchButton = document.getElementById('search-button');

                const searchMovies = () => {
                    const searchTerm = searchInput.value.toLowerCase();
                    const filteredMovies = cardList.filter(search => search_title.toLowerCase().includes(searchTerm));

                    filteredMovies.forEach((result) => {
                        const title = result['title'];
                        const overview = result['overview'];
                        const posterPath = result['poster_path'];
                        const voteAverage = result['vote_average'];
                        const id = result['id'];

                        const temp_html = `
                    <div class="movie-card" data-id="${id}">
                        <img src="https://image.tmdb.org/t/p/w500${posterPath}">
                        <h3>${title}</h3>
                        <p>${overview}</p>
                        <p>Rating: ${voteAverage}</p>
                    </div>
                 `;
                 cardList.insertAdjacentHTML('beforeend', temp_html);
                });

                }

 
                
                searchButton.addEventListener('click', searchMovies);
                });  

          