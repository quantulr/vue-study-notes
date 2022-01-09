module.exports = {
  // 站点配置
  base: "/vue-study-notes/",
  lang: "zh-CN",
  title: "vue学习笔记",
  description: "vue学习笔记",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      // NavbarItem
      {
        text: "笔记",
        link: "/notes/",
      },
    ],
    sidebar: {
      "/notes/": [
        {
          text: "笔记",
          children: ["/notes/README.md", "/notes/webpack.md"],
        },
      ],
    },
  },
};
