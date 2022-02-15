"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 64:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Article = (props)=>{
    const { children , image , title  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "bg-white z-0 relative md:-mt-[30px] mb-[50px] border-y-[6px] border-t-cyan border-b-white rounded-lg",
        children: [
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: image,
                className: "min-h-screen"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-[80px] pt-[30px] md:px-[100px] px-[25px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-bold text-[28px] text-center pb-[30px]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[20px] text-grey",
                        children: children
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./assets/img/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.1b26457c.svg","height":47,"width":47});
;// CONCATENATED MODULE: ./assets/img/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.ccab57b7.svg","height":47,"width":47});
;// CONCATENATED MODULE: ./assets/img/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.38d57081.svg","height":47,"width":47});
;// CONCATENATED MODULE: ./components/Footer/index.js




const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-white py-[40px]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-row justify-evenly max-w-screen-lg left-0 right-0 mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: facebook
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: instagram
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: youtube
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white text-[15px] flex md:flex-row flex-col justify-between py-[30px] max-w-screen-lg left-0 right-0 mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:text-left text-center",
                        children: "\xa9 CYAN STORM GAME STUDIO 2015"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:text-right text-center",
                        children: "WWW.CYANSTORM.COM"
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./assets/img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.89d7134b.svg","height":219,"width":359});
;// CONCATENATED MODULE: ./components/Header/index.js




const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Cyan Storm - Game Studio"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "relative z-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex md:flex-row flex-col mb-[20px] md:mb-0 uppercase text-center text-white font-bold",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "grow md:order-1 order-2 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "News"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "grow md:order-2 order-3 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "grow-0 md:order-3 order-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: logo,
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "grow order-4 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/releases",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Releases"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "grow order-5 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    })
;
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;