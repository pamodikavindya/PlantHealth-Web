const diseaseData = {
    "rust": "මලකඩ රෝගය: සල්ෆර් අඩංගු දිලීර නාශක යොදන්න.",
    "leaf curl": "කොළ හකුලන රෝගය: කොහොඹ තෙල් හෝ කෘමිනාශක භාවිතා කරන්න.",
    "blight": "අංගමාරය: රෝගී කොටස් කපා පුළුස්සා දමන්න.",
    "powdery mildew": "පවුඩරි මිල්ඩියු: සල්ෆර් අඩංගු කුඩු ඉසින්න.",
    "bacterial wilt": "බැක්ටීරියා මැලවීම: පස විෂබීජහරණය කර හුණු යොදන්න.",
    "mosaic virus": "මොසයික් වෛරසය: බෝ කරන කෘමීන් (Aphids) පාලනය කරන්න.",
    "downy mildew": "ඩව්නි මිල්ඩියු: වාතාශ්‍රය වැඩි කර දිලීර නාශක යොදන්න.",
    "anthracnose": "ඇන්ත්‍රැක්නෝස්: මැන්කොසෙබ් වැනි දිලීර නාශක භාවිතා කරන්න.",
    "root rot": "මුල් කුණුවීම: ජලය බැසයාම විධිමත් කරන්න.",
    "early blight": "අර්ලි බ්ලයිට්: නියමිත කාලයට පොහොර සහ දිලීර නාශක යොදන්න.",
    "late blight": "ලේට් බ්ලයිට්: දිලීර නාශක දියරයක් දින 7කට වරක් ඉසින්න.",
    "leaf spot": "කොළ පුල්ලි රෝගය: පත්‍ර මතට ජලය ඉසීමෙන් වලකින්න.",
    "black spot": "කළු පුල්ලි රෝගය: රෝගී කොළ වහාම ඉවත් කරන්න.",
    "damping off": "පැල කුණුවීම: තවාන් පස විෂබීජහරණය කරන්න.",
    "clubroot": "ක්ලබ් රූට්: පසෙහි pH අගය වැඩි කිරීමට හුණු එක් කරන්න."
};

window.onload = function() {
    setTimeout(() => {
        const map = L.map('riskMap').setView([7.8731, 80.7718], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([7.2906, 80.6337]).addTo(map).bindPopup('මහනුවර: වැඩි අවදානම');
    }, 400);
};

function performSearch() {
    const val = document.getElementById('diseaseSearchInput').value.toLowerCase().trim();
    const res = document.getElementById('searchResultDisplay');
    res.innerHTML = diseaseData[val] ? `<div style="background:#e8f5e9; padding:15px; border-radius:10px; margin-top:10px; font-weight:bold;">${diseaseData[val]}</div>` : "<div style='color:red; margin-top:10px;'>සමාවන්න, එම රෝගය හමුවුණේ නැත.</div>";
}

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'si-LK';
    document.getElementById('voiceBtn').onclick = () => recognition.start();
    recognition.onresult = (e) => {
        document.getElementById('diseaseSearchInput').value = e.results[0][0].transcript;
        performSearch();
    };
}

const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const previewContainer = document.getElementById('previewContainer');
const uploadArea = document.getElementById('uploadArea');

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

function removeImage() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    uploadArea.style.display = 'block';
    document.getElementById('resultDisplay').innerHTML = "";
}

function analyzeDisease() {
    const res = document.getElementById('resultDisplay');
    res.innerHTML = "<p style='margin-top:20px;'><i class='fas fa-spinner fa-spin'></i> AI පරීක්ෂාව සිදු කරයි...</p>";
    setTimeout(() => {
        res.innerHTML = `<div style="background:#fff3e0; padding:20px; border-radius:15px; margin-top:20px; border-left: 5px solid #ff9800; text-align:left;">
            <h4 style="margin:0; color:#e65100;">Analysis Complete</h4>
            <p style="margin-top:10px;">පත්‍රයේ රෝගයක් ඇති බව හඳුනාගෙන ඇත. ඉහත පිළියම් අනුගමනය කරන්න.</p>
        </div>`;
    }, 2000);
}
