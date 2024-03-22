// PROJECT Description:
/*
* You are tasked with manipulating a simple webpage using JavaScript.
* The webpage contains a paragraph (<p>) element with the id paragraph and an empty div element with the id imageContainer.
* Your goal is to select the paragraph element, change its content to "Hello World", and then create an image element (<img>) with the source attribute set to "image.jpg" and append it to the imageContainer div.

// INSTRUCTIONS

/* Task 1:
 *Select the paragraph element with the id paragraph and change its content to "Hello World".

/* Task 2:
* Using JavaScript, create an image element with the source attribute set to "image.jpg".

/* Task 3:
* Append the created image element to the div element with the id imageContainer.


*/

// Write your code here. SUCCESS


// Task 1: Select the paragraph element with the id paragraph and change its content to "Hello World". 
    const paragraphElement = document.getElementById('paragraph'); 
    if (paragraphElement) { 
    paragraphElement.textContent = 'Hello World'; 

    } 

    let p = document.getElementsByTagName('p')
        console.log(p[0]);

    p[0].style.color = 'green'
    p[0].style.fontSize = '30px'
        console.log(p[1]);

    p[1].innerText = 'AKOKHO TEYIE JAIRUS.'
    p[1].style.color = 'red'
    p[1].style.fontSize = '16px'


// Task 2: Using JavaScript, create an image element with the source attribute set to "image.jpg". 
    const imageElement = document.createElement('img'); 
    imageElement.src = 'image.jpg'; 
    imageElement.height = 150;
    imageElement.width = 200;
    

// Task 3: Append the created image element to the div element with the id imageContainer. 
    const imageContainer = document.getElementById('imageContainer'); 
    if (imageContainer) { 
      imageContainer.appendChild(imageElement); 
    }

