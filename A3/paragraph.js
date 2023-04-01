// Author: Hitesh Bhasin
// Student# 1167791 
// below is the class and constructor . 
// The constructor should create a ​div​ ​before​ the paragraph, with the ID button_container​. 
//It then add four <a> ​buttons​ with the following titles.  
// the function container carryes the tage<a> in which each toggle button lies
// it then Add click event handlers to each of the four buttons.Each click of a button should "toggle" a style on the paragraph.
// this is how each button works:
// Toggle Bold​ will make text bold
// Toggle Width​ will change the width of the paragraph to be 50%.
// Toggle Colour​ will change the color of the text to ​Ferrari Red​.
// Toggle Size​ will double the font size from a default of 12px
// the sources I used https://www.w3schools.com/js/js_whereto.asp, https://javascript.info, https://softauthor.com/create-html-element-in-javascript/ & some basic info I got from youtube. 

class ParagraphChanger {
    constructor(paragraph) {
        this.paragraph = paragraph;


        let container = document.createElement('div'); // adding container name "button_contaier to the body"
        container.id = 'button_container';
        document.body.insertBefore(container, paragraph);

        let button1 = document.createElement('a'); // adding first button name "Toggle Bold" with the addEventListener which listen and toggle the class property from css 
        button1.id = ("bold");
        button1.innerHTML = "Toggle Bold";
        container.appendChild(button1);
        button1.addEventListener("click", function() {
            paragraph.classList.toggle('bold');
        });
        let button2 = document.createElement('a');

        button2.innerHTML = "Toggle Width";
        button2.id = ("width");
        container.appendChild(button2);
        button2.addEventListener("click", function() { // adding second button name "Toggle width" with the addEventListener which listen and togglethe class property from css 
            paragraph.classList.toggle('width');
        });
        let button3 = document.createElement('a');
        button3.innerHTML = "Toggle Colour";
        button3.id = ("colour");
        container.appendChild(button3);
        button3.addEventListener("click", function() { // adding first button name "Toggle Colour" with the addEventListener which listen and toggle the class property from css 
            paragraph.classList.toggle('colour');
        });
        let button4 = document.createElement('a');
        button4.innerHTML = "Toggle Font Size";
        button4.id = ("size");
        container.appendChild(button4);
        button4.addEventListener("click", function() { // adding first button name "Toggle size" with the addEventListener which listen and toggle the class property from css 
            paragraph.classList.toggle('size');
        });


    }

}


let Paragraph1 = document.querySelector('#target_p');
let newParagraph = new ParagraphChanger(Paragraph1);