const createArticleEntry = article => `
<div>
    <h3>${article.title}</h3>
    <span>Synopsis: ${article.synopsis}</span><br>
    <span><a href="${article.url}" target="_blank">Link</a></span>
    <br>
    <button id="deleteBtn--${article.id}">Delete</button>
    <button id="editBtn--${article.id}">Edit</button>
</div><hr/>
`

export default createArticleEntry