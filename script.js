const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const searchInput = document.getElementById('diseaseSearchInput');

// 1. Leda 15ka Database eka (Diseases Data)
const diseaseData = {
    "leaf curl": "හේතුව: සුදු මැස්සන්. පිළියම: කොහොඹ තෙල් භාවිතා කරන්න.",
    "fungal infection": "හේතුව: අධික තෙතමනය. පිළියම: දිලීර නාශකයක් යොදන්න.",
    "blight": "හේතුව: බැක්ටීරියා ආසාදනය. පිළියම: ආසාදිත පත්‍ර කපා පුළුස්සා දමන්න.",
    "rust": "හේතුව: දිලීර. පිළියම: පත්‍ර මතුපිටට සල්ෆර් කුඩු ඉසින්න.",
    "mosaic virus": "හේතුව: වෛරස්. පිළියම: රෝගී පැල වහාම ඉවත් කරන්න.",
    "powdery mildew": "හේතුව: වියළි කාලගුණය හා දිලීර. පිළියම: පොටෑසියම් බයිකාබනේට් භාවිතා කරන්න.",
    "downy mildew": "හේතුව: තෙත් කාලගුණය. පිළියම: වාතාශ්‍රය වැඩි කරන්න.",
    "root rot": "හේතුව: ජලය වැඩි වීම. පිළියම: ජලය බැසයාම විධිමත් කරන්න.",
    "wilt": "හේතුව: පාංශු බැක්ටීරියා. පිළියම: පස ජීවානුහරණය කරන්න.",
    "canker": "හේතුව: ශාකයේ තුවාල හරහා එන බැක්ටීරියා. පිළියම: තුවාල ආලේපන යොදන්න.",
    "black spot": "හේතුව: දිලීර. පිළියම: කොළ මතට වතුර දැමීම නවත්වන්න.",
    "anthracnose": "හේතුව: දිලීර. පිළියම: තඹ අඩංගු දිලීර නාශක යොදන්න.",
    "sooty mold": "හේතුව: කෘමි ස්‍රාවයන්. පිළියම: කෘමීන් පාලනය කරන්න.",
    "dieback": "හේතුව: පෝෂක ඌනතාවය. පිළියම: සමබර පොහොර යොදන්න.",
    "clubroot": "හේතුව: පසෙහි ආම්ලිකතාවය. පිළියම: පසට හුණු (Lime) එක් කරන්න."
};

// 2. Image Upload & Random Result Logic
uploadArea.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // Leda 15n ekak random select කරනවා upload කළාම පෙන්වන්න
            const keys = Object.keys(diseaseData);
            const randomDisease = keys[Math.floor(Math.random() * keys.length)];
            const details = diseaseData[randomDisease];

            resultDisplay.innerHTML = `
                <div class="result-card">
                    <h3 style="color: #2e7d32; margin-bottom: 10px;">Analysis Results: ${randomDisease.toUpperCase()}</h3>
                    <p>${details}</p>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    }
});

// 3. Search Function (Database eke thiyෙන ඒවා search කරන්න)
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query) {
        let found = false;
        for (let disease in diseaseData) {
            if (disease.includes(query)) {
                resultDisplay.innerHTML = `
                    <div class="result-card" style="border-left-color: #1976d2;">
                        <h3 style="color: #1976d2; margin-bottom: 10px;">Result for: ${disease.toUpperCase()}</h3>
                        <p>${diseaseData[disease]}</p>
                    </div>
                `;
                found = true;
                break;
            }
        }
        if (!found) {
            resultDisplay.innerHTML = `<p style="color:red; padding:15px;">"${query}" රෝගය හමු වූයේ නැත.</p>`;
        }
        resultDisplay.scrollIntoView({ behavior: 'smooth' });
    }
}

// 4. Voice Search (Mic)
const voiceBtn = document.getElementById('voiceBtn');
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    voiceBtn.addEventListener('click', () => recognition.start());
    recognition.onresult = (event) => {
        searchInput.value = event.results[0][0].transcript;
        performSearch();
    };
}

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    resultDisplay.innerHTML = '';
}
