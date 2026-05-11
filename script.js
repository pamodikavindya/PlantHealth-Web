/**
 * AgriDoctor Pro - Professional AI Disease Detection System
 * Version 2.0
 */

// ==================== DISEASE DATABASE ====================
const DISEASE_DB = {
    "rust": {
        name: "මලකඩ රෝගය",
        scientific: "Puccinia spp.",
        treatment: "සල්ෆර් අඩංගු දිලීර නාශක යොදන්න. රෝගී කොළ ඉවත් කරන්න. තෙතමනය අඩු කරන්න. සති 2ක් පුරා ප්‍රතිකාර කරන්න.",
        prevention: "නිරෝගී බීජ භාවිතා කරන්න. භෝග මාරු කිරීම කරන්න. වාතාශ්‍රය හොඳින් ලබාදෙන්න.",
        severity: "high",
        icon: "🦠"
    },
    "leaf curl": {
        name: "කොළ හකුලන රෝගය",
        scientific: "Taphrina deformans",
        treatment: "කොහොඹ තෙල් හෝ කෘමිනාශක භාවිතා කරන්න. දින 7කට වරක් ඉසින්න. රෝගී කොළ එකතු කර පුළුස්සා දමන්න.",
        prevention: "ශීත කාලයේදී තඹ අඩංගු දිලීර නාශක ඉසින්න. පැලෑටි අතර පරතරය වැඩි කරන්න.",
        severity: "medium",
        icon: "🍃"
    },
    "blight": {
        name: "අංගමාරය",
        scientific: "Phytophthora infestans",
        treatment: "රෝගී කොටස් කපා පුළුස්සා දමන්න. මැන්කොසෙබ් දිලීර නාශක යොදන්න. වාතාශ්‍රය හොඳින් ලබාදෙන්න.",
        prevention: "අධික තෙතමනයෙන් වලකින්න. පැල අතර පරතරය වැඩි කරන්න. වැසි සමයේදී විශේෂ සැලකිල්ල යොදන්න.",
        severity: "high",
        icon: "⚠️"
    },
    "powdery mildew": {
        name: "පවුඩරි මිල්ඩියු",
        scientific: "Erysiphales",
        treatment: "සල්ෆර් අඩංගු කුඩු ඉසින්න. වාතාශ්‍රය හොඳින් ලබාදෙන්න. කොළ මතට ජලය ඉසීමෙන් වලකින්න.",
        prevention: "නියමිත වේලාවට පොහොර යොදන්න. ප්‍රතිරෝධී ප්‍රභේද භාවිතා කරන්න.",
        severity: "medium",
        icon: "🌾"
    },
    "bacterial wilt": {
        name: "බැක්ටීරියා මැලවීම",
        scientific: "Ralstonia solanacearum",
        treatment: "පස විෂබීජහරණය කර හුණු යොදන්න. භෝග මාරු කිරීම කරන්න. රෝගී පැල වහාම ඉවත් කරන්න.",
        prevention: "නිරෝගී බීජ පැල භාවිතා කරන්න. ජලය බැසයාම හොඳින් කරන්න.",
        severity: "high",
        icon: "💧"
    },
    "mosaic virus": {
        name: "මොසයික් වෛරසය",
        scientific: "Tobacco Mosaic Virus",
        treatment: "Aphids කෘමීන් පාලනය කරන්න. රෝගී පැල ඉවත් කර පුළුස්සා දමන්න. වෛරසයෙන් තොර බීජ භාවිතා කරන්න.",
        prevention: "වගා භූමිය පිරිසිදුව තබා ගන්න. කෘමිනාශක නිතිපතා ඉසින්න.",
        severity: "high",
        icon: "🦟"
    },
    "downy mildew": {
        name: "ඩව්නි මිල්ඩියු",
        scientific: "Peronospora spp.",
        treatment: "වාතාශ්‍රය වැඩි කර දිලීර නාශක යොදන්න. කොළ වියළි ලෙස තබා ගන්න. රෝගී කොළ ඉවත් කරන්න.",
        prevention: "උදේ පාන්දර වතුර දමන්න. පැල අතර පරතරය වැඩි කරන්න.",
        severity: "medium",
        icon: "💨"
    },
    "anthracnose": {
        name: "ඇන්ත්‍රැක්නෝස්",
        scientific: "Colletotrichum spp.",
        treatment: "මැන්කොසෙබ් හෝ ක්ලෝරොතලොනිල් දිලීර නාශක භාවිතා කරන්න. රෝගී කොටස් කපා ඉවත් කරන්න.",
        prevention: "නිරෝගී බීජ භාවිතා කරන්න. වගා භූමියේ සනීපාරක්ෂාව පවත්වා ගන්න.",
        severity: "medium",
        icon: "🍂"
    },
    "root rot": {
        name: "මුල් කුණුවීම",
        scientific: "Fusarium spp.",
        treatment: "ජලය බැසයාම විධිමත් කරන්න. මුලට හානි නොවන ලෙස ප්‍රතිකාර කරන්න. ට්‍රයිකොඩර්මා දිලීර නාශක යොදන්න.",
        prevention: "අධික වතුර දැමීමෙන් වලකින්න. පසෙහි PH අගය නිවැරදිව තබා ගන්න.",
        severity: "high",
        icon: "🪱"
    },
    "early blight": {
        name: "අර්ලි බ්ලයිට්",
        scientific: "Alternaria solani",
        treatment: "නියමිත කාලයට පොහොර සහ දිලීර නාශක යොදන්න. පහළ කොළ ඉවත් කරන්න. ක්ලෝරොතලොනිල් ඉසින්න.",
        prevention: "භෝග මාරු කිරීම කරන්න. ප්‍රතිරෝධී ප්‍රභේද භාවිතා කරන්න.",
        severity: "medium",
        icon: "🍂"
    },
    "late blight": {
        name: "ලේට් බ්ලයිට්",
        scientific: "Phytophthora infestans",
        treatment: "දිලීර නාශක දියරයක් දින 7කට වරක් ඉසින්න. වැසි සමයේදී විශේෂ සැලකිල්ල යොදන්න. රෝගී පැල ඉවත් කරන්න.",
        prevention: "ජලය බැසයාම හොඳින් කරන්න. ඉහළ තෙතමනයෙන් වලකින්න.",
        severity: "high",
        icon: "⚠️"
    },
    "leaf spot": {
        name: "කොළ පුල්ලි රෝගය",
        scientific: "Cercospora spp.",
        treatment: "පත්‍ර මතට ජලය ඉසීමෙන් වලකින්න. දිලීර නාශක ඉසින්න. රෝගී කොළ එකතු කර විනාශ කරන්න.",
        prevention: "වාතාශ්‍රය හොඳින් ලබාදෙන්න. පැල අතර පරතරය වැඩි කරන්න.",
        severity: "low",
        icon: "🔴"
    },
    "black spot": {
        name: "කළු පුල්ලි රෝගය",
        scientific: "Diplocarpon rosae",
        treatment: "රෝගී කොළ වහාම ඉවත් කරන්න. වාතාශ්‍රය වැඩි කරන්න. තෙල් මත පදනම් වූ දිලීර නාශක ඉසින්න.",
        prevention: "උදේ පාන්දර වතුර දමන්න. පැල යට පිරිසිදුව තබා ගන්න.",
        severity: "medium",
        icon: "⚫"
    },
    "damping off": {
        name: "පැල කුණුවීම",
        scientific: "Pythium spp.",
        treatment: "තවාන් පස විෂබීජහරණය කරන්න. අධික තෙතමනයෙන් වලකින්න. ට්‍රයිකොඩර්මා වර්මි කොම්පොස්ට් එක් කරන්න.",
        prevention: "නිරෝගී බීජ භාවිතා කරන්න. පස හොඳින් ජලය බැස යන ලෙස සකස් කරන්න.",
        severity: "high",
        icon: "🌱"
    },
    "clubroot": {
        name: "ක්ලබ් රූට්",
        scientific: "Plasmodiophora brassicae",
        treatment: "පසට හුණු එක් කර PH අගය 7.0 කරන්න. භෝග මාරු කිරීම කරන්න. ප්‍රතිරෝධී ප්‍රභේද භාවිතා කරන්න.",
        prevention: "හුණු නිතිපතා එක් කරන්න. වගා භූමියේ සනීපාරක්ෂාව පවත්වා ගන්න.",
        severity: "high",
        icon: "🥬"
    },
    "healthy": {
        name: "සෞඛ්‍ය සම්පන්න",
        scientific: "No disease detected",
        treatment: "ඔබේ පැළෑටිය සෞඛ්‍ය සම්පන්නයි! නිතිපතා ජලය හා පොහොර ලබා දෙන්න. වගාව දිගටම කරගෙන යන්න. දිනපතා නිරීක්ෂණය කරන්න.",
        prevention: "කාබනික පොහොර භාවිතා කරන්න. පළිබෝධ පාලනය කරන්න. නිතිපතා වල් නෙලීම කරන්න.",
        severity: "none",
        icon: "✅"
    }
};

// ==================== CONSTANTS ====================
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/DV76m5VCP/";
const LABELS = ["healthy", "rust", "leaf curl", "powdery mildew"];

// ==================== STATE ====================
let model = null;
let isModelReady = false;

// ==================== DOM ELEMENTS ====================
const darkModeToggle = document.getElementById('darkModeToggle');
const modelStatusDiv = document.getElementById('modelStatus');
const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const previewContainer = document.getElementById('previewContainer');
const preview = document.getElementById('preview');
const resultDisplay = document.getElementById('resultDisplay');
const analyzeBtn = document.getElementById('analyzeBtn');
const searchInput = document.getElementById('diseaseSearchInput');
const searchResultDisplay = document.getElementById('searchResultDisplay');
const voiceBtn = document.getElementById('voiceBtn');
const statusBadge = document.getElementById('statusBadge');

// ==================== DARK MODE ====================
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ==================== MAP INITIALIZATION ====================
function initMap() {
    if (typeof L !== 'undefined') {
        const map = L.map('riskMap').setView([7.8731, 80.7718], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // High risk areas
        L.marker([7.2906, 80.6337]).addTo(map)
            .bindPopup('<b>මහනුවර</b><br>⚠️ ඉහළ අවදානම් කලාපය<br>මලකඩ රෝගය වාර්තා වේ')
            .openPopup();
        
        // Medium risk areas
        L.marker([6.9271, 79.8612]).addTo(map)
            .bindPopup('<b>කොළඹ</b><br>📊 මධ්‍යම අවදානම<br>නිරීක්ෂණය අවශ්‍යයි');
        
        L.marker([6.0328, 80.2156]).addTo(map)
            .bindPopup('<b>ගාල්ල</b><br>🟡 මධ්‍යම අවදානම<br>කොළ පුල්ලි රෝගය වාර්තා වේ');
        
        // Low risk areas
        L.marker([9.6615, 80.0255]).addTo(map)
            .bindPopup('<b>යාපනය</b><br>🟢 අඩු අවදානම<br>සාමාන්‍ය තත්ත්වය');
        
        L.marker([6.5823, 81.6050]).addTo(map)
            .bindPopup('<b>මොනරාගල</b><br>🟢 අඩු අවදානම');
    } else {
        setTimeout(initMap, 500);
    }
}

// ==================== AI MODEL LOADING ====================
async function loadAIModel() {
    if (!modelStatusDiv) return;
    
    modelStatusDiv.innerHTML = '<div class="loading"><div class="spinner"></div> 🔄 AI මාදිලිය පූරණය වෙමින්...</div>';
    statusBadge.innerHTML = '🔄 AI පූරණය වේ';
    
    try {
        model = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
        isModelReady = true;
        
        modelStatusDiv.innerHTML = '<div class="success">✅ AI Model සාර්ථකයි! දැන් රූපයක් Upload කරන්න.</div>';
        statusBadge.innerHTML = '✅ AI සූදානම්';
        
        setTimeout(() => {
            if (modelStatusDiv) modelStatusDiv.innerHTML = '';
        }, 4000);
        
    } catch (error) {
        console.error("Model load error:", error);
        modelStatusDiv.innerHTML = '<div class="error">⚠️ AI Model එක load කිරීම අසාර්ථකයි. ඔබගේ අන්තර්ජාලය පරීක්ෂා කරන්න.</div>';
        statusBadge.innerHTML = '⚠️ AI නැත';
        isModelReady = false;
    }
}

// ==================== SEARCH FUNCTION ====================
function performSearch() {
    if (!searchInput || !searchResultDisplay) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        searchResultDisplay.innerHTML = '<div style="color:#f44336; padding:10px;">😔 කරුණාකර රෝගයේ නමක් ඇතුළත් කරන්න.</div>';
        return;
    }
    
    // Direct match
    if (DISEASE_DB[query]) {
        displaySearchResult(DISEASE_DB[query], query);
        return;
    }
    
    // Partial match
    for (const [key, disease] of Object.entries(DISEASE_DB)) {
        if (key.includes(query) || disease.name.includes(query)) {
            displaySearchResult(disease, key);
            return;
        }
    }
    
    // No match
    searchResultDisplay.innerHTML = `
        <div style="color:#f44336; margin-top:12px;">
            😔 "${query}" සඳහා තොරතුරු නැත.<br>
            <small>උදා: rust, leaf curl, blight, powdery mildew, healthy</small>
        </div>
    `;
}

function displaySearchResult(disease, key) {
    const severityColor = {
        high: '#f44336',
        medium: '#ff9800',
        none: '#4caf50'
    };
    
    searchResultDisplay.innerHTML = `
        <div style="background: var(--white); padding: 20px; border-radius: 20px; margin-top: 16px; border-left: 5px solid ${severityColor[disease.severity]}; box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span style="font-size: 32px;">${disease.icon}</span>
                <h3 style="margin: 0; color: var(--primary);">${disease.name}</h3>
            </div>
            ${disease.scientific ? `<p><strong>🔬 විද්‍යාත්මක නම:</strong> ${disease.scientific}</p>` : ''}
            <p><strong>💊 ප්‍රතිකාරය:</strong><br>${disease.treatment}</p>
            <p><strong>🛡️ වැළැක්වීම:</strong><br>${disease.prevention}</p>
        </div>
    `;
}

// ==================== VOICE RECOGNITION ====================
function initVoiceRecognition() {
    if (!voiceBtn) return;
    
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'si-LK';
        recognition.continuous = false;
        
        voiceBtn.onclick = () => {
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            recognition.start();
        };
        
        recognition.onstart = () => {
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        };
        
        recognition.onend = () => {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        };
        
        recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            if (searchInput) {
                searchInput.value = transcript;
                performSearch();
            }
        };
        
        recognition.onerror = () => {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        };
    } else {
        voiceBtn.style.display = 'none';
    }
}

// ==================== IMAGE UPLOAD ====================
function initImageUpload() {
    if (!uploadArea || !imageInput) return;
    
    uploadArea.onclick = () => imageInput.click();
    
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = event => {
                preview.src = event.target.result;
                previewContainer.style.display = 'block';
                uploadArea.style.display = 'none';
                if (resultDisplay) resultDisplay.innerHTML = '';
            };
            reader.readAsDataURL(file);
        }
    });
}

// Remove image
function removeImage() {
    if (imageInput) imageInput.value = '';
    if (previewContainer) previewContainer.style.display = 'none';
    if (uploadArea) uploadArea.style.display = 'block';
    if (resultDisplay) resultDisplay.innerHTML = '';
}

// ==================== AI ANALYSIS ====================
async function analyzeDisease() {
    if (!resultDisplay || !preview) return;
    
    if (!preview.src || previewContainer.style.display !== 'block') {
        resultDisplay.innerHTML = `
            <div style="background: #ffebee; padding: 20px; border-radius: 20px; color: #c62828;">
                📷 කරුණාකර පළමුව රූපයක් Upload කරන්න!
            </div>
        `;
        return;
    }
    
    if (!isModelReady || !model) {
        resultDisplay.innerHTML = `
            <div style="background: #fff3e0; padding: 20px; border-radius: 20px;">
                <div class="spinner"></div> 🤖 AI Model එක පූරණය වෙමින්... තත්පර කිහිපයකින් නැවත උත්සාහ කරන්න.
            </div>
        `;
        return;
    }
    
    // Show loading
    resultDisplay.innerHTML = `
        <div style="background: #e3f2fd; padding: 20px; border-radius: 20px; text-align: center;">
            <div class="spinner" style="margin: 0 auto 15px auto;"></div>
            🔍 AI රූපය විශ්ලේෂණය කරයි... කරුණාකර රැඳී සිටින්න.
        </div>
    `;
    
    try {
        const predictions = await model.predict(preview);
        
        let maxProb = 0;
        let maxIndex = 0;
        for (let i = 0; i < predictions.length; i++) {
            if (predictions[i].probability > maxProb) {
                maxProb = predictions[i].probability;
                maxIndex = i;
            }
        }
        
        const predictedKey = LABELS[maxIndex];
        const disease = DISEASE_DB[predictedKey] || DISEASE_DB["healthy"];
        const confidence = (maxProb * 100).toFixed(1);
        
        const severityColor = {
            high: '#f44336',
            medium: '#ff9800',
            none: '#4caf50'
        };
        
        resultDisplay.innerHTML = `
            <div style="background: var(--white); padding: 24px; border-radius: 20px; border-left: 6px solid ${severityColor[disease.severity]}; box-shadow: var(--shadow-md); animation: slideIn 0.4s ease;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                    <span style="font-size: 42px;">${disease.icon}</span>
                    <h3 style="margin: 0; color: var(--primary);">${disease.name}</h3>
                </div>
                
                <div class="confidence-bar" style="margin: 15px 0;">
                    <div class="confidence-fill" style="width: ${confidence}%;"></div>
                </div>
                <p style="margin-bottom: 12px;"><strong>🎯 නිරවද්‍යතාව:</strong> ${confidence}%</p>
                
                <p><strong>💊 ප්‍රතිකාරය:</strong><br>${disease.treatment}</p>
                <p style="margin-top: 12px;"><strong>🛡️ වැළැක්වීම:</strong><br>${disease.prevention}</p>
                
                <hr style="margin: 20px 0 10px; border-color: var(--border);">
                <p style="font-size: 12px; color: var(--text-light); margin: 0;">
                    <i class="fas fa-shield-alt"></i> AI technology powered by TensorFlow.js
                </p>
            </div>
        `;
        
        // Update badge
        statusBadge.innerHTML = `✅ ${disease.name}`;
        setTimeout(() => {
            if (statusBadge) statusBadge.innerHTML = '✅ AI සූදානම්';
        }, 3000);
        
    } catch (error) {
        console.error("Analysis error:", error);
        resultDisplay.innerHTML = `
            <div style="background: #ffebee; padding: 20px; border-radius: 20px; color: #c62828;">
                ⚠️ විශ්ලේෂණය අසාර්ථකයි!<br>
                <small>කරුණාකර නැවත උත්සාහ කරන්න.</small>
            </div>
        `;
    }
}

// ==================== EVENT LISTENERS ====================
document.getElementById('searchBtn')?.addEventListener('click', performSearch);
searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// ==================== PAGE LOAD ====================
window.addEventListener('load', () => {
    console.log("AgriDoctor Pro v2.0 - Professional AI Disease Detection System");
    initDarkMode();
    setTimeout(initMap, 100);
    loadAIModel();
    initVoiceRecognition();
    initImageUpload();
    
    // Make functions global
    window.performSearch = performSearch;
    window.removeImage = removeImage;
    window.analyzeDisease = analyzeDisease;
});
