(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{395:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lerna-源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lerna-源码解析"}},[s._v("#")]),s._v(" Lerna 源码解析")]),s._v(" "),a("h2",{attrs:{id:"webstorm-调试技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webstorm-调试技巧"}},[s._v("#")]),s._v(" WebStorm 调试技巧")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("添加 node 配置文件\n"),a("a",{attrs:{href:"https://imgtu.com/i/W442M8",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/07/27/W442M8.png",alt:"W442M8.png"}}),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("找到"),a("code",[s._v("core/lerna/cli.js")]),s._v("lerna 的主入口即可开始调试")])]),s._v(" "),a("li",[a("p",[s._v("启动 WebStorm 编码辅助")])])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/W45pJ1",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/07/27/W45pJ1.png",alt:"W45pJ1.png"}}),a("OutboundLink")],1)]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("断点允许进入库文件调试")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/W45VdH",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/07/27/W45VdH.png",alt:"W45VdH.png"}}),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"lerna-初始化过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lerna-初始化过程"}},[s._v("#")]),s._v(" Lerna 初始化过程")]),s._v(" "),a("ol",[a("li",[s._v("找到 package.json 入口文件，说明入口文件在"),a("code",[s._v('"core/lerna/cli.js"')]),s._v("中")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lerna"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core/lerna/cli.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("打开 cli.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env node\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable import/no-dynamic-require, global-require */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" importLocal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'import-local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("importLocal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npmlog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cli'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'using local version of lerna'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// require(".")指的是导入index.js文件')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("打开 index.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个模块，把各各项目以对象的方式导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每个对象都有一个handler属性，上面挂载了各自的入口方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" addCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@lerna/add/command'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bootstrapCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@lerna/bootstrap/command'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" changedCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@lerna/changed/command'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"import-local-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-local-分析"}},[s._v("#")]),s._v(" import-local 分析")]),s._v(" "),a("blockquote",[a("p",[s._v("当我们本地存在一个脚手架命令和全局存在脚手架命令的时候，优先本地 node_modules 的命令")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("先找到全局的 lerna")])]),s._v(" "),a("li",[a("p",[s._v("node 在运行的时候，在 require 的时候，会注入全局变量")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// __filename: 文件的名称以及完整路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module,")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// require方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// __dirname")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exports")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resolveCwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resolve-cwd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pkgDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pkg-dir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("filename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 获取全局目录，获取包含package.json的上级目录，会逐级向上找")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// path.dirname：获取文件夹路径")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// path.dirname("/usr/local/lib/node_modules/lerna/index.js") => /usr/local/lib/node_modules/lerna')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" globalDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pkgDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" relativePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("relative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("globalDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("globalDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" localFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" resolveCwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("silent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" relativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use `path.relative()` to detect local package installation,")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// because __filename's case is inconsistent on Windows")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Can use `===` when targeting Node.js 8")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// See https://github.com/nodejs/node/issues/6624")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" localFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("relative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"path-resolve-用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-用法"}},[s._v("#")]),s._v(" path.resolve()用法")]),s._v(" "),a("blockquote",[a("p",[s._v("resolve 在合并的过程中，相当于一个"),a("code",[s._v("cd")]),s._v("的过程")])]),s._v(" "),a("ol",[a("li",[s._v("不带参数时")])]),s._v(" "),a("p",[a("code",[s._v("path.resolve()")]),s._v(" 返回的是当前的文件的绝对路径"),a("code",[s._v("/Users/xxxx/")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("带不是/开头的参数")])]),s._v(" "),a("p",[a("code",[s._v("path.resolve('a')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/Users/xxxx/a")]),s._v(" "),a("code",[s._v("path.resolve('a'，'b')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/Users/xxxx/a/b")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("带./开头的参数")])]),s._v(" "),a("p",[a("code",[s._v("path.resolve('./a')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/Users/xxxx/a")]),s._v(" "),a("code",[s._v("path.resolve('./a','./b')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/Users/xxxx/a/b")])]),s._v(" "),a("p",[s._v("4、带/开头的参数 返回的是 /+‘最后一个前面加/的文件文件名’+‘剩下文件夹")]),s._v(" "),a("p",[a("code",[s._v("path.resolve('/a')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/a")]),s._v(" "),a("code",[s._v("path.resolve('/a'，'/b')")]),s._v(" 返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/b")]),s._v(" "),a("code",[s._v("path.resolve('/a'，'/b', 'c')")]),s._v("返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/b/c")]),s._v(" "),a("code",[s._v("path.resolve('/user'，'/lijunjun', '..')")]),s._v("返回的是当前绝对路径拼接现在的参数"),a("code",[s._v("/")])])])}),[],!1,null,null,null);t.default=e.exports}}]);