/** SLIDE ANIMATIONS 
 * 
 * encapsulés dans une expression de langage 
 * pour ne pas avoir de soucis de scope de variables 
 *
 * */
(function () {

    /* VARIABLES */
    let defaultPosition = 1;


    /* METHODS */
    function slide(pos) {
        
        const allSlides = document.getElementsByClassName('one-slide');

        if (pos > allSlides.length) {
            defaultPosition = 1;
        }

        for (let i = 0; i < allSlides.length; i++) {
            const currentSlide = allSlides[i];
            currentSlide.style.display = 'none';
        }

        const targetSlide = allSlides[defaultPosition-1];
        targetSlide.style.display = 'flex';
    }


    function triggerSlide(pos) {
        slide(defaultPosition += pos);
    }


    /* EVENT LISTENERS */

    const advance = () => {
        triggerSlide(1);
        console.log("advanced");
        
    }
    const goback = () => {
        triggerSlide(-1);
        console.log("went back");
        
    }

    document.getElementById('prevButton').addEventListener('click', goback);
    document.getElementById('nextButton').addEventListener('click', advance);


    /* ANIMATIONS  */
    setInterval(() => { triggerSlide(1)}, 2000);

})();
   