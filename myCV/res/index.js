document.addEventListener('DOMContentLoaded', (e) => {
    debugger;
    let json = JSON.parse(`[
        {
          "idCV": 1,
          "fullName": "Maikol Diaz Hoya",
          "icon": "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg",
          "email": "diazhoyamaikol@gmail.com",
          "phoneNumber": "3103129835",
          "description": "I'm a young software developer wanting to eat the world, I want to put myself to the test in this technological world"
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
        let chield = `
        <div class="card" style="width: 18rem;">
    <img src="${e.icon}" class="card-img-top" alt="avatar">
    <div class="card-body">
        <h5 class="card-title">${e.fullName}</h5>
        <p class="card-text"><small class="text-muted">${e.email}</small></p>
        <p class="card-text">${e.description}</p>
        <a href="#" class="btn btn-primary">see more</a>
    </div>
      </div>`;
        cardsContainer.insertAdjacentHTML("afterbegin", chield)
    });

})