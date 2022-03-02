const searchButton = () => {
    const searchFiled = document.getElementById('searchFiled');
    const searchFiledText = searchFiled.value;
    // console.log(searchFiledText);

    searchFiled.value = '';
    if (searchFiled == '') {
        alert("Please Input Somthings")
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchFiledText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }
}

const displaySearchResult = data => {
    const searchResultCol = document.getElementById('searchResultCol');
    searchResultCol.innerHTML = '';
    if (data.length == 0) {
        alert('No Result Found');
    }
    else {
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
}


// Phone Detiels 
const phoneDetilesId = slugs => {
    const slugurl = `https://openapi.programming-hero.com/api/phone/${slugs}`

    fetch(slugurl)
        .then(res => res.json())
        .then(data => displayDetiles(data.data));
}

const displayDetiles = phoneInfo => {
    const phonedetils = document.getElementById('phoneDisplayDetiles');
    phonedetils.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="row g-0 alert-primary">
     <div class="col-md-4">
         <img src="${phoneInfo.image}" class="img-fluid rounded-2 justify-content-center mx-auto w-100  p-3 " alt="...">
     </div>
     <div class="col-md-8">
         <div class="card-body">
             <h2 class="card-title text-capitalize">${phoneInfo.name}</h2>
             <h5 class="card-title text-capitalize">${phoneInfo.releaseDate}</h5>
             <p class="card-text card-footer border-primary"> Chipset: ${phoneInfo.mainFeatures.chipSet}</p >
             <p class="card-text card-footer border-primary"> Display Size: ${phoneInfo.mainFeatures.displaySize}</p >
             <p class="card-text card-footer border-primary"> Memory: ${phoneInfo.mainFeatures.memory}</p >
             <p class="card-text card-footer border-primary"> Sensors: ${phoneInfo.mainFeatures.sensors}</p >
             <p class="card-text card-footer border-primary"> Storage: ${phoneInfo.mainFeatures.storage}</p >
             <p class="card-text card-footer border-primary"> Others:</p >
             <p class="card-text "> Bluetooth: ${phoneInfo.others.Bluetooth} </p >
             <p class="card-text "> GPS: ${phoneInfo.others.GPS} </p >
             <p class="card-text "> NFC: ${phoneInfo.others.NFC} </p >
             <p class="card-text "> Radio: ${phoneInfo.others.Radio} </p >
             <p class="card-text "> WLAN: ${phoneInfo.others.WLAN} </p >

         </div >
     </div >
 </div > `


    phonedetils.appendChild(div);

}