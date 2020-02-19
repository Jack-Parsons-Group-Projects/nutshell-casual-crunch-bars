import createArticleEntry from "./articleComponent.js"
const articleContainer = document.querySelector("#articleContainer")

const renderNewsArticle = articles => {
    articleContainer.innerHTML = ""
    
    articles.sort(function(a, b){
        var dateA=new Date(a.timestamp), dateB=new Date(b.timestamp)
        return dateB-dateA
    })
    for (const article of articles) {
        
        const articleCard = createArticleEntry(article)
        articleContainer.innerHTML += articleCard
    }
}

export default renderNewsArticle