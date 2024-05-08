let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let search = document.querySelector(".search");
let cardTag;

btn.addEventListener("click", getData);
search.addEventListener("keypress", 
function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getData();
    }
});

function getData() {
    let search = document.querySelector(".search").value;
    fetch(`https://api.pexels.com/v1/search?query=${search}`,{
        headers: {
            Authorization:
            "OS9whA0hF6bETY9NNuEszF5yK3dvlw4mhPLTLJ68NHmQ0g6Ytkpke1qv"
        }
    })

    .then(resp => {
        return resp.json()
    })
    .then(data => {
        container.innerHTML = "";
        getPhotos(data.photos);
    });
}

function getPhotos(images) {
    images.map(image => {
        cardTag = `<div class="card">
                    <img src=${image.src.tiny} />
                    </div>`;
        container.innerHTML += cardTag;
    })
}