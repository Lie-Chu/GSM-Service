const WebList = ["WhatIsGit", "GSM-Service"]; // 웹 사이트
const LibList = ["schoolInfo", "school-info"]; // 라이브러리 또는 패키지
const DesktopAppList = ["bobnaenwa"]; // 데스크탑 앱
const AndoroidAppList = []; // 안드로이드 앱
const IosAppList = []; // IOS 앱
const EmbList = []; // 임베디드 
const BotList = ["shaki", "gogo"]; // 봇

const getAPP = (v) => { return `APP/${v}/`};

module.exports = [
    {
      title: "웹 서비스",
      children : WebList.map(f => `WEB/${f}`),
      sidebarDepth: 2
    },
    {
      title : "앱 서비스",
      children : [
          {
              title : "데스크탑 앱",
              children : DesktopAppList.map(f => `${getAPP("Desktop")}${f}`),
              sidebarDepth: 2
          },
          {
              title : "안드로이드 앱",
              children : AndoroidAppList.map(f => `${getAPP("Android")}${f}`),
              sidebarDepth: 2
          },
          {
              title : "IOS 앱",
              children : IosAppList.map(f => `${getAPP("ios")}${f}`),
              sidebarDepth: 2
          }
      ]
    },
    {
      title : "라이브러리",
      children : LibList.map(f => `LIB/${f}`),
      sidebarDepth: 2
    },
    {
      title : "임베디드",
      children : EmbList.map(f => `EMB/${f}`),
      sidebarDepth: 2
    },
    {
      title: "디스코드 봇",
      children : BotList.map(f => `BOT/${f}`),
      sidebarDepth: 2
    },
]
