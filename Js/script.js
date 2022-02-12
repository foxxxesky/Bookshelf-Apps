document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBooks();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener('ondatasaved', () => {
  console.log(localStorage.getItem(STORAGE_KEY));
  console.log('Data berhasil di simpan.');
});

document.addEventListener('ondataloaded', () => {
  refreshDataFromBookshelf();
});
