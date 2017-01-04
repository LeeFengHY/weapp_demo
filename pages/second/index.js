//index.js
Page({
  data: {
    arr: [0,1,2,3,4,5,6,7,8,9,10],
    x:false,
    y:false,
  },
  onLoad: function () {
  },
  lower: function(){
    console.log('%c lower', 'background:red;')
  },
  bindtap:function(){
    this.setData({
      x:!this.data.x,
      y:!this.data.x,
    })
  }
})
