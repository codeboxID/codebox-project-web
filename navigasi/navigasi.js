"use strict";

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

function searchContainer() {
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

function searchList(itemSearch, description, itemOpen, action) {
  let item = document.createElement("div")
  item.id = "item"
  if (itemOpen && action) {
    item.addEventListener("click", function () {
      window.open(itemOpen, action)
    });
  }
  item.className = "item"
  item.onclick = noPost
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
//isi
searchContainer()
searchList("NO POST", "(belum ada apa apa di sini web testing)", "#", "_self")

function noPost() {
  alert("kaga ada apa-apa bre ga usah di klik")
}

//todo issue coment
const newIssuesOverlay = document.createElement("div")
newIssuesOverlay.id = "overlay";
newIssuesOverlay.innerHTML = `
<div class="container">
<div id="comments-section"></div>
</div>
`
document.body.appendChild(newIssuesOverlay)



const overlayIssue = document.getElementById("overlay");
function openIssue() {


  if (overlayIssue.style.display === "none" || overlayIssue.style.display === "") {
    overlayIssue.style.display = "block";
    searchDisplay.style.display = "none";
  } else {
    overlayIssue.style.display = "none";
    searchDisplay.style.display = "none";
  }
}

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


navigasiIcon("HOME", myWeb, "_self", "home", "https://img.codebox.my.id/home.png",)
navigasiIcon("Full Screen", "", "", "full screen", "https://img.codebox.my.id/fullScreen.png", openFullScreen)
navigasiIcon("", "", "", "search", "https://img.codebox.my.id/search.png", openSearch)
navigasiIcon("back", "", "", "back", "https://img.codebox.my.id/back.png", () => window.history.back())
navigasiIcon("issue", "", "", "issue", "https://img.codebox.my.id/issue.png", openIssue)
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

const searchDisplay = document.getElementById("myOverlay");
function openSearch() {
  if (searchDisplay.style.display === "none" || searchDisplay.style.display === "") {
    searchDisplay.style.display = "block";
    overlayIssue.style.display = "none";
  } else {
    searchDisplay.style.display = "none";
    overlayIssue.style.display = "none";
  }
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

document.addEventListener("DOMContentLoaded", function () {
  var header = document.createElement("header");
  header.innerHTML = `
      <div class="header-container">
          <button id="create-issue-btn">Create New Issue Github</button>
      </div>
  `;
  newIssuesOverlay.prepend(header);
  document.getElementById("create-issue-btn").addEventListener("click", function () {
    window.open(newIssues, "_blank");
  });

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(issue => {
        var createdAt = new Date(issue.created_at);
        var formattedDate = createdAt.toLocaleString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });

        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        var sender = issue.user ? issue.user.login : "Anonymous";

        // Check if issue is closed
        var closedStatus = issue.state === "closed" ? `<span class="closed-status">Closed✘</span>` : "";

        commentElement.innerHTML = `
                  <h3>${sender} <hr></h3>
                  <h4> title: ${issue.title}<br> ${closedStatus}</h4>
                  <p>${issue.body}</p>
                  <p class="timestamp">${formattedDate}</p>
                  <a href="${issue.html_url}#new_comment_field" class="add-comment-btn" target="_blank">Reply</a>
              `;

        if (issue.comments > 0) {
          var repliesElement = document.createElement("div");
          repliesElement.classList.add("replies");
          repliesElement.innerHTML = "<h4>Replies:</h4>";

          // Fetch comments for the issue
          fetch(issue.comments_url)
            .then(response => response.json())
            .then(comments => {
              comments.forEach(comment => {
                var replyCreatedAt = new Date(comment.created_at);
                var formattedReplyDate = replyCreatedAt.toLocaleString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                });

                var replyElement = document.createElement("div");
                replyElement.classList.add("reply");
                replyElement.innerHTML = `
                                  <h4>${comment.user.login} <hr/></h4>
                                  <p>${comment.body}</p>
                                  <p class="timestamp">Sent at: ${formattedReplyDate}</p>
                              `;
                repliesElement.appendChild(replyElement);
              });

              // Append the replies to the main comment element
              commentElement.appendChild(repliesElement);
            })
            .catch(error => {
              console.error("Error fetching replies:", error);
            });
        }

        // Append the main comment element to the comments section
        document.getElementById("comments-section").appendChild(commentElement);
      });
    })
    .catch(error => {
      console.error("Error fetching comments:", error);
    });
});
