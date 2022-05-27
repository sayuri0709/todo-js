import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //span生成
  const span = document.createElement("span");
  span.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を完了リストから削除
    deleteFromIncomplete(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //spanタグ生成
    const span = document.createElement("span");
    span.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(span);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleatButton = document.createElement("button");
  deleatButton.innerText = "削除";
  deleatButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplete(deleatButton.parentNode);
  });

  //未完了リストから指定の要素を削除
  const deleteFromIncomplete = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  //divタグの子要素に各要素を設定
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleatButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
