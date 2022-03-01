const searchButton = () => {
    const searchFiled = document.getElementById('searchFiled');
    const searchFiledText = searchFiled.value;
    console.log(searchFiledText);

    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFiledText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = data => {
    const searchResultCol = document.getElementById('searchResultCol');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer d-grid gap-2">
        <button class="btn btn-primary" type="button">Learn More</button>
        </div>
    </div>`
        searchResultCol.appendChild(div);

    });
}