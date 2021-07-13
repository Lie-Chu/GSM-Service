const sidebar = require("./path");

module.exports = {
  title: "GSM-Service",
  description: "GSM Service 모음 사이트",
  dest: "build",
  base: "/GSM-Service/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo : "https://user-images.githubusercontent.com/64676070/124141211-30acac80-dac4-11eb-93e3-d4d4165f1b74.png",
    sidebar,
    nav: [
      {
        text: "About",
        link: "/",
      },
      {
        text: "Contribute",
        link: "/contribute",
      },
      {
        text: "GitHub",
        link: "https://github.com/sunrabbit123/GSM-Service/tree/main",
      },
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated',
  },
};

  
