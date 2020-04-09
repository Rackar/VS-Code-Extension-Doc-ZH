(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{292:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"图标主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标主题"}},[s._v("#")]),s._v(" 图标主题")]),s._v(" "),a("p",[s._v("VS Code的UI在文件名称左边显示图标，插件配置的图标系列可以让用户自由选择他们喜爱的图标。")]),s._v(" "),a("h2",{attrs:{id:"添加新的图标主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加新的图标主题"}},[s._v("#")]),s._v(" 添加新的图标主题")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("你能使用图标文件（最好是SVG）和字体图标创建自己的图标主题。作为示例，你可以参考一下2个内置主题："),a("a",{attrs:{href:"https://github.com/Microsoft/vscode/tree/master/extensions/theme-defaults",target:"_blank",rel:"noopener noreferrer"}},[s._v("Minimal"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode/tree/master/extensions/theme-seti",target:"_blank",rel:"noopener noreferrer"}},[s._v("Seti"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("首先，创建一个VS Code插件，然后把"),a("code",[s._v("iconTheme")]),s._v("配置点(contribution point)添加进去")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"contributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iconThemes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"turtles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Turtles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./fileicons/turtles-icon-theme.json"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("id")]),s._v("作为这个图标主题的标识，目前只做内部使用，未来可能会用在设置里面，所以最好设置一个可读性强的唯一值。")]),s._v(" "),a("li",[a("code",[s._v("label")]),s._v("会显示在"),a("em",[s._v("主题选择")]),s._v("下拉框中。")]),s._v(" "),a("li",[a("code",[s._v("path")]),s._v("指示了图标集所在的位置。如果你的图标系列名称遵循"),a("code",[s._v("*icon-theme.json")]),s._v("命名规范，那么VS Code就能提供完整的支持。")])]),s._v(" "),a("h3",{attrs:{id:"图标文件集-icon-set-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标文件集-icon-set-file"}},[s._v("#")]),s._v(" 图标文件集(Icon set file)")]),s._v(" "),a("p",[s._v("图标文件集是一个JSON文件，包含了所有的"),a("strong",[s._v("关联图标")]),s._v("和图标定义。")]),s._v(" "),a("p",[s._v("一个"),a("strong",[s._v("关联图标")]),s._v("将"),a("strong",[s._v("图标定义")]),s._v("映射到一个文件上（类型如：文件，文件夹，json文件...）。"),a("strong",[s._v("图标定义")]),s._v("指示了图标的所在位置：可以是一个图片文件，或者glyph字体。")]),s._v(" "),a("h3",{attrs:{id:"图标定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标定义"}},[s._v("#")]),s._v(" 图标定义")]),s._v(" "),a("p",[a("code",[s._v("iconDefinitions")]),s._v("部分包含了所有定义。每个定义有一个id，用于指向定义。一个定义能供多个文件关联引用。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iconDefinitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_folder_dark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iconPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./images/Folder_16x_inverse.svg"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里，"),a("strong",[s._v("图标定义")]),s._v("包含了一个标识符"),a("code",[s._v("_folder_dark")]),s._v("。除此之外还支持以下属性：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("iconPath")]),s._v("：当使用svg/png文件时：指向图片的路径。")]),s._v(" "),a("li",[a("code",[s._v("fontCharacter")]),s._v("：当使用glyph字体时：字体中使用的字符。")]),s._v(" "),a("li",[a("code",[s._v("fontColor")]),s._v("：当使用glyph字体时：设置glyph的颜色。")]),s._v(" "),a("li",[a("code",[s._v("fontSize")]),s._v("：当使用字体时：设置字体大小。默认情况下会使用字体本身定义的字体大小。这个值应为父级字号的相对值(如 150%)。")]),s._v(" "),a("li",[a("code",[s._v("fontId")]),s._v("：当使用字体时: 字体的ID。如果没有指定，则会采用"),a("code",[s._v("font specification")]),s._v("部分的第一个字体。")])]),s._v(" "),a("h3",{attrs:{id:"关联文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联文件"}},[s._v("#")]),s._v(" 关联文件")]),s._v(" "),a("p",[s._v("图标能关联到文件夹，文件夹名称，文件，文件名称，文件插件，和"),a("a",{attrs:{href:"/references/contribution-points#contributeslanguages"}},[s._v("语言Id")]),s._v("。")]),s._v(" "),a("p",[s._v("这些关联都能被提炼为诸如'light'和'highContrast'色彩主题。")]),s._v(" "),a("p",[s._v("每个文件关联指向一个"),a("strong",[s._v("图标定义")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_file_dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"folder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_folder_dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"folderExpanded"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_folder_open_dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"folderNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('".vscode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_vscode_folder"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ini"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_ini_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fileNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"win.ini"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_win_ini_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"languageIds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ini"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_ini_file"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"light"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"folderExpanded"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_folder_open_light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"folder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_folder_light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_file_light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ini"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_ini_file_light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"highContrast"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("file")]),s._v("是一个默认文件图标，为那些没有匹配到任何插件、文件名、语言类型的文件所准备的。目前所有文件图标属性都会被继承(只适用于：glyphs字体、字体大小(fontSize))。")]),s._v(" "),a("li",[a("code",[s._v("folder")]),s._v("收起的文件夹图标，如果"),a("code",[s._v("folderExpanded")]),s._v("没有设置，那么展开的文件夹也会使用这个图标。使用"),a("code",[s._v("folderNames")]),s._v("关联特殊名称的文件夹。文件夹图标是可选的，如果不设置，那文件夹就不会显示任何图标。")]),s._v(" "),a("li",[a("code",[s._v("folderExpanded")]),s._v("展开的文件夹图标。这个图标是可选的，如果不设置就会使用"),a("code",[s._v("folder")]),s._v("定义好的图标。")]),s._v(" "),a("li",[a("code",[s._v("folderNames")]),s._v("特殊名称文件夹图标。这个键是用于文件夹名称的，不支持包含路径的名称，不支持匹配模式和通配符。大小写不敏感。")]),s._v(" "),a("li",[a("code",[s._v("folderNamesExpanded")]),s._v("展开的特殊名称文件夹图标。")]),s._v(" "),a("li",[a("code",[s._v("rootFolder")]),s._v(" 收起的工作区根文件夹图标，如果"),a("code",[s._v("rootFolderExpanded")]),s._v("没有设置，那么展开的工作区根文件夹也会使用这个图标。如果不设置，则会使用"),a("code",[s._v("folder")]),s._v("定义的文件夹图标。")]),s._v(" "),a("li",[a("code",[s._v("rootFolderExpanded")]),s._v(" 展开的工作区根文件夹图标。如果没有设置，则会使用"),a("code",[s._v("rootFolder")]),s._v("定义的文件夹图标。")]),s._v(" "),a("li",[a("code",[s._v("languageIds")]),s._v("语言类型图标。这个键将匹配在*语言配置点（contribution point）*配置的"),a("a",{attrs:{href:"/references/contribution-points#contributeslanguages"}},[s._v("语言id")]),s._v("。注意语言配置的'第一行'是不考虑在内的。")]),s._v(" "),a("li",[a("code",[s._v("fileExtensions")]),s._v("文件插件图标。根据文件插件的名称匹配。插件名称是文件名点号后面（不包含点号）。拥有多重点号的文件名称，如"),a("code",[s._v("lib.d.ts")]),s._v("会匹配多个模式——"),a("code",[s._v("d.ts")]),s._v("和"),a("code",[s._v("ts")]),s._v("。大小写敏感。")]),s._v(" "),a("li",[a("code",[s._v("fileNames")]),s._v("文件图标。这个键需要文件的全称进行匹配，不支持包含路径的名称，不支持模式和通配符。大小写敏感。"),a("code",[s._v("fileNames")]),s._v("是最高优先匹配。")])]),s._v(" "),a("p",[s._v("匹配优先级："),a("code",[s._v("fileNames")]),s._v(" > "),a("code",[s._v("fileExtensions")]),s._v(" > "),a("code",[s._v("languageIds")])]),s._v(" "),a("p",[a("code",[s._v("light")]),s._v("和"),a("code",[s._v("highContrast")]),s._v("部分的属性表和上面相同，只是会在对应的主题下覆盖原有图标配置。")]),s._v(" "),a("h3",{attrs:{id:"字体定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体定义"}},[s._v("#")]),s._v(" 字体定义")]),s._v(" "),a("p",[s._v("在'font'部分添加任意你喜欢的字形和字体。定义好之后，你就可以在图标定义中使用它们了。如果没有指定字体id，那么默认使用第一个定义的字体。")]),s._v(" "),a("p",[s._v("将字体文件移动到你的插件中，设置好对应的路径。推荐使用"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/WOFF",target:"_blank",rel:"noopener noreferrer"}},[s._v("WOFF"),a("OutboundLink")],1),s._v("字体。")]),s._v(" "),a("ul",[a("li",[s._v("设置格式为'woff'")]),s._v(" "),a("li",[s._v("字重键值的定义参考"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/CSS/font-weight#Values",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("样式键值对的定义参考在"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/CSS/@font-face/font-style#Values",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("使用图标引用该字体时的字号。因此字体字号总是以百分比表示。")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fonts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"turtles-font"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./turtles.woff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"woff"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"weight"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"normal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"normal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"150%"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iconDefinitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fontCharacter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\E002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fontColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#5f8b3b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fontId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"turtles-font"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"图标主题中的文件夹图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标主题中的文件夹图标"}},[s._v("#")]),s._v(" 图标主题中的文件夹图标")]),s._v(" "),a("p",[s._v("文件图标主题会告诉文件浏览器不要显示默认文件夹图标（倒三角或者横杠），这个模式可在配置中加入"),a("code",[s._v('"hidesExplorerArrows":true')]),s._v("覆盖默认VS Code的设置。")])])}),[],!1,null,null,null);t.default=e.exports}}]);