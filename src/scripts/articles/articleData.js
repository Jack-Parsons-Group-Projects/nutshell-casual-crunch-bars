const newsUrl = "http://localhost:3000";

const API = {
  getNewsArticles() {
    return fetch(`${newsUrl}/newsArticles`).then(response => response.json());
  },
  postNewsArticles(article) {
    return fetch(`${newsUrl}/newsArticles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    });
  },
  deleteNewsArticles(articleId) {
    return fetch(`${newsUrl}/newsArticles/${articleId}`, {
      method: "DELETE"
    });
  },
  editNewsArticles(article) {
      return fetch(`${newsUrl}/newsArticles/${article.id}`, {
          method:"PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(article)
      })
  }
};

export default API;
