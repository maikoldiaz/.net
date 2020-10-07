document.addEventListener('DOMContentLoaded', (e) => {
    debugger;
    let json = JSON.parse(`[
        {
          "idCV": 1,
          "fullName": "Maikol Diaz Hoya",
          "icon": "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg",
          "email": "diazhoyamaikol@gmail.com",
          "phoneNumber": "3103129835",
          "description": "i'm a young software developer"
        },
        {
          "idCV": 2,
          "fullName": "David Botero",
          "icon": "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg",
          "email": "davidbotero@gmail.com",
          "phoneNumber": "123456789",
          "description": "i'm a young student"
        }
      ]`);
    let cardsContainer = document.getElementById('cards');
    json.forEach(e => {
        debugger;
        let chield = `<div name="card" class="card-box">
            <div class="card-container">
                <img src="${e.icon}" alt="avatar" class="card-img">
            </div>
            <div class="card-container">
                <h3><b id="cardName">${e.fullName}</b></h4>
                <p5>${e.email}</h5>
                <p id="cardDescription">${e.description}</p>
            </div>
        </div>`;
        cardsContainer.insertAdjacentHTML("afterbegin",chield)
    });
})