window.onscroll = function() {myFunction()};
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    function myFunction(){
        if(window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

function cartFunction() {
    var yourCart = document.getElementById('yourCart0');
    if (yourCart.style.display === "none"){
        yourCart.style.display = "block";
    } else {
        yourCart.style.display = "none";
    }
}



const images = ["images3/1024.png", "images3/51LCsoHTenL.jpg", "images3/gf.png", "images3/tt.png"]; // Add more image paths as needed
let currentImageIndex = 0;


function showImage() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
}


function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
}


const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", nextImage);


showImage();

function nvidiaFunction() {
    var nvidiaCart = document.getElementById('nvidiaMax');
    if (nvidiaCart.style.display === "none"){
        nvidiaCart.style.display = "block";
    } else {
        nvidiaCart.style.display = "none";
    }
}

var nvidia = document.getElementById('nvidiaMax');
var closeBtn = document.getElementById('closeBtn');

function closeDiv() {
    nvidia.style.display = 'none';
}

closeBtn.addEventListener('click', closeDiv);


function toggleWishlist(productName, imageUrl) {
    var wishlistItems = document.getElementById('wishlist-items');
    var existingItem = Array.from(wishlistItems.children).find(item => item.textContent === productName);
    var addBtn = document.getElementById('addBtn');
    if(addBtn.textContent === 'Add to Wishlist'){
        addBtn.textContent = 'Added to Wishlist';
    } else {
        addBtn.textContent = 'Add to Wishlist';
    }

    if (existingItem) {
        // If the product is already in the wishlist, remove it
        wishlistItems.removeChild(existingItem);
    } else {
        // If the product is not in the wishlist, add it
        var listItem = document.createElement('li');
        listItem.textContent = productName;

        // Create an image element and set its source attribute
        var productImage = document.createElement('img');
        productImage.src = imageUrl;
        productImage.alt = productName;
        productImage.width = 50; // Set the image width as per your requirement

        // Append the image to the list item before appending the list item to the wishlist
        listItem.appendChild(productImage);

        // Append the list item to the wishlist
        wishlistItems.appendChild(listItem);
    }
}
