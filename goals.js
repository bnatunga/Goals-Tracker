const newGoal = document.getElementById("new-goal");
const submitBtn = document.getElementById("save-btn");
const flexContainerDiv = document.getElementById("main");

//Add event listener to button.
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const goal = newGoal.value;
  if (goal === "") {
    alert("Please enter a goal!")
  } else {

    //Create a card
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    flexContainerDiv.appendChild(cardDiv);
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body", "top", "row");
    cardBodyDiv.appendChild(document.createTextNode(goal));
    cardDiv.appendChild(cardBodyDiv);

    const cardMidDiv = document.createElement("div");
    cardMidDiv.classList.add("middle", "row", "card-footer");
    cardDiv.appendChild(cardMidDiv);
    const smallElement = document.createElement("small");
    smallElement.className = "text-muted";
    cardMidDiv.appendChild(smallElement);
    const italicElement = document.createElement("i");
    smallElement.appendChild(italicElement);

    //Current date
    const today = new Date();
    const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

    italicElement.appendChild(document.createTextNode("Since" + ' ' + date));

    const cardFooterDiv = document.createElement("div");
    cardFooterDiv.classList.add("bottom", "row", "card-footer");
    cardDiv.appendChild(cardFooterDiv);
    cardFooterDiv.innerHTML = '<span class="iconify" data-icon="mdi-trash-can" data-inline="false">' + '</span>';

    newGoal.value = "";

    //Add event listener to trash icon
    cardFooterDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("iconify")) {
        if (confirm("Are you sure you want to delete this goal?")) {
          flexContainerDiv.removeChild(e.target.parentElement.parentElement)
        }
      }
    })
  }
})
//Goals
//Read about functional programming
//Write a blog post each month
//Do 10 minutes meditation every day