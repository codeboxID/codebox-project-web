const nav = document.createElement("nav")
nav.className = "icon-bar";
document.body.appendChild(nav)

const overlay = document.createElement("div")
overlay.id = "myOverlay";
overlay.className = "overlay";
document.body.appendChild(overlay)

// Mengubah `itemList` menjadi variabel global di luar fungsi
const itemList = document.createElement("div")
itemList.className = "itemList"
itemList.id = "itemList"
overlay.appendChild(itemList);

function searchContainer(){
  let closeButton = document.createElement("span")
  closeButton.innerText = "×";
  closeButton.className = "closebtn";
  closeButton.title = "close button";
  closeButton.onclick = closeSearch;
  overlay.appendChild(closeButton);

  let overlayContent = document.createElement("div")
  overlayContent.className = "overlay-content";
  overlay.appendChild(overlayContent)

  let formSearch = document.createElement("form")
  overlayContent.appendChild(formSearch)

  let formInputSearch = document.createElement("input")
  formInputSearch.id = "searchInput";
  formInputSearch.type = "text";
  formInputSearch.placeholder = "search...";
  formSearch.appendChild(formInputSearch)
}

function searchList(itemSearch , description , itemOpen , action){
  let item = document.createElement("div")
  item.id = "item"
  if (itemOpen && action) {
    item.addEventListener("click", function () {
      window.open(itemOpen, action)
    });
  }
  item.className = "item"
  itemList.appendChild(item)

  let itemTitle = document.createElement("h3")
  itemTitle.className = "item-open"
  itemTitle.innerText = itemSearch
  item.appendChild(itemTitle)

  let itemDescription = document.createElement("p");
  itemDescription.className = "description"; 
  itemDescription.innerText = description;
  item.appendChild(itemDescription);
}

searchContainer()
searchList("ytdl-core" , "(app)" , "https://codebox.my.id" , "_self")

function navigasiIcon(title, link, action, alt, src, fungsi) {
  let navLinkWithIcon = document.createElement("div")
  navLinkWithIcon.className = "nav-icon";
  navLinkWithIcon.title = title;
  if (link && action) {
    navLinkWithIcon.addEventListener("click", function () {
      window.open(link, action)
    });
  }
  if (typeof fungsi === "function") {
    navLinkWithIcon.onclick = fungsi
  }
  nav.appendChild(navLinkWithIcon);

  let navIcon = document.createElement("img")
  navIcon.className = "navicon"
  navIcon.alt = alt
  navIcon.src = src
  navLinkWithIcon.appendChild(navIcon)
}

const myWeb = "https://codebox.my.id"
const discordInvite = "https://dc.codebox.my.id/"

// Memanggil fungsi navigasiIcon tanpa menyimpan nilai konstan
navigasiIcon("HOME", myWeb, "_self", "home", "https://img.codebox.my.id/home.png",)
navigasiIcon("Full Screen", "", "", "full screen", "https://img.codebox.my.id/fullScreen.png", openFullScreen)
navigasiIcon("","","","search","https://img.codebox.my.id/search.png",openSearch)
navigasiIcon("back", "", "", "back", "https://img.codebox.my.id/back.png", () => window.history.back())
navigasiIcon("Discord Invite", discordInvite, "_self", "discord icon", "https://img.codebox.my.id/discord.png",)

const elem = document.documentElement;
function openFullScreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

document.getElementById('searchInput').addEventListener('input', function (event) {
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll('#itemList #item');

  listItems.forEach(function (item) {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
