let link = document.getElementById("more");
let mega = document.getElementById("meg");
let cont = document.getElementById("cont");
console.log(mega);
console.log(link);
link.onclick = function (e) {
  e.stopPropagation();
  mega.classList.toggle("for");
};
mega.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", function (e) {
  if (e.target !== "link" && e.target !== mega && e.target !== cont) {
    if (mega.classList.contains("for")) {
      {
        mega.classList.remove("for");
      }
    }
  }
});
let lin = document.querySelectorAll("ul li a");
function handle(event) {
  event.forEach(function (element) {
    element.addEventListener("click", function () {
      event.forEach(function (ele) {
        ele.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
}
handle(lin);

let skill = document.querySelector(".allskill");
let spans = document.querySelectorAll(".progress span ");
let up = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= skill.offsetTop - 300) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach(function (span) {
      span.style.width = "0";
    });
  }
  if (this.scrollY >= 1000) {
    up.classList.add("appear");
  } else {
    up.classList.remove("appear");
  }
  up.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
let countDte = new Date("Dec 31,2026 23:59:59").getTime();
let vp = new Date();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDte - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secn = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".min").innerHTML = min < 10 ? `0${min}` : min;
  document.querySelector(".sec").innerHTML = secn < 10 ? `0${secn}` : secn;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
let ccontent = document.querySelectorAll(".mohtwa .vi a p");
let content = document.querySelectorAll(".mohtwa .vi ");
let spanVid = document.querySelectorAll(".vi span");
console.log(spanVid);
function handle2(ev) {
  ev.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      ev.forEach(function (ele) {
        ele.classList.remove("actt");
      });
      this.classList.add("actt");
      spanVid.classList.add("actt");
    });
  });
}
handle2(ccontent);
let videos = document.querySelectorAll(".vidlist video ");
let mainVid = document.querySelector(".showVi video");
let p = document.querySelector(".showVi p");
console.log(mainVid);
ccontent.forEach(function (ele) {
  ele.addEventListener("click", function () {
    mainVid.src = ele.dataset.vid;
    p.innerHTML = ele.innerHTML;
  });
});
let started = false;
let num = document.querySelectorAll(".stabox span");
let section = document.querySelector(".stats");
window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 280) {
    if (!started) {
      num.forEach(function (e) {
        increase(e);
      });
      started = true;
    }
  }
});
function increase(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == goal) {
      clearInterval(counter);
    }
  }, 2500 / goal);
}
let linkLi = document.querySelectorAll(".links ul li a");
let moreLinks = document.querySelectorAll(" .first li ");
let moreLink = document.querySelectorAll(".div li ");
function goto(element) {
  element.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(e.target.dataset.locate)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}
goto(linkLi);
goto(moreLink);
goto(moreLinks);
