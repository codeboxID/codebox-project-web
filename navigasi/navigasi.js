const nav = document.createElement("nav")
nav.className = "icon-bar";
document.body.appendChild(nav)

const overlay = document.createElement("div")
overlay.id = "myOverlay";
overlay.className = "overlay";
document.body.appendChild(overlay)


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
  item.onclick = test
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
searchList("No post" , "(mohon maaf belum ada apa apa)" , "#" , "_self")

function test() {
  alert("blum ada apa apa bro jangan di klik")
};

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
navigasiIcon("HOME", myWeb, "_self", "home", "https://lh3.google.com/u/0/d/1B3Len1jZjpxbeMaiI5eNYXO04D330uuB=w1366-h615-iv1",)
navigasiIcon("Full Screen", "", "", "full screen", "https://lh3.google.com/u/0/d/1riAYAnmB3EKzcI3nXRjQaHLEGVTpBrkm=w534-h615-iv1", openFullScreen)
navigasiIcon("","","","search","https://lh3.google.com/u/0/d/1VAqxP3Q-4J1hWis6-JegIHtCiQBKzrtO=w1366-h615-iv1",openSearch)
navigasiIcon("back", "", "", "back", "https://lh3.google.com/u/0/d/1CPM-GvJEQUlfm1bO93ibYhwk19-sfv18=w534-h615-iv1", () => window.history.back())
navigasiIcon("Discord Invite", discordInvite, "_self", "discord icon", "https://lh3.google.com/u/0/d/1Lo0ikiq7m00fZ2159KCAk2wPZwPSu8fd=w1366-h615-iv1",)

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
