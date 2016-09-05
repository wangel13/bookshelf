function getBooks(sort) {
  return fetch(`/api/books?sort=${sort}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function addBook(book) {
  book = JSON.stringify(book);
  return fetch("/api/addbook/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: book
  }).then(checkStatus)
    .then(parseJSON);
}

function editBook(book) {
  book = JSON.stringify(book);
  return fetch("/api/editbook/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: book
  }).then(checkStatus)
    .then(parseJSON);
}

function delBook(book) {
  book = JSON.stringify(book);
  return fetch("/api/delbook/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: book
  }).then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Api = { getBooks, addBook, editBook, delBook };

export default Api;
