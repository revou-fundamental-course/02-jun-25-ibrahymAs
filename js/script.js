document.addEventListener("DOMContentLoaded", function () {
  let userName = prompt("Selamat datang! Silakan masukkan nama Anda:"); // Langsung meminta nama

  // Periksa apakah pengguna memasukkan nama
  if (!userName) {
    userName = "Pengunjung"; // Jika tidak diisi, gunakan "Pengunjung"
  }

  document.getElementById("userName").textContent = userName;
});

document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");

  console.log("Menu state:", nav.classList.contains("active"));
  console.log("Computed display:", window.getComputedStyle(nav).display);
});

const backgroundImages = ["assets/bg-1.jpeg", "assets/bg-2.jpg", "assets/bg-3.jpg", "assets/bg-4.jpg"];
let currentIndex = 0;
const heroBg = document.querySelector(".hero-bg");

function changeBackground() {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  heroBg.src = backgroundImages[currentIndex];
}

// Ganti background setiap 5 detik (5000 milidetik)
setInterval(changeBackground, 2000);

document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");
  const resultBox = document.getElementById("resultBox"); // Ini adalah kontainer untuk semua pesan

  resultBox.innerHTML = ""; // Membersihkan konten awal result-box

  // Dapatkan elemen span untuk pesan kesalahan
  const nameError = document.getElementById("nameError");
  const birthdateError = document.getElementById("birthdateError");
  const messageError = document.getElementById("messageError");

  // Fungsi untuk menampilkan pesan kesalahan
  function showError(element, message) {
    element.textContent = message;
  }

  // Fungsi untuk menghapus pesan kesalahan
  function clearErrors() {
    nameError.textContent = "";
    birthdateError.textContent = "";
    messageError.textContent = "";
  }

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit default

    // Bersihkan pesan kesalahan sebelumnya setiap kali form disubmit
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value; // Gender tidak memerlukan validasi kosong karena sudah ada default
    const message = document.getElementById("message").value.trim();

    let hasError = false; // Flag untuk mengecek apakah ada kesalahan

    // Validasi input dan tampilkan pesan kesalahan
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

    // Jika ada kesalahan, hentikan proses selanjutnya
    if (hasError) {
      return;
    }

    // Jika tidak ada kesalahan, lanjutkan proses menampilkan pesan
    const now = new Date();
    const currentTime = now.toLocaleTimeString();

    // Buat elemen div baru untuk setiap pesan
    const messageEntry = document.createElement("div");
    messageEntry.classList.add("message-entry"); // Tambahkan kelas untuk styling (opsional)

    // Isi div dengan detail pesan
    messageEntry.innerHTML = `
      <p><strong>Waktu saat ini:</strong> <span>${currentTime}</span></p>
      <p><strong>Nama:</strong> <span>${name}</span></p>
      <p><strong>Tanggal Lahir:</strong> <span>${birthdate}</span></p>
      <p><strong>Jenis kelamin:</strong> <span>${gender}</span></p>
      <p><strong>Pesan:</strong> <span>${message}</span></p>
      <hr>
    `;

    // Tambahkan pesan baru ke bagian atas resultBox
    resultBox.prepend(messageEntry);

    // Reset formulir setelah submit berhasil
    messageForm.reset();
  });
});
