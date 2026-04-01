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