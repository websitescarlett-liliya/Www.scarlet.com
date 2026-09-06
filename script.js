document.addEventListener('DOMContentLoaded', () => {

  // 1. Fitur Dynamic Changing Subtext
  const subtextElement = document.getElementById('dynamic-subtext');
  const subtexts = [
    "Buka halaman tersebut untuk lebih lanjut",
    "Jelajahi ide-ide sukses bersama kawan-kawan!",
    "Bersama cegah tindakan bullying di lingkungan kita",
    "Gunakan platform ini untuk membangun masa depan cerah"
  ];
  let subtextIndex = 0;

  setInterval(() => {
    subtextElement.style.opacity = '0';
    setTimeout(() => {
      subtextIndex = (subtextIndex + 1) % subtexts.length;
      subtextElement.textContent = subtexts[subtextIndex];
      subtextElement.style.opacity = '1';
    }, 500);
  }, 4000);

  // 2. Edit Profile Modal Functionality
  const editBtn = document.getElementById('edit-profile-btn');
  const modal = document.getElementById('profile-modal');
  const closeBtn = document.getElementById('close-modal');
  const editForm = document.getElementById('edit-form');
  const usernameDisplay = document.getElementById('username');
  const inputName = document.getElementById('input-name');

  editBtn.addEventListener('click', () => {
    inputName.value = usernameDisplay.textContent;
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputName.value.trim() !== '') {
      usernameDisplay.textContent = inputName.value.trim();
      modal.style.display = 'none';
    }
  });
});

// 3. Tab Switching Functionality (Ruang Edukasi & Action)
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');
  
  // Highlighting active button
  const activeBtn = Array.from(buttons).find(
    btn => btn.getAttribute('onclick').includes(tabName)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}
