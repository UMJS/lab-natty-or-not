    document.addEventListener('DOMContentLoaded', function () {
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentItem = 0;

        function showItem(index) {
            carouselItems.forEach(item => item.style.display = 'none');
            carouselItems[index].style.display = 'block';
        }

        setInterval(() => {
            currentItem = (currentItem + 1) % carouselItems.length;
            showItem(currentItem);
        }, 3000);

        showItem(currentItem);
    });
    new window.VLibras.Widget('https://vlibras.gov.br/app');
