// js/quiz.js

document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Form elemanlarını al
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobby = document.getElementById('hobby').value;

  let isValid = true;

  // Hata mesajı alanları
  const nameError = document.getElementById('nameError');
  const ageError = document.getElementById('ageError');
  const genderError = document.getElementById('genderError');
  const hobbyError = document.getElementById('hobbyError');

  // Temizle
  nameError.textContent = '';
  ageError.textContent = '';
  genderError.textContent = '';
  hobbyError.textContent = '';

  // Validasyon
  if (name === '') {
    nameError.textContent = 'Adınızı giriniz.';
    isValid = false;
  }

  if (age === '' || isNaN(age) || age < 5 || age > 120) {
    ageError.textContent = 'Geçerli bir yaş giriniz.';
    isValid = false;
  }

  if (!gender) {
    genderError.textContent = 'Cinsiyet seçiniz.';
    isValid = false;
  }

  if (hobby === '') {
    hobbyError.textContent = 'Bir aktivite seçiniz.';
    isValid = false;
  }

  if (isValid) {
    const userData = {
      name,
      age,
      gender: gender.value,
      hobby
    };

    // LocalStorage'e kaydet
    localStorage.setItem('userData', JSON.stringify(userData));

    // Sonuç sayfasına yönlendir
    window.location.href = 'result.html';
  }
});
