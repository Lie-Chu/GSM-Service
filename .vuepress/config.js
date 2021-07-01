const PATH = require("./path");

module.exports = {
    title: "GSM-Service",
    description: "GSM Service 모음 사이트",
    dest: "build",
    base: "/GSM-Service/",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    themeConfig: {
      sidebar: [
        "/",
        {
          title: "웹 서비스",
          children : PATH.WebList
        },
        {
          title : "앱 서비스",
          children : PATH.AppList
        },
        {
          title : "라이브러리",
          children : PATH.LibList
        },
        {
          title : "임베디드",
          children : PATH.EmbList
        },
        {
          title: "디스코드 봇",
          children : PATH.BotList
        },
      ],
      nav: [
        {
          text: "GitHub",
          link: "https://github.com/sunrabbit123/GSM-Service/tree/main",
        },
      ],
    },
  };