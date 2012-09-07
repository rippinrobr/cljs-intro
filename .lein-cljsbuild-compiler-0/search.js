goog.provide('cljs_intro.search');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('hiccups.runtime');
goog.require('domina.xpath');
goog.require('domina');
/**
* Reference to the search-button DOM object
*/
cljs_intro.search.search_button = domina.by_id.call(null,"search-btn");
cljs_intro.search.create_player_demog = (function create_player_demog(firstname,lastname,pos,birthday){
return [cljs.core.str("<div"),cljs.core.str(" class=\"demog\""),cljs.core.str(">"),cljs.core.str((function (){var attrs222373__222376 = [cljs.core.str(firstname),cljs.core.str(" "),cljs.core.str(lastname)].join('');
if(cljs.core.map_QMARK_.call(null,attrs222373__222376))
{return [cljs.core.str("<h2"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222373__222376))),cljs.core.str(">"),cljs.core.str("</h2>")].join('');
} else
{return [cljs.core.str("<h2>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222373__222376)),cljs.core.str("</h2>")].join('');
}
})()),cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs222374__222377 = [cljs.core.str("Postition: "),cljs.core.str(pos)].join('');
if(cljs.core.map_QMARK_.call(null,attrs222374__222377))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222374__222377))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222374__222377)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs222375__222378 = [cljs.core.str("Birthday: "),cljs.core.str(birthday)].join('');
if(cljs.core.map_QMARK_.call(null,attrs222375__222378))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222375__222378))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222375__222378)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_shooting_stats = (function create_shooting_stats(p__222379){
var map__222465__222466 = p__222379;
var map__222465__222467 = ((cljs.core.seq_QMARK_.call(null,map__222465__222466))?cljs.core.apply.call(null,cljs.core.hash_map,map__222465__222466):map__222465__222466);
var postplusminus__222468 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postplusminus",null);
var gwg__222469 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'gwg",null);
var postpim__222470 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postpim",null);
var postpts__222471 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postpts",null);
var gtg__222472 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'gtg",null);
var postppa__222473 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postppa",null);
var plusminus__222474 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'plusminus",null);
var posta__222475 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'posta",null);
var sha__222476 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'sha",null);
var pim__222477 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'pim",null);
var postppg__222478 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postppg",null);
var postg__222479 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postg",null);
var postshg__222480 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postshg",null);
var postsha__222481 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postsha",null);
var ppa__222482 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'ppa",null);
var sog__222483 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'sog",null);
var a__222484 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'a",null);
var postgp__222485 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postgp",null);
var ppg__222486 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'ppg",null);
var year__222487 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'year",null);
var g__222488 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'g",null);
var shg__222489 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'shg",null);
var postsog__222490 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postsog",null);
var postgwg__222491 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'postgwg",null);
var pos__222492 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'pos",null);
var tmid__222493 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'tmid",null);
var gp__222494 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'gp",null);
var pts__222495 = cljs.core._lookup.call(null,map__222465__222467,"\uFDD0'pts",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs222496__222523 = year__222487;
if(cljs.core.map_QMARK_.call(null,attrs222496__222523))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222496__222523))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222496__222523)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222497__222524 = tmid__222493;
if(cljs.core.map_QMARK_.call(null,attrs222497__222524))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222497__222524))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222497__222524)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222498__222525 = pos__222492;
if(cljs.core.map_QMARK_.call(null,attrs222498__222525))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222498__222525))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222498__222525)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222499__222526 = gp__222494;
if(cljs.core.map_QMARK_.call(null,attrs222499__222526))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222499__222526))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222499__222526)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222500__222527 = g__222488;
if(cljs.core.map_QMARK_.call(null,attrs222500__222527))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222500__222527))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222500__222527)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222501__222528 = a__222484;
if(cljs.core.map_QMARK_.call(null,attrs222501__222528))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222501__222528))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222501__222528)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222502__222529 = pts__222495;
if(cljs.core.map_QMARK_.call(null,attrs222502__222529))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222502__222529))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222502__222529)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222503__222530 = pim__222477;
if(cljs.core.map_QMARK_.call(null,attrs222503__222530))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222503__222530))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222503__222530)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222504__222531 = plusminus__222474;
if(cljs.core.map_QMARK_.call(null,attrs222504__222531))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222504__222531))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222504__222531)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222505__222532 = ppg__222486;
if(cljs.core.map_QMARK_.call(null,attrs222505__222532))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222505__222532))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222505__222532)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222506__222533 = ppa__222482;
if(cljs.core.map_QMARK_.call(null,attrs222506__222533))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222506__222533))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222506__222533)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222507__222534 = shg__222489;
if(cljs.core.map_QMARK_.call(null,attrs222507__222534))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222507__222534))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222507__222534)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222508__222535 = sha__222476;
if(cljs.core.map_QMARK_.call(null,attrs222508__222535))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222508__222535))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222508__222535)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222509__222536 = gwg__222469;
if(cljs.core.map_QMARK_.call(null,attrs222509__222536))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222509__222536))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222509__222536)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222510__222537 = gtg__222472;
if(cljs.core.map_QMARK_.call(null,attrs222510__222537))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222510__222537))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222510__222537)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222511__222538 = sog__222483;
if(cljs.core.map_QMARK_.call(null,attrs222511__222538))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222511__222538))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222511__222538)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222512__222539 = postgp__222485;
if(cljs.core.map_QMARK_.call(null,attrs222512__222539))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222512__222539))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222512__222539)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222513__222540 = postg__222479;
if(cljs.core.map_QMARK_.call(null,attrs222513__222540))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222513__222540))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222513__222540)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222514__222541 = posta__222475;
if(cljs.core.map_QMARK_.call(null,attrs222514__222541))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222514__222541))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222514__222541)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222515__222542 = postpts__222471;
if(cljs.core.map_QMARK_.call(null,attrs222515__222542))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222515__222542))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222515__222542)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222516__222543 = postplusminus__222468;
if(cljs.core.map_QMARK_.call(null,attrs222516__222543))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222516__222543))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222516__222543)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222517__222544 = postppg__222478;
if(cljs.core.map_QMARK_.call(null,attrs222517__222544))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222517__222544))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222517__222544)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222518__222545 = postppa__222473;
if(cljs.core.map_QMARK_.call(null,attrs222518__222545))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222518__222545))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222518__222545)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222519__222546 = postshg__222480;
if(cljs.core.map_QMARK_.call(null,attrs222519__222546))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222519__222546))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222519__222546)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222520__222547 = postsha__222481;
if(cljs.core.map_QMARK_.call(null,attrs222520__222547))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222520__222547))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222520__222547)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222521__222548 = postgwg__222491;
if(cljs.core.map_QMARK_.call(null,attrs222521__222548))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222521__222548))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222521__222548)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222522__222549 = postsog__222490;
if(cljs.core.map_QMARK_.call(null,attrs222522__222549))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222522__222549))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222522__222549)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_shooting_stats = (function show_shooting_stats(stats){
return [cljs.core.str("<div"),cljs.core.str(" class=\"scoring\""),cljs.core.str(">"),cljs.core.str("<table"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<Caption>Scoring</Caption>"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>Pos</th><th>GP</th><th>G</th><th>A</th><th>PTS</th><th>PIMS</th><th>+/-</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>GWG</th><th>GTG</th><th>SOG</th><th>Post G</th><th>Post A</th><th>Post PTS</th><th>Post PIMS</th><th>Post +/-</th><th>Post PPG</th><th>Post PPA</th><th>Post SHG</th><th>Post SHA</th><th>Post GWG</th><th>Post GTG</th><th>Post SOG</th></thead>"),cljs.core.str((function (){var attrs222560__222561 = cljs.core.map.call(null,cljs_intro.search.create_shooting_stats,stats);
if(cljs.core.map_QMARK_.call(null,attrs222560__222561))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222560__222561))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222560__222561)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_goalie_stats = (function create_goalie_stats(p__222562){
var map__222626__222627 = p__222562;
var map__222626__222628 = ((cljs.core.seq_QMARK_.call(null,map__222626__222627))?cljs.core.apply.call(null,cljs.core.hash_map,map__222626__222627):map__222626__222627);
var postl__222629 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postl",null);
var w__222630 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'w",null);
var sa__222631 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'sa",null);
var postsho__222632 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postsho",null);
var postga__222633 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postga",null);
var eng__222634 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'eng",null);
var postgp__222635 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postgp",null);
var year__222636 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'year",null);
var ga__222637 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'ga",null);
var posteng__222638 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'posteng",null);
var postmin__222639 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postmin",null);
var l__222640 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'l",null);
var postw__222641 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postw",null);
var postsa__222642 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postsa",null);
var tmid__222643 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'tmid",null);
var postt__222644 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'postt",null);
var gp__222645 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'gp",null);
var tol__222646 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'tol",null);
var sho__222647 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'sho",null);
var min__222648 = cljs.core._lookup.call(null,map__222626__222628,"\uFDD0'min",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs222649__222669 = year__222636;
if(cljs.core.map_QMARK_.call(null,attrs222649__222669))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222649__222669))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222649__222669)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222650__222670 = tmid__222643;
if(cljs.core.map_QMARK_.call(null,attrs222650__222670))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222650__222670))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222650__222670)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222651__222671 = gp__222645;
if(cljs.core.map_QMARK_.call(null,attrs222651__222671))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222651__222671))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222651__222671)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222652__222672 = min__222648;
if(cljs.core.map_QMARK_.call(null,attrs222652__222672))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222652__222672))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222652__222672)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222653__222673 = w__222630;
if(cljs.core.map_QMARK_.call(null,attrs222653__222673))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222653__222673))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222653__222673)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222654__222674 = l__222640;
if(cljs.core.map_QMARK_.call(null,attrs222654__222674))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222654__222674))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222654__222674)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222655__222675 = tol__222646;
if(cljs.core.map_QMARK_.call(null,attrs222655__222675))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222655__222675))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222655__222675)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222656__222676 = eng__222634;
if(cljs.core.map_QMARK_.call(null,attrs222656__222676))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222656__222676))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222656__222676)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222657__222677 = sho__222647;
if(cljs.core.map_QMARK_.call(null,attrs222657__222677))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222657__222677))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222657__222677)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222658__222678 = ga__222637;
if(cljs.core.map_QMARK_.call(null,attrs222658__222678))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222658__222678))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222658__222678)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222659__222679 = sa__222631;
if(cljs.core.map_QMARK_.call(null,attrs222659__222679))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222659__222679))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222659__222679)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222660__222680 = postgp__222635;
if(cljs.core.map_QMARK_.call(null,attrs222660__222680))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222660__222680))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222660__222680)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222661__222681 = postmin__222639;
if(cljs.core.map_QMARK_.call(null,attrs222661__222681))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222661__222681))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222661__222681)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222662__222682 = postw__222641;
if(cljs.core.map_QMARK_.call(null,attrs222662__222682))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222662__222682))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222662__222682)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222663__222683 = postl__222629;
if(cljs.core.map_QMARK_.call(null,attrs222663__222683))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222663__222683))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222663__222683)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222664__222684 = postt__222644;
if(cljs.core.map_QMARK_.call(null,attrs222664__222684))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222664__222684))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222664__222684)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222665__222685 = posteng__222638;
if(cljs.core.map_QMARK_.call(null,attrs222665__222685))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222665__222685))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222665__222685)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222666__222686 = postsho__222632;
if(cljs.core.map_QMARK_.call(null,attrs222666__222686))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222666__222686))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222666__222686)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222667__222687 = postga__222633;
if(cljs.core.map_QMARK_.call(null,attrs222667__222687))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222667__222687))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222667__222687)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs222668__222688 = postsa__222642;
if(cljs.core.map_QMARK_.call(null,attrs222668__222688))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222668__222688))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222668__222688)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_goalie_stats = (function show_goalie_stats(goalies){
return [cljs.core.str("<div"),cljs.core.str(" class=\"goalies\""),cljs.core.str(">"),cljs.core.str("<table"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<Caption>Goalies</Caption>"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>GP</th><th>Min</th><th>W</th><th>L</th><th>TOL</th><th>ENG</th><th>SHO</th><th>GA</th><th>SA</th><th>Post GP</th><th>Post Min</th><th>Post W</th><th>Post L</th><th>Post TOL</th><th>Post ENG</th><th>Post SHO</th><th>Post GA</th><th>Post SA</th></thead>"),cljs.core.str((function (){var attrs222699__222700 = cljs.core.map.call(null,cljs_intro.search.create_goalie_stats,goalies);
if(cljs.core.map_QMARK_.call(null,attrs222699__222700))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs222699__222700))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs222699__222700)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.show_player_demog = (function show_player_demog(p__222701){
var map__222711__222712 = p__222701;
var map__222711__222713 = ((cljs.core.seq_QMARK_.call(null,map__222711__222712))?cljs.core.apply.call(null,cljs.core.hash_map,map__222711__222712):map__222711__222712);
var birthyear__222714 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'birthyear",null);
var birthmon__222715 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'birthmon",null);
var birthday__222716 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'birthday",null);
var pos__222717 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'pos",null);
var lastname__222718 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'lastname",null);
var firstname__222719 = cljs.core._lookup.call(null,map__222711__222713,"\uFDD0'firstname",null);
return cljs_intro.search.create_player_demog.call(null,firstname__222719,lastname__222718,pos__222717,[cljs.core.str(birthmon__222715),cljs.core.str("/"),cljs.core.str(birthday__222716),cljs.core.str("/"),cljs.core.str(birthyear__222714)].join(''));
});
cljs_intro.search.display_results = (function display_results(json){
var data__222722 = cljs.core.js__GT_clj.call(null,json.target.getResponseJson(),"\uFDD0'keywordize-keys",true);
var demog__222723 = (new cljs.core.Keyword("\uFDD0'demog")).call(null,data__222722);
console.log([cljs.core.str("'"),cljs.core.str((new cljs.core.Keyword("\uFDD0'pos")).call(null,demog__222723)),cljs.core.str("' equal G? => "),cljs.core.str(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'pos")).call(null,demog__222723),"G"))].join(''));
return domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@id='results']"),[cljs.core.str(cljs_intro.search.show_player_demog.call(null,demog__222723)),cljs.core.str(((cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'pos")).call(null,demog__222723),"G"))?[cljs.core.str(cljs_intro.search.show_goalie_stats.call(null,(new cljs.core.Keyword("\uFDD0'goalie")).call(null,data__222722))),cljs.core.str(cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__222722)))].join(''):cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__222722))))].join(''));
});
cljs_intro.search.player_lookup = (function player_lookup(last_name){
return goog.net.XhrIo.send([cljs.core.str("http://localhost:8888/player/"),cljs.core.str(last_name)].join(''),cljs_intro.search.display_results);
});
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs_intro.search.player_lookup.call(null,domina.value.call(null,domina.by_id.call(null,"lname")));
}));
