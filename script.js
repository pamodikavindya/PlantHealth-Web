const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const preview = document.getElementById('preview');
const previewContainer = document.getElementById('previewContainer');
const removeBtn = document.getElementById('removeBtn');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Upload button click triggers file input
    uploadBtn.addEventListener('click', function() {
        imageInput.click();
    });
    
    // File input change
    imageInput.addEventListener('change', handleFileSelect);
    
    // Remove button
    removeBtn.addEventListener('click', resetUpload);
    
    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            imageInput.files = e.dataTransfer.files;
            handleFileSelect();
        }
    });
    
    // Click on upload area to trigger file input
    uploadArea.addEventListener('click', function() {
        imageInput.click();
    });
});

// Handle file selection
function handleFileSelect() {
    const file = imageInput.files[0];
    
    if (file) {
        // Check if file is an image
        if (!file.type.match('image.*')) {
            alert('Please select an image file');
            return;
        }
        
        // Create preview
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;
            previewContainer.style.display = 'block';
            
            // Simulate analysis after a delay
            simulateAnalysis();
        };
        
        reader.readAsDataURL(file);
    }
}

// Reset upload
function resetUpload() {
    imageInput.value = '';
    preview.src = '';
    previewContainer.style.display = 'none';
    
    // Reset analysis section
    const resultsPlaceholder = document.querySelector('.results-placeholder');
    resultsPlaceholder.innerHTML = '<p>Upload an image to see disease analysis</p>';
}

// Simulate analysis (in a real app, this would connect to an API)
function simulateAnalysis() {
    const resultsPlaceholder = document.querySelector('.results-placeholder');
    resultsPlaceholder.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Analyzing image...</div>';
    
    setTimeout(() => {
        // Simulate different results based on random selection
        const diseases = [
            {
                name: "Fungal Infection",
                confidence: "85%",
                description: "Your plant shows signs of a fungal infection, likely caused by high humidity and poor air circulation.",
                treatment: "Apply fungicide and improve ventilation. Remove affected leaves."
            },
            {
                name: "Bacterial Spot",
                confidence: "72%",
                description: "The spots on leaves indicate a bacterial infection, possibly from contaminated water or tools.",
                treatment: "Use copper-based bactericide and sterilize gardening tools."
            },
            {
                name: "Healthy Plant",
                confidence: "91%",
                description: "Your plant appears healthy with no significant signs of disease.",
                treatment: "Continue current care routine. Monitor for any changes."
            }
        ];
        
        const result = diseases[Math.floor(Math.random() * diseases.length)];
        
        resultsPlaceholder.innerHTML = `
            <div class="analysis-result">
                <div class="result-header">
                    <h4>${result.name}</h4>
                    <span class="confidence">Confidence: ${result.confidence}</span>
                </div>
                <div class="result-description">
                    <p>${result.description}</p>
                </div>
                <div class="result-treatment">
                    <h5>Recommended Treatment:</h5>
                    <p>${result.treatment}</p>
                </div>
                <button class="btn btn-primary" style="margin-top: 15px;">View Detailed Report</button>
            </div>
        `;
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
// --- AgriDoctor Disease Database ---
const diseaseData = {
    "tomato blight": {
        sinhalaName: "තක්කාලි කොළ මැළවීම",
        causes: "අධික තෙතමනය සහ Alternaria දිලීරය.",
        remedy: "පීඩිත අතු ඉවත් කරන්න. මැන්කොසෙබ් වැනි දිලීර නාශකයක් භාවිතා කරන්න."
    },
    "paddy blast": {
        sinhalaName: "වී වගාවේ කොළ පාළුව",
        causes: "Magnaporthe oryzae දිලීරය. නයිට්‍රජන් පොහොර වැඩි වීම.",
        remedy: "පොහොර භාවිතය කළමනාකරණය සහ නියමිත දිලීර නාශක යෙදීම."
    },
    "chilli leaf curl": {
        sinhalaName: "මිරිස් කොළ කොණ්ඩ වීම",
        causes: "පැළ මැක්කන් (Thrips) සහ මයිටාවන් මගින් බෝවන වෛරසයක්.",
        remedy: "කොළ කඩා ඉවත් කර පුළුස්සා දමන්න. සබන් වතුර හෝ කොහොඹ තෙල් ඉසින්න."
    },
    "banana wilt": {
        sinhalaName: "කෙසෙල් පැනමා රෝගය",
        causes: "Fusarium දිලීරය පස හරහා මුල් වලට හානි කිරීම.",
        remedy: "රෝගී පඳුරු මුලින් උදුරා පුළුස්සන්න. පස ජීවානුහරණය කරන්න."
    },
    "papaya ringspot": {
        sinhalaName: "පැපොල් වළලු ලප රෝගය",
        causes: "කුඩිත්තන් (Aphids) මගින් බෝවන වෛරසයකි.",
        remedy: "පැළෑටිය සම්පූර්ණයෙන් ඉවත් කරන්න. අවට වල් පැලෑටි පාලනය කරන්න."
    },
    "potato scab": {
        sinhalaName: "අල ගෙඩි වල කොරපොතු රෝගය",
        causes: "පසෙහි සිටින බැක්ටීරියා විශේෂයක්.",
        remedy: "පසෙහි pH අගය පාලනය කරන්න. රෝගී බීජ අල භාවිතා නොකරන්න."
    },
    "coconut mite": {
        sinhalaName: "පොල් මයිටා හානිය",
        causes: "අධික වියළි කාලගුණය සහ කුඩා මයිටාවන්.",
        remedy: "කොහොඹ තෙල් මිශ්‍රණය ගෙඩි වලට ඉසින්න. පොහොර නිසි පරිදි යොදන්න."
    },
    "mango anthracnose": {
        sinhalaName: "අඹ කළු ලප රෝගය",
        causes: "මල් සහ ලපටි ගෙඩි වලට දිලීර ආසාදනය වීම.",
        remedy: "පලදාව නෙළා අවසානයේ අතු කප්පාදු කර දිලීර නාශකයක් යොදන්න."
    },
    "citrus canker": {
        sinhalaName: "දෙහි කුලයේ ශාක වල පිළිකා රෝගය",
        causes: "බැක්ටීරියා ආසාදනයකි. සුළඟ සහ වැස්ස හරහා බෝවේ.",
        remedy: "කොපර් දිලීර නාශකයක් ඉසින්න. ආසාදිත කොටස් විනාශ කරන්න."
    },
    "coffee leaf rust": {
        sinhalaName: "කෝපි කොළ මලකඩ රෝගය",
        causes: "කොළ යට තැඹිලි පාට ලප ඇති කරන දිලීරයකි.",
        remedy: "කප්පාදු කර හිරු එළිය වැටීමට සලස්වන්න. රෝගයට ඔරොත්තු දෙන වර්ග සිටුවන්න."
    },
    "cinnamon wood rot": {
        sinhalaName: "කුරුඳු කඳ කුණුවීම",
        causes: "කඳ අභ්‍යන්තරයට ඇතුළු වන දිලීර විශේෂයක්.",
        remedy: "කඳේ හානි වූ කොටස් කපා ඉවත් කර බෝඩෝ ආලේපනය ගාන්න."
    },
    "rubber white root": {
        sinhalaName: "රබර් සුදු මුල් රෝගය",
        causes: "මුල් පද්ධතියේ පැතිරෙන දරුණු දිලීරයක්.",
        remedy: "ගස වටා කාණු කපා රෝගය පැතිරීම නවත්වන්න. සල්ෆර් කුඩු යොදන්න."
    },
    "betel yellowing": {
        sinhalaName: "බුලත් කහ වීම (කහ පීල්ල)",
        causes: "අධික වැස්ස හෝ ජල වහනය දුර්වල වීම.",
        remedy: "ජල වහනය විධිමත් කරන්න. හුණු ස්වල්පයක් පසට මිශ්‍ර කරන්න."
    },
    "onion purple blotch": {
        sinhalaName: "ලූණු දම් ලප රෝගය",
        causes: "කොළ වල දම් පැහැති ලප ඇති කරන දිලීරයක්.",
        remedy: "සිටුවීමට පෙර බීජ ප්‍රතිකාර කරන්න. වාරි ජලය පාලනය කරන්න."
    },
    "maize mosaic": {
        sinhalaName: "බඩඉරිඟු විචිත්‍ර වෛරසය",
        causes: "කෘමීන් හරහා බෝවන වෛරස් රෝගයකි.",
        remedy: "කෘමි පාලනය සිදු කරන්න. රෝගී පැළෑටි වහාම ඉවත් කරන්න."
    }
};

// --- Main Search Logic ---
function performSearch() {
    const query = document.getElementById('diseaseSearchInput').value.toLowerCase().trim();
    const resultDisplay = document.getElementById('searchResult');

    if (query === "") {
        resultDisplay.innerHTML = "<p style='color:orange;'>කරුණාකර රෝගයක නමක් ඇතුළත් කරන්න...</p>";
        return;
    }

    // Search query eka match wenawada balanna
    let foundKey = Object.keys(diseaseData).find(key => key.includes(query));
    const disease = diseaseData[foundKey];

    if (disease) {
        resultDisplay.innerHTML = `
            <div class="result-card" style="background: white; padding: 20px; border-radius: 12px; border-left: 8px solid #2e7d32; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-top: 20px; text-align: left;">
                <h3 style="color: #2e7d32; margin-bottom: 10px;">${disease.sinhalaName}</h3>
                <p><strong>⚠️ හේතුව:</strong> ${disease.causes}</p>
                <p style="margin-top: 10px;"><strong>✅ පිළියම:</strong> ${disease.remedy}</p>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = `
            <div class="result-card" style="background: #fff5f5; padding: 20px; border-radius: 12px; border-left: 8px solid #f44336; margin-top: 20px;">
                <p>කණගාටුයි, "${query}" ගැන තොරතුරු තවම ඇතුළත් කර නැත.</p>
                <small>Tomato blight, Paddy blast වැනි නමක් උත්සාහ කරන්න.</small>
            </div>
        `;
    }
}

// --- Voice Search Logic ---
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Voice search support කරන්නේ නැත.");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; 

    const voiceBtn = document.getElementById('voiceBtn');
    if(voiceBtn) voiceBtn.style.color = "red"; 

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('diseaseSearchInput').value = transcript;
        if(voiceBtn) voiceBtn.style.color = ""; 
        performSearch();
    };

    recognition.onerror = () => {
        if(voiceBtn) voiceBtn.style.color = "";
    };

    recognition.start();
}
