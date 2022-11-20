function onLoadHandler() {
  //   const mainDiv = document.querySelector(".tva");

  //   const hamburgerElement = document.getElementById("hamburger");
  //   hamburgerElement.classList.add("hello");
  //   hamburgerElement.innerText = "🍔 save";

  //   const inputElement = document.createElement("input");
  //   inputElement.setAttribute("type", "text");

  //   const pizzaElement = document.createElement("p");
  //   pizzaElement.innerText = "🍕 save";

  //   const secondInputElement = document.createElement("input");
  //   secondInputElement.setAttribute("type", "text");

  //   mainDiv.appendChild(inputElement);
  //   mainDiv.appendChild(pizzaElement);
  //   mainDiv.appendChild(secondInputElement);

  //   hamburgerElement.addEventListener("click", (event) => {
  //     const hamburgerText = inputElement.value;
  //     sessionStorage.hamburger = hamburgerText;
  //     let count = 0;
  //     const savedElement = document.createElement("p");
  //     savedElement.innerText = "Your hamburger have been saved";
  //     savedElement.style.color = "#aaffee";
  //     hamburgerElement.appendChild(savedElement);
  //   });

  //   pizzaElement.addEventListener("click", function () {
  //     const pizzaText = secondInputElement.value;
  //     sessionStorage.pizza = pizzaText;
  //     console.log(pizzaText);
  //   });

  //   const mealDiv = document.createElement("div");

  //   mainDiv.appendChild(mealDiv);

  //   const mealText = document.createElement("h3");
  //   mealText.innerText = "Press here to see your saved meal:";

  //   mealDiv.appendChild(mealText);

  //   mealText.addEventListener("click", function () {
  //     const meal = document.createElement("p");
  //     meal.innerText =
  //       "My favorite thing to eat is 3 " +
  //       sessionStorage.hamburger +
  //       "s and 5 " +
  //       sessionStorage.pizza +
  //       "s at the same time! 😋. (press on me to REMOVE me)";

  //     mealDiv.appendChild(meal);

  //     meal.addEventListener("click", function () {
  //       meal.remove();
  //     });
  //   });

  const listElement = document.getElementById("toc");

  const contents = document.querySelectorAll("h3");
  let listItems = [];
  let content;
  console.log(contents.item(0).innerText);
  for (i = 0; i < contents.length; i++) {
    content = contents.item(i).innerText;
    listItems.push(content);
    const listItem = document.createElement("li");
    listItem.style.listStyle = "none";
    listItem.style.marginBottom = "2rem";

    const item = document.createElement("a");
    item.style.fontSize = "10pt";
    item.style.opacity = "70%";
    item.style.fontWeight = "bold";
    item.style.fontFamily = "Verdana";
    item.innerText = content;
    item.setAttribute("href", "#" + i);
    item.classList.add("content-link");
    item.classList.add("list-content");

    listItem.addEventListener("mouseover", function () {
      item.style.color = "#f36a8e";
      setTimeout(function () {
        item.style.color = "rgb(185, 27, 69)";
      }, 500);
    });

    listElement.appendChild(listItem);
    listItem.appendChild(item);
  }

  //   const button = document.getElementById("save-button");

  //   button.addEventListener("click", function () {
  //     const ratios = document.getElementById("ratio-form");
  //     console.log(ratios.innerHTML);
  //   });

  const source1Link = document.getElementById("source1-link");
  source1Link.addEventListener("click", function () {
    const source1 = document.getElementById("source1");
    source1.style.backgroundColor = "#000000";
    setTimeout(() => {
      source1.style.backgroundColor = "rgb(39, 39, 39)";
    }, 4000);
  });

  const source2Link = document.getElementById("source2-link");
  source2Link.addEventListener("click", function () {
    const source2 = document.getElementById("source2");
    source2.style.backgroundColor = "#000000";
    setTimeout(() => {
      source2.style.backgroundColor = "rgb(39, 39, 39)";
    }, 4000);
  });

  const source5Link = document.getElementById("source5-link");
  source5Link.addEventListener("click", function () {
    const source5 = document.getElementById("source5");
    source5.style.backgroundColor = "#000000";
    setTimeout(() => {
      source5.style.backgroundColor = "rgb(39, 39, 39)";
    }, 4000);
  });

  const source4Link = document.getElementById("source4-link");
  source4Link.addEventListener("click", function () {
    const source4 = document.getElementById("source4");
    source4.style.backgroundColor = "#000000";
    setTimeout(() => {
      source4.style.backgroundColor = "rgb(39, 39, 39)";
    }, 4000);
  });

  const source3Link = document.getElementById("source3-link");
  source3Link.addEventListener("click", function () {
    const source3 = document.getElementById("source3");
    source3.style.backgroundColor = "#000000";
    setTimeout(() => {
      source3.style.backgroundColor = "rgb(39, 39, 39)";
    }, 4000);
  });

  // Table of content when width is small
  const accordion = document.getElementsByClassName("accordion");

  /* Code made with help from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion 2022-11-19 */

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let tableOfContent = this.nextElementSibling;
      if (tableOfContent.style.display === "block") {
        tableOfContent.style.display = "none";

        // const tocDiv = document.getElementById("tocDiv");

        // const show = document.createElement("p");
        // show.innerText = "Show table of content";
        // show.style.fontSize = "8pt";
        // show.style.color = "#ffffff";

        // tocDiv.appendChild(show);

        // show.addEventListener("click", function () {
        //   tableOfContent.style.display = "block";
        //   show.remove();
        // });
      } else {
        tableOfContent.style.display = "block";
      }
    });
  }
}

window.addEventListener("load", onLoadHandler);

// setAttriburte("checked", "checked");
