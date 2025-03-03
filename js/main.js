/* Theme: Niwax - Creative Web Design & Digital Marketing Agency HTML5 Template
Author: Rajesh-Doot	
File Description: Main JS file of the template*/
document.addEventListener("DOMContentLoaded", function () {
  let logoimg = document.querySelector('.change');
  
  if (!logoimg) {
    console.error("Logo image not found!");
    return; // Prevents errors if the element is missing
  }

  let defaultLogo = "./images/White logo.png";
  let scrolledLogo = "./images/Salieabs Logo_V1_PNG.png"; 

  // Check on page load (in case user reloads while scrolled down)
  if (window.scrollY > 50) {
    logoimg.src = scrolledLogo;
  } else {
    logoimg.src = defaultLogo;
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) { 
      logoimg.src = scrolledLogo;
    } else {
      logoimg.src = defaultLogo;
    }
  });
  // console.log(logoimg)
});


(function ($) {
    "use strict";
  
   //wow animation
    new WOW().init();
    //Mobile nav
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');
    var defaultOptions = {
      disableAt: false,
      customToggle: $toggle,
      levelSpacing: 10,
       navTitle: 'Salieabs',
       levelTitles: true,
      levelTitles: true,
       labelClose: false,
      levelTitleAsBack: true,
      levelOpen: 'expand',
      closeOnClick: true,
      insertClose: true,
      closeActiveLevel: true,
      insertBack: true
    };  
  // Nav call plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
  
  //Sticky Header 
    function updateScroll() {
      if ($(window).scrollTop() >= 80) {
        $(".navfix").addClass('sticky');
      } else {
        $(".navfix").removeClass("sticky");
      }
    }
    $(function () {
      $(window).scroll(updateScroll);
      updateScroll();
    });
  
  //Header mega menu
    var $nav = $('li.sbmenu');
    $nav.hover(
      function () {
        $(this).addClass('hover');
      },
      function () {
        $(this).removeClass('hover');
      }
    );
  
   //Video magnificPopup
    $('.video-link').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
    });
  
 
   //Owl-Carousel - Home hero card
    var owl = $('.service-card-prb');
    owl.owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        520: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 3
        },
        1400: {
          items: 3
        },
        1600: {
          items: 3
        },
      }
    });
  
    //Owl-Carousel - Home testimonial
    var owl = $('.testimonial-card-a');
    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1400: {
          items: 1
        }
      }
    });
  
    //Owl-Carousel - video testimonial
    var owl = $('.video-testimonials');
    owl.owlCarousel({
      items: 2,  
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3500,  
      smartSpeed: 1500,
      margin: 20,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 2
        },
        1400: {
          items: 2
        }
      }
    });
  
    //Owl-Carousel - case-study
    var owl = $('.project-screens');
    owl.owlCarousel({
      items: 8,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        520: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 3
        },
        1400: {
          items: 3
        },
        1600: {
          items: 3
        },
      }
    }); 
  
     //Owl-Carousel -portfolio slide 
    var owl = $('.porto-slide');
    owl.owlCarousel({ 
      items:1,  
      loop: true,
      autoplay: true,
      margin: 10,
      nav: false,
      dots: true,
      stagePadding: 50,
      autoplayTimeout: 350000,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1,
          stagePadding:0
        },
        520: {
           items: 1,
          stagePadding:0
        },
        768: {
           items: 1,
          stagePadding:0
        },
        1200: {
          items: 1
        },
        1400: {
          items: 1
        },
        1600: {
          items: 1
        },
      }
    }); 
  
      //Owl-Carousel -single slide
    var owl = $('.single-slide');
    owl.owlCarousel({ 
      items:1,  
      loop: true,
      autoplay: true,
      margin: 10,
      nav: false,
      dots: true,
      stagePadding: 100,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      smartSpeed: 2000,
       responsive: {
        0: {
          items: 1,
          stagePadding:0
        },
        520: {
           items: 1,
          stagePadding:0
        },
        768: {
           items: 1,
          stagePadding:0
        },
        1200: {
          items: 1
        },
        1400: {
          items: 1
        },
        1600: {
          items: 1
        },
      }
    });
  
   //Owl-Carousel - app page bages-slider
    var owl = $('.bages-slider');
    owl.owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      centre:true,
      margin: 20,
      nav: false,
      dots: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 2
        },
        520: {
          items: 3
        },
        768: {
          items: 3
        },
        1200: {
          items: 3
        },
        1400: {
          items: 4
        },
        1600: {
          items: 4
        },
      }
    });
  
  //Owl-Carousel - app page bages-slider
    var owl = $('.logo-weworkfor');
    owl.owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplayTimeout: 1800,
      autoplayHoverPause: false,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 3
        },
        520: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 4
        },
        1400: {
          items: 5
        },
        1600: {
          items: 6
        },
      }
    });
  
    //  //Owl-Carousel - Home testimonial
    var owl = $('.testimonial-card-b');
    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      dotsContainer: "#testimonials-avatar",
      smartSpeed: 500,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1400: {
          items: 1
        }
      }
    });
  
  
  //full card portfolio
    var owl = $('.zoomowl');
    owl.owlCarousel({
          stagePadding: 200,
          loop:true,
          margin:10,
          nav:false,
          items:1,
          lazyLoad: true,      
          responsive:{
            0:{
              items:1,
              stagePadding: 60
            },
            600:{
              items:1,
              stagePadding: 100
            },
            1000:{
              items:1,
              stagePadding: 200
            },
            1200:{
              items:1,
              stagePadding: 250
            },
            1400:{
              items:1,
              stagePadding: 300
            },
            1600:{
              items:1,
              stagePadding: 350
            },
            1800:{
              items:1,
              stagePadding: 400
            }
          }
        });  
  
    //Counter Up	
    $(".counter").counterUp({
      delay: 10,
      time: 2500,
    });
  
    //Scroll to top
    $.scrollUp({
      animation: 'fade',
      scrollImg: {
        active: true,
        type: 'background'
      }
    });
  
    //Portfolio Filter		
    $('.card-list').imagesLoaded(function () {
      // init Isotope
      var $grid = $('.card-list').isotope({
        itemSelector: '.single-card-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer'
        }
      });    
      // filter items on button click
      $('.filter-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });
    });
    //for menu active class
    $('.filter-menu li').on('click', function (event) {
      $(this).siblings('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      event.preventDefault();
    });
  
  
  // background image
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
  
  
  //end of page
  })(jQuery);



  let currentSlide = 0;
  let currentModalImageIndex = 0;
  const totalSlides = document.querySelectorAll('.image-col:first-child .slide').length;
  let slideInterval;
  let imageModal;
  let allImages = [];

  function showSlide(index) {
      const leftSlides = document.querySelectorAll('.image-col:first-child .slide');
      const rightSlides = document.querySelectorAll('.image-col:last-child .slide');
      
      leftSlides.forEach(slide => slide.classList.remove('active'));
      rightSlides.forEach(slide => slide.classList.remove('active'));
      
      leftSlides[index].classList.add('active');
      rightSlides[index].classList.add('active');
      
      currentSlide = index;
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
      stopAutoSlide(); // Stop auto-sliding when user interacts
      setTimeout(startAutoSlide, 5000); // Restart after 5 seconds
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
      stopAutoSlide(); // Stop auto-sliding when user interacts
      setTimeout(startAutoSlide, 5000); // Restart after 5 seconds
  }

  function startAutoSlide() {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
      if (slideInterval) {
          clearInterval(slideInterval);
      }
  }

  function collectAllImages() {
      allImages = Array.from(document.querySelectorAll('.slider-img'));
  }

  function openModal(imgElement) {
      collectAllImages();
      currentModalImageIndex = allImages.indexOf(imgElement);
      const modalImage = document.getElementById('modalImage');
      modalImage.src = imgElement.src;
      modalImage.alt = imgElement.alt;
      imageModal.show();
      stopAutoSlide(); // Stop auto-sliding when modal is opened
  }

  function prevModalImage() {
      currentModalImageIndex = (currentModalImageIndex - 1 + allImages.length) % allImages.length;
      updateModalImage();
  }

  function nextModalImage() {
      currentModalImageIndex = (currentModalImageIndex + 1) % allImages.length;
      updateModalImage();
  }

  function updateModalImage() {
      const modalImage = document.getElementById('modalImage');
      modalImage.src = allImages[currentModalImageIndex].src;
      modalImage.alt = allImages[currentModalImageIndex].alt;
  }

  document.addEventListener('DOMContentLoaded', () => {
      imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
      collectAllImages();
      startAutoSlide();
      
      // Keyboard support for modal navigation
      document.addEventListener('keydown', (event) => {
          if (document.getElementById('imageModal').classList.contains('show')) {
              if (event.key === 'ArrowLeft') {
                  prevModalImage();
              } else if (event.key === 'ArrowRight') {
                  nextModalImage();
              } else if (event.key === 'Escape') {
                  imageModal.hide();
              }
          }
      });
      
      // Restart auto-sliding when modal is closed
      document.getElementById('imageModal').addEventListener('hidden.bs.modal', () => {
          setTimeout(startAutoSlide, 1000);
      });
  });

  document.querySelector('.slider-content').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.slider-content').addEventListener('mouseleave', startAutoSlide);
  
  // Touch event handling for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.querySelector('.slider-content').addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
  });
  
  document.querySelector('.slider-content').addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  });
  
  document.getElementById('imageModal').addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
  });
  
  document.getElementById('imageModal').addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleModalSwipe();
  });
  
  function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
          // Swipe left
          nextSlide();
      }
      if (touchEndX > touchStartX + 50) {
          // Swipe right
          prevSlide();
      }
  }
  
  function handleModalSwipe() {
      if (document.getElementById('imageModal').classList.contains('show')) {
          if (touchEndX < touchStartX - 50) {
              // Swipe left
              nextModalImage();
          }
          if (touchEndX > touchStartX + 50) {
              // Swipe right
              prevModalImage();
          }
      }
  }


  