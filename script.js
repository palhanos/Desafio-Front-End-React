const words = [];
function getSelectText() {
  const text = window.getSelection().toString();
  if (text) {
    const label = prompt("digite a label desse texto");
    words.push({ text, label });
  }
  console.table(words);
}
document.onmouseup = getSelectText;
