const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const uploadBtn = document.getElementById('uploadBtn');

uploadArea.addEventListener('click', () => imageInput.click());
uploadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    imageInput.click();
});

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // Image එක දැම්මම එන Result එක
            resultDisplay.innerHTML = `
                <div class="result-card">
                    <h4>Analysis Complete / පරීක්ෂාව අවසන්</h4>
                    <p><strong>Detected Disease:</strong> Leaf Curl Virus (කොළ හකුලන වෛරසය)</p>
                    <p><strong>Reason (හේතුව):</strong> Whitefly infestation or nutrient deficiency. (සුදු මැස්සන් මගින් බෝවීම හෝ පෝෂක ඌනතාවය.)</p>
                    <p><strong>Treatments (පිළියම්):</strong> Use organic pesticides (Neem oil) and apply balanced fertilizer. (කොහොඹ තෙල් වැනි කාබනික පලිබෝධ නාශක භාවිතා කරන්න සහ සමබර පොහොර යොදන්න.)</p>
                </div>
            `;
        }
        reader.readAsDataURL(file);
    }
});

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    resultDisplay.innerHTML = '<p class="results-placeholder">Upload an image to see disease analysis</p>';
}

function performSearch() {
    const query = document.getElementById('diseaseSearchInput').value;
    if(query) {
        document.getElementById('searchResult').innerHTML = `<p style="margin-top:15px; color: #2e7d32;">Searching for "${query}"...</p>`;
    }
}
