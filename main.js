document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });
});
