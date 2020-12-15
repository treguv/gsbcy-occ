//make function that dynamically generates a bootstrap card and adds to page
function generateCard(trackingId) {
  let trackingCardCol = $("<div>"); // make column
  trackingCardCol.addClass("col-sm-1 col-md-4 my-2");
  //make card to add to the col
  let trackingCard = $("<div>").addClass("card text-center card-background");
  //make card body
  let trackingCardBody = $("<div>").addClass("card-body card-content");
  //add title and text to body
  let trackingCardHeader = $("<div>")
    .addClass("card-title header-text inverted-color")
    .text(trackingId);
  let trackingCardBodyText = $("<div>")
    .addClass("card-text header-sub-text inverted-color ")
    .text("Track Me!");
  //append to card body
  trackingCardBody.append(trackingCardHeader);
  trackingCardBody.append(trackingCardBodyText);
  //add body to card
  trackingCard.append(trackingCardBody);
  trackingCardCol.append(trackingCard);

  $("#tracking-card-row").append(trackingCardCol);
}

fetch("/tracking", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => {
  console.log(res);
});

function cardCreation(data) {
  console.log(data);
  var newData = data.body;
  console.log(newData);
}
