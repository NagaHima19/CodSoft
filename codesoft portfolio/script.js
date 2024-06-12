document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const titles = ["Web Developer", "Frontend Developer", "UI/UX Enthusiast"];
    let currentTitle = 0;
    let currentChar = 0;
    const dynamicTitle = document.getElementById('dynamic-title');

    function type() {
        if (currentChar < titles[currentTitle].length) {
            dynamicTitle.textContent += titles[currentTitle].charAt(currentChar);
            currentChar++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (currentChar > 0) {
            dynamicTitle.textContent = titles[currentTitle].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(erase, 100);
        } else {
            currentTitle = (currentTitle + 1) % titles.length;
            setTimeout(type, 500);
        }
    }

})

function downloadResume() {

    var resumeUrl = "https://drive.google.com/uc?export=download&id=18mlBJW6NCZTnZ2TvtT6C_rg6bHM3hhRM";

    var link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Maddineni_Nagahima_resume.pdf"; 
    document.body.appendChild(link);
    
    link.click();

    document.body.removeChild(link);
}



