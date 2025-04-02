function toggleLanguage() {
  document.querySelectorAll('.jp, .en').forEach(el => {
    el.classList.toggle('hidden');
  });
}
