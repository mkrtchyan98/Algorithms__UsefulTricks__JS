//this is polyfill for classlist property
//takes the element and the new class name to be added as parameters
 
function addClassfunction(element,newClass) {
if (element.className) { 
     element.className = element.className + ' ' + newClass;
   } else {
     element.className = newClass;
  }
    return element.className;
 }
 
 
 
