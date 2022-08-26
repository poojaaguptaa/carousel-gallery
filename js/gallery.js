 

// js for crousel
 $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        // number of items display on the screen
        items:1,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        // pagination with dots and navigation
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        // autoplay crousel control
        autoPlay:true
    });
});


// js for image modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
} 