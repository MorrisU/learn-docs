module.exports = {
    title: 'VuePress',
    description: 'Vuepressi test õppeeesmärgil',
    base: '/learn-docs/',
    dest: 'gh-pages',
    themeConfig: {
      logo: '/logo.png',
      smoothScroll: true,
      nav: [
        { text: 'Kodu', link: '/' },
        { text: 'mm19test', link: '/mm19test/' },
        { text: "Proto", link: "/proto/" },
        { text: "CVI", link: "/Tunnusgraafika/" },
        { text: 'Git', link: 'https://github.com/jubejuss/vuepress-starter' },
      ],
      sidebar: {
        "/vpjuhend/": [
          "",
          "hakkame-pihta"
        ],
        "/nuxtjuhend/": [
          "",
          "nuxt"

        // "/nuxtjuhend/": "auto", /* automaatselt genereeritavad pealkirjad README.md failist */
        // "/nuxtjuhend/nuxt.md": "auto",
        ]
      }
    }
  }


  
  
  