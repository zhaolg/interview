// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: null,
    isShow: false,
    item: {
      id: 1,
      title: "在有N个叶子节点的哈夫曼树中，其节点总数为（）？",
      option_1: "A、不确定",
      option_2: "B、2N-1",
      option_3: "C、2N+1",
      option_4: "D、2N",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showAnswer: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    if (that.data.isShow) {
      that.setData({
        title: "",
        text: "",
        isShow: false
      });
    } else {
      if (id == 1) {
        that.setData({
          title: "答案",
          text: "B 在哈夫曼树（也叫最优树）中，只有两种类型的结点：度为0或N，即最优二叉树中只有度为0或2的结点，最优三叉树中只有度为0或3的结点，所以有2N-1个节点",
          isShow: true
        });
      } else if (id == 3){
        that.setData({
          title: "答案",
          text: "A 前序遍历：根、左、右 中序遍历：左、根、右 后序遍历：左、右、根,由前序遍历ABDEGCFH可知根为A,由中序遍历DBGEACHF可知DBGE为A左树,CHF为A,右树左树DBGE在前序遍历中的排列为BDEG,可知B为A左树的根、D在B根之左、GE在B根之右；前序遍历中为EG中序遍历为GE,可知E为根、G为E根之左,A右树CHF在前序遍历中的排列为CFH,可知C为A右树的根、HF在C根之右；前序遍历中为FH中序遍历为HF,可知F为根、H为F根之左",
          isShow: true
        });

      } else if (id == 2) {
        that.setData({
          title: "答案",
          text: "A 在JDK1.7中，如果通过无参构造的话，初始数组容量为0，当真正对数组进行添加时，才真正分配容量。每次按照1.5倍（位运算）的比率通过copeOf的方式扩容,在JKD1.6中，如果通过无参构造的话，初始数组容量为10.每次通过copeOf的方式扩容后容量为原来的1.5倍加1.以上就是动态扩容的原理。",
          isShow: true
        });

      } else {
        that.setData({
          title: "答案",
          text: "略（小编也不会,请自行百度）",
          isShow: true
        });
      }
    }

  },
  pgUp: function () {
    var item_1 = {
      id: 2,
      title: "ArrayList list = new ArrayList(20);中的list扩充几次（）",
      option_1: "A、0",
      option_2: "B、1",
      option_3: "C、2",
      option_4: "D、3",
    }
    var that = this;
    that.setData({
      isShow: false,
      item: item_1,
      title: "",
      text: ""
    });
  },
  pgDn: function () {
    var item_2 = {
      id: 3,
      title: "已知一棵二叉树前序遍历和中序遍历分别为ABDEGCFH和DBGEACHF，则该二叉树的后序遍历为()?",
      option_1: "A、DGEBHFCA",
      option_2: "B、ABDEGCFH",
      option_3: "C、DBGEACHF",
      option_4: "D、DBGHCAEF",
    }
    var that = this;
    that.setData({
      isShow: false,
      item: item_2,
      title:"",
      text:""
    });
  }


})