!
function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }
    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                        path: "/"
                    }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (e) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(r + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(n + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                    try {
                        var m = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, m) : o(C, m) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (e) {}
                        if (n === m) {
                            c = C;
                            break
                        }
                        n || (c[m] = C)
                    } catch (e) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
var comm_list = [{
    slug: "common",
    list: [{
        tag: "??????",
        link: [{
            name: "????????????",
            url: "https://www.52pojie.cn/"
        }, {
            name: "?????????",
            url: "https://yaohuo.me/"
        }, {
            name: "????????????",
            url: "http://sgd.vvccc.top/"
        }, {
            name: "????????????",
            url: "https://www.daohangtx.com/html/update.html"
        }, {
            name: "???????????????",
            url: "https://www.smzdm.com/"
        }, {
            name: "????????????",
            url: "https://www.ghxi.com/"
        }, {
            name: "MCBBS",
            url: "https://www.mcbbs.net/"
        }]
    },{
        tag: "??????",
        link: [{
            name: "BT??????",
            url: "https://www.loadbt.com/zh"
        }, {
            name: "????????????",
            url: "https://music.ghxi.com/"
        }, {
            name: "????????????",
            url: "http://www.musictool.top/"
        }, {
			name: "????????????",
			url: "https://www.weidown.com/"
		}, {
			name: "Dll??????",
			url: "https://www.zhaodll.com/"
		}, {
            name: "Github??????",
            url: "https://d.serctl.com/"
        }, {
			name: "MSDN",
			url: "https://msdn.itellyou.cn/"
		}]
    },{
        tag: "????????????",
        link: [{
            name: "????????????",
            url: "http://www.tv8box.com/"
        }, {
            name: "????????????",
            url: "https://ddrk.me/"
        }, {
            name: "???????????????",
            url: "https://www.zhenbuka2.com/"
        }, {
            name: "????????????",
            url: "https://bwl87.com/"
        }, {
            name: "????????????",
            url: "https://www.zxzj.me/"
        }, {
            name: "????????????",
            url: "https://www.nfmovies.com/"
        }, {
            name: "AGE??????",
            url: "https://www.agefans.net/"
        }]
    }, {
        tag: "BT??????",
        link: [{
            name: "????????????",
            url: "https://www.dy2018.com/"
        }, {
            name: "??????",
            url: "https://www.pianku.li/"
        }, {
            name: "BT???",
            url: "https://www.ibtba.cc/"
        }, {
            name: "????????????",
            url: "https://www.ygdy8.com/index.html"
        }, {
            name: "6v??????",
            url: "http://www.hao6v.com/"
        }, {
            name: "????????????",
            url: "http://www.yyetss.com/"
        }, {
            name: "?????????",
            url: "https://www.yinfans.me/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.baidu.com/"
        }, {
            name: "??????",
            url: "https://www.google.com/"
        }, {
            name: "??????",
            url: "https://cn.bing.com/"
        }, {
            name: "??????",
            url: "https://www.sogou.com/"
        }, {
            name: "????????????",
            url: "https://www.toutiao.com/"
        }, {
            name: "??????",
            url: "https://jandan.net/"
        }, {
            name: "????????????",
            url: "http://www.dgtle.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.weibo.com/"
        }, {
            name: "??????",
            url: "https://tieba.baidu.com/"
        }, {
            name: "??????",
            url: "https://www.zhihu.com/"
        }, {
            name: "??????",
            url: "https://www.douban.com/"
        }, {
            name: "V2EX",
            url: "https://www.v2ex.com/"
        }, {
            name: "??????",
            url: "https://www.jianshu.com/"
        }, {
            name: "Twitter",
            url: "https://twitter.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.163.com/"
        }, {
            name: "??????",
            url: "http://www.qq.com/"
        }, {
            name: "??????",
            url: "http://www.sina.com.cn/"
        }, {
            name: "??????",
            url: "http://www.sohu.com/"
        }, {
            name: "?????????",
            url: "http://www.ifeng.com/"
        }, {
            name: "?????????",
            url: "http://www.people.com.cn/"
        }, {
            name: "?????????",
            url: "http://xinhuanet.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.taobao.com/"
        }, {
            name: "??????",
            url: "https://www.jd.com/"
        }, {
            name: "?????????",
            url: "https://youhui.pinduoduo.com/"
        }, {
            name: "?????????",
            url: "https://www.amazon.cn/"
        }, {
            name: "????????????",
            url: "https://www.suning.com/"
        }, {
            name: "????????????",
            url: "https://you.163.com/"
        }, {
            name: "APSGO??????",
            url: "https://apsgo.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.youku.com/"
        }, {
            name: "?????????",
            url: "https://www.iqiyi.com/"
        }, {
            name: "????????????",
            url: "https://v.qq.com/"
        }, {
            name: "????????????",
            url: "https://www.bilibili.com/"
        }, {
            name: "YouTube",
            url: "https://www.youtube.com/"
        }, {
            name: "????????????",
            url: "https://www.douyu.com/"
        }, {
            name: "????????????",
            url: "https://www.huya.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://cn.linkedin.com/"
        }, {
            name: "?????????",
            url: "https://www.lagou.com/"
        }, {
            name: "????????????",
            url: "https://www.zhaopin.com/"
        }, {
            name: "????????????",
            url: "https://www.51job.com/"
        }, {
            name: "?????????",
            url: "http://www.yingjiesheng.com/"
        }, {
            name: "??????",
            url: "https://maimai.cn/"
        }, {
            name: "?????????",
            url: "https://www.v2ex.com/?tab=jobs"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.meituan.com/"
        }, {
            name: "????????????",
            url: "https://www.dianping.com/"
        }, {
            name: "??????",
            url: "https://www.ctrip.com/"
        }, {
            name: "?????????",
            url: "https://www.qunar.com/"
        }, {
            name: "??????",
            url: "https://www.alitrip.com/"
        }, {
            name: "12306",
            url: "https://kyfw.12306.cn/otn/index/init"
        }, {
            name: "?????????",
            url: "https://www.mafengwo.cn/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Google??????",
            url: "https://translate.google.cn/"
        }, {
            name: "????????????",
            url: "http://www.weather.com.cn/live/"
        }, {
            name: "????????????",
            url: "https://www.kuaidi100.com/"
        }, {
            name: "????????????",
            url: "https://cn.office-converter.com/"
        }, {
            name: "????????????",
            url: "https://send.firefox.com/"
        }, {
            name: "????????????",
            url: "https://wx.qq.com/"
        }, {
            name: "QQ??????",
            url: "https://mail.qq.com/"
        }]
    }, {
        tag: "????????????",
        link: [{
            name: "Gitee",
            url: "https://gitee.com/"
        }, {
			name: "Coding",
			url: "https://coding.net/"
		}, {
            name: "Github",
            url: "https://github.com/"
	    }, {
			name: "Gitlab",
			url: "https://about.gitlab.com/"
		}, {
			name: "Bitbucket",
			url: "https://bitbucket.org/"
		}]
    }]
}, {
    slug: "amuse",
    list: [{
        tag: "????????????",
        link: [{
            name: "????????????",
            url: "http://www.tv8box.com/"
        }, {
            name: "????????????",
            url: "https://ddrk.me/"
        }, {
            name: "???????????????",
            url: "https://www.zhenbuka2.com/"
        }, {
            name: "????????????",
            url: "https://bwl87.com/"
        }, {
            name: "????????????",
            url: "https://www.zxzj.me/"
        }, {
            name: "????????????",
            url: "https://www.nfmovies.com/"
        }, {
            name: "AGE??????",
            url: "https://www.agefans.net/"
        }]
    }, {
        tag: "BT??????",
        link: [{
            name: "????????????",
            url: "https://www.dy2018.com/"
        }, {
            name: "??????",
            url: "https://www.pianku.li/"
        }, {
            name: "BT???",
            url: "https://www.ibtba.cc/"
        }, {
            name: "????????????",
            url: "https://www.ygdy8.com/index.html"
        }, {
            name: "6v??????",
            url: "http://www.hao6v.com/"
        }, {
            name: "????????????",
            url: "http://www.yyetss.com/"
        }, {
            name: "?????????",
            url: "https://www.yinfans.me/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://jandan.net/"
        }, {
            name: "?????????",
            url: "https://www.guokr.com/"
        }, {
            name: "??????",
            url: "https://www.duitang.com/"
        }, {
            name: "????????????",
            url: "https://www.qiushibaike.com/"
        }, {
            name: "????????????",
            url: "http://baozou.com/"
        }, {
            name: "???????????????",
            url: "http://www.budejie.com/"
        }, {
            name: "???????????????",
            url: "http://www.qdaily.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.youku.com/"
        }, {
            name: "?????????",
            url: "https://www.iqiyi.com/"
        }, {
            name: "????????????",
            url: "https://v.qq.com/"
        }, {
            name: "????????????",
            url: "http://www.le.com/"
        }, {
            name: "??????TV",
            url: "https://www.mgtv.com/"
        }, {
            name: "?????????",
            url: "http://tv.cctv.com/"
        }, {
            name: "YouTube",
            url: "https://www.youtube.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "https://www.douyu.com/"
        }, {
            name: "YY??????",
            url: "https://www.yy.com/"
        }, {
            name: "????????????",
            url: "https://www.huya.com/"
        }, {
            name: "????????????",
            url: "http://www.huajiao.com/"
        }, {
            name: "????????????",
            url: "https://egame.qq.com/"
        }, {
            name: "?????????",
            url: "https://www.yizhibo.com/"
        }, {
            name: "Twitch",
            url: "https://www.twitch.tv/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "https://www.bilibili.com/"
        }, {
            name: "AcFun",
            url: "http://www.acfun.cn/"
        }, {
            name: "????????????",
            url: "http://www.dilidili.name/"
        }, {
            name: "?????????",
            url: "https://bcy.net/"
        }, {
            name: "????????????",
            url: "https://manhua.163.com/"
        }, {
            name: "?????????",
            url: "http://u17.com/"
        }, {
            name: "????????????",
            url: "https://zh.moegirl.org/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Steam",
            url: "https://store.steampowered.com/"
        }, {
            name: "????????????",
            url: "http://www.gamersky.com/"
        }, {
            name: "????????????",
            url: "http://www.tgbus.com/"
        }, {
            name: "17173",
            url: "https://www.17173.com/"
        }, {
            name: "????????????",
            url: "http://www.duowan.com/"
        }, {
            name: "3DMGAME",
            url: "https://www.3dmgame.com/"
        }, {
            name: "????????????",
            url: "http://www.66rpg.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "???????????????",
            url: "https://music.163.com/"
        }, {
            name: "????????????",
            url: "https://www.xiami.com/"
        }, {
            name: "QQ??????",
            url: "https://y.qq.com/"
        }, {
            name: "??????FM",
            url: "https://douban.fm/"
        }, {
            name: "????????????FM",
            url: "https://www.ximalaya.com/"
        }, {
            name: "??????Tai",
            url: "http://www.yinyuetai.com/"
        }, {
            name: "5sing??????",
            url: "http://5sing.kugou.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://sports.qq.com/"
        }, {
            name: "????????????",
            url: "http://sports.163.com/"
        }, {
            name: "????????????",
            url: "http://sports.sina.com.cn/"
        }, {
            name: "????????????",
            url: "http://sports.cctv.com/"
        }, {
            name: "????????????",
            url: "http://www.lesports.com/"
        }, {
            name: "?????????",
            url: "https://www.zhibo8.cc/"
        }, {
            name: "??????",
            url: "https://www.hupu.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.xbiquge.la/"
        }, {
            name: "???????????????",
            url: "https://www.qidian.com/"
        }, {
            name: "???????????????",
            url: "http://www.zongheng.com/"
        }, {
            name: "????????????",
            url: "https://www.hongxiu.com/"
        }, {
            name: "????????????",
            url: "https://read.douban.com/"
        }, {
            name: "???????????????",
            url: "http://yuedu.163.com/"
        }, {
            name: "????????????",
            url: "http://www.jingyu.com/"
        }]
    }]
}, {
    slug: "study",
    list: [{
        tag: "??????",
        link: [{
            name: "???????????????",
            url: "https://open.163.com/"
        }, {
            name: "???????????????",
            url: "https://study.163.com/"
        }, {
            name: "????????????",
            url: "https://ke.qq.com/"
        }, {
            name: "????????????MOOC",
            url: "https://www.icourse163.org/"
        }, {
            name: "?????????",
            url: "https://www.imooc.com/"
        }, {
            name: "????????????",
            url: "http://www.jikexueyuan.com/"
        }, {
            name: "?????????",
            url: "http://www.icourses.cn/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "https://wenku.baidu.com/"
        }, {
            name: "????????????",
            url: "http://www.doc88.com/"
        }, {
            name: "?????????",
            url: "http://www.docin.com/"
        }, {
            name: "??????????????????",
            url: "http://ishare.iask.sina.com.cn/"
        }, {
            name: "360doc",
            url: "http://www.360doc.com/"
        }, {
            name: "???????????????",
            url: "https://wenku.lingfengyun.com/"
        }, {
            name: "MBA??????",
            url: "http://www.mbalib.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "https://scholar.google.com/"
        }, {
            name: "????????????",
            url: "http://xueshu.baidu.com/"
        }, {
            name: "????????????",
            url: "https://cn.bing.com/academic"
        }, {
            name: "????????????",
            url: "http://www.cnki.net/"
        }, {
            name: "????????????",
            url: "http://www.wanfangdata.com.cn/"
        }, {
            name: "?????????",
            url: "http://www.cqvip.com/"
        }, {
            name: "OALib",
            url: "http://www.oalib.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://hd.cnki.net/kxhd"
        }, {
            name: "????????????",
            url: "https://dictionary.cambridge.org/zhs/"
        }, {
            name: "???????????????",
            url: "https://www.collinsdictionary.com/zh/"
        }, {
            name: "????????????",
            url: "https://www.youdao.com/"
        }, {
            name: "??????",
            url: "http://www.zdic.net/"
        }, {
            name: "????????????",
            url: "https://cjjc.weblio.jp/"
        }, {
            name: "????????????",
            url: "https://zh.dict.naver.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://edu.qq.com/"
        }, {
            name: "????????????",
            url: "http://learning.sohu.com/"
        }, {
            name: "????????????",
            url: "http://www.163.com/"
        }, {
            name: "??????????????????",
            url: "http://www.eol.cn/"
        }, {
            name: "?????????",
            url: "http://www.xdf.cn/"
        }, {
            name: "????????????",
            url: "http://www.hjenglish.com/"
        }, {
            name: "????????????",
            url: "https://www.51test.net/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.51mokao.com/"
        }, {
            name: "???????????????",
            url: "http://www.kmf.com/"
        }, {
            name: "LeetCode",
            url: "https://leetcode-cn.com/"
        }, {
            name: "??????????????????",
            url: "http://www.chinaacc.com/tiku/"
        }, {
            name: "????????????",
            url: "https://www.typing.com/student"
        }, {
            name: "???????????????",
            url: "http://www.jxedt.com/"
        }, {
            name: "????????????",
            url: "http://www.jiakaobaodian.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "?????????",
            url: "http://www.duolingo.cn/"
        }, {
            name: "??????",
            url: "https://www.shanbay.com/"
        }, {
            name: "?????????",
            url: "http://www.baicizhan.com/"
        }, {
            name: "51VOA",
            url: "http://www.51voa.com/"
        }, {
            name: "??????PDF",
            url: "https://smallpdf.com/cn"
        }, {
            name: "????????????",
            url: "http://webdemo.myscript.com/"
        }, {
            name: "Wolfram Alpha",
            url: "https://www.wolframalpha.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "???????????????",
            url: "https://www.chsi.com.cn/cet/"
        }, {
            name: "???????????????",
            url: "http://hainan.cltt.org/web/login/pscp01001.aspx"
        }, {
            name: "??????????????????",
            url: "http://kzp.mof.gov.cn/cjcx/cjcx.jsp"
        }, {
            name: "????????????",
            url: "http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660"
        }, {
            name: "???????????????",
            url: "http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=300"
        }, {
            name: "??????",
            url: "https://ielts.neea.cn/"
        }, {
            name: "??????",
            url: "https://toefl.neea.cn/"
        }]
    }]
}, {
    slug: "life",
    list: [{
        tag: "??????",
        link: [{
            name: "??????",
            url: "https://www.meituan.com/"
        }, {
            name: "??????",
            url: "https://www.ctrip.com/"
        }, {
            name: "?????????",
            url: "https://www.qunar.com/"
        }, {
            name: "??????",
            url: "https://www.alitrip.com/"
        }, {
            name: "??????",
            url: "http://www.tuniu.com/"
        }, {
            name: "12306",
            url: "https://kyfw.12306.cn/otn/index/init"
        }, {
            name: "?????????",
            url: "https://www.mafengwo.cn/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "?????????",
            url: "http://www.xiachufang.com/"
        }, {
            name: "????????????",
            url: "https://www.meishichina.com/"
        }, {
            name: "????????????",
            url: "https://www.douguo.com/"
        }, {
            name: "????????????",
            url: "http://chihe.sohu.com/"
        }, {
            name: "?????????",
            url: "https://www.xinshipu.com/"
        }, {
            name: "???????????????",
            url: "http://www.chinacaipu.com/"
        }, {
            name: "?????????",
            url: "http://www.meishij.net/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "?????????",
            url: "http://www.fang.com/"
        }, {
            name: "??????",
            url: "http://www.lianjia.com/"
        }, {
            name: "?????????",
            url: "http://www.fangdd.com/"
        }, {
            name: "?????????",
            url: "http://www.anjuke.com/"
        }, {
            name: "????????????",
            url: "http://house.qq.com/"
        }, {
            name: "????????????",
            url: "https://house.focus.cn/"
        }, {
            name: "??????",
            url: "http://www.leju.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.autohome.com.cn/"
        }, {
            name: "???????????????",
            url: "http://www.pcauto.com.cn/"
        }, {
            name: "?????????",
            url: "http://www.bitauto.com/"
        }, {
            name: "????????????",
            url: "http://www.xcar.com.cn/"
        }, {
            name: "????????????",
            url: "http://auto.163.com/"
        }, {
            name: "????????????",
            url: "http://auto.sina.com.cn/"
        }, {
            name: "????????????",
            url: "http://auto.sohu.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.eastmoney.com/"
        }, {
            name: "????????????",
            url: "http://www.yicai.com/"
        }, {
            name: "????????????",
            url: "http://finance.ifeng.com/"
        }, {
            name: "????????????",
            url: "http://money.163.com/"
        }, {
            name: "????????????",
            url: "http://www.hexun.com/"
        }, {
            name: "??????",
            url: "https://xueqiu.com/"
        }, {
            name: "??????",
            url: "http://guba.eastmoney.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "???????????????",
            url: "https://www.pclady.com.cn/"
        }, {
            name: "?????????",
            url: "http://www.rayli.com.cn/"
        }, {
            name: "?????????",
            url: "http://www.meilishuo.com/"
        }, {
            name: "?????????",
            url: "http://www.mogujie.com/"
        }, {
            name: "YOKA",
            url: "http://www.yoka.com/"
        }, {
            name: "OnlyLady",
            url: "http://www.onlylady.com/"
        }, {
            name: "VOGUE",
            url: "http://www.vogue.com.cn/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://health.sohu.com/"
        }, {
            name: "????????????",
            url: "http://health.sina.com.cn/"
        }, {
            name: "????????????",
            url: "http://fashion.ifeng.com/health/"
        }, {
            name: "????????????",
            url: "http://www.xywy.com/"
        }, {
            name: "?????????",
            url: "http://www.dxy.cn/"
        }, {
            name: "39?????????",
            url: "http://www.39.net/"
        }, {
            name: "????????????",
            url: "http://www.120ask.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.speedtest.net/"
        }, {
            name: "???????????????",
            url: "http://www.114best.com/dh/"
        }, {
            name: "????????????",
            url: "http://qq.ip138.com/train/"
        }, {
            name: "????????????",
            url: "http://map.variflight.com/"
        }, {
            name: "????????????",
            url: "http://typhoon.zjwater.gov.cn/"
        }, {
            name: "??????????????????",
            url: "http://www.ip138.com/weizhang.htm"
        }, {
            name: "????????????",
            url: "http://www.b1bj.com/"
        }]
    }]
}, {
    slug: "tech",
    list: [{
        tag: "??????",
        link: [{
            name: "Greasy Fork",
            url: "https://greasyfork.org/zh-CN"
        }, {
            name: "????????????",
            url: "https://chrome.zzzmh.cn/"
        }, {
            name: "?????????",
            url: "http://www.cnplugins.com/"
        }, {
            name: "?????????",
            url: "https://chromecj.com/"
        }, {
            name: "????????????",
            url: "https://www.extfans.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "V2EX",
            url: "https://www.v2ex.com/"
        }, {
            name: "??????",
            url: "https://juejin.im/"
        }, {
            name: "????????????",
            url: "https://www.oschina.net/"
        }, {
            name: "CSDN",
            url: "https://www.csdn.net/"
        }, {
            name: "InfoQ",
            url: "http://www.infoq.com/cn/"
        }, {
            name: "NEXT",
            url: "http://next.36kr.com/"
        }, {
            name: "HackerNews",
            url: "https://news.ycombinator.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "????????????",
            url: "http://www.dgtle.com/"
        }, {
            name: "?????????",
            url: "https://www.ifanr.com/"
        }, {
            name: "?????????",
            url: "https://www.leiphone.com/"
        }, {
            name: "????????????",
            url: "http://www.geekpark.net/"
        }, {
            name: "?????????",
            url: "http://www.chinabyte.com/"
        }, {
            name: "ZEALER",
            url: "http://www.zealer.com/"
        }, {
            name: "Engadget",
            url: "https://chinese.engadget.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "GitHub",
            url: "https://github.com/"
        }, {
            name: "Coding",
            url: "https://coding.net/"
        }, {
            name: "??????",
            url: "https://shimo.im/"
        }, {
            name: "????????????",
            url: "http://naotu.baidu.com/"
        }, {
            name: "CmdMarkdown",
            url: "https://www.zybuluo.com/mdeditor"
        }, {
            name: "TinyPNG",
            url: "https://tinypng.com/"
        }, {
            name: "SM.MS ??????",
            url: "https://sm.ms/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "IP??????",
            url: "https://www.ipip.net/ip.html"
        }, {
            name: "Speedtest",
            url: "http://www.speedtest.net/"
        }, {
            name: "17CE",
            url: "https://www.17ce.com/"
        }, {
            name: "????????????",
            url: "https://tool.lu/"
        }, {
            name: "???????????????",
            url: "https://www.freeformatter.com/"
        }, {
            name: "????????????",
            url: "https://www.moakt.com/"
        }, {
            name: "????????????",
            url: "https://www.domcomp.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Microsoft??????",
            url: "https://docs.microsoft.com/zh-cn/"
        }, {
            name: "Google?????????",
            url: "https://developers.google.com/china/"
        }, {
            name: "MDN??????",
            url: "https://developer.mozilla.org/zh-CN/"
        }, {
            name: "W3school",
            url: "http://www.w3school.com.cn/"
        }, {
            name: "????????????",
            url: "http://www.runoob.com/"
        }, {
            name: "Linux??????",
            url: "http://man.linuxde.net/"
        }, {
            name: "???????????????",
            url: "https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "??????UED",
            url: "http://www.aliued.cn/"
        }, {
            name: "????????????",
            url: "https://tech.youzan.com/"
        }, {
            name: "??????JDC",
            url: "http://jdc.jd.com/"
        }, {
            name: "????????????",
            url: "http://www.alloyteam.com/"
        }, {
            name: "??????UED",
            url: "http://ued.baidu.com/"
        }, {
            name: "?????????FED",
            url: "https://fed.renren.com/"
        }, {
            name: "???????????????",
            url: "http://www.ruanyifeng.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "?????????",
            url: "https://sspai.com/"
        }, {
            name: "????????????",
            url: "https://www.lizhi.io/"
        }, {
            name: "?????????",
            url: "https://www.iplaysoft.com/"
        }, {
            name: "Softonic",
            url: "https://en.softonic.com/"
        }, {
            name: "MacInformer",
            url: "http://macdownload.informer.com/"
        }, {
            name: "????????????",
            url: "http://down.chinaz.com/"
        }, {
            name: "???????????????",
            url: "http://mirrors.ustc.edu.cn/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "?????????",
            url: "https://www.aliyun.com/"
        }, {
            name: "?????????",
            url: "https://cloud.tencent.com/"
        }, {
            name: "AWS",
            url: "https://aws.amazon.com/cn/"
        }, {
            name: "GoogleCloud",
            url: "https://cloud.google.com/"
        }, {
            name: "Linode",
            url: "https://www.linode.com/"
        }, {
            name: "DigitalOcean",
            url: "https://www.digitalocean.com/"
        }, {
            name: "Bandwagon",
            url: "https://bandwagonhost.com/"
        }]
    }]
}, {
    slug: "design",
    list: [{
        tag: "??????",
        link: [{
            name: "Behance",
            url: "https://www.behance.net/"
        }, {
            name: "Dribbble",
            url: "https://dribbble.com/"
        }, {
            name: "Muzli",
            url: "https://muz.li/"
        }, {
            name: "MyDesy",
            url: "https://www.mydesy.com/"
        }, {
            name: "ZCOOL",
            url: "http://www.zcool.com.cn/"
        }, {
            name: "FWA",
            url: "https://thefwa.com/"
        }, {
            name: "LandBook",
            url: "https://land-book.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Huaban",
            url: "http://huabanpro.com/"
        }, {
            name: "Unsplash",
            url: "https://unsplash.com/"
        }, {
            name: "Pixabay",
            url: "https://pixabay.com/"
        }, {
            name: "500px",
            url: "https://500px.com/"
        }, {
            name: "Pinterest",
            url: "https://www.pinterest.com/"
        }, {
            name: "PEXELS",
            url: "https://www.pexels.com/"
        }, {
            name: "SplitShire",
            url: "https://www.splitshire.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "NiPic",
            url: "http://www.nipic.com/"
        }, {
            name: "58Pic",
            url: "http://www.58pic.com/"
        }, {
            name: "freepik",
            url: "https://www.freepik.com/"
        }, {
            name: "UIKit",
            url: "http://www.uikit.me/"
        }, {
            name: "Pixeden",
            url: "https://www.pixeden.com/"
        }, {
            name: "Subtlepatterns",
            url: "http://subtlepatterns.com/"
        }, {
            name: "Fribbble",
            url: "http://www.fribbble.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Fontsup",
            url: "https://fontsup.com/"
        }, {
            name: "dafont",
            url: "https://www.dafont.com/"
        }, {
            name: "Qiuziti",
            url: "http://www.qiuziti.com/"
        }, {
            name: "MyFonts",
            url: "https://www.myfonts.com/"
        }, {
            name: "Fonts2u",
            url: "https://zh.fonts2u.com/"
        }, {
            name: "Fontfabric",
            url: "http://www.fontfabric.com/"
        }, {
            name: "UrbanFonts",
            url: "https://www.urbanfonts.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "UICN",
            url: "http://www.ui.cn/"
        }, {
            name: "SiteSee",
            url: "https://sitesee.co/"
        }, {
            name: "UIGarage",
            url: "https://uigarage.net/"
        }, {
            name: "BestWebsite",
            url: "https://bestwebsite.gallery/"
        }, {
            name: "CollectUI",
            url: "http://collectui.com/"
        }, {
            name: "UIMovement",
            url: "https://uimovement.com/"
        }, {
            name: "Reeoo",
            url: "https://reeoo.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "ColorHunt",
            url: "https://colorhunt.co/"
        }, {
            name: "Coolors",
            url: "https://coolors.co/"
        }, {
            name: "AdobeColor",
            url: "https://color.adobe.com/zh/"
        }, {
            name: "WebGradients",
            url: "https://webgradients.com/"
        }, {
            name: "Trianglify",
            url: "https://trianglify.io/"
        }, {
            name: "ColorFavs",
            url: "http://www.colorfavs.com/"
        }, {
            name: "Colllor",
            url: "http://colllor.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Fotor",
            url: "https://www.fotor.com.cn/"
        }, {
            name: "Photopea",
            url: "https://www.photopea.com/"
        }, {
            name: "AutoDraw",
            url: "https://www.autodraw.com/"
        }, {
            name: "Figma",
            url: "https://www.figma.com/"
        }, {
            name: "SVG Draw",
            url: "http://editor.method.ac/"
        }, {
            name: "CloudConvert",
            url: "https://cloudconvert.com/"
        }, {
            name: "TinyPNG",
            url: "https://tinypng.com/"
        }]
    }, {
        tag: "??????",
        link: [{
            name: "Apple",
            url: "https://developer.apple.com/design/"
        }, {
            name: "Google",
            url: "https://design.google/"
        }, {
            name: "Microsoft",
            url: "https://www.microsoft.com/design/"
        }, {
            name: "Material",
            url: "https://material.io/"
        }, {
            name: "Android",
            url: "https://developer.android.google.cn/design/"
        }, {
            name: "ScreenSize",
            url: "http://screensiz.es/phone"
        }, {
            name: "WeUI",
            url: "https://weui.io/"
        }]
    }]
}, {
    slug: "liangcheng",
    list: [{
        tag: "????????????",
        link: [{
            name: "Greasy Fork",
            url: "https://greasyfork.org/zh-CN"
        }, {
            name: "????????????",
            url: "https://chrome.zzzmh.cn/"
        }, {
            name: "?????????",
            url: "http://www.cnplugins.com/"
        }, {
            name: "?????????",
            url: "https://chromecj.com/"
        }, {
            name: "????????????",
            url: "https://www.extfans.com/"
        }]
    }]
}]
!function(o) {
    "use strict"

    function t(t) {
        o(".work-link").find(".tab span.active").removeClass("active")
        var e, n, a = "",
            l = o(t).attr("class")
            if (o(t).addClass("active"), o.each(comm_list, function(t, i) {
                l == i.slug && (e = i.list, o.each(e, function(t, i) {
                    a += "<ul><li>" + i.tag + "</li>", n = i.link, o.each(n, function(o, t) {
                        a += '<li><a href="' + t.url + '" target="_blank">' + t.name + "</a></li>"
                    }), a += "</ul>"
                }))
            }), o(".work-link").find(".tab span:first").hasClass("active") && "1" == i("schl")) {
                var s = "assets/data/univ/" + i("univ") + ".js"
                o.getScript(s, function() {
                    var t = univ_list.link,
                        i = "<ul><li>??????</li>"
                    o.each(t, function(o, t) {
                        i += '<li><a href="' + t.url + '" target="_blank">' + t.name + "</a></li>"
                    }), i += "</ul>", o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200).find("ul:nth-child(6)").html(i)
                }).fail(function() {
                    var t = "<ul><li>??????</li><li>????????????</li></ul>"
                    o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200).find("ul:nth-child(6)").html(t)
                })
            } else o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200)
    }
    function i(o) {
        var t = {
            bkgd: "#ededed",
            srch: "bing",
            schl: "0",
            prov: "1",
            univ: "1001"
        }
        return Cookies.get(o) || t[o]
    }
    function e(o, t, i) {
        Cookies.set(o, t, {
            expires: i || 3650
        })
    }
    function n(t) {
        o("body").css("background", t)
    }
    function a(t) {
        if (o(t).addClass("active").siblings(".active").removeClass("active"), o(".search-hidden").remove(), o(t).hasClass("baidu")) o(".search-form").attr("action", "https://www.baidu.com/s"), o(".search-keyword").attr({
            name: "word",
            placeholder: "???????????????????????????"
        })
        else if (o(t).hasClass("google")) o(".search-form").attr("action", "https://www.google.com/search"), o(".search-keyword").attr({
            name: "q",
            placeholder: "Google ??????"
        })
        else if (o(t).hasClass("bing")) o(".search-form").attr("action", "https://cn.bing.com/search"), o(".search-keyword").attr({
            name: "q",
            placeholder: "?????? Bing ??????"
        })
        else if (o(t).hasClass("image")) {
            o(".search-form").attr("action", "https://cn.bing.com/images/search"), o(".search-keyword").attr({
                name: "q",
                placeholder: "??????????????????"
            })
            var i = new Image
            i.src = "https://images.google.com/favicon.ico?" + Date.now(),
                i.onload = function() {
                    o(".search-form").attr("action", "https://www.google.com/search"), o(".search-form").prepend('<input class="search-hidden" type="hidden" name="tbm" value="isch">')
                }
        } 
        else if (o(t).hasClass("scholar")) {
            o(".search-form").attr("action", "https://xueshu.baidu.com/s"), o(".search-keyword").attr({
                name: "wd",
                placeholder: "?????????????????????"
            })
            var i = new Image
            i.src = "https://scholar.google.com/favicon.ico?" + Date.now(),
                i.onload = function() {
                    o(".search-form").attr("action", "https://scholar.google.com/scholar"), o(".search-keyword").attr({
                        name: "q"
                    }), o(".search-form").prepend('<input class="search-hidden" type="hidden" name="hl" value="zh-CN">')
                }
        }
		else if (o(t).hasClass("wiki")) o(".search-form").attr("action", "https://zh.wikipedia.org/wiki"), o(".search-keyword").attr({
            name: "search",
            placeholder: "??????????????????"
        })
		else if (o(t).hasClass("moegirl")) o(".search-form").attr("action", "https://zh.moegirl.org.cn"), o(".search-keyword").attr({
            name: "search",
            placeholder: "??????????????????"
        })
        o(".search-keyword").focus()
    }
    o.ajaxSetup({
        cache: !0
    }), n(i("bkgd")), t(o(".work-link").find(".tab span:first")), a(o(".search-tab").find("span." + i("srch"))), o(".work-link .tab").on("click", "span", function() {
        t(o(this))
    }), o(".search-tab").on("click", "span", function() {
        a(o(this)), e("srch", this.className.split(" ")[0])
    }), o("#setting-icon").on("click", function() {
        o(".work-link .info").hide().html
		('<div style="padding: 30px 30px 0;min-height: 400px;"><div class="row"><div id="setting-bkgd"class="column col-4"><label>????????????</label><select><option value="#ededed">??????</option><option value="#ffffff">??????</option><option value="#f5d9d9">??????</option><option value="#8d6262">??????</option><option value="#b9d7ea">??????</option><option value="#aacfd0">??????</option><option value="#283c63">??????</option><option value="#928a97">??????</option><option value="#444f5a">??????</option><option value="#373c38">??????</option><option value="#40514e">??????</option><option value="#4d4545">??????</option></select></div><div class="column col-4"></div></div><div class="row"><input id="setting-save"type="button"value="??????"style="padding: 0 40px;"></div></div>').fadeIn(200), o("#setting-bkgd select").val(i("bkgd")), o("#setting-schl select").val(i("schl")), o("#setting-prov select").val(i("prov")), o("#setting-bkgd select").change(function() {
            n(o(this).val())
        }), o.getScript("assets/data/univ.li.js", function() {
            function t(t, i) {
                var e, n
                o.each(univ_list, function(a, l) {
                    t == l.id && (e = l.univs, n = "", o.each(e, function(o, t) {
                        n += "<option value=" + t.id + ">" + t.name + "</option>"
                    }), o("#setting-univ select").html(n), i && o("#setting-univ select").val(i))
                })
            }
            t(o("#setting-prov select").val(), i("univ")), o("#setting-prov select").change(function() {
                t(o("#setting-prov select").val())
            })
        }), o("#setting-save").off("click").on("click", function() {
            e("bkgd", o("#setting-bkgd select").val()), e("schl", o("#setting-schl select").val()), o("#setting-univ select").val() && (e("prov", o("#setting-prov select").val()), e("univ", o("#setting-univ select").val())), t(o(".work-link").find(".tab span:first"))
        })
    })
}(jQuery)