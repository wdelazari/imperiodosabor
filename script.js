function openModal(img) {
    var modal = document.querySelector('.modal');
    var modalImg = document.getElementById('modal-img');

    modal.style.display = 'flex';
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

