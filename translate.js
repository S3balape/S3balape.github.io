function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'it',
      includedLanguages: 'en,es,de,fr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
  
  // Rimuovi il banner di traduzione quando traduci
  document.addEventListener('DOMContentLoaded', function() {
      const translateButton = document.getElementById('google_translate_element');
      translateButton.addEventListener('click', function() {
          document.querySelector('.goog-te-banner-frame').style.display = 'none';
      });
  });
  