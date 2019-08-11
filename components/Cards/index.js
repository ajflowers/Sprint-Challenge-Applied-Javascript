// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// //test object copy/pasted from response data
// testObj = {
//     authorName: "FIDO WALKSALOT",
//     authorPhoto: "./assets/fido.jpg",
//     headline: "Bootstrap 5: Get a Sneak Peak at all the New Features"
// }
// console.log(testObj);

let cardsDiv = document.querySelector('.cards-container');
let cardsToPage = document.createDocumentFragment();

function makeCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeadline = document.createElement('div');
    cardHeadline.className = 'headline';
    cardHeadline.append(data.headline);


    const cardAuthor = document.createElement('div');
    cardAuthor.className = 'author';


    const cardImgBox = document.createElement('div');
    cardImgBox.className = 'img-container';


    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', data.authorPhoto);

    const cardSpan = document.createElement('span');
    cardSpan.append(`By ${data.authorName}`);

    
    
    cardImgBox.appendChild(cardImg);
    cardAuthor.appendChild(cardImgBox);
    cardAuthor.appendChild(cardSpan);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);

    // console.log(card);
    return card;   

}



let articles = {};
let articlesArray = [];
let articleStories = []
let articleCards = [];
 

// console.log(cardsDiv)

function returnStoryObjects(topic) {
    let topicArray = articles[`${topic}`];
    // console.log(topicArray);
    topicArray.forEach(item => {
        articleStories.push(item)
    })
    return;
}

//cardsDiv.appendChild(makeCard(testObj));


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        //save raw data for easier parsing
        articles = (response.data.articles);
        // console.log(articles); 
    })
    // .then(() => {
    //     articlesArray = Object.values(articles);
    //     articleStories = [].concat(...articlesArray);
    //     console.log(articleStories);
    //     articlesCards = articleStories.map(makeCard);
    //     console.log(articlesCards)
    //     articleCards.forEach(story => {
    //         cardsToPage.appendChild(story);
    //     })
    //     console.log(cardsToPage);
    //     cardsDiv.appendChild(cardsToPage);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
    



    .then(() => {
        //get array of key values
        articlesKeys = Object.keys(articles);
        // console.log(articlesKeys);
    })
    .then(() => {
        //foreach over key value array
        articlesKeys.forEach(topic => {
            returnStoryObjects(topic);        
        })
        console.log(articleStories);
    })
    .then(() => {
        articleStories.forEach(story => {
            newCard = makeCard(story);
            cardsToPage.appendChild(newCard);
            cardsDiv.appendChild(cardsToPage);
        })
    })


    //response.data.articles = object w/ 6 keyvalues
    //articles keyvalues = topics
    //each object value in .articles.topic = array of n objects 
    //objects in array contain almost all data needed

