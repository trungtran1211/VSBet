function goToSection(event, sectionId) {
    event.preventDefault();

    const homepage = window.location.origin + '/';

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // Nếu đang ở trang chủ thì cuộn bình thường
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Nếu đang ở trang khác, chuyển về trang chủ kèm theo hash
        window.location.href = homepage + '#' + sectionId;
    }
}
