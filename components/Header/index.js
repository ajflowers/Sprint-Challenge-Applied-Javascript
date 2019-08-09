// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    const headerDate = document.createElement('span');
    headerDate.className = 'date',
    headerDate.append('August 9, 2019');

    const headerH1 = document.createElement('h1');
    headerH1.append('Lambda Times')

    const headerTemp = document.createElement('span');
    headerTemp.className = 'temp';
    headerTemp.append('78°');

    headerDiv.append(headerDate);
    headerDiv.append(headerH1);
    headerDiv.append(headerTemp);


    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(headerDiv);
}

Header();

