/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "2.2.2", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a) {
            return n.each(this, a);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a) ;
            return void 0 === b || k.call(a, b);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), 
            b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : g.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), 
            null != e && h.push(e);
            return f.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), 
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, da = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), 
                        r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d;
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ha(a) {
            return a[u] = !0, a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ja(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, 
            p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), 
            c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b);
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return fa(b, n, null, [ a ]).length > 0;
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], 
                                n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ w, t ]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0;
                    };
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Y.test(a.nodeName);
                },
                input: function(a) {
                    return X.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: na(function() {
                    return [ 0 ];
                }),
                last: na(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: na(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        };
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0;
                }
            };
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b;
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ ra(sa(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
                }
                m.push(c);
            }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u);
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ha(f) : f;
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a;
            }
            return f;
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ia(function(a) {
            return null == a.getAttribute("disabled");
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fa;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, v = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0));
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : B.exec(a), 
            !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), 
                x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
            this.context = d, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return u(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c);
        },
        next: function(a) {
            return F(a, "nextSibling");
        },
        prev: function(a) {
            return F(a, "previousSibling");
        },
        nextAll: function(a) {
            return u(a, "nextSibling");
        },
        prevAll: function(a) {
            return u(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c);
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return v(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, 
                c = !1);
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], g.push(c), b || i()), 
                this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [ n ]), 
            n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), 
        n.ready();
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), 
        a.addEventListener("load", J))), I.promise(b);
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) K(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function M() {
        this.expando = n.expando + M.uid++;
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando];
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [ b, e ] : (d = e, 
                    d = d in f ? [ d ] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]];
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b);
        }
    };
    var N = new M(), O = new M(), P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            O.set(a, b, c);
        } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a);
        },
        data: function(a, b, c) {
            return O.access(a, b, c);
        },
        removeData: function(a, b) {
            O.remove(a, b);
        },
        _data: function(a, b, c) {
            return N.access(a, b, c);
        },
        _removeData: function(a, b) {
            N.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a);
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c;
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), U = [ "Top", "Right", "Bottom", "Left" ], V = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], 
        f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [ f ] : f); else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), 
        g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f);
        }
        return l;
    }
    !function() {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0;
    }
    function ha() {
        return !1;
    }
    function ia() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c);
        });
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(G) || [ "" ], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [ "" ], j = b.length;
                while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, 
                    a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (;i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, 
                e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), 
            e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            h.filter ? h.filter(a, g) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), 
        g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), 
            i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], 
            Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
        }
        return a;
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), 
        d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), 
            f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]); else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
                if (b = c[N.expando]) {
                    if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    c[N.expando] = void 0;
                }
                c[O.expando] && (c[O.expando] = void 0);
            }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0);
        },
        remove: function(a) {
            return va(this, a);
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), 
            n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function za(a) {
        var b = d, c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), 
        c;
    }
    var Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    }, Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    }, Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
            l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", 
                e = "4px" === d.marginRight, Ea.removeChild(g);
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b;
                },
                boxSizingReliable: function() {
                    return null == c && i(), c;
                },
                pixelMarginRight: function() {
                    return null == c && i(), e;
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f;
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), 
                    b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), 
                    b;
                }
            });
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ka = [ "Webkit", "O", "Moz", "ms" ], La = d.createElement("div").style;
    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ka.length;
        while (c--) if (a = Ka[c] + b, a in La) return a;
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g;
    }
    function Pa(b, c, e) {
        var f = !0, g = "width" === c ? b.offsetWidth : b.offsetHeight, h = Ca(b), i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 
        0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), 
        "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), 
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d);
                }) : Pa(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), 
                Na(a, c, g);
            }
        };
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Qa(this, !0);
        },
        hide: function() {
            return Qa(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0;
        }), Sa = n.now();
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Ua.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), 
        d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], 
            _a.tweeners[c].unshift(b);
        },
        prefilters: [ Za ],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Sa = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        a.clearInterval(Ta), Ta = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, 
        l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", 
        l.radioValue = "t" === a.value;
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), 
            null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            bb[b] = f), e;
        };
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)));
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [ e || d ], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), 
            q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = e), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), 
                    i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, 
                m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), 
                m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], 
                i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), 
                b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
            }
        };
    });
    var jb = a.location, kb = n.now(), lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), 
        c;
    };
    var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function xb(a, b, c, d) {
        var e = {}, f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2];
                        }
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a, t[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > v) for (b in a) s[b] = [ s[b], a[b] ]; else x.always(a[x.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b), z(0, b), this;
                }
            };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [ "" ], 
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
                } catch (y) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), 
            xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), 
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), 
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), 
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [ x, m ]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout");
                }, m.timeout));
                try {
                    v = 1, e.send(t, z);
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y);
                }
            } else z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), 
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), 
                w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, 
                l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), 
                x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [ l, y, x ]) : q.rejectWith(o, [ x, y, t ]), 
                x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [ x, m, j ? l : t ]), 
                r.fireWith(o, [ x, y ]), k && (p.trigger("ajaxComplete", [ x, m ]), --n.active || n.event.trigger("ajaxStop")));
            }
            return x;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a));
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a);
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
    };
    var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Hb = {
        0: 200,
        1223: 204
    }, Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a), f = !c && [];
        return e ? [ b.createElement(e[1]) ] : (e = ca([ a ], b, f), f && f.length && n(f).remove(), 
        n.merge([], e.childNodes));
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), 
            c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        size: function() {
            return this.length;
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Nb = a.jQuery, Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }, b || (a.jQuery = a.$ = n), n;
});

/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t();
}(this, function() {
    "use strict";
    var e = function() {};
    e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var o, s, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", u = "PAUSED", f = n.defaults, d = this, h = i.extend({}, f, r), g = [], p = !1, v = 0, m = u, w = !0, y = 0, S = !0, b = function() {
            for (var e in h) f.hasOwnProperty(e) || delete h[e];
            if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
            w = h.container === window || h.container === document.body || !document.body.contains(h.container), 
            w && (h.container = window), y = z(), h.container.addEventListener("resize", T), 
            h.container.addEventListener("scroll", T), h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval, 
            E();
        }, E = function() {
            h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval));
        }, x = function() {
            return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container);
        }, z = function() {
            return h.vertical ? i.get.height(h.container) : i.get.width(h.container);
        }, C = this._setScrollPos = function(e) {
            h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e;
        }, F = function() {
            if (S && p) {
                var e = i.type.Array(p) ? p : g.slice(0);
                p = !1;
                var t = v;
                v = d.scrollPos();
                var n = v - t;
                0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function(e) {
                    e.update(!0);
                });
            }
        }, L = function() {
            o = i.rAF(F);
        }, T = function(e) {
            "resize" == e.type && (y = z(), m = u), p !== !0 && (p = !0, L());
        }, A = function() {
            if (!w && y != z()) {
                var e;
                try {
                    e = new Event("resize", {
                        bubbles: !1,
                        cancelable: !1
                    });
                } catch (t) {
                    e = document.createEvent("Event"), e.initEvent("resize", !1, !1);
                }
                h.container.dispatchEvent(e);
            }
            g.forEach(function(e) {
                e.refresh();
            }), E();
        };
        this._options = h;
        var O = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
            }), t;
        };
        return this.addScene = function(t) {
            if (i.type.Array(t)) t.forEach(function(e) {
                d.addScene(e);
            }); else if (t instanceof e.Scene) if (t.controller() !== d) t.addTo(d); else if (g.indexOf(t) < 0) {
                g.push(t), g = O(g), t.on("shift.controller_sort", function() {
                    g = O(g);
                });
                for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n]);
            }
            return d;
        }, this.removeScene = function(e) {
            if (i.type.Array(e)) e.forEach(function(e) {
                d.removeScene(e);
            }); else {
                var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove());
            }
            return d;
        }, this.updateScene = function(t, n) {
            return i.type.Array(t) ? t.forEach(function(e) {
                d.updateScene(e, n);
            }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), 
            p = O(p), L()), d;
        }, this.update = function(e) {
            return T({
                type: "resize"
            }), e && F(), d;
        }, this.scrollTo = function(n, r) {
            if (i.type.Number(n)) C.call(h.container, n, r); else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r); else if (i.type.Function(n)) C = n; else {
                var o = i.get.elements(n)[0];
                if (o) {
                    for (;o.parentNode.hasAttribute(t); ) o = o.parentNode;
                    var s = h.vertical ? "top" : "left", a = i.get.offset(h.container), l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r);
                }
            }
            return d;
        }, this.scrollPos = function(e) {
            return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d);
        }, this.info = function(e) {
            var t = {
                size: y,
                vertical: h.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: h.container,
                isDocument: w
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
        }, this.loglevel = function() {
            return d;
        }, this.enabled = function(e) {
            return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S;
        }, this.destroy = function(e) {
            window.clearTimeout(s);
            for (var t = g.length; t--; ) g[t].destroy(e);
            return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), 
            i.cAF(o), null;
        }, b(), d;
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t;
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this;
        }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller;
    }, e.Scene = function(n) {
        var o, s, a = "BEFORE", l = "DURING", c = "AFTER", u = r.defaults, f = this, d = i.extend({}, u, n), h = a, g = 0, p = {
            start: 0,
            end: 0
        }, v = 0, m = !0, w = function() {
            for (var e in d) u.hasOwnProperty(e) || delete d[e];
            for (var t in u) L(t);
            C();
        }, y = {};
        this.on = function(e, t) {
            return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."), r = n[0], i = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: i || "",
                    callback: t
                }));
            })), f;
        }, this.off = function(e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."), r = n[0], i = n[1] || "", o = "*" === r ? Object.keys(y) : [ r ];
                o.forEach(function(e) {
                    for (var n = y[e] || [], r = n.length; r--; ) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1);
                    }
                    n.length || delete y[e];
                });
            }), f) : f;
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."), i = r[0], o = r[1], s = y[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n));
                });
            }
            return f;
        }, f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update());
        }).on("shift.internal", function() {
            S(), f.update();
        }), this.addTo = function(t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, C(), 
            b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(f), 
            f.trigger("add", {
                controller: s
            }), f.update()), f;
        }, this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m;
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", x);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove");
            }
            return f;
        }, this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.off("*.*"), null;
        }, this.update = function(e) {
            if (s) if (e) if (s.enabled() && m) {
                var t, n = s.info("scrollPos");
                t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, f.trigger("update", {
                    startPos: p.start,
                    endPos: p.end,
                    scrollPos: n
                }), f.progress(t);
            } else T && h === l && O(!0); else s.updateScene(f, !1);
            return f;
        }, this.refresh = function() {
            return b(), E(), f;
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1, n = h, r = s ? s.info("scrollDirection") : "PAUSED", i = d.reverse || e >= g;
                if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, 
                h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, 
                h = c, t = !0) : h !== l || i || O(), t) {
                    var o = {
                        progress: g,
                        state: h,
                        scrollDirection: r
                    }, u = h != n, p = function(e) {
                        f.trigger(e, o);
                    };
                    u && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), u && h !== l && (p(h === a ? "start" : "end"), 
                    p("leave"));
                }
                return f;
            }
            return g;
        };
        var S = function() {
            p = {
                start: v + d.offset
            }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration;
        }, b = function(e) {
            if (o) {
                var t = "duration";
                F(t, o.call(f)) && !e && (f.trigger("change", {
                    what: t,
                    newval: d[t]
                }), f.trigger("shift", {
                    reason: t
                }));
            }
        }, E = function(e) {
            var n = 0, r = d.triggerElement;
            if (s && r) {
                for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t); ) r = r.parentNode;
                var c = i.get.offset(r);
                o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l];
            }
            var u = n != v;
            v = n, u && !e && f.trigger("shift", {
                reason: "triggerElementPosition"
            });
        }, x = function() {
            d.triggerHook > 0 && f.trigger("shift", {
                reason: "containerResize"
            });
        }, z = i.extend(r.validate, {
            duration: function(e) {
                if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function() {
                        return s ? s.info("size") * t : 0;
                    };
                }
                if (i.type.Function(e)) {
                    o = e;
                    try {
                        e = parseFloat(o());
                    } catch (n) {
                        e = -1;
                    }
                }
                if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                return e;
            }
        }), C = function(e) {
            e = arguments.length ? [ e ] : Object.keys(z), e.forEach(function(e) {
                var t;
                if (z[e]) try {
                    t = z[e](d[e]);
                } catch (n) {
                    t = u[e];
                } finally {
                    d[e] = t;
                }
            });
        }, F = function(e, t) {
            var n = !1, r = d[e];
            return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n;
        }, L = function(e) {
            f[e] || (f[e] = function(t) {
                return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (f.trigger("change", {
                    what: e,
                    newval: d[e]
                }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                    reason: e
                })), f) : d[e];
            });
        };
        this.controller = function() {
            return s;
        }, this.state = function() {
            return h;
        }, this.scrollOffset = function() {
            return p.start;
        }, this.triggerPosition = function() {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e;
        };
        var T, A;
        f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && O(), t && _();
        }).on("progress.internal", function() {
            O();
        }).on("add.internal", function() {
            _();
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset);
        });
        var O = function(e) {
            if (T && s) {
                var t = s.info(), n = A.spacer.firstChild;
                if (e || h !== l) {
                    var r = {
                        position: A.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, o = i.css(n, "position") != r.position;
                    A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, 
                    i.css(n, r), o && _();
                } else {
                    "fixed" != i.css(n, "position") && (i.css(n, {
                        position: "fixed"
                    }), _());
                    var u = i.get.offset(A.spacer, !0), f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                    u[t.vertical ? "top" : "left"] += f, i.css(A.spacer.firstChild, {
                        top: u.top,
                        left: u.left
                    });
                }
            }
        }, _ = function() {
            if (T && s && A.inFlow) {
                var e = h === l, t = s.info("vertical"), n = A.spacer.firstChild, r = i.isMarginCollapseType(i.css(A.spacer, "display")), o = {};
                A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
                    width: i.get.width(A.spacer)
                }) : i.css(T, {
                    width: "100%"
                }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), 
                A.relSize.height ? e ? i.css(T, {
                    height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                }) : i.css(T, {
                    height: "100%"
                }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), 
                A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), 
                i.css(A.spacer, o);
            }
        }, N = function() {
            s && T && h === l && !s.info("isDocument") && O();
        }, P = function() {
            s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _();
        }, D = function(e) {
            s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
        };
        this.setPin = function(e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return f;
            if ("fixed" === i.css(e, "position")) return f;
            if (T) {
                if (T === e) return f;
                f.removePin();
            }
            T = e;
            var o = T.parentNode.style.display, s = [ "top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom" ];
            T.parentNode.style.display = "none";
            var a = "absolute" != i.css(T, "position"), l = i.css(T, s.concat([ "display" ])), c = i.css(T, [ "width", "height" ]);
            T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = T.parentNode.insertBefore(document.createElement("div"), T), d = i.extend(l, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || i.extend(d, i.css(T, [ "width", "height" ])), i.css(u, d), u.setAttribute(t, ""), 
            i.addClass(u, n.spacerClass), A = {
                spacer: u,
                relSize: {
                    width: "%" === c.width.slice(-1),
                    height: "%" === c.height.slice(-1),
                    autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                },
                pushFollowers: n.pushFollowers,
                inFlow: a
            }, !T.___origStyle) {
                T.___origStyle = {};
                var h = T.style, g = s.concat([ "width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing" ]);
                g.forEach(function(e) {
                    T.___origStyle[e] = h[e] || "";
                });
            }
            return A.relSize.width && i.css(u, {
                width: c.width
            }), A.relSize.height && i.css(u, {
                height: c.height
            }), u.appendChild(T), i.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N), window.addEventListener("resize", N), 
            window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), 
            O(), f;
        }, this.removePin = function(e) {
            if (T) {
                if (h === l && O(!0), e || !s) {
                    var n = A.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = A.spacer.style, o = [ "margin", "marginLeft", "marginRight", "marginTop", "marginBottom" ];
                        margins = {}, o.forEach(function(e) {
                            margins[e] = r[e] || "";
                        }), i.css(n, margins);
                    }
                    A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), 
                    T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle);
                }
                window.removeEventListener("scroll", N), window.removeEventListener("resize", N), 
                window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), 
                T.removeEventListener("DOMMouseScroll", D), T = void 0;
            }
            return f;
        };
        var R, k = [];
        return f.on("destroy.internal", function(e) {
            f.removeClassToggle(e.reset);
        }), this.setClassToggle = function(e, t) {
            var n = i.get.elements(e);
            return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(), 
            R = t, k = n, f.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function(e) {
                    t(e, R);
                });
            }), f) : f;
        }, this.removeClassToggle = function(e) {
            return e && k.forEach(function(e) {
                i.removeClass(e, R);
            }), f.off("start.internal_class end.internal_class"), R = void 0, k = [], f;
        }, w(), f;
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !i.type.Number(e)) throw 0;
                return e;
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t;
                }
                return e;
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1)); else {
                    if (!(e in t)) throw 0;
                    e = t[e];
                }
                return e;
            },
            reverse: function(e) {
                return !!e;
            }
        },
        shifts: [ "duration", "offset", "triggerHook" ]
    };
    e.Scene.addOption = function(e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e));
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this;
        }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene;
    }, e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", 
        this.timeStamp = this.timestamp = Date.now(), this;
    };
    var i = e._util = function(e) {
        var t, n = {}, r = function(e) {
            return parseFloat(e) || 0;
        }, i = function(t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
        }, o = function(t, n, o, s) {
            if (n = n === document ? e : n, n === e) s = !1; else if (!f.DomElement(n)) return 0;
            t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
            if (o && s) {
                var l = i(n);
                a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight);
            }
            return a;
        }, s = function(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase();
            });
        };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++) if (arguments[t]) for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e;
        }, n.isMarginCollapseType = function(e) {
            return [ "block", "flex", "list-item", "table", "-webkit-box" ].indexOf(e) > -1;
        };
        var a = 0, l = [ "ms", "moz", "webkit", "o" ], c = e.requestAnimationFrame, u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = new Date().getTime(), r = Math.max(0, 16 - (n - a)), i = e.setTimeout(function() {
                t(n + r);
            }, r);
            return a = n + r, i;
        }), u || (u = function(t) {
            e.clearTimeout(t);
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
        };
        f.String = function(e) {
            return "string" === f(e);
        }, f.Function = function(e) {
            return "function" === f(e);
        }, f.Array = function(e) {
            return Array.isArray(e);
        }, f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0;
        }, f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
        };
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t);
            } catch (r) {
                return n;
            }
            if ("nodelist" === f(t) || f.Array(t)) for (var i = 0, o = n.length = t.length; o > i; i++) {
                var s = t[i];
                n[i] = f.DomElement(s) ? s : d.elements(s);
            } else (f.DomElement(t) || t === document || t === e) && (n = [ t ]);
            return n;
        }, d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0;
        }, d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0;
        }, d.width = function(e, t, n) {
            return o("width", e, t, n);
        }, d.height = function(e, t, n) {
            return o("height", e, t, n);
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft());
            }
            return n;
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t);
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
        }, n.css = function(e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {}, r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)];
                }), n;
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a;
            }
        }, n;
    }(window || {});
    return e;
});

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof handlerIn === "object") {
            cfg = $.extend(cfg, handlerIn);
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector
            });
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut
            });
        }
        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;
        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        // A private function for comparing current and previous mouse position
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
                $(ob).off("mousemove.hoverIntent", track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ ev ]);
            } else {
                // set previous coordinates for next time
                pX = cX;
                pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        // A private function for delaying the mouseOut function
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ ev ]);
        };
        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({}, e);
            var ob = this;
            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX;
                pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent", track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent", track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        // listen for mouseenter and mouseleave
        return this.on({
            "mouseenter.hoverIntent": handleHover,
            "mouseleave.hoverIntent": handleHover
        }, cfg.selector);
    };
})(jQuery);

/*!
* country-region-selector
* ------------------------
* 0.2.3
* @author Ben Keen
* @repo https://github.com/benkeen/country-region-selector
* @licence MIT
*/
!function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b(require()) : a.crs = b(a);
}(this, function() {
    "use strict";
    var a = "crs-country", b = "Select country", c = "Select region", d = !0, e = !0, f = [], g = [ [ "Afghanistan", "AF", "Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB" ], [ "Åland Islands", "AX", "Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR" ], [ "Albania", "AL", "Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12" ], [ "Algeria", "DZ", "Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13" ], [ "American Samoa", "AS", "Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22" ], [ "Andorra", "AD", "Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06" ], [ "Angola", "AO", "Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI" ], [ "Anguilla", "AI", "Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22" ], [ "Antarctica", "AQ", "Antarctica~AQ" ], [ "Antigua and Barbuda", "AG", "Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37" ], [ "Argentina", "AR", "Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T" ], [ "Armenia", "AM", "Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER" ], [ "Aruba", "AW", "Aruba~AW" ], [ "Australia", "AU", "Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA" ], [ "Austria", "AT", "Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9" ], [ "Azerbaijan", "AZ", "Bakı~BA|Gəncə~GA|Lənkəran~LA|Mingəçevir~MI|Naftalan~NA|Naxçıvan~NV|Şəki~SA|Şirvan~SR|Sumqayit~SM|Xankəndi~XA|Yevlax~YE|Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR" ], [ "Bahamas", "BS", "Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39" ], [ "Bahrain", "BH", "Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17" ], [ "Bangladesh", "BD", "Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Rajshahi~E|Rangpur~F|Sylhet~G" ], [ "Barbados", "BB", "Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11" ], [ "Belarus", "BY", "Brest voblast~BR|Gorod Minsk~HO|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI" ], [ "Belgium", "BE", "Bruxelles-Capitale~BRU|Région Flamande~VLG|Région Wallonië~WAL" ], [ "Belize", "BZ", "Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL" ], [ "Benin", "BJ", "Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO" ], [ "Bermuda", "BM", "City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11" ], [ "Bhutan", "BT", "Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34" ], [ "Bolivia", "BO", "Beni~B|Chuquisaca~H|Cochabamba~C|La Paz~L|Oruro~O|Pando~N|Potosí~P|Santa Cruz~S|Tarija~T" ], [ "Bonaire, Sint Eustatius and Saba", "BQ", "Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE" ], [ "Bosnia and Herzegovina", "BA", "Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP" ], [ "Botswana", "BW", "Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO" ], [ "Bouvet Island", "BV", "Bouvet Island~BV" ], [ "Brazil", "BR", "Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Para~PA|Paraiba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|Sao Paulo~SP|Sergipe~SE|Tocantins~TO" ], [ "British Indian Ocean Territory", "IO", "British Indian Ocean Territory" ], [ "Brunei Darussalam", "BN", "Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU" ], [ "Bulgaria", "BG", "Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06" ], [ "Burkina Faso", "BF", "Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU" ], [ "Burundi", "BI", "Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY" ], [ "Cambodia", "KH", "Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Phnum Penh|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev" ], [ "Cameroon", "CM", "Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW" ], [ "Canada", "CA", "Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT" ], [ "Cape Verde", "CV", "Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS" ], [ "Cayman Islands", "KY", "Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western" ], [ "Central African Republic", "CF", "Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK" ], [ "Chad", "TD", "Batha|Biltine|Borkou-Ennedi-Tibesti|Chari-Baguirmi|Guera|Kanem|Lac|Logone Occidental|Logone Oriental|Mayo-Kebbi|Moyen-Chari|Ouaddai|Salamat|Tandjile" ], [ "Chile", "CL", "Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS" ], [ "China", "CN", "Anhui~34|Beijing~11|Chongqing~50|Fujian~35|Gansu~62|Guangdong~44|Guangxi~45|Guizhou~52|Hainan~46|Hebei~13|Heilongjiang~23|Henan~41|Hong Kong~91|Hubei~42|Hunan~43|Inner Mongolia~15|Jiangsu~32|Jiangxi~36|Jilin~22|Liaoning~21|Macau~92|Ningxia~64|Qinghai~63|Shaanxi~61|Shandong~37|Shanghai~31|Shanxi~14|Sichuan~51|Tianjin~12|Tibet~54|Xinjiang~65|Yunnan~53|Zhejiang~33" ], [ "Christmas Island", "CX", "Christmas Island~CX" ], [ "Cocos (Keeling) Islands", "CC", "Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI" ], [ "Colombia", "CO", "Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID" ], [ "Comoros", "KM", "Anjouan (Nzwani)|Domoni|Fomboni|Grande Comore (Njazidja)|Moheli (Mwali)|Moroni|Moutsamoudou" ], [ "Congo, Republic of the (Brazzaville)", "CG", "Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13" ], [ "Congo, the Democratic Republic of the (Kinshasa)", "CD", "Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK" ], [ "Cook Islands", "CK", "Aitutaki~01|Atiu~02|Avarua|Mangaia~03|Manihiki~04|Manuae~05|Mauke~06|Mitiaro~07|Nassau Island~08|Palmerston~09|Penrhyn~10|Pukapuka~11|Rakahanga~12|Rarotonga~13|Suwarrow~14|Takutea~15" ], [ "Costa Rica", "CR", "Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1" ], [ "Côte d'Ivoire, Republic of", "CI", "Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08" ], [ "Croatia", "HR", "Bjelovarsko-Bilogorska Zupanija|Brodsko-Posavska Zupanija|Dubrovacko-Neretvanska Zupanija|Istarska Zupanija|Karlovacka Zupanija|Koprivnicko-Krizevacka Zupanija|Krapinsko-Zagorska Zupanija|Licko-Senjska Zupanija|Medimurska Zupanija|Osjecko-Baranjska Zupanija|Pozesko-Slavonska Zupanija|Primorsko-Goranska Zupanija|Sibensko-Kninska Zupanija|Sisacko-Moslavacka Zupanija|Splitsko-Dalmatinska Zupanija|Varazdinska Zupanija|Viroviticko-Podravska Zupanija|Vukovarsko-Srijemska Zupanija|Zadarska Zupanija|Zagreb|Zagrebacka Zupanija" ], [ "Cuba", "CU", "Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05" ], [ "Curaçao", "CW", "Curaçao~CW" ], [ "Cyprus", "CY", "Ammochostos~04|Keryneia~05|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05" ], [ "Czech Republic", "CZ", "Hlavní město Praha~PR|Jihočeský kraj~JC|Jihomoravský kraj~JM|Karlovarský kraj~KA|Královéhradecký kraj~KR|Liberecký kraj~LI|Moravskoslezský kraj~MO|Olomoucký kraj~OL|Pardubický kraj~PA|Plzeňský kraj~PL|Středočeský kraj~ST|Ústecký kraj~US|Vysočina~VY|Zlínský kraj~ZL" ], [ "Denmark", "DK", "Hovedstaden~84|Kujalleq~GL-KU|Midtjylland~82|Norderøerne~FO-01|Nordjylland~81|Østerø~FO-06|Qaasuitsup~GL-QA|Qeqqata~GL-QE|Sandø~FO-02|Sermersooq~GL-SM|Sjælland~85|Strømø~FO-03|Suderø~FO-04|Syddanmark~83|Vågø~FO-05" ], [ "Djibouti", "DJ", "Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA" ], [ "Dominica", "DM", "Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11" ], [ "Dominican Republic", "DO", "Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~34|Noroeste~34|Norte~35|Valdesia~42" ], [ "Ecuador", "EC", "Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z" ], [ "Egypt", "EG", "Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~SUZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS" ], [ "El Salvador", "SV", "Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|San Salvador|San Vicente|Santa Ana|Sonsonate|Usulutan" ], [ "Equatorial Guinea", "GQ", "Annobon|Bioko Norte|Bioko Sur|Centro Sur|Kie-Ntem|Litoral|Wele-Nzas" ], [ "Eritrea", "ER", "Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK" ], [ "Estonia", "EE", "Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86" ], [ "Ethiopia", "ET", "Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI" ], [ "Falkland Islands (Islas Malvinas)", "FK", "Falkland Islands (Islas Malvinas)" ], [ "Faroe Islands", "FO", "Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar" ], [ "Fiji", "FJ", "Central|Eastern|Northern|Rotuma|Western" ], [ "Finland", "FI", "Ahvenanmaan lääni~AL|Etelä-Suomen lääni~ES|Itä-Suomen lääni~IS|Länsi-Suomen lääni~LS|Lapin lääni~LL|Oulun lääni~OL" ], [ "France", "FR", "Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d'Azur|Rhone-Alpes" ], [ "French Guiana", "GF", "French Guiana" ], [ "French Polynesia", "PF", "Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent" ], [ "French Southern and Antarctic Lands", "TF", "Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam" ], [ "Gabon", "GA", "Estuaire|Haut-Ogooue|Moyen-Ogooue|Ngounie|Nyanga|Ogooue-Ivindo|Ogooue-Lolo|Ogooue-Maritime|Woleu-Ntem" ], [ "Gambia, The", "GM", "Banjul|Central River|Lower River|North Bank|Upper River|Western" ], [ "Georgia", "GE", "Abashis|Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)|Adigenis|Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)|Akhalgoris|Akhalk'alak'is|Akhalts'ikhis|Akhmetis|Ambrolauris|Aspindzis|Baghdat'is|Bolnisis|Borjomis|Ch'khorotsqus|Ch'okhatauris|Chiat'ura|Dedop'listsqaros|Dmanisis|Dushet'is|Gardabanis|Gori|Goris|Gurjaanis|Javis|K'arelis|K'ut'aisi|Kaspis|Kharagaulis|Khashuris|Khobis|Khonis|Lagodekhis|Lanch'khut'is|Lentekhis|Marneulis|Martvilis|Mestiis|Mts'khet'is|Ninotsmindis|Onis|Ozurget'is|P'ot'i|Qazbegis|Qvarlis|Rust'avi|Sach'kheris|Sagarejos|Samtrediis|Senakis|Sighnaghis|T'bilisi|T'elavis|T'erjolis|T'et'ritsqaros|T'ianet'is|Tqibuli|Ts'ageris|Tsalenjikhis|Tsalkis|Tsqaltubo|Vanis|Zestap'onis|Zugdidi|Zugdidis" ], [ "Germany", "DE", "Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH" ], [ "Ghana", "GH", "Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western" ], [ "Gibraltar", "GI", "Gibraltar" ], [ "Greece", "GR", "Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos" ], [ "Greenland", "GL", "Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)" ], [ "Grenada", "GD", "Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick" ], [ "Guadeloupe", "GP", "Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante" ], [ "Guam", "GU", "Guam" ], [ "Guatemala", "GT", "Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa" ], [ "Guernsey", "GG", "Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale" ], [ "Guinea", "GN", "Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou" ], [ "Guinea-Bissau", "GW", "Bafata|Biombo|Bissau|Bolama-Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali" ], [ "Guyana", "GY", "Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo" ], [ "Haiti", "HT", "Artibonite|Centre|Grand'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est" ], [ "Heard Island and McDonald Islands", "HM", "Heard Island and McDonald Islands" ], [ "Holy See (Vatican City)", "VA", "Holy See (Vatican City)~01" ], [ "Honduras", "HN", "Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro" ], [ "Hong Kong", "HK", "Hong Kong" ], [ "Hungary", "HU", "Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Budapest|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg" ], [ "Iceland", "IS", "Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla" ], [ "India", "IN", "Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal" ], [ "Indonesia", "ID", "Aceh|Bali|Banten|Bengkulu|East Timor|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Kepulauan Riau|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Papua Barat|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta" ], [ "Iran, Islamic Republic of", "IR", "Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohgiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Tehran|Yazd|Zanjan" ], [ "Iraq", "IQ", "Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit" ], [ "Ireland", "IE", "Carlow|Cavan|Clare|Cork|Donegal|Dublin|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow" ], [ "Isle of Man", "IM", "Isle of Man" ], [ "Israel", "IL", "Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv" ], [ "Italy", "IT", "Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto" ], [ "Jamaica", "JM", "Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland" ], [ "Japan", "JP", "Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi" ], [ "Jersey", "JE", "Jersey" ], [ "Jordan", "JO", "'Amman|Ajlun|Al 'Aqabah|Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa'|Irbid|Jarash|Ma'an|Madaba" ], [ "Kazakhstan", "KZ", "Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl" ], [ "Kenya", "KE", "Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western" ], [ "Kiribati", "KI", "Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands|Kanton|Kiritimati|Kuria|Line Islands|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina" ], [ "Korea, Democratic People's Republic of", "KP", "Chagang-do (Chagang Province)|Hamgyong-bukto (North Hamgyong Province)|Hamgyong-namdo (South Hamgyong Province)|Hwanghae-bukto (North Hwanghae Province)|Hwanghae-namdo (South Hwanghae Province)|Kaesong-si (Kaesong City)|Kangwon-do (Kangwon Province)|Namp'o-si (Namp'o City)|P'yongan-bukto (North P'yongan Province)|P'yongan-namdo (South P'yongan Province)|P'yongyang-si (P'yongyang City)|Yanggang-do (Yanggang Province)" ], [ "Korea, Republic of", "KR", "Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Cheju-do|Cholla-bukto|Cholla-namdo|Inch'on-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi" ], [ "Kuwait", "KW", "Al 'Asimah|Al Ahmadi|Al Farwaniyah|Al Jahra'|Hawalli" ], [ "Kyrgyzstan", "KG", "Batken Oblasty|Bishkek Shaary|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)" ], [ "Laos", "LA", "Vientiane~VT|Attapu!(Attopeu)~AT|Bokèo~BK|Bolikhamxai!(Borikhane)~BL|Champasak!(Champassak)~CH|Houaphan~HO|Khammouan~KH|Louang!Namtha~LM|Louangphabang!(Louang!Prabang)~LP|Oudômxai!(Oudomsai)~OU|Phôngsali!(Phong!Saly)~PH|Salavan!(Saravane)~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong!(Sékong)~XE|Xiangkhoang!(Xieng!Khouang)~XI|Xaisômboun~XN" ], [ "Latvia", "LV", "Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons" ], [ "Lebanon", "LB", "Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane" ], [ "Lesotho", "LS", "Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohales Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka" ], [ "Liberia", "LR", "Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|Sinoe" ], [ "Libya", "LY", "Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan" ], [ "Liechtenstein", "LI", "Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz" ], [ "Lithuania", "LT", "Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas" ], [ "Luxembourg", "LU", "Diekirch|Grevenmacher|Luxembourg" ], [ "Macao", "MO", "Macao" ], [ "Macedonia, Former Yugoslav Republic of", "MK", "Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (SkopjeZupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (lecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva rivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi eista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilepp|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro e|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitolistica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci" ], [ "Madagascar", "MG", "Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara" ], [ "Malawi", "MW", "Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Lilongwe|Machinga (Kasupe)|Mchinji|Mulanje|Mwanza|Mzimba|Nkhata Bay|Nkhotakota|Nsanje|Ntcheu|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba" ], [ "Malaysia", "MY", "Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan" ], [ "Maldives", "MV", "Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa afu|Laamu|Lhaviyani|Maale|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu" ], [ "Mali", "ML", "Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou" ], [ "Malta", "MT", "Valletta" ], [ "Marshall Islands", "MH", "Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejitorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje" ], [ "Martinique", "MQ", "Martinique" ], [ "Mauritania", "MR", "Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza" ], [ "Mauritius", "MU", "Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Riviere du odrigues|Savanne" ], [ "Mayotte", "YT", "Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17" ], [ "Mexico", "MX", "Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mexico|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San si|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas" ], [ "Micronesia, Federated States of", "FM", "Chuuk (Truk)|Kosrae|Pohnpei|Yap" ], [ "Moldova", "MD", "Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni" ], [ "Monaco", "MC", "Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo" ], [ "Mongolia", "MN", "Arhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan|Dornod|Dornogovi|Dundgovi|Dzavhan|Erdenet|Govi-tiy|Hovd|Hovsgol|Omnogovi|Ovorhangay|Selenge|Suhbaatar|Tov|Ulaanbaatar|Uvs" ], [ "Montenegro", "ME", "Andrijevica|Bar|Berane|Bijelo Polje|Budva|Cetinje|Danilovgrad|Herceg Novi|Kolašin|Kotor|Mojkovac|Nikšić|Plav|Plužine|Pljevlja|Podgorica|Golubovci|Tuzi|Rožaje|Šavnik|Tivat|Ulcinj|Žablja" ], [ "Montserrat", "MS", "Saint Anthony|Saint Georges|Saint Peter's" ], [ "Morocco", "MA", "Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit" ], [ "Mozambique", "MZ", "Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia" ], [ "Myanmar", "MM", "Ayeyarwady Region|Bago Region|Chin State|Kachin State|Kayah State|Kayin State|Magway Region|Mandalay Region|Mon State|Rakhine State|Shan State|Sagaing Region|Tanintharyi Region|Yangon Region|Naypyidaw Union Territory|Danu Self-Administered Zone|Kokang Self-Administered Zone|Naga Self-Administered Zone|Pa-O Self-Administered Zone|Pa Laung Self-Administered Zone|Wa Self-Administered Division" ], [ "Namibia", "NA", "Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa" ], [ "Nauru", "NR", "Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren" ], [ "Nepal", "NP", "Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti" ], [ "Netherlands", "NL", "Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland" ], [ "New Caledonia", "NC", "Iles Loyaute|Nord|Sud" ], [ "New Zealand", "NZ", "Auckland (Tāmaki-makau-rau)~AUK|Bay of Plenty (Te Moana a Toi Te Huatahi)~BOP|Canterbury (Waitaha)~CAN|Hawke's Bay (Te Matau a Māui)~HKB|Manawatu-Wanganui (Manawatu Whanganui)~MWT|Northland (Te Tai tokerau)~NTL|Otago (Ō Tākou)~OTA|Southland (Murihiku)~STL|Taranaki (Taranaki)~TKI|Waikato~WKO|Wellington (Te Whanga-nui-a-Tara)~WGN|West Coast (Te Taihau ā uru)~WTC|Gisborne District (Tūranga nui a Kiwa)~GIS|Marlborough District~MBH|Nelson City (Whakatū)~NSN|Tasman District~TAS|Chatham Islands Territory (Wharekauri)~CIT" ], [ "Nicaragua", "NI", "Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS" ], [ "Niger", "NE", "Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillaberi|Zinder" ], [ "Nigeria", "NG", "Abia|Abuja Federal Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|no|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara" ], [ "Niue", "NU", "Niue" ], [ "Norfolk Island", "NF", "Norfolk Island" ], [ "Northern Mariana Islands", "MP", "Northern Islands|Rota|Saipan|Tinian" ], [ "Norway", "NO", "Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21" ], [ "Oman", "OM", "Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Masqat|Musandam|Zufar" ], [ "Pakistan", "PK", "Balochistan|Federally Administered Tribal Areas|Islamabad Capital Territory|North-West Frontier Province|Punjab|Sindh" ], [ "Palau", "PW", "Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Palau leliu|Sonsoral|Tobi" ], [ "Palestine, State of", "PS", "Palestine" ], [ "Panama", "PA", "Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|Panama|San Blas|Veraguas" ], [ "Papua New Guinea", "PG", "Bougainville|Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New orthern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands" ], [ "Paraguay", "PY", "Alto Paraguay|Alto Parana|Amambay|Asuncion (city)|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro" ], [ "Peru", "PE", "Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Lima|Loreto|Madre de egua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali" ], [ "Philippines", "PH", "Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan an|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines arines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La a Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro l|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva va Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon ino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur" ], [ "Pitcairn", "PN", "Pitcairn Islands" ], [ "Poland", "PL", "Dolnoslaskie|Kujawsko-|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-|Wielkopolskie|Zachodniopomorskie" ], [ "Portugal", "PT", "Acores (Azores)|Aveiro|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana o|Vila Real|Viseu" ], [ "Puerto Rico", "PR", "Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Cat|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabe|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las oiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana linas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega ues|Villalba|Yabucoa|Yauco" ], [ "Qatar", "QA", "Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal" ], [ "Réunion", "RE", "Réunion" ], [ "Romania", "RO", "Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Bucuresti|Buzau|Calarasi|Caras-luj|Constanta|Covasna|Dimbovita|Dolj|Galati|Giurgiu|Gorj|Harghita|Hunedoara|Ialomita|Iasi|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu u|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea" ], [ "Russian Federation", "RU", "Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr)|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran')|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nal'chik)|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Komi-Permyatskiy (Kudymkar)|Koryakskiy (Palana)|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)aya|Moskva (Moscow)|Murmanskaya|Nenetskiy (Nar'yan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Permskaya|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutsk)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Leningradskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropol'skiy|Sverdlovskaya (Yekaterinburg)aya|Tatarstan (Kazan')|Taymyrskiy (Dudinka)|Tomskaya|Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya|Ust'-Ordynskiy (Ust'-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya" ], [ "Rwanda", "RW", "Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05" ], [ "Saint Barthélemy", "BL", "Au Vent~02|Sous le Vent~01" ], [ "Saint Helena, Ascension and Tristan da Cunha", "SH", "Ascension|Saint Helena|Tristan da Cunha" ], [ "Saint Kitts and Nevis", "KN", "Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint ree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Point" ], [ "Saint Lucia", "LC", "Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros Islet|Laborie|Micoud|Praslin|Soufriere|Vieux Fort" ], [ "Saint Martin (French part)", "MF", "Saint Martin" ], [ "Saint Pierre and Miquelon", "PM", "Miquelon|Saint Pierre" ], [ "Saint Vincent and the Grenadines", "VC", "Charlotte~01|Grenadines~06|Saint~Andrew~02|Saint~David~03|Saint~George~04|Saint~Patrick~05" ], [ "Samoa", "WS", "A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS" ], [ "San Marino", "SM", "Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|San Marino|Serravalle" ], [ "Sao Tome and Principe", "ST", "Principe|Sao Tome" ], [ "Saudi Arabia", "SA", "'Asir|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Ha'il|Jizan|Makkah|Najran|Tabuk" ], [ "Senegal", "SN", "Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Saint-Louis|Tambacounda|Thies|Ziguinchor" ], [ "Serbia", "RS", "Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16" ], [ "Seychelles", "SC", "Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand' Anse |Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka" ], [ "Sierra Leone", "SL", "Eastern|Northern|Southern|Western" ], [ "Singapore", "SG", "Central Singapore~01|North East~02|North West~03|South East~04|South West~05" ], [ "Sint Maarten (Dutch part)", "SX", "Sint Maarten" ], [ "Slovakia", "SK", "Banskobystricky|Bratislavsky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky" ], [ "Slovenia", "SI", "Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-orisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna ola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska o|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubljana|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski e|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska ta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-ce|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri nica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob anj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje alec|Zavrc|Zelezniki|Ziri|Zrece" ], [ "Solomon Islands", "SB", "Bellona|Central|Choiseul (Lauru)|Guadalcanal|Honiara|Isabel|Makira|Malaita|Rennell|Temotu|Western" ], [ "Somalia", "SO", "Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha l|Togdheer|Woqooyi Galbeed" ], [ "South Africa", "ZA", "Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC" ], [ "South Georgia and South Sandwich Islands", "GS", "Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands" ], [ "South Sudan", "SS", "South Sudan" ], [ "Spain", "ES", "Albacete~CM|Alicante~VC|Almería~AN|Araba/Álava~VI|Asturias~O|Ávila~AV|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Cantabria~S|Castellón~CS|Cueta~CU|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarre~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z" ], [ "Sri Lanka", "LK", "Central|Eastern|North Central|North Eastern|North Western|Northern|Sabaragamuwa|Southern|Uva|Western" ], [ "Sudan", "SD", "A'ali an Nil|Al Bahr al Ahmar|Al Buhayrat|Al Jazirah|Al Khartum|Al Qadarif|Al Wahdah|An Nil al Abyad|An Nil al Azraq|Ash Shamaliyah|Bahr al rb al Istiwa'iyah|Gharb Bahr al Ghazal|Gharb Darfur|Gharb Kurdufan|Janub Darfur|Janub Kurdufan|Junqali|Kassala|Nahr an Nil|Shamal Bahr al amal Darfur|Shamal Kurdufan|Sharq al Istiwa'iyah|Sinnar|Warab" ], [ "Suriname", "SR", "Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica" ], [ "Svalbard and Jan Mayen", "SJ", "Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen" ], [ "Swaziland", "SZ", "Hhohho|Lubombo|Manzini|Shiselweni" ], [ "Sweden", "SE", "Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Stockholm|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands" ], [ "Switzerland", "CH", "Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Waadt~VD|Zug~ZG|Zürich~ZH" ], [ "Syrian Arab Republic", "SY", "Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda'|Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus" ], [ "Taiwan, Province of China", "TW", "Chang-hua|Chi-lung|Chia-i|Chia-i|Chung-hsing-hsin-ts'un|Hsin-chu|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Kao-hsiung|Miao-li|Nan-t'ou|P'eng-hu|P'ing--chung|T'ai-chung|T'ai-nan|T'ai-nan|T'ai-pei|T'ai-pei|T'ai-tung|T'ao-yuan|Yun-lin" ], [ "Tajikistan", "TJ", "Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon" ], [ "Tanzania, United Republic of", "TZ", "Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15" ], [ "Thailand", "TH", "Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng hanaburi|Khon Kaen|Krabi|Krung Thep Mahanakhon (Bangkok)|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon khon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum tani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri ng|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing ket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon" ], [ "Timor-Leste", "TL", "Timor-Leste" ], [ "Togo", "TG", "De La Kara|Des Plateaux|Des Savanes|Du Centre|Maritime" ], [ "Tokelau", "TK", "Atafu|Fakaofo|Nukunonu" ], [ "Tonga", "TO", "Ha'apai|Tongatapu|Vava'u" ], [ "Trinidad and Tobago", "TT", "Arima|Caroni|Mayaro|Nariva|Port-of-Spain|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Victoria|Tobago" ], [ "Tunisia", "TN", "Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou na|Sousse|Tataouine|Tozeur|Tunis|Zaghouan" ], [ "Turkey", "TR", "Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursae|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|IstanbKahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|NevsehOrdu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak" ], [ "Turkmenistan", "TM", "Ahal Welayaty|Balkan Welayaty|Dashhowuz Welayaty|Lebap Welayaty|Mary Welayaty" ], [ "Turks and Caicos Islands", "TC", "Turks and Caicos Islands" ], [ "Tuvalu", "TV", "Tuvalu" ], [ "Uganda", "UG", "Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313" ], [ "Ukraine", "UA", "Cherkasy~71|Chernihiv~74|Chernivtsi~77|Dnipropetrovsk~12|Donetsk~14|Ivano-Frankivsk~26|Kharkiv~63|Kherson~65|Khmelnytskyi~68|Kiev~32|Kirovohrad~35|Luhansk~09|Lviv~46|Mykolaiv~48|Odessa~51|Poltava~53|Rivne~56|Sumy~59|Ternopil~61|Vinnytsia~05|Volyn~07|Zakarpattia~21|Zaporizhia~23|Zhytomyr~18|Avtonomna Respublika Krym~43|Kyïv~30|Sevastopol~40" ], [ "United Arab Emirates", "AE", "Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ" ], [ "United Kingdom", "GB", "Avon~AVN|Bedfordshire~BDF|Berkshire~BRK|Bristol, City of~COB|Buckinghamshire~BKM|Cambridgeshire~CAM|Cheshire~CHS|Cleveland~CLV|Cornwall~CON|Cumbria~CMA|Derbyshire~DBY|Devon~DEV|Dorset~DOR|Durham~DUR|East Sussex~SXE|Essex~ESS|Gloucestershire~GLS|Greater London~LND|Greater Manchester~GTM|Hampshire (County of Southampton)~HAM|Hereford and Worcester~HWR|Herefordshire~HEF|Hertfordshire~HRT|Isle of Wight~IOW|Kent~KEN|Lancashire~LAN|Leicestershire~LEI|Lincolnshire~LIN|London~LDN|Merseyside~MSY|Middlesex~MDX|Norfolk~NFK|Northamptonshire~NTH|Northumberland~NBL|North Humberside~NHM|North Yorkshire~NYK|Nottinghamshire~NTT|Oxfordshire~OXF|Rutland~RUT|Shropshire~SAL|Somerset~SOM|South Humberside~SHM|South Yorkshire~SYK|Staffordshire~STS|Suffolk~SFK|Surrey~SRY|Tyne and Wear~TWR|Warwickshire~WAR|West Midlands~WMD|West Sussex~SXW|West Yorkshire~WYK|Wiltshire~WIL|Worcestershire~WOR|Antrim~ANT|Armagh~ARM|Belfast, City of~BLF|Down~DOW|Fermanagh~FER|Londonderry~LDY|Derry, City of~DRY|Tyrone~TYR|Aberdeen, City of~AN|Aberdeenshire~ABD|Angus (Forfarshire)~ANS|Argyll~AGB|Ayrshire~ARG|Banffshire~BAN|Berwickshire~BEW|Bute~BUT|Caithness~CAI|Clackmannanshire~CLK|Cromartyshire~COC|Dumfriesshire~DFS|Dunbartonshire (Dumbarton)~DNB|Dundee, City of~DD|East Lothian (Haddingtonshire)~ELN|Edinburgh, City of~EB|Fife~FIF|Glasgow, City of~GLA|Inverness-shire~INV|Kincardineshire~KCD|Kinross-shire~KRS|Kirkcudbrightshire~KKD|Lanarkshire~LKS|Midlothian (County of Edinburgh)~MLN|Moray (Elginshire)~MOR|Nairnshire~NAI|Orkney~OKI|Peeblesshire~PEE|Perthshire~PER|Renfrewshire~RFW|Ross and Cromarty~ROC|Ross-shire~ROS|Roxburghshire~ROX|Selkirkshire~SEL|Shetland (Zetland)~SHI|Stirlingshire~STI|Sutherland~SUT|West Lothian (Linlithgowshire)~WLN|Wigtownshire~WIG|Clwyd~CWD|Dyfed~DFD|Gwent~GNT|Gwynedd~GWN|Mid Glamorgan~MGM|Powys~POW|South Glamorgan~SGM|West Glamorgan~WGM" ], [ "United Kingdom Overseas Territories", "UO", "Anguilla|Bermuda|British Virgin Islands|Cayman Islands|Falkland Islands|Gibraltar|Montserrat|St Helena|Tristan Da Cunha|Turks & Caicos Islands" ], [ "United States", "US", "Alaska~AK|Alabama~AL|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP" ], [ "United States Minor Outlying Islands", "UM", "Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB" ], [ "Uruguay", "UY", "Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT" ], [ "Uzbekistan", "UZ", "Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR" ], [ "Vanuatu", "VU", "Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB" ], [ "Venezuela, Bolivarian Republic of", "VE", "Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V" ], [ "Viet Nam", "VN", "Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG" ], [ "Virgin Islands, British", "VG", "Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD" ], [ "Virgin Islands, U.S.", "VI", "St. Thomas~STH|St. John~SJO|St. Croix~SCR" ], [ "Wallis and Futuna", "WF", "Alo~ALO|Sigave~SIG|Wallis~WAL" ], [ "Western Sahara", "EH", "Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD" ], [ "Yemen", "YE", "Şan‘ā'~SA|Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA" ], [ "Zambia", "ZM", "Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Northern~05|North-Western~06|Southern~07|Western~01" ], [ "Zimbabwe", "ZW", "Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI" ] ], h = function() {
        $("." + a).each(i);
    }, i = function() {
        var a = this, c = a.getAttribute("data-crs-loaded");
        if ("true" !== c) {
            a.length = 0;
            var e = $(a).attr("data-default-option"), g = e ? e : b, h = a.getAttribute("data-show-default-option");
            d = null === h ? !0 : "true" === h;
            var i = $(a).attr("data-default-value"), l = $(a).attr("data-value"), o = 0;
            d && (this.options[0] = new Option(g, "")), k({
                whitelist: a.getAttribute("data-whitelist"),
                blacklist: a.getAttribute("data-blacklist")
            });
            for (var p = 0; p < f.length; p++) {
                var q = "shortcode" == l || "2-char" === l ? f[p][1] : f[p][0];
                a.options[a.length] = new Option(f[p][0], q), null != i && i === q && (o = p, d && o++);
            }
            this.selectedIndex = o;
            var r = $(a).attr("data-region-id");
            if (!r) return void console.error("Missing data-region-id on country-region-selector country field.");
            var s = $("#" + r)[0];
            if (s) if (j(s), $(this).on("change", function() {
                n(a, s);
            }), i && a.selectedIndex > 0) {
                n(a, s);
                var t = $(s).attr("data-default-value"), u = "shortcode" === s.getAttribute("data-value");
                if (null !== t) {
                    var v = f[a.selectedIndex - 1][3];
                    m(s, v, t, u);
                }
            } else d === !1 && n(a, s); else console.error("Region dropdown DOM node with ID " + r + " not found.");
            a.setAttribute("data-crs-loaded", "true");
        }
    }, j = function(a) {
        var b = $(a).attr("data-blank-option"), c = b ? b : "-", d = a.getAttribute("data-show-default-option");
        e = null === d ? !0 : "true" === d, a.length = 0, e && (a.options[0] = new Option(c, ""), 
        a.selectedIndex = 0);
    }, k = function(a) {
        var b = g, c = [], d = 0;
        if (a.whitelist) {
            var e = a.whitelist.split(",");
            for (d = 0; d < g.length; d++) -1 !== e.indexOf(g[d][1]) && c.push(g[d]);
            b = c;
        } else if (a.blacklist) {
            var h = a.blacklist.split(",");
            for (d = 0; d < g.length; d++) -1 === h.indexOf(g[d][1]) && c.push(g[d]);
            b = c;
        }
        f = b, l();
    }, l = function() {
        for (var a = 0; a < f.length; a++) {
            for (var b = {
                hasShortcodes: /~/.test(f[a][2]),
                regions: []
            }, c = f[a][2].split("|"), d = 0; d < c.length; d++) {
                var e = c[d].split("~");
                b.regions.push([ e[0], e[1] ]);
            }
            f[a][3] = b;
        }
    }, m = function(a, b, c, d) {
        for (var e = 0; e < b.regions.length; e++) {
            var f = d && b.hasShortcodes && b.regions[e][1] ? b.regions[e][1] : b.regions[e][0];
            if (f === c) {
                a.selectedIndex = e + 1;
                break;
            }
        }
    }, n = function(a, b) {
        var g = d ? a.selectedIndex - 1 : a.selectedIndex, h = $(b).attr("data-default-option"), i = b.getAttribute("data-value"), k = h ? h : c;
        if ("" === a.value) j(b); else {
            b.length = 0, e && (b.options[0] = new Option(k, ""));
            for (var l = f[g][3], m = 0; m < l.regions.length; m++) {
                var n = "shortcode" === i && l.hasShortcodes ? l.regions[m][1] : l.regions[m][0];
                b.options[b.length] = new Option(l.regions[m][0], n);
            }
            b.selectedIndex = 0;
        }
    };
    return $(h), {
        init: h
    };
});

/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function($) {
    $.flexslider = function(e, t) {
        var a = $(e);
        a.vars = $.extend({}, $.flexslider.defaults, t);
        var n = a.vars.namespace, i = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, s = ("ontouchstart" in window || i || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch, r = "click touchend MSPointerUp keyup", o = "", l, c = "vertical" === a.vars.direction, d = a.vars.reverse, u = a.vars.itemWidth > 0, v = "fade" === a.vars.animation, p = "" !== a.vars.asNavFor, m = {}, f = !0;
        $.data(e, "flexslider", a), m = {
            init: function() {
                a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), 
                isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, 
                a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = $(a.vars.selector, a), 
                a.container = $(a.containerSelector, a), a.count = a.slides.length, a.syncExists = $(a.vars.sync).length > 0, 
                "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", 
                a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, 
                a.transitions = !a.vars.video && !v && a.vars.useCSS && function() {
                    var e = document.createElement("div"), t = [ "perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective" ];
                    for (var n in t) if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), 
                    a.prop = "-" + a.pfx + "-transform", !0;
                    return !1;
                }(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = $(a.vars.controlsContainer).length > 0 && $(a.vars.controlsContainer)), 
                "" !== a.vars.manualControls && (a.manualControls = $(a.vars.manualControls).length > 0 && $(a.vars.manualControls)), 
                "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === $(a.vars.customDirectionNav).length && $(a.vars.customDirectionNav)), 
                a.vars.randomize && (a.slides.sort(function() {
                    return Math.round(Math.random()) - .5;
                }), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && m.controlNav.setup(), 
                a.vars.directionNav && m.directionNav.setup(), a.vars.keyboard && (1 === $(a.containerSelector).length || a.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!a.animating && (39 === t || 37 === t)) {
                        var n = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;
                        a.flexAnimate(n, a.vars.pauseOnAction);
                    }
                }), a.vars.mousewheel && a.bind("mousewheel", function(e, t, n, i) {
                    e.preventDefault();
                    var s = a.getTarget(0 > t ? "next" : "prev");
                    a.flexAnimate(s, a.vars.pauseOnAction);
                }), a.vars.pausePlay && m.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && m.pauseInvisible.init(), 
                a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() {
                    a.manualPlay || a.manualPause || a.pause();
                }, function() {
                    a.manualPause || a.manualPlay || a.stopped || a.play();
                }), a.vars.pauseInvisible && m.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), 
                p && m.asNav.setup(), s && a.vars.touch && m.touch(), (!v || v && a.vars.smoothHeight) && $(window).bind("resize orientationchange focus", m.resize), 
                a.find("img").attr("draggable", "false"), setTimeout(function() {
                    a.vars.start(a);
                }, 200);
            },
            asNav: {
                setup: function() {
                    a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, 
                    a.slides.removeClass(n + "active-slide").eq(a.currentItem).addClass(n + "active-slide"), 
                    i ? (e._slider = a, a.slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture(), e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
                        }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var t = $(this), n = t.index();
                            $(a.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", 
                            a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0));
                        });
                    })) : a.slides.on(r, function(e) {
                        e.preventDefault();
                        var t = $(this), i = t.index(), s = t.offset().left - $(a).scrollLeft();
                        0 >= s && t.hasClass(n + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : $(a.vars.asNavFor).data("flexslider").animating || t.hasClass(n + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", 
                        a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0));
                    });
                }
            },
            controlNav: {
                setup: function() {
                    a.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging();
                },
                setupPaging: function() {
                    var e = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging", t = 1, i, s;
                    if (a.controlNavScaffold = $('<ol class="' + n + "control-nav " + n + e + '"></ol>'), 
                    a.pagingCount > 1) for (var l = 0; l < a.pagingCount; l++) {
                        if (s = a.slides.eq(l), i = "thumbnails" === a.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"/>' : "<a>" + t + "</a>", 
                        "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
                            var c = s.attr("data-thumbcaption");
                            "" !== c && void 0 !== c && (i += '<span class="' + n + 'caption">' + c + "</span>");
                        }
                        a.controlNavScaffold.append("<li>" + i + "</li>"), t++;
                    }
                    a.controlsContainer ? $(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), 
                    m.controlNav.set(), m.controlNav.active(), a.controlNavScaffold.delegate("a, img", r, function(e) {
                        if (e.preventDefault(), "" === o || o === e.type) {
                            var t = $(this), i = a.controlNav.index(t);
                            t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", 
                            a.flexAnimate(i, a.vars.pauseOnAction));
                        }
                        "" === o && (o = e.type), m.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    a.controlNav = a.manualControls, m.controlNav.active(), a.controlNav.bind(r, function(e) {
                        if (e.preventDefault(), "" === o || o === e.type) {
                            var t = $(this), i = a.controlNav.index(t);
                            t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", 
                            a.flexAnimate(i, a.vars.pauseOnAction));
                        }
                        "" === o && (o = e.type), m.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var e = "thumbnails" === a.vars.controlNav ? "img" : "a";
                    a.controlNav = $("." + n + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a);
                },
                active: function() {
                    a.controlNav.removeClass(n + "active").eq(a.animatingTo).addClass(n + "active");
                },
                update: function(e, t) {
                    a.pagingCount > 1 && "add" === e ? a.controlNavScaffold.append($("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(t).closest("li").remove(), 
                    m.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(t, e) : m.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var e = $('<ul class="' + n + 'direction-nav"><li class="' + n + 'nav-prev"><a class="' + n + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + n + 'nav-next"><a class="' + n + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
                    a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? ($(a.controlsContainer).append(e), 
                    a.directionNav = $("." + n + "direction-nav li a", a.controlsContainer)) : (a.append(e), 
                    a.directionNav = $("." + n + "direction-nav li a", a)), m.directionNav.update(), 
                    a.directionNav.bind(r, function(e) {
                        e.preventDefault();
                        var t;
                        ("" === o || o === e.type) && (t = a.getTarget($(this).hasClass(n + "next") ? "next" : "prev"), 
                        a.flexAnimate(t, a.vars.pauseOnAction)), "" === o && (o = e.type), m.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var e = n + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + n + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + n + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex");
                }
            },
            pausePlay: {
                setup: function() {
                    var e = $('<div class="' + n + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(e), a.pausePlay = $("." + n + "pauseplay a", a.controlsContainer)) : (a.append(e), 
                    a.pausePlay = $("." + n + "pauseplay a", a)), m.pausePlay.update(a.vars.slideshow ? n + "pause" : n + "play"), 
                    a.pausePlay.bind(r, function(e) {
                        e.preventDefault(), ("" === o || o === e.type) && ($(this).hasClass(n + "pause") ? (a.manualPause = !0, 
                        a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), 
                        "" === o && (o = e.type), m.setToClearWatchedEvent();
                    });
                },
                update: function(e) {
                    "play" === e ? a.pausePlay.removeClass(n + "pause").addClass(n + "play").html(a.vars.playText) : a.pausePlay.removeClass(n + "play").addClass(n + "pause").html(a.vars.pauseText);
                }
            },
            touch: function() {
                function t(t) {
                    t.stopPropagation(), a.animating ? t.preventDefault() : (a.pause(), e._gesture.addPointer(t.pointerId), 
                    w = 0, p = c ? a.h : a.w, f = Number(new Date()), l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p);
                }
                function n(t) {
                    t.stopPropagation();
                    var a = t.target._slider;
                    if (a) {
                        var n = -t.translationX, i = -t.translationY;
                        return w += c ? i : n, m = w, y = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), 
                        t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            e._gesture.stop();
                        }) : void ((!y || Number(new Date()) - f > 500) && (t.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / p + 2 : 1)), 
                        a.setProps(l + m, "setTouch"))));
                    }
                }
                function s(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !y && null !== m) {
                            var a = d ? -m : m, n = t.getTarget(a > 0 ? "next" : "prev");
                            t.canAdvance(n) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > p / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : v || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
                        }
                        r = null, o = null, m = null, l = null, w = 0;
                    }
                }
                var r, o, l, p, m, f, g, h, S, y = !1, x = 0, b = 0, w = 0;
                i ? (e.style.msTouchAction = "none", e._gesture = new MSGesture(), e._gesture.target = e, 
                e.addEventListener("MSPointerDown", t, !1), e._slider = a, e.addEventListener("MSGestureChange", n, !1), 
                e.addEventListener("MSGestureEnd", s, !1)) : (g = function(t) {
                    a.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (a.pause(), 
                    p = c ? a.h : a.w, f = Number(new Date()), x = t.touches[0].pageX, b = t.touches[0].pageY, 
                    l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p, 
                    r = c ? b : x, o = c ? x : b, e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", S, !1));
                }, h = function(e) {
                    x = e.touches[0].pageX, b = e.touches[0].pageY, m = c ? r - b : r - x, y = c ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!y || Number(new Date()) - f > t) && (e.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m /= 0 === a.currentSlide && 0 > m || a.currentSlide === a.last && m > 0 ? Math.abs(m) / p + 2 : 1), 
                    a.setProps(l + m, "setTouch")));
                }, S = function(t) {
                    if (e.removeEventListener("touchmove", h, !1), a.animatingTo === a.currentSlide && !y && null !== m) {
                        var n = d ? -m : m, i = a.getTarget(n > 0 ? "next" : "prev");
                        a.canAdvance(i) && (Number(new Date()) - f < 550 && Math.abs(n) > 50 || Math.abs(n) > p / 2) ? a.flexAnimate(i, a.vars.pauseOnAction) : v || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0);
                    }
                    e.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null;
                }, e.addEventListener("touchstart", g, !1));
            },
            resize: function() {
                !a.animating && a.is(":visible") && (u || a.doMath(), v ? m.smoothHeight() : u ? (a.slides.width(a.computedW), 
                a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && m.smoothHeight(), 
                a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")));
            },
            smoothHeight: function(e) {
                if (!c || v) {
                    var t = v ? a : a.viewport;
                    e ? t.animate({
                        height: a.slides.eq(a.animatingTo).height()
                    }, e) : t.height(a.slides.eq(a.animatingTo).height());
                }
            },
            sync: function(e) {
                var t = $(a.vars.sync).data("flexslider"), n = a.animatingTo;
                switch (e) {
                  case "animate":
                    t.flexAnimate(n, a.vars.pauseOnAction, !1, !0);
                    break;

                  case "play":
                    t.playing || t.asNav || t.play();
                    break;

                  case "pause":
                    t.pause();
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone");
                }), e;
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = m.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() {
                            m.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play();
                        });
                    }
                },
                isHidden: function() {
                    var e = m.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1;
                },
                getHiddenProp: function() {
                    var e = [ "webkit", "moz", "ms", "o" ];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(l), l = setTimeout(function() {
                    o = "";
                }, 3e3);
            }
        }, a.flexAnimate = function(e, t, i, r, o) {
            if (a.vars.animationLoop || e === a.currentSlide || (a.direction = e > a.currentSlide ? "next" : "prev"), 
            p && 1 === a.pagingCount && (a.direction = a.currentItem < e ? "next" : "prev"), 
            !a.animating && (a.canAdvance(e, o) || i) && a.is(":visible")) {
                if (p && r) {
                    var l = $(a.vars.asNavFor).data("flexslider");
                    if (a.atEnd = 0 === e || e === a.count - 1, l.flexAnimate(e, !0, !1, !0, o), a.direction = a.currentItem < e ? "next" : "prev", 
                    l.direction = a.direction, Math.ceil((e + 1) / a.visible) - 1 === a.currentSlide || 0 === e) return a.currentItem = e, 
                    a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), !1;
                    a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), 
                    e = Math.floor(e / a.visible);
                }
                if (a.animating = !0, a.animatingTo = e, t && a.pause(), a.vars.before(a), a.syncExists && !o && m.sync("animate"), 
                a.vars.controlNav && m.controlNav.active(), u || a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), 
                a.atEnd = 0 === e || e === a.last, a.vars.directionNav && m.directionNav.update(), 
                e === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), v) s ? (a.slides.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), a.wrapup(f)) : (a.slides.eq(a.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, a.vars.animationSpeed, a.vars.easing), a.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, a.vars.animationSpeed, a.vars.easing, a.wrapup)); else {
                    var f = c ? a.slides.filter(":first").height() : a.computedW, g, h, S;
                    u ? (g = a.vars.itemMargin, S = (a.itemW + g) * a.move * a.animatingTo, h = S > a.limit && 1 !== a.visible ? a.limit : S) : h = 0 === a.currentSlide && e === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * f : 0 : a.currentSlide === a.last && 0 === e && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * f : d ? (a.count - 1 - e + a.cloneOffset) * f : (e + a.cloneOffset) * f, 
                    a.setProps(h, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, 
                    a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), 
                    a.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(a.ensureAnimationEnd), a.wrapup(f);
                    }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function() {
                        a.wrapup(f);
                    }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
                        a.wrapup(f);
                    });
                }
                a.vars.smoothHeight && m.smoothHeight(a.vars.animationSpeed);
            }
        }, a.wrapup = function(e) {
            v || u || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), 
            a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a);
        }, a.animateSlides = function() {
            !a.animating && f && a.flexAnimate(a.getTarget("next"));
        }, a.pause = function() {
            clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && m.pausePlay.update("play"), 
            a.syncExists && m.sync("pause");
        }, a.play = function() {
            a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), 
            a.started = a.playing = !0, a.vars.pausePlay && m.pausePlay.update("pause"), a.syncExists && m.sync("play");
        }, a.stop = function() {
            a.pause(), a.stopped = !0;
        }, a.canAdvance = function(e, t) {
            var n = p ? a.pagingCount - 1 : a.last;
            return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === n && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === n && 0 === e && "next" === a.direction ? !1 : !0 : !1;
        }, a.getTarget = function(e) {
            return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1;
        }, a.setProps = function(e, t, n) {
            var i = function() {
                var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo, i = function() {
                    if (u) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;
                    switch (t) {
                      case "setTotal":
                        return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;

                      case "setTouch":
                        return d ? e : e;

                      case "jumpEnd":
                        return d ? e : a.count * e;

                      case "jumpStart":
                        return d ? a.count * e : e;

                      default:
                        return e;
                    }
                }();
                return -1 * i + "px";
            }();
            a.transitions && (i = c ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", 
            n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), 
            a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), 
            a.container.css("transform", i);
        }, a.setup = function(e) {
            if (v) a.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (s ? a.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == a.vars.fadeFirstSlide ? a.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(a.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : a.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(a.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && m.smoothHeight(); else {
                var t, i;
                "init" === e && (a.viewport = $('<div class="' + n + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (i = $.makeArray(a.slides).reverse(), 
                a.slides = $(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !u && (a.cloneCount = 2, 
                a.cloneOffset = 1, "init" !== e && a.container.find(".clone").remove(), a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), 
                a.newSlides = $(a.vars.selector, a), t = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, 
                c && !u ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), 
                setTimeout(function() {
                    a.newSlides.css({
                        display: "block"
                    }), a.doMath(), a.viewport.height(a.h), a.setProps(t * a.h, "init");
                }, "init" === e ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), 
                a.setProps(t * a.computedW, "init"), setTimeout(function() {
                    a.doMath(), a.newSlides.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    }), a.vars.smoothHeight && m.smoothHeight();
                }, "init" === e ? 100 : 0));
            }
            u || a.slides.removeClass(n + "active-slide").eq(a.currentSlide).addClass(n + "active-slide"), 
            a.vars.init(a);
        }, a.doMath = function() {
            var e = a.slides.first(), t = a.vars.itemMargin, n = a.vars.minItems, i = a.vars.maxItems;
            a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), 
            a.boxPadding = e.outerWidth() - e.width(), u ? (a.itemT = a.vars.itemWidth + t, 
            a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, 
            a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, 
            a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, 
            a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, 
            a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding;
        }, a.update = function(e, t) {
            a.doMath(), u || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), 
            a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !u || a.pagingCount > a.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !u || a.pagingCount < a.controlNav.length) && (u && a.currentSlide > a.last && (a.currentSlide -= 1, 
            a.animatingTo -= 1), m.controlNav.update("remove", a.last))), a.vars.directionNav && m.directionNav.update();
        }, a.addSlide = function(e, t) {
            var n = $(e);
            a.count += 1, a.last = a.count - 1, c && d ? void 0 !== t ? a.slides.eq(a.count - t).after(n) : a.container.prepend(n) : void 0 !== t ? a.slides.eq(t).before(n) : a.container.append(n), 
            a.update(t, "add"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), 
            a.vars.added(a);
        }, a.removeSlide = function(e) {
            var t = isNaN(e) ? a.slides.index($(e)) : e;
            a.count -= 1, a.last = a.count - 1, isNaN(e) ? $(e, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove(), 
            a.doMath(), a.update(t, "remove"), a.slides = $(a.vars.selector + ":not(.clone)", a), 
            a.setup(), a.vars.removed(a);
        }, m.init();
    }, $(window).blur(function(e) {
        focused = !1;
    }).focus(function(e) {
        focused = !0;
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, $.fn.flexslider = function(e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
            var t = $(this), a = e.selector ? e.selector : ".slides > li", n = t.find(a);
            1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e);
        });
        var t = $(this).data("flexslider");
        switch (e) {
          case "play":
            t.play();
            break;

          case "pause":
            t.pause();
            break;

          case "stop":
            t.stop();
            break;

          case "next":
            t.flexAnimate(t.getTarget("next"), !0);
            break;

          case "prev":
          case "previous":
            t.flexAnimate(t.getTarget("prev"), !0);
            break;

          default:
            "number" == typeof e && t.flexAnimate(e, !0);
        }
    };
}(jQuery);

!function(a, b) {
    "function" == typeof define && define.amd ? define([ "jquery" ], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery);
}(this, function(a) {
    "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b();
    });
    var b = {
        init: function(b) {
            return this.options = a.extend({}, a.noty.defaults, b), this.options.layout = this.options.custom ? a.noty.layouts.inline : a.noty.layouts[this.options.layout], 
            a.noty.themes[this.options.theme] ? this.options.theme = a.noty.themes[this.options.theme] : b.themeClassName = this.options.theme, 
            delete b.layout, delete b.theme, this.options = a.extend({}, this.options, this.options.layout.options), 
            this.options.id = "noty_" + new Date().getTime() * Math.floor(1e6 * Math.random()), 
            this.options = a.extend({}, this.options, b), this._build(), this;
        },
        _build: function() {
            var b = a('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            if (b.append(this.options.template).find(".noty_text").html(this.options.text), 
            this.$bar = null !== this.options.layout.parent.object ? a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b) : b, 
            this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type), 
            this.options.buttons) {
                this.options.closeWith = [], this.options.timeout = !1;
                var c = a("<div/>").addClass("noty_buttons");
                null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(c) : this.$bar.append(c);
                var d = this;
                a.each(this.options.buttons, function(b, c) {
                    var e = a("<button/>").addClass(c.addClass ? c.addClass : "gray").html(c.text).attr("id", c.id ? c.id : "button-" + b).attr("title", c.title).appendTo(d.$bar.find(".noty_buttons")).on("click", function(b) {
                        a.isFunction(c.onClick) && c.onClick.call(e, d, b);
                    });
                });
            }
            this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), 
            this.$buttons = this.$bar.find(".noty_buttons"), a.noty.store[this.options.id] = this;
        },
        show: function() {
            var b = this;
            return b.options.custom ? b.options.custom.find(b.options.layout.container.selector).append(b.$bar) : a(b.options.layout.container.selector).append(b.$bar), 
            b.options.theme && b.options.theme.style && b.options.theme.style.apply(b), "function" === a.type(b.options.layout.css) ? this.options.layout.css.apply(b.$bar) : b.$bar.css(this.options.layout.css || {}), 
            b.$bar.addClass(b.options.layout.addClass), b.options.layout.container.style.apply(a(b.options.layout.container.selector), [ b.options.within ]), 
            b.showing = !0, b.options.theme && b.options.theme.style && b.options.theme.callback.onShow.apply(this), 
            a.inArray("click", b.options.closeWith) > -1 && b.$bar.css("cursor", "pointer").one("click", function(a) {
                b.stopPropagation(a), b.options.callback.onCloseClick && b.options.callback.onCloseClick.apply(b), 
                b.close();
            }), a.inArray("hover", b.options.closeWith) > -1 && b.$bar.one("mouseenter", function() {
                b.close();
            }), a.inArray("button", b.options.closeWith) > -1 && b.$closeButton.one("click", function(a) {
                b.stopPropagation(a), b.close();
            }), -1 == a.inArray("button", b.options.closeWith) && b.$closeButton.remove(), b.options.callback.onShow && b.options.callback.onShow.apply(b), 
            "string" == typeof b.options.animation.open ? (b.$bar.css("height", b.$bar.innerHeight()), 
            b.$bar.on("click", function(a) {
                b.wasClicked = !0;
            }), b.$bar.show().addClass(b.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                b.options.callback.afterShow && b.options.callback.afterShow.apply(b), b.showing = !1, 
                b.shown = !0, b.hasOwnProperty("wasClicked") && (b.$bar.off("click", function(a) {
                    b.wasClicked = !0;
                }), b.close());
            })) : b.$bar.animate(b.options.animation.open, b.options.animation.speed, b.options.animation.easing, function() {
                b.options.callback.afterShow && b.options.callback.afterShow.apply(b), b.showing = !1, 
                b.shown = !0;
            }), b.options.timeout && b.$bar.delay(b.options.timeout).promise().done(function() {
                b.close();
            }), this;
        },
        close: function() {
            if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                var b = this;
                if (this.showing) return void b.$bar.queue(function() {
                    b.close.apply(b);
                });
                if (!this.shown && !this.showing) {
                    var c = [];
                    return a.each(a.noty.queue, function(a, d) {
                        d.options.id != b.options.id && c.push(d);
                    }), void (a.noty.queue = c);
                }
                b.$bar.addClass("i-am-closing-now"), b.options.callback.onClose && b.options.callback.onClose.apply(b), 
                "string" == typeof b.options.animation.close ? b.$bar.addClass(b.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    b.options.callback.afterClose && b.options.callback.afterClose.apply(b), b.closeCleanUp();
                }) : b.$bar.clearQueue().stop().animate(b.options.animation.close, b.options.animation.speed, b.options.animation.easing, function() {
                    b.options.callback.afterClose && b.options.callback.afterClose.apply(b);
                }).promise().done(function() {
                    b.closeCleanUp();
                });
            }
        },
        closeCleanUp: function() {
            var b = this;
            b.options.modal && (a.notyRenderer.setModalCount(-1), 0 == a.notyRenderer.getModalCount() && a(".noty_modal").fadeOut(b.options.animation.fadeSpeed, function() {
                a(this).remove();
            })), a.notyRenderer.setLayoutCountFor(b, -1), 0 == a.notyRenderer.getLayoutCountFor(b) && a(b.options.layout.container.selector).remove(), 
            "undefined" != typeof b.$bar && null !== b.$bar && ("string" == typeof b.options.animation.close ? (b.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0), 
            b.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                b.$bar.remove(), b.$bar = null, b.closed = !0, b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b);
            })) : (b.$bar.remove(), b.$bar = null, b.closed = !0)), delete a.noty.store[b.options.id], 
            b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b), 
            b.options.dismissQueue || (a.noty.ontap = !0, a.notyRenderer.render()), b.options.maxVisible > 0 && b.options.dismissQueue && a.notyRenderer.render();
        },
        setText: function(a) {
            return this.closed || (this.options.text = a, this.$bar.find(".noty_text").html(a)), 
            this;
        },
        setType: function(a) {
            return this.closed || (this.options.type = a, this.options.theme.style.apply(this), 
            this.options.theme.callback.onShow.apply(this)), this;
        },
        setTimeout: function(a) {
            if (!this.closed) {
                var b = this;
                this.options.timeout = a, b.$bar.delay(b.options.timeout).promise().done(function() {
                    b.close();
                });
            }
            return this;
        },
        stopPropagation: function(a) {
            a = a || window.event, "undefined" != typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
        },
        closed: !1,
        showing: !1,
        shown: !1
    };
    a.notyRenderer = {}, a.notyRenderer.init = function(c) {
        var d = Object.create(b).init(c);
        return d.options.killer && a.noty.closeAll(), d.options.force ? a.noty.queue.unshift(d) : a.noty.queue.push(d), 
        a.notyRenderer.render(), "object" == a.noty.returns ? d : d.options.id;
    }, a.notyRenderer.render = function() {
        var b = a.noty.queue[0];
        "object" === a.type(b) ? b.options.dismissQueue ? b.options.maxVisible > 0 ? a(b.options.layout.container.selector + " > li").length < b.options.maxVisible && a.notyRenderer.show(a.noty.queue.shift()) : a.notyRenderer.show(a.noty.queue.shift()) : a.noty.ontap && (a.notyRenderer.show(a.noty.queue.shift()), 
        a.noty.ontap = !1) : a.noty.ontap = !0;
    }, a.notyRenderer.show = function(b) {
        b.options.modal && (a.notyRenderer.createModalFor(b), a.notyRenderer.setModalCount(1)), 
        b.options.custom ? 0 == b.options.custom.find(b.options.layout.container.selector).length ? b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")) : b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new") : 0 == a(b.options.layout.container.selector).length ? a("body").append(a(b.options.layout.container.object).addClass("i-am-new")) : a(b.options.layout.container.selector).removeClass("i-am-new"), 
        a.notyRenderer.setLayoutCountFor(b, 1), b.show();
    }, a.notyRenderer.createModalFor = function(b) {
        if (0 == a(".noty_modal").length) {
            var c = a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count", 0);
            b.options.theme.modal && b.options.theme.modal.css && c.css(b.options.theme.modal.css), 
            c.prependTo(a("body")).fadeIn(b.options.animation.fadeSpeed), a.inArray("backdrop", b.options.closeWith) > -1 && c.on("click", function(b) {
                a.noty.closeAll();
            });
        }
    }, a.notyRenderer.getLayoutCountFor = function(b) {
        return a(b.options.layout.container.selector).data("noty_layout_count") || 0;
    }, a.notyRenderer.setLayoutCountFor = function(b, c) {
        return a(b.options.layout.container.selector).data("noty_layout_count", a.notyRenderer.getLayoutCountFor(b) + c);
    }, a.notyRenderer.getModalCount = function() {
        return a(".noty_modal").data("noty_modal_count") || 0;
    }, a.notyRenderer.setModalCount = function(b) {
        return a(".noty_modal").data("noty_modal_count", a.notyRenderer.getModalCount() + b);
    }, a.fn.noty = function(b) {
        return b.custom = a(this), a.notyRenderer.init(b);
    }, a.noty = {}, a.noty.queue = [], a.noty.ontap = !0, a.noty.layouts = {}, a.noty.themes = {}, 
    a.noty.returns = "object", a.noty.store = {}, a.noty.get = function(b) {
        return a.noty.store.hasOwnProperty(b) ? a.noty.store[b] : !1;
    }, a.noty.close = function(b) {
        return a.noty.get(b) ? a.noty.get(b).close() : !1;
    }, a.noty.setText = function(b, c) {
        return a.noty.get(b) ? a.noty.get(b).setText(c) : !1;
    }, a.noty.setType = function(b, c) {
        return a.noty.get(b) ? a.noty.get(b).setType(c) : !1;
    }, a.noty.clearQueue = function() {
        a.noty.queue = [];
    }, a.noty.closeAll = function() {
        a.noty.clearQueue(), a.each(a.noty.store, function(a, b) {
            b.close();
        });
    };
    var c = window.alert;
    return a.noty.consumeAlert = function(b) {
        window.alert = function(c) {
            b ? b.text = c : b = {
                text: c
            }, a.notyRenderer.init(b);
        };
    }, a.noty.stopConsumeAlert = function() {
        window.alert = c;
    }, a.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500,
            fadeSpeed: "fast"
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: [ "click" ],
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: !1
    }, a(window).on("resize", function() {
        a.each(a.noty.layouts, function(b, c) {
            c.container.style.apply(a(c.container.selector));
        });
    }), window.noty = function(b) {
        return a.notyRenderer.init(b);
    }, a.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function() {
                a(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, a.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && a(this).css({
                    left: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function() {
                a(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && a(this).css({
                    right: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function() {
                a(this).css({
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                var c = b.height();
                b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                    top: (a(window).height() - c) / 2 + "px"
                }, 500);
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function() {
                a(this).css({
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                var c = b.height();
                b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    top: (a(window).height() - c) / 2 + "px"
                }, 500), window.innerWidth < 600 && a(this).css({
                    left: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function() {
                a(this).css({
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var b = a(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                a("body").append(b), b.find(".i-am-closing-now").remove(), b.find("li").css("display", "block");
                var c = b.height();
                b.remove(), a(this).hasClass("i-am-new") ? a(this).css({
                    top: (a(window).height() - c) / 2 + "px"
                }) : a(this).animate({
                    top: (a(window).height() - c) / 2 + "px"
                }, 500), window.innerWidth < 600 && a(this).css({
                    right: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function() {
                a(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, a.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function() {
                a(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }, a.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), a(this).css({
                    left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && a(this).css({
                    left: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function() {
                a(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), window.innerWidth < 600 && a(this).css({
                    right: 5
                });
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    }, a.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            var b = this.options.layout.container.selector;
            switch (a(b).addClass("list-group"), this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'), 
            this.$closeButton.addClass("close"), this.$bar.addClass("list-group-item").css("padding", "0px"), 
            this.options.type) {
              case "alert":
              case "notification":
                this.$bar.addClass("list-group-item-info");
                break;

              case "warning":
                this.$bar.addClass("list-group-item-warning");
                break;

              case "error":
                this.$bar.addClass("list-group-item-danger");
                break;

              case "information":
                this.$bar.addClass("list-group-item-info");
                break;

              case "success":
                this.$bar.addClass("list-group-item-success");
            }
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            });
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    }, a.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function() {
                if (this.options.dismissQueue) {
                    var b = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                      case "top":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }), a(b).last().css({
                            borderRadius: "0px 0px 5px 5px"
                        });
                        break;

                      case "topCenter":
                      case "topLeft":
                      case "topRight":
                      case "bottomCenter":
                      case "bottomLeft":
                      case "bottomRight":
                      case "center":
                      case "centerLeft":
                      case "centerRight":
                      case "inline":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }), a(b).first().css({
                            "border-top-left-radius": "5px",
                            "border-top-right-radius": "5px"
                        }), a(b).last().css({
                            "border-bottom-left-radius": "5px",
                            "border-bottom-right-radius": "5px"
                        });
                        break;

                      case "bottom":
                        a(b).css({
                            borderRadius: "0px 0px 0px 0px"
                        }), a(b).first().css({
                            borderRadius: "5px 5px 0px 0px"
                        });
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            }), this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            }), this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }), this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }), this.$buttons.find("button").css({
                marginLeft: 5
            }), this.$buttons.find("button:first").css({
                marginLeft: 0
            }), this.$bar.on({
                mouseenter: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 1);
                },
                mouseleave: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 0);
                }
            }), this.options.layout.name) {
              case "top":
                this.$bar.css({
                    borderRadius: "0px 0px 5px 5px",
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;

              case "topCenter":
              case "center":
              case "bottomCenter":
              case "inline":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }), this.$message.css({
                    fontSize: "13px",
                    textAlign: "center"
                });
                break;

              case "topLeft":
              case "topRight":
              case "bottomLeft":
              case "bottomRight":
              case "centerLeft":
              case "centerRight":
                this.$bar.css({
                    borderRadius: "5px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }), this.$message.css({
                    fontSize: "13px",
                    textAlign: "left"
                });
                break;

              case "bottom":
                this.$bar.css({
                    borderRadius: "5px 5px 0px 0px",
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;

              default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
            }
            switch (this.options.type) {
              case "alert":
              case "notification":
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
                break;

              case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }), this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;

              case "error":
                this.$bar.css({
                    backgroundColor: "red",
                    borderColor: "darkred",
                    color: "#FFF"
                }), this.$message.css({
                    fontWeight: "bold"
                }), this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;

              case "information":
                this.$bar.css({
                    backgroundColor: "#57B7E2",
                    borderColor: "#0B90C4",
                    color: "#FFF"
                }), this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;

              case "success":
                this.$bar.css({
                    backgroundColor: "lightgreen",
                    borderColor: "#50C24E",
                    color: "darkgreen"
                }), this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                });
                break;

              default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
            }
        },
        callback: {
            onShow: function() {
                a.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            },
            onClose: function() {
                a.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            }
        }
    }, a.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px"
            }), this.$message.css({
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            }), this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }), this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }), this.$buttons.find("button").css({
                marginLeft: 5
            }), this.$buttons.find("button:first").css({
                marginLeft: 0
            }), this.$bar.on({
                mouseenter: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 1);
                },
                mouseleave: function() {
                    a(this).find(".noty_close").stop().fadeTo("normal", 0);
                }
            }), this.options.layout.name) {
              case "top":
                this.$bar.css({
                    borderBottom: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderTop: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;

              case "topCenter":
              case "center":
              case "bottomCenter":
              case "inline":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }), this.$message.css({
                    fontSize: "13px",
                    textAlign: "center"
                });
                break;

              case "topLeft":
              case "topRight":
              case "bottomLeft":
              case "bottomRight":
              case "centerLeft":
              case "centerRight":
                this.$bar.css({
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }), this.$message.css({
                    fontSize: "13px",
                    textAlign: "left"
                });
                break;

              case "bottom":
                this.$bar.css({
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    borderBottom: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;

              default:
                this.$bar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
            }
            switch (this.options.type) {
              case "alert":
              case "notification":
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#dedede",
                    color: "#444"
                });
                break;

              case "warning":
                this.$bar.css({
                    backgroundColor: "#FFEAA8",
                    borderColor: "#FFC237",
                    color: "#826200"
                }), this.$buttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;

              case "error":
                this.$bar.css({
                    backgroundColor: "#FF8181",
                    borderColor: "#e25353",
                    color: "#FFF"
                }), this.$message.css({
                    fontWeight: "bold"
                }), this.$buttons.css({
                    borderTop: "1px solid darkred"
                });
                break;

              case "information":
                this.$bar.css({
                    backgroundColor: "#78C5E7",
                    borderColor: "#3badd6",
                    color: "#FFF"
                }), this.$buttons.css({
                    borderTop: "1px solid #0B90C4"
                });
                break;

              case "success":
                this.$bar.css({
                    backgroundColor: "#BCF5BC",
                    borderColor: "#7cdd77",
                    color: "darkgreen"
                }), this.$buttons.css({
                    borderTop: "1px solid #50C24E"
                });
                break;

              default:
                this.$bar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
            }
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    }, window.noty;
});

/**
 * Created by IntelliJ IDEA.
 *
 * User: phil
 * Date: 15/11/12
 * Time: 11:04 AM
 *
 */
(function($) {
    var self = this, container, running = false, currentY = 0, targetY = 0, oldY = 0, maxScrollTop = 0, minScrollTop, direction, onRenderCallback = null, fricton = .95, // higher value for slower deceleration
    vy = 0, stepAmt = 1, minMovement = .1, ts = .1;
    var updateScrollTarget = function(amt) {
        targetY += amt;
        vy += (targetY - oldY) * stepAmt;
        oldY = targetY;
    };
    var render = function() {
        if (vy < -minMovement || vy > minMovement) {
            currentY = currentY + vy;
            if (currentY > maxScrollTop) {
                currentY = vy = 0;
            } else if (currentY < minScrollTop) {
                vy = 0;
                currentY = minScrollTop;
            }
            container.scrollTop(-currentY);
            vy *= fricton;
            //   vy += ts * (currentY-targetY);
            // scrollTopTweened += settings.tweenSpeed * (scrollTop - scrollTopTweened);
            // currentY += ts * (targetY - currentY);
            if (onRenderCallback) {
                onRenderCallback();
            }
        }
    };
    var animateLoop = function() {
        if (!running) return;
        requestAnimFrame(animateLoop);
        render();
    };
    var onWheel = function(e) {
        e.preventDefault();
        var evt = e.originalEvent;
        var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
        var dir = delta < 0 ? -1 : 1;
        if (dir != direction) {
            vy = 0;
            direction = dir;
        }
        //reset currentY in case non-wheel scroll has occurred (scrollbar drag, etc.)
        currentY = -container.scrollTop();
        updateScrollTarget(delta);
    };
    /*
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     */
    window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1e3 / 60);
        };
    }();
    /*
     * http://jsbin.com/iqafek/2/edit
     */
    var normalizeWheelDelta = function() {
        // Keep a distribution of observed values, and scale by the
        // 33rd percentile.
        var distribution = [], done = null, scale = 30;
        return function(n) {
            // Zeroes don't count.
            if (n == 0) return n;
            // After 500 samples, we stop sampling and keep current factor.
            if (done != null) return n * done;
            var abs = Math.abs(n);
            // Insert value (sorted in ascending order).
            outer: do {
                // Just used for break goto
                for (var i = 0; i < distribution.length; ++i) {
                    if (abs <= distribution[i]) {
                        distribution.splice(i, 0, abs);
                        break outer;
                    }
                }
                distribution.push(abs);
            } while (false);
            // Factor is scale divided by 33rd percentile.
            var factor = scale / distribution[Math.floor(distribution.length / 3)];
            if (distribution.length == 500) done = factor;
            return n * factor;
        };
    }();
    $.fn.smoothWheel = function() {
        //  var args = [].splice.call(arguments, 0);
        var options = jQuery.extend({}, arguments[0]);
        return this.each(function(index, elm) {
            if (!("ontouchstart" in window)) {
                container = $(this);
                container.bind("mousewheel", onWheel);
                container.bind("DOMMouseScroll", onWheel);
                //set target/old/current Y to match current scroll position to prevent jump to top of container
                targetY = oldY = container.get(0).scrollTop;
                currentY = -targetY;
                minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
                if (options.onRender) {
                    onRenderCallback = options.onRender;
                }
                if (options.remove) {
                    log("122", "smoothWheel", "remove", "");
                    running = false;
                    container.unbind("mousewheel", onWheel);
                    container.unbind("DOMMouseScroll", onWheel);
                } else if (!running) {
                    running = true;
                    animateLoop();
                }
            }
        });
    };
})(jQuery);

/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JÃ¶rn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery);
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), 
            a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), 
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), 
                    e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), 
                    void 0 !== e ? e : !1) : !0;
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, 
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), 
                !1);
            })), c);
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), 
            this.each(function() {
                b = c.element(this) && b, d = d.concat(c.errorList);
            }), c.errorList = d), b;
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), 
            b) {
              case "add":
                a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                break;

              case "remove":
                return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                    i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required");
                }), i) : (delete e[j.name], f);
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), 
            g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, 
            g = a.extend(g, {
                remote: h
            })), g;
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val());
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val());
        },
        unchecked: function(b) {
            return !a(b).prop("checked");
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, 
        this.init();
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), 
        c.constructor !== Array && (c = [ c ]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c;
            });
        }), b);
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), 
                this.hideThese(this.errorsFor(a)));
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
            },
            onkeyup: function(b, c) {
                var d = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b);
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), 
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), 
                this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, 
                this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b;
                    });
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d);
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), 
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), 
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), 
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid();
            },
            element: function(b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), 
                this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), 
                a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), 
                this.showErrors(), e;
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, 
                this.prepareForm(), this.hideErrors();
                var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight) for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, ""); else c.removeClass(this.settings.errorClass);
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide();
            },
            valid: function() {
                return 0 === this.size();
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name;
                }).length && b;
            },
            elements: function() {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), 
                    this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0);
                });
            },
            clean: function(b) {
                return a(b)[0];
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext);
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), 
                this.toHide = a([]), this.currentElements = a([]);
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a);
            },
            elementValue: function(b) {
                var c, d = a(b), e = b.type;
                return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), 
                "string" == typeof c ? c.replace(/\r/g, "") : c);
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b;
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue;
                        }
                        if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1;
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), 
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), 
                        j;
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0;
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b]);
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0;
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>");
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), 
                this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d;
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), 
                this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(b, c) {
                var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), 
                d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), 
                g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), 
                i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), 
                e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"));
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), 
                this.toShow = this.toShow.add(g);
            },
            errorsFor: function(b) {
                var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e);
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']");
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                  case "select":
                    return a("option:selected", c).length;

                  case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                }
                return b.length;
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
            },
            dependTypes: {
                "boolean": function(a) {
                    return a;
                },
                string: function(b, c) {
                    return !!a(b, c.form).length;
                },
                "function": function(a, b) {
                    return a(b);
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0);
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], 
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), 
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                this.formSubmitted = !1);
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                });
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator");
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
        },
        classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
            }), c;
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), 
            isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), 
            d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, 
            e;
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), 
            this.normalizeAttributeRule(e, g, c, d);
            return e;
        },
        staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), 
            c;
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                      case "string":
                        f = !!a(e.depends, c.form).length;
                        break;

                      case "function":
                        f = e.depends.call(c, c);
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d];
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e;
            }), a.each([ "minlength", "maxlength" ], function() {
                b[this] && (b[this] = Number(b[this]));
            }), a.each([ "rangelength", "range" ], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [ Number(b[this][0]), Number(b[this][1]) ] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), 
                b[this] = [ Number(c[0]), Number(c[1]) ]));
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [ b.min, b.max ], 
            delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [ b.minlength, b.maxlength ], 
            delete b.minlength, delete b.maxlength)), b;
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0;
                }), b = c;
            }
            return b;
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0;
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), 
                e += f, g = !g;
                return e % 10 === 0;
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d;
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e;
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1];
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c;
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a;
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1];
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    a(c).valid();
                }), b === e.val();
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), 
                g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, 
                d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, 
                f[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, 
                        e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], 
                        e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, 
                        e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j);
                    }
                }, d)), "pending");
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
    });
});

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t, i, e, s) {
    function o(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), 
        this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [ r[1], r[0] ]), 
        this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), 
        h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), 
        "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), 
        this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), 
        navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        this.$mirror = t("<div />").prependTo("body");
        var a = this.$element.find(">.parallax-slider"), n = !1;
        0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), 
        n = !0), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function() {
            h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, 
            h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, 
            o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender();
        }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
    }
    function h(s) {
        return this.each(function() {
            var h = t(this), r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), 
            h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
        });
    }
    !function() {
        for (var t = 0, e = [ "ms", "moz", "webkit", "o" ], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], 
        i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
            var s = new Date().getTime(), o = Math.max(0, 16 - (s - t)), h = i.setTimeout(function() {
                e(s + o);
            }, o);
            return t = s + o, h;
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
            clearTimeout(t);
        });
    }(), t.extend(o.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, 
            this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, 
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t = o.winHeight, i = o.docHeight, e = Math.min(this.boxOffsetTop, i - t), s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0), h = this.boxHeight + (e - s) * (1 - this.speed) | 0, r = (this.boxOffsetTop - e) * (1 - this.speed) | 0;
            if (h * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r;
                var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a);
            } else {
                this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, 
                this.offsetLeft = 0;
                var a = this.imageHeight - h;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a);
            }
        },
        render: function() {
            var t = o.scrollTop, i = o.scrollLeft, e = this.overScrollFix ? o.overScroll : 0, s = t + o.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", 
            this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, 
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", 
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - e,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            });
        }
    }), t.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var s = t(e), h = t(i), r = function() {
                    o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width();
                }, a = function() {
                    var t = h.scrollTop(), i = o.docHeight - o.winHeight, e = o.docWidth - o.winWidth;
                    o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), 
                    o.overScroll = Math.max(t - i, Math.min(t, 0));
                };
                h.on("resize.px.parallax load.px.parallax", function() {
                    r(), o.isFresh = !1, o.requestRender();
                }).on("scroll.px.parallax load.px.parallax", function() {
                    a(), o.requestRender();
                }), r(), a(), this.isReady = !0;
            }
        },
        configure: function(i) {
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
        },
        refresh: function() {
            t.each(this.sliders, function() {
                this.refresh();
            }), this.isFresh = !0;
        },
        render: function() {
            this.isFresh || this.refresh(), t.each(this.sliders, function() {
                this.render();
            });
        },
        requestRender: function() {
            var t = this;
            this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function() {
                t.render(), t.isBusy = !1;
            }));
        },
        destroy: function(e) {
            var s, h = t(e).data("px.parallax");
            for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);
            t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), 
            this.isReady = !1, o.isSetup = !1);
        }
    });
    var r = t.fn.parallax;
    t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
        return t.fn.parallax = r, this;
    }, t(e).on("ready.px.parallax.data-api", function() {
        t('[data-parallax="scroll"]').parallax();
    });
}(jQuery, window, document);

!function(a, b) {
    "use strict";
    var c = function() {
        var c = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }, d = function() {
            var b = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return b && a("html").css("cursor", "pointer").on("click", a.noop), b;
        }(), e = function() {
            var a = document.documentElement.style;
            return "behavior" in a && "fill" in a && /iemobile/i.test(navigator.userAgent);
        }(), f = function() {
            return !!b.PointerEvent;
        }(), g = function(a, b) {
            var d = c.menuClass;
            b.cssArrows && (d += " " + c.menuArrowClass), a.toggleClass(d);
        }, h = function(b, d) {
            return b.find("li." + d.pathClass).slice(0, d.pathLevels).addClass(d.hoverClass + " " + c.bcClass).filter(function() {
                return a(this).children(d.popUpSelector).hide().show().length;
            }).removeClass(d.pathClass);
        }, i = function(a) {
            a.children("a").toggleClass(c.anchorClass);
        }, j = function(a) {
            var b = a.css("ms-touch-action"), c = a.css("touch-action");
            c = c || b, c = "pan-y" === c ? "auto" : "pan-y", a.css({
                "ms-touch-action": c,
                "touch-action": c
            });
        }, k = function(a) {
            return a.closest("." + c.menuClass);
        }, l = function(a) {
            return k(a).data("sf-options");
        }, m = function() {
            var b = a(this), c = l(b);
            clearTimeout(c.sfTimer), b.siblings().superfish("hide").end().superfish("show");
        }, n = function(b) {
            b.retainPath = a.inArray(this[0], b.$path) > -1, this.superfish("hide"), this.parents("." + b.hoverClass).length || (b.onIdle.call(k(this)), 
            b.$path.length && a.proxy(m, b.$path)());
        }, o = function() {
            var b = a(this), c = l(b);
            d ? a.proxy(n, b, c)() : (clearTimeout(c.sfTimer), c.sfTimer = setTimeout(a.proxy(n, b, c), c.delay));
        }, p = function(b) {
            var c = a(this), d = l(c), e = c.siblings(b.data.popUpSelector);
            return d.onHandleTouch.call(e) === !1 ? this : void (e.length > 0 && e.is(":hidden") && (c.one("click.superfish", !1), 
            "MSPointerDown" === b.type || "pointerdown" === b.type ? c.trigger("focus") : a.proxy(m, c.parent("li"))()));
        }, q = function(b, c) {
            var g = "li:has(" + c.popUpSelector + ")";
            a.fn.hoverIntent && !c.disableHI ? b.hoverIntent(m, o, g) : b.on("mouseenter.superfish", g, m).on("mouseleave.superfish", g, o);
            var h = "MSPointerDown.superfish";
            f && (h = "pointerdown.superfish"), d || (h += " touchend.superfish"), e && (h += " mousedown.superfish"), 
            b.on("focusin.superfish", "li", m).on("focusout.superfish", "li", o).on(h, "a", c, p);
        };
        return {
            hide: function(b) {
                if (this.length) {
                    var c = this, d = l(c);
                    if (!d) return this;
                    var e = d.retainPath === !0 ? d.$path : "", f = c.find("li." + d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector), g = d.speedOut;
                    if (b && (f.show(), g = 0), d.retainPath = !1, d.onBeforeHide.call(f) === !1) return this;
                    f.stop(!0, !0).animate(d.animationOut, g, function() {
                        var b = a(this);
                        d.onHide.call(b);
                    });
                }
                return this;
            },
            show: function() {
                var a = l(this);
                if (!a) return this;
                var b = this.addClass(a.hoverClass), c = b.children(a.popUpSelector);
                return a.onBeforeShow.call(c) === !1 ? this : (c.stop(!0, !0).animate(a.animation, a.speed, function() {
                    a.onShow.call(c);
                }), this);
            },
            destroy: function() {
                return this.each(function() {
                    var b, d = a(this), e = d.data("sf-options");
                    return e ? (b = d.find(e.popUpSelector).parent("li"), clearTimeout(e.sfTimer), g(d, e), 
                    i(b), j(d), d.off(".superfish").off(".hoverIntent"), b.children(e.popUpSelector).attr("style", function(a, b) {
                        return b.replace(/display[^;]+;?/g, "");
                    }), e.$path.removeClass(e.hoverClass + " " + c.bcClass).addClass(e.pathClass), d.find("." + e.hoverClass).removeClass(e.hoverClass), 
                    e.onDestroy.call(d), void d.removeData("sf-options")) : !1;
                });
            },
            init: function(b) {
                return this.each(function() {
                    var d = a(this);
                    if (d.data("sf-options")) return !1;
                    var e = a.extend({}, a.fn.superfish.defaults, b), f = d.find(e.popUpSelector).parent("li");
                    e.$path = h(d, e), d.data("sf-options", e), g(d, e), i(f), j(d), q(d, e), f.not("." + c.bcClass).superfish("hide", !0), 
                    e.onInit.call(this);
                });
            }
        };
    }();
    a.fn.superfish = function(b, d) {
        return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? a.error("Method " + b + " does not exist on jQuery.fn.superfish") : c.init.apply(this, arguments);
    }, a.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: a.noop,
        onBeforeShow: a.noop,
        onShow: a.noop,
        onBeforeHide: a.noop,
        onHide: a.noop,
        onIdle: a.noop,
        onDestroy: a.noop,
        onHandleTouch: a.noop
    };
}(jQuery, window);
//# sourceMappingURL=libs.js.map