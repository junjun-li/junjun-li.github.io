(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{442:function(t,v,_){"use strict";_.r(v);var s=_(42),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"web-安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-安全"}},[t._v("#")]),t._v(" web 安全")]),t._v(" "),_("h2",{attrs:{id:"xss-跨站请求攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站请求攻击"}},[t._v("#")]),t._v(" XSS 跨站请求攻击")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("一个博客网站，我发送一篇博客，其中嵌入"),_("code",[t._v("<script>")]),t._v("脚本")])]),t._v(" "),_("li",[_("p",[t._v("这个脚本用于获取网站的 cookie，然后发送到我自己的服务器")])]),t._v(" "),_("li",[_("p",[t._v("发布这篇博客，有人查看的话，我就可以轻松的获取"),_("code",[t._v("访问者")]),t._v("的 cookie")])])]),t._v(" "),_("h3",{attrs:{id:"解决方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("替换特殊字符，如 "),_("code",[t._v("<")]),t._v(" 变为 "),_("code",[t._v("&lt;")]),t._v("; "),_("code",[t._v(">")]),t._v(" 变为 "),_("code",[t._v("&gt;")])])]),t._v(" "),_("li",[_("p",[t._v("这样 script 就会直接显示，不会作为脚本执行")])]),t._v(" "),_("li",[_("p",[t._v("前端显示，后端存储的时候，都需要更换")])])]),t._v(" "),_("h2",{attrs:{id:"xsrf-跨站请求伪造"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xsrf-跨站请求伪造"}},[t._v("#")]),t._v(" XSRF 跨站请求伪造")]),t._v(" "),_("p",[t._v("场景：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("在购物的时候，看中了商品，id 为 100")])]),t._v(" "),_("li",[_("p",[t._v("付费接口是 xxx.com/pay?id=100")])]),t._v(" "),_("li",[_("p",[t._v("我是攻击者，我看中了一个商品，id 是 200")])]),t._v(" "),_("li",[_("p",[t._v("我向你发送一封邮件，邮件正文隐藏着<img src=xxx.com/pay?id=200 />")])]),t._v(" "),_("li",[_("p",[t._v("你一查看邮件，就购买了 id200 的商品")])])]),t._v(" "),_("h3",{attrs:{id:"解决方法-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方法-2"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用 post 接口")])]),t._v(" "),_("li",[_("p",[t._v("增加验证码，密码，短信验证码等验证")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);