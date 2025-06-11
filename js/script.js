// Menunggu hingga seluruh dokumen termuat, lalu meminta nama pengguna lewat prompt.
// Jika pengguna tidak memasukkan nama, maka akan ditampilkan "Pengunjung".
// Nama akan ditampilkan di elemen dengan ID "userName".
document.addEventListener("DOMContentLoaded", function () {
  let userName = prompt("Selamat datang! Silakan masukkan nama Anda:"); // Langsung meminta nama

  if (!userName) {
    userName = "Pengunjung"; // Jika tidak diisi, gunakan "Pengunjung"
  }

  document.getElementById("userName").textContent = userName;
});

// Menangani klik pada tombol hamburger untuk toggle navigasi.
// Menambahkan/menghapus class "active" pada elemen dengan ID "nav-links".
// Juga menampilkan status menu dan nilai CSS display ke console.
document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");

  console.log("Menu state:", nav.classList.contains("active"));
  console.log("Computed display:", window.getComputedStyle(nav).display);
});

// Daftar gambar background untuk hero section.
// Fungsi akan mengubah gambar secara berkala setiap 2 detik menggunakan setInterval.
const backgroundImages = ["assets/bg-1.jpeg", "assets/bg-2.jpg", "assets/bg-3.jpg", "assets/bg-4.jpg"];
let currentIndex = 0;
const heroBg = document.querySelector(".hero-bg");

function changeBackground() {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  heroBg.src = backgroundImages[currentIndex];
}

setInterval(changeBackground, 2000); // Ubah background setiap 2 detik

// Menunggu DOM termuat lalu menjalankan logika validasi dan penampilan data dari form.
// Menangani validasi input form, penanganan error, dan penampilan pesan ke dalam resultBox.
document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");
  const resultBox = document.getElementById("resultBox"); // Kontainer untuk semua pesan

  resultBox.innerHTML = ""; // Membersihkan isi awal resultBox

  // Elemen untuk menampilkan pesan kesalahan masing-masing input
  const nameError = document.getElementById("nameError");
  const birthdateError = document.getElementById("birthdateError");
  const messageError = document.getElementById("messageError");

  // Fungsi untuk menampilkan pesan kesalahan pada elemen tertentu
  function showError(element, message) {
    element.textContent = message;
  }

  // Menghapus semua pesan kesalahan sebelum validasi baru
  function clearErrors() {
    nameError.textContent = "";
    birthdateError.textContent = "";
    messageError.textContent = "";
  }

  // Menangani submit form
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    clearErrors(); // Hapus error lama sebelum validasi baru

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value; // Gender tidak perlu validasi karena ada default
    const message = document.getElementById("message").value.trim();

    let hasError = false; // Penanda jika ada error

    // Validasi form input
    if (name === "") {
      showError(nameError, "Nama harus diisi!");
      hasError = true;
    }
    if (birthdate === "") {
      showError(birthdateError, "Tanggal lahir harus diisi!");
      hasError = true;
    }
    if (message === "") {
      showError(messageError, "Pesan harus diisi!");
      hasError = true;
    }

    // Jika ada error, hentikan proses
    if (hasError) {
      return;
    }

    // Jika valid, ambil waktu saat ini
    const now = new Date();
    const currentTime = now.toLocaleTimeString();

    // Buat elemen div baru untuk menyimpan hasil input
    const messageEntry = document.createElement("div");
    messageEntry.classList.add("message-entry"); // Class opsional untuk styling

    // Isi div dengan data dari form
    messageEntry.innerHTML = `
      <p><strong>Waktu saat ini:</strong> <span>${currentTime}</span></p>
      <p><strong>Nama:</strong> <span>${name}</span></p>
      <p><strong>Tanggal Lahir:</strong> <span>${birthdate}</span></p>
      <p><strong>Jenis kelamin:</strong> <span>${gender}</span></p>
      <p><strong>Pesan:</strong> <span>${message}</span></p>
      <hr>
    `;

    // Tambahkan elemen hasil ke bagian atas resultBox
    resultBox.prepend(messageEntry);

    // Reset form setelah submit sukses
    messageForm.reset();
  });
});
