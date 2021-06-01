const mainCommunity = document.querySelector(".main_community_card");

window.onload = function () {
  showProjects();
  console.log(localStorage.length);
};

function showProjects() {
  if (localStorage.length > 0) {
    let projects = [];
    for (let i = 0; i < localStorage.length; i++) {
      projects.push(JSON.parse(localStorage.getItem(i)));
    }

    projects.map((project) => {
      let card = cardStyle(project);
      mainCommunity.innerHTML += card;
      let htmlCode = mainCommunity.querySelector(`[data-id="${project.id}"]`);
      htmlCode.innerText = project.projectData.code;
    });
  }
}

function cardStyle(project) {
  const card = `
  <div class="card_box">
    <div class="card_box-code" style="background: ${project.projectData.color}">
      <div class="code_circleBar">
        <div class="code_circle red"></div>
        <div class="code_circle yellow"></div>
        <div class="code_circle green"></div>
      </div>
      <p class="p_textarea" data-id="${project.id}"></p>
    </div>
    <div class="card_info">
      <h2>${project.projectData.name}</h2>
      <p>${project.projectData.description}</p>
    </div>
    <div class="card_bottomBar">
      <div class="card_bottomBar_icon">
        <div class="count">
          <img src="assets/img/comment.svg" alt="Comment" />
          <span>9</span>
        </div>
        <div class="count">
          <img src="assets/img/heart.svg" alt="Heart" />
          <span>9</span>
        </div>
      </div>
      <div class="card_bottomBar_profile">
        <img src="assets/img/perfil-quadrado" alt="Profile photo" />
        <p>@Victória</p>
      </div>
    </div>
  </div>
  `;
  return card;
}
