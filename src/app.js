import './scss/base.scss'
import * as elements from './js/base';



// Global App Controller 

const controller = (() => {
    document.addEventListener('click', ctrlDeleteItem);

    function ctrlDeleteItem(event) {
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
    }
})();
