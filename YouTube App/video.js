let data = JSON.parse(localStorage.getItem("videoInfo"));
console.log("data:", data);

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");


let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
iframe.width = "99.8%";
iframe.height = "540px";
iframe.allow = "fullscreen";

let title = document.createElement("h3");
title.innerText = data.title;
title.setAttribute("id", "title");

let channel = document.createElement("p");
channel.innerText = data.channelTitle;
channel.setAttribute("id", "channel");

let time = document.createElement("p");
time.innerText = data.publishTime;
time.style.color = "white";

div3.append(channel, time);
div2.append(title);
div1.append(iframe);
document.querySelector("#left-sec").append(div1, div2, div3);
