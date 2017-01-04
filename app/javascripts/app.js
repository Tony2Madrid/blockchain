var accounts;
var account;


function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};
  
function updateOwner(){
  advertisement.deployed().owner().then(function(value){
  document.getElementById("owner").innerHTML=value;
  });
}

function updateMoney(){
  advertisement.deployed().online_date().then(function(value){
  var actualprice;
  var date;
  var now = Math.round(Date.now()/1000);
    var timeelapsed= now-value;
  timeelapsed=timeelapsed/(8640000); //conversion en jours

  advertisement.deployed().price().then(function(value){
  actualprice=value;
    var cap = ((actualprice-2*timeelapsed)*110)/100;
  document.getElementById("money").innerHTML=Math.round(cap);
  });
  });
}
function updateDesc(){
  advertisement.deployed().description().then(function(value){
  document.getElementById("desc").innerHTML=value;
  });
}
function updateImage(){
  advertisement.deployed().image().then(function(value){
  document.getElementById("imageP").src=value;
  });
}
function updatePromo(){
  advertisement.deployed().codepromo().then(function(value){
  document.getElementById("promo").innerHTML=value;
  });
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[1];
    updateOwner();
    updateMoney();
    updatePromo();
    updateImage();
    updateDesc();
  });
}

