// ini java
// Pilih elemen menu dan navbar
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Toggle class active saat menu diklik
menu.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("active");
});

// Tutup menu saat klik di luar elemen menu atau navbar
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove("active");
  }
});

// Ambil elemen greeting
const userGreeting = document.getElementById("user-greeting");

// Cek apakah nama sudah disimpan di Local Storage
let userName = localStorage.getItem("userName");

// Jika nama belum ada, minta pengguna memasukkan nama
if (!userName) {
  userName = prompt("Masukan nama panggilan anda:");
  if (userName) {
    localStorage.setItem("userName", userName);
  } else {
    userName = "Pengunjung";
  }
}

// Tampilkan nama di website
userGreeting.textContent = userName;

// Tangkap elemen form
const messageForm = document.getElementById("messageform");

// Tangkap elemen output
const outputContainer = document.querySelector(".output-container");
const outputName = document.getElementById("outputname");
const outputBirthdate = document.getElementById("outputbirthdate");
const outputGender = document.getElementById("outputgender");
const outputMessage = document.getElementById("outputmessage");
const currentTimeElement = document.getElementById("currenttime");

// Fungsi untuk menangani submit form
const handleFormSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("message").value;

  if (!name || !birthdate || !gender || !message) {
    alert("Mohon isi semua field!");
    return;
  }

  const currentTime = new Date().toLocaleString();

  currentTimeElement.textContent = currentTime;
  outputName.textContent = name;
  outputBirthdate.textContent = birthdate;
  outputGender.textContent = gender;
  outputMessage.textContent = message;

  outputContainer.style.display = "block";
  messageForm.reset();
};

// Tambahkan event listener untuk submit form
messageForm.addEventListener("submit", handleFormSubmit);

// Fungsi banner slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".banner-slider .slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // menampilkan slide pertama
  showSlide(currentIndex);

  // Ganti slide setiap 3 detik
  setInterval(autoSlide, 3000);
});
