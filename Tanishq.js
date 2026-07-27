let images = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw717035de/homepage/HeroBanner/the-spotlight-edit-desktop.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc11a3a1b/homepage/HeroBanner/signature-couture-edit-desktop1.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw475a1090/homepage/HeroBanner/sis-desktop1.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2ed4fda0/homepage/HeroBanner/fb-desktop-2-7-26.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb64b5a41/homepage/HeroBanner/gemstone-desktop.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9d4b48f2/homepage/HeroBanner/everyday-diamond-edit-desktop.jpg",

    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg"
];

   let index = 0;
   const banner = document.querySelector(".banner-image");

   function slider() {
    banner.src = images[index];
    index++;

    if(index >= images.length) {
        index=0;
    }

    setTimeout(slider, 3000);
   }

   slider();



        const topBtn = document.getElementById("topBtn");

        window.addEventListener("scroll", function() {
            if(window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
      
