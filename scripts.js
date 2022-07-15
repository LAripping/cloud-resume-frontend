var counterContainer = document.querySelector(".visit-counter");

/////// v1.0 : DynamoDB datastore 
fetch('https://7gzjw3zz9a.execute-api.eu-west-2.amazonaws.com/fetch-update-visitor-count')
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