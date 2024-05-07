// 根据数据模型初始化数据库表
const { sequelize } = require("./dbConnect");

const docModel = require("./model/docModel");
const blogsModel = require("./model/blogsModel");
const adminModel = require("./model/adminModel");
const pokemonModel = require("./model/pokemonModel");

const pokemonData = require("./initData/pokemon");
(async function () {
  await sequelize.sync({
    alter: true,
  });
  // doc 初始化
  const docCount = await docModel.count();
  if (!docCount) {
    await docModel.bulkCreate([
      {
        label: "Element-plus",
        target: "https://element-plus.org/",
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        desc: "ui组件库",
        tag: "UI组件库",
      },
      {
        label: "Ant-Design",
        target: "https://ant-design.antgroup.com/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/KDpgvguMpGfqaHPjicRK.svg",
        tag: "UI组件库",
      },
      {
        label: "Tinypng",
        target: "https://tinypng.com/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/tinypng.ico",
        tag: "工具",
      },
      {
        label: "Pinia",
        target: "https://pinia.vuejs.org/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/pinia-logo.svg",
        tag: "框架相关",
      },
      {
        label: "github",
        target: "https://github.com/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/github.png",
        tag: "工具",
      },
      {
        label: "Vant",
        target: "https://youzan.github.io/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/vant.png",
        tag: "UI组件库",
      },
      {
        label: "Webpack",
        target: "https://webpack.docschina.org/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/webpack.ico",
        tag: "框架相关",
      },
      {
        label: "MDN",
        target: "https://developer.mozilla.org/zh-CN/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/MDN.png",
      },
      {
        label: "Vue",
        target: "https://cn.vuejs.org/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/vue.svg",
        tag: "框架相关",
      },
      {
        label: "React",
        target: "https://react.dev/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/react.ico",
        tag: "框架相关",
      },
      {
        label: "讯飞开放平台",
        target: "https://www.xfyun.cn/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/xunfei.ico",
        tag: "杂",
      },
      {
        label: "Transfonter",
        target: "https://transfonter.org/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/Transfonter.ico",
        tag: "工具",
      },
      {
        label: "svgconverter",
        target: "https://svgconverter.com/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/svgconverter.png",
        tag: "工具",
      },
      {
        label: "微信公众平台",
        target: "https://mp.weixin.qq.com/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/wx.ico",
        tag: "文档",
      },
      {
        label: "G2plot",
        target: "https://g2plot.antv.antgroup.com/api/plot-api",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/antv-g2.png",
        tag: "UI组件库",
      },
      {
        label: "Echarts",
        target: "https://echarts.apache.org/zh/index.html",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/echart.png",
      },
      {
        label: "Typescripit",
        target: "https://www.typescriptlang.org/",
        icon: "https://phpmarlowe-pic.oss-cn-shanghai.aliyuncs.com/son-blog/oss/typescript.png",
        tag: "框架相关",
      },

      {
        label: "Vueuse",
        target: "https://vueuse.org/guide/",
        icon: "https://vueuse.org/favicon.svg",
        desc: "社区库为Vue3提供好用的hooks",
        tag: "工具",
      },

      {
        label: "UI-Lib-Picker",
        target: "https://ui-libs.vercel.app/",
        icon: "https://ui-libs.vercel.app/favicon/palette.svg",
        desc: "各类UI组件库地址",
      },
      {
        label: "Uniapp",
        target: "https://uniapp.dcloud.net.cn/",
        icon: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788",
        tag: "框架相关",
      },

      {
        label: "Iconify",
        target: "https://iconify.design/",
        icon: "https://iconify.design/favicon.svg",
        tag: "UI组件库",
      },
      {
        label: "阿里云",
        target: "https://www.aliyun.com/",
        icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
        tag: "工具",
      },
    ]);
  }
  // pokemon 初始化
  const pokemonCount = await pokemonModel.count();
  if (!pokemonCount) await pokemonModel.bulkCreate(pokemonData);
})();
