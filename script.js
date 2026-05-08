// --- AgriDoctor Full Disease Database (15 Diseases) ---
const diseaseData = {
    "tomato blight": {
        sinhalaName: "තක්කාලි කොළ මැළවීම (Tomato Blight)",
        causes: "අධික තෙතමනය සහ Alternaria දිලීරය.",
        remedy: "පීඩිත අතු ඉවත් කරන්න. මැන්කොසෙබ් වැනි දිලීර නාශකයක් භාවිතා කරන්න."
    },
    "paddy blast": {
        sinhalaName: "වී වගාවේ කොළ පාළුව (Paddy Blast)",
        causes: "Magnaporthe oryzae දිලීරය. නයිට්‍රජන් පොහොර වැඩි වීම.",
        remedy: "පොහොර භාවිතය කළමනාකරණය සහ නියමිත දිලීර නාශක යෙදීම."
    },
    "bacterial leaf blight": {
        sinhalaName: "බැක්ටීරියා කොළ පාලුව (Paddy BLB)",
        causes: "Xanthomonas බැක්ටීරියාව. වර්ෂාව සහ සුළඟ මගින් පැතිරේ.",
        remedy: "පොටෑසියම් පොහොර යොදන්න. රෝගී ශාක ඉවත් කර විනාශ කරන්න."
    },
    "coconut mite": {
        sinhalaName: "පොල් මයිටා උවදුර (Coconut Mite)",
        causes: "Aceria guerreronis මයිටාවා. වියළි කාලගුණය බලපායි.",
        remedy: "කොහොඹ තෙල් මිශ්‍රණය ඉසීම හෝ නිර්දේශිත රසායනික ප්‍රතිකාර."
    },
    "banana wilt": {
        sinhalaName: "කෙසෙල් පැනමා රෝගය (Panama Wilt)",
        causes: "Fusarium දිලීරය. පස මගින් රෝගය පැතිරේ.",
        remedy: "රෝගී පඳුරු මුලින්ම විනාශ කරන්න. ජලාපවහනය දියුණු කරන්න."
    },
    "papaya ringspot": {
        sinhalaName: "පැපොල් වෛරස් රෝගය (Papaya Ringspot)",
        causes: "කුඩිත්තන් (Aphids) මගින් පතුරුවන වෛරසයකි.",
        remedy: "රෝගී ගස් ඉවත් කරන්න. වෛරසය පතුරුවන කෘමීන් පාලනය කරන්න."
    },
    "chilli leaf curl": {
        sinhalaName: "මිරිස් කොළ කොණ්ඩ වීම (Leaf Curl)",
        causes: "පැළ මැක්කන් සහ මයිටාවන් මගින් පටුරුවන වෛරස්.",
        remedy: "කෘමීන් පාලනය සඳහා කොහොඹ නිස්සාරණය හෝ කෘමිනාශක භාවිතා කරන්න."
    },
    "potato late blight": {
        sinhalaName: "අර්තාපල් අංගමාරය (Late Blight)",
        causes: "Phytophthora infestans දිලීරය. සීතල සහ තෙත් කාලගුණය.",
        remedy: "දිලීර නාශක යෙදීම සහ බෝග මාරුව සිදු කිරීම."
    },
    "cinnamon wood borer": {
        sinhalaName: "කුරුඳු කඳ විදින පණුවා (Wood Borer)",
        causes: "කඳ තුලට විදින කෘමි කීටයන්.",
        remedy: "කඳ සිදුරු තුලට නිර්දේශිත කෘමිනාශක ඇතුළු කිරීම හෝ හානි වූ අතු ඉවත් කිරීම."
    },
    "mango hopper": {
        sinhalaName: "අඹ මල් කීඩෑවා (Mango Hopper)",
        causes: "Idioscopus කෘමීන්. මල් පිපෙන කාලයට හානි කරයි.",
        remedy: "මල් පිපීමට පෙර සහ පසු නිසි කෘමි පාලනය."
    },
    "rubber white root": {
        sinhalaName: "රබර් සුදු මුල් රෝගය (White Root)",
        causes: "Rigidoporus microporus දිලීරය.",
        remedy: "මුල් වලට සල්ෆර් කුඩු යෙදීම සහ ආසාදිත කොටස් පිරිසිදු කිරීම."
    },
    "citrus canker": {
        sinhalaName: "දෙහි කුෂ්ඨ රෝගය (Citrus Canker)",
        causes: "Xanthomonas බැක්ටීරියාව. තුවාල හරහා ශාකයට ඇතුල් වේ.",
        remedy: "තඹ අඩංගු බැක්ටීරියා නාශක භාවිතය."
    },
    "bean fly": {
        sinhalaName: "බෝංචි මැස්සා (Bean Fly)",
        causes: "Ophiomyia phaseoli මැස්සා කඳ තුල බිත්තර දැමීම.",
        remedy: "පැළවී දින 7-14 තුල නිර්දේශිත කෘමිනාශක යෙදීම."
    },
    "coffee leaf rust": {
        sinhalaName: "කෝපි කොළ මලකඩ රෝගය (Leaf Rust)",
        causes: "Hemileia vastatrix දිලීරය.",
        remedy: "තඹ අඩංගු දිලීර නාශක භාවිතය සහ නිසි පරතරය තබා සිටුවීම."
    },
    "onion purple blotch": {
        sinhalaName: "ලූණු දම් ලප රෝගය (Purple Blotch)",
        causes: "Alternaria porri දිලීරය. අධික පිනි සහිත කාලගුණය.",
        remedy: "දිලීර නාශක ඉසීම සහ නිසි ජලාපවහනය."
    }
};

// --- DOM Elements ---
const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const preview = document.getElementById('preview');
const previewContainer = document.getElementById('previewContainer');
const removeBtn = document.getElementById('removeBtn');

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    if(uploadBtn) uploadBtn.onclick = () => imageInput.click();
    if(uploadArea) uploadArea.onclick = () => imageInput.click();
    if(imageInput) imageInput.onchange = handleFileSelect;
    if(removeBtn) removeBtn.onclick = resetUpload;
});

// --- Search Functionality ---
function performSearch() {
    const input = document.getElementById('diseaseSearchInput');
    const resultDisplay = document.getElementById('searchResult');

    if (!input || !resultDisplay) return;

    const query = input.value.toLowerCase().trim();

    if (query === "") {
        resultDisplay.innerHTML = "<p style='color:orange;'>කරුණාකර රෝගයක නමක් ඇතුළත් කරන්න...</p>";
        return;
    }

    let foundKey = Object.keys(diseaseData).find(key => key.includes(query));
    const disease = diseaseData[foundKey];

    if (disease) {
        resultDisplay.innerHTML = `
            <div class="result-card">
                <h3>${disease.sinhalaName}</h3>
                <p><strong>⚠️ හේතුව:</strong> ${disease.causes}</p>
                <p style="margin-top: 10px;"><strong>✅ පිළියම:</strong> ${disease.remedy}</p>
            </div>`;
    } else {
        resultDisplay.innerHTML = `<p style="margin-top:20px; color:#f44336;">කණගාටුයි, "${query}" ගැන තොරතුරු නැත.</p>`;
    }
}

// --- Voice Search Functionality ---
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("ඔබේ browser එක voice search support කරන්නේ නැත.");
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    const voiceBtn = document.getElementById('voiceBtn');
    
    voiceBtn.classList.add('voice-active');

    recognition.onresult = (event) => {
        document.getElementById('diseaseSearchInput').value = event.results[0][0].transcript;
        voiceBtn.classList.remove('voice-active');
        performSearch();
    };

    recognition.onerror = () => voiceBtn.classList.remove('voice-active');
    recognition.onend = () => voiceBtn.classList.remove('voice-active');
    
    recognition.start();
}

// --- Image Handling ---
function handleFileSelect() {
    const file = imageInput.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            simulateAnalysis();
        };
        reader.readAsDataURL(file);
    }
}

function resetUpload() {
    imageInput.value = '';
    previewContainer.style.display = 'none';
    const placeholder = document.querySelector('.results-placeholder');
    if(placeholder) placeholder.innerHTML = '<p>Upload an image to see disease analysis</p>';
}

function simulateAnalysis() {
    const placeholder = document.querySelector('.results-placeholder');
    if(!placeholder) return;

    placeholder.innerHTML = '<div>පින්තූරය පරීක්ෂා කරමින්...</div>';
    
    setTimeout(() => {
        placeholder.innerHTML = `
            <div class="analysis-result">
                <h4>Analysis Complete</h4>
                <p>වැඩිදුර විස්තර සඳහා ඉහත Search box එක භාවිතා කරන්න.</p>
            </div>`;
    }, 2000);
}
