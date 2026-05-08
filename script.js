const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const searchInput = document.getElementById('diseaseSearchInput');

// 1. Image Upload & Result Logic
uploadArea.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // Image එක දැම්මම විස්තර පෙන්වීම
            resultDisplay.innerHTML = `
                <div class="result-card">
                    <h3 style="color: #2e7d32; margin-bottom: 10px;">Analysis Results: Leaf Curl Virus</h3>
                    <p><strong>හේතුව (Reason):</strong> Whitefly infestation or nutrient deficiency.</p>
                    <p><strong>පිළියම් (Treatments):</strong> Use organic pesticides like Neem oil and ensure balanced fertilizer application.</p>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    }
});

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    resultDisplay.innerHTML = '';
}

// 2. Search Button Logic
function performSearch() {
    const query = searchInput.value.trim();
    if(query) {
        // මෙතනදී අපි search කරන වචනයට අදාළව result එකක් simulate කරනවා
        resultDisplay.innerHTML = `
            <div class="result-card" style="border-left-color: #1976d2;">
                <h3 style="color: #1976d2; margin-bottom: 10px;">Search Result for: ${query}</h3>
                <p>Searching our database for information regarding "${query}"... Details will appear here soon.</p>
            </div>
        `;
        // Page එක පහළට scroll කරනවා result එක පේන්න
        resultDisplay.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Please enter a disease name to search!");
    }
}

// 3. Microphone (Voice Search) Logic
const voiceBtn = document.getElementById('voiceBtn');

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; 
    
    voiceBtn.addEventListener('click', () => {
        recognition.start();
        voiceBtn.style.color = 'red'; // Mic එක වැඩ කරන බව පෙන්වන්න
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        voiceBtn.style.color = '#2e7d32';
        performSearch(); // Voice එකෙන් කිව්ව ගමන් search කරනවා
    };

    recognition.onend = () => {
        voiceBtn.style.color = '#2e7d32';
    };
} else {
    voiceBtn.addEventListener('click', () => {
        alert("Voice recognition is not supported in this browser.");
    });
}
