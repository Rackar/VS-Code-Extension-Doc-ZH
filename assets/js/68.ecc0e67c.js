(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{325:function(e,v,_){"use strict";_.r(v);var t=_(17),i=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"内置命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内置命令"}},[e._v("#")]),e._v(" 内置命令")]),e._v(" "),_("p",[e._v("这篇文档列出了可能需要与"),_("code",[e._v("vscode.commands.executeCommand")]),e._v("一起使用的命令集合.")]),e._v(" "),_("p",[e._v("阅读"),_("a",{attrs:{href:""}},[e._v("命令指南")]),e._v("以了解如何使用"),_("code",[e._v("commands")]),e._v("API.")]),e._v(" "),_("p",[e._v("下面是一个如何在 VS Code 中打开新文件夹的例子:")]),e._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" uri "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Uri"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/some/path/to/folder'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" success "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" commands"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("executeCommand")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vscode.openFolder'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" uri"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br")])]),_("h2",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[e._v("#")]),e._v(" 命令")]),e._v(" "),_("p",[_("code",[e._v("vscode.executeWorkspaceSymbolProvider")]),e._v(" - 执行工作区所有的"),_("strong",[e._v("符号")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("query")]),e._v(" - 搜索关键词")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为具有SymbolInformation和DocumentSymbol的实例数组.")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDefinitionProvider")]),e._v(" - 执行所有的"),_("strong",[e._v("定义")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 某个符号的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Location实例数组.")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDeclarationProvider")]),e._v(" - 执行所有的"),_("strong",[e._v("声明")]),e._v("供应器函数.")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 某个符号的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Location实例数组.")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeTypeDefinitionProvider")]),e._v(" - 执行所有的"),_("strong",[e._v("类型定义")]),e._v("供应器函数.")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 某个符号的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Location实例数组.")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeImplementationProvider")]),e._v(" - 执行所有的"),_("strong",[e._v("接口")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 某个符号的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Location实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeHoverProvider")]),e._v(" - 执行所有的"),_("strong",[e._v("悬停")]),e._v("供应器函数.")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 某个符号的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Hover实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDocumentHighlights")]),e._v(" - 执行"),_("strong",[e._v("文档高亮")]),e._v("供应器函数.")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为DocumentHighlight实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeReferenceProvider")]),e._v(" - 执行"),_("strong",[e._v("引用")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Location实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDocumentRenameProvider")]),e._v(" - 执行"),_("strong",[e._v("重命名")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("newName")]),e._v(" - 新的符号名称")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为WorkspaceEdit")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeSignatureHelpProvider")]),e._v(" - 执行"),_("strong",[e._v("符号帮助")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("triggerCharacter")]),e._v(" - (可选的)当用户输入特定字符时（如"),_("code",[e._v(",")]),e._v(" 或 "),_("code",[e._v("(")]),e._v("）触发符号帮助")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为SignatureHelp")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDocumentSymbolProvider")]),e._v(" - 执行"),_("strong",[e._v("文档符号")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为具有SymbolInformation和DocumentSymbol的实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeCompletionItemProvider")]),e._v(" - 执行"),_("strong",[e._v("自动补全")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("triggerCharacter")]),e._v(" - (可选的)当用户输入诸如("),_("code",[e._v(",")]),e._v(" "),_("code",[e._v("(")]),e._v(")之类的字符时触发")]),e._v(" "),_("li",[_("em",[e._v("itemResolveCount")]),e._v(" - (可选的)补全的符号数量(数目太大会减慢补全速度)")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为CompletionList实例")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeCodeActionProvider")]),e._v(" - 执行"),_("strong",[e._v("代码操作小灯泡提示")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("range")]),e._v(" - 在文档中的范围")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为Command实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeCodeLensProvider")]),e._v(" - 执行"),_("strong",[e._v("CodeLens")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("itemResolveCount")]),e._v(" - (可选的)需要解析的lenses数量, 数目太大会影响性能")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为CodeLens实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeFormatDocumentProvider")]),e._v(" - 执行"),_("strong",[e._v("格式化文档")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("options")]),e._v(" - 配置项")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为TextEdits数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeFormatRangeProvider")]),e._v(" - 执行"),_("strong",[e._v("局部格式化")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("range")]),e._v(" - 限制的范围")]),e._v(" "),_("li",[_("em",[e._v("options")]),e._v(" - 配置项")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为TextEdits数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeFormatOnTypeProvider")]),e._v(" - 执行"),_("strong",[e._v("格式化文档")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 在文档中的位置")]),e._v(" "),_("li",[_("em",[e._v("ch")]),e._v(" - 在输入某个字符之后进行格式化")]),e._v(" "),_("li",[_("em",[e._v("options")]),e._v(" - 配置项")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为TextEdits数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeLinkProvider")]),e._v(" - 执行"),_("strong",[e._v("文档链接")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为DocumentLink实例数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeDocumentColorProvider")]),e._v(" - 执行"),_("strong",[e._v("文档颜色")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 文档的Uri")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为ColorInfomation对象数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.executeColorPresentationProvider")]),e._v(" - 执行"),_("strong",[e._v("色彩呈现")]),e._v("供应器函数")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("color")]),e._v(" - 需要展示并插入的颜色")]),e._v(" "),_("li",[_("em",[e._v("context")]),e._v(" - 上下文对象, 包括uri和影响范围")]),e._v(" "),_("li",[_("em",[e._v("(returns)")]),e._v(" - promise函数, 且参数为ColorPresentation对象数组")])]),e._v(" "),_("p",[_("code",[e._v("vscode.openFolder")]),e._v(" - 在当前窗口或者新的窗口打开一个文件夹或者工作区")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 被打开的文件夹或工作区Uri. 如果未提供, 会打开一个询问提示框")]),e._v(" "),_("li",[_("em",[e._v("newWindow")]),e._v(" - (可选的)是否在新窗口打开. 默认在本窗口")])]),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),_("p",[e._v("在当前窗口打开, 如果未设置"),_("code",[e._v("newWindow = true")]),e._v(", 会在指定的工作区或者文件夹开启新的拓展主机进程, 并且关闭当前拓展主机进程.")])]),e._v(" "),_("p",[_("code",[e._v("vscode.diff")]),e._v(" - 在diff编辑器中打开指定资源以比较它们的内容")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("left")]),e._v(" diff编辑器左边的文件")]),e._v(" "),_("li",[_("em",[e._v("right")]),e._v(" diff编辑器右边的文件")]),e._v(" "),_("li",[_("em",[e._v("title")]),e._v(" (可选)diff编辑器标题")]),e._v(" "),_("li",[_("em",[e._v("options")]),e._v(" (可选)编辑器配置项, 参考"),_("code",[e._v("vscode.TextDocumentShowOptions")])])]),e._v(" "),_("p",[_("code",[e._v("vscode.open")]),e._v(" - 在编辑器打开指定文件")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("resource")]),e._v(" - 要打开的文件")]),e._v(" "),_("li",[_("em",[e._v("columnOrOptions")]),e._v(" - (可选)可以是要打开的编辑器列，也可以是编辑器选项，参考"),_("code",[e._v("vscode.TextDocumentShowOptions")])])]),e._v(" "),_("p",[e._v("可以是文本文件、二进制文件、http(s) url. 如果需要更多的配置项, 使用"),_("code",[e._v("vscode.window.showTextDocument")]),e._v("代替.")]),e._v(" "),_("p",[_("code",[e._v("vscode.removeFromRecentlyOpened")]),e._v(" - 在最近打开的列表中移除一个路径")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("path")]),e._v(" - 被移除的路径")])]),e._v(" "),_("p",[_("code",[e._v("vscode.setEditorLayout")]),e._v(" - 设置编辑器布局")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("layout")]),e._v(" - 被设置的布局")])]),e._v(" "),_("p",[e._v("布局是一个对象，带有初始布局方向（可选，0 = 水平布局，1 = 垂直布局），还有一个包含编辑器组的数组。每个编辑器组又有一个尺寸和另一个数组，其中有矩形布局和方向信息。如果设置了编辑器组的大小，每一行或者每一列的总和必须为1。比如一个2x2的网格："),_("code",[e._v("{ orientation: 0, groups: [{ groups: [{}, {}], size: 0.5 }, { groups: [{}, {}], size: 0.5 }] }")])]),e._v(" "),_("p",[_("code",[e._v("cursorMove")]),e._v(" - 移动光标到视图的合理位置")]),e._v(" "),_("ul",[_("li",[_("p",[_("em",[e._v("Cursor move argument object")])]),e._v(" "),_("p",[e._v("可以传递的键值对")]),e._v(" "),_("ul",[_("li",[e._v("'to': 必选, 鼠标要移动到的合理位置")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("'left', 'right', 'up', 'down'\n'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'\n'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'\n'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br")])]),_("ul",[_("li",[e._v("'by': 移动的单位. 默认根据'to'来计算.")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("'line', 'wrappedLine', 'character', 'halfLine'\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("ul",[_("li",[e._v("'value': 单位步数. 默认为'1'.")]),e._v(" "),_("li",[e._v("'select': 如果为'true'则会选中. 默认为'false'.")])])])]),e._v(" "),_("p",[_("code",[e._v("editorScroll")]),e._v(" - 编辑器滚动方向")]),e._v(" "),_("ul",[_("li",[_("p",[_("em",[e._v("Editor scroll argument object")])]),e._v(" "),_("p",[e._v("可以传递的键值对")]),e._v(" "),_("ul",[_("li",[e._v("'to': 必须的. 方向值")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("'up', 'down'\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("ul",[_("li",[e._v("'by': 移动的单位. 默认根据'to'来计算.")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("'line', 'wrappedLine', 'page', 'halfPage'\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("ul",[_("li",[e._v("'value': 单位步数. 默认为'1'.")]),e._v(" "),_("li",[e._v("'revealCursor': 如果为'true', 在超出滚动视图也会显示光标.")])])])]),e._v(" "),_("p",[_("code",[e._v("revealLine")]),e._v(" - 在给定的位置显示行")]),e._v(" "),_("ul",[_("li",[_("p",[_("em",[e._v("Reveal line argument object")])]),e._v(" "),_("p",[e._v("可以传递的键值对")]),e._v(" "),_("ul",[_("li",[e._v("'lineNumber': 必须的. 行号")]),e._v(" "),_("li",[e._v("'at': 显示的合理位置")])]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("'top', 'center', 'bottom'\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])])])]),e._v(" "),_("p",[_("code",[e._v("editor.unfold")]),e._v(" - 展开编辑器内容")]),e._v(" "),_("ul",[_("li",[_("p",[_("em",[e._v("Unfold editor argument")])]),e._v(" "),_("p",[e._v("可以传递的键值对")]),e._v(" "),_("ul",[_("li",[e._v("'levels': 展开的层级数. 默认为 1.")]),e._v(" "),_("li",[e._v("'direction': 如果是'up', 向上展开, 否则向下展开")]),e._v(" "),_("li",[e._v("'selectionLines': 要使用展开功能的起始行（从0起）。如果不设置，就会使用当前激活的行（选中区）.")])])])]),e._v(" "),_("p",[_("code",[e._v("editor.fold")]),e._v(" - 折叠编辑器内容")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("Fold editor argument")])]),e._v(" "),_("p",[e._v("可以传递的键值对")]),e._v(" "),_("ul",[_("li",[e._v("'levels': 折叠的的层级数。默认为1")]),e._v(" "),_("li",[e._v("'direction':  如果设置为'up'，向上折叠，不然向下折叠")]),e._v(" "),_("li",[e._v("'selectionLines': 要使用折叠功能的起始行（从0起）。如果不设置，就会使用当前激活的行（选中区）")])])])]),e._v(" "),_("p",[_("code",[e._v("editor.action.showReferences")]),e._v(" - 在文件中显示引用")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("uri")]),e._v(" - 要显示引用的文件")]),e._v(" "),_("li",[_("em",[e._v("position")]),e._v(" - 要显示的位置")]),e._v(" "),_("li",[_("em",[e._v("locations")]),e._v(" - 位置数组")])]),e._v(" "),_("p",[_("code",[e._v("moveActiveEditor")]),e._v(" - 通过标签或者组移动激活的编辑器")]),e._v(" "),_("ul",[_("li",[_("p",[_("em",[e._v("Active editor move argument")])]),e._v(" "),_("p",[e._v("参数")]),e._v(" "),_("ul",[_("li",[e._v("'to': String. 目标位置")]),e._v(" "),_("li",[e._v("'by': String. 移动的单位(通过标签或者组).")]),e._v(" "),_("li",[e._v("'value': Number. 要移动的位置或者绝对位置值")])])])]),e._v(" "),_("h2",{attrs:{id:"简单命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单命令"}},[e._v("#")]),e._v(" 简单命令")]),e._v(" "),_("p",[e._v("简单的命令不需要参数, 可以在"),_("code",[e._v("keybindings.json")]),e._v("的"),_("strong",[e._v("键盘快捷方式")]),e._v("列表中找到. 在文件底部的注释块中列出了未绑定的命令.")]),e._v(" "),_("p",[e._v("查看"),_("code",[e._v("keybindings.json")]),e._v(":")]),e._v(" "),_("p",[e._v("Windows, Linux: "),_("strong",[e._v("文件")]),e._v(" > "),_("strong",[e._v("首选项")]),e._v(" > "),_("strong",[e._v("键盘快捷方式")]),e._v(" > "),_("code",[e._v("keybindings.json")])]),e._v(" "),_("p",[e._v("macOS: "),_("strong",[e._v("编码")]),e._v(" > "),_("strong",[e._v("首选项")]),e._v(" > "),_("strong",[e._v("键盘快捷方式")]),e._v(" > "),_("code",[e._v("keybindings.json")])])])}),[],!1,null,null,null);v.default=i.exports}}]);