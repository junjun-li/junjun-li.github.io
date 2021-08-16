(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{489:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"外观模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外观模式"}},[t._v("#")]),t._v(" 外观模式")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("外观模式（Facade）为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高层接口，这个接口值得这一子系统更加容易使用。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/6NscY6",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2021/03/12/6NscY6.png",alt:"6NscY6.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如去医院看病，可能要去挂号、门诊、划价、取药，让患者或患者家属觉得很复杂，如果有提供接待人员，只让接待人员来处理，就很方便。")]),t._v(" "),a("h2",{attrs:{id:"演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),a("p",[t._v("外观模式比较简单，很容易理解。传统的 UML 图画法都是参照 java 语法以及 java 中面向对象设计的")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/6Nsf6e",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2021/03/12/6Nsf6e.png",alt:"6Nsf6e.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在前端 JS 中，这种子类继承父类，且是多个子类继承一个父类的情况不多。因此这里看下这个图，理解之后就不再演示了。")]),t._v(" "),a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("前端用外观模式思想，常见最多的就是函数参数的整合，例如")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selector\n        selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ******")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#div1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("在 jQuery 或者 lodash 中，有很多函数都这么设计。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("strong",[t._v("不符合单一职责原则和开放封闭原则，因此谨慎使用，不可滥用")])])])}),[],!1,null,null,null);s.default=e.exports}}]);