(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{278:function(s,t,e){"use strict";e.r(t);var n=e(17),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"代码片段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码片段"}},[s._v("#")]),s._v(" 代码片段")]),s._v(" "),e("p",[e("a",{attrs:{href:"/extensibility-reference/contribution-points#contributessnippets"}},[e("code",[s._v("contributes.snippets")])]),s._v("配置允许你将"),e("em",[s._v("代码片段")]),s._v("打包进VS Code插件中。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets",target:"_blank",rel:"noopener noreferrer"}},[s._v("创建代码片段"),e("OutboundLink")],1),s._v("主题详细介绍了新建代码片段的全部内容。本篇指南只是告诉你关于打包"),e("em",[s._v("代码片段")]),s._v("的大体思路。比较推荐的做法是：")]),s._v(" "),e("ul",[e("li",[s._v("用"),e("code",[s._v("Preferences: Configure User Snippets")]),s._v("命令创建和调试代码片段。")]),s._v(" "),e("li",[s._v("如果你觉得满意了，将整个JSON文件复制到插件目录下，起个名字比如说"),e("code",[s._v("snippets.json")]),s._v("文件。")]),s._v(" "),e("li",[s._v("将下列配置添加到你的"),e("code",[s._v("package.json")]),s._v("中")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"contributes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"snippets"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./snippets.json"')]),s._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("本篇的源代码在"),e("a",{attrs:{href:"https://github.com/Microsoft/vscode-extension-samples/tree/master/snippet-sample",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Microsoft/vscode-extension-samples/tree/master/snippet-sample"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("package.json")]),s._v("中添加如下分类，用户才能轻松找到你的插件。")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"categories"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Snippets"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"使用textmate代码片段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用textmate代码片段"}},[s._v("#")]),s._v(" 使用TextMate代码片段")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("你也可以用"),e("a",{attrs:{href:"/get-started/your-first-extension"}},[s._v("yo code")]),s._v("将TextMate代码片段（.tmSnippets）直接添加到插件里去。生成器中的可选项"),e("code",[s._v("New Code Snippets")]),s._v("会帮你指向.tmSnippets的目录，它们最后都会一起打包到VS Code 插件里。生成器甚至还支持Sublime代码片段（.sublime-snippets）。")]),s._v(" "),e("p",[s._v("生成器最终输出的文件有两个：一份插件清单"),e("code",[s._v("package.json")]),s._v("，和一份转换为VS Code代码片段的"),e("code",[s._v("snippets.json")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── snippets                    // VS Code integration\n│   └── snippets.json           // The JSON "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" w/ the snippets\n└── package.json                // extension's manifest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("把生成的代码片段文件夹复制到你的"),e("code",[s._v(".vscode/extensions")]),s._v("下的新文件夹中，然后重启VS Code。")])])}),[],!1,null,null,null);t.default=a.exports}}]);