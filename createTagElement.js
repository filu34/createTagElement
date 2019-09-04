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
