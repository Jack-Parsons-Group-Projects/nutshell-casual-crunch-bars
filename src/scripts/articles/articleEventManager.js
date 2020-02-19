import API from "./articleData.js";
import renderNewsArticle from "./articleDom.js";

const articleContainer = document.querySelector("#articleContainer");

const clearForm = () => {
  const hidden = document.getElementById("articleId");
  const title = document.getElementById("title");
  const synopsis = document.getElementById("synopsis");
  const url = document.getElementById("url");

  hidden.value = "";
  title.value = "";
  synopsis.value = "";
  url.value = "";
};

const updateFormFields = articleId => {
  const hidden = document.getElementById("articleId");
  const title = document.getElementById("title");
  const synopsis = document.getElementById("synopsis");
  const url = document.getElementById("url");
  
  articleEventManager.showArticleInput();

  fetch(`http://localhost:3000/newsArticles/${articleId}`)
    .then(response => response.json())
    .then(article => {
      hidden.value = article.id;
      title.value = article.title;
      synopsis.value = article.synopsis;
      url.value = article.url;
      
    });
};

const articleEventManager = {
  hideArticleInput() {
    document.getElementById("titleForm").style = "display:none";
    document.getElementById("synopsisForm").style = "display:none";
    document.getElementById("urlForm").style = "display:none";
    document.getElementById("saveBtn").style = "display:none";
  },
  showArticleInput() {
    document.getElementById("titleForm").style = "";
    document.getElementById("synopsisForm").style = "";
    document.getElementById("urlForm").style = "";
    document.getElementById("saveBtn").style = "";
  },
  addArticleEventListener() {
    const button = document.querySelector(".addBtn");
    button.addEventListener("click", () => {
      this.showArticleInput();
    });
  },
  saveArticleEventListener() {
    const saveButton = document.querySelector("#saveBtn");
    saveButton.addEventListener("click", () => {
      const hidden = document.getElementById("articleId").value;
      const title = document.getElementById("title").value;
      const synopsis = document.getElementById("synopsis").value;
      const url = document.getElementById("url").value;
      const userId = 1;
      

      if (title == false || synopsis == false || url == false) {
        window.alert("Please fill out all entry fields");
      } else {
          const timestamp = new Date().getTime()
        const articleEntry = {
          userId: userId,
          url: url,
          title: title,
          synopsis: synopsis,
          timestamp: timestamp
        };
        if (hidden !== "") {
          articleEntry.id = parseInt(hidden);
          API.editNewsArticles(articleEntry).then(() => {
            API.getNewsArticles()
              .then(renderNewsArticle)
              .then(clearForm)
              .then(articleEventManager.hideArticleInput);
          });
        } else {
          API.postNewsArticles(articleEntry).then(() => {
            API.getNewsArticles()
              .then(renderNewsArticle)
              .then(clearForm)
              .then(articleEventManager.hideArticleInput);
          });
        }
      }
    });
  },
  deleteArticleEventListener() {
    articleContainer.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteBtn--")) {
        const articleIdToDelete = event.target.id.split("--")[1];
        API.deleteNewsArticles(articleIdToDelete).then(() => {
          API.getNewsArticles().then(renderNewsArticle);
        });
      } else if (event.target.id.startsWith("editBtn--")) {
        const articleToEdit = event.target.id.split("--")[1];
        updateFormFields(articleToEdit);
      }
    });
  }
};

export default articleEventManager;
