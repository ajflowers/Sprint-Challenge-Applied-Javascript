// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabBar = document.querySelector('.topics');

function makeTab(topic) {
    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.append(topic);
    
    return newTab;
}

let topicArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        topicArray = response.data.topics;
    })
    .then(() => {
        topicArray.forEach(topic => {
            tabBar.appendChild(makeTab(topic))
        })
    })
    
    .catch((err) => {
        console.log(err);
    })