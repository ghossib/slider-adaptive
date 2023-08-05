var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".page-buttons",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});



var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

function updateImage() {
    console.log(this);
    console.log(this.files);
}
const input = document.getElementById('photos');
input.addEventListener('change', updateImage);

