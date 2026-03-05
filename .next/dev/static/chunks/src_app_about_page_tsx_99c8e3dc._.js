(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Design patterns and principles data
const designKnowledge = [
    {
        category: "Design Patterns",
        color: "#FF008C",
        items: [
            {
                name: "Factory Pattern",
                description: "创建对象的接口，让子类决定实例化哪个类。解耦对象创建与使用。",
                icon: "🏭",
                code: `interface Product { }
class ConcreteProductA implements Product { }
class Factory {
  create(type): Product {
    return new ConcreteProductA();
  }
}`
            },
            {
                name: "Singleton Pattern",
                description: "确保一个类只有一个实例，并提供全局访问点。",
                icon: "1️⃣",
                code: `class Singleton {
  private static instance: Singleton;
  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}`
            },
            {
                name: "Observer Pattern",
                description: "定义对象间的一对多依赖，当一个对象改变时，所有依赖者都会收到通知。",
                icon: "👁️",
                code: `interface Observer {
  update(data: any): void;
}
class Subject {
  observers: Observer[] = [];
  notify(data) {
    this.observers.forEach(o => o.update(data));
  }
}`
            },
            {
                name: "Strategy Pattern",
                description: "定义算法族，分别封装起来，让它们之间可以互相替换。",
                icon: "♟️",
                code: `interface Strategy {
  execute(data: any): any;
}
class Context {
  constructor(private strategy: Strategy) {}
  doAction(data) {
    return this.strategy.execute(data);
  }
}`
            }
        ]
    },
    {
        category: "SOLID Principles",
        color: "#9C1AFF",
        items: [
            {
                name: "Single Responsibility",
                description: "一个类应该只有一个引起它变化的原因。每个类只做一件事。",
                icon: "🎯",
                principle: "S"
            },
            {
                name: "Open/Closed",
                description: "软件实体应该对扩展开放，对修改关闭。",
                icon: "🔓",
                principle: "O"
            },
            {
                name: "Liskov Substitution",
                description: "子类型必须能够替换掉它们的基类型。",
                icon: "🔄",
                principle: "L"
            },
            {
                name: "Interface Segregation",
                description: "客户端不应该被迫依赖于它们不使用的接口。",
                icon: "✂️",
                principle: "I"
            },
            {
                name: "Dependency Inversion",
                description: "高层模块不应该依赖低层模块，两者都应该依赖抽象。",
                icon: "⬆️",
                principle: "D"
            }
        ]
    },
    {
        category: "Architecture",
        color: "#4400FF",
        items: [
            {
                name: "Monolithic",
                description: "单体架构 - 所有功能在一个代码库中。简单部署，但扩展性有限。",
                icon: "🏢",
                pros: [
                    "简单部署",
                    "易于调试",
                    "低延迟"
                ],
                cons: [
                    "难以扩展",
                    "技术栈固定",
                    "部署风险高"
                ]
            },
            {
                name: "Modular Monolith",
                description: "模块化单体 - 在单体内部按业务域划分模块，为微服务做准备。",
                icon: "📦",
                pros: [
                    "模块边界清晰",
                    "易于重构",
                    "渐进式迁移"
                ],
                cons: [
                    "需要严格规范",
                    "共享数据库"
                ]
            },
            {
                name: "Microservices",
                description: "微服务架构 - 独立部署的小型服务，通过API通信。",
                icon: "🔗",
                pros: [
                    "独立扩展",
                    "技术多样性",
                    "故障隔离"
                ],
                cons: [
                    "复杂性高",
                    "运维成本",
                    "分布式问题"
                ]
            },
            {
                name: "Clean Architecture",
                description: "干净架构 - 以业务逻辑为核心，外层依赖内层，保持核心独立。",
                icon: "🧅",
                layers: [
                    "Entities",
                    "Use Cases",
                    "Controllers",
                    "Frameworks"
                ]
            }
        ]
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const itemVariants = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 100,
            damping: 12
        }
    }
};
const cardVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        rotateY: -15
    },
    visible: {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        transition: {
            stiffness: 100,
            damping: 15
        }
    }
};
function AboutPage() {
    _s();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-8dca0fd95f234a53" + " " + "min-h-screen bg-black text-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "relative h-[50vh] flex items-center justify-center overflow-hidden",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca0fd95f234a53" + " " + "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundImage: `
              linear-gradient(rgba(156, 26, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 26, 255, 0.3) 1px, transparent 1px)
            `,
                                backgroundSize: "50px 50px",
                                animation: "gridMove 20s linear infinite"
                            },
                            className: "jsx-8dca0fd95f234a53" + " " + "absolute inset-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-96 h-96 rounded-full",
                        style: {
                            background: "radial-gradient(circle, rgba(156, 26, 255, 0.4) 0%, transparent 70%)",
                            filter: "blur(40px)"
                        },
                        animate: {
                            x: [
                                0,
                                100,
                                0
                            ],
                            y: [
                                0,
                                -50,
                                0
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca0fd95f234a53" + " " + "relative z-10 text-center px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-5xl md:text-7xl font-bold mb-6",
                                initial: {
                                    y: 50,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 100
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-8dca0fd95f234a53" + " " + "bg-gradient-to-r from-[#FF008C] via-[#9C1AFF] to-[#4400FF] bg-clip-text text-transparent",
                                    children: "Design Philosophy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-xl text-gray-400 max-w-2xl mx-auto",
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.4
                                },
                                children: "Clean code, solid principles, and scalable architecture"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8dca0fd95f234a53" + " " + "sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8dca0fd95f234a53" + " " + "max-w-6xl mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca0fd95f234a53" + " " + "flex gap-4 overflow-x-auto",
                        children: designKnowledge.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setActiveCategory(index),
                                className: `px-6 py-3 rounded-full whitespace-nowrap transition-all ${activeCategory === index ? "text-white" : "text-gray-500 hover:text-gray-300"}`,
                                style: {
                                    background: activeCategory === index ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)` : "transparent",
                                    border: activeCategory === index ? `1px solid ${category.color}60` : "1px solid transparent"
                                },
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: category.category
                            }, category.category, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "max-w-6xl mx-auto px-6 py-16",
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        className: "text-3xl font-bold mb-12 text-center",
                        variants: itemVariants,
                        style: {
                            color: designKnowledge[activeCategory].color
                        },
                        children: designKnowledge[activeCategory].category
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca0fd95f234a53" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: designKnowledge[activeCategory].items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: cardVariants,
                                whileHover: {
                                    scale: 1.02,
                                    boxShadow: `0 20px 40px ${designKnowledge[activeCategory].color}20`
                                },
                                className: "relative group cursor-pointer",
                                onClick: ()=>setSelectedItem(selectedItem?.name === item.name ? null : item),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                            borderColor: selectedItem?.name === item.name ? designKnowledge[activeCategory].color : "rgba(255,255,255,0.1)"
                                        },
                                        className: "jsx-8dca0fd95f234a53" + " " + "p-6 rounded-2xl border transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8dca0fd95f234a53" + " " + "flex items-center gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-8dca0fd95f234a53" + " " + "text-4xl",
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8dca0fd95f234a53",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-xl font-semibold text-white",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, this),
                                                            "principle" in item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    background: `${designKnowledge[activeCategory].color}30`,
                                                                    color: designKnowledge[activeCategory].color
                                                                },
                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-sm font-mono px-2 py-1 rounded",
                                                                children: item.principle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-8dca0fd95f234a53" + " " + "text-gray-400 mb-4 leading-relaxed",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this),
                                            "code" in item && selectedItem?.name === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: "auto",
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    style: {
                                                        background: "rgba(0,0,0,0.5)",
                                                        border: `1px solid ${designKnowledge[activeCategory].color}30`
                                                    },
                                                    className: "jsx-8dca0fd95f234a53" + " " + "p-4 rounded-lg text-sm overflow-x-auto font-mono",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "jsx-8dca0fd95f234a53" + " " + "text-gray-300",
                                                        children: item.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 21
                                            }, this),
                                            "pros" in item && selectedItem?.name === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: "auto",
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                className: "grid grid-cols-2 gap-4 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8dca0fd95f234a53",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-green-400 text-sm font-semibold mb-2",
                                                                children: "优点"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-8dca0fd95f234a53" + " " + "space-y-1",
                                                                children: item.pros?.map((pro, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-8dca0fd95f234a53" + " " + "text-sm text-gray-400 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-green-400",
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                                lineNumber: 394,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " ",
                                                                            pro
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/src/app/about/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8dca0fd95f234a53",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-red-400 text-sm font-semibold mb-2",
                                                                children: "缺点"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-8dca0fd95f234a53" + " " + "space-y-1",
                                                                children: item.cons?.map((con, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-8dca0fd95f234a53" + " " + "text-sm text-gray-400 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-8dca0fd95f234a53" + " " + "text-red-400",
                                                                                children: "✗"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                                lineNumber: 410,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " ",
                                                                            con
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/src/app/about/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, this),
                                            "layers" in item && selectedItem?.name === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: "auto",
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                className: "mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8dca0fd95f234a53" + " " + "flex flex-col items-center gap-2",
                                                    children: item.layers?.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                background: `${designKnowledge[activeCategory].color}${(4 - i) * 15 + 10}`,
                                                                width: `${100 - i * 15}%`
                                                            },
                                                            className: "jsx-8dca0fd95f234a53" + " " + "w-full text-center py-2 rounded-lg text-sm",
                                                            children: layer
                                                        }, layer, false, {
                                                            fileName: "[project]/src/app/about/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8dca0fd95f234a53" + " " + "flex justify-center mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: selectedItem?.name === item.name ? 180 : 0
                                                    },
                                                    className: "text-gray-500",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: `radial-gradient(circle at center, ${designKnowledge[activeCategory].color}20, transparent 70%)`,
                                            filter: "blur(20px)",
                                            transform: "translateY(10px)"
                                        },
                                        className: "jsx-8dca0fd95f234a53" + " " + "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, activeCategory, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "py-20 px-6 text-center",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: "jsx-8dca0fd95f234a53" + " " + "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-8dca0fd95f234a53" + " " + "text-2xl md:text-3xl text-gray-300 italic leading-relaxed",
                            children: [
                                '"Any fool can write code that a computer can understand.',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "jsx-8dca0fd95f234a53"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-8dca0fd95f234a53" + " " + "text-white font-semibold",
                                    children: "Good programmers write code that humans can understand."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this),
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "jsx-8dca0fd95f234a53" + " " + "mt-6 text-gray-500",
                            children: "— Martin Fowler"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8dca0fd95f234a53",
                children: "@keyframes gridMove{0%{transform:translate(0)}to{transform:translate(50px,50px)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(AboutPage, "t71FvT9DjpxIq8lwJClbe7WmfzA=");
_c = AboutPage;
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_about_page_tsx_99c8e3dc._.js.map