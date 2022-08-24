var counterContainer = document.querySelector(".visit-counter");

/////// v2.0 : SAM API  
fetch('https://bxmqz5pjl0.execute-api.eu-west-2.amazonaws.com/Prod/fetch-update-visitor-count')
  .then(response => {
    if(!response.ok) {
      error('');
    }
    return response.json();
  })
  .then(respj => {
    if( !('visitors' in respj) ){
      error('');
    }
    counterContainer.innerHTML = respj.visitors;
  })
  .catch(e => {
    error(e)
  })

function error(e) {
  alert('Visitors API call failed!');
  if(e){
    throw e;
  }
}