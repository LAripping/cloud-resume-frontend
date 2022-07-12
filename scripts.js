var counterContainer = document.querySelector(".visit-counter");


/////// v0.1 / pre-step8 : Local Storage datastore
var visitCount = localStorage.getItem("page_view");

/////// v1.0 : DynamoDB datastore TODO


// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

