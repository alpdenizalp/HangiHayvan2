// js/result.js

document.addEventListener('DOMContentLoaded', () => {
  const resultContainer = document.getElementById('resultContainer');
  const data = JSON.parse(localStorage.getItem('userData'));

  if (!data) {
    resultContainer.innerHTML = '<p>Bilgiler bulunamadı. Lütfen testi tekrar yapın.</p>';
    return;
  }

  const { name, age, gender, hobby } = data;

  // Basit eşleştirme mantığı
  let animal = '';
  let description = '';
  let image = '';

  switch (hobby) {
    case 'Doğa gezisi':
      animal = 'Kurt';
      description = 'Özgürlüğüne düşkün, sadık ve gözlemcisin.';
      image = 'images/kurt.jpg';
      break;
    case 'Uyumak':
      animal = 'Kedi';
      description = 'Konforuna düşkünsün, tatlı ve bağımsızsın.';
      image = 'images/kedi.jpg';
      break;
    case 'Koşmak':
      animal = 'Çita';
      description = 'Enerjik, hızlı ve hedef odaklısın!';
      image = 'images/cita.jpg';
      break;
    case 'Yemek':
      animal = 'Ayı';
      description = 'Keyfine düşkün, güçlü ve koruyucusun.';
      image = 'images/ayi.jpg';
      break;
    case 'Sosyalleşmek':
      animal = 'Köpek';
      description = 'Sadık, sosyal ve sevecensin!';
      image = 'images/kopek.jpg';
      break;
    default:
      animal = 'Bukalemun';
      description = 'Uyum yeteneğin yüksek, her ortama ayak uydurursun.';
      image = 'images/bukalemun.jpg';
  }

  resultContainer.innerHTML = `
    <h2>${name}, senin hayvanın: <strong>${animal}</strong>!</h2>
    <p>${description}</p>
    <img src="${image}" alt="${animal}" style="max-width:300px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); margin-top:1rem;">
  `;
});
