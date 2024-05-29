document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = `Total reviews submitted: ${reviewCount}`;
});
