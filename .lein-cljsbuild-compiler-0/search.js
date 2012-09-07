goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('hiccups.runtime');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina');
/**
* Reference to the search-button DOM object
*/
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
cljs_intro.search.create_player_demog = (function create_player_demog(firstname,lastname,pos){
return [cljs.core.str("<div"),cljs.core.str(" class=\"demog\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"page-header tabs clearfix nm\""),cljs.core.str(">"),cljs.core.str((function (){var attrs504627__504630 = [cljs.core.str(firstname),cljs.core.str(" "),cljs.core.str(lastname)].join('');
if(cljs.core.map_QMARK_.call(null,attrs504627__504630))
{return [cljs.core.str("<h2"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504627__504630))),cljs.core.str(">"),cljs.core.str((function (){var attrs504628__504631 = [cljs.core.str("&nbsp;&nbsp;("),cljs.core.str(pos),cljs.core.str(")")].join('');
if(cljs.core.map_QMARK_.call(null,attrs504628__504631))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504628__504631))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504628__504631)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</h2>")].join('');
} else
{return [cljs.core.str("<h2>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504627__504630)),cljs.core.str((function (){var attrs504629__504632 = [cljs.core.str("&nbsp;&nbsp;("),cljs.core.str(pos),cljs.core.str(")")].join('');
if(cljs.core.map_QMARK_.call(null,attrs504629__504632))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504629__504632))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504629__504632)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</h2>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_shooting_stats = (function create_shooting_stats(p__504633){
var map__504697__504698 = p__504633;
var map__504697__504699 = ((cljs.core.seq_QMARK_.call(null,map__504697__504698))?cljs.core.apply.call(null,cljs.core.hash_map,map__504697__504698):map__504697__504698);
var postplusminus__504700 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postplusminus",null);
var gwg__504701 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'gwg",null);
var postpim__504702 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postpim",null);
var postpts__504703 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postpts",null);
var gtg__504704 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'gtg",null);
var postppa__504705 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postppa",null);
var plusminus__504706 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'plusminus",null);
var posta__504707 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'posta",null);
var sha__504708 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'sha",null);
var pim__504709 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'pim",null);
var postppg__504710 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postppg",null);
var postg__504711 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postg",null);
var postshg__504712 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postshg",null);
var postsha__504713 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postsha",null);
var ppa__504714 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'ppa",null);
var sog__504715 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'sog",null);
var a__504716 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'a",null);
var postgp__504717 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postgp",null);
var ppg__504718 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'ppg",null);
var year__504719 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'year",null);
var g__504720 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'g",null);
var shg__504721 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'shg",null);
var postsog__504722 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postsog",null);
var postgwg__504723 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'postgwg",null);
var pos__504724 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'pos",null);
var tmid__504725 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'tmid",null);
var gp__504726 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'gp",null);
var pts__504727 = cljs.core._lookup.call(null,map__504697__504699,"\uFDD0'pts",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs504728__504744 = year__504719;
if(cljs.core.map_QMARK_.call(null,attrs504728__504744))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504728__504744))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504728__504744)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504729__504745 = tmid__504725;
if(cljs.core.map_QMARK_.call(null,attrs504729__504745))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504729__504745))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504729__504745)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504730__504746 = pos__504724;
if(cljs.core.map_QMARK_.call(null,attrs504730__504746))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504730__504746))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504730__504746)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504731__504747 = gp__504726;
if(cljs.core.map_QMARK_.call(null,attrs504731__504747))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504731__504747))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504731__504747)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504732__504748 = g__504720;
if(cljs.core.map_QMARK_.call(null,attrs504732__504748))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504732__504748))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504732__504748)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504733__504749 = a__504716;
if(cljs.core.map_QMARK_.call(null,attrs504733__504749))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504733__504749))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504733__504749)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504734__504750 = pts__504727;
if(cljs.core.map_QMARK_.call(null,attrs504734__504750))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504734__504750))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504734__504750)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504735__504751 = pim__504709;
if(cljs.core.map_QMARK_.call(null,attrs504735__504751))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504735__504751))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504735__504751)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504736__504752 = plusminus__504706;
if(cljs.core.map_QMARK_.call(null,attrs504736__504752))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504736__504752))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504736__504752)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504737__504753 = ppg__504718;
if(cljs.core.map_QMARK_.call(null,attrs504737__504753))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504737__504753))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504737__504753)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504738__504754 = ppa__504714;
if(cljs.core.map_QMARK_.call(null,attrs504738__504754))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504738__504754))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504738__504754)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504739__504755 = shg__504721;
if(cljs.core.map_QMARK_.call(null,attrs504739__504755))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504739__504755))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504739__504755)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504740__504756 = sha__504708;
if(cljs.core.map_QMARK_.call(null,attrs504740__504756))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504740__504756))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504740__504756)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504741__504757 = gwg__504701;
if(cljs.core.map_QMARK_.call(null,attrs504741__504757))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504741__504757))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504741__504757)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504742__504758 = gtg__504704;
if(cljs.core.map_QMARK_.call(null,attrs504742__504758))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504742__504758))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504742__504758)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504743__504759 = sog__504715;
if(cljs.core.map_QMARK_.call(null,attrs504743__504759))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504743__504759))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504743__504759)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.create_playoff_shooting_stats = (function create_playoff_shooting_stats(p__504760){
var map__504810__504811 = p__504760;
var map__504810__504812 = ((cljs.core.seq_QMARK_.call(null,map__504810__504811))?cljs.core.apply.call(null,cljs.core.hash_map,map__504810__504811):map__504810__504811);
var postplusminus__504813 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postplusminus",null);
var postpim__504814 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postpim",null);
var postpts__504815 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postpts",null);
var postppa__504816 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postppa",null);
var posta__504817 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'posta",null);
var postgtg__504818 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postgtg",null);
var postppg__504819 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postppg",null);
var postg__504820 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postg",null);
var postshg__504821 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postshg",null);
var postsha__504822 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postsha",null);
var postgp__504823 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postgp",null);
var year__504824 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'year",null);
var postsog__504825 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postsog",null);
var postgwg__504826 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'postgwg",null);
var pos__504827 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'pos",null);
var tmid__504828 = cljs.core._lookup.call(null,map__504810__504812,"\uFDD0'tmid",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs504829__504844 = year__504824;
if(cljs.core.map_QMARK_.call(null,attrs504829__504844))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504829__504844))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504829__504844)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504830__504845 = tmid__504828;
if(cljs.core.map_QMARK_.call(null,attrs504830__504845))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504830__504845))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504830__504845)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504831__504846 = pos__504827;
if(cljs.core.map_QMARK_.call(null,attrs504831__504846))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504831__504846))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504831__504846)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504832__504847 = postgp__504823;
if(cljs.core.map_QMARK_.call(null,attrs504832__504847))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504832__504847))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504832__504847)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504833__504848 = postg__504820;
if(cljs.core.map_QMARK_.call(null,attrs504833__504848))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504833__504848))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504833__504848)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504834__504849 = posta__504817;
if(cljs.core.map_QMARK_.call(null,attrs504834__504849))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504834__504849))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504834__504849)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504835__504850 = postpts__504815;
if(cljs.core.map_QMARK_.call(null,attrs504835__504850))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504835__504850))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504835__504850)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504836__504851 = postpim__504814;
if(cljs.core.map_QMARK_.call(null,attrs504836__504851))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504836__504851))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504836__504851)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504837__504852 = postplusminus__504813;
if(cljs.core.map_QMARK_.call(null,attrs504837__504852))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504837__504852))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504837__504852)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504838__504853 = postppg__504819;
if(cljs.core.map_QMARK_.call(null,attrs504838__504853))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504838__504853))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504838__504853)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504839__504854 = postppa__504816;
if(cljs.core.map_QMARK_.call(null,attrs504839__504854))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504839__504854))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504839__504854)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504840__504855 = postshg__504821;
if(cljs.core.map_QMARK_.call(null,attrs504840__504855))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504840__504855))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504840__504855)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504841__504856 = postsha__504822;
if(cljs.core.map_QMARK_.call(null,attrs504841__504856))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504841__504856))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504841__504856)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504842__504857 = postgwg__504826;
if(cljs.core.map_QMARK_.call(null,attrs504842__504857))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504842__504857))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504842__504857)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504843__504858 = postsog__504825;
if(cljs.core.map_QMARK_.call(null,attrs504843__504858))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504843__504858))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504843__504858)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_shooting_stats = (function show_shooting_stats(stats){
return [cljs.core.str("<br />"),cljs.core.str("<div"),cljs.core.str(" class=\"scoring\""),cljs.core.str(">"),cljs.core.str("<h2>Scoring</h2>"),cljs.core.str("<h3>Regular Season</h3>"),cljs.core.str("<table"),cljs.core.str(" class=\"table\""),cljs.core.str(">"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>Pos</th><th>GP</th><th>G</th><th>A</th><th>PTS</th><th>PIMS</th><th>+/-</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>GWG</th><th>GTG</th><th>SOG</th></thead>"),cljs.core.str((function (){var attrs504883__504889 = cljs.core.map.call(null,cljs_intro.search.create_shooting_stats,stats);
if(cljs.core.map_QMARK_.call(null,attrs504883__504889))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504883__504889))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504883__504889)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("<h3>Post Season</h3>"),cljs.core.str("<table"),cljs.core.str(" class=\"table\""),cljs.core.str(">"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>Pos</th><th>GP</th><th>G</th><th>A</th><th>PTS</th><th>PIMS</th><th>+/-</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>GWG</th><th>SOG</th></thead>"),cljs.core.str((function (){var attrs504888__504890 = cljs.core.map.call(null,cljs_intro.search.create_playoff_shooting_stats,stats);
if(cljs.core.map_QMARK_.call(null,attrs504888__504890))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504888__504890))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504888__504890)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_goalie_stats = (function create_goalie_stats(p__504891){
var map__504937__504938 = p__504891;
var map__504937__504939 = ((cljs.core.seq_QMARK_.call(null,map__504937__504938))?cljs.core.apply.call(null,cljs.core.hash_map,map__504937__504938):map__504937__504938);
var postl__504940 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postl",null);
var w__504941 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'w",null);
var sa__504942 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'sa",null);
var postsho__504943 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postsho",null);
var postga__504944 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postga",null);
var eng__504945 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'eng",null);
var postgp__504946 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postgp",null);
var year__504947 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'year",null);
var ga__504948 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'ga",null);
var posteng__504949 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'posteng",null);
var postmin__504950 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postmin",null);
var l__504951 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'l",null);
var postw__504952 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postw",null);
var postsa__504953 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postsa",null);
var tmid__504954 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'tmid",null);
var postt__504955 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'postt",null);
var gp__504956 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'gp",null);
var tol__504957 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'tol",null);
var sho__504958 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'sho",null);
var min__504959 = cljs.core._lookup.call(null,map__504937__504939,"\uFDD0'min",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs504960__504971 = year__504947;
if(cljs.core.map_QMARK_.call(null,attrs504960__504971))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504960__504971))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504960__504971)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504961__504972 = tmid__504954;
if(cljs.core.map_QMARK_.call(null,attrs504961__504972))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504961__504972))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504961__504972)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504962__504973 = gp__504956;
if(cljs.core.map_QMARK_.call(null,attrs504962__504973))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504962__504973))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504962__504973)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504963__504974 = min__504959;
if(cljs.core.map_QMARK_.call(null,attrs504963__504974))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504963__504974))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504963__504974)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504964__504975 = w__504941;
if(cljs.core.map_QMARK_.call(null,attrs504964__504975))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504964__504975))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504964__504975)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504965__504976 = l__504951;
if(cljs.core.map_QMARK_.call(null,attrs504965__504976))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504965__504976))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504965__504976)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504966__504977 = tol__504957;
if(cljs.core.map_QMARK_.call(null,attrs504966__504977))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504966__504977))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504966__504977)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504967__504978 = eng__504945;
if(cljs.core.map_QMARK_.call(null,attrs504967__504978))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504967__504978))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504967__504978)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504968__504979 = sho__504958;
if(cljs.core.map_QMARK_.call(null,attrs504968__504979))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504968__504979))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504968__504979)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504969__504980 = ga__504948;
if(cljs.core.map_QMARK_.call(null,attrs504969__504980))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504969__504980))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504969__504980)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs504970__504981 = sa__504942;
if(cljs.core.map_QMARK_.call(null,attrs504970__504981))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs504970__504981))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs504970__504981)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.create_goalie_playoff_stats = (function create_goalie_playoff_stats(p__504982){
var map__505019__505020 = p__504982;
var map__505019__505021 = ((cljs.core.seq_QMARK_.call(null,map__505019__505020))?cljs.core.apply.call(null,cljs.core.hash_map,map__505019__505020):map__505019__505020);
var postl__505022 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postl",null);
var postsho__505023 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postsho",null);
var postga__505024 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postga",null);
var postgp__505025 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postgp",null);
var year__505026 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'year",null);
var posteng__505027 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'posteng",null);
var postmin__505028 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postmin",null);
var postw__505029 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postw",null);
var postsa__505030 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postsa",null);
var tmid__505031 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'tmid",null);
var postt__505032 = cljs.core._lookup.call(null,map__505019__505021,"\uFDD0'postt",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs505033__505044 = year__505026;
if(cljs.core.map_QMARK_.call(null,attrs505033__505044))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505033__505044))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505033__505044)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505034__505045 = tmid__505031;
if(cljs.core.map_QMARK_.call(null,attrs505034__505045))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505034__505045))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505034__505045)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505035__505046 = postgp__505025;
if(cljs.core.map_QMARK_.call(null,attrs505035__505046))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505035__505046))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505035__505046)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505036__505047 = postmin__505028;
if(cljs.core.map_QMARK_.call(null,attrs505036__505047))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505036__505047))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505036__505047)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505037__505048 = postw__505029;
if(cljs.core.map_QMARK_.call(null,attrs505037__505048))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505037__505048))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505037__505048)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505038__505049 = postl__505022;
if(cljs.core.map_QMARK_.call(null,attrs505038__505049))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505038__505049))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505038__505049)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505039__505050 = postt__505032;
if(cljs.core.map_QMARK_.call(null,attrs505039__505050))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505039__505050))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505039__505050)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505040__505051 = posteng__505027;
if(cljs.core.map_QMARK_.call(null,attrs505040__505051))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505040__505051))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505040__505051)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505041__505052 = postsho__505023;
if(cljs.core.map_QMARK_.call(null,attrs505041__505052))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505041__505052))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505041__505052)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505042__505053 = postga__505024;
if(cljs.core.map_QMARK_.call(null,attrs505042__505053))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505042__505053))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505042__505053)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs505043__505054 = postsa__505030;
if(cljs.core.map_QMARK_.call(null,attrs505043__505054))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505043__505054))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505043__505054)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_goalie_stats = (function show_goalie_stats(goalies){
return [cljs.core.str("<div"),cljs.core.str(" class=\"goalies\""),cljs.core.str(">"),cljs.core.str("<h3>Regular Season</h3>"),cljs.core.str("<table"),cljs.core.str(" class=\"table\""),cljs.core.str(">"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>GP</th><th>Min</th><th>W</th><th>L</th><th>TOL</th><th>ENG</th><th>SHO</th><th>GA</th><th>SA</th></thead>"),cljs.core.str((function (){var attrs505073__505081 = cljs.core.map.call(null,cljs_intro.search.create_goalie_stats,goalies);
if(cljs.core.map_QMARK_.call(null,attrs505073__505081))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505073__505081))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505073__505081)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("<br />"),cljs.core.str("<h3>Post Season</h3>"),cljs.core.str("<table"),cljs.core.str(" class=\"table\""),cljs.core.str(">"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>GP</th><th>Min</th><th>W</th><th>L</th><th>TOL</th><th>ENG</th><th>SHO</th><th>GA</th><th>SA</th></thead>"),cljs.core.str((function (){var attrs505080__505082 = cljs.core.map.call(null,cljs_intro.search.create_goalie_playoff_stats,goalies);
if(cljs.core.map_QMARK_.call(null,attrs505080__505082))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs505080__505082))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs505080__505082)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.show_player_demog = (function show_player_demog(p__505083){
var map__505093__505094 = p__505083;
var map__505093__505095 = ((cljs.core.seq_QMARK_.call(null,map__505093__505094))?cljs.core.apply.call(null,cljs.core.hash_map,map__505093__505094):map__505093__505094);
var birthyear__505096 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'birthyear",null);
var birthmon__505097 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'birthmon",null);
var birthday__505098 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'birthday",null);
var pos__505099 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'pos",null);
var lastname__505100 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'lastname",null);
var firstname__505101 = cljs.core._lookup.call(null,map__505093__505095,"\uFDD0'firstname",null);
return cljs_intro.search.create_player_demog.call(null,firstname__505101,lastname__505100,pos__505099);
});
cljs_intro.search.display_results = (function display_results(json){
var data__505105 = cljs.core.js__GT_clj.call(null,json.target.getResponseJson(),"\uFDD0'keywordize-keys",true);
var demog__505106 = (new cljs.core.Keyword("\uFDD0'demog")).call(null,data__505105);
var res_div__505107 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__505107);
return domina.append_BANG_.call(null,res_div__505107,[cljs.core.str(cljs_intro.search.show_player_demog.call(null,demog__505106)),cljs.core.str(((cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'pos")).call(null,demog__505106),"G"))?[cljs.core.str(cljs_intro.search.show_goalie_stats.call(null,(new cljs.core.Keyword("\uFDD0'goalie")).call(null,data__505105))),cljs.core.str(cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__505105)))].join(''):cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__505105))))].join(''));
});
cljs_intro.search.player_lookup = (function player_lookup(last_name){
return goog.net.XhrIo.send([cljs.core.str("http://localhost:8888/player/"),cljs.core.str(last_name)].join(''),cljs_intro.search.display_results);
});
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs_intro.search.player_lookup.call(null,domina.value.call(null,domina.by_id.call(null,"lname")));
}));
