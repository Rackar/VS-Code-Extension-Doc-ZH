(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{272:function(t,r,e){"use strict";e.r(r);var a=e(17),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"非js开发者的第一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非js开发者的第一步"}},[t._v("#")]),t._v(" 非JS开发者的第一步")]),t._v(" "),e("p",[t._v("本章节并不是官方教程的一部分，作为读者的你可能擅长于C++，Python，Java等其他主流语言，而并不了解基于现代前端技术构建的VS Code和他的插件开发语言和模式。本章参考了官方文档模式，循序渐进地带你了解制作插件的一些编程基础，以免你在阅读文档时晕头转向，本章结束之后，你应该能比较顺利地阅读文档中出现的所有TypeScript代码，没有障碍地学习VS Code插件基础，但是如果你希望达到一定程度的TypeScript编程水平，请参考"),e("a",{attrs:{href:"https://www.tslang.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("汉化版文档"),e("OutboundLink")],1),t._v("。当然，"),e("strong",[t._v("本章并不是所有读者必须阅读的，你可以按照自己的喜好或者需要，查询对应的小节，如果你有足够的经验也完全可以跳过本章")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"前端和客户端技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端和客户端技术"}},[t._v("#")]),t._v(" 前端和客户端技术")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("众所周知，客户端界面技术已是一门非常“老古董”的技术了，从图形系统诞生至今，各类客户端开发技术和模式你方唱罢我登场，淘汰了一批又一批。而Web前端技术，在浏览器和网络技术的依托之下还在不断发展，在这期间浏览器对编译器孜孜不倦的优化，终于将JavaScript语言提升到了一个新的高度，使JavaScript语言进入了传统客户端领域，但是作为开发者必须意识到，即使是在TypeScript的加持下，JavaScript也并没有变成一门真正的静态类型语言，"),e("strong",[t._v("因此你在使用TypeScript的时候依旧需要谨慎行事并遵守社区的最佳实践")]),t._v("。")]),t._v(" "),e("p",[t._v("我们教程学习的对象VS Code，便是建立在浏览器开源项目Chromium演化而来——名为Electron的客户端技术之上，它使用了性能极高的JS编译器和浏览器界面技术，"),e("strong",[t._v("将前端的三大编程基础JavaScript，HTML，CSS无缝地衔接进来，并融合了系统层级的编程接口")]),t._v("。而VS Code在此之上进一步封装和优化，将编辑器进程和插件进程独立开来，同时高度封装DOM（文档对象模型）接口，禁止用户直接修改界面，我们只能通过VS Code提供的模式去开发符合规范的插件，虽然这些规定限制了开发者的手脚，但是更带来了安全、稳健、性能上的优势。")]),t._v(" "),e("h2",{attrs:{id:"typescript和vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript和vs-code"}},[t._v("#")]),t._v(" TypeScript和VS Code")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("TypeScript起初是微软开发的以JavaScript为基础的编程语言，他兼容JavaScript的所有特性，并扩展了JS的类型系统，使得用户在大型系统开发中更加游刃有余，VS Code天然支持TypeScript，帮助开发者写出更加稳定、安全的代码。因此所有文档的示例，包括插件本身，绝大部分都是使用TypeScript开发的，俗话说“不积跬步无以至千里”，当你足够了插件的基础之后，阅读文档才会更加顺利。")]),t._v(" "),e("p",[t._v("由于VS Code已经禁用了CSS和HTML，因此本章不会介绍这些内容，有兴趣的读者可参阅"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);