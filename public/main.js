
// swiper js
var swiperOptions2 = {
    loop: true,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    speed: 4000,
    freeModeMomentum: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
};
var swiper = new Swiper(".swiper-container2", swiperOptions2);


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");

function showImage(src) {
    imgModal.classList.remove('hidden');
    showImg.src = src;
}
function closeImage() {
    imgModal.classList.add('hidden');
}


// open modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
// open modal
function openModal1() {
    const modal1 = document.getElementById("modal1");
    modal1.style.display = "flex";
}
function closeModal1() {
    const modal1 = document.getElementById("modal1");
    modal1.style.display = "none";
}



const applyNow = () => {
    // Replace these values with your actual campaign data
    const lpurl = "https://itmvoc.nopaperforms.com/";
    const utmSource = getParameterByName('utm_source') || 'default_source';
    const utmMedium = getParameterByName('utm_medium') || 'default_medium';
    const utmCampaignName = getParameterByName('utm_campaign') || 'default_campaign';
    const adgroupId = getParameterByName('utm_adgroupid') || 'default_adgroupid';
    const keyword = getParameterByName('utm_keyword') || 'default_keyword';
    const campaignid = getParameterByName('utm_campaignid') || 'default_campaignid';
    const network = getParameterByName('utm_network') || 'default_network';
    const device = getParameterByName('utm_device') || 'default_device';
    const matchtype = getParameterByName('utm_matchtype') || 'default_matchtype';

    // Construct the UTM parameters URL
    const utmParameters = `?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaignName}&utm_adgroupid=${adgroupId}&utm_keyword=${keyword}&utm_term=${keyword}&utm_campaignid=${campaignid}&utm_network=${network}&utm_device=${device}&utm_matchtype=${matchtype}`;

    // Build the final URL
    const finalUrl = `${lpurl}${utmParameters}`;

    // Redirect the user to the final URL
    window.location.href = finalUrl;
};

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[[]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

