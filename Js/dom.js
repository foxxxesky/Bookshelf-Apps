const UNCOMPLETED_READING_BOOKS = 'uncompleted';
const COMPLETED_READING_BOOKS = 'completed';
const BOOKSSHELF = 'booksid';

function readingBooks(title, author, year, isCompleted) {
  // Judul
  const textTitle = document.createElement('h5');
  textTitle.classList.add('pt-3');
  textTitle.innerText = title;

  //   Penulis
  const textPenulis = document.createElement('p');
  textPenulis.innerText = author;

  // Tahun
  const textTahun = document.createElement('p');
  textTahun.innerText = year;

  //   add content
  const content = document.createElement('div');
  content.append(textTitle, textPenulis, textTahun);

  // span button
  const span = document.createElement('span');
  span.classList.add('ps-3');

  if (isCompleted) {
    content.append(createBelumSelesaiDibacaButton(), span, createHapusButton());
  } else {
    content.append(createSelesaiDibacaButton(), span, createHapusButton());
  }

  return content;
  // updatedDataToStorage();
}

// add reading books
function addBooks() {
  const uncompletedReadingBooks = document.getElementById(UNCOMPLETED_READING_BOOKS);
  const completedReadingBooks = document.getElementById(COMPLETED_READING_BOOKS);

  const title = document.getElementById('judul_buku').value;
  const author = document.getElementById('penulis').value;
  const year = document.getElementById('tahun').value;
  const completedBook = document.getElementById('isCompleted').checked;

  const newbook = readingBooks(title, author, year, completedBook);
  const newBookObject = composeBookshelfObject(title, author, year, completedBook);

  newbook[BOOKSSHELF] = newBookObject.id;
  Bookshelf.push(newBookObject);

  if (completedBook) {
    completedReadingBooks.append(newbook);
  } else {
    uncompletedReadingBooks.append(newbook);
  }

  updatedDataToStorage();
}

// add books to completed

// remove books

// add back books to uncompleted

// action button
function addBookToCompleted(taskElement) {
  taskElement.remove();
}

// create button
function createButtonSelesai(eventListener) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success');
  button.innerText = 'Selesai Dibaca';
  button.addEventListener('click', function (event) {
    eventListener(event);
  });

  return button;
}

function createButtonBelumSelesai(eventListener) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success');
  button.innerText = 'Belum Selesai Dibaca';
  button.addEventListener('click', function (event) {
    eventListener(event);
  });

  return button;
}

function createButtonHapus(eventListener) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerText = 'Hapus Buku';
  button.addEventListener('click', function (event) {
    eventListener(event);
  });

  return button;
}

// button
function createSelesaiDibacaButton() {
  return createButtonSelesai(function (event) {
    addBookToCompleted(event.target.parentElement);
  });
}

function createBelumSelesaiDibacaButton() {
  return createButtonBelumSelesai(function (event) {
    addBookToCompleted(event.target.parentElement);
  });
}

function createHapusButton() {
  return createButtonHapus(function (event) {
    addBookToCompleted(event.target.parentElement);
  });
}

function refreshDataFromBookshelf() {
  const uncompletedList = document.getElementById(UNCOMPLETED_READING_BOOKS);
  const completedList = document.getElementById(COMPLETED_READING_BOOKS);

  for (let book of Bookshelf) {
    const newBook = readingBooks(book.title, book.author, book.year, book.isCompleted);
    newBook[BOOKSSHELF] = book.id;

    if (book.isCompleted) {
      completedList.append(newBook);
    } else {
      uncompletedList.append(newBook);
    }
  }
}
