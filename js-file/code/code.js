function cssStyles(href){
    let cssSource = document.createElement("link")
    cssSource.href = href;
    cssSource.rel = "stylesheet";
    document.head.appendChild(cssSource);
}

cssStyles("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.css");
cssStyles("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/theme/material-darker.min.css");

//source https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.js
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).CodeMirror = t()
}(this, function () {
    "use strict";
    var e = navigator.userAgent
        , t = navigator.platform
        , d = /gecko\/\d/i.test(e)
        , n = /MSIE \d/.test(e)
        , r = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e)
        , i = /Edge\/(\d+)/.exec(e)
        , w = n || r || i
        , v = w && (n ? document.documentMode || 6 : +(i || r)[1])
        , f = !i && /WebKit\//.test(e)
        , r = f && /Qt\/\d+\.\d+/.test(e)
        , o = !i && /Chrome\//.test(e)
        , p = /Opera\//.test(e)
        , c = /Apple Computer/.test(navigator.vendor)
        , l = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e)
        , u = /PhantomJS/.test(e)
        , s = c && (/Mobile\/\w+/.test(e) || 2 < navigator.maxTouchPoints)
        , a = /Android/.test(e)
        , h = s || a || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e)
        , g = s || /Mac/.test(t)
        , m = /\bCrOS\b/.test(e)
        , y = /win/i.test(t)
        , e = p && e.match(/Version\/(\d*\.\d*)/);
    (e = e && Number(e[1])) && 15 <= e && (f = !(p = !1));
    var b = g && (r || p && (null == e || e < 12.11))
        , x = d || w && 9 <= v;
    function C(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }
    var S = function (e, t) {
        var n = e.className
            , r = C(t).exec(n);
        r && (t = n.slice(r.index + r[0].length),
            e.className = n.slice(0, r.index) + (t ? r[1] + t : ""))
    };
    function L(e) {
        for (var t = e.childNodes.length; 0 < t; --t)
            e.removeChild(e.firstChild);
        return e
    }
    function k(e, t) {
        return L(e).appendChild(t)
    }
    function M(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n),
            r && (i.style.cssText = r),
            "string" == typeof t)
            i.appendChild(document.createTextNode(t));
        else if (t)
            for (var o = 0; o < t.length; ++o)
                i.appendChild(t[o]);
        return i
    }
    function T(e, t, n, r) {
        r = M(e, t, n, r);
        return r.setAttribute("role", "presentation"),
            r
    }
    function N(e, t) {
        if (3 == t.nodeType && (t = t.parentNode),
            e.contains)
            return e.contains(t);
        do {
            if ((t = 11 == t.nodeType ? t.host : t) == e)
                return !0
        } while (t = t.parentNode)
    }
    function O() {
        var t;
        try {
            t = document.activeElement
        } catch (e) {
            t = document.body || null
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement;)
            t = t.shadowRoot.activeElement;
        return t
    }
    function A(e, t) {
        var n = e.className;
        C(t).test(n) || (e.className += (n ? " " : "") + t)
    }
    function D(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
            n[r] && !C(n[r]).test(t) && (t += " " + n[r]);
        return t
    }
    var W = document.createRange ? function (e, t, n, r) {
        var i = document.createRange();
        return i.setEnd(r || e, n),
            i.setStart(e, t),
            i
    }
        : function (e, t, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(e.parentNode)
            } catch (e) {
                return r
            }
            return r.collapse(!0),
                r.moveEnd("character", n),
                r.moveStart("character", t),
                r
        }
        , H = function (e) {
            e.select()
        };
    function F(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, t)
        }
    }
    function P(e, t, n) {
        for (var r in t = t || {},
            e)
            !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
        return t
    }
    function E(e, t, n, r, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = r || 0, l = i || 0; ;) {
            var s = e.indexOf("\t", o);
            if (s < 0 || t <= s)
                return l + (t - o);
            l += s - o,
                l += n - l % n,
                o = s + 1
        }
    }
    s ? H = function (e) {
        e.selectionStart = 0,
            e.selectionEnd = e.value.length
    }
        : w && (H = function (e) {
            try {
                e.select()
            } catch (e) { }
        }
        );
    function I() {
        this.id = null,
            this.f = null,
            this.time = 0,
            this.handler = F(this.onTimeout, this)
    }
    function R(e, t) {
        for (var n = 0; n < e.length; ++n)
            if (e[n] == t)
                return n;
        return -1
    }
    I.prototype.onTimeout = function (e) {
        e.id = 0,
            e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date)
    }
        ;
    var z = 50
        , B = {
            toString: function () {
                return "CodeMirror.Pass"
            }
        }
        , G = {
            scroll: !(I.prototype.set = function (e, t) {
                this.f = t;
                t = +new Date + e;
                (!this.id || t < this.time) && (clearTimeout(this.id),
                    this.id = setTimeout(this.handler, e),
                    this.time = t)
            }
            )
        }
        , U = {
            origin: "*mouse"
        }
        , V = {
            origin: "+move"
        };
    function K(e, t, n) {
        for (var r = 0, i = 0; ;) {
            var o = e.indexOf("\t", r)
                , l = (o = -1 == o ? e.length : o) - r;
            if (o == e.length || t <= i + l)
                return r + Math.min(l, t - i);
            if (i += o - r,
                r = o + 1,
                t <= (i += n - i % n))
                return r
        }
    }
    var j = [""];
    function X(e) {
        for (; j.length <= e;)
            j.push(Y(j) + " ");
        return j[e]
    }
    function Y(e) {
        return e[e.length - 1]
    }
    function _(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
            n[r] = t(e[r], r);
        return n
    }
    function $() { }
    function q(e, t) {
        e = Object.create ? Object.create(e) : ($.prototype = e,
            new $);
        return t && P(t, e),
            e
    }
    var Z = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function Q(e) {
        return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || Z.test(e))
    }
    function J(e, t) {
        return t ? !!(-1 < t.source.indexOf("\\w") && Q(e)) || t.test(e) : Q(e)
    }
    function ee(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
                return;
        return 1
    }
    var te = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function ne(e) {
        return 768 <= e.charCodeAt(0) && te.test(e)
    }
    function re(e, t, n) {
        for (; (n < 0 ? 0 < t : t < e.length) && ne(e.charAt(t));)
            t += n;
        return t
    }
    function ie(e, t, n) {
        for (var r = n < t ? -1 : 1; ;) {
            if (t == n)
                return t;
            var i = (t + n) / 2
                , i = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (i == t)
                return e(i) ? t : n;
            e(i) ? n = i : t = i + r
        }
    }
    var oe = null;
    function le(e, t, n) {
        var r;
        oe = null;
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t)
                return i;
            o.to == t && (o.from != o.to && "before" == n ? r = i : oe = i),
                o.from == t && (o.from != o.to && "before" != n ? r = i : oe = i)
        }
        return null != r ? r : oe
    }
    var se, ae, ue, ce, he, de = (se = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        ae = /[stwN]/,
        ue = /[LRr]/,
        ce = /[Lb1n]/,
        he = /[1n]/,
        function (e, t) {
            var n = "ltr" == t ? "L" : "R";
            if (0 == e.length || "ltr" == t && !se.test(e))
                return !1;
            for (var r, i = e.length, o = [], l = 0; l < i; ++l)
                o.push((r = e.charCodeAt(l)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(r) : 1424 <= r && r <= 1524 ? "R" : 1536 <= r && r <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(r - 1536) : 1774 <= r && r <= 2220 ? "r" : 8192 <= r && r <= 8203 ? "w" : 8204 == r ? "b" : "L");
            for (var s = 0, a = n; s < i; ++s) {
                var u = o[s];
                "m" == u ? o[s] = a : a = u
            }
            for (var c = 0, h = n; c < i; ++c) {
                var d = o[c];
                "1" == d && "r" == h ? o[c] = "n" : ue.test(d) && "r" == (h = d) && (o[c] = "R")
            }
            for (var f = 1, p = o[0]; f < i - 1; ++f) {
                var g = o[f];
                "+" == g && "1" == p && "1" == o[f + 1] ? o[f] = "1" : "," != g || p != o[f + 1] || "1" != p && "n" != p || (o[f] = p),
                    p = g
            }
            for (var m = 0; m < i; ++m) {
                var v = o[m];
                if ("," == v)
                    o[m] = "N";
                else if ("%" == v) {
                    for (var y = void 0, y = m + 1; y < i && "%" == o[y]; ++y)
                        ;
                    for (var b = m && "!" == o[m - 1] || y < i && "1" == o[y] ? "1" : "N", w = m; w < y; ++w)
                        o[w] = b;
                    m = y - 1
                }
            }
            for (var x = 0, C = n; x < i; ++x) {
                var S = o[x];
                "L" == C && "1" == S ? o[x] = "L" : ue.test(S) && (C = S)
            }
            for (var L = 0; L < i; ++L)
                if (ae.test(o[L])) {
                    for (var k = void 0, k = L + 1; k < i && ae.test(o[k]); ++k)
                        ;
                    for (var T = "L" == (L ? o[L - 1] : n), M = T == ("L" == (k < i ? o[k] : n)) ? T ? "L" : "R" : n, N = L; N < k; ++N)
                        o[N] = M;
                    L = k - 1
                }
            for (var O, A = [], D = 0; D < i;)
                if (ce.test(o[D])) {
                    var W = D;
                    for (++D; D < i && ce.test(o[D]); ++D)
                        ;
                    A.push(new fe(0, W, D))
                } else {
                    var H = D
                        , F = A.length
                        , P = "rtl" == t ? 1 : 0;
                    for (++D; D < i && "L" != o[D]; ++D)
                        ;
                    for (var E = H; E < D;)
                        if (he.test(o[E])) {
                            H < E && (A.splice(F, 0, new fe(1, H, E)),
                                F += P);
                            var I = E;
                            for (++E; E < D && he.test(o[E]); ++E)
                                ;
                            A.splice(F, 0, new fe(2, I, E)),
                                F += P,
                                H = E
                        } else
                            ++E;
                    H < D && A.splice(F, 0, new fe(1, H, D))
                }
            return "ltr" == t && (1 == A[0].level && (O = e.match(/^\s+/)) && (A[0].from = O[0].length,
                A.unshift(new fe(0, 0, O[0].length))),
                1 == Y(A).level && (O = e.match(/\s+$/)) && (Y(A).to -= O[0].length,
                    A.push(new fe(0, i - O[0].length, i)))),
                "rtl" == t ? A.reverse() : A
        }
    );
    function fe(e, t, n) {
        this.level = e,
            this.from = t,
            this.to = n
    }
    function pe(e, t) {
        var n = e.order;
        return n = null == n ? e.order = de(e.text, t) : n
    }
    var ge = []
        , me = function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : (e = e._handlers || (e._handlers = {}))[t] = (e[t] || ge).concat(n)
        };
    function ve(e, t) {
        return e._handlers && e._handlers[t] || ge
    }
    function ye(e, t, n) {
        var r;
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : !(e = (r = e._handlers) && r[t]) || -1 < (n = R(e, n)) && (r[t] = e.slice(0, n).concat(e.slice(n + 1)))
    }
    function be(e, t) {
        var n = ve(e, t);
        if (n.length)
            for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
                n[i].apply(null, r)
    }
    function we(e, t, n) {
        return "string" == typeof t && (t = {
            type: t,
            preventDefault: function () {
                this.defaultPrevented = !0
            }
        }),
            be(e, n || t.type, e, t),
            Te(t) || t.codemirrorIgnore
    }
    function xe(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
            for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
                -1 == R(n, t[r]) && n.push(t[r])
    }
    function Ce(e, t) {
        return 0 < ve(e, t).length
    }
    function Se(e) {
        e.prototype.on = function (e, t) {
            me(this, e, t)
        }
            ,
            e.prototype.off = function (e, t) {
                ye(this, e, t)
            }
    }
    function Le(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function ke(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function Te(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }
    function Me(e) {
        Le(e),
            ke(e)
    }
    function Ne(e) {
        return e.target || e.srcElement
    }
    function Oe(e) {
        var t = e.which;
        return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
            t = g && e.ctrlKey && 1 == t ? 3 : t
    }
    var Ae, De, We = function () {
        if (w && v < 9)
            return !1;
        var e = M("div");
        return "draggable" in e || "dragDrop" in e
    }();
    var He = 3 != "\n\nb".split(/\n/).length ? function (e) {
        for (var t = 0, n = [], r = e.length; t <= r;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i)
                , l = o.indexOf("\r");
            -1 != l ? (n.push(o.slice(0, l)),
                t += l + 1) : (n.push(o),
                    t = i + 1)
        }
        return n
    }
        : function (e) {
            return e.split(/\r\n?|\n/)
        }
        , Fe = window.getSelection ? function (e) {
            try {
                return e.selectionStart != e.selectionEnd
            } catch (e) {
                return !1
            }
        }
            : function (e) {
                var t;
                try {
                    t = e.ownerDocument.selection.createRange()
                } catch (e) { }
                return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
            }
        , Pe = "oncopy" in (r = M("div")) || (r.setAttribute("oncopy", "return;"),
            "function" == typeof r.oncopy)
        , Ee = null;
    var Ie = {}
        , Re = {};
    function ze(e) {
        if ("string" == typeof e && Re.hasOwnProperty(e))
            e = Re[e];
        else if (e && "string" == typeof e.name && Re.hasOwnProperty(e.name)) {
            var t = Re[e.name];
            (e = q(t = "string" == typeof t ? {
                name: t
            } : t, e)).name = t.name
        } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return ze("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return ze("application/json")
        }
        return "string" == typeof e ? {
            name: e
        } : e || {
            name: "null"
        }
    }
    function Be(e, t) {
        t = ze(t);
        var n = Ie[t.name];
        if (!n)
            return Be(e, "text/plain");
        var r = n(e, t);
        if (Ge.hasOwnProperty(t.name)) {
            var i, o = Ge[t.name];
            for (i in o)
                o.hasOwnProperty(i) && (r.hasOwnProperty(i) && (r["_" + i] = r[i]),
                    r[i] = o[i])
        }
        if (r.name = t.name,
            t.helperType && (r.helperType = t.helperType),
            t.modeProps)
            for (var l in t.modeProps)
                r[l] = t.modeProps[l];
        return r
    }
    var Ge = {};
    function Ue(e, t) {
        P(t, Ge.hasOwnProperty(e) ? Ge[e] : Ge[e] = {})
    }
    function Ve(e, t) {
        if (!0 === t)
            return t;
        if (e.copyState)
            return e.copyState(t);
        var n, r = {};
        for (n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])),
                r[n] = i
        }
        return r
    }
    function Ke(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;)
            t = n.state,
                e = n.mode;
        return n || {
            mode: e,
            state: t
        }
    }
    function je(e, t, n) {
        return !e.startState || e.startState(t, n)
    }
    var Xe = function (e, t, n) {
        this.pos = this.start = 0,
            this.string = e,
            this.tabSize = t || 8,
            this.lastColumnPos = this.lastColumnValue = 0,
            this.lineStart = 0,
            this.lineOracle = n
    };
    function Ye(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
            throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines;)
            for (var r = 0; ; ++r) {
                var i = n.children[r]
                    , o = i.chunkSize();
                if (t < o) {
                    n = i;
                    break
                }
                t -= o
            }
        return n.lines[t]
    }
    function _e(e, t, n) {
        var r = []
            , i = t.line;
        return e.iter(t.line, n.line + 1, function (e) {
            e = e.text;
            i == n.line && (e = e.slice(0, n.ch)),
                i == t.line && (e = e.slice(t.ch)),
                r.push(e),
                ++i
        }),
            r
    }
    function $e(e, t, n) {
        var r = [];
        return e.iter(t, n, function (e) {
            r.push(e.text)
        }),
            r
    }
    function qe(e, t) {
        var n = t - e.height;
        if (n)
            for (var r = e; r; r = r.parent)
                r.height += n
    }
    function Ze(e) {
        if (null == e.parent)
            return null;
        for (var t = e.parent, n = R(t.lines, e), r = t.parent; r; r = (t = r).parent)
            for (var i = 0; r.children[i] != t; ++i)
                n += r.children[i].chunkSize();
        return n + t.first
    }
    function Qe(e, t) {
        var n = e.first;
        e: do {
            for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r]
                    , o = i.height;
                if (t < o) {
                    e = i;
                    continue e
                }
                t -= o,
                    n += i.chunkSize()
            }
            return n
        } while (!e.lines);
        for (var l = 0; l < e.lines.length; ++l) {
            var s = e.lines[l].height;
            if (t < s)
                break;
            t -= s
        }
        return n + l
    }
    function Je(e, t) {
        return t >= e.first && t < e.first + e.size
    }
    function et(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function tt(e, t, n) {
        if (void 0 === n && (n = null),
            !(this instanceof tt))
            return new tt(e, t, n);
        this.line = e,
            this.ch = t,
            this.sticky = n
    }
    function nt(e, t) {
        return e.line - t.line || e.ch - t.ch
    }
    function rt(e, t) {
        return e.sticky == t.sticky && 0 == nt(e, t)
    }
    function it(e) {
        return tt(e.line, e.ch)
    }
    function ot(e, t) {
        return nt(e, t) < 0 ? t : e
    }
    function lt(e, t) {
        return nt(e, t) < 0 ? e : t
    }
    function st(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }
    function at(e, t) {
        if (t.line < e.first)
            return tt(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? tt(n, Ye(e, n).text.length) : (e = Ye(e, (n = t).line).text.length,
            null == (t = n.ch) || e < t ? tt(n.line, e) : t < 0 ? tt(n.line, 0) : n)
    }
    function ut(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
            n[r] = at(e, t[r]);
        return n
    }
    Xe.prototype.eol = function () {
        return this.pos >= this.string.length
    }
        ,
        Xe.prototype.sol = function () {
            return this.pos == this.lineStart
        }
        ,
        Xe.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0
        }
        ,
        Xe.prototype.next = function () {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++)
        }
        ,
        Xe.prototype.eat = function (e) {
            var t = this.string.charAt(this.pos)
                , e = "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t));
            if (e)
                return ++this.pos,
                    t
        }
        ,
        Xe.prototype.eatWhile = function (e) {
            for (var t = this.pos; this.eat(e);)
                ;
            return this.pos > t
        }
        ,
        Xe.prototype.eatSpace = function () {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));)
                ++this.pos;
            return this.pos > e
        }
        ,
        Xe.prototype.skipToEnd = function () {
            this.pos = this.string.length
        }
        ,
        Xe.prototype.skipTo = function (e) {
            e = this.string.indexOf(e, this.pos);
            if (-1 < e)
                return this.pos = e,
                    !0
        }
        ,
        Xe.prototype.backUp = function (e) {
            this.pos -= e
        }
        ,
        Xe.prototype.column = function () {
            return this.lastColumnPos < this.start && (this.lastColumnValue = E(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
                this.lastColumnPos = this.start),
                this.lastColumnValue - (this.lineStart ? E(this.string, this.lineStart, this.tabSize) : 0)
        }
        ,
        Xe.prototype.indentation = function () {
            return E(this.string, null, this.tabSize) - (this.lineStart ? E(this.string, this.lineStart, this.tabSize) : 0)
        }
        ,
        Xe.prototype.match = function (e, t, n) {
            if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && 0 < r.index ? null : (r && !1 !== t && (this.pos += r[0].length),
                    r)
            }
            r = function (e) {
                return n ? e.toLowerCase() : e
            }
                ;
            if (r(this.string.substr(this.pos, e.length)) == r(e))
                return !1 !== t && (this.pos += e.length),
                    !0
        }
        ,
        Xe.prototype.current = function () {
            return this.string.slice(this.start, this.pos)
        }
        ,
        Xe.prototype.hideFirstChars = function (e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }
        ,
        Xe.prototype.lookAhead = function (e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e)
        }
        ,
        Xe.prototype.baseToken = function () {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos)
        }
        ;
    function ct(e, t) {
        this.state = e,
            this.lookAhead = t
    }
    var ht = function (e, t, n, r) {
        this.state = t,
            this.doc = e,
            this.line = n,
            this.maxLookAhead = r || 0,
            this.baseTokens = null,
            this.baseTokenPos = 1
    };
    function dt(t, n, r, e) {
        var a = [t.state.modeGen]
            , i = {};
        xt(t, n.text, t.doc.mode, r, function (e, t) {
            return a.push(e, t)
        }, i, e);
        for (var u = r.state, o = 0; o < t.state.overlays.length; ++o)
            !function (e) {
                r.baseTokens = a;
                var o = t.state.overlays[e]
                    , l = 1
                    , s = 0;
                r.state = !0,
                    xt(t, n.text, o.mode, r, function (e, t) {
                        for (var n = l; s < e;) {
                            var r = a[l];
                            e < r && a.splice(l, 1, e, a[l + 1], r),
                                l += 2,
                                s = Math.min(e, r)
                        }
                        if (t)
                            if (o.opaque)
                                a.splice(n, l - n, e, "overlay " + t),
                                    l = n + 2;
                            else
                                for (; n < l; n += 2) {
                                    var i = a[n + 1];
                                    a[n + 1] = (i ? i + " " : "") + "overlay " + t
                                }
                    }, i),
                    r.state = u,
                    r.baseTokens = null,
                    r.baseTokenPos = 1
            }(o);
        return {
            styles: a,
            classes: i.bgClass || i.textClass ? i : null
        }
    }
    function ft(e, t, n) {
        var r, i, o;
        return t.styles && t.styles[0] == e.state.modeGen || (r = pt(e, Ze(t)),
            i = t.text.length > e.options.maxHighlightLength && Ve(e.doc.mode, r.state),
            o = dt(e, t, r),
            i && (r.state = i),
            t.stateAfter = r.save(!i),
            t.styles = o.styles,
            o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null),
            n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))),
            t.styles
    }
    function pt(n, r, e) {
        var t = n.doc
            , i = n.display;
        if (!t.mode.startState)
            return new ht(t, !0, r);
        var o = function (e, t, n) {
            for (var r, i, o = e.doc, l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; l < s; --s) {
                if (s <= o.first)
                    return o.first;
                var a = Ye(o, s - 1)
                    , u = a.stateAfter;
                if (u && (!n || s + (u instanceof ct ? u.lookAhead : 0) <= o.modeFrontier))
                    return s;
                a = E(a.text, null, e.options.tabSize);
                (null == i || a < r) && (i = s - 1,
                    r = a)
            }
            return i
        }(n, r, e)
            , l = o > t.first && Ye(t, o - 1).stateAfter
            , s = l ? ht.fromSaved(t, l, o) : new ht(t, je(t.mode), o);
        return t.iter(o, r, function (e) {
            gt(n, e.text, s);
            var t = s.line;
            e.stateAfter = t == r - 1 || t % 5 == 0 || t >= i.viewFrom && t < i.viewTo ? s.save() : null,
                s.nextLine()
        }),
            e && (t.modeFrontier = s.line),
            s
    }
    function gt(e, t, n, r) {
        var i = e.doc.mode
            , o = new Xe(t, e.options.tabSize, n);
        for (o.start = o.pos = r || 0,
            "" == t && mt(i, n.state); !o.eol();)
            vt(i, o, n.state),
                o.start = o.pos
    }
    function mt(e, t) {
        if (e.blankLine)
            return e.blankLine(t);
        if (e.innerMode) {
            t = Ke(e, t);
            return t.mode.blankLine ? t.mode.blankLine(t.state) : void 0
        }
    }
    function vt(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
            r && (r[0] = Ke(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start)
                return o
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
    }
    ht.prototype.lookAhead = function (e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
            t
    }
        ,
        ht.prototype.baseToken = function (e) {
            if (!this.baseTokens)
                return null;
            for (; this.baseTokens[this.baseTokenPos] <= e;)
                this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
                type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e
            }
        }
        ,
        ht.prototype.nextLine = function () {
            this.line++,
                0 < this.maxLookAhead && this.maxLookAhead--
        }
        ,
        ht.fromSaved = function (e, t, n) {
            return t instanceof ct ? new ht(e, Ve(e.mode, t.state), n, t.lookAhead) : new ht(e, Ve(e.mode, t), n)
        }
        ,
        ht.prototype.save = function (e) {
            e = !1 !== e ? Ve(this.doc.mode, this.state) : this.state;
            return 0 < this.maxLookAhead ? new ct(e, this.maxLookAhead) : e
        }
        ;
    var yt = function (e, t, n) {
        this.start = e.start,
            this.end = e.pos,
            this.string = e.current(),
            this.type = t || null,
            this.state = n
    };
    function bt(e, t, n, r) {
        var i, o, l = e.doc, s = l.mode, a = Ye(l, (t = at(l, t)).line), u = pt(e, t.line, n), c = new Xe(a.text, e.options.tabSize, u);
        for (r && (o = []); (r || c.pos < t.ch) && !c.eol();)
            c.start = c.pos,
                i = vt(s, c, u.state),
                r && o.push(new yt(c, i, Ve(l.mode, u.state)));
        return r ? o : new yt(c, i, u.state)
    }
    function wt(e, t) {
        if (e)
            for (; ;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n)
                    break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r] ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2])
            }
        return e
    }
    function xt(e, t, n, r, i, o, l) {
        var s = n.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var a = 0
            , u = null
            , c = new Xe(t, e.options.tabSize, r)
            , h = e.options.addModeClass && [null];
        for ("" == t && wt(mt(n, r.state), o); !c.eol();) {
            var d, f = c.pos > e.options.maxHighlightLength ? (s = !1,
                l && gt(e, t, r, c.pos),
                c.pos = t.length,
                null) : wt(vt(n, c, r.state, h), o);
            if (!h || (d = h[0].name) && (f = "m-" + (f ? d + " " + f : d)),
                !s || u != f) {
                for (; a < c.start;)
                    i(a = Math.min(c.start, a + 5e3), u);
                u = f
            }
            c.start = c.pos
        }
        for (; a < c.pos;) {
            var p = Math.min(c.pos, a + 5e3);
            i(p, u),
                a = p
        }
    }
    var Ct = !1
        , St = !1;
    function Lt(e, t, n) {
        this.marker = e,
            this.from = t,
            this.to = n
    }
    function kt(e, t) {
        if (e)
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t)
                    return r
            }
    }
    function Tt(e, t) {
        if (t.full)
            return null;
        var n = Je(e, t.from.line) && Ye(e, t.from.line).markedSpans
            , r = Je(e, t.to.line) && Ye(e, t.to.line).markedSpans;
        if (!n && !r)
            return null;
        var i = t.from.ch
            , o = t.to.ch
            , e = 0 == nt(t.from, t.to)
            , l = function (e, t, n) {
                var r;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o, l = e[i], s = l.marker;
                        !(null == l.from || (s.inclusiveLeft ? l.from <= t : l.from < t)) && (l.from != t || "bookmark" != s.type || n && l.marker.insertLeft) || (o = null == l.to || (s.inclusiveRight ? l.to >= t : l.to > t),
                            (r = r || []).push(new Lt(s, l.from, o ? null : l.to)))
                    }
                return r
            }(n, i, e)
            , s = function (e, t, n) {
                var r;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o, l = e[i], s = l.marker;
                        !(null == l.to || (s.inclusiveRight ? l.to >= t : l.to > t)) && (l.from != t || "bookmark" != s.type || n && !l.marker.insertLeft) || (o = null == l.from || (s.inclusiveLeft ? l.from <= t : l.from < t),
                            (r = r || []).push(new Lt(s, o ? null : l.from - t, null == l.to ? null : l.to - t)))
                    }
                return r
            }(r, o, e)
            , a = 1 == t.text.length
            , u = Y(t.text).length + (a ? i : 0);
        if (l)
            for (var c = 0; c < l.length; ++c) {
                var h, d = l[c];
                null == d.to && ((h = kt(s, d.marker)) ? a && (d.to = null == h.to ? null : h.to + u) : d.to = i)
            }
        if (s)
            for (var f = 0; f < s.length; ++f) {
                var p = s[f];
                null != p.to && (p.to += u),
                    null == p.from ? kt(l, p.marker) || (p.from = u,
                        a && (l = l || []).push(p)) : (p.from += u,
                            a && (l = l || []).push(p))
            }
        l = l && Mt(l),
            s && s != l && (s = Mt(s));
        var g = [l];
        if (!a) {
            var m, v = t.text.length - 2;
            if (0 < v && l)
                for (var y = 0; y < l.length; ++y)
                    null == l[y].to && (m = m || []).push(new Lt(l[y].marker, null, null));
            for (var b = 0; b < v; ++b)
                g.push(m);
            g.push(s)
        }
        return g
    }
    function Mt(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
        }
        return e.length ? e : null
    }
    function Nt(e) {
        var t = e.markedSpans;
        if (t) {
            for (var n = 0; n < t.length; ++n)
                t[n].marker.detachLine(e);
            e.markedSpans = null
        }
    }
    function Ot(e, t) {
        if (t) {
            for (var n = 0; n < t.length; ++n)
                t[n].marker.attachLine(e);
            e.markedSpans = t
        }
    }
    function At(e) {
        return e.inclusiveLeft ? -1 : 0
    }
    function Dt(e) {
        return e.inclusiveRight ? 1 : 0
    }
    function Wt(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n)
            return n;
        var r = e.find()
            , i = t.find()
            , n = nt(r.from, i.from) || At(e) - At(t);
        if (n)
            return -n;
        i = nt(r.to, i.to) || Dt(e) - Dt(t);
        return i || t.id - e.id
    }
    function Ht(e, t) {
        var n, r = St && e.markedSpans;
        if (r)
            for (var i, o = 0; o < r.length; ++o)
                (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Wt(n, i.marker) < 0) && (n = i.marker);
        return n
    }
    function Ft(e) {
        return Ht(e, !0)
    }
    function Pt(e) {
        return Ht(e, !1)
    }
    function Et(e, t, n, r, i) {
        var t = Ye(e, t)
            , o = St && t.markedSpans;
        if (o)
            for (var l = 0; l < o.length; ++l) {
                var s = o[l];
                if (s.marker.collapsed) {
                    var a = s.marker.find(0)
                        , u = nt(a.from, n) || At(s.marker) - At(i)
                        , c = nt(a.to, r) || Dt(s.marker) - Dt(i);
                    if (!(0 <= u && c <= 0 || u <= 0 && 0 <= c) && (u <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? 0 <= nt(a.to, n) : 0 < nt(a.to, n)) || 0 <= u && (s.marker.inclusiveRight && i.inclusiveLeft ? nt(a.from, r) <= 0 : nt(a.from, r) < 0)))
                        return 1
                }
            }
    }
    function It(e) {
        for (var t; t = Ft(e);)
            e = t.find(-1, !0).line;
        return e
    }
    function Rt(e, t) {
        var n = Ye(e, t)
            , e = It(n);
        return n == e ? t : Ze(e)
    }
    function zt(e, t) {
        if (t > e.lastLine())
            return t;
        var n, r = Ye(e, t);
        if (!Bt(e, r))
            return t;
        for (; n = Pt(r);)
            r = n.find(1, !0).line;
        return Ze(r) + 1
    }
    function Bt(e, t) {
        var n = St && t.markedSpans;
        if (n)
            for (var r, i = 0; i < n.length; ++i)
                if ((r = n[i]).marker.collapsed) {
                    if (null == r.from)
                        return !0;
                    if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && function e(t, n, r) {
                        if (null == r.to) {
                            var i = r.marker.find(1, !0);
                            return e(t, i.line, kt(i.line.markedSpans, r.marker))
                        }
                        if (r.marker.inclusiveRight && r.to == n.text.length)
                            return !0;
                        for (var o = void 0, l = 0; l < n.markedSpans.length; ++l)
                            if ((o = n.markedSpans[l]).marker.collapsed && !o.marker.widgetNode && o.from == r.to && (null == o.to || o.to != r.from) && (o.marker.inclusiveLeft || r.marker.inclusiveRight) && e(t, n, o))
                                return !0
                    }(e, t, r))
                        return !0
                }
    }
    function Gt(e) {
        for (var t = 0, n = (e = It(e)).parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e)
                break;
            t += i.height
        }
        for (var o = n.parent; o; o = (n = o).parent)
            for (var l = 0; l < o.children.length; ++l) {
                var s = o.children[l];
                if (s == n)
                    break;
                t += s.height
            }
        return t
    }
    function Ut(e) {
        if (0 == e.height)
            return 0;
        for (var t, n = e.text.length, r = e; t = Ft(r);) {
            var i = t.find(0, !0)
                , r = i.from.line;
            n += i.from.ch - i.to.ch
        }
        for (r = e; t = Pt(r);) {
            var o = t.find(0, !0);
            n -= r.text.length - o.from.ch,
                n += (r = o.to.line).text.length - o.to.ch
        }
        return n
    }
    function Vt(e) {
        var n = e.display
            , e = e.doc;
        n.maxLine = Ye(e, e.first),
            n.maxLineLength = Ut(n.maxLine),
            n.maxLineChanged = !0,
            e.iter(function (e) {
                var t = Ut(e);
                t > n.maxLineLength && (n.maxLineLength = t,
                    n.maxLine = e)
            })
    }
    var Kt = function (e, t, n) {
        this.text = e,
            Ot(this, t),
            this.height = n ? n(this) : 1
    };
    Kt.prototype.lineNo = function () {
        return Ze(this)
    }
        ,
        Se(Kt);
    var jt = {}
        , Xt = {};
    function Yt(e, t) {
        if (!e || /^\s*$/.test(e))
            return null;
        t = t.addModeClass ? Xt : jt;
        return t[e] || (t[e] = e.replace(/\S+/g, "cm-$&"))
    }
    function _t(e, t) {
        var n = T("span", null, null, f ? "padding-right: .1px" : null)
            , r = {
                pre: T("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping")
            };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line
                , l = void 0;
            r.pos = 0,
                r.addToken = qt,
                function (e) {
                    if (null != De)
                        return De;
                    var t = k(e, document.createTextNode("AخA"))
                        , n = W(t, 0, 1).getBoundingClientRect()
                        , t = W(t, 1, 2).getBoundingClientRect();
                    return L(e),
                        n && n.left != n.right && (De = t.right - n.right < 3)
                }(e.display.measure) && (l = pe(o, e.doc.direction)) && (r.addToken = function (h, d) {
                    return function (e, t, n, r, i, o, l) {
                        n = n ? n + " cm-force-border" : "cm-force-border";
                        for (var s = e.pos, a = s + t.length; ;) {
                            for (var u = void 0, c = 0; c < d.length && !((u = d[c]).to > s && u.from <= s); c++)
                                ;
                            if (u.to >= a)
                                return h(e, t, n, r, i, o, l);
                            h(e, t.slice(0, u.to - s), n, r, null, o, l),
                                r = null,
                                t = t.slice(u.to - s),
                                s = u.to
                        }
                    }
                }(r.addToken, l)),
                r.map = [],
                function (e, t, n) {
                    var r = e.markedSpans
                        , i = e.text
                        , o = 0;
                    if (r)
                        for (var l, s, a, u, c, h, d, f = i.length, p = 0, g = 1, m = "", v = 0; ;) {
                            if (v == p) {
                                a = u = c = s = "",
                                    h = d = null,
                                    v = 1 / 0;
                                for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                                    var x = r[w]
                                        , C = x.marker;
                                    if ("bookmark" == C.type && x.from == p && C.widgetNode)
                                        y.push(C);
                                    else if (x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p)) {
                                        if (null != x.to && x.to != p && v > x.to && (v = x.to,
                                            u = ""),
                                            C.className && (a += " " + C.className),
                                            C.css && (s = (s ? s + ";" : "") + C.css),
                                            C.startStyle && x.from == p && (c += " " + C.startStyle),
                                            C.endStyle && x.to == v && (b = b || []).push(C.endStyle, x.to),
                                            C.title && ((d = d || {}).title = C.title),
                                            C.attributes)
                                            for (var S in C.attributes)
                                                (d = d || {})[S] = C.attributes[S];
                                        C.collapsed && (!h || Wt(h.marker, C) < 0) && (h = x)
                                    } else
                                        x.from > p && v > x.from && (v = x.from)
                                }
                                if (b)
                                    for (var L = 0; L < b.length; L += 2)
                                        b[L + 1] == v && (u += " " + b[L]);
                                if (!h || h.from == p)
                                    for (var k = 0; k < y.length; ++k)
                                        Zt(t, 0, y[k]);
                                if (h && (h.from || 0) == p) {
                                    if (Zt(t, (null == h.to ? f + 1 : h.to) - p, h.marker, null == h.from),
                                        null == h.to)
                                        return;
                                    h.to == p && (h = !1)
                                }
                            }
                            if (f <= p)
                                break;
                            for (var T = Math.min(f, v); ;) {
                                if (m) {
                                    var M, N = p + m.length;
                                    if (h || (M = T < N ? m.slice(0, T - p) : m,
                                        t.addToken(t, M, l ? l + a : a, c, p + M.length == v ? u : "", s, d)),
                                        T <= N) {
                                        m = m.slice(T - p),
                                            p = T;
                                        break
                                    }
                                    p = N,
                                        c = ""
                                }
                                m = i.slice(o, o = n[g++]),
                                    l = Yt(n[g++], t.cm.options)
                            }
                        }
                    else
                        for (var O = 1; O < n.length; O += 2)
                            t.addToken(t, i.slice(o, o = n[O]), Yt(n[O + 1], t.cm.options))
                }(o, r, ft(e, o, t != e.display.externalMeasured && Ze(o))),
                o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = D(o.styleClasses.bgClass, r.bgClass || "")),
                    o.styleClasses.textClass && (r.textClass = D(o.styleClasses.textClass, r.textClass || ""))),
                0 == r.map.length && r.map.push(0, 0, r.content.appendChild(function (e) {
                    null == Ae && (t = M("span", "​"),
                        k(e, M("span", [t, document.createTextNode("x")])),
                        0 != e.firstChild.offsetHeight && (Ae = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(w && v < 8)));
                    var t = Ae ? M("span", "​") : M("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return t.setAttribute("cm-text", ""),
                        t
                }(e.display.measure))),
                0 == i ? (t.measure.map = r.map,
                    t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                        (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        return f && (n = r.content.lastChild,
            (/\bcm-tab\b/.test(n.className) || n.querySelector && n.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")),
            be(e, "renderLine", e, t.line, r.pre),
            r.pre.className && (r.textClass = D(r.pre.className, r.textClass || "")),
            r
    }
    function $t(e) {
        var t = M("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16),
            t.setAttribute("aria-label", t.title),
            t
    }
    function qt(e, t, n, r, i, o, l) {
        if (t) {
            var s = e.splitSpaces ? function (e, t) {
                if (1 < e.length && !/  /.test(e))
                    return e;
                for (var n = t, r = "", i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
                        r += o,
                        n = " " == o
                }
                return r
            }(t, e.trailingSpace) : t
                , a = e.cm.state.specialChars
                , u = !1;
            if (a.test(t))
                for (var c = document.createDocumentFragment(), h = 0; ;) {
                    a.lastIndex = h;
                    var d = a.exec(t)
                        , f = d ? d.index - h : t.length - h;
                    if (f && (p = document.createTextNode(s.slice(h, h + f)),
                        w && v < 9 ? c.appendChild(M("span", [p])) : c.appendChild(p),
                        e.map.push(e.pos, e.pos + f, p),
                        e.col += f,
                        e.pos += f),
                        !d)
                        break;
                    h += 1 + f;
                    var p = void 0;
                    "\t" == d[0] ? (f = (f = e.cm.options.tabSize) - e.col % f,
                        (p = c.appendChild(M("span", X(f), "cm-tab"))).setAttribute("role", "presentation"),
                        p.setAttribute("cm-text", "\t"),
                        e.col += f) : ("\r" == d[0] || "\n" == d[0] ? (p = c.appendChild(M("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", d[0]) : ((p = e.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text", d[0]),
                            w && v < 9 ? c.appendChild(M("span", [p])) : c.appendChild(p)),
                            e.col += 1),
                        e.map.push(e.pos, e.pos + 1, p),
                        e.pos++
                }
            else
                e.col += t.length,
                    c = document.createTextNode(s),
                    e.map.push(e.pos, e.pos + t.length, c),
                    w && v < 9 && (u = !0),
                    e.pos += t.length;
            if (e.trailingSpace = 32 == s.charCodeAt(t.length - 1),
                n || r || i || u || o || l) {
                n = n || "";
                r && (n += r),
                    i && (n += i);
                var g = M("span", [c], n, o);
                if (l)
                    for (var m in l)
                        l.hasOwnProperty(m) && "style" != m && "class" != m && g.setAttribute(m, l[m]);
                return e.content.appendChild(g)
            }
            e.content.appendChild(c)
        }
    }
    function Zt(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
            !r && e.cm.display.input.needsContentAttribute && (i = i || e.content.appendChild(document.createElement("span"))).setAttribute("cm-marker", n.id),
            i && (e.cm.display.input.setUneditable(i),
                e.content.appendChild(i)),
            e.pos += t,
            e.trailingSpace = !1
    }
    function Qt(e, t, n) {
        this.line = t,
            this.rest = function (e) {
                for (var t, n; t = Pt(e);)
                    e = t.find(1, !0).line,
                        (n = n || []).push(e);
                return n
            }(t),
            this.size = this.rest ? Ze(Y(this.rest)) - n + 1 : 1,
            this.node = this.text = null,
            this.hidden = Bt(e, t)
    }
    function Jt(e, t, n) {
        for (var r = [], i = t; i < n; i = l) {
            var o = new Qt(e.doc, Ye(e.doc, i), i)
                , l = i + o.size;
            r.push(o)
        }
        return r
    }
    var en = null;
    function tn(e, t) {
        e = e.ownsGroup;
        if (e)
            try {
                !function (e) {
                    var t = e.delayedCallbacks
                        , n = 0;
                    do {
                        for (; n < t.length; n++)
                            t[n].call(null);
                        for (var r = 0; r < e.ops.length; r++) {
                            var i = e.ops[r];
                            if (i.cursorActivityHandlers)
                                for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;)
                                    i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                        }
                    } while (n < t.length)
                }(e)
            } finally {
                en = null,
                    t(e)
            }
    }
    var nn = null;
    function rn(e, t) {
        var n = ve(e, t);
        if (n.length) {
            var r, i = Array.prototype.slice.call(arguments, 2);
            en ? r = en.delayedCallbacks : nn ? r = nn : (r = nn = [],
                setTimeout(on, 0));
            for (var o = 0; o < n.length; ++o)
                !function (e) {
                    r.push(function () {
                        return n[e].apply(null, i)
                    })
                }(o)
        }
    }
    function on() {
        var e = nn;
        nn = null;
        for (var t = 0; t < e.length; ++t)
            e[t]()
    }
    function ln(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? function (e, t) {
                var n = t.text.className
                    , r = an(e, t);
                t.text == t.node && (t.node = r.pre);
                t.text.parentNode.replaceChild(r.pre, t.text),
                    t.text = r.pre,
                    r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass,
                        t.textClass = r.textClass,
                        un(e, t)) : n && (t.text.className = n)
            }(e, t) : "gutter" == o ? cn(e, t, n, r) : "class" == o ? un(e, t) : "widget" == o && function (e, t, n) {
                t.alignable && (t.alignable = null);
                for (var r = C("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o)
                    o = i.nextSibling,
                        r.test(i.className) && t.node.removeChild(i);
                hn(e, t, n)
            }(e, t, r)
        }
        t.changes = null
    }
    function sn(e) {
        return e.node == e.text && (e.node = M("div", null, null, "position: relative"),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            w && v < 8 && (e.node.style.zIndex = 2)),
            e.node
    }
    function an(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null,
            t.measure = n.measure,
            n.built) : _t(e, t)
    }
    function un(e, t) {
        var n, r;
        n = e,
            (r = (i = t).bgClass ? i.bgClass + " " + (i.line.bgClass || "") : i.line.bgClass) && (r += " CodeMirror-linebackground"),
            i.background ? r ? i.background.className = r : (i.background.parentNode.removeChild(i.background),
                i.background = null) : r && (e = sn(i),
                    i.background = e.insertBefore(M("div", null, r), e.firstChild),
                    n.display.input.setUneditable(i.background)),
            t.line.wrapClass ? sn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var i = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = i || ""
    }
    function cn(e, t, n, r) {
        t.gutter && (t.node.removeChild(t.gutter),
            t.gutter = null),
            t.gutterBackground && (t.node.removeChild(t.gutterBackground),
                t.gutterBackground = null),
            t.line.gutterClass && (o = sn(t),
                t.gutterBackground = M("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"),
                e.display.input.setUneditable(t.gutterBackground),
                o.insertBefore(t.gutterBackground, t.text));
        var i = t.line.gutterMarkers;
        if (e.options.lineNumbers || i) {
            var o = sn(t)
                , l = t.gutter = M("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
            if (l.setAttribute("aria-hidden", "true"),
                e.display.input.setUneditable(l),
                o.insertBefore(l, t.text),
                t.line.gutterClass && (l.className += " " + t.line.gutterClass),
                !e.options.lineNumbers || i && i["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(M("div", et(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))),
                i)
                for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                    var a = e.display.gutterSpecs[s].className
                        , u = i.hasOwnProperty(a) && i[a];
                    u && l.appendChild(M("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[a] + "px; width: " + r.gutterWidth[a] + "px"))
                }
        }
    }
    function hn(e, t, n) {
        if (dn(e, t.line, t, n, !0),
            t.rest)
            for (var r = 0; r < t.rest.length; r++)
                dn(e, t.rest[r], t, n, !1)
    }
    function dn(e, t, n, r, i) {
        if (t.widgets)
            for (var o = sn(n), l = 0, s = t.widgets; l < s.length; ++l) {
                var a = s[l]
                    , u = M("div", [a.node], "CodeMirror-linewidget" + (a.className ? " " + a.className : ""));
                a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
                    function (e, t, n, r) {
                        e.noHScroll && ((n.alignable || (n.alignable = [])).push(t),
                            n = r.wrapperWidth,
                            t.style.left = r.fixedPos + "px",
                            e.coverGutter || (n -= r.gutterTotalWidth,
                                t.style.paddingLeft = r.gutterTotalWidth + "px"),
                            t.style.width = n + "px");
                        e.coverGutter && (t.style.zIndex = 5,
                            t.style.position = "relative",
                            e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
                    }(a, u, n, r),
                    e.display.input.setUneditable(u),
                    i && a.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u),
                    rn(a, "redraw")
            }
    }
    function fn(e) {
        if (null != e.height)
            return e.height;
        var t, n = e.doc.cm;
        return n ? (N(document.body, e.node) || (t = "position: relative;",
            e.coverGutter && (t += "margin-left: -" + n.display.gutters.offsetWidth + "px;"),
            e.noHScroll && (t += "width: " + n.display.wrapper.clientWidth + "px;"),
            k(n.display.measure, M("div", [e.node], null, t))),
            e.height = e.node.parentNode.offsetHeight) : 0
    }
    function pn(e, t) {
        for (var n = Ne(t); n != e.wrapper; n = n.parentNode)
            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover)
                return 1
    }
    function gn(e) {
        return e.lineSpace.offsetTop
    }
    function mn(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }
    function vn(e) {
        if (e.cachedPaddingH)
            return e.cachedPaddingH;
        var t = k(e.measure, M("pre", "x", "CodeMirror-line-like"))
            , t = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
            , t = {
                left: parseInt(t.paddingLeft),
                right: parseInt(t.paddingRight)
            };
        return isNaN(t.left) || isNaN(t.right) || (e.cachedPaddingH = t),
            t
    }
    function yn(e) {
        return z - e.display.nativeBarWidth
    }
    function bn(e) {
        return e.display.scroller.clientWidth - yn(e) - e.display.barWidth
    }
    function wn(e) {
        return e.display.scroller.clientHeight - yn(e) - e.display.barHeight
    }
    function xn(e, t, n) {
        if (e.line == t)
            return {
                map: e.measure.map,
                cache: e.measure.cache
            };
        for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
                return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r]
                };
        for (var i = 0; i < e.rest.length; i++)
            if (Ze(e.rest[i]) > n)
                return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
    }
    function Cn(e, t, n, r) {
        return kn(e, Ln(e, t), n, r)
    }
    function Sn(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[er(e, t)];
        e = e.display.externalMeasured;
        return e && t >= e.lineN && t < e.lineN + e.size ? e : void 0
    }
    function Ln(e, t) {
        var n, r, i = Ze(t), o = Sn(e, i);
        o && !o.text ? o = null : o && o.changes && (ln(e, o, i, $n(e)),
            e.curOp.forceUpdate = !0),
            o || (n = e,
                e = Ze(r = It(r = t)),
                (r = n.display.externalMeasured = new Qt(n.doc, r, e)).lineN = e,
                e = r.built = _t(n, r),
                r.text = e.pre,
                k(n.display.lineMeasure, e.pre),
                o = r);
        i = xn(o, t, i);
        return {
            line: t,
            view: o,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
        }
    }
    function kn(e, t, n, r, i) {
        var o, l = (n = t.before ? -1 : n) + (r || "");
        return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
            t.hasHeights || (function (e, t, n) {
                var r = e.options.lineWrapping
                    , e = r && bn(e);
                if (!t.measure.heights || r && t.measure.width != e) {
                    var i = t.measure.heights = [];
                    if (r) {
                        t.measure.width = e;
                        for (var o = t.text.firstChild.getClientRects(), l = 0; l < o.length - 1; l++) {
                            var s = o[l]
                                , a = o[l + 1];
                            2 < Math.abs(s.bottom - a.bottom) && i.push((s.bottom + a.top) / 2 - n.top)
                        }
                    }
                    i.push(n.bottom - n.top)
                }
            }(e, t.view, t.rect),
                t.hasHeights = !0),
            (o = function (e, t, n, r) {
                var i, o = Nn(t.map, n, r), l = o.node, s = o.start, a = o.end, u = o.collapse;
                if (3 == l.nodeType) {
                    for (var c = 0; c < 4; c++) {
                        for (; s && ne(t.line.text.charAt(o.coverStart + s));)
                            --s;
                        for (; o.coverStart + a < o.coverEnd && ne(t.line.text.charAt(o.coverStart + a));)
                            ++a;
                        if ((i = w && v < 9 && 0 == s && a == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : function (e, t) {
                            var n = Mn;
                            if ("left" == t)
                                for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
                                    ;
                            else
                                for (var i = e.length - 1; 0 <= i && (n = e[i]).left == n.right; i--)
                                    ;
                            return n
                        }(W(l, s, a).getClientRects(), r)).left || i.right || 0 == s)
                            break;
                        a = s,
                            s -= 1,
                            u = "right"
                    }
                    w && v < 11 && (i = function (e, t) {
                        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                            if (null != Ee)
                                return Ee;
                            var e = (t = k(e, M("span", "x"))).getBoundingClientRect()
                                , t = W(t, 0, 1).getBoundingClientRect();
                            return Ee = 1 < Math.abs(e.left - t.left)
                        }(e))
                            return t;
                        var n = screen.logicalXDPI / screen.deviceXDPI
                            , e = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                            left: t.left * n,
                            right: t.right * n,
                            top: t.top * e,
                            bottom: t.bottom * e
                        }
                    }(e.display.measure, i))
                } else
                    0 < s && (u = r = "right"),
                        i = e.options.lineWrapping && 1 < (g = l.getClientRects()).length ? g["right" == r ? g.length - 1 : 0] : l.getBoundingClientRect();
                !(w && v < 9) || s || i && (i.left || i.right) || (m = l.parentNode.getClientRects()[0],
                    i = m ? {
                        left: m.left,
                        right: m.left + _n(e.display),
                        top: m.top,
                        bottom: m.bottom
                    } : Mn);
                for (var h = i.top - t.rect.top, n = i.bottom - t.rect.top, d = (h + n) / 2, f = t.view.measure.heights, p = 0; p < f.length - 1 && !(d < f[p]); p++)
                    ;
                var g = p ? f[p - 1] : 0
                    , m = f[p]
                    , m = {
                        left: ("right" == u ? i.right : i.left) - t.rect.left,
                        right: ("left" == u ? i.left : i.right) - t.rect.left,
                        top: g,
                        bottom: m
                    };
                i.left || i.right || (m.bogus = !0);
                e.options.singleCursorHeightPerLine || (m.rtop = h,
                    m.rbottom = n);
                return m
            }(e, t, n, r)).bogus || (t.cache[l] = o)),
        {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
        }
    }
    var Tn, Mn = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    function Nn(e, t, n) {
        for (var r, i, o, l, s, a, u = 0; u < e.length; u += 3)
            if (s = e[u],
                a = e[u + 1],
                t < s ? (i = 0,
                    o = 1,
                    l = "left") : t < a ? o = (i = t - s) + 1 : (u == e.length - 3 || t == a && e[u + 3] > t) && (i = (o = a - s) - 1,
                        a <= t && (l = "right")),
                null != i) {
                if (r = e[u + 2],
                    s == a && n == (r.insertLeft ? "left" : "right") && (l = n),
                    "left" == n && 0 == i)
                    for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;)
                        r = e[2 + (u -= 3)],
                            l = "left";
                if ("right" == n && i == a - s)
                    for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;)
                        r = e[(u += 3) + 2],
                            l = "right";
                break
            }
        return {
            node: r,
            start: i,
            end: o,
            collapse: l,
            coverStart: s,
            coverEnd: a
        }
    }
    function On(e) {
        if (e.measure && (e.measure.cache = {},
            e.measure.heights = null,
            e.rest))
            for (var t = 0; t < e.rest.length; t++)
                e.measure.caches[t] = {}
    }
    function An(e) {
        e.display.externalMeasure = null,
            L(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
            On(e.display.view[t])
    }
    function Dn(e) {
        An(e),
            e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            e.display.lineNumChars = null
    }
    function Wn() {
        return o && a ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function Hn() {
        return o && a ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function Fn(e) {
        var t = 0;
        if (e.widgets)
            for (var n = 0; n < e.widgets.length; ++n)
                e.widgets[n].above && (t += fn(e.widgets[n]));
        return t
    }
    function Pn(e, t, n, r, i) {
        if (i || (i = Fn(t),
            n.top += i,
            n.bottom += i),
            "line" == r)
            return n;
        r = r || "local";
        t = Gt(t);
        return "local" == r ? t += gn(e.display) : t -= e.display.viewOffset,
            "page" != r && "window" != r || (t += (e = e.display.lineSpace.getBoundingClientRect()).top + ("window" == r ? 0 : Hn()),
                r = e.left + ("window" == r ? 0 : Wn()),
                n.left += r,
                n.right += r),
            n.top += t,
            n.bottom += t,
            n
    }
    function En(e, t, n) {
        if ("div" == n)
            return t;
        var r = t.left
            , t = t.top;
        "page" == n ? (r -= Wn(),
            t -= Hn()) : "local" != n && n || (r += (n = e.display.sizer.getBoundingClientRect()).left,
                t += n.top);
        e = e.display.lineSpace.getBoundingClientRect();
        return {
            left: r - e.left,
            top: t - e.top
        }
    }
    function In(e, t, n, r, i) {
        return Pn(e, r = r || Ye(e.doc, t.line), Cn(e, r, t.ch, i), n)
    }
    function Rn(n, e, r, i, o, l) {
        function s(e, t) {
            e = kn(n, o, e, t ? "right" : "left", l);
            return t ? e.left = e.right : e.right = e.left,
                Pn(n, i, e, r)
        }
        i = i || Ye(n.doc, e.line),
            o = o || Ln(n, i);
        var a = pe(i, n.doc.direction)
            , t = e.ch
            , u = e.sticky;
        if (t >= i.text.length ? (t = i.text.length,
            u = "before") : t <= 0 && (t = 0,
                u = "after"),
            !a)
            return s("before" == u ? t - 1 : t, "before" == u);
        function c(e, t, n) {
            return s(n ? e - 1 : e, 1 == a[t].level != n)
        }
        var h = le(a, t, u)
            , e = oe
            , h = c(t, h, "before" == u);
        return null != e && (h.other = c(t, e, "before" != u)),
            h
    }
    function zn(e, t) {
        var n = 0;
        t = at(e.doc, t),
            e.options.lineWrapping || (n = _n(e.display) * t.ch);
        t = Ye(e.doc, t.line),
            e = Gt(t) + gn(e.display);
        return {
            left: n,
            right: n,
            top: e,
            bottom: e + t.height
        }
    }
    function Bn(e, t, n, r, i) {
        n = tt(e, t, n);
        return n.xRel = i,
            r && (n.outside = r),
            n
    }
    function Gn(e, t, n) {
        var r = e.doc;
        if ((n += e.display.viewOffset) < 0)
            return Bn(r.first, 0, null, -1, -1);
        var i = Qe(r, n)
            , o = r.first + r.size - 1;
        if (o < i)
            return Bn(r.first + r.size - 1, Ye(r, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var l = Ye(r, i); ;) {
            var s = function (n, e, t, r, i) {
                i -= Gt(e);
                var o = Ln(n, e)
                    , l = Fn(e)
                    , s = 0
                    , a = e.text.length
                    , u = !0
                    , c = pe(e, n.doc.direction);
                c && (f = (n.options.lineWrapping ? Xn : jn)(n, e, t, o, c, r, i),
                    u = 1 != f.level,
                    s = u ? f.from : f.to - 1,
                    a = u ? f.to : f.from - 1);
                var h = null
                    , d = null
                    , c = ie(function (e) {
                        var t = kn(n, o, e);
                        return t.top += l,
                            t.bottom += l,
                            Kn(t, r, i, !1) && (t.top <= i && t.left <= r && (h = e,
                                d = t),
                                1)
                    }, s, a)
                    , f = !1;
                {
                    var p, g;
                    d ? (p = r - d.left < d.right - r,
                        c = h + ((g = p == u) ? 0 : 1),
                        g = g ? "after" : "before",
                        p = p ? d.left : d.right) : (u || c != a && c != s || c++,
                            g = 0 == c || c != e.text.length && kn(n, o, c - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before",
                            u = Rn(n, tt(t, c, g), "line", e, o),
                            p = u.left,
                            f = i < u.top ? -1 : i >= u.bottom ? 1 : 0)
                }
                return c = re(e.text, c, 1),
                    Bn(t, c, g, f, r - p)
            }(e, l, i, t, n)
                , a = function (e, t) {
                    var n, r = St && e.markedSpans;
                    if (r)
                        for (var i = 0; i < r.length; ++i) {
                            var o = r[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Wt(n, o.marker) < 0) && (n = o.marker)
                        }
                    return n
                }(l, s.ch + (0 < s.xRel || 0 < s.outside ? 1 : 0));
            if (!a)
                return s;
            a = a.find(1);
            if (a.line == i)
                return a;
            l = Ye(r, i = a.line)
        }
    }
    function Un(t, e, n, r) {
        r -= Fn(e);
        var i = e.text.length
            , e = ie(function (e) {
                return kn(t, n, e - 1).bottom <= r
            }, i, 0);
        return {
            begin: e,
            end: i = ie(function (e) {
                return kn(t, n, e).top > r
            }, e, i)
        }
    }
    function Vn(e, t, n, r) {
        return Un(e, t, n = n || Ln(e, t), Pn(e, t, kn(e, n, r), "line").top)
    }
    function Kn(e, t, n, r) {
        return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
    }
    function jn(n, r, i, o, l, s, a) {
        var e, t = ie(function (e) {
            var t = l[e]
                , e = 1 != t.level;
            return Kn(Rn(n, tt(i, e ? t.to : t.from, e ? "before" : "after"), "line", r, o), s, a, !0)
        }, 0, l.length - 1), u = l[t];
        return 0 < t && (e = 1 != u.level,
            Kn(e = Rn(n, tt(i, e ? u.from : u.to, e ? "after" : "before"), "line", r, o), s, a, !0) && e.top > a && (u = l[t - 1])),
            u
    }
    function Xn(e, t, n, r, i, o, l) {
        var l = Un(e, t, r, l)
            , s = l.begin
            , a = l.end;
        /\s/.test(t.text.charAt(a - 1)) && a--;
        for (var u = null, c = null, h = 0; h < i.length; h++) {
            var d, f = i[h];
            f.from >= a || f.to <= s || (d = (d = kn(e, r, 1 != f.level ? Math.min(a, f.to) - 1 : Math.max(s, f.from)).right) < o ? o - d + 1e9 : d - o,
                (!u || d < c) && (u = f,
                    c = d))
        }
        return u = (u = (u = u || i[i.length - 1]).from < s ? {
            from: s,
            to: u.to,
            level: u.level
        } : u).to > a ? {
            from: u.from,
            to: a,
            level: u.level
        } : u
    }
    function Yn(e) {
        if (null != e.cachedTextHeight)
            return e.cachedTextHeight;
        if (null == Tn) {
            Tn = M("pre", null, "CodeMirror-line-like");
            for (var t = 0; t < 49; ++t)
                Tn.appendChild(document.createTextNode("x")),
                    Tn.appendChild(M("br"));
            Tn.appendChild(document.createTextNode("x"))
        }
        k(e.measure, Tn);
        var n = Tn.offsetHeight / 50;
        return 3 < n && (e.cachedTextHeight = n),
            L(e.measure),
            n || 1
    }
    function _n(e) {
        if (null != e.cachedCharWidth)
            return e.cachedCharWidth;
        var t = M("span", "xxxxxxxxxx")
            , n = M("pre", [t], "CodeMirror-line-like");
        k(e.measure, n);
        t = t.getBoundingClientRect(),
            t = (t.right - t.left) / 10;
        return 2 < t && (e.cachedCharWidth = t),
            t || 10
    }
    function $n(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling,
            ++l) {
            var s = e.display.gutterSpecs[l].className;
            n[s] = o.offsetLeft + o.clientLeft + i,
                r[s] = o.clientWidth
        }
        return {
            fixedPos: qn(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
        }
    }
    function qn(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }
    function Zn(r) {
        var i = Yn(r.display)
            , o = r.options.lineWrapping
            , l = o && Math.max(5, r.display.scroller.clientWidth / _n(r.display) - 3);
        return function (e) {
            if (Bt(r.doc, e))
                return 0;
            var t = 0;
            if (e.widgets)
                for (var n = 0; n < e.widgets.length; n++)
                    e.widgets[n].height && (t += e.widgets[n].height);
            return o ? t + (Math.ceil(e.text.length / l) || 1) * i : t + i
        }
    }
    function Qn(e) {
        var t = e.doc
            , n = Zn(e);
        t.iter(function (e) {
            var t = n(e);
            t != e.height && qe(e, t)
        })
    }
    function Jn(e, t, n, r) {
        var i = e.display;
        if (!n && "true" == Ne(t).getAttribute("cm-not-content"))
            return null;
        var o, i = i.lineSpace.getBoundingClientRect();
        try {
            o = t.clientX - i.left,
                s = t.clientY - i.top
        } catch (e) {
            return null
        }
        var l, s = Gn(e, o, s);
        return r && 0 < s.xRel && (l = Ye(e.doc, s.line).text).length == s.ch && (l = E(l, l.length, e.options.tabSize) - l.length,
            s = tt(s.line, Math.max(0, Math.round((o - vn(e.display).left) / _n(e.display)) - l))),
            s
    }
    function er(e, t) {
        if (t >= e.display.viewTo)
            return null;
        if ((t -= e.display.viewFrom) < 0)
            return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
            if ((t -= n[r].size) < 0)
                return r
    }
    function tr(e, t, n, r) {
        null == t && (t = e.doc.first),
            null == n && (n = e.doc.first + e.doc.size);
        var i, o, l = e.display;
        (r = r || 0) && n < l.viewTo && (null == l.updateLineNumbers || l.updateLineNumbers > t) && (l.updateLineNumbers = t),
            e.curOp.viewChanged = !0,
            t >= l.viewTo ? St && Rt(e.doc, t) < l.viewTo && rr(e) : n <= l.viewFrom ? St && zt(e.doc, n + r) > l.viewFrom ? rr(e) : (l.viewFrom += r,
                l.viewTo += r) : t <= l.viewFrom && n >= l.viewTo ? rr(e) : t <= l.viewFrom ? (i = ir(e, n, n + r, 1)) ? (l.view = l.view.slice(i.index),
                    l.viewFrom = i.lineN,
                    l.viewTo += r) : rr(e) : n >= l.viewTo ? (o = ir(e, t, t, -1)) ? (l.view = l.view.slice(0, o.index),
                        l.viewTo = o.lineN) : rr(e) : (i = ir(e, t, t, -1),
                            o = ir(e, n, n + r, 1),
                            i && o ? (l.view = l.view.slice(0, i.index).concat(Jt(e, i.lineN, o.lineN)).concat(l.view.slice(o.index)),
                                l.viewTo += r) : rr(e));
        e = l.externalMeasured;
        e && (n < e.lineN ? e.lineN += r : t < e.lineN + e.size && (l.externalMeasured = null))
    }
    function nr(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display
            , i = e.display.externalMeasured;
        i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
            t < r.viewFrom || t >= r.viewTo || (null == (t = r.view[er(e, t)]).node || -1 == R(t = t.changes || (t.changes = []), n) && t.push(n))
    }
    function rr(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first,
            e.display.view = [],
            e.display.viewOffset = 0
    }
    function ir(e, t, n, r) {
        var i, o = er(e, t), l = e.display.view;
        if (!St || n == e.doc.first + e.doc.size)
            return {
                index: o,
                lineN: n
            };
        for (var s = e.display.viewFrom, a = 0; a < o; a++)
            s += l[a].size;
        if (s != t) {
            if (0 < r) {
                if (o == l.length - 1)
                    return null;
                i = s + l[o].size - t,
                    o++
            } else
                i = s - t;
            t += i,
                n += i
        }
        for (; Rt(e.doc, n) != n;) {
            if (o == (r < 0 ? 0 : l.length - 1))
                return null;
            n += r * l[o - (r < 0 ? 1 : 0)].size,
                o += r
        }
        return {
            index: o,
            lineN: n
        }
    }
    function or(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || i.node && !i.changes || ++n
        }
        return n
    }
    function lr(e) {
        e.display.input.showSelection(e.display.input.prepareSelection())
    }
    function sr(e, t) {
        void 0 === t && (t = !0);
        for (var n, r, i = e.doc, o = {}, l = o.cursors = document.createDocumentFragment(), s = o.selection = document.createDocumentFragment(), a = 0; a < i.sel.ranges.length; a++)
            !t && a == i.sel.primIndex || ((n = i.sel.ranges[a]).from().line >= e.display.viewTo || n.to().line < e.display.viewFrom || (((r = n.empty()) || e.options.showCursorWhenSelecting) && ar(e, n.head, l),
                r || function (i, e, t) {
                    var n = i.display
                        , o = i.doc
                        , l = document.createDocumentFragment()
                        , r = vn(i.display)
                        , S = r.left
                        , L = Math.max(n.sizerWidth, bn(i) - n.sizer.offsetLeft) - r.right
                        , k = "ltr" == o.direction;
                    function T(e, t, n, r) {
                        t < 0 && (t = 0),
                            t = Math.round(t),
                            r = Math.round(r),
                            l.appendChild(M("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? L - e : n) + "px;\n                             height: " + (r - t) + "px"))
                    }
                    function s(n, g, m) {
                        var v, y, r = Ye(o, n), b = r.text.length;
                        function w(e, t) {
                            return In(i, tt(n, e), "div", r, t)
                        }
                        function x(e, t, n) {
                            e = Vn(i, r, null, e),
                                t = "ltr" == t == ("after" == n) ? "left" : "right";
                            return w("after" == n ? e.begin : e.end - (/\s/.test(r.text.charAt(e.end - 1)) ? 2 : 1), t)[t]
                        }
                        var C = pe(r, o.direction);
                        return function (e, t, n, r) {
                            if (!e)
                                return r(t, n, "ltr", 0);
                            for (var i = !1, o = 0; o < e.length; ++o) {
                                var l = e[o];
                                (l.from < n && l.to > t || t == n && l.to == t) && (r(Math.max(l.from, t), Math.min(l.to, n), 1 == l.level ? "rtl" : "ltr", o),
                                    i = !0)
                            }
                            i || r(t, n, "ltr")
                        }(C, g || 0, null == m ? b : m, function (e, t, n, r) {
                            var i, o, l, s, a = "ltr" == n, u = w(e, a ? "left" : "right"), c = w(t - 1, a ? "right" : "left"), h = null == g && 0 == e, d = null == m && t == b, f = 0 == r, p = !C || r == C.length - 1;
                            c.top - u.top <= 3 ? (i = (k ? h : d) && f ? S : (a ? u : c).left,
                                r = (k ? d : h) && p ? L : (a ? c : u).right,
                                T(i, u.top, r - i, u.bottom)) : (n = a ? (o = k && h && f ? S : u.left,
                                    l = k ? L : x(e, n, "before"),
                                    s = k ? S : x(t, n, "after"),
                                    k && d && p ? L : c.right) : (o = k ? x(e, n, "before") : S,
                                        l = !k && h && f ? L : u.right,
                                        s = !k && d && p ? S : c.left,
                                        k ? x(t, n, "after") : L),
                                    T(o, u.top, l - o, u.bottom),
                                    u.bottom < c.top && T(S, u.bottom, null, c.top),
                                    T(s, c.top, n - s, c.bottom)),
                                (!v || ur(u, v) < 0) && (v = u),
                                ur(c, v) < 0 && (v = c),
                                (!y || ur(u, y) < 0) && (y = u),
                                ur(c, y) < 0 && (y = c)
                        }),
                        {
                            start: v,
                            end: y
                        }
                    }
                    var a = e.from()
                        , n = e.to();
                    a.line == n.line ? s(a.line, a.ch, n.ch) : (r = Ye(o, a.line),
                        e = Ye(o, n.line),
                        e = It(r) == It(e),
                        r = s(a.line, a.ch, e ? r.text.length + 1 : null).end,
                        n = s(n.line, e ? 0 : null, n.ch).start,
                        e && (r.top < n.top - 2 ? (T(r.right, r.top, null, r.bottom),
                            T(S, n.top, n.left, n.bottom)) : T(r.right, r.top, n.left - r.right, r.bottom)),
                        r.bottom < n.top && T(S, r.bottom, null, n.top));
                    t.appendChild(l)
                }(e, n, s)));
        return o
    }
    function ar(e, t, n) {
        var r = Rn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine)
            , i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
        i.style.left = r.left + "px",
            i.style.top = r.top + "px",
            i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px",
            !/\bcm-fat-cursor\b/.test(e.getWrapperElement().className) || 0 < (t = In(e, t, "div", null, null)).right - t.left && (i.style.width = t.right - t.left + "px"),
            r.other && ((n = n.appendChild(M("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"))).style.display = "",
                n.style.left = r.other.left + "px",
                n.style.top = r.other.top + "px",
                n.style.height = .85 * (r.other.bottom - r.other.top) + "px")
    }
    function ur(e, t) {
        return e.top - t.top || e.left - t.left
    }
    function cr(e) {
        var t, n;
        e.state.focused && (t = e.display,
            clearInterval(t.blinker),
            n = !0,
            t.cursorDiv.style.visibility = "",
            0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function () {
                e.hasFocus() || pr(e),
                    t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden"))
    }
    function hr(e) {
        e.hasFocus() || (e.display.input.focus(),
            e.state.focused || fr(e))
    }
    function dr(e) {
        e.state.delayingBlurEvent = !0,
            setTimeout(function () {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1,
                    e.state.focused && pr(e))
            }, 100)
    }
    function fr(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
            "nocursor" != e.options.readOnly && (e.state.focused || (be(e, "focus", e, t),
                e.state.focused = !0,
                A(e.display.wrapper, "CodeMirror-focused"),
                e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(),
                    f && setTimeout(function () {
                        return e.display.input.reset(!0)
                    }, 20)),
                e.display.input.receivedFocus()),
                cr(e))
    }
    function pr(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (be(e, "blur", e, t),
            e.state.focused = !1,
            S(e.display.wrapper, "CodeMirror-focused")),
            clearInterval(e.display.blinker),
            setTimeout(function () {
                e.state.focused || (e.display.shift = !1)
            }, 150))
    }
    function gr(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < t.view.length; l++) {
            var s, a = t.view[l], u = e.options.lineWrapping, c = void 0, h = 0;
            if (!a.hidden) {
                i += a.line.height,
                    w && v < 8 ? (c = (s = a.node.offsetTop + a.node.offsetHeight) - n,
                        n = s) : (c = (d = a.node.getBoundingClientRect()).bottom - d.top,
                            !u && a.text.firstChild && (h = a.text.firstChild.getBoundingClientRect().right - d.left - 1));
                var d = a.line.height - c;
                if ((.005 < d || d < -.005) && (i < r && (o -= d),
                    qe(a.line, c),
                    mr(a.line),
                    a.rest))
                    for (var f = 0; f < a.rest.length; f++)
                        mr(a.rest[f]);
                h > e.display.sizerWidth && ((h = Math.ceil(h / _n(e.display))) > e.display.maxLineLength && (e.display.maxLineLength = h,
                    e.display.maxLine = a.line,
                    e.display.maxLineChanged = !0))
            }
        }
        2 < Math.abs(o) && (t.scroller.scrollTop += o)
    }
    function mr(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t]
                    , r = n.node.parentNode;
                r && (n.height = r.offsetHeight)
            }
    }
    function vr(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop
            , r = Math.floor(r - gn(e))
            , i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight
            , o = Qe(t, r)
            , r = Qe(t, i);
        return n && n.ensure && (i = n.ensure.from.line,
            n = n.ensure.to.line,
            i < o ? r = Qe(t, Gt(Ye(t, o = i)) + e.wrapper.clientHeight) : Math.min(n, t.lastLine()) >= r && (o = Qe(t, Gt(Ye(t, n)) - e.wrapper.clientHeight),
                r = n)),
        {
            from: o,
            to: Math.max(r, o + 1)
        }
    }
    function yr(e, t) {
        var n = e.display
            , r = Yn(e.display);
        t.top < 0 && (t.top = 0);
        var i = (e.curOp && null != e.curOp.scrollTop ? e.curOp : n.scroller).scrollTop
            , o = wn(e)
            , l = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + mn(n)
            , a = t.top < r
            , r = t.bottom > s - r;
        t.top < i ? l.scrollTop = a ? 0 : t.top : t.bottom > i + o && ((u = Math.min(t.top, (r ? s : t.bottom) - o)) != i && (l.scrollTop = u));
        var i = e.options.fixedGutter ? 0 : n.gutters.offsetWidth
            , u = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - i
            , e = bn(e) - n.gutters.offsetWidth
            , n = t.right - t.left > e;
        return n && (t.right = t.left + e),
            t.left < 10 ? l.scrollLeft = 0 : t.left < u ? l.scrollLeft = Math.max(0, t.left + i - (n ? 0 : 10)) : t.right > e + u - 3 && (l.scrollLeft = t.right + (n ? 0 : 10) - e),
            l
    }
    function br(e, t) {
        null != t && (Cr(e),
            e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc : e.curOp).scrollTop + t)
    }
    function wr(e) {
        Cr(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
        }
    }
    function xr(e, t, n) {
        null == t && null == n || Cr(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n)
    }
    function Cr(e) {
        var t = e.curOp.scrollToPos;
        t && (e.curOp.scrollToPos = null,
            Sr(e, zn(e, t.from), zn(e, t.to), t.margin))
    }
    function Sr(e, t, n, r) {
        r = yr(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r
        });
        xr(e, r.scrollLeft, r.scrollTop)
    }
    function Lr(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (d || Kr(e, {
            top: t
        }),
            kr(e, t, !0),
            d && Kr(e),
            zr(e, 100))
    }
    function kr(e, t, n) {
        t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)),
            e.display.scroller.scrollTop == t && !n || (e.doc.scrollTop = t,
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
    }
    function Tr(e, t, n, r) {
        t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)),
            (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t,
                Yr(e),
                e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t))
    }
    function Mr(e) {
        var t = e.display
            , n = t.gutters.offsetWidth
            , r = Math.round(e.doc.height + mn(e.display));
        return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + yn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n
        }
    }
    e = function (e, t, n) {
        this.cm = n;
        var r = this.vert = M("div", [M("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
            , i = this.horiz = M("div", [M("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = i.tabIndex = -1,
            e(r),
            e(i),
            me(r, "scroll", function () {
                r.clientHeight && t(r.scrollTop, "vertical")
            }),
            me(i, "scroll", function () {
                i.clientWidth && t(i.scrollLeft, "horizontal")
            }),
            this.checkedZeroWidth = !1,
            w && v < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }
        ;
    e.prototype.update = function (e) {
        var t, n = e.scrollWidth > e.clientWidth + 1, r = e.scrollHeight > e.clientHeight + 1, i = e.nativeBarWidth;
        return r ? (this.vert.style.display = "block",
            this.vert.style.bottom = n ? i + "px" : "0",
            t = e.viewHeight - (n ? i : 0),
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + t) + "px") : (this.vert.style.display = "",
                this.vert.firstChild.style.height = "0"),
            n ? (this.horiz.style.display = "block",
                this.horiz.style.right = r ? i + "px" : "0",
                this.horiz.style.left = e.barLeft + "px",
                t = e.viewWidth - e.barLeft - (r ? i : 0),
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + t) + "px") : (this.horiz.style.display = "",
                    this.horiz.firstChild.style.width = "0"),
            !this.checkedZeroWidth && 0 < e.clientHeight && (0 == i && this.zeroWidthHack(),
                this.checkedZeroWidth = !0),
        {
            right: r ? i : 0,
            bottom: n ? i : 0
        }
    }
        ,
        e.prototype.setScrollLeft = function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }
        ,
        e.prototype.setScrollTop = function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }
        ,
        e.prototype.zeroWidthHack = function () {
            this.horiz.style.height = this.vert.style.width = g && !l ? "12px" : "18px",
                this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
                this.disableHoriz = new I,
                this.disableVert = new I
        }
        ,
        e.prototype.enableZeroWidthBar = function (n, r, i) {
            n.style.pointerEvents = "auto",
                r.set(1e3, function e() {
                    var t = n.getBoundingClientRect();
                    ("vert" == i ? document.elementFromPoint(t.right - 1, (t.top + t.bottom) / 2) : document.elementFromPoint((t.right + t.left) / 2, t.bottom - 1)) != n ? n.style.pointerEvents = "none" : r.set(1e3, e)
                })
        }
        ,
        e.prototype.clear = function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz),
                e.removeChild(this.vert)
        }
        ;
    r = function () { }
        ;
    function Nr(e, t) {
        t = t || Mr(e);
        var n = e.display.barWidth
            , r = e.display.barHeight;
        Or(e, t);
        for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
            n != e.display.barWidth && e.options.lineWrapping && gr(e),
                Or(e, Mr(e)),
                n = e.display.barWidth,
                r = e.display.barHeight
    }
    function Or(e, t) {
        var n = e.display
            , r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
            n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
            n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
            r.right && r.bottom ? (n.scrollbarFiller.style.display = "block",
                n.scrollbarFiller.style.height = r.bottom + "px",
                n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
            r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block",
                n.gutterFiller.style.height = r.bottom + "px",
                n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
    }
    r.prototype.update = function () {
        return {
            bottom: 0,
            right: 0
        }
    }
        ,
        r.prototype.setScrollLeft = function () { }
        ,
        r.prototype.setScrollTop = function () { }
        ,
        r.prototype.clear = function () { }
        ;
    var Ar = {
        native: e,
        null: r
    };
    function Dr(n) {
        n.display.scrollbars && (n.display.scrollbars.clear(),
            n.display.scrollbars.addClass && S(n.display.wrapper, n.display.scrollbars.addClass)),
            n.display.scrollbars = new Ar[n.options.scrollbarStyle](function (e) {
                n.display.wrapper.insertBefore(e, n.display.scrollbarFiller),
                    me(e, "mousedown", function () {
                        n.state.focused && setTimeout(function () {
                            return n.display.input.focus()
                        }, 0)
                    }),
                    e.setAttribute("cm-not-content", "true")
            }
                , function (e, t) {
                    ("horizontal" == t ? Tr : Lr)(n, e)
                }
                , n),
            n.display.scrollbars.addClass && A(n.display.wrapper, n.display.scrollbars.addClass)
    }
    var Wr = 0;
    function Hr(e) {
        e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Wr,
            markArrays: null
        },
            e = e.curOp,
            en ? en.ops.push(e) : e.ownsGroup = en = {
                ops: [e],
                delayedCallbacks: []
            }
    }
    function Fr(e) {
        e = e.curOp;
        e && tn(e, function (e) {
            for (var t = 0; t < e.ops.length; t++)
                e.ops[t].cm.curOp = null;
            !function (e) {
                for (var t = e.ops, n = 0; n < t.length; n++)
                    !function (e) {
                        var t = e.cm
                            , n = t.display;
                        (function (e) {
                            var t = e.display;
                            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth,
                                t.heightForcer.style.height = yn(e) + "px",
                                t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
                                t.sizer.style.borderRightWidth = yn(e) + "px",
                                t.scrollbarsClipped = !0)
                        }
                        )(t),
                            e.updateMaxLine && Vt(t);
                        e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping,
                            e.update = e.mustUpdate && new Gr(t, e.mustUpdate && {
                                top: e.scrollTop,
                                ensure: e.scrollToPos
                            }, e.forceUpdate)
                    }(t[n]);
                for (var r = 0; r < t.length; r++)
                    !function (e) {
                        e.updatedDisplay = e.mustUpdate && Ur(e.cm, e.update)
                    }(t[r]);
                for (var i = 0; i < t.length; i++)
                    !function (e) {
                        var t = e.cm
                            , n = t.display;
                        e.updatedDisplay && gr(t);
                        e.barMeasure = Mr(t),
                            n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Cn(t, n.maxLine, n.maxLine.text.length).left + 3,
                                t.display.sizerWidth = e.adjustWidthTo,
                                e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + yn(t) + t.display.barWidth),
                                e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - bn(t)));
                        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
                    }(t[i]);
                for (var o = 0; o < t.length; o++)
                    !function (e) {
                        var t = e.cm;
                        null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
                            e.maxScrollLeft < t.doc.scrollLeft && Tr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
                            t.display.maxLineChanged = !1);
                        var n = e.focus && e.focus == O();
                        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n);
                        !e.updatedDisplay && e.startHeight == t.doc.height || Nr(t, e.barMeasure);
                        e.updatedDisplay && Xr(t, e.barMeasure);
                        e.selectionChanged && cr(t);
                        t.state.focused && e.updateInput && t.display.input.reset(e.typing);
                        n && hr(e.cm)
                    }(t[o]);
                for (var l = 0; l < t.length; l++)
                    !function (e) {
                        var t = e.cm
                            , n = t.display
                            , r = t.doc;
                        e.updatedDisplay && Vr(t, e.update);
                        null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null);
                        null != e.scrollTop && kr(t, e.scrollTop, e.forceScroll);
                        null != e.scrollLeft && Tr(t, e.scrollLeft, !0, !0);
                        {
                            var i;
                            e.scrollToPos && (i = function (e, t, n, r) {
                                null == r && (r = 0),
                                    e.options.lineWrapping || t != n || (n = "before" == t.sticky ? tt(t.line, t.ch + 1, "before") : t,
                                        t = t.ch ? tt(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t);
                                for (var i = 0; i < 5; i++) {
                                    var o, l = !1, s = Rn(e, t), a = n && n != t ? Rn(e, n) : s, u = yr(e, o = {
                                        left: Math.min(s.left, a.left),
                                        top: Math.min(s.top, a.top) - r,
                                        right: Math.max(s.left, a.left),
                                        bottom: Math.max(s.bottom, a.bottom) + r
                                    }), s = e.doc.scrollTop, a = e.doc.scrollLeft;
                                    if (null != u.scrollTop && (Lr(e, u.scrollTop),
                                        1 < Math.abs(e.doc.scrollTop - s) && (l = !0)),
                                        null != u.scrollLeft && (Tr(e, u.scrollLeft),
                                            1 < Math.abs(e.doc.scrollLeft - a) && (l = !0)),
                                        !l)
                                        break
                                }
                                return o
                            }(t, at(r, e.scrollToPos.from), at(r, e.scrollToPos.to), e.scrollToPos.margin),
                                function (e, t) {
                                    var n, r, i;
                                    we(e, "scrollCursorIntoView") || (r = (n = e.display).sizer.getBoundingClientRect(),
                                        i = null,
                                        t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                                        null == i || u || (t = M("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - gn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + yn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;"),
                                            e.display.lineSpace.appendChild(t),
                                            t.scrollIntoView(i),
                                            e.display.lineSpace.removeChild(t)))
                                }(t, i))
                        }
                        var o = e.maybeHiddenMarkers
                            , l = e.maybeUnhiddenMarkers;
                        if (o)
                            for (var s = 0; s < o.length; ++s)
                                o[s].lines.length || be(o[s], "hide");
                        if (l)
                            for (var a = 0; a < l.length; ++a)
                                l[a].lines.length && be(l[a], "unhide");
                        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop);
                        e.changeObjs && be(t, "changes", t, e.changeObjs);
                        e.update && e.update.finish()
                    }(t[l])
            }(e)
        })
    }
    function Pr(e, t) {
        if (e.curOp)
            return t();
        Hr(e);
        try {
            return t()
        } finally {
            Fr(e)
        }
    }
    function Er(e, t) {
        return function () {
            if (e.curOp)
                return t.apply(e, arguments);
            Hr(e);
            try {
                return t.apply(e, arguments)
            } finally {
                Fr(e)
            }
        }
    }
    function Ir(e) {
        return function () {
            if (this.curOp)
                return e.apply(this, arguments);
            Hr(this);
            try {
                return e.apply(this, arguments)
            } finally {
                Fr(this)
            }
        }
    }
    function Rr(t) {
        return function () {
            var e = this.cm;
            if (!e || e.curOp)
                return t.apply(this, arguments);
            Hr(e);
            try {
                return t.apply(this, arguments)
            } finally {
                Fr(e)
            }
        }
    }
    function zr(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, F(Br, e))
    }
    function Br(l) {
        var s, a, u, c = l.doc;
        c.highlightFrontier >= l.display.viewTo || (s = +new Date + l.options.workTime,
            a = pt(l, c.highlightFrontier),
            u = [],
            c.iter(a.line, Math.min(c.first + c.size, l.display.viewTo + 500), function (e) {
                if (a.line >= l.display.viewFrom) {
                    var t = e.styles
                        , n = e.text.length > l.options.maxHighlightLength ? Ve(c.mode, a.state) : null
                        , r = dt(l, e, a, !0);
                    n && (a.state = n),
                        e.styles = r.styles;
                    n = e.styleClasses,
                        r = r.classes;
                    r ? e.styleClasses = r : n && (e.styleClasses = null);
                    for (var i = !t || t.length != e.styles.length || n != r && (!n || !r || n.bgClass != r.bgClass || n.textClass != r.textClass), o = 0; !i && o < t.length; ++o)
                        i = t[o] != e.styles[o];
                    i && u.push(a.line),
                        e.stateAfter = a.save(),
                        a.nextLine()
                } else
                    e.text.length <= l.options.maxHighlightLength && gt(l, e.text, a),
                        e.stateAfter = a.line % 5 == 0 ? a.save() : null,
                        a.nextLine();
                if (+new Date > s)
                    return zr(l, l.options.workDelay),
                        !0
            }),
            c.highlightFrontier = a.line,
            c.modeFrontier = Math.max(c.modeFrontier, a.line),
            u.length && Pr(l, function () {
                for (var e = 0; e < u.length; e++)
                    nr(l, u[e], "text")
            }))
    }
    var Gr = function (e, t, n) {
        var r = e.display;
        this.viewport = t,
            this.visible = vr(r, e.doc, t),
            this.editorIsHidden = !r.wrapper.offsetWidth,
            this.wrapperHeight = r.wrapper.clientHeight,
            this.wrapperWidth = r.wrapper.clientWidth,
            this.oldDisplayWidth = bn(e),
            this.force = n,
            this.dims = $n(e),
            this.events = []
    };
    function Ur(e, t) {
        var n = e.display
            , r = e.doc;
        if (t.editorIsHidden)
            return rr(e),
                !1;
        if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == or(e))
            return !1;
        _r(e) && (rr(e),
            t.dims = $n(e));
        var i = r.first + r.size
            , o = Math.max(t.visible.from - e.options.viewportMargin, r.first)
            , l = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
            n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
            St && (o = Rt(e.doc, o),
                l = zt(e.doc, l));
        var s = o != n.viewFrom || l != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
        r = o,
            i = l,
            0 == (l = (o = e).display).view.length || r >= l.viewTo || i <= l.viewFrom ? (l.view = Jt(o, r, i),
                l.viewFrom = r) : (l.viewFrom > r ? l.view = Jt(o, r, l.viewFrom).concat(l.view) : l.viewFrom < r && (l.view = l.view.slice(er(o, r))),
                    l.viewFrom = r,
                    l.viewTo < i ? l.view = l.view.concat(Jt(o, l.viewTo, i)) : l.viewTo > i && (l.view = l.view.slice(0, er(o, i)))),
            l.viewTo = i,
            n.viewOffset = Gt(Ye(e.doc, n.viewFrom)),
            e.display.mover.style.top = n.viewOffset + "px";
        o = or(e);
        if (!s && 0 == o && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo))
            return !1;
        l = function (e) {
            if (e.hasFocus())
                return null;
            var t = O();
            if (!t || !N(e.display.lineDiv, t))
                return null;
            var n = {
                activeElt: t
            };
            return !window.getSelection || (t = window.getSelection()).anchorNode && t.extend && N(e.display.lineDiv, t.anchorNode) && (n.anchorNode = t.anchorNode,
                n.anchorOffset = t.anchorOffset,
                n.focusNode = t.focusNode,
                n.focusOffset = t.focusOffset),
                n
        }(e);
        return 4 < o && (n.lineDiv.style.display = "none"),
            function (n, e, t) {
                var r = n.display
                    , i = n.options.lineNumbers
                    , o = r.lineDiv
                    , l = o.firstChild;
                function s(e) {
                    var t = e.nextSibling;
                    return f && g && n.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e),
                        t
                }
                for (var a = r.view, u = r.viewFrom, c = 0; c < a.length; c++) {
                    var h = a[c];
                    if (!h.hidden)
                        if (h.node && h.node.parentNode == o) {
                            for (; l != h.node;)
                                l = s(l);
                            var d = i && null != e && e <= u && h.lineNumber;
                            h.changes && (-1 < R(h.changes, "gutter") && (d = !1),
                                ln(n, h, u, t)),
                                d && (L(h.lineNumber),
                                    h.lineNumber.appendChild(document.createTextNode(et(n.options, u)))),
                                l = h.node.nextSibling
                        } else {
                            d = function (e, t, n, r) {
                                var i = an(e, t);
                                return t.text = t.node = i.pre,
                                    i.bgClass && (t.bgClass = i.bgClass),
                                    i.textClass && (t.textClass = i.textClass),
                                    un(e, t),
                                    cn(e, t, n, r),
                                    hn(e, t, r),
                                    t.node
                            }(n, h, u, t);
                            o.insertBefore(d, l)
                        }
                    u += h.size
                }
                for (; l;)
                    l = s(l)
            }(e, n.updateLineNumbers, t.dims),
            4 < o && (n.lineDiv.style.display = ""),
            n.renderedView = n.view,
            (i = l) && i.activeElt && i.activeElt != O() && (i.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(i.activeElt.nodeName) && i.anchorNode && N(document.body, i.anchorNode) && N(document.body, i.focusNode) && (o = window.getSelection(),
                    (l = document.createRange()).setEnd(i.anchorNode, i.anchorOffset),
                    l.collapse(!1),
                    o.removeAllRanges(),
                    o.addRange(l),
                    o.extend(i.focusNode, i.focusOffset))),
            L(n.cursorDiv),
            L(n.selectionDiv),
            n.gutters.style.height = n.sizer.style.minHeight = 0,
            s && (n.lastWrapHeight = t.wrapperHeight,
                n.lastWrapWidth = t.wrapperWidth,
                zr(e, 400)),
            !(n.updateLineNumbers = null)
    }
    function Vr(e, t) {
        for (var n = t.viewport, r = !0; ; r = !1) {
            if (r && e.options.lineWrapping && t.oldDisplayWidth != bn(e))
                r && (t.visible = vr(e.display, e.doc, n));
            else if (n && null != n.top && (n = {
                top: Math.min(e.doc.height + mn(e.display) - wn(e), n.top)
            }),
                t.visible = vr(e.display, e.doc, n),
                t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                break;
            if (!Ur(e, t))
                break;
            gr(e);
            var i = Mr(e);
            lr(e),
                Nr(e, i),
                Xr(e, i),
                t.force = !1
        }
        t.signal(e, "update", e),
            e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
                e.display.reportedViewFrom = e.display.viewFrom,
                e.display.reportedViewTo = e.display.viewTo)
    }
    function Kr(e, t) {
        var n = new Gr(e, t);
        Ur(e, n) && (gr(e),
            Vr(e, n),
            t = Mr(e),
            lr(e),
            Nr(e, t),
            Xr(e, t),
            n.finish())
    }
    function jr(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px",
            rn(e, "gutterChanged", e)
    }
    function Xr(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px",
            e.display.heightForcer.style.top = t.docHeight + "px",
            e.display.gutters.style.height = t.docHeight + e.display.barHeight + yn(e) + "px"
    }
    function Yr(e) {
        var t = e.display
            , n = t.view;
        if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var r = qn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", l = 0; l < n.length; l++)
                if (!n[l].hidden) {
                    e.options.fixedGutter && (n[l].gutter && (n[l].gutter.style.left = o),
                        n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
                    var s = n[l].alignable;
                    if (s)
                        for (var a = 0; a < s.length; a++)
                            s[a].style.left = o
                }
            e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
        }
    }
    function _r(e) {
        if (e.options.lineNumbers) {
            var t = e.doc
                , n = et(e.options, t.first + t.size - 1)
                , r = e.display;
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(M("div", [M("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
                    , t = i.firstChild.offsetWidth
                    , i = i.offsetWidth - t;
                return r.lineGutter.style.width = "",
                    r.lineNumInnerWidth = Math.max(t, r.lineGutter.offsetWidth - i) + 1,
                    r.lineNumWidth = r.lineNumInnerWidth + i,
                    r.lineNumChars = r.lineNumInnerWidth ? n.length : -1,
                    r.lineGutter.style.width = r.lineNumWidth + "px",
                    jr(e.display),
                    1
            }
        }
    }
    function $r(e, t) {
        for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i]
                , l = null;
            if ("string" != typeof o && (l = o.style,
                o = o.className),
                "CodeMirror-linenumbers" == o) {
                if (!t)
                    continue;
                r = !0
            }
            n.push({
                className: o,
                style: l
            })
        }
        return t && !r && n.push({
            className: "CodeMirror-linenumbers",
            style: null
        }),
            n
    }
    function qr(e) {
        var t = e.gutters
            , n = e.gutterSpecs;
        L(t),
            e.lineGutter = null;
        for (var r = 0; r < n.length; ++r) {
            var i = n[r]
                , o = i.className
                , l = i.style
                , i = t.appendChild(M("div", null, "CodeMirror-gutter " + o));
            l && (i.style.cssText = l),
                "CodeMirror-linenumbers" == o && ((e.lineGutter = i).style.width = (e.lineNumWidth || 1) + "px")
        }
        t.style.display = n.length ? "" : "none",
            jr(e)
    }
    function Zr(e) {
        qr(e.display),
            tr(e),
            Yr(e)
    }
    function Qr(e, t, n, r) {
        var i = this;
        this.input = n,
            i.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler"),
            i.scrollbarFiller.setAttribute("cm-not-content", "true"),
            i.gutterFiller = M("div", null, "CodeMirror-gutter-filler"),
            i.gutterFiller.setAttribute("cm-not-content", "true"),
            i.lineDiv = T("div", null, "CodeMirror-code"),
            i.selectionDiv = M("div", null, null, "position: relative; z-index: 1"),
            i.cursorDiv = M("div", null, "CodeMirror-cursors"),
            i.measure = M("div", null, "CodeMirror-measure"),
            i.lineMeasure = M("div", null, "CodeMirror-measure"),
            i.lineSpace = T("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
        var o = T("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = M("div", [o], null, "position: relative"),
            i.sizer = M("div", [i.mover], "CodeMirror-sizer"),
            i.sizerWidth = null,
            i.heightForcer = M("div", null, null, "position: absolute; height: " + z + "px; width: 1px;"),
            i.gutters = M("div", null, "CodeMirror-gutters"),
            i.lineGutter = null,
            i.scroller = M("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"),
            i.scroller.setAttribute("tabIndex", "-1"),
            i.wrapper = M("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"),
            i.wrapper.setAttribute("translate", "no"),
            w && v < 8 && (i.gutters.style.zIndex = -1,
                i.scroller.style.paddingRight = 0),
            f || d && h || (i.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
            i.viewFrom = i.viewTo = t.first,
            i.reportedViewFrom = i.reportedViewTo = t.first,
            i.view = [],
            i.renderedView = null,
            i.externalMeasured = null,
            i.viewOffset = 0,
            i.lastWrapHeight = i.lastWrapWidth = 0,
            i.updateLineNumbers = null,
            i.nativeBarWidth = i.barHeight = i.barWidth = 0,
            i.scrollbarsClipped = !1,
            i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null,
            i.alignWidgets = !1,
            i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null,
            i.maxLine = null,
            i.maxLineLength = 0,
            i.maxLineChanged = !1,
            i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null,
            i.shift = !1,
            i.selForContextMenu = null,
            i.activeTouch = null,
            i.gutterSpecs = $r(r.gutters, r.lineNumbers),
            qr(i),
            n.init(i)
    }
    Gr.prototype.signal = function (e, t) {
        Ce(e, t) && this.events.push(arguments)
    }
        ,
        Gr.prototype.finish = function () {
            for (var e = 0; e < this.events.length; e++)
                be.apply(null, this.events[e])
        }
        ;
    var Jr = 0
        , ei = null;
    function ti(e) {
        var t = e.wheelDeltaX
            , n = e.wheelDeltaY;
        return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta),
        {
            x: t,
            y: n
        }
    }
    function ni(e) {
        e = ti(e);
        return e.x *= ei,
            e.y *= ei,
            e
    }
    function ri(e, t) {
        var n = ti(t)
            , r = n.x
            , i = n.y
            , o = ei;
        0 === event.deltaMode && (r = t.deltaX,
            i = t.deltaY,
            o = 1);
        var l = e.display
            , s = l.scroller
            , a = s.scrollWidth > s.clientWidth
            , n = s.scrollHeight > s.clientHeight;
        if (r && a || i && n) {
            if (i && g && f)
                e: for (var u = t.target, c = l.view; u != s; u = u.parentNode)
                    for (var h = 0; h < c.length; h++)
                        if (c[h].node == u) {
                            e.display.currentWheelTarget = u;
                            break e
                        }
            if (r && !d && !p && null != o)
                return i && n && Lr(e, Math.max(0, s.scrollTop + i * o)),
                    Tr(e, Math.max(0, s.scrollLeft + r * o)),
                    i && !n || Le(t),
                    void (l.wheelStartX = null);
            i && null != o && (n = (a = e.doc.scrollTop) + l.wrapper.clientHeight,
                (o = i * o) < 0 ? a = Math.max(0, a + o - 50) : n = Math.min(e.doc.height, n + o + 50),
                Kr(e, {
                    top: a,
                    bottom: n
                })),
                Jr < 20 && 0 !== t.deltaMode && (null == l.wheelStartX ? (l.wheelStartX = s.scrollLeft,
                    l.wheelStartY = s.scrollTop,
                    l.wheelDX = r,
                    l.wheelDY = i,
                    setTimeout(function () {
                        var e, t;
                        null != l.wheelStartX && (t = s.scrollLeft - l.wheelStartX,
                            t = (e = s.scrollTop - l.wheelStartY) && l.wheelDY && e / l.wheelDY || t && l.wheelDX && t / l.wheelDX,
                            l.wheelStartX = l.wheelStartY = null,
                            t && (ei = (ei * Jr + t) / (Jr + 1),
                                ++Jr))
                    }, 200)) : (l.wheelDX += r,
                        l.wheelDY += i))
        }
    }
    w ? ei = -.53 : d ? ei = 15 : o ? ei = -.7 : c && (ei = -1 / 3);
    var ii = function (e, t) {
        this.ranges = e,
            this.primIndex = t
    };
    ii.prototype.primary = function () {
        return this.ranges[this.primIndex]
    }
        ,
        ii.prototype.equals = function (e) {
            if (e == this)
                return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
                return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t]
                    , r = e.ranges[t];
                if (!rt(n.anchor, r.anchor) || !rt(n.head, r.head))
                    return !1
            }
            return !0
        }
        ,
        ii.prototype.deepCopy = function () {
            for (var e = [], t = 0; t < this.ranges.length; t++)
                e[t] = new oi(it(this.ranges[t].anchor), it(this.ranges[t].head));
            return new ii(e, this.primIndex)
        }
        ,
        ii.prototype.somethingSelected = function () {
            for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty())
                    return !0;
            return !1
        }
        ,
        ii.prototype.contains = function (e, t) {
            t = t || e;
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (0 <= nt(t, r.from()) && nt(e, r.to()) <= 0)
                    return n
            }
            return -1
        }
        ;
    var oi = function (e, t) {
        this.anchor = e,
            this.head = t
    };
    function li(e, t, n) {
        var r = e && e.options.selectionsMayTouch
            , e = t[n];
        t.sort(function (e, t) {
            return nt(e.from(), t.from())
        }),
            n = R(t, e);
        for (var i = 1; i < t.length; i++) {
            var o, l = t[i], s = t[i - 1], a = nt(s.to(), l.from());
            (r && !l.empty() ? 0 < a : 0 <= a) && (o = lt(s.from(), l.from()),
                a = ot(s.to(), l.to()),
                s = s.empty() ? l.from() == l.head : s.from() == s.head,
                i <= n && --n,
                t.splice(--i, 2, new oi(s ? a : o, s ? o : a)))
        }
        return new ii(t, n)
    }
    function si(e, t) {
        return new ii([new oi(e, t || e)], 0)
    }
    function ai(e) {
        return e.text ? tt(e.from.line + e.text.length - 1, Y(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    }
    function ui(e, t) {
        if (nt(e, t.from) < 0)
            return e;
        if (nt(e, t.to) <= 0)
            return ai(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1
            , r = e.ch;
        return e.line == t.to.line && (r += ai(t).ch - t.to.ch),
            tt(n, r)
    }
    function ci(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new oi(ui(i.anchor, t), ui(i.head, t)))
        }
        return li(e.cm, n, e.sel.primIndex)
    }
    function hi(e, t, n) {
        return e.line == t.line ? tt(n.line, e.ch - t.ch + n.ch) : tt(n.line + (e.line - t.line), e.ch)
    }
    function di(e) {
        e.doc.mode = Be(e.options, e.doc.modeOption),
            fi(e)
    }
    function fi(e) {
        e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null)
        }),
            e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
            zr(e, 100),
            e.state.modeGen++,
            e.curOp && tr(e)
    }
    function pi(e, t) {
        return 0 == t.from.ch && 0 == t.to.ch && "" == Y(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }
    function gi(e, o, t, l) {
        function i(e) {
            return t ? t[e] : null
        }
        function n(e, t, n) {
            var r, i;
            r = n,
                i = l,
                (n = e).text = t,
                n.stateAfter && (n.stateAfter = null),
                n.styles && (n.styles = null),
                null != n.order && (n.order = null),
                Nt(n),
                Ot(n, r),
                (i = i ? i(n) : 1) != n.height && qe(n, i),
                rn(e, "change", e, o)
        }
        function r(e, t) {
            for (var n = [], r = e; r < t; ++r)
                n.push(new Kt(c[r], i(r), l));
            return n
        }
        var s, a = o.from, u = o.to, c = o.text, h = Ye(e, a.line), d = Ye(e, u.line), f = Y(c), p = i(c.length - 1), g = u.line - a.line;
        o.full ? (e.insert(0, r(0, c.length)),
            e.remove(c.length, e.size - c.length)) : pi(e, o) ? (s = r(0, c.length - 1),
                n(d, d.text, p),
                g && e.remove(a.line, g),
                s.length && e.insert(a.line, s)) : h == d ? 1 == c.length ? n(h, h.text.slice(0, a.ch) + f + h.text.slice(u.ch), p) : ((s = r(1, c.length - 1)).push(new Kt(f + h.text.slice(u.ch), p, l)),
                    n(h, h.text.slice(0, a.ch) + c[0], i(0)),
                    e.insert(a.line + 1, s)) : 1 == c.length ? (n(h, h.text.slice(0, a.ch) + c[0] + d.text.slice(u.ch), i(0)),
                        e.remove(a.line + 1, g)) : (n(h, h.text.slice(0, a.ch) + c[0], i(0)),
                            n(d, f + d.text.slice(u.ch), p),
                            p = r(1, c.length - 1),
                            1 < g && e.remove(a.line + 1, g - 1),
                            e.insert(a.line + 1, p)),
            rn(e, "change", e, o)
    }
    function mi(e, s, a) {
        !function e(t, n, r) {
            if (t.linked)
                for (var i = 0; i < t.linked.length; ++i) {
                    var o, l = t.linked[i];
                    l.doc != n && (o = r && l.sharedHist,
                        a && !o || (s(l.doc, o),
                            e(l.doc, t, o)))
                }
        }(e, null, !0)
    }
    function vi(e, t) {
        if (t.cm)
            throw new Error("This document is already in use.");
        Qn((e.doc = t).cm = e),
            di(e),
            yi(e),
            e.options.direction = t.direction,
            e.options.lineWrapping || Vt(e),
            e.options.mode = t.modeOption,
            tr(e)
    }
    function yi(e) {
        ("rtl" == e.doc.direction ? A : S)(e.display.lineDiv, "CodeMirror-rtl")
    }
    function bi(e) {
        this.done = [],
            this.undone = [],
            this.undoDepth = e ? e.undoDepth : 1 / 0,
            this.lastModTime = this.lastSelTime = 0,
            this.lastOp = this.lastSelOp = null,
            this.lastOrigin = this.lastSelOrigin = null,
            this.generation = this.maxGeneration = e ? e.maxGeneration : 1
    }
    function wi(e, t) {
        var n = {
            from: it(t.from),
            to: ai(t),
            text: _e(e, t.from, t.to)
        };
        return ki(e, n, t.from.line, t.to.line + 1),
            mi(e, function (e) {
                return ki(e, n, t.from.line, t.to.line + 1),
                    0
            }, !0),
            n
    }
    function xi(e) {
        for (; e.length;) {
            if (!Y(e).ranges)
                break;
            e.pop()
        }
    }
    function Ci(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o, l, s = +new Date;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = (a = i).lastOp == r ? (xi(a.done),
            Y(a.done)) : a.done.length && !Y(a.done).ranges ? Y(a.done) : 1 < a.done.length && !a.done[a.done.length - 2].ranges ? (a.done.pop(),
                Y(a.done)) : void 0))
            l = Y(o.changes),
                0 == nt(t.from, t.to) && 0 == nt(t.from, l.to) ? l.to = ai(t) : o.changes.push(wi(e, t));
        else {
            var a = Y(i.done);
            for (a && a.ranges || Li(e.sel, i.done),
                o = {
                    changes: [wi(e, t)],
                    generation: i.generation
                },
                i.done.push(o); i.done.length > i.undoDepth;)
                i.done.shift(),
                    i.done[0].ranges || i.done.shift()
        }
        i.done.push(n),
            i.generation = ++i.maxGeneration,
            i.lastModTime = i.lastSelTime = s,
            i.lastOp = i.lastSelOp = r,
            i.lastOrigin = i.lastSelOrigin = t.origin,
            l || be(e, "historyAdded")
    }
    function Si(e, t, n, r) {
        var i, o, l, s = e.history, a = r && r.origin;
        n == s.lastSelOp || a && s.lastSelOrigin == a && (s.lastModTime == s.lastSelTime && s.lastOrigin == a || (i = e,
            o = a,
            l = Y(s.done),
            e = t,
            "*" == (o = o.charAt(0)) || "+" == o && l.ranges.length == e.ranges.length && l.somethingSelected() == e.somethingSelected() && new Date - i.history.lastSelTime <= (i.cm ? i.cm.options.historyEventDelay : 500))) ? s.done[s.done.length - 1] = t : Li(t, s.done),
            s.lastSelTime = +new Date,
            s.lastSelOrigin = a,
            s.lastSelOp = n,
            r && !1 !== r.clearRedo && xi(s.undone)
    }
    function Li(e, t) {
        var n = Y(t);
        n && n.ranges && n.equals(e) || t.push(e)
    }
    function ki(t, n, e, r) {
        var i = n["spans_" + t.id]
            , o = 0;
        t.iter(Math.max(t.first, e), Math.min(t.first + t.size, r), function (e) {
            e.markedSpans && ((i = i || (n["spans_" + t.id] = {}))[o] = e.markedSpans),
                ++o
        })
    }
    function Ti(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
            return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
            r.push(function (e) {
                if (!e)
                    return null;
                for (var t, n = 0; n < e.length; ++n)
                    e[n].marker.explicitlyCleared ? t = t || e.slice(0, n) : t && t.push(e[n]);
                return t ? t.length ? t : null : e
            }(n[i]));
        return r
    }
    function Mi(e, t) {
        var n = Ti(e, t)
            , r = Tt(e, t);
        if (!n)
            return r;
        if (!r)
            return n;
        for (var i = 0; i < n.length; ++i) {
            var o = n[i]
                , l = r[i];
            if (o && l)
                e: for (var s = 0; s < l.length; ++s) {
                    for (var a = l[s], u = 0; u < o.length; ++u)
                        if (o[u].marker == a.marker)
                            continue e;
                    o.push(a)
                }
            else
                l && (n[i] = l)
        }
        return n
    }
    function Ni(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges)
                r.push(n ? ii.prototype.deepCopy.call(o) : o);
            else {
                var l = o.changes
                    , s = [];
                r.push({
                    changes: s
                });
                for (var a = 0; a < l.length; ++a) {
                    var u, c = l[a];
                    if (s.push({
                        from: c.from,
                        to: c.to,
                        text: c.text
                    }),
                        t)
                        for (var h in c)
                            (u = h.match(/^spans_(\d+)$/)) && -1 < R(t, Number(u[1])) && (Y(s)[h] = c[h],
                                delete c[h])
                }
            }
        }
        return r
    }
    function Oi(e, t, n, r) {
        if (r) {
            r = e.anchor;
            return n && ((e = nt(t, r) < 0) != nt(n, r) < 0 ? (r = t,
                t = n) : e != nt(t, n) < 0 && (t = n)),
                new oi(r, t)
        }
        return new oi(n || t, t)
    }
    function Ai(e, t, n, r, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Pi(e, new ii([Oi(e.sel.primary(), t, n, i)], 0), r)
    }
    function Di(e, t, n) {
        for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
            r[o] = Oi(e.sel.ranges[o], t[o], null, i);
        Pi(e, li(e.cm, r, e.sel.primIndex), n)
    }
    function Wi(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n,
            Pi(e, li(e.cm, i, e.sel.primIndex), r)
    }
    function Hi(e, t, n, r) {
        Pi(e, si(t, n), r)
    }
    function Fi(e, t, n) {
        var r = e.history.done
            , i = Y(r);
        i && i.ranges ? Ei(e, r[r.length - 1] = t, n) : Pi(e, t, n)
    }
    function Pi(e, t, n) {
        Ei(e, t, n),
            Si(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
    }
    function Ei(e, t, n) {
        var r, i;
        (Ce(e, "beforeSelectionChange") || e.cm && Ce(e.cm, "beforeSelectionChange")) && (r = e,
            i = n,
            i = {
                ranges: (o = t).ranges,
                update: function (e) {
                    this.ranges = [];
                    for (var t = 0; t < e.length; t++)
                        this.ranges[t] = new oi(at(r, e[t].anchor), at(r, e[t].head))
                },
                origin: i && i.origin
            },
            be(r, "beforeSelectionChange", r, i),
            r.cm && be(r.cm, "beforeSelectionChange", r.cm, i),
            t = i.ranges != o.ranges ? li(r.cm, i.ranges, i.ranges.length - 1) : o);
        var o = n && n.bias || (nt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Ii(e, zi(e, t, o, !0)),
            n && !1 === n.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || wr(e.cm)
    }
    function Ii(e, t) {
        t.equals(e.sel) || (e.sel = t,
            e.cm && (e.cm.curOp.updateInput = 1,
                e.cm.curOp.selectionChanged = !0,
                xe(e.cm)),
            rn(e, "cursorActivity", e))
    }
    function Ri(e) {
        Ii(e, zi(e, e.sel, null, !1))
    }
    function zi(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o]
                , s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o]
                , a = Gi(e, l.anchor, s && s.anchor, n, r)
                , s = Gi(e, l.head, s && s.head, n, r);
            !i && a == l.anchor && s == l.head || ((i = i || t.ranges.slice(0, o))[o] = new oi(a, s))
        }
        return i ? li(e.cm, i, t.primIndex) : t
    }
    function Bi(e, t, n, r, i) {
        var o = Ye(e, t.line);
        if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
                var s = o.markedSpans[l]
                    , a = s.marker
                    , u = "selectLeft" in a ? !a.selectLeft : a.inclusiveLeft
                    , c = "selectRight" in a ? !a.selectRight : a.inclusiveRight;
                if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                    if (i && (be(a, "beforeCursorEnter"),
                        a.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --l;
                            continue
                        }
                        break
                    }
                    if (a.atomic) {
                        if (n) {
                            var h = a.find(r < 0 ? 1 : -1)
                                , s = void 0;
                            if ((h = (r < 0 ? c : u) ? Ui(e, h, -r, h && h.line == t.line ? o : null) : h) && h.line == t.line && (s = nt(h, n)) && (r < 0 ? s < 0 : 0 < s))
                                return Bi(e, h, t, r, i)
                        }
                        a = a.find(r < 0 ? -1 : 1);
                        return (a = (r < 0 ? u : c) ? Ui(e, a, r, a.line == t.line ? o : null) : a) ? Bi(e, a, t, r, i) : null
                    }
                }
            }
        return t
    }
    function Gi(e, t, n, r, i) {
        r = r || 1,
            r = Bi(e, t, n, r, i) || !i && Bi(e, t, n, r, !0) || Bi(e, t, n, -r, i) || !i && Bi(e, t, n, -r, !0);
        return r || (e.cantEdit = !0,
            tt(e.first, 0))
    }
    function Ui(e, t, n, r) {
        return n < 0 && 0 == t.ch ? t.line > e.first ? at(e, tt(t.line - 1)) : null : 0 < n && t.ch == (r || Ye(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? tt(t.line + 1, 0) : null : new tt(t.line, t.ch + n)
    }
    function Vi(e) {
        e.setSelection(tt(e.firstLine(), 0), tt(e.lastLine()), G)
    }
    function Ki(i, e, t) {
        var o = {
            canceled: !1,
            from: e.from,
            to: e.to,
            text: e.text,
            origin: e.origin,
            cancel: function () {
                return o.canceled = !0
            }
        };
        return t && (o.update = function (e, t, n, r) {
            e && (o.from = at(i, e)),
                t && (o.to = at(i, t)),
                n && (o.text = n),
                void 0 !== r && (o.origin = r)
        }
        ),
            be(i, "beforeChange", i, o),
            i.cm && be(i.cm, "beforeChange", i.cm, o),
            o.canceled ? (i.cm && (i.cm.curOp.updateInput = 2),
                null) : {
                from: o.from,
                to: o.to,
                text: o.text,
                origin: o.origin
            }
    }
    function ji(e, t, n) {
        if (e.cm) {
            if (!e.cm.curOp)
                return Er(e.cm, ji)(e, t, n);
            if (e.cm.state.suppressEdits)
                return
        }
        if (!(Ce(e, "beforeChange") || e.cm && Ce(e.cm, "beforeChange")) || (t = Ki(e, t, !0))) {
            var r = Ct && !n && function (e, t, n) {
                var r = null;
                if (e.iter(t.line, n.line + 1, function (e) {
                    if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                            var n = e.markedSpans[t].marker;
                            !n.readOnly || r && -1 != R(r, n) || (r = r || []).push(n)
                        }
                }),
                    !r)
                    return null;
                for (var i = [{
                    from: t,
                    to: n
                }], o = 0; o < r.length; ++o)
                    for (var l = r[o], s = l.find(0), a = 0; a < i.length; ++a) {
                        var u, c, h, d = i[a];
                        nt(d.to, s.from) < 0 || 0 < nt(d.from, s.to) || (u = [a, 1],
                            c = nt(d.from, s.from),
                            h = nt(d.to, s.to),
                            (c < 0 || !l.inclusiveLeft && !c) && u.push({
                                from: d.from,
                                to: s.from
                            }),
                            (0 < h || !l.inclusiveRight && !h) && u.push({
                                from: s.to,
                                to: d.to
                            }),
                            i.splice.apply(i, u),
                            a += u.length - 3)
                    }
                return i
            }(e, t.from, t.to);
            if (r)
                for (var i = r.length - 1; 0 <= i; --i)
                    Xi(e, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    });
            else
                Xi(e, t)
        }
    }
    function Xi(e, n) {
        var t, r;
        1 == n.text.length && "" == n.text[0] && 0 == nt(n.from, n.to) || (t = ci(e, n),
            Ci(e, n, t, e.cm ? e.cm.curOp.id : NaN),
            $i(e, n, t, Tt(e, n)),
            r = [],
            mi(e, function (e, t) {
                t || -1 != R(r, e.history) || (Ji(e.history, n),
                    r.push(e.history)),
                    $i(e, n, null, Tt(e, n))
            }))
    }
    function Yi(i, o, e) {
        var t = i.cm && i.cm.state.suppressEdits;
        if (!t || e) {
            for (var l, n = i.history, r = i.sel, s = "undo" == o ? n.done : n.undone, a = "undo" == o ? n.undone : n.done, u = 0; u < s.length && (l = s[u],
                e ? !l.ranges || l.equals(i.sel) : l.ranges); u++)
                ;
            if (u != s.length) {
                for (n.lastOrigin = n.lastSelOrigin = null; ;) {
                    if (!(l = s.pop()).ranges) {
                        if (t)
                            return void s.push(l);
                        break
                    }
                    if (Li(l, a),
                        e && !l.equals(i.sel))
                        return void Pi(i, l, {
                            clearRedo: !1
                        });
                    r = l
                }
                var c = [];
                Li(r, a),
                    a.push({
                        changes: c,
                        generation: n.generation
                    }),
                    n.generation = l.generation || ++n.maxGeneration;
                for (var h = Ce(i, "beforeChange") || i.cm && Ce(i.cm, "beforeChange"), d = l.changes.length - 1; 0 <= d; --d) {
                    var f = function (e) {
                        var n = l.changes[e];
                        if (n.origin = o,
                            h && !Ki(i, n, !1))
                            return s.length = 0,
                                {};
                        c.push(wi(i, n));
                        var t = e ? ci(i, n) : Y(s);
                        $i(i, n, t, Mi(i, n)),
                            !e && i.cm && i.cm.scrollIntoView({
                                from: n.from,
                                to: ai(n)
                            });
                        var r = [];
                        mi(i, function (e, t) {
                            t || -1 != R(r, e.history) || (Ji(e.history, n),
                                r.push(e.history)),
                                $i(e, n, null, Mi(e, n))
                        })
                    }(d);
                    if (f)
                        return f.v
                }
            }
        }
    }
    function _i(e, t) {
        if (0 != t && (e.first += t,
            e.sel = new ii(_(e.sel.ranges, function (e) {
                return new oi(tt(e.anchor.line + t, e.anchor.ch), tt(e.head.line + t, e.head.ch))
            }), e.sel.primIndex),
            e.cm)) {
            tr(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                nr(e.cm, r, "gutter")
        }
    }
    function $i(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
            return Er(e.cm, $i)(e, t, n, r);
        var i;
        t.to.line < e.first ? _i(e, t.text.length - 1 - (t.to.line - t.from.line)) : t.from.line > e.lastLine() || (t.from.line < e.first && (_i(e, i = t.text.length - 1 - (e.first - t.from.line)),
            t = {
                from: tt(e.first, 0),
                to: tt(t.to.line + i, t.to.ch),
                text: [Y(t.text)],
                origin: t.origin
            }),
            i = e.lastLine(),
            (t = t.to.line > i ? {
                from: t.from,
                to: tt(i, Ye(e, i).text.length),
                text: [t.text[0]],
                origin: t.origin
            } : t).removed = _e(e, t.from, t.to),
            n = n || ci(e, t),
            e.cm ? function (e, t, n) {
                var r = e.doc
                    , i = e.display
                    , o = t.from
                    , l = t.to
                    , s = !1
                    , a = o.line;
                e.options.lineWrapping || (a = Ze(It(Ye(r, o.line))),
                    r.iter(a, l.line + 1, function (e) {
                        if (e == i.maxLine)
                            return s = !0
                    }));
                -1 < r.sel.contains(t.from, t.to) && xe(e);
                gi(r, t, n, Zn(e)),
                    e.options.lineWrapping || (r.iter(a, o.line + t.text.length, function (e) {
                        var t = Ut(e);
                        t > i.maxLineLength && (i.maxLine = e,
                            i.maxLineLength = t,
                            i.maxLineChanged = !0,
                            s = !1)
                    }),
                        s && (e.curOp.updateMaxLine = !0));
                (function (e, t) {
                    if (e.modeFrontier = Math.min(e.modeFrontier, t),
                        !(e.highlightFrontier < t - 10)) {
                        for (var n = e.first, r = t - 1; n < r; r--) {
                            var i = Ye(e, r).stateAfter;
                            if (i && (!(i instanceof ct) || r + i.lookAhead < t)) {
                                n = r + 1;
                                break
                            }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, n)
                    }
                }
                )(r, o.line),
                    zr(e, 400);
                a = t.text.length - (l.line - o.line) - 1;
                t.full ? tr(e) : o.line != l.line || 1 != t.text.length || pi(e.doc, t) ? tr(e, o.line, l.line + 1, a) : nr(e, o.line, "text");
                r = Ce(e, "changes"),
                    a = Ce(e, "change");
                (a || r) && (t = {
                    from: o,
                    to: l,
                    text: t.text,
                    removed: t.removed,
                    origin: t.origin
                },
                    a && rn(e, "change", e, t),
                    r && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(t));
                e.display.selForContextMenu = null
            }(e.cm, t, r) : gi(e, t, r),
            Ei(e, n, G),
            e.cantEdit && Gi(e, tt(e.firstLine(), 0)) && (e.cantEdit = !1))
    }
    function qi(e, t, n, r, i) {
        var o;
        nt(r = r || n, n) < 0 && (n = (o = [r, n])[0],
            r = o[1]),
            "string" == typeof t && (t = e.splitLines(t)),
            ji(e, {
                from: n,
                to: r,
                text: t,
                origin: i
            })
    }
    function Zi(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t,
            e.ch = 0)
    }
    function Qi(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i]
                , l = !0;
            if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var s = 0; s < o.ranges.length; s++)
                    Zi(o.ranges[s].anchor, t, n, r),
                        Zi(o.ranges[s].head, t, n, r)
            } else {
                for (var a = 0; a < o.changes.length; ++a) {
                    var u = o.changes[a];
                    if (n < u.from.line)
                        u.from = tt(u.from.line + r, u.from.ch),
                            u.to = tt(u.to.line + r, u.to.ch);
                    else if (t <= u.to.line) {
                        l = !1;
                        break
                    }
                }
                l || (e.splice(0, i + 1),
                    i = 0)
            }
        }
    }
    function Ji(e, t) {
        var n = t.from.line
            , r = t.to.line
            , t = t.text.length - (r - n) - 1;
        Qi(e.done, n, r, t),
            Qi(e.undone, n, r, t)
    }
    function eo(e, t, n, r) {
        var i = t
            , o = t;
        return "number" == typeof t ? o = Ye(e, st(e, t)) : i = Ze(t),
            null == i ? null : (r(o, i) && e.cm && nr(e.cm, i, n),
                o)
    }
    function to(e) {
        this.lines = e,
            this.parent = null;
        for (var t = 0, n = 0; n < e.length; ++n)
            e[n].parent = this,
                t += e[n].height;
        this.height = t
    }
    function no(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            t += i.chunkSize(),
                n += i.height,
                i.parent = this
        }
        this.size = t,
            this.height = n,
            this.parent = null
    }
    oi.prototype.from = function () {
        return lt(this.anchor, this.head)
    }
        ,
        oi.prototype.to = function () {
            return ot(this.anchor, this.head)
        }
        ,
        oi.prototype.empty = function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
        ,
        to.prototype = {
            chunkSize: function () {
                return this.lines.length
            },
            removeInner: function (e, t) {
                for (var n, r = e, i = e + t; r < i; ++r) {
                    var o = this.lines[r];
                    this.height -= o.height,
                        (n = o).parent = null,
                        Nt(n),
                        rn(o, "delete")
                }
                this.lines.splice(e, t)
            },
            collapse: function (e) {
                e.push.apply(e, this.lines)
            },
            insertInner: function (e, t, n) {
                this.height += n,
                    this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                for (var r = 0; r < t.length; ++r)
                    t[r].parent = this
            },
            iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e)
                    if (n(this.lines[e]))
                        return !0
            }
        },
        no.prototype = {
            chunkSize: function () {
                return this.size
            },
            removeInner: function (e, t) {
                this.size -= t;
                for (var n, r = 0; r < this.children.length; ++r) {
                    var i = this.children[r]
                        , o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e)
                            , s = i.height;
                        if (i.removeInner(e, l),
                            this.height -= s - i.height,
                            o == l && (this.children.splice(r--, 1),
                                i.parent = null),
                            0 == (t -= l))
                            break;
                        e = 0
                    } else
                        e -= o
                }
                this.size - t < 25 && (1 < this.children.length || !(this.children[0] instanceof to)) && (this.collapse(n = []),
                    this.children = [new to(n)],
                    this.children[0].parent = this)
            },
            collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t)
                    this.children[t].collapse(e)
            },
            insertInner: function (e, t, n) {
                this.size += t.length,
                    this.height += n;
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r]
                        , o = i.chunkSize();
                    if (e <= o) {
                        if (i.insertInner(e, t, n),
                            i.lines && 50 < i.lines.length) {
                            for (var l = i.lines.length % 25 + 25, s = l; s < i.lines.length;) {
                                var a = new to(i.lines.slice(s, s += 25));
                                i.height -= a.height,
                                    this.children.splice(++r, 0, a),
                                    a.parent = this
                            }
                            i.lines = i.lines.slice(0, l),
                                this.maybeSpill()
                        }
                        break
                    }
                    e -= o
                }
            },
            maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t, n = new no(e.children.splice(e.children.length - 5, 5))
                    } while (e.parent ? (e.size -= n.size,
                        e.height -= n.height,
                        t = R(e.parent.children, e),
                        e.parent.children.splice(t + 1, 0, n)) : (((t = new no(e.children)).parent = e).children = [t, n],
                            e = t),
                    n.parent = e.parent,
                        10 < e.children.length);
                    e.parent.maybeSpill()
                }
            },
            iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r]
                        , o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e);
                        if (i.iterN(e, l, n))
                            return !0;
                        if (0 == (t -= l))
                            break;
                        e = 0
                    } else
                        e -= o
                }
            }
        };
    function ro(e, t, n) {
        if (n)
            for (var r in n)
                n.hasOwnProperty(r) && (this[r] = n[r]);
        this.doc = e,
            this.node = t
    }
    function io(e, t, n) {
        Gt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && br(e, n)
    }
    ro.prototype.clear = function () {
        var e = this.doc.cm
            , t = this.line.widgets
            , n = this.line
            , r = Ze(n);
        if (null != r && t) {
            for (var i = 0; i < t.length; ++i)
                t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = fn(this);
            qe(n, Math.max(0, n.height - o)),
                e && (Pr(e, function () {
                    io(e, n, -o),
                        nr(e, r, "widget")
                }),
                    rn(e, "lineWidgetCleared", e, this, r))
        }
    }
        ,
        ro.prototype.changed = function () {
            var e = this
                , t = this.height
                , n = this.doc.cm
                , r = this.line;
            this.height = null;
            var i = fn(this) - t;
            i && (Bt(this.doc, r) || qe(r, r.height + i),
                n && Pr(n, function () {
                    n.curOp.forceUpdate = !0,
                        io(n, r, i),
                        rn(n, "lineWidgetChanged", n, e, Ze(r))
                }))
        }
        ,
        Se(ro);
    function oo(e, t) {
        this.lines = [],
            this.type = t,
            this.doc = e,
            this.id = ++lo
    }
    var lo = 0;
    function so(r, i, o, e, t) {
        if (e && e.shared)
            return function (e, n, r, i, o) {
                (i = P(i)).shared = !1;
                var l = [so(e, n, r, i, o)]
                    , s = l[0]
                    , a = i.widgetNode;
                return mi(e, function (e) {
                    a && (i.widgetNode = a.cloneNode(!0)),
                        l.push(so(e, at(e, n), at(e, r), i, o));
                    for (var t = 0; t < e.linked.length; ++t)
                        if (e.linked[t].isParent)
                            return;
                    s = Y(l)
                }),
                    new ao(l, s)
            }(r, i, o, e, t);
        if (r.cm && !r.cm.curOp)
            return Er(r.cm, so)(r, i, o, e, t);
        var l = new oo(r, t)
            , t = nt(i, o);
        if (e && P(e, l, !1),
            0 < t || 0 == t && !1 !== l.clearWhenEmpty)
            return l;
        if (l.replacedWith && (l.collapsed = !0,
            l.widgetNode = T("span", [l.replacedWith], "CodeMirror-widget"),
            e.handleMouseEvents || l.widgetNode.setAttribute("cm-ignore-events", "true"),
            e.insertLeft && (l.widgetNode.insertLeft = !0)),
            l.collapsed) {
            if (Et(r, i.line, i, o, l) || i.line != o.line && Et(r, o.line, i, o, l))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            St = !0
        }
        l.addToHistory && Ci(r, {
            from: i,
            to: o,
            origin: "markText"
        }, r.sel, NaN);
        var s, a = i.line, u = r.cm;
        if (r.iter(a, o.line + 1, function (e) {
            var t, n;
            u && l.collapsed && !u.options.lineWrapping && It(e) == u.display.maxLine && (s = !0),
                l.collapsed && a != i.line && qe(e, 0),
                t = e,
                n = new Lt(l, a == i.line ? i.ch : null, a == o.line ? o.ch : null),
                (e = (e = r.cm && r.cm.curOp) && window.WeakSet && (e.markedSpans || (e.markedSpans = new WeakSet))) && e.has(t.markedSpans) ? t.markedSpans.push(n) : (t.markedSpans = t.markedSpans ? t.markedSpans.concat([n]) : [n],
                    e && e.add(t.markedSpans)),
                n.marker.attachLine(t),
                ++a
        }),
            l.collapsed && r.iter(i.line, o.line + 1, function (e) {
                Bt(r, e) && qe(e, 0)
            }),
            l.clearOnEnter && me(l, "beforeCursorEnter", function () {
                return l.clear()
            }),
            l.readOnly && (Ct = !0,
                (r.history.done.length || r.history.undone.length) && r.clearHistory()),
            l.collapsed && (l.id = ++lo,
                l.atomic = !0),
            u) {
            if (s && (u.curOp.updateMaxLine = !0),
                l.collapsed)
                tr(u, i.line, o.line + 1);
            else if (l.className || l.startStyle || l.endStyle || l.css || l.attributes || l.title)
                for (var n = i.line; n <= o.line; n++)
                    nr(u, n, "text");
            l.atomic && Ri(u.doc),
                rn(u, "markerAdded", u, l)
        }
        return l
    }
    oo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            var e, t = this.doc.cm, n = t && !t.curOp;
            n && Hr(t),
                !Ce(this, "clear") || (e = this.find()) && rn(this, "clear", e.from, e.to);
            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                var l = this.lines[o]
                    , s = kt(l.markedSpans, this);
                t && !this.collapsed ? nr(t, Ze(l), "text") : t && (null != s.to && (i = Ze(l)),
                    null != s.from && (r = Ze(l))),
                    l.markedSpans = function (e, t) {
                        for (var n, r = 0; r < e.length; ++r)
                            e[r] != t && (n = n || []).push(e[r]);
                        return n
                    }(l.markedSpans, s),
                    null == s.from && this.collapsed && !Bt(this.doc, l) && t && qe(l, Yn(t.display))
            }
            if (t && this.collapsed && !t.options.lineWrapping)
                for (var a = 0; a < this.lines.length; ++a) {
                    var u = It(this.lines[a])
                        , c = Ut(u);
                    c > t.display.maxLineLength && (t.display.maxLine = u,
                        t.display.maxLineLength = c,
                        t.display.maxLineChanged = !0)
                }
            null != r && t && this.collapsed && tr(t, r, i + 1),
                this.lines.length = 0,
                this.explicitlyCleared = !0,
                this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
                    t && Ri(t.doc)),
                t && rn(t, "markerCleared", t, this, r, i),
                n && Fr(t),
                this.parent && this.parent.clear()
        }
    }
        ,
        oo.prototype.find = function (e, t) {
            var n, r;
            null == e && "bookmark" == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i]
                    , l = kt(o.markedSpans, this);
                if (null != l.from && (n = tt(t ? o : Ze(o), l.from),
                    -1 == e))
                    return n;
                if (null != l.to && (r = tt(t ? o : Ze(o), l.to),
                    1 == e))
                    return r
            }
            return n && {
                from: n,
                to: r
            }
        }
        ,
        oo.prototype.changed = function () {
            var n = this
                , r = this.find(-1, !0)
                , i = this
                , o = this.doc.cm;
            r && o && Pr(o, function () {
                var e = r.line
                    , t = Ze(r.line)
                    , t = Sn(o, t);
                t && (On(t),
                    o.curOp.selectionChanged = o.curOp.forceUpdate = !0),
                    o.curOp.updateMaxLine = !0,
                    Bt(i.doc, e) || null == i.height || (t = i.height,
                        i.height = null,
                        (t = fn(i) - t) && qe(e, e.height + t)),
                    rn(o, "markerChanged", o, n)
            })
        }
        ,
        oo.prototype.attachLine = function (e) {
            var t;
            !this.lines.length && this.doc.cm && ((t = this.doc.cm.curOp).maybeHiddenMarkers && -1 != R(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)),
                this.lines.push(e)
        }
        ,
        oo.prototype.detachLine = function (e) {
            this.lines.splice(R(this.lines, e), 1),
                !this.lines.length && this.doc.cm && ((e = this.doc.cm.curOp).maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
        }
        ,
        Se(oo);
    var ao = function (e, t) {
        this.markers = e,
            this.primary = t;
        for (var n = 0; n < e.length; ++n)
            e[n].parent = this
    };
    function uo(e) {
        return e.findMarks(tt(e.first, 0), e.clipPos(tt(e.lastLine())), function (e) {
            return e.parent
        })
    }
    function co(o) {
        for (var e = 0; e < o.length; e++)
            !function (e) {
                var t = o[e]
                    , n = [t.primary.doc];
                mi(t.primary.doc, function (e) {
                    return n.push(e)
                });
                for (var r = 0; r < t.markers.length; r++) {
                    var i = t.markers[r];
                    -1 == R(n, i.doc) && (i.parent = null,
                        t.markers.splice(r--, 1))
                }
            }(e)
    }
    ao.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
            rn(this, "clear")
        }
    }
        ,
        ao.prototype.find = function (e, t) {
            return this.primary.find(e, t)
        }
        ,
        Se(ao);
    function ho(e, t, n, r, i) {
        if (!(this instanceof ho))
            return new ho(e, t, n, r, i);
        null == n && (n = 0),
            no.call(this, [new to([new Kt("", null)])]),
            this.first = n,
            this.scrollTop = this.scrollLeft = 0,
            this.cantEdit = !1,
            this.cleanGeneration = 1,
            n = tt(this.modeFrontier = this.highlightFrontier = n, 0),
            this.sel = si(n),
            this.history = new bi(null),
            this.id = ++fo,
            this.modeOption = t,
            this.lineSep = r,
            this.direction = "rtl" == i ? "rtl" : "ltr",
            this.extend = !1,
            "string" == typeof e && (e = this.splitLines(e)),
            gi(this, {
                from: n,
                to: n,
                text: e
            }),
            Pi(this, si(n), G)
    }
    var fo = 0;
    (ho.prototype = q(no.prototype, {
        constructor: ho,
        iter: function (e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r)
                n += t[r].height;
            this.insertInner(e - this.first, t, n)
        },
        remove: function (e, t) {
            this.removeInner(e - this.first, t)
        },
        getValue: function (e) {
            var t = $e(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        setValue: Rr(function (e) {
            var t = tt(this.first, 0)
                , n = this.first + this.size - 1;
            ji(this, {
                from: t,
                to: tt(n, Ye(this, n).text.length),
                text: this.splitLines(e),
                origin: "setValue",
                full: !0
            }, !0),
                this.cm && xr(this.cm, 0, 0),
                Pi(this, si(t), G)
        }),
        replaceRange: function (e, t, n, r) {
            qi(this, e, t = at(this, t), n = n ? at(this, n) : t, r)
        },
        getRange: function (e, t, n) {
            t = _e(this, at(this, e), at(this, t));
            return !1 === n ? t : "" === n ? t.join("") : t.join(n || this.lineSeparator())
        },
        getLine: function (e) {
            e = this.getLineHandle(e);
            return e && e.text
        },
        getLineHandle: function (e) {
            if (Je(this, e))
                return Ye(this, e)
        },
        getLineNumber: Ze,
        getLineHandleVisualStart: function (e) {
            return It(e = "number" == typeof e ? Ye(this, e) : e)
        },
        lineCount: function () {
            return this.size
        },
        firstLine: function () {
            return this.first
        },
        lastLine: function () {
            return this.first + this.size - 1
        },
        clipPos: function (e) {
            return at(this, e)
        },
        getCursor: function (e) {
            var t = this.sel.primary()
                , t = null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
            return t
        },
        listSelections: function () {
            return this.sel.ranges
        },
        somethingSelected: function () {
            return this.sel.somethingSelected()
        },
        setCursor: Rr(function (e, t, n) {
            Hi(this, at(this, "number" == typeof e ? tt(e, t || 0) : e), null, n)
        }),
        setSelection: Rr(function (e, t, n) {
            Hi(this, at(this, e), at(this, t || e), n)
        }),
        extendSelection: Rr(function (e, t, n) {
            Ai(this, at(this, e), t && at(this, t), n)
        }),
        extendSelections: Rr(function (e, t) {
            Di(this, ut(this, e), t)
        }),
        extendSelectionsBy: Rr(function (e, t) {
            Di(this, ut(this, _(this.sel.ranges, e)), t)
        }),
        setSelections: Rr(function (e, t, n) {
            if (e.length) {
                for (var r = [], i = 0; i < e.length; i++)
                    r[i] = new oi(at(this, e[i].anchor), at(this, e[i].head || e[i].anchor));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                    Pi(this, li(this.cm, r, t), n)
            }
        }),
        addSelection: Rr(function (e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new oi(at(this, e), at(this, t || e))),
                Pi(this, li(this.cm, r, r.length - 1), n)
        }),
        getSelection: function (e) {
            for (var t = this.sel.ranges, n = 0; n < t.length; n++)
                var r = _e(this, t[n].from(), t[n].to())
                    , i = i ? i.concat(r) : r;
            return !1 === e ? i : i.join(e || this.lineSeparator())
        },
        getSelections: function (e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = _e(this, n[r].from(), n[r].to());
                !1 !== e && (i = i.join(e || this.lineSeparator())),
                    t[r] = i
            }
            return t
        },
        replaceSelection: function (e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                r[i] = e;
            this.replaceSelections(r, t, n || "+input")
        },
        replaceSelections: Rr(function (e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var l = i.ranges[o];
                r[o] = {
                    from: l.from(),
                    to: l.to(),
                    text: this.splitLines(e[o]),
                    origin: n
                }
            }
            for (var t = t && "end" != t && function (e, t, n) {
                for (var r = [], i = u = tt(e.first, 0), o = 0; o < t.length; o++) {
                    var l = t[o]
                        , s = hi(l.from, u, i)
                        , a = hi(ai(l), u, i)
                        , u = l.to
                        , i = a;
                    "around" == n ? (l = nt((l = e.sel.ranges[o]).head, l.anchor) < 0,
                        r[o] = new oi(l ? a : s, l ? s : a)) : r[o] = new oi(s, s)
                }
                return new ii(r, e.sel.primIndex)
            }(this, r, t), s = r.length - 1; 0 <= s; s--)
                ji(this, r[s]);
            t ? Fi(this, t) : this.cm && wr(this.cm)
        }),
        undo: Rr(function () {
            Yi(this, "undo")
        }),
        redo: Rr(function () {
            Yi(this, "redo")
        }),
        undoSelection: Rr(function () {
            Yi(this, "undo", !0)
        }),
        redoSelection: Rr(function () {
            Yi(this, "redo", !0)
        }),
        setExtending: function (e) {
            this.extend = e
        },
        getExtending: function () {
            return this.extend
        },
        historySize: function () {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
                e.done[r].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++)
                e.undone[i].ranges || ++n;
            return {
                undo: t,
                redo: n
            }
        },
        clearHistory: function () {
            var t = this;
            this.history = new bi(this.history),
                mi(this, function (e) {
                    return e.history = t.history
                }, !0)
        },
        markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function (e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                this.history.generation
        },
        isClean: function (e) {
            return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function () {
            return {
                done: Ni(this.history.done),
                undone: Ni(this.history.undone)
            }
        },
        setHistory: function (e) {
            var t = this.history = new bi(this.history);
            t.done = Ni(e.done.slice(0), null, !0),
                t.undone = Ni(e.undone.slice(0), null, !0)
        },
        setGutterMarker: Rr(function (e, n, r) {
            return eo(this, e, "gutter", function (e) {
                var t = e.gutterMarkers || (e.gutterMarkers = {});
                return !(t[n] = r) && ee(t) && (e.gutterMarkers = null),
                    1
            })
        }),
        clearGutter: Rr(function (t) {
            var n = this;
            this.iter(function (e) {
                e.gutterMarkers && e.gutterMarkers[t] && eo(n, e, "gutter", function () {
                    return e.gutterMarkers[t] = null,
                        ee(e.gutterMarkers) && (e.gutterMarkers = null),
                        1
                })
            })
        }),
        lineInfo: function (e) {
            var t;
            if ("number" == typeof e) {
                if (!Je(this, e))
                    return null;
                if (!(e = Ye(this, t = e)))
                    return null
            } else if (null == (t = Ze(e)))
                return null;
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        },
        addLineClass: Rr(function (e, n, r) {
            return eo(this, e, "gutter" == n ? "gutter" : "class", function (e) {
                var t = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                if (e[t]) {
                    if (C(r).test(e[t]))
                        return;
                    e[t] += " " + r
                } else
                    e[t] = r;
                return 1
            })
        }),
        removeLineClass: Rr(function (e, o, l) {
            return eo(this, e, "gutter" == o ? "gutter" : "class", function (e) {
                var t = "text" == o ? "textClass" : "background" == o ? "bgClass" : "gutter" == o ? "gutterClass" : "wrapClass"
                    , n = e[t];
                if (n) {
                    if (null == l)
                        e[t] = null;
                    else {
                        var r = n.match(C(l));
                        if (!r)
                            return;
                        var i = r.index + r[0].length;
                        e[t] = n.slice(0, r.index) + (r.index && i != n.length ? " " : "") + n.slice(i) || null
                    }
                    return 1
                }
            })
        }),
        addLineWidget: Rr(function (e, t, n) {
            return e = e,
                i = new ro(r = this, t, n),
                (o = r.cm) && i.noHScroll && (o.display.alignWidgets = !0),
                eo(r, e, "widget", function (e) {
                    var t = e.widgets || (e.widgets = []);
                    return null == i.insertAt ? t.push(i) : t.splice(Math.min(t.length, Math.max(0, i.insertAt)), 0, i),
                        i.line = e,
                        o && !Bt(r, e) && (t = Gt(e) < r.scrollTop,
                            qe(e, e.height + fn(i)),
                            t && br(o, i.height),
                            o.curOp.forceUpdate = !0),
                        1
                }),
                o && rn(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : Ze(e)),
                i;
            var r, i, o
        }),
        removeLineWidget: function (e) {
            e.clear()
        },
        markText: function (e, t, n) {
            return so(this, at(this, e), at(this, t), n, n && n.type || "range")
        },
        setBookmark: function (e, t) {
            t = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents
            };
            return so(this, e = at(this, e), e, t, "bookmark")
        },
        findMarksAt: function (e) {
            var t = []
                , n = Ye(this, (e = at(this, e)).line).markedSpans;
            if (n)
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
            return t
        },
        findMarks: function (i, o, l) {
            i = at(this, i),
                o = at(this, o);
            var s = []
                , a = i.line;
            return this.iter(i.line, o.line + 1, function (e) {
                var t = e.markedSpans;
                if (t)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        null != r.to && a == i.line && i.ch >= r.to || null == r.from && a != i.line || null != r.from && a == o.line && r.from >= o.ch || l && !l(r.marker) || s.push(r.marker.parent || r.marker)
                    }
                ++a
            }),
                s
        },
        getAllMarks: function () {
            var r = [];
            return this.iter(function (e) {
                var t = e.markedSpans;
                if (t)
                    for (var n = 0; n < t.length; ++n)
                        null != t[n].from && r.push(t[n].marker)
            }),
                r
        },
        posFromIndex: function (t) {
            var n, r = this.first, i = this.lineSeparator().length;
            return this.iter(function (e) {
                e = e.text.length + i;
                if (t < e)
                    return n = t,
                        !0;
                t -= e,
                    ++r
            }),
                at(this, tt(r, n))
        },
        indexFromPos: function (e) {
            var t = (e = at(this, e)).ch;
            if (e.line < this.first || e.ch < 0)
                return 0;
            var n = this.lineSeparator().length;
            return this.iter(this.first, e.line, function (e) {
                t += e.text.length + n
            }),
                t
        },
        copy: function (e) {
            var t = new ho($e(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            return t.scrollTop = this.scrollTop,
                t.scrollLeft = this.scrollLeft,
                t.sel = this.sel,
                t.extend = !1,
                e && (t.history.undoDepth = this.history.undoDepth,
                    t.setHistory(this.getHistory())),
                t
        },
        linkedDoc: function (e) {
            var t = this.first
                , n = this.first + this.size;
            null != (e = e || {}).from && e.from > t && (t = e.from),
                null != e.to && e.to < n && (n = e.to);
            t = new ho($e(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return e.sharedHist && (t.history = this.history),
                (this.linked || (this.linked = [])).push({
                    doc: t,
                    sharedHist: e.sharedHist
                }),
                t.linked = [{
                    doc: this,
                    isParent: !0,
                    sharedHist: e.sharedHist
                }],
                function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]
                            , i = r.find()
                            , o = e.clipPos(i.from)
                            , i = e.clipPos(i.to);
                        nt(o, i) && (i = so(e, o, i, r.primary, r.primary.type),
                            r.markers.push(i),
                            i.parent = r)
                    }
                }(t, uo(this)),
                t
        },
        unlinkDoc: function (e) {
            if (e instanceof cl && (e = e.doc),
                this.linked)
                for (var t = 0; t < this.linked.length; ++t)
                    if (this.linked[t].doc == e) {
                        this.linked.splice(t, 1),
                            e.unlinkDoc(this),
                            co(uo(this));
                        break
                    }
            var n;
            e.history == this.history && (n = [e.id],
                mi(e, function (e) {
                    return n.push(e.id)
                }, !0),
                e.history = new bi(null),
                e.history.done = Ni(this.history.done, n),
                e.history.undone = Ni(this.history.undone, n))
        },
        iterLinkedDocs: function (e) {
            mi(this, e)
        },
        getMode: function () {
            return this.mode
        },
        getEditor: function () {
            return this.cm
        },
        splitLines: function (e) {
            return this.lineSep ? e.split(this.lineSep) : He(e)
        },
        lineSeparator: function () {
            return this.lineSep || "\n"
        },
        setDirection: Rr(function (e) {
            var t;
            (e = "rtl" != e ? "ltr" : e) != this.direction && (this.direction = e,
                this.iter(function (e) {
                    return e.order = null
                }),
                this.cm && Pr(t = this.cm, function () {
                    yi(t),
                        tr(t)
                }))
        })
    })).eachLine = ho.prototype.iter;
    var po = 0;
    function go(e) {
        var r = this;
        if (mo(r),
            !we(r, e) && !pn(r.display, e)) {
            Le(e),
                w && (po = +new Date);
            var t = Jn(r, e, !0)
                , n = e.dataTransfer.files;
            if (t && !r.isReadOnly())
                if (n && n.length && window.FileReader && window.File)
                    for (var i = n.length, o = Array(i), l = 0, s = function () {
                        ++l == i && Er(r, function () {
                            var e = {
                                from: t = at(r.doc, t),
                                to: t,
                                text: r.doc.splitLines(o.filter(function (e) {
                                    return null != e
                                }).join(r.doc.lineSeparator())),
                                origin: "paste"
                            };
                            ji(r.doc, e),
                                Fi(r.doc, si(at(r.doc, t), at(r.doc, ai(e))))
                        })()
                    }, a = 0; a < n.length; a++)
                        !function (e, t) {
                            var n;
                            r.options.allowDropFileTypes && -1 == R(r.options.allowDropFileTypes, e.type) ? s() : ((n = new FileReader).onerror = function () {
                                return s()
                            }
                                ,
                                n.onload = function () {
                                    var e = n.result;
                                    /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[t] = e),
                                        s()
                                }
                                ,
                                n.readAsText(e))
                        }(n[a], a);
                else {
                    if (r.state.draggingText && -1 < r.doc.sel.contains(t))
                        return r.state.draggingText(e),
                            void setTimeout(function () {
                                return r.display.input.focus()
                            }, 20);
                    try {
                        var u, c = e.dataTransfer.getData("Text");
                        if (c) {
                            if (r.state.draggingText && !r.state.draggingText.copy && (u = r.listSelections()),
                                Ei(r.doc, si(t, t)),
                                u)
                                for (var h = 0; h < u.length; ++h)
                                    qi(r.doc, "", u[h].anchor, u[h].head, "drag");
                            r.replaceSelection(c, "around", "paste"),
                                r.display.input.focus()
                        }
                    } catch (e) { }
                }
        }
    }
    function mo(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor),
            e.display.dragCursor = null)
    }
    function vo(t) {
        if (document.getElementsByClassName) {
            for (var e = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < e.length; r++) {
                var i = e[r].CodeMirror;
                i && n.push(i)
            }
            n.length && n[0].operation(function () {
                for (var e = 0; e < n.length; e++)
                    t(n[e])
            })
        }
    }
    var yo = !1;
    function bo() {
        var e;
        yo || (me(window, "resize", function () {
            null == e && (e = setTimeout(function () {
                e = null,
                    vo(wo)
            }, 100))
        }),
            me(window, "blur", function () {
                return vo(pr)
            }),
            yo = !0)
    }
    function wo(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
            t.scrollbarsClipped = !1,
            e.setSize()
    }
    for (var xo = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    }, Co = 0; Co < 10; Co++)
        xo[Co + 48] = xo[Co + 96] = String(Co);
    for (var So = 65; So <= 90; So++)
        xo[So] = String.fromCharCode(So);
    for (var Lo = 1; Lo <= 12; Lo++)
        xo[Lo + 111] = xo[Lo + 63235] = "F" + Lo;
    var ko = {};
    function To(e) {
        var t, n, r, i, o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var l = 0; l < o.length - 1; l++) {
            var s = o[l];
            if (/^(cmd|meta|m)$/i.test(s))
                i = !0;
            else if (/^a(lt)?$/i.test(s))
                t = !0;
            else if (/^(c|ctrl|control)$/i.test(s))
                n = !0;
            else {
                if (!/^s(hift)?$/i.test(s))
                    throw new Error("Unrecognized modifier name: " + s);
                r = !0
            }
        }
        return t && (e = "Alt-" + e),
            n && (e = "Ctrl-" + e),
            i && (e = "Cmd-" + e),
            e = r ? "Shift-" + e : e
    }
    function Mo(e) {
        var t, n, r = {};
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var i = e[t];
                if (!/^(name|fallthrough|(de|at)tach)$/.test(t))
                    if ("..." != i) {
                        for (var o = _(t.split(" "), To), l = 0; l < o.length; l++) {
                            var s = void 0
                                , a = void 0
                                , s = l == o.length - 1 ? (a = o.join(" "),
                                    i) : (a = o.slice(0, l + 1).join(" "),
                                        "...")
                                , u = r[a];
                            if (u) {
                                if (u != s)
                                    throw new Error("Inconsistent bindings for " + a)
                            } else
                                r[a] = s
                        }
                        delete e[t]
                    } else
                        delete e[t]
            }
        for (n in r)
            e[n] = r[n];
        return e
    }
    function No(e, t, n, r) {
        var i = (t = Wo(t)).call ? t.call(e, r) : t[e];
        if (!1 === i)
            return "nothing";
        if ("..." === i)
            return "multi";
        if (null != i && n(i))
            return "handled";
        if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
                return No(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
                var l = No(e, t.fallthrough[o], n, r);
                if (l)
                    return l
            }
        }
    }
    function Oo(e) {
        e = "string" == typeof e ? e : xo[e.keyCode];
        return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e
    }
    function Ao(e, t, n) {
        var r = e;
        return t.altKey && "Alt" != r && (e = "Alt-" + e),
            (b ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
            (b ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
            e = !n && t.shiftKey && "Shift" != r ? "Shift-" + e : e
    }
    function Do(e, t) {
        if (p && 34 == e.keyCode && e.char)
            return !1;
        var n = xo[e.keyCode];
        return null != n && !e.altGraphKey && Ao(n = 3 == e.keyCode && e.code ? e.code : n, e, t)
    }
    function Wo(e) {
        return "string" == typeof e ? ko[e] : e
    }
    function Ho(t, e) {
        for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = e(n[i]); r.length && nt(o.from, Y(r).to) <= 0;) {
                var l = r.pop();
                if (nt(l.from, o.from) < 0) {
                    o.from = l.from;
                    break
                }
            }
            r.push(o)
        }
        Pr(t, function () {
            for (var e = r.length - 1; 0 <= e; e--)
                qi(t.doc, "", r[e].from, r[e].to, "+delete");
            wr(t)
        })
    }
    function Fo(e, t, n) {
        n = re(e.text, t + n, n);
        return n < 0 || n > e.text.length ? null : n
    }
    function Po(e, t, n) {
        e = Fo(e, t.ch, n);
        return null == e ? null : new tt(t.line, e, n < 0 ? "after" : "before")
    }
    function Eo(e, t, n, r, i) {
        if (e) {
            "rtl" == t.doc.direction && (i = -i);
            var o = pe(n, t.doc.direction);
            if (o) {
                var l, s, a, e = i < 0 ? Y(o) : o[0], o = i < 0 == (1 == e.level) ? "after" : "before";
                return 0 < e.level || "rtl" == t.doc.direction ? (l = Ln(t, n),
                    s = i < 0 ? n.text.length - 1 : 0,
                    a = kn(t, l, s).top,
                    s = ie(function (e) {
                        return kn(t, l, e).top == a
                    }, i < 0 == (1 == e.level) ? e.from : e.to - 1, s),
                    "before" == o && (s = Fo(n, s, 1))) : s = i < 0 ? e.to : e.from,
                    new tt(r, s, o)
            }
        }
        return new tt(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
    }
    function Io(t, n, s, e) {
        var a = pe(n, t.doc.direction);
        if (!a)
            return Po(n, s, e);
        s.ch >= n.text.length ? (s.ch = n.text.length,
            s.sticky = "before") : s.ch <= 0 && (s.ch = 0,
                s.sticky = "after");
        var r = le(a, s.ch, s.sticky)
            , i = a[r];
        if ("ltr" == t.doc.direction && i.level % 2 == 0 && (0 < e ? i.to > s.ch : i.from < s.ch))
            return Po(n, s, e);
        function u(e, t) {
            return Fo(n, e instanceof tt ? e.ch : e, t)
        }
        function o(e) {
            return t.options.lineWrapping ? (l = l || Ln(t, n),
                Vn(t, n, l, e)) : {
                begin: 0,
                end: n.text.length
            }
        }
        var l, c = o("before" == s.sticky ? u(s, -1) : s.ch);
        if ("rtl" == t.doc.direction || 1 == i.level) {
            var h = 1 == i.level == e < 0
                , d = u(s, h ? 1 : -1);
            if (null != d && (h ? d <= i.to && d <= c.end : d >= i.from && d >= c.begin))
                return new tt(s.line, d, h ? "before" : "after")
        }
        h = function (e, t, n) {
            for (var r = function (e, t) {
                return t ? new tt(s.line, u(e, 1), "before") : new tt(s.line, e, "after")
            }; 0 <= e && e < a.length; e += t) {
                var i = a[e]
                    , o = 0 < t == (1 != i.level)
                    , l = o ? n.begin : u(n.end, -1);
                if (i.from <= l && l < i.to)
                    return r(l, o);
                if (l = o ? i.from : u(i.to, -1),
                    n.begin <= l && l < n.end)
                    return r(l, o)
            }
        }
            ,
            r = h(r + e, e, c);
        if (r)
            return r;
        c = 0 < e ? c.end : u(c.begin, -1);
        return null == c || 0 < e && c == n.text.length || !(r = h(0 < e ? 0 : a.length - 1, e, o(c))) ? null : r
    }
    ko.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    },
        ko.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        },
        ko.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        },
        ko.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        },
        ko.default = g ? ko.macDefault : ko.pcDefault;
    var Ro = {
        selectAll: Vi,
        singleSelection: function (e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), G)
        },
        killLine: function (n) {
            return Ho(n, function (e) {
                if (e.empty()) {
                    var t = Ye(n.doc, e.head.line).text.length;
                    return e.head.ch == t && e.head.line < n.lastLine() ? {
                        from: e.head,
                        to: tt(e.head.line + 1, 0)
                    } : {
                        from: e.head,
                        to: tt(e.head.line, t)
                    }
                }
                return {
                    from: e.from(),
                    to: e.to()
                }
            })
        },
        deleteLine: function (t) {
            return Ho(t, function (e) {
                return {
                    from: tt(e.from().line, 0),
                    to: at(t.doc, tt(e.to().line + 1, 0))
                }
            })
        },
        delLineLeft: function (e) {
            return Ho(e, function (e) {
                return {
                    from: tt(e.from().line, 0),
                    to: e.from()
                }
            })
        },
        delWrappedLineLeft: function (n) {
            return Ho(n, function (e) {
                var t = n.charCoords(e.head, "div").top + 5;
                return {
                    from: n.coordsChar({
                        left: 0,
                        top: t
                    }, "div"),
                    to: e.from()
                }
            })
        },
        delWrappedLineRight: function (n) {
            return Ho(n, function (e) {
                var t = n.charCoords(e.head, "div").top + 5
                    , t = n.coordsChar({
                        left: n.display.lineDiv.offsetWidth + 100,
                        top: t
                    }, "div");
                return {
                    from: e.from(),
                    to: t
                }
            })
        },
        undo: function (e) {
            return e.undo()
        },
        redo: function (e) {
            return e.redo()
        },
        undoSelection: function (e) {
            return e.undoSelection()
        },
        redoSelection: function (e) {
            return e.redoSelection()
        },
        goDocStart: function (e) {
            return e.extendSelection(tt(e.firstLine(), 0))
        },
        goDocEnd: function (e) {
            return e.extendSelection(tt(e.lastLine()))
        },
        goLineStart: function (t) {
            return t.extendSelectionsBy(function (e) {
                return zo(t, e.head.line)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineStartSmart: function (t) {
            return t.extendSelectionsBy(function (e) {
                return Bo(t, e.head)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineEnd: function (t) {
            return t.extendSelectionsBy(function (e) {
                return function (e, t) {
                    var n = Ye(e.doc, t)
                        , r = function (e) {
                            for (var t; t = Pt(e);)
                                e = t.find(1, !0).line;
                            return e
                        }(n);
                    r != n && (t = Ze(r));
                    return Eo(!0, e, n, t, -1)
                }(t, e.head.line)
            }, {
                origin: "+move",
                bias: -1
            })
        },
        goLineRight: function (t) {
            return t.extendSelectionsBy(function (e) {
                e = t.cursorCoords(e.head, "div").top + 5;
                return t.coordsChar({
                    left: t.display.lineDiv.offsetWidth + 100,
                    top: e
                }, "div")
            }, V)
        },
        goLineLeft: function (t) {
            return t.extendSelectionsBy(function (e) {
                e = t.cursorCoords(e.head, "div").top + 5;
                return t.coordsChar({
                    left: 0,
                    top: e
                }, "div")
            }, V)
        },
        goLineLeftSmart: function (n) {
            return n.extendSelectionsBy(function (e) {
                var t = n.cursorCoords(e.head, "div").top + 5
                    , t = n.coordsChar({
                        left: 0,
                        top: t
                    }, "div");
                return t.ch < n.getLine(t.line).search(/\S/) ? Bo(n, e.head) : t
            }, V)
        },
        goLineUp: function (e) {
            return e.moveV(-1, "line")
        },
        goLineDown: function (e) {
            return e.moveV(1, "line")
        },
        goPageUp: function (e) {
            return e.moveV(-1, "page")
        },
        goPageDown: function (e) {
            return e.moveV(1, "page")
        },
        goCharLeft: function (e) {
            return e.moveH(-1, "char")
        },
        goCharRight: function (e) {
            return e.moveH(1, "char")
        },
        goColumnLeft: function (e) {
            return e.moveH(-1, "column")
        },
        goColumnRight: function (e) {
            return e.moveH(1, "column")
        },
        goWordLeft: function (e) {
            return e.moveH(-1, "word")
        },
        goGroupRight: function (e) {
            return e.moveH(1, "group")
        },
        goGroupLeft: function (e) {
            return e.moveH(-1, "group")
        },
        goWordRight: function (e) {
            return e.moveH(1, "word")
        },
        delCharBefore: function (e) {
            return e.deleteH(-1, "codepoint")
        },
        delCharAfter: function (e) {
            return e.deleteH(1, "char")
        },
        delWordBefore: function (e) {
            return e.deleteH(-1, "word")
        },
        delWordAfter: function (e) {
            return e.deleteH(1, "word")
        },
        delGroupBefore: function (e) {
            return e.deleteH(-1, "group")
        },
        delGroupAfter: function (e) {
            return e.deleteH(1, "group")
        },
        indentAuto: function (e) {
            return e.indentSelection("smart")
        },
        indentMore: function (e) {
            return e.indentSelection("add")
        },
        indentLess: function (e) {
            return e.indentSelection("subtract")
        },
        insertTab: function (e) {
            return e.replaceSelection("\t")
        },
        insertSoftTab: function (e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                var o = n[i].from()
                    , o = E(e.getLine(o.line), o.ch, r);
                t.push(X(r - o % r))
            }
            e.replaceSelections(t)
        },
        defaultTab: function (e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        },
        transposeChars: function (l) {
            return Pr(l, function () {
                for (var e, t, n, r = l.listSelections(), i = [], o = 0; o < r.length; o++)
                    r[o].empty() && (e = r[o].head,
                        (t = Ye(l.doc, e.line).text) && (0 < (e = e.ch == t.length ? new tt(e.line, e.ch - 1) : e).ch ? (e = new tt(e.line, e.ch + 1),
                            l.replaceRange(t.charAt(e.ch - 1) + t.charAt(e.ch - 2), tt(e.line, e.ch - 2), e, "+transpose")) : e.line > l.doc.first && ((n = Ye(l.doc, e.line - 1).text) && (e = new tt(e.line, 1),
                                l.replaceRange(t.charAt(0) + l.doc.lineSeparator() + n.charAt(n.length - 1), tt(e.line - 1, n.length - 1), e, "+transpose")))),
                        i.push(new oi(e, e)));
                l.setSelections(i)
            })
        },
        newlineAndIndent: function (r) {
            return Pr(r, function () {
                for (var e = (t = r.listSelections()).length - 1; 0 <= e; e--)
                    r.replaceRange(r.doc.lineSeparator(), t[e].anchor, t[e].head, "+input");
                for (var t = r.listSelections(), n = 0; n < t.length; n++)
                    r.indentLine(t[n].from().line, null, !0);
                wr(r)
            })
        },
        openLine: function (e) {
            return e.replaceSelection("\n", "start")
        },
        toggleOverwrite: function (e) {
            return e.toggleOverwrite()
        }
    };
    function zo(e, t) {
        var n = Ye(e.doc, t)
            , r = It(n);
        return Eo(!0, e, r, t = r != n ? Ze(r) : t, 1)
    }
    function Bo(e, t) {
        var n = zo(e, t.line)
            , r = Ye(e.doc, n.line)
            , e = pe(r, e.doc.direction);
        if (e && 0 != e[0].level)
            return n;
        r = Math.max(n.ch, r.text.search(/\S/)),
            t = t.line == n.line && t.ch <= r && t.ch;
        return tt(n.line, t ? 0 : r, n.sticky)
    }
    function Go(e, t, n) {
        if ("string" == typeof t && !(t = Ro[t]))
            return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift
            , i = !1;
        try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
                n && (e.display.shift = !1),
                i = t(e) != B
        } finally {
            e.display.shift = r,
                e.state.suppressEdits = !1
        }
        return i
    }
    var Uo = new I;
    function Vo(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
            if (Oo(t))
                return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : Uo.set(50, function () {
                e.state.keySeq == i && (e.state.keySeq = null,
                    e.display.input.reset())
            }),
                Ko(e, i + " " + t, n, r))
                return !0
        }
        return Ko(e, t, n, r)
    }
    function Ko(e, t, n, r) {
        r = function (e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = No(t, e.state.keyMaps[r], n, e);
                if (i)
                    return i
            }
            return e.options.extraKeys && No(t, e.options.extraKeys, n, e) || No(t, e.options.keyMap, n, e)
        }(e, t, r);
        return "multi" == r && (e.state.keySeq = t),
            "handled" == r && rn(e, "keyHandled", e, t, n),
            "handled" != r && "multi" != r || (Le(n),
                cr(e)),
            !!r
    }
    function jo(t, e) {
        var n = Do(e, !0);
        return !!n && (e.shiftKey && !t.state.keySeq ? Vo(t, "Shift-" + n, e, function (e) {
            return Go(t, e, !0)
        }) || Vo(t, n, e, function (e) {
            if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                return Go(t, e)
        }) : Vo(t, n, e, function (e) {
            return Go(t, e)
        }))
    }
    var Xo = null;
    function Yo(e) {
        var t, n, r, i = this;
        function o(e) {
            18 != e.keyCode && e.altKey || (S(r, "CodeMirror-crosshair"),
                ye(document, "keyup", o),
                ye(document, "mouseover", o))
        }
        e.target && e.target != i.display.input.getField() || (i.curOp.focus = O(),
            we(i, e) || (w && v < 11 && 27 == e.keyCode && (e.returnValue = !1),
                t = e.keyCode,
                i.display.shift = 16 == t || e.shiftKey,
                n = jo(i, e),
                p && (Xo = n ? t : null,
                    !n && 88 == t && !Pe && (g ? e.metaKey : e.ctrlKey) && i.replaceSelection("", null, "cut")),
                d && !g && !n && 46 == t && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"),
                18 != t || /\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) || (A(r = i.display.lineDiv, "CodeMirror-crosshair"),
                    me(document, "keyup", o),
                    me(document, "mouseover", o))))
    }
    function _o(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1),
            we(this, e)
    }
    function $o(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField() || pn(t.display, e) || we(t, e) || e.ctrlKey && !e.altKey || g && e.metaKey)) {
            var n, r = e.keyCode, i = e.charCode;
            if (p && r == Xo)
                return Xo = null,
                    void Le(e);
            p && (!e.which || e.which < 10) && jo(t, e) || "\b" != (i = String.fromCharCode(null == i ? r : i)) && (Vo(n = t, "'" + i + "'", e, function (e) {
                return Go(n, e, !0)
            }) || t.display.input.onKeyPress(e))
        }
    }
    function qo(e, t, n) {
        this.time = e,
            this.pos = t,
            this.button = n
    }
    var Zo, Qo;
    function Jo(e) {
        var t, n, r, i, o, l = this, s = l.display;
        we(l, e) || s.activeTouch && s.input.supportsTouch() || (s.input.ensurePolled(),
            s.shift = e.shiftKey,
            pn(s, e) ? f || (s.scroller.draggable = !1,
                setTimeout(function () {
                    return s.scroller.draggable = !0
                }, 100)) : nl(l, e) || (t = Jn(l, e),
                    n = Oe(e),
                    i = t ? (r = t,
                        i = n,
                        o = +new Date,
                        Qo && Qo.compare(o, r, i) ? (Zo = Qo = null,
                            "triple") : Zo && Zo.compare(o, r, i) ? (Qo = new qo(o, r, i),
                                Zo = null,
                                "double") : (Zo = new qo(o, r, i),
                                    Qo = null,
                                    "single")) : "single",
                    window.focus(),
                    1 == n && l.state.selectingText && l.state.selectingText(e),
                    t && function (n, e, r, t, i) {
                        var o = "Click";
                        "double" == t ? o = "Double" + o : "triple" == t && (o = "Triple" + o);
                        return Vo(n, Ao(o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o, i), i, function (e) {
                            if (!(e = "string" == typeof e ? Ro[e] : e))
                                return !1;
                            var t = !1;
                            try {
                                n.isReadOnly() && (n.state.suppressEdits = !0),
                                    t = e(n, r) != B
                            } finally {
                                n.state.suppressEdits = !1
                            }
                            return t
                        })
                    }(l, n, t, i, e) || (1 == n ? t ? function (e, t, n, r) {
                        w ? setTimeout(F(hr, e), 0) : e.curOp.focus = O();
                        var i, o = function (e, t, n) {
                            var r = e.getOption("configureMouse")
                                , i = r ? r(e, t, n) : {};
                            null == i.unit && (r = m ? n.shiftKey && n.metaKey : n.altKey,
                                i.unit = r ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line");
                            null != i.extend && !e.doc.extend || (i.extend = e.doc.extend || n.shiftKey);
                            null == i.addNew && (i.addNew = g ? n.metaKey : n.ctrlKey);
                            null == i.moveOnDrag && (i.moveOnDrag = !(g ? n.altKey : n.ctrlKey));
                            return i
                        }(e, n, r), l = e.doc.sel;
                        (e.options.dragDrop && We && !e.isReadOnly() && "single" == n && -1 < (i = l.contains(t)) && (nt((i = l.ranges[i]).from(), t) < 0 || 0 < t.xRel) && (0 < nt(i.to(), t) || t.xRel < 0) ? function (t, n, r, i) {
                            var o = t.display
                                , l = !1
                                , s = Er(t, function (e) {
                                    f && (o.scroller.draggable = !1),
                                        t.state.draggingText = !1,
                                        t.state.delayingBlurEvent && (t.hasFocus() ? t.state.delayingBlurEvent = !1 : dr(t)),
                                        ye(o.wrapper.ownerDocument, "mouseup", s),
                                        ye(o.wrapper.ownerDocument, "mousemove", a),
                                        ye(o.scroller, "dragstart", u),
                                        ye(o.scroller, "drop", s),
                                        l || (Le(e),
                                            i.addNew || Ai(t.doc, r, null, null, i.extend),
                                            f && !c || w && 9 == v ? setTimeout(function () {
                                                o.wrapper.ownerDocument.body.focus({
                                                    preventScroll: !0
                                                }),
                                                    o.input.focus()
                                            }, 20) : o.input.focus())
                                })
                                , a = function (e) {
                                    l = l || 10 <= Math.abs(n.clientX - e.clientX) + Math.abs(n.clientY - e.clientY)
                                }
                                , u = function () {
                                    return l = !0
                                };
                            f && (o.scroller.draggable = !0);
                            (t.state.draggingText = s).copy = !i.moveOnDrag,
                                me(o.wrapper.ownerDocument, "mouseup", s),
                                me(o.wrapper.ownerDocument, "mousemove", a),
                                me(o.scroller, "dragstart", u),
                                me(o.scroller, "drop", s),
                                t.state.delayingBlurEvent = !0,
                                setTimeout(function () {
                                    return o.input.focus()
                                }, 20),
                                o.scroller.dragDrop && o.scroller.dragDrop()
                        }
                            : function (d, e, f, p) {
                                w && dr(d);
                                var l = d.display
                                    , g = d.doc;
                                Le(e);
                                var m, v, y = g.sel, t = y.ranges;
                                p.addNew && !p.extend ? (v = g.sel.contains(f),
                                    m = -1 < v ? t[v] : new oi(f, f)) : (m = g.sel.primary(),
                                        v = g.sel.primIndex);
                                "rectangle" == p.unit ? (p.addNew || (m = new oi(f, f)),
                                    f = Jn(d, e, !0, !0),
                                    v = -1) : (e = el(d, f, p.unit),
                                        m = p.extend ? Oi(m, e.anchor, e.head, p.extend) : e);
                                p.addNew ? -1 == v ? (v = t.length,
                                    Pi(g, li(d, t.concat([m]), v), {
                                        scroll: !1,
                                        origin: "*mouse"
                                    })) : 1 < t.length && t[v].empty() && "char" == p.unit && !p.extend ? (Pi(g, li(d, t.slice(0, v).concat(t.slice(v + 1)), 0), {
                                        scroll: !1,
                                        origin: "*mouse"
                                    }),
                                        y = g.sel) : Wi(g, v, m, U) : (Pi(g, new ii([m], v = 0), U),
                                            y = g.sel);
                                var b = f;
                                function s(e) {
                                    if (0 != nt(b, e))
                                        if (b = e,
                                            "rectangle" == p.unit) {
                                            for (var t = [], n = d.options.tabSize, r = E(Ye(g, f.line).text, f.ch, n), i = E(Ye(g, e.line).text, e.ch, n), o = Math.min(r, i), l = Math.max(r, i), s = Math.min(f.line, e.line), a = Math.min(d.lastLine(), Math.max(f.line, e.line)); s <= a; s++) {
                                                var u = Ye(g, s).text
                                                    , c = K(u, o, n);
                                                o == l ? t.push(new oi(tt(s, c), tt(s, c))) : u.length > c && t.push(new oi(tt(s, c), tt(s, K(u, l, n))))
                                            }
                                            t.length || t.push(new oi(f, f)),
                                                Pi(g, li(d, y.ranges.slice(0, v).concat(t), v), {
                                                    origin: "*mouse",
                                                    scroll: !1
                                                }),
                                                d.scrollIntoView(e)
                                        } else {
                                            var h, r = m, i = el(d, e, p.unit), e = r.anchor, e = 0 < nt(i.anchor, e) ? (h = i.head,
                                                lt(r.from(), i.anchor)) : (h = i.anchor,
                                                    ot(r.to(), i.head)), i = y.ranges.slice(0);
                                            i[v] = function (e, t) {
                                                var n = t.anchor
                                                    , r = t.head
                                                    , i = Ye(e.doc, n.line);
                                                if (0 == nt(n, r) && n.sticky == r.sticky)
                                                    return t;
                                                var o = pe(i);
                                                if (!o)
                                                    return t;
                                                var l = le(o, n.ch, n.sticky)
                                                    , s = o[l];
                                                if (s.from != n.ch && s.to != n.ch)
                                                    return t;
                                                i = l + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                                                if (0 == i || i == o.length)
                                                    return t;
                                                a = r.line != n.line ? 0 < (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) : (e = le(o, r.ch, r.sticky),
                                                    a = e - l || (r.ch - n.ch) * (1 == s.level ? -1 : 1),
                                                    e == i - 1 || e == i ? a < 0 : 0 < a);
                                                var i = o[i + (a ? -1 : 0)]
                                                    , a = a == (1 == i.level)
                                                    , i = a ? i.from : i.to
                                                    , a = a ? "after" : "before";
                                                return n.ch == i && n.sticky == a ? t : new oi(new tt(n.line, i, a), r)
                                            }(d, new oi(at(g, e), h)),
                                                Pi(g, li(d, i, v), U)
                                        }
                                }
                                var a = l.wrapper.getBoundingClientRect()
                                    , u = 0;
                                function n(e) {
                                    d.state.selectingText = !1,
                                        u = 1 / 0,
                                        e && (Le(e),
                                            l.input.focus()),
                                        ye(l.wrapper.ownerDocument, "mousemove", r),
                                        ye(l.wrapper.ownerDocument, "mouseup", i),
                                        g.history.lastSelOrigin = null
                                }
                                var r = Er(d, function (e) {
                                    (0 !== e.buttons && Oe(e) ? function e(t) {
                                        var n, r, i = ++u, o = Jn(d, t, !0, "rectangle" == p.unit);
                                        o && (0 != nt(o, b) ? (d.curOp.focus = O(),
                                            s(o),
                                            n = vr(l, g),
                                            (o.line >= n.to || o.line < n.from) && setTimeout(Er(d, function () {
                                                u == i && e(t)
                                            }), 150)) : (r = t.clientY < a.top ? -20 : t.clientY > a.bottom ? 20 : 0) && setTimeout(Er(d, function () {
                                                u == i && (l.scroller.scrollTop += r,
                                                    e(t))
                                            }), 50))
                                    }
                                        : n)(e)
                                })
                                    , i = Er(d, n);
                                d.state.selectingText = i,
                                    me(l.wrapper.ownerDocument, "mousemove", r),
                                    me(l.wrapper.ownerDocument, "mouseup", i)
                            }
                        )(e, r, t, o)
                    }(l, t, i, e) : Ne(e) == s.scroller && Le(e) : 2 == n ? (t && Ai(l.doc, t),
                        setTimeout(function () {
                            return s.input.focus()
                        }, 20)) : 3 == n && (x ? l.display.input.onContextMenu(e) : dr(l)))))
    }
    function el(e, t, n) {
        if ("char" == n)
            return new oi(t, t);
        if ("word" == n)
            return e.findWordAt(t);
        if ("line" == n)
            return new oi(tt(t.line, 0), at(e.doc, tt(t.line + 1, 0)));
        t = n(e, t);
        return new oi(t.from, t.to)
    }
    function tl(e, t, n, r) {
        var i, o;
        if (t.touches)
            i = t.touches[0].clientX,
                o = t.touches[0].clientY;
        else
            try {
                i = t.clientX,
                    o = t.clientY
            } catch (e) {
                return !1
            }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
        r && Le(t);
        var l = e.display
            , r = l.lineDiv.getBoundingClientRect();
        if (o > r.bottom || !Ce(e, n))
            return Te(t);
        o -= r.top - l.viewOffset;
        for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var a = l.gutters.childNodes[s];
            if (a && a.getBoundingClientRect().right >= i)
                return be(e, n, e, Qe(e.doc, o), e.display.gutterSpecs[s].className, t),
                    Te(t)
        }
    }
    function nl(e, t) {
        return tl(e, t, "gutterClick", !0)
    }
    function rl(e, t) {
        var n, r;
        pn(e.display, t) || (r = t,
            Ce(n = e, "gutterContextMenu") && tl(n, r, "gutterContextMenu", !1)) || we(e, t, "contextmenu") || x || e.display.input.onContextMenu(t)
    }
    function il(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
            Dn(e)
    }
    qo.prototype.compare = function (e, t, n) {
        return this.time + 400 > e && 0 == nt(t, this.pos) && n == this.button
    }
        ;
    var ol = {
        toString: function () {
            return "CodeMirror.Init"
        }
    }
        , ll = {}
        , sl = {};
    function al(e, t, n) {
        !t != !(n && n != ol) && (n = e.display.dragFunctions,
            (t = t ? me : ye)(e.display.scroller, "dragstart", n.start),
            t(e.display.scroller, "dragenter", n.enter),
            t(e.display.scroller, "dragover", n.over),
            t(e.display.scroller, "dragleave", n.leave),
            t(e.display.scroller, "drop", n.drop))
    }
    function ul(e) {
        e.options.lineWrapping ? (A(e.display.wrapper, "CodeMirror-wrap"),
            e.display.sizer.style.minWidth = "",
            e.display.sizerWidth = null) : (S(e.display.wrapper, "CodeMirror-wrap"),
                Vt(e)),
            Qn(e),
            tr(e),
            Dn(e),
            setTimeout(function () {
                return Nr(e)
            }, 100)
    }
    function cl(e, t) {
        var n = this;
        if (!(this instanceof cl))
            return new cl(e, t);
        this.options = t = t ? P(t) : {},
            P(ll, t, !1);
        var r = t.value;
        "string" == typeof r ? r = new ho(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode),
            this.doc = r;
        var i, o = new cl.inputStyles[t.inputStyle](this), o = this.display = new Qr(e, r, o, t);
        for (i in il(o.wrapper.CodeMirror = this),
            t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
            Dr(this),
            this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: -1,
                cutIncoming: -1,
                selectingText: !1,
                draggingText: !1,
                highlight: new I,
                keySeq: null,
                specialChars: null
            },
            t.autofocus && !h && o.input.focus(),
            w && v < 11 && setTimeout(function () {
                return n.display.input.reset(!0)
            }, 20),
            function (r) {
                var i = r.display;
                me(i.scroller, "mousedown", Er(r, Jo)),
                    me(i.scroller, "dblclick", w && v < 11 ? Er(r, function (e) {
                        var t;
                        we(r, e) || (!(t = Jn(r, e)) || nl(r, e) || pn(r.display, e) || (Le(e),
                            t = r.findWordAt(t),
                            Ai(r.doc, t.anchor, t.head)))
                    }) : function (e) {
                        return we(r, e) || Le(e)
                    }
                    );
                me(i.scroller, "contextmenu", function (e) {
                    return rl(r, e)
                }),
                    me(i.input.getField(), "contextmenu", function (e) {
                        i.scroller.contains(e.target) || rl(r, e)
                    });
                var n, o = {
                    end: 0
                };
                function l() {
                    i.activeTouch && (n = setTimeout(function () {
                        return i.activeTouch = null
                    }, 1e3),
                        (o = i.activeTouch).end = +new Date)
                }
                function s(e, t) {
                    if (null == t.left)
                        return 1;
                    var n = t.left - e.left
                        , e = t.top - e.top;
                    return 400 < n * n + e * e
                }
                me(i.scroller, "touchstart", function (e) {
                    var t;
                    we(r, e) || function (e) {
                        if (1 == e.touches.length) {
                            e = e.touches[0];
                            return e.radiusX <= 1 && e.radiusY <= 1
                        }
                    }(e) || nl(r, e) || (i.input.ensurePolled(),
                        clearTimeout(n),
                        t = +new Date,
                        i.activeTouch = {
                            start: t,
                            moved: !1,
                            prev: t - o.end <= 300 ? o : null
                        },
                        1 == e.touches.length && (i.activeTouch.left = e.touches[0].pageX,
                            i.activeTouch.top = e.touches[0].pageY))
                }),
                    me(i.scroller, "touchmove", function () {
                        i.activeTouch && (i.activeTouch.moved = !0)
                    }),
                    me(i.scroller, "touchend", function (e) {
                        var t, n = i.activeTouch;
                        n && !pn(i, e) && null != n.left && !n.moved && new Date - n.start < 300 && (t = r.coordsChar(i.activeTouch, "page"),
                            t = !n.prev || s(n, n.prev) ? new oi(t, t) : !n.prev.prev || s(n, n.prev.prev) ? r.findWordAt(t) : new oi(tt(t.line, 0), at(r.doc, tt(t.line + 1, 0))),
                            r.setSelection(t.anchor, t.head),
                            r.focus(),
                            Le(e)),
                            l()
                    }),
                    me(i.scroller, "touchcancel", l),
                    me(i.scroller, "scroll", function () {
                        i.scroller.clientHeight && (Lr(r, i.scroller.scrollTop),
                            Tr(r, i.scroller.scrollLeft, !0),
                            be(r, "scroll", r))
                    }),
                    me(i.scroller, "mousewheel", function (e) {
                        return ri(r, e)
                    }),
                    me(i.scroller, "DOMMouseScroll", function (e) {
                        return ri(r, e)
                    }),
                    me(i.wrapper, "scroll", function () {
                        return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
                    }),
                    i.dragFunctions = {
                        enter: function (e) {
                            we(r, e) || Me(e)
                        },
                        over: function (e) {
                            var t, n;
                            we(r, e) || ((n = Jn(t = r, n = e)) && (ar(t, n, n = document.createDocumentFragment()),
                                t.display.dragCursor || (t.display.dragCursor = M("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
                                    t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)),
                                k(t.display.dragCursor, n)),
                                Me(e))
                        },
                        start: function (e) {
                            var t, n;
                            t = r,
                                n = e,
                                w && (!t.state.draggingText || +new Date - po < 100) ? Me(n) : we(t, n) || pn(t.display, n) || (n.dataTransfer.setData("Text", t.getSelection()),
                                    n.dataTransfer.effectAllowed = "copyMove",
                                    n.dataTransfer.setDragImage && !c && ((e = M("img", null, null, "position: fixed; left: 0; top: 0;")).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                                        p && (e.width = e.height = 1,
                                            t.display.wrapper.appendChild(e),
                                            e._top = e.offsetTop),
                                        n.dataTransfer.setDragImage(e, 0, 0),
                                        p && e.parentNode.removeChild(e)))
                        },
                        drop: Er(r, go),
                        leave: function (e) {
                            we(r, e) || mo(r)
                        }
                    };
                var e = i.input.getField();
                me(e, "keyup", function (e) {
                    return _o.call(r, e)
                }),
                    me(e, "keydown", Er(r, Yo)),
                    me(e, "keypress", Er(r, $o)),
                    me(e, "focus", function (e) {
                        return fr(r, e)
                    }),
                    me(e, "blur", function (e) {
                        return pr(r, e)
                    })
            }(this),
            bo(),
            Hr(this),
            this.curOp.forceUpdate = !0,
            vi(this, r),
            t.autofocus && !h || this.hasFocus() ? setTimeout(function () {
                n.hasFocus() && !n.state.focused && fr(n)
            }, 20) : pr(this),
            sl)
            sl.hasOwnProperty(i) && sl[i](this, t[i], ol);
        _r(this),
            t.finishInit && t.finishInit(this);
        for (var l = 0; l < hl.length; ++l)
            hl[l](this);
        Fr(this),
            f && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
    }
    cl.defaults = ll,
        cl.optionHandlers = sl;
    var hl = [];
    function dl(e, t, n, r) {
        var i, o = e.doc;
        "smart" == (n = null == n ? "add" : n) && (o.mode.indent ? i = pt(e, t).state : n = "prev");
        var l = e.options.tabSize
            , s = Ye(o, t)
            , a = E(s.text, null, l);
        s.stateAfter && (s.stateAfter = null);
        var u = s.text.match(/^\s*/)[0];
        if (r || /\S/.test(s.text)) {
            if ("smart" == n && ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == B || 150 < c)) {
                if (!r)
                    return;
                n = "prev"
            }
        } else
            c = 0,
                n = "not";
        "prev" == n ? c = t > o.first ? E(Ye(o, t - 1).text, null, l) : 0 : "add" == n ? c = a + e.options.indentUnit : "subtract" == n ? c = a - e.options.indentUnit : "number" == typeof n && (c = a + n);
        var c = Math.max(0, c)
            , h = ""
            , d = 0;
        if (e.options.indentWithTabs)
            for (var f = Math.floor(c / l); f; --f)
                d += l,
                    h += "\t";
        if (d < c && (h += X(c - d)),
            h != u)
            return qi(o, h, tt(t, 0), tt(t, u.length), "+input"),
                !(s.stateAfter = null);
        for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < u.length) {
                g = tt(t, u.length);
                Wi(o, p, new oi(g, g));
                break
            }
        }
    }
    cl.defineInitHook = function (e) {
        return hl.push(e)
    }
        ;
    var fl = null;
    function pl(e) {
        fl = e
    }
    function gl(e, t, n, r, i) {
        var o = e.doc;
        e.display.shift = !1,
            r = r || o.sel;
        var l = +new Date - 200
            , s = "paste" == i || e.state.pasteIncoming > l
            , a = He(t)
            , u = null;
        if (s && 1 < r.ranges.length)
            if (fl && fl.text.join("\n") == t) {
                if (r.ranges.length % fl.text.length == 0)
                    for (var u = [], c = 0; c < fl.text.length; c++)
                        u.push(o.splitLines(fl.text[c]))
            } else
                a.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = _(a, function (e) {
                    return [e]
                }));
        for (var h = e.curOp.updateInput, d = r.ranges.length - 1; 0 <= d; d--) {
            var f = r.ranges[d]
                , p = f.from()
                , g = f.to();
            f.empty() && (n && 0 < n ? p = tt(p.line, p.ch - n) : e.state.overwrite && !s ? g = tt(g.line, Math.min(Ye(o, g.line).text.length, g.ch + Y(a).length)) : s && fl && fl.lineWise && fl.text.join("\n") == a.join("\n") && (p = g = tt(p.line, 0)));
            g = {
                from: p,
                to: g,
                text: u ? u[d % u.length] : a,
                origin: i || (s ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
            };
            ji(e.doc, g),
                rn(e, "inputRead", e, g)
        }
        t && !s && vl(e, t),
            wr(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
            e.curOp.typing = !0,
            e.state.pasteIncoming = e.state.cutIncoming = -1
    }
    function ml(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        return n && (e.preventDefault(),
            t.isReadOnly() || t.options.disableInput || Pr(t, function () {
                return gl(t, n, 0, null, "paste")
            }),
            1)
    }
    function vl(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; 0 <= r; r--) {
                var i = n.ranges[r];
                if (!(100 < i.head.ch || r && n.ranges[r - 1].head.line == i.head.line)) {
                    var o = e.getModeAt(i.head)
                        , l = !1;
                    if (o.electricChars) {
                        for (var s = 0; s < o.electricChars.length; s++)
                            if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                                l = dl(e, i.head.line, "smart");
                                break
                            }
                    } else
                        o.electricInput && o.electricInput.test(Ye(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = dl(e, i.head.line, "smart"));
                    l && rn(e, "electricInput", e, i.head.line)
                }
            }
    }
    function yl(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line
                , i = {
                    anchor: tt(i, 0),
                    head: tt(i + 1, 0)
                };
            n.push(i),
                t.push(e.getRange(i.anchor, i.head))
        }
        return {
            text: t,
            ranges: n
        }
    }
    function bl(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "" : "off"),
            e.setAttribute("autocapitalize", r ? "" : "off"),
            e.setAttribute("spellcheck", !!t)
    }
    function wl() {
        var e = M("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
            , t = M("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return f ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
            s && (e.style.border = "1px solid black"),
            bl(e),
            t
    }
    function xl(i, o, l, s, a) {
        var e = o
            , t = l
            , u = Ye(i, o.line)
            , c = a && "rtl" == i.direction ? -l : l;
        function n(e) {
            var t, n, r;
            if (null == (n = "codepoint" == s ? (t = u.text.charCodeAt(o.ch + (0 < l ? 0 : -1)),
                isNaN(t) ? null : (n = 0 < l ? 55296 <= t && t < 56320 : 56320 <= t && t < 57343,
                    new tt(o.line, Math.max(0, Math.min(u.text.length, o.ch + l * (n ? 2 : 1))), -l))) : a ? Io(i.cm, u, o, l) : Po(u, o, l))) {
                if (e || (r = o.line + c) < i.first || r >= i.first + i.size || (o = new tt(r, o.ch, o.sticky),
                    !(u = Ye(i, r))))
                    return;
                o = Eo(a, i.cm, u, o.line, c)
            } else
                o = n;
            return 1
        }
        if ("char" == s || "codepoint" == s)
            n();
        else if ("column" == s)
            n(!0);
        else if ("word" == s || "group" == s)
            for (var r = null, h = "group" == s, d = i.cm && i.cm.getHelper(o, "wordChars"), f = !0; !(l < 0) || n(!f); f = !1) {
                var p = u.text.charAt(o.ch) || "\n"
                    , p = J(p, d) ? "w" : h && "\n" == p ? "n" : !h || /\s/.test(p) ? null : "p";
                if (!h || f || p || (p = "s"),
                    r && r != p) {
                    l < 0 && (l = 1,
                        n(),
                        o.sticky = "after");
                    break
                }
                if (p && (r = p),
                    0 < l && !n(!f))
                    break
            }
        t = Gi(i, o, e, t, !0);
        return rt(e, t) && (t.hitSide = !0),
            t
    }
    function Cl(e, t, n, r) {
        var i, o, l, s = e.doc, a = t.left;
        for ("page" == r ? (i = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
            i = Math.max(i - .5 * Yn(e.display), 3),
            o = (0 < n ? t.bottom : t.top) + n * i) : "line" == r && (o = 0 < n ? t.bottom + 3 : t.top - 3); (l = Gn(e, a, o)).outside;) {
            if (n < 0 ? o <= 0 : o >= s.height) {
                l.hitSide = !0;
                break
            }
            o += 5 * n
        }
        return l
    }
    e = function (e) {
        this.cm = e,
            this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
            this.polling = new I,
            this.composing = null,
            this.gracePeriod = !1,
            this.readDOMTimeout = null
    }
        ;
    function Sl(e, t) {
        var n = Sn(e, t.line);
        if (!n || n.hidden)
            return null;
        var r = Ye(e.doc, t.line)
            , n = xn(n, r, t.line)
            , r = pe(r, e.doc.direction)
            , e = "left";
        r && (e = le(r, t.ch) % 2 ? "right" : "left");
        e = Nn(n.map, t.ch, e);
        return e.offset = "right" == e.collapse ? e.end : e.start,
            e
    }
    function Ll(e, t) {
        return t && (e.bad = !0),
            e
    }
    function kl(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n]))
                return Ll(e.clipPos(tt(e.display.viewTo - 1)), !0);
            t = null,
                n = 0
        } else
            for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv)
                    return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv)
                    break
            }
        for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r)
                return function (u, e, t) {
                    var n = u.text.firstChild
                        , r = !1;
                    if (!e || !N(n, e))
                        return Ll(tt(Ze(u.line), 0), !0);
                    if (e == n && (r = !0,
                        e = n.childNodes[t],
                        t = 0,
                        !e)) {
                        var i = u.rest ? Y(u.rest) : u.line;
                        return Ll(tt(Ze(i), i.text.length), r)
                    }
                    var i = 3 == e.nodeType ? e : null
                        , o = e;
                    i || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (i = e.firstChild,
                        t = t && i.nodeValue.length);
                    for (; o.parentNode != n;)
                        o = o.parentNode;
                    var c = u.measure
                        , h = c.maps;
                    function l(e, t, n) {
                        for (var r = -1; r < (h ? h.length : 0); r++)
                            for (var i = r < 0 ? c.map : h[r], o = 0; o < i.length; o += 3) {
                                var l = i[o + 2];
                                if (l == e || l == t) {
                                    var s = Ze(r < 0 ? u.line : u.rest[r])
                                        , a = i[o] + n;
                                    return tt(s, a = n < 0 || l != e ? i[o + (n ? 1 : 0)] : a)
                                }
                            }
                    }
                    var s = l(i, o, t);
                    if (s)
                        return Ll(s, r);
                    for (var a = o.nextSibling, d = i ? i.nodeValue.length - t : 0; a; a = a.nextSibling) {
                        if (s = l(a, a.firstChild, 0))
                            return Ll(tt(s.line, s.ch - d), r);
                        d += a.textContent.length
                    }
                    for (var f = o.previousSibling, p = t; f; f = f.previousSibling) {
                        if (s = l(f, f.firstChild, -1))
                            return Ll(tt(s.line, s.ch + p), r);
                        p += f.textContent.length
                    }
                }(o, t, n)
        }
    }
    e.prototype.init = function (e) {
        var t = this
            , o = this
            , l = o.cm
            , s = o.div = e.lineDiv;
        function a(e) {
            for (var t = e.target; t; t = t.parentNode) {
                if (t == s)
                    return 1;
                if (/\bCodeMirror-(?:line)?widget\b/.test(t.className))
                    break
            }
        }
        function n(e) {
            if (a(e) && !we(l, e)) {
                if (l.somethingSelected())
                    pl({
                        lineWise: !1,
                        text: l.getSelections()
                    }),
                        "cut" == e.type && l.replaceSelection("", null, "cut");
                else {
                    if (!l.options.lineWiseCopyCut)
                        return;
                    var t = yl(l);
                    pl({
                        lineWise: !0,
                        text: t.text
                    }),
                        "cut" == e.type && l.operation(function () {
                            l.setSelections(t.ranges, 0, G),
                                l.replaceSelection("", null, "cut")
                        })
                }
                if (e.clipboardData) {
                    e.clipboardData.clearData();
                    var n = fl.text.join("\n");
                    if (e.clipboardData.setData("Text", n),
                        e.clipboardData.getData("Text") == n)
                        return void e.preventDefault()
                }
                var r = wl()
                    , e = r.firstChild;
                l.display.lineSpace.insertBefore(r, l.display.lineSpace.firstChild),
                    e.value = fl.text.join("\n");
                var i = O();
                H(e),
                    setTimeout(function () {
                        l.display.lineSpace.removeChild(r),
                            i.focus(),
                            i == s && o.showPrimarySelection()
                    }, 50)
            }
        }
        s.contentEditable = !0,
            bl(s, l.options.spellcheck, l.options.autocorrect, l.options.autocapitalize),
            me(s, "paste", function (e) {
                !a(e) || we(l, e) || ml(e, l) || v <= 11 && setTimeout(Er(l, function () {
                    return t.updateFromDOM()
                }), 20)
            }),
            me(s, "compositionstart", function (e) {
                t.composing = {
                    data: e.data,
                    done: !1
                }
            }),
            me(s, "compositionupdate", function (e) {
                t.composing || (t.composing = {
                    data: e.data,
                    done: !1
                })
            }),
            me(s, "compositionend", function (e) {
                t.composing && (e.data != t.composing.data && t.readFromDOMSoon(),
                    t.composing.done = !0)
            }),
            me(s, "touchstart", function () {
                return o.forceCompositionEnd()
            }),
            me(s, "input", function () {
                t.composing || t.readFromDOMSoon()
            }),
            me(s, "copy", n),
            me(s, "cut", n)
    }
        ,
        e.prototype.screenReaderLabelChanged = function (e) {
            e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label")
        }
        ,
        e.prototype.prepareSelection = function () {
            var e = sr(this.cm, !1);
            return e.focus = O() == this.div,
                e
        }
        ,
        e.prototype.showSelection = function (e, t) {
            e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(),
                this.showMultipleSelections(e))
        }
        ,
        e.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection()
        }
        ,
        e.prototype.showPrimarySelection = function () {
            var e = this.getSelection()
                , t = this.cm
                , n = t.doc.sel.primary()
                , r = n.from()
                , i = n.to();
            if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom)
                e.removeAllRanges();
            else {
                var o = kl(t, e.anchorNode, e.anchorOffset)
                    , n = kl(t, e.focusNode, e.focusOffset);
                if (!o || o.bad || !n || n.bad || 0 != nt(lt(o, n), r) || 0 != nt(ot(o, n), i)) {
                    n = t.display.view,
                        r = r.line >= t.display.viewFrom && Sl(t, r) || {
                            node: n[0].measure.map[2],
                            offset: 0
                        },
                        i = i.line < t.display.viewTo && Sl(t, i);
                    if (i || (i = {
                        node: (s = (s = n[n.length - 1].measure).maps ? s.maps[s.maps.length - 1] : s.map)[s.length - 1],
                        offset: s[s.length - 2] - s[s.length - 3]
                    }),
                        r && i) {
                        var l, s = e.rangeCount && e.getRangeAt(0);
                        try {
                            l = W(r.node, r.offset, i.offset, i.node)
                        } catch (e) { }
                        l && (!d && t.state.focused ? (e.collapse(r.node, r.offset),
                            l.collapsed || (e.removeAllRanges(),
                                e.addRange(l))) : (e.removeAllRanges(),
                                    e.addRange(l)),
                            s && null == e.anchorNode ? e.addRange(s) : d && this.startGracePeriod()),
                            this.rememberSelection()
                    } else
                        e.removeAllRanges()
                }
            }
        }
        ,
        e.prototype.startGracePeriod = function () {
            var e = this;
            clearTimeout(this.gracePeriod),
                this.gracePeriod = setTimeout(function () {
                    e.gracePeriod = !1,
                        e.selectionChanged() && e.cm.operation(function () {
                            return e.cm.curOp.selectionChanged = !0
                        })
                }, 20)
        }
        ,
        e.prototype.showMultipleSelections = function (e) {
            k(this.cm.display.cursorDiv, e.cursors),
                k(this.cm.display.selectionDiv, e.selection)
        }
        ,
        e.prototype.rememberSelection = function () {
            var e = this.getSelection();
            this.lastAnchorNode = e.anchorNode,
                this.lastAnchorOffset = e.anchorOffset,
                this.lastFocusNode = e.focusNode,
                this.lastFocusOffset = e.focusOffset
        }
        ,
        e.prototype.selectionInEditor = function () {
            var e = this.getSelection();
            if (!e.rangeCount)
                return !1;
            e = e.getRangeAt(0).commonAncestorContainer;
            return N(this.div, e)
        }
        ,
        e.prototype.focus = function () {
            "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && O() == this.div || this.showSelection(this.prepareSelection(), !0),
                this.div.focus())
        }
        ,
        e.prototype.blur = function () {
            this.div.blur()
        }
        ,
        e.prototype.getField = function () {
            return this.div
        }
        ,
        e.prototype.supportsTouch = function () {
            return !0
        }
        ,
        e.prototype.receivedFocus = function () {
            var e = this
                , t = this;
            this.selectionInEditor() ? setTimeout(function () {
                return e.pollSelection()
            }, 20) : Pr(this.cm, function () {
                return t.cm.curOp.selectionChanged = !0
            }),
                this.polling.set(this.cm.options.pollInterval, function e() {
                    t.cm.state.focused && (t.pollSelection(),
                        t.polling.set(t.cm.options.pollInterval, e))
                })
        }
        ,
        e.prototype.selectionChanged = function () {
            var e = this.getSelection();
            return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
        }
        ,
        e.prototype.pollSelection = function () {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e, t, n = this.getSelection(), r = this.cm;
                if (a && o && this.cm.display.gutterSpecs.length && function (e) {
                    for (var t = e; t; t = t.parentNode)
                        if (/CodeMirror-gutter-wrapper/.test(t.className))
                            return !0;
                    return !1
                }(n.anchorNode))
                    return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }),
                        this.blur(),
                        void this.focus();
                this.composing || (this.rememberSelection(),
                    e = kl(r, n.anchorNode, n.anchorOffset),
                    t = kl(r, n.focusNode, n.focusOffset),
                    e && t && Pr(r, function () {
                        Pi(r.doc, si(e, t), G),
                            (e.bad || t.bad) && (r.curOp.selectionChanged = !0)
                    }))
            }
        }
        ,
        e.prototype.pollContent = function () {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
                this.readDOMTimeout = null);
            var e, t = this.cm, n = t.display, r = t.doc.sel.primary(), i = r.from(), r = r.to();
            if (0 == i.ch && i.line > t.firstLine() && (i = tt(i.line - 1, Ye(t.doc, i.line - 1).length)),
                r.ch == Ye(t.doc, r.line).text.length && r.line < t.lastLine() && (r = tt(r.line + 1, 0)),
                i.line < n.viewFrom || r.line > n.viewTo - 1)
                return !1;
            var o, l = i.line == n.viewFrom || 0 == (l = er(t, i.line)) ? (e = Ze(n.view[0].line),
                n.view[0].node) : (e = Ze(n.view[l].line),
                    n.view[l - 1].node.nextSibling), r = er(t, r.line), r = r == n.view.length - 1 ? (o = n.viewTo - 1,
                        n.lineDiv.lastChild) : (o = Ze(n.view[r + 1].line) - 1,
                            n.view[r + 1].node.previousSibling);
            if (!l)
                return !1;
            for (var s = t.doc.splitLines(function (l, e, t, s, a) {
                var n = ""
                    , u = !1
                    , c = l.doc.lineSeparator()
                    , h = !1;
                function d() {
                    u && (n += c,
                        h && (n += c),
                        u = h = !1)
                }
                function f(e) {
                    e && (d(),
                        n += e)
                }
                for (; !function e(t) {
                    if (1 == t.nodeType) {
                        var n = t.getAttribute("cm-text");
                        if (n)
                            f(n);
                        else if (n = t.getAttribute("cm-marker"))
                            (n = l.findMarks(tt(s, 0), tt(a + 1, 0), (o = +n,
                                function (e) {
                                    return e.id == o
                                }
                            ))).length && (r = n[0].find(0)) && f(_e(l.doc, r.from, r.to).join(c));
                        else if ("false" != t.getAttribute("contenteditable")) {
                            var r = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (/^br$/i.test(t.nodeName) || 0 != t.textContent.length) {
                                r && d();
                                for (var i = 0; i < t.childNodes.length; i++)
                                    e(t.childNodes[i]);
                                /^(pre|p)$/i.test(t.nodeName) && (h = !0),
                                    r && (u = !0)
                            }
                        }
                    } else
                        3 == t.nodeType && f(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                    var o
                }(e),
                    e != t;)
                    e = e.nextSibling,
                        h = !1;
                return n
            }(t, l, r, e, o)), a = _e(t.doc, tt(e, 0), tt(o, Ye(t.doc, o).text.length)); 1 < s.length && 1 < a.length;)
                if (Y(s) == Y(a))
                    s.pop(),
                        a.pop(),
                        o--;
                else {
                    if (s[0] != a[0])
                        break;
                    s.shift(),
                        a.shift(),
                        e++
                }
            for (var u = 0, c = 0, h = s[0], d = a[0], f = Math.min(h.length, d.length); u < f && h.charCodeAt(u) == d.charCodeAt(u);)
                ++u;
            for (var p = Y(s), g = Y(a), m = Math.min(p.length - (1 == s.length ? u : 0), g.length - (1 == a.length ? u : 0)); c < m && p.charCodeAt(p.length - c - 1) == g.charCodeAt(g.length - c - 1);)
                ++c;
            if (1 == s.length && 1 == a.length && e == i.line)
                for (; u && u > i.ch && p.charCodeAt(p.length - c - 1) == g.charCodeAt(g.length - c - 1);)
                    u--,
                        c++;
            s[s.length - 1] = p.slice(0, p.length - c).replace(/^\u200b+/, ""),
                s[0] = s[0].slice(u).replace(/\u200b+$/, "");
            l = tt(e, u),
                r = tt(o, a.length ? Y(a).length - c : 0);
            return 1 < s.length || s[0] || nt(l, r) ? (qi(t.doc, s, l, r, "+input"),
                !0) : void 0
        }
        ,
        e.prototype.ensurePolled = function () {
            this.forceCompositionEnd()
        }
        ,
        e.prototype.reset = function () {
            this.forceCompositionEnd()
        }
        ,
        e.prototype.forceCompositionEnd = function () {
            this.composing && (clearTimeout(this.readDOMTimeout),
                this.composing = null,
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus())
        }
        ,
        e.prototype.readFromDOMSoon = function () {
            var e = this;
            null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                if (e.readDOMTimeout = null,
                    e.composing) {
                    if (!e.composing.done)
                        return;
                    e.composing = null
                }
                e.updateFromDOM()
            }, 80))
        }
        ,
        e.prototype.updateFromDOM = function () {
            var e = this;
            !this.cm.isReadOnly() && this.pollContent() || Pr(this.cm, function () {
                return tr(e.cm)
            })
        }
        ,
        e.prototype.setUneditable = function (e) {
            e.contentEditable = "false"
        }
        ,
        e.prototype.onKeyPress = function (e) {
            0 == e.charCode || this.composing || (e.preventDefault(),
                this.cm.isReadOnly() || Er(this.cm, gl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
        }
        ,
        e.prototype.readOnlyChanged = function (e) {
            this.div.contentEditable = String("nocursor" != e)
        }
        ,
        e.prototype.onContextMenu = function () { }
        ,
        e.prototype.resetPosition = function () { }
        ,
        e.prototype.needsContentAttribute = !0;
    var Tl, Ml, Nl, Ol, Al, r = function (e) {
        this.cm = e,
            this.prevInput = "",
            this.pollingFast = !1,
            this.polling = new I,
            this.hasSelection = !1,
            this.composing = null
    };
    function Dl(e, t, r, n) {
        Tl.defaults[e] = t,
            r && (Ml[e] = n ? function (e, t, n) {
                n != ol && r(e, t, n)
            }
                : r)
    }
    r.prototype.init = function (n) {
        var e = this
            , r = this
            , i = this.cm;
        this.createField(n);
        var o = this.textarea;
        function t(e) {
            if (!we(i, e)) {
                if (i.somethingSelected())
                    pl({
                        lineWise: !1,
                        text: i.getSelections()
                    });
                else {
                    if (!i.options.lineWiseCopyCut)
                        return;
                    var t = yl(i);
                    pl({
                        lineWise: !0,
                        text: t.text
                    }),
                        "cut" == e.type ? i.setSelections(t.ranges, null, G) : (r.prevInput = "",
                            o.value = t.text.join("\n"),
                            H(o))
                }
                "cut" == e.type && (i.state.cutIncoming = +new Date)
            }
        }
        n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
            s && (o.style.width = "0px"),
            me(o, "input", function () {
                w && 9 <= v && e.hasSelection && (e.hasSelection = null),
                    r.poll()
            }),
            me(o, "paste", function (e) {
                we(i, e) || ml(e, i) || (i.state.pasteIncoming = +new Date,
                    r.fastPoll())
            }),
            me(o, "cut", t),
            me(o, "copy", t),
            me(n.scroller, "paste", function (e) {
                if (!pn(n, e) && !we(i, e)) {
                    if (!o.dispatchEvent)
                        return i.state.pasteIncoming = +new Date,
                            void r.focus();
                    var t = new Event("paste");
                    t.clipboardData = e.clipboardData,
                        o.dispatchEvent(t)
                }
            }),
            me(n.lineSpace, "selectstart", function (e) {
                pn(n, e) || Le(e)
            }),
            me(o, "compositionstart", function () {
                var e = i.getCursor("from");
                r.composing && r.composing.range.clear(),
                    r.composing = {
                        start: e,
                        range: i.markText(e, i.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    }
            }),
            me(o, "compositionend", function () {
                r.composing && (r.poll(),
                    r.composing.range.clear(),
                    r.composing = null)
            })
    }
        ,
        r.prototype.createField = function (e) {
            this.wrapper = wl(),
                this.textarea = this.wrapper.firstChild
        }
        ,
        r.prototype.screenReaderLabelChanged = function (e) {
            e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label")
        }
        ,
        r.prototype.prepareSelection = function () {
            var e, t = this.cm, n = t.display, r = t.doc, i = sr(t);
            return t.options.moveInputWithCursor && (e = Rn(t, r.sel.primary().head, "div"),
                t = n.wrapper.getBoundingClientRect(),
                r = n.lineDiv.getBoundingClientRect(),
                i.teTop = Math.max(0, Math.min(n.wrapper.clientHeight - 10, e.top + r.top - t.top)),
                i.teLeft = Math.max(0, Math.min(n.wrapper.clientWidth - 10, e.left + r.left - t.left))),
                i
        }
        ,
        r.prototype.showSelection = function (e) {
            var t = this.cm.display;
            k(t.cursorDiv, e.cursors),
                k(t.selectionDiv, e.selection),
                null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
                    this.wrapper.style.left = e.teLeft + "px")
        }
        ,
        r.prototype.reset = function (e) {
            var t, n;
            this.contextMenuPending || this.composing || ((t = this.cm).somethingSelected() ? (this.prevInput = "",
                n = t.getSelection(),
                this.textarea.value = n,
                t.state.focused && H(this.textarea),
                w && 9 <= v && (this.hasSelection = n)) : e || (this.prevInput = this.textarea.value = "",
                    w && 9 <= v && (this.hasSelection = null)))
        }
        ,
        r.prototype.getField = function () {
            return this.textarea
        }
        ,
        r.prototype.supportsTouch = function () {
            return !1
        }
        ,
        r.prototype.focus = function () {
            if ("nocursor" != this.cm.options.readOnly && (!h || O() != this.textarea))
                try {
                    this.textarea.focus()
                } catch (e) { }
        }
        ,
        r.prototype.blur = function () {
            this.textarea.blur()
        }
        ,
        r.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0
        }
        ,
        r.prototype.receivedFocus = function () {
            this.slowPoll()
        }
        ,
        r.prototype.slowPoll = function () {
            var e = this;
            this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
                e.poll(),
                    e.cm.state.focused && e.slowPoll()
            })
        }
        ,
        r.prototype.fastPoll = function () {
            var t = !1
                , n = this;
            n.pollingFast = !0,
                n.polling.set(20, function e() {
                    n.poll() || t ? (n.pollingFast = !1,
                        n.slowPoll()) : (t = !0,
                            n.polling.set(60, e))
                })
        }
        ,
        r.prototype.poll = function () {
            var e = this
                , t = this.cm
                , n = this.textarea
                , r = this.prevInput;
            if (this.contextMenuPending || !t.state.focused || Fe(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
                return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected())
                return !1;
            if (w && 9 <= v && this.hasSelection === i || g && /[\uf700-\uf7ff]/.test(i))
                return t.display.input.reset(),
                    !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if (8203 != o || r || (r = "​"),
                    8666 == o)
                    return this.reset(),
                        this.cm.execCommand("undo")
            }
            for (var l = 0, s = Math.min(r.length, i.length); l < s && r.charCodeAt(l) == i.charCodeAt(l);)
                ++l;
            return Pr(t, function () {
                gl(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null),
                    1e3 < i.length || -1 < i.indexOf("\n") ? n.value = e.prevInput = "" : e.prevInput = i,
                    e.composing && (e.composing.range.clear(),
                        e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                            className: "CodeMirror-composing"
                        }))
            }),
                !0
        }
        ,
        r.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        }
        ,
        r.prototype.onKeyPress = function () {
            w && 9 <= v && (this.hasSelection = null),
                this.fastPoll()
        }
        ,
        r.prototype.onContextMenu = function (e) {
            var n = this
                , r = n.cm
                , i = r.display
                , o = n.textarea;
            n.contextMenuPending && n.contextMenuPending();
            var l, s, t, a, u = Jn(r, e), c = i.scroller.scrollTop;
            function h() {
                var e, t;
                null != o.selectionStart && (t = "​" + ((e = r.somethingSelected()) ? o.value : ""),
                    o.value = "⇚",
                    o.value = t,
                    n.prevInput = e ? "" : "​",
                    o.selectionStart = 1,
                    o.selectionEnd = t.length,
                    i.selForContextMenu = r.doc.sel)
            }
            function d() {
                var e, t;
                n.contextMenuPending == d && (n.contextMenuPending = !1,
                    n.wrapper.style.cssText = s,
                    o.style.cssText = l,
                    w && v < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = c),
                    null != o.selectionStart && ((!w || v < 9) && h(),
                        e = 0,
                        t = function () {
                            i.selForContextMenu == r.doc.sel && 0 == o.selectionStart && 0 < o.selectionEnd && "​" == n.prevInput ? Er(r, Vi)(r) : e++ < 10 ? i.detectingSelectAll = setTimeout(t, 500) : (i.selForContextMenu = null,
                                i.input.reset())
                        }
                        ,
                        i.detectingSelectAll = setTimeout(t, 200)))
            }
            u && !p && (r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(u) && Er(r, Pi)(r.doc, si(u), G),
                l = o.style.cssText,
                s = n.wrapper.style.cssText,
                u = n.wrapper.offsetParent.getBoundingClientRect(),
                n.wrapper.style.cssText = "position: static",
                o.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - u.top - 5) + "px; left: " + (e.clientX - u.left - 5) + "px;\n      z-index: 1000; background: " + (w ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
                f && (t = window.scrollY),
                i.input.focus(),
                f && window.scrollTo(null, t),
                i.input.reset(),
                r.somethingSelected() || (o.value = n.prevInput = " "),
                n.contextMenuPending = d,
                i.selForContextMenu = r.doc.sel,
                clearTimeout(i.detectingSelectAll),
                w && 9 <= v && h(),
                x ? (Me(e),
                    a = function () {
                        ye(window, "mouseup", a),
                            setTimeout(d, 20)
                    }
                    ,
                    me(window, "mouseup", a)) : setTimeout(d, 50))
        }
        ,
        r.prototype.readOnlyChanged = function (e) {
            e || this.reset(),
                this.textarea.disabled = "nocursor" == e,
                this.textarea.readOnly = !!e
        }
        ,
        r.prototype.setUneditable = function () { }
        ,
        r.prototype.needsContentAttribute = !1,
        Ml = (Tl = cl).optionHandlers,
        Tl.defineOption = Dl,
        Tl.Init = ol,
        Dl("value", "", function (e, t) {
            return e.setValue(t)
        }, !0),
        Dl("mode", null, function (e, t) {
            e.doc.modeOption = t,
                di(e)
        }, !0),
        Dl("indentUnit", 2, di, !0),
        Dl("indentWithTabs", !1),
        Dl("smartIndent", !0),
        Dl("tabSize", 4, function (e) {
            fi(e),
                Dn(e),
                tr(e)
        }, !0),
        Dl("lineSeparator", null, function (e, r) {
            if (e.doc.lineSep = r) {
                var i = []
                    , o = e.doc.first;
                e.doc.iter(function (e) {
                    for (var t = 0; ;) {
                        var n = e.text.indexOf(r, t);
                        if (-1 == n)
                            break;
                        t = n + r.length,
                            i.push(tt(o, n))
                    }
                    o++
                });
                for (var t = i.length - 1; 0 <= t; t--)
                    qi(e.doc, r, i[t], tt(i[t].line, i[t].ch + r.length))
            }
        }),
        Dl("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
            e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"),
                n != ol && e.refresh()
        }),
        Dl("specialCharPlaceholder", $t, function (e) {
            return e.refresh()
        }, !0),
        Dl("electricChars", !0),
        Dl("inputStyle", h ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor")
        }, !0),
        Dl("spellcheck", !1, function (e, t) {
            return e.getInputField().spellcheck = t
        }, !0),
        Dl("autocorrect", !1, function (e, t) {
            return e.getInputField().autocorrect = t
        }, !0),
        Dl("autocapitalize", !1, function (e, t) {
            return e.getInputField().autocapitalize = t
        }, !0),
        Dl("rtlMoveVisually", !y),
        Dl("wholeLineUpdateBefore", !0),
        Dl("theme", "default", function (e) {
            il(e),
                Zr(e)
        }, !0),
        Dl("keyMap", "default", function (e, t, n) {
            t = Wo(t),
                n = n != ol && Wo(n);
            n && n.detach && n.detach(e, t),
                t.attach && t.attach(e, n || null)
        }),
        Dl("extraKeys", null),
        Dl("configureMouse", null),
        Dl("lineWrapping", !1, ul, !0),
        Dl("gutters", [], function (e, t) {
            e.display.gutterSpecs = $r(t, e.options.lineNumbers),
                Zr(e)
        }, !0),
        Dl("fixedGutter", !0, function (e, t) {
            e.display.gutters.style.left = t ? qn(e.display) + "px" : "0",
                e.refresh()
        }, !0),
        Dl("coverGutterNextToScrollbar", !1, function (e) {
            return Nr(e)
        }, !0),
        Dl("scrollbarStyle", "native", function (e) {
            Dr(e),
                Nr(e),
                e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
        }, !0),
        Dl("lineNumbers", !1, function (e, t) {
            e.display.gutterSpecs = $r(e.options.gutters, t),
                Zr(e)
        }, !0),
        Dl("firstLineNumber", 1, Zr, !0),
        Dl("lineNumberFormatter", function (e) {
            return e
        }, Zr, !0),
        Dl("showCursorWhenSelecting", !1, lr, !0),
        Dl("resetSelectionOnContextMenu", !0),
        Dl("lineWiseCopyCut", !0),
        Dl("pasteLinesPerSelection", !0),
        Dl("selectionsMayTouch", !1),
        Dl("readOnly", !1, function (e, t) {
            "nocursor" == t && (pr(e),
                e.display.input.blur()),
                e.display.input.readOnlyChanged(t)
        }),
        Dl("screenReaderLabel", null, function (e, t) {
            e.display.input.screenReaderLabelChanged(t = "" === t ? null : t)
        }),
        Dl("disableInput", !1, function (e, t) {
            t || e.display.input.reset()
        }, !0),
        Dl("dragDrop", !0, al),
        Dl("allowDropFileTypes", null),
        Dl("cursorBlinkRate", 530),
        Dl("cursorScrollMargin", 0),
        Dl("cursorHeight", 1, lr, !0),
        Dl("singleCursorHeightPerLine", !0, lr, !0),
        Dl("workTime", 100),
        Dl("workDelay", 100),
        Dl("flattenSpans", !0, fi, !0),
        Dl("addModeClass", !1, fi, !0),
        Dl("pollInterval", 100),
        Dl("undoDepth", 200, function (e, t) {
            return e.doc.history.undoDepth = t
        }),
        Dl("historyEventDelay", 1250),
        Dl("viewportMargin", 10, function (e) {
            return e.refresh()
        }, !0),
        Dl("maxHighlightLength", 1e4, fi, !0),
        Dl("moveInputWithCursor", !0, function (e, t) {
            t || e.display.input.resetPosition()
        }),
        Dl("tabindex", null, function (e, t) {
            return e.display.input.getField().tabIndex = t || ""
        }),
        Dl("autofocus", null),
        Dl("direction", "ltr", function (e, t) {
            return e.doc.setDirection(t)
        }, !0),
        Dl("phrases", null),
        Ol = (Nl = cl).optionHandlers,
        Al = Nl.helpers = {},
        Nl.prototype = {
            constructor: Nl,
            focus: function () {
                window.focus(),
                    this.display.input.focus()
            },
            setOption: function (e, t) {
                var n = this.options
                    , r = n[e];
                n[e] == t && "mode" != e || (n[e] = t,
                    Ol.hasOwnProperty(e) && Er(this, Ol[e])(this, t, r),
                    be(this, "optionChange", this, e))
            },
            getOption: function (e) {
                return this.options[e]
            },
            getDoc: function () {
                return this.doc
            },
            addKeyMap: function (e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](Wo(e))
            },
            removeKeyMap: function (e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                    if (t[n] == e || t[n].name == e)
                        return t.splice(n, 1),
                            !0
            },
            addOverlay: Ir(function (e, t) {
                var n = e.token ? e : Nl.getMode(this.options, e);
                if (n.startState)
                    throw new Error("Overlays may not be stateful.");
                !function (e, t, n) {
                    for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;)
                        r++;
                    e.splice(r, 0, t)
                }(this.state.overlays, {
                    mode: n,
                    modeSpec: e,
                    opaque: t && t.opaque,
                    priority: t && t.priority || 0
                }, function (e) {
                    return e.priority
                }),
                    this.state.modeGen++,
                    tr(this)
            }),
            removeOverlay: Ir(function (e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                    var r = t[n].modeSpec;
                    if (r == e || "string" == typeof e && r.name == e)
                        return t.splice(n, 1),
                            this.state.modeGen++,
                            void tr(this)
                }
            }),
            indentLine: Ir(function (e, t, n) {
                "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
                    Je(this.doc, e) && dl(this, e, t, n)
            }),
            indentSelection: Ir(function (e) {
                for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.empty())
                        i.head.line > n && (dl(this, i.head.line, e, !0),
                            n = i.head.line,
                            r == this.doc.sel.primIndex && wr(this));
                    else {
                        for (var o = i.from(), l = i.to(), i = Math.max(n, o.line), n = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1, s = i; s < n; ++s)
                            dl(this, s, e);
                        i = this.doc.sel.ranges;
                        0 == o.ch && t.length == i.length && 0 < i[r].from().ch && Wi(this.doc, r, new oi(o, i[r].to()), G)
                    }
                }
            }),
            getTokenAt: function (e, t) {
                return bt(this, e, t)
            },
            getLineTokens: function (e, t) {
                return bt(this, tt(e), t, !0)
            },
            getTokenTypeAt: function (e) {
                e = at(this.doc, e);
                var t, n = ft(this, Ye(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
                if (0 == o)
                    t = n[2];
                else
                    for (; ;) {
                        var l = r + i >> 1;
                        if ((l ? n[2 * l - 1] : 0) >= o)
                            i = l;
                        else {
                            if (!(n[2 * l + 1] < o)) {
                                t = n[2 * l + 2];
                                break
                            }
                            r = 1 + l
                        }
                    }
                e = t ? t.indexOf("overlay ") : -1;
                return e < 0 ? t : 0 == e ? null : t.slice(0, e - 1)
            },
            getModeAt: function (e) {
                var t = this.doc.mode;
                return t.innerMode ? Nl.innerMode(t, this.getTokenAt(e).state).mode : t
            },
            getHelper: function (e, t) {
                return this.getHelpers(e, t)[0]
            },
            getHelpers: function (e, t) {
                var n = [];
                if (!Al.hasOwnProperty(t))
                    return n;
                var r = Al[t]
                    , i = this.getModeAt(e);
                if ("string" == typeof i[t])
                    r[i[t]] && n.push(r[i[t]]);
                else if (i[t])
                    for (var o = 0; o < i[t].length; o++) {
                        var l = r[i[t][o]];
                        l && n.push(l)
                    }
                else
                    i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);
                for (var s = 0; s < r._global.length; s++) {
                    var a = r._global[s];
                    a.pred(i, this) && -1 == R(n, a.val) && n.push(a.val)
                }
                return n
            },
            getStateAfter: function (e, t) {
                var n = this.doc;
                return pt(this, (e = st(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state
            },
            cursorCoords: function (e, t) {
                var n = this.doc.sel.primary()
                    , n = null == e ? n.head : "object" == typeof e ? at(this.doc, e) : e ? n.from() : n.to();
                return Rn(this, n, t || "page")
            },
            charCoords: function (e, t) {
                return In(this, at(this.doc, e), t || "page")
            },
            coordsChar: function (e, t) {
                return Gn(this, (e = En(this, e, t || "page")).left, e.top)
            },
            lineAtHeight: function (e, t) {
                return e = En(this, {
                    top: e,
                    left: 0
                }, t || "page").top,
                    Qe(this.doc, e + this.display.viewOffset)
            },
            heightAtLine: function (e, t, n) {
                var r, i = !1, e = "number" == typeof e ? (r = this.doc.first + this.doc.size - 1,
                    e < this.doc.first ? e = this.doc.first : r < e && (e = r,
                        i = !0),
                    Ye(this.doc, e)) : e;
                return Pn(this, e, {
                    top: 0,
                    left: 0
                }, t || "page", n || i).top + (i ? this.doc.height - Gt(e) : 0)
            },
            defaultTextHeight: function () {
                return Yn(this.display)
            },
            defaultCharWidth: function () {
                return _n(this.display)
            },
            getViewport: function () {
                return {
                    from: this.display.viewFrom,
                    to: this.display.viewTo
                }
            },
            addWidget: function (e, t, n, r, i) {
                var o, l, s = this.display, a = (e = Rn(this, at(this.doc, e))).bottom, u = e.left;
                t.style.position = "absolute",
                    t.setAttribute("cm-ignore-events", "true"),
                    this.display.input.setUneditable(t),
                    s.sizer.appendChild(t),
                    "over" == r ? a = e.top : "above" != r && "near" != r || (o = Math.max(s.wrapper.clientHeight, this.doc.height),
                        l = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth),
                        ("above" == r || e.bottom + t.offsetHeight > o) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= o && (a = e.bottom),
                        u + t.offsetWidth > l && (u = l - t.offsetWidth)),
                    t.style.top = a + "px",
                    t.style.left = t.style.right = "",
                    "right" == i ? (u = s.sizer.clientWidth - t.offsetWidth,
                        t.style.right = "0px") : ("left" == i ? u = 0 : "middle" == i && (u = (s.sizer.clientWidth - t.offsetWidth) / 2),
                            t.style.left = u + "px"),
                    n && (n = this,
                        t = {
                            left: u,
                            top: a,
                            right: u + t.offsetWidth,
                            bottom: a + t.offsetHeight
                        },
                        null != (t = yr(n, t)).scrollTop && Lr(n, t.scrollTop),
                        null != t.scrollLeft && Tr(n, t.scrollLeft))
            },
            triggerOnKeyDown: Ir(Yo),
            triggerOnKeyPress: Ir($o),
            triggerOnKeyUp: _o,
            triggerOnMouseDown: Ir(Jo),
            execCommand: function (e) {
                if (Ro.hasOwnProperty(e))
                    return Ro[e].call(null, this)
            },
            triggerElectric: Ir(function (e) {
                vl(this, e)
            }),
            findPosH: function (e, t, n, r) {
                var i = 1;
                t < 0 && (i = -1,
                    t = -t);
                for (var o = at(this.doc, e), l = 0; l < t && !(o = xl(this.doc, o, i, n, r)).hitSide; ++l)
                    ;
                return o
            },
            moveH: Ir(function (t, n) {
                var r = this;
                this.extendSelectionsBy(function (e) {
                    return r.display.shift || r.doc.extend || e.empty() ? xl(r.doc, e.head, t, n, r.options.rtlMoveVisually) : t < 0 ? e.from() : e.to()
                }, V)
            }),
            deleteH: Ir(function (n, r) {
                var e = this.doc.sel
                    , i = this.doc;
                e.somethingSelected() ? i.replaceSelection("", null, "+delete") : Ho(this, function (e) {
                    var t = xl(i, e.head, n, r, !1);
                    return n < 0 ? {
                        from: t,
                        to: e.head
                    } : {
                        from: e.head,
                        to: t
                    }
                })
            }),
            findPosV: function (e, t, n, r) {
                var i = 1
                    , o = r;
                t < 0 && (i = -1,
                    t = -t);
                for (var l = at(this.doc, e), s = 0; s < t; ++s) {
                    var a = Rn(this, l, "div");
                    if (null == o ? o = a.left : a.left = o,
                        (l = Cl(this, a, i, n)).hitSide)
                        break
                }
                return l
            },
            moveV: Ir(function (r, i) {
                var o = this
                    , l = this.doc
                    , s = []
                    , a = !this.display.shift && !l.extend && l.sel.somethingSelected();
                if (l.extendSelectionsBy(function (e) {
                    if (a)
                        return r < 0 ? e.from() : e.to();
                    var t = Rn(o, e.head, "div");
                    null != e.goalColumn && (t.left = e.goalColumn),
                        s.push(t.left);
                    var n = Cl(o, t, r, i);
                    return "page" == i && e == l.sel.primary() && br(o, In(o, n, "div").top - t.top),
                        n
                }, V),
                    s.length)
                    for (var e = 0; e < l.sel.ranges.length; e++)
                        l.sel.ranges[e].goalColumn = s[e]
            }),
            findWordAt: function (e) {
                var t = Ye(this.doc, e.line).text
                    , n = e.ch
                    , r = e.ch;
                if (t) {
                    var i = this.getHelper(e, "wordChars");
                    "before" != e.sticky && r != t.length || !n ? ++r : --n;
                    for (var o = t.charAt(n), l = J(o, i) ? function (e) {
                        return J(e, i)
                    }
                        : /\s/.test(o) ? function (e) {
                            return /\s/.test(e)
                        }
                            : function (e) {
                                return !/\s/.test(e) && !J(e)
                            }
                        ; 0 < n && l(t.charAt(n - 1));)
                        --n;
                    for (; r < t.length && l(t.charAt(r));)
                        ++r
                }
                return new oi(tt(e.line, n), tt(e.line, r))
            },
            toggleOverwrite: function (e) {
                null != e && e == this.state.overwrite || (((this.state.overwrite = !this.state.overwrite) ? A : S)(this.display.cursorDiv, "CodeMirror-overwrite"),
                    be(this, "overwriteToggle", this, this.state.overwrite))
            },
            hasFocus: function () {
                return this.display.input.getField() == O()
            },
            isReadOnly: function () {
                return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: Ir(function (e, t) {
                xr(this, e, t)
            }),
            getScrollInfo: function () {
                var e = this.display.scroller;
                return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - yn(this) - this.display.barHeight,
                    width: e.scrollWidth - yn(this) - this.display.barWidth,
                    clientHeight: wn(this),
                    clientWidth: bn(this)
                }
            },
            scrollIntoView: Ir(function (e, t) {
                var n;
                null == e ? (e = {
                    from: this.doc.sel.primary().head,
                    to: null
                },
                    null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: tt(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }),
                    e.to || (e.to = e.from),
                    e.margin = t || 0,
                    null != e.from.line ? (n = e,
                        Cr(t = this),
                        t.curOp.scrollToPos = n) : Sr(this, e.from, e.to, e.margin)
            }),
            setSize: Ir(function (e, t) {
                function n(e) {
                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                }
                var r = this;
                null != e && (this.display.wrapper.style.width = n(e)),
                    null != t && (this.display.wrapper.style.height = n(t)),
                    this.options.lineWrapping && An(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function (e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; t++)
                            if (e.widgets[t].noHScroll) {
                                nr(r, i, "widget");
                                break
                            }
                    ++i
                }),
                    this.curOp.forceUpdate = !0,
                    be(this, "refresh", this)
            }),
            operation: function (e) {
                return Pr(this, e)
            },
            startOperation: function () {
                return Hr(this)
            },
            endOperation: function () {
                return Fr(this)
            },
            refresh: Ir(function () {
                var e = this.display.cachedTextHeight;
                tr(this),
                    this.curOp.forceUpdate = !0,
                    Dn(this),
                    xr(this, this.doc.scrollLeft, this.doc.scrollTop),
                    jr(this.display),
                    (null == e || .5 < Math.abs(e - Yn(this.display)) || this.options.lineWrapping) && Qn(this),
                    be(this, "refresh", this)
            }),
            swapDoc: Ir(function (e) {
                var t = this.doc;
                return t.cm = null,
                    this.state.selectingText && this.state.selectingText(),
                    vi(this, e),
                    Dn(this),
                    this.display.input.reset(),
                    xr(this, e.scrollLeft, e.scrollTop),
                    this.curOp.forceScroll = !0,
                    rn(this, "swapDoc", this, t),
                    t
            }),
            phrase: function (e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
            },
            getInputField: function () {
                return this.display.input.getField()
            },
            getWrapperElement: function () {
                return this.display.wrapper
            },
            getScrollerElement: function () {
                return this.display.scroller
            },
            getGutterElement: function () {
                return this.display.gutters
            }
        },
        Se(Nl),
        Nl.registerHelper = function (e, t, n) {
            Al.hasOwnProperty(e) || (Al[e] = Nl[e] = {
                _global: []
            }),
                Al[e][t] = n
        }
        ,
        Nl.registerGlobalHelper = function (e, t, n, r) {
            Nl.registerHelper(e, t, r),
                Al[e]._global.push({
                    pred: n,
                    val: r
                })
        }
        ;
    var Wl, Hl, Fl = "iter insert remove copy getEditor constructor".split(" ");
    for (Wl in ho.prototype)
        ho.prototype.hasOwnProperty(Wl) && R(Fl, Wl) < 0 && (cl.prototype[Wl] = function (e) {
            return function () {
                return e.apply(this.doc, arguments)
            }
        }(ho.prototype[Wl]));
    return Se(ho),
        cl.inputStyles = {
            textarea: r,
            contenteditable: e
        },
        cl.defineMode = function (e) {
            cl.defaults.mode || "null" == e || (cl.defaults.mode = e),
                function (e, t) {
                    2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                        Ie[e] = t
                }
                    .apply(this, arguments)
        }
        ,
        cl.defineMIME = function (e, t) {
            Re[e] = t
        }
        ,
        cl.defineMode("null", function () {
            return {
                token: function (e) {
                    return e.skipToEnd()
                }
            }
        }),
        cl.defineMIME("text/plain", "null"),
        cl.defineExtension = function (e, t) {
            cl.prototype[e] = t
        }
        ,
        cl.defineDocExtension = function (e, t) {
            ho.prototype[e] = t
        }
        ,
        cl.fromTextArea = function (t, n) {
            var e;
            function r() {
                t.value = s.getValue()
            }
            if ((n = n ? P(n) : {}).value = t.value,
                !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex),
                !n.placeholder && t.placeholder && (n.placeholder = t.placeholder),
                null == n.autofocus && (e = O(),
                    n.autofocus = e == t || null != t.getAttribute("autofocus") && e == document.body),
                t.form && (me(t.form, "submit", r),
                    !n.leaveSubmitMethodAlone)) {
                var i = t.form
                    , o = i.submit;
                try {
                    var l = i.submit = function () {
                        r(),
                            i.submit = o,
                            i.submit(),
                            i.submit = l
                    }
                } catch (e) { }
            }
            n.finishInit = function (e) {
                e.save = r,
                    e.getTextArea = function () {
                        return t
                    }
                    ,
                    e.toTextArea = function () {
                        e.toTextArea = isNaN,
                            r(),
                            t.parentNode.removeChild(e.getWrapperElement()),
                            t.style.display = "",
                            t.form && (ye(t.form, "submit", r),
                                n.leaveSubmitMethodAlone || "function" != typeof t.form.submit || (t.form.submit = o))
                    }
            }
                ,
                t.style.display = "none";
            var s = cl(function (e) {
                return t.parentNode.insertBefore(e, t.nextSibling)
            }, n);
            return s
        }
        ,
        (Hl = cl).off = ye,
        Hl.on = me,
        Hl.wheelEventPixels = ni,
        Hl.Doc = ho,
        Hl.splitLines = He,
        Hl.countColumn = E,
        Hl.findColumn = K,
        Hl.isWordChar = Q,
        Hl.Pass = B,
        Hl.signal = be,
        Hl.Line = Kt,
        Hl.changeEnd = ai,
        Hl.scrollbarModel = Ar,
        Hl.Pos = tt,
        Hl.cmpPos = nt,
        Hl.modes = Ie,
        Hl.mimeModes = Re,
        Hl.resolveMode = ze,
        Hl.getMode = Be,
        Hl.modeExtensions = Ge,
        Hl.extendMode = Ue,
        Hl.copyState = Ve,
        Hl.startState = je,
        Hl.innerMode = Ke,
        Hl.commands = Ro,
        Hl.keyMap = ko,
        Hl.keyName = Do,
        Hl.isModifierKey = Oo,
        Hl.lookupKey = No,
        Hl.normalizeKeyMap = Mo,
        Hl.StringStream = Xe,
        Hl.SharedTextMarker = ao,
        Hl.TextMarker = oo,
        Hl.LineWidget = ro,
        Hl.e_preventDefault = Le,
        Hl.e_stopPropagation = ke,
        Hl.e_stop = Me,
        Hl.addClass = A,
        Hl.contains = N,
        Hl.rmClass = S,
        Hl.keyNames = xo,
        cl.version = "5.63.1",
        cl
});

//source https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/htmlmixed/htmlmixed.min.js
!function(t) {
    "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], t) : t(CodeMirror)
}(function(m) {
    "use strict";
    var l = {
        script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
        style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
    };
    var a = {};
    function d(t, e) {
        e = t.match(a[e = e] || (a[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")));
        return e ? /^\s*(.*?)\s*$/.exec(e[2])[1] : ""
    }
    function g(t, e) {
        return new RegExp((e ? "^" : "") + "</s*" + t + "s*>","i")
    }
    function o(t, e) {
        for (var a in t)
            for (var n = e[a] || (e[a] = []), l = t[a], o = l.length - 1; 0 <= o; o--)
                n.unshift(l[o])
    }
    m.defineMode("htmlmixed", function(i, t) {
        var c = m.getMode(i, {
            name: "xml",
            htmlMode: !0,
            multilineTagIndentFactor: t.multilineTagIndentFactor,
            multilineTagIndentPastTag: t.multilineTagIndentPastTag,
            allowMissingTagName: t.allowMissingTagName
        })
          , s = {}
          , e = t && t.tags
          , a = t && t.scriptTypes;
        if (o(l, s),
        e && o(e, s),
        a)
            for (var n = a.length - 1; 0 <= n; n--)
                s.script.unshift(["type", a[n].matches, a[n].mode]);
        function u(t, e) {
            var a, o, r, n = c.token(t, e.htmlState), l = /\btag\b/.test(n);
            return l && !/[<>\s\/]/.test(t.current()) && (a = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) && s.hasOwnProperty(a) ? e.inTag = a + " " : e.inTag && l && />$/.test(t.current()) ? (a = /^([\S]+) (.*)/.exec(e.inTag),
            e.inTag = null,
            l = ">" == t.current() && function(t, e) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    if (!n[0] || n[1].test(d(e, n[0])))
                        return n[2]
                }
            }(s[a[1]], a[2]),
            l = m.getMode(i, l),
            o = g(a[1], !0),
            r = g(a[1], !1),
            e.token = function(t, e) {
                return t.match(o, !1) ? (e.token = u,
                e.localState = e.localMode = null) : (a = t,
                n = r,
                l = e.localMode.token(t, e.localState),
                t = a.current(),
                -1 < (e = t.search(n)) ? a.backUp(t.length - e) : t.match(/<\/?$/) && (a.backUp(t.length),
                a.match(n, !1) || a.match(t)),
                l);
                var a, n, l
            }
            ,
            e.localMode = l,
            e.localState = m.startState(l, c.indent(e.htmlState, "", ""))) : e.inTag && (e.inTag += t.current(),
            t.eol() && (e.inTag += " ")),
            n
        }
        return {
            startState: function() {
                return {
                    token: u,
                    inTag: null,
                    localMode: null,
                    localState: null,
                    htmlState: m.startState(c)
                }
            },
            copyState: function(t) {
                var e;
                return t.localState && (e = m.copyState(t.localMode, t.localState)),
                {
                    token: t.token,
                    inTag: t.inTag,
                    localMode: t.localMode,
                    localState: e,
                    htmlState: m.copyState(c, t.htmlState)
                }
            },
            token: function(t, e) {
                return e.token(t, e)
            },
            indent: function(t, e, a) {
                return !t.localMode || /^\s*<\//.test(e) ? c.indent(t.htmlState, e, a) : t.localMode.indent ? t.localMode.indent(t.localState, e, a) : m.Pass
            },
            innerMode: function(t) {
                return {
                    state: t.localState || t.htmlState,
                    mode: t.localMode || c
                }
            }
        }
    }, "xml", "javascript", "css"),
    m.defineMIME("text/html", "htmlmixed")
});

//source https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/css/css.min.js
!function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(T) {
    "use strict";
    function e(e) {
        for (var t = {}, r = 0; r < e.length; ++r)
            t[e[r].toLowerCase()] = !0;
        return t
    }
    T.defineMode("css", function(e, t) {
        var r = t.inline;
        t.propertyKeywords || (t = T.resolveMode("text/css"));
        var a, o, i = e.indentUnit, n = t.tokenHooks, l = t.documentTypes || {}, s = t.mediaTypes || {}, c = t.mediaFeatures || {}, d = t.mediaValueKeywords || {}, p = t.propertyKeywords || {}, u = t.nonStandardPropertyKeywords || {}, m = t.fontProperties || {}, b = t.counterDescriptors || {}, g = t.colorKeywords || {}, h = t.valueKeywords || {}, f = t.allowNested, k = t.lineComment, y = !0 === t.supportsAtComponent, w = !1 !== e.highlightNonStandardPropertyKeywords;
        function v(e, t) {
            return a = t,
            e
        }
        function x(i) {
            return function(e, t) {
                for (var r, o = !1; null != (r = e.next()); ) {
                    if (r == i && !o) {
                        ")" == i && e.backUp(1);
                        break
                    }
                    o = !o && "\\" == r
                }
                return r != i && (o || ")" == i) || (t.tokenize = null),
                a = "string"
            }
        }
        function z(e, t) {
            return e.next(),
            e.match(/^\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = x(")"),
            a = "(",
            null
        }
        function j(e, t, r) {
            this.type = e,
            this.indent = t,
            this.prev = r
        }
        function P(e, t, r, o) {
            return e.context = new j(r,t.indentation() + (!1 === o ? 0 : i),e.context),
            r
        }
        function K(e) {
            return e.context.prev && (e.context = e.context.prev),
            e.context.type
        }
        function q(e, t, r) {
            return _[r.context.type](e, t, r)
        }
        function C(e, t, r, o) {
            for (var i = o || 1; 0 < i; i--)
                r.context = r.context.prev;
            return q(e, t, r)
        }
        function B(e) {
            e = e.current().toLowerCase();
            o = h.hasOwnProperty(e) ? "atom" : g.hasOwnProperty(e) ? "keyword" : "variable"
        }
        var _ = {
            top: function(e, t, r) {
                if ("{" == e)
                    return P(r, t, "block");
                if ("}" == e && r.context.prev)
                    return K(r);
                if (y && /@component/i.test(e))
                    return P(r, t, "atComponentBlock");
                if (/^@(-moz-)?document$/i.test(e))
                    return P(r, t, "documentTypes");
                if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
                    return P(r, t, "atBlock");
                if (/^@(font-face|counter-style)/i.test(e))
                    return r.stateArg = e,
                    "restricted_atBlock_before";
                if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
                    return "keyframes";
                if (e && "@" == e.charAt(0))
                    return P(r, t, "at");
                if ("hash" == e)
                    o = "builtin";
                else if ("word" == e)
                    o = "tag";
                else {
                    if ("variable-definition" == e)
                        return "maybeprop";
                    if ("interpolation" == e)
                        return P(r, t, "interpolation");
                    if (":" == e)
                        return "pseudo";
                    if (f && "(" == e)
                        return P(r, t, "parens")
                }
                return r.context.type
            },
            block: function(e, t, r) {
                if ("word" != e)
                    return "meta" == e ? "block" : f || "hash" != e && "qualifier" != e ? _.top(e, t, r) : (o = "error",
                    "block");
                r = t.current().toLowerCase();
                return p.hasOwnProperty(r) ? (o = "property",
                "maybeprop") : u.hasOwnProperty(r) ? (o = w ? "string-2" : "property",
                "maybeprop") : f ? (o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag",
                "block") : (o += " error",
                "maybeprop")
            },
            maybeprop: function(e, t, r) {
                return ":" == e ? P(r, t, "prop") : q(e, t, r)
            },
            prop: function(e, t, r) {
                if (";" == e)
                    return K(r);
                if ("{" == e && f)
                    return P(r, t, "propBlock");
                if ("}" == e || "{" == e)
                    return C(e, t, r);
                if ("(" == e)
                    return P(r, t, "parens");
                if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                    if ("word" == e)
                        B(t);
                    else if ("interpolation" == e)
                        return P(r, t, "interpolation")
                } else
                    o += " error";
                return "prop"
            },
            propBlock: function(e, t, r) {
                return "}" == e ? K(r) : "word" == e ? (o = "property",
                "maybeprop") : r.context.type
            },
            parens: function(e, t, r) {
                return "{" == e || "}" == e ? C(e, t, r) : ")" == e ? K(r) : "(" == e ? P(r, t, "parens") : "interpolation" == e ? P(r, t, "interpolation") : ("word" == e && B(t),
                "parens")
            },
            pseudo: function(e, t, r) {
                return "meta" == e ? "pseudo" : "word" == e ? (o = "variable-3",
                r.context.type) : q(e, t, r)
            },
            documentTypes: function(e, t, r) {
                return "word" == e && l.hasOwnProperty(t.current()) ? (o = "tag",
                r.context.type) : _.atBlock(e, t, r)
            },
            atBlock: function(e, t, r) {
                return "(" == e ? P(r, t, "atBlock_parens") : "}" == e || ";" == e ? C(e, t, r) : "{" == e ? K(r) && P(r, t, f ? "block" : "top") : "interpolation" == e ? P(r, t, "interpolation") : ("word" == e && (t = t.current().toLowerCase(),
                o = "only" == t || "not" == t || "and" == t || "or" == t ? "keyword" : s.hasOwnProperty(t) ? "attribute" : c.hasOwnProperty(t) ? "property" : d.hasOwnProperty(t) ? "keyword" : p.hasOwnProperty(t) ? "property" : u.hasOwnProperty(t) ? w ? "string-2" : "property" : h.hasOwnProperty(t) ? "atom" : g.hasOwnProperty(t) ? "keyword" : "error"),
                r.context.type)
            },
            atComponentBlock: function(e, t, r) {
                return "}" == e ? C(e, t, r) : "{" == e ? K(r) && P(r, t, f ? "block" : "top", !1) : ("word" == e && (o = "error"),
                r.context.type)
            },
            atBlock_parens: function(e, t, r) {
                return ")" == e ? K(r) : "{" == e || "}" == e ? C(e, t, r, 2) : _.atBlock(e, t, r)
            },
            restricted_atBlock_before: function(e, t, r) {
                return "{" == e ? P(r, t, "restricted_atBlock") : "word" == e && "@counter-style" == r.stateArg ? (o = "variable",
                "restricted_atBlock_before") : q(e, t, r)
            },
            restricted_atBlock: function(e, t, r) {
                return "}" == e ? (r.stateArg = null,
                K(r)) : "word" == e ? (o = "@font-face" == r.stateArg && !m.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !b.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property",
                "maybeprop") : "restricted_atBlock"
            },
            keyframes: function(e, t, r) {
                return "word" == e ? (o = "variable",
                "keyframes") : "{" == e ? P(r, t, "top") : q(e, t, r)
            },
            at: function(e, t, r) {
                return ";" == e ? K(r) : "{" == e || "}" == e ? C(e, t, r) : ("word" == e ? o = "tag" : "hash" == e && (o = "builtin"),
                "at")
            },
            interpolation: function(e, t, r) {
                return "}" == e ? K(r) : "{" == e || ";" == e ? C(e, t, r) : ("word" == e ? o = "variable" : "variable" != e && "(" != e && ")" != e && (o = "error"),
                "interpolation")
            }
        };
        return {
            startState: function(e) {
                return {
                    tokenize: null,
                    state: r ? "block" : "top",
                    stateArg: null,
                    context: new j(r ? "block" : "top",e || 0,null)
                }
            },
            token: function(e, t) {
                if (!t.tokenize && e.eatSpace())
                    return null;
                var r = (t.tokenize || function(e, t) {
                    var r = e.next();
                    if (n[r]) {
                        var o = n[r](e, t);
                        if (!1 !== o)
                            return o
                    }
                    return "@" == r ? (e.eatWhile(/[\w\\\-]/),
                    v("def", e.current())) : "=" == r || ("~" == r || "|" == r) && e.eat("=") ? (a = "compare",
                    null) : '"' == r || "'" == r ? (t.tokenize = x(r),
                    t.tokenize(e, t)) : "#" == r ? (e.eatWhile(/[\w\\\-]/),
                    a = "hash",
                    "atom") : "!" == r ? (e.match(/^\s*\w*/),
                    a = "important",
                    "keyword") : /\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/),
                    a = "unit",
                    "number") : "-" === r ? /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/),
                    a = "unit",
                    "number") : e.match(/^-[\w\\\-]*/) ? (e.eatWhile(/[\w\\\-]/),
                    a = e.match(/^\s*:/, !1) ? "variable-definition" : "variable",
                    "variable-2") : e.match(/^\w+-/) ? a = "meta" : void 0 : /[,+>*\/]/.test(r) ? (a = "select-op",
                    null) : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? a = "qualifier" : /[:;{}\[\]\(\)]/.test(r) ? v(null, r) : e.match(/^[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/i.test(e.current()) && (t.tokenize = z),
                    a = "variable",
                    "variable callee") : /[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/),
                    a = "word",
                    "property") : a = null
                }
                )(e, t);
                return r && "object" == typeof r && (a = r[1],
                r = r[0]),
                o = r,
                "comment" != a && (t.state = _[t.state](a, e, t)),
                o
            },
            indent: function(e, t) {
                var r = e.context
                  , e = t && t.charAt(0)
                  , t = r.indent;
                return (r = "prop" == r.type && ("}" == e || ")" == e) ? r.prev : r).prev && ("}" != e || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type ? (")" != e || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != e || "at" != r.type && "atBlock" != r.type) || (t = Math.max(0, r.indent - i)) : t = (r = r.prev).indent),
                t
            },
            electricChars: "}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            blockCommentContinue: " * ",
            lineComment: k,
            fold: "brace"
        }
    });
    var t = ["domain", "regexp", "url", "url-prefix"]
      , r = e(t)
      , o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"]
      , i = e(o)
      , a = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme"]
      , n = e(a)
      , l = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light"]
      , s = e(l)
      , c = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "all", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "block-size", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-content", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-height-step", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotate", "rotation", "rotation-point", "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-orientation", "text-outline", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"]
      , d = e(c)
      , p = ["accent-color", "aspect-ratio", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "content-visibility", "margin-block", "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end", "margin-inline-start", "overflow-anchor", "overscroll-behavior", "padding-block", "padding-block-end", "padding-block-start", "padding-inline", "padding-inline-end", "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"]
      , u = e(p)
      , m = e(["font-display", "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"])
      , b = e(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"])
      , g = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]
      , h = e(g)
      , f = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "blur", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "brightness", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "contrast", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "cubic-bezier", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "drop-shadow", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "grayscale", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "hue-rotate", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturate", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "sepia", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"]
      , k = e(f)
      , f = t.concat(o).concat(a).concat(l).concat(c).concat(p).concat(g).concat(f);
    function y(e, t) {
        for (var r, o = !1; null != (r = e.next()); ) {
            if (o && "/" == r) {
                t.tokenize = null;
                break
            }
            o = "*" == r
        }
        return ["comment", "comment"]
    }
    T.registerHelper("hintWords", "css", f),
    T.defineMIME("text/css", {
        documentTypes: r,
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: d,
        nonStandardPropertyKeywords: u,
        fontProperties: m,
        counterDescriptors: b,
        colorKeywords: h,
        valueKeywords: k,
        tokenHooks: {
            "/": function(e, t) {
                return !!e.eat("*") && (t.tokenize = y)(e, t)
            }
        },
        name: "css"
    }),
    T.defineMIME("text/x-scss", {
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: d,
        nonStandardPropertyKeywords: u,
        colorKeywords: h,
        valueKeywords: k,
        fontProperties: m,
        allowNested: !0,
        lineComment: "//",
        tokenHooks: {
            "/": function(e, t) {
                return e.eat("/") ? (e.skipToEnd(),
                ["comment", "comment"]) : e.eat("*") ? (t.tokenize = y)(e, t) : ["operator", "operator"]
            },
            ":": function(e) {
                return !!e.match(/^\s*\{/, !1) && [null, null]
            },
            $: function(e) {
                return e.match(/^[\w-]+/),
                e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
            },
            "#": function(e) {
                return !!e.eat("{") && [null, "interpolation"]
            }
        },
        name: "css",
        helperType: "scss"
    }),
    T.defineMIME("text/x-less", {
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: d,
        nonStandardPropertyKeywords: u,
        colorKeywords: h,
        valueKeywords: k,
        fontProperties: m,
        allowNested: !0,
        lineComment: "//",
        tokenHooks: {
            "/": function(e, t) {
                return e.eat("/") ? (e.skipToEnd(),
                ["comment", "comment"]) : e.eat("*") ? (t.tokenize = y)(e, t) : ["operator", "operator"]
            },
            "@": function(e) {
                return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) && (e.eatWhile(/[\w\\\-]/),
                e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
            },
            "&": function() {
                return ["atom", "atom"]
            }
        },
        name: "css",
        helperType: "less"
    }),
    T.defineMIME("text/x-gss", {
        documentTypes: r,
        mediaTypes: i,
        mediaFeatures: n,
        propertyKeywords: d,
        nonStandardPropertyKeywords: u,
        fontProperties: m,
        counterDescriptors: b,
        colorKeywords: h,
        valueKeywords: k,
        supportsAtComponent: !0,
        tokenHooks: {
            "/": function(e, t) {
                return !!e.eat("*") && (t.tokenize = y)(e, t)
            }
        },
        name: "css",
        helperType: "gss"
    })
});

//source https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/javascript/javascript.min.js

!function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(rt) {
    "use strict";
    rt.defineMode("javascript", function(e, l) {
        var t, r, n, a, f = e.indentUnit, d = l.statementIndent, i = l.jsonld, o = l.json || i, c = !1 !== l.trackScope, u = l.typescript, p = l.wordCharacters || /[\w$\xa1-\uffff]/, s = (t = m("keyword a"),
        r = m("keyword b"),
        n = m("keyword c"),
        a = m("keyword d"),
        e = m("operator"),
        {
            if: m("if"),
            while: t,
            with: t,
            else: r,
            do: r,
            try: r,
            finally: r,
            return: a,
            break: a,
            continue: a,
            new: m("new"),
            delete: n,
            void: n,
            throw: n,
            debugger: m("debugger"),
            var: m("var"),
            const: m("var"),
            let: m("var"),
            function: m("function"),
            catch: m("catch"),
            for: m("for"),
            switch: m("switch"),
            case: m("case"),
            default: m("default"),
            in: e,
            typeof: e,
            instanceof: e,
            true: e = {
                type: "atom",
                style: "atom"
            },
            false: e,
            null: e,
            undefined: e,
            NaN: e,
            Infinity: e,
            this: m("this"),
            class: m("class"),
            super: m("atom"),
            yield: n,
            export: m("export"),
            import: m("import"),
            extends: n,
            await: n
        });
        function m(e) {
            return {
                type: e,
                style: "keyword"
            }
        }
        var k, v, y = /[+\-*&%=<>!?|~^@]/, w = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function b(e, t, r) {
            return k = e,
            v = r,
            t
        }
        function x(e, t) {
            var a, r = e.next();
            if ('"' == r || "'" == r)
                return t.tokenize = (a = r,
                function(e, t) {
                    var r, n = !1;
                    if (i && "@" == e.peek() && e.match(w))
                        return t.tokenize = x,
                        b("jsonld-keyword", "meta");
                    for (; null != (r = e.next()) && (r != a || n); )
                        n = !n && "\\" == r;
                    return n || (t.tokenize = x),
                    b("string", "string")
                }
                ),
                t.tokenize(e, t);
            if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
                return b("number", "number");
            if ("." == r && e.match(".."))
                return b("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(r))
                return b(r);
            if ("=" == r && e.eat(">"))
                return b("=>", "operator");
            if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
                return b("number", "number");
            if (/\d/.test(r))
                return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                b("number", "number");
            if ("/" == r)
                return e.eat("*") ? (t.tokenize = h)(e, t) : e.eat("/") ? (e.skipToEnd(),
                b("comment", "comment")) : tt(e, t, 1) ? (function(e) {
                    for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                        if (!r) {
                            if ("/" == t && !n)
                                return;
                            "[" == t ? n = !0 : n && "]" == t && (n = !1)
                        }
                        r = !r && "\\" == t
                    }
                }(e),
                e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                b("regexp", "string-2")) : (e.eat("="),
                b("operator", "operator", e.current()));
            if ("`" == r)
                return (t.tokenize = g)(e, t);
            if ("#" == r && "!" == e.peek())
                return e.skipToEnd(),
                b("meta", "meta");
            if ("#" == r && e.eatWhile(p))
                return b("variable", "property");
            if ("<" == r && e.match("!--") || "-" == r && e.match("->") && !/\S/.test(e.string.slice(0, e.start)))
                return e.skipToEnd(),
                b("comment", "comment");
            if (y.test(r))
                return ">" == r && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != r && "=" != r || e.eat("=") : /[<>*+\-|&?]/.test(r) && (e.eat(r),
                ">" == r && e.eat(r))),
                "?" == r && e.eat(".") ? b(".") : b("operator", "operator", e.current());
            if (p.test(r)) {
                e.eatWhile(p);
                r = e.current();
                if ("." != t.lastType) {
                    if (s.propertyIsEnumerable(r)) {
                        t = s[r];
                        return b(t.type, t.style, r)
                    }
                    if ("async" == r && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
                        return b("async", "keyword", r)
                }
                return b("variable", "variable", r)
            }
        }
        function h(e, t) {
            for (var r, n = !1; r = e.next(); ) {
                if ("/" == r && n) {
                    t.tokenize = x;
                    break
                }
                n = "*" == r
            }
            return b("comment", "comment")
        }
        function g(e, t) {
            for (var r, n = !1; null != (r = e.next()); ) {
                if (!n && ("`" == r || "$" == r && e.eat("{"))) {
                    t.tokenize = x;
                    break
                }
                n = !n && "\\" == r
            }
            return b("quasi", "string-2", e.current())
        }
        function j(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var r, n = e.string.indexOf("=>", e.start);
            if (!(n < 0)) {
                !u || (r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n))) && (n = r.index);
                for (var a = 0, i = !1, o = n - 1; 0 <= o; --o) {
                    var c = e.string.charAt(o)
                      , s = "([{}])".indexOf(c);
                    if (0 <= s && s < 3) {
                        if (!a) {
                            ++o;
                            break
                        }
                        if (0 == --a) {
                            "(" == c && (i = !0);
                            break
                        }
                    } else if (3 <= s && s < 6)
                        ++a;
                    else if (p.test(c))
                        i = !0;
                    else if (/["'\/`]/.test(c))
                        for (; ; --o) {
                            if (0 == o)
                                return;
                            if (e.string.charAt(o - 1) == c && "\\" != e.string.charAt(o - 2)) {
                                o--;
                                break
                            }
                        }
                    else if (i && !a) {
                        ++o;
                        break
                    }
                }
                i && !a && (t.fatArrowAt = o)
            }
        }
        var M = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            import: !0,
            "jsonld-keyword": !0
        };
        function A(e, t, r, n, a, i) {
            this.indented = e,
            this.column = t,
            this.type = r,
            this.prev = a,
            this.info = i,
            null != n && (this.align = n)
        }
        function V(e, t, r, n, a) {
            var i = e.cc;
            for (E.state = e,
            E.stream = a,
            E.marked = null,
            E.cc = i,
            E.style = t,
            e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ; )
                if ((i.length ? i.pop() : o ? D : F)(r, n)) {
                    for (; i.length && i[i.length - 1].lex; )
                        i.pop()();
                    return E.marked ? E.marked : "variable" == r && function(e, t) {
                        if (c) {
                            for (var r = e.localVars; r; r = r.next)
                                if (r.name == t)
                                    return 1;
                            for (var n = e.context; n; n = n.prev)
                                for (r = n.vars; r; r = r.next)
                                    if (r.name == t)
                                        return 1
                        }
                    }(e, n) ? "variable-2" : t
                }
        }
        var E = {
            state: null,
            column: null,
            marked: null,
            cc: null
        };
        function z() {
            for (var e = arguments.length - 1; 0 <= e; e--)
                E.cc.push(arguments[e])
        }
        function I() {
            return z.apply(null, arguments),
            !0
        }
        function T(e, t) {
            for (var r = t; r; r = r.next)
                if (r.name == e)
                    return 1
        }
        function $(e) {
            var t = E.state;
            if (E.marked = "def",
            c) {
                if (t.context)
                    if ("var" == t.lexical.info && t.context && t.context.block) {
                        var r = function e(t, r) {
                            {
                                if (r) {
                                    if (r.block) {
                                        var n = e(t, r.prev);
                                        return n ? n == r.prev ? r : new C(n,r.vars,!0) : null
                                    }
                                    return T(t, r.vars) ? r : new C(r.prev,new S(t,r.vars),!1)
                                }
                                return null
                            }
                        }(e, t.context);
                        if (null != r)
                            return void (t.context = r)
                    } else if (!T(e, t.localVars))
                        return void (t.localVars = new S(e,t.localVars));
                l.globalVars && !T(e, t.globalVars) && (t.globalVars = new S(e,t.globalVars))
            }
        }
        function q(e) {
            return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
        }
        function C(e, t, r) {
            this.prev = e,
            this.vars = t,
            this.block = r
        }
        function S(e, t) {
            this.name = e,
            this.next = t
        }
        var _ = new S("this",new S("arguments",null));
        function O() {
            E.state.context = new C(E.state.context,E.state.localVars,!1),
            E.state.localVars = _
        }
        function P() {
            E.state.context = new C(E.state.context,E.state.localVars,!0),
            E.state.localVars = null
        }
        function N() {
            E.state.localVars = E.state.context.vars,
            E.state.context = E.state.context.prev
        }
        function U(n, a) {
            function e() {
                var e = E.state
                  , t = e.indented;
                if ("stat" == e.lexical.type)
                    t = e.lexical.indented;
                else
                    for (var r = e.lexical; r && ")" == r.type && r.align; r = r.prev)
                        t = r.indented;
                e.lexical = new A(t,E.stream.column(),n,null,e.lexical,a)
            }
            return e.lex = !0,
            e
        }
        function W() {
            var e = E.state;
            e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented),
            e.lexical = e.lexical.prev)
        }
        function B(r) {
            return function e(t) {
                return t == r ? I() : ";" == r || "}" == t || ")" == t || "]" == t ? z() : I(e)
            }
        }
        function F(e, t) {
            return "var" == e ? I(U("vardef", t), Ve, B(";"), W) : "keyword a" == e ? I(U("form"), J, F, W) : "keyword b" == e ? I(U("form"), F, W) : "keyword d" == e ? E.stream.match(/^\s*$/, !1) ? I() : I(U("stat"), L, B(";"), W) : "debugger" == e ? I(B(";")) : "{" == e ? I(U("}"), P, le, W, N) : ";" == e ? I() : "if" == e ? ("else" == E.state.lexical.info && E.state.cc[E.state.cc.length - 1] == W && E.state.cc.pop()(),
            I(U("form"), J, F, W, qe)) : "function" == e ? I(Oe) : "for" == e ? I(U("form"), P, Ce, F, N, W) : "class" == e || u && "interface" == t ? (E.marked = "keyword",
            I(U("form", "class" == e ? e : t), Be, W)) : "variable" == e ? u && "declare" == t ? (E.marked = "keyword",
            I(F)) : u && ("module" == t || "enum" == t || "type" == t) && E.stream.match(/^\s*\w/, !1) ? (E.marked = "keyword",
            "enum" == t ? I(Ze) : "type" == t ? I(Ne, B("operator"), ke, B(";")) : I(U("form"), Ee, B("{"), U("}"), le, W, W)) : u && "namespace" == t ? (E.marked = "keyword",
            I(U("form"), D, F, W)) : u && "abstract" == t ? (E.marked = "keyword",
            I(F)) : I(U("stat"), ne) : "switch" == e ? I(U("form"), J, B("{"), U("}", "switch"), P, le, W, W, N) : "case" == e ? I(D, B(":")) : "default" == e ? I(B(":")) : "catch" == e ? I(U("form"), O, H, F, W, N) : "export" == e ? I(U("stat"), Ge, W) : "import" == e ? I(U("stat"), Ke, W) : "async" == e ? I(F) : "@" == t ? I(D, F) : z(U("stat"), D, B(";"), W)
        }
        function H(e) {
            if ("(" == e)
                return I(Ue, B(")"))
        }
        function D(e, t) {
            return K(e, t, !1)
        }
        function G(e, t) {
            return K(e, t, !0)
        }
        function J(e) {
            return "(" != e ? z() : I(U(")"), L, B(")"), W)
        }
        function K(e, t, r) {
            if (E.state.fatArrowAt == E.stream.start) {
                var n = r ? ee : Z;
                if ("(" == e)
                    return I(O, U(")"), se(Ue, ")"), W, B("=>"), n, N);
                if ("variable" == e)
                    return z(O, Ee, B("=>"), n, N)
            }
            var a, n = r ? R : Q;
            return M.hasOwnProperty(e) ? I(n) : "function" == e ? I(Oe, n) : "class" == e || u && "interface" == t ? (E.marked = "keyword",
            I(U("form"), We, W)) : "keyword c" == e || "async" == e ? I(r ? G : D) : "(" == e ? I(U(")"), L, B(")"), W, n) : "operator" == e || "spread" == e ? I(r ? G : D) : "[" == e ? I(U("]"), Ye, W, n) : "{" == e ? ue(ie, "}", null, n) : "quasi" == e ? z(X, n) : "new" == e ? I((a = r,
            function(e) {
                return "." == e ? I(a ? re : te) : "variable" == e && u ? I(je, a ? R : Q) : z(a ? G : D)
            }
            )) : I()
        }
        function L(e) {
            return e.match(/[;\}\)\],]/) ? z() : z(D)
        }
        function Q(e, t) {
            return "," == e ? I(L) : R(e, t, !1)
        }
        function R(e, t, r) {
            var n = 0 == r ? Q : R
              , a = 0 == r ? D : G;
            return "=>" == e ? I(O, r ? ee : Z, N) : "operator" == e ? /\+\+|--/.test(t) || u && "!" == t ? I(n) : u && "<" == t && E.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? I(U(">"), se(ke, ">"), W, n) : "?" == t ? I(D, B(":"), a) : I(a) : "quasi" == e ? z(X, n) : ";" != e ? "(" == e ? ue(G, ")", "call", n) : "." == e ? I(ae, n) : "[" == e ? I(U("]"), L, B("]"), W, n) : u && "as" == t ? (E.marked = "keyword",
            I(ke, n)) : "regexp" == e ? (E.state.lastType = E.marked = "operator",
            E.stream.backUp(E.stream.pos - E.stream.start - 1),
            I(a)) : void 0 : void 0
        }
        function X(e, t) {
            return "quasi" != e ? z() : "${" != t.slice(t.length - 2) ? I(X) : I(L, Y)
        }
        function Y(e) {
            if ("}" == e)
                return E.marked = "string-2",
                E.state.tokenize = g,
                I(X)
        }
        function Z(e) {
            return j(E.stream, E.state),
            z("{" == e ? F : D)
        }
        function ee(e) {
            return j(E.stream, E.state),
            z("{" == e ? F : G)
        }
        function te(e, t) {
            if ("target" == t)
                return E.marked = "keyword",
                I(Q)
        }
        function re(e, t) {
            if ("target" == t)
                return E.marked = "keyword",
                I(R)
        }
        function ne(e) {
            return ":" == e ? I(W, F) : z(Q, B(";"), W)
        }
        function ae(e) {
            if ("variable" == e)
                return E.marked = "property",
                I()
        }
        function ie(e, t) {
            return "async" == e ? (E.marked = "property",
            I(ie)) : "variable" != e && "keyword" != E.style ? "number" == e || "string" == e ? (E.marked = i ? "property" : E.style + " property",
            I(ce)) : "jsonld-keyword" == e ? I(ce) : u && q(t) ? (E.marked = "keyword",
            I(ie)) : "[" == e ? I(D, fe, B("]"), ce) : "spread" == e ? I(G, ce) : "*" == t ? (E.marked = "keyword",
            I(ie)) : ":" == e ? z(ce) : void 0 : (E.marked = "property",
            "get" == t || "set" == t ? I(oe) : (u && E.state.fatArrowAt == E.stream.start && (r = E.stream.match(/^\s*:\s*/, !1)) && (E.state.fatArrowAt = E.stream.pos + r[0].length),
            I(ce)));
            var r
        }
        function oe(e) {
            return "variable" != e ? z(ce) : (E.marked = "property",
            I(Oe))
        }
        function ce(e) {
            return ":" == e ? I(G) : "(" == e ? z(Oe) : void 0
        }
        function se(n, a, i) {
            function o(e, t) {
                if (i ? -1 < i.indexOf(e) : "," == e) {
                    var r = E.state.lexical;
                    return "call" == r.info && (r.pos = (r.pos || 0) + 1),
                    I(function(e, t) {
                        return e == a || t == a ? z() : z(n)
                    }, o)
                }
                return e == a || t == a ? I() : i && -1 < i.indexOf(";") ? z(n) : I(B(a))
            }
            return function(e, t) {
                return e == a || t == a ? I() : z(n, o)
            }
        }
        function ue(e, t, r) {
            for (var n = 3; n < arguments.length; n++)
                E.cc.push(arguments[n]);
            return I(U(t, r), se(e, t), W)
        }
        function le(e) {
            return "}" == e ? I() : z(F, le)
        }
        function fe(e, t) {
            if (u)
                return ":" == e ? I(ke) : "?" == t ? I(fe) : void 0
        }
        function de(e, t) {
            if (u && (":" == e || "in" == t))
                return I(ke)
        }
        function pe(e) {
            if (u && ":" == e)
                return E.stream.match(/^\s*\w+\s+is\b/, !1) ? I(D, me, ke) : I(ke)
        }
        function me(e, t) {
            if ("is" == t)
                return E.marked = "keyword",
                I()
        }
        function ke(e, t) {
            return "keyof" == t || "typeof" == t || "infer" == t || "readonly" == t ? (E.marked = "keyword",
            I("typeof" == t ? G : ke)) : "variable" == e || "void" == t ? (E.marked = "type",
            I(ge)) : "|" == t || "&" == t ? I(ke) : "string" == e || "number" == e || "atom" == e ? I(ge) : "[" == e ? I(U("]"), se(ke, "]", ","), W, ge) : "{" == e ? I(U("}"), ye, W, ge) : "(" == e ? I(se(he, ")"), ve, ge) : "<" == e ? I(se(ke, ">"), ke) : "quasi" == e ? z(be, ge) : void 0
        }
        function ve(e) {
            if ("=>" == e)
                return I(ke)
        }
        function ye(e) {
            return e.match(/[\}\)\]]/) ? I() : "," == e || ";" == e ? I(ye) : z(we, ye)
        }
        function we(e, t) {
            return "variable" == e || "keyword" == E.style ? (E.marked = "property",
            I(we)) : "?" == t || "number" == e || "string" == e ? I(we) : ":" == e ? I(ke) : "[" == e ? I(B("variable"), de, B("]"), we) : "(" == e ? z(Pe, we) : e.match(/[;\}\)\],]/) ? void 0 : I()
        }
        function be(e, t) {
            return "quasi" != e ? z() : "${" != t.slice(t.length - 2) ? I(be) : I(ke, xe)
        }
        function xe(e) {
            if ("}" == e)
                return E.marked = "string-2",
                E.state.tokenize = g,
                I(be)
        }
        function he(e, t) {
            return "variable" == e && E.stream.match(/^\s*[?:]/, !1) || "?" == t ? I(he) : ":" == e ? I(ke) : "spread" == e ? I(he) : z(ke)
        }
        function ge(e, t) {
            return "<" == t ? I(U(">"), se(ke, ">"), W, ge) : "|" == t || "." == e || "&" == t ? I(ke) : "[" == e ? I(ke, B("]"), ge) : "extends" == t || "implements" == t ? (E.marked = "keyword",
            I(ke)) : "?" == t ? I(ke, B(":"), ke) : void 0
        }
        function je(e, t) {
            if ("<" == t)
                return I(U(">"), se(ke, ">"), W, ge)
        }
        function Me() {
            return z(ke, Ae)
        }
        function Ae(e, t) {
            if ("=" == t)
                return I(ke)
        }
        function Ve(e, t) {
            return "enum" == t ? (E.marked = "keyword",
            I(Ze)) : z(Ee, fe, Te, $e)
        }
        function Ee(e, t) {
            return u && q(t) ? (E.marked = "keyword",
            I(Ee)) : "variable" == e ? ($(t),
            I()) : "spread" == e ? I(Ee) : "[" == e ? ue(Ie, "]") : "{" == e ? ue(ze, "}") : void 0
        }
        function ze(e, t) {
            return "variable" != e || E.stream.match(/^\s*:/, !1) ? ("variable" == e && (E.marked = "property"),
            "spread" == e ? I(Ee) : "}" == e ? z() : "[" == e ? I(D, B("]"), B(":"), ze) : I(B(":"), Ee, Te)) : ($(t),
            I(Te))
        }
        function Ie() {
            return z(Ee, Te)
        }
        function Te(e, t) {
            if ("=" == t)
                return I(G)
        }
        function $e(e) {
            if ("," == e)
                return I(Ve)
        }
        function qe(e, t) {
            if ("keyword b" == e && "else" == t)
                return I(U("form", "else"), F, W)
        }
        function Ce(e, t) {
            return "await" == t ? I(Ce) : "(" == e ? I(U(")"), Se, W) : void 0
        }
        function Se(e) {
            return "var" == e ? I(Ve, _e) : ("variable" == e ? I : z)(_e)
        }
        function _e(e, t) {
            return ")" == e ? I() : ";" == e ? I(_e) : "in" == t || "of" == t ? (E.marked = "keyword",
            I(D, _e)) : z(D, _e)
        }
        function Oe(e, t) {
            return "*" == t ? (E.marked = "keyword",
            I(Oe)) : "variable" == e ? ($(t),
            I(Oe)) : "(" == e ? I(O, U(")"), se(Ue, ")"), W, pe, F, N) : u && "<" == t ? I(U(">"), se(Me, ">"), W, Oe) : void 0
        }
        function Pe(e, t) {
            return "*" == t ? (E.marked = "keyword",
            I(Pe)) : "variable" == e ? ($(t),
            I(Pe)) : "(" == e ? I(O, U(")"), se(Ue, ")"), W, pe, N) : u && "<" == t ? I(U(">"), se(Me, ">"), W, Pe) : void 0
        }
        function Ne(e, t) {
            return "keyword" == e || "variable" == e ? (E.marked = "type",
            I(Ne)) : "<" == t ? I(U(">"), se(Me, ">"), W) : void 0
        }
        function Ue(e, t) {
            return "@" == t && I(D, Ue),
            "spread" == e ? I(Ue) : u && q(t) ? (E.marked = "keyword",
            I(Ue)) : u && "this" == e ? I(fe, Te) : z(Ee, fe, Te)
        }
        function We(e, t) {
            return ("variable" == e ? Be : Fe)(e, t)
        }
        function Be(e, t) {
            if ("variable" == e)
                return $(t),
                I(Fe)
        }
        function Fe(e, t) {
            return "<" == t ? I(U(">"), se(Me, ">"), W, Fe) : "extends" == t || "implements" == t || u && "," == e ? ("implements" == t && (E.marked = "keyword"),
            I(u ? ke : D, Fe)) : "{" == e ? I(U("}"), He, W) : void 0
        }
        function He(e, t) {
            return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || u && q(t)) && E.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (E.marked = "keyword",
            I(He)) : "variable" == e || "keyword" == E.style ? (E.marked = "property",
            I(De, He)) : "number" == e || "string" == e ? I(De, He) : "[" == e ? I(D, fe, B("]"), De, He) : "*" == t ? (E.marked = "keyword",
            I(He)) : u && "(" == e ? z(Pe, He) : ";" == e || "," == e ? I(He) : "}" == e ? I() : "@" == t ? I(D, He) : void 0
        }
        function De(e, t) {
            if ("!" == t)
                return I(De);
            if ("?" == t)
                return I(De);
            if (":" == e)
                return I(ke, Te);
            if ("=" == t)
                return I(G);
            t = E.state.lexical.prev;
            return z(t && "interface" == t.info ? Pe : Oe)
        }
        function Ge(e, t) {
            return "*" == t ? (E.marked = "keyword",
            I(Xe, B(";"))) : "default" == t ? (E.marked = "keyword",
            I(D, B(";"))) : "{" == e ? I(se(Je, "}"), Xe, B(";")) : z(F)
        }
        function Je(e, t) {
            return "as" == t ? (E.marked = "keyword",
            I(B("variable"))) : "variable" == e ? z(G, Je) : void 0
        }
        function Ke(e) {
            return "string" == e ? I() : "(" == e ? z(D) : "." == e ? z(Q) : z(Le, Qe, Xe)
        }
        function Le(e, t) {
            return "{" == e ? ue(Le, "}") : ("variable" == e && $(t),
            "*" == t && (E.marked = "keyword"),
            I(Re))
        }
        function Qe(e) {
            if ("," == e)
                return I(Le, Qe)
        }
        function Re(e, t) {
            if ("as" == t)
                return E.marked = "keyword",
                I(Le)
        }
        function Xe(e, t) {
            if ("from" == t)
                return E.marked = "keyword",
                I(D)
        }
        function Ye(e) {
            return "]" == e ? I() : z(se(G, "]"))
        }
        function Ze() {
            return z(U("form"), Ee, B("{"), U("}"), se(et, "}"), W, W)
        }
        function et() {
            return z(Ee, Te)
        }
        function tt(e, t, r) {
            return t.tokenize == x && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0)))
        }
        return W.lex = N.lex = !0,
        {
            startState: function(e) {
                e = {
                    tokenize: x,
                    lastType: "sof",
                    cc: [],
                    lexical: new A((e || 0) - f,0,"block",!1),
                    localVars: l.localVars,
                    context: l.localVars && new C(null,null,!1),
                    indented: e || 0
                };
                return l.globalVars && "object" == typeof l.globalVars && (e.globalVars = l.globalVars),
                e
            },
            token: function(e, t) {
                if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
                t.indented = e.indentation(),
                j(e, t)),
                t.tokenize != h && e.eatSpace())
                    return null;
                var r = t.tokenize(e, t);
                return "comment" == k ? r : (t.lastType = "operator" != k || "++" != v && "--" != v ? k : "incdec",
                V(t, r, k, v, e))
            },
            indent: function(e, t) {
                if (e.tokenize == h || e.tokenize == g)
                    return rt.Pass;
                if (e.tokenize != x)
                    return 0;
                var r, n = t && t.charAt(0), a = e.lexical;
                if (!/^\s*else\b/.test(t))
                    for (var i = e.cc.length - 1; 0 <= i; --i) {
                        var o = e.cc[i];
                        if (o == W)
                            a = a.prev;
                        else if (o != qe && o != N)
                            break
                    }
                for (; ("stat" == a.type || "form" == a.type) && ("}" == n || (r = e.cc[e.cc.length - 1]) && (r == Q || r == R) && !/^[,\.=+\-*:?[\(]/.test(t)); )
                    a = a.prev;
                var c, s = (a = d && ")" == a.type && "stat" == a.prev.type ? a.prev : a).type, u = n == s;
                return "vardef" == s ? a.indented + ("operator" == e.lastType || "," == e.lastType ? a.info.length + 1 : 0) : "form" == s && "{" == n ? a.indented : "form" == s ? a.indented + f : "stat" == s ? a.indented + (c = t,
                "operator" == (s = e).lastType || "," == s.lastType || y.test(c.charAt(0)) || /[,.]/.test(c.charAt(0)) ? d || f : 0) : "switch" != a.info || u || 0 == l.doubleIndentSwitch ? a.align ? a.column + (u ? 0 : 1) : a.indented + (u ? 0 : f) : a.indented + (/^(?:case|default)\b/.test(t) ? f : 2 * f)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: o ? null : "/*",
            blockCommentEnd: o ? null : "*/",
            blockCommentContinue: o ? null : " * ",
            lineComment: o ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: o ? "json" : "javascript",
            jsonldMode: i,
            jsonMode: o,
            expressionAllowed: tt,
            skipExpression: function(e) {
                V(e, "atom", "atom", "true", new rt.StringStream("",2,null))
            }
        }
    }),
    rt.registerHelper("wordChars", "javascript", /[\w$]/),
    rt.defineMIME("text/javascript", "javascript"),
    rt.defineMIME("text/ecmascript", "javascript"),
    rt.defineMIME("application/javascript", "javascript"),
    rt.defineMIME("application/x-javascript", "javascript"),
    rt.defineMIME("application/ecmascript", "javascript"),
    rt.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }),
    rt.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }),
    rt.defineMIME("application/manifest+json", {
        name: "javascript",
        json: !0
    }),
    rt.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }),
    rt.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }),
    rt.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
    })
});

//source https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/xml/xml.min.js

!function(t) {
    "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], t) : t(CodeMirror)
}(function(y) {
    "use strict";
    var C = {
        autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0
        },
        implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0
        },
        contextGrabbers: {
            dd: {
                dd: !0,
                dt: !0
            },
            dt: {
                dd: !0,
                dt: !0
            },
            li: {
                li: !0
            },
            option: {
                option: !0,
                optgroup: !0
            },
            optgroup: {
                optgroup: !0
            },
            p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0
            },
            rp: {
                rp: !0,
                rt: !0
            },
            rt: {
                rp: !0,
                rt: !0
            },
            tbody: {
                tbody: !0,
                tfoot: !0
            },
            td: {
                td: !0,
                th: !0
            },
            tfoot: {
                tbody: !0
            },
            th: {
                td: !0,
                th: !0
            },
            thead: {
                tbody: !0,
                tfoot: !0
            },
            tr: {
                tr: !0
            }
        },
        doNotIndent: {
            pre: !0
        },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
    }
      , z = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1
    };
    y.defineMode("xml", function(t, e) {
        var n, a, i, l = t.indentUnit, u = {}, r = e.htmlMode ? C : z;
        for (n in r)
            u[n] = r[n];
        for (n in e)
            u[n] = e[n];
        function c(e, n) {
            function t(t) {
                return (n.tokenize = t)(e, n)
            }
            var r = e.next();
            if ("<" == r)
                return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? t(o("atom", "]]>")) : null : e.match("--") ? t(o("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/),
                t(function r(o) {
                    return function(t, e) {
                        for (var n; null != (n = t.next()); ) {
                            if ("<" == n)
                                return e.tokenize = r(o + 1),
                                e.tokenize(t, e);
                            if (">" == n) {
                                if (1 != o)
                                    return e.tokenize = r(o - 1),
                                    e.tokenize(t, e);
                                e.tokenize = c;
                                break
                            }
                        }
                        return "meta"
                    }
                }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/),
                n.tokenize = o("meta", "?>"),
                "meta") : (a = e.eat("/") ? "closeTag" : "openTag",
                n.tokenize = d,
                "tag bracket");
            if ("&" != r)
                return e.eatWhile(/[^&<]/),
                null;
            r = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";");
            return r ? "atom" : "error"
        }
        function d(t, e) {
            var n = t.next();
            if (">" == n || "/" == n && t.eat(">"))
                return e.tokenize = c,
                a = ">" == n ? "endTag" : "selfcloseTag",
                "tag bracket";
            if ("=" == n)
                return a = "equals",
                null;
            if ("<" != n)
                return /[\'\"]/.test(n) ? (e.tokenize = (r = n,
                o.isInAttribute = !0,
                o),
                e.stringStartCol = t.column(),
                e.tokenize(t, e)) : (t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),
                "word");
            e.tokenize = c,
            e.state = p,
            e.tagName = e.tagStart = null;
            var r, e = e.tokenize(t, e);
            return e ? e + " tag error" : "tag error";
            function o(t, e) {
                for (; !t.eol(); )
                    if (t.next() == r) {
                        e.tokenize = d;
                        break
                    }
                return "string"
            }
        }
        function o(n, r) {
            return function(t, e) {
                for (; !t.eol(); ) {
                    if (t.match(r)) {
                        e.tokenize = c;
                        break
                    }
                    t.next()
                }
                return n
            }
        }
        function s(t) {
            return t && t.toLowerCase()
        }
        function f(t, e, n) {
            this.prev = t.context,
            this.tagName = e || "",
            this.indent = t.indented,
            this.startOfLine = n,
            (u.doNotIndent.hasOwnProperty(e) || t.context && t.context.noIndent) && (this.noIndent = !0)
        }
        function m(t) {
            t.context && (t.context = t.context.prev)
        }
        function g(t, e) {
            for (var n; ; ) {
                if (!t.context)
                    return;
                if (n = t.context.tagName,
                !u.contextGrabbers.hasOwnProperty(s(n)) || !u.contextGrabbers[s(n)].hasOwnProperty(s(e)))
                    return;
                m(t)
            }
        }
        function p(t, e, n) {
            return "openTag" == t ? (n.tagStart = e.column(),
            h) : "closeTag" == t ? x : p
        }
        function h(t, e, n) {
            return "word" == t ? (n.tagName = e.current(),
            i = "tag",
            w) : u.allowMissingTagName && "endTag" == t ? (i = "tag bracket",
            w(t, 0, n)) : (i = "error",
            h)
        }
        function x(t, e, n) {
            if ("word" != t)
                return u.allowMissingTagName && "endTag" == t ? (i = "tag bracket",
                b(t, 0, n)) : (i = "error",
                k);
            e = e.current();
            return n.context && n.context.tagName != e && u.implicitlyClosed.hasOwnProperty(s(n.context.tagName)) && m(n),
            n.context && n.context.tagName == e || !1 === u.matchClosing ? (i = "tag",
            b) : (i = "tag error",
            k)
        }
        function b(t, e, n) {
            return "endTag" != t ? (i = "error",
            b) : (m(n),
            p)
        }
        function k(t, e, n) {
            return i = "error",
            b(t, 0, n)
        }
        function w(t, e, n) {
            if ("word" == t)
                return i = "attribute",
                T;
            if ("endTag" != t && "selfcloseTag" != t)
                return i = "error",
                w;
            var r = n.tagName
              , o = n.tagStart;
            return n.tagName = n.tagStart = null,
            "selfcloseTag" == t || u.autoSelfClosers.hasOwnProperty(s(r)) ? g(n, r) : (g(n, r),
            n.context = new f(n,r,o == n.indented)),
            p
        }
        function T(t, e, n) {
            return "equals" == t ? v : (u.allowMissing || (i = "error"),
            w(t, 0, n))
        }
        function v(t, e, n) {
            return "string" == t ? N : "word" == t && u.allowUnquoted ? (i = "string",
            w) : (i = "error",
            w(t, 0, n))
        }
        function N(t, e, n) {
            return "string" == t ? N : w(t, 0, n)
        }
        return c.isInText = !0,
        {
            startState: function(t) {
                var e = {
                    tokenize: c,
                    state: p,
                    indented: t || 0,
                    tagName: null,
                    tagStart: null,
                    context: null
                };
                return null != t && (e.baseIndent = t),
                e
            },
            token: function(t, e) {
                if (!e.tagName && t.sol() && (e.indented = t.indentation()),
                t.eatSpace())
                    return null;
                a = null;
                var n = e.tokenize(t, e);
                return (n || a) && "comment" != n && (i = null,
                e.state = e.state(a || n, t, e),
                i && (n = "error" == i ? n + " error" : i)),
                n
            },
            indent: function(t, e, n) {
                var r = t.context;
                if (t.tokenize.isInAttribute)
                    return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + l;
                if (r && r.noIndent)
                    return y.Pass;
                if (t.tokenize != d && t.tokenize != c)
                    return n ? n.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                    return !1 !== u.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + l * (u.multilineTagIndentFactor || 1);
                if (u.alignCDATA && /<!\[CDATA\[/.test(e))
                    return 0;
                var o = e && /^<(\/)?([\w_:\.-]*)/.exec(e);
                if (o && o[1])
                    for (; r; ) {
                        if (r.tagName == o[2]) {
                            r = r.prev;
                            break
                        }
                        if (!u.implicitlyClosed.hasOwnProperty(s(r.tagName)))
                            break;
                        r = r.prev
                    }
                else if (o)
                    for (; r; ) {
                        var a = u.contextGrabbers[s(r.tagName)];
                        if (!a || !a.hasOwnProperty(s(o[2])))
                            break;
                        r = r.prev
                    }
                for (; r && r.prev && !r.startOfLine; )
                    r = r.prev;
                return r ? r.indent + l : t.baseIndent || 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "\x3c!--",
            blockCommentEnd: "--\x3e",
            configuration: u.htmlMode ? "html" : "xml",
            helperType: u.htmlMode ? "html" : "xml",
            skipAttribute: function(t) {
                t.state == v && (t.state = w)
            },
            xmlCurrentTag: function(t) {
                return t.tagName ? {
                    name: t.tagName,
                    close: "closeTag" == t.type
                } : null
            },
            xmlCurrentContext: function(t) {
                for (var e = [], n = t.context; n; n = n.prev)
                    e.push(n.tagName);
                return e.reverse()
            }
        }
    }),
    y.defineMIME("text/xml", "xml"),
    y.defineMIME("application/xml", "xml"),
    y.mimeModes.hasOwnProperty("text/html") || y.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
    })
});

// set up
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "htmlmixed",
    theme: "material-darker",
    lineNumbers: true,
    autoCloseTags: true,
    matchTags: { bothTags: true },
    matchBrackets: true,
    styleActiveLine: true,
    lineWrapping: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});

function executeCode() {
    var code = editor.getValue();
    var iframe = document.createElement('iframe');
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').appendChild(iframe);

    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
}