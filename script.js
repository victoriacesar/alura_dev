/* ------------ CHANGE CODE BOX COLOR -------------- */
const selectColor = document.querySelector("#color");
const editorColor = document.querySelector(".code_block");

selectColor.addEventListener("input", (event) => {
  let color = event.target.value;
  editorColor.style = `background: ${color}`;
});
/* ------------------------------------------------ */

/* ------------ ADD HIGHLIGHT -------------- */
const codeArea = document.querySelector(".code_textarea");
const language = document.querySelector("#language");
const btnHighlight = document.querySelector(".code_btn");

const codeEdit = codeArea.querySelector("code");
console.log(codeEdit);

function changeLanguage() {
  const codeEdit = codeArea.querySelector("code");
  codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteeditable="true" aria-label="editor"></code>`;
  codeArea.firstChild.innerText = codeEdit.innerText;
}

language.addEventListener("change", () => {
  changeLanguage();
});

btnHighlight.addEventListener("click", () => {
  const codeEdit = codeArea.querySelector("code");
  hljs.highlightElement(codeEdit);
});

/* ---------------------------------------- */
const btnSave = document.querySelector(".form_btn");

function setCard() {
  let projectName = document.querySelector("#nome").value;
  let projectDescription = document.querySelector("#description").value;
  const codeEdit = codeArea.querySelector("code");

  if (editorColor.style.backgroundColor != "") {
    color = editorColor.style.backgroundColor;
  } else {
    color = "#EE8080";
  }

  let project = {
    id: getId(),
    projectData: {
      name: projectName,
      description: projectDescription,
      language: language.value,
      color: color,
      code: codeEdit.innerText,
    },
  };

  console.log(project);
  return project;
}

const getId = () => {
  return localStorage.length;
};

const saveLocalStorage = (object) => {
  localStorage.setItem(object.id, JSON.stringify(object));
};

btnSave.addEventListener("click", (event) => {
  event.preventDefault();
  let project = setCard();
  saveLocalStorage(project);
});
