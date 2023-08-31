/** @module login-script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat varibel inputPasswordElement untuk tampilan input paswword
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email semenetara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik buttton. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai emaiil yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  /**
  * Membuat variabel email untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
 
  /* Comment : Memastikan bahwa nilai eail dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : Jika sesuai makan halaman akan berpindah ke halaman home.*/
    goToHome();
  } else {

    /* Comment : Namun jika tidak sesuai maka akan menapilkan informasi bahwa input salah.*/
    showPopUp();
  }
});
