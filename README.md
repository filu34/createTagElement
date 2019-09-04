# createTagElement

----
### Simple ways to add any html tag element to any parent tag. In JavaScript. 

> I wanted to make a simple possible way as can be, to create script, that can be easy to understand, and easy to use, by any beginner of JavaScript. Thanks to that simple function you can create any HTML Tag in JavaScript, and add it to any existing parent Tag of HTML. 
I'm also on the beginning of the road to learn how to code, and I found that, it is sometimes not easy to find easy solution.
       
    const createTagEl = function(parent, child, atrArrayObj) {
       child = document.createElement(child);
       parent.appendChild(child);

       for (let i = 0; i < atrArrayObj.length; i++) {
           child.setAttribute(atrArrayObj[i][0], atrArrayObj[i][1]);
       };
       return child;
    };
    
> Below, we will create a simple "div" tag, and add it to body od the html document. 

    const body = document.querySelector("body");
    const attributes = [["class", "test"], ["style", "background-color: red"]];

    const createTagEl = function(parent, child, atrArrayObj) {
       child = document.createElement(child);
       parent.appendChild(child);

       for (let i = 0; i < atrArrayObj.length; i++) {
           child.setAttribute(atrArrayObj[i][0], atrArrayObj[i][1]);
       };
       return child;
    };

    createTagEl(body, "div", attributes);
    
> In function above we called createTagEl() function with set of attributes, that we want pass to the function. By that making <div></div> tag, implementing straight in to html document. 

    const attributes = [["class", "test"], ["style", "background-color: red"]];

> Here is two dimentional array, with key and value, for each sub arrays. By passing it to the loop, we can set infinite number, and any attributes for HTML tag.
