const UNCOMPLETED_READING_BOOKS = 'uncompleted';
const COMPLETED_READING_BOOKS = 'completed';

function readingBooks(bookTitle, penulisBuku, tahunTerbit, isCompleted) {
  // Judul
  const textTitle = document.createElement('h5');
  textTitle.classList.add('pt-3');
  textTitle.innerText = bookTitle;

  //   Penulis
  const textPenulis = document.createElement('p');
  textPenulis.innerText = penulisBuku;

  // Tahun
  const textTahun = document.createElement('p');
  textTahun.innerText = tahunTerbit;

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
}

// add reading books
function addBooks() {
  const uncompletedReadingBooks = document.getElementById(UNCOMPLETED_READING_BOOKS);

  const bookTitle = document.getElementById('judul_buku').value;
  const penulisBuku = document.getElementById('penulis').value;
  const tahunTerbit = document.getElementById('tahun').value;

  console.log('judulBuku ' + bookTitle);
  console.log('penulis ' + penulisBuku);
  console.log('tahun ' + tahunTerbit);

  const books = readingBooks(bookTitle, penulisBuku, tahunTerbit, false);
  uncompletedReadingBooks.append(books);
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
