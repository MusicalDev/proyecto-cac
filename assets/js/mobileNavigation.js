document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('check');
    const mobileNavigation = document.querySelector('.mobile-navigation');

    if (checkbox && mobileNavigation) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                mobileNavigation.classList.add('is-active');
                mobileNavigation.style.display = 'flex';
                setTimeout(() => {
                    mobileNavigation.style.opacity = '1';
                    mobileNavigation.style.visibility = 'visible';
                }, 10);
            } else {
                mobileNavigation.style.opacity = '0';
                mobileNavigation.style.visibility = 'hidden';
                setTimeout(() => {
                    mobileNavigation.classList.remove('is-active');
                    mobileNavigation.style.display = 'none';
                }, 300);
            }
        });
    } else {
        console.error("Error: Elements not found in DOM");
    }
});
