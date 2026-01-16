/*document.getElementById("portfolioItems").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        e.preventDefault(); // stop page jumping
        let item = e.target.dataset.item;
        let result = displayItems(item);
        document.getElementById("result").innerHTML = result;
    }
});

function displayItems(items) {
    if (items === "About") {
        return "About Me : I am a passionate developer with experience in web development and design.";
    
    } else if (items === "Projects") {
        return "This is the Projects section of the portfolio.";
    
    } else if (items === "Contacts") {

        let contactForm = `
            <form id='contactForm'>
                <label for='name'>Name:</label>
                <input type='text' id='name'><br>

                <label for='email'>Email:</label>
                <input type='email' id='email'><br>

                <label for='message'>Message:</label>
                <textarea id='message'></textarea><br>

                <button type='submit'>Submit</button>
            </form>
        `;

        // Attach submit listener AFTER the form is inserted
        setTimeout(() => {
            document.getElementById("contactForm").addEventListener("submit", function(event) {
                event.preventDefault();
                alert("Form submitted!");
            });
        }, 0);

        return contactForm;

    } else if (items === "Skills") {

    let techSkills = ["HTML", "CSS", "JavaScript", "Python", "Django", "C#", ".NET", "SQL", "Blazor"];
    let softSkills = ["Communication", "Problem Solving", "Teamwork", "Adaptability", "Time Management", "Critical Thinking"];

    let content = "<h3>Technical Skills</h3><ul>";

    techSkills.forEach(skill => {
        content += `<li>${skill}</li>`;
    });

    content += "</ul>";

    content += "<h3>Soft Skills</h3><ul>";

    softSkills.forEach(skill => {
        content += `<li>${skill}</li>`;
    });

    content += "</ul>";

    return content;
} else {
        return "Select a section from the navigation menu to learn more about me.";
    }   
}*/


/******************************************** */
/*Typed.js alternative implementation*/
/*
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed('#element', {
            strings: ['Web Developer', '.NET Developer', 'Data Analyst', 'Data Scientist'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
        var typed = new Typed('#softSkills', {
            strings: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });
        var typed = new Typed('#techSkills', {
            strings: ['Programming Languages: Python, C#, JavaScript', 'Web Development: HTML, CSS, ASP.NET, React', 'Data Analysis: SQL, Pandas, NumPy', 'Machine Learning: Scikit-learn, TensorFlow', 'Version Control: Git, GitHub'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });
    </script>
*/
/********************************************  */


/*Manual implementation of typing animation function*/
function typeWriter(elementId, words, typeSpeed = 100, backSpeed = 50, loop = true ) {
    const element = document.getElementById(elementId);
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayedText= currentWord.substring(0, charIndex);
        element.textContent = displayedText;
        if (!isDeleting) {
            if (charIndex < currentWord.length) {
                charIndex++;
                setTimeout(type, typeSpeed);
            } else {
                if (loop) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                }
            }
        } else {
            if (charIndex > 1) {
                charIndex--;
                setTimeout(type, backSpeed);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            }
        }
    }
    type(); 
}

typeWriter("element", ["Web Developer", ".NET Developer", "Data Analyst", "Data Scientist"], 150, 50, true);
typeWriter("softSkills", ["Communication", "Problem Solving", "Teamwork", "Adaptability", "Time Management", "Critical Thinking"], 150, 75, true);
typeWriter("techSkills", ["Programming Languages: Python, C#, JavaScript", "Web Development: HTML, CSS, ASP.NET, React", "Data Analysis: SQL, Pandas, NumPy", "Machine Learning: Scikit-learn, TensorFlow", "Version Control: Git, GitHub"], 150, 75, true);



/*Experience Section*/ 
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));




// Scroll animation for Projects section
const projectCards = document.querySelectorAll(".fade-in-project");

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));


// Modal logic
const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const modalId = btn.closest(".project-card").dataset.modal;
        document.getElementById(modalId).style.display = "flex";
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

document.querySelectorAll(".progress-bar span").forEach(span => {
    const w = span.dataset.width;
    span.style.width = w ;
});

// SLIDESHOW LOGIC FOR EACH MODAL
document.querySelectorAll(".modal-slider").forEach(slider => {
    let slides = slider.querySelectorAll(".modal-slide");
    let index = 0;

    const showSlide = (i) => {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    };

    slider.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    slider.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});

// THIS IS THE HOMEPAGE
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "rgba(154, 71, 232, 0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();




