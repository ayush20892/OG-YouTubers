import React, { useState } from "react";
import "./styles.css";

var listOfVideos = {
  Vlogger: [
    {
      name: "Flying Beast",
      key: "Family Vlogger",
      sub: "Sub : 4.55 Million",
      link: "https://www.youtube.com/channel/UCNSdjX4ry9fICqeObdZPAZQ"
    },
    {
      name: "Mumbiker Nikhil",
      key: "Travel Vlogger",
      sub: "Sub : 3.57 Million",
      link: "https://www.youtube.com/channel/UCNn6AaHharXIbkRleXGboiQ"
    },
    {
      name: "Tanmay Bhatt",
      key: "Game Vlogger",
      sub: "Sub : 2.7 Million",
      link: "https://www.youtube.com/user/tanmay316"
    }
  ],
  "Stand-Up": [
    {
      name: "Zakir Khan",
      key: "Sakth Launda",
      sub: "Sub : 5.97 Million",
      link: "https://www.youtube.com/user/zakirkhan208"
    },
    {
      name: "Kenny Sebastian",
      key: "Chai Time With Kenny",
      sub: "Sub : 2.08 Million",
      link: "https://www.youtube.com/user/kennethseb"
    },
    {
      name: "Anubhav Singh Bassi",
      key: "Cheating Wala",
      sub: "Sub : 2.21 Million",
      link: "https://www.youtube.com/channel/UCKnZHF24IV9PT0cdSdHoWug"
    }
  ],
  "Fitness": [
    {
      name: "Jeet Selal Aesthetics ",
      key: "Himaliyan Stallion",
      sub: "Sub: 2.87 Million",
      link: "https://www.youtube.com/channel/UCg5LjzSV0GqSjXJXERkW1FA"
    },
    {
      name: "FitMuscle TV ",
      key: "Taneja Bhaiya",
      sub: "Sub: 1.81 Million",
      link: "https://www.youtube.com/channel/UCn8Fiasqd-6G3A6AS322mZA"
    },
    {
      name: "Saket Gokhale",
      key: "19 year old Pune boy",
      sub: "Sub: 0.53 Million",
      link: "https://www.youtube.com/channel/UCfgrg0SXgNkZ7rTbnZCp6tg"
    }
  ]
};
export default function App() {
  // var recommend_videos = [];

  var [active_genre, setActiveGenre] = useState("Vlogger");
  var tab_list = Object.keys(listOfVideos);

  function tabClickedHandler(current_tab) {
    console.log("clicked: ", current_tab);
    setActiveGenre(current_tab);
  }

  return (
    <div className="App">
      <div className="app-content">
        <div className="app-container">
          
        <img className="img" src="https://emojipedia-us.s3.amazonaws.com/content/2020/04/05/yt.png"></img>

          <div className="pl-20">
            {/* help text */}
            <div className="text-gray mb-20">
              <p>
                OG Indian YouTubers from Different Genre. 
              </p>
            </div>

            <div className="tabs mb-20">
              {tab_list.map((tab) => {
                // add active class
                var tabclasses = "tab";
                if (tab === active_genre) {
                  tabclasses = "tab active";
                }

                // tab button
                return (
                  <button
                    key={tab}
                    onClick={() => tabClickedHandler(tab)}
                    className={tabclasses}>
                    {tab}
                  </button>
                );
              })}
            </div>
            <div className="tab-content">
              {
                // typeof(listOfVideos)
                listOfVideos[active_genre].map((genre) => {
                  return (
                    <div className="card" key={genre.name}>
                      <p className="video-title">{genre.name}</p>
                      <p className="text-gray key">
                        <span className="fa fa-user"></span>&nbsp;&nbsp;
                        {genre.key}
                      </p>
                      <div className="flex">
                        <div className="video-sub text-gray">
                          <span
                            className="fa fa-star"
                            style={{ color: "gold" }}
                          ></span>
                          &nbsp;&nbsp;
                          {genre.sub}
                        </div>
                        <div className="video-sub text-gray">
                          <a
                            href={genre.link}
                            className="btn-youtube"
                            title="View on Youtube"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="img">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>
                            </div>
                            <span className="fab fa-youtube"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center">
      © 2021 {" "}
        <a href="https://ayush-sharma20.netlify.app" rel="noreferrer" target="_blank">
          Ayush Sharma Production
        </a>
      </footer>
    </div>
  );
}
