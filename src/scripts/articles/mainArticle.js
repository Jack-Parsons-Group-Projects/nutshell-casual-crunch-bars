import articleAPI from "./articleData.js"
import renderNewsArticle from "./articleDom.js"
import articleEventManager from "./articleEventManager.js"

articleEventManager.hideArticleInput()
articleEventManager.addArticleEventListener()
articleEventManager.saveArticleEventListener()
articleEventManager.deleteArticleEventListener()
articleAPI.getNewsArticles().then(renderNewsArticle)

