const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const searchResultDisplay = document.getElementById('searchResultDisplay');
const searchInput = document.getElementById('diseaseSearchInput');

const diseaseData = {
    "leaf curl": "හේතුව: සුදු මැස්සන් මගින් බෝවන වෛරසයකි. පිළියම: කොහොඹ තෙල් භාවිතා කරන්න.",
    "fungal infection": "හේතුව: අධික තෙතමනය. පිළියම: නිර්දේශිත දිලීර නාශකයක් යොදන්න.",
    "blight": "හේතුව: බැක්ටීරියා ආසාදනය. පිළියම: පත්‍ර කපා පුළුස්සා දමන්න.",
    "rust": "හේතුව: දිලීර නිසා ඇතිවන මලකඩ රෝගය. පිළියම: සල්ෆර් කුඩු ඉසින්න.",
    "mosaic virus": "හේතුව: වෛරස් ආසාදනය. පිළියම: රෝගී පැල ඉවත් කරන්න.",
    "powdery mildew": "හේතුව: වියළි කාලගුණය හා දිලීර. පිළියම: පොටෑසියම් බයිකාබනේට් භාවිතා කරන්න.",
    "downy mildew": "හේතුව: තෙත් කාලගුණය. පිළියම: වාතාශ්‍රය වැඩි කරන්න.",
    "root rot": "හේතුව: ජලය බැසයාම දුර්වල වීම. පිළියම: ජලය දැමීම සීමා කරන්න.",
    "wilt": "හේතුව: පාංශු බැක්ටීරියා. පිළියම: පස ජීවානුහරණය කරන්න.",
    "black spot": "හේතුව: දිලීර. පිළියම: පත්‍ර මතට වතුර දැමීම නවත්වන්න.",
    "leaf spot": "හේතුව: දිලීර. පිළියම: නිර්දේශිත දිලීර නාශක දියරයක් භාවිතා කරන්න.",
    "anthracnose": "හේතුව: දිලීර. පිළියම: තඹ අඩංගු දිලීර නාශක යොදන්න.",
    "sooty mold": "හේතුව: කෘමි ස්‍රාවයන්. පිළියම: කෘමීන් පාලනය කරන්න.",
    "dieback": "හේතුව: අතු අග සිට මැරීගෙන ඒම. පිළියම: පොහොර යොදා පෝෂණය කරන්න.",
    "clubroot": "හේතුව: පසෙහි ආම්ලිකතාවය. පිළියම: පසට හුණු (Lime) එක් කරන්න."
};

// Image Logic
uploadArea.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            const keys = Object.keys(diseaseData);
            const randomD = keys[Math.floor(Math.random() * keys.length)];
            resultDisplay.innerHTML = `<div class="result-card"><h3>Detected: ${randomD.toUpperCase()}</h3><p>${diseaseData[randomD]}</p></div>`;
        }
        reader.readAsDataURL(file);
    }
});

// Search Logic
function performSearch() {
    const q = searchInput.value.toLowerCase().trim();
    if(q) {
        let found = false;
        for (let d in diseaseData) {
            if (d.includes(q)) {
                searchResultDisplay.innerHTML = `<div class="result-card" style="border-left-color:#1976d2; margin-top:15px;"><h4>Result: ${d.toUpperCase()}</h4><p>${diseaseData[d]}</p></div>`;
                found = true; break;
            }
        }
        if (!found) searchResultDisplay.innerHTML = `<p style="color:red; margin-top:10px;">හමුවුණේ නැත.</p>`;
    }
}

// Mic Logic
const voiceBtn = document.getElementById('voiceBtn');
if ('webkitSpeechRecognition' in window) {
    const rec = new webkitSpeechRecognition();
    voiceBtn.addEventListener('click', () => { rec.start(); voiceBtn.style.color = 'red'; });
    rec.onresult = (e) => { searchInput.value = e.results[0][0].transcript; performSearch(); };
    rec.onend = () => { voiceBtn.style.color = '#2e7d32'; };
}

function removeImage() {
    imageInput.value = ''; previewContainer.style.display = 'none'; resultDisplay.innerHTML = '';
}
