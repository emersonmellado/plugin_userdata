function gbPluginDidLoad() {
  init();
}

function init() {
  gbGetUser();
}

function gbDidSuccessGetUser(data) {
  fillPageWithData(data);
}

function fillPageWithData(data) {
  document.getElementById("userId").innerHTML = data["userId"];
  document.getElementById("name").innerHTML = data["name"];
  document.getElementById("email").innerHTML = data["email"];
}
