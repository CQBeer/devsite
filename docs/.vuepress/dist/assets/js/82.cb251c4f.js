(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{522:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"开发业务模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发业务模块"}},[a._v("#")]),a._v(" 开发业务模块")]),a._v(" "),s("blockquote",[s("p",[a._v("该文档为Java版本的业务模块开发指南")])]),a._v(" "),s("p",[a._v("nuls-module-java-template可配合NULS ChainBox帮助你快速构建基于java实现的区块链业务模块。模板中引用了io.nuls.v2下nuls-core-rpc、nuls-base两个核心程序包，前者实现了与模块的基础通信协议，后者包含了区块的基础数据结构及工具类。")]),a._v(" "),s("h2",{attrs:{id:"文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[a._v("#")]),a._v(" 文件结构")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".\n├── README.md   \n├── build          # 构建相关脚本   \n├── init.sh        # 初始化项目脚本\n├── module.ncf     # 模块配置文件\n├── package        # 构建脚本\n├── pom.xml        # maven pom.xml\n└── src            # java源代码\n")])])]),s("h2",{attrs:{id:"使用模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模板"}},[a._v("#")]),a._v(" 使用模板")]),a._v(" "),s("p",[a._v("使用NULS ChainBox项目tools脚本下载此模板。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tools -t java demo #demo为自定义的模块名称\n")])])]),s("p",[a._v("下载完成后，tools将自动将pom.xml、module.ncf里面定义的模块名称替换成demo，使用常用的java开发工具通过导入maven工程的方式导入项目。")]),a._v(" "),s("h2",{attrs:{id:"源码结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码结构"}},[a._v("#")]),a._v(" 源码结构")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".\n└── io\n    └── nuls\n        ├── MyModule.java                 #需要实现的模块启动类，在类中实现模块准备工作，包括注册交易、初始化数据表、web服务等。\n        ├── NulsModuleBootstrap.java      #模块启动类，通常不用修改\n        ├── Utils.java                    #工具类，实现了交易签名功能\n        ├── rpctools                      #rpc工具包\n        │   ├── AccountTools.java         #账户模块相关工具函数\n        │   ├── CallRpc.java              \n        │   ├── LegderTools.java          #账本模块相关工具函数\n        │   ├── TransactionTools.java     #交易模块相关工具函数 \n        │   └── vo                        #数据对象包     \n        │       ├── Account.java\n        │       ├── AccountBalance.java\n        │       └── TxRegisterDetail.java\n        └── txhandler                      #交易回调函数包\n            ├── TransactionDispatcher.java #交易回调函数分发器\n            ├── TransactionProcessor.java  #交易回调函数接口定义 \n            └── TxProcessorImpl.java       #交易回调函数接口实现，需要开发人员实现\n")])])]),s("h2",{attrs:{id:"实现业务模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现业务模块"}},[a._v("#")]),a._v(" 实现业务模块")]),a._v(" "),s("ol",[s("li",[a._v("定义交易类型，在模块启动时（MyModule.startModule)调用TransactionTools.registerTx方法完成交易注册。")]),a._v(" "),s("li",[a._v("实现创建交易入口，组装交易，并在txData中存储业务数据，调用TransactionTools.registerTx.newTx方法在交易模块创建交易。")]),a._v(" "),s("li",[a._v("实现TxProcessorImpl.validate方法，完成交易业务验证代码。")]),a._v(" "),s("li",[a._v("实现TxProcessorImpl.commit方法，完成交易业务数据保存代码。")]),a._v(" "),s("li",[a._v("实现TxProcessorImpl.rollback方法，完成交易业务数据回滚代码。")]),a._v(" "),s("li",[a._v("实现业务数据消费场景代码。")])]),a._v(" "),s("h2",{attrs:{id:"构建模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建模块"}},[a._v("#")]),a._v(" 构建模块")]),a._v(" "),s("p",[a._v("执行package脚本，会把模块按照NULS2.0的运行要求进行构建，将把打包好的jar包、启动脚本、停止脚本、Module.ncf构建到outer文件夹下。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./package\n============ PACKAGE FINISH 🍺🍺🍺🎉🎉🎉 ===============\n")])])])])}],!1,null,null,null);t.default=n.exports}}]);