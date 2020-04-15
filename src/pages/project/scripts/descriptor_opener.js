(function () {
    
    /* VARIABLES */
    const opener = document.getElementById('descriptor-opener');
    const descriptorElt = document.getElementById('descriptor-div');
    const closer = document.getElementById('le-frmeur');    
    
    
    opener.addEventListener('click', () => {
        descriptorElt.style.display = 'block';
        descriptorElt.style.height = '100%';
    });
    
    closer.addEventListener('click', () => {
        descriptorElt.style.display = 'none';
    })
    
    
})();