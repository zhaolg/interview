const app = getApp()
console.log(app)
Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0,
    version: {},
    tabClass: ["", "", "", "", ""],
    isLogin: false,
    actionText: "登录",
    actionType: "primary",
  },
  getUserInfo: function (cb) {
    var that = this;
    wx.login({
      success: function (res) {
        app.globalData.code = res.code;
        wx.hideLoading();
        wx.getSetting({
          success: (response) => {
            if (!response.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success: () => {
                  that.getUserinfoFun();
                }
              })
            } else {
              that.getUserinfoFun();
            }
          }
        })
      }
    })
  },
  getUserinfoFun: function () {
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      lang: "zh_CN",
      success: function (res) {
        that.setData({
          userInfo: res.userInfo,
          isLogin: true,
          actionText: "退出",
          actionType: "warn",
        });
        app.globalData.userInfo = res.userInfo;
      }
    })
  },
  getUserOpenId: function () {
    wx.request({
      url: app.globalData.singletonUrl + '/userLogin?code=' + app.globalData.code + '&userName=' + app.globalData.userInfo.nickName,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.globalData.openid = res.data.openid //返回openid
        app.globalData.user = res.data[0];
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  relogin: function () {
    if (this.data.isLogin) {//退出
      this.setData({
        isLogin: false,
        actionText: "登录",
        actionType: "primary",
        userInfo: null
      });
      app.globalData.userInfo = null;
    } else {//登录
      this.getUserInfo();
    }
  }
})