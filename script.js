const images = [
    "https://media.istockphoto.com/id/1291769824/photo/woman-wearing-a-long-yellow-dress-sitting-on-local-long-tail-boat-holding-her-hands-on-hat.jpg?s=612x612&w=0&k=20&c=TjcjPGW5LQGqHsRTBi0oCDpydTKxxLIzeo9yn48lxNM=",
    "https://cdn.pixabay.com/photo/2025/02/26/09/50/river-9432587_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_960_720.jpg",
    "https://cdn.pixabay.com/photo/2025/02/21/16/51/poppies-9422556_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/02/26/18/27/oystercatcher-9433624_1280.jpg",
    "https://media.istockphoto.com/id/1296344118/photo/beautiful-happy-woman-enjoying-the-warm-sunlight-in-a-tropical-public-park.jpg?s=612x612&w=0&k=20&c=Z0h4uIzZd4cxhkT_CSl9-1wFbnbuqEWYrp5heM9uDuQ="
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function updateImage() {
    sliderImage.src = images[currentIndex];
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}


updateImage();
