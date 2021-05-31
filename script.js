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

function changeLanguage() {
  const codeEdit = codeArea.querySelector("code");
  codeArea.innerHTML = `<code class="preview hljs language-${language.value}" contenteeditable="true" aria-label="editor"></code>`;
  codeArea.firstChild.innerText = codeEdit.innerText;
  console.log(codeEdit);
}

language.addEventListener("change", () => {
  changeLanguage();
});

btnHighlight.addEventListener("click", () => {
  const codeEdit = codeArea.querySelector("code");
  hljs.highlightElement(codeEdit);
});
/* ---------------------------------------- */
