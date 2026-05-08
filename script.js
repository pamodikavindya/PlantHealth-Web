const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');

uploadArea.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // විස්තර පෙන්වීම
            resultDisplay.innerHTML = `
                <div class="result-card">
                    <h3 style="color: #2e7d32; margin-bottom: 10px;">Analysis Results: Leaf Curl Virus</h3>
                    <p><strong>හේතුව (Reason):</strong> Whitefly infestation or nutrient deficiency.</p>
                    <p><strong>පිළියම් (Treatments):</strong> Use organic pesticides like Neem oil and ensure balanced fertilizer application.</p>
                </div>
            `;
        }
        reader.readAsDataURL(file);
    }
});

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    resultDisplay.innerHTML = '';
}

function performSearch() {
    const q = document.getElementById('diseaseSearchInput').value;
    if(q) alert('Searching for: ' + q);
}
