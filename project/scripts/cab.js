const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

document.addEventListener('DOMContentLoaded', () => {
    // takes care of feedback form submission
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Saves feedback to localStorage
        const feedback = { name, comment, date: new Date().toLocaleString() };
        const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        feedbackList.push(feedback);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        alert('Thank you for your feedback!');
        this.reset();
    });

    // Handles rating form submission
    document.getElementById('ratingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const recipe = document.getElementById('recipe').value;
        const rating = document.getElementById('rating').value;

        // Saves rating to the localStorage section
        const ratingEntry = { recipe, rating, date: new Date().toLocaleString() };
        const ratingList = JSON.parse(localStorage.getItem('ratingList')) || [];
        ratingList.push(ratingEntry);
        localStorage.setItem('ratingList', JSON.stringify(ratingList));

        alert('Thank you for your rating!');
        this.reset();
    });

    // show feedback and ratings if on the literal page
    if (document.getElementById('feedbackDisplay')) {
        displayFeedback();
    }
    if (document.getElementById('ratingDisplay')) {
        displayRatings();
    }

    
});

function displayFeedback() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const feedbackContainer = document.getElementById('feedbackDisplay');
    feedbackContainer.innerHTML = feedbackList.map(f => `<p>${f.date} - <strong>${f.name}:</strong> ${f.comment}</p>`).join('');
}

function displayRatings() {
    const ratingList = JSON.parse(localStorage.getItem('ratingList')) || [];
    const ratingContainer = document.getElementById('ratingDisplay');
    ratingContainer.innerHTML = ratingList.map(r => `<p>${r.date} - <strong>${r.recipe}:</strong> ${r.rating}</p>`).join('');
}
