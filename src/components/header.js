

let Header = (title, date, temp) => {
  let title1 = document.createElement('h1');
  let date1 = document.createElement('span');
  let temp1 = document.createElement('span');
  let headerDiv = document.createElement('div');
  headerDiv.appendChild(date1);
  headerDiv.appendChild(title1);
  headerDiv.appendChild(temp1);
  title1.textContent = title;
  date1.textContent = date;
  temp1.textContent = temp;
  headerDiv.classList.add('header');
  date1.classList.add('date');
  temp1.classList.add('temp')

  return headerDiv;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}



// TASK 2 
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

// HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
// but it can also take in a variable (ie querySelector(selector))
// We are taking care of passing in the correct selector on line 16,
// so all that you need to do is pass it into the querySelector method
// for the tests to work!
const headerAppender = (selector) => {
  let dom1 = document.body.querySelector(selector)
  const header1 = Header('Bloomtech', 'October 23, 1999, 999 F')
  dom1.appendChild(header1)
}

export { Header, headerAppender }
