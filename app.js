const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hide'); // Remove 'hide' class when it becomes visible
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hide');
        }
    });
}, {
    threshold: 0.5 // Adjust the threshold as needed
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const topnav = document.querySelector('.topnav');
    setTimeout(() => {
        topnav.classList.add('show');
    }, 100); // Adjust the delay as needed
});
