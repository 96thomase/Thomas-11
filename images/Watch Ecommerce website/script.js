// Ensu th eDom is fully loaded before running your scrasipt
 document.addEventListener('DOMContentLoaded', () => {
    // Try to Select the Element
     const Element = document.querySelector('.hamburger');

    // Check if the element existe
     if(Element) {
        // New it's safe to access claslist
          Element.classList.add('navlinks-active');
          
        //  Adds a new class
        console.log('navlinks', Element.classList);
        // outputs the class list
     }else {
         console.error('Element not found: navlinks-active');
     }
 });

// Ensure the DOM is fully loaded before running your script
// document.addEventListener('DOMContentLoaded', () => {
    // Try to select the element
    // const element = document.querySelector('.my-class');

    // Check if the element exists
    // if (element) {
        // Now it's safe to access classList
        // element.classList.add('new-class'); // Adds a new class
        // console.log('Class list:', element.classList); // Outputs the class list
    // } else {
        // console.error('Element not found: .my-class');
    // }
// });
