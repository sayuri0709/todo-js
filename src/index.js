import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //span生成
  const span = document.createElement("span");
  span.innerText = inputText;

  //liタグの子要素にdivを設定
  li.appendChild(div);

  //divタグの子要素に各要素を設定
  div.appendChild(span);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
