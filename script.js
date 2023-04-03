"use strict";

const msg = [
  {
    personImg: "./assets/images/avatar-mark-webber.webp",
    personName: "Mark Webber",
    msgReaction: "reacted to your recent post",
    msgSubject: "My first tournament today!",
    msgAgo: "1m ago",
    msgImg: "",
    msgText: "",
  },

  {
    personImg: "./assets/images/avatar-angela-gray.webp",
    personName: "Angela Gray",
    msgReaction: "followed you",
    msgSubject: "",
    msgAgo: "5m ago",
    msgImg: "",
    msgText: "",
  },

  {
    personImg: "./assets/images/avatar-jacob-thompson.webp",
    personName: "Jacob Thompson",
    msgReaction: "has joined your group",
    msgSubject: "Chess Club",
    msgAgo: "1 day ago",
    msgImg: "",
    msgText: "",
  },
  
  {
    personImg: "./assets/images/avatar-rizky-hasanuddin.webp",
    personName: "Rizky Hasanuddin",
    msgReaction: "sent you a private message",
    msgSubject: "",
    msgAgo: "5 days ago",
    msgImg: "",
    msgText:
      "Hello, thanks for setting up the Chess Club. I've been a member \
      for a few weeks now and I'm already having lots of fun and \
      improving my game.",
  },

  {
    personImg: "./assets/images/avatar-kimberly-smith.webp",
    personName: "Kimberly Smith",
    msgReaction: "commented on your picture",
    msgSubject: "",
    msgAgo: "1 week ago",
    msgImg: "./assets/images/image-chess.webp",
    msgText: "",
  },

  {
    personImg: "./assets/images/avatar-nathan-peterson.webp",
    personName: "Nathan Peterson",
    msgReaction: "reacted to your recent post",
    msgSubject: "5 end-game strategies to increase your win rate",
    msgAgo: "2 weeks ago",
    msgImg: "",
    msgText: "",
  },

  {
    personImg: "./assets/images/avatar-anna-kim.webp",
    personName: "Anna Kim",
    msgReaction: "left the group",
    msgSubject: "Chess Club",
    msgAgo: "2 weeks ago",
    msgImg: "",
    msgText: "",
  }, 
];

function msgDisplay() {
  let temp = document.getElementById("temp").content;

  for (let i = 0; i < msg.length; i++) {
    let user = msg[i];
    let msgCopy = document.importNode(temp, true);

    msgCopy.querySelector(".tab__img").src = user.personImg;
    msgCopy.querySelector(".tab-text__name").textContent = user.personName;
    msgCopy.querySelector(".tab-text__reaction").textContent = user.msgReaction;
    msgCopy.querySelector(".tab-text__subject").textContent = user.msgSubject;
    msgCopy.querySelector(".tab-text__time-ago").textContent = user.msgAgo;

    if (user.msgImg != "") {
      msgCopy.querySelector(".tab__msg-img").src = user.msgImg;
      } else {
      msgCopy.querySelector(".tab__msg-img").style.display = "none";
    }

    if (user.msgText != "") {
      msgCopy.querySelector(".tab-inner__text").textContent = user.msgText;
    } else {
      msgCopy.querySelector(".tab-inner").style.display = "none";
    }

    document.getElementById("main").appendChild(msgCopy);
  }
}

function reset() {
  tab.forEach((tab) => {
    tab.style.background = "var(--clr-neutral-200)";
    tab.querySelector(".tab-text__red-dot").style.display = "inline-block";
    tab.querySelector(".tab-inner").classList.remove("active");
    unreadMsg = 7;
    msgCnt.textContent = unreadMsg;
  }) 
}

window.addEventListener("DOMContentLoaded", msgDisplay());


let unreadMsg = 7;

const msgCnt = document.getElementById("msg-num"),
      tab = document.querySelectorAll(".tab");

msgCnt.textContent = unreadMsg;

tab.forEach(tab => {
  tab.addEventListener("click", () => {
    if(tab.className == "tab container flex") {
      if (tab.style.background != "transparent") {
        unreadMsg -= 1;
        msgCnt.textContent = unreadMsg;
      }
      tab.style.background = "transparent";
      tab.querySelector(".tab-text__red-dot").style.display = "none";
      tab.querySelector(".tab-inner").classList.toggle("active");
    }
  })
})

