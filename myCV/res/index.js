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
        },
        {
          "idCV": 3,
          "fullName": "Daniela riaño",
          "icon": "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg",
          "email": "riañodaniela@gmail.com",
          "phoneNumber": "3226223147",
          "description": "I am a exelent nutritionist student",
          "profession": "Nutritionist"
      },
      {
        "idCV": 4,
        "fullName": "Ares Diaz",
        "icon": "https://cdn.pixabay.com/photo/2016/04/22/06/19/dogs-1345211_960_720.jpg",
        "email": "aresdiaz@gmail.com",
        "phoneNumber": "325478963",
        "description": "I am a crazy dog",
        "profession": "dog"
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