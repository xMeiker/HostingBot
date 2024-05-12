function filtrarLugares(categoria) {
    const lugares = document.querySelectorAll('.lugar');
    lugares.forEach(lugar => {
        if (lugar.dataset.categoria === categoria || categoria === 'Todos') {
            lugar.style.display = 'block';
        } else {
            lugar.style.display = 'none';
        }
    });
}