document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log("Website scripts loaded successfully. (سکرپٹ کامیابی سے لوڈ ہو گیا)");

    // 1. Function to handle download confirmation
    const handleDownload = (e) => {
        // Prevent the default link action immediately
        e.preventDefault(); 
        
        // Get the file name from the link's text content
        const fileName = e.target.closest('.list-item').querySelector('h3').textContent.trim();
        
        // Show the Urdu confirmation message
        const confirmation = confirm(`آپ ${fileName} کو ڈاؤنلوڈ کرنا چاہتے ہیں؟`);
        
        if (confirmation) {
            // If the user clicks 'OK', manually navigate to the link's URL
            const downloadURL = e.target.href;
            
            // Note: window.open() or e.target.click() works better for forced download
            window.location.href = downloadURL;
            
            console.log(`Download started for: ${fileName}`);
        } else {
            console.log("Download cancelled by user.");
        }
    };

    // 2. Select all download buttons on the page
    const downloadButtons = document.querySelectorAll('.download-btn');

    // 3. Attach the event listener to each button
    downloadButtons.forEach(button => {
        button.addEventListener('click', handleDownload);
    });

    // 4. (Optional) Smooth scrolling for the navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});