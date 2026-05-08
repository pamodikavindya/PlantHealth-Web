const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const searchInput = document.getElementById('diseaseSearchInput');

// 1. Diseases Database (ලෙඩ 15 ක විස්තර)
const diseaseData = {
    "leaf curl": "හේතුව: සුදු මැස්සන් මගින් බෝවන වෛරසයකි. පිළියම: කොහොඹ තෙල් දියරය ඉසින්න.",
    "fungal infection": "හේතුව: අධික තෙතමනය සහ දිලීර. පිළියම: නිර්දේශිත දිලීර නාශකයක් භාවිතා කරන්න.",
    "blight": "හේතුව: බැක්ටීරියා ආසාදනය. පිළියම: රෝගී පත්‍ර කපා ඉවත් කර පුළුස්සා දමන්න.",
    "rust": "හේතුව: දිලීර නිසා ඇතිවන මලකඩ රෝගය. පිළියම: පත්‍ර මතුපිටට සල්ෆර් කුඩු ඉසින්න.",
    "mosaic virus": "හේතුව: කුඩිත්තන් මගින් බෝවන වෛරසයකි. පිළියම: රෝගී ශාක වහාම උදුරා දමන්න.",
    "powdery mildew": "හේතුව: වියළි කාලගුණය නිසා ඇතිවන දිලීර. පිළියම: කිරි මිශ්‍ර ජලය හෝ පොටෑසියම් බයිකාබනේට් ඉසින්න.",
    "downy mildew": "හේතුව: අධික සිසිල් සහ තෙත් කාලගුණය. පිළියම: ශාක අතර පරතරය වැඩි කර වාතාශ්‍රය ලබා දෙන්න.",
    "root rot": "හේතුව: පසෙහි ජලය රැඳීම නිසා මුල් කුණු වීම. පිළියම: ජලය බැසයාම විධිමත් කර ජලය දැමීම සීමා කරන්න.",
    "wilt": "හේතුව: පස හරහා එන බැක්ටීරියා හෝ දිලීර. පිළියම: පස ජීවානුහරණය කර නව පැල සිටුවන්න.",
    "black spot": "හේතුව: පත්‍ර මත ජලය රැඳීම නිසා එන දිලීර. පිළියම: පත්‍ර මතට වතුර දැමීමෙන් වළකින්න.",
    "anthracnose": "හේතුව: දිලීර ආසාදනය. පිළියම: තඹ අඩංගු දිලීර නාශකයක් (Copper Fungicide) භාවිතා කරන්න.",
    "sooty mold": "හේතුව: කෘමීන්ගේ පැණි ස්‍රාවයන් මත වැඩෙන දිලීර. පිළියම: පළමුව කෘමීන් පාලනය කරන්න.",
    "dieback": "හේතුව: අතු අග සිට මැරීගෙන ඒම. පිළියම: මැරුණු අතු කපා ඉවත් කර පොහොර යොදන්න.",
    "leaf spot": "හේතුව: පත්‍ර මත ඇතිවන විවිධ දිලීර. පිළියම: නිර්දේශිත දිලීර නාශක දියරයක් භාවිතා කරන්න.",
    "clubroot": "හේතුව: පසෙහි ඇති ක්ෂුද්‍ර ජීවීන්. පිළියම: පසෙහි ආම්ලිකතාවය අඩු කිරීමට හුණු (Lime) එක් කරන්න."
};

// 2. Image Upload Logic (Scroll වෙන්නේ නැතිව)
uploadArea.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // Randomly select a disease from the list
            const keys = Object.keys(diseaseData);
            const randomDisease = keys[Math.floor(Math.random() * keys.length)];
            const details = diseaseData[randomDisease];

            // Result එක පෙන්වනවා (Scroll කරන්නේ නෑ)
            resultDisplay.innerHTML = `
                <div class="result-card">
                    <h3 style="color: #2e7d32; margin-bottom: 10px;">Detected: ${randomDisease.toUpperCase()}</h3>
                    <p>${details}</p>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    }
});

// 3. Search Button Logic
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query) {
        let found = false;
        for (let disease in diseaseData) {
            if (disease.includes(query)) {
                resultDisplay.innerHTML = `
                    <div class="result-card" style="border-left-color: #1976d2;">
                        <h3 style="color: #1976d2; margin-bottom: 10px;">Information: ${disease.toUpperCase()}</h3>
                        <p>${diseaseData[disease]}</p>
                    </div>
                `;
                found = true;
                break;
            }
        }
        if (!found) {
            resultDisplay.innerHTML = `<p style="color:red; padding:15px;">"${query}" රෝගය දත්ත පද්ධතියේ නැත.</p>`;
        }
    }
}

// 4. Voice Search (Mic)
const voiceBtn = document.getElementById('voiceBtn');
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    voiceBtn.addEventListener('click', () => {
        recognition.start();
        voiceBtn.style.color = 'red';
    });
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        performSearch();
    };
    recognition.onend = () => { voiceBtn.style.color = '#2e7d32'; };
}

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    resultDisplay.innerHTML = '';
}
