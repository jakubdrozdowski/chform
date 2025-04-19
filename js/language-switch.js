/**
 * JavaScript do obsługi przełączania języków formularza Cosmetic Hub
 */

// Tłumaczenia tekstów
const translations = {
    'pl': {
        'formTitle': 'Formularz klienta',
        'requiredFields': 'pola obowiązkowe',
        'noCompanyYet': 'Jeszcze nie mam firmy',
        'companyDataTitle': 'Dane firmy do faktury',
        'companyName': 'Nazwa',
        'companyAddress': 'Adres',
        'companyNIP': 'NIP',
        'companyEmail': 'Adres e-mail',
        'companyPhone': 'Numer kontaktowy',
        'deliveryDataTitle': 'Dane do dostawy',
        'copyButton': 'Kopiuj z danych do faktury',
        'dataCopied': 'Dane skopiowane ✓',
        'deliveryName': 'Nazwa',
        'deliveryAddress': 'Adres',
        'deliveryEmail': 'Adres e-mail',
        'deliveryPhone': 'Numer kontaktowy',
        'companyInfoTitle': 'Informacje o firmie',
        'foundingYear': 'Rok założenia',
        'businessTypeTitle': 'Rodzaj działalności',
        'businessTypeWarehouse': 'hurtownia',
        'businessTypeStore': 'sklep stacjonarny/online',
        'businessTypeSalon': 'salon kosmetyczny',
        'salesChannelTitle': 'Kanał sprzedaży',
        'salesChannelPhysical': 'stacjonarnie',
        'salesChannelOnline': 'online',
        'website': 'Strona www',
        'instagram': 'Profil Instagram',
        'facebook': 'Profil Facebook',
        'profilePlaceholder': '@nazwa_profilu',
        'currentBrands': 'Obecne marki w sprzedaży',
        'interested': 'Jestem zainteresowany/a zakupem',
        'yes': 'TAK',
        'no': 'NIE',
        'monthlyOrderValue': 'Miesięczna wartość zamówień:',
        'additionalComments': 'Dodatkowe uwagi z Państwa strony',
        'additionalInfoTitle': 'Dodatkowe informacje od klienta',
        'gdprConsent': 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu w celu nawiązania współpracy handlowej zgodnie z przepisami o ochronie danych osobowych (RODO).',
        'submitButton': 'Wyślij formularz'
    },
    'en': {
        'formTitle': 'Client Form',
        'requiredFields': 'required fields',
        'noCompanyYet': 'I don\'t have a company yet',
        'companyDataTitle': 'Company Data for Invoice',
        'companyName': 'Name',
        'companyAddress': 'Address',
        'companyNIP': 'Tax ID',
        'companyEmail': 'E-mail Address',
        'companyPhone': 'Phone Number',
        'deliveryDataTitle': 'Delivery Information',
        'copyButton': 'Copy from invoice data',
        'dataCopied': 'Data copied ✓',
        'deliveryName': 'Name',
        'deliveryAddress': 'Address',
        'deliveryEmail': 'E-mail Address',
        'deliveryPhone': 'Phone Number',
        'companyInfoTitle': 'Company Information',
        'foundingYear': 'Founding Year',
        'businessTypeTitle': 'Business Type',
        'businessTypeWarehouse': 'wholesale',
        'businessTypeStore': 'physical/online store',
        'businessTypeSalon': 'beauty salon',
        'salesChannelTitle': 'Sales Channel',
        'salesChannelPhysical': 'physical',
        'salesChannelOnline': 'online',
        'website': 'Website',
        'instagram': 'Instagram Profile',
        'facebook': 'Facebook Profile',
        'profilePlaceholder': '@profile_name',
        'currentBrands': 'Current Brands in Sale',
        'interested': 'I am interested in purchasing',
        'yes': 'YES',
        'no': 'NO',
        'monthlyOrderValue': 'Monthly order value:',
        'additionalComments': 'Additional comments from your side',
        'additionalInfoTitle': 'Additional Information from Client',
        'gdprConsent': 'I consent to the processing of my personal data contained in the form for the purpose of establishing a business cooperation in accordance with the data protection regulations (GDPR).',
        'submitButton': 'Submit Form'
    },
    'ua': {
        'formTitle': 'Форма клієнта',
        'requiredFields': 'обов\'язкові поля',
        'noCompanyYet': 'У мене ще немає компанії',
        'companyDataTitle': 'Дані компанії для рахунку',
        'companyName': 'Назва',
        'companyAddress': 'Адреса',
        'companyNIP': 'Податковий номер',
        'companyEmail': 'Електронна адреса',
        'companyPhone': 'Контактний номер',
        'deliveryDataTitle': 'Інформація для доставки',
        'copyButton': 'Копіювати з даних для рахунку',
        'dataCopied': 'Дані скопійовано ✓',
        'deliveryName': 'Назва',
        'deliveryAddress': 'Адреса',
        'deliveryEmail': 'Електронна адреса',
        'deliveryPhone': 'Контактний номер',
        'companyInfoTitle': 'Інформація про компанію',
        'foundingYear': 'Рік заснування',
        'businessTypeTitle': 'Тип діяльності',
        'businessTypeWarehouse': 'оптова торгівля',
        'businessTypeStore': 'фізичний/онлайн магазин',
        'businessTypeSalon': 'салон краси',
        'salesChannelTitle': 'Канал продажу',
        'salesChannelPhysical': 'фізичний',
        'salesChannelOnline': 'онлайн',
        'website': 'Веб-сайт',
        'instagram': 'Профіль Instagram',
        'facebook': 'Профіль Facebook',
        'profilePlaceholder': '@назва_профілю',
        'currentBrands': 'Поточні бренди в продажу',
        'interested': 'Я зацікавлений/а у придбанні',
        'yes': 'ТАК',
        'no': 'НІ',
        'monthlyOrderValue': 'Щомісячна вартість замовлень:',
        'additionalComments': 'Додаткові коментарі з вашого боку',
        'additionalInfoTitle': 'Додаткова інформація від клієнта',
        'gdprConsent': 'Я даю згоду на обробку моїх персональних даних, що містяться у формі, з метою встановлення ділової співпраці відповідно до правил захисту даних (GDPR).',
        'submitButton': 'Надіслати форму'
    }
};

// Funkcja do przełączania języka
function switchLanguage(lang) {
    // Aktualizuj przyciski
    document.getElementById('pl-lang').classList.toggle('active', lang === 'pl');
    document.getElementById('en-lang').classList.toggle('active', lang === 'en');
    document.getElementById('ua-lang').classList.toggle('active', lang === 'ua');
    
    // Zaktualizuj wszystkie etykiety i teksty
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Jeśli to input placeholder
            if (el.placeholder !== undefined) {
                el.placeholder = translations[lang][key];
            } 
            // Jeśli to element z tekstem
            else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Zapisz wybór w localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Inicjalizacja przy załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    // Ustaw język na podstawie zapisanego wyboru lub domyślnie polski
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    switchLanguage(savedLang);
});