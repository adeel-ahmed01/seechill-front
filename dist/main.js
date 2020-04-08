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
    function triggerSlide(pos) {
        
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
        targetSlide.style.justifyContent = 'space-around';
    }


    function onclickSlide(pos) {
        triggerSlide(defaultPosition += pos);
    }


    /* EVENT LISTENERS */

    const advance = () => {
        onclickSlide(1);        
    }
    const goback = () => {
        onclickSlide(-1);
    }

    document.getElementById('prevButton').addEventListener('click', goback);
    document.getElementById('nextButton').addEventListener('click', advance);


    /* TRIGGERING  */
    triggerSlide(defaultPosition);

    

})();