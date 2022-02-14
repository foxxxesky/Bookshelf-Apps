const STORAGE_KEY = 'Bookshelf-Apps';

let Bookshelf = [];

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Your Browser Dosen't Support Local Storage");
    return false;
  }
  return true;
}

function savedData() {
  const parsed = JSON.stringify(Bookshelf);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event('ondatasaved'));
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);
  if (data !== null) Bookshelf = data;

  document.dispatchEvent(new Event('ondataloaded'));
}

function updatedDataToStorage() {
  if (isStorageExist()) savedData();
}

function composeBookshelfObject(title, author, year, isCompleted) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isCompleted,
  };
}

// function findBook(bookId) {
//   for (let book of Bookshelf) {
//     if (book.id === bookId) {
//       return book;
//     } else {
//       return null;
//     }
//   }
// }

function findBook(BookId) {
  for (book of Bookshelf) {
    if (book.id === BookId) return book;
  }
}

function findBookIndex(bookId) {
  let index = 0;
  for (let book of Bookshelf) {
    if (book.id == bookId) {
      return index;
    }
    index++;
  }
  return -1;
}
