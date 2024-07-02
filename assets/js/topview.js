
  
  document.addEventListener('DOMContentLoaded', () => {
   
    // Scroll animation
    const serviceSection = document.getElementById('service-section3');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceSection.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(serviceSection);
});
