const UNCOMPLETED_READING_BOOKS = 'uncompleted';

function readingBooks(bookTitle, penulisBuku, tahunTerbit) {
  // Judul
  const textTitle = document.createElement('h5');
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

  //   add card
  const card = document.createElement('div');
  card.classList.add('card', 'p-3');
  card.append(content);

  //   padding
  const padding = document.createElement('div');
  padding.classList.add('pt-3', 'pb-3');
  padding.append(card);

  return padding;
}

function addBooks() {
  const uncompletedReadingBooks = document.getElementById(UNCOMPLETED_READING_BOOKS);

  const bookTitle = document.getElementById('judul_buku').value;
  const penulisBuku = document.getElementById('penulis').value;
  const tahunTerbit = document.getElementById('tahun').value;

  console.log('judulBuku ' + bookTitle);
  console.log('penulis ' + penulisBuku);
  console.log('tahun ' + tahunTerbit);

  const books = readingBooks(bookTitle, penulisBuku, tahunTerbit);
  uncompletedReadingBooks.append(books);
}
