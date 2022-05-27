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

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert();
  });

  //button（削除）タグ生成
  const deleatButton = document.createElement("button");
  deleatButton.innerText = "削除";
  deleatButton.addEventListener("click", () => {
    alert();
  });

  //liタグの子要素にdivを設定
  li.appendChild(div);

  //divタグの子要素に各要素を設定
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleatButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
