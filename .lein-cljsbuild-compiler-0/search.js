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
cljs_intro.search.create_player_demog = (function create_player_demog(firstname,lastname,pos,birthday){
return [cljs.core.str("<div"),cljs.core.str(" class=\"demog\""),cljs.core.str(">"),cljs.core.str((function (){var attrs275261__275264 = [cljs.core.str(firstname),cljs.core.str(" "),cljs.core.str(lastname)].join('');
if(cljs.core.map_QMARK_.call(null,attrs275261__275264))
{return [cljs.core.str("<h2"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275261__275264))),cljs.core.str(">"),cljs.core.str("</h2>")].join('');
} else
{return [cljs.core.str("<h2>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275261__275264)),cljs.core.str("</h2>")].join('');
}
})()),cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs275262__275265 = [cljs.core.str("Postition: "),cljs.core.str(pos)].join('');
if(cljs.core.map_QMARK_.call(null,attrs275262__275265))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275262__275265))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275262__275265)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs275263__275266 = [cljs.core.str("Birthday: "),cljs.core.str(birthday)].join('');
if(cljs.core.map_QMARK_.call(null,attrs275263__275266))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275263__275266))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275263__275266)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_shooting_stats = (function create_shooting_stats(p__275267){
var map__275353__275354 = p__275267;
var map__275353__275355 = ((cljs.core.seq_QMARK_.call(null,map__275353__275354))?cljs.core.apply.call(null,cljs.core.hash_map,map__275353__275354):map__275353__275354);
var postplusminus__275356 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postplusminus",null);
var gwg__275357 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'gwg",null);
var postpim__275358 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postpim",null);
var postpts__275359 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postpts",null);
var gtg__275360 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'gtg",null);
var postppa__275361 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postppa",null);
var plusminus__275362 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'plusminus",null);
var posta__275363 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'posta",null);
var sha__275364 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'sha",null);
var pim__275365 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'pim",null);
var postppg__275366 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postppg",null);
var postg__275367 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postg",null);
var postshg__275368 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postshg",null);
var postsha__275369 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postsha",null);
var ppa__275370 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'ppa",null);
var sog__275371 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'sog",null);
var a__275372 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'a",null);
var postgp__275373 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postgp",null);
var ppg__275374 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'ppg",null);
var year__275375 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'year",null);
var g__275376 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'g",null);
var shg__275377 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'shg",null);
var postsog__275378 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postsog",null);
var postgwg__275379 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'postgwg",null);
var pos__275380 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'pos",null);
var tmid__275381 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'tmid",null);
var gp__275382 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'gp",null);
var pts__275383 = cljs.core._lookup.call(null,map__275353__275355,"\uFDD0'pts",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs275384__275411 = year__275375;
if(cljs.core.map_QMARK_.call(null,attrs275384__275411))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275384__275411))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275384__275411)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275385__275412 = tmid__275381;
if(cljs.core.map_QMARK_.call(null,attrs275385__275412))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275385__275412))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275385__275412)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275386__275413 = pos__275380;
if(cljs.core.map_QMARK_.call(null,attrs275386__275413))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275386__275413))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275386__275413)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275387__275414 = gp__275382;
if(cljs.core.map_QMARK_.call(null,attrs275387__275414))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275387__275414))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275387__275414)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275388__275415 = g__275376;
if(cljs.core.map_QMARK_.call(null,attrs275388__275415))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275388__275415))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275388__275415)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275389__275416 = a__275372;
if(cljs.core.map_QMARK_.call(null,attrs275389__275416))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275389__275416))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275389__275416)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275390__275417 = pts__275383;
if(cljs.core.map_QMARK_.call(null,attrs275390__275417))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275390__275417))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275390__275417)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275391__275418 = pim__275365;
if(cljs.core.map_QMARK_.call(null,attrs275391__275418))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275391__275418))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275391__275418)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275392__275419 = plusminus__275362;
if(cljs.core.map_QMARK_.call(null,attrs275392__275419))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275392__275419))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275392__275419)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275393__275420 = ppg__275374;
if(cljs.core.map_QMARK_.call(null,attrs275393__275420))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275393__275420))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275393__275420)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275394__275421 = ppa__275370;
if(cljs.core.map_QMARK_.call(null,attrs275394__275421))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275394__275421))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275394__275421)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275395__275422 = shg__275377;
if(cljs.core.map_QMARK_.call(null,attrs275395__275422))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275395__275422))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275395__275422)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275396__275423 = sha__275364;
if(cljs.core.map_QMARK_.call(null,attrs275396__275423))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275396__275423))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275396__275423)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275397__275424 = gwg__275357;
if(cljs.core.map_QMARK_.call(null,attrs275397__275424))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275397__275424))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275397__275424)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275398__275425 = gtg__275360;
if(cljs.core.map_QMARK_.call(null,attrs275398__275425))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275398__275425))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275398__275425)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275399__275426 = sog__275371;
if(cljs.core.map_QMARK_.call(null,attrs275399__275426))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275399__275426))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275399__275426)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275400__275427 = postgp__275373;
if(cljs.core.map_QMARK_.call(null,attrs275400__275427))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275400__275427))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275400__275427)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275401__275428 = postg__275367;
if(cljs.core.map_QMARK_.call(null,attrs275401__275428))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275401__275428))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275401__275428)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275402__275429 = posta__275363;
if(cljs.core.map_QMARK_.call(null,attrs275402__275429))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275402__275429))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275402__275429)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275403__275430 = postpts__275359;
if(cljs.core.map_QMARK_.call(null,attrs275403__275430))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275403__275430))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275403__275430)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275404__275431 = postplusminus__275356;
if(cljs.core.map_QMARK_.call(null,attrs275404__275431))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275404__275431))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275404__275431)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275405__275432 = postppg__275366;
if(cljs.core.map_QMARK_.call(null,attrs275405__275432))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275405__275432))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275405__275432)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275406__275433 = postppa__275361;
if(cljs.core.map_QMARK_.call(null,attrs275406__275433))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275406__275433))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275406__275433)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275407__275434 = postshg__275368;
if(cljs.core.map_QMARK_.call(null,attrs275407__275434))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275407__275434))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275407__275434)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275408__275435 = postsha__275369;
if(cljs.core.map_QMARK_.call(null,attrs275408__275435))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275408__275435))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275408__275435)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275409__275436 = postgwg__275379;
if(cljs.core.map_QMARK_.call(null,attrs275409__275436))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275409__275436))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275409__275436)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275410__275437 = postsog__275378;
if(cljs.core.map_QMARK_.call(null,attrs275410__275437))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275410__275437))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275410__275437)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_shooting_stats = (function show_shooting_stats(stats){
return [cljs.core.str("<div"),cljs.core.str(" class=\"scoring\""),cljs.core.str(">"),cljs.core.str("<table"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<Caption>Scoring</Caption>"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>Pos</th><th>GP</th><th>G</th><th>A</th><th>PTS</th><th>PIMS</th><th>+/-</th><th>PPG</th><th>PPA</th><th>SHG</th><th>SHA</th><th>GWG</th><th>GTG</th><th>SOG</th><th>Post G</th><th>Post A</th><th>Post PTS</th><th>Post PIMS</th><th>Post +/-</th><th>Post PPG</th><th>Post PPA</th><th>Post SHG</th><th>Post SHA</th><th>Post GWG</th><th>Post GTG</th><th>Post SOG</th></thead>"),cljs.core.str((function (){var attrs275448__275449 = cljs.core.map.call(null,cljs_intro.search.create_shooting_stats,stats);
if(cljs.core.map_QMARK_.call(null,attrs275448__275449))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275448__275449))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275448__275449)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.create_goalie_stats = (function create_goalie_stats(p__275450){
var map__275514__275515 = p__275450;
var map__275514__275516 = ((cljs.core.seq_QMARK_.call(null,map__275514__275515))?cljs.core.apply.call(null,cljs.core.hash_map,map__275514__275515):map__275514__275515);
var postl__275517 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postl",null);
var w__275518 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'w",null);
var sa__275519 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'sa",null);
var postsho__275520 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postsho",null);
var postga__275521 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postga",null);
var eng__275522 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'eng",null);
var postgp__275523 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postgp",null);
var year__275524 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'year",null);
var ga__275525 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'ga",null);
var posteng__275526 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'posteng",null);
var postmin__275527 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postmin",null);
var l__275528 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'l",null);
var postw__275529 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postw",null);
var postsa__275530 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postsa",null);
var tmid__275531 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'tmid",null);
var postt__275532 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'postt",null);
var gp__275533 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'gp",null);
var tol__275534 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'tol",null);
var sho__275535 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'sho",null);
var min__275536 = cljs.core._lookup.call(null,map__275514__275516,"\uFDD0'min",null);
return [cljs.core.str("<tr"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs275537__275557 = year__275524;
if(cljs.core.map_QMARK_.call(null,attrs275537__275557))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275537__275557))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275537__275557)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275538__275558 = tmid__275531;
if(cljs.core.map_QMARK_.call(null,attrs275538__275558))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275538__275558))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275538__275558)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275539__275559 = gp__275533;
if(cljs.core.map_QMARK_.call(null,attrs275539__275559))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275539__275559))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275539__275559)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275540__275560 = min__275536;
if(cljs.core.map_QMARK_.call(null,attrs275540__275560))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275540__275560))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275540__275560)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275541__275561 = w__275518;
if(cljs.core.map_QMARK_.call(null,attrs275541__275561))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275541__275561))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275541__275561)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275542__275562 = l__275528;
if(cljs.core.map_QMARK_.call(null,attrs275542__275562))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275542__275562))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275542__275562)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275543__275563 = tol__275534;
if(cljs.core.map_QMARK_.call(null,attrs275543__275563))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275543__275563))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275543__275563)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275544__275564 = eng__275522;
if(cljs.core.map_QMARK_.call(null,attrs275544__275564))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275544__275564))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275544__275564)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275545__275565 = sho__275535;
if(cljs.core.map_QMARK_.call(null,attrs275545__275565))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275545__275565))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275545__275565)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275546__275566 = ga__275525;
if(cljs.core.map_QMARK_.call(null,attrs275546__275566))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275546__275566))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275546__275566)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275547__275567 = sa__275519;
if(cljs.core.map_QMARK_.call(null,attrs275547__275567))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275547__275567))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275547__275567)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275548__275568 = postgp__275523;
if(cljs.core.map_QMARK_.call(null,attrs275548__275568))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275548__275568))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275548__275568)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275549__275569 = postmin__275527;
if(cljs.core.map_QMARK_.call(null,attrs275549__275569))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275549__275569))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275549__275569)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275550__275570 = postw__275529;
if(cljs.core.map_QMARK_.call(null,attrs275550__275570))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275550__275570))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275550__275570)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275551__275571 = postl__275517;
if(cljs.core.map_QMARK_.call(null,attrs275551__275571))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275551__275571))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275551__275571)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275552__275572 = postt__275532;
if(cljs.core.map_QMARK_.call(null,attrs275552__275572))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275552__275572))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275552__275572)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275553__275573 = posteng__275526;
if(cljs.core.map_QMARK_.call(null,attrs275553__275573))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275553__275573))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275553__275573)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275554__275574 = postsho__275520;
if(cljs.core.map_QMARK_.call(null,attrs275554__275574))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275554__275574))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275554__275574)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275555__275575 = postga__275521;
if(cljs.core.map_QMARK_.call(null,attrs275555__275575))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275555__275575))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275555__275575)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str((function (){var attrs275556__275576 = postsa__275530;
if(cljs.core.map_QMARK_.call(null,attrs275556__275576))
{return [cljs.core.str("<td"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275556__275576))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<td>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275556__275576)),cljs.core.str("</td>")].join('');
}
})()),cljs.core.str("</tr>")].join('');
});
cljs_intro.search.show_goalie_stats = (function show_goalie_stats(goalies){
return [cljs.core.str("<div"),cljs.core.str(" class=\"goalies\""),cljs.core.str(">"),cljs.core.str("<table"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<Caption>Goalies</Caption>"),cljs.core.str("<thead><th>Season</th><th>Teamid</th><th>GP</th><th>Min</th><th>W</th><th>L</th><th>TOL</th><th>ENG</th><th>SHO</th><th>GA</th><th>SA</th><th>Post GP</th><th>Post Min</th><th>Post W</th><th>Post L</th><th>Post TOL</th><th>Post ENG</th><th>Post SHO</th><th>Post GA</th><th>Post SA</th></thead>"),cljs.core.str((function (){var attrs275587__275588 = cljs.core.map.call(null,cljs_intro.search.create_goalie_stats,goalies);
if(cljs.core.map_QMARK_.call(null,attrs275587__275588))
{return [cljs.core.str("<tbody"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs275587__275588))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<tbody>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs275587__275588)),cljs.core.str("</tbody>")].join('');
}
})()),cljs.core.str("</table>"),cljs.core.str("</div>")].join('');
});
cljs_intro.search.show_player_demog = (function show_player_demog(p__275589){
var map__275599__275600 = p__275589;
var map__275599__275601 = ((cljs.core.seq_QMARK_.call(null,map__275599__275600))?cljs.core.apply.call(null,cljs.core.hash_map,map__275599__275600):map__275599__275600);
var birthyear__275602 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'birthyear",null);
var birthmon__275603 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'birthmon",null);
var birthday__275604 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'birthday",null);
var pos__275605 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'pos",null);
var lastname__275606 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'lastname",null);
var firstname__275607 = cljs.core._lookup.call(null,map__275599__275601,"\uFDD0'firstname",null);
return cljs_intro.search.create_player_demog.call(null,firstname__275607,lastname__275606,pos__275605,[cljs.core.str(birthmon__275603),cljs.core.str("/"),cljs.core.str(birthday__275604),cljs.core.str("/"),cljs.core.str(birthyear__275602)].join(''));
});
cljs_intro.search.display_results = (function display_results(json){
var data__275611 = cljs.core.js__GT_clj.call(null,json.target.getResponseJson(),"\uFDD0'keywordize-keys",true);
var demog__275612 = (new cljs.core.Keyword("\uFDD0'demog")).call(null,data__275611);
var res_div__275613 = domina.xpath.xpath.call(null,"//div[@id='results']");
domina.destroy_children_BANG_.call(null,res_div__275613);
return domina.append_BANG_.call(null,res_div__275613,[cljs.core.str(cljs_intro.search.show_player_demog.call(null,demog__275612)),cljs.core.str(((cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'pos")).call(null,demog__275612),"G"))?[cljs.core.str(cljs_intro.search.show_goalie_stats.call(null,(new cljs.core.Keyword("\uFDD0'goalie")).call(null,data__275611))),cljs.core.str(cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__275611)))].join(''):cljs_intro.search.show_shooting_stats.call(null,(new cljs.core.Keyword("\uFDD0'scoring")).call(null,data__275611))))].join(''));
});
cljs_intro.search.player_lookup = (function player_lookup(last_name){
return goog.net.XhrIo.send([cljs.core.str("http://localhost:8888/player/"),cljs.core.str(last_name)].join(''),cljs_intro.search.display_results);
});
clojure.browser.event.listen.call(null,cljs_intro.search.search_button,"click",(function (){
return cljs_intro.search.player_lookup.call(null,domina.value.call(null,domina.by_id.call(null,"lname")));
}));
