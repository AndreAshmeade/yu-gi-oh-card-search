const API_URL =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0&sort=new";
const IMG_URL = "https://storage.googleapis.com/ygoprodeck.com/pics/";
const SEARCH_API = "https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=";
const container = document.querySelector("#container");
const Card_data_container = document.querySelector(".Card-data-container");

getCards(API_URL);
async function getCards(url) {
    const res = await fetch(url);
    const data = await res.json();

    showCard(data.data);
}

showCard = (Cards) => {
    container.innerHTML = "";

    Cards.forEach((CardData, idx) => {
        const {
            id,
            name,
            level,
            type,
            race,
            atk,
            def,
            attribute,
            archetype,
            desc,
        } = CardData;

        const ShowImgCard = `${IMG_URL}${id}.jpg`;

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="row">
      <div class="row">
            <img src="${ShowImgCard}" alt="Placeholder image"  >
        </div>
      </div>
    </div>
        `;
        
        container.appendChild(card);

        card.addEventListener("click", () => {
            // console.log(id,name,level,type,race,atk,def,attribute,archetype,desc)
            Card_data_container.innerHTML = "";
            const ShowData = document.createElement("div");
            ShowData.classList.add("card_data");
            ShowData.classList.add("active");
            ShowData.innerHTML = `

    
            <i class="fa-solid fa-xmark" onclick="toggle()"></i>
            <div class="img">
            <img src="https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg" alt="">
        </div>
        `;

            Card_data_container.appendChild(ShowData);
        });
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getCards(SEARCH_API + searchTerm);
        container.innerHTML = "";
        search.value = "";
    } else {
        window.location.reload();
    }
});

toggle = () => {
    container.classList.toggle("active");
    Card_data_container.innerHTML = "";
};
