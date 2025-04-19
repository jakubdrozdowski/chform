/**
 * JavaScript do obsługi formularza Cosmetic Hub
 * Wysyła dane formularza do backendu za pomocą API
 */

// Adres backendu - wersja produkcyjna na Railway
const BACKEND_URL = 'https://integrator2-production.up.railway.app/api/form/submit';

// Funkcja zbierająca dane z formularza
function collectFormData() {
    const formData = {};
    
    // Zbierz wszystkie inputs, checkboxy i textareas
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, input[type="hidden"]');
    
    inputs.forEach(input => {
        if (input.name && input.value) {
            formData[input.name] = input.value;
        }
    });
    
    // Zbierz checkboxy (tylko zaznaczone)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        if (checkbox.name) {
            // Jeśli jest już taka wartość, dodaj do niej
            if (formData[checkbox.name]) {
                formData[checkbox.name] += `, ${checkbox.value}`;
            } else {
                formData[checkbox.name] = checkbox.value;
            }
        }
    });
    
    return formData;
}

// Funkcja wysyłająca dane do backendu
async function submitFormToBackend(formData) {
    try {
        // Pokaż loader lub komunikat o ładowaniu
        document.querySelector('.submit-button').disabled = true;
        document.querySelector('.submit-button').textContent = 'Wysyłanie...';
        
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formFields: formData
            })
        });
        
        if (response.ok) {
            // Resetujemy formularz
            document.getElementById('clientForm').reset();
            
            // Bezpośrednie przekierowanie na stronę podziękowania - bez alertów
            window.location.href = 'thank-you-page.html';
            
            return true;
        } else {
            const errorText = await response.text();
            throw new Error(errorText || 'Wystąpił błąd podczas wysyłania formularza');
        }
    } catch (error) {
        alert(`Błąd: ${error.message}`);
        
        // Przywróć przycisk do stanu początkowego
        document.querySelector('.submit-button').disabled = false;
        document.querySelector('.submit-button').textContent = 'Wyślij formularz';
        
        return false;
    }
}

// Obsługa kliknięcia przycisku Submit
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit-button');
    
    submitButton.addEventListener('click', async function() {
        // Uruchom oryginalną walidację z formularza HTML
        if (validateAndPrepareForm(document.getElementById('clientForm'))) {
            // Zbierz dane formularza
            const formData = collectFormData();
            
            // Wyślij dane do backendu
            await submitFormToBackend(formData);
        }
    });
    
    // Obsługa zdarzenia "submit" na formularzu
    const form = document.getElementById('clientForm');
    form.addEventListener('submit', function(event) {
        // Zapobiegaj domyślnej akcji formularza (wysłanie mailem)
        event.preventDefault();
    });
});