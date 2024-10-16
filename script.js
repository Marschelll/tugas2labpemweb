const root = document.querySelector(".root");

window.onload = () => alert("Selamat datang! Silakan isi form di bawah.");

// Tambahkan struktur HTML menggunakan innerHTML
root.innerHTML = `
  <div class="hWrapper">
    <h1 class="header">Tugas-2 Praktikum Pemrograman Web</h1>
  </div>
  <div class="main-content">
    <form>
      <div>
        <label for="usernameInput">Username</label>
        <input type="text" id="usernameInput" placeholder="Marschell Fideon Damanik" required>
      </div>
      <div>
        <label for="nimInput">NIM</label>
        <input type="text" id="nimInput" placeholder="231401135" required>
      </div>
      <div>
        <label for="komInput">KOM</label>
        <input type="text" id="komInput" placeholder="A" required>
      </div>
      <div>
        <label for="photoInput">Upload Photo</label>
        <input type="file" id="photoInput" accept="image/png, image/jpeg" required>
      </div>
      <input type="submit" value="Submit">
    </form>
    <div class="display-container" style="display: none;"></div>
  </div>
`;

// Tangani pengiriman form
const form = root.querySelector("form");
const displayContainer = root.querySelector(".display-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("usernameInput").value;
  const nim = document.getElementById("nimInput").value;
  const kom = document.getElementById("komInput").value;
  const photo = document.getElementById("photoInput").files[0];

  // Tampilkan kartu dengan data pengguna
  displayContainer.innerHTML = `
    <div class="card">
      <img src="${URL.createObjectURL(photo)}" alt="User Photo">
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>NIM:</strong> ${nim}</p>
      <p><strong>KOM:</strong> ${kom}</p>
    </div>
  `;
  displayContainer.style.display = "block";
  form.style.width = "370px";

  alert("Form berhasil disubmit!");
});
