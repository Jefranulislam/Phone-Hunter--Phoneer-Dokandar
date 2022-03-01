const searchButton = () => {
    const searchFiled = document.getElementById('searchFiled');
    const searchFiledText = searchFiled.value;
    // console.log(searchFiledText);

    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFiledText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = data => {
    const searchResultCol = document.getElementById('searchResultCol');
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card h-100">
        <img src="${data.image}" class="card-img-top w-75 mx-auto p-4" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <p class="card-text">Brand: ${data.brand}</p>
        </div>
        <div class="card-footer d-grid gap-2 alert-primary ">
        <button onclick="phoneDetilesId('${data.slug}')" class="btn btn-primary" type="button">Learn More</button>
        </div>
    </div>`
        searchResultCol.appendChild(div);

    });
}


// Phone Detiels 
const phoneDetilesId = slugs => {
    const slugurl = `https://openapi.programming-hero.com/api/phone/${slugs}`

    fetch(slugurl)
        .then(res => res.json())
        .then(data => console.log(data));
}

const displayDetiles = phoneInfo => {
    const phonedetils = document.getElementById('phoneDisplayDetiles');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="row g-0 alert-primary">
     <div class="col-md-4">
         <img src="${phoneInfo.data.image}" class="img-fluid rounded-start " alt="...">
     </div>
     <div class="col-md-8">
         <div class="card-body">
             <h5 class="card-title">${phoneInfo.data.name}</h5>
             <p class="card-text">${phoneInfo.data.releaseDate}</p>
             <p class="card-text">${phoneInfo.data.main}</p>
         </div>
     </div>
 </div>`
    phonedetils.appendChild(div);
}