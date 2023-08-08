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
