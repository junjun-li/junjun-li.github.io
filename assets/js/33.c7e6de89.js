(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{393:function(a,e,s){"use strict";s.r(e);var t=s(42),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lerna-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-简介"}},[a._v("#")]),a._v(" Lerna 简介")]),a._v(" "),s("h2",{attrs:{id:"原生脚手架开发痛点分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生脚手架开发痛点分析"}},[a._v("#")]),a._v(" 原生脚手架开发痛点分析")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("痛点一：重复操作")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("多 Package 本地 link")])]),a._v(" "),s("li",[s("p",[a._v("多 Package 依赖安装")])]),a._v(" "),s("li",[s("p",[a._v("多 Package 单元测试")])]),a._v(" "),s("li",[s("p",[a._v("多 Package 代码提交")])]),a._v(" "),s("li",[s("p",[a._v("多 Package 代码发布")])])])]),a._v(" "),s("li",[s("p",[a._v("痛点二：版本一致性")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("发布时版本一致性")])]),a._v(" "),s("li",[s("p",[a._v("发布后相互依赖版本升级")])])])])]),a._v(" "),s("blockquote",[s("p",[a._v("package 越多，管理复杂度越高，由此可见在大型项目中使用 Lerna 的必要性")])]),a._v(" "),s("h2",{attrs:{id:"lerna-简介-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-简介-2"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lerna 简介"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Lerna 是一个优化基于 git+npm 的多 package 项目的管理工具")]),a._v(" "),s("h3",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[a._v("#")]),a._v(" 优势")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("大幅减少重复操作")])]),a._v(" "),s("li",[s("p",[a._v("提升操作的标准化")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Lerna 是架构优化的产物，它揭示了一个架构真理：项目复杂度提升后，就需要对项目进行架构优化。架构优化的主要目标往往都是以效能为核心。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),s("p",[a._v("使用 Lerna 管理的大型项目：")]),a._v(" "),s("p",[a._v("babel: https://github.com/babel/babel\nvue-cli: https://github.com/vuejs/vue-cli\ncreate-react-app: https://github.com/facebook/create-react-app")]),a._v(" "),s("h2",{attrs:{id:"lerna-开发脚手架流程-划重点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-开发脚手架流程-划重点"}},[a._v("#")]),a._v(" lerna 开发脚手架流程（划重点）")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://imgtu.com/i/fGG0pT",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://z3.ax1x.com/2021/08/09/fGG0pT.png",alt:"fGG0pT.png"}}),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"基于-lerna-创建项目-命令基础介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-lerna-创建项目-命令基础介绍"}},[a._v("#")]),a._v(" 基于 Lerna 创建项目(命令基础介绍)")]),a._v(" "),s("ul",[s("li",[a._v("安装 Lerna")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g lerna\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("创建项目")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init ljj-cli "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ljj-cli\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("初始化 Lerna 项目")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("lerna init\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("创建 Package")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("lerna create @ljj-cli/core packages\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("安装依赖")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("lerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" mocha packages/core --dev\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("删除依赖")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("lerna clean\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);