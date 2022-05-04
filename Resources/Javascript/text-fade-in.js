const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text-animation');
        }
    });
});

observer.observe(document.querySelector('.intro-title'));
observer.observe(document.querySelector('.intro-content1'));
observer.observe(document.querySelector('.intro-content2'));
observer.observe(document.querySelector('.outro-content'));