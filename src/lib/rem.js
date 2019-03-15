/**
 * 专题适配尺寸
 * @author  穆
 * @version 2017/5/16
 * @description frame: 设计稿尺寸; ratio: 系数; maxWidth: 页面最大宽
 */
 var device = {
  timer : null,
  opt : {},
  init : function (myopt) {
    this.opt.frame = myopt.frame || 750;
    this.opt.ratio = myopt.ratio || 100;
    this.opt.maxWidth = myopt.maxWidth || 480;
    this.bindEvents();
    this.setSize();
    this.screenInfo();
    this.osInfo();
  },
  setSize : function () {
    var baseFont;
    var root = document.documentElement;
    var deviceWidth = parseInt(root.clientWidth);
    var deviceHeight = parseInt(root.clientHeight);
    baseFont = deviceWidth / this.opt.frame * this.opt.ratio;
    baseFont = (deviceWidth > this.opt.maxWidth ? this.opt.maxWidth : deviceWidth) / this.opt.frame * this.opt.ratio;
    root.style.fontSize = baseFont + 'px';
  },
  screenInfo : function () {
    var root = document.documentElement;
    var deviceWidth = parseInt(root.clientWidth);
    var deviceHeight = parseInt(root.clientHeight);
  },
  bindEvents : function () {
    var self = this;
    window.addEventListener('resize', function() {
      self.timer && clearTimeout(self.timer);
      self.timer = setTimeout(function() {
        self.setSize();
        self.screenInfo();
      }, 300, false);
    });
  },
  osInfo : function () {
    var root = document.documentElement;
    var ua = navigator.userAgent;
    var Android = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    var iOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var dpr = parseInt(window.devicePixelRatio);
    var app = {};
    if (iOS) {
      root.setAttribute('data-os' , 'iOS');
      root.setAttribute('data-dpr' , dpr);
      var v = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
      app = {
        'os' : 'iOS',
        'version' : parseInt(v[1], 10)  + '.' +  parseInt(v[2], 10)  + '.' +  parseInt(v[3] || 0, 10)
      };
    } else if (Android) {
      root.setAttribute('data-os' , 'Android');
      if (dpr >= 3) {
          dpr = 3;
      } else if (dpr >= 2){
          dpr = 2;
      } else {
          dpr = 1;
      }
      root.setAttribute('data-dpr' , dpr);
      var v = ua.match(/Android\s([0-9\.]*)/);
      app = {
        'os' : 'Android',
        'version' :  v[1]
      };
    } else {
      app = {
        'os' : 'desktop',
        'version' : 'desktop'
      };
    }
    return app;
  }
};
device.init({});
