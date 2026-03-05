(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/smoothScrollContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScrollContext",
    ()=>SmoothScrollContext,
    "useSmoothScroll",
    ()=>useSmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const SmoothScrollContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSmoothScroll = ()=>{
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SmoothScrollContext);
    if (!ctx) throw new Error("you have to using this Context inside SmoothScroll");
    return ctx;
};
_s(useSmoothScroll, "/dMy7t63NXD4eYACoT93CePwGrg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/smoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$smoothScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/smoothScrollContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function blockScroll() {
    window.addEventListener("wheel", preventScroll, {
        passive: false
    });
    window.addEventListener("touchmove", preventScroll, {
        passive: false
    });
    window.addEventListener("keydown", preventScroll, {
        passive: false
    });
}
function unblockScroll() {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventScroll);
}
const preventScroll = (e)=>e.preventDefault();
function SmoothScroll({ children }) {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [anchor, setAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const springConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SmoothScroll.useMemo[springConfig]": ()=>{
            return {
                damping: 20,
                stiffness: 1000,
                mass: 2
            };
        }
    }["SmoothScroll.useMemo[springConfig]"], []);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, {
        "SmoothScroll.useSpring[y]": (latest)=>{
            if (isPaused) return anchor;
            springConfig.stiffness = Math.max(50, Math.min(200, 1));
            return -latest;
        }
    }["SmoothScroll.useSpring[y]"]), springConfig);
    const pause = ()=>{
        setAnchor(y.get());
        setIsPaused(true);
        blockScroll();
    };
    const resume = ()=>{
        setIsPaused(false);
        unblockScroll();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (!contentRef.current) return;
            const updateHeight = {
                "SmoothScroll.useEffect.updateHeight": ()=>{
                    const contentHeight = contentRef.current?.clientHeight || 0;
                    document.body.style.height = `${contentHeight}px`;
                }
            }["SmoothScroll.useEffect.updateHeight"];
            updateHeight();
            window.addEventListener("resize", updateHeight);
            return ({
                "SmoothScroll.useEffect": ()=>window.removeEventListener("resize", updateHeight)
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$smoothScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScrollContext"].Provider, {
        value: {
            y,
            pause,
            resume
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: scrollRef,
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100%",
                y,
                willChange: "transform"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/smoothScroll.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/smoothScroll.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/smoothScroll.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(SmoothScroll, "GL4qMH/i4tNJr//s7JNCtg1JfJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/design/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$smoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/smoothScroll.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
function DesignPage() {
    _s();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$smoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-32aa6e02b52c13b8" + " " + "min-h-screen bg-black text-white overflow-x-hidden",
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
                            className: "jsx-32aa6e02b52c13b8" + " " + "absolute inset-0 opacity-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundImage: `
              linear-gradient(rgba(156, 26, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 26, 255, 0.3) 1px, transparent 1px)
            `,
                                    backgroundSize: "50px 50px",
                                    animation: "gridMove 20s linear infinite"
                                },
                                className: "jsx-32aa6e02b52c13b8" + " " + "absolute inset-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/design/page.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
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
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-32aa6e02b52c13b8" + " " + "relative z-10 text-center px-6",
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
                                        className: "jsx-32aa6e02b52c13b8" + " " + "bg-gradient-to-r from-[#FF008C] via-[#9C1AFF] to-[#4400FF] bg-clip-text text-transparent",
                                        children: "Design Philosophy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/design/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/design/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
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
                                    fileName: "[project]/src/app/design/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/design/page.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-32aa6e02b52c13b8" + " " + "sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-32aa6e02b52c13b8" + " " + "max-w-6xl mx-auto px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-32aa6e02b52c13b8" + " " + "flex gap-4 overflow-x-auto",
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
                                    fileName: "[project]/src/app/design/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/design/page.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/design/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
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
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-32aa6e02b52c13b8" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
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
                                            className: "jsx-32aa6e02b52c13b8" + " " + "p-6 rounded-2xl border transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-32aa6e02b52c13b8" + " " + "flex items-center gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-32aa6e02b52c13b8" + " " + "text-4xl",
                                                            children: item.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/design/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-32aa6e02b52c13b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-xl font-semibold text-white",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "principle" in item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        background: `${designKnowledge[activeCategory].color}30`,
                                                                        color: designKnowledge[activeCategory].color
                                                                    },
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-sm font-mono px-2 py-1 rounded",
                                                                    children: item.principle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/design/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-gray-400 mb-4 leading-relaxed",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
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
                                                        className: "jsx-32aa6e02b52c13b8" + " " + "p-4 rounded-lg text-sm overflow-x-auto font-mono",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "jsx-32aa6e02b52c13b8" + " " + "text-gray-300",
                                                            children: item.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/design/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/design/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 12
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 23
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
                                                            className: "jsx-32aa6e02b52c13b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-green-400 text-sm font-semibold mb-2",
                                                                    children: "优点"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "space-y-1",
                                                                    children: item.pros?.map((pro, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "jsx-32aa6e02b52c13b8" + " " + "text-sm text-gray-400 flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-green-400",
                                                                                    children: "✓"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                                    lineNumber: 396,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                " ",
                                                                                pro
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/src/app/design/page.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/design/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-32aa6e02b52c13b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-red-400 text-sm font-semibold mb-2",
                                                                    children: "缺点"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "space-y-1",
                                                                    children: item.cons?.map((con, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "jsx-32aa6e02b52c13b8" + " " + "text-sm text-gray-400 flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-32aa6e02b52c13b8" + " " + "text-red-400",
                                                                                    children: "✗"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                                    lineNumber: 412,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                " ",
                                                                                con
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/src/app/design/page.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/design/page.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/design/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 23
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
                                                        className: "jsx-32aa6e02b52c13b8" + " " + "flex flex-col items-center gap-2",
                                                        children: item.layers?.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    background: `${designKnowledge[activeCategory].color}${(4 - i) * 15 + 10}`,
                                                                    width: `${100 - i * 15}%`
                                                                },
                                                                className: "jsx-32aa6e02b52c13b8" + " " + "w-full text-center py-2 rounded-lg text-sm",
                                                                children: layer
                                                            }, layer, false, {
                                                                fileName: "[project]/src/app/design/page.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/design/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-32aa6e02b52c13b8" + " " + "flex justify-center mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            rotate: selectedItem?.name === item.name ? 180 : 0
                                                        },
                                                        className: "text-gray-500",
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/design/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/design/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/design/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: `radial-gradient(circle at center, ${designKnowledge[activeCategory].color}20, transparent 70%)`,
                                                filter: "blur(20px)",
                                                transform: "translateY(10px)"
                                            },
                                            className: "jsx-32aa6e02b52c13b8" + " " + "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/design/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/app/design/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/design/page.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, activeCategory, true, {
                    fileName: "[project]/src/app/design/page.tsx",
                    lineNumber: 286,
                    columnNumber: 9
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
                        className: "jsx-32aa6e02b52c13b8" + " " + "max-w-3xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-32aa6e02b52c13b8" + " " + "text-2xl md:text-3xl text-gray-300 italic leading-relaxed",
                                children: [
                                    '"Any fool can write code that a computer can understand.',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-32aa6e02b52c13b8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/design/page.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-32aa6e02b52c13b8" + " " + "text-white font-semibold",
                                        children: "Good programmers write code that humans can understand."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/design/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this),
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/design/page.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "jsx-32aa6e02b52c13b8" + " " + "mt-6 text-gray-500",
                                children: "— Martin Fowler"
                            }, void 0, false, {
                                fileName: "[project]/src/app/design/page.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/design/page.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/design/page.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "32aa6e02b52c13b8",
                    children: "@keyframes gridMove{0%{transform:translate(0)}to{transform:translate(50px,50px)}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/design/page.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/design/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(DesignPage, "t71FvT9DjpxIq8lwJClbe7WmfzA=");
_c = DesignPage;
var _c;
__turbopack_context__.k.register(_c, "DesignPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_55954f03._.js.map