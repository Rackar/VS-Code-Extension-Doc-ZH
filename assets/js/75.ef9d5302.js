(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{301:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"打包插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包插件"}},[s._v("#")]),s._v(" 打包插件")]),s._v(" "),a("p",[s._v("VS Code 插件体积常常随着更新越来越大，它会产生很多文件，而且还依赖各种"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),a("OutboundLink")],1),s._v("包。\n程序开发的最佳实践是抽象和重用，但过度拆分和庞大的代码结构产生的代价就是更大的插件体积和更慢的运行效率。加载 100 个小文件远比加载一个大文件来的慢，这就是我们更推荐打包插件的原因。\n"),a("em",[s._v("打包")]),s._v("是将多个小的源文件打包成单个入口文件的过程。")]),s._v(" "),a("p",[s._v("对于 Javascript 而言，可选的构建工具非常多，比较流行的如"),a("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rollup.js"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("parcel"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack"),a("OutboundLink")],1),s._v("。大部分构建工具的概念和功能都是相似的，本节主要使用"),a("strong",[s._v("webpack")]),s._v("打包。")]),s._v(" "),a("h2",{attrs:{id:"使用-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack"}},[s._v("#")]),s._v(" 使用 webpack")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("webpack 这个开发工具可以在"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),a("OutboundLink")],1),s._v("里找到，为了获取 webpack 和它的命令行界面，打开终端然后输入：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save-dev webpack webpack-cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这行命令会先安装 webpack，然后更新你插件里的"),a("code",[s._v("package.json")]),s._v("中的"),a("code",[s._v("devDependencies")]),s._v("字段。Webpack 是一个 Javascrip 打包工具，但是大部分 VS Code 插件是用 Typescript 写的，所以你需要在 webpack 中配置"),a("code",[s._v("ts-loader")]),s._v("，它才能正确编译 Typescript。安装"),a("code",[s._v("ts-loader")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save-dev ts-loader\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"配置-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-webpack"}},[s._v("#")]),s._v(" 配置 webpack")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("既然所有的工具都安装好了，我们现在可以开始配置 webpack 了。通常来说，你的项目目录中需要创建一个"),a("code",[s._v("webpack.config.js")]),s._v("文件，webpack 才能知道按什么规则打包你的插件。下面的配置示例是 VS Code 插件专用的，让我们来开这个头吧：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//@ts-check")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**@type {import('webpack').Configuration}*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vscode插件运行在Node.js环境中 📖 -> https://webpack.js.org/configuration/node/")]),s._v("\n\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/extension.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插件的入口文件 📖 -> https://webpack.js.org/configuration/entry-context/")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包好的文件储存在'dist'文件夹中 (请参考package.json), 📖 -> https://webpack.js.org/configuration/output/")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extension.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    libraryTarget"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    devtoolModuleFilenameTemplate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../[resource-path]"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source-map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  externals"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vscode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs vscode"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vscode-module是热更新的临时目录，所以要排除掉。 在这里添加其他不应该被webpack打包的文件, 📖 -> https://webpack.js.org/configuration/externals/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 支持读取TypeScript和JavaScript文件, 📖 -> https://github.com/TypeStrong/ts-loader")]),s._v("\n    extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.ts$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts-loader"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("p",[s._v("这份文件是"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode-extension-samples/blob/master/webpack-sample",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack-extension"),a("OutboundLink")],1),s._v("中的"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode-extension-samples/blob/master/webpack-sample/webpack.config.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("一部分"),a("OutboundLink")],1),s._v("。webpack 配置最后输出的就是 JS 对象。")]),s._v(" "),a("p",[s._v("在上面的例子里，我们定义了如下内容：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("traget")]),s._v("：'node'，因为我们的插件运行在 Node.js 环境中。")]),s._v(" "),a("li",[a("code",[s._v("entry")]),s._v("：webpack 使用的入口文件。这就像是"),a("code",[s._v("package.json")]),s._v("中的"),a("code",[s._v("main")]),s._v('属性，有点不一样的是你还需要给 webpack 提供"source"—— 一般就是'),a("code",[s._v("src/extension.ts")]),s._v('，小心不要配置在"output"里了。webpack 可以解析 Typescript，所以我们不需要再单独执行 Typescript 编译了。')]),s._v(" "),a("li",[a("code",[s._v("output")]),s._v("配置告诉 webpack 应该把打包好的文件放在哪里，一般而言我们会放在"),a("code",[s._v("dist")]),s._v("文件夹里。在这个例子里，webpack 最后会产生一个"),a("code",[s._v("dist/extension.js")]),s._v("文件。")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("resolve")]),s._v("和"),a("code",[s._v("module/rules")]),s._v("中配置 Typescript 和 Javascript 的解析器。")]),s._v(" "),a("li",[a("code",[s._v("externals")]),s._v("即排除配置，在这里可以配置打包文件不应包含的文件和模块。"),a("code",[s._v("vscode")]),s._v("不需要被打包是因为它并不储存在磁盘上，它是 VS Code 热更新生成的临时文件夹。根据插件依赖的具体 node 模块，你可能需要通过这个配置优化打包文件。")])]),s._v(" "),a("h2",{attrs:{id:"运行-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-webpack"}},[s._v("#")]),s._v(" 运行 webpack")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("code",[s._v("webpack.config.js")]),s._v("文件创建好之后，webpack 就可以正式开始工作了。你可以从命令行中运行 webpack，不过为了避免重复工作用 npm script 会更有效率。")]),s._v(" "),a("p",[s._v("将下列脚本复制到"),a("code",[s._v("package.json")]),s._v("的"),a("code",[s._v("scripts")]),s._v("中去：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vscode:prepublish"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode none --watch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("compile")]),s._v("和"),a("code",[s._v("watch")]),s._v("脚本是开发时使用的，它们会产生构建文件。"),a("code",[s._v("vscode:prepublish")]),s._v("是"),a("code",[s._v("vsce")]),s._v("使用的，"),a("code",[s._v("vsce")]),s._v("是 VS Code 的打包和发布工具，你需要在发布插件之前运行这个命令。webpack 中的"),a("a",{attrs:{href:"https://webpack.js.org/concepts/mode/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mode"),a("OutboundLink")],1),s._v("是控制优化级别的配置项，如果你使用"),a("code",[s._v("production")]),s._v("字段，那么就会打包出最小的构建文件，但是也会耗费更多时间，所以我们开发中使用"),a("code",[s._v("none")]),s._v("。想要运行上述脚本，我们可以打开终端（命令行）输入"),a("code",[s._v("npm run compile")]),s._v("或者从"),a("em",[s._v("命令面板")]),s._v("（"),a("kbd",[s._v("Ctrl+Shift+P")]),s._v("）中使用"),a("strong",[s._v("运行任务")]),s._v("来开始。")]),s._v(" "),a("h2",{attrs:{id:"运行插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行插件"}},[s._v("#")]),s._v(" 运行插件")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("运行插件之前，你需要将"),a("code",[s._v("package.json")]),s._v("中的"),a("code",[s._v("main")]),s._v("属性指向到构建文件上，也就是我们上面提到的"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode-references-view/blob/d649d01d369e338bbe70c86e03f28269cbf87027/package.json#L26",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v('"./dist/extension"')]),a("OutboundLink")],1),s._v("，改好之后我们就可以运行和测试插件了。关于调试配置，请注意更新"),a("code",[s._v("launch.json")]),s._v("中的"),a("code",[s._v("outFiles")]),s._v("属性。")]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("插件开发者一般都会给插件源代码进行单元测试，但是有了完备的底层架构支持，插件的源代码可以不依赖测试，webpack 产生的构建文件中也不应该包含任何测试代码。如果需要运行单元测试，只需要简单地编译就好了。在上面的例子里，我们有一个"),a("code",[s._v("test-compile")]),s._v("脚本，它会把调用 Typescript 编译器将插件编译至"),a("code",[s._v("out")]),s._v("目录中。这样一来我们就有了 JS 文件，再使用下面的"),a("code",[s._v("launch.json")]),s._v("就足够应付测试了。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Extension Tests"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extensionHost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"runtimeExecutable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${execPath}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--extensionDevelopmentPath=${workspaceFolder}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--extensionTestsPath=${workspaceFolder}/out/test"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}/out/test/**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preLaunchTask"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm: test-compile"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这个测试配置对于非 webpack 打包的插件来说也是可以使用的。我们没必要将单元测试打包起来，因为它们不应包含在我们发布的插件里。")]),s._v(" "),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("发布前你需要更新"),a("code",[s._v(".vscodeignore")]),s._v("文件。现在所有东西都打包到了"),a("code",[s._v("dist/extension.js")]),s._v("文件中，所以应该排除这个文件还有"),a("code",[s._v("out")]),s._v("文件夹（怕你漏了，特此提醒），以及最重要的"),a("code",[s._v("node_modules")]),s._v("文件夹。")]),s._v(" "),a("p",[s._v("一般来说，"),a("code",[s._v(".vsignore")]),s._v("文件应该是这样的：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(".vscode\nnode_modules\nout/\nsrc/\ntsconfig.json\nwebpack.config.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"迁移插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移插件"}},[s._v("#")]),s._v(" 迁移插件")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("用 webpack 迁移现有的插件是很容易的，整个过程就像我们上面的指南一样。真实的例子如 VS Code 的 References 视图就是从这个"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode-references-view/pull/50",target:"_blank",rel:"noopener noreferrer"}},[s._v("pull request"),a("OutboundLink")],1),s._v("应用了 webpack 而来的。")]),s._v(" "),a("p",[s._v("在里面，你可以看到：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("devDependencies")]),s._v("中添加"),a("code",[s._v("webpack")]),s._v("，"),a("code",[s._v("webpack-cli")]),s._v("和"),a("code",[s._v("ts-loader")])]),s._v(" "),a("li",[s._v("更新 npm 脚本以便开发时使用 webpack")]),s._v(" "),a("li",[s._v("更新调试配置文件"),a("code",[s._v("launch.json")])]),s._v(" "),a("li",[s._v("添加和修改"),a("code",[s._v("webpack.config.js")])]),s._v(" "),a("li",[s._v("更新"),a("code",[s._v(".vscodeignore")]),s._v("排除"),a("code",[s._v("node_modules")]),s._v("和其他开发时产生的临时文件")]),s._v(" "),a("li",[s._v("开始享受体积更小、安装更快的插件！")])]),s._v(" "),a("h2",{attrs:{id:"疑难解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑难解答"}},[s._v("#")]),s._v(" 疑难解答")]),s._v(" "),a("hr"),s._v(" "),a("h4",{attrs:{id:"压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[s._v("#")]),s._v(" 压缩")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("production")]),s._v("模式会执行代码压缩，它会去除源代码中的空格和注释，并把变量名和函数名进行替换——混淆和压缩。不过形如"),a("code",[s._v("Function.prototype.name")]),s._v("的代码不会压缩。")]),s._v(" "),a("h4",{attrs:{id:"webpack-critical-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-critical-dependencies"}},[s._v("#")]),s._v(" webpack critical dependencies")]),s._v(" "),a("p",[s._v("当你运行 webpack 时，你可能会碰到像"),a("strong",[s._v("Critical dependencies: the request of a dependency is an expression")]),s._v("字样的警告。这些警告必须立即处理，一般来说会影响到打包过程。这句话意味着 webpack 不能静态分析某些依赖，一般是由动态使用"),a("code",[s._v("require")]),s._v("导致的，比如"),a("code",[s._v("require(someDynamicVariable)")]),s._v("。")]),s._v(" "),a("p",[s._v("想要处理这类警告，你需要：")]),s._v(" "),a("ul",[a("li",[s._v("将需要打包的部分变成静态的依赖。")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("externals")]),s._v("排除这部分依赖，但是注意它们的 Javascript 文件还是应该保留在我们打包的插件里，在"),a("code",[s._v(".vscodeignore")]),s._v("中使用 glob 模式，比如"),a("code",[s._v("!node_modules/mySpecialModule")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[s._v("#")]),s._v(" 下一步")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件市场"),a("OutboundLink")],1),s._v(" - 学习更多 VS Code 插件市场的有关内容。")]),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/working-with-extensions/testing-extension.html"}},[s._v("测试插件")]),s._v(" - 测试插件，提高项目质量。")],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/working-with-extensions/continuous-integration.html"}},[s._v("持续集成")]),s._v(" - 使用 Azure Pipeline 运行插件的 CI 构建。")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);