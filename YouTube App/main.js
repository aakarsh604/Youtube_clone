const popularVideos = async () => {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=32&regionCode=In&key=AIzaSyB8kqZBlXElxNYHeKqu8Rw2bi411FYV3B8`;

    const res = await fetch(url);

    const data = await res.json();
    append(data.items);
    console.log(data.items);
  } catch (err) {
    console.log(err);
  }
};

//Call for popularVideos function
popularVideos();
const append = (data) => {
  let display = document.querySelector("#display");
  display.innerHTML = null;

  data.forEach(
    ({
      id,
      snippet: { title },
      snippet: {
        thumbnails: {
          medium: { url },
        },
      },
    }) => {
      let box = document.createElement("div");
      box.style.fontFamily = "arial";
      // let iframe = document.createElement("iframe");
      // iframe.src = `https://www.youtube.com/embed/${id}`;
      // iframe.width = "100%";
      // iframe.height = "80%";
      // iframe.allow = "fullscreen";
      let image = document.createElement("img");
      image.src = url;
      image.setAttribute("class", "popularimg");

      let name = document.createElement("h5");
      name.innerText = title;
      name.style.color = "white";

      box.append(image, name);
      display.append(box);
    }
  );
};

// Function for search videos
const searchVideos = async () => {
  try {
    const query = document.querySelector("#query").value;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}2&key=AIzaSyB8kqZBlXElxNYHeKqu8Rw2bi411FYV3B8`;

    const res = await fetch(url);
    const data = await res.json();
    appendSearch(data.items);
    console.log(data.items);
  } catch (err) {
    console.log(err);
  }
};

const appendSearch = (data) => {
  let display = document.querySelector("#display");
  display.innerHTML = null;
  let searchInfo = document.querySelector("#search-info");
  searchInfo.innerHTML = null;

  data.forEach(
    ({
      id: { videoId },
      snippet: { title },
      snippet: {
        thumbnails: {
          medium: { url },
        },
      },
      snippet: { channelTitle, description, publishTime },
    }) => {
      let box = document.createElement("div");
      box.setAttribute("id", "searchbox");
      let div1 = document.createElement("div");
      div1.setAttribute("class", "searchd1");
      let div2 = document.createElement("div");
      div2.setAttribute("class", "searchd2");

      let image = document.createElement("img");
      image.src = url;
      image.setAttribute("class", "searchimage");

      let name = document.createElement("h3");
      name.innerText = title;
      name.style.color = "white";
      name.style.fontSize = "21px";
      name.style.fontWeight = "light";

      let publish = document.createElement("p");
      publish.innerText = publishTime;
      publish.style.marginTop = "-14px";

      let divchan = document.createElement("div");
      divchan.style.display = "flex";
      divchan.style.alignItems = "center";
      divchan.style.gap = "10px";

      let icn = document.createElement("i");
      icn.setAttribute("class", "fa-solid fa-circle-play");

      let channel = document.createElement("p");
      channel.innerText = channelTitle;

      let des = document.createElement("p");
      des.innerText = description;

      let data = {
        videoId,
        title,
        url,
        channelTitle,
        description,
        publishTime,
      };
      box.onclick = () => {
        showVideo(data);
      };

      divchan.append(icn, channel);
      div2.append(name, publish, divchan, description);
      div1.append(image);
      box.append(div1, div2);
      searchInfo.append(box);
    }
  );
};

const showVideo = (data) => {
  // console.log(data);
  localStorage.setItem("videoInfo", JSON.stringify(data));
  window.location.href = "video.html";
};
