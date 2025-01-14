import axios from "axios";
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>

const Card = (article) => {
  let headline = article.headline
  let authorName = article.authorName
  let authorPhoto = article.authorPhoto
 

    let cardDiv = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(span);

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    img.src = authorPhoto;

    span.textContent = authorName ;
    headlineDiv.textContent =  headline ;
console.log(cardDiv)
    return cardDiv
  


//  TASK 6
//   ---------------------
//   Implement this function that takes a css selector as its only argument.
//   It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
//   However, the articles do not come organized in a single, neat array. Inspect the response closely!
//   Create a card from each and every article object in the response, using the Card component.
//   Append each card to the element in the DOM that matches the selector passed to the function.
  
}

const cardAppender = (selector) => {
  let selc = document.querySelector(selector);
 axios.get('http://localhost:5001/api/articles')
 .then( res => {
  let articles = res.data.articles;
    articles.javascript.forEach( obj => {
    selc.appendChild(Card(obj))
    })
    articles.bootstrap.forEach( obj => {
      selc.appendChild(Card(obj))
      })
      articles.technology.forEach( obj => {
        selc.appendChild(Card(obj))
        })
        articles.jquery.forEach( obj => {
          selc.appendChild(Card(obj))
          })
          articles.node.forEach( obj => {
            selc.appendChild(Card(obj))
            })
    console.log(articles)
 })
}

export { Card, cardAppender }

