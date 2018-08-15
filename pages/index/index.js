const Dialog = require('../../dist/dialog/dialog');
var app = getApp();
Page({
  //之后调用后台服务请求返回指定数据即可
  data: {
    autoplay: true,
    interval: 20000,
    duration: 500,
    circular: true,
    favicon: {},
    goodsDetail: {},
    shopCarInfo: {},
    prices: {},
    HotName: {
      value: "程序员必读",
      remark: "今日推荐"
    },
    person: [{
      userId: 1,
      userName: "java 从入门到精通",
      age: 55,
      currProvince: "推荐指数",
      edu: "5",
      picurl: "/images/books/1.jpg"
    }, {
      userId: 4,
      userName: "深入实践Spring Boot",
      age: 46.6,
      currProvince: "推荐指数",
      edu: "5",
      picurl: "/images/books/2.jpg"
    }, {
      userId: 2,
      userName: "Spring 源码深度解析",
      age: 54.5,
      currProvince: "推荐指数",
      edu: "4.5",
      picurl: "/images/books/3.jpg"
    }, {
      userId: 3,
      userName: "深入理解Spring Cloud",
      age: 54.5,
      currProvince: "推荐指数",
      edu: "5",
      picurl: "/images/books/4.jpg"
    }, {
      userId: 5,
      userName: "Docker技术入门与实战",
      age: 54.5,
      currProvince: "推荐指数",
      edu: "4.5",
      picurl: "/images/books/5.jpg"
    }, {
      userId: 6,
      userName: "跟老男孩学Linux运维",
      age: 78.2,
      currProvince: "推荐指数",
      edu: "5",
      picurl: "/images/books/6.jpg"
    }

    ]
  },

  onLoad: function () {
    this.onShow();
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      }
    })

    wx.setNavigationBarTitle({
      title: '面试帮'
    })
  },

  onShow: function () {
  },

  block_action: function (e) {
    wx.showToast({
      title: '不喜欢',
      icon: 'success',
      image: "../../images/fail.png",
      duration: 2000
    }) 
  },

  red_action: function (e) {
    wx.showToast({
      title: '不喜欢',
      icon: 'success',
      image: "../../images/success.png",
      duration: 2000
    }) 
  },

  showUserDetail: function (e) {
    wx.showToast({
      title: '当当网购买',
      icon: 'success',
      duration: 2000
    })  
  },

})
